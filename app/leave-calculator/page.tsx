// app/leave-calculator/page.tsx
"use client";

import { useMemo, useState } from "react";

/** ===================== Types ===================== */
type LeaveType = "EL" | "CL" | "SL";
type Rounding = "none" | "nearest" | "ceil";

/** ===================== Utils ===================== */
const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

const clamp = (n: number, lo: number, hi: number) => Math.min(Math.max(n, lo), hi);
const daysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate();

function parseISO(dateStr: string): Date {
  const d = new Date(dateStr);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}
function fmtISO(d: Date) {
  return d.toISOString().slice(0, 10);
}
function isWeekend(d: Date, offSat: boolean, offSun: boolean) {
  const w = d.getDay();
  return (offSat && w === 6) || (offSun && w === 0);
}
function isHoliday(d: Date, holidaysSet: Set<string>) {
  return holidaysSet.has(fmtISO(d));
}

/** Count chargeable leave days between start..end (inclusive) */
function countChargeableDays(
  start: Date,
  end: Date,
  opts: {
    sandwich: boolean;
    offSat: boolean;
    offSun: boolean;
    holidaysSet: Set<string>;
  }
) {
  if (end < start) return 0;
  let count = 0;

  if (opts.sandwich) {
    // Everything counts (including weekends/holidays)
    count = Math.floor((end.getTime() - start.getTime()) / 86400000) + 1;
  } else {
    // Exclude weekends & holidays
    for (
      let d = new Date(start.getFullYear(), start.getMonth(), start.getDate());
      d <= end;
      d.setDate(d.getDate() + 1)
    ) {
      if (isWeekend(d, opts.offSat, opts.offSun)) continue;
      if (isHoliday(d, opts.holidaysSet)) continue;
      count++;
    }
  }
  return Math.max(0, count);
}

/** Months between two dates intersected with FY; prorate by days worked in partial months */
function accruedELWithinFY(
  fyStart: Date,
  fyEnd: Date,
  doj: Date,
  dol: Date | null,
  accrualPerMonth: number
) {
  const periodStart = doj > fyStart ? doj : fyStart;
  const periodEnd = dol && dol < fyEnd ? dol : fyEnd;

  if (periodEnd < periodStart) return 0;

  let sum = 0;
  // iterate months from FY start..end
  const cursor = new Date(fyStart.getFullYear(), fyStart.getMonth(), 1);
  while (cursor <= fyEnd) {
    const ymStart = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const ymEnd = new Date(cursor.getFullYear(), cursor.getMonth(), daysInMonth(cursor.getFullYear(), cursor.getMonth()));

    // intersection with employment period
    const s = ymStart < periodStart ? periodStart : ymStart;
    const e = ymEnd > periodEnd ? periodEnd : ymEnd;

    if (e >= s) {
      const dim = daysInMonth(cursor.getFullYear(), cursor.getMonth());
      const workedDays = (e.getTime() - s.getTime()) / 86400000 + 1;
      const prorata = workedDays / dim;
      sum += accrualPerMonth * prorata;
    }

    cursor.setMonth(cursor.getMonth() + 1);
    if (cursor > fyEnd) break;
  }
  return sum;
}

/** Pro-rata (linear) for CL/SL by actual days employed in FY */
function prorataAnnual(daysWorkedInFY: number, daysInFY: number, annualEntitlement: number) {
  if (daysInFY <= 0) return 0;
  return (annualEntitlement * Math.max(0, Math.min(daysWorkedInFY, daysInFY))) / daysInFY;
}

function daysOverlap(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date) {
  const s = aStart > bStart ? aStart : bStart;
  const e = aEnd < bEnd ? aEnd : bEnd;
  if (e < s) return 0;
  return Math.floor((e.getTime() - s.getTime()) / 86400000) + 1;
}

function roundBy(v: number, mode: Rounding) {
  switch (mode) {
    case "nearest": return Math.round(v);
    case "ceil": return Math.ceil(v);
    default: return v;
  }
}

/** ===================== Component ===================== */
export default function LeaveCalculatorPage() {
  /** ===== Policy (static knobs) ===== */
  const [fyStartMonth, setFyStartMonth] = useState<number>(3); // 0=Jan..11=Dec; default 3 -> April
  const [elAccrualPerMonth, setElAccrualPerMonth] = useState<number>(1.5); // EL days per month
  const [clPerYear, setClPerYear] = useState<number>(6);
  const [slPerYear, setSlPerYear] = useState<number>(6);

  const [sandwichRule, setSandwichRule] = useState<boolean>(false);
  const [weeklyOffSat, setWeeklyOffSat] = useState<boolean>(true);
  const [weeklyOffSun, setWeeklyOffSun] = useState<boolean>(true);

  const [carryELCap, setCarryELCap] = useState<number>(45); // max EL carry forward
  const [carryCL, setCarryCL] = useState<boolean>(false);
  const [carrySL, setCarrySL] = useState<boolean>(false);

  const [encashEL, setEncashEL] = useState<boolean>(true);
  const [rounding, setRounding] = useState<Rounding>("nearest");

  /** ===== Employee inputs ===== */
  const today = new Date();
  const defaultFYYear = today.getMonth() >= fyStartMonth ? today.getFullYear() : today.getFullYear() - 1;
  const [fyYear, setFyYear] = useState<number>(defaultFYYear); // FY start year (e.g., 2025 for 2025-04-01..2026-03-31)

  const [doj, setDoj] = useState<string>(fmtISO(new Date(today.getFullYear(), 3, 1))); // 1-Apr
  const [dol, setDol] = useState<string>(""); // optional
  const [basicDA, setBasicDA] = useState<number>(30000);

  const [openingEL, setOpeningEL] = useState<number>(0);
  const [openingCL, setOpeningCL] = useState<number>(0);
  const [openingSL, setOpeningSL] = useState<number>(0);

  const [usedEL, setUsedEL] = useState<number>(0);
  const [usedCL, setUsedCL] = useState<number>(0);
  const [usedSL, setUsedSL] = useState<number>(0);

  /** ===== Holidays ===== */
  const [holidaysText, setHolidaysText] = useState<string>(""); // one YYYY-MM-DD per line

  /** ===== Request (single span) ===== */
  const [reqType, setReqType] = useState<LeaveType>("EL");
  const [reqStart, setReqStart] = useState<string>(fmtISO(today));
  const [reqEnd, setReqEnd] = useState<string>(fmtISO(today));
  const [halfStart, setHalfStart] = useState<boolean>(false);
  const [halfEnd, setHalfEnd] = useState<boolean>(false);

  /** ===== Derived FY window ===== */
  const fyStart = useMemo(() => new Date(fyYear, fyStartMonth, 1), [fyYear, fyStartMonth]);
  const fyEnd = useMemo(() => new Date(fyYear + 1, fyStartMonth, 0), [fyYear, fyStartMonth]); // last day of prev month next year

  /** ===== Holidays set ===== */
  const holidaysSet = useMemo(() => {
    const s = new Set<string>();
    holidaysText
      .split(/[\n,]+/)
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((d) => {
        try { s.add(fmtISO(parseISO(d))); } catch {}
      });
    return s;
  }, [holidaysText]);

  /** ===== Employment overlap with FY ===== */
  const dojDate = useMemo(() => parseISO(doj), [doj]);
  const dolDate = useMemo(() => (dol ? parseISO(dol) : null), [dol]);

  const daysInThisFY = useMemo(() => daysOverlap(fyStart, fyEnd, fyStart, fyEnd), [fyStart, fyEnd]);
  const daysEmployedInFY = useMemo(() => daysOverlap(fyStart, fyEnd, dojDate, dolDate ?? fyEnd), [fyStart, fyEnd, dojDate, dolDate]);

  /** ===== Accruals ===== */
  const accruedEL = useMemo(
    () => accruedELWithinFY(fyStart, fyEnd, dojDate, dolDate, elAccrualPerMonth),
    [fyStart, fyEnd, dojDate, dolDate, elAccrualPerMonth]
  );
  const accruedCL = useMemo(
    () => prorataAnnual(daysEmployedInFY, daysInThisFY, clPerYear),
    [daysEmployedInFY, daysInThisFY, clPerYear]
  );
  const accruedSL = useMemo(
    () => prorataAnnual(daysEmployedInFY, daysInThisFY, slPerYear),
    [daysEmployedInFY, daysInThisFY, slPerYear]
  );

  /** ===== Balances (to date) ===== */
  const availEL = useMemo(() => Math.max(0, openingEL + accruedEL - usedEL), [openingEL, accruedEL, usedEL]);
  const availCL = useMemo(() => Math.max(0, openingCL + accruedCL - usedCL), [openingCL, accruedCL, usedCL]);
  const availSL = useMemo(() => Math.max(0, openingSL + accruedSL - usedSL), [openingSL, accruedSL, usedSL]);

  /** ===== Request chargeable days ===== */
  const chargeableDays = useMemo(() => {
    const s = parseISO(reqStart);
    const e = parseISO(reqEnd);
    let days = countChargeableDays(s, e, {
      sandwich: sandwichRule,
      offSat: weeklyOffSat,
      offSun: weeklyOffSun,
      holidaysSet,
    });
    if (days <= 0) return 0;
    // Half-day handling
    if (halfStart) days -= 0.5;
    if (halfEnd && fmtISO(s) !== fmtISO(e)) days -= 0.5; // if single-day & both halves ticked, it becomes 0 (not allowed) so treat separately:
    if (halfEnd && fmtISO(s) === fmtISO(e) && !halfStart) days -= 0.5;
    return Math.max(0, days);
  }, [reqStart, reqEnd, halfStart, halfEnd, sandwichRule, weeklyOffSat, weeklyOffSun, holidaysSet]);

  /** ===== LOP & Encashment ===== */
  const perDayWage = useMemo(() => (basicDA > 0 ? basicDA / 26 : 0), [basicDA]);

  const { lop, availableAfterReq } = useMemo(() => {
    const need = chargeableDays;
    let have =
      reqType === "EL" ? availEL :
      reqType === "CL" ? availCL :
      availSL;

    const short = Math.max(0, need - have);
    const post = Math.max(0, have - need);
    return { lop: short, availableAfterReq: post };
  }, [chargeableDays, reqType, availEL, availCL, availSL]);

  const lopAmount = useMemo(() => roundBy(lop * perDayWage, rounding), [lop, perDayWage, rounding]);

  /** ===== Year-end projection: carry forward / lapse & optional encash ===== */
  const [encashDays, setEncashDays] = useState<number>(0);

  const yearEndCarry = useMemo(() => {
    // After this single request is approved this year
    const balELAfterReq = reqType === "EL" ? availableAfterReq : availEL;
    const balCLAfterReq = reqType === "CL" ? availableAfterReq : availCL;
    const balSLAfterReq = reqType === "SL" ? availableAfterReq : availSL;

    const cfEL = Math.min(carryELCap, Math.max(0, balELAfterReq - (encashEL ? encashDays : 0)));
    const cfCL = carryCL ? balCLAfterReq : 0;
    const cfSL = carrySL ? balSLAfterReq : 0;

    const lapseEL = Math.max(0, balELAfterReq - cfEL - (encashEL ? encashDays : 0));
    const lapseCL = Math.max(0, balCLAfterReq - cfCL);
    const lapseSL = Math.max(0, balSLAfterReq - cfSL);

    return { cfEL, cfCL, cfSL, lapseEL, lapseCL, lapseSL, balELAfterReq, balCLAfterReq, balSLAfterReq };
  }, [reqType, availableAfterReq, availEL, availCL, availSL, carryELCap, carryCL, carrySL, encashEL, encashDays]);

  const encashAmount = useMemo(() => {
    const days = encashEL ? clamp(encashDays, 0, yearEndCarry.balELAfterReq) : 0;
    return roundBy(days * perDayWage, rounding);
  }, [encashEL, encashDays, perDayWage, rounding, yearEndCarry.balELAfterReq]);

  /** ===================== UI ===================== */
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Leave</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Accruals, balances, sandwich rule, holidays/weekends, carry-forward & encashment. Static, API-ready later.
          </p>
        </div>
      </header>

      {/* Top Row: Policy + Employee */}
      <div className="grid gap-6 md:grid-cols-5">
        {/* Policy */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Policy</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">FY Start</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={fyStartMonth}
                onChange={(e) => setFyStartMonth(Number(e.target.value))}
              >
                <option value={0}>January</option>
                <option value={3}>April</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">FY Year (start)</label>
              <input
                type="number"
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={fyYear}
                onChange={(e) => setFyYear(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">EL Accrual / Month (days)</label>
              <input type="number" min={0} step={0.01} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={elAccrualPerMonth} onChange={(e) => setElAccrualPerMonth(Number(e.target.value))} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">CL per Year</label>
              <input type="number" min={0} step={0.1} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={clPerYear} onChange={(e) => setClPerYear(Number(e.target.value))} />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">SL per Year</label>
              <input type="number" min={0} step={0.1} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={slPerYear} onChange={(e) => setSlPerYear(Number(e.target.value))} />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4 rounded border-neutral-300"
                checked={sandwichRule} onChange={(e) => setSandwichRule(e.target.checked)} />
              Apply Sandwich Rule (count weekends/holidays in between)
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="size-4 rounded border-neutral-300"
                  checked={weeklyOffSat} onChange={(e) => setWeeklyOffSat(e.target.checked)} />
                Saturday Off
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="size-4 rounded border-neutral-300"
                  checked={weeklyOffSun} onChange={(e) => setWeeklyOffSun(e.target.checked)} />
                Sunday Off
              </label>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">EL Carry Forward Cap (days)</label>
              <input type="number" min={0} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={carryELCap} onChange={(e) => setCarryELCap(Number(e.target.value))} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="size-4 rounded border-neutral-300"
                  checked={carryCL} onChange={(e) => setCarryCL(e.target.checked)} />
                Allow CL Carry Forward
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="size-4 rounded border-neutral-300"
                  checked={carrySL} onChange={(e) => setCarrySL(e.target.checked)} />
                Allow SL Carry Forward
              </label>
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4 rounded border-neutral-300"
                checked={encashEL} onChange={(e) => setEncashEL(e.target.checked)} />
              Allow EL Encashment at Year End
            </label>
          </div>

          <div className="mt-4">
            <label className="mb-1 block text-sm font-medium">Holiday Calendar (YYYY-MM-DD; one per line)</label>
            <textarea
              className="w-full min-h-[100px] rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
              placeholder={"2025-01-26\n2025-08-15\n2025-10-02"}
              value={holidaysText}
              onChange={(e) => setHolidaysText(e.target.value)}
            />
          </div>
        </section>

        {/* Employee */}
        <section className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Employee</h2>

          <div className="mt-4 grid gap-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">DOJ</label>
                <input type="date" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={doj} onChange={(e) => setDoj(e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">DOL (optional)</label>
                <input type="date" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={dol} onChange={(e) => setDol(e.target.value)} />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Monthly Basic + DA (₹)</label>
              <input type="number" min={0} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={basicDA} onChange={(e) => setBasicDA(Number(e.target.value))} />
              <p className="mt-1 text-[11px] text-neutral-500">Per-day wage = Basic+DA ÷ 26 used for encashment/LOP.</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Opening EL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={openingEL} onChange={(e) => setOpeningEL(Number(e.target.value))} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Opening CL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={openingCL} onChange={(e) => setOpeningCL(Number(e.target.value))} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Opening SL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={openingSL} onChange={(e) => setOpeningSL(Number(e.target.value))} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Used EL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={usedEL} onChange={(e) => setUsedEL(Number(e.target.value))} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Used CL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={usedCL} onChange={(e) => setUsedCL(Number(e.target.value))} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Used SL</label>
                <input type="number" min={0} step={0.5} className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={usedSL} onChange={(e) => setUsedSL(Number(e.target.value))} />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Rounding</label>
              <select className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={rounding} onChange={(e) => (e.target.value as Rounding) && setRounding(e.target.value as Rounding)}>
                <option value="nearest">Nearest Rupee</option>
                <option value="ceil">Round Up</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </section>
      </div>

      {/* Accrual / Balance cards */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-500">EL • Opening / Accrued / Used</div>
          <div className="mt-1 text-base">{openingEL} / {accruedEL.toFixed(2)} / {usedEL}</div>
          <div className="mt-1 text-2xl font-semibold">Avail: {(availEL).toFixed(2)} days</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-500">CL • Opening / Accrued / Used</div>
          <div className="mt-1 text-base">{openingCL} / {accruedCL.toFixed(2)} / {usedCL}</div>
          <div className="mt-1 text-2xl font-semibold">Avail: {(availCL).toFixed(2)} days</div>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-500">SL • Opening / Accrued / Used</div>
          <div className="mt-1 text-base">{openingSL} / {accruedSL.toFixed(2)} / {usedSL}</div>
          <div className="mt-1 text-2xl font-semibold">Avail: {(availSL).toFixed(2)} days</div>
        </div>
      </div>

      {/* Request */}
      <div className="mt-6 grid gap-6 md:grid-cols-5">
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Leave Request (What-if)</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Leave Type</label>
              <select className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={reqType} onChange={(e) => setReqType(e.target.value as LeaveType)}>
                <option value="EL">Earned Leave (EL)</option>
                <option value="CL">Casual Leave (CL)</option>
                <option value="SL">Sick Leave (SL)</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Start</label>
                <input type="date" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={reqStart} onChange={(e) => setReqStart(e.target.value)} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">End</label>
                <input type="date" className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={reqEnd} onChange={(e) => setReqEnd(e.target.value)} />
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4 rounded border-neutral-300"
                checked={halfStart} onChange={(e) => setHalfStart(e.target.checked)} />
              Half-day on Start
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="size-4 rounded border-neutral-300"
                checked={halfEnd} onChange={(e) => setHalfEnd(e.target.checked)} />
              Half-day on End
            </label>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Chargeable Days</div>
              <div className="text-2xl font-semibold">{chargeableDays}</div>
              <div className="mt-1 text-[11px] text-neutral-500">
                {sandwichRule ? "Sandwich ON" : "Weekends/Holidays excluded"}
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Available ({reqType}) After Request</div>
              <div className="text-2xl font-semibold">{availableAfterReq.toFixed(2)} days</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">LOP (if short)</div>
              <div className="text-2xl font-semibold">
                {lop} day(s) • {INR(lopAmount)}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500">Per-day {INR(perDayWage)}</div>
            </div>
          </div>
        </section>

        {/* Year-end Projection */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Year-End Projection</h2>

          <div className="mt-3 grid gap-3">
            {encashEL && (
              <div>
                <label className="mb-1 block text-sm font-medium">Encash EL Days</label>
                <input type="number" min={0} step={0.5}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={encashDays} onChange={(e) => setEncashDays(Number(e.target.value))} />
                <div className="mt-1 text-xs text-neutral-500">
                  Max encashable up to remaining EL after request & subject to carry cap.
                </div>
              </div>
            )}

            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <table className="w-full text-sm">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-medium">Type</th>
                    <th className="px-3 py-2 text-right font-medium">Carry Forward</th>
                    <th className="px-3 py-2 text-right font-medium">Lapse</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-3 py-2">EL</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.cfEL.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.lapseEL.toFixed(2)}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-2">CL</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.cfCL.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.lapseCL.toFixed(2)}</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-3 py-2">SL</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.cfSL.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right">{yearEndCarry.lapseSL.toFixed(2)}</td>
                  </tr>
                  {encashEL && (
                    <tr className="border-t bg-neutral-50">
                      <td className="px-3 py-2">Encash (EL)</td>
                      <td className="px-3 py-2 text-right" colSpan={2}>{INR(encashAmount)}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
              <div className="mb-1 text-xs text-neutral-600">Per-day Wage</div>
              <div className="text-xl font-semibold">{INR(perDayWage)}</div>
              <p className="mt-1 text-[11px] text-neutral-500">
                Used for LOP & EL encashment. Configure Basic+DA above.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* Compliance Note */}
      <div className="mt-6 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4">
        <div className="text-xs text-neutral-600">Notes & Assumptions</div>
        <ul className="mt-2 list-disc pl-5 text-[11px] text-neutral-600 space-y-1">
          <li>EL accrues monthly and is prorated by days employed in a month between DOJ/DOL.</li>
          <li>CL/SL annual entitlements are linear-prorated by days employed in the FY.</li>
          <li>Sandwich rule counts intervening weekends/holidays; when off, they’re excluded.</li>
          <li>Half-day flags reduce chargeable by 0.5 each (same-day start/end supported).</li>
          <li>Carry forward: EL capped; CL/SL as per toggles. Remainder lapses at year end.</li>
          <li>Encash EL at per-day (Basic+DA ÷ 26). LOP applies when request exceeds available.</li>
          <li>Static demo. Align numbers with your HR policy/state Shops & Establishments rules before rollout.</li>
        </ul>
      </div>
    </div>
  );
}

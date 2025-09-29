// app/interest-penalty/page.tsx
"use client";

import { useMemo, useState, useEffect } from "react";

/** ===================== Types ===================== */
type Compounding = "simple" | "daily" | "monthly";
type DayCount = "ACT/365" | "ACT/366" | "30/360";
type PenaltyMode = "none" | "flat" | "per_day" | "percent_of_tax";
type Rounding = "none" | "nearest" | "ceil";

/** ===================== Utils ===================== */
const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

function parseISO(d: string) {
  const t = new Date(d);
  // normalize to 00:00 local
  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
}

function daysBetween(a: Date, b: Date, inclusiveEnd = false) {
  const ms = b.getTime() - a.getTime();
  const d = Math.floor(ms / (1000 * 60 * 60 * 24));
  return inclusiveEnd ? d + 1 : d;
}

function fullMonthsBetween(a: Date, b: Date) {
  // counts full calendar months between dates (due on 15th to pay on 20th -> 0 full months)
  let months = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  const aDay = a.getDate();
  const bDay = b.getDate();
  if (bDay < aDay) months -= 1;
  return Math.max(0, months);
}

function countWeekendDays(a: Date, b: Date) {
  // counts weekend days (Sat/Sun) strictly between a and b (exclusive of b by default)
  let count = 0;
  for (let d = new Date(a); d < b; d.setDate(d.getDate() + 1)) {
    const w = d.getDay();
    if (w === 0 || w === 6) count++;
  }
  return count;
}

function dayCountDenominator(dc: DayCount, start: Date, end: Date) {
  switch (dc) {
    case "30/360":
      return 360;
    case "ACT/366":
      // if period crosses a leap year day, using 366 is conservative per user choice
      return 366;
    case "ACT/365":
    default:
      return 365;
  }
}

function roundBy(v: number, mode: Rounding) {
  switch (mode) {
    case "nearest":
      return Math.round(v);
    case "ceil":
      return Math.ceil(v);
    case "none":
    default:
      return v;
  }
}

/** ===================== Presets (just helpers) ===================== */
type PresetKey = "custom" | "pt_demo" | "pf_demo" | "esi_demo";
const PRESETS: Record<
  PresetKey,
  Partial<ReturnType<typeof defaultState>>
> = {
  custom: {},
  pt_demo: {
    compounding: "simple",
    annualRate: 18, // demo
    penaltyMode: "per_day",
    penaltyPerDay: 5, // demo per-day charge
    graceDays: 0,
    rounding: "nearest",
  },
  pf_demo: {
    compounding: "simple",
    annualRate: 12, // demo PF interest %
    penaltyMode: "percent_of_tax",
    penaltyPercent: 1, // 1% of tax as demo penalty
    graceDays: 0,
    rounding: "nearest",
  },
  esi_demo: {
    compounding: "monthly",
    annualRate: 15, // demo
    penaltyMode: "flat",
    penaltyFlat: 200, // demo flat penalty
    graceDays: 0,
    rounding: "nearest",
  },
};

/** ===================== Default UI State ===================== */
function defaultState() {
  const today = new Date();
  const due = new Date(today.getFullYear(), today.getMonth(), 15);
  const pay = new Date(today.getFullYear(), today.getMonth(), 20);
  return {
    principal: 10000,
    dueDate: due.toISOString().slice(0, 10),
    payDate: pay.toISOString().slice(0, 10),

    annualRate: 18,
    compounding: "simple" as Compounding,
    dayCount: "ACT/365" as DayCount,
    graceDays: 0,

    penaltyMode: "none" as PenaltyMode,
    penaltyFlat: 0,
    penaltyPerDay: 0,
    penaltyPercent: 0, // % of principal
    penaltyMin: 0,
    penaltyMax: 0,
    excludeWeekendsForPenalty: false,

    rounding: "nearest" as Rounding,

    preset: "custom" as PresetKey,
  };
}

/** ===================== Page ===================== */
export default function InterestPenaltyCalculatorPage() {
  const [state, setState] = useState(defaultState());

  // apply preset when user changes it
  useEffect(() => {
    const p = PRESETS[state.preset];
    if (!p) return;
    setState((s) => ({ ...s, ...p }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.preset]);

  const {
    principal,
    dueDate,
    payDate,

    annualRate,
    compounding,
    dayCount,
    graceDays,

    penaltyMode,
    penaltyFlat,
    penaltyPerDay,
    penaltyPercent,
    penaltyMin,
    penaltyMax,
    excludeWeekendsForPenalty,

    rounding,
    preset,
  } = state;

  const parsed = useMemo(() => {
    const start = parseISO(dueDate);
    const end = parseISO(payDate);
    // delay days cannot be negative
    const rawDays = Math.max(0, daysBetween(start, end, false));
    const delayDays = Math.max(0, rawDays - Math.max(0, graceDays));
    const delayMonths = fullMonthsBetween(start, end);
    const weekendsInDelay = excludeWeekendsForPenalty
      ? Math.max(0, countWeekendDays(
          new Date(start.getFullYear(), start.getMonth(), start.getDate() + Math.max(0, graceDays)),
          end
        ))
      : 0;

    const perDayPenaltyDays =
      penaltyMode === "per_day"
        ? Math.max(0, delayDays - (excludeWeekendsForPenalty ? weekendsInDelay : 0))
        : 0;

    return { start, end, rawDays, delayDays, delayMonths, weekendsInDelay, perDayPenaltyDays };
  }, [dueDate, payDate, graceDays, penaltyMode, excludeWeekendsForPenalty]);

  // Interest calculation
  const interest = useMemo(() => {
    if (principal <= 0) return 0;
    if (parsed.delayDays <= 0) return 0;

    const r = annualRate / 100;
    const denom = dayCountDenominator(dayCount, parsed.start, parsed.end);

    switch (compounding) {
      case "simple": {
        const t = parsed.delayDays / denom;
        return principal * r * t;
      }
      case "daily": {
        // daily compounding on actual days
        const dailyRate = r / denom;
        return principal * (Math.pow(1 + dailyRate, parsed.delayDays) - 1);
      }
      case "monthly": {
        // monthly compounding on full months only (partial month ignored)
        const months = parsed.delayMonths;
        const monthlyRate = r / 12;
        return months > 0 ? principal * (Math.pow(1 + monthlyRate, months) - 1) : 0;
      }
      default:
        return 0;
    }
  }, [principal, annualRate, compounding, parsed.delayDays, parsed.delayMonths, dayCount, parsed.start, parsed.end]);

  // Penalty calculation
  const penaltyRaw = useMemo(() => {
    if (principal <= 0) return 0;
    if (parsed.delayDays <= 0) return 0;

    switch (penaltyMode) {
      case "flat":
        return penaltyFlat;
      case "per_day":
        return Math.max(0, state.penaltyPerDay) * parsed.perDayPenaltyDays;
      case "percent_of_tax":
        return (Math.max(0, penaltyPercent) / 100) * principal;
      case "none":
      default:
        return 0;
    }
  }, [penaltyMode, penaltyFlat, penaltyPercent, principal, parsed.perDayPenaltyDays, parsed.delayDays, state.penaltyPerDay]);

  // Apply min/max to penalty
  const penaltyCapped = useMemo(() => {
    let p = penaltyRaw;
    if (penaltyMin > 0) p = Math.max(p, penaltyMin);
    if (penaltyMax > 0) p = Math.min(p, penaltyMax);
    return p;
  }, [penaltyRaw, penaltyMin, penaltyMax]);

  // Rounding (interest + penalty)
  const interestRounded = useMemo(() => roundBy(interest, rounding), [interest, rounding]);
  const penaltyRounded = useMemo(() => roundBy(penaltyCapped, rounding), [penaltyCapped, rounding]);

  const totalDue = principal + interestRounded + penaltyRounded;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Interest &amp; Penalty</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Static, compliant-by-design. Simple/daily/monthly compounding + flexible penalties.
          </p>
        </div>
      </header>

      <div className="mb-4 grid gap-3 md:grid-cols-4">
        {/* Preset */}
        <div>
          <label className="mb-1 block text-sm font-medium">Preset</label>
          <select
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            value={preset}
            onChange={(e) => setState((s) => ({ ...s, preset: e.target.value as PresetKey }))}
          >
            <option value="custom">Custom</option>
            <option value="pt_demo">PT Demo (Per-day Penalty)</option>
            <option value="pf_demo">PF Demo (Simple Interest + % Penalty)</option>
            <option value="esi_demo">ESI Demo (Monthly Compounding + Flat Penalty)</option>
          </select>
        </div>

        {/* Due date */}
        <div>
          <label className="mb-1 block text-sm font-medium">Due Date</label>
          <input
            type="date"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            value={dueDate}
            onChange={(e) => setState((s) => ({ ...s, dueDate: e.target.value }))}
          />
        </div>

        {/* Payment date */}
        <div>
          <label className="mb-1 block text-sm font-medium">Payment Date</label>
          <input
            type="date"
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            value={payDate}
            onChange={(e) => setState((s) => ({ ...s, payDate: e.target.value }))}
          />
        </div>

        {/* Principal */}
        <div>
          <label className="mb-1 block text-sm font-medium">Principal (₹)</label>
          <input
            type="number"
            min={0}
            className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
            value={principal}
            onChange={(e) => setState((s) => ({ ...s, principal: Number(e.target.value) }))}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Interest Block */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Interest</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium">Annual Rate (%)</label>
              <input
                type="number"
                min={0}
                step={0.01}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={annualRate}
                onChange={(e) => setState((s) => ({ ...s, annualRate: Number(e.target.value) }))}
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Compounding</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={compounding}
                onChange={(e) =>
                  setState((s) => ({ ...s, compounding: e.target.value as Compounding }))
                }
              >
                <option value="simple">Simple (ACT)</option>
                <option value="daily">Daily Compounding</option>
                <option value="monthly">Monthly Compounding</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Day Count Basis</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={dayCount}
                onChange={(e) => setState((s) => ({ ...s, dayCount: e.target.value as DayCount }))}
              >
                <option value="ACT/365">ACT/365</option>
                <option value="ACT/366">ACT/366</option>
                <option value="30/360">30/360</option>
              </select>
              <p className="mt-1 text-xs text-neutral-500">
                Simple/daily use actual days; monthly uses full calendar months.
              </p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Grace Days</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={graceDays}
                onChange={(e) => setState((s) => ({ ...s, graceDays: Number(e.target.value) }))}
              />
            </div>
          </div>
        </section>

        {/* Penalty Block */}
        <section className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Penalty</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">Mode</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={penaltyMode}
                onChange={(e) =>
                  setState((s) => ({ ...s, penaltyMode: e.target.value as PenaltyMode }))
                }
              >
                <option value="none">None</option>
                <option value="flat">Flat Amount</option>
                <option value="per_day">Per Day</option>
                <option value="percent_of_tax">% of Principal</option>
              </select>
            </div>

            {penaltyMode === "flat" && (
              <div>
                <label className="mb-1 block text-sm font-medium">Flat Penalty (₹)</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={penaltyFlat}
                  onChange={(e) =>
                    setState((s) => ({ ...s, penaltyFlat: Number(e.target.value) }))
                  }
                />
              </div>
            )}

            {penaltyMode === "per_day" && (
              <>
                <div>
                  <label className="mb-1 block text-sm font-medium">Per Day (₹)</label>
                  <input
                    type="number"
                    min={0}
                    className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                    value={penaltyPerDay}
                    onChange={(e) =>
                      setState((s) => ({ ...s, penaltyPerDay: Number(e.target.value) }))
                    }
                  />
                </div>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-neutral-300"
                    checked={excludeWeekendsForPenalty}
                    onChange={(e) =>
                      setState((s) => ({ ...s, excludeWeekendsForPenalty: e.target.checked }))
                    }
                  />
                  Exclude weekends for per-day penalty
                </label>
              </>
            )}

            {penaltyMode === "percent_of_tax" && (
              <div>
                <label className="mb-1 block text-sm font-medium">% of Principal</label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={penaltyPercent}
                  onChange={(e) =>
                    setState((s) => ({ ...s, penaltyPercent: Number(e.target.value) }))
                  }
                />
              </div>
            )}

            {/* Caps */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Min Penalty (₹)</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={penaltyMin}
                  onChange={(e) =>
                    setState((s) => ({ ...s, penaltyMin: Number(e.target.value) }))
                  }
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Max Penalty (₹)</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={penaltyMax}
                  onChange={(e) =>
                    setState((s) => ({ ...s, penaltyMax: Number(e.target.value) }))
                  }
                />
              </div>
            </div>

            {/* Rounding */}
            <div>
              <label className="mb-1 block text-sm font-medium">Rounding</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={rounding}
                onChange={(e) => setState((s) => ({ ...s, rounding: e.target.value as Rounding }))}
              >
                <option value="none">None (paise retained)</option>
                <option value="nearest">Nearest Rupee</option>
                <option value="ceil">Round Up</option>
              </select>
            </div>
          </div>
        </section>
      </div>

      {/* Insights / Results */}
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="text-xs text-neutral-500">Delay</div>
          <div className="mt-2 text-lg font-semibold">
            {parsed.delayDays} days
            {compounding === "monthly" ? ` • ${parsed.delayMonths} full month(s)` : ""}
          </div>
          {penaltyMode === "per_day" && excludeWeekendsForPenalty && (
            <div className="mt-1 text-xs text-neutral-500">
              Weekends excluded for penalty: {parsed.weekendsInDelay}
            </div>
          )}
          {penaltyMode === "per_day" && (
            <div className="mt-1 text-xs text-neutral-500">
              Penalty chargeable days: {parsed.perDayPenaltyDays}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="text-xs text-neutral-500">Interest</div>
          <div className="mt-2 text-2xl font-semibold">{INR(interestRounded)}</div>
          <div className="mt-1 text-xs text-neutral-500">
            {compounding.toUpperCase()} @ {annualRate}% • {dayCount}
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="text-xs text-neutral-500">Penalty</div>
          <div className="mt-2 text-2xl font-semibold">{INR(penaltyRounded)}</div>
          <div className="mt-1 text-xs text-neutral-500">
            Mode: {penaltyMode.replace(/_/g, " ")}{" "}
            {penaltyMode === "flat" && `(₹${penaltyFlat})`}
            {penaltyMode === "per_day" && `(₹${penaltyPerDay}/day)`}
            {penaltyMode === "percent_of_tax" && `(${penaltyPercent}% of principal)`}
          </div>
        </div>
      </div>

      {/* Grand Total */}
      <div className="mt-4 rounded-2xl border border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-5">
        <div className="mb-1 text-xs text-neutral-600">Grand Total (Principal + Interest + Penalty)</div>
        <div className="text-3xl font-bold">{INR(totalDue)}</div>
        <p className="mt-2 text-xs text-neutral-500">
          Note: This is a generic calculator. Always validate the exact rate rules as per the specific Act/State notification.
        </p>
      </div>
    </div>
  );
}

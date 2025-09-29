// app/gratuity-calculator/page.tsx
"use client";

import { useMemo, useState } from "react";

/**
 * Gratuity Basics (Non-seasonal):
 *  - Formula: Gratuity = (Last Drawn Monthly Wages / 26) * 15 * YearsCounted
 *  - YearsCounted = completed years + (months >= 6 ? 1 : 0)
 *  - Eligibility: >= 5 years continuous service (except death/disablement)
 *  - Wage = Basic + DA (exclude HRA/allowances)
 *  - Statutory ceiling (configurable): default ₹20,00,000
 *
 * Seasonal (optional):
 *  - 7 days wages per season year (use 7 instead of 15)
 */

type Rounding = "none" | "nearest" | "ceil";
type CaseType = "normal" | "death_disable";
type EmployeeType = "non_seasonal" | "seasonal";

const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

function roundBy(v: number, mode: Rounding) {
  switch (mode) {
    case "nearest":
      return Math.round(v);
    case "ceil":
      return Math.ceil(v);
    default:
      return v;
  }
}

export default function GratuityCalculatorPage() {
  // Inputs
  const [monthlyWage, setMonthlyWage] = useState<number>(30000); // Basic + DA
  const [years, setYears] = useState<number>(5);
  const [months, setMonths] = useState<number>(0);

  const [employeeType, setEmployeeType] = useState<EmployeeType>("non_seasonal");
  const [caseType, setCaseType] = useState<CaseType>("normal"); // normal or death/disablement (waives 5y rule)

  // Act parameters (editable knobs)
  const [daysPerMonthDivisor, setDaysPerMonthDivisor] = useState<number>(26); // usually 26
  const [daysPerYearMultiplier, setDaysPerYearMultiplier] = useState<number>(15); // 15 for non-seasonal
  const [seasonalDaysMultiplier, setSeasonalDaysMultiplier] = useState<number>(7); // 7 for seasonal
  const [applyActRounding, setApplyActRounding] = useState<boolean>(true); // months >=6 -> +1 year
  const [statutoryCeiling, setStatutoryCeiling] = useState<number>(2000000); // ₹20,00,000 default
  const [rounding, setRounding] = useState<Rounding>("nearest"); // payroll hygiene

  // Derived: counted years
  const countedYears = useMemo(() => {
    const y = Math.max(0, Math.floor(years || 0));
    const m = Math.max(0, Math.floor(months || 0));
    if (!applyActRounding) return Math.max(0, y + Math.min(11, m) / 12);
    return y + (m >= 6 ? 1 : 0);
  }, [years, months, applyActRounding]);

  // Eligibility (5-year rule for non-seasonal; waived on death/disablement)
  const eligible = useMemo(() => {
    if (caseType === "death_disable") return true;
    if (employeeType === "seasonal") {
      // Seasonal has different computation; still require continuous service notion,
      // but we allow calculation even if <5 years (common interpretation varies by state/estab).
      return true;
    }
    // Non-seasonal normal case
    return countedYears >= 5;
  }, [caseType, employeeType, countedYears]);

  // Core computation
  const rawGratuity = useMemo(() => {
    const divisor = Math.max(1, daysPerMonthDivisor);
    const perDay = Math.max(0, monthlyWage) / divisor;

    const multiplier =
      employeeType === "seasonal"
        ? Math.max(0, seasonalDaysMultiplier)
        : Math.max(0, daysPerYearMultiplier);

    const yearsFactor = Math.max(0, countedYears);

    return perDay * multiplier * yearsFactor;
  }, [
    monthlyWage,
    daysPerMonthDivisor,
    daysPerYearMultiplier,
    seasonalDaysMultiplier,
    employeeType,
    countedYears,
  ]);

  // Apply statutory ceiling and rounding
  const payable = useMemo(() => {
    const capped = Math.min(rawGratuity, Math.max(0, statutoryCeiling));
    return roundBy(capped, rounding);
  }, [rawGratuity, statutoryCeiling, rounding]);

  // Insights
  const perDayWage = useMemo(
    () => (daysPerMonthDivisor > 0 ? monthlyWage / daysPerMonthDivisor : 0),
    [monthlyWage, daysPerMonthDivisor]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Gratuity</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Payment of Gratuity Act style: 15/26 rule, 6-month rounding, ceiling, and seasonal logic.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Calculator */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Inputs</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Monthly Wage */}
            <div>
              <label className="mb-1 block text-sm font-medium">Last Drawn Monthly Wage (Basic + DA) ₹</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={monthlyWage}
                onChange={(e) => setMonthlyWage(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Excludes HRA and allowances.</p>
            </div>

            {/* Service Tenure */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Years</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Months</label>
                <input
                  type="number"
                  min={0}
                  max={11}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                />
              </div>
            </div>

            {/* Employee Type */}
            <div>
              <label className="mb-1 block text-sm font-medium">Employee Type</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={employeeType}
                onChange={(e) => setEmployeeType(e.target.value as EmployeeType)}
              >
                <option value="non_seasonal">Non-seasonal (15 days rule)</option>
                <option value="seasonal">Seasonal (7 days rule)</option>
              </select>
            </div>

            {/* Case Type */}
            <div>
              <label className="mb-1 block text-sm font-medium">Case</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={caseType}
                onChange={(e) => setCaseType(e.target.value as CaseType)}
              >
                <option value="normal">Normal (resignation/retirement)</option>
                <option value="death_disable">Death / Disablement (5-year rule waived)</option>
              </select>
            </div>

            {/* Act knobs */}
            <div>
              <label className="mb-1 block text-sm font-medium">Days per Month Divisor</label>
              <input
                type="number"
                min={1}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={daysPerMonthDivisor}
                onChange={(e) => setDaysPerMonthDivisor(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default 26 as per Act practice.</p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Days Multiplier / Year ({employeeType === "seasonal" ? "Seasonal" : "Non-seasonal"})
              </label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={employeeType === "seasonal" ? seasonalDaysMultiplier : daysPerYearMultiplier}
                onChange={(e) =>
                  employeeType === "seasonal"
                    ? setSeasonalDaysMultiplier(Number(e.target.value))
                    : setDaysPerYearMultiplier(Number(e.target.value))
                }
              />
              <p className="mt-1 text-[11px] text-neutral-500">
                Defaults: 15 (non-seasonal), 7 (seasonal).
              </p>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-300"
                checked={applyActRounding}
                onChange={(e) => setApplyActRounding(e.target.checked)}
              />
              <span className="text-sm">Apply 6-month rounding (months ≥ 6 ⇒ +1 year)</span>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Statutory Ceiling (₹)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={statutoryCeiling}
                onChange={(e) => setStatutoryCeiling(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default ₹20,00,000 (editable).</p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Rounding</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={rounding}
                onChange={(e) => setRounding(e.target.value as Rounding)}
              >
                <option value="nearest">Nearest Rupee</option>
                <option value="ceil">Round Up</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Eligibility</div>
              <div className="mt-1 text-base font-medium">
                {eligible ? "Eligible" : "Not Eligible (5-year rule)"}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Counted Years: {countedYears}
                {applyActRounding ? " (6-month rounding ON)" : " (exact years)"}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Per-day Wage</div>
              <div className="mt-1 text-2xl font-semibold">{INR(perDayWage)}</div>
              <div className="mt-1 text-[11px] text-neutral-500">Divisor {daysPerMonthDivisor}</div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">
                Days Multiplier / Year ({employeeType === "seasonal" ? "Seasonal" : "Non-seasonal"})
              </div>
              <div className="mt-1 text-2xl font-semibold">
                {employeeType === "seasonal" ? seasonalDaysMultiplier : daysPerYearMultiplier}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <div className="mb-1 text-xs text-neutral-600">Gratuity Payable</div>
            <div className="text-3xl font-bold">
              {eligible ? INR(payable) : INR(0)}
            </div>
            <div className="mt-1 text-xs text-neutral-500">
              Raw {INR(rawGratuity)} • Ceiling {INR(statutoryCeiling)} • Rounding {rounding}
            </div>
            {!eligible && caseType === "normal" && (
              <p className="mt-2 text-[11px] text-neutral-500">
                Note: Minimum 5 years of continuous service is typically required for non-seasonal cases (except death/disablement).
              </p>
            )}
          </div>
        </section>

        {/* Help / Notes */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>
              <b>Formula:</b> <code>(Monthly Wage / {daysPerMonthDivisor}) × {employeeType === "seasonal" ? seasonalDaysMultiplier : daysPerYearMultiplier} × Years</code>
              &nbsp;with 6-month rounding if enabled.
            </li>
            <li>
              <b>Wage:</b> Basic + DA only. HRA and other allowances excluded.
            </li>
            <li>
              <b>Ceiling:</b> Capped at your configured statutory ceiling (default ₹20 lakh).
            </li>
            <li>
              <b>Eligibility:</b> 5-year rule for non-seasonal (waived for death/disablement).
            </li>
            <li>
              <b>Seasonal:</b> 7-days rule per year (editable).
            </li>
            <li>
              <b>Tax:</b> Govt employees—fully exempt; others—exemption as per Income-tax rules (configure in payslip logic).
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

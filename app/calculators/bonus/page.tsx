"use client";

import { useMemo, useState } from "react";

/** ===================== Types ===================== */
type Rounding = "none" | "nearest" | "ceil";

/** ===================== Utils ===================== */
const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

const clamp = (n: number, a: number, b: number) => Math.min(Math.max(n, a), b);

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

/** ===================== Page ===================== */
export default function BonusCalculatorPage() {
  // Core inputs
  const [monthlyBasicDA, setMonthlyBasicDA] = useState<number>(18000); // Basic + DA per month
  const [eligibleMonths, setEligibleMonths] = useState<number>(12);    // months worked in FY

  // Statutory configuration (static but editable)
  const [eligibilityWageThreshold, setEligibilityWageThreshold] = useState<number>(21000); // <= threshold eligible
  const [minWageForCalcBase, setMinWageForCalcBase] = useState<number>(0); // if you know MW for employment; else 0
  const [statutoryFloor, setStatutoryFloor] = useState<number>(7000);       // ₹7,000 floor as per Act (configurable)
  const [bonusRate, setBonusRate] = useState<number>(8.33);                 // between 8.33% and 20%

  // Policy options
  const [allowExGratiaIfIneligible, setAllowExGratiaIfIneligible] = useState<boolean>(true);
  const [rounding, setRounding] = useState<Rounding>("nearest");

  // Optional attendance scaler (advanced): % of month’s working days attended
  const [useAttendanceScaler, setUseAttendanceScaler] = useState<boolean>(false);
  const [avgAttendancePct, setAvgAttendancePct] = useState<number>(100); // 0..100

  // Guard & helpers
  const safeMonths = useMemo(() => clamp(Math.floor(eligibleMonths || 0), 0, 12), [eligibleMonths]);

  // Eligibility
  const eligible = useMemo(() => {
    if (monthlyBasicDA <= 0) return false;
    return monthlyBasicDA <= eligibilityWageThreshold;
  }, [monthlyBasicDA, eligibilityWageThreshold]);

  // Calculation base per month = min(employee monthly basic+DA, max(7000, MinimumWageInput))
  const monthlyCalcBase = useMemo(() => {
    const ceiling = Math.max(statutoryFloor || 0, minWageForCalcBase || 0); // e.g., max(7000, MW)
    return Math.min(Math.max(monthlyBasicDA, 0), ceiling > 0 ? ceiling : monthlyBasicDA);
  }, [monthlyBasicDA, statutoryFloor, minWageForCalcBase]);

  // Annualized base for eligible months
  const annualCalcBase = useMemo(() => monthlyCalcBase * safeMonths, [monthlyCalcBase, safeMonths]);

  // Attendance scaler (optional)
  const attendanceFactor = useMemo(
    () => (useAttendanceScaler ? clamp(avgAttendancePct, 0, 100) / 100 : 1),
    [useAttendanceScaler, avgAttendancePct]
  );

  // Bonus computation
  const computedBonusRaw = useMemo(() => {
    const rate = clamp(bonusRate, 0, 100) / 100; // convert to fraction
    const payableBase = annualCalcBase * attendanceFactor;

    if (eligible) {
      return payableBase * rate;
    }
    // Not eligible → either 0 or ex-gratia as per policy
    if (allowExGratiaIfIneligible) {
      return payableBase * rate; // treat as ex-gratia
    }
    return 0;
  }, [eligible, allowExGratiaIfIneligible, annualCalcBase, attendanceFactor, bonusRate]);

  const computedBonus = useMemo(() => roundBy(computedBonusRaw, rounding), [computedBonusRaw, rounding]);

  // Effective rate vs *actual* annual Basic+DA (for insight)
  const effectiveOnActualAnnual = useMemo(() => {
    const actualAnnualBasic = Math.max(monthlyBasicDA, 0) * safeMonths * attendanceFactor;
    if (actualAnnualBasic <= 0) return 0;
    return (computedBonusRaw / actualAnnualBasic) * 100;
  }, [monthlyBasicDA, safeMonths, attendanceFactor, computedBonusRaw]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Bonus</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Statutory-style computation: eligibility threshold, capped calculation base, configurable rate, and pro-rata months.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Calculator */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Inputs</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* Monthly Basic+DA */}
            <div>
              <label className="mb-1 block text-sm font-medium">Monthly Basic + DA (₹)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={monthlyBasicDA}
                onChange={(e) => setMonthlyBasicDA(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Used for eligibility and capped for calculation base.</p>
            </div>

            {/* Eligible Months */}
            <div>
              <label className="mb-1 block text-sm font-medium">Eligible Months in FY (0–12)</label>
              <input
                type="number"
                min={0}
                max={12}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={eligibleMonths}
                onChange={(e) => setEligibleMonths(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Pro-rata based on months worked/eligible.</p>
            </div>

            {/* Eligibility threshold */}
            <div>
              <label className="mb-1 block text-sm font-medium">Eligibility Threshold (₹/month)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={eligibilityWageThreshold}
                onChange={(e) => setEligibilityWageThreshold(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default ₹21,000 under the Act.</p>
            </div>

            {/* Minimum Wage for Calc Base */}
            <div>
              <label className="mb-1 block text-sm font-medium">Minimum Wage for Calc Base (₹/month)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={minWageForCalcBase}
                onChange={(e) => setMinWageForCalcBase(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">
                Calculation base cap = max(Statutory Floor, Minimum Wage).
              </p>
            </div>

            {/* Statutory floor (₹7,000 default) */}
            <div>
              <label className="mb-1 block text-sm font-medium">Statutory Floor for Calc Base (₹)</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={statutoryFloor}
                onChange={(e) => setStatutoryFloor(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Default ₹7,000 (configurable).</p>
            </div>

            {/* Bonus Rate */}
            <div>
              <label className="mb-1 block text-sm font-medium">Bonus Rate (%)</label>
              <input
                type="number"
                min={0}
                max={100}
                step={0.01}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={bonusRate}
                onChange={(e) => setBonusRate(Number(e.target.value))}
              />
              <p className="mt-1 text-[11px] text-neutral-500">Typical statutory band: 8.33%–20%.</p>
            </div>

            {/* Ex-gratia toggle */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-300"
                checked={allowExGratiaIfIneligible}
                onChange={(e) => setAllowExGratiaIfIneligible(e.target.checked)}
              />
              <span className="text-sm">Allow Ex-gratia if Ineligible</span>
            </div>

            {/* Attendance scaler */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="size-4 rounded border-neutral-300"
                checked={useAttendanceScaler}
                onChange={(e) => setUseAttendanceScaler(e.target.checked)}
              />
              <span className="text-sm">Apply Attendance / Productivity Scaler (%)</span>
            </div>

            {useAttendanceScaler && (
              <div>
                <label className="mb-1 block text-sm font-medium">Average Attendance (%)</label>
                <input
                  type="number"
                  min={0}
                  max={100}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={avgAttendancePct}
                  onChange={(e) => setAvgAttendancePct(Number(e.target.value))}
                />
              </div>
            )}

            {/* Rounding */}
            <div>
              <label className="mb-1 block text-sm font-medium">Rounding</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={rounding}
                onChange={(e) => setRounding(e.target.value as Rounding)}
              >
                <option value="none">None (paise retained)</option>
                <option value="nearest">Nearest Rupee</option>
                <option value="ceil">Round Up</option>
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Eligibility</div>
              <div className="mt-1 text-base font-medium">
                {eligible ? "Eligible under threshold" : allowExGratiaIfIneligible ? "Not eligible • Ex-gratia policy" : "Not eligible"}
              </div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Threshold ₹{eligibilityWageThreshold.toLocaleString("en-IN")} • Basic+DA ₹{monthlyBasicDA.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Monthly Calculation Base</div>
              <div className="mt-1 text-2xl font-semibold">{INR(monthlyCalcBase)}</div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Cap = max(₹{statutoryFloor.toLocaleString("en-IN")}, ₹{(minWageForCalcBase || 0).toLocaleString("en-IN")})
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Annual Base (Pro-rata)</div>
              <div className="mt-1 text-2xl font-semibold">{INR(annualCalcBase)}</div>
              <div className="mt-1 text-[11px] text-neutral-500">
                Months {safeMonths} {useAttendanceScaler ? `• Attendance ${avgAttendancePct}%` : ""}
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-green-50 p-4">
            <div className="mb-1 text-xs text-neutral-600">Bonus Payable</div>
            <div className="text-3xl font-bold">{INR(computedBonus)}</div>
            <div className="mt-1 text-xs text-neutral-500">
              Rate {bonusRate}% • Effective on actual Basic+DA ~ {effectiveOnActualAnnual.toFixed(2)}%
            </div>
            <p className="mt-2 text-[11px] text-neutral-500">
              This tool is a guide. For statutory compliance, validate {`{`}minimum wage, eligibility threshold, allocable surplus/set-on & set-off{`}`} with your legal team.
            </p>
          </div>
        </section>

        {/* Help / Notes */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How it works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>
              <b>Eligibility:</b> Employee with Basic+DA ≤ threshold (default ₹21,000) is eligible. Toggle ex-gratia to pay otherwise.
            </li>
            <li>
              <b>Calc Base:</b> Per month base is capped at <code>max(₹7,000, Minimum Wage)</code> or employee’s Basic+DA, whichever is lower.
            </li>
            <li>
              <b>Bonus Rate:</b> Typically 8.33% to 20%. Applied on pro-rated annual base.
            </li>
            <li>
              <b>Attendance Scaler:</b> Optional percentage factor on the annual base.
            </li>
            <li>
              <b>Rounding:</b> None / nearest / ceil for payroll hygiene.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}


// // app/bonus-calculator/compact/page.tsx
// "use client";

// import { useMemo, useState } from "react";

// const INR = (v: number) =>
//   new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 })
//     .format(Math.max(0, Math.round(v || 0)));

// export default function BonusCalculatorCompact() {
//   const [basic, setBasic] = useState<number | ''>('');
//   const [da, setDa] = useState<number | ''>('');
//   const [percent, setPercent] = useState<number | ''>(''); // e.g. 8.33 .. 20
//   const [touched, setTouched] = useState(false);
//   const [result, setResult] = useState<number | null>(null);

//   const totalWage = useMemo(() => (Number(basic || 0) + Number(da || 0)), [basic, da]);

//   const { validPct, pctError } = useMemo(() => {
//     const p = Number(percent);
//     if (!touched || percent === '') return { validPct: true, pctError: '' };
//     if (Number.isNaN(p)) return { validPct: false, pctError: 'Enter a valid number' };
//     if (p < 0) return { validPct: false, pctError: 'Percentage cannot be negative' };
//     return { validPct: true, pctError: '' }; // keep it open; hint about 8.33–20 below
//   }, [percent, touched]);

//   function calc() {
//     setTouched(true);
//     if (!validPct) return;
//     const p = Number(percent || 0);
//     const bonus = totalWage * (p / 100);
//     setResult(bonus);
//   }

//   function reset() {
//     setBasic('');
//     setDa('');
//     setPercent('');
//     setTouched(false);
//     setResult(null);
//   }

//   return (
//     <div className="min-h-screen">
//       {/* Top bar */}
//       <header className="max-w-6xl mx-auto px-4 py-10">
//         <h1 className="text-black text-3xl sm:text-4xl font-semibold">Bonus Calculator</h1>
//       </header>

//       {/* Panel */}
//       <main className="max-w-4xl mx-auto px-4 pb-16">
//         <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6 sm:p-10">
//           <div className="grid gap-4 sm:grid-cols-[1fr_1.4fr] items-center">
//             {/* Basic */}
//             <label className="text-sm sm:text-base text-slate-700 font-medium text-right sm:pr-4">
//               Enter Basic Salary :
//             </label>
//             <input
//               type="number"
//               min={0}
//               value={basic}
//               onChange={(e) => setBasic(e.target.value === '' ? '' : Number(e.target.value))}
//               placeholder="Enter Amount"
//               className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             {/* DA */}
//             <label className="text-sm sm:text-base text-slate-700 font-medium text-right sm:pr-4">
//               Enter DA :
//             </label>
//             <input
//               type="number"
//               min={0}
//               value={da}
//               onChange={(e) => setDa(e.target.value === '' ? '' : Number(e.target.value))}
//               placeholder="Enter Amount"
//               className="h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//             />

//             {/* % */}
//             <label className="text-sm sm:text-base text-slate-700 font-medium text-right sm:pr-4">
//               Enter the Percentage of Bonus :
//             </label>
//             <div>
//               <input
//                 type="number"
//                 value={percent}
//                 onChange={(e) => setPercent(e.target.value === '' ? '' : Number(e.target.value))}
//                 placeholder="Minimum bonus = 8.33% and Maximum bonus = 20%"
//                 className={`h-11 w-full rounded-md border px-3 text-sm focus:outline-none focus:ring-2 ${
//                   validPct ? 'border-slate-300 focus:ring-orange-400' : 'border-red-300 focus:ring-red-400'
//                 }`}
//               />
//               {!validPct && (
//                 <p className="mt-1 text-xs text-red-600">{pctError}</p>
//               )}
//               <p className="mt-1 text-[11px] text-slate-500">
//                 Statutory band (guide): <b>8.33% – 20%</b>. You can override if policy demands.
//               </p>
//             </div>
//           </div>

//           {/* CTA row */}
//           <div className="mt-6 flex items-center gap-3">
//             <button
//               onClick={calc}
//               className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-amber-500 to-orange-500 px-5 text-white text-sm font-semibold hover:from-amber-600 hover:to-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-400"
//               aria-label="Calculate Bonus"
//             >
//               Calculate
//             </button>
//             <button
//               onClick={reset}
//               className="inline-flex h-10 items-center justify-center rounded-md border border-slate-300 bg-white px-4 text-sm font-medium text-slate-700 hover:bg-slate-50"
//             >
//               Reset
//             </button>
//             <div className="ml-auto text-xs text-slate-500">
//               Basic + DA: <span className="font-medium">{INR(totalWage)}</span>
//             </div>
//           </div>

//           {/* Result */}
//           <div className="mt-6">
//             <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
//               <div className="text-xs text-slate-600 mb-1">Bonus Amount</div>
//               <div className="text-3xl font-bold">
//                 {result == null ? "—" : INR(result)}
//               </div>
//               {result != null && (
//                 <p className="mt-2 text-[11px] text-slate-500">
//                   Calc: {INR(totalWage)} × {Number(percent || 0)}%
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Legal hint (tiny) */}
//           <p className="mt-3 text-[11px] text-slate-500">
//             Guidance only. Statutory minimum bonus is 8.33% of eligible wages (or ₹100/year), max 20%, subject to the Act & allocable surplus.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// }


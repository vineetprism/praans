// app/pt-calculator/page.tsx
"use client";

import { useMemo, useState } from "react";

/** ===================== Types ===================== */
type StateCode = "MH" | "KA" | "WB" | "GJ" | "DL";
type Gender = "male" | "female" | "other";

type SlabRule = {
  min: number;               // inclusive lower bound (monthly gross)
  max: number | null;        // inclusive upper bound (null => ∞)
  monthly: number;           // default monthly PT
  februaryMonthly?: number;  // optional Feb bump
};

type StateConfig = {
  name: string;
  slabs: SlabRule[];
  noTax?: boolean; // e.g. Delhi
  // simple exemption flags (expand later if needed)
  exempts: {
    seniors?: boolean;        // age >= 65
    disability?: boolean;
    armedForces?: boolean;
  };
  notes?: string[];
};

/** ===================== STATIC CONFIG (demo only) ===================== */
// ⚠️ Demo slabs. Verify with latest state notifications before payroll.
const STATES: Record<StateCode, StateConfig> = {
  MH: {
    name: "Maharashtra",
    slabs: [
      { min: 0, max: 7500, monthly: 0 },
      { min: 7501, max: 10000, monthly: 175 },
      { min: 10001, max: null, monthly: 200, februaryMonthly: 300 }, // sample Feb bump
    ],
    exempts: { seniors: true, disability: true, armedForces: true },
    notes: [
      "Demo only. Historically some slabs apply a higher deduction in February to meet annual cap.",
    ],
  },
  KA: {
    name: "Karnataka",
    slabs: [
      { min: 0, max: 14999, monthly: 0 },
      { min: 15000, max: null, monthly: 200 },
    ],
    exempts: { seniors: false, disability: true, armedForces: true },
    notes: ["Demo slabs. Cross-check with current Karnataka notification."],
  },
  WB: {
    name: "West Bengal",
    slabs: [
      { min: 0, max: 10000, monthly: 0 },
      { min: 10001, max: 15000, monthly: 110 },
      { min: 15001, max: 25000, monthly: 130 },
      { min: 25001, max: 40000, monthly: 150 },
      { min: 40001, max: null, monthly: 200 },
    ],
    exempts: { seniors: false, disability: true, armedForces: true },
    notes: ["Demo slabs. Validate with latest WB schedule."],
  },
  GJ: {
    name: "Gujarat",
    slabs: [
      { min: 0, max: 5999, monthly: 0 },
      { min: 6000, max: 8999, monthly: 80 },
      { min: 9000, max: 11999, monthly: 150 },
      { min: 12000, max: null, monthly: 200 },
    ],
    exempts: { seniors: false, disability: true, armedForces: true },
    notes: ["Demo slabs. Verify current state schedule."],
  },
  DL: {
    name: "Delhi",
    slabs: [],
    noTax: true,
    exempts: { seniors: false, disability: false, armedForces: false },
    notes: ["Delhi currently does not levy Professional Tax (confirm before payroll)."],
  },
};

/** ===================== Utils ===================== */
const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

function findMonthlyPT(stateCfg: StateConfig, salary: number, monthIndex0: number) {
  if (stateCfg.noTax) return 0;
  const rule = stateCfg.slabs.find(
    (s) => salary >= s.min && (s.max === null || salary <= s.max)
  );
  if (!rule) return 0;
  // Feb = index 1
  return monthIndex0 === 1 && rule.februaryMonthly != null
    ? rule.februaryMonthly
    : rule.monthly;
}

function isExempt(
  stateCfg: StateConfig,
  age: number,
  disabled: boolean,
  isArmedForces: boolean
) {
  const e = stateCfg.exempts || {};
  if (stateCfg.noTax) return true;
  if (e.seniors && age >= 65) return true;
  if (e.disability && disabled) return true;
  if (e.armedForces && isArmedForces) return true;
  return false;
}

/** ===================== Page ===================== */
export default function ProfessionalTaxCalculatorPage() {
  const [state, setState] = useState<StateCode>("MH");
  const [month, setMonth] = useState<number>(new Date().getMonth()); // 0..11
  const [salary, setSalary] = useState<number>(30000);

  const [age, setAge] = useState<number>(28);
  const [gender, setGender] = useState<Gender>("male");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isArmedForces, setIsArmedForces] = useState<boolean>(false);

  const cfg = STATES[state];
  const exempt = useMemo(
    () => isExempt(cfg, age, disabled, isArmedForces),
    [cfg, age, disabled, isArmedForces]
  );

  const monthlyPT = useMemo(() => {
    if (exempt) return 0;
    return findMonthlyPT(cfg, salary, month);
  }, [cfg, salary, month, exempt]);

  const projection = useMemo(() => {
    const months = Array.from({ length: 12 }, (_, m) =>
      exempt ? 0 : findMonthlyPT(cfg, salary, m)
    );
    const total = months.reduce((a, b) => a + b, 0);
    return { months, total };
  }, [cfg, salary, exempt]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Professional Tax</span> Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Pure static config. No API calls. Monthly & annual projections.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Form */}
        <section className="md:col-span-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Calculator</h2>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {/* State */}
            <div>
              <label className="mb-1 block text-sm font-medium">State</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={state}
                onChange={(e) => setState(e.target.value as StateCode)}
              >
                {Object.entries(STATES).map(([code, s]) => (
                  <option key={code} value={code}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Month */}
            <div>
              <label className="mb-1 block text-sm font-medium">Month</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
              >
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((m, i) => (
                  <option key={m} value={i}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Monthly Gross Salary (₹)
              </label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
              />
            </div>

            {/* Age / Gender */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">Age</label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">Gender</label>
                <select
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value as Gender)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Exemption flags */}
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 rounded border-neutral-300"
                  checked={disabled}
                  onChange={(e) => setDisabled(e.target.checked)}
                  disabled={STATES[state]?.noTax}
                />
                Person with Disability
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="size-4 rounded border-neutral-300"
                  checked={isArmedForces}
                  onChange={(e) => setIsArmedForces(e.target.checked)}
                  disabled={STATES[state]?.noTax}
                />
                Armed Forces
              </label>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Monthly PT</div>
              <div className="text-2xl font-semibold">
                {INR(exempt ? 0 : monthlyPT)}
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Annual PT (Projected)</div>
              <div className="text-2xl font-semibold">
                {INR(exempt ? 0 : projection.total)}
              </div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Exemption Status</div>
              <div className="text-base font-medium">
                {STATES[state]?.noTax
                  ? "No PT in this state"
                  : exempt
                  ? "Exempt"
                  : "Not Exempt"}
              </div>
            </div>
          </div>

          {/* Month-wise table */}
          <div className="mt-4 overflow-auto rounded-xl border border-neutral-200">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Month</th>
                  <th className="px-3 py-2 text-right font-medium">PT (₹)</th>
                </tr>
              </thead>
              <tbody>
                {projection.months.map((amt, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-3 py-2">
                      {new Date(2000, i, 1).toLocaleString("en-GB", {
                        month: "long",
                      })}
                    </td>
                    <td className="px-3 py-2 text-right">
                      {INR(exempt ? 0 : amt)}
                    </td>
                  </tr>
                ))}
                <tr className="border-t bg-neutral-50">
                  <td className="px-3 py-2 font-semibold">Total</td>
                  <td className="px-3 py-2 text-right font-semibold">
                    {INR(exempt ? 0 : projection.total)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notes */}
          <div className="mt-3 rounded-2xl border border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
            <div className="mb-1 text-xs text-neutral-600">Notes</div>
            <ul className="list-disc pl-5 text-xs text-neutral-700 space-y-1">
              {(cfg.notes ?? []).map((n, idx) => (
                <li key={idx}>{n}</li>
              ))}
              <li>Static demo. Update slabs here as states revise schedules.</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How this works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>Pick State, Month, and enter Monthly Gross Salary.</li>
            <li>Calculator matches salary to static slabs, with optional Feb bump.</li>
            <li>Exemption flags: Senior (65+), Disability, Armed Forces (as per state config).</li>
            <li>No external calls. Everything is hardcoded in the component.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

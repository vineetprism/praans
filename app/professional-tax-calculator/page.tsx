"use client";
import { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";

type StateCode = "MH" | "KA" | "WB" | "GJ" | "DL";

type SlabRule = {
  min: number;
  max: number | null;
  monthly: number;
  februaryMonthly?: number;
};
type StateConfig = {
  name: string;
  slabs: SlabRule[];
  noTax?: boolean;
  exempts: { seniors?: boolean; disability?: boolean; armedForces?: boolean };
  notes?: string[];
};

const STATES: Record<StateCode, StateConfig> = {
  MH: {
    name: "Maharashtra",
    slabs: [
      { min: 0, max: 7500, monthly: 0 },
      { min: 7501, max: 10000, monthly: 175 },
      { min: 10001, max: null, monthly: 200, februaryMonthly: 300 },
    ],
    exempts: { seniors: true, disability: true, armedForces: true },
    notes: ["Demo only. Feb may have higher deduction to meet annual cap."],
  },
  KA: {
    name: "Karnataka",
    slabs: [
      { min: 0, max: 14999, monthly: 0 },
      { min: 15000, max: null, monthly: 200 },
    ],
    exempts: { seniors: false, disability: true, armedForces: true },
    notes: ["Demo slabs. Cross-check with current notification."],
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
    notes: ["Delhi currently does not levy Professional Tax (reconfirm)."],
  },
};

const INR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v || 0)));

function findMonthlyPT(
  stateCfg: StateConfig,
  salary: number,
  monthIndex0: number
) {
  if (stateCfg.noTax) return 0;
  const rule = stateCfg.slabs.find(
    (s) => salary >= s.min && (s.max === null || salary <= s.max)
  );
  if (!rule) return 0;
  return monthIndex0 === 1 && rule.februaryMonthly != null
    ? rule.februaryMonthly
    : rule.monthly;
}
function isExempt(stateCfg: StateConfig) {
  const e = stateCfg.exempts || {};
  if (stateCfg.noTax) return true;
  return false;
}

export default function ProfessionalTaxCalculatorPage() {
  const [state, setState] = useState<StateCode>("MH");
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const [salary, setSalary] = useState<number>(30000);

  const cfg = STATES[state];

  const [calculated, setCalculated] = useState(false);
  const [outExempt, setOutExempt] = useState(false);
  const [outMonthlyPT, setOutMonthlyPT] = useState(0);
  const [outMonths, setOutMonths] = useState<number[]>(Array(12).fill(0));
  const [outTotal, setOutTotal] = useState(0);

  const onCalculate = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const exempt = isExempt(cfg);
      const monthsArr = Array.from({ length: 12 }, (_, m) =>
        exempt ? 0 : findMonthlyPT(cfg, salary, m)
      );
      const monthly = exempt ? 0 : findMonthlyPT(cfg, salary, month);
      const total = monthsArr.reduce((a, b) => a + b, 0);

      setOutExempt(exempt);
      setOutMonths(monthsArr);
      setOutMonthlyPT(monthly);
      setOutTotal(total);
      setCalculated(true);
    },
    [cfg, salary, month]
  );

  return (
    <div className="mx-auto max-w-5xl px-3 sm:px-4 md:px-6 py-6 sm:py-8">
      <form
        onSubmit={onCalculate}
        className="rounded-md shadow-sm overflow-hidden border border-orange-200 bg-white"
      >
        <div className="bg-orange-500 text-white">
          <h1 className="text-center text-xl sm:text-2xl font-semibold py-4">
            Professional Tax Calculator
          </h1>
        </div>

        <div className="divide-y">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end bg-gradient-to-b from-neutral-100 to-neutral-50 text-sm sm:text-base text-neutral-800 px-4 py-4">
              <span className="font-medium">Select State :</span>
            </div>
            <div className="col-span-12 md:col-span-8 px-4 py-4">
              <select
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end bg-gradient-to-b from-neutral-100 to-neutral-50 text-sm sm:text-base text-neutral-800 px-4 py-4">
              <span className="font-medium">Enter Monthly Salary/Wages :</span>
            </div>
            <div className="col-span-12 md:col-span-8 px-4 py-4">
              <input
                type="number"
                min={0}
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
              />
            </div>
          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end bg-gradient-to-b from-neutral-100 to-neutral-50 text-sm sm:text-base text-neutral-800 px-4 py-4">
              <span className="font-medium">Month :</span>
            </div>
            <div className="col-span-12 md:col-span-8 px-4 py-4">
              <select
                className="w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          </div>

          <div className="flex items-center justify-center py-6">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-2.5 text-white font-semibold shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer"
            >
              Calculate
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-md border border-orange-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-600">Monthly PT</div>
          <div className="mt-1 text-2xl font-semibold text-orange-600">
            {calculated ? INR(outMonthlyPT) : "—"}
          </div>
        </div>
        <div className="rounded-md border border-orange-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-600">Annual PT (Projected)</div>
          <div className="mt-1 text-2xl font-semibold text-orange-600">
            {calculated ? INR(outTotal) : "—"}
          </div>
        </div>
        <div className="rounded-md border border-orange-200 bg-white p-4 shadow-sm">
          <div className="text-xs text-neutral-600">Exemption Status</div>
          <div className="mt-1 text-base font-medium">
            {calculated
              ? STATES[state]?.noTax
                ? "No PT in this state"
                : outExempt
                ? "Exempt"
                : "Not Exempt"
              : "—"}
          </div>
        </div>
      </div>

      <div className="mt-5 overflow-auto rounded-md border border-orange-200 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-orange-50 border-b border-orange-200">
            <tr>
              <th className="px-3 py-2 text-left font-medium text-orange-900">
                Month
              </th>
              <th className="px-3 py-2 text-right font-medium text-orange-900">
                PT (₹)
              </th>
            </tr>
          </thead>
          <tbody>
            {outMonths.map((amt, i) => (
              <tr key={i} className="border-t last:border-b-0">
                <td className="px-3 py-2">
                  {new Date(2000, i, 1).toLocaleString("en-GB", {
                    month: "long",
                  })}
                </td>
                <td className="px-3 py-2 text-right">
                  {calculated ? INR(amt) : "—"}
                </td>
              </tr>
            ))}
            <tr className="border-t bg-orange-50">
              <td className="px-3 py-2 font-semibold">Total</td>
              <td className="px-3 py-2 text-right font-semibold">
                {calculated ? INR(outTotal) : "—"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

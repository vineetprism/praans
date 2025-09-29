// app/page.tsx
"use client";

import { useMemo, useState } from "react";

/** ---------- Types ---------- */
type StateCode = "AP" | "HR" | "MH" | "DL";
type CategoryCode = "agriculture" | "construction" | "manufacturing";
type SkillCode = "skilled" | "semi" | "unskilled";

/** ---------- Demo Data (inline so this single page just works) ---------- */
const STATES: Record<StateCode, string> = {
  AP: "Andhra Pradesh",
  HR: "Haryana",
  MH: "Maharashtra",
  DL: "Delhi",
};

const CATEGORIES: Record<CategoryCode, string> = {
  agriculture: "Agriculture",
  construction: "Construction",
  manufacturing: "Manufacturing",
};

const SKILLS: Record<SkillCode, string> = {
  skilled: "Skilled",
  semi: "Semi-Skilled",
  unskilled: "Unskilled",
};

// Daily base wage (INR) for 8 hours — replace with live API later
const WAGE_TABLE: Record<
  StateCode,
  Record<CategoryCode, Record<SkillCode, number>>
> = {
  AP: {
    agriculture: { skilled: 395, semi: 365, unskilled: 335 },
    construction: { skilled: 425, semi: 395, unskilled: 365 },
    manufacturing: { skilled: 385, semi: 360, unskilled: 335 },
  },
  HR: {
    agriculture: { skilled: 520, semi: 480, unskilled: 460 },
    construction: { skilled: 560, semi: 520, unskilled: 490 },
    manufacturing: { skilled: 550, semi: 510, unskilled: 480 },
  },
  MH: {
    agriculture: { skilled: 500, semi: 470, unskilled: 440 },
    construction: { skilled: 580, semi: 540, unskilled: 500 },
    manufacturing: { skilled: 560, semi: 520, unskilled: 480 },
  },
  DL: {
    agriculture: { skilled: 650, semi: 610, unskilled: 600 },
    construction: { skilled: 700, semi: 660, unskilled: 620 },
    manufacturing: { skilled: 680, semi: 640, unskilled: 610 },
  },
};

/** ---------- Utils ---------- */
const formatINR = (v: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Math.round(v)));

const getDailyWage = (
  state: StateCode,
  category: CategoryCode,
  skill: SkillCode
) => WAGE_TABLE[state]?.[category]?.[skill] ?? 0;

/** ---------- Page (Client Component) ---------- */
export default function Page() {
  const [state, setState] = useState<StateCode>("AP");
  const [category, setCategory] = useState<CategoryCode>("construction");
  const [skill, setSkill] = useState<SkillCode>("skilled");

  const [daysPerMonth, setDaysPerMonth] = useState<number>(26);
  const [hoursPerDay, setHoursPerDay] = useState<number>(8);
  const [overtimeHours, setOvertimeHours] = useState<number>(0);
  const [otMultiplier, setOtMultiplier] = useState<number>(2); // OT = 2x hourly by default

  const daily = useMemo(
    () => getDailyWage(state, category, skill),
    [state, category, skill]
  );
  const hourly = useMemo(() => (hoursPerDay > 0 ? daily / 8 : 0), [daily, hoursPerDay]);
  const monthlyBase = useMemo(() => daily * daysPerMonth, [daily, daysPerMonth]);
  const monthlyOT = useMemo(
    () => overtimeHours * hourly * otMultiplier,
    [overtimeHours, hourly, otMultiplier]
  );
  const monthlyTotal = monthlyBase + monthlyOT;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            <span className="text-[#eb8535]">Minimum</span> Wages Calculator
          </h1>
          <p className="text-sm text-neutral-600">
            Pick state, category, skill level → get daily & monthly payout projections.
          </p>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-5">
        {/* Calculator */}
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
                {Object.entries(STATES).map(([code, name]) => (
                  <option key={code} value={code}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Industry / Category
              </label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={category}
                onChange={(e) => setCategory(e.target.value as CategoryCode)}
              >
                {Object.entries(CATEGORIES).map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Skill */}
            <div>
              <label className="mb-1 block text-sm font-medium">Skill Level</label>
              <select
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={skill}
                onChange={(e) => setSkill(e.target.value as SkillCode)}
              >
                {Object.entries(SKILLS).map(([code, label]) => (
                  <option key={code} value={code}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Days/Month */}
            <div>
              <label className="mb-1 block text-sm font-medium">
                Working Days / Month
              </label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={daysPerMonth}
                onChange={(e) => setDaysPerMonth(Number(e.target.value))}
              />
            </div>

            {/* Hours/Day */}
            <div>
              <label className="mb-1 block text-sm font-medium">Hours / Day</label>
              <input
                type="number"
                min={0}
                className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                value={hoursPerDay}
                onChange={(e) => setHoursPerDay(Number(e.target.value))}
              />
              <p className="mt-1 text-xs text-neutral-500">
                Info only; base assumes 8 hrs/day for rate.
              </p>
            </div>

            {/* Overtime */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium">
                  OT Hours / Month
                </label>
                <input
                  type="number"
                  min={0}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={overtimeHours}
                  onChange={(e) => setOvertimeHours(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  OT Rate (× hourly)
                </label>
                <input
                  type="number"
                  min={1}
                  step={0.25}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm"
                  value={otMultiplier}
                  onChange={(e) => setOtMultiplier(Number(e.target.value))}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Daily Wage</div>
              <div className="text-2xl font-semibold">{formatINR(daily)}</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Monthly Base</div>
              <div className="text-2xl font-semibold">{formatINR(monthlyBase)}</div>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
              <div className="text-xs text-neutral-500">Overtime (Est.)</div>
              <div className="text-2xl font-semibold">{formatINR(monthlyOT)}</div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl border border-amber-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4">
            <div className="text-xs text-neutral-600 mb-1">Monthly Total</div>
            <div className="text-3xl font-bold">{formatINR(monthlyTotal)}</div>
            <p className="mt-2 text-xs text-neutral-500">
              Demo rates only; verify with latest state notifications.
            </p>
          </div>
        </section>

        {/* Help / Notes */}
        <aside className="md:col-span-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">How this works</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-neutral-600">
            <li>
              Change <b>State</b>, <b>Category</b>, and <b>Skill</b> → daily wage updates.
            </li>
            <li>Update days, add overtime hours & multiplier for monthly total.</li>
            <li>
              Swap the inline table with your API later
              (e.g., <code>/api/minimum-wages/&#123;state_slug&#125;</code>).
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

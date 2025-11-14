"use client";
import React, { useMemo, useState } from "react";

function daysBetween(a: Date, b: Date) {
  const ms = b.getTime() - a.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

export default function GratuityCalculatorPage() {
  const [basicDA, setBasicDA] = useState<number>(30000);
  const [mode, setMode] = useState<"dates" | "y-m-d">("dates");
  const [joinDate, setJoinDate] = useState<string>("2010-01-01");
  const [leaveDate, setLeaveDate] = useState<string>("2025-01-01");

  // alternative Y-M-D input
  const [yearsInput, setYearsInput] = useState<number>(15);
  const [monthsInput, setMonthsInput] = useState<number>(0);
  const [daysInput, setDaysInput] = useState<number>(0);

  const [isDeathCase, setIsDeathCase] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState(false);

  // Constants
  const GRATUITY_CAP = 2000000; // ₹20,00,000
  const ELIGIBILITY_DAYS = 4 * 365 + 240; // 4 years and 240 days => 1700 days

  // Compute tenure (in days) from selected input mode
  const tenureDays = useMemo(() => {
    if (mode === "dates") {
      try {
        const j = new Date(joinDate + "T00:00:00");
        const l = new Date(leaveDate + "T00:00:00");
        if (isNaN(j.getTime()) || isNaN(l.getTime())) return 0;
        if (l <= j) return 0;
        return daysBetween(j, l);
      } catch (e) {
        return 0;
      }
    }

    // y-m-d mode: approximate months as 30 days and years as 365 days
    return yearsInput * 365 + monthsInput * 30 + daysInput;
  }, [mode, joinDate, leaveDate, yearsInput, monthsInput, daysInput]);

  // Completed whole years and remaining months/days for rounding
  const completedYears = Math.floor(tenureDays / 365);
  const remainingDaysAfterYears = tenureDays - completedYears * 365;
  const remainingMonths = Math.floor(remainingDaysAfterYears / 30);
  const remainingDays = remainingDaysAfterYears - remainingMonths * 30;

  // Rounding rule for gratuity formula years: if months < 6 -> don't add; if months >=6 -> add 1 year
  const roundedYearsForFormula = useMemo(() => {
    if (completedYears === 0 && remainingMonths === 0 && remainingDays === 0)
      return 0;
    if (remainingMonths > 6) return completedYears + 1;
    if (remainingMonths === 6 && remainingDays > 0) return completedYears + 1;
    if (remainingMonths >= 6) return completedYears + 1; // covers remainingMonths ===6 and days===0
    return completedYears;
  }, [completedYears, remainingMonths, remainingDays]);

  const isEligibleByTenure = tenureDays >= ELIGIBILITY_DAYS;

  // Normal gratuity formula: (15 * basic * tenureYears) / 26
  const normalGratuityRaw = useMemo(() => {
    if (!isEligibleByTenure) return 0;
    const yearsToUse = roundedYearsForFormula;
    const val = (15 * basicDA * yearsToUse) / 26;
    return Number.isFinite(val) ? Math.max(0, val) : 0;
  }, [isEligibleByTenure, roundedYearsForFormula, basicDA]);

  // Death/slab gratuity
  const deathGratuityRaw = useMemo(() => {
    // Determine slab based on completed years (not rounded)
    const y = completedYears;
    if (tenureDays < 365) {
      return 2 * basicDA; // less than 1 year
    }
    if (y >= 1 && y < 5) return 6 * basicDA;
    if (y >= 5 && y < 11) return 12 * basicDA;
    if (y >= 11 && y < 20) return 20 * basicDA;
    if (y >= 20) {
      const yearsToUse = roundedYearsForFormula;
      return (15 * basicDA * yearsToUse) / 26;
    }
    return 0;
  }, [tenureDays, completedYears, roundedYearsForFormula, basicDA]);

  // Final payable gratuity depending on normal vs death slab
  const finalGratuityRaw = useMemo(() => {
    if (isDeathCase) {
      const normal = normalGratuityRaw;
      const death = deathGratuityRaw;
      const chosen = Math.max(normal, death);
      return chosen;
    }
    return normalGratuityRaw;
  }, [isDeathCase, normalGratuityRaw, deathGratuityRaw]);

  const finalGratuityPayable = Math.min(finalGratuityRaw, GRATUITY_CAP);
  const isAboveCap = finalGratuityRaw > GRATUITY_CAP;

  // Utility: formatted tenure string
  const tenureString = `${completedYears} years, ${remainingMonths} months, ${remainingDays} days`;

  const handleCopy = () => {
    const text = `Payable gratuity: ₹ ${finalGratuityPayable.toFixed(
      2
    )} (Raw: ₹ ${finalGratuityRaw.toFixed(
      2
    )})\nTenure: ${tenureString} (${tenureDays} days)\nRounded years used: ${roundedYearsForFormula}`;
    navigator.clipboard?.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="min-h-screen p-2">
      <div className="mx-auto max-w-8xl">
        {/* Header Section */}
        <div className="mb-4 text-center">
          <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-4 shadow-md">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>

          <h1 className="text-[30px] text-center font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Gratuity Calculator
          </h1>

          <p className="mt-2 text-gray-600 text-center text-[15px]">
            Gratuity is a lump-sum payment made by an employer to an employee
            for long-term service, governed by the Payment of Gratuity Act,
            1972.
          </p>
          <p className="text-gray-600 text-center text-[15px]">
            An employee becomes eligible for gratuity after 4 years and 240 days
            of continuous service, except in case of death or disablement.
          </p>
          <p className="text-gray-600 text-center text-[15px]">
            Maximum limit of gratuity payment is 20 lakhs through one employer
            but tax exemption under income tax is lifetime. Employer can deny
            gratuity above 20 lakhs and if he wants to pay then it will be
            voluntary not statutory. Under Section 10(10) of the Income Tax Act,
            the ₹20 lakh tax-free limit applies in aggregate for gratuity
            received from one or more employers during the employee's lifetime
          </p>

          {/* Added meaning bullets below */}
          <div className="mt-4 max-w-2xl mx-auto text-left">
            <div className="font-semibold text-gray-800 mb-2">Meaning:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-[15px]">
                <li>If you get ₹12 lakh from Employer A (tax-free),</li>
                <li>Then later ₹15 lakh from Employer B,</li>
              </ul>
              <div className="flex items-start gap-2 text-gray-700 text-[15px]">
                <span>👉</span>
                <span>
                  Only ₹8 lakh of that second payment will be tax-free (₹20 lakh
                  total lifetime exemption).
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-2">
            <div className="rounded-2xl bg-white px-4 py-2 shadow-md border-t-4 border-orange-500">
              <h2 className="mb-2 flex items-center gap-2 text-[20px] font-semibold text-gray-800">
                Case Type
              </h2>

              <div className="grid gap-2 sm:grid-cols-2">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-2 transition-all ${
                    !isDeathCase
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <input
                    type="radio"
                    checked={!isDeathCase}
                    onChange={() => setIsDeathCase(false)}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Normal Case
                    </div>
                    <div className="text-sm text-gray-600">
                      Standard gratuity calculation
                    </div>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-2 transition-all ${
                    isDeathCase
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <input
                    type="radio"
                    checked={isDeathCase}
                    onChange={() => setIsDeathCase(true)}
                    className="h-4 w-4 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">
                      Death / Disablement
                    </div>
                    <div className="text-sm text-gray-600">
                      Special slab calculation
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Basic Details */}
            <div className="rounded-2xl bg-white px-4 py-2 shadow-md border-t-4 border-orange-500">
              <h2 className="mb-2 flex items-center gap-2 text-[20px] font-semibold text-gray-800">
                Basic Details
              </h2>

              <div className="space-y-2">
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Last Drawn Salary (Basic + DA)
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={basicDA}
                        onChange={(e) =>
                          setBasicDA(Number(e.target.value || 0))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 pl-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Enter last drawn Basic + DA amount
                    </div>
                  </label>
                </div>

                {/* Tenure Mode Selection */}
                <div className="rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-2">
                  <div className="mb-2 text-sm font-semibold text-gray-700">
                    Tenure Input Mode
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <label
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-2 py-1 transition-all ${
                        mode === "dates"
                          ? "border-orange-500 bg-white font-semibold text-orange-600"
                          : "border-gray-200 bg-white text-gray-600 hover:border-orange-200"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={mode === "dates"}
                        onChange={() => setMode("dates")}
                        className="h-4 w-4 text-orange-500"
                      />
                      <span>📅 Use Dates</span>
                    </label>

                    <label
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-2 py-1 transition-all ${
                        mode === "y-m-d"
                          ? "border-orange-500 bg-white font-semibold text-orange-600"
                          : "border-gray-200 bg-white text-gray-600 hover:border-orange-200"
                      }`}
                    >
                      <input
                        type="radio"
                        checked={mode === "y-m-d"}
                        onChange={() => setMode("y-m-d")}
                        className="h-4 w-4 text-orange-500"
                      />
                      <span>🔢 Enter Y-M-D</span>
                    </label>
                  </div>
                </div>

                {/* Conditional Inputs based on Mode */}
                {mode === "dates" ? (
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Date of Joining
                        </div>
                        <input
                          type="date"
                          value={joinDate}
                          onChange={(e) => setJoinDate(e.target.value)}
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                      </label>
                    </div>

                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Date of Leaving / Death
                        </div>
                        <input
                          type="date"
                          value={leaveDate}
                          onChange={(e) => setLeaveDate(e.target.value)}
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-2 sm:grid-cols-3">
                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Years
                        </div>
                        <input
                          type="number"
                          value={yearsInput}
                          onChange={(e) =>
                            setYearsInput(Number(e.target.value || 0))
                          }
                          className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                          min={0}
                        />
                      </label>
                    </div>

                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Months
                        </div>
                        <input
                          type="number"
                          value={monthsInput}
                          onChange={(e) =>
                            setMonthsInput(Number(e.target.value || 0))
                          }
                          className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                          min={0}
                          max={11}
                        />
                      </label>
                    </div>

                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Days
                        </div>
                        <input
                          type="number"
                          value={daysInput}
                          onChange={(e) =>
                            setDaysInput(Number(e.target.value || 0))
                          }
                          className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                          min={0}
                          max={30}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tenure & Eligibility */}
            <div className="rounded-2xl bg-white p-2 shadow-md border-t-4 border-orange-400">
              <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold text-gray-800">
                Tenure & Eligibility
              </h2>

              <div className="space-y-2">
                <div className="rounded-xl p-2 border-l-4 border-orange-500">
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">
                        Service Tenure
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Total:{" "}
                        <span className="font-mono font-semibold">
                          {tenureDays} days
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        Computed:{" "}
                        <span className="font-semibold">{tenureString}</span>
                      </div>
                      <div className="mt-2 rounded-lg bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700 inline-block">
                        Rounded years for formula: {roundedYearsForFormula}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eligibility Status */}
                <div
                  className={`rounded-xl border-2 p-2 transition-all ${
                    isEligibleByTenure
                      ? "border-orange-200 bg-orange-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full ${
                          isEligibleByTenure ? "bg-orange-500" : "bg-red-500"
                        }`}
                      >
                        {isEligibleByTenure ? (
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">
                          Eligibility Status
                        </div>
                        <div className="text-sm text-gray-600">
                          Threshold: 4 years 240 days (1,700 days)
                        </div>
                      </div>
                    </div>
                    <div
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        isEligibleByTenure
                          ? "bg-orange-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {isEligibleByTenure ? "Eligible" : "Not Eligible"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="lg:col-span-1 space-y-2">
            <div className="sticky top-4 space-y-2">
              <div className="rounded-2xl bg-gray-50 p-2 shadow-md text-gray-800">
                <div className="mb-2 flex items-center gap-2">
                  <h2 className="text-[17px] font-semibold">Final Gratuity</h2>
                </div>

                <div className="mb-2 rounded-xl bg-white px-2 py-1 border border-orange-200 shadow-sm">
                  <div className="text-sm opacity-90">Calculated Amount</div>
                  <div className="mt-1 text-[17px] font-bold">
                    ₹
                    {finalGratuityRaw.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>

                {isAboveCap ? (
                  <div className="mb-2 rounded-xl bg-white p-2 shadow-sm">
                    <div className="flex items-start gap-2">
                      <svg
                        className="h-5 w-5 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      <div className="text-sm">
                        <div className="font-semibold">Above Statutory Cap</div>
                        <div className="mt-1 text-xs opacity-90">
                          Exceeds ₹20,00,000 ceiling. Excess payable
                          voluntarily.
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-2 rounded-xl bg-orange-100 p-2 backdrop-blur-sm text-center text-orange-800">
                    <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Within Statutory Ceiling
                    </div>
                  </div>
                )}

                <div className="rounded-xl bg-white p-2 shadow-sm border-2 border-orange-200">
                  <div className="text-sm opacity-90 mb-1">Payable Amount</div>
                  <div className="text-[17px] font-bold">
                    ₹
                    {finalGratuityPayable.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="mt-1 border-t border-white/20">
                    <div className="text-sm opacity-90">Statutory Cap</div>
                    <div className="text-[17px] font-semibold">₹20,00,000</div>
                  </div>
                </div>

                {isDeathCase && (
                  <div className="mt-2 rounded-xl bg-white/10 p-2 backdrop-blur-sm text-xs">
                    <div className="font-semibold mb-1">
                      📌 Death Case Applied
                    </div>
                    <div className="opacity-90">
                      Higher of normal formula and slab gratuity is payable
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Examples */}
              <div className="rounded-2xl bg-white p-2 shadow-md border-l-4 border-orange-500">
                <h3 className="mb-2 flex items-center gap-2 font-semibold text-gray-800 text-sm">
                  <svg
                    className="h-5 w-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Quick Examples
                </h3>
                <div className="space-y-2 text-xs">
                  <div className="rounded-lg bg-gray-50 p-2 shadow-sm">
                    <div className="font-semibold text-gray-700">
                      Normal: 15 yrs, ₹30k
                    </div>
                    <div className="text-gray-600 font-mono">
                      = ₹{((15 * 30000 * 15) / 26).toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 shadow-sm">
                    <div className="font-semibold text-gray-700">
                      Death: 2 yrs, ₹25k
                    </div>
                    <div className="text-gray-600 font-mono">
                      = ₹{(6 * 25000).toFixed(2)}
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-2 shadow-sm">
                    <div className="font-semibold text-gray-700">
                      Death: 8 yrs, ₹40k
                    </div>
                    <div className="text-gray-600 font-mono">
                      = ₹{(12 * 40000).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculation Details - Now inside sticky container */}
              <div className="rounded-2xl bg-white p-2 shadow-md border-l-4 border-orange-500">
                <h3 className="mb-1 flex items-center gap-2 font-semibold text-gray-800 text-sm">
                  <svg
                    className="h-5 w-5 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  Calculation Details
                </h3>
                <div className="space-y-2 text-xs">
                  {/* Normal Gratuity */}
                  <div className="rounded-lg border-2 border-orange-200 p-2 shadow-sm">
                    <div className="mb-1 flex items-center gap-2 font-semibold text-gray-700">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      Normal Gratuity
                    </div>
                    <div className="text-base font-bold text-gray-700">
                      ₹
                      {normalGratuityRaw.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-xs text-gray-600 font-mono">
                      (15 × {basicDA} × {roundedYearsForFormula}) ÷ 26
                    </div>
                    {!isEligibleByTenure && (
                      <div className="text-xs text-red-600 font-semibold mt-1">
                        ⚠ Not payable - tenure below threshold
                      </div>
                    )}
                  </div>

                  {/* Death/Disablement Slab */}
                  <div className="rounded-lg border-2 border-orange-200 p-2 shadow-sm">
                    <div className="mb-1 flex items-center gap-2 font-semibold text-gray-700">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Death / Disablement Slab
                    </div>
                    <div className="text-base font-bold text-gray-700">
                      ₹
                      {deathGratuityRaw.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                    <div className="text-xs text-gray-600">
                      Based on {completedYears} completed years
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes - Enhanced with collapsible sections */}
        <div className="mt-2 rounded-2xl bg-white p-2 shadow-md border-l-4 border-orange-500">
          <h3 className="mb-2 flex items-center gap-2 font-semibold text-gray-800">
            <svg
              className="h-5 w-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Important Legal Notes
          </h3>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-6">
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                ⏱️ Eligibility
              </div>
              <div className="text-gray-700">
                Minimum 4 years 240 days (1,700 days) service required for
                normal gratuity
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                📊 Rounding Rule
              </div>
              <div className="text-gray-700">
                Months &lt; 6 → don't round; Months ≥ 6 → round up one year
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                💰 Statutory Cap
              </div>
              <div className="text-gray-700">
                Maximum ₹20,00,000. Excess payable voluntarily by employer
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                ⚠️ Death Cases
              </div>
              <div className="text-gray-700">
                Slabs (2×, 6×, 12×, 20×) are minimum - pay higher of slab or
                normal
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                👥 Nomination
              </div>
              <div className="text-gray-700">
                Pay nominee if registered; otherwise legal heirs. Deposit for
                minors
              </div>
            </div>
            <div className="rounded-lg bg-gray-50 p-2 text-sm border border-orange-100">
              <div className="font-semibold text-[#1C284F] mb-1">
                ⏰ Payment Timeline
              </div>
              <div className="text-gray-700">
                Determine within 30 days, pay within next 30 days. Delay: 10%
                p.a. interest
              </div>
            </div>
          </div>
        </div>

        {/* Death-case slabs (Gratuity on death) */}
        <div className="mt-4 rounded-2xl bg-white p-4 shadow-md border-l-4 border-orange-500">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-800">
            <svg
              className="h-5 w-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            In case of death — Amount payable (slabs)
          </h3>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-lg border border-orange-100 bg-gray-50 p-2">
              <div className="font-semibold text-gray-800 mb-1">
                Less than 1 year
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>2 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-2">
              <div className="font-semibold text-gray-800 mb-1">
                1 year or more but &lt; 5 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>6 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-2">
              <div className="font-semibold text-gray-800 mb-1">
                5 years or more but &lt; 11 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>12 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-2">
              <div className="font-semibold text-gray-800 mb-1">
                11 years or more but &lt; 20 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>20 × basic salary</strong>
              </div>
            </div>
            <div className="rounded-lg border border-orange-100 bg-gray-50 p-2">
              <div className="font-semibold text-gray-800 mb-1">
                20 years or more
              </div>
              <div className="text-sm text-gray-700">
                Amount payable:{" "}
                <strong>
                  Half month’s salary for every completed 6 months of service
                  (like normal gratuity formula)
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Death-case examples as responsive cards (2 cols on md, single row on lg) */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-orange-100 bg-white p-2 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">
              Example 1: Employee dies after 2 years of service
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Last drawn basic + DA = ₹25,000</li>
              <li>Applicable slab = 6 × basic salary</li>
              <li>
                Gratuity = 25,000 × 6 = <strong>₹1,50,000</strong>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-orange-100 bg-white p-2 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">
              Example 2: Employee dies after 8 years of service
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Last drawn basic + DA = ₹40,000</li>
              <li>Applicable slab = 12 × basic salary</li>
              <li>
                Gratuity = 40,000 × 12 = <strong>₹4,80,000</strong>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-orange-100 bg-white p-2 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">
              Example 3: Employee dies after 15 years of service
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Last drawn basic + DA = ₹50,000</li>
              <li>Applicable slab = 20 × basic salary</li>
              <li>
                Gratuity = 50,000 × 20 = <strong>₹10,00,000</strong>
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-orange-100 bg-white p-2 shadow-sm">
            <div className="font-semibold text-gray-800 mb-2">
              Example 4: Employee dies after 25 years of service
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Last drawn basic + DA = ₹70,000</li>
              <li>Normal formula = (70,000 × 15 × 25) ÷ 26</li>
              <li>
                <strong>₹10,09,615</strong> (subject to ₹20L max)
              </li>
            </ul>
          </div>
        </div>

        {/* NEW: Comprehensive Legal Framework Section - Grid Layout */}
        <div className="mt-4">
          <div className="grid gap-4 lg:grid-cols-2 mb-4">
            {/* Section 1: Final Rule of Thumb */}
            <div className="rounded-2xl bg-gray-50 p-2 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-2">
                Final Rule of Thumb Comparison
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2">
                      When Normal &lt; Death Slab
                    </div>
                    <div>Pay death gratuity (slab)</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2">
                      When Normal &gt; Death Slab
                    </div>
                    <div>Pay normal gratuity (formula)</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2">
                      Either Way
                    </div>
                    <div>Apply ₹20 lakh statutory ceiling</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Who Gets the Gratuity */}
            <div className="rounded-2xl bg-gray-50 p-2 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-2">
                Who Gets the Gratuity
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <span className="font-semibold text-orange-600">✓</span>
                    <span>
                      <strong>If nomination is registered:</strong> Gratuity is
                      paid to the nominee.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-orange-600">✓</span>
                    <span>
                      <strong>If no nomination:</strong> Payment is made to
                      legal heirs (spouse, children, etc.).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-orange-600">✓</span>
                    <span>
                      <strong>If minor heirs exist:</strong> Amount is deposited
                      in their name in a bank until majority.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3: Time Limit & Payment */}
            <div className="rounded-2xl bg-gray-50 p-2 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-2">
                Time Limit & Payment Steps
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <div className="font-semibold text-orange-700 mb-1">
                      Employer to Determine
                    </div>
                    <div className="text-xs">Within 30 days of death</div>
                  </div>
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <div className="font-semibold text-orange-700 mb-1">
                      Payment to Nominee/Heir
                    </div>
                    <div className="text-xs">Within 30 days thereafter</div>
                  </div>
                </div>
                <div className="bg-red-50 p-2 rounded-lg shadow-sm">
                  <div className="font-semibold text-red-700 mb-1">
                    ⚠️ Delay in Payment
                  </div>
                  <div>10% simple interest per annum (Section 7(3A))</div>
                </div>
              </div>
            </div>

            {/* Section 4: The Core Principle */}
            <div className="rounded-2xl bg-gray-50 shadow-md border-l-4 border-orange-500 p-2">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-2">
                The Core Principle
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <p>
                  When an employee dies while in service, the Payment of
                  Gratuity Act, 1972 applies through Rule 10(1) of the Payment
                  of Gratuity (Central) Rules, 1972, which provides minimum
                  slabs for gratuity based on completed service years.
                </p>
                <p className="font-semibold text-orange-700">
                  👉 Those slabs are not maximum limits. They are minimum
                  guaranteed amounts payable if the normal formula gives less.
                </p>
                <p>
                  So, if the normal formula amount is higher than the death slab
                  amount, the higher (normal) amount must be paid — subject to
                  the ₹20 lakh ceiling.
                </p>
              </div>
            </div>
          </div>
          {/* Section 5: Supporting Logic from the Law */}
          <div className="rounded-2xl p-2 bg-gray-50 shadow-md border-l-4 border-orange-500">
            <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-2">
              Supporting Logic from the Law
            </h3>
            <div className="text-gray-700 space-y-2 text-sm">
              <p>
                Let’s see what Rule 10(1) says: "In the case of death of an
                employee, gratuity shall be paid to his nominee or heirs at the
                rates prescribed below"
              </p>
              <p>
                In the case of death of an employee, gratuity shall be paid to
                his nominee or heirs at the rates prescribed below — Provided
                that the amount of gratuity payable shall not exceed the amount
                which would have been payable had the employee retired on that
                date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

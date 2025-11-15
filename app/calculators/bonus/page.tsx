"use client";
import React, { useMemo, useState } from "react";

export default function BonusCalculatorPage() {
  const [basicDA, setBasicDA] = useState<number>(10000);
  const [stateMinWage, setStateMinWage] = useState<number>(10000);
  const [bonusPercent, setBonusPercent] = useState<number>(8.33);
  const [workingDays, setWorkingDays] = useState<number>(200);
  const [showCopied, setShowCopied] = useState(false);

  // Validation rules from the requirement
  const isEligibleBySalary = basicDA <= 21000;
  const isEligibleByDays = workingDays >= 30;

  const calculationBase = useMemo(() => {
    if (basicDA < 7000) return 7000;
    return stateMinWage;
  }, [basicDA, stateMinWage]);

  const bonusAmount = useMemo(() => {
    if (!isEligibleBySalary) return 0;
    if (!isEligibleByDays) return 0;
    const bonus = (calculationBase * (bonusPercent / 100) * workingDays) / 365;
    return Number.isFinite(bonus) ? bonus : 0;
  }, [
    calculationBase,
    bonusPercent,
    workingDays,
    isEligibleBySalary,
    isEligibleByDays,
  ]);

  const handleCopy = () => {
    const text = `Bonus = ${calculationBase} × ${bonusPercent}% × ${workingDays} / 365 = ₹ ${bonusAmount.toFixed(
      2
    )}`;
    navigator.clipboard?.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-4 shadow-md">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-[30px] font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Bonus Calculator
          </h1>
          <p className="text-gray-600">Calculate employee bonuses with ease</p>
        </div>

        {/* Main Content Grid - Adjusted proportions */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Column - Input Details (7 columns - reduced from full width) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-orange-500">
              <h2 className="mb-6 flex items-center gap-2 text-[20px] font-semibold text-gray-800">
                Input Details
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 mb-5">
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Salary (Basic + DA)
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
                        className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 pl-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      Employee's Basic + DA amount
                    </div>
                  </label>
                </div>

                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      State Minimum Wage
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="number"
                        value={stateMinWage}
                        onChange={(e) =>
                          setStateMinWage(Number(e.target.value || 0))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 pl-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      Minimum wage for state
                    </div>
                  </label>
                </div>

                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Bonus Percentage
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        step="0.01"
                        value={bonusPercent}
                        onChange={(e) =>
                          setBonusPercent(Number(e.target.value || 0))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 pr-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                        max={100}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        %
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      Default: 8.33% (Range: 8.33% - 20%)
                    </div>
                  </label>
                </div>

                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Working Days
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={workingDays}
                        onChange={(e) =>
                          setWorkingDays(Number(e.target.value || 0))
                        }
                        className="w-full rounded-xl border-2 border-gray-200 px-2 py-2 pr-12 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                        days
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-800">
                      In financial year (min: 30 days)
                    </div>
                  </label>
                </div>
              </div>

              {/* Bonus Amount Card in Input Details */}
              <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-5 border-2 border-orange-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-md text-gray-800 font-medium">
                      Total Bonus Payable
                    </h3>
                    <div className="text-4xl font-bold text-orange-600 mt-2">
                      ₹
                      {bonusAmount.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </div>
                  </div>
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      bonusAmount > 0
                        ? "bg-green-500 text-white"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {bonusAmount > 0 ? (
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
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ) : (
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {(!isEligibleBySalary || !isEligibleByDays) && (
                  <div className="rounded-lg bg-red-500/90 p-3 text-white text-sm flex items-start gap-2 mb-4">
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
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77 1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <div>
                      <div className="font-semibold">Not payable</div>
                      <div className="text-xs mt-1">
                        Eligibility criteria not met
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-lg bg-white p-3">
                  <div className="text-xs font-semibold text-gray-600 mb-2">
                    FORMULA
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>Bonus = Eligible Salary × (Bonus%) × (Working Days) ÷ 365</div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="text-xs">
                        = {calculationBase} × ({bonusPercent}%) × {workingDays} ÷ 365
                      </div>
                    </div>
                    <div className="font-bold text-orange-600 text-sm mt-2">
                      = ₹{bonusAmount.toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Eligibility Check and Important Notes (5 columns) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="rounded-2xl bg-white p-4 shadow-md border-t-4 border-amber-500">
              <h2 className="mb-2 flex items-center gap-2 text-[16px] font-semibold text-gray-800">
                Eligibility Check
              </h2>

              <div className="space-y-2">
                <div
                  className={`rounded-xl border-2 p-2.5 transition-all ${
                    isEligibleBySalary
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0 ${
                          isEligibleBySalary ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {isEligibleBySalary ? (
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
                        <div className="font-semibold text-gray-800 text-sm">
                          Salary Check
                        </div>
                        <div className="text-xs text-gray-600">
                          Basic + DA: ₹{basicDA.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${
                        isEligibleBySalary
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {isEligibleBySalary ? "Eligible" : "Not Eligible"}
                    </div>
                  </div>
                  {!isEligibleBySalary && (
                    <div className="mt-2 text-xs text-red-700 border-t border-red-200 pt-2">
                      ⚠ Salary exceeds ₹21,000 limit
                    </div>
                  )}
                </div>

                {/* Working Days Eligibility */}
                <div
                  className={`rounded-xl border-2 p-2.5 transition-all ${
                    isEligibleByDays
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1">
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full flex-shrink-0 ${
                          isEligibleByDays ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {isEligibleByDays ? (
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
                        <div className="font-semibold text-gray-800 text-sm">
                          Working Days Check
                        </div>
                        <div className="text-xs text-gray-600">
                          {workingDays} days worked
                        </div>
                      </div>
                    </div>
                    <div
                      className={`rounded-full px-2 py-0.5 text-xs font-semibold flex-shrink-0 ${
                        isEligibleByDays
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {isEligibleByDays ? "Eligible" : "Not Eligible"}
                    </div>
                  </div>
                  {!isEligibleByDays && (
                    <div className="mt-2 text-xs text-red-700 border-t border-red-200 pt-2">
                      ⚠ Minimum 30 working days required
                    </div>
                  )}
                </div>

                {/* Calculation Base Info */}
                <div className="rounded-xl border-2 border-blue-200 bg-blue-50 p-2.5">
                  <div className="flex items-start gap-2">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-800 text-sm">
                        Calculation Base
                      </div>
                      <div className="mt-1 text-lg font-bold text-blue-600">
                        ₹{calculationBase.toLocaleString()}
                      </div>
                      {/* <div className="mt-1.5 text-xs text-gray-600">
                        {basicDA < 7000
                          ? "📌 Using ₹7,000 (Below minimum)"
                          : "📌 Using state minimum wage"}
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="rounded-2xl bg-white p-4 shadow-md border-t-4 border-orange-500">
              <h3 className="mb-2 text-[16px] flex items-center gap-2 font-semibold text-gray-800">
                <svg
                  className="h-5 w-5 text-orange-500 flex-shrink-0"
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
                Important Notes
              </h3>
              <div className="space-y-2.5">
                <div className="rounded-lg bg-orange-50 p-2.5 text-xs">
                  <div className="font-semibold text-orange-700 mb-0.5">
                    💰 Salary Limit
                  </div>
                  <div className="text-gray-700">
                    Employees with Basic+DA &gt; ₹21,000 not eligible
                  </div>
                </div>
                <div className="rounded-lg bg-amber-50 p-2.5 text-xs">
                  <div className="font-semibold text-amber-700 mb-0.5">
                    📅 Working Days
                  </div>
                  <div className="text-gray-700">
                    Minimum 30 working days required
                  </div>
                </div>
                <div className="rounded-lg bg-orange-50 p-2.5 text-xs">
                  <div className="font-semibold text-orange-700 mb-0.5">
                    📊 Calculation Base
                  </div>
                  <div className="text-gray-700">
                    If Basic &lt; ₹7,000, uses ₹7,000; otherwise state minimum wage
                  </div>
                </div>
                <div className="rounded-lg bg-amber-50 p-2.5 text-xs">
                  <div className="font-semibold text-amber-700 mb-0.5">
                    📈 Bonus Percentage
                  </div>
                  <div className="text-gray-700">
                    Default 8.33%, adjust between 8.33% - 20%+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
"use client";
import React, { useMemo, useState } from "react";

function daysBetween(a: Date, b: Date) {
  const ms = b.getTime() - a.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

export default function GratuityCalculatorPage() {
  const [basicDA, setBasicDA] = useState<number>(30000);
  const [joinDate, setJoinDate] = useState<string>("2010-01-01");
  const [leaveDate, setLeaveDate] = useState<string>("2025-01-01");
  const [isDeathCase, setIsDeathCase] = useState<boolean>(false);
  const [showCopied, setShowCopied] = useState(false);

  // Constants
  const GRATUITY_CAP = 2000000; // ₹20,00,000
  const ELIGIBILITY_DAYS = 4 * 365 + 240; // 4 years and 240 days => 1700 days

  // Compute tenure (in days) from dates
  const tenureDays = useMemo(() => {
    try {
      const j = new Date(joinDate + "T00:00:00");
      const l = new Date(leaveDate + "T00:00:00");
      if (isNaN(j.getTime()) || isNaN(l.getTime())) return 0;
      if (l <= j) return 0;
      return daysBetween(j, l);
    } catch (e) {
      return 0;
    }
  }, [joinDate, leaveDate]);

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
    if (remainingMonths >= 6) return completedYears + 1;
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
    const y = completedYears;
    if (tenureDays < 365) {
      return 2 * basicDA;
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

        {/* Centered Form Layout */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-2">
            {/* Case Type */}
            <div className="rounded-2xl bg-white px-4 py-1 shadow-md border-t-4 border-orange-500">
              <h2 className="mb-2 flex items-center gap-2 text-[20px] font-semibold text-gray-800">
                Case Type
              </h2>

              <div className="grid gap-2 sm:grid-cols-2">
                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-2 py-1 transition-all ${
                    !isDeathCase
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <input
                    type="radio"
                    checked={!isDeathCase}
                    onChange={() => setIsDeathCase(false)}
                    className="h-3 w-3 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-[13px]">
                      Normal Case
                    </div>
                    <div className="text-[12px] text-gray-600">
                      Standard gratuity calculation
                    </div>
                  </div>
                </label>

                <label
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-2 py-1 transition-all ${
                    isDeathCase
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 bg-white hover:border-orange-200"
                  }`}
                >
                  <input
                    type="radio"
                    checked={isDeathCase}
                    onChange={() => setIsDeathCase(true)}
                    className="h-3 w-3 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-[13px]">
                      Death / Disablement
                    </div>
                    <div className="text-[11px] text-gray-600">
                      Special slab calculation
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Basic Details */}
            <div className="rounded-2xl bg-white px-4 py-1 shadow-md border-t-4 border-orange-500">
              <h2 className="mb-2 flex items-center gap-2 text-[20px] font-semibold text-gray-800">
                Basic Details
              </h2>

              <div className="space-y-2">
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-3 w-3 rounded-full bg-orange-500"></span>
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

                {/* Date inputs */}
                <div className="grid gap-3 sm:grid-cols-2">
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

                <div className="border-t border-gray-200 my-3"></div>

                <div>
                  <h3 className="mb-3 text-[16px] font-semibold text-gray-800">
                    Final Gratuity
                  </h3>

                  {/* Left and Right Layout */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    {/* Left - Calculated Amount */}
                    <div className="rounded-xl bg-orange-50 px-3 py-2 border border-orange-200 shadow-sm">
                      <div className="text-sm opacity-90">Calculated Amount</div>
                      <div className="mt-1 text-[22px] font-bold text-orange-600">
                        ₹
                        {finalGratuityRaw.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>

                    {/* Right - Payable Amount */}
                    <div className="rounded-xl bg-orange-50 px-3 py-2 border border-orange-200 shadow-sm">
                      <div className="text-sm opacity-90">Payable Amount</div>
                      <div className="mt-1 text-[22px] font-bold text-orange-600">
                        ₹
                        {finalGratuityPayable.toLocaleString("en-IN", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Full Width Status Message Below */}
                  {isAboveCap ? (
                    <div className="mb-2 rounded-xl bg-yellow-50 p-2 shadow-sm border border-yellow-200">
                      <div className="flex items-start gap-2">
                        <svg
                          className="h-5 w-5 flex-shrink-0 mt-0.5 text-yellow-600"
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
                          <div className="font-semibold text-yellow-900">
                            Above Statutory Cap
                          </div>
                          <div className="mt-1 text-xs opacity-90 text-yellow-800">
                            Exceeds ₹20,00,000 ceiling. Excess payable
                            voluntarily.
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-2 rounded-xl bg-orange-100 p-2 text-center text-orange-800">
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

                  {/* Statutory Cap Info */}
                  <div className="rounded-xl bg-orange-50 p-3 shadow-sm border-2 border-orange-200 mb-2">
                    <div className="text-sm opacity-90">Statutory Cap</div>
                    <div className="text-[16px] font-semibold text-orange-600">
                      ₹20,00,000
                    </div>
                  </div>

                  {isDeathCase && (
                    <div className="rounded-xl bg-orange-100 p-3 text-sm border border-orange-300">
                      <div className="font-semibold mb-1 text-orange-900">
                        📌 Death Case Applied
                      </div>
                      <div className="opacity-90 text-orange-800">
                        Higher of normal formula and slab gratuity is payable
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Death-case slabs (Gratuity on death) */}
        <div className="mt-8 rounded-2xl bg-white p-4 shadow-md border-l-4 border-orange-500">
          <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-800 text-lg">
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
            <div className="rounded-lg border border-orange-100 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 mb-1 text-sm">
                Less than 1 year
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>2 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 mb-1 text-sm">
                1 year or more but &lt; 5 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>6 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 mb-1 text-sm">
                5 years or more but &lt; 11 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>12 × basic salary</strong>
              </div>
            </div>

            <div className="rounded-lg border border-orange-100 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 mb-1 text-sm">
                11 years or more but &lt; 20 years
              </div>
              <div className="text-sm text-gray-700">
                Amount payable: <strong>20 × basic salary</strong>
              </div>
            </div>
            <div className="rounded-lg border border-orange-100 bg-gray-50 p-3">
              <div className="font-semibold text-gray-800 mb-1 text-sm">
                20 years or more
              </div>
              <div className="text-sm text-gray-700">
                Amount payable:{" "}
                <strong>
                  Half month's salary for every completed 6 months of service
                  (like normal gratuity formula)
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive Legal Framework Section */}
        <div className="mt-6">
          <div className="grid gap-4 lg:grid-cols-2 mb-4">
            {/* Section 1: Final Rule of Thumb */}
            <div className="rounded-2xl bg-gray-50 p-4 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-3">
                Final Rule of Thumb Comparison
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2 text-sm">
                      When Normal &lt; Death Slab
                    </div>
                    <div className="text-sm">Pay death gratuity (slab)</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2 text-sm">
                      When Normal &gt; Death Slab
                    </div>
                    <div className="text-sm">Pay normal gratuity (formula)</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-[#1C284F] mb-2 text-sm">
                      Either Way
                    </div>
                    <div className="text-sm">
                      Apply ₹20 lakh statutory ceiling
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Who Gets the Gratuity */}
            <div className="rounded-2xl bg-gray-50 p-4 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-3">
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
            <div className="rounded-2xl bg-gray-50 p-4 shadow-md border-l-4 border-orange-500">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-3">
                Time Limit & Payment Steps
              </h3>
              <div className="text-gray-700 space-y-2 text-sm">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-orange-700 mb-1 text-sm">
                      Employer to Determine
                    </div>
                    <div className="text-xs">Within 30 days of death</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="font-semibold text-orange-700 mb-1 text-sm">
                      Payment to Nominee/Heir
                    </div>
                    <div className="text-xs">Within 30 days thereafter</div>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg shadow-sm">
                  <div className="font-semibold text-red-700 mb-1 text-sm">
                    ⚠️ Delay in Payment
                  </div>
                  <div className="text-sm">
                    10% simple interest per annum (Section 7(3A))
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: The Core Principle */}
            <div className="rounded-2xl bg-gray-50 shadow-md border-l-4 border-orange-500 p-4">
              <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-3">
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
          <div className="rounded-2xl p-4 bg-gray-50 shadow-md border-l-4 border-orange-500">
            <h3 className="flex items-center gap-2 font-bold text-gray-800 text-lg mb-3">
              Supporting Logic from the Law
            </h3>
            <div className="text-gray-700 space-y-2 text-sm">
              <p>
                Let's see what Rule 10(1) says: "In the case of death of an
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
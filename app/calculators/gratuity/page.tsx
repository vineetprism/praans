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
    if (completedYears === 0 && remainingMonths === 0 && remainingDays === 0) return 0;
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
    const text = `Payable gratuity: ₹ ${finalGratuityPayable.toFixed(2)} (Raw: ₹ ${finalGratuityRaw.toFixed(2)})\nTenure: ${tenureString} (${tenureDays} days)\nRounded years used: ${roundedYearsForFormula}`;
    navigator.clipboard?.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-4 shadow-lg">
            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Gratuity Calculator
          </h1>
          <p className="mt-2 text-gray-600">Calculate employee gratuity with precision</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Case Type Selection */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-orange-500">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">1</span>
                Case Type
              </h2>
              
              <div className="grid gap-3 sm:grid-cols-2">
                <label className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${!isDeathCase ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white hover:border-orange-200'}`}>
                  <input 
                    type="radio" 
                    checked={!isDeathCase} 
                    onChange={() => setIsDeathCase(false)}
                    className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">Normal Case</div>
                    <div className="text-sm text-gray-600">Standard gratuity calculation</div>
                  </div>
                </label>
                
                <label className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-all ${isDeathCase ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white hover:border-orange-200'}`}>
                  <input 
                    type="radio" 
                    checked={isDeathCase} 
                    onChange={() => setIsDeathCase(true)}
                    className="h-5 w-5 text-orange-500 focus:ring-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">Death / Disablement</div>
                    <div className="text-sm text-gray-600">Special slab calculation</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Basic Details */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-amber-500">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">2</span>
                Basic Details
              </h2>

              <div className="space-y-5">
                {/* Salary Input */}
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Last Drawn Salary (Basic + DA)
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={basicDA}
                        onChange={(e) => setBasicDA(Number(e.target.value || 0))}
                        className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 pl-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                    </div>
                    <div className="mt-1.5 text-xs text-gray-500">Enter last drawn Basic + DA amount</div>
                  </label>
                </div>

                {/* Tenure Mode Selection */}
                <div className="rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 p-4">
                  <div className="mb-3 text-sm font-semibold text-gray-700">Tenure Input Mode</div>
                  <div className="flex flex-wrap gap-3">
                    <label className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${mode === 'dates' ? 'border-orange-500 bg-white font-semibold text-orange-600' : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200'}`}>
                      <input 
                        type="radio" 
                        checked={mode === "dates"} 
                        onChange={() => setMode("dates")}
                        className="h-4 w-4 text-orange-500"
                      />
                      <span>📅 Use Dates</span>
                    </label>
                    
                    <label className={`flex cursor-pointer items-center gap-2 rounded-lg border-2 px-4 py-2 transition-all ${mode === 'y-m-d' ? 'border-orange-500 bg-white font-semibold text-orange-600' : 'border-gray-200 bg-white text-gray-600 hover:border-orange-200'}`}>
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
                  <div className="grid gap-5 sm:grid-cols-2">
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
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
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
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        />
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="grid gap-5 sm:grid-cols-3">
                    <div className="group">
                      <label className="block">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                          Years
                        </div>
                        <input 
                          type="number" 
                          value={yearsInput} 
                          onChange={(e) => setYearsInput(Number(e.target.value || 0))} 
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
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
                          onChange={(e) => setMonthsInput(Number(e.target.value || 0))} 
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
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
                          onChange={(e) => setDaysInput(Number(e.target.value || 0))} 
                          className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
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
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-orange-400">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">3</span>
                Tenure & Eligibility
              </h2>

              <div className="space-y-4">
                {/* Tenure Display */}
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 border-l-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800">Service Tenure</div>
                      <div className="mt-1 text-sm text-gray-600">Total: <span className="font-mono font-semibold">{tenureDays} days</span></div>
                      <div className="mt-1 text-sm text-gray-600">Computed: <span className="font-semibold">{tenureString}</span></div>
                      <div className="mt-2 rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-700 inline-block">
                        Rounded years for formula: {roundedYearsForFormula}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Eligibility Status */}
                <div className={`rounded-xl border-2 p-4 transition-all ${isEligibleByTenure ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${isEligibleByTenure ? 'bg-green-500' : 'bg-red-500'}`}>
                        {isEligibleByTenure ? (
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">Eligibility Status</div>
                        <div className="text-sm text-gray-600">Threshold: 4 years 240 days (1,700 days)</div>
                      </div>
                    </div>
                    <div className={`rounded-full px-4 py-1.5 text-sm font-semibold ${isEligibleByTenure ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                      {isEligibleByTenure ? 'Eligible' : 'Not Eligible'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculation Details */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-amber-400">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">4</span>
                Calculation Details
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Normal Gratuity */}
                <div className="rounded-xl border-2 border-purple-200 bg-purple-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Normal Gratuity
                  </div>
                  <div className="text-2xl font-bold text-purple-700">₹{normalGratuityRaw.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="mt-2 text-xs text-gray-600 font-mono">
                    (15 × {basicDA} × {roundedYearsForFormula}) ÷ 26
                  </div>
                  {!isEligibleByTenure && (
                    <div className="mt-2 text-xs text-red-600 font-semibold">⚠ Not payable - tenure below threshold</div>
                  )}
                </div>

                {/* Death/Disablement Slab */}
                <div className="rounded-xl border-2 border-indigo-200 bg-indigo-50 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-indigo-700">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Death / Disablement Slab
                  </div>
                  <div className="text-2xl font-bold text-indigo-700">₹{deathGratuityRaw.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                  <div className="mt-2 text-xs text-gray-600">
                    Based on {completedYears} completed years
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Result Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Result Card */}
            <div className="rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 p-6 shadow-2xl text-white sticky top-4">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">5</span>
                <h2 className="text-xl font-semibold">Final Gratuity</h2>
              </div>
              
              <div className="mb-4 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm opacity-90">Calculated Amount</div>
                <div className="mt-1 text-3xl font-bold">₹{finalGratuityRaw.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>

              {isAboveCap ? (
                <div className="mb-4 rounded-xl bg-red-500/90 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="text-sm">
                      <div className="font-semibold">Above Statutory Cap</div>
                      <div className="mt-1 text-xs opacity-90">Exceeds ₹20,00,000 ceiling. Excess payable voluntarily.</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-4 rounded-xl bg-green-500/80 p-3 backdrop-blur-sm text-center">
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Within Statutory Ceiling
                  </div>
                </div>
              )}

              <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm border-2 border-white/20">
                <div className="text-sm opacity-90 mb-2">Payable Amount</div>
                <div className="text-5xl font-bold">₹{finalGratuityPayable.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                <div className="mt-3 pt-3 border-t border-white/20">
                  <div className="text-xs opacity-90">Statutory Cap</div>
                  <div className="text-lg font-semibold">₹20,00,000</div>
                </div>
              </div>

              {isDeathCase && (
                <div className="mt-4 rounded-xl bg-white/10 p-3 backdrop-blur-sm text-xs">
                  <div className="font-semibold mb-1">📌 Death Case Applied</div>
                  <div className="opacity-90">Higher of normal formula and slab gratuity is payable</div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setMode("dates");
                  setJoinDate("2010-01-01");
                  setLeaveDate("2025-01-01");
                  setBasicDA(30000);
                  setIsDeathCase(false);
                }}
                className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Load Example
                </div>
              </button>

              <button
                onClick={handleCopy}
                className="w-full rounded-xl border-2 border-orange-500 bg-white px-6 py-3 font-semibold text-orange-600 shadow transition-all hover:bg-orange-50 hover:scale-105 active:scale-95 relative"
              >
                <div className="flex items-center justify-center gap-2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {showCopied ? 'Copied!' : 'Copy Result'}
                </div>
                {showCopied && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-gray-800 px-3 py-1 text-sm text-white whitespace-nowrap">
                    ✓ Copied to clipboard
                  </div>
                )}
              </button>
            </div>

            {/* Quick Examples */}
            <div className="rounded-2xl bg-white p-5 shadow-lg border-l-4 border-orange-500">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-800 text-sm">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Quick Examples
              </h3>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 p-2">
                  <div className="font-semibold text-orange-700">Normal: 15 yrs, ₹30k</div>
                  <div className="text-gray-600 font-mono">= ₹{((15 * 30000 * 15) / 26).toFixed(2)}</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-2">
                  <div className="font-semibold text-amber-700">Death: 2 yrs, ₹25k</div>
                  <div className="text-gray-600 font-mono">= ₹{(6 * 25000).toFixed(2)}</div>
                </div>
                <div className="rounded-lg bg-orange-50 p-2">
                  <div className="font-semibold text-orange-700">Death: 8 yrs, ₹40k</div>
                  <div className="text-gray-600 font-mono">= ₹{(12 * 40000).toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg border-l-4 border-orange-500">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-800">
            <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Important Legal Notes
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">⏱️ Eligibility</div>
              <div className="text-gray-700">Minimum 4 years 240 days (1,700 days) service required for normal gratuity</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">📊 Rounding Rule</div>
              <div className="text-gray-700">Months &lt; 6 → don't round; Months ≥ 6 → round up one year</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">💰 Statutory Cap</div>
              <div className="text-gray-700">Maximum ₹20,00,000. Excess payable voluntarily by employer</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">⚠️ Death Cases</div>
              <div className="text-gray-700">Slabs (2×, 6×, 12×, 20×) are minimum - pay higher of slab or normal</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">👥 Nomination</div>
              <div className="text-gray-700">Pay nominee if registered; otherwise legal heirs. Deposit for minors</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">⏰ Payment Timeline</div>
              <div className="text-gray-700">Determine within 30 days, pay within next 30 days. Delay: 10% p.a. interest</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
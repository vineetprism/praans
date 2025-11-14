"use client";
import React, { useMemo, useState } from "react";

export default function MaternityCalculatorPage() {
  const [monthlySalary, setMonthlySalary] = useState<number>(20000);
  const [weeks, setWeeks] = useState<number>(26);
  const [pfPercent, setPfPercent] = useState<number>(0);
  const [showCopied, setShowCopied] = useState(false);

  // Valid weeks options: 6, 12, 26
  const validWeeks = [
    { value: 6, label: "6 weeks", description: "Miscarriage/Termination" },
    { value: 12, label: "12 weeks", description: "Adopting child < 3 months" },
    { value: 26, label: "26 weeks", description: "First two children" }
  ];

  const averageDailyWage = useMemo(() => {
    if (!monthlySalary || monthlySalary <= 0) return 0;
    return monthlySalary / 26;
  }, [monthlySalary]);

  const totalBenefitRaw = useMemo(() => {
    const days = weeks * 7;
    return averageDailyWage * days;
  }, [averageDailyWage, weeks]);

  const pfDeduction = useMemo(() => {
    return (totalBenefitRaw * (pfPercent / 100));
  }, [totalBenefitRaw, pfPercent]);

  const payable = Math.max(0, totalBenefitRaw - pfDeduction);
  const totalDays = weeks * 7;

  const handleCopy = () => {
    const text = `Maternity Benefit: Monthly Salary ₹${monthlySalary} | Weeks ${weeks} | Avg Daily ₹${averageDailyWage.toFixed(2)} | Raw ₹${totalBenefitRaw.toFixed(2)} | PF Deduction ₹${pfDeduction.toFixed(2)} | Payable ₹${payable.toFixed(2)}`;
    navigator.clipboard?.writeText(text);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="mb-8 text-center">
          <div className="mb-3 inline-block rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-4 shadow-lg">
            <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Maternity Benefit Calculator
          </h1>
          <p className="mt-2 text-gray-600">Calculate maternity benefits as per the Maternity Benefit Act</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Salary Input */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-orange-500">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">1</span>
                Salary Details
              </h2>

              <div className="space-y-5">
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      Monthly Salary (Basic + DA)
                    </div>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                      <input
                        type="number"
                        value={monthlySalary}
                        onChange={(e) => setMonthlySalary(Number(e.target.value || 0))}
                        className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 pl-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                      />
                    </div>
                    <div className="mt-2 rounded-lg bg-blue-50 p-3 text-xs text-gray-700">
                      <div className="flex items-start gap-2">
                        <svg className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <span className="font-semibold">Note:</span> Exclude HRA & performance allowance from this amount
                        </div>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Average Daily Wage Display */}
                <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-4 border-l-4 border-purple-500">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-gray-700">Average Daily Wage</div>
                      <div className="mt-1 text-3xl font-bold text-purple-700">₹{averageDailyWage.toFixed(2)}</div>
                      <div className="mt-2 text-xs text-gray-600 font-mono">
                        Calculated as: ₹{monthlySalary} ÷ 26 working days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leave Duration */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-amber-500">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-600">2</span>
                Leave Duration
              </h2>

              <div className="space-y-4">
                <div className="mb-2 text-sm font-semibold text-gray-700">Select eligible weeks</div>
                {validWeeks.map((option) => (
                  <label 
                    key={option.value}
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all ${weeks === option.value ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white hover:border-orange-200'}`}
                  >
                    <input 
                      type="radio" 
                      value={option.value}
                      checked={weeks === option.value}
                      onChange={(e) => setWeeks(Number(e.target.value))}
                      className="mt-1 h-5 w-5 text-orange-500 focus:ring-orange-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-800">{option.label}</span>
                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-semibold text-orange-600">
                          {option.value * 7} days
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">{option.description}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Deductions */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-orange-400">
              <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600">3</span>
                Deductions
              </h2>

              <div className="space-y-4">
                <div className="group">
                  <label className="block">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                      PF Deduction Percentage
                    </div>
                    <div className="relative">
                      <input
                        type="number"
                        value={pfPercent}
                        onChange={(e) => setPfPercent(Number(e.target.value || 0))}
                        className="w-full rounded-xl border-2 border-gray-200 px-3 py-3 pr-8 transition-all focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                        min={0}
                        max={100}
                        step={0.01}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                    </div>
                    <div className="mt-1.5 text-xs text-gray-500">Enter PF % to be deducted from maternity benefit</div>
                  </label>
                </div>

                {/* Deduction Info Cards */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-green-50 p-4 border-l-4 border-green-500">
                    <div className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm">
                        <div className="font-semibold text-green-700">ESI Not Deducted</div>
                        <div className="mt-1 text-xs text-gray-600">Maternity benefit paid by ESI directly</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-amber-50 p-4 border-l-4 border-amber-500">
                    <div className="flex items-start gap-2">
                      <svg className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-sm">
                        <div className="font-semibold text-amber-700">PF Applicable</div>
                        <div className="mt-1 text-xs text-gray-600">PF deduction: ₹{pfDeduction.toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculation Breakdown */}
            <div className="rounded-2xl bg-white p-6 shadow-xl border-t-4 border-indigo-500">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-gray-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">4</span>
                Calculation Breakdown
              </h2>

              <div className="space-y-4">
                <div className="rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 p-4">
                  <div className="grid gap-3 text-sm">
                    <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                      <span className="text-gray-700">Average Daily Wage</span>
                      <span className="font-mono font-semibold text-blue-700">₹{averageDailyWage.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                      <span className="text-gray-700">Total Leave Days</span>
                      <span className="font-mono font-semibold text-blue-700">{weeks} weeks × 7 = {totalDays} days</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                      <span className="text-gray-700">Raw Benefit Amount</span>
                      <span className="font-mono font-semibold text-blue-700">₹{totalBenefitRaw.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                      <span className="text-gray-700">PF Deduction ({pfPercent}%)</span>
                      <span className="font-mono font-semibold text-red-600">- ₹{pfDeduction.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-semibold text-gray-800">Net Payable Amount</span>
                      <span className="text-2xl font-bold text-indigo-700">₹{payable.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-yellow-50 p-4 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-2">
                    <svg className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm text-gray-700">
                      <span className="font-semibold">Formula:</span> Benefit = (Monthly Salary ÷ 26) × Total Days - PF Deduction
                    </div>
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
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">💰</span>
                <h2 className="text-xl font-semibold">Maternity Benefit</h2>
              </div>
              
              <div className="mb-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-sm opacity-90">Total Payable Amount</div>
                <div className="mt-2 text-5xl font-bold">₹{payable.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Leave Period</span>
                    <span className="font-semibold">{weeks} weeks ({totalDays} days)</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Daily Wage</span>
                    <span className="font-semibold">₹{averageDailyWage.toFixed(2)}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="flex justify-between text-sm">
                    <span className="opacity-90">Gross Benefit</span>
                    <span className="font-semibold">₹{totalBenefitRaw.toFixed(2)}</span>
                  </div>
                </div>

                {pfDeduction > 0 && (
                  <div className="rounded-xl bg-red-500/50 p-3 backdrop-blur-sm">
                    <div className="flex justify-between text-sm">
                      <span className="opacity-90">PF Deduction</span>
                      <span className="font-semibold">- ₹{pfDeduction.toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setMonthlySalary(20000);
                  setWeeks(26);
                  setPfPercent(0);
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

            {/* Example Calculation */}
            <div className="rounded-2xl bg-white p-5 shadow-lg border-l-4 border-orange-500">
              <h3 className="mb-3 flex items-center gap-2 font-semibold text-gray-800 text-sm">
                <svg className="h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Example Calculation
              </h3>
              <div className="space-y-2 text-xs">
                <div className="rounded-lg bg-orange-50 p-3">
                  <div className="font-semibold text-orange-700 mb-1">Scenario</div>
                  <div className="text-gray-700">Monthly Salary: ₹20,000</div>
                  <div className="text-gray-700">Leave Period: 26 weeks</div>
                </div>
                <div className="rounded-lg bg-amber-50 p-3">
                  <div className="font-semibold text-amber-700 mb-1">Calculation</div>
                  <div className="text-gray-700 font-mono">Daily Wage = ₹20,000 ÷ 26 = ₹{(20000/26).toFixed(2)}</div>
                  <div className="text-gray-700 font-mono mt-1">Benefit = ₹{(20000/26).toFixed(2)} × 182 days</div>
                  <div className="text-gray-700 font-mono mt-1">= ₹{((20000/26) * 182).toFixed(2)}</div>
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
            Important Information
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">📋 Eligibility</div>
              <div className="text-gray-700">26 weeks for first two children; 12 weeks for adopting/commissioning child under 3 months</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">💵 Salary Components</div>
              <div className="text-gray-700">Based on Basic + DA only. Excludes HRA & performance allowances</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">🏥 ESI Coverage</div>
              <div className="text-gray-700">Where applicable, ESI pays the benefit directly. Employer does not deduct ESI</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">💰 PF Deduction</div>
              <div className="text-gray-700">PF contributions may be deducted from maternity benefit as per company policy</div>
            </div>
            <div className="rounded-lg bg-orange-50 p-3 text-sm">
              <div className="font-semibold text-orange-700 mb-1">⏱️ Average Daily Wage</div>
              <div className="text-gray-700">Calculated as monthly salary divided by 26 working days</div>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-sm">
              <div className="font-semibold text-amber-700 mb-1">🤰 Special Cases</div>
              <div className="text-gray-700">6 weeks for miscarriage/medical termination of pregnancy</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
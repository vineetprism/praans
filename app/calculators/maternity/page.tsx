"use client";
import React, { useMemo, useState } from "react";

export default function MaternityBenefitCalculatorPage() {
  const [basicSalary, setBasicSalary] = useState<number>(20000);
  const [dearness, setDearness] = useState<number>(0);
  const [eligibleWeeks, setEligibleWeeks] = useState<number>(26);

  const WEEKS_OPTIONS = [6, 12, 26];
  const DAYS_PER_WEEK = 7;
  const DAYS_IN_MONTH = 26;

  const baseSalary = useMemo(() => {
    return basicSalary + dearness;
  }, [basicSalary, dearness]);

  const averageDailyWage = useMemo(() => {
    return baseSalary / DAYS_IN_MONTH;
  }, [baseSalary]);

  const totalDays = useMemo(() => {
    return eligibleWeeks * DAYS_PER_WEEK;
  }, [eligibleWeeks]);

  const totalMaternityBenefit = useMemo(() => {
    return averageDailyWage * totalDays;
  }, [averageDailyWage, totalDays]);

  const pfDeduction = useMemo(() => {
    const EMPLOYEE_PF_RATE = 12;
    return (baseSalary * EMPLOYEE_PF_RATE) / 100;
  }, [baseSalary]);

  const netBenefit = useMemo(() => {
    return totalMaternityBenefit - pfDeduction;
  }, [totalMaternityBenefit, pfDeduction]);

  return (
    <main className="min-h-screen w-full bg-gray-50 p-4">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-4">
        <div className="text-center">
          <h1 className="text-[30px] font-bold text-orange-600">
            Maternity Benefit Calculator
          </h1>
          <p className="text-gray-600 text-sm mt-1">
            Calculate maternity benefits based on eligible weeks
          </p>
        </div>

        <div className="flex-1 grid gap-4 lg:grid-cols-3 items-start h-full">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white p-4 border-t-4 border-orange-500 rounded-lg shadow-sm h-full">
              <h2 className="font-semibold text-orange-600 text-lg mb-4">
                Salary Components
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">
                    Basic Salary
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={basicSalary}
                      onChange={(e) =>
                        setBasicSalary(Number(e.target.value || 0))
                      }
                      className="w-full border border-orange-300 px-4 py-2 pl-9 text-base rounded focus:border-orange-500 focus:outline-none"
                      min={0}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">
                    Dearness Allowance (DA)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={dearness}
                      onChange={(e) => setDearness(Number(e.target.value || 0))}
                      className="w-full border border-orange-300 px-4 py-2 pl-9 text-base rounded focus:border-orange-500 focus:outline-none"
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Eligible Weeks Selection */}
            <div className="bg-white p-4 border-t-4 border-orange-500 rounded-lg shadow-sm">
              <h2 className="font-semibold text-orange-600 text-base mb-4">
                Eligible Weeks
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {WEEKS_OPTIONS.map((weeks) => (
                  <button
                    key={weeks}
                    onClick={() => setEligibleWeeks(weeks)}
                    className={`p-3 rounded border-2 font-semibold text-base transition-all ${
                      eligibleWeeks === weeks
                        ? "border-orange-500 bg-orange-50 text-orange-600"
                        : "border-gray-300 bg-white text-gray-700 hover:border-orange-300"
                    }`}
                  >
                    {weeks} Weeks
                  </button>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-orange-50 p-4 rounded border border-orange-200 text-sm">
              <div className="font-semibold text-orange-700 mb-3">
                Important Notes:
              </div>
              <div className="text-gray-700 space-y-2">
                <div>
                  ✓ HRA and performance allowance are NOT part of maternity
                  benefit
                </div>
                <div>
                  ✓ Average Daily Wage = Monthly Salary (Basic + DA) ÷ 26
                </div>
                <div>
                  ✓ Total Benefit = Average Daily Wage × (Eligible Weeks × 7)
                </div>
                <div>✓ PF (12%) will be deducted from maternity benefit</div>
                <div>✓ ESI does NOT deduct - given directly by ESI</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-4 h-full">
            <div className="bg-white px-4 py-4 border-t-4 border-orange-500 rounded-lg shadow-sm h-full flex flex-col justify-between">
              <div>
                <h2 className="font-semibold text-orange-600 text-[20px] mb-4">
                  Benefit Breakdown
                </h2>

                <div className="bg-orange-50 p-3 rounded mb-4 border border-orange-200">
                  <div className="text-[15px] text-gray-800 font-semibold">
                    Salary for Calculation
                  </div>
                  <div className="text-[17px] font-bold text-orange-600 mt-1">
                    ₹
                    {baseSalary.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                  <div className="text-[13px] text-gray-600 mt-2 space-y-1">
                    <div>Basic: ₹{basicSalary.toFixed(2)}</div>
                    <div>DA: ₹{dearness.toFixed(2)}</div>
                  </div>
                </div>

                <div className="text-sm space-y-3 mb-4">
                  <div className="flex justify-between bg-blue-50 p-3 rounded border border-blue-200">
                    <span className="font-semibold">Average Daily Wage</span>
                    <span className="font-bold text-blue-600">
                      ₹{averageDailyWage.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between bg-blue-50 p-3 rounded border border-blue-200">
                    <span className="font-semibold">Eligible Days</span>
                    <span className="font-bold text-blue-600">
                      {totalDays} days ({eligibleWeeks} weeks × 7)
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-orange-300 pt-3">
                <div className="text-sm space-y-2 mb-3">
                  <div className="flex justify-between bg-purple-50 p-3 rounded border border-purple-200">
                    <span>Gross Maternity Benefit</span>
                    <span className="font-bold">
                      ₹{totalMaternityBenefit.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between bg-red-50 p-3 rounded border border-red-200">
                    <span>PF Deduction (12%)</span>
                    <span className="font-bold text-red-600">
                      -₹{pfDeduction.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between bg-orange-300 p-3 rounded font-bold text-base border border-orange-400 text-white">
                  <span>Net Maternity Benefit</span>
                  <span>₹{netBenefit.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-white p-4 border-t-4 border-orange-500 rounded-lg shadow-sm">
          <h2 className="font-semibold text-orange-600 text-[17px] mb-4">
            Example Calculations
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* 6 Weeks Example */}
            <div className="bg-gray-50 p-3 rounded border border-orange-100">
              <div className="text-gray-800 font-semibold mb-2">
                Example: 6 Weeks
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Salary: ₹20,000</div>
                <div>Daily Wage: ₹20,000 ÷ 26 = ₹769.23</div>
                <div>Days: 6 × 7 = 42 days</div>
                <div className="font-semibold text-gray-800 mt-2">
                  Benefit: ₹769.23 × 42 = ₹32,308.65
                </div>
              </div>
            </div>

            {/* 12 Weeks Example */}
            <div className="bg-gray-50 p-3 rounded border border-orange-100">
              <div className="text-gray-800 font-semibold mb-2">
                Example: 12 Weeks
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Salary: ₹20,000</div>
                <div>Daily Wage: ₹20,000 ÷ 26 = ₹769.23</div>
                <div>Days: 12 × 7 = 84 days</div>
                <div className="font-semibold text-gray-800 mt-2">
                  Benefit: ₹769.23 × 84 = ₹64,615.38
                </div>
              </div>
            </div>

            {/* 26 Weeks Example */}
            <div className="bg-gray-50 p-3 rounded border border-orange-100">
              <div className="text-gray-800 font-semibold mb-2">
                Example: 26 Weeks
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Salary: ₹20,000</div>
                <div>Daily Wage: ₹20,000 ÷ 26 = ₹769.23</div>
                <div>Days: 26 × 7 = 182 days</div>
                <div className="font-semibold text-gray-800 mt-2">
                  Benefit: ₹769.23 × 182 = ₹1,40,769.23
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
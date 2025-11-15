"use client";
import React, { useMemo, useState } from "react";

export default function EPFCalculatorPage() {
  const [basicSalary, setBasicSalary] = useState<number>(15000);
  const [dearness, setDearness] = useState<number>(0);
  const [otherAllowance, setOtherAllowance] = useState<number>(0);
  const [workingDaysInMonth, setWorkingDaysInMonth] = useState<number>(30);
  const [daysWorked, setDaysWorked] = useState<number>(30);

  const EMPLOYEE_PF_RATE = 12;
  const EMPLOYER_PF_RATE = 3.67;
  const EPS_RATE = 8.33;
  const EDLI_RATE = 0.5;
  const ADMIN_RATE = 0.5;
  const BASIC_SALARY_CAP = 15000;

  const earnedBasicDA = useMemo(() => {
    const basicPlusDa = basicSalary + dearness;
    if (basicSalary >= BASIC_SALARY_CAP) {
      return BASIC_SALARY_CAP;
    }
    if (basicPlusDa < BASIC_SALARY_CAP) {
      const amountNeeded = BASIC_SALARY_CAP - basicPlusDa;
      const contributedOtherAllowance = Math.min(otherAllowance, amountNeeded);
      return basicPlusDa + contributedOtherAllowance;
    }
    return BASIC_SALARY_CAP;
  }, [basicSalary, dearness, otherAllowance]);

  const dailyRate = useMemo(() => {
    return earnedBasicDA / workingDaysInMonth;
  }, [earnedBasicDA, workingDaysInMonth]);

  const earnedAmount = useMemo(() => {
    return dailyRate * daysWorked;
  }, [dailyRate, daysWorked]);

  const employeePF = useMemo(() => {
    return (earnedAmount * EMPLOYEE_PF_RATE) / 100;
  }, [earnedAmount]);

  const employerPF = useMemo(() => {
    return (earnedAmount * EMPLOYER_PF_RATE) / 100;
  }, [earnedAmount]);

  const eps = useMemo(() => {
    return (earnedAmount * EPS_RATE) / 100;
  }, [earnedAmount]);

  const edli = useMemo(() => {
    return (earnedAmount * EDLI_RATE) / 100;
  }, [earnedAmount]);

  const adminCharges = useMemo(() => {
    return (earnedAmount * ADMIN_RATE) / 100;
  }, [earnedAmount]);

  const totalEmployerContribution = useMemo(() => {
    return employerPF + eps + edli + adminCharges;
  }, [employerPF, eps, edli, adminCharges]);

  const totalPFContribution = useMemo(() => {
    return employeePF + totalEmployerContribution;
  }, [employeePF, totalEmployerContribution]);

  const netSalary = useMemo(() => {
    return earnedAmount - employeePF;
  }, [earnedAmount, employeePF]);

  return (
    <main className="min-h-screen w-full bg-gray-50 py-12">
      <div className="w-full h-full max-w-7xl mx-auto flex flex-col gap-4">
        <div className="text-center">
          <h1 className="text-[30px] font-bold text-orange-600">
            EPF Calculator
          </h1>
        </div>

        <div className="flex-1 grid gap-4 lg:grid-cols-3 items-start h-full">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-white p-4 border-t-4 border-orange-500 rounded-lg shadow-sm h-full">
              <h2 className="font-semibold text-orange-600 text-lg mb-2">
                Salary Components
              </h2>
              <div className="space-y-2">
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

                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">
                    Other Allowance (excl. HRA)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base">
                      ₹
                    </span>
                    <input
                      type="number"
                      value={otherAllowance}
                      onChange={(e) =>
                        setOtherAllowance(Number(e.target.value || 0))
                      }
                      className="w-full border border-orange-300 px-4 py-2 pl-9 text-base rounded focus:border-orange-500 focus:outline-none"
                      min={0}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Working Days */}
            <div className="bg-white p-4 border-t-4 border-orange-500 rounded-lg shadow-sm">
              <h2 className="font-semibold text-orange-600 text-base mb-2">
                Working Days
              </h2>
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">
                    Total Working Days
                  </label>
                  <input
                    type="number"
                    value={workingDaysInMonth}
                    onChange={(e) =>
                      setWorkingDaysInMonth(Number(e.target.value || 30))
                    }
                    className="w-full border border-orange-300 px-4 py-2 text-base rounded focus:border-orange-500 focus:outline-none"
                    min={1}
                    max={31}
                  />
                </div>
                <div>
                  <label className="block text-base font-semibold text-gray-700 mb-1">
                    Days Worked
                  </label>
                  <input
                    type="number"
                    value={daysWorked}
                    onChange={(e) =>
                      setDaysWorked(Number(e.target.value || 30))
                    }
                    className="w-full border border-orange-300 px-4 py-2 text-base rounded focus:border-orange-500 focus:outline-none"
                    min={0}
                    max={workingDaysInMonth}
                  />
                </div>
              </div>
            </div>

            {/* Conditions */}
            <div className="bg-orange-50 p-4 rounded border border-orange-200 text-sm">
              <div className="font-semibold text-orange-700 mb-2">
                Conditions:
              </div>
              <div className="text-gray-700 space-y-1">
                <div>1. If basic ≥ ₹15K, calculate EPF on ₹15K only</div>
                <div>
                  2. If (Basic + DA) &lt; ₹15K, add other allowance up to ₹15K
                </div>
                <div>3. Calculate daily rate and pro-rata for days worked</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-4 h-full">
            <div className="bg-white px-2 py-2 border-t-4 border-orange-500 rounded-lg shadow-sm h-full flex flex-col justify-between">
              <h2 className="font-semibold text-orange-600 text-[20px]">
                EPF Breakdown
              </h2>

              <div className="bg-orange-50 p-2 rounded mb-2 border border-orange-200">
                <div className="text-[17px] text-gray-800">Earned Wage</div>
                <div className="text-[15px] font-bold text-orange-600">
                  ₹
                  {earnedAmount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
                <div className="text-[15px] text-gray-500 mt-2 space-y-1">
                  <div>Base: ₹{earnedBasicDA.toFixed(2)}</div>
                  <div>
                    Daily: ₹{dailyRate.toFixed(2)} | {daysWorked}/
                    {workingDaysInMonth}
                  </div>
                </div>
              </div>

              <div className="text-sm space-y-2 mb-2">
                <div className="flex justify-between bg-green-50 p-2 rounded border border-green-200">
                  <span>Employee PF (12%)</span>
                  <span className="font-bold">₹{employeePF.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-orange-100 p-2 rounded border border-orange-300">
                  <span>Employer PF (3.67%)</span>
                  <span className="font-bold">₹{employerPF.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-orange-100 p-2 rounded border border-orange-300">
                  <span>EPS (8.33%)</span>
                  <span className="font-bold">₹{eps.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-orange-100 p-2 rounded border border-orange-300">
                  <span>EDLI (0.5%)</span>
                  <span className="font-bold">₹{edli.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-orange-100 p-2 rounded border border-orange-300">
                  <span>Admin (0.5%)</span>
                  <span className="font-bold">₹{adminCharges.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-orange-300 pt-2">
                <div className="flex justify-between bg-orange-200 p-2 rounded font-bold text-sm mb-2 border border-orange-400">
                  <span>Total Employer</span>
                  <span>₹{totalEmployerContribution.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-orange-300 p-2 rounded font-bold text-sm mb-2 border border-orange-400 text-white">
                  <span>Total PF</span>
                  <span>₹{totalPFContribution.toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-gray-100 p-2 rounded font-bold text-sm border border-gray-300">
                  <span>Net Salary</span>
                  <span>₹{netSalary.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

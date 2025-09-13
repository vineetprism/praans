"use client";

import React from "react";

export default function ProfessionalTaxKeyDifference() {
  return (
    <main className="bg-[#f6f8fc] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1e2751]">
          Key Difference
        </h1>

        <div className="mx-auto mt-6 max-w-5xl overflow-x-auto rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          <table className="min-w-[980px] w-full text-left">
            <thead className="bg-orange-50 text-slate-700">
              <tr className="divide-x divide-slate-200">
                <th className="px-3 py-3 text-[14px] font-bold whitespace-nowrap">
                  Aspect
                </th>
                <th className="px-3 py-3 text-[14px] font-bold whitespace-nowrap">
                  Employer Certificate
                </th>
                <th className="px-3 py-3 text-[14px] font-bold whitespace-nowrap">
                  Registration Certificate
                </th>
              </tr>
            </thead>

            <tbody className="text-[13px] leading-5">
              <tr className="divide-x divide-slate-200 border-t border-slate-200 bg-white">
                <td className="px-3 py-3 font-semibold text-[14px] text-slate-800 whitespace-nowrap">
                  Purpose
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Paying professional tax for self-owned income.
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Deducting and depositing professional tax for employees.
                </td>
              </tr>

              <tr className="divide-x divide-slate-200 border-t border-slate-200 bg-slate-50/60">
                <td className="px-3 py-3 font-semibold text-[14px] text-slate-800 whitespace-nowrap">
                  Applicability
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Self-employed; no employees.
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Employers/organizations with salaried staff.
                </td>
              </tr>

              <tr className="divide-x divide-slate-200 border-t border-slate-200 bg-white">
                <td className="px-3 py-3 font-semibold text-[14px] text-slate-800 whitespace-nowrap">
                  Obligation
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Pay annual PT for self.
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Deduct PT from salaries & remit to govt.
                </td>
              </tr>

              <tr className="divide-x divide-slate-200 border-t border-slate-200 bg-slate-50/60">
                <td className="px-3 py-3 font-semibold text-[14px] text-slate-800 whitespace-nowrap">
                  Issued To
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Individuals, proprietors, professionals.
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Companies/firms with employees.
                </td>
              </tr>

              <tr className="divide-x divide-slate-200 border-t border-slate-200 bg-white">
                <td className="px-3 py-3 font-semibold text-[14px] text-slate-800 whitespace-nowrap">
                  Penalty (Non-Compliance)
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Late-payment fines/penalties.
                </td>
                <td className="px-3 py-3 text-[13px] font-medium whitespace-nowrap">
                  Penalties for failing to deduct/remit PT.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

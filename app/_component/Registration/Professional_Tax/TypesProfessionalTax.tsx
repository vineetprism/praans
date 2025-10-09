"use client";

import React from "react";

export default function ProfessionalTaxTypes() {
  return (
    <main className="bg-white text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1e2751]">
          Types of Professional Tax Registrations
        </h1>
        <p className="mx-auto mt-3 max-w-4xl text-center text-[14px] leading-7 text-slate-700">
          <span className="font-semibold">
            There are two types of registrations under Professional Tax:
          </span>{" "}
          The Employer Certificate (EC) and the Registration Certificate (RC).
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl bg-white p-5 ring-1 ring-orange-200">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#f47b20]">
              Employer Certificate (Enrolment Certificate)
            </h2>

            <div className="mt-4 space-y-4 text-[14px] leading-7 text-slate-800">
              <p>
                <span className="font-semibold">Purpose:</span> The Employer
                Certificate, also known as the Enrolment Certificate, is issued
                to individuals or entities liable to pay professional tax for
                their own income. This certificate is primarily for businesses
                or professionals who are not deducting professional tax on
                behalf of employees but are paying it for themselves.
              </p>

              <p>
                <span className="font-semibold">Applicability:</span> Sole
                proprietors, self-employed professionals, freelancers, or
                businesses without employees. Covers the professional tax
                liability of the individual/business itself.
              </p>

              <p>
                <span className="font-semibold">Obligation:</span> The holder of
                this certificate is required to pay a fixed amount annually as
                professional tax, based on the rules of the respective state.
              </p>

              <p>
                <span className="font-semibold">Example:</span> A lawyer
                operating independently or a sole proprietor running a small
                business.
              </p>
            </div>
          </article>

          <article className="rounded-2xl bg-white p-5 ring-1 ring-orange-200">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#f47b20]">
              Registration Certificate (Employer Registration Certificate)
            </h2>

            <div className="mt-4 space-y-4 text-[14px] leading-7 text-slate-800">
              <p>
                <span className="font-semibold">Purpose:</span> The Registration
                Certificate is issued to employers who are responsible for
                deducting and depositing professional tax on behalf of their
                employees. This certificate enables employers to fulfill their
                statutory obligation of deducting professional tax from employee
                salaries and remitting it to the government.
              </p>

              <p>
                <span className="font-semibold">Applicability:</span> Entities
                with employees, such as companies, firms, and establishments.
                The employer is responsible for collecting professional tax from
                employees’ salaries and ensuring compliance.
              </p>

              <p>
                <span className="font-semibold">Obligation:</span> Deduct
                professional tax from employee salaries as per the applicable
                state slab rates. Deposit the collected amount with the state
                government within the prescribed timeline.
              </p>

              <p>
                <span className="font-semibold">Example:</span> A private
                company employing multiple staff members.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

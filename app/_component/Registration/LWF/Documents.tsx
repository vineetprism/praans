"use client";

import React from "react";

const Dot = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    className="mt-1.5 text-orange-500"
    aria-label="Dot"
  >
    <circle
      cx="12"
      cy="12"
      r="7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const LEFT_DOCS = [
  "Proof of Identity of the owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
  "Passport size photo of owner",
  "Certificate of Incorporation/Partnership Deed",
];

const RIGHT_DOCS = [
  "PAN card of the firm",
  "Proof of Establishment (rent agreement, utility bill, etc.)",
  "List of employees having name, designation and wages",
];

const KEY_POINTS_LEFT = [
  {
    title: "Employer and Employee Contributions:",
    body: "The contribution rates vary by state. Both employers and employees contribute to the fund, with the employer’s share generally being higher.",
  },
  {
    title: "Submission Deadlines:",
    body: "Contributions must be paid within the deadlines set by the respective state Labour Welfare Board. Late payments may attract penalties.",
  },
];

const KEY_POINTS_RIGHT = [
  {
    title: "Compliance Records:",
    body: "Employers must maintain proper records of their contributions and provide these during audits or inspections.",
  },
  {
    title: "Consequences of Non-Compliance:",
    body: "Penalties or fines as per the state-specific laws. Legal action from the Labour Welfare authorities. Loss of respect and reputation in the market.",
  },
];

export default function LWFDocuments() {
  return (
    <main>
      <section className="bg-[#f6f8fc] py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-[24px] sm:text-[30px] font-extrabold text-[#1c284f]">
            General Documents Required For LWF Registration In India
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <ul className="space-y-2 text-[15px] leading-7 text-slate-800">
              {LEFT_DOCS?.map((t) => (
                <li key={t} className="flex gap-3">
                  <Dot />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-[15px] leading-7 text-slate-800">
              {RIGHT_DOCS?.map((t) => (
                <li key={t} className="flex gap-3">
                  <Dot />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#1c284f]">
            Key Points To Remember About Labour Welfare Fund
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              {KEY_POINTS_LEFT?.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="text-[15px] font-extrabold text-[#ef6a00]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">
                    {body}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {KEY_POINTS_RIGHT?.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="text-[15px] font-extrabold text-[#ef6a00]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

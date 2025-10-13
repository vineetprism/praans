"use client";

import React from "react";

const Dot = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} className="mt-1.5 text-orange-500" aria-label="Dot">
    <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </svg>
);

const LEFT_DOCS = [
  "Proof of Identity of the owner such as (Aadhar card, Voter ID, PAN card, passport) etc.",
  "Passport size photo of owner",
  "Certificate of Incorporation/Partnership Deed",
  "PAN card of the firm",
];

const RIGHT_DOCS = [
  "Latest Property Tax",
  "Proof of Establishment (rent agreement, utility bill, etc.)",
  "A detailed description of the business activity.",
];

const KEY_POINTS_LEFT = [
  {
    title: "State-Specific Rules:",
    body:
      "The process and requirements for trade licences vary by state and municipality.",
  },
  {
    title: "Timely Renewal:",
    body:
      "Renew your trade licence annually to avoid penalties.",
  },
];

const KEY_POINTS_RIGHT = [
  {
    title: "Penalty for Non-Compliance:",
    body:
      "Operating without a licence can attract heavy fines or business closures.",
  },
  {
    title: "Display the License:",
    body:
      "The trade licence must be prominently displayed at the business premises.",
  },
];

export default function TradeLicenceDocuments() {
  return (
    <main>
      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-[#f6f8fc]">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            General Documents Required For Trade Licence Registration In India
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
        </section>
      </div>

      <div className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-gray-50">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Key Points To Remember About Trade Licence
          </h2>

          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              {KEY_POINTS_LEFT?.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="text-[15px] font-extrabold text-[#ef6a00]">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {KEY_POINTS_RIGHT?.map(({ title, body }) => (
                <div key={title}>
                  <h3 className="text-[15px] font-extrabold text-[#ef6a00]">{title}</h3>
                  <p className="mt-1 text-[15px] leading-7 text-slate-700">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

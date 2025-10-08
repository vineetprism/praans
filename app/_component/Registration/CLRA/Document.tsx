"use client";

import React from "react";

const NavyBullet = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    aria-hidden
    className="mt-1.5 shrink-0"
    aria-label="Play icon"
    role="img"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="#ea8434"
      strokeWidth="2"
    />
    <circle
      cx="12"
      cy="12"
      r="3"
      fill="none"
      stroke="#ea8434"
      strokeWidth="2"
    />
  </svg>
);

const LEFT_DOCS: string[] = [
  "Proof of Identity of the owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
  "Certificate of Incorporation/Partnership Deed",
  "PAN card of the firm",
  "Proof of Establishment (rent agreement, utility bill, etc.)",
  "Contractors name, Address, E-mail ID and Mobile number",
  "Agreement between Principal Employer & Contractors",
  "List of contract employees with nature of work",
];

const RIGHT_DOCS: string[] = [
  "Registration certificate of Principal Employer and Form-V",
  "Proof of Identity of the contractor such as Aadhar card, Voter ID, PAN card, passport, etc.",
  "Certificate of Incorporation/Partnership Deed",
  "PAN card of the firm",
  "Shop & Establishment registration",
  "Agreement between Principal Employer & Contractors",
];

export default function CLRADocs() {
  return (
    <main className="bg-[#f6f8fc] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-12 gap-x-10 sm:gap-x-14 lg:gap-x-20 xl:gap-x-28">
          <div>
            <h3 className="text-[18px] font-semibold sm:text-[20px] lg:text-[22px] tracking-tight text-[#142a63]">
              General Documents Required For CLRA Registration In India :
            </h3>

            <ul className="mt-5 space-y-2 text-[15px] leading-7 text-slate-800">
              {LEFT_DOCS.map((item, idx) => (
                <li key={`l-${idx}`} className="flex items-start gap-3">
                  <NavyBullet />
                  <span className="block min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold sm:text-[20px] lg:text-[22px] tracking-tight text-[#142a63]">
              General Documents Required For CLRA Licence In India :
            </h3>

            <ul className="mt-5 space-y-2 text-[15px] leading-7 text-slate-800">
              {RIGHT_DOCS?.map((item, idx) => (
                <li key={`r-${idx}`} className="flex items-start gap-3">
                  <NavyBullet />
                  <span className="block min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

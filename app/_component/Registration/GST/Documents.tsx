"use client";

import React from "react";

const Bullet = () => (
  <svg viewBox="0 0 24 24" width={16} height={16} className="mt-1.5 shrink-0" aria-label="Bullet Point">
    <circle cx="12" cy="12" r="7" fill="none" stroke="#f97316" strokeWidth="2" />
    <circle cx="12" cy="12" r="2" fill="#f97316" />
  </svg>
);

const DOC_GROUPS: {
  title: string;
  items: string[];
}[] = [
  {
    title: "Identity and Address Proof:",
    items: [
      "PAN Card of the business or owner.",
      "Aadhaar Card, voter ID, or passport.",
    ],
  },
  {
    title: "Proof of Business Address:",
    items: [
      "Utility bills (electricity, water, etc.).",
      "Rent agreement or property tax receipt.",
    ],
  },
  {
    title: "Constitution of Business:",
    items: [
      "Partnership deed for partnerships.",
      "Incorporation certificate for companies.",
    ],
  },
  {
    title: "Digital Signature Certificate :",
    items: ["Required for companies and LLPs."],
  },
  {
    title: "Bank Details:",
    items: ["Bank statement or canceled cheque."],
  },
  {
    title: "Photographs:",
    items: ["Passport-sized photographs of proprietors, partners, or directors."],
  },
];

const PENALTIES: { title: string; desc: string }[] = [
  {
    title: "Late Registration:",
    desc:
      "A penalty of ₹10,000 or 10% of the tax due (whichever is greater) shall be imposed for failure to register under GST.",
  },
  {
    title: "Tax Evasion:",
    desc:
      "If non-registration is deemed willful, the penalty can equal 100% of the tax due.",
  },
  {
    title: "Interest on Dues:",
    desc:
      "Non-compliance also attracts interest on unpaid taxes.",
  },
];

export default function GstDocsAndPenalties() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
          Documents Required For GST Registration
        </h2>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="space-y-8">
            {DOC_GROUPS.slice(0, 1).map((g) => (
              <Group key={g.title} {...g} />
            ))}
            {DOC_GROUPS.slice(3, 4).map((g) => (
              <Group key={g.title} {...g} />
            ))}
          </div>

          <div className="space-y-8">
            {DOC_GROUPS.slice(1, 2).map((g) => (
              <Group key={g.title} {...g} />
            ))}
            {DOC_GROUPS.slice(4, 5).map((g) => (
              <Group key={g.title} {...g} />
            ))}
          </div>

          <div className="space-y-8">
            {DOC_GROUPS.slice(2, 3).map((g) => (
              <Group key={g.title} {...g} />
            ))}
            {DOC_GROUPS.slice(5, 6).map((g) => (
              <Group key={g.title} {...g} />
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-slate-200/70" />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
          Penalties For Non-Compliance
        </h2>

        <p className="mx-auto mt-3 max-w-3xl text-center text-[15px] leading-7 text-slate-700">
          Failing to register under GST when required can lead to penalties and legal consequences:
        </p>

        <div className="mt-10 grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-3">
          {PENALTIES?.map(({ title, desc }) => (
            <div key={title} className="mx-auto max-w-md">
              <h3 className="text-[16px] font-extrabold text-[#ff6b00]">{title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-700 text-justify">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[18px] font-extrabold text-slate-800">{title}</h3>
      <ul className="mt-2 space-y-2 text-[15px] leading-7 text-slate-700">
        {items?.map((it) => (
          <li key={it} className="flex gap-2">
            <Bullet />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

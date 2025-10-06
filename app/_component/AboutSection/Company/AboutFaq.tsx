"use client";
import React, { useState } from "react";

const PlayIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M8 5v14l11-7z"></path>
  </svg>
);
const MinusIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <rect x="5" y="11" width="14" height="2" rx="1"></rect>
  </svg>
);

const faqs = [
  {
    q: "What are the services Praans Consultech provide?",
    a: "It provides litigation support, advisory, audits, registrations, and compliance management through an AI-based system software. These all form part of our comprehensive labour law compliance service.",
  },
  {
    q: "Does Praans Consultech provide assistance throughout PAN India?",
    a: "Yes, we offer PAN-India coverage with compliance specialists in each state and union territory.",
  },
  {
    q: "Do you offer compliance solutions for startups?",
    a: "Yes, to help startups get off the ground risk-free, we offer affordable compliance packages designed for smooth onboarding and legal safety.",
  },
  {
    q: "How does your compliance software help businesses?",
    a: "Our AI-based software streamlines compliance management by automating filings, monitoring due dates, and sending real-time alerts.",
  },
  {
    q: "Can Praans Consultech handle multi-location compliance?",
    a: "Yes, managing multi-state compliance for SMEs and large corporations is our area of expertise.",
  },
  {
    q: "Do you assist in labour law inspections and audits?",
    a: "Absolutely. We provide on-site audit and inspection assistance to ensure that compliance checks are handled efficiently and smoothly.",
  },
  {
    q: "Does the government recognize Praans Consultech?",
    a: "Yes, Praans Consultech is recognized by Startup India and holds MSME Certification, MCA registration, and ISO certifications.",
  },
  {
    q: "Can you represent businesses in legal disputes?",
    a: "Yes, our strong legal team provides litigation support and representation in inspections and labour law cases.",
  },
  {
    q: "Do you customize compliance solutions for businesses?",
    a: "Indeed. We offer customized and scalable compliance solutions tailored for SMEs, startups, and enterprises.",
  },
  {
    q: "Why should I opt for Praans Consultech over others?",
    a: "We make compliance easy, accurate, and stress-free by combining technology, legal expertise, and proactive support.",
  },
];

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="
            w-full flex items-start justify-start gap-3
            rounded-2xl bg-[#f47b20] px-5 py-3
            text-[14px] sm:text-[15px] font-medium text-white shadow-sm
            cursor-pointer text-left focus:outline-none
          "
      >
        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
          {isOpen ? <MinusIcon /> : <PlayIcon />}
        </span>

        <span className="text-white text-left flex-1 break-words leading-6">
          {q}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows] duration-300 ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="bg-white px-6 py-4">
            <p className="text-[15px] leading-7 text-slate-700 font-medium">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mid = Math.ceil(faqs.length / 2);
const col1 = faqs.slice(0, mid);
const col2 = faqs.slice(mid);

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));
  return (
    <>
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851]">
          Faq About Our Company
        </h1>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {col1?.map((item, idx) => {
              const index = idx;
              return (
                <FaqItem
                  key={`l-${idx}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>

          <div className="space-y-4">
            {col2?.map((item, idx) => {
              const index = mid + idx;
              return (
                <FaqItem
                  key={`r-${idx}`}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

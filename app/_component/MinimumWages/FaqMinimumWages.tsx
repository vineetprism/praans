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
    q: "What do you mean by minimum wage in India?",
    a: "It is the minimum remuneration that is paid to an employee by employers for their work done.",
  },
  {
    q: "By what law are minimum wages governed in India?",
    a: "It is regulated under the Minimum Wages Act, 1948 in India.",
  },
  {
    q: "By whom is the minimum wage set in India?",
    a: "Determination of minimum wages for different sectors is set by both the state and central government.",
  },
  {
    q: "Is there any uniformity in minimum wages in India?",
    a: "Every state has different minimum wages, and they vary on the basis of industries and skill levels of workers.",
  },
  {
    q: "How usually are minimum wages revised?",
    a: "It is generally revised half-yearly or based on inflation and cost of living.",
  },
  {
    q: "Does it apply to contract workers also?",
    a: "Yes, contract workers are entitled to minimum wages under the law.",
  },
  {
    q: "Are employers legally obliged to pay minimum wages?",
    a: "Yes. Non-compliance and non-payment can result in fines and penalties, and in some cases, imprisonment.",
  },
  {
    q: "Can minimum wages be higher than the basic pay?",
    a: "Yes. Basic pay, dearness allowance, and other benefits together comprise total wages, which can be above minimum wages.",
  },
  {
    q: "Is minimum wage the same for skilled and unskilled workers?",
    a: "No, skilled workers generally receive higher minimum wages than unskilled workers.",
  },
  {
    q: "Does the central government announce minimum wages for all states?",
    a: "No. The central government fixes wages only for industries under its jurisdiction; states handle others.",
  },
  {
    q: "How can employees check minimum wages in their state?",
    a: "Employees can visit their state labour department website or the Praans Consultech website.",
  },
  {
    q: "Are minimum wages applicable to part-time workers?",
    a: "Yes, part-time workers must also be paid proportionate minimum wages.",
  },
  {
    q: "Do domestic workers get minimum wages?",
    a: "Yes. Many states have specific minimum wage rules for domestic workers under the Minimum Wages Act.",
  },
  {
    q: "What are the consequences of violation of minimum wages by employers?",
    a: "Employers may face fines, interest, and legal claims for violating minimum wage laws.",
  },
  {
    q: "Are allowances included in minimum wages?",
    a: "Some allowances may be included, but the core calculation is based on basic wages.",
  },
  {
    q: "Can minimum wages be challenged legally?",
    a: "Yes, unions or employers can approach labour courts if minimum wages are not paid or revised unfairly.",
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

export default function FaqMinimumWages() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));
  return (
    <>
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851]">
          Minimum Wages in India FAQs
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

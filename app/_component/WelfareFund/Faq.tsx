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
    q: "Is Labour Welfare Fund applicable across India?",
    a: "No. It is applicable only in 16 states.",
  },
  {
    q: "Who contributes to the Labour Welfare Fund?",
    a: "The employer and employee.",
  },
  {
    q: "What is the contribution of employee?",
    a: "It is state specific and generally differs for each state.",
  },
  {
    q: "Is an employer contribution mandatory?",
    a: "Yes. It is necessary for employer to pay its contribution as per state specific law, it generally double the rate of employee’s contributions.",
  },
  {
    q: "When do we have to pay the contribution for LWF?",
    a: "You have to pay contribution according to your state rules; it can be monthly, yearly, half-yearly or quarterly.",
  },
  {
    q: "Does it apply to contract workers also?",
    a: "Yes, in most states contract and casual workers are covered.",
  },
  {
    q: "Which authority manages the Labour Welfare Fund?",
    a: "The respective State Labour Welfare Board.",
  },
  {
    q: "Is Labour Welfare Fund different from EPF and ESI?",
    a: "Yes. LWF is for worker welfare schemes, while EPF and ESI are for retirement and health benefits.",
  },
  {
    q: "What happens if an employer does not pay LWF?",
    a: "The employer may face penalties, fines, and legal action.",
  },
  {
    q: "Do IT companies and offices come under the purview of LWF?",
    a: "Yes. IT Companies and offices also come under the definition of establishment under the state-specific LWF Act.",
  },
  {
    q: "Can employees directly claim benefits?",
    a: "Yes, employees can directly apply for benefits to the Labour Welfare Board of the state.",
  },
  {
    q: "Does the salary slip show the deduction for LWF?",
    a: "Yes, salary slips show the deduction for LWF.",
  },
  {
    q: "Do shops having employees less than 3 need to pay LWF?",
    a: "Not in most states. Applicability usually begins at 5 or 10 employees.",
  },
  {
    q: "How can an employer deposit LWF?",
    a: "Payment can be made online through the state labour department’s portal.",
  },
  {
    q: "Is there any income tax exemption on LWF?",
    a: "Employer’s contribution is treated as a business expense under the Income Tax Act.",
  },
  {
    q: "What is the importance of LWF in 2025?",
    a: "It provides the worker with a safety net in times of need and helps them access welfare benefits easily.",
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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));
  return (
    <>
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851]">
          FAQs on Labour Welfare Fund (LWF)
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

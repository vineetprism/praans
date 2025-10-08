"use client";
import React, { useState } from "react";

const PlayIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
    aria-label="Play icon"
    role="img"
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
    aria-label="Minus icon"
    role="img"
  >
    <rect x="5" y="11" width="14" height="2" rx="1"></rect>
  </svg>
);

const PinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    aria-hidden
    aria-label="Pin icon"
    role="img"
    className="text-[#2a5caa]"
    fill="currentColor"
  >
    <path d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 12 6 12s6-6.75 6-12c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
  </svg>
);

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
          <div className="bg-white px-6 py-3">
            <p className="text-[14px] leading-6 text-slate-700 font-medium">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqPage() {
  const faqs = [
    {
      q: "What is FSSAI Registration?",
      a: "FSSAI Registration is a mandatory certification for food businesses to ensure food safety and compliance with Indian food regulations.",
    },
    {
      q: "Who needs FSSAI Registration?",
      a: "All businesses engaged in food production, storage, distribution, retail, or catering are required to obtain FSSAI Registration.",
    },
    {
      q: "How does FSSAI Registration differ from an FSSAI License?",
      a: "A FSSAI licence is required for larger companies and manufacturers, whereas FSSAI registration is meant for small food businesses.",
    },
    {
      q: "How long is FSSAI Registration valid?",
      a: "It is valid for 1 to 5 years and must be renewed before expiry.",
    },
    {
      q: "Is FSSAI Registration required for home-based food businesses?",
      a: "Yes, even small-scale or home-based food businesses require FSSAI Registration.",
    },
    {
      q: "Is there a penalty for operating without FSSAI Registration?",
      a: "Yes, operating without registration is illegal and can lead to fines, penalties, or business closure.",
    },
    {
      q: "Is FSSAI Registration location-specific?",
      a: "Yes, it is tied to the business address, but you can update it if your address changes.",
    },
    {
      q: "Can FSSAI Registration be transferred or updated?",
      a: "Yes, changes like business address or ownership can be updated online.",
    },
    {
      q: "Can I operate my food business before getting FSSAI Registration?",
      a: "No, you must obtain FSSAI Registration before starting operations.",
    },
    {
      q: "Can FSSAI Registration be renewed?",
      a: "Yes, you have the option to renew your registration online prior to its expiration",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (idx: number) => setOpenIndex((p) => (p === idx ? null : idx));

  const mid = Math.ceil(faqs.length / 2);
  const col1 = faqs.slice(0, mid);
  const col2 = faqs.slice(mid);

  const statesLeft = [
    "Uttar Pradesh",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Delhi",
  ];

  const statesRight = [
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Sikkim",
    "Telangana",
    "Tamil Nadu",
    "Uttarakhand",
    "West Bengal",
  ];

  return (
    <main className="bg-gray-50">
      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 py-4 sm:py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#142a63]">
          Frequently Asked Questions
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

      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pb-6 py-12">
        <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3">
          <ul className="space-y-3">
            {statesLeft?.map((state) => (
              <li
                key={state}
                className="flex items-center gap-2 text-[15px] text-slate-700"
              >
                <PinIcon />
                <span>FSSAI Registration in {state}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-3">
            {statesRight?.map((state) => (
              <li
                key={state}
                className="flex items-center gap-2 text-[15px] text-slate-700"
              >
                <PinIcon />
                <span>FSSAI Registration in {state}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pb-14">
        <div className="mx-auto max-w-5xl">
          <div className="text-[22px] font-bold text-slate-900 mb-2">
            Disclaimer :
          </div>
          <div className="rounded-md border border-slate-200 p-5 text-[14px] leading-7 text-slate-700 text-justify">
            This website is privately operated and not affiliated with any
            government entity. We do not represent or are affiliated with,
            endorsed by, or in any way connected to any government body or
            department. The form provided is not for official registration
            purposes; rather, it&apos;s designed to gather information from our
            clients to help us better understand their business or needs. By
            continuing to use this website, you acknowledge that we are a
            private company. We offer assistance based on customer requests, and
            the fees collected on this website are for consultancy services. We
            reserve the right to outsource cases/matters as deemed necessary. We
            are in the process of giving our brand a new name. Stay tuned for
            updates.
          </div>
        </div>
      </section>
    </main>
  );
}

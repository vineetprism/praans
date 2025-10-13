"use client";

import Image from "next/image";
import React from "react";

const Bullet = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    aria-hidden
    className="shrink-0"
    aria-label="Bullet"
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      fill="none"
      stroke="#f97316"
      strokeWidth="2"
    />
    <path d="M12 4 v4" stroke="#f97316" strokeWidth="2" />
  </svg>
);

const CheckBadge = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width={20}
    height={20}
    className={className}
    aria-hidden
    aria-label="Check Badge"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="#f57f28"
      strokeWidth="2"
    />
    <path
      d="M8.5 12.5l2.5 2.5 4.5-5"
      fill="none"
      stroke="#f57f28"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TESTIMONIALS = [
  {
    quote:
      "I recently availed of shop and establishment registration services from a Praans Consultech , and I am extremely satisfied with the experience",
    name: "Neelam Bajpai",
    org: "Rishi Foods, Almora",
  },
  {
    quote:
      "I recently availed of shop and establishment registration services from a Praans Consultech , and I am extremely satisfied with the experience",
    name: "Neelam Bajpai",
    org: "Rishi Foods, Almora",
  },
];

/* ---------------- New docs data ---------------- */
const DOCS_LEFT = [
  "Aadhar Card of the business owner",
  "PAN Card of the business or owner",
  "Proof of business setup (partnership deed, incorporation certificate, etc.)",
];

const DOCS_RIGHT = [
  "Business address proof",
  "Bank account details",
  "Investment and turnover details",
];

export default function WhoCanApplyPage() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-stretch gap-8 lg:gap-12">
          <div className="rounded-2xl p-4 lg:p-5">
            <div className="relative h-[360px] sm:h-[300px] lg:h-[460px] rounded-2xl w-full overflow-hidden">
              <Image
                src="/apply/msme.webp"
                alt="MSME Registration illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="flex min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#142a63] leading-tight">
              Who Can Apply for MSME Registration?
            </h1>

            <div className="mt-3 space-y-2 text-[15px] leading-[1.55] text-slate-800">
              <div className="flex items-start gap-3">
                <Bullet />
                <p>
                  <span className="font-semibold">MSME</span> registration is
                  available for:
                </p>
              </div>

              <div className="ml-7 space-y-2">
                <p>
                  <span className="font-semibold text-orange-500">
                    Manufacturing Enterprises:
                  </span>{" "}
                  Businesses involved in the production of goods.
                </p>
                <p>
                  <span className="font-semibold text-orange-500">
                    Service Enterprises:
                  </span>{" "}
                  Businesses offering services in various sectors.
                </p>
                <p>
                  The eligibility is determined based on the{" "}
                  <span className="font-semibold">
                    investment in plant and machinery or equipment
                  </span>{" "}
                  and the <span className="font-semibold">annual turnover</span>
                  .
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Bullet />
                <div className="space-y-1">
                  <p className="font-semibold leading-[1.45]">
                    Micro Enterprises:
                  </p>
                  <p>
                    Businesses with an investment of up to ₹1 crore and an
                    annual turnover not exceeding ₹5 crore.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bullet />
                <div className="space-y-1">
                  <p className="font-semibold leading-[1.45]">
                    Small Enterprises:
                  </p>
                  <p>
                    Businesses with an investment limit of ₹10 crore and an
                    annual turnover up to ₹50 crore.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Bullet />
                <div className="space-y-1">
                  <p className="font-semibold leading-[1.45]">
                    Medium Enterprises:
                  </p>
                  <p>
                    Businesses with an investment of up to ₹50 crore and an
                    annual turnover capped at ₹250 crore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width logos strip (already full-bleed using negative margins; keep if you need) */}
        <div className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-orange-400 bg-white p-4 sm:p-6">
            <div className="mx-auto max-w-7xl grid w-full grid-cols-2 gap-6 place-items-center sm:grid-cols-4">
              <div className="relative h-14 w-40">
                <Image
                  src="/apply/iso.webp"
                  alt="ISO Certified"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-40">
                <Image
                  src="/apply/mca.webp"
                  alt="Ministry of Corporate Affairs"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-40">
                <Image
                  src="/apply/startup.webp"
                  alt="Startup India"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative h-14 w-40">
                <Image
                  src="/apply/msme1.webp"
                  alt="MSME"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FULL-WIDTH TESTIMONIALS (bg-white) ===================== */}
      <section className="bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Client Testimonials
          </h2>

          <div className="mt-6 grid gap-10 sm:gap-12 md:grid-cols-2 place-items-center">
            {TESTIMONIALS?.map((t, i) => (
              <article key={i} className="text-center">
                <p className="mx-auto text-center text-[15px] leading-7 text-slate-800 max-w-[56ch]">
                  {t.quote}
                </p>
                <div className="mt-4">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-600">{t.org}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== NEW: Documents Required section ===================== */}
      <section className="py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Documents Required For MSME Registration
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <ul className="space-y-3">
              {DOCS_LEFT.map((item, idx) => (
                <li
                  key={`l-${idx}`}
                  className="flex items-start gap-3 text-[15px] text-slate-800"
                >
                  <CheckBadge className="mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {DOCS_RIGHT.map((item, idx) => (
                <li
                  key={`r-${idx}`}
                  className="flex items-start gap-3 text-[15px] text-slate-800"
                >
                  <CheckBadge className="mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

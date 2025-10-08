"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Bullet = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden className="shrink-0 mt-1.5" aria-label="Bullet">
    <circle cx="12" cy="12" r="8" fill="none" stroke="#f97316" strokeWidth="2" />
    <path d="M12 4 v4" stroke="#f97316" strokeWidth="2" />
  </svg>
);

const TESTIMONIALS = [
  {
    quote:
      "I recently availed of shop and establishment registration services from Praans Consultech, and I am extremely satisfied with the experience",
    name: "Neelam Bajpai",
    org: "Rishi Foods, Almora",
  },
  {
    quote:
      "I recently availed of shop and establishment registration services from Praans Consultech, and I am extremely satisfied with the experience",
    name: "Neelam Bajpai",
    org: "Rishi Foods, Almora",
  },
];


const WHO_NEEDS_GST = [
  "Turnover-Based Requirement: Businesses with an annual turnover exceeding ₹20 lakh (₹10 lakh for special category states).",
  "Interstate Supply: Any business involved in the supply of goods or services across state borders.",
  "E-commerce Operators: Businesses operating as e-commerce platforms or aggregators.",
  "Casual Taxable Persons: Individuals engaged in occasional or seasonal business activities.",
  "Non-Resident Taxable Persons: Foreign entities supplying goods or services in India.",
  "Others: Agents, Input Service Distributors (ISD), and businesses required to deduct TDS under GST.",
];

function TestimonialCard({ quote, name, org }: { quote: string; name: string; org: string }) {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-xl border border-orange-200 bg-white p-6 text-center shadow-sm">
      <div className="flex grow items-center justify-center">
        <p className="max-w-[56ch] text-[15px] leading-7 text-slate-800">{quote}</p>
      </div>
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-600">{org}</div>
      </div>
    </article>
  );
}

export default function GSTNeeds() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="self-stretch min-h-[1px]">
            <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200 bg-white p-2 grid place-items-center">
              <Image
                src="/apply/gst.webp" // your GST image
                alt="GST Registration Online"
                fill
                priority
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="self-stretch min-h-[1px]">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-[#1c284f]">
                Who Needs GST Registration?
              </h1>

              <div className="mt-5 space-y-2 text-[14px] leading-6 font-semibold text-slate-700">
                {WHO_NEEDS_GST?.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Bullet />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 mt-16 w-screen -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-orange-400 bg-white p-4 sm:p-6">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-2 place-items-center gap-6 sm:grid-cols-4">
              <div className="relative h-14 w-40">
                <Image src="/apply/iso.webp" alt="ISO Certified" fill className="object-contain" />
              </div>
              <div className="relative h-14 w-40">
                <Image src="/apply/mca.webp" alt="Ministry of Corporate Affairs" fill className="object-contain" />
              </div>
              <div className="relative h-14 w-40">
                <Image src="/apply/startup.webp" alt="Startup India" fill className="object-contain" />
              </div>
              <div className="relative h-14 w-40">
                <Image src="/apply/msme1.webp" alt="MSME" fill className="object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (unchanged) */}
      <section className="bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Client Testimonials
          </h2>

          <div className="mt-6">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={600}
              autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={24}
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
              allowTouchMove
              className="!h-[260px] sm:!h-[280px] lg:!h-[180px]"
            >
              {TESTIMONIALS?.map((t, i) => (
                <SwiperSlide key={i} className="!h-full" role="group" aria-roledescription="slide" aria-label={`Testimonial ${i + 1}`}>
                  <TestimonialCard {...t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </main>
  );
}

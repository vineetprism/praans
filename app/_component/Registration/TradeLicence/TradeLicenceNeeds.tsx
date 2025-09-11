"use client";

import Image from "next/image";
import React from "react";

// ---- Swiper (carousel) ----
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* ------------------ Small helper: bullet icon ------------------ */
const Bullet = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden className="shrink-0 mt-1.5">
    <circle cx="12" cy="12" r="8" fill="none" stroke="#f97316" strokeWidth="2" />
    <path d="M12 4 v4" stroke="#f97316" strokeWidth="2" />
  </svg>
);

/* ------------------ Testimonials content ------------------ */
type Review = {
  quote: string;
  name: string;
  org: string;
};

const TESTIMONIALS: Review[] = [
  {
    quote:
      "Professional, reliable, and efficient! Praans Consultech made the entire registration process quick and easy for us. Highly recommend their services!",
    name: "Nikhil Sharma",
    org: "Hunny Bunny Restaurant",
  },
  {
    quote:
      "The whole process was effortless with Praans Consultech. Everything was in place and we received our approvals without any issues.",
    name: "Harinder Singh",
    org: "Anaya Foods",
  },
  {
    quote:
      "The team handled our application with great care and efficiency. Clear guidance and a truly stress-free experience.",
    name: "Suman",
    org: "Kung Fu Chinese",
  },
  {
    quote:
      "Thanks to Praans Consultech, we got our licence in no time. Their expertise and attention to detail were invaluable.",
    name: "Nishil Kumar",
    org: "The Dhaba",
  },
  {
    quote:
      "A seamless experience from start to finish. The team took care of all formalities and kept us updated throughout.",
    name: "Sagar Singh",
    org: "Cloud Kitchen",
  },
  {
    quote:
      "Very pleased with the service provided. They helped us navigate the process smoothly and quickly.",
    name: "Santosh Malik",
    org: "Cloud Kitchen",
  },
];

/* ------------------ Card for equal-height testimonial slides ------------------ */
function TestimonialCard({ quote, name, org }: Review) {
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

/* ========================= Page ========================= */
export default function TradeLicenceNeeds() {
  // Eligibility points (as in the screenshot/text)
  const ELIGIBILITY = [
    "The candidate needs to be at least eighteen years old.",
    "The business’s activities must comply with local rules and regulations.",
    "The candidate must not have a criminal history.",
  ];

  return (
    <main className="bg-[#f6f8fc]">
      {/* Who needs + eligibility */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT: image */}
          <div className="h-full">
            <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/apply/trade.webp" /* replace with your image path */
                alt="Trade Licence"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          {/* RIGHT: text */}
          <div className="h-full">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-tight tracking-tight text-slate-900">
                Who Needs a Trade Licence?
              </h1>

              <p className="mt-3 text-[15px] leading-7 text-slate-800">
                Any business or individual engaged in commercial, industrial, or trading activities
                within municipal limits is required to obtain a trade licence. This includes shops,
                factories, restaurants, warehouses, salons, gyms, and other commercial establishments.
              </p>

              <h2 className="mt-6 text-[20px] sm:text-[22px] font-extrabold text-slate-900">
                Eligibility for Trade Licence
              </h2>

              <div className="mt-3 space-y-2 text-[15px] leading-7 text-slate-800">
                {ELIGIBILITY.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Bullet />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width logos */}
        <div className="relative left-1/2 right-1/2 mt-10 w-screen -ml-[50vw] -mr-[50vw] shadow-md">
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

      {/* Testimonials */}
      <section className="bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-[28px] sm:text-[34px] font-extrabold text-[#142a63]">
            Client Testimonials
          </h2>

          <div className="mt-6">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={600}
              autoplay={{ delay: 2200, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              allowTouchMove
              className="!h-[260px] sm:!h-[280px] lg:!h-[180px]"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i} className="!h-full">
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

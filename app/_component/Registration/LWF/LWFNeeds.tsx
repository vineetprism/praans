"use client";

import Image from "next/image";
import React from "react";

// ==== Swiper (carousel) ====
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

/* ------------------ Testimonials content (unchanged) ------------------ */
const TESTIMONIALS = [
  {
    quote:
      "Professional, reliable, and efficient! Praans Consultech made the entire FSSAI registration process quick and easy for us. Highly recommend their services!",
    name: "Nikhil Sharma",
    org: "Hunny Bunny Restaurant",
  },
  {
    quote:
      "The entire FSSAI registration process was effortless with Praans Consultech. They ensured everything was in place, and we received our certification without any issues.",
    name: "Harinder Singh",
    org: "Anaya Foods",
  },
  {
    quote:
      "The team at Praans Consultech handled our FSSAI registration with great care and efficiency. They provided clear guidance and made the process stress-free.",
    name: "Suman",
    org: "Kung Fu Chinese",
  },
  {
    quote:
      "Thanks to Praans Consultech, we got our FSSAI registration done in no time. Their expertise and attention to detail were invaluable.",
    name: "Nishil Kumar",
    org: "The Dhaba",
  },
  {
    quote:
      "A seamless experience from start to finish. The team took care of all the formalities for FSSAI registration, and we received prompt updates throughout the process.",
    name: "Sagar Singh",
    org: "Cloud Kitchen",
  },
  {
    quote:
      "We are very pleased with the service provided. Praans Consultech helped us navigate the complexities of FSSAI registration smoothly and quickly.",
    name: "Santosh Malik",
    org: "Cloud Kitchen",
  },
];

/* ------------------ RIGHT-SIDE CONTENT: LWF ------------------ */
const WHO_NEEDS_LWF = [
  {
    title: "Employers of establishments",
    body:
      "Factories, shops, and commercial enterprises employing workers.",
  },
  {
    title: "Businesses covered by state LWF Act",
    body:
      "Entities falling under the applicable state’s Labour Welfare Fund Act.",
  },
  {
    title: "Companies with eligible workers",
    body:
      "Employers with workers liable for LWF contributions as per state rules.",
  },
];

/* Card for equal-height testimonial slides */
function TestimonialCard({
  quote,
  name,
  org,
}: {
  quote: string;
  name: string;
  org: string;
}) {
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

export default function LWFNeeds() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* 👉 make both columns the same height; image follows text height */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT: image — remove fixed min-heights; let it stretch to text height */}
          <div className="h-full">
            <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/apply/lwf.webp"
                alt="Labour Welfare Fund illustration"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          {/* RIGHT: content — no fixed min-height; natural text height drives the row */}
          <div className="h-full">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-extrabold leading-tight tracking-tight text-slate-900">
                Who Needs to Register for LWF?
              </h1>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                Labour Welfare Fund registration is mandatory for:
              </p>

              <div className="mt-4 space-y-3 text-[15px] leading-7 text-slate-800">
                {WHO_NEEDS_LWF.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <Bullet />
                    <p>
                      <span className="font-semibold">{item.title}:</span> {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width logos (unchanged) */}
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

      {/* Testimonials (unchanged) */}
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
              autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={24}
              breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
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


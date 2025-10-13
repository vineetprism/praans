"use client";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Bullet = () => (
  <svg
    viewBox="0 0 24 24"
    width={18}
    height={18}
    aria-hidden
    className="shrink-0 mt-1.5"
    aria-label="Bullet Point"
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

type Review = {
  quote: string;
  name: string;
  org: string;
};

const TESTIMONIALS: Review[] = [
  {
    quote:
      "Highly Satisfied with the Service! We were able to obtain our trade license without any issues. The service was fast, reliable, and accurate.",
    name: "Beny Mali",
    org: "Cafe",
  },
  {
    quote:
      "Exceptional Support Throughout! From the initial consultation to receiving the trade license, their support was exceptional. Everything was taken care of smoothly.",
    name: "Pradeep Sharma",
    org: "Educational Institute",
  },
  {
    quote:
      "The team’s in-depth knowledge of the trade license process made all the difference. Highly recommended for seamless registration.",
    name: "Subhankar Ghosh",
    org: "Transport Office",
  },
  {
    quote:
      "Our trade license was processed without any delays. The entire process was clear, transparent, and well-handled.",
    name: "Santosh Singh",
    org: "Yoga Centre",
  },
  {
    quote:
      "We were impressed with how quickly our trade license was obtained. Their reliable service made the entire process stress-free.",
    name: "Harinder Chaudhary",
    org: "Grocery warehouse",
  },
  {
    quote:
      "The team handled our trade license registration with complete professionalism. The process was quick and hassle-free.",
    name: "Yuvaraj",
    org: "Logistics Firm",
  },
];

function TestimonialCard({ quote, name, org }: Review) {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-xl border border-orange-200 bg-white p-6 text-center shadow-sm">
      <div className="flex grow items-center justify-center">
        <p className="max-w-[56ch] text-[15px] leading-7 text-slate-800">
          {quote}
        </p>
      </div>
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-600">{org}</div>
      </div>
    </article>
  );
}

export default function TradeLicenceNeeds() {
  const ELIGIBILITY = [
    "The candidate needs to be at least eighteen years old.",
    "The business’s activities must comply with local rules and regulations.",
    "The candidate must not have a criminal history.",
  ];

  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="h-full">
            <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/apply/trade.webp"
                alt="Trade Licence"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="h-full">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-[#142a63]">
                Who Needs a Trade Licence?
              </h1>

              <p className="mt-3 text-[15px] leading-7 text-slate-800">
                Any business or individual engaged in commercial, industrial, or
                trading activities within municipal limits is required to obtain
                a trade licence. This includes shops, factories, restaurants,
                warehouses, salons, gyms, and other commercial establishments.
              </p>

              <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-[#142a63]">
                Eligibility for Trade Licence
              </h2>

              <div className="mt-2 space-y-1 text-[15px] leading-7 text-slate-800">
                {ELIGIBILITY?.map((item) => (
                  <div key={item} className="flex gap-3">
                    <Bullet />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 mt-10 w-screen -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-orange-400 bg-white p-4 sm:p-6">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-2 place-items-center gap-6 sm:grid-cols-4">
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
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              spaceBetween={24}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              allowTouchMove
              className="!h-[260px] sm:!h-[280px] lg:!h-[180px]"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide
                  key={i}
                  className="!h-full"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`Testimonial ${i + 1}`}
                >
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

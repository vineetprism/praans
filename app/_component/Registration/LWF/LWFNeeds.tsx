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

const TESTIMONIALS = [
  {
    quote:
      "Thanks to their expert assistance, we were able to comply with all Labour Welfare Fund regulations without any hassle. Highly recommended.",
    name: "Amit Kumar",
    org: "Grocery Company",
  },
  {
    quote:
      "Their prompt and professional service ensured our Labour Welfare Fund contribution was completed without delay. Great experience!",
    name: "Rajendra Kumar",
    org: "E-commerce firm",
  },
  {
    quote:
      "The team provided thorough guidance on Labour Welfare Fund compliance and ensured that all requirements were met promptly.",
    name: "Gautam Sharma",
    org: "IT firm",
  },
  {
    quote:
      "We received seamless support for Labour Welfare Fund compliance. The entire process was hassle-free and handled professionally.",
    name: "Chirag Arora",
    org: "Ayurvedic firm",
  },
  {
    quote:
      "Their reliable service ensured that we met all Labour Welfare Fund deadlines, and everything was filed on time without any issues.",
    name: "Sagar Malik",
    org: "NBFC",
  },
  {
    quote:
      "The Labour Welfare Fund registration was completed smoothly and on time. The team guided us every step of the way, making the process very efficient.",
    name: "Suman Soni",
    org: "Automobile factory",
  },
];

const WHO_NEEDS_LWF = [
  {
    title: "Employers of establishments",
    body: "Factories, shops, and commercial enterprises employing workers.",
  },
  {
    title: "Businesses covered by state LWF Act",
    body: "Entities falling under the applicable state’s Labour Welfare Fund Act.",
  },
  {
    title: "Companies with eligible workers",
    body: "Employers with workers liable for LWF contributions as per state rules.",
  },
];

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

export default function LWFNeeds() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
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

          <div className="h-full">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1c284f]">
                Who Needs to Register for LWF?
              </h1>

              <p className="mt-2 text-sm font-semibold text-[#1c284f]">
                Labour Welfare Fund registration is mandatory for:
              </p>

              <div className="mt-4 space-y-3 text-[15px] leading-7 text-[#1c284f]">
                {WHO_NEEDS_LWF?.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <Bullet />
                    <p>
                      <span className="font-semibold">{item.title}:</span>{" "}
                      {item.body}
                    </p>
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
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#1c284f]">
            Client Testimonials
          </h2>

          <div className="mt-6">
            <Swiper
              modules={[Autoplay]}
              loop
              speed={600}
              autoplay={{
                delay: 2000,
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

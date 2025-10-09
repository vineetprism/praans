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

const TESTIMONIALS = [
  {
    quote:
      "Smooth Filing Experience! Their team is prompt and professional. They guided us through every step of the Professional Tax filing process.",
    name: "Priyanka Sharma",
    org: "Café chain",
  },
  {
    quote:
      "Prompt and Professional! We relied on their expertise for our Professional Tax filings, and they made the entire process stress-free and easy to understand.",
    name: "Raju Thakur",
    org: "Online car rental",
  },
  {
    quote:
      "Expert Guidance! Thanks to their expert guidance, our Professional Tax filings were completed without any complications or delays.",
    name: "Neeraj Sharma",
    org: "Pet care clinic chain",
  },
  {
    quote:
      "Excellent Service! The Professional Tax service was excellent—timely, accurate, and handled with utmost professionalism.",
    name: "Monika Sharma",
    org: "IT firm",
  },
  {
    quote:
      "Quick and Efficient Service! Their Professional Tax filing service was fast and seamless. We got everything done on time with minimal effort.",
    name: "Abhilasha Aggarwal",
    org: "Online cattle app",
  },
  {
    quote:
      "Highly Reliable and Accurate! They ensured our Professional Tax compliance was handled accurately and efficiently. Great service all around.",
    name: "Subodh Yadav",
    org: "Online car sale–purchase",
  },
];

const WHO_PROF_TAX = [
  {
    title: "Salaried Employees",
    body: "Employees earning above the state’s exemption limit are subject to professional tax, which employers must deduct from salaries.",
  },
  {
    title: "Self-Employed Professionals",
    body: "Professionals such as freelancers, consultants, and professionals like doctors, lawyers, and chartered accountants are required to register for professional taxes.",
  },
  {
    title: "Business Owners",
    body: "Individuals owning businesses, including sole proprietors, partnerships, and companies, need registration if they have employees.",
  },
  {
    title: "Employers",
    body: "Any employer with employees must ensure professional tax registration and deduction, as per state regulations.",
  },
  {
    title: "Traders and Merchants",
    body: "Business owners involved in trading, retail, or wholesale may need to register if their income meets the state’s criteria.",
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

export default function ProfessionalTaxNeeds() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="h-full min-h-[360px] lg:min-h-[520px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
              <Image
                src="/apply/professional-tax.jpg"
                alt="Professional Tax visuals"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="h-full min-h-[360px] lg:min-h-[520px]">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-[#1c284f]">
                Who Needs a Professional Tax Registration and License?
              </h1>

              <div className="mt-6 space-y-2 text-[15px] leading-7 text-slate-800">
                {WHO_PROF_TAX?.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <Bullet />
                    <p>
                      <span className="font-semibold">{item?.title}:</span>{" "}
                      {item?.body}
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
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
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
              {TESTIMONIALS?.map((t, i) => (
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

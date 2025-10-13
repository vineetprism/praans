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
    className="mt-1.5 shrink-0"
    aria-label="Bullet point"
  >
    <circle cx="12" cy="12" r="8" fill="none" stroke="#f97316" strokeWidth="2" />
    <path d="M12 4 v4" stroke="#f97316" strokeWidth="2" />
  </svg>
);

const WHO_NEEDS_CLRA = [
  {
    title: "Establishments",
    desc:
      "Any business or organization that employs state specific number of contract employees in a day must register under CLRA.",
  },
  {
    title: "Contractors",
    desc:
      "Individuals or agencies providing contract labour to establishments must obtain a licence.",
  },
  {
    title: "Industries",
    desc:
      "Sectors like manufacturing, construction, and hospitality, Logistics, IT etc. which depend on contract labour, must comply with CLRA registration.",
  },
  {
    title: "Government Bodies",
    desc:
      "Government and semi-government organizations employing contract labour are also required to comply.",
  },
];

const TESTIMONIALS = [
  { quote: "The team’s expertise in CLRA registration was evident. They provided clear instructions and ensured we met all compliance requirements promptly.", name: "Ajay Kumar", org: "Adwork Facilities" },
  { quote: "We were able to get our CLRA license in record time, thanks to their proactive approach and attention to detail. Very satisfied with the service.", name: "Rajendra Kumar", org: "Perfect Hires" },
  { quote: "The process of obtaining our CLRA registration was made incredibly easy. The team was thorough, professional, and kept us informed every step of the way.", name: "Harish Sharma", org: "Automobile Industry" },
  { quote: "The team made the CLRA registration process quick and hassle-free. They guided us step by step, ensuring compliance with all legal requirements.", name: "Dilip Mishra", org: "L&L Security" },
  { quote: "We were able to obtain our CLRA licence without any issues. Their professional approach and timely responses made the entire experience smooth and efficient.", name: "Brajesh Kumar", org: "Prestigious Housekeeping Facilities" },
  { quote: "Excellent service in handling our CLRA registration. They ensured all our documentation was in order and helped us obtain the license with minimal effort.", name: "Naeem Ahmed", org: "Educational Institute" },
];

function TestimonialCard({ quote, name, org }: { quote: string; name: string; org: string }) {
  return (
    <article className="flex h-full w-full flex-col justify-between rounded-xl border border-orange-200 bg-white p-6 text-center shadow-sm">
      <div className="flex grow items-center justify-center">
        <p className="max-w-[56ch] text-[15px] leading-7 text-slate-800">{quote}</p>
      </div>
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-700">{org}</div>
      </div>
    </article>
  );
}

export default function CLRARegistration() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="self-stretch min-h-[1px]">
            <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-[28px] shadow-sm ring-1 ring-slate-200">
              <Image
                src="/apply/clra.webp"
                alt="Certification stamp for CLRA registration"
                fill
                priority
                className="object-cover" 
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
            </div>
          </div>

          <div className="self-stretch min-h-[1px]">
            <div className="flex h-full flex-col justify-center">
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[#1c2a63]">
                Who Needs a CLRA Registration and Licence?
              </h1>

              <p className="mt-3 text-[14px] leading-7 text-slate-800">
                The Contract Labour (Regulation and Abolition) Act (CLRA) applies to establishments and
                contractors employing contract labour. Specifically, those who need CLRA registration and
                license include:
              </p>

              <div className="mt-4 space-y-5">
                {WHO_NEEDS_CLRA?.map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <Bullet />
                    <div>
                      <p className="text-[15px] font-semibold text-[#1c2a63]">
                        {title}:
                      </p>
                      <p className="mt-1 text-[14px] leading-7 text-slate-800">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-1/2 right-1/2 mt-16 w-screen -ml-[50vw] -mr-[50vw] px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-orange-400 bg-white p-4 sm:p-6 shadow-md">
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

      <section className="bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851]">
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
                <SwiperSlide role="group" aria-roledescription="slide" aria-label={`Testimonial ${i + 1}`} key={i} className="!h-full">
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

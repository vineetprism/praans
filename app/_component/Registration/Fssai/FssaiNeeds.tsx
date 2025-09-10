"use client";

import Image from "next/image";
import React from "react";

// ==== Swiper (carousel) ====
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

/* --------------------------------------------------------- */
/* Icons / small helpers                                     */
/* --------------------------------------------------------- */
const Bullet = () => (
  <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden className="shrink-0">
    <circle cx="12" cy="12" r="8" fill="none" stroke="#f97316" strokeWidth="2" />
    <path d="M12 4 v4" stroke="#f97316" strokeWidth="2" />
  </svg>
);

/* --------------------------------------------------------- */
/* Content                                                    */
/* --------------------------------------------------------- */
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

/** Two-column list content */
const WHO_NEEDS = [
  ["Transporter", "Distributor", "Manufacturer", "Storage", "Restaurant", "Dhaba", "Canteen"],
  ["Retailer", "Wholesaler", "Food Vending Agencies Importer", "E-commerce Exporter", "Club", "Hawker", "Others"],
];

/* ===== More Services ===== */
const SERVICES = [
  {
    title: "MSME Registration",
    desc:
      "Micro, Small, and Medium Enterprises (MSMEs) play a crucial role in India’s economic growth, providing employment, fostering innovation, and driving exports.",
    href: "/registration/msme",
  },
  {
    title: "FSSAI",
    desc:
      "FSSAI (Food Safety and Standards Authority of India) registration is a compulsory requirement for all individuals or businesses engaged in food activities.",
    href: "/registration/fssai",
  },
  {
    title: "GST Registration",
    desc:
      "Goods and Services Tax is a transformative tax reform that streamlines the taxation process by consolidating multiple indirect taxes into a single, unified tax framework.",
    href: "/registration/gst",
  },
  {
    title: "LWF",
    desc:
      "The Labour Welfare Fund (LWF) registration process in India ensures that employers contribute towards the welfare of their employees.",
    href: "/registration/labour-welfare-fund",
  },
  {
    title: "Trade Licence",
    desc:
      "A Trade License is a legal permit issued by the local municipal authority that allows businesses to operate in a specific area.",
    href: "/registration/trade-licence",
  },
  {
    title: "CLRA",
    desc:
      "The Contract Labour is a central law designed to regulate the employment of contract labour in India, ensuring their rights and welfare.",
    href: "/registration/contract-labour",
  },
];

/* --------------------------------------------------------- */
/* UI pieces                                                  */
/* --------------------------------------------------------- */
function ServiceCard({
  title,
  desc,
  href,
}: {
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <article className="flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm ring-1 ring-slate-200/60 transition hover:shadow-md">
      <div>
        <h3 className="text-xl font-extrabold tracking-tight text-[#142a63]">{title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-slate-700 text-justify">{desc}</p>
      </div>

      <div className="mt-6">
        <a
          href={href}
          className="inline-block text-[15px] font-semibold text-[#0f265c] underline underline-offset-4 hover:text-orange-500"
        >
          Learn More
        </a>
      </div>
    </article>
  );
}

function MoreServices() {
  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[28px] sm:text-[34px] font-extrabold text-[#142a63]">
          More Services
        </h2>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Card used inside the Swiper to guarantee equal heights */
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
      {/* Grow zone keeps all cards equal height */}
      <div className="flex grow items-center justify-center">
        <p className="max-w-[56ch] text-[15px] leading-7 text-slate-800">{quote}</p>
      </div>

      {/* Fixed footer */}
      <div className="mt-4">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-sm text-slate-600">{org}</div>
      </div>
    </article>
  );
}

/* --------------------------------------------------------- */
/* Page                                                       */
/* --------------------------------------------------------- */
export default function FssaiNeeds() {
  return (
    <main className="bg-[#f6f8fc]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Make the two columns stretch to the same row height */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT image (kept as-is) */}
          <div className="h-full rounded-2xl p-4 lg:p-5">
            <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/apply/fssai.webp"
                alt="FSSAI Registration illustration"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>

          {/* RIGHT content */}
          <div className="flex h-full flex-col justify-center">
            <h1 className="text-[20px] sm:text-[24px] lg:text-[26px] font-extrabold tracking-tight text-slate-900">
              Who Needs a FSSAI FoSCos License?
            </h1>

            {/* Bullets split in two columns on md+; single column on mobile */}
            <div className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
              {WHO_NEEDS.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-3">
                  {col.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-slate-800">
                      <Bullet />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width logos strip */}
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

      {/* ===================== Client Testimonials (Swiper) ===================== */}
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
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 }, // show two cards from md+
              }}
              allowTouchMove
              // lock a uniform height so all slides match (tweak if you want)
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

      {/* ===================== More Services ===================== */}
      <MoreServices />
    </main>
  );
}

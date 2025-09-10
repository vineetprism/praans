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

/* ------------------ Testimonials content ------------------ */
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

/* ------------------ Shop & Establishment content ------------------ */
const WHO_NEEDS_SHOP = [
    "Shops, commercial establishments, and offices",
    "Hotels, restaurants, and other hospitality establishments",
    "Warehouses, and storage areas",
    "Retailers and E-Commerce Businesses",
    "Any business entity engaging in trade or service",
    "Service Providers (e.g., salons, clinics, fitness centers, consultancy offices)",
];

const EXEMPTIONS = [
    "Government Offices",
    "Defence & Military Establishments",
    "Educational Institutions",
    "Charitable or Religious Organizations",
    "Small-Scale Home-Based Work",
    "Agricultural Operations",
    "Seasonal Industries",
    "Family-Run Businesses Without Employees",
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

export default function ShopEstabilishmentNeeds() {
    return (
        <main className="bg-[#f6f8fc]">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {/* Two columns; image stack on the left, content on the right */}
                <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* LEFT: stacked images */}
                    <div className="relative">
                        {/* Back image */}
                        <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
                            {/* Replace with your preferred background image */}
                            <Image
                                src="/apply/professional-tax.jpg"
                                alt="People discussing registration"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 48vw"
                            />
                        </div>
                    </div>

                    {/* RIGHT: text content */}
                    <div className="flex h-full flex-col justify-center">
                        <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold leading-tight tracking-tight text-slate-900">
                            Who Needs a Shop & Establishment Registration?
                        </h1>

                        <div className="mt-2 space-y-1 text-[14px] leading-6 font-semibold text-slate-800">
                            {WHO_NEEDS_SHOP.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Bullet />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-8 text-[20px] sm:text-[22px] lg:text-[24px] font-extrabold tracking-tight text-slate-900">
                            Exemption
                        </h2>
                        <div className="mt-2 space-y-1 text-[14px] leading-6 font-semibold text-slate-800">
                            {EXEMPTIONS.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Bullet />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Full-width logos (kept) */}
                <div className="relative left-1/2 right-1/2 mt-16 w-screen -ml-[50vw] -mr-[50vw] shadow-md">
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
                            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
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

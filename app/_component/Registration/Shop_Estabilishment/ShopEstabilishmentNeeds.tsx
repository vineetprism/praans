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
            "I recently availed of shop and establishment registration services from a Praans Consultech , and I am extremely satisfied with the experience",
        name: "Neelam Bajpai",
        org: "Rishi Foods, Almora",
    },
    {
        quote:
            "The Shop and Establishment registration process was smooth and well-organized. The team provided clear instructions, handled all the paperwork, and completed the process on time.",
        name: "Dhiraj Kumar",
        org: "Moontown Salon, Guwahati",
    },
    {
        quote:
            "They ensured all legal formalities were taken care of with minimal effort on my part. A perfect choice for startups and small businesses!",
        name: "",
        org: "Mom’s Café , Gurugram",
    },
    {
        quote:
            "The team provided exceptional support during my Shop and Establishment registration in Delhi. They were patient, answered all my questions, and made sure my business met all regulatory requirements.",
        name: "Anil Kumar",
        org: "Sunny Boot House",
    },
    {
        quote:
            "Excellent support for our EPF and ESI registration! The entire process was seamless, completely paperless, and remarkably fast.",
        name: "Krishan Sharma",
        org: "Sunrise Enterprise",
    },
    {
        quote:
            "As a growing business, we faced regulatory challenges, but the team made it seamless, handling everything from registrations to licenses. ..",
        name: "Azman Hashmi",
        org: "Leather house",
    },
];


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
                <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="relative">
                        <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200">
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

                    <div className="flex h-full flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-[#1c284f]">
                            Who Needs a Shop & Establishment Registration?
                        </h1>

                        <div className="mt-2 space-y-0 text-[14px] leading-6 font-semibold text-slate-800">
                            {WHO_NEEDS_SHOP?.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Bullet />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-[#1c284f]">
                            Exemption
                        </h2>
                        <div className="mt-2 space-y-0 text-[14px] leading-6 font-semibold text-slate-800">
                            {EXEMPTIONS?.map((item) => (
                                <div key={item} className="flex gap-3">
                                    <Bullet />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative left-1/2 mt-10 w-screen -ml-[50vw] -mr-[50vw] px-[clamp(12px,4vw,28px)]">
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
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#142a63]">
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
                            className="!h-[280px] sm:!h-[280px] lg:!h-[220px]"
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

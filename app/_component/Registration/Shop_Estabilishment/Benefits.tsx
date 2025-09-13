"use client";

import React from "react";

type Benefit = {
    title: string;
    desc: string;
};

const BENEFITS: Benefit[] = [
    {
        title: "Legal Compliance",
        desc:
            "Ensure that your business complies with the local labor laws and regulations.",
    },
    {
        title: "Brand Recognition",
        desc:
            "Gain credibility and trust with your customers and suppliers.",
    },
    {
        title: "Eligibility for Licence",
        desc:
            "Many businesses need professional tax registration to obtain necessary licenses and permits for operations.",
    },
    {
        title: "Employee Protection",
        desc:
            "Safeguard workforce by ensuring legal entitlements: holidays, wages, & working hrs.",
    },
    {
        title: "Smooth Operations",
        desc:
            "Avoid penalties and fines by keeping your business legally registered.",
    },
];

function BenefitCard({ title, desc }: Benefit) {
    return (
        <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition">
            <div className="pointer-events-none absolute inset-0 translate-y-[-100%] bg-gradient-to-b from-[#142a63] to-[#0f265c] transition-transform duration-500 group-hover:translate-y-0" />

            <div className="relative z-10 flex h-full flex-col">
                <h3 className="text-lg font-semibold tracking-tight text-slate-800 transition-colors group-hover:text-white">
                    {title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600 transition-colors group-hover:text-white/90">
                    {desc}
                </p>
            </div>
        </article>
    );
}

export default function BenefitsShopEstabilishment() {
    return (
        <main className="bg-[#f6f8fc]">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1c284f] tracking-tight">
                    Benefits of Shop and Establishment Registration
                </h1>

                <div className="mx-auto mt-6 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {BENEFITS?.map((b) => (
                        <div key={b.title} className="h-full">
                            <BenefitCard {...b} />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

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
            "Ensures adherence to labour laws, avoiding fines, penalties, and legal disputes.",
    },
    {
        title: "Operational Efficiency",
        desc:
            "Simplifies workforce management with mandatory record & documentation.",
    },
    {
        title: "Risk Mitigation",
        desc:
            "Reduces risks of labour disputes, financial liabilities, and reputational damage.",
    },
    {
        title: "Government Recognition",
        desc:
            "Acts as proof of compliance, facilitating smoother interactions with authorities.",
    },
    {
        title: "Business Growth",
        desc:
            "Enhances reputation and eligibility for larger contracts or government projects.",
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
                <p className="mt-3 text-[15px] leading-7 text-slate-800 transition-colors group-hover:text-white/90">
                    {desc}
                </p>
            </div>
        </article>
    );
}

export default function BenefitsCLRA() {
    return (
        <main className="bg-[#f6f8fc]">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-[#1c284f]">
                    Benefits of CLRA Registration/Licence
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

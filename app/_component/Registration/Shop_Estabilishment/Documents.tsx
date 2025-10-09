"use client";
import React from "react";

const NavyBullet = () => (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden className="mt-1.5 shrink-0" aria-label="Bullet Point">
        <circle cx="12" cy="12" r="9" fill="none" stroke="#ea8434" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="none" stroke="#ea8434" strokeWidth="2" />
    </svg>
);

const LEFT_DOCS: string[] = [
    "Proof of Identity of the owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
    "Passport-sized photograph of the owner",
    "Certificate of Incorporation/Partnership Deed",
    "Proof of Establishment (rent agreement, utility bill, etc.)",
];

const RIGHT_DOCS: string[] = [
    "E-mail ID and Mobile number",
    "List of employees with name, Father’s Name, Designation, Date of Joining & Salary",
    "One establishment internal and external photo",
    "Local language sign board photo"
];

export default function ShopEstabilishmentDocs() {
    return (
        <main className="bg-[#f6f8fc] text-slate-900">
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
                <h2 className="text-center font-bold tracking-tight text-[#1c284f] text-2xl sm:text-3xl leading-snug">
                    General Documents Required For Shop &
                    <br className="hidden sm:block" />
                    <span className="block sm:inline"> Estabilishment Registration In India</span>
                </h2>

                <div className="mx-auto mt-8 grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 2xl:gap-40">
                    <ul className="space-y-2 text-[15px] leading-7 text-slate-700">
                        {LEFT_DOCS?.map((item, idx) => (
                            <li key={`l-${idx}`} className="flex items-start gap-3">
                                <NavyBullet />
                                <span className="xl:whitespace-nowrap">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <ul className="space-y-2 text-[15px] leading-7 text-slate-700">
                        {RIGHT_DOCS?.map((item, idx) => (
                            <li key={`r-${idx}`} className="flex items-start gap-3">
                                <NavyBullet />
                                <span className="xl:whitespace-nowrap">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

"use client";
import React from "react";

interface TargetBulletProps extends React.SVGProps<SVGSVGElement> { }

const TargetBullet = ({ className = '', ...props }: TargetBulletProps) => (
    <svg
        viewBox="0 0 24 24"
        width={18}
        height={18}
        aria-hidden
        className={`mt-[2px] shrink-0 text-[#142a63] ${className}`}
        aria-label="Target bullet"
        role="img"
        {...props}
    >
        <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
);

const BASIC_DOCS: string[] = [
    "Identity proof of the Owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
    "Passport-sized photograph of the owner",
    "Proof of Establishment (rent agreement, utility bill, etc.)",
    "E-mail ID and Mobile number.",
];

const STATE_DOCS: string[] = [
    "Identity proof of the Owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
    "Proof of Establishment (rent agreement, utility bill, etc.)",
    "Layout plan of the processing unit (in case of manufacturing)",
    "Certificate of Incorporation or Partnership deed",
    "A list of directors, partners, or proprietors along with their address and contact information. FSMS Plan",
    "Recall Plan (In case of manufacturing or Restaurant)",
    "NOC from the local municipality or Panchayat",
    "Water Testing Report (In case of manufacturing or Restaurant)",
    "E-mail ID and Mobile number.",
];

const CENTRAL_DOCS: string[] = [
    "Identity proof of the Owner such as Aadhar card, Voter ID, PAN card, passport, etc.",
    "Proof of Establishment (rent agreement, utility bill, etc.)",
    "Layout plan of the processing unit (in case of manufacturing)",
    "Certificate of Incorporation or Partnership deed",
    "A list of directors, partners, or proprietors along with their address and contact information.",
    "Recall Plan (In case of manufacturing or Restaurant)",
    "NOC from the local municipality or Panchayat",
    "Water Testing Report (In case of manufacturing or Restaurant)",
    "E-mail ID and Mobile number.",
];

function DocCard({ title, items }: { title: string; items: string[] }) {
    return (
        <article className="h-full rounded-2xl border border-orange-300 bg-gray-50 p-5 sm:p-6 shadow-sm ring-1 ring-orange-200/70">
            <h3 className="text-center text-[22px] font-semibold tracking-tight text-[#142a63]">
                {title}
            </h3>

            <ul className="mt-4 space-y-2.5">
                {items?.map((txt, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-3 text-[14px] leading-[1.45] tracking-tight text-slate-800"
                    >
                        <TargetBullet className="text-orange-400" />
                        <span className="text-justify">{txt}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function FssaiDocumentsPage() {
    return (
        <main className="w-full bg-white">
            <section className="w-full py-8 sm:py-10">
                <div className="mx-auto max-w-[120rem] px-4 sm:px-6 lg:px-8">
                    <h1 className="text-center text-2xl sm:text-3xl font-bold tracking-tight text-[#142a63]">
                        Documents Required For FSSAI Registration
                    </h1>

                    <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        <DocCard title="Basic Registration" items={BASIC_DOCS} />
                        <DocCard title="State Licence" items={STATE_DOCS} />
                        <DocCard title="Central Licence" items={CENTRAL_DOCS} />
                    </div>
                </div>
            </section>
        </main>
    );
}

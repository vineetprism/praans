"use client";

import Image from "next/image";
import React from "react";

type RateRow = { type: string; service: string; fee: string };
type LicenceRow = {
    type: string;
    eligibility: string;
    validity: string;
    service: string;
    fee: string;
};

const TOP_RATES: RateRow[] = [
    { type: "Basic", service: "Rs.799/-", fee: "Rs.100/-" },
    { type: "State", service: "Rs.1999/-", fee: "Rs.2000/-" },
    { type: "Central", service: "Rs.1999/-", fee: "Rs.7500/-" },
];

const LICENCE_TABLE: LicenceRow[] = [
    {
        type: "Basic Registration",
        eligibility: "Annual revenue below Rs.12 Lakhs.",
        validity: "1 to 5 years",
        service: "Rs.999/-",
        fee: "Rs.100/-",
    },
    {
        type: "State Licence",
        eligibility: "Annual revenue in between Rs.12 Lakhs to Rs.20 Crores.",
        validity: "1 to 5 years",
        service: "Rs.1999/-",
        fee: "Rs.2000/-",
    },
    {
        type: "Central Licence",
        eligibility: "Annual revenue exceeding Rs.20 Crores.",
        validity: "1 to 5 years",
        service: "Rs.1999/-",
        fee: "Rs.7500/-",
    },
];

export default function FassaiRegistration() {
    return (
        <main className="bg-gray-50 text-slate-900">
            {/* ============= SECTION 1: Best Registration Rates ============= */}
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
                <h2 className="text-center text-xl sm:text-2xl font-extrabold tracking-tight">
                    Best Registration Rates PAN India
                </h2>

                {/* Center table reliably */}
                <div className="mt-6 overflow-x-auto flex justify-center">
                    <div className="w-fit rounded-lg ring-1 ring-slate-200">
                        <table className="table-auto w-auto min-w-[680px] border-collapse text-center">
                            <thead className="bg-orange-50">
                                <tr className="text-slate-700">
                                    <th className="pl-4 pr-2 py-2.5 text-sm font-semibold border border-slate-300">
                                        Licence Type
                                    </th>
                                    <th className="pl-4 pr-2 py-2.5 text-sm font-semibold border border-slate-300">
                                        Service Charge
                                    </th>
                                    <th className="pl-4 pr-2 py-2.5 text-sm font-semibold border border-slate-300">
                                        Govt. Fee per Year
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {TOP_RATES.map((row, idx) => (
                                    <tr key={row.type} className={idx % 2 ? 'bg-white' : 'bg-slate-50/40'}>
                                        <td className="pl-4 pr-2 py-3 text-[15px] border border-slate-200">
                                            {row.type}
                                        </td>
                                        <td className="pl-4 pr-2 py-3 text-[15px] border border-slate-200">
                                            {row.service}
                                        </td>
                                        <td className="pl-4 pr-2 py-3 text-[15px] border border-slate-200">
                                            {row.fee}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>



            {/* ============= SECTION 2: Type Of FSSAI Licence And Charges ============= */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
                    {/* Equal-height columns via grid */}
                    <div className="grid gap-10 lg:grid-cols-2 items-stretch">

                        {/* LEFT: Text (taller content defines the row height) */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                                Type Of FSSAI Licence And Charges
                            </h3>

                            <p className="mt-4 text-[15px] leading-7 text-slate-800 text-justify">
                                FSSAI (Food Safety and Standards Authority of India) registration is a compulsory
                                requirement for all individuals or businesses engaged in food activities, such as
                                manufacturing, processing, packaging, storage, distribution, or selling food products.
                            </p>

                            <p className="mt-2 text-[15px] leading-7 text-slate-800 text-justify">
                                It ensures the safety and hygiene standards of food products, protects consumers, and
                                helps businesses operate legally with proper licensing under the Food Safety and
                                Standards Act.
                            </p>

                            <p className="mt-4 text-[15px] font-semibold text-orange-500">
                                Rs.500000/- (Five Lakh) fine and{" "}
                                <span className="text-orange-500">6 months</span> jail for running food business
                                without valid FSSAI Licence.
                            </p>
                        </div>

                        {/* RIGHT: Image (stretches to the same height as the left) */}
                        <div className="h-full">
                            <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm">
                                <Image
                                    src="/register/fssai.webp"               // ensure the file exists in /public/register/fssai.webp
                                    alt="FSSAI Approved"
                                    fill                                       // works because parent is relative + has height
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            {/* ============= SECTION 3: Detailed Licence Table ============= */}
            <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
                <div className="overflow-x-auto rounded-lg ring-1 ring-slate-200">
                    <table className="min-w-[860px] w-full border-collapse text-left">
                        <thead className="bg-orange-50">
                            <tr className="text-slate-700">
                                <th className="px-5 py-3 text-sm font-semibold border border-slate-200">
                                    Licence Type
                                </th>
                                <th className="px-5 py-3 text-sm font-semibold border border-slate-200">
                                    Eligibility
                                </th>
                                <th className="px-5 py-3 text-sm font-semibold border border-slate-200">
                                    Validity
                                </th>
                                <th className="px-5 py-3 text-sm font-semibold border border-slate-200">
                                    Service Charge
                                </th>
                                <th className="px-5 py-3 text-sm font-semibold border border-slate-200">
                                    Govt. Fee per Year
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {LICENCE_TABLE.map((row, idx) => (
                                <tr key={row.type} className={idx % 2 ? "bg-white" : "bg-slate-50/40"}>
                                    <td className="px-5 py-3 text-[15px] border border-slate-200">{row.type}</td>
                                    <td className="px-5 py-3 text-[15px] border border-slate-200">{row.eligibility}</td>
                                    <td className="px-5 py-3 text-[15px] border border-slate-200">{row.validity}</td>
                                    <td className="px-5 py-3 text-[15px] border border-slate-200">{row.service}</td>
                                    <td className="px-5 py-3 text-[15px] border border-slate-200">{row.fee}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

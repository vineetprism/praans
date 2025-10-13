"use client";
import Image from "next/image";
import React from "react";

export default function ClraRegistration() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid lg:grid-cols-12 items-stretch gap-8">
                    <div className="lg:col-span-7 self-stretch">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#1c284f] tracking-tight">
                            CLRA Registration & Licence in India
                        </h1>

                        <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-800 text-justify">
                            <p>
                                <span className="font-bold">
                                    The Contract Labour (Regulation and Abolition) Act, 1970 (CLRA
                                    Act)
                                </span>{" "}
                                is a central law designed to regulate the employment of contract
                                labour in India, ensuring their rights and welfare. Under this
                                Act, certain establishments are required to obtain a CLRA
                                Registration and Licence to legally employ contract labour. It
                                applies to both principal employers and contractors who employ a
                                certain threshold of workers. There are two types licences under
                                the act-
                            </p>

                            <p>
                                <span className="font-bold">CLRA Registration —</span> This
                                registration is mandatory for every Principal employer under the
                                act who deploys contract labour through a contractor on any day
                                during the preceding 12 months. The maximum number of contract
                                employees deployed on any day determines the applicability of
                                the CLRA registration, which varies from state to state.
                            </p>

                            <p>
                                <span className="font-bold">CLRA Licence —</span> This
                                registration is mandatory for every Contractor under the act who
                                supplies contract labour on any day during the preceding 12
                                months. The maximum number of contract employees supplied on any
                                day determines the applicability of the CLRA registration, which
                                varies from state to state.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5 self-stretch min-h-[1px]">
                        <div className="relative h-full min-h-[340px] w-full overflow-hidden rounded-xl">
                            <Image
                                src="/register/clra.webp"
                                alt="CLRA registration on laptop"
                                fill
                                priority
                                className="object-contain"
                                sizes="(max-width: 1024px) 100vw, 600px"
                            />
                        </div>
                    </div>
                </div>
                <p className="mt-5 text-[15px] leading-7 font-bold text-slate-800">At Praans Consultech , we provide expert consultancy services to help you navigate the complexities of the CLRA Registration/Licence process with ease and accuracy.</p>
            </section>
        </main>
    );
}

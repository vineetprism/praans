"use client";

import Image from "next/image";
import React from "react";

export default function ShopEstabilishment() {
    return (
        <main className="bg-white text-slate-900">
            <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
                    <div className="lg:col-span-7">
                        <h1 className="text-2xl sm:text-3xl font-bold text-[#1c284f] tracking-tight">
                            Shop and Establishment Registration in India
                        </h1>

                        <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-800 text-justify">
                            <p>
                                Shop and Establishment Registration is a legal requirement for all businesses, shops, and commercial establishments operating in India. It is governed by the Shop and Establishment Act, which varies slightly from state to state but essentially aims to regulate working conditions, employment standards, and the overall operation of businesses to protect both employers and employees.
                                In certain states, Shop and Establishment registration is commonly known as Gumasta registration.
                            </p>

                            <p>
                                This registration ensures compliance with local laws and establishes a business as a legitimate entity, enabling it to carry out operations smoothly. It’s one of the first steps when starting any business, especially for those with physical premises.
                                Every state has its own act and rules. Shop and Establishment act is applicable in each and every state in India.
                            </p>

                            <p>
                                At Praans Consultech , we provide expert consultancy services to help you navigate the complexities of the Shop and Establishment Registration process with ease and accuracy.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="h-full">
                            <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm">
                                <Image
                                    src="/register/shop.webp"
                                    alt="Filling professional tax form"
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


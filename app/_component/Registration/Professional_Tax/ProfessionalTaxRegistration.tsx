"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfessionalTaxRegistration() {
  return (
    <main className="bg-[#f6f8fc] text-slate-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1e2751] tracking-tight">
              Professional Tax Registration in India
            </h1>

            <div className="mt-5 space-y-4 text-[15px] leading-7 text-slate-700 text-justify">
              <p>
                Professional Tax (PT) registration is a mandatory process for individuals and
                businesses that are required to pay professional tax under state laws. The
                registration process ensures legal compliance and allows for the deduction and
                payment of professional tax, which is collected by state governments.
                Professional Tax is a state specific tax imposed on persons engaged in any profession,
                trade, or employment. It is imposed on professionals, traders, and employees across
                various sectors, including salaried employees, freelancers, and business owners.
                Professional taxes are currently only levied in 21 states.
              </p>

              <p>
                The contribution rates, eligibility criteria and due dates of Professional tax differ
                from state to state, as the process is governed by specific laws in each state. Each
                state has its own unique set of rules and regulations based on their requirements.
              </p>

              <p>
                At Praans Consultech, we provide expert consultancy services to help you navigate
                the complexities of the Professional Tax registration process with ease and
                accuracy.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full">
              <div className="relative h-full min-h-[320px] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 shadow-sm">
                <Image
                  src="/register/pt.webp"     // <- your image path
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

      <section className="bg-white/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#1e2751] tracking-tight">
            Professional Tax Rates and Payment
          </h2>

          <p className="mx-auto mt-5 max-w-4xl text-center text-[15px] leading-7 text-slate-700">
            The rates for professional tax vary from state to state, with each state having its own
            tax slabs and exemptions. The tax is usually deducted monthly by employers and paid to
            the state government. Self-employed professionals must make quarterly or annual payments
            based on their income levels.
          </p>

          <div className="mt-7 flex justify-center">
            <Link
              href="#"
              className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white 
              shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              aria-label="Professional Tax Rates- PAN India"
            >
              Professional Tax Rates- PAN India
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


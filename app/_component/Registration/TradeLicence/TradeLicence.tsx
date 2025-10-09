"use client";

import Image from "next/image";

export default function TradeLicence() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1c284f]">
              Trade Licence Registration in India
            </h1>

            <p className="text-[15px] leading-7 text-slate-700 text-justify">
              A Trade License is a legal permit issued by the local municipal authority that allows
              businesses to operate in a specific area. It is a regulatory mechanism designed to
              ensure that businesses comply with local laws and adhere to safety standards, thereby
              protecting public health and welfare. Trade licenses are essential for businesses to
              function legally and ethically. In certain states, a trade license is required to
              obtain from the village panchayat as well.
            </p>

            <p className="text-[15px] leading-7 text-slate-700 text-justify">
              The fees and necessary documents for obtaining a trade license differ from state to
              state, as the process is governed by specific laws in each state. Each state has its
              own unique set of rules and regulations based on their requirements.
            </p>

            <p className="text-[15px] leading-7 text-slate-700 text-justify">
              At Praans Consultech, we offer professional consultancy services to simplify and
              streamline the trade license registration process for our clients. With our expertise
              and knowledge of local regulations, we will provide you with comprehensive advice and
              support tailored to your specific business needs.
            </p>
          </div>

          <div className="h-full flex items-center justify-center">
            <div className="relative w-full max-w-[520px] rounded-2xl p-2">
              <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[360px]">
                <Image
                  src="/register/trade.webp"
                  alt="Trade Licence illustration"
                  fill
                  className="object-contain"
                  sizes="(max-width:1024px) 100vw, 48vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

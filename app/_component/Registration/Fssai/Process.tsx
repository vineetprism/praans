"use client";
import React from "react";
import Image from "next/image";

type Step = { title: string; img: string; alt?: string };

const STEPS: Step[] = [
  { title: "Call to our Experts", img: "/process/expert.webp", alt: "Call our experts" },
  { title: "Provide all required documents", img: "/process/doc.webp", alt: "Provide documents" },
  { title: "Pay Govt. Fee", img: "/process/govt.webp", alt: "Government fee" },
  { title: "Pay our service charge", img: "/process/pay.webp", alt: "Service charge" },
  { title: "FSSAI License", img: "/process/fssai.webp", alt: "FSSAI license" },
];


const StepCard = ({ step }: { step: Step }) => {
  const { title, img, alt } = step;
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid place-items-center w-[64px] h-[64px]">
        <Image
          src={img}
          alt={alt ?? title}
          width={64}
          height={64}
          className="w-12 h-12 md:w-12 md:h-12 object-contain"
          priority
        />
      </div>
      <p className="text-[15px] font-semibold text-[#142a63] max-w-[200px]">
        {title}
      </p>
    </div>
  );
};

const ArrowImg = ({ className = "", size = 28 }: { className?: string; size?: number }) => (
  <div
    className={`relative ${className}`}
    style={{ width: size, height: size, minWidth: size, minHeight: size }}
  >
    <Image
      src="/process/right-arrow.webp"
      alt="arrow"
      fill
      className="object-contain"
      sizes={`${size}px`}
      priority
    />
  </div>
);


export default function FssaiProcessPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#16284b] text-white py-4 sm:py-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            MSME Registration Process
          </h1>
          <p className="mt-4 text-[15px] leading-7 text-white/90">
            At Praans Consultech, we make the MSME Registration process simple, fast, and hassle-free.
          </p>
          <p className="text-[15px] leading-7 text-white/90">
            Whether you’re a budding entrepreneur or an established business owner, we’re here to help you
            unlock the benefits of MSME registration.
          </p>
        </div>
      </section>

      <section className="bg-white py-4 sm:py-6">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 md:gap-x-10 md:gap-y-8
                          md:flex-row md:flex-wrap md:justify-center
                          xl:flex-nowrap xl:justify-between">
            {STEPS?.map((s, idx) => (
              <React.Fragment key={s.title}>
                <StepCard step={s} />
                {idx < STEPS?.length - 1 && (
                  <>
                    <ArrowImg className="hidden xl:block" size={28} />
                    <ArrowImg className="xl:hidden rotate-90" size={24} />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
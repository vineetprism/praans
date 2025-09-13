"use client";
import Image from "next/image";

type Feature = { title: string; img: string };

const FEATURES: Feature[] = [
  { title: "Quick and Easy Process", img: "/register/process.webp" },
  { title: "Free Expert Assistance", img: "/register/support.webp" },
  { title: "Affordable Prices", img: "/register/price.webp" },
  { title: "100% Compliance Guarantee", img: "/register/guarantee.webp" },
  { title: "100% Online Process", img: "/register/charge.webp" },
  { title: "Money Back Guarantee", img: "/register/money.webp" },
  { title: "ISO Certified", img: "/register/iso.webp" },
  { title: "15 years of experience", img: "/register/experince.webp" },
];

export default function WhyChooseTradeLicence() {
  return (
    <section className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[26px] sm:text-[30px] font-extrabold text-[#142a63]">
          Why Choose Us For Trade Licence Registration?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES?.map(({ title, img }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#f7f8ff] ring-1 ring-slate-200 shadow-[0_8px_28px_rgba(2,6,23,0.06)] p-4 flex flex-col items-center justify-center text-center"
            >
              <Image
                unoptimized
                src={img}
                alt={title}
                width={96}
                height={96}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <p className="mt-4 font-semibold text-slate-900">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

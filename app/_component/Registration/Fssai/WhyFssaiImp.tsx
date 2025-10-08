"use client";
import React from "react";

function PlainSection({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: "white" | "gray";
}) {
  return (
    <section
      className={
        bg === "gray" ? "bg-white py-8 sm:py-10" : "bg-gray-50 py-8 sm:py-10"
      }
    >
      <div className="relative">{children}</div>
    </section>
  );
}

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-[0_10px_30px_rgba(20,42,99,0.06)]">
        <div
          className="
              absolute inset-0 rounded-2xl bg-orange-500
              -translate-y-full group-hover:translate-y-0
              transition-transform duration-500 ease-out
              z-0
            "
        >
          <div className="absolute -left-3 -top-3 h-12 w-12 rounded-full bg-white/10" />
        </div>

        <div className="relative z-10 h-full p-4 transition-colors">
          <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-[15px] leading-7 text-slate-600 transition-colors duration-300 group-hover:text-white/90">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

const benefits = [
  {
    title: "Legal Compliance",
    desc: "Obtaining FSSAI registration is mandatory for every food business operating in India.",
  },
  {
    title: "Consumer Confidence",
    desc: "An FSSAI license guarantees that your food products comply with health and safety regulations.",
  },
  {
    title: "Avoid Legal Penalties",
    desc: "Not obtaining FSSAI registration may result in legal complications, including substantial fines.",
  },
  {
    title: "Market Access",
    desc: "FSSAI certification is often a prerequisite for entering both local and international markets.",
  },
  {
    title: "Improved Brand Reputation",
    desc: "It demonstrates to your customers that you’re dedicated to offering safe and high-quality food.",
  },
  {
    title: "Business Growth",
    desc: "As your business grows or expands online / across states, the FSSAI license is essential to meet regulatory requirements.",
  },
  {
    title: "Food Safety & Quality Assurance",
    desc: "FSSAI ensures strict hygiene and safety protocols, helping prevent contamination and foodborne illnesses.",
  },
  {
    title: "Professional Image",
    desc: "Registration enhances your professional image, making it easier to partner with retailers and suppliers.",
  },
];

export default function WhyFssaiImp() {
  return (
    <main className="bg-white">
      <PlainSection bg="gray">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#1c284f]">
          Why is FSSAI Registration Important?
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl auto-rows-fr gap-6 px-5 sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4 text-justify">
          {benefits?.map((b) => (
            <BenefitCard key={b?.title} title={b?.title} desc={b?.desc} />
          ))}
        </div>
      </PlainSection>
    </main>
  );
}

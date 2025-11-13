"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function Founder() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!textRef.current || !imgRef.current) return;

    const sync = () => {
      imgRef.current!.style.height = "auto";
      const h = textRef.current!.offsetHeight;
      imgRef.current!.style.height = `${h}px`;
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(textRef.current);

    window.addEventListener("resize", sync);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <section className="relative py-12 bg-white w-full">
      <div className="w-full px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-y-8 items-stretch w-full">
          <div
            ref={textRef}
            className="space-y-1 min-h-[420px] lg:min-h-[520px] transform-gpu lg:translate-x-2 xl:translate-x-24 w-full"
          >
            <h1 className="text-[30px] font-bold mb-2 text-slate-800 leading-tight">
              Meet Our Founder
            </h1>

            <h2 className="text-[20px] font-semibold text-orange-500 mb-2 leading-relaxed">
              Our reliable Labour Law Consultant with more than 15 years of
              experience
            </h2>

            <p className="text-[15px] text-gray-600 leading-relaxed text-justify">
              At Praans Consultech, our founder — a labour law adviser with over
              15 years of experience in managing and streamlining labour law
              compliance for businesses PAN India — is driving our mission. Our
              founder is a trusted partner to numerous businesses looking for
              clarity and control over their statutory responsibilities, in
              addition to being a legal expert.
            </p>

            <p className="text-[15px] text-gray-600 leading-relaxed text-justify">
              They’ve managed compliance across multiple states and industries
              for <span className="text-orange-500">2,500+</span> locations and{" "}
              <span className="text-orange-500">50,000+</span> people PAN India.
              Praans Consultech stands for dependability, excellence and
              innovation in labour law compliance, built on leadership that ran
              legal &amp; compliance for large logistics and courier firms.
            </p>
          </div>

          {/* RIGHT: Image (height mirrors text) */}
          <div className="flex items-stretch transform-gpu lg:-ml-6 lg:-translate-x-2 w-full">
            <div
              ref={imgRef}
              className="relative w-full rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[520px]"
            >
              {/* full image (no crop) */}
              <Image
                src="/services/adm.webp"
                alt="Sandeep Kumar — Founder, Praans Consultech"
                fill
                priority
                className="object-contain shadow-sm rounded-3xl"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        {/* EDUCATION: full width */}
        <div className="w-full mt-6 md:mt-8 px-0 md:px-0">
          <div
            role="region"
            aria-labelledby="education-heading"
            className="w-full bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-10"
          >
            <h3
              id="education-heading"
              className="text-2xl md:text-3xl font-bold text-slate-800"
            >
              Education{" "}
              <span className="text-orange-500">&amp; Credentials</span>
            </h3>
            <p className="mt-2 text-gray-700">
              Our founder is one of the leading labour law advisors in India — a
              unique blend of real-world experience, legal knowledge, and
              academic distinction.
            </p>
            <p className="text-gray-700">
              Grounded in rigorous academics and ongoing research, building the
              toolkit that powers execution:
            </p>

            <ul className="mt-2 space-y-2 list-disc pl-6 text-gray-800 text-[15px]">
              <li>
                <strong>B.Sc.</strong> — analytical problem-solving to decode
                complex regulatory issues.
              </li>
              <li>
                <strong>LL.B. &amp; LL.M.</strong> — deep command of Indian
                labour laws, employment regulations, and industrial relations.
              </li>
              <li>
                <strong>
                  PG Diploma in Labour Laws &amp; Industrial Relations
                </strong>{" "}
                — strong foundations in statutory frameworks and IR.
              </li>
              <li>
                <strong>XLRI Alumnus</strong> — advanced leadership and HR
                management insight from a top B-school.
              </li>
              <li>
                <strong>Ph.D. (Pursuing)</strong> — active research in labour
                law and compliance systems to stay ahead of change.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

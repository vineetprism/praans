'use client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

export default function Founder() {
  const textRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!textRef.current || !imgRef.current) return

    const sync = () => {
      imgRef.current!.style.height = 'auto'
      const h = textRef.current!.offsetHeight
      imgRef.current!.style.height = `${h}px`
    }

    sync()
    const ro = new ResizeObserver(sync)
    ro.observe(textRef.current)

    window.addEventListener('resize', sync)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', sync)
    }
  }, [])

  return (
    <section className="relative py-16 md:py-20 lg:py-10 bg-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Equal-height row, zero grid gap; we micro-shift both columns on lg+ */}
        <div className="grid lg:grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-0 items-stretch max-w-7xl mx-auto">

          {/* LEFT: Text (reference height source) */}
          <div
            ref={textRef}
            className="
              space-y-6 md:space-y-8 min-h-[420px] lg:min-h-[520px]
              transform-gpu lg:translate-x-2 xl:translate-x-24
            "
          >
            <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-3 text-slate-800 leading-tight">
              Meet Our Founder
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-orange-500 mb-4 leading-relaxed">
              Our reliable Labour Law Consultant with more than 15 years of experience
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
              At Praans Consultech, our founder — a labour law adviser with over 15 years of
              experience in managing and streamlining labour law compliance for businesses PAN
              India — is driving our mission. Our founder is a trusted partner to numerous
              businesses looking for clarity and control over their statutory responsibilities,
              in addition to being a legal expert.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify">
              They’ve managed compliance across multiple states and industries for <span className="text-orange-500">2,500+</span> locations
              and <span className="text-orange-500">50,000+</span> people PAN India. Praans Consultech stands for dependability,
              excellence and innovation in labour law compliance, built on leadership that ran legal
              &amp; compliance for large logistics and courier firms.
            </p>
          </div>

          {/* RIGHT: Image (height mirrors text) */}
          <div className="flex items-stretch transform-gpu lg:-ml-6 lg:-translate-x-2">
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
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>

        {/* EDUCATION */}
        <div className="max-w-6xl mx-auto mt-12 md:mt-16">
          <div
            role="region"
            aria-labelledby="education-heading"
            className="w-full bg-gray-100 rounded-2xl p-6 md:p-8 lg:p-10"
          >
            <h3 id="education-heading" className="text-2xl md:text-3xl font-bold text-slate-800">
              Education <span className="text-orange-500">&amp; Credentials</span>
            </h3>

            <p className="mt-2 text-gray-700">
              Grounded in rigorous academics and ongoing research, building the toolkit that powers execution:
            </p>

            <ul className="mt-4 space-y-3 list-disc pl-6 text-gray-800 text-base md:text-lg">
              <li><strong>B.Sc.</strong> — analytical problem-solving to decode complex regulatory issues.</li>
              <li><strong>LL.B. &amp; LL.M.</strong> — deep command of Indian labour laws, employment regulations, and industrial relations.</li>
              <li><strong>PG Diploma in Labour Laws &amp; Industrial Relations</strong> — strong foundations in statutory frameworks and IR.</li>
              <li><strong>XLRI Alumnus</strong> — advanced leadership and HR management insight from a top B-school.</li>
              <li><strong>Ph.D. (Pursuing)</strong> — active research in labour law and compliance systems to stay ahead of change.</li>
            </ul>

            <p className="mt-4 text-center text-gray-800 font-semibold text-base md:text-lg">
              Our founder is one of the leading labour law advisors in India — a unique blend of real-world experience,
              legal knowledge, and academic distinction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

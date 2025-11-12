import { ShieldCheck, Rocket, Factory, Landmark } from 'lucide-react'
import React from 'react'

export default function Certification() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Certifications <span className="text-orange-500">&amp; Recognitions</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
            <p className="mt-2 text-[15px] text-[#1C284F] max-w-2xl mx-auto">
              Recognitions that validate our compliance-first operating model.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              {/* ISO Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm border border-orange-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-4 text-center">
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl">
                    <ShieldCheck className="h-6 w-6 text-orange-500" aria-hidden />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C284F]">ISO Certification</h3>
                  <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                    Ensures our services maintain the highest quality standards and reliability.
                  </p>
                </div>
              </div>

              {/* Startup India Recognition */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm border border-orange-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-4 text-center">
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl">
                    <Rocket className="h-6 w-6 text-orange-500" aria-hidden />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C284F]">Startup India Recognition</h3>
                  <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                    Certified under the flagship initiative of the Government of India.
                  </p>
                </div>
              </div>

              {/* MSME Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm border border-orange-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-4 text-center">
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl">
                    <Factory className="h-6 w-6 text-orange-500" aria-hidden />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C284F]">MSME Certification</h3>
                  <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                    Recognition as a rapidly growing micro, small, and medium enterprise.
                  </p>
                </div>
              </div>

              {/* MCA Registration */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm border border-orange-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-4 text-center">
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-2xl">
                    <Landmark className="h-6 w-6 text-orange-500" aria-hidden />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1C284F]">MCA Registration</h3>
                  <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                    Accredited under the Ministry of Corporate Affairs as a reliable compliance partner.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

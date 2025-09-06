import { ShieldCheck, Rocket, Factory, Landmark } from 'lucide-react'
import React from 'react'

export default function Certification() {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-10 bg-white">
        <div className="container mx-auto px-4 md:px-6">

          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Certifications <span className="text-orange-500">&amp; Recognitions</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Recognitions that validate our compliance-first operating model.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {/* ISO Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <ShieldCheck className="h-8 w-8 text-orange-600" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">ISO Certification</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                    Ensures our services maintain the highest quality standards and reliability.
                  </p>
                </div>
              </div>

              {/* Startup India Recognition */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Rocket className="h-8 w-8 text-orange-600" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">Startup India Recognition</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                    Certified under the flagship initiative of the Government of India.
                  </p>
                </div>
              </div>

              {/* MSME Certification */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Factory className="h-8 w-8 text-orange-600" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">MSME Certification</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
                    Recognition as a rapidly growing micro, small, and medium enterprise.
                  </p>
                </div>
              </div>

              {/* MCA Registration */}
              <div className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600" />
                <div className="p-6 md:p-7 pt-8 text-center">
                  <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-50 to-orange-200/70">
                    <Landmark className="h-8 w-8 text-orange-600" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-800">MCA Registration</h3>
                  <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed text-justify">
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

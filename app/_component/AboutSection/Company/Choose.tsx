import { Cpu, Globe, Layers, Settings, ShieldCheck, Users } from 'lucide-react'
import React from 'react'

const Choose = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-10 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Why Choose <span className="text-orange-500">Praans Consultech?</span></h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Tech-first. Reliable. Battle-tested expertise. We own the compliance problem so you can focus on growth.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* Value Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Cpu className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">AI-Driven Compliance</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Zero-error workflows with automated filings, real-time alerts, and digital record tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Globe className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">PAN-India Coverage</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seamless compliance ops across states & union territories—one window, nationwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Layers className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">End-to-End Solutions</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From registrations to litigation support—we manage the full labour-law lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Users className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Expert Team</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Labour-law specialists, legal advisors, and HR pros on call to de-risk your operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Proactive Support</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Timely updates, preventive actions, and regulatory insights—penalties avoided, always.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <div className="flex items-start gap-3">
                <Settings className="w-10 h-10 text-orange-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-800">Custom-Fit for You</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scalable solutions tailored for startups, SMEs, and enterprises—no one-size-fits-all.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Assurance Note */}
          <div className="text-center mt-12">
            <p className="text-base md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              By all the above mentioned factors, we can assure you that you now don’t have to worry about compliance lapse; our clients never have to worry about it.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Choose

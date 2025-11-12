import { Cpu, Globe, Layers, Settings, ShieldCheck, Users } from "lucide-react";
import React from "react";

const Choose = () => {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Why Choose{" "}
              <span className="text-orange-500">Praans Consultech?</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
            <p className="mt-2 text-[15px] text-[#1C284F] max-w-8xl mx-auto leading-relaxed">
              Tech-first. Reliable. Battle-tested expertise. We own the
              compliance problem so you can focus on growth.
            </p>
            <p className="text-[15px] text-[#1C284F] max-w-8xl mx-auto leading-relaxed">
              By all the above mentioned factors, we can assure you that you now
              don’t have to worry about compliance lapse; our clients never have
              to worry about it.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div className="bg-white border border-orange-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <Cpu className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">
                    AI-Driven Compliance
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Zero-error workflows with automated filings, real-time
                    alerts, and digital record tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">
                    PAN-India Coverage
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Seamless compliance ops across states & union
                    territories—one window, nationwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <Layers className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">
                    End-to-End Solutions
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    From registrations to litigation support—we manage the full
                    labour-law lifecycle.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">Expert Team</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Labour-law specialists, legal advisors, and HR pros on call
                    to de-risk your operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">
                    Proactive Support
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Timely updates, preventive actions, and regulatory
                    insights—penalties avoided, always.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm transition">
              <div className="flex items-start gap-3">
                <Settings className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="font-semibold text-[#1C284F]">
                    Custom-Fit for You
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Scalable solutions tailored for startups, SMEs, and
                    enterprises—no one-size-fits-all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;

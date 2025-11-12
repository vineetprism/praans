import { BarChart3, Building, Rocket } from "lucide-react";
import React from "react";

export default function Serve() {
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Who We <span className="text-orange-500">Serve</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
            <p className="mt-2 text-[15px] text-[#1C284F] max-w-3xl mx-auto leading-relaxed">
              <strong>Praans Consultech</strong> — the name you can trust on in
              compliance partner, regardless of the size of the business.
            </p>
            <p className="text-[15px] text-[#1C284F] max-w-3xl mx-auto leading-relaxed">
              We provide our services to:
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Startups */}
            <div className="text-center bg-white rounded-xl p-4 shadow-sm transition border border-orange-100">
              <Rocket className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#1C284F]">Startups</h3>
              <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                At reasonably priced compliance to guide and assist young
                businesses to get started its business on right track.
              </p>
            </div>

            {/* SMEs */}
            <div className="text-center bg-white rounded-xl p-4 shadow-sm transition border border-orange-100">
              <BarChart3 className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#1C284F]">SMEs</h3>
              <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                With maximum risk mitigations and simplifying the complexity of
                compliance for the growth of business.
              </p>
            </div>

            {/* Large Enterprises */}
            <div className="text-center bg-white rounded-xl p-4 shadow-sm transition border border-orange-100">
              <Building className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-[#1C284F]">
                Large Enterprises
              </h3>
              <p className="mt-2 text-[15px] text-[#1C284F] leading-relaxed text-justify">
                Scalable solutions for operations with multiple locations
                throughout India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

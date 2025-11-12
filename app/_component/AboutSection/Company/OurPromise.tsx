import { CheckCircle2, Cpu, Layers, ShieldCheck } from "lucide-react";
import React from "react";

export default function OurPromise() {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Our <span className="text-orange-500">Promise</span>
            </h2>
            <p className="mt-4 text-[15px] text-[#1C284F] leading-relaxed">
              Legal compliance should never be a burden—it should enable your
              growth.
            </p>
            <p className="text-[15px] text-[#1C284F] leading-relaxed">
              We are more than just consultants, we, Praans Consultech, are
              partners in your growth journey of your business. We promise you
              to:
            </p>
          </div>

          {/* Promises */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-[15px] text-[#1C284F] leading-relaxed">
                Provide <strong>accurate, reliable, and timely</strong>{" "}
                compliance services.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Cpu className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-[15px] text-[#1C284F] leading-relaxed">
                Offer <strong>technology-driven solutions</strong> that
                streamline your processes.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Layers className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-[15px] text-[#1C284F] leading-relaxed">
                Assure <strong>end-to-end support</strong>—from registrations to
                litigation.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <p className="text-[15px] text-[#1C284F] leading-relaxed">
                Safeguard your business from <strong>fines</strong> and{" "}
                <strong>compliance mismanagement</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

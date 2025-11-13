import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <>
      <section className="py-12 relative overflow-hidden w-full bg-gray-50">
        <div className="w-full px-4 md:px-6 text-center relative z-10">
          <h2 className="text-[30px] font-bold mb-2 text-[#1C284F]">
            Looking for a reliable partner to manage your labour law compliance?
          </h2>
          <p className="text-[15px] mb-2 max-w-none mx-auto opacity-90 text-[#1C284F]">
            Get in touch with Praans Consultech — Led by India's trusted labour
            law expert
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 justify-center max-w-none mx-auto">
            <Button
              className="bg-orange-500 hover:bg-orange-400 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
              aria-label="get expert consultation"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-orange-100 text-orange-500 hover:bg-orange-400 hover:text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 bg-transparent rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
              aria-label="schedule a demo"
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20 2xl:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-200/20 rounded-full blur-2xl sm:blur-3xl" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-blue-200/20 rounded-full blur-2xl sm:blur-3xl" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center relative z-10 max-w-7xl">
        <div className="inline-flex items-center gap-2 sm:gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full text-xs sm:text-sm md:text-base font-semibold mb-4 sm:mb-6 md:mb-8 shadow-lg hover:shadow-orange-500/30 transition-all duration-300">
          <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Get Started Today</span>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight max-w-5xl mx-auto">
          Ensure Compliance.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
            Avoid Penalties.
          </span>{" "}
          <br className="hidden sm:block" />
          Get Started Today!
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto opacity-90 leading-relaxed px-2">
          Join thousands of businesses who trust our platform for their
          compliance needs. Schedule a demo or talk to our experts now.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center max-w-4xl mx-auto">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 shadow-2xl hover:shadow-orange-500/30 rounded-xl sm:rounded-2xl font-bold w-full sm:w-auto cursor-pointer transition-all duration-300 hover:scale-105"
            aria-label="Get a Free Demo Of Software"
          >
            <span className="">Get a Free Demo Of Software</span>
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/80 text-white hover:bg-white hover:text-slate-800 text-sm sm:text-base md:text-lg lg:text-xl px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 bg-transparent rounded-xl sm:rounded-2xl font-bold w-full sm:w-auto cursor-pointer transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            aria-label="Talk to Our Compliance Experts"
          >
            <span className="">Talk to Our Compliance Experts</span>
          </Button>
        </div>


      </div>
    </section>
  )
}

export default CTASection;
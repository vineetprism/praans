"use client";
import { Button } from "@/components/ui/button";
import {
  Gavel,
  ClipboardCheck,
  Landmark,
  Briefcase,
  ClipboardList,
  ArrowRight,
  TrendingUp,
  Monitor,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResourceLibrary from "./resource-library/page";
import NewsCarouselSection from "@/app/carousel-section/page";
import HeroSection from "./hero-section/page";

// Type definitions
interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  href: string;
}

interface NewsUpdate {
  title: string;
  category: string;
  date: string;
  isNew?: boolean;
  href?: string;
  downloadUrl?: string;
}

interface OfferingCardProps {
  offering: Offering;
  index: number;
}

const keyOfferings = [
  {
    icon: Monitor,
    title: "Smart Compliance Software",
    description:
      "Precise and automated management of Labour laws.",
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    href: "/services/smart-compliance-software",
  },
  {
    icon: Briefcase,
    title: "Compliance Outsourcing",
    description:
      " Easing of workload.",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    href: "/services/compliance-outsourcing",
  },
  {
    icon: ClipboardCheck,
    title: "PAN India Registrations",
    description:
      "National wide and smooth filing processes.",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    href: "/services/pan-india-registrations",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection",
    description:
      "Provide Help and supports for the auditing and inspections.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100",
    href: "/services/audit-and-inspection",
  },
  {
    icon: Gavel,
    title: "Legal Advisory & HR Policies",
    description:
      "Provide professional support and help for complex labour regulations.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    href: "/services/legal-advisory-hr-policies",
  },
  
  {
    icon: Landmark,
    title: "Litigation Support",
    description: " Dispute resolutions and Support for legal defence.",
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100",
    href: "/services/litigation-support",
  },
  
  
];

const OfferingCard = React.memo(({ offering, index }: OfferingCardProps) => (
  <Link
    key={index}
    href={offering.href}
    className="group block h-full"
    aria-label={offering.title}
  >
    <div
      className="
        relative bg-white/90 backdrop-blur-sm border border-gray-100
        rounded-lg p-4 sm:p-5 shadow-sm
        hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1
        2xl:rounded-2xl 2xl:p-8 2xl:hover:-translate-y-1.5 2xl:hover:shadow-xl
        h-full flex flex-col
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Icon + Title (unchanged vibe; just bigger on 2xl) */}
      <div className="flex items-center gap-3 2xl:gap-4 mb-3 2xl:mb-5">
        <div
          className={`w-8 h-8 2xl:w-12 2xl:h-12 bg-gradient-to-br ${offering.color}
                      rounded-lg 2xl:rounded-xl flex items-center justify-center shadow-lg
                      group-hover:scale-110 transition-transform duration-300`}
        >
          <offering.icon className="w-4 h-4 2xl:w-6 2xl:h-6 text-white" />
        </div>
        <h3 className="text-base sm:text-lg 2xl:text-2xl font-semibold text-slate-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {offering.title}
        </h3>
      </div>

      {/* Description aligned + slightly larger at 2xl */}
      <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg leading-snug 2xl:leading-normal [text-align:justify] hyphens-auto break-words line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
        {offering.description}
      </p>
    </div>
  </Link>
));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
     <HeroSection />
     <NewsCarouselSection />

      {/* Enhanced Key Offerings Section */}
      <section className="relative m-0 p-0 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 overflow-hidden">
        <div className="w-full">
          {/* ⬇️ Wider on 2xl, slightly tighter side padding */}
          <div className="mx-auto w-full max-w-7xl 2xl:max-w-[110rem] px-3 sm:px-4 lg:px-6 2xl:px-6">
            <section className="py-8 sm:py-10 lg:py-12 2xl:py-16 min-h-[70vh] 2xl:min-h-[80vh]">
              <div className="text-center mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">
                <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 2xl:mb-3 text-slate-900 leading-tight">
                  Single Platform for All Labour Law Compliances
                </h2>
                <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-gray-700 max-w-2xl 2xl:max-w-3xl mx-auto leading-snug 2xl:leading-relaxed px-3">
                  From automated software to expert legal support, we've got you
                  covered.
                </p>
              </div>

              {/* ⬇️ Same 3 columns, but bigger gap at 2xl */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 2xl:gap-10">
                {keyOfferings.map((offering: Offering, idx: number) => (
                  <OfferingCard key={idx} offering={offering} index={idx} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Enhanced Category Grid */}

      <ResourceLibrary />
      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden lg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10 lg:scale-94">
          <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm font-semibold mb-6 md:mb-8 shadow-lg">
            <TrendingUp className="w-4 h-4" />
            <span>Get Started Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Ensure Compliance.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-300">
              Avoid Penalties.
            </span>{" "}
            Get Started Today!
          </h2>

          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed px-4">
            Join thousands of businesses who trust our platform for their
            compliance needs. Schedule a demo or talk to our experts now.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
              aria-label="Get a Free Demo Of Software"
            >
              Get a Free Demo Of Software
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 bg-transparent rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
              aria-label="Talk to Our Compliance Experts"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

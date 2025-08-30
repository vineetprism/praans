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
  Bot,
  Crown,
  Monitor,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResourceLibrary from "./resource-library/page";
import NewsCarouselSection from "@/app/carousel-section/page";

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
      <section
        className="relative min-h-[85vh] flex items-start justify-center 
      pt-6 sm:pt-8 lg:pt-10 2xl:pt-16 
      px-3 sm:px-5 lg:px-6 2xl:px-16 
      bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden
     
      "
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-orange-100/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
        <div
          className="absolute top-8 sm:top-12 left-5 sm:left-10 
        w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 2xl:w-40 2xl:h-40 
        bg-orange-200/30 rounded-full blur-2xl animate-pulse"
        />
        <div
          className="absolute bottom-8 sm:bottom-12 right-5 sm:right-10 
        w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44 
        bg-blue-200/30 rounded-full blur-2xl animate-pulse"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 2xl:w-96 2xl:h-96 
        bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-2xl"
        />

        {/* Content Container - Moderately broader on 2xl */}
        <div
          className="w-full max-w-5xl 2xl:max-w-8xl mx-auto text-center 
        space-y-2 sm:space-y-3 2xl:space-y-6 relative z-10"
        >
          {/* Heading */}
          <h1
            className="text-xl sm:text-3xl md:text-3xl lg:text-[5.5rem] 2xl:text-[7.1rem]
          font-black text-slate-900 tracking-tight leading-tight animate-fade-up"
          >
            Simplifying{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Labour
              </span>
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
              h-0.5 sm:h-1 2xl:h-1.5 
              bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
              />
            </span>
            <br className="block sm:hidden" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Law
              </span>
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
              h-0.5 sm:h-1 2xl:h-1.5 
              bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
              />
            </span>
            <br />
            <div className="text-slate-800 mt-1 2xl:mt-5 2xl:text-[6.9rem]  ">
              Compliance
            </div>
            <p
              className="text-sm sm:text-base md:text-2xl lg:text-4xl 2xl:text-6xl 
            font-medium italic text-blue-600 "
            >
              for Your Business
            </p>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xs sm:text-sm md:text-base  lg:text-xl 2xl:text-4xl 
          text-gray-700 max-w-xl 2xl:max-w-4xl mx-auto 
          animate-fade-up delay-100 leading-snug 2xl:leading-normal px-3 2xl:px-6"
          >
            All-in-One Platform: Software, Legal Advisory, Registrations &amp;
            More – PAN India
          </p>

          {/* AI ChatBot Badge */}
          <div className="pt-2 sm:pt-3 lg:pt-4 2xl:pt-6">
            <div
              className="
    relative inline-flex items-center
    gap-2 sm:gap-2.5 lg:gap-3 2xl:gap-4
    h-8 sm:h-9 md:h-10 lg:h-12 2xl:h-16
    px-3 sm:px-4 lg:px-5 2xl:px-6
    rounded-full ring-1 ring-orange-500/50
    bg-gradient-to-r from-orange-600 to-red-600
    text-white shadow-[0_12px_28px_rgba(234,88,12,0.25)]
  "
            >
              <Bot className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-white/90" />
              <span className="relative z-10 font-black tracking-tight text-[10px] sm:text-xs md:text-xl lg:text-2xl lg:py-30 2xl:text-4xl">
                India&apos;s First Labour Law Compliance AI ChatBot
              </span>
              <Crown className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-yellow-300" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 2xl:gap-4 
          justify-center max-w-md 2xl:max-w-2xl mx-auto pt-2 2xl:pt-8"
          >
            <Button
              size="sm"
              className="bg-gradient-to-r  bg-blue-950 hover:bg-blue-900 
              text-white text-xs sm:text-sm 2xl:text-xl 
              px-4 sm:px-5 2xl:px-8 lg:h-10
              py-3 sm:py-2.5 2xl:py-8 
              shadow-md hover:shadow-orange-500/25 rounded-lg font-bold w-full sm:w-auto
              "
            >
              Get a Free Demo Of Software
              <ArrowRight className="ml-1 w-4 h-4 2xl:w-5 2xl:h-5" />
            </Button>
            <Button
              size="sm"
              className="text-white bg-blue-950 hover:bg-blue-900 
              text-xs sm:text-sm 2xl:text-xl 
              px-4 sm:px-5 2xl:px-8 
              py-2 sm:py-2.5 2xl:py-8 
              rounded-lg font-bold w-full sm:w-auto lg:h-10"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>
      {/* News & Updates Section */}
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
      <section className="py-16 md:py-20 lg:py-24  bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden lg">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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

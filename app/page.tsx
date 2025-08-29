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
  features: string[];
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
      "Automated, error-free labour law management with AI-powered insights and real-time monitoring.",
    features: [
      "AI-Powered",
      "Real-time Alerts",
      "Auto Reports",
      "Dispute Resolution",
      "Auto Reports",
      "Legal Defence",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    href: "/services/smart-compliance-software",
  },
  {
    icon: Gavel,
    title: "Legal Advisory",
    description:
      "Get expert help for complex labour laws from certified legal professionals.",
    features: [
      "Expert Consultation",
      "Dispute Resolution",
      "Real-time Alerts",
      "Auto Reports",
      "24/7 Support",
      "Legal Updates",
    ],
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    href: "/services/legal-advisory-hr-policies",
  },
  {
    icon: ClipboardCheck,
    title: "PAN India Registrations",
    description:
      "Fast licences, hassle-free filings across all states and territories.",
    features: [
      "PAN India Coverage",
      "AI-Powered",
      "Real-time Alerts",
      "Auto Reports",
      "Fast Processing",
      "Hassle-free",
    ],
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    href: "/services/pan-india-registrations",
  },
  {
    icon: Landmark,
    title: "Litigation Support",
    description: "Comprehensive dispute resolution and legal defence services.",
    features: [
      "Dispute Resolution",
      "AI-Powered",
      "Real-time Alerts",
      "Auto Reports",
      "Legal Defence",
      "Court Support",
    ],
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100",
    href: "/services/litigation-support",
  },
  {
    icon: Briefcase,
    title: "Compliance Outsourcing",
    description:
      "We manage it all, so you don't have to worry about compliance.",
    features: [
      "Full Management",
      "Risk Mitigation",
      "AI-Powered",
      "Real-time Alerts",
      "Auto Reports",
      "Cost Effective",
    ],
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    href: "/services/compliance-outsourcing",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection",
    description:
      "Complete support for audits, inspections, and compliance verification.",
    features: [
      "Audit Support",
      "AI-Powered",
      "Real-time Alerts",
      "Auto Reports",
      "Inspection Ready",
      "Compliance Check",
    ],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100",
    href: "/services/audit-and-inspection",
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
      className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg p-4 sm:p-5 2xl:p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Top row: Icon + Title */}
      <div className="flex items-center gap-3 2xl:gap-4 mb-3 2xl:mb-4">
        <div
          className={`w-8 h-8 2xl:w-10 2xl:h-10 bg-gradient-to-br ${offering.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <offering.icon className="w-4 h-4 2xl:w-5 2xl:h-5 text-white" />
        </div>
        <h3 className="text-base sm:text-lg 2xl:text-xl font-semibold text-slate-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {offering.title}
        </h3>
      </div>
      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg leading-snug 2xl:leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {offering.description}
      </p>
    </div>
  </Link>
));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">


      <section className="relative min-h-[85vh] flex items-start justify-center 
  pt-6 sm:pt-8 lg:pt-10 2xl:pt-16 
  px-3 sm:px-5 lg:px-6 2xl:px-12 
  bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">

        {/* Background Elements */}
        <div className="absolute inset-0 bg-orange-100/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
        <div className="absolute top-8 sm:top-12 left-5 sm:left-10 
      w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 2xl:w-40 2xl:h-40 
      bg-orange-200/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-8 sm:bottom-12 right-5 sm:right-10 
      w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44 
      bg-blue-200/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 2xl:w-96 2xl:h-96 
      bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-2xl" />

        {/* Content Container */}
        <div className="w-full max-w-5xl 2xl:max-w-7xl mx-auto text-center 
      space-y-2 sm:space-y-3 2xl:space-y-6 relative z-10">

          {/* Heading */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl 2xl:text-[5.5rem]
        font-black text-slate-900 tracking-tight leading-tight animate-fade-up">
            Simplifying{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Labour
              </span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
            h-0.5 sm:h-1 2xl:h-1.5 
            bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
            </span>
            <br className="block sm:hidden" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Law
              </span>
              <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
            h-0.5 sm:h-1 2xl:h-1.5 
            bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
            </span>
            <br />
            <div className="text-slate-800 mt-1 2xl:mt-3 2xl:text-8xl">Compliance</div>
            <span className="text-sm sm:text-base md:text-xl lg:text-2xl 2xl:text-5xl 
          font-medium italic text-blue-600">
              for Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base 2xl:text-2xl 
        text-gray-700 max-w-xl 2xl:max-w-3xl mx-auto 
        animate-fade-up delay-100 leading-snug 2xl:leading-normal px-3">
            All-in-One Platform: Software, Legal Advisory, Registrations &amp; More – PAN India
          </p>

          {/* AI ChatBot Badge */}
          <div className="pt-2 sm:pt-3 2xl:pt-5">
            <div className="relative inline-flex items-center gap-2 2xl:gap-3 
          h-8 sm:h-9 md:h-10 2xl:h-17 
          px-3 sm:px-4 2xl:px-6 
          rounded-full border border-orange-300 
          bg-gradient-to-r from-orange-100 via-orange-50 to-red-100 text-orange-400">
              <Bot className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-orange-400" />
              <span className="text-[10px] sm:text-xs md:text-sm 2xl:text-2xl
            font-extrabold tracking-wide 
            bg-gradient-to-r from-orange-700 via-red-600 to-orange-800 bg-clip-text text-transparent">
                India&apos;s First Labour Law Compliance AI ChatBot
              </span>
              <Crown className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-yellow-600" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 2xl:gap-4 
        justify-center max-w-md 2xl:max-w-xl mx-auto pt-2 2xl:pt-6">
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
            text-white text-xs sm:text-sm 2xl:text-xl 
            px-4 sm:px-5 2xl:px-7 
            py-3 sm:py-2.5 2xl:py-6 
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
            px-4 sm:px-5 2xl:px-7 
            py-2 sm:py-2.5 2xl:py-6 
            rounded-lg font-bold w-full sm:w-auto"
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
        {/* Inner container keeps light horizontal breathing room only */}
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-8xl px-3 sm:px-4 lg:px-6 2xl:px-8">
          {/* Compact vertical spacing so it fits in one laptop view */}
          <section className="py-8 sm:py-10 lg:py-12 2xl:py-16 min-h-[70vh] 2xl:min-h-[80vh]">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-2 2xl:mb-3 text-slate-900 leading-tight">
                Single Platform for All Labour Law Compliances
              </h2>
              <p className="text-xs sm:text-sm lg:text-base 2xl:text-lg text-gray-700 max-w-2xl 2xl:max-w-3xl mx-auto leading-snug 2xl:leading-relaxed px-3">
                From automated software to expert legal support, we've got you covered.
              </p>
            </div>
            {/* Always 3 per row on md+, compact gaps - 2xl shows better spacing */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 2xl:gap-8">
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
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
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

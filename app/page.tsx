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
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import ResourceLibrary from "./resource-library/page";
import NewsCarouselSection from "@/app/carousel-section/page";

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

const newsUpdates = [
  {
    title: "New Minimum Wage Rates Announced for Maharashtra",
    category: "Wage Updates",
    date: "20 Aug 2025",
    isNew: true,
    href: "/updates/minimum-wage-maharashtra",
  },
  {
    title: "Updated PF Contribution Rates Effective February 2025",
    category: "PF Updates",
    date: "18 Aug 2025",
    isNew: true,
    downloadUrl: "/downloads/pf-rates-2025.pdf",
  },
  {
    title: "Professional Tax Amendment for Karnataka",
    category: "Tax Updates",
    date: "15 Aug 2025",
    href: "/updates/professional-tax-karnataka",
  },
  {
    title: "Holiday List 2025 - Central Government Released",
    category: "Holidays",
    date: "10 Aug 2025",
    downloadUrl: "/downloads/holiday-list-2025.pdf",
  },
  {
    title: "ESI Filing Deadline Extended for Q4",
    category: "ESI Updates",
    date: "08 Aug 2025",
    href: "/updates/esi-deadline-extension",
  },
  {
    title: "Changes in Maternity Benefit Act - A Quick Guide",
    category: "Act Updates",
    date: "05 Aug 2025",
    href: "/updates/maternity-benefit-changes",
  },
];

const OfferingCard = React.memo(({ offering, index }) => (
  <Link key={index} href={offering.href} className="group block h-full">
    <div
      className="relative bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg p-4 sm:p-5 lg:p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(14px)",
      }}
    >
      {/* Icon & Title Horizontal Container */}
      <div className="flex items-center mb-3 sm:mb-4 gap-3">
        {/* Icon Container - smaller size */}
        <div
          className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${offering.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <offering.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>

        {/* Title */}
        <h3 className=" ml-4 text-base sm:text-lg font-semibold text-slate-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {offering.title}
        </h3>

        <div className="flex justify-end mt-auto ml-20">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-orange-50 transition-colors duration-300">
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
        {offering.description}
      </p>

      {/* Features Tags - 3 per row with smaller size */}
      <div className="grid grid-cols-3 gap-1.5 mb-3">
        {offering.features.map((feature, fidx) => (
          <span
            key={fidx}
            className="bg-white/80 text-gray-700 px-1.5 py-1 rounded-md text-xs font-medium border border-gray-200 hover:bg-gray-50 transition-colors duration-200 text-center group-hover:border-orange-200 group-hover:bg-orange-50/50 truncate"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Arrow indicator */}
    </div>
  </Link>
));

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-orange-100/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
        <div className="absolute top-20 left-10 w-32 h-32 md:w-40 md:h-40 bg-orange-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 md:w-48 md:h-48 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-3xl" />

        {/* Content Container */}
        <div className="max-w-7xl mx-auto text-center space-y-4 md:space-y-6 relative z-10 mb-30">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-900 tracking-tight leading-tight sm:leading-[1.1] md:leading-[1.0] lg:leading-[0.95] xl:leading-[0.9] animate-fade-up">
            Simplifying{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Labour
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
            </span>{" "}
            <br className="block sm:hidden" />
            {/* <br className="block sm:hidden" /> */}
            <span className="relative inline-block sm:mt-11">
              <span className=" sm:mt-11 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Law
              </span>
              <div className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
            </span>
            <br />
            <div className="text-slate-800 mt-4 md:mt-6 lg:mt-9">
              Compliance
            </div>
            {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-600 font-bold">
              for Your Business
            </span> */}
            {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
  for Your Business
</span> */}
            {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold bg-yellow-200 text-slate-800 px-2 rounded-md">
  for Your Business
</span> */}
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium italic text-blue-600">
              for Your Business
            </span>
            {/* <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-600 animate-pulse">
  for Your Business
</span> */}
            {/* <div className="typing-animation inline-block">
                <h4 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-green-400">
                    for Your Business
                </h4>
            </div> */}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto animate-fade-up delay-100 leading-relaxed px-4">
            All-in-One Platform: Software, Legal Advisory, Registrations & More
            – PAN India
          </p>

          {/* AI ChatBot Badge */}

          <div className="pt-6 md:pt-8 mb-20">
            <div
              className="
      relative inline-flex items-center gap-3 md:gap-4
      h-14 md:h-20                  
      px-8 md:px-7                   
      rounded-full border-2 border-orange-300
      bg-gradient-to-r from-orange-100 via-orange-50 to-red-100
      text-orange-400
    "
            >
              <Bot className="shrink-0 w-10 h-10 md:w-7 md:h-10 text-orange-400" />
              <span
                className="
        text-base md:text-2xl          
        font-extrabold tracking-wide
        leading-none                   /* vertical centering for text */
        bg-gradient-to-r from-orange-700 via-red-600 to-orange-800
        bg-clip-text text-transparent
      "
              >
                India's First Labour Law Compliance AI ChatBot
              </span>
              <Crown className="shrink-0 w-10 h-10 md:w-6 md:h-10 text-yellow-600" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto ">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto hover:cursor-pointer"
            >
              Get a Free Demo Of Software
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              size="lg"
              className="hover:cursor-pointer 
            text-white 
            bg-blue-950 
            hover:bg-blue-900 
            text-lg md:text-xl 
            px-6 md:px-10 
            py-4 md:py-6  
            rounded-2xl 
            font-bold 
            w-full sm:w-auto"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <NewsCarouselSection />

      {/* Enhanced Key Offerings Section */}

      <section className="relative bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 overflow-hidden min-h-screen">
        {/* Background Elements */}
        <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Offerings Grid */}
          <section className="py-16 sm:py-20 lg:py-24">
            {/* Section Heading */}
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 leading-tight">
                Single Platform for All Labour Law Compliances
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
                From automated software to expert legal support, we've got you
                covered.
              </p>
            </div>

            {/* Cards Grid with increased spacing - Always 3 per row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto">
              {keyOfferings.map((offering, idx) => (
                <OfferingCard key={idx} offering={offering} index={idx} />
              ))}
            </div>
          </section>
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
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto"
            >
              Get a Free Demo Of Software
              <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 bg-transparent rounded-2xl font-bold w-full sm:w-auto"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

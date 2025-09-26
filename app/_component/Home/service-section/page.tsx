"use client";
import {
  Gavel,
  ClipboardCheck,
  Landmark,
  Briefcase,
  ClipboardList,
  Monitor,
  LucideIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";


interface Offering {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  href: string;
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
    href: "/smart-compliance-software",
  },
  {
    icon: Briefcase,
    title: "Compliance Outsourcing",
    description:
      " Easing of workload.",
    color: "from-orange-500 to-orange-600",
    bgColor: "from-orange-50 to-orange-100",
    href: "/compliance-outsourcing",
  },
  {
    icon: ClipboardCheck,
    title: "PAN India Registrations",
    description:
      "National wide and smooth filing processes.",
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    href: "/pan-india-registrations",
  },
  {
    icon: ClipboardList,
    title: "Audit & Inspection",
    description:
      "Provide Help and supports for the auditing and inspections.",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "from-indigo-50 to-indigo-100",
    href: "/audit-and-inspection",
  },
  {
    icon: Gavel,
    title: "Legal Advisory & HR Policies",
    description:
      "Provide professional support and help for complex labour regulations.",
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    href: "/legal-advisory-hr-policies",
  },

  {
    icon: Landmark,
    title: "Litigation Support",
    description: " Dispute resolutions and Support for legal defence.",
    color: "from-red-500 to-red-600",
    bgColor: "from-red-50 to-red-100",
    href: "/litigation-support",
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
        cursor-pointer
        2xl:rounded-2xl 2xl:p-8
        h-full flex flex-col
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div className="flex items-center gap-3 2xl:gap-4 mb-3 2xl:mb-5">
        <div
          className={`w-8 h-8 2xl:w-12 2xl:h-12 bg-gradient-to-br ${offering.color}
                      rounded-lg 2xl:rounded-xl flex items-center justify-center shadow-lg
                      `}
        >
          <offering.icon className="w-4 h-4 2xl:w-6 2xl:h-6 text-white" />
        </div>
        <h3 className="text-base sm:text-lg 2xl:text-2xl font-semibold text-slate-800 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          {offering.title}
        </h3>
      </div>

      <p className="text-gray-600 text-sm sm:text-base 2xl:text-lg leading-snug 2xl:leading-normal [text-align:justify] hyphens-auto break-words line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
        {offering.description}
      </p>
    </div>
  </Link>
));
export const ServiceSection = () => {
  return (
    <section className="relative m-0 p-0 bg-gradient-to-br from-white via-orange-50/30 to-blue-50/30 overflow-hidden">
      <div className="w-full">
        <div className="mx-auto w-full max-w-7xl 2xl:max-w-[110rem] px-3 sm:px-4 lg:px-6 2xl:px-6">
          <section className="py-8 sm:py-10 lg:py-12 2xl:py-16 min-h-[70vh] 2xl:min-h-[80vh]">
            <div className="text-center mb-6 sm:mb-8 lg:mb-10 2xl:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl font-bold mb-2 2xl:mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Single Platform for All <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Labour Law Compliances</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-[1rem] lg:text-base 2xl:text-lg text-gray-700 max-w-2xl 2xl:max-w-3xl mx-auto leading-snug 2xl:leading-relaxed px-3">
                From automated software to expert legal support, we've got you
                covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 2xl:gap-10">
              {keyOfferings.map((offering: Offering, idx: number) => (
                <OfferingCard key={idx} offering={offering} index={idx} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
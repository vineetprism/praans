"use client";
import React from "react";
import {
  Scale,
  Bell,
  Calendar,
  Wallet,
  DollarSign,
  CreditCard,
  Calculator,
  Clock,
} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Acts,Rules And Forms",
    description: "Comprehensive collection of labor acts and regulations",
    icon: Scale,
    color: "bg-blue-500",
    href: "/acts-rule-form",
  },
  {
    title: "Gazette Notifications",
    description: "Latest government notifications and circulars",
    icon: Bell,
    color: "bg-orange-500",
    href: "/gazette",
  },
  {
    title: "Holidays List",
    description:
      "Official holiday calendars by state and central government",
    icon: Calendar,
    color: "bg-pink-500",
    href: "/holidays",
  },
  {
    title: "Labour Welfare Fund",
    description: "Welfare fund contributions and benefits",
    icon: Wallet,
    color: "bg-indigo-500",
    href: "/labour-welfare-fund",
  },
  {
    title: "Minimum Wages",
    description: "State-wise minimum wage rates given by the government",
    icon: DollarSign,
    color: "bg-yellow-500",
    href: "/minimum-wages",
  },
  {
    title: "Professional Tax",
    description: "Professional tax rates and compliance",
    icon: CreditCard,
    color: "bg-red-500",
    href: "/professional-tax",
  },
  {
    title: "CLRA Applicability",
    description: "CLRA Applicability regulations",
    icon: Clock,
    color: "bg-teal-500",
    href: "/leaves-working-hours",
  },
  
  {
    title: "Calculator",
    description: "Leave policies and working hour regulations",
    icon: Calculator,
    color: "bg-violet-500",
    href: "/calculators/bonus",
  },
  {
    title: "NFH Details",
    description:
      "National holidays and festivals recognized by the government",
    icon: Calendar,
    color: "bg-green-500",
    href: "/national-festival-holidays",
  },
  {
    title: "Applicability of S&E Act",
    description:
      "Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act",
    icon: Scale,
    color: "bg-teal-600",
    href: "/applicability-se-act/applicability",
  },
];

const CategoryCard = React.memo(
  ({ category, index }: { category: any; index: number }) => (
    <Link key={index} href={category.href} className="group block h-full cursor-pointer" aria-label={`Read update: ${category.title}`}>
      <div className="relative border border-gray-100 shadow-sm bg-white rounded-lg hover:shadow-md hover:border-orange-200/50 transition flex flex-col h-full w-full">
        <div className={`h-1 rounded-xl 2xl:h-1 ${category.color}`} />
        <div className="flex-1 flex flex-col p-3 sm:p-2 md:p-3 lg:p-3 xl:p-4 2xl:p-5">
          <div className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-3 xl:gap-3 2xl:gap-4 mb-1 sm:mb-1 md:mb-1.5 lg:mb-2 xl:mb-2 2xl:mb-3">
            <div
              className={`w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 xl:w-7 xl:h-7 2xl:w-10 2xl:h-10 ${category.color} rounded-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
            >
              <category.icon className="text-white w-4 h-4 lg:w-4 lg:h-4" />
            </div>
            <h3 className="text-[12px] sm:text-[11px] md:text-xs lg:text-sm xl:text-sm 2xl:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-tight">
              {category.title}
            </h3>
          </div>
          <p className="text-[11px] sm:text-[10px] md:text-[11px] lg:text-xs xl:text-xs 2xl:text-sm text-gray-600 group-hover:text-gray-700 leading-snug 2xl:leading-normal line-clamp-2">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  )
);

export default function ResourceLibrary() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[120rem] px-3 sm:px-4 md:px-6 2xl:px-8 relative z-10 py-4 2xl:py-6">
        <div className="text-center mb-6 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-8 2xl:mb-30">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our{" "}
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Resource Library
            </span>
          </h2>
          <p className="mt-3 sm:mt-2 text-[12px] sm:text-xs md:text-xl 2xl:text-[1.2rem] text-gray-600 max-w-2xl sm:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto leading-snug 2xl:leading-relaxed">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4
            gap-2 sm:gap-4 md:gap-4 lg:gap-4 xl:gap-6 2xl:gap-8
            justify-items-center sm:justify-items-stretch
            mx-auto w-full
            md:max-h-[calc(100vh-180px)] 2xl:max-h-[calc(100vh-220px)]
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                w-[94%] max-w-[26rem] sm:w-full
                h-auto min-h-[92px] sm:h-[85px] md:h-[90px] lg:h-[100px] xl:h-[110px] 2xl:h-[140px]
              "
            >
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


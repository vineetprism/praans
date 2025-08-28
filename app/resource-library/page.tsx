




'use client';

import React from 'react';
import {
  Scale,
  Bell,
  Calendar,
  Wallet,
  DollarSign,
  CreditCard,
  Calculator,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Acts,Rules And Forms",
    description: "Comprehensive collection of labor acts and regulations",
    icon: Scale,
    color: "bg-blue-500",
    href: "/acts",
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
    description: "Official holiday calendars by state and central government",
    icon: Calendar,
    color: "bg-pink-500",
    href: "/holidays",
  },
  {
    title: "Labour Welfare Fund",
    description: "Welfare fund contributions and benefits",
    icon: Wallet,
    color: "bg-indigo-500",
    href: "/welfare-fund",
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
    title: "Leave & Working Hours",
    description: "Leave policies and working hour regulations",
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
  // Adding the new cards
  {
    title: "National Festival Holidays",
    description: "National holidays and festivals recognized by the government",
    icon: Calendar,
    color: "bg-green-500",
    href: "/national-festival-holidays",
  },
  {
    title: "Applicability of S&E Act",
    description: "Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act",
    icon: Scale,
    color: "bg-teal-600",
    href: "/applicability-se-act",
  },
];


const CategoryCard = React.memo(({ category, index }) => (
  <Link
    key={index}
    href={category.href}
    className="group block h-full cursor-pointer"
  >
    <div className="relative border border-gray-100 shadow-sm bg-white rounded-lg hover:shadow-md hover:border-orange-200/50 transition flex flex-col h-full max-w-[260px] mx-auto">
      {/* Accent bar */}
      <div className={`h-0.5 ${category.color}`} />

      {/* Content */}
      <div className="flex-1 flex flex-col p-3 sm:p-4">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-8 h-8 ${category.color} rounded-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
          >
            <category.icon size={16} className="text-white" />
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
            {category.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 leading-snug line-clamp-2">
          {category.description}
        </p>
      </div>
    </div>
  </Link>
));




export default function ResourceLibrary() {
  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />

      <div className="container mx-auto px-3 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our{" "}
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Resource Library
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-snug">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        {/* Cards Grid — 1 col mobile, 2 col tablet, 4 col laptop+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


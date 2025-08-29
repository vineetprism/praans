

'use client';

import React from 'react';
import {
  Scale, Bell, Calendar, Wallet, DollarSign,
  CreditCard, Calculator, Clock,
} from 'lucide-react';
import Link from 'next/link';

const categories = [
  { title: 'Acts,Rules And Forms', description: 'Comprehensive collection of labor acts and regulations', icon: Scale, color: 'bg-blue-500', href: '/acts' },
  { title: 'Gazette Notifications', description: 'Latest government notifications and circulars', icon: Bell, color: 'bg-orange-500', href: '/gazette' },
  { title: 'Holidays List', description: 'Official holiday calendars by state and central government', icon: Calendar, color: 'bg-pink-500', href: '/holidays' },
  { title: 'Labour Welfare Fund', description: 'Welfare fund contributions and benefits', icon: Wallet, color: 'bg-indigo-500', href: '/welfare-fund' },
  { title: 'Minimum Wages', description: 'State-wise minimum wage rates given by the government', icon: DollarSign, color: 'bg-yellow-500', href: '/minimum-wages' },
  { title: 'Professional Tax', description: 'Professional tax rates and compliance', icon: CreditCard, color: 'bg-red-500', href: '/professional-tax' },
  { title: 'Leave & Working Hours', description: 'Leave policies and working hour regulations', icon: Clock, color: 'bg-teal-500', href: '/leaves-working-hours' },
  { title: 'Calculator', description: 'Leave policies and working hour regulations', icon: Calculator, color: 'bg-violet-500', href: '/calculators/bonus' },
  { title: 'NFH Details', description: 'National holidays and festivals recognized by the government', icon: Calendar, color: 'bg-green-500', href: '/national-festival-holidays' },
  { title: 'Applicability of S&E Act', description: 'Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act', icon: Scale, color: 'bg-teal-600', href: '/applicability-se-act' },
];

const CategoryCard = React.memo(({ category, index }: { category: any; index: number }) => (
  <Link key={index} href={category.href} className="group block h-full cursor-pointer">
    <div className="relative border border-gray-100 shadow-sm bg-white rounded-lg hover:shadow-md hover:border-orange-200/50 transition flex flex-col h-full w-full">
      <div className={`h-0.5 2xl:h-1 ${category.color}`} />
      <div className="flex-1 flex flex-col p-2 md:p-3 2xl:p-5">
        <div className="flex items-center gap-2 md:gap-3 2xl:gap-4 mb-1 md:mb-2 2xl:mb-3">
          <div className={`w-7 h-7 md:w-8 md:h-8 2xl:w-10 2xl:h-10 ${category.color} rounded-md flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
            <category.icon className="text-white" size={14} />
          </div>
          <h3 className="text-xs md:text-sm 2xl:text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-tight">
            {category.title}
          </h3>
        </div>
        <p className="text-[11px] md:text-xs 2xl:text-base text-gray-600 group-hover:text-gray-700 leading-snug 2xl:leading-normal line-clamp-2">
          {category.description}
        </p>
      </div>
    </div>
  </Link>
));

export default function ResourceLibrary() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
      {/* ↓ narrower on 2xl */}
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[110rem] px-3 sm:px-4 md:px-6 2xl:px-8 relative z-10 py-4 2xl:py-6">
        {/* Header spacing fixed */}
        <div className="text-center mb-3 md:mb-4 2xl:mb-6">
          <h2 className="text-lg md:text-2xl lg:text-3xl 2xl:text-5xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Resource Library</span>
          </h2>
          <p className="mt-1 text-xs md:text-sm 2xl:text-lg text-gray-600 max-w-3xl 2xl:max-w-5xl mx-auto leading-snug 2xl:leading-relaxed">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        {/* Grid — 4 cols; smaller 2xl gap; items stretch; height capped */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4
            gap-2 md:gap-3 2xl:gap-5
            items-stretch justify-items-stretch
            mx-auto
            max-h-[calc(100vh-140px)] 2xl:max-h-[calc(100vh-160px)]
            overflow-hidden
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="h-[120px] md:h-[125px] lg:h-[130px] xl:h-[135px] 2xl:h-[160px]"
            >
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

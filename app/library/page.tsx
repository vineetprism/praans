// import { FileText, Scale, Bell, Calendar, Wallet, Clock, DollarSign, CreditCard, Users, Shield, Zap, ChevronRight, Calculator } from 'lucide-react'
// import Link from "next/link"
// import React from "react"

// // Type definitions
// interface Category {
//   title: string;
//   description: string;
//   icon: React.ComponentType<any>;
//   color: string;
//   href: string;
// }

// interface CategoryCardProps {
//   category: Category;
//   index: number;
// }

// // Enhanced categories with more items and better organization
// const categories = [
//   {
//     title: "Acts,Rules And Forms",
//     description: "Comprehensive collection of labor acts and regulations",
//     icon: Scale,
//     color: "bg-blue-500",
//     href: "/acts",
//   },
//   {
//     title: "Gazette Notifications",
//     description: "Latest government notifications and circulars",
//     icon: Bell,
//     color: "bg-orange-500",
//     href: "/gazette",
//   },
//   {
//     title: "Holidays List",
//     description: "Official holiday calendars by state and central government",
//     icon: Calendar,
//     color: "bg-pink-500",
//     href: "/national-festival-holidays",
//   },
//   {
//     title: "Labour Welfare Fund",
//     description: "Welfare fund contributions and benefits",
//     icon: Wallet,
//     color: "bg-indigo-500",
//     href: "/welfare-fund",
//   },
//   {
//     title: "Leave & Working Hours",
//     description: "Leave policies and working hour regulations",
//     icon: Clock,
//     color: "bg-teal-500",
//     href: "/leaves-working-hours",
//   },
//   {
//     title: "Minimum Wages",
//     description: "State-wise minimum wage rates given by the government",
//     icon: DollarSign,
//     color: "bg-yellow-500",
//     href: "/minimum-wages",
//   },
//   {
//     title: "Professional Tax",
//     description: "Professional tax rates and compliance",
//     icon: CreditCard,
//     color: "bg-red-500",
//     href: "/professional-tax",
//   },
//   {
//     title: "Bonus Calculators",
//     description: "Detailed rules and implementation guidelines",
//     icon: Calculator,
//     color: "bg-violet-500",
//     href: "/calculators/bonus",
//   },
//   {
//     title: "Gratuity Calculators",
//     description: "Detailed rules and implementation guidelines",
//     icon: FileText,
//     color: "bg-purple-500",
//     href: "/calculators/gratuity",
//   },
// ]

// const trendingSearches = [
//   "Minimum Wages 2025",
//   "PF Rate Changes",
//   "Leave Encashment Rules",
//   "Professional Tax Slabs",
//   "Maternity Benefits",
//   "Bonus Calculation"
// ]

// const newsUpdates = [
//   {
//     title: "New Minimum Wage Rates Announced for Maharashtra",
//     date: "2025-01-15",
//     category: "Minimum Wages",
//     isNew: true
//   },
//   {
//     title: "Updated PF Contribution Rates Effective February 2025",
//     date: "2025-01-12",
//     category: "Provident Fund",
//     isNew: true
//   },
//   {
//     title: "Professional Tax Amendment for Karnataka",
//     date: "2025-01-10",
//     category: "Professional Tax",
//     isNew: false
//   },
//   {
//     title: "Holiday List 2025 - Central Government",
//     date: "2025-01-08",
//     category: "Holidays",
//     isNew: false
//   }
// ]

// const features = [
//   {
//     icon: Shield,
//     title: "Always Updated",
//     description: "Real-time updates from official sources"
//   },
//   {
//     icon: Zap,
//     title: "Lightning Fast",
//     description: "Quick search across all documents"
//   },
//   {
//     icon: Users,
//     title: "Expert Curated",
//     description: "Content reviewed by compliance experts"
//   }
// ]

// // Enhanced CategoryCard component with modern styling
// const CategoryCard = React.memo(({ category, index }: CategoryCardProps) => (
//   <Link
//     key={index}
//     href={category.href}
//     aria-label={category.title}
//     className="group block h-full cursor-pointer"
//   >
//     <div className="relative overflow-hidden rounded-2xl h-full">
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100/0 to-blue-100/0 group-hover:from-orange-100/20 group-hover:to-blue-100/20" />

//       <div className="relative border border-gray-100 shadow-lg bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200/50 h-full flex flex-col">
//         <div className={`h-1 ${category.color} flex-shrink-0`} />

//         <div className="flex-1 flex flex-col p-6">
//           <div className="mb-4">
//             <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//               <category.icon className="w-6 h-6 text-white" />
//             </div>
//           </div>

//           {/* Title */}
//           <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
//             {category.title}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-1 mb-4">
//             {category.description}
//           </p>

//           {/* Arrow indicator */}
//           <div className="flex justify-end">
//             <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
//               <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </Link>
// ));

import type { Metadata } from "next";
import ResourceLibrary from "../_component/Home/resource-library/page";

export const metadata: Metadata = {
  title: "Resource Library | Praans Consultech",
  description:
    "Explore Praans Consultech’s resource library for acts, gazettes, holidays, minimum wages, professional tax, labour welfare fund, S&E Act applicability, and more compliance resources.",
  keywords:
    "Praans Consultech resource library, labour law compliance, acts and rules, gazette notifications, holidays list, minimum wages, professional tax, labour welfare fund, shops and establishments act",
};

export default function Page() {
  return (
    <div className=" bg-gray-50">
      <ResourceLibrary />
    </div>
  );
}


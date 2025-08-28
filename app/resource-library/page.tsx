


// 'use client';

// import React from 'react';
// import {
//   Scale,
//   Bell,
//   Calendar,
//   Wallet,
//   DollarSign,
//   CreditCard,
//   Calculator,
//   Clock,
// } from 'lucide-react';
// import Link from 'next/link';

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
//    {
//     title: "Leave & Working Hours",
//     description: "Leave policies and working hour regulations",
//     icon: Clock,
//     color: "bg-teal-500",
//     href: "/leaves-working-hours",
//   },
//   {
//     title: "Calculator",
//     description: "Leave policies and working hour regulations",
//     icon: Calculator,
//     color: "bg-violet-500",
//     href: "/calculators/bonus",
//   },
// ];


// // const calculatorsData = [
// //   {
// //     title: "Bonus Calculator",
// //     icon: Calculator,
// //     color: "bg-violet-500",
// //     href: "/calculators/bonus",
// //   },
// //   {
// //     title: "Gratuity Calculator",
// //     icon: FileText,
// //     color: "bg-purple-500",
// //     href: "/calculators/gratuity",
// //   },
// //   {
// //     title: "PT Calculator",
// //     icon: Clock,
// //     color: "bg-teal-500",
// //     href: "/leaves-working-hours",
// //   },
// // ];


// const CategoryCard = React.memo(({ category, index }) => (
//   <Link
//     key={index}
//     href={category.href}
//     className="group block h-full cursor-pointer"
//   >
//     <div className="relative overflow-hidden rounded-2xl h-full">
//       {/* Hover background effect */}
//       <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100/0 to-blue-100/0 group-hover:from-orange-100/20 group-hover:to-blue-100/20" />

//       <div className="relative border border-gray-100 shadow-lg bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200/50 h-full flex flex-col">
//         {/* Accent bar */}
//         <div className={`h-1 ${category.color} flex-shrink-0`} />

//         {/* Card content */}
//         <div className="flex-1 flex flex-col p-6 sm:p-8">
//           {/* Icon container */}
//           <div className="mb-5">
//             <div
//               className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
//             >
//               <category.icon size={24} className="text-white" />
//             </div>
//           </div>

//           {/* Title */}
//           <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
//             {category.title}
//           </h3>

//           {/* Description */}
//           <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
//             {category.description}
//           </p>

//           {/* Arrow */}
          
//         </div>
//       </div>
//     </div>
//   </Link>
// ));



// // const CalculatorCard = ({ calculators }) => (
// //   <div className="relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-lg bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex flex-col">
// //     {/* Accent bar */}
// //     <div className="h-1 bg-violet-500 flex-shrink-0 mb-3" />

// //     <h3 className="text-md font-semibold mb-4 text-slate-900">Calculators</h3>

// //     <div className="flex flex-col gap-3 flex-1 overflow-auto">
// //       {calculators.map((calc, idx) => (
// //         <Link
// //           key={idx}
// //           href={calc.href}
// //           className="flex items-center gap-3 p-3 bg-violet-100 rounded-lg cursor-pointer hover:bg-violet-200 transition"
// //         >
// //           <div className={`w-8 h-8 ${calc.color} rounded-xl flex items-center justify-center shadow-lg`}>
// //             {/* Icon size chhota kiya */}
// //             <calc.icon size={16} className="text-white" />
// //           </div>
// //           <div>
// //             <h4 className="font-medium text-violet-800 text-sm">{calc.title}</h4>
// //             <p className="text-xs text-violet-700">{calc.description}</p>
// //           </div>
// //         </Link>
// //       ))}
// //     </div>
// //   </div>
// // );



// export default function ResourceLibrary() {
//   return (
//     <section className="py-10 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
//       {/* Background decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
//       <div className="absolute top-20 left-10 w-24 h-24 bg-orange-200/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />

//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//             Explore Our{" "}
//             <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
//               Resource Library
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Navigate through our comprehensive collection of compliance resources organized by category.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} index={index} />
//           ))}

//           {/* Grouped Calculators Card */}
//           {/* <CalculatorCard calculators={calculatorsData} /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

















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
    <div className="relative overflow-hidden rounded-2xl h-full">
      {/* Hover background effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100/0 to-blue-100/0 group-hover:from-orange-100/20 group-hover:to-blue-100/20" />

      <div className="relative border border-gray-100 shadow-lg bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200/50 h-full flex flex-col">
        {/* Accent bar */}
        <div className={`h-1 ${category.color} flex-shrink-0`} />

        {/* Card content */}
        <div className="flex-1 flex flex-col p-6 sm:p-8">
          {/* Icon container */}
          <div className="mb-5">
            <div
              className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
            >
              <category.icon size={24} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
            {category.description}
          </p>

          {/* Arrow */}
        </div>
      </div>
    </div>
  </Link>
));

export default function ResourceLibrary() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
      <div className="absolute top-20 left-10 w-24 h-24 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our{" "}
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Resource Library
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

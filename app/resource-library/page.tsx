

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
//   { title: 'Acts,Rules And Forms', description: 'Comprehensive collection of labor acts and regulations', icon: Scale, color: 'bg-blue-500', href: '/acts' },
//   { title: 'Gazette Notifications', description: 'Latest government notifications and circulars', icon: Bell, color: 'bg-orange-500', href: '/gazette' },
//   { title: 'Holidays List', description: 'Official holiday calendars by state and central government', icon: Calendar, color: 'bg-pink-500', href: '/holidays' },
//   { title: 'Labour Welfare Fund', description: 'Welfare fund contributions and benefits', icon: Wallet, color: 'bg-indigo-500', href: '/welfare-fund' },
//   { title: 'Minimum Wages', description: 'State-wise minimum wage rates given by the government', icon: DollarSign, color: 'bg-yellow-500', href: '/minimum-wages' },
//   { title: 'Professional Tax', description: 'Professional tax rates and compliance', icon: CreditCard, color: 'bg-red-500', href: '/professional-tax' },
//   { title: 'Leave & Working Hours', description: 'Leave policies and working hour regulations', icon: Clock, color: 'bg-teal-500', href: '/leaves-working-hours' },
//   { title: 'Calculator', description: 'Leave policies and working hour regulations', icon: Calculator, color: 'bg-violet-500', href: '/calculators/bonus' },
//   { title: 'NFH Details', description: 'National holidays and festivals recognized by the government', icon: Calendar, color: 'bg-green-500', href: '/national-festival-holidays' },
//   { title: 'Applicability of S&E Act', description: 'Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act', icon: Scale, color: 'bg-teal-600', href: '/applicability-se-act' },
// ];

// const CategoryCard = React.memo(({ category, index }: { category: any; index: number }) => (
//   <Link key={index} href={category.href} className="group block h-full cursor-pointer">
//     <div
//       className="
//         relative border border-gray-100 shadow-sm bg-white rounded-lg
//         hover:shadow-md hover:border-orange-200/50 transition
//         flex flex-col h-full w-full
//         2xl:rounded-xl
//       "
//     >
//       {/* Accent bar */}
//       <div className={`h-0.5 2xl:h-1 ${category.color}`} />

//       {/* Content */}
//       <div className="flex-1 flex flex-col p-3 sm:p-4 2xl:p-6">
//         {/* Icon + Title row */}
//         <div className="flex items-center gap-3 2xl:gap-4 mb-2 2xl:mb-3">
//           <div
//             className={`w-8 h-8 2xl:w-8 2xl:h-8 ${category.color} rounded-md 2xl:rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}
//           >
//             {/* icon scales on 2xl */}
//             <category.icon className="text-white" size={16} />
//           </div>
//           <h3 className="text-sm sm:text-base 2xl:text-xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1">
//             {category.title}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className="text-xs sm:text-sm 2xl:text-base text-gray-600 group-hover:text-gray-700 leading-snug 2xl:leading-normal line-clamp-2">
//           {category.description}
//         </p>
//       </div>
//     </div>
//   </Link>
// ));

// export default function ResourceLibrary() {
//   return (
//     <section className="py-8 md:py-10  bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10"  />

//       {/* Wider + lean padding on 2xl to reduce side whitespace */}
//       <div className="mx-auto w-full max-w-7xl 2xl:max-w-[110rem] px-3 md:px-6 2xl:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-8 2xl:mb-12">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold mb-2 2xl:mb-3 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//             Explore Our{' '}
//             <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
//               Resource Library
//             </span>
//           </h2>
//           <p className="text-sm md:text-base 2xl:text-xl text-gray-600 max-w-2xl 2xl:max-w-4xl mx-auto leading-snug 2xl:leading-relaxed">
//             Navigate through our comprehensive collection of compliance resources organized by category.
//           </p>
//         </div>

//         {/* Grid — spreads to 5 cols on 2xl to use width */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6 2xl:gap-8">
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }













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
//   { title: 'Acts,Rules And Forms', description: 'Comprehensive collection of labor acts and regulations', icon: Scale, color: 'bg-blue-500', href: '/acts' },
//   { title: 'Gazette Notifications', description: 'Latest government notifications and circulars', icon: Bell, color: 'bg-orange-500', href: '/gazette' },
//   { title: 'Holidays List', description: 'Official holiday calendars by state and central government', icon: Calendar, color: 'bg-pink-500', href: '/holidays' },
//   { title: 'Labour Welfare Fund', description: 'Welfare fund contributions and benefits', icon: Wallet, color: 'bg-indigo-500', href: '/welfare-fund' },
//   { title: 'Minimum Wages', description: 'State-wise minimum wage rates given by the government', icon: DollarSign, color: 'bg-yellow-500', href: '/minimum-wages' },
//   { title: 'Professional Tax', description: 'Professional tax rates and compliance', icon: CreditCard, color: 'bg-red-500', href: '/professional-tax' },
//   { title: 'Leave & Working Hours', description: 'Leave policies and working hour regulations', icon: Clock, color: 'bg-teal-500', href: '/leaves-working-hours' },
//   { title: 'Calculator', description: 'Leave policies and working hour regulations', icon: Calculator, color: 'bg-violet-500', href: '/calculators/bonus' },
//   { title: 'NFH Details', description: 'National holidays and festivals recognized by the government', icon: Calendar, color: 'bg-green-500', href: '/national-festival-holidays' },
//   { title: 'Applicability of S&E Act', description: 'Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act', icon: Scale, color: 'bg-teal-600', href: '/applicability-se-act' },
// ];

// const CategoryCard = React.memo(({ category, index }: { category: any; index: number }) => (
//   <Link key={index} href={category.href} className="group block h-full cursor-pointer">
//     <div
//       className="
//         relative border border-gray-100 shadow-sm bg-white rounded-lg
//         hover:shadow-md hover:border-orange-200/50 transition
//         flex flex-col h-full w-full
//         lg:rounded-lg 2xl:rounded-lg
//       "
//     >
//       {/* Accent bar */}
//       <div className={`h-0.5 lg:h-0.5 2xl:h-1 ${category.color}`} />

//       {/* Content */}
//       <div className="flex-1 flex flex-col p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
//         {/* Icon + Title row */}
//         <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-3 mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">
//           <div
//             className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 ${category.color}
//                         rounded-md flex items-center justify-center shadow-sm
//                         group-hover:scale-105 transition-transform flex-shrink-0`}
//           >
//             <category.icon className="text-white" size={14} />
//           </div>
//           <h3 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-tight">
//             {category.title}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-gray-600 group-hover:text-gray-700 leading-tight line-clamp-2">
//           {category.description}
//         </p>
//       </div>
//     </div>
//   </Link>
// ));

// export default function ResourceLibrary() {
//   return (
//     <section className="py-4 sm:py-6 md:py-8 lg:py-6 xl:py-8 2xl:py-10 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden min-h-screen flex items-center">
//       {/* BG */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />

//       {/* Container */}
//       <div className="mx-auto w-full max-w-7xl 2xl:max-w-[120rem] px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 2xl:px-12 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-6 xl:mb-8 2xl:mb-10">
//           <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-2 xl:mb-3 2xl:mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//             Explore Our{' '}
//             <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
//               Resource Library
//             </span>
//           </h2>
//           <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-snug">
//             Navigate through our comprehensive collection of compliance resources organized by category.
//           </p>
//         </div>

//         {/* Grid - Optimized for single viewport on all devices */}
//         <div className="
//             grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5
//             gap-2 sm:gap-3 md:gap-4 lg:gap-3 xl:gap-4 2xl:gap-6
//             max-h-[65vh] sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[70vh] xl:max-h-[70vh] 2xl:max-h-[75vh]
//           "
//         >
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










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
//   { title: 'Acts,Rules And Forms', description: 'Comprehensive collection of labor acts and regulations', icon: Scale, color: 'bg-blue-500', href: '/acts' },
//   { title: 'Gazette Notifications', description: 'Latest government notifications and circulars', icon: Bell, color: 'bg-orange-500', href: '/gazette' },
//   { title: 'Holidays List', description: 'Official holiday calendars by state and central government', icon: Calendar, color: 'bg-pink-500', href: '/holidays' },
//   { title: 'Labour Welfare Fund', description: 'Welfare fund contributions and benefits', icon: Wallet, color: 'bg-indigo-500', href: '/welfare-fund' },
//   { title: 'Minimum Wages', description: 'State-wise minimum wage rates given by the government', icon: DollarSign, color: 'bg-yellow-500', href: '/minimum-wages' },
//   { title: 'Professional Tax', description: 'Professional tax rates and compliance', icon: CreditCard, color: 'bg-red-500', href: '/professional-tax' },
//   { title: 'Leave & Working Hours', description: 'Leave policies and working hour regulations', icon: Clock, color: 'bg-teal-500', href: '/leaves-working-hours' },
//   { title: 'Calculator', description: 'Leave policies and working hour regulations', icon: Calculator, color: 'bg-violet-500', href: '/calculators/bonus' },
//   { title: 'NFH Details', description: 'National holidays and festivals recognized by the government', icon: Calendar, color: 'bg-green-500', href: '/national-festival-holidays' },
//   { title: 'Applicability of S&E Act', description: 'Detailed explanation of which businesses and establishments are covered under the Shops and Establishments Act', icon: Scale, color: 'bg-teal-600', href: '/applicability-se-act' },
// ];

// const CategoryCard = React.memo(({ category, index }: { category: any; index: number }) => (
//   <Link key={index} href={category.href} className="group block h-full cursor-pointer">
//     <div
//       className="
//         relative border border-gray-100 shadow-sm bg-white rounded-lg
//         hover:shadow-md hover:border-orange-200/50 transition
//         flex flex-col h-full w-full
//         lg:rounded-lg 2xl:rounded-lg
//       "
//     >
//       {/* Accent bar */}
//       <div className={`h-0.5 lg:h-0.5 2xl:h-1 ${category.color}`} />

//       {/* Content */}
//       <div className="flex-1 flex flex-col p-2 sm:p-3 md:p-3 lg:p-3 xl:p-4 2xl:p-4">
//         {/* Icon + Title row */}
//         <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-3 mb-1 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-2">
//           <div
//             className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 ${category.color}
//                         rounded-md flex items-center justify-center shadow-sm
//                         group-hover:scale-105 transition-transform flex-shrink-0`}
//           >
//             <category.icon className="text-white" size={14} />
//           </div>
//           <h3 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-base font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-tight">
//             {category.title}
//           </h3>
//         </div>

//         {/* Description */}
//         <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-sm text-gray-600 group-hover:text-gray-700 leading-tight line-clamp-2">
//           {category.description}
//         </p>
//       </div>
//     </div>
//   </Link>
// ));

// export default function ResourceLibrary() {
//   return (
//     <section className="py-2 sm:py-3 md:py-4 lg:py-3 xl:py-4 2xl:py-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden h-screen flex items-center justify-center">
//       {/* BG */}
//       <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />

//       {/* Container */}
//       <div className="mx-auto w-full max-w-7xl 2xl:max-w-[120rem] px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 2xl:px-12 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-4 xl:mb-5 2xl:mb-6">
//           <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold mb-1 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-2 2xl:mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
//             Explore Our{' '}
//             <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
//               Resource Library
//             </span>
//           </h2>
//           <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-base text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-tight">
//             Navigate through our comprehensive collection of compliance resources organized by category.
//           </p>
//         </div>

//         {/* Grid - Tightly packed for single viewport */}
//         <div className="
//             grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5
//             gap-2 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4
//             h-[60vh] sm:h-[65vh] md:h-[65vh] lg:h-[65vh] xl:h-[65vh] 2xl:h-[70vh]
//           "
//         >
//           {categories.map((category, index) => (
//             <CategoryCard key={index} category={category} index={index} />
//           ))}
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
    <div
      className="
        relative border border-gray-100 shadow-sm bg-white rounded-lg
        hover:shadow-md hover:border-orange-200/50 transition
        flex flex-col h-full w-full
        lg:rounded-lg 2xl:rounded-lg 2xl:h-[200px]
      "
    >
      {/* Accent bar */}
      <div className={`h-0.5 lg:h-0.5 2xl:h-1 ${category.color}`} />

      {/* Content */}
      <div className="flex-1 flex flex-col p-2 sm:p-2 md:p-3 lg:p-2 xl:p-3 2xl:p-5">
        {/* Icon + Title row */}
        <div className="flex items-center gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4 mb-1 md:mb-2 lg:mb-1 xl:mb-2 2xl:mb-3">
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-11 2xl:h-11 ${category.color}
                        rounded-md flex items-center justify-center shadow-sm
                        group-hover:scale-105 transition-transform flex-shrink-0`}
          >
            <category.icon className="text-white" size={14} />
          </div>
          <h3 className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base 2xl:text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 leading-tight">
            {category.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-xs md:text-xs lg:text-xs xl:text-sm 2xl:text-base text-gray-600 group-hover:text-gray-700 leading-tight line-clamp-2">
          {category.description}
        </p>
      </div>
    </div>
  </Link>
));

export default function ResourceLibrary() {
  return (
    <section className="py-2 sm:py-3 md:py-4 lg:py-3 xl:py-4 2xl:py-6 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden h-screen flex items-center justify-center">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />

      {/* Container */}
      <div className="mx-auto w-full max-w-7xl 2xl:max-w-[120rem] px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 2xl:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-3 sm:mb-4 md:mb-50 lg:mb-4 xl:mb-5 2xl:mb-30">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-5xl font-bold mb-1 sm:mb-1 md:mb-2 lg:mb-1 xl:mb-2 2xl:mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our{' '}
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Resource Library
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm 2xl:text-xl text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto leading-tight">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        {/* Grid - Tightly packed with smaller card heights */}
        <div className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5
            gap-2 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3 2xl:gap-4
            h-[50vh] sm:h-[55vh] md:h-[55vh] lg:h-[55vh] xl:h-[55vh] 2xl:h-[60vh]
          "
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { 
  Scale, 
  Bell, 
  Calendar, 
  Wallet, 
  DollarSign, 
  CreditCard, 
  Calculator, 
  Receipt, 
  Clock,
  ChevronRight, 
  FileText
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
    href: "/national-festival-holidays",
    
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
    title: "Bonus Calculators",
    description: "Detailed rules and implementation guidelines",
    icon: Calculator,
    color: "bg-violet-500",
    href: "/calculators/bonus",
  },

  {
    title: "Gratuity Calculators",
    description: "Detailed rules and implementation guidelines",
    icon: FileText,
    color: "bg-purple-500",
    href: "/calculators/gratuity",
  },
  {
    title: "Leave & Working Hours",
    description: "Leave policies and working hour regulations",
    icon: Clock,
    color: "bg-teal-500",
    href: "/leaves-working-hours",
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

        {/* Card content with proper padding */}
        <div className="flex-1 flex flex-col p-6">
          {/* Icon container */}
          <div className="mb-4">
            <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
            {category.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-1 mb-4">
            {category.description}
          </p>

          {/* Arrow indicator */}
          <div className="flex justify-end">
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-orange-100 transition-all duration-300 group-hover:scale-110">
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
));


export default function ResourceLibrary() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden min-h-screen">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Explore Our{" "}
            <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
              Resource Library
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Navigate through our comprehensive collection of compliance resources organized by category.
          </p>
        </div>

        {/* Cards Grid - Responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
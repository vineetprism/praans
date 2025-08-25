// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Search, FileText, Scale, FormInput, Bell, Calendar, Wallet, Clock, DollarSign, CreditCard, PiggyBank, BarChart3, TrendingUp, Download, ArrowRight, Star, Users, Shield, Zap } from 'lucide-react'
// import Link from "next/link"
// import Image from "next/image"
// import React from "react"

// const categories = [
//   {
//     title: "Acts",
//     description: "Comprehensive collection of labor acts and regulations",
//     icon: Scale,
//     color: "bg-blue-500",
//     href: "/acts"
//   },
//   {
//     title: "Rules",
//     description: "Detailed rules and implementation guidelines",
//     icon: FileText,
//     color: "bg-green-500",
//     href: "/rules"
//   },
//   {
//     title: "Forms",
//     description: "Downloadable forms for compliance requirements",
//     icon: FormInput,
//     color: "bg-purple-500",
//     href: "/forms"
//   },
//   {
//     title: "Gazette Notifications",
//     description: "Latest government notifications and circulars",
//     icon: Bell,
//     color: "bg-orange-500",
//     href: "/gazette"
//   },
//   {
//     title: "Holidays List",
//     description: "Official holiday calendars by state",
//     icon: Calendar,
//     color: "bg-pink-500",
//     href: "/holidays"
//   },
//   {
//     title: "Labour Welfare Fund",
//     description: "Welfare fund contributions and benefits",
//     icon: Wallet,
//     color: "bg-indigo-500",
//     href: "/welfare-fund"
//   },
  // {
  //   title: "Leave & Working Hours",
  //   description: "Leave policies and working hour regulations",
  //   icon: Clock,
  //   color: "bg-teal-500",
  //   href: "/leaves-working-hours"
  // },
//   {
//     title: "Minimum Wages",
//     description: "State-wise minimum wage rates and updates",
//     icon: DollarSign,
//     color: "bg-yellow-500",
//     href: "/minimum-wages"
//   },
//   {
//     title: "Professional Tax",
//     description: "Professional tax rates and compliance",
//     icon: CreditCard,
//     color: "bg-red-500",
//     href: "/professional-tax"
//   },
//   {
//     title: "Provident Fund",
//     description: "PF rates, forms, and regulations",
//     icon: PiggyBank,
//     color: "bg-cyan-500",
//     href: "/provident-fund"
//   },
//   {
//     title: "NFH Matrix",
//     description: "National and Festival Holiday matrix",
//     icon: BarChart3,
//     color: "bg-violet-500",
//     href: "/nfh-matrix"
//   }
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

// const CategoryCard = React.memo(({ category, index }) => (
//   <Link key={index} href={category.href}>
//     <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
//       <CardHeader className="pb-3">
//         <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
//           <category.icon className="w-6 h-6 text-white" loading="lazy" />
//         </div>
//         <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
//           {category.title}
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <CardDescription className="text-gray-600 leading-relaxed">
//           {category.description}
//         </CardDescription>
//       </CardContent>
//     </Card>
//   </Link>
// ))

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
//       </head>
//       {/* Header */}
//       {/* Hero Section */}
//       <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-orange-500/5" />
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/30" />
//         <div className="container mx-auto px-4 relative">
//           <div className="max-w-4xl mx-auto text-center">
//             <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200">
//               🚀 Simplifying Compliance for Modern Businesses
//             </Badge>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
//               Your Complete
//               <span className="text-orange-500"> Compliance </span>
//               Library
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//               Access the most comprehensive collection of labor laws, minimum wages, forms, and compliance documents. 
//               Stay updated with real-time notifications and expert insights.
//             </p>
            
//             {/* Search Bar */}
//             <div className="max-w-2xl mx-auto mb-8">
//               <div className="relative">
//                 <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input 
//                   placeholder="Search acts, rules, forms, wages..." 
//                   className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-xl shadow-lg"
//                 />
//                 <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600">
//                   Search
//                 </Button>
//               </div>
              
//               {/* Trending Keywords */}
//               <div className="mt-4 flex flex-wrap justify-center gap-2">
//                 <span className="text-sm text-gray-500">Trending:</span>
//                 {trendingSearches.map((keyword, index) => (
//                   <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-orange-100 transition-colors">
//                     {keyword}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
//                 Explore Library
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
//                 Request Demo
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//             {features.map((feature, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Category Grid */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Navigate through our comprehensive collection of compliance resources organized by category
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
//             {categories.map((category, index) => (
//               <CategoryCard key={index} category={category} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* News & Updates */}
//           <section className="py-20 bg-white">
//             <div className="container mx-auto px-4">
//               <div className="flex items-center justify-between mb-12">
//                 <div>
//                   <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
//                   <p className="text-xl text-gray-600">Stay informed with the most recent compliance news</p>
//                 </div>
//                 <Button variant="outline" className="hidden md:flex">
//                   View All Updates
//                   <ArrowRight className="ml-2 w-4 h-4" />
//                 </Button>
//               </div>
              
//               <div className="grid md:grid-cols-2 gap-6">
//                 {newsUpdates.map((news, index) => (
//                   <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <Badge variant="secondary" className="text-xs">
//                           {news.category}
//                         </Badge>
//                         {news.isNew && (
//                           <Badge className="bg-green-500 text-white text-xs">
//                             <Star className="w-3 h-3 mr-1" />
//                             New
//                           </Badge>
//                         )}
//                       </div>
//                       <CardTitle className="text-lg group-hover:text-orange-500 transition-colors leading-tight">
//                         {news.title}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent>
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm text-gray-500">{news.date}</span>
//                         <Button size="sm" variant="ghost" className="group-hover:bg-orange-50">
//                           <Download className="w-4 h-4 mr-1" />
//                           Download
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </div>
//           </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Simplify Your Compliance?</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Join thousands of businesses who trust our platform for their compliance needs. 
//             Get started today with a free account.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4">
//               Start Free Trial
//             </Button>
//             <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4">
//               Schedule Demo
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }















import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Scale, FormInput, Bell, Calendar, Wallet, Clock, DollarSign, CreditCard, PiggyBank, BarChart3, TrendingUp, Download, ArrowRight, Star, Users, Shield, Zap, ChevronRight, Calculator } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import React from "react"

// Enhanced categories with more items and better organization
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
    title: "Leave & Working Hours",
    description: "Leave policies and working hour regulations",
    icon: Clock,
    color: "bg-teal-500",
    href: "/leaves-working-hours",
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
]

const trendingSearches = [
  "Minimum Wages 2025",
  "PF Rate Changes",
  "Leave Encashment Rules",
  "Professional Tax Slabs",
  "Maternity Benefits",
  "Bonus Calculation"
]

const newsUpdates = [
  {
    title: "New Minimum Wage Rates Announced for Maharashtra",
    date: "2025-01-15",
    category: "Minimum Wages",
    isNew: true
  },
  {
    title: "Updated PF Contribution Rates Effective February 2025",
    date: "2025-01-12",
    category: "Provident Fund",
    isNew: true
  },
  {
    title: "Professional Tax Amendment for Karnataka",
    date: "2025-01-10",
    category: "Professional Tax",
    isNew: false
  },
  {
    title: "Holiday List 2025 - Central Government",
    date: "2025-01-08",
    category: "Holidays",
    isNew: false
  }
]

const features = [
  {
    icon: Shield,
    title: "Always Updated",
    description: "Real-time updates from official sources"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick search across all documents"
  },
  {
    icon: Users,
    title: "Expert Curated",
    description: "Content reviewed by compliance experts"
  }
]

// Enhanced CategoryCard component with modern styling
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
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head> */}

      {/* Enhanced Resource Library Section */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 via-transparent to-blue-100/10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
              Explore Our{" "}
              <span className="bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">
                Resource Library
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Navigate through our comprehensive collection of compliance resources organized by category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
              <p className="text-xl text-gray-600">Stay informed with the most recent compliance news</p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              View All Updates
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {newsUpdates.map((news, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {news.category}
                    </Badge>
                    {news.isNew && (
                      <Badge className="bg-green-500 text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        New
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-orange-500 transition-colors leading-tight">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{news.date}</span>
                    <Button size="sm" variant="ghost" className="group-hover:bg-orange-50">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}


    </div>
  )
}

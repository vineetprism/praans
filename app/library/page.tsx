import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Scale, FormInput, Bell, Calendar, Wallet, Clock, DollarSign, CreditCard, PiggyBank, BarChart3, TrendingUp, Download, ArrowRight, Star, Users, Shield, Zap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import React from "react"

const categories = [
  {
    title: "Acts",
    description: "Comprehensive collection of labor acts and regulations",
    icon: Scale,
    color: "bg-blue-500",
    href: "/acts"
  },
  {
    title: "Rules",
    description: "Detailed rules and implementation guidelines",
    icon: FileText,
    color: "bg-green-500",
    href: "/rules"
  },
  {
    title: "Forms",
    description: "Downloadable forms for compliance requirements",
    icon: FormInput,
    color: "bg-purple-500",
    href: "/forms"
  },
  {
    title: "Gazette Notifications",
    description: "Latest government notifications and circulars",
    icon: Bell,
    color: "bg-orange-500",
    href: "/gazette"
  },
  {
    title: "Holidays List",
    description: "Official holiday calendars by state",
    icon: Calendar,
    color: "bg-pink-500",
    href: "/holidays"
  },
  {
    title: "Labour Welfare Fund",
    description: "Welfare fund contributions and benefits",
    icon: Wallet,
    color: "bg-indigo-500",
    href: "/welfare-fund"
  },
  {
    title: "Leave & Working Hours",
    description: "Leave policies and working hour regulations",
    icon: Clock,
    color: "bg-teal-500",
    href: "/leave-working-hours"
  },
  {
    title: "Minimum Wages",
    description: "State-wise minimum wage rates and updates",
    icon: DollarSign,
    color: "bg-yellow-500",
    href: "/minimum-wages"
  },
  {
    title: "Professional Tax",
    description: "Professional tax rates and compliance",
    icon: CreditCard,
    color: "bg-red-500",
    href: "/professional-tax"
  },
  {
    title: "Provident Fund",
    description: "PF rates, forms, and regulations",
    icon: PiggyBank,
    color: "bg-cyan-500",
    href: "/provident-fund"
  },
  {
    title: "NFH Matrix",
    description: "National and Festival Holiday matrix",
    icon: BarChart3,
    color: "bg-violet-500",
    href: "/nfh-matrix"
  }
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

const CategoryCard = React.memo(({ category, index }) => (
  <Link key={index} href={category.href}>
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader className="pb-3">
        <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
          <category.icon className="w-6 h-6 text-white" loading="lazy" />
        </div>
        <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {category.description}
        </CardDescription>
      </CardContent>
    </Card>
  </Link>
))

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      {/* Header */}
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-orange-500/5" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/30" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-100 text-orange-700 hover:bg-orange-200">
              🚀 Simplifying Compliance for Modern Businesses
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
              Your Complete
              <span className="text-orange-500"> Compliance </span>
              Library
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access the most comprehensive collection of labor laws, minimum wages, forms, and compliance documents. 
              Stay updated with real-time notifications and expert insights.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search acts, rules, forms, wages..." 
                  className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-xl shadow-lg"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600">
                  Search
                </Button>
              </div>
              
              {/* Trending Keywords */}
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-sm text-gray-500">Trending:</span>
                {trendingSearches.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-orange-100 transition-colors">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
                Explore Library
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through our comprehensive collection of compliance resources organized by category
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-20 bg-white">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Simplify Your Compliance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of businesses who trust our platform for their compliance needs. 
            Get started today with a free account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}









// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   FileText,
//   Scale,
//   FormInput,
//   Bell,
//   Calendar,
//   Wallet,
//   DollarSign,
//   CreditCard,
//   Zap,
//   Cpu,
//   Gavel,
//   ClipboardCheck,
//   Landmark,
//   Briefcase,
//   ClipboardList,
//   Mail,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import React from "react"

// export const metadata = {
//   title: "Praans Consultech - Simplifying Labour Law Compliance",
//   description:
//     "All-in-One Platform for Compliance Software, Legal Advisory, PAN India Registrations, Litigation Support, Outsourcing, and Audits.",
//   keywords:
//     "labour law compliance, legal advisory, pan india registrations, litigation support, compliance outsourcing, compliance software",
//   openGraph: {
//     title: "Praans Consultech - Simplifying Labour Law Compliance",
//     description: "All-in-One Platform for Compliance Software, Legal Advisory, PAN India Registrations, & More.",
//     type: "website",
//   },
// }

// const keyOfferings = [
//   {
//     icon: Cpu,
//     title: "Smart Compliance Software",
//     description: "Automated, error-free labour law management.",
//   },
//   {
//     icon: Gavel,
//     title: "Legal Advisory",
//     description: "Get expert help for complex labour laws.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "PAN India Registrations",
//     description: "Fast licences, hassle-free filings.",
//   },
//   {
//     icon: Landmark,
//     title: "Litigation Support",
//     description: "Dispute resolution & legal defence.",
//   },
//   {
//     icon: Briefcase,
//     title: "Compliance Outsourcing",
//     description: "We manage it all, so you don’t have to.",
//   },
//   {
//     icon: ClipboardList,
//     title: "Audit & Inspection",
//     description: "Full support for audits & inspections.",
//   },
// ]

// const newsUpdates = [
//   { title: "New Minimum Wage Rates Announced for Maharashtra" },
//   { title: "Updated PF Contribution Rates Effective February 2025" },
//   { title: "Professional Tax Amendment for Karnataka" },
//   { title: "Holiday List 2025 - Central Government Released" },
//   { title: "ESI Filing Deadline Extended for Q4" },
//   { title: "Changes in Maternity Benefit Act - A Quick Guide" },
// ]

// const categories = [
//   {
//     title: "Acts",
//     description: "Comprehensive collection of labor acts and regulations",
//     icon: Scale,
//     color: "bg-blue-500",
//     href: "/acts",
//   },
//   {
//     title: "Rules",
//     description: "Detailed rules and implementation guidelines",
//     icon: FileText,
//     color: "bg-green-500",
//     href: "/rules",
//   },
//   {
//     title: "Forms",
//     description: "Downloadable forms for compliance requirements",
//     icon: FormInput,
//     color: "bg-purple-500",
//     href: "/forms",
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
//     description: "Official holiday calendars by state",
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
//     description: "State-wise minimum wage rates",
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
// ]

// const CategoryCard = React.memo(({ category, index }) => (
//   <Link key={index} href={category.href}>
//     <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
//       <CardHeader className="pb-3">
//         <div
//           className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
//         >
//           <category.icon className="w-6 h-6 text-white" loading="lazy" />
//         </div>
//         <CardTitle className="text-lg group-hover:text-orange-500 transition-colors">{category.title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <CardDescription className="text-gray-600 leading-relaxed">{category.description}</CardDescription>
//       </CardContent>
//     </Card>
//   </Link>
// ))

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <Link href="/">
//                 <Image
//                   src="/logo.png"
//                   alt="Praans Consultech"
//                   width={180}
//                   height={40}
//                   className="h-10 w-auto"
//                   priority
//                 />
//               </Link>
//             </div>
//             <nav className="hidden md:flex items-center space-x-6">
//               <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors">
//                 Services
//               </Link>
//               <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">
//                 Resources
//               </Link>
//               <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">
//                 About Us
//               </Link>
//               <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">
//                 Contact
//               </Link>
//               <Link href="/library" className="text-gray-600 hover:text-orange-500 transition-colors">
//                 Library
//               </Link>
//             </nav>
//             <div className="flex items-center space-x-3">
//               <Button variant="ghost" size="sm">
//                 Sign In
//               </Button>
//               <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       {/* <section className="relative py-20 overflow-hidden">
//         <div className="absolute inset-0 bg-orange-500/5" />
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-blue-50/30" />
//         <div className="container mx-auto px-4 relative">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-800">
//               Simplifying <span className="text-orange-500">Labour Law Compliance</span> for Your Business
//             </h1>
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
//               All-in-One Platform: Software, Legal Advisory, Registrations & More - PAN India
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-4">
//                 👉 Get a Free Demo
//               </Button>
//               <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 bg-transparent">
//                 👉 Talk to Our Compliance Experts
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section> */}
//   <section className="relative min-h-screen flex items-center justify-center py-24 px-4 bg-gradient-to-br from-orange-50 via-white to-blue-50">
//   {/* Overlays */}
//   <div className="absolute inset-0 bg-orange-100/10 -z-10" />
//   <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20 -z-20" />

//   {/* Container */}
//   <div className="max-w-6xl mx-auto text-center space-y-8">
//     {/* <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight animate-fade-up">
//       Simplifying <span className="text-orange-500">Labour Law Compliance</span> <br />
//       <span className="text-slate-800">for Your Business</span>
//     </h1> */}
// <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] animate-fade-up">
//         Simplifying{" "}
//         <span className="relative">
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
//             Labour Law
//           </span>
//           <div className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm" />
//         </span>
//         <br />
//         <span className="text-slate-800">
//           Compliance
//         </span>
//         <br />
//         <span className="text-3xl md:text-4xl lg:text-5xl text-slate-600 font-bold">
//           for Your Business
//         </span>
//       </h1>
//     <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto animate-fade-up delay-100">
//       All-in-One Platform: Software, Legal Advisory, Registrations & More – PAN India
//     </p>

//     {/* CTA Buttons */}
//     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-fade-up delay-200">
//       <Button
//         size="lg"
//         className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-6 py-4 shadow-lg transition-all duration-300"
//       >
//         👉 Get a Free Demo
//       </Button>

//       <Button
//         size="lg"
//         variant="outline"
//         className="text-orange-600 border-2 border-orange-500 hover:bg-orange-100 text-lg px-6 py-4 transition-all duration-300"
//       >
//         👉 Talk to Our Compliance Experts
//       </Button>
//     </div>
//   </div>
// </section>




//       {/* Latest Updates Marquee */}
//       <section className="py-4 bg-slate-800 text-white overflow-hidden">
//         <div className="marquee-container relative flex">
//           <div className="marquee flex-shrink-0 flex items-center gap-8">
//             <span className="font-bold text-orange-400 text-lg flex-shrink-0">Latest Updates:</span>
//             {[...newsUpdates, ...newsUpdates].map((news, index) => (
//               <div key={index} className="flex items-center gap-2 flex-shrink-0">
//                 <Zap className="w-4 h-4 text-orange-400" />
//                 <span className="whitespace-nowrap">{news.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Key Offerings */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Single Platform for All Labour Law Compliances</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From automated software to expert legal support, we've got you covered.
//             </p>
//           </div>
//           {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {keyOfferings.map((offering, index) => (
//               <div key={index} className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
//                   <offering.icon className="w-6 h-6" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
//                   <p className="text-gray-600">{offering.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div> */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//      {keyOfferings.map((offering, index) => (
//     <div
//       key={index}
//       className="flex items-start gap-4 p-6 rounded-xl shadow-md border-2 border-orange-200 bg-white hover:shadow-lg transition-all duration-300"
//     >
//       <div className="flex-shrink-0 w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center shadow-inner">
//         <offering.icon className="w-6 h-6" />
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold mb-1 text-gray-900">{offering.title}</h3>
//         <p className="text-gray-600 text-sm">{offering.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//       </section>

//       {/* Category Grid */}
//       <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4">Explore Our Resource Library</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Navigate through our comprehensive collection of compliance resources organized by category.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
//             {categories.map((category, index) => (
//               <CategoryCard key={index} category={category} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-slate-800 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ensure Compliance. Avoid Penalties. Get Started Today!</h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
//             Join thousands of businesses who trust our platform for their compliance needs. Schedule a demo or talk to
//             our experts now.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 text-lg px-8 py-4">
//               👉 Get a Free Demo
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-slate-800 text-lg px-8 py-4 bg-transparent"
//             >
//               👉 Talk to Our Compliance Experts
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-4 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Link href="/">
//                   <Image src="/logo.png" alt="Praans Consultech" width={160} height={35} className="h-8 w-auto" />
//                 </Link>
//               </div>
//               <p className="text-gray-400 leading-relaxed">
//                 Your trusted partner for compliance and labor law resources.
//               </p>
//               <a
//                 href="mailto:info@praansconsultech.com"
//                 className="mt-4 inline-flex items-center gap-2 text-orange-400 hover:text-orange-300"
//               >
//                 <Mail className="w-4 h-4" />
//                 info@praansconsultech.com
//               </a>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Quick Links</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <Link href="/services" className="hover:text-white transition-colors">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/acts" className="hover:text-white transition-colors">
//                     Resources
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about" className="hover:text-white transition-colors">
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/contact" className="hover:text-white transition-colors">
//                     Contact Us
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Legal</h3>
//               <ul className="space-y-2 text-gray-400">
//                 <li>
//                   <Link href="/privacy-policy" className="hover:text-white transition-colors">
//                     Privacy Policy
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
//                     Terms and Conditions
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/disclaimer" className="hover:text-white transition-colors">
//                     Disclaimer
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-4">Stay Updated</h3>
//               <p className="text-gray-400 mb-4">Get the latest compliance updates</p>
//               <div className="flex gap-2">
//                 <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
//                 <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
//               </div>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p className="font-semibold text-lg text-white mb-2">Single Platform for All Labour Law Compliances</p>
//             <p>&copy; 2025 Praans Consultech. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }



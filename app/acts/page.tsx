
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, RotateCcw, Download, Eye, Calendar, FileText, ChevronRight, Home, Building2, Scale, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
import PopularSearch from "../PopularSearch/PopularSearch"

const acts = [
  {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    state: "Central",
    category: "Industrial Safety",
    description: "An Act to consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave.",
    lastUpdated: "2024-12-15",
    year: "1948",
    sections: 118,
    isPopular: true
  },
  {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-act-1970",
    state: "Central",
    category: "Contract Labour",
    description: "An Act to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
    lastUpdated: "2024-11-28",
    year: "1970",
    sections: 35,
    isPopular: true
  },
  {
    id: 3,
    title: "Maharashtra Shops and Establishments Act, 2017",
    slug: "maharashtra-shops-establishments-act-2017",
    state: "Maharashtra",
    category: "Shops & Establishments",
    description: "An Act to consolidate and amend the law relating to the regulation of conditions of work and employment in shops and establishments.",
    lastUpdated: "2024-10-22",
    year: "2017",
    sections: 142,
    isPopular: false
  },
  {
    id: 4,
    title: "Karnataka Labour Welfare Fund Act, 1965",
    slug: "karnataka-labour-welfare-fund-act-1965",
    state: "Karnataka",
    category: "Welfare Fund",
    description: "An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in the State of Karnataka.",
    lastUpdated: "2024-09-18",
    year: "1965",
    sections: 28,
    isPopular: false
  },
  {
    id: 5,
    title: "The Payment of Wages Act, 1936",
    slug: "payment-of-wages-act-1936",
    state: "Central",
    category: "Wages & Payment",
    description: "An Act to regulate the payment of wages to certain classes of persons employed in industry and to provide for deductions from wages.",
    lastUpdated: "2024-12-01",
    year: "1936",
    sections: 26,
    isPopular: true
  },
  {
    id: 6,
    title: "Tamil Nadu Shops and Establishments Act, 1947",
    slug: "tamil-nadu-shops-establishments-act-1947",
    state: "Tamil Nadu",
    category: "Shops & Establishments",
    description: "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
    lastUpdated: "2024-11-15",
    year: "1947",
    sections: 89,
    isPopular: false
  }
]

const categories = ["All Categories","Industrial Safety","Contract Labour","Shops & Establishments","Welfare Fund","Wages & Payment","Employment Terms"]
const states = ["All States","Central","Maharashtra","Karnataka","Tamil Nadu","Gujarat","Delhi","West Bengal"]

export default function ActsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* TOP: Horizontal Filters */}
  <Card className="mb-8 top-16 z-30 border-0 shadow-md rounded-2xl">
  <CardContent className="p-4">
    <div className="flex flex-wrap items-center gap-3">
      {/* Pill title */}
      <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </span>

      {/* Search */}
      <div className="relative flex-1 min-w-[220px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search by name..."
          className="pl-10 rounded-full bg-white border-slate-200 focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
        />
      </div>
      {/* State */}
      <Select>
        <SelectTrigger className="w-full sm:w-48 rounded-full bg-slate-50 border-slate-200 focus:ring-2 focus:ring-orange-500/30">
          <SelectValue placeholder="Select state" />
        </SelectTrigger>
        <SelectContent>
          {states.map((state) => (
            <SelectItem key={state} value={state.toLowerCase()}>
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Category */}
      <Select>
        <SelectTrigger className="w-full sm:w-56 rounded-full bg-slate-50 border-slate-200 focus:ring-2 focus:ring-orange-500/30">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category.toLowerCase()}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Sort */}
      <Select>
        <SelectTrigger className="w-full sm:w-48 rounded-full bg-slate-50 border-slate-200 focus:ring-2 focus:ring-orange-500/30">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="relevance">Sort by Relevance</SelectItem>
          <SelectItem value="name">Name (A–Z)</SelectItem>
          <SelectItem value="year">Year</SelectItem>
        </SelectContent>
      </Select>

      {/* Actions */}
      <div className="ml-auto flex w-full sm:w-auto gap-2">
        <Button
          className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md"
        >
          Apply
        </Button>
      </div>
    </div>
  </CardContent>
</Card>

        {/* LEFT: Quick Access | RIGHT: Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Access - LEFT column on desktop */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <PopularSearch title="" className="mt-0" />
              </CardContent>
            </Card>
          </aside>

          {/* Main Content - RIGHT side on desktop */}
          <main className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Labour Acts & Regulations</h1>
                  <p className="text-gray-600 text-lg">
                    Comprehensive collection of central and state labour acts with latest amendments and updates
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {acts.length} Acts Available
                  </Badge>
                </div>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are Labour Acts?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Labour Acts are comprehensive legal frameworks that govern employment relationships, workplace safety,
                        wages, working conditions, and worker rights. They provide the foundation for compliance and dispute resolution
                        in various industries and establishments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Acts Grid */}
            <div className="grid gap-6">
              {acts.map((act) => (
                <Card key={act.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant={act.state === "Central" ? "default" : "secondary"}
                            className={act.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
                          >
                            <Building2 className="w-3 h-3 mr-1" />
                            {act.state}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {act.category}
                          </Badge>
                          {act.isPopular && <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>}
                        </div>
                        <Link href={`/acts/${act.slug}`}>
                          <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2 cursor-pointer">
                            {act.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-gray-600 leading-relaxed mb-4">{act.description}</CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Year: {act.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{act.sections} Sections</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                          asChild
                        >
                          <Link href={`/acts/${act.slug}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            Read More
                          </Link>
                        </Button>
                        <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Acts
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}





// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import {
//   Search,
//   Download,
//   FileText,
//   BookOpen,
//   Scale,
//   Building2,
//   Calendar,
//   MapPin,
//   Eye,
//   Star,
//   Clock,
//   Users,
//   AlertCircle,
//   Paperclip,
//   FileCheck,
//   FileX,
//   FilePlus,
//   SlidersHorizontal,
// } from "lucide-react"

// // Acts Data
// const acts = [
//   {
//     id: 1,
//     title: "The Factories Act, 1948",
//     slug: "factories-act-1948",
//     state: "Central",
//     category: "Industrial Safety",
//     description:
//       "An Act to consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave.",
//     lastUpdated: "2024-12-15",
//     year: "1948",
//     sections: 118,
//     isPopular: true,
//   },
//   {
//     id: 2,
//     title: "The Contract Labour (Regulation and Abolition) Act, 1970",
//     slug: "contract-labour-act-1970",
//     state: "Central",
//     category: "Contract Labour",
//     description:
//       "An Act to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
//     lastUpdated: "2024-11-28",
//     year: "1970",
//     sections: 35,
//     isPopular: true,
//   },
//   {
//     id: 3,
//     title: "Maharashtra Shops and Establishments Act, 2017",
//     slug: "maharashtra-shops-establishments-act-2017",
//     state: "Maharashtra",
//     category: "Shops & Establishments",
//     description:
//       "An Act to consolidate and amend the law relating to the regulation of conditions of work and employment in shops and establishments.",
//     lastUpdated: "2024-10-22",
//     year: "2017",
//     sections: 142,
//     isPopular: false,
//   },
//   {
//     id: 4,
//     title: "The Payment of Wages Act, 1936",
//     slug: "payment-of-wages-act-1936",
//     state: "Central",
//     category: "Wages & Payment",
//     description:
//       "An Act to regulate the payment of wages to certain classes of persons employed in industry and to provide for deductions from wages.",
//     lastUpdated: "2024-12-01",
//     year: "1936",
//     sections: 26,
//     isPopular: true,
//   },
// ]

// // Forms Data
// const forms = [
//   {
//     id: 1,
//     title: "Form I - Notice of Commencement of Work",
//     formNumber: "Form I",
//     relatedAct: "The Factories Act, 1948",
//     state: "Central",
//     category: "Factory Registration",
//     description: "Notice to be given before commencing work in a factory",
//     lastUpdated: "2024-12-10",
//     fileSize: "245 KB",
//     format: "PDF",
//     isPopular: true,
//     difficulty: "Easy",
//     estimatedTime: "15 minutes",
//     slug: "form-i-notice-commencement-work",
//   },
//   {
//     id: 2,
//     title: "Form II - License to Work a Factory",
//     formNumber: "Form II",
//     relatedAct: "The Factories Act, 1948",
//     state: "Central",
//     category: "Factory Registration",
//     description: "Application for license to work a factory",
//     lastUpdated: "2024-12-08",
//     fileSize: "312 KB",
//     format: "PDF",
//     isPopular: true,
//     difficulty: "Medium",
//     estimatedTime: "30 minutes",
//     slug: "form-ii-license-work-factory",
//   },
//   {
//     id: 3,
//     title: "Form XIII - Register of Adult Workers",
//     formNumber: "Form XIII",
//     relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
//     state: "Central",
//     category: "Contract Labour",
//     description: "Register to be maintained for adult contract workers",
//     lastUpdated: "2024-11-25",
//     fileSize: "189 KB",
//     format: "Excel",
//     isPopular: false,
//     difficulty: "Easy",
//     estimatedTime: "10 minutes",
//     slug: "form-xiii-register-adult-workers",
//   },
//   {
//     id: 4,
//     title: "Form VII - Wage Register",
//     formNumber: "Form VII",
//     relatedAct: "The Payment of Wages Act, 1936",
//     state: "Central",
//     category: "Wages",
//     description: "Register of wages to be maintained by employers",
//     lastUpdated: "2024-12-12",
//     fileSize: "203 KB",
//     format: "Excel",
//     isPopular: true,
//     difficulty: "Easy",
//     estimatedTime: "20 minutes",
//     slug: "form-vii-wage-register",
//   },
// ]

// // Rules Data
// const rules = [
//   {
//     id: 1,
//     title: "The Payment of Wages (Mines) Rules, 1956",
//     state: "Central",
//     relatedAct: "The Payment of Wages Act, 1936",
//     slug: "payment-of-wages-mines-rules-1956",
//     category: "Wages & Payment",
//     description: "Rules for implementation of wage payment provisions in mining industry",
//   },
//   {
//     id: 2,
//     title: "The Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     state: "Central",
//     relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
//     slug: "contract-labour-central-rules-1971",
//     category: "Contract Labour",
//     description: "Central rules for regulation and abolition of contract labour",
//   },
//   {
//     id: 3,
//     title: "Maharashtra Factories Rules, 1963",
//     state: "Maharashtra",
//     relatedAct: "The Factories Act, 1948",
//     slug: "maharashtra-factories-rules-1963",
//     category: "Industrial Safety",
//     description: "State-specific rules for factory operations and safety in Maharashtra",
//   },
//   {
//     id: 4,
//     title: "The Payment of Gratuity (Central) Rules, 1972",
//     state: "Central",
//     relatedAct: "The Payment of Gratuity Act, 1972",
//     slug: "payment-of-gratuity-central-rules-1972",
//     category: "Gratuity",
//     description: "Rules for implementation of gratuity payment provisions",
//   },
// ]

// const categories = [
//   "All Categories",
//   "Industrial Safety",
//   "Contract Labour",
//   "Shops & Establishments",
//   "Wages & Payment",
//   "Factory Registration",
//   "Gratuity",
//   "ESI",
//   "Provident Fund",
// ]

// const states = ["All States", "Central", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Delhi", "West Bengal"]

// const popularSearches = [
//   "Factory license requirements",
//   "PF nomination forms",
//   "ESI registration process",
//   "Wage calculation rules",
//   "Contract labour compliance",
//   "Gratuity payment guidelines",
// ]

// const getDifficultyColor = (difficulty: string) => {
//   switch (difficulty) {
//     case "Easy":
//       return "bg-green-100 text-green-700"
//     case "Medium":
//       return "bg-yellow-100 text-yellow-700"
//     case "Hard":
//       return "bg-red-100 text-red-700"
//     default:
//       return "bg-gray-100 text-gray-700"
//   }
// }

// const getFormatIcon = (format: string) => {
//   switch (format) {
//     case "PDF":
//       return <FileText className="w-4 h-4 text-red-500" />
//     case "Excel":
//       return <FileCheck className="w-4 h-4 text-green-500" />
//     case "Word":
//       return <FileX className="w-4 h-4 text-blue-500" />
//     default:
//       return <FilePlus className="w-4 h-4 text-gray-500" />
//   }
// }

// export default function UnifiedCompliancePage() {
//   const [activeTab, setActiveTab] = useState("acts")

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-slate-800 mb-3">Labour Compliance Hub</h1>
//           <p className="text-gray-600 text-lg leading-relaxed">
//             Your comprehensive resource for labour acts, compliance forms, and implementation rules - all interconnected
//             for seamless compliance management
//           </p>
//         </div>

//         {/* Unified Filter Bar */}
//         <Card className="mb-8 border-0 shadow-md rounded-2xl">
//           <CardContent className="p-4">
//             <div className="flex flex-wrap items-center gap-3">
//               <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
//                 <SlidersHorizontal className="w-4 h-4" />
//                 Filters
//               </span>

//               <div className="relative flex-1 min-w-[220px]">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <Input
//                   placeholder="Search acts, forms, rules..."
//                   className="pl-10 rounded-full bg-white border-slate-200 focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
//                 />
//               </div>

//               <Select>
//                 <SelectTrigger className="w-full sm:w-48 rounded-full bg-slate-50 border-slate-200">
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {states.map((state) => (
//                     <SelectItem key={state} value={state.toLowerCase()}>
//                       {state}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Select>
//                 <SelectTrigger className="w-full sm:w-56 rounded-full bg-slate-50 border-slate-200">
//                   <SelectValue placeholder="Select category" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {categories.map((category) => (
//                     <SelectItem key={category} value={category.toLowerCase()}>
//                       {category}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-md">
//                 Apply
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Sidebar - Quick Access */}
//           <aside className="lg:col-span-1">
//             <Card className="sticky top-24">
//               <CardHeader>
//                 <CardTitle>Quick Access</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div>
//                   <h4 className="font-medium mb-3">Popular Searches</h4>
//                   <div className="space-y-2">
//                     {popularSearches.map((search, index) => (
//                       <Button
//                         key={index}
//                         variant="ghost"
//                         size="sm"
//                         className="w-full justify-start text-left h-auto p-2 text-sm hover:bg-orange-50 hover:text-orange-600"
//                       >
//                         {search}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="pt-4 border-t">
//                   <h4 className="font-medium mb-3">Quick Stats</h4>
//                   <div className="space-y-2 text-sm text-gray-600">
//                     <div className="flex justify-between">
//                       <span>Total Acts:</span>
//                       <Badge variant="secondary">{acts.length}</Badge>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Total Forms:</span>
//                       <Badge variant="secondary">{forms.length}</Badge>
//                     </div>
//                     <div className="flex justify-between">
//                       <span>Total Rules:</span>
//                       <Badge variant="secondary">{rules.length}</Badge>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </aside>

//           {/* Main Content */}
//           <main className="lg:col-span-3">
//             <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//               <TabsList className="grid w-full grid-cols-3 mb-8">
//                 <TabsTrigger value="acts" className="flex items-center gap-2">
//                   <Scale className="w-4 h-4" />
//                   Acts ({acts.length})
//                 </TabsTrigger>
//                 <TabsTrigger value="forms" className="flex items-center gap-2">
//                   <FileText className="w-4 h-4" />
//                   Forms ({forms.length})
//                 </TabsTrigger>
//                 <TabsTrigger value="rules" className="flex items-center gap-2">
//                   <BookOpen className="w-4 h-4" />
//                   Rules ({rules.length})
//                 </TabsTrigger>
//               </TabsList>

//               {/* Acts Tab */}
//               <TabsContent value="acts" className="space-y-6">
//                 <Card className="bg-blue-50 border-blue-200">
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-3">
//                       <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-semibold text-blue-900 mb-1">What are Labour Acts?</h3>
//                         <p className="text-blue-800 text-sm leading-relaxed">
//                           Labour Acts are comprehensive legal frameworks that govern employment relationships, workplace
//                           safety, wages, working conditions, and worker rights. They provide the foundation for
//                           compliance and dispute resolution.
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <div className="grid gap-6">
//                   {acts.map((act) => (
//                     <Card
//                       key={act.id}
//                       className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
//                     >
//                       <CardHeader className="pb-4">
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-3 mb-3">
//                               <Badge
//                                 variant={act.state === "Central" ? "default" : "secondary"}
//                                 className={act.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
//                               >
//                                 <Building2 className="w-3 h-3 mr-1" />
//                                 {act.state}
//                               </Badge>
//                               <Badge variant="outline" className="text-xs">
//                                 {act.category}
//                               </Badge>
//                               {act.isPopular && (
//                                 <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>
//                               )}
//                             </div>
//                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
//                               {act.title}
//                             </CardTitle>
//                             <CardDescription className="text-gray-600 leading-relaxed mb-4">
//                               {act.description}
//                             </CardDescription>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
//                           <div className="flex items-center gap-1">
//                             <Calendar className="w-4 h-4" />
//                             <span>Year: {act.year}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <FileText className="w-4 h-4" />
//                             <span>{act.sections} Sections</span>
//                           </div>
//                         </div>
//                       </CardHeader>

//                       <CardContent className="pt-0">
//                         <div className="flex items-center justify-between">
//                           <div className="flex gap-3">
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
//                             >
//                               <Eye className="w-4 h-4 mr-2" />
//                               Read More
//                             </Button>
//                             <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
//                               <Download className="w-4 h-4 mr-2" />
//                               Download
//                             </Button>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               {/* Forms Tab */}
//               <TabsContent value="forms" className="space-y-6">
//                 <Card className="bg-blue-50 border-blue-200">
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-3">
//                       <Paperclip className="w-5 h-5 text-blue-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-semibold text-blue-900 mb-1">About Compliance Forms</h3>
//                         <p className="text-blue-800 text-sm leading-relaxed">
//                           These forms are official documents required for various compliance activities under different
//                           labour acts. Each form comes with instructions and is regularly updated to reflect the latest
//                           regulatory changes.
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <div className="grid gap-6">
//                   {forms.map((form) => (
//                     <Card
//                       key={form.id}
//                       className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
//                     >
//                       <CardHeader className="pb-4">
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <div className="flex items-center gap-3 mb-3">
//                               <Badge
//                                 variant={form.state === "Central" ? "default" : "secondary"}
//                                 className={form.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
//                               >
//                                 <Building2 className="w-3 h-3 mr-1" />
//                                 {form.state}
//                               </Badge>
//                               <Badge variant="outline" className="text-xs">
//                                 {form.category}
//                               </Badge>
//                               <Badge className={`text-xs ${getDifficultyColor(form.difficulty)}`}>
//                                 {form.difficulty}
//                               </Badge>
//                               {form.isPopular && (
//                                 <Badge className="bg-orange-100 text-orange-700 text-xs">
//                                   <Star className="w-3 h-3 mr-1" />
//                                   Popular
//                                 </Badge>
//                               )}
//                             </div>
//                             <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
//                               {form.title}
//                             </CardTitle>
//                             <CardDescription className="text-gray-600 leading-relaxed mb-4">
//                               {form.description}
//                             </CardDescription>
//                             <div className="text-sm text-gray-500 mb-2">
//                               <strong>Related Act:</strong> {form.relatedAct}
//                             </div>
//                           </div>
//                         </div>

//                         <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
//                           <div className="flex items-center gap-1">
//                             {getFormatIcon(form.format)}
//                             <span>{form.format}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Paperclip className="w-4 h-4" />
//                             <span>{form.fileSize}</span>
//                           </div>
//                           <div className="flex items-center gap-1">
//                             <Clock className="w-4 h-4" />
//                             <span>{form.estimatedTime}</span>
//                           </div>
//                         </div>
//                       </CardHeader>

//                       <CardContent className="pt-0">
//                         <div className="flex items-center justify-between">
//                           <div className="flex gap-3">
//                             <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
//                               <FileText className="w-4 h-4 mr-2" />
//                               Read More
//                             </Button>
//                             <Button variant="outline" size="sm">
//                               <Download className="w-4 h-4 mr-2" />
//                               Download
//                             </Button>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>

//               {/* Rules Tab */}
//               <TabsContent value="rules" className="space-y-6">
//                 <Card className="bg-blue-50 border-blue-200">
//                   <CardContent className="p-4">
//                     <div className="flex items-start gap-3">
//                       <BookOpen className="w-5 h-5 text-blue-600 mt-0.5" />
//                       <div>
//                         <h3 className="font-semibold text-blue-900 mb-1">About Implementation Rules</h3>
//                         <p className="text-blue-800 text-sm leading-relaxed">
//                           Rules are legislative pieces providing guidelines which define the procedures for performing
//                           and implementing the concerned Act. Rules are inherently secondary and complimentary to the
//                           concerned Acts.
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <div className="space-y-6">
//                   {rules.map((rule) => (
//                     <Card
//                       key={rule.id}
//                       className="transition-all duration-300 shadow-md hover:shadow-xl border-l-4 border-l-orange-500"
//                     >
//                       <CardContent className="p-6">
//                         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
//                           <div className="flex-1 mb-4 sm:mb-0">
//                             <div className="flex items-center gap-3 mb-3">
//                               <Badge variant="outline" className="font-medium">
//                                 <MapPin className="w-3 h-3 mr-1.5" />
//                                 {rule.state}
//                               </Badge>
//                               <Badge variant="outline" className="text-xs">
//                                 {rule.category}
//                               </Badge>
//                             </div>
//                             <h2 className="text-xl font-semibold text-slate-800 mb-2">{rule.title}</h2>
//                             <p className="text-gray-600 text-sm mb-2">{rule.description}</p>
//                             <p className="text-sm text-gray-500">
//                               <strong>Related Act:</strong> {rule.relatedAct}
//                             </p>
//                           </div>
//                           <div className="flex items-center gap-3 flex-shrink-0">
//                             <Button variant="outline">
//                               <BookOpen className="w-4 h-4 mr-2" />
//                               Read More
//                             </Button>
//                             <Button className="bg-orange-500 hover:bg-orange-600">
//                               <Download className="w-4 h-4 mr-2" />
//                               Download
//                             </Button>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>

//             {/* Load More */}
//             <div className="text-center mt-12">
//               <Button variant="outline" size="lg" className="px-8 bg-transparent">
//                 Load More Results
//               </Button>
//             </div>
//           </main>
//         </div>

//         {/* Help Section */}
//         <div className="mt-16">
//           <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-0">
//             <CardContent className="p-8">
//               <div className="text-center max-w-2xl mx-auto">
//                 <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Compliance Assistance?</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   Our compliance experts are here to help you navigate the complex relationships between acts, forms,
//                   and rules. Get personalized assistance for your specific compliance requirements.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button className="bg-orange-500 hover:bg-orange-600">
//                     <Users className="w-4 h-4 mr-2" />
//                     Contact Expert
//                   </Button>
//                   <Button variant="outline">
//                     <FileText className="w-4 h-4 mr-2" />
//                     Compliance Guide
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import {
//   Search,
//   Filter,
//   Download,
//   Eye,
//   Calendar,
//   MapPin,
//   FileText,
//   ChevronRight,
//   Home,
//   Building2,
//   Scale,
// } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { downloadFile, type DownloadItem } from "@/lib/download-utils"

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
//     title: "Karnataka Labour Welfare Fund Act, 1965",
//     slug: "karnataka-labour-welfare-fund-act-1965",
//     state: "Karnataka",
//     category: "Welfare Fund",
//     description:
//       "An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in the State of Karnataka.",
//     lastUpdated: "2024-09-18",
//     year: "1965",
//     sections: 28,
//     isPopular: false,
//   },
//   {
//     id: 5,
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
//   {
//     id: 6,
//     title: "Tamil Nadu Shops and Establishments Act, 1947",
//     slug: "tamil-nadu-shops-establishments-act-1947",
//     state: "Tamil Nadu",
//     category: "Shops & Establishments",
//     description:
//       "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
//     lastUpdated: "2024-11-15",
//     year: "1947",
//     sections: 89,
//     isPopular: false,
//   },
// ]

// const categories = [
//   "All Categories",
//   "Industrial Safety",
//   "Contract Labour",
//   "Shops & Establishments",
//   "Welfare Fund",
//   "Wages & Payment",
//   "Employment Terms",
// ]

// const states = ["All States", "Central", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Delhi", "West Bengal"]

// const popularSearches = [
//   "Factories Act 1948",
//   "Contract Labour Act",
//   "Payment of Wages",
//   "Shops Establishments",
//   "Minimum Wages Act",
//   "Provident Fund Act",
// ]

// export default function ActsPage() {
//   const handleActDownload = async (act: (typeof acts)[0]) => {
//     const downloadItem: DownloadItem = {
//       url: `/acts/downloads/${act.slug}.pdf`,
//       filename: `${act.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
//       format: "PDF",
//     }

//     await downloadFile(downloadItem)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">   
//       <div className="container mx-auto px-4 py-8">
//         {/* Breadcrumb
//         <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
//           <Home className="w-4 h-4" />
//           <Link href="/" className="hover:text-orange-500">
//             Home
//           </Link>
//           <ChevronRight className="w-4 h-4" />
//           <span className="text-orange-500 font-medium">Acts</span>
//         </nav> */}
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Sidebar Filters */}
//           <div className="lg:col-span-1">
//             <Card className="sticky top-24">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Filter className="w-5 h-5" />
//                   Filters
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 {/* Search */}
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">Search Acts</label>
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <Input placeholder="Search by name..." className="pl-10" />
//                   </div>
//                 </div>
//                 {/* State Filter */}
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">State/Central</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select state" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {states.map((state) => (
//                         <SelectItem key={state} value={state.toLowerCase()}>
//                           {state}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//                 {/* Category Filter */}
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">Category</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select category" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {categories.map((category) => (
//                         <SelectItem key={category} value={category.toLowerCase()}>
//                           {category}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <Separator />

//                 {/* Popular Searches */}
//                 <div>
//                   <label className="text-sm font-medium mb-3 block">Popular Searches</label>
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
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">Labour Acts & Regulations</h1>
//                   <p className="text-gray-600 text-lg">
//                     Comprehensive collection of central and state labour acts with latest amendments and updates
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Badge variant="secondary" className="px-3 py-1">
//                     {acts.length} Acts Available
//                   </Badge>
//                 </div>
//               </div>

//               {/* Info Card */}
//               <Card className="bg-blue-50 border-blue-200">
//                 <CardContent className="p-4">
//                   <div className="flex items-start gap-3">
//                     <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
//                     <div>
//                       <h3 className="font-semibold text-blue-900 mb-1">What are Labour Acts?</h3>
//                       <p className="text-blue-800 text-sm leading-relaxed">
//                         Labour Acts are comprehensive legal frameworks that govern employment relationships, workplace
//                         safety, wages, working conditions, and worker rights. They provide the foundation for compliance
//                         and dispute resolution in various industries and establishments.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Sort & View Options */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-4">
//                 <Select>
//                   <SelectTrigger className="w-48">
//                     <SelectValue placeholder="Sort by relevance" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="relevance">Sort by Relevance</SelectItem>
//                     <SelectItem value="date">Latest Updated</SelectItem>
//                     <SelectItem value="name">Name (A-Z)</SelectItem>
//                     <SelectItem value="year">Year</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="text-sm text-gray-600">Showing {acts.length} results</div>
//             </div>

//             {/* Acts Grid */}
//             <div className="grid gap-6">
//               {acts.map((act) => (
//                 <Card
//                   key={act.id}
//                   className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
//                 >
//                   <CardHeader className="pb-4">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <Badge
//                             variant={act.state === "Central" ? "default" : "secondary"}
//                             className={act.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
//                           >
//                             <Building2 className="w-3 h-3 mr-1" />
//                             {act.state}
//                           </Badge>
//                           <Badge variant="outline" className="text-xs">
//                             {act.category}
//                           </Badge>
//                           {act.isPopular && <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>}
//                         </div>
//                         <Link href={`/acts/${act.slug}`}>
//                           <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2 cursor-pointer">
//                             {act.title}
//                           </CardTitle>
//                         </Link>
//                         <CardDescription className="text-gray-600 leading-relaxed mb-4">
//                           {act.description}
//                         </CardDescription>
//                       </div>
//                     </div>

//                     {/* Act Details */}
//                     <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>Year: {act.year}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <FileText className="w-4 h-4" />
//                         <span>{act.sections} Sections</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         <span>Updated: {new Date(act.lastUpdated).toLocaleDateString()}</span>
//                       </div>
//                     </div>
//                   </CardHeader>

//                   <CardContent className="pt-0">
//                     <div className="flex items-center justify-between">
//                       <div className="flex gap-3">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
//                           asChild
//                         >
//                           <Link href={`/acts/${act.slug}`}>
//                             <Eye className="w-4 h-4 mr-2" />
//                             Read More
//                           </Link>
//                         </Button>
//                         <Button
//                           size="sm"
//                           className="bg-orange-500 hover:bg-orange-600"
//                           onClick={() => handleActDownload(act)}
//                         >
//                           <Download className="w-4 h-4 mr-2" />
//                           Download
//                         </Button>
//                       </div>
//                       <div className="text-xs text-gray-500">
//                         Last updated: {new Date(act.lastUpdated).toLocaleDateString()}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Load More */}
//             <div className="text-center mt-12">
//               <Button variant="outline" size="lg" className="px-8 bg-transparent">
//                 Load More Acts
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  MapPin,
  FileText,
  ChevronRight,
  Home,
  Building2,
  Scale,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"
// import PopularSearchBoxes from "../PopularSearchBoxes/PopularSearchBoxes"
import PopularSearch from "../PopularSearch/PopularSearch"

const acts = [
  {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    state: "Central",
    category: "Industrial Safety",
    description:
      "An Act to consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave.",
    lastUpdated: "2024-12-15",
    year: "1948",
    sections: 118,
    isPopular: true,
  },
  {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-act-1970",
    state: "Central",
    category: "Contract Labour",
    description:
      "An Act to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
    lastUpdated: "2024-11-28",
    year: "1970",
    sections: 35,
    isPopular: true,
  },
  {
    id: 3,
    title: "Maharashtra Shops and Establishments Act, 2017",
    slug: "maharashtra-shops-establishments-act-2017",
    state: "Maharashtra",
    category: "Shops & Establishments",
    description:
      "An Act to consolidate and amend the law relating to the regulation of conditions of work and employment in shops and establishments.",
    lastUpdated: "2024-10-22",
    year: "2017",
    sections: 142,
    isPopular: false,
  },
  {
    id: 4,
    title: "Karnataka Labour Welfare Fund Act, 1965",
    slug: "karnataka-labour-welfare-fund-act-1965",
    state: "Karnataka",
    category: "Welfare Fund",
    description:
      "An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in the State of Karnataka.",
    lastUpdated: "2024-09-18",
    year: "1965",
    sections: 28,
    isPopular: false,
  },
  {
    id: 5,
    title: "The Payment of Wages Act, 1936",
    slug: "payment-of-wages-act-1936",
    state: "Central",
    category: "Wages & Payment",
    description:
      "An Act to regulate the payment of wages to certain classes of persons employed in industry and to provide for deductions from wages.",
    lastUpdated: "2024-12-01",
    year: "1936",
    sections: 26,
    isPopular: true,
  },
  {
    id: 6,
    title: "Tamil Nadu Shops and Establishments Act, 1947",
    slug: "tamil-nadu-shops-establishments-act-1947",
    state: "Tamil Nadu",
    category: "Shops & Establishments",
    description:
      "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
    lastUpdated: "2024-11-15",
    year: "1947",
    sections: 89,
    isPopular: false,
  },
]

const categories = [
  "All Categories",
  "Industrial Safety",
  "Contract Labour",
  "Shops & Establishments",
  "Welfare Fund",
  "Wages & Payment",
  "Employment Terms",
]

const states = ["All States", "Central", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Delhi", "West Bengal"]

const popularSearches = [
  "Factories Act 1948",
  "Contract Labour Act",
  "Payment of Wages",
  "Shops Establishments",
  "Minimum Wages Act",
  "Provident Fund Act",
]

export default function ActsPage() {
  const handleActDownload = async (act: (typeof acts)[0]) => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${act.slug}.pdf`,
      filename: `${act.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    }

    await downloadFile(downloadItem)
  }

  return (
    <div className="min-h-screen bg-gray-50">   
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
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

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are Labour Acts?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Labour Acts are comprehensive legal frameworks that govern employment relationships, workplace
                        safety, wages, working conditions, and worker rights. They provide the foundation for compliance
                        and dispute resolution in various industries and establishments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horizontal Filters */}
            <Card className="mb-6">
              <CardHeader className="">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Search */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search Acts</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input placeholder="Search by name..." className="pl-10" />
                    </div>
                  </div>
                  
                  {/* State Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">State/Central</label>
                    <Select>
                      <SelectTrigger>
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
                  </div>
                  
                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <Select>
                      <SelectTrigger>
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
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sort & View Options */}
            {/* <div className="flex items-center justify-between mb-6">
             
              <div className="text-sm text-gray-600">Showing {acts.length} results</div>
            </div> */}

            {/* Acts Grid */}
            <div className="grid gap-6">
              {acts.map((act) => (
                <Card
                  key={act.id}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* <div className="flex items-center gap-3 mb-3">
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
                        </div> */}
                        <Link href={`/acts/${act.slug}`}>
                          <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2 cursor-pointer">
                            {act.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-gray-600 leading-relaxed mb-4">
                          {act.description}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Act Details */}
                    {/* <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Year: {act.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{act.sections} Sections</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Updated: {new Date(act.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div> */}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
                          asChild
                        >
                          <Link href={`/acts/${act.slug}`}>
                            <Eye className="w-4 h-4 mr-2" />
                            Read More
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Load More Acts
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Popular Search */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PopularSearch className="mb-6" />
              
              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Searches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-left h-auto p-3 text-sm hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-200"
                      >
                        <Search className="w-3 h-3 mr-2 opacity-60" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
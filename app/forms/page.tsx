// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Separator } from "@/components/ui/separator"
// import { Search, Filter, Download, FileText, ChevronRight, Home, Building2, Calendar, MapPin, Eye, Star, Clock, Users, AlertCircle, Paperclip, FileCheck, FileX, FilePlus } from 'lucide-react'
// import Link from "next/link"
// import Image from "next/image"
// import PopularSearch from "../PopularSearch/PopularSearch"

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
//     slug: "form-i-notice-commencement-work"
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
//     slug: "form-ii-license-work-factory"
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
//     slug: "form-xiii-register-adult-workers"
//   },
//   {
//     id: 4,
//     title: "Form A - Application for Registration",
//     formNumber: "Form A",
//     relatedAct: "Maharashtra Shops and Establishments Act, 2017",
//     state: "Maharashtra",
//     category: "Shops & Establishments",
//     description: "Application for registration of shops and establishments",
//     lastUpdated: "2024-12-05",
//     fileSize: "278 KB",
//     format: "PDF",
//     isPopular: true,
//     difficulty: "Medium",
//     estimatedTime: "25 minutes",
//     slug: "form-a-application-registration"
//   },
//   {
//     id: 5,
//     title: "Form 5 - Annual Return",
//     formNumber: "Form 5",
//     relatedAct: "The Payment of Gratuity Act, 1972",
//     state: "Central",
//     category: "Gratuity",
//     description: "Annual return to be filed under the Payment of Gratuity Act",
//     lastUpdated: "2024-11-30",
//     fileSize: "156 KB",
//     format: "PDF",
//     isPopular: false,
//     difficulty: "Hard",
//     estimatedTime: "45 minutes",
//     slug: "form-5-annual-return"
//   },
//   {
//     id: 6,
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
//     slug: "form-vii-wage-register"
//   },
//   {
//     id: 7,
//     title: "Form 3A - Nomination for Provident Fund",
//     formNumber: "Form 3A",
//     relatedAct: "The Employees' Provident Funds Act, 1952",
//     state: "Central",
//     category: "Provident Fund",
//     description: "Nomination form for provident fund benefits",
//     lastUpdated: "2024-12-01",
//     fileSize: "134 KB",
//     format: "PDF",
//     isPopular: true,
//     difficulty: "Easy",
//     estimatedTime: "15 minutes",
//     slug: "form-3a-nomination-provident-fund"
//   },
//   {
//     id: 8,
//     title: "Form F - Application for ESI Registration",
//     formNumber: "Form F",
//     relatedAct: "The Employees' State Insurance Act, 1948",
//     state: "Central",
//     category: "ESI",
//     description: "Application for registration under ESI scheme",
//     lastUpdated: "2024-11-28",
//     fileSize: "267 KB",
//     format: "PDF",
//     isPopular: false,
//     difficulty: "Medium",
//     estimatedTime: "35 minutes",
//     slug: "form-f-application-esi-registration"
//   }
// ]

// const categories = [
//   "All Categories",
//   "Factory Registration",
//   "Contract Labour",
//   "Shops & Establishments",
//   "Gratuity",
//   "Wages",
//   "Provident Fund",
//   "ESI",
//   "Bonus",
//   "Maternity Benefits"
// ]

// const states = [
//   "All States",
//   "Central",
//   "Maharashtra",
//   "Karnataka",
//   "Tamil Nadu",
//   "Gujarat",
//   "Delhi",
//   "West Bengal"
// ]

// const formats = [
//   "All Formats",
//   "PDF",
//   "Excel",
//   "Word",
//   "Online Form"
// ]

// const difficulties = [
//   "All Levels",
//   "Easy",
//   "Medium",
//   "Hard"
// ]

// const popularSearches = [
//   "Factory license form",
//   "PF nomination form",
//   "ESI registration",
//   "Wage register format",
//   "Contract labour forms",
//   "Gratuity calculation form"
// ]

// const getDifficultyColor = (difficulty: string) => {
//   switch (difficulty) {
//     case 'Easy':
//       return 'bg-green-100 text-green-700'
//     case 'Medium':
//       return 'bg-yellow-100 text-yellow-700'
//     case 'Hard':
//       return 'bg-red-100 text-red-700'
//     default:
//       return 'bg-gray-100 text-gray-700'
//   }
// }

// const getFormatIcon = (format: string) => {
//   switch (format) {
//     case 'PDF':
//       return <FileText className="w-4 h-4 text-red-500" />
//     case 'Excel':
//       return <FileCheck className="w-4 h-4 text-green-500" />
//     case 'Word':
//       return <FileX className="w-4 h-4 text-blue-500" />
//     default:
//       return <FilePlus className="w-4 h-4 text-gray-500" />
//   }
// }

// export default function FormsPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="container mx-auto px-4 py-8">
//         {/* Breadcrumb
//         <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
//           <Home className="w-4 h-4" />
//           <Link href="/" className="hover:text-orange-500">Home</Link>
//           <ChevronRight className="w-4 h-4" />
//           <span className="text-orange-500 font-medium">Forms</span>
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
//                   <label className="text-sm font-medium mb-2 block">Search Forms</label>
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <Input placeholder="Search by name..." className="pl-10" />
//                   </div>
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
//                         <SelectItem key={category} value={category.toLowerCase().replace(/ /g, '-')}>
//                           {category}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
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
//                         <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
//                           {state}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {/* Format Filter */}
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">Format</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select format" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {formats.map((format) => (
//                         <SelectItem key={format} value={format.toLowerCase()}>
//                           {format}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {/* Difficulty Filter */}
//                 <div>
//                   <label className="text-sm font-medium mb-2 block">Difficulty</label>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select difficulty" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {difficulties.map((difficulty) => (
//                         <SelectItem key={difficulty} value={difficulty.toLowerCase()}>
//                           {difficulty}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <Separator />

//                 {/* Popular Searches */}
//                 <div>
//                   <PopularSearch className="space-y-2" />
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
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">Compliance Forms</h1>
//                   <p className="text-gray-600 text-lg">
//                     Download ready-to-use forms for various compliance requirements across different acts and regulations
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Badge variant="secondary" className="px-3 py-1">
//                     {forms.length} Forms Available
//                   </Badge>
//                 </div>
//               </div>

//               {/* Info Card */}
//               <Card className="bg-blue-50 border-blue-200">
//                 <CardContent className="p-4">
//                   <div className="flex items-start gap-3">
//                     <Paperclip className="w-5 h-5 text-blue-600 mt-0.5" />
//                     <div>
//                       <h3 className="font-semibold text-blue-900 mb-1">About Compliance Forms</h3>
//                       <p className="text-blue-800 text-sm leading-relaxed">
//                         These forms are official documents required for various compliance activities under different labour acts. 
//                         Each form comes with instructions and is regularly updated to reflect the latest regulatory changes.
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
//                     <SelectValue placeholder="Sort by popularity" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="popularity">Sort by Popularity</SelectItem>
//                     <SelectItem value="date">Latest Updated</SelectItem>
//                     <SelectItem value="name">Name (A-Z)</SelectItem>
//                     <SelectItem value="category">Category</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="text-sm text-gray-600">
//                 Showing {forms.length} results
//               </div>
//             </div>

//             {/* Forms Grid */}
//             <div className="grid gap-6">
//               {forms.map((form) => (
//                 <Card key={form.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-4">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         {/* <div className="flex items-center gap-3 mb-3">
//                           <Badge 
//                             variant={form.state === 'Central' ? 'default' : 'secondary'}
//                             className={form.state === 'Central' ? 'bg-slate-800' : 'bg-gray-100 text-gray-700'}
//                           >
//                             <Building2 className="w-3 h-3 mr-1" />
//                             {form.state}
//                           </Badge>
//                           <Badge variant="outline" className="text-xs">
//                             {form.category}
//                           </Badge>
//                           <Badge className={`text-xs ${getDifficultyColor(form.difficulty)}`}>
//                             {form.difficulty}
//                           </Badge>
//                           {form.isPopular && (
//                             <Badge className="bg-orange-100 text-orange-700 text-xs">
//                               <Star className="w-3 h-3 mr-1" />
//                               Popular
//                             </Badge>
//                           )}
//                         </div> */}
//                         <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
//                           {form.title}
//                         </CardTitle>
//                         {/* <CardDescription className="text-gray-600 leading-relaxed mb-4">
//                           {form.description}
//                         </CardDescription>
//                         <div className="text-sm text-gray-500 mb-2">
//                           <strong>Related Act:</strong> {form.relatedAct}
//                         </div> */}
//                       </div>
//                     </div>
                    
//                     {/* Form Details */}
//                     {/* <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
//                       <div className="flex items-center gap-1">
//                         {getFormatIcon(form.format)}
//                         <span>{form.format}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Paperclip className="w-4 h-4" />
//                         <span>{form.fileSize}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="w-4 h-4" />
//                         <span>{form.estimatedTime}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>Updated: {new Date(form.lastUpdated).toLocaleDateString()}</span>
//                       </div>
//                     </div> */}
//                   </CardHeader>
                  
//                   <CardContent className="pt-0">
//                     <div className="flex items-center justify-between">
//                       <div className="flex gap-3">
//                         <Button 
//                           size="sm"
//                           className="bg-orange-500 hover:bg-orange-600"
//                           asChild
//                         >
//                           <Link href={`/forms/by-act/${form.relatedAct.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
//                             <FileText className="w-4 h-4 mr-2" />
//                             Read More
//                           </Link>
//                         </Button>
//                       </div>
//                       {/* <div className="text-xs text-gray-500">
//                         Form {form.formNumber}
//                       </div> */}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Load More */}
//             <div className="text-center mt-12">
//               <Button variant="outline" size="lg" className="px-8">
//                 Load More Forms
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="mt-16">
//           <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-0">
//             <CardContent className="p-8">
//               <div className="text-center max-w-2xl mx-auto">
//                 <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Help with Forms?</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   Our compliance experts are here to help you understand and fill out the required forms correctly. 
//                   Get personalized assistance for your specific requirements.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button className="bg-orange-500 hover:bg-orange-600">
//                     <Users className="w-4 h-4 mr-2" />
//                     Contact Expert
//                   </Button>
//                   <Button variant="outline">
//                     <FileText className="w-4 h-4 mr-2" />
//                     Form Guidelines
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

// export const metadata = {
//   title: 'Compliance Forms - Download Official Forms | E-Library',
//   description: 'Download official compliance forms for various labour acts and regulations. Get ready-to-use forms with instructions and guidelines.',
//   keywords: 'compliance forms, labour forms, factory forms, PF forms, ESI forms, wage register, official forms'
// }














"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Download, FileText, ChevronRight, Home, Building2, Calendar, MapPin, Eye, Star, Clock, Users, AlertCircle, Paperclip, FileCheck, FileX, FilePlus, SlidersHorizontal } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import PopularSearch from "../PopularSearch/PopularSearch"

const forms = [
  {
    id: 1,
    title: "Form I - Notice of Commencement of Work",
    formNumber: "Form I",
    relatedAct: "The Factories Act, 1948",
    state: "Central",
    category: "Factory Registration",
    description: "Notice to be given before commencing work in a factory",
    lastUpdated: "2024-12-10",
    fileSize: "245 KB",
    format: "PDF",
    isPopular: true,
    difficulty: "Easy",
    estimatedTime: "15 minutes",
    slug: "form-i-notice-commencement-work"
  },
  {
    id: 2,
    title: "Form II - License to Work a Factory",
    formNumber: "Form II",
    relatedAct: "The Factories Act, 1948",
    state: "Central",
    category: "Factory Registration",
    description: "Application for license to work a factory",
    lastUpdated: "2024-12-08",
    fileSize: "312 KB",
    format: "PDF",
    isPopular: true,
    difficulty: "Medium",
    estimatedTime: "30 minutes",
    slug: "form-ii-license-work-factory"
  },
  {
    id: 3,
    title: "Form XIII - Register of Adult Workers",
    formNumber: "Form XIII",
    relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
    state: "Central",
    category: "Contract Labour",
    description: "Register to be maintained for adult contract workers",
    lastUpdated: "2024-11-25",
    fileSize: "189 KB",
    format: "Excel",
    isPopular: false,
    difficulty: "Easy",
    estimatedTime: "10 minutes",
    slug: "form-xiii-register-adult-workers"
  },
  {
    id: 4,
    title: "Form A - Application for Registration",
    formNumber: "Form A",
    relatedAct: "Maharashtra Shops and Establishments Act, 2017",
    state: "Maharashtra",
    category: "Shops & Establishments",
    description: "Application for registration of shops and establishments",
    lastUpdated: "2024-12-05",
    fileSize: "278 KB",
    format: "PDF",
    isPopular: true,
    difficulty: "Medium",
    estimatedTime: "25 minutes",
    slug: "form-a-application-registration"
  },
  {
    id: 5,
    title: "Form 5 - Annual Return",
    formNumber: "Form 5",
    relatedAct: "The Payment of Gratuity Act, 1972",
    state: "Central",
    category: "Gratuity",
    description: "Annual return to be filed under the Payment of Gratuity Act",
    lastUpdated: "2024-11-30",
    fileSize: "156 KB",
    format: "PDF",
    isPopular: false,
    difficulty: "Hard",
    estimatedTime: "45 minutes",
    slug: "form-5-annual-return"
  },
  {
    id: 6,
    title: "Form VII - Wage Register",
    formNumber: "Form VII",
    relatedAct: "The Payment of Wages Act, 1936",
    state: "Central",
    category: "Wages",
    description: "Register of wages to be maintained by employers",
    lastUpdated: "2024-12-12",
    fileSize: "203 KB",
    format: "Excel",
    isPopular: true,
    difficulty: "Easy",
    estimatedTime: "20 minutes",
    slug: "form-vii-wage-register"
  },
  {
    id: 7,
    title: "Form 3A - Nomination for Provident Fund",
    formNumber: "Form 3A",
    relatedAct: "The Employees' Provident Funds Act, 1952",
    state: "Central",
    category: "Provident Fund",
    description: "Nomination form for provident fund benefits",
    lastUpdated: "2024-12-01",
    fileSize: "134 KB",
    format: "PDF",
    isPopular: true,
    difficulty: "Easy",
    estimatedTime: "15 minutes",
    slug: "form-3a-nomination-provident-fund"
  },
  {
    id: 8,
    title: "Form F - Application for ESI Registration",
    formNumber: "Form F",
    relatedAct: "The Employees' State Insurance Act, 1948",
    state: "Central",
    category: "ESI",
    description: "Application for registration under ESI scheme",
    lastUpdated: "2024-11-28",
    fileSize: "267 KB",
    format: "PDF",
    isPopular: false,
    difficulty: "Medium",
    estimatedTime: "35 minutes",
    slug: "form-f-application-esi-registration"
  }
]

const categories = [
  "All Categories",
  "Factory Registration",
  "Contract Labour",
  "Shops & Establishments",
  "Gratuity",
  "Wages",
  "Provident Fund",
  "ESI",
  "Bonus",
  "Maternity Benefits"
]

const states = [
  "All States",
  "Central",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Delhi",
  "West Bengal"
]

const formats = [
  "All Formats",
  "PDF",
  "Excel",
  "Word",
  "Online Form"
]

const difficulties = [
  "All Levels",
  "Easy",
  "Medium",
  "Hard"
]

const popularSearches = [
  "Factory license form",
  "PF nomination form",
  "ESI registration",
  "Wage register format",
  "Contract labour forms",
  "Gratuity calculation form"
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-100 text-green-700'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700'
    case 'Hard':
      return 'bg-red-100 text-red-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const getFormatIcon = (format: string) => {
  switch (format) {
    case 'PDF':
      return <FileText className="w-4 h-4 text-red-500" />
    case 'Excel':
      return <FileCheck className="w-4 h-4 text-green-500" />
    case 'Word':
      return <FileX className="w-4 h-4 text-blue-500" />
    default:
      return <FilePlus className="w-4 h-4 text-gray-500" />
  }
}

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        {/* Top Filter and Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Filters Button */}
              <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </span>
                      
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search by name..." className="pl-12 py-3 h-12 rounded-lg" />
              </div>
              
              {/* Category Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/ /g, '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* State Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Format Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((format) => (
                    <SelectItem key={format} value={format.toLowerCase()}>
                      {format}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Difficulty Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((difficulty) => (
                    <SelectItem key={difficulty} value={difficulty.toLowerCase()}>
                      {difficulty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Apply Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with Quick Access */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="space-y-6">
                <PopularSearch className="space-y-2" />
              </CardContent>
            </Card>
          </div>
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Compliance Forms</h1>
                  <p className="text-gray-600 text-lg">
                    Download ready-to-use forms for various compliance requirements across different acts and regulations
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {forms.length} Forms Available
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Paperclip className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">About Compliance Forms</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        These forms are official documents required for various compliance activities under different labour acts. 
                        Each form comes with instructions and is regularly updated to reflect the latest regulatory changes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sort & View Options */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by popularity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popularity">Sort by Popularity</SelectItem>
                    <SelectItem value="date">Latest Updated</SelectItem>
                    <SelectItem value="name">Name (A-Z)</SelectItem>
                    <SelectItem value="category">Category</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-gray-600">
                Showing {forms.length} results
              </div>
            </div>

            {/* Forms Grid */}
            <div className="grid gap-6">
              {forms.map((form) => (
                <Card key={form.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
                          {form.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Button 
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600"
                          asChild
                        >
                          <Link href={`/forms/by-act/${form.relatedAct.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                            <FileText className="w-4 h-4 mr-2" />
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
              <Button variant="outline" size="lg" className="px-8">
                Load More Forms
              </Button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <AlertCircle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Need Help with Forms?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our compliance experts are here to help you understand and fill out the required forms correctly. 
                  Get personalized assistance for your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Users className="w-4 h-4 mr-2" />
                    Contact Expert
                  </Button>
                  <Button variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Form Guidelines
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}





// export const metadata = {
//   title: 'Compliance Forms - Download Official Forms | E-Library',
//   description: 'Download official compliance forms for various labour acts and regulations. Get ready-to-use forms with instructions and guidelines.',
//   keywords: 'compliance forms, labour forms, factory forms, PF forms, ESI forms, wage register, official forms'
// }
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MapPin, Building2, Users, Star } from "lucide-react"
import Link from "next/link"
import PopularSearch from '../PopularSearch/PopularSearch'

const applicableStates = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
  { name: "Assam", slug: "assam" },
  { name: "Bihar", slug: "bihar" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Delhi", slug: "delhi" },
  { name: "Goa", slug: "goa" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "Haryana", slug: "haryana" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh" },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir" },
  { name: "Jharkhand", slug: "jharkhand" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Kerala", slug: "kerala" },
  { name: "Ladakh", slug: "ladakh" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh" },
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Manipur", slug: "manipur" },
  { name: "Meghalaya", slug: "meghalaya" },
  { name: "Mizoram", slug: "mizoram" },
  { name: "Nagaland", slug: "nagaland" },
  { name: "Odisha", slug: "odisha" },
  { name: "Puducherry", slug: "puducherry" },
  { name: "Punjab", slug: "punjab" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Telangana", slug: "telangana" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "Uttarakhand", slug: "uttarakhand" },
  { name: "West Bengal", slug: "west-bengal" },
]

const nonApplicableStates = [
  { name: "Central", slug: "central" },
  { name: "Dadra and Nagar Haveli", slug: "dadra-nagar-haveli" },
  { name: "Daman and Diu", slug: "daman-diu" },
  { name: "Lakshadweep", slug: "lakshadweep" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Sikkim", slug: "sikkim" },
  { name: "Tripura", slug: "tripura" },
]

export default function NationalFestivalHolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      {/* <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search National Festival Holidays, states..."
              className=" pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid Layout with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <Card className="bg-blue-50 border-blue-200 mb-8">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are National Festivals?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        National festivals are celebrations that reflect India's rich cultural diversity, religious traditions, and historical significance. They bring communities together and are officially recognized as public holidays across different states and regions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Applicable States</p>
                      <p className="text-2xl font-bold text-gray-900">{applicableStates.length}</p>
                    </div>
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Non-Applicable</p>
                      <p className="text-2xl font-bold text-gray-900">{nonApplicableStates.length}</p>
                    </div>
                    <Building2 className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">National Holidays</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Coverage</p>
                      <p className="text-2xl font-bold text-gray-900">All Workers</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Information Card */}
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">National and Festival Holidays Matrix</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  It is intended to provide National and Festival holidays to workers in industrial establishments,
                  factories, shops, commercial establishments, plantations, etc. Public holidays vis-à-vis National and
                  Festival Holidays are being regulated under the Industrial Employment (Standing Orders) Act and Rules
                  thereof in many states. However, in a few states, the same is being regulated under the Shops and
                  Establishments Act of the respective states.
                </p>

                

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Eligibility to receive wages on account of festival holidays:
                  </h3>
                  <p>
                    The wages to an employee on account of festival holidays shall be entitled if he has been in service
                    under the employer for a total period of 30 days within a continuous period of 90 days immediately
                    preceding such a holiday (which may vary from state to state).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Eligibility to receive wages on account of national holidays:
                  </h3>
                  <p>The employee is eligible from day one itself to avail of wages on National Holidays.</p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    What is the provision given in the Act if employees are engaged during National and Festival Holidays?
                  </h3>
                  <p>
                    If employees are engaged during National and Festival Holidays, they are, at their option, entitled to
                    (a) twice the wages; or (b) wages for such a day and to avail of a substituted holiday with wages on any
                    other day. (Varies from state to state).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* States Grid */}
           
            <div className="grid lg:grid-cols-2 gap-8">
  {/* Applicable States */}
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    {/* Header - Full Width Background */}
    <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-blue-600" />
        <h3 className="text-xl font-semibold text-gray-900">Applicable States</h3>
        <Badge className="bg-blue-100 text-blue-800 ml-auto">
          {applicableStates.length} states
        </Badge>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <div className="space-y-3">
        {applicableStates.map((state, index) => (
          <Link
            key={state.slug}
            href={`/national-festival-holidays/${state.slug}`}
            className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer group"
          >
            <span className="text-blue-700 font-medium group-hover:text-blue-800">
              {index + 1}. {state.name}
            </span>
            <Badge className="bg-green-100 text-green-800">
              Available
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Non-Applicable States */}
  <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
    {/* Header - Full Width Background */}
    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <Building2 className="h-5 w-5 text-gray-600" />
        <h3 className="text-xl font-semibold text-gray-900">Non-Applicable States</h3>
        <Badge className="bg-gray-100 text-gray-700 ml-auto">
          {nonApplicableStates.length} states
        </Badge>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <div className="space-y-3">
        {nonApplicableStates.map((state, index) => (
          <div
            key={state.slug}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span className="text-gray-600 font-medium">
              {index + 1}. {state.name}
            </span>
            <Badge className="bg-gray-100 text-gray-600">
              Not Applicable
            </Badge>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          </div>

          {/* Sidebar with Quick Access */}
         <div className="lg:col-span-1 lg:order-2">
    <Card className="sticky top-24">
      <CardContent className="space-y-6">
        <PopularSearch className="mt-4" />
      </CardContent>
    </Card>
  </div>
        </div>
      </div>
    </div>
  )
}

























// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   Search,
//   Filter,
//   Eye,
//   ChevronRight,
//   Home,
//   Building2,
//   Calendar,
//   MapPin,
//   Star,
// } from "lucide-react"
// import Link from "next/link"
// import { downloadFile, type DownloadItem } from "@/lib/download-utils"
// import PopularSearch from "../PopularSearch/PopularSearch"

// const holidays = [
//   {
//     id: 1,
//     title: "Diwali - Festival of Lights",
//     slug: "diwali-festival-of-lights",
//     state: "Central",
//     category: "Hindu Festival",
//     description:
//       "The most celebrated Hindu festival symbolizing the victory of light over darkness, good over evil, and knowledge over ignorance. Celebrated with fireworks, sweets, and decorations.",
//     lastUpdated: "2024-12-15",
//     date: "2024-11-01",
//     duration: "5 Days",
//     isPopular: true,
//   },
//   {
//     id: 2,
//     title: "Eid al-Fitr",
//     slug: "eid-al-fitr",
//     state: "Central",
//     category: "Islamic Festival",
//     description:
//       "A significant Islamic festival marking the end of Ramadan, the holy month of fasting. Celebrated with special prayers, feasts, and gift-giving.",
//     lastUpdated: "2024-11-28",
//     date: "2024-04-10",
//     duration: "1-3 Days",
//     isPopular: true,
//   },
//   {
//     id: 3,
//     title: "Durga Puja",
//     slug: "durga-puja",
//     state: "West Bengal",
//     category: "Hindu Festival",
//     description:
//       "Major Hindu festival celebrating Goddess Durga's victory over the buffalo demon Mahishasura. Particularly celebrated in West Bengal with grand pandals and cultural programs.",
//     lastUpdated: "2024-10-22",
//     date: "2024-10-15",
//     duration: "10 Days",
//     isPopular: false,
//   },
//   {
//     id: 4,
//     title: "Christmas Day",
//     slug: "christmas-day",
//     state: "Central",
//     category: "Christian Festival",
//     description:
//       "Christian festival commemorating the birth of Jesus Christ, celebrated with church services, gift exchanges, and family gatherings.",
//     lastUpdated: "2024-09-18",
//     date: "2024-12-25",
//     duration: "1 Day",
//     isPopular: true,
//   },
//   {
//     id: 5,
//     title: "Holi - Festival of Colors",
//     slug: "holi-festival-of-colors",
//     state: "Central",
//     category: "Hindu Festival",
//     description:
//       "Hindu spring festival celebrating the arrival of spring, love, and new beginnings. Famous for the throwing of colored powders and water.",
//     lastUpdated: "2024-12-01",
//     date: "2024-03-13",
//     duration: "2 Days",
//     isPopular: true,
//   },
//   {
//     id: 6,
//     title: "Onam",
//     slug: "onam",
//     state: "Kerala",
//     category: "Regional Festival",
//     description:
//       "Major harvest festival of Kerala celebrating the return of legendary King Mahabali. Known for elaborate feasts, flower carpets, and traditional dances.",
//     lastUpdated: "2024-11-15",
//     date: "2024-09-15",
//     duration: "10 Days",
//     isPopular: false,
//   },
// ]

// const categories = [
//   "All Categories",
//   "Hindu Festival",
//   "Islamic Festival",
//   "Christian Festival",
//   "Sikh Festival",
//   "Buddhist Festival",
//   "Regional Festival",
// ]

// const states = ["All States", "Central", "West Bengal", "Kerala", "Punjab", "Gujarat", "Tamil Nadu", "Maharashtra"]

// const popularSearches = [
//   "Diwali 2024",
//   "Eid al-Fitr",
//   "Christmas Day",
//   "Holi Festival",
//   "Durga Puja",
//   "Onam Kerala",
// ]

// export default function NationalFestivalHolidaysPage() {
//   const handleHolidayDownload = async (holiday: (typeof holidays)[0]) => {
//     const downloadItem: DownloadItem = {
//       url: `/holidays/downloads/${holiday.slug}.pdf`,
//       filename: `${holiday.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
//       format: "PDF",
//     }

//     await downloadFile(downloadItem)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">   
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">National Festivals & Holidays</h1>
//                   <p className="text-gray-600 text-lg">
//                     Complete guide to India's national festivals, religious celebrations, and public holidays
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Badge variant="secondary" className="px-3 py-1">
//                     {holidays.length} Festivals Available
//                   </Badge>
//                 </div>
//               </div>

//               {/* Info Card */}
              // <Card className="bg-blue-50 border-blue-200">
              //   <CardContent className="p-4">
              //     <div className="flex items-start gap-3">
              //       <Star className="w-5 h-5 text-blue-600 mt-0.5" />
              //       <div>
              //         <h3 className="font-semibold text-blue-900 mb-1">What are National Festivals?</h3>
              //         <p className="text-blue-800 text-sm leading-relaxed">
              //           National festivals are celebrations that reflect India's rich cultural diversity, religious traditions, and historical significance. They bring communities together and are officially recognized as public holidays across different states and regions.
              //         </p>
              //       </div>
              //     </div>
              //   </CardContent>
              // </Card>
//             </div>

//             {/* Horizontal Filters */}
//            <Card className="mb-8">
//               <CardContent className="py-2">
//                 <div className="flex flex-col lg:flex-row gap-4 items-center">
//                   {/* Filters Button */}
//                   <Button variant="outline" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200">
//                     <Filter className="w-4 h-4" />
//                     Filters
//                   </Button>
//                   {/* Search Input */}
//                   <div className="relative flex-1">
//                     <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                     <Input placeholder="Search festivals..." className="pl-12 py-3 h-12 rounded-lg" />
//                   </div>
                  
//                   {/* State Dropdown */}
//                   <Select>
//                     <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
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
                  
//                   {/* Category Dropdown */}
//                   <Select>
//                     <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
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
                  
//                   {/* Apply Button */}
//                   <Button className="bg-orange-500 hover:bg-orange-600 px-6">
//                     Apply
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Holidays Grid */}
//             <div className="grid gap-6">
//               {holidays.map((holiday) => (
//                 <Card
//                   key={holiday.id}
//                   className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
//                 >
//                   <CardHeader className="pb-4">
//                     <div className="flex items-start justify-between">
//                       <div className="flex-1">
//                         <div className="flex items-center gap-3 mb-3">
//                           <Badge
//                             variant={holiday.state === "Central" ? "default" : "secondary"}
//                             className={holiday.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
//                           >
//                             <Building2 className="w-3 h-3 mr-1" />
//                             {holiday.state}
//                           </Badge>
//                           <Badge variant="outline" className="text-xs">
//                             {holiday.category}
//                           </Badge>
//                           {holiday.isPopular && <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>}
//                         </div>
//                         <Link href={`/holidays/${holiday.slug}`}>
//                           <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2 cursor-pointer">
//                             {holiday.title}
//                           </CardTitle>
//                         </Link>
//                         <CardDescription className="text-gray-600 leading-relaxed mb-4">
//                           {holiday.description}
//                         </CardDescription>
//                       </div>
//                     </div>

//                     {/* Holiday Details */}
//                     <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>Date: {new Date(holiday.date).toLocaleDateString()}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <MapPin className="w-4 h-4" />
//                         <span>Duration: {holiday.duration}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>Updated: {new Date(holiday.lastUpdated).toLocaleDateString()}</span>
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
//                           <Link href={`/holidays/${holiday.slug}`}>
//                             <Eye className="w-4 h-4 mr-2" />
//                             Read More
//                           </Link>
//                         </Button>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* Load More */}
//             <div className="text-center mt-12">
//               <Button variant="outline" size="lg" className="px-8 bg-transparent">
//                 Load More Festivals
//               </Button>
//             </div>
//           </div>

//           {/* Right Sidebar - Popular Search */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent>
//                    <PopularSearch className="mb-6" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

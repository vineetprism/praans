
// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { MapPin } from "lucide-react"

// const applicableStates = [
//   { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar" },
//   { name: "Andhra Pradesh", slug: "andhra-pradesh" },
//   { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
//   { name: "Assam", slug: "assam" },
//   { name: "Bihar", slug: "bihar" },
//   { name: "Chandigarh", slug: "chandigarh" },
//   { name: "Chhattisgarh", slug: "chhattisgarh" },
//   { name: "Delhi", slug: "delhi" },
//   { name: "Goa", slug: "goa" },
//   { name: "Gujarat", slug: "gujarat" },
//   { name: "Haryana", slug: "haryana" },
//   { name: "Himachal Pradesh", slug: "himachal-pradesh" },
//   { name: "Jammu and Kashmir", slug: "jammu-kashmir" },
//   { name: "Jharkhand", slug: "jharkhand" },
//   { name: "Karnataka", slug: "karnataka" },
//   { name: "Kerala", slug: "kerala" },
//   { name: "Ladakh", slug: "ladakh" },
//   { name: "Madhya Pradesh", slug: "madhya-pradesh" },
//   { name: "Maharashtra", slug: "maharashtra" },
//   { name: "Manipur", slug: "manipur" },
//   { name: "Meghalaya", slug: "meghalaya" },
//   { name: "Mizoram", slug: "mizoram" },
//   { name: "Nagaland", slug: "nagaland" },
//   { name: "Odisha", slug: "odisha" },
//   { name: "Puducherry", slug: "puducherry" },
//   { name: "Punjab", slug: "punjab" },
//   { name: "Tamil Nadu", slug: "tamil-nadu" },
//   { name: "Telangana", slug: "telangana" },
//   { name: "Uttar Pradesh", slug: "uttar-pradesh" },
//   { name: "Uttarakhand", slug: "uttarakhand" },
//   { name: "West Bengal", slug: "west-bengal" },
// ]

// export default function HolidaysPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="container mx-auto px-4 py-8 max-w-7xl">
//         <div className="flex justify-between items-start mb-6">
//           <div>
//             <h1 className="text-4xl font-bold text-gray-900 mb-4">Holiday</h1>
//             <p className="text-gray-700 leading-relaxed max-w-4xl">
//               "Statutory Holidays" is public or legal holidays designated by government or authorities based on
//               cultural, religious, historical or national significance within a particular country or region as mandated
//               by law. Every employees are entitled to a day-off with pay or premium pay if they work on such occasions.
//             </p>
//           </div>
//           <Select defaultValue="2025">
//             <SelectTrigger className="w-32 border-gray-300">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="2025">2025</SelectItem>
//               <SelectItem value="2024">2024</SelectItem>
//               <SelectItem value="2023">2023</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             Lists of Government & Public Holidays in India 2025
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             Team Simpliance is driven to enable simple, Beautiful and Effective compliance for you always. You now have
//             access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
//             holidays in the year 2025, which includes Government and National Holidays. You can plan your year-end
//             returns and official 2025 holiday list now with ease.
//           </p>

//           <div className="flex items-center gap-2 text-gray-600 mb-8">
//             <MapPin className="w-5 h-5" />
//             <span className="font-medium">Lists of Holidays For States Across India</span>
//           </div>
//         </div>

//         {/* States Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {applicableStates.map((state) => (
//             <Link key={state.slug} href={`/holidays/${state.slug}`}>
//               <Card className="border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-200 cursor-pointer">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="text-lg font-medium text-blue-600 hover:text-orange-600 transition-colors duration-200 mb-2">
//                     {state.name}
//                   </h3>
//                   <p className="text-sm text-gray-500">Effective date: 1st Jan, 2025</p>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }











// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import Link from "next/link"
// import { MapPin, Calendar, CheckCircle } from "lucide-react"

// const applicableStates = [
//   { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar" },
//   { name: "Andhra Pradesh", slug: "andhra-pradesh" },
//   { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
//   { name: "Assam", slug: "assam" },
//   { name: "Bihar", slug: "bihar" },
//   { name: "Chandigarh", slug: "chandigarh" },
//   { name: "Chhattisgarh", slug: "chhattisgarh" },
//   { name: "Delhi", slug: "delhi" },
//   { name: "Goa", slug: "goa" },
//   { name: "Gujarat", slug: "gujarat" },
//   { name: "Haryana", slug: "haryana" },
//   { name: "Himachal Pradesh", slug: "himachal-pradesh" },
//   { name: "Jammu and Kashmir", slug: "jammu-kashmir" },
//   { name: "Jharkhand", slug: "jharkhand" },
//   { name: "Karnataka", slug: "karnataka" },
//   { name: "Kerala", slug: "kerala" },
//   { name: "Ladakh", slug: "ladakh" },
//   { name: "Madhya Pradesh", slug: "madhya-pradesh" },
//   { name: "Maharashtra", slug: "maharashtra" },
//   { name: "Manipur", slug: "manipur" },
//   { name: "Meghalaya", slug: "meghalaya" },
//   { name: "Mizoram", slug: "mizoram" },
//   { name: "Nagaland", slug: "nagaland" },
//   { name: "Odisha", slug: "odisha" },
//   { name: "Puducherry", slug: "puducherry" },
//   { name: "Punjab", slug: "punjab" },
//   { name: "Tamil Nadu", slug: "tamil-nadu" },
//   { name: "Telangana", slug: "telangana" },
//   { name: "Uttar Pradesh", slug: "uttar-pradesh" },
//   { name: "Uttarakhand", slug: "uttarakhand" },
//   { name: "West Bengal", slug: "west-bengal" },
// ]

// export default function HolidaysPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header Section */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-8 max-w-7xl">
//           <div className="flex justify-between items-start mb-6">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
//                   <Calendar className="w-6 h-6 text-white" />
//                 </div>
//                 <h1 className="text-4xl font-bold text-slate-800">Holiday Lists</h1>
//               </div>
//               <p className="text-gray-700 leading-relaxed max-w-4xl">
//                 "Statutory Holidays" is public or legal holidays designated by government or authorities based on
//                 cultural, religious, historical or national significance within a particular country or region as mandated
//                 by law. Every employees are entitled to a day-off with pay or premium pay if they work on such occasions.
//               </p>
//             </div>
//             <Select defaultValue="2025">
//               <SelectTrigger className="w-32 border-orange-300 focus:ring-orange-500">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="2025">2025</SelectItem>
//                 <SelectItem value="2024">2024</SelectItem>
//                 <SelectItem value="2023">2023</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <div className="mb-8">
//             <h2 className="text-2xl font-semibold text-slate-800 mb-4">
//               Lists of Government & Public Holidays in India 2025
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-6">
//               Team Simpliance is driven to enable simple, Beautiful and Effective compliance for you always. You now have
//               access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
//               holidays in the year 2025, which includes Government and National Holidays. You can plan your year-end
//               returns and official 2025 holiday list now with ease.
//             </p>

//             <div className="flex items-center gap-2 text-orange-600 mb-8 bg-orange-50 p-3 rounded-lg border border-orange-200">
//               <MapPin className="w-5 h-5" />
//               <span className="font-medium">Lists of Holidays For States Across India</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* States Grid Section */}
//       <div className="container mx-auto px-4 py-8 max-w-7xl">
//         <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
//           {applicableStates.map((state) => (
//             <Link key={state.slug} href={`/holidays/${state.slug}`}>
//               <Card className="group border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-orange-500 bg-white">
//                 <CardContent className="p-3">
//                   <h3 className="text-xs font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-200 mb-2 line-clamp-2 leading-tight min-h-[32px]">
//                     {state.name}
//                   </h3>
                  
//                   <div className="text-xs text-gray-600 mb-2">
//                     2025
//                   </div>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }








"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MapPin, Calendar, CheckCircle, ChevronRight } from "lucide-react"

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

export default function HolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-slate-800">Holiday Lists</h1>
              </div>
              <p className="text-gray-700 leading-relaxed max-w-4xl">
                "Statutory Holidays" is public or legal holidays designated by government or authorities based on
                cultural, religious, historical or national significance within a particular country or region as mandated
                by law. Every employees are entitled to a day-off with pay or premium pay if they work on such occasions.
              </p>
            </div>
            <Select defaultValue="2025">
              <SelectTrigger className="w-32 border-orange-300 focus:ring-orange-500">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Lists of Government & Public Holidays in India 2025
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Team Simpliance is driven to enable simple, Beautiful and Effective compliance for you always. You now have
              access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
              holidays in the year 2025, which includes Government and National Holidays. You can plan your year-end
              returns and official 2025 holiday list now with ease.
            </p>

            <div className="flex items-center gap-2 text-orange-600 mb-8 bg-orange-50 p-3 rounded-lg border border-orange-200">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Lists of Holidays For States Across India</span>
            </div>
          </div>
        </div>
      </div>

      {/* States Grid Section */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {applicableStates.map((state) => (
            <Link key={state.slug} href={`/holidays/${state.slug}`}>
              <Card className="group border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-orange-500 bg-white">
                <CardContent className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-200 mb-2 line-clamp-2 leading-tight min-h-[32px]">
                        {state.name}
                      </h3>
                      
                      <div className="text-xs text-gray-600 mb-2">
                        2025
                      </div>
                    </div>
                    
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 transition-colors ml-2 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
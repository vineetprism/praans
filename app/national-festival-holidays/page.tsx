// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Calendar, MapPin, Building2, Users, Scale } from "lucide-react";
// import Link from "next/link";
// import PopularSearch from "../PopularSearch/PopularSearch";

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
// ];

// const nonApplicableStates = [
//   { name: "Central", slug: "central" },
//   { name: "Dadra and Nagar Haveli", slug: "dadra-nagar-haveli" },
//   { name: "Daman and Diu", slug: "daman-diu" },
//   { name: "Lakshadweep", slug: "lakshadweep" },
//   { name: "Rajasthan", slug: "rajasthan" },
//   { name: "Sikkim", slug: "sikkim" },
//   { name: "Tripura", slug: "tripura" },
// ];

// const categories = [
//   "All Categories",
//   "National Holidays",
//   "Festival Holidays",
//   "Regional Festivals",
//   "Religious Festivals",
// ];

// const states = [
//   "All States",
//   "Maharashtra",
//   "Karnataka",
//   "Gujarat",
//   "Tamil Nadu",
//   "West Bengal",
//   "Delhi",
// ];

// export default function NationalFestivalHolidaysPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-3xl font-bold text-slate-800 mb-2">
//                     National & Festival Holidays
//                   </h2>
//                   <p className="text-slate-800 text-sm leading-relaxed ">
//                     National festivals are celebrations that reflect India's
//                     rich cultural diversity, religious traditions, and
//                     historical significance. They bring communities together and
//                     are officially recognized as public holidays across
//                     different states and regions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//               {/* Statistics Cards */}
//               {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">
//                           Applicable States
//                         </p>
//                       </div>
//                       <MapPin className="h-8 w-8 text-blue-600" />
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">
//                           Non-Applicable
//                         </p>
//                         <p className="text-2xl font-bold text-gray-900">
//                           {nonApplicableStates.length}
//                         </p>
//                       </div>
//                       <Building2 className="h-8 w-8 text-red-600" />
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">
//                           National Holidays
//                         </p>
//                         <p className="text-2xl font-bold text-gray-900">3</p>
//                       </div>
//                       <Calendar className="h-8 w-8 text-green-600" />
//                     </div>
//                   </CardContent>
//                 </Card>
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">
//                           Coverage
//                         </p>
//                         <p className="text-2xl font-bold text-gray-900">
//                           All Workers
//                         </p>
//                       </div>
//                       <Users className="h-8 w-8 text-purple-600" />
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div> */}

//             {/* States Grid */}
//             <Card className="border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-xl ">
//                   State-wise Holiday Matrix
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid lg:grid-cols-2 gap-8">
//                   <div>
//                     <div className="flex items-center gap-2 mb-4">
//                       <MapPin className="h-5 w-5 text-blue-600" />
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Applicable States
//                       </h3>
//                       <Badge className="bg-blue-100 text-blue-800 ml-auto">
//                         {applicableStates.length} states
//                       </Badge>
//                     </div>

//                     <div className="space-y-3">
//                       {applicableStates.map((state, index) => (
//                         <Link
//                           key={state.slug}
//                           href={`/national-festival-holidays/${state.slug}`}
//                           aria-label={`Go to ${state.name} details`}
//                           className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group"
//                         >
//                           <span className="text-blue-600 group-hover:text-orange-600 font-medium transition-colors">
//                             {index + 1}. {state.name}
//                           </span>
//                           <Badge className="bg-green-100 text-green-800">
//                             Available
//                           </Badge>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Non-Applicable States */}
//                   <div>
//                     <div className="flex items-center gap-2 mb-4">
//                       <Building2 className="h-5 w-5 text-gray-600" />
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Non-Applicable States
//                       </h3>
//                       <Badge className="bg-gray-100 text-gray-700 ml-auto">
//                         {nonApplicableStates.length} states
//                       </Badge>
//                     </div>

//                     <div className="space-y-3">
//                       {nonApplicableStates.map((state, index) => (
//                         <div
//                           key={state.slug}
//                           className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
//                         >
//                           <span className="text-gray-600 font-medium">
//                             {index + 1}. {state.name}
//                           </span>
//                           <Badge className="bg-gray-100 text-gray-600">
//                             Not Applicable
//                           </Badge>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="min-w-0">
//             <div className="sticky top-24">
//               <div className="rounded-lg border bg-white shadow-sm">
//                 <div className="p-4">
//                   <PopularSearch className="mb-0" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import PopularSearch from "../PopularSearch/PopularSearch";

const allStates = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar", available: true },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", available: true },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", available: true },
  { name: "Assam", slug: "assam", available: true },
  { name: "Bihar", slug: "bihar", available: true },
  { name: "Chandigarh", slug: "chandigarh", available: true },
  { name: "Chhattisgarh", slug: "chhattisgarh", available: true },
  { name: "Central", slug: "central", available: false },
  { name: "Dadra and Nagar Haveli", slug: "dadra-nagar-haveli", available: false },
  { name: "Daman and Diu", slug: "daman-diu", available: false },
  { name: "Delhi", slug: "delhi", available: true },
  { name: "Goa", slug: "goa", available: true },
  { name: "Gujarat", slug: "gujarat", available: true },
  { name: "Haryana", slug: "haryana", available: true },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", available: true },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir", available: true },
  { name: "Jharkhand", slug: "jharkhand", available: true },
  { name: "Karnataka", slug: "karnataka", available: true },
  { name: "Kerala", slug: "kerala", available: true },
  { name: "Ladakh", slug: "ladakh", available: true },
  { name: "Lakshadweep", slug: "lakshadweep", available: false },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", available: true },
  { name: "Maharashtra", slug: "maharashtra", available: true },
  { name: "Manipur", slug: "manipur", available: true },
  { name: "Meghalaya", slug: "meghalaya", available: true },
  { name: "Mizoram", slug: "mizoram", available: true },
  { name: "Nagaland", slug: "nagaland", available: true },
  { name: "Odisha", slug: "odisha", available: true },
  { name: "Puducherry", slug: "puducherry", available: true },
  { name: "Punjab", slug: "punjab", available: true },
  { name: "Rajasthan", slug: "rajasthan", available: false },
  { name: "Sikkim", slug: "sikkim", available: false },
  { name: "Tamil Nadu", slug: "tamil-nadu", available: true },
  { name: "Telangana", slug: "telangana", available: true },
  { name: "Tripura", slug: "tripura", available: false },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", available: true },
  { name: "Uttarakhand", slug: "uttarakhand", available: true },
  { name: "West Bengal", slug: "west-bengal", available: true },
];

export default function NationalFestivalHolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-4 z-10">
              <Card>
                <CardContent className="p-3">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            {/* Page Header */}
            <div className="mb-4">
              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                  National & Festival Holidays :
                </h2>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                  National festivals are celebrations that reflect India's
                  rich cultural diversity, religious traditions, and
                  historical significance. They bring communities together and
                  are officially recognized as public holidays across
                  different states and regions.
                </p>
              </div>
            </div>

            {/* States Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {allStates.map((state) => (
                state.available ? (
                  <Link 
                    key={state.slug} 
                    href={`/national-festival-holidays/${state.slug}`} 
                    aria-label={state.name}
                  >
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-2 sm:p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
                              {state.name}
                            </h3>
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div key={state.slug} className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg overflow-hidden cursor-not-allowed">
                    <div className="p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
                            {state.name}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <ChevronRight className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// "use client"

// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useParams } from "next/navigation"
// import Link from "next/link"
// import { useState } from "react"

// const holidayData = [
//   {
//     id: 1,
//     name: "Makar Sankranti",
//     month: "Jan",
//     date: "14-01-2025",
//     day: "Tuesday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   { id: 2, name: "Republic day", month: "Jan", date: "26-01-2025", day: "Sunday", type: "National", remarks: "NULL" },
//   {
//     id: 3,
//     name: "Maha Shivratri",
//     month: "Feb",
//     date: "26-02-2025",
//     day: "Wednesday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   { id: 4, name: "Holi", month: "Mar", date: "14-03-2025", day: "Friday", type: "Regional", remarks: "NULL" },
//   { id: 5, name: "Good Friday", month: "Mar", date: "30-03-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
//   {
//     id: 6,
//     name: "Eid-Ul-Fitr (Ramzan)",
//     month: "Mar",
//     date: "31-03-2025",
//     day: "Monday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 7,
//     name: "Bank Closing Day",
//     month: "Apr",
//     date: "01-04-2025",
//     day: "Tuesday",
//     type: "Optional",
//     remarks: "NULL",
//   },
//   { id: 8, name: "Srirama Navami", month: "Apr", date: "06-04-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
//   {
//     id: 9,
//     name: "Dr.B.R.Ambedkar's Birthday",
//     month: "Apr",
//     date: "14-04-2025",
//     day: "Monday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   { id: 10, name: "Good Friday", month: "Apr", date: "18-04-2025", day: "Friday", type: "Regional", remarks: "NULL" },
//   { id: 11, name: "May Day", month: "May", date: "01-05-2025", day: "Thursday", type: "National", remarks: "NULL" },
//   {
//     id: 12,
//     name: "Bakrid (Eid-Ul-Zuha)",
//     month: "Jun",
//     date: "07-06-2025",
//     day: "Saturday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   { id: 13, name: "Moharram", month: "Jul", date: "06-07-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
//   {
//     id: 14,
//     name: "Independence day",
//     month: "Aug",
//     date: "15-08-2025",
//     day: "Friday",
//     type: "National",
//     remarks: "NULL",
//   },
// ]

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ]
// const types = ["National", "Regional", "Optional"]

// const stateData = {
//   "andaman-nicobar": { name: "Andaman and Nicobar Islands" },
//   "andhra-pradesh": { name: "Andhra Pradesh" },
//   "arunachal-pradesh": { name: "Arunachal Pradesh" },
//   assam: { name: "Assam" },
//   bihar: { name: "Bihar" },
//   chandigarh: { name: "Chandigarh" },
//   chhattisgarh: { name: "Chhattisgarh" },
//   delhi: { name: "Delhi" },
//   goa: { name: "Goa" },
//   gujarat: { name: "Gujarat" },
//   haryana: { name: "Haryana" },
//   "himachal-pradesh": { name: "Himachal Pradesh" },
//   "jammu-kashmir": { name: "Jammu and Kashmir" },
//   jharkhand: { name: "Jharkhand" },
//   karnataka: { name: "Karnataka" },
//   kerala: { name: "Kerala" },
//   ladakh: { name: "Ladakh" },
//   "madhya-pradesh": { name: "Madhya Pradesh" },
//   maharashtra: { name: "Maharashtra" },
//   manipur: { name: "Manipur" },
//   meghalaya: { name: "Meghalaya" },
//   mizoram: { name: "Mizoram" },
//   nagaland: { name: "Nagaland" },
//   odisha: { name: "Odisha" },
//   puducherry: { name: "Puducherry" },
//   punjab: { name: "Punjab" },
//   "tamil-nadu": { name: "Tamil Nadu" },
//   telangana: { name: "Telangana" },
//   "uttar-pradesh": { name: "Uttar Pradesh" },
//   uttarakhand: { name: "Uttarakhand" },
//   "west-bengal": { name: "West Bengal" },
// }

// export default function StateDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
//   const data = stateData[slug] || stateData["andhra-pradesh"]

//   const [selectedMonth, setSelectedMonth] = useState("all")
//   const [selectedType, setSelectedType] = useState("all")

//   const filteredHolidays = holidayData.filter((holiday) => {
//     const monthMatch =
//       selectedMonth === "all" || holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3)
//     const typeMatch = selectedType === "all" || holiday.type === selectedType
//     return monthMatch && typeMatch
//   })

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="container mx-auto px-4 py-6 max-w-7xl">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900">Holidays</h1>
//           <Select defaultValue={slug}>
//             <SelectTrigger className="w-64 border-gray-300">
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               {Object.entries(stateData).map(([key, value]) => (
//                 <SelectItem key={key} value={key}>
//                   {value.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Content Header */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-4">
//             List of National and Regional Holidays of {data.name} in 2025
//           </h2>
//           <p className="text-gray-700 leading-relaxed mb-6">
//             Team Simpliance is driven to enable Simple, Beautiful and Effective compliance for you always. You now have
//             access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
//             holidays in the year 2025, which includes Government and National Holidays. You can plan your year-end
//             returns and official 2025 holiday list now with ease.
//           </p>

//           <div className="flex justify-between items-center mb-6">
//             {/* Filters */}
//             <div className="flex gap-4">
//               <Select value={selectedMonth} onValueChange={setSelectedMonth}>
//                 <SelectTrigger className="w-48 border-gray-300">
//                   <SelectValue placeholder="-- Select Month --" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">-- Select Month --</SelectItem>
//                   {months.map((month) => (
//                     <SelectItem key={month} value={month}>
//                       {month}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>

//               <Select value={selectedType} onValueChange={setSelectedType}>
//                 <SelectTrigger className="w-48 border-gray-300">
//                   <SelectValue placeholder="-- Select Type --" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">-- Select Type --</SelectItem>
//                   {types.map((type) => (
//                     <SelectItem key={type} value={type}>
//                       {type}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Date Info */}
//             <div className="text-right text-sm text-gray-600">
//               <div>Effective From: 2025-01-01</div>
//               <div>Updated as on: 2025-08-28</div>
//             </div>
//           </div>
//         </div>

//         {/* Holidays Table */}
//         <Card className="border border-gray-200">
//           <CardContent className="p-0">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-blue-100 border-b border-gray-200">
//                     <th className="p-4 text-left font-semibold text-gray-900">S.No</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Holidays ↕</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Month ↕</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Date ↕</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Day</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Type</th>
//                     <th className="p-4 text-left font-semibold text-gray-900">Remarks</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredHolidays.map((holiday, index) => (
//                     <tr key={holiday.id} className="border-b border-gray-200 hover:bg-gray-50">
//                       <td className="p-4 text-gray-700">{index + 1}</td>
//                       <td className="p-4 text-gray-700">{holiday.name}</td>
//                       <td className="p-4 text-gray-700">{holiday.month}</td>
//                       <td className="p-4 text-gray-700">{holiday.date}</td>
//                       <td className="p-4 text-gray-700">{holiday.day}</td>
//                       <td className="p-4">
//                         <span
//                           className={`px-2 py-1 rounded text-xs font-medium ${
//                             holiday.type === "National"
//                               ? "bg-green-100 text-green-800"
//                               : holiday.type === "Regional"
//                                 ? "bg-blue-100 text-blue-800"
//                                 : "bg-gray-100 text-gray-800"
//                           }`}
//                         >
//                           {holiday.type}
//                         </span>
//                       </td>
//                       <td className="p-4 text-gray-700">{holiday.remarks}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Back Button */}
//         <div className="mt-8">
//           <Button
//             asChild
//             variant="outline"
//             className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
//           >
//             <Link href="/national-festival-holidays">← Back to Holidays Matrix</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

















"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"
import { Calendar, MapPin, ArrowLeft } from "lucide-react"
import PopularSearch from "@/app/PopularSearch/PopularSearch"

const holidayData = [
  {
    id: 1,
    name: "Makar Sankranti",
    month: "Jan",
    date: "14-01-2025",
    day: "Tuesday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 2, name: "Republic day", month: "Jan", date: "26-01-2025", day: "Sunday", type: "National", remarks: "NULL" },
  {
    id: 3,
    name: "Maha Shivratri",
    month: "Feb",
    date: "26-02-2025",
    day: "Wednesday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 4, name: "Holi", month: "Mar", date: "14-03-2025", day: "Friday", type: "Regional", remarks: "NULL" },
  { id: 5, name: "Good Friday", month: "Mar", date: "30-03-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 6,
    name: "Eid-Ul-Fitr (Ramzan)",
    month: "Mar",
    date: "31-03-2025",
    day: "Monday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 7,
    name: "Bank Closing Day",
    month: "Apr",
    date: "01-04-2025",
    day: "Tuesday",
    type: "Optional",
    remarks: "NULL",
  },
  { id: 8, name: "Srirama Navami", month: "Apr", date: "06-04-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 9,
    name: "Dr.B.R.Ambedkar's Birthday",
    month: "Apr",
    date: "14-04-2025",
    day: "Monday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 10, name: "Good Friday", month: "Apr", date: "18-04-2025", day: "Friday", type: "Regional", remarks: "NULL" },
  { id: 11, name: "May Day", month: "May", date: "01-05-2025", day: "Thursday", type: "National", remarks: "NULL" },
  {
    id: 12,
    name: "Bakrid (Eid-Ul-Zuha)",
    month: "Jun",
    date: "07-06-2025",
    day: "Saturday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 13, name: "Moharram", month: "Jul", date: "06-07-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 14,
    name: "Independence day",
    month: "Aug",
    date: "15-08-2025",
    day: "Friday",
    type: "National",
    remarks: "NULL",
  },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const types = ["National", "Regional", "Optional"]

const stateData = {
  "andaman-nicobar": { name: "Andaman and Nicobar Islands" },
  "andhra-pradesh": { name: "Andhra Pradesh" },
  "arunachal-pradesh": { name: "Arunachal Pradesh" },
  assam: { name: "Assam" },
  bihar: { name: "Bihar" },
  chandigarh: { name: "Chandigarh" },
  chhattisgarh: { name: "Chhattisgarh" },
  delhi: { name: "Delhi" },
  goa: { name: "Goa" },
  gujarat: { name: "Gujarat" },
  haryana: { name: "Haryana" },
  "himachal-pradesh": { name: "Himachal Pradesh" },
  "jammu-kashmir": { name: "Jammu and Kashmir" },
  jharkhand: { name: "Jharkhand" },
  karnataka: { name: "Karnataka" },
  kerala: { name: "Kerala" },
  ladakh: { name: "Ladakh" },
  "madhya-pradesh": { name: "Madhya Pradesh" },
  maharashtra: { name: "Maharashtra" },
  manipur: { name: "Manipur" },
  meghalaya: { name: "Meghalaya" },
  mizoram: { name: "Mizoram" },
  nagaland: { name: "Nagaland" },
  odisha: { name: "Odisha" },
  puducherry: { name: "Puducherry" },
  punjab: { name: "Punjab" },
  "tamil-nadu": { name: "Tamil Nadu" },
  telangana: { name: "Telangana" },
  "uttar-pradesh": { name: "Uttar Pradesh" },
  uttarakhand: { name: "Uttarakhand" },
  "west-bengal": { name: "West Bengal" },
}

export default function StateDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = stateData[slug] || stateData["andhra-pradesh"]

  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredHolidays = holidayData.filter((holiday) => {
    const monthMatch =
      selectedMonth === "all" || holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3)
    const typeMatch = selectedType === "all" || holiday.type === selectedType
    return monthMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          
          {/* Popular Search Sidebar */}
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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <h1 className="font-bold text-slate-800 text-lg sm:text-xl lg:text-2xl">
                        {data.name} Holidays
                      </h1>
                      <Badge className="px-2 py-1 text-xs bg-orange-400 text-white font-bold ml-2">
                        {filteredHolidays.length} Holidays
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* State Selector */}
                <div className="flex-shrink-0">
                  <Select defaultValue={slug}>
                    <SelectTrigger className="w-48 sm:w-64 border-gray-300 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(stateData).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                  List of National and Regional Holidays of {data.name} in 2025
                </h2>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                  Team Simpliance is driven to enable Simple, Beautiful and Effective compliance for you always. You now have
                  access to the most accurate state-wise holiday lists released by the Government gazettes.
                </p>

                <div className="flex items-center gap-2 text-orange-600 bg-orange-50 p-2 sm:p-3 rounded-lg border border-orange-200 mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Government Approved Holiday List for 2025</span>
                </div>
              </div>
            </div>

            {/* Filters Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 sm:p-4 shadow-sm mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
                
                {/* Month Filter */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Filter by Month</label>
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-full border-gray-300 h-9">
                      <SelectValue placeholder="All Months" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Months</SelectItem>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Filter by Type</label>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full border-gray-300 h-9">
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Info */}
                <div className="text-xs text-gray-600 lg:text-right">
                  <div className="font-medium">Effective From: 2025-01-01</div>
                  <div>Updated: 2025-08-28</div>
                </div>
              </div>
            </div>

            {/* Holidays Table */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-100 border-b border-gray-200">
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">S.No</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">Holiday Name</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">Month</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">Date</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">Day</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm">Type</th>
                      <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 text-xs sm:text-sm hidden sm:table-cell">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHolidays.map((holiday, index) => (
                      <tr key={holiday.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">{index + 1}</td>
                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm font-medium">{holiday.name}</td>
                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">{holiday.month}</td>
                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm font-mono">{holiday.date}</td>
                        <td className="p-2 sm:p-3 text-gray-700 text-xs sm:text-sm">{holiday.day}</td>
                        <td className="p-2 sm:p-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              holiday.type === "National"
                                ? "bg-green-100 text-green-800"
                                : holiday.type === "Regional"
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {holiday.type}
                          </span>
                        </td>
                        <td className="p-2 sm:p-3 text-gray-500 text-xs sm:text-sm hidden sm:table-cell">
                          {holiday.remarks === "NULL" ? "-" : holiday.remarks}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-white"
              >
                <Link href="/holidays">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Holiday Lists
                </Link>
              </Button>
              
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Download Holiday Calendar
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <div className="text-green-800 font-semibold text-sm">National Holidays</div>
                <div className="text-green-900 text-lg font-bold">
                  {filteredHolidays.filter(h => h.type === "National").length}
                </div>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <div className="text-blue-800 font-semibold text-sm">Regional Holidays</div>
                <div className="text-blue-900 text-lg font-bold">
                  {filteredHolidays.filter(h => h.type === "Regional").length}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                <div className="text-gray-800 font-semibold text-sm">Optional Holidays</div>
                <div className="text-gray-900 text-lg font-bold">
                  {filteredHolidays.filter(h => h.type === "Optional").length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { useState } from "react";
// import { Calendar, MapPin, ArrowLeft, Download } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

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
//   {
//     id: 2,
//     name: "Republic day",
//     month: "Jan",
//     date: "26-01-2025",
//     day: "Sunday",
//     type: "National",
//     remarks: "NULL",
//   },
//   {
//     id: 3,
//     name: "Maha Shivratri",
//     month: "Feb",
//     date: "26-02-2025",
//     day: "Wednesday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 4,
//     name: "Holi",
//     month: "Mar",
//     date: "14-03-2025",
//     day: "Friday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 5,
//     name: "Good Friday",
//     month: "Mar",
//     date: "30-03-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//   },
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
//   {
//     id: 8,
//     name: "Srirama Navami",
//     month: "Apr",
//     date: "06-04-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 9,
//     name: "Dr.B.R.Ambedkar's Birthday",
//     month: "Apr",
//     date: "14-04-2025",
//     day: "Monday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 10,
//     name: "Good Friday",
//     month: "Apr",
//     date: "18-04-2025",
//     day: "Friday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 11,
//     name: "May Day",
//     month: "May",
//     date: "01-05-2025",
//     day: "Thursday",
//     type: "National",
//     remarks: "NULL",
//   },
//   {
//     id: 12,
//     name: "Bakrid (Eid-Ul-Zuha)",
//     month: "Jun",
//     date: "07-06-2025",
//     day: "Saturday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 13,
//     name: "Moharram",
//     month: "Jul",
//     date: "06-07-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//   },
//   {
//     id: 14,
//     name: "Independence day",
//     month: "Aug",
//     date: "15-08-2025",
//     day: "Friday",
//     type: "National",
//     remarks: "NULL",
//   },
// ];

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
// ];
// const types = ["National", "Regional", "Optional"];

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
// };

// export default function StateDetailPage() {
//   const params = useParams();
//   const slug = params.slug as string;
//   const data = stateData[slug] || stateData["andhra-pradesh"];

//   const [selectedMonth, setSelectedMonth] = useState("all");
//   const [selectedType, setSelectedType] = useState("all");

//   const filteredHolidays = holidayData.filter((holiday) => {
//     const monthMatch =
//       selectedMonth === "all" ||
//       holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3);
//     const typeMatch = selectedType === "all" || holiday.type === selectedType;
//     return monthMatch && typeMatch;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           {/* Popular Search Sidebar */}
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-4 z-10">
//               <Card>
//                 <CardContent className="p-3">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4 lg:order-1 order-2">
//             {/* Page Header */}
//             <div className="mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-2">
//                     <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
//                       <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
//                     </div>
//                     <div className="flex items-center justify-between flex-1">
//                       <h1 className="font-bold text-slate-800 text-lg sm:text-xl lg:text-2xl">
//                         {data.name} Holidays :
//                       </h1>

//                       <div className="flex px-2 py-1 text-xs text-white font-semi-bold ml-2">
//                         <Select
//                           value={selectedMonth}
//                           onValueChange={setSelectedMonth}
//                         >
//                           <SelectTrigger className="w-full h-9 bg-orange-500 text-white">
//                             <SelectValue placeholder="All Months" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="all">All Months</SelectItem>
//                             {months.map((month) => (
//                               <SelectItem key={month} value={month}>
//                                 {month}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>

//                         <div className="mx-0.5">
//                           <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//                         <Download className="w-4 h-4 mr-2" />
//                         Download Holiday
//                       </Button>
//                         </div>
//                       </div>

                      
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                   This holidays are driven to enable Simple, Beautiful and
//                   Effective compliance for you always. You now have access to
//                   the most accurate state-wise holiday lists released by the
//                   Government gazettes.
//                 </p>
//               </div>
//             </div>

//               {/* Mobile Card View (Small Devices) */}
//           <div className="md:hidden space-y-3">
//               {filteredHolidays.map((holiday, index) => (
//                 <div key={holiday.id} className="bg-white rounded-lg border border-gray-200 p-3 shadow-sm">
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex-1">
//                       <h3 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1">
//                         {holiday.name}
//                       </h3>
//                       <div className="text-xs text-gray-600">
//                         {holiday.date} • {holiday.day}
//                       </div>
//                     </div>
//                     <div className="flex-shrink-0 ml-2">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           holiday.type === "National"
//                             ? "bg-green-100 text-green-800"
//                             : holiday.type === "Regional"
//                               ? "bg-blue-100 text-blue-800"
//                               : "bg-gray-100 text-gray-800"
//                         }`}
//                       >
//                         {holiday.type}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between text-xs text-gray-500">
//                     <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-center font-medium py-0.5">{index + 1}</span>
//                     <span>{holiday.month}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//              {/* Desktop Table View (Medium+ Devices) */}
//              <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full">
//                   <thead>
//                     <tr className="bg-orange-100 border-b border-gray-200">
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">S.No</th>
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">Holiday Name</th>
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">Month</th>
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">Date</th>
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">Day</th>
//                       <th className="p-3 text-left font-semibold text-gray-900 text-sm">Type</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filteredHolidays.map((holiday, index) => (
//                       <tr
//                         key={holiday.id}
//                         className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
//                       >
//                         <td className="p-3 text-gray-700 text-sm">{index + 1}</td>
//                         <td className="p-3 text-gray-700 text-sm font-medium">{holiday.name}</td>
//                         <td className="p-3 text-gray-700 text-sm">{holiday.month}</td>
//                         <td className="p-3 text-gray-700 text-sm font-mono">{holiday.date}</td>
//                         <td className="p-3 text-gray-700 text-sm">{holiday.day}</td>
//                         <td className="p-3">
//                           <span
//                             className={`px-2 py-1 rounded-full text-xs font-medium ${
//                               holiday.type === "National"
//                                 ? "bg-green-100 text-green-800"
//                                 : holiday.type === "Regional"
//                                   ? "bg-blue-100 text-blue-800"
//                                   : "bg-gray-100 text-gray-800"
//                             }`}
//                           >
//                             {holiday.type}
//                           </span>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Calendar, MapPin, ArrowLeft, Download } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

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
  {
    id: 2,
    name: "Republic day",
    month: "Jan",
    date: "26-01-2025",
    day: "Sunday",
    type: "National",
    remarks: "NULL",
  },
  {
    id: 3,
    name: "Maha Shivratri",
    month: "Feb",
    date: "26-02-2025",
    day: "Wednesday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 4,
    name: "Holi",
    month: "Mar",
    date: "14-03-2025",
    day: "Friday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 5,
    name: "Good Friday",
    month: "Mar",
    date: "30-03-2025",
    day: "Sunday",
    type: "Regional",
    remarks: "NULL",
  },
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
  {
    id: 8,
    name: "Srirama Navami",
    month: "Apr",
    date: "06-04-2025",
    day: "Sunday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 9,
    name: "Dr.B.R.Ambedkar's Birthday",
    month: "Apr",
    date: "14-04-2025",
    day: "Monday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 10,
    name: "Good Friday",
    month: "Apr",
    date: "18-04-2025",
    day: "Friday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 11,
    name: "May Day",
    month: "May",
    date: "01-05-2025",
    day: "Thursday",
    type: "National",
    remarks: "NULL",
  },
  {
    id: 12,
    name: "Bakrid (Eid-Ul-Zuha)",
    month: "Jun",
    date: "07-06-2025",
    day: "Saturday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 13,
    name: "Moharram",
    month: "Jul",
    date: "06-07-2025",
    day: "Sunday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 14,
    name: "Independence day",
    month: "Aug",
    date: "15-08-2025",
    day: "Friday",
    type: "National",
    remarks: "NULL",
  },
];

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
];
const types = ["National", "Regional", "Optional"];

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
};

export default function StateDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = stateData[slug] || stateData["andhra-pradesh"];

  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filteredHolidays = holidayData.filter((holiday) => {
    const monthMatch =
      selectedMonth === "all" ||
      holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3);
    const typeMatch = selectedType === "all" || holiday.type === selectedType;
    return monthMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 min-[320px]:px-3 min-[320px]:py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-5 xl:gap-6">
          {/* Popular Search Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-2 sm:top-4 z-10">
              <Card className="shadow-sm">
                <CardContent className="p-2 sm:p-3 md:p-4">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            {/* Page Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">

                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-2 sm:gap-3">
                      <h1 className="font-bold text-slate-800 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                        {data.name} Holidays :
                      </h1>

                      <div className="  flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-1 sm:gap-2">
                        <Select
                          value={selectedMonth}
                          onValueChange={setSelectedMonth}
                        >
                          <SelectTrigger className="flex justify-center p-[1.2rem] w-full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-orange-600 px-2">
                            <SelectValue placeholder="All Months" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all" className="text-xs sm:text-sm">All Months</SelectItem>
                            {months.map((month) => (
                              <SelectItem key={month} value={month} className="text-xs sm:text-sm">
                                {month}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Button className="h-10 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 hover:bg-orange-600 text-white text-xs min-[375px]:text-xs sm:text-sm transition-colors px-2 sm:px-3 md:px-4">
                          <Download className="w-3 h-3 min-[375px]:w-3 min-[375px]:h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className=" min-[375px]:inline">Download Holiday</span>
                          {/* <span className="min-[375px]:hidden">Download</span> */}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <p className="text-gray-600 leading-relaxed text-xs min-[375px]:text-xs sm:text-sm md:text-base text-justify">
                  This holidays are driven to enable Simple, Beautiful and
                  Effective compliance for you always. You now have access to
                  the most accurate state-wise holiday lists released by the
                  Government gazettes.
                </p>
              </div>
            </div>

            {/* Mobile Card View (Small Devices) */}
            <div className="block sm:hidden space-y-2 min-[375px]:space-y-3">
              {filteredHolidays.map((holiday, index) => (
                <div key={holiday.id} className="bg-white rounded-lg border border-gray-200 p-3 min-[375px]:p-3 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h3 className="font-semibold text-xs min-[375px]:text-sm text-gray-900 line-clamp-2 mb-1">
                        {holiday.name}
                      </h3>
                      <div className="text-xs text-gray-600">
                        {holiday.date} • {holiday.day}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
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
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-xs font-medium flex items-center justify-center">{index + 1}</span>
                    <span>{holiday.month}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet Card View (Small-Medium Devices) */}
            <div className="hidden sm:block md:hidden space-y-3">
              {filteredHolidays.map((holiday, index) => (
                <div key={holiday.id} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 bg-orange-400 rounded-full text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">
                          {holiday.name}
                        </h3>
                        <div className="text-sm text-gray-600">
                          {holiday.date} • {holiday.day} • {holiday.month}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          holiday.type === "National"
                            ? "bg-green-100 text-green-800"
                            : holiday.type === "Regional"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {holiday.type}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View (Medium+ Devices) */}
            <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-orange-100 border-b border-gray-200">
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">S.No</th>
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">Holiday Name</th>
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">Month</th>
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">Date</th>
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">Day</th>
                      <th className="p-2 md:p-3 lg:p-4 text-left font-semibold text-gray-900 text-xs md:text-sm lg:text-base">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHolidays.map((holiday, index) => (
                      <tr
                        key={holiday.id}
                        className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                      >
                        <td className="p-2 md:p-3 lg:p-4 text-gray-700 text-xs md:text-sm lg:text-base">{index + 1}</td>
                        <td className="p-2 md:p-3 lg:p-4 text-gray-700 text-xs md:text-sm lg:text-base font-medium">{holiday.name}</td>
                        <td className="p-2 md:p-3 lg:p-4 text-gray-700 text-xs md:text-sm lg:text-base">{holiday.month}</td>
                        <td className="p-2 md:p-3 lg:p-4 text-gray-700 text-xs md:text-sm lg:text-base font-mono">{holiday.date}</td>
                        <td className="p-2 md:p-3 lg:p-4 text-gray-700 text-xs md:text-sm lg:text-base">{holiday.day}</td>
                        <td className="p-2 md:p-3 lg:p-4">
                          <span
                            className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium ${
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






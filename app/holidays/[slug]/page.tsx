// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useParams } from "next/navigation";
// import { useState } from "react";
// import { Calendar, Download } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // ---------- Types ----------
// type Holiday = {
//   id: number;
//   name: string;
//   month: string;
//   date: string;
//   day: string;
//   type: "National" | "Regional" | "Optional" | string;
//   remarks: string;
//   fullDate: Date;
// };

// type StateMap = Record<string, { name: string }>;

// type DatePickerProps = {
//   selected: Date | null;
//   onChange: (value: Date | null) => void;
//   placeholder?: string;
// };

// // ---------- Data ----------
// const holidayData: Holiday[] = [
//   {
//     id: 1,
//     name: "Makar Sankranti",
//     month: "Jan",
//     date: "14-01-2025",
//     day: "Tuesday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 0, 14),
//   },
//   {
//     id: 2,
//     name: "Republic day",
//     month: "Jan",
//     date: "26-01-2025",
//     day: "Sunday",
//     type: "National",
//     remarks: "NULL",
//     fullDate: new Date(2025, 0, 26),
//   },
//   {
//     id: 3,
//     name: "Maha Shivratri",
//     month: "Feb",
//     date: "26-02-2025",
//     day: "Wednesday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 1, 26),
//   },
//   {
//     id: 4,
//     name: "Holi",
//     month: "Mar",
//     date: "14-03-2025",
//     day: "Friday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 2, 14),
//   },
//   {
//     id: 5,
//     name: "Good Friday",
//     month: "Mar",
//     date: "30-03-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 2, 30),
//   },
//   {
//     id: 6,
//     name: "Eid-Ul-Fitr (Ramzan)",
//     month: "Mar",
//     date: "31-03-2025",
//     day: "Monday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 2, 31),
//   },
//   {
//     id: 7,
//     name: "Bank Closing Day",
//     month: "Apr",
//     date: "01-04-2025",
//     day: "Tuesday",
//     type: "Optional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 3, 1),
//   },
//   {
//     id: 8,
//     name: "Srirama Navami",
//     month: "Apr",
//     date: "06-04-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 3, 6),
//   },
//   {
//     id: 9,
//     name: "Dr.B.R.Ambedkar's Birthday",
//     month: "Apr",
//     date: "14-04-2025",
//     day: "Monday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 3, 14),
//   },
//   {
//     id: 10,
//     name: "Good Friday",
//     month: "Apr",
//     date: "18-04-2025",
//     day: "Friday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 3, 18),
//   },
//   {
//     id: 11,
//     name: "May Day",
//     month: "May",
//     date: "01-05-2025",
//     day: "Thursday",
//     type: "National",
//     remarks: "NULL",
//     fullDate: new Date(2025, 4, 1),
//   },
//   {
//     id: 12,
//     name: "Bakrid (Eid-Ul-Zuha)",
//     month: "Jun",
//     date: "07-06-2025",
//     day: "Saturday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 5, 7),
//   },
//   {
//     id: 13,
//     name: "Moharram",
//     month: "Jul",
//     date: "06-07-2025",
//     day: "Sunday",
//     type: "Regional",
//     remarks: "NULL",
//     fullDate: new Date(2025, 6, 6),
//   },
//   {
//     id: 14,
//     name: "Independence day",
//     month: "Aug",
//     date: "15-08-2025",
//     day: "Friday",
//     type: "National",
//     remarks: "NULL",
//     fullDate: new Date(2025, 7, 15),
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
// ] as const;

// const stateData: StateMap = {
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

// // ---------- Simple Date Picker ----------
// const DatePicker = ({ selected, onChange, placeholder }: DatePickerProps) => {
//   return (
//     <input
//       type="date"
//       value={selected ? selected.toISOString().split("T")[0] : ""}
//       onChange={(e) => {
//         const v = e.target.value;
//         onChange(v ? new Date(v) : null);
//       }}
//       className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 px-2 sm:px-3 rounded-md border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//       placeholder={placeholder}
//     />
//   );
// };

// // ---------- Component ----------
// export default function StateDetailPage() {
//   const params = useParams<{ slug: string }>();
//   const slug = params.slug;
//   const data = stateData[slug] || stateData["andhra-pradesh"];

//   const [selectedMonth, setSelectedMonth] = useState<string>("all");
//   const [selectedType, setSelectedType] = useState<string>("all");
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const filteredHolidays = holidayData.filter((holiday) => {
//     // Month filter
//     const monthMatch =
//       selectedMonth === "all" ||
//       holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3);

//     // Type filter
//     const typeMatch = selectedType === "all" || holiday.type === selectedType;

//     // Date range filter
//     let dateMatch = true;
//     if (startDate && endDate) {
//       dateMatch = holiday.fullDate >= startDate && holiday.fullDate <= endDate;
//     } else if (startDate) {
//       dateMatch = holiday.fullDate >= startDate;
//     } else if (endDate) {
//       dateMatch = holiday.fullDate <= endDate;
//     }

//     return monthMatch && typeMatch && dateMatch;
//   });

//   const clearDateFilters = () => {
//     setStartDate(null);
//     setEndDate(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 min-[320px]:px-3 min-[320px]:py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-5 xl:gap-6">
//           {/* Popular Search Sidebar */}
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-2 sm:top-4 z-10">
//               <Card>
//                 <CardContent className="p-2 sm:p-3 md:p-4">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4 lg:order-1 order-2">
//             {/* Page Header */}
//             <div className="mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-2 sm:gap-3">
//                       <h1 className="font-bold text-slate-800 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
//                         {data.name} Holidays :
//                       </h1>

//                       <div className="flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-1 sm:gap-2">
//                         <Select value={selectedMonth} onValueChange={setSelectedMonth}>
//                           <SelectTrigger className="flex justify-center p-[1.2rem] w-full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-orange-600 px-2 focus-visible:ring-orange-500 focus-visible:border-orange-500">
//                             <SelectValue placeholder="Months" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem
//                               value="all"
//                               className="text-xs sm:text-sm focus:bg-orange-100 focus:text-orange-700"
//                             >
//                               Months
//                             </SelectItem>
//                             {months.map((month) => (
//                               <SelectItem
//                                 key={month}
//                                 value={month}
//                                 className="text-xs sm:text-sm focus:bg-orange-100 focus:text-orange-700"
//                               >
//                                 {month}
//                               </SelectItem>
//                             ))}
//                           </SelectContent>
//                         </Select>

//                         <Button className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 hover:bg-orange-600 text-white text-xs min-[375px]:text-xs sm:text-sm transition-colors px-2 sm:px-3 md:px-4">
//                           <Download className="w-3 h-3 min-[375px]:w-3 min-[375px]:h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                           <span className="min-[375px]:inline">Download Holiday</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mb-3 sm:mb-4 2xl:-mb-6">
//                 <p className="text-gray-600 leading-relaxed text-xs min-[375px]:text-xs sm:text-sm md:text-base text-justify">
                  // This holidays are driven to enable Simple, Beautiful and Effective compliance
                  // for you always. You now have access to the most accurate state-wise holiday
                  // lists released by the Government gazettes.
//                 </p>
//               </div>
//             </div>

//             {/* Filters Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-5">
//               {/* Start Date */}
//               <div className="flex items-center space-x-2">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
//                   From Date:
//                 </label>
//                 <DatePicker selected={startDate} onChange={setStartDate} placeholder="Start date" />
//               </div>

//               {/* End Date */}
//               <div className="flex items-center space-x-2">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">
//                   To Date:
//                 </label>
//                 <DatePicker selected={endDate} onChange={setEndDate} placeholder="End date" />
//               </div>
//             </div>



//             {/* Mobile Card View */}
//             <div className="block sm:hidden space-y-2 min-[375px]:space-y-3">
//               {filteredHolidays.map((holiday, index) => (
//                 <div
//                   key={holiday.id}
//                   className="bg-white rounded-lg border border-gray-200 p-3 min-[375px]:p-3 shadow-sm hover:border-orange-200 transition-colors"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex-1 pr-2">
//                       <h3 className="font-semibold text-xs min-[375px]:text-sm text-gray-900 line-clamp-2 mb-1">
//                         {holiday.name}
//                       </h3>
//                       <div className="text-xs text-gray-600">
//                         {holiday.date} • {holiday.day}
//                       </div>
//                     </div>
//                     <div className="flex-shrink-0">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-medium ${holiday.type === "National"
//                             ? "bg-green-100 text-green-800"
//                             : holiday.type === "Regional"
//                               ? "bg-blue-100 text-blue-800"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                       >
//                         {holiday.type}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between text-xs text-gray-500">
//                     <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-xs font-medium flex items-center justify-center">
//                       {index + 1}
//                     </span>
//                     <span>{holiday.month}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Tablet Card View */}
//             <div className="hidden sm:block md:hidden space-y-3">
//               {filteredHolidays.map((holiday, index) => (
//                 <div
//                   key={holiday.id}
//                   className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:border-orange-200 transition-colors"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3 flex-1">
//                       <span className="w-8 h-8 bg-orange-400 rounded-full text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
//                         {index + 1}
//                       </span>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-sm text-gray-900 mb-1">
//                           {holiday.name}
//                         </h3>
//                         <div className="text-sm text-gray-600">
//                           {holiday.date} • {holiday.day} • {holiday.month}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex-shrink-0">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${holiday.type === "National"
//                             ? "bg-green-100 text-green-800"
//                             : holiday.type === "Regional"
//                               ? "bg-blue-100 text-blue-800"
//                               : "bg-gray-100 text-gray-800"
//                           }`}
//                       >
//                         {holiday.type}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Table View */}
//             <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1600px]:max-w-[1560px] min-[1800px]:max-w-[1720px] min-[1920px]:max-w-[1880px] lg:mx-auto">
//               <div className="overflow-x-auto">
//                 <table className="w-full table-fixed">
//                   <thead>
//                     <tr className="bg-orange-500 border-b border-gray-200">
//                       {["S.No", "Holiday Name", "Month", "Date", "Day", "Type"].map((h) => (
//                         <th
//                           key={h}
//                           className="text-left font-semibold text-white whitespace-nowrap p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base"
//                         >
//                           {h}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {filteredHolidays.map((holiday, index) => (
//                       <tr
//                         key={holiday.id}
//                         className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
//                       >
//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
//                           {index + 1}
//                         </td>

//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base truncate">
//                           {holiday.name}
//                         </td>

//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
//                           {holiday.month}
//                         </td>

//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
//                           {holiday.date}
//                         </td>

//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
//                           {holiday.day}
//                         </td>

//                         <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4">
//                           <span
//                             className={`rounded-full font-medium px-2 py-1 md:px-3 md:py-1 lg:px-2 lg:py-1 2xl:px-3 2xl:py-1 min-[1600px]:px-4 min-[1600px]:py-1.5 text-xs md:text-sm lg:text-[12px] xl:text-[11px] 2xl:text-sm min-[1600px]:text-[15px] ${holiday.type === "National"
//                                 ? "bg-green-100 text-green-800"
//                                 : holiday.type === "Regional"
//                                   ? "bg-blue-100 text-blue-800"
//                                   : "bg-gray-100 text-gray-800"
//                               }`}
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

//             {/* No Results */}
//             {filteredHolidays.length === 0 && (
//               <Card className="text-center py-8 border-l-4 border-l-orange-500">
//                 <CardContent>
//                   <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">No holidays found</h3>
//                   <p className="text-gray-600 mb-4">
//                     Try adjusting your filters to see more results.
//                   </p>
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setSelectedMonth("all");
//                       setSelectedType("all");
//                       clearDateFilters();
//                     }}
//                     className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Clear All Filters
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

























// "use client";

// import { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useParams } from "next/navigation";
// import { Calendar, Download, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // ---------- Types ----------
// type HolidayDetail = {
//   id: number;
//   holiday_name: string;
//   type: string;
//   date: string;
//   date_formatted: string;
//   day: string;
//   month: string;
//   sort_order: number;
// };

// type HolidayApiResponse = {
//   data: {
//     id: number;
//     state: string;
//     state_name: string;
//     title: string;
//     slug: string;
//     year: string;
//     short_desc: string;
//     holiday_pdf_url: string | null;
//     details: HolidayDetail[];
//   };
// };

// type DatePickerProps = {
//   selected: Date | null;
//   onChange: (value: Date | null) => void;
//   placeholder?: string;
// };

// // ---------- Simple Date Picker ----------
// const DatePicker = ({ selected, onChange, placeholder }: DatePickerProps) => {
//   return (
//     <input
//       type="date"
//       value={selected ? selected.toISOString().split("T")[0] : ""}
//       onChange={(e) => {
//         const v = e.target.value;
//         onChange(v ? new Date(v) : null);
//       }}
//       className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 px-2 sm:px-3 rounded-md border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//       placeholder={placeholder}
//     />
//   );
// };

// // ---------- Component ----------
// export default function StateDetailPage() {
//   const params = useParams<{ slug: string; year?: string }>();
//   const slug = params.slug;
//   const yearFromUrl = params.year || "2025"; // URL se year ya default 2025

//   // State management
//   const [holidayData, setHolidayData] = useState<HolidayDetail[]>([]);
//   const [stateInfo, setStateInfo] = useState<{ 
//     name: string; 
//     year: string; 
//     pdfUrl: string | null;
//     description: string;
//   }>({
//     name: "",
//     year: "2025",
//     pdfUrl: null,
//     description: ""
//   });
//   const [year, setYear] = useState(yearFromUrl);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Dynamic filter states
//   const [selectedMonth, setSelectedMonth] = useState<string>("all");
//   const [selectedType, setSelectedType] = useState<string>("all");
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   // Dynamic data from API
//   const [availableMonths, setAvailableMonths] = useState<string[]>([]);
//   const [availableTypes, setAvailableTypes] = useState<string[]>([]);

//   // Update URL when year changes
//   const handleYearChange = (newYear: string) => {
//     setYear(newYear);
//     // Update URL to include new year
//     window.history.pushState({}, '', `/holidays/${slug}/${newYear}`);
//   };

//   // Fetch holiday data from API
//   useEffect(() => {
//     const fetchHolidayData = async () => {
//       try {
//         setIsLoading(true);
//         setError(null);

//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_API_BASE}/api/holidays/${slug}/${year}`
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP ${response.status}: Failed to fetch holiday data`);
//         }

//         const data: HolidayApiResponse = await response.json();
        
//         if (data.data) {
//           const holidays = data.data.details || [];
//           setHolidayData(holidays);
          
//           setStateInfo({
//             name: data.data.state_name || data.data.state || "Unknown State",
//             year: data.data.year,
//             pdfUrl: data.data.holiday_pdf_url,
//             description: data.data.short_desc || ""
//           });

//           // Extract unique months and types from API data
//           const months = Array.from(new Set(holidays.map(h => h.month))).filter(Boolean);
//           const types = Array.from(new Set(holidays.map(h => h.type))).filter(Boolean);
          
//           setAvailableMonths(months);
//           setAvailableTypes(types);
//         } else {
//           setHolidayData([]);
//           setAvailableMonths([]);
//           setAvailableTypes([]);
//         }
//       } catch (error: any) {
//         console.error("Error fetching holiday data:", error);
//         setError(error.message || "Failed to load holiday data");
//         setHolidayData([]);
//         setAvailableMonths([]);
//         setAvailableTypes([]);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     if (slug) {
//       fetchHolidayData();
//     }
//   }, [slug, year]);

//   // Filter holidays based on selected criteria
//   const filteredHolidays = holidayData.filter((holiday) => {
//     // Month filter
//     const monthMatch =
//       selectedMonth === "all" ||
//       holiday.month.toLowerCase() === selectedMonth.toLowerCase();

//     // Type filter
//     const typeMatch = selectedType === "all" || holiday.type === selectedType;

//     // Date range filter
//     let dateMatch = true;
//     if (startDate && endDate) {
//       const holidayDate = new Date(holiday.date);
//       dateMatch = holidayDate >= startDate && holidayDate <= endDate;
//     } else if (startDate) {
//       const holidayDate = new Date(holiday.date);
//       dateMatch = holidayDate >= startDate;
//     } else if (endDate) {
//       const holidayDate = new Date(holiday.date);
//       dateMatch = holidayDate <= endDate;
//     }

//     return monthMatch && typeMatch && dateMatch;
//   });

//   const clearDateFilters = () => {
//     setStartDate(null);
//     setEndDate(null);
//   };

//   const handleDownload = () => {
//     if (stateInfo.pdfUrl) {
//       window.open(stateInfo.pdfUrl, "_blank");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="flex items-center gap-3">
//           <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//           <span className="text-sm text-gray-600">Loading holidays for {year}...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <Card className="max-w-md mx-auto">
//           <CardContent className="text-center p-6">
//             <Calendar className="w-12 h-12 text-red-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Data</h3>
//             <p className="text-gray-600 mb-4">{error}</p>
//             <Button 
//               onClick={() => window.location.reload()} 
//               className="bg-orange-500 hover:bg-orange-600"
//             >
//               Try Again
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 min-[320px]:px-3 min-[320px]:py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-5 xl:gap-6">
          
//           {/* Popular Search Sidebar */}
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-2 sm:top-4 z-10">
//               <Card>
//                 <CardContent className="p-2 sm:p-3 md:p-4">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4 lg:order-1 order-2">
            
//             {/* Page Header */}
//             <div className="mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-1 gap-2 sm:gap-3">
//                       <h1 className="font-bold text-slate-800 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
//                         {stateInfo.name} Holidays ({stateInfo.year}) :
//                       </h1>

//                       <div className="flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-1 sm:gap-2">
//                         {/* Year Selector */}
//                         <Select value={year} onValueChange={handleYearChange}>
//                           <SelectTrigger className="flex justify-center p-[1.2rem] w-full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-orange-600 px-2 focus-visible:ring-orange-500 focus-visible:border-orange-500">
//                             <SelectValue />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="2025">2025</SelectItem>
//                             <SelectItem value="2024">2024</SelectItem>
//                             <SelectItem value="2023">2023</SelectItem>
//                           </SelectContent>
//                         </Select>

//                         {/* Dynamic Months Dropdown */}
//                         {availableMonths.length > 0 && (
//                           <Select value={selectedMonth} onValueChange={setSelectedMonth}>
//                             <SelectTrigger className="flex justify-center p-[1.2rem] w-full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-blue-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-blue-600 px-2 focus-visible:ring-blue-500 focus-visible:border-blue-500">
//                               <SelectValue placeholder="Month" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="all">All Months</SelectItem>
//                               {availableMonths.map((month) => (
//                                 <SelectItem key={month} value={month}>
//                                   {month}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         )}

//                         {/* Download Button - Only show if PDF available */}
//                         {stateInfo.pdfUrl && (
//                           <Button 
//                             onClick={handleDownload}
//                             className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 hover:bg-orange-600 text-white text-xs min-[375px]:text-xs sm:text-sm transition-colors px-2 sm:px-3 md:px-4"
//                           >
//                             <Download className="w-3 h-3 min-[375px]:w-3 min-[375px]:h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
//                             <span className="min-[375px]:inline">Download</span>
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Dynamic Description */}
//               {stateInfo.description && (
//                 <div className="mb-3 sm:mb-4">
//                   <p className="text-gray-600 leading-relaxed text-xs min-[375px]:text-xs sm:text-sm md:text-base text-justify">
//                     {stateInfo.description}
//                   </p>
//                 </div>
//               )}
//             </div>

//             {/* Filters Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 py-5">
//               {/* Type Filter - Only show if types available */}
//               {availableTypes.length > 0 && (
//                 <div className="flex flex-col space-y-1">
//                   <label className="text-xs sm:text-sm font-medium text-gray-700">
//                     Holiday Type:
//                   </label>
//                   <Select value={selectedType} onValueChange={setSelectedType}>
//                     <SelectTrigger className="h-7 min-[375px]:h-8 sm:h-9 md:h-10">
//                       <SelectValue placeholder="All Types" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="all">All Types</SelectItem>
//                       {availableTypes.map((type) => (
//                         <SelectItem key={type} value={type}>
//                           {type}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               )}

//               {/* Start Date */}
//               <div className="flex flex-col space-y-1">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700">
//                   From Date:
//                 </label>
//                 <DatePicker selected={startDate} onChange={setStartDate} placeholder="Start date" />
//               </div>

//               {/* End Date */}
//               <div className="flex flex-col space-y-1">
//                 <label className="text-xs sm:text-sm font-medium text-gray-700">
//                   To Date:
//                 </label>
//                 <DatePicker selected={endDate} onChange={setEndDate} placeholder="End date" />
//               </div>

//               {/* Clear Filters */}
//               <div className="flex flex-col justify-end">
//                 <Button
//                   variant="outline"
//                   onClick={() => {
//                     setSelectedMonth("all");
//                     setSelectedType("all");
//                     clearDateFilters();
//                   }}
//                   className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                 >
//                   Clear Filters
//                 </Button>
//               </div>
//             </div>

//             {/* Mobile Card View */}
//             <div className="block sm:hidden space-y-2 min-[375px]:space-y-3">
//               {filteredHolidays.map((holiday, index) => (
//                 <div
//                   key={holiday.id}
//                   className="bg-white rounded-lg border border-gray-200 p-3 min-[375px]:p-3 shadow-sm hover:border-orange-200 transition-colors"
//                 >
//                   <div className="flex items-start justify-between mb-2">
//                     <div className="flex-1 pr-2">
//                       <h3 className="font-semibold text-xs min-[375px]:text-sm text-gray-900 line-clamp-2 mb-1">
//                         {holiday.holiday_name}
//                       </h3>
//                       <div className="text-xs text-gray-600">
//                         {holiday.date_formatted} • {holiday.day}
//                       </div>
//                     </div>
//                     <div className="flex-shrink-0">
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
//                     <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-xs font-medium flex items-center justify-center">
//                       {index + 1}
//                     </span>
//                     <span>{holiday.month}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Tablet Card View */}
//             <div className="hidden sm:block md:hidden space-y-3">
//               {filteredHolidays.map((holiday, index) => (
//                 <div
//                   key={holiday.id}
//                   className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:border-orange-200 transition-colors"
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3 flex-1">
//                       <span className="w-8 h-8 bg-orange-400 rounded-full text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
//                         {index + 1}
//                       </span>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-sm text-gray-900 mb-1">
//                           {holiday.holiday_name}
//                         </h3>
//                         <div className="text-sm text-gray-600">
//                           {holiday.date_formatted} • {holiday.day} • {holiday.month}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex-shrink-0">
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${
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
//                 </div>
//               ))}
//             </div>

//             {/* Desktop Table View */}
//             <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//               <div className="overflow-x-auto">
//                 <table className="w-full table-fixed">
//                   <thead>
//                     <tr className="bg-orange-500 border-b border-gray-200">
//                       {["S.No", "Holiday Name", "Month", "Date", "Day", "Type"].map((h) => (
//                         <th
//                           key={h}
//                           className="text-left font-semibold text-white whitespace-nowrap p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px]"
//                         >
//                           {h}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {filteredHolidays.map((holiday, index) => (
//                       <tr
//                         key={holiday.id}
//                         className="border-b border-gray-100 hover:bg-orange-50 transition-colors"
//                       >
//                         <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">
//                           {index + 1}
//                         </td>

//                         <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">
//                           {holiday.holiday_name}
//                         </td>

//                         <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">
//                           {holiday.month}
//                         </td>

//                         <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">
//                           {holiday.date_formatted}
//                         </td>

//                         <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">
//                           {holiday.day}
//                         </td>

//                         <td className="p-2 md:p-3">
//                           <span
//                             className={`rounded-full font-medium px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm ${
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

//             {/* No Results */}
//             {filteredHolidays.length === 0 && holidayData.length > 0 && (
//               <Card className="text-center py-8 border-l-4 border-l-orange-500">
//                 <CardContent>
//                   <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">No holidays found</h3>
//                   <p className="text-gray-600 mb-4">
//                     Try adjusting your filters to see more results.
//                   </p>
//                   <Button
//                     variant="outline"
//                     onClick={() => {
//                       setSelectedMonth("all");
//                       setSelectedType("all");
//                       clearDateFilters();
//                     }}
//                     className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Clear All Filters
//                   </Button>
//                 </CardContent>
//               </Card>
//             )}

//             {/* No Data Available */}
//             {holidayData.length === 0 && !isLoading && (
//               <Card className="text-center py-8 border-l-4 border-l-orange-500">
//                 <CardContent>
//                   <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                   <h3 className="text-lg font-medium text-gray-900 mb-2">No holiday data available</h3>
//                   <p className="text-gray-600 mb-4">
//                     No holidays found for {stateInfo.name} in {year}.
//                   </p>
//                 </CardContent>
//               </Card>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Calendar, Download, Loader2 } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

// ---------- Types ----------
type HolidayDetail = {
  holiday_name: string;
  type: "National" | "Regional" | "Optional" | string;
  date: string;
  day: string;
  month: string;
  sort_order: number;
};

type ApiResponseData = {
  state: string;
  year: string;
  slug: string;
  title: string;
  short_desc: string;
  holiday_pdf_url: string | null;
  holiday_details: HolidayDetail[];
};

type DatePickerProps = {
  selected: Date | null;
  onChange: (value: Date | null) => void;
  placeholder?: string;
};

// ---------- Data ----------
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

const DatePicker = ({ selected, onChange, placeholder }: DatePickerProps) => {
  return (
    <input
      type="date"
      value={selected ? selected.toISOString().split("T")[0] : ""}
      onChange={(e) => {
        const v = e.target.value;
        onChange(v ? new Date(v) : null);
      }}
      className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 px-2 sm:px-3 rounded-md border border-gray-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
      placeholder={placeholder}
    />
  );
};

// ---------- Component ----------
export default function StateDetailPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  // Separate states for API data and holiday details
  const [apiData, setApiData] = useState<ApiResponseData | null>(null);
  const [holidayDetails, setHolidayDetails] = useState<HolidayDetail[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // Format state name for display
  const formatStateName = (state: string) => {
    return state
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Clean HTML from description
  const cleanDescription = (htmlString: string) => {
    return htmlString.replace(/<[^>]*>/g, '').trim();
  };

  // API call - Fixed version
  useEffect(() => {
    if (!slug) return;

    const fetchHolidays = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/holidaysdetail/${slug}`);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: Failed to fetch data`);
        }

        const result = await response.json();
        console.log("Full API Response:", result);

        // Store complete API data
        setApiData(result.data);
        // Store holiday details separately for filtering
        setHolidayDetails(result.data.holiday_details || []);

        console.log("API Data:", result.data);
        console.log("Holiday Details:", result.data.holiday_details);
      } catch (error: any) {
        console.error("Error fetching holidays:", error);
        setError(error.message || "Failed to load holiday data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHolidays();
  }, [slug]);

  // Filter holidays with date conversion
  const filteredHolidays = holidayDetails.filter((holiday) => {
    // Month filter
    const monthMatch =
      selectedMonth === "all" ||
      holiday.month.toLowerCase() === selectedMonth.toLowerCase();

    // Type filter  
    const typeMatch = selectedType === "all" || holiday.type === selectedType;

    // Date range filter
    let dateMatch = true;
    if (startDate || endDate) {
      const holidayDate = new Date(holiday.date);
      if (startDate && endDate) {
        dateMatch = holidayDate >= startDate && holidayDate <= endDate;
      } else if (startDate) {
        dateMatch = holidayDate >= startDate;
      } else if (endDate) {
        dateMatch = holidayDate <= endDate;
      }
    }

    return monthMatch && typeMatch && dateMatch;
  });

  const clearDateFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  // Format date for display (2025-10-02 -> 02-10-2025)
  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin text-orange-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading holiday data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !apiData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || "No data found"}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 min-[320px]:px-3 min-[320px]:py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-5 xl:gap-6">
          
          {/* Popular Search Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-2 sm:top-4 z-10">
              <Card>
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
                      {/* Fixed: Now using apiData.title and apiData.state */}
                      <h1 className="font-bold text-slate-800 text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                        {formatStateName(apiData.title)} Holidays ({apiData.year}) :
                      </h1>

                      <div className="flex flex-col min-[480px]:flex-row gap-2 min-[480px]:gap-1 sm:gap-2">
                        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                          <SelectTrigger className="flex justify-center p-[1.2rem] w-full min-[480px]:w-auto h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 text-white text-xs min-[375px]:text-xs sm:text-sm hover:bg-orange-600 px-2 focus-visible:ring-orange-500 focus-visible:border-orange-500">
                            <SelectValue placeholder="Months" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all" className="text-xs sm:text-sm focus:bg-orange-100 focus:text-orange-700">
                              All Months
                            </SelectItem>
                            {months.map((month) => (
                              <SelectItem
                                key={month}
                                value={month}
                                className="text-xs sm:text-sm focus:bg-orange-100 focus:text-orange-700"
                              >
                                {month}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <Button 
                          className="h-7 min-[375px]:h-8 sm:h-9 md:h-10 bg-orange-500 hover:bg-orange-600 text-white text-xs min-[375px]:text-xs sm:text-sm transition-colors px-2 sm:px-3 md:px-4"
                          onClick={() => {
                            if (apiData.holiday_pdf_url) {
                              window.open(apiData.holiday_pdf_url, '_blank');
                            } else {
                              alert("PDF not available");
                            }
                          }}
                        >
                          <Download className="w-3 h-3 min-[375px]:w-3 min-[375px]:h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          <span className="min-[375px]:inline">Download Holiday</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-3 sm:mb-4 2xl:-mb-6">
                <p className="text-gray-600 leading-relaxed text-xs min-[375px]:text-xs sm:text-sm md:text-base text-justify">
                  {apiData.short_desc ? 
                    cleanDescription(apiData.short_desc) :
                    "This holidays are driven to enable Simple, Beautiful and Effective compliance for you always. You now have access to the most accurate state-wise holiday lists released by the Government gazettes."
                  }
                </p>
              </div>
            </div>

            {/* Filters Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-5">
              <div className="flex items-center space-x-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">From Date:</label>
                <DatePicker selected={startDate} onChange={setStartDate} placeholder="Start date" />
              </div>

              <div className="flex items-center space-x-2">
                <label className="text-xs sm:text-sm font-medium text-gray-700 mb-1">To Date:</label>
                <DatePicker selected={endDate} onChange={setEndDate} placeholder="End date" />
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="block sm:hidden space-y-2 min-[375px]:space-y-3">
              {filteredHolidays.map((holiday, index) => (
                <div
                  key={`${holiday.holiday_name}-${index}`}
                  className="bg-white rounded-lg border border-gray-200 p-3 min-[375px]:p-3 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h3 className="font-semibold text-xs min-[375px]:text-sm text-gray-900 line-clamp-2 mb-1">
                        {holiday.holiday_name}
                      </h3>
                      <div className="text-xs text-gray-600">
                        {formatDisplayDate(holiday.date)} • {holiday.day}
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
                    <span className="w-5 h-5 bg-orange-400 rounded-full text-white text-xs font-medium flex items-center justify-center">
                      {index + 1}
                    </span>
                    <span>{holiday.month.slice(0, 3)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet Card View */}
            <div className="hidden sm:block md:hidden space-y-3">
              {filteredHolidays.map((holiday, index) => (
                <div
                  key={`${holiday.holiday_name}-${index}`}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:border-orange-200 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-8 h-8 bg-orange-400 rounded-full text-white text-sm font-medium flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm text-gray-900 mb-1">{holiday.holiday_name}</h3>
                        <div className="text-sm text-gray-600">
                          {formatDisplayDate(holiday.date)} • {holiday.day} • {holiday.month.slice(0, 3)}
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

            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden lg:max-w-6xl xl:max-w-7xl 2xl:max-w-[1400px] min-[1600px]:max-w-[1560px] min-[1800px]:max-w-[1720px] min-[1920px]:max-w-[1880px] lg:mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-orange-500 border-b border-gray-200">
                      {["S.No", "Holiday Name", "Month", "Date", "Day", "Type"].map((h) => (
                        <th
                          key={h}
                          className="text-left font-semibold text-white whitespace-nowrap p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHolidays.map((holiday, index) => (
                      <tr key={`${holiday.holiday_name}-${index}`} className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                          {index + 1}
                        </td>
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base truncate">
                          {holiday.holiday_name}
                        </td>
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                          {holiday.month.slice(0, 3)}
                        </td>
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                          {formatDisplayDate(holiday.date)}
                        </td>
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4 text-gray-700 text-xs md:text-sm lg:text-sm xl:text-[13px] 2xl:text-[15px] min-[1600px]:text-base">
                          {holiday.day}
                        </td>
                        <td className="p-2 md:p-3 lg:p-2 xl:p-2 2xl:p-3 min-[1600px]:p-4">
                          <span
                            className={`rounded-full font-medium px-2 py-1 md:px-3 md:py-1 lg:px-2 lg:py-1 2xl:px-3 2xl:py-1 min-[1600px]:px-4 min-[1600px]:py-1.5 text-xs md:text-sm lg:text-[12px] xl:text-[11px] 2xl:text-sm min-[1600px]:text-[15px] ${
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

            {/* No Results */}
            {filteredHolidays.length === 0 && (
              <Card className="text-center py-8 border-l-4 border-l-orange-500">
                <CardContent>
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No holidays found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedMonth("all");
                      setSelectedType("all");
                      clearDateFilters();
                    }}
                    className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    Clear All Filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Metadata } from "next";
// import Link from "next/link";
// import {
//   Search,
//   Calculator,
//   Users,
//   IndianRupee,
//   Eye,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export const metadata: Metadata = {
//   title: "Professional Tax - State-wise Rates & Slabs | E-Library",
//   description:
//     "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
//   keywords:
//     "professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms",
// };

// const professionalTaxStates = [
//   {
//     name: "Andhra Pradesh",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/andhra-pradesh",
//   },
//   {
//     name: "Assam",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/assam",
//   },
//   {
//     name: "Bihar",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/bihar",
//   },
//   {
//     name: "Chhattisgarh",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/chhattisgarh",
//   },
//   {
//     name: "Gujarat",
//     maxRate: 2500,
//     slabs: 6,
//     status: "Applicable",
//     link: "/professional-tax/gujarat",
//   },
//   {
//     name: "Jharkhand",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/jharkhand",
//   },
//   {
//     name: "Karnataka",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/karnataka",
//   },
//   {
//     name: "Kerala",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/kerala",
//   },
//   {
//     name: "Madhya Pradesh",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/madhya-pradesh",
//   },
//   {
//     name: "Maharashtra",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/maharashtra",
//   },
//   {
//     name: "Meghalaya",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/meghalaya",
//   },
//   {
//     name: "Odisha",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/odisha",
//   },
//   {
//     name: "Sikkim",
//     maxRate: 2500,
//     slabs: 3,
//     status: "Applicable",
//     link: "/professional-tax/sikkim",
//   },
//   {
//     name: "Tamil Nadu",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/tamil-nadu",
//   },
//   {
//     name: "Telangana",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/telangana",
//   },
//   {
//     name: "Tripura",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/tripura",
//   },
//   {
//     name: "West Bengal",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/west-bengal",
//   },
// ];

// const nonApplicableStates = [
//   "Arunachal Pradesh",
//   "Chandigarh",
//   "Delhi",
//   "Goa",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Ladakh",
//   "Manipur",
//   "Mizoram",
//   "Nagaland",
//   "Punjab",
//   "Rajasthan",
//   "Uttar Pradesh",
//   "Uttarakhand",
// ];

// const states = [
//   "All States",
//   "Maharashtra",
//   "Karnataka",
//   "Gujarat",
//   "Tamil Nadu",
//   "West Bengal",
//   "Kerala",
// ];

// const quickActionCards = [
//   {
//     title: "PT Calculator",
//     description: "Calculate professional tax for all states",
//     icon: Calculator,
//     action: "View Calculator",
//     link: "/calculators/professional-tax",
//   },
//   {
//     title: "Intrest & Penality Calculator",
//     description: "AI Powered PT Interest & Penalties Calculator",
//     icon: Calculator,
//     action: "View AI Tool",
//     link: "/ai-tools/pt-calculator",
//   },
// ];

// export default function ProfessionalTax() {
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
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">
//                     Professional Tax :
//                   </h1>
//                   <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
//                     Professional Tax is a state-level tax levied on all persons
//                     earning income through employment, profession, or calling.
//                     It is governed by individual state legislation and varies
//                     across states in terms of rates, slabs, and compliance
//                     requirements.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Horizontal Filters */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10">
//               {/* Search Input */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
//                 <Input
//                   placeholder="Search by state..."
//                   className="pl-10 sm:pl-12 h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm 
//                                   "
//                 />
//               </div>

//               {/* State Dropdown */}
//               <div className="w-full sm:w-auto">
//                 <Select>
//                   <SelectTrigger
//                     className="
//                           w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10
//                           bg-white text-gray-900 border border-gray-300 rounded-lg
//                           text-xs sm:text-sm
//                           focus:outline-none
//                           focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white
//                           !focus-visible:ring-orange-500 !focus-visible:border-orange-500
//                           hover:bg-orange-50
//                         "
//                   >
//                     <SelectValue placeholder="Select state" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-gray-200 shadow-md">
//                     {states.map((state) => (
//                       <SelectItem
//                         key={state}
//                         value={state}
//                         className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
//                       >
//                         {state}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
//                 <CardContent className="p-6 ">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         Applicable States
//                       </p>
//                       <p className="text-2xl font-bold text-gray-900">
//                         {professionalTaxStates.length}
//                       </p>
//                     </div>
//                     <Users className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40" >
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         Maximum Rate
//                       </p>
//                       <p className="text-2xl font-bold text-gray-900">₹2,500</p>
//                     </div>
//                     <IndianRupee className="w-8 h-8 text-green-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               {quickActionCards.map((card, index) => (
//                 <Card
//                   key={index}
//                   className="border-l-4 border-l-orange-500 lg:h-40"
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <div>
//                         <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
//                           {card.title}
//                         </p>

//                       </div>
//                       <card.icon className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
//                     </div>
//                     <Link href={card.link} aria-label="View Calculator">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-orange-400 text-white hover:text-orange-600 hover:cursor-pointer"
//                         aria-label="View Calculator"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         {card.action}
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* State-wise Applicability */}
//             <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle>State-wise Applicability :</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                   {/* Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Applicable States
//                     </h3>
//                     <div className="space-y-3">
//                       {professionalTaxStates.map((state, index) => (
//                         <Link
//                           key={index}
//                           href={state.link}
//                           aria-label="View State-wise Applicability"
//                         >
//                           <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
//                             <div>
//                               <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
//                                 {index + 1}. {state.name}
//                               </span>
//                               <div className="text-sm text-gray-700">
//                                 Max Rate: ₹{state.maxRate} | {state.slabs} Slabs
//                               </div>
//                             </div>
//                             <Badge
//                               variant="secondary"
//                               className="bg-green-100 text-green-800"
//                             >
//                               {state.status}
//                             </Badge>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                   {/* Non-Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Non-Applicable States
//                     </h3>
//                     <div className="space-y-3">
//                       {nonApplicableStates.map((state, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
//                         >
//                           <span className="text-gray-700">
//                             {index + 1}. {state}
//                           </span>
//                           <Badge
//                             variant="secondary"
//                             className="bg-gray-100 text-gray-600"
//                           >
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
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent>
//                   <PopularSearch className="mb-6" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







// app/(library)/professional-tax/page.tsx


// import { Metadata } from "next";
// import Link from "next/link";
// import { Search, Calculator, Users, IndianRupee, Eye } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import PopularSearch from "../PopularSearch/PopularSearch";

// export const metadata: Metadata = {
//   title: "Professional Tax - State-wise Rates & Slabs | E-Library",
//   description:
//     "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
//   keywords:
//     "professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms",
// };

// // ---- Types matching your API ---

// type ApplicableState = {
//   state_name: string;
//   state_slug: string;
//   applicable: boolean;
//   updated_date: string | null;
//   effective_date: string | null;
//   max_rate: number | null;
//   slabs: number | null;
// };

// type PTApi = {
//   applicable_count: number;
//   non_applicable_count: number;
//   maximum_rate: number | null;
//   applicable_states: ApplicableState[];
//   non_applicable_states: string[]; 
// };

// // ---- Config ----
// // const API_BASE = process.env.NEXT_PUBLIC_API_BASE?.trim() || "http://100.110.147.101:8000";

// const API_BASE = "http://100.110.147.101:8000";

// export const revalidate = 1800; // cache for 30 min

// async function getPTData(): Promise<PTApi | null> {
//   try {
//     const res = await fetch(`${API_BASE}/api/professional-tax`, {
//       next: { revalidate },
//     });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     return (await res.json()) as PTApi;
//   } catch (err) {
//     console.error("PT API error:", err);
//     return null;
//   }
// }

// const quickActionCards = [
//   {
//     title: "PT Calculator",
//     description: "Calculate professional tax for all states",
//     icon: Calculator,
//     action: "View Calculator",
//     link: "/calculators/professional-tax",
//   },
//   {
//     title: "Intrest & Penality Calculator",
//     description: "AI Powered PT Interest & Penalties Calculator",
//     icon: Calculator,
//     action: "View AI Tool",
//     link: "/ai-tools/pt-calculator",
//   },
// ];


// export default async function ProfessionalTax() {
//   const data = await getPTData();

//   // Safe fallbacks if API down
//   const applicableCount = data?.applicable_count ?? 0;
//   const nonApplicableCount = data?.non_applicable_count ?? 0;
//   const maximumRate = data?.maximum_rate ?? 0;
//   const applicableStates = data?.applicable_states ?? [];
//   const nonApplicableStates = data?.non_applicable_states ?? [];

//   // Dropdown list (you can expand later)
//   const stateOptions = ["All States", ...applicableStates.map((s) => s.state_name)];

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
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">Professional Tax :</h1>
//                   <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
//                     Professional Tax is a state-level tax levied on all persons earning income
//                     through employment, profession, or calling. It is governed by individual state
//                     legislation and varies across states in terms of rates, slabs, and compliance
//                     requirements.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Horizontal Filters */}
//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10">
//               {/* Search Input (non-functional placeholder for now) */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
//                 <Input
//                   placeholder="Search by state..."
//                   className="pl-10 sm:pl-12 h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm"
//                 />
//               </div>

//               {/* State Dropdown (list fed from API) */}
//               <div className="w-full sm:w-auto">
//                 <Select>
//                   <SelectTrigger className="w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10 bg-white text-gray-900 border border-gray-300 rounded-lg text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white !focus-visible:ring-orange-500 !focus-visible:border-orange-500 hover:bg-orange-50">
//                     <SelectValue placeholder="Select state" />
//                   </SelectTrigger>
//                   <SelectContent className="bg-white border border-gray-200 shadow-md">
//                     {stateOptions.map((state) => (
//                       <SelectItem
//                         key={state}
//                         value={state}
//                         className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
//                       >
//                         {state}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Applicable States</p>
//                       <p className="text-2xl font-bold text-gray-900">{applicableCount}</p>
//                     </div>
//                     <Users className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Maximum Rate</p>
//                       <p className="text-2xl font-bold text-gray-900">₹{maximumRate.toLocaleString("en-IN")}</p>
//                     </div>
//                     <IndianRupee className="w-8 h-8 text-green-600" />
//                   </div>
//                 </CardContent>
//               </Card>

//               {quickActionCards.map((card, index) => (
//                 <Card key={index} className="border-l-4 border-l-orange-500 lg:h-40">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       <div>
//                         <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
//                           {card.title}
//                         </p>
//                       </div>
//                       <card.icon className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
//                     </div>
//                     <Link href={card.link} aria-label="View Calculator">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-orange-400 text-white hover:text-orange-600 hover:cursor-pointer"
//                         aria-label="View Calculator"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         {card.action}
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>

//             {/* State-wise Applicability */}
//             <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle>State-wise Applicability :</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 {data === null ? (
//                   <div className="text-sm text-red-600">
//                     Couldn&apos;t load data. Please try again later.
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                     {/* Applicable States */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
//                       <div className="space-y-3">
//                         {applicableStates.length === 0 && (
//                           <div className="text-sm text-gray-600">No states available.</div>
//                         )}
//                         {applicableStates.map((state, index) => (
//                           <Link
//                             key={state.state_slug}
//                             href={`/professional-tax/${state.state_slug}`}
//                             aria-label={`View ${state.state_name}`}
//                           >
//                             <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
//                               <div>
//                                 <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
//                                   {index + 1}. {state.state_name}
//                                 </span>
//                                 <div className="text-sm text-gray-700">
//                                   Max Rate: ₹{(state.max_rate ?? 0).toLocaleString("en-IN")} |{" "}
//                                   {state.slabs ?? 0} Slabs
//                                 </div>
//                               </div>
//                               <Badge variant="secondary" className="bg-green-100 text-green-800">
//                                 Applicable
//                               </Badge>
//                             </div>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Non-Applicable States */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                         Non-Applicable States
//                       </h3>
//                       <div className="space-y-3">
//                         {nonApplicableStates.length === 0 && (
//                           <div className="text-sm text-gray-600">No states in this list.</div>
//                         )}
//                         {nonApplicableStates.map((name, index) => (
//                           <div
//                             key={name}
//                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
//                           >
//                             <span className="text-gray-700">
//                               {index + 1}. {name}
//                             </span>
//                             <Badge variant="secondary" className="bg-gray-100 text-gray-600">
//                               Not Applicable
//                             </Badge>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent>
//                   <PopularSearch className="mb-6" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }










"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Users, IndianRupee, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PopularSearch from "../PopularSearch/PopularSearch";

// ✅ Import your existing filter component (adjust path if needed)
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

// ---------- (Optional) SEO — Next will ignore in client files, safe to keep ----------
 const metadata = {
  title: "Professional Tax - State-wise Rates & Slabs | E-Library",
  description:
    "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
  keywords:
    "professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms",
};

// ---------- Types ----------
type ApplicableState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date: string | null;
  effective_date: string | null;
  max_rate: number | null;
  slabs: number | null;
};

type PTApi = {
  applicable_count: number;
  non_applicable_count: number;
  maximum_rate: number | null;
  applicable_states: ApplicableState[];
  non_applicable_states: string[];
};

// ---------- Config ----------
const API_BASE =
  // (process.env.NEXT_PUBLIC_API_BASE || "").trim() ||
  // "http://100.110.147.101:8000";
  "http://100.110.147.101:8000";

// ---------- Page (single-file, client-side fetch) ----------
export default function ProfessionalTaxPage() {
  const [data, setData] = useState<PTApi | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  // filters
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All States");

  // fetch once on mount
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/api/professional-tax`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: PTApi = await res.json();
        setData(json);
      } catch (e: any) {
        setErr(e?.message || "Failed to load.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const applicableStates = data?.applicable_states ?? [];
  const nonApplicableStates = data?.non_applicable_states ?? [];

  // Dropdown options from API
  const stateOptions = useMemo(
    () => ["All States", ...applicableStates.map((s) => s.state_name)],
    [applicableStates]
  );

  // filtering
  const filteredApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return applicableStates.filter((s) => {
      const byText = s.state_name.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || s.state_name === selectedState;
      return byText && byPick;
    });
  }, [applicableStates, query, selectedState]);

  const filteredNonApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return nonApplicableStates.filter((name) => {
      const byText = name.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || name === selectedState;
      return byText && byPick;
    });
  }, [nonApplicableStates, query, selectedState]);

  const applicableCount = data?.applicable_count ?? 0;
  const maximumRate = data?.maximum_rate ?? 0;

  const quickActionCards = [
    {
      title: "PT Calculator",
      icon: Calculator,
      action: "View Calculator",
      link: "/calculators/professional-tax",
    },
    {
      title: "Intrest & Penality Calculator",
      icon: Calculator,
      action: "View AI Tool",
      link: "/ai-tools/pt-calculator",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Professional Tax :
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Professional Tax is a state-level tax levied on all persons
                    earning income through employment, profession, or calling.
                    It is governed by individual state legislation and varies
                    across states in terms of rates, slabs, and compliance
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
                <CardContent className="p-6 ">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {loading ? "…" : applicableCount}
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Maximum Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {loading ? "…" : `₹${maximumRate.toLocaleString("en-IN")}`}
                      </p>
                    </div>
                    <IndianRupee className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              {quickActionCards.map((card, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 lg:h-40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {card.title}
                        </p>
                      </div>
                      <card.icon className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                    </div>
                    <Link href={card.link} aria-label="View Calculator">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-orange-400 text-white hover:text-orange-600 hover:cursor-pointer"
                        aria-label="View Calculator"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {card.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 🔎 Filters using your SearchAndStateFilter */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <SearchAndStateFilter
                stateOptions={stateOptions}
                placeholder="Search by state..."
                defaultState="All States"
                onSearchChange={setQuery}
                onStateChange={setSelectedState}
              />
            </div>

            {/* Error / Loading */}
            {err && (
              <div className="mb-6 text-sm text-red-600">
                Couldn&apos;t load data: {err}
              </div>
            )}
            {loading && !data && (
              <div className="mb-6 text-sm text-gray-600">Loading…</div>
            )}

            {/* State-wise Applicability */}
            {!loading && data && (
              <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle>State-wise Applicability :</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Applicable States
                      </h3>
                      <div className="space-y-3">
                        {filteredApplicable.length === 0 && (
                          <div className="text-sm text-gray-600">No states found.</div>
                        )}
                        {filteredApplicable.map((state, index) => (
                          <Link
                            key={state.state_slug}
                            href={`/professional-tax/${state.state_slug}`}
                            aria-label={`View ${state.state_name}`}
                          >
                            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                              <div>
                                <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                  {index + 1}. {state.state_name}
                                </span>
                                <div className="text-sm text-gray-700">
                                  Max Rate: ₹{(state.max_rate ?? 0).toLocaleString("en-IN")} |{" "}
                                  {state.slabs ?? 0} Slabs
                                </div>
                              </div>
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Applicable
                              </Badge>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    {/* Non-Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Non-Applicable States
                      </h3>
                      <div className="space-y-3">
                        {filteredNonApplicable.length === 0 && (
                          <div className="text-sm text-gray-600">No states found.</div>
                        )}
                        {filteredNonApplicable.map((name, index) => (
                          <div
                            key={name}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                          >
                            <span className="text-gray-700">
                              {index + 1}. {name}
                            </span>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                              Not Applicable
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 ">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6 " />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import { useState, useMemo } from "react";
// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronRight } from "lucide-react";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import SearchAndStateFilter from "../SearchAndStateFilter/page";

// const allStates = [
//   { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar", available: true },
//   { name: "Andhra Pradesh", slug: "andhra-pradesh", available: true },
//   { name: "Arunachal Pradesh", slug: "arunachal-pradesh", available: true },
//   { name: "Assam", slug: "assam", available: true },
//   { name: "Bihar", slug: "bihar", available: true },
//   { name: "Chandigarh", slug: "chandigarh", available: true },
//   { name: "Chhattisgarh", slug: "chhattisgarh", available: true },
//   { name: "Central", slug: "central", available: false },
//   { name: "Daman and Diu", slug: "daman-diu", available: false },
//   { name: "Delhi", slug: "delhi", available: true },
//   { name: "Goa", slug: "goa", available: true },
//   { name: "Gujarat", slug: "gujarat", available: true },
//   { name: "Haryana", slug: "haryana", available: true },
//   { name: "Himachal Pradesh", slug: "himachal-pradesh", available: true },
//   { name: "Jammu and Kashmir", slug: "jammu-kashmir", available: true },
//   { name: "Jharkhand", slug: "jharkhand", available: true },
//   { name: "Karnataka", slug: "karnataka", available: true },
//   { name: "Kerala", slug: "kerala", available: true },
//   { name: "Ladakh", slug: "ladakh", available: true },
//   { name: "Lakshadweep", slug: "lakshadweep", available: false },
//   { name: "Madhya Pradesh", slug: "madhya-pradesh", available: true },
//   { name: "Maharashtra", slug: "maharashtra", available: true },
//   { name: "Manipur", slug: "manipur", available: true },
//   { name: "Meghalaya", slug: "meghalaya", available: true },
//   { name: "Mizoram", slug: "mizoram", available: true },
//   { name: "Nagaland", slug: "nagaland", available: true },
//   { name: "Odisha", slug: "odisha", available: true },
//   { name: "Puducherry", slug: "puducherry", available: true },
//   { name: "Punjab", slug: "punjab", available: true },
//   { name: "Rajasthan", slug: "rajasthan", available: true },
//   { name: "Sikkim", slug: "sikkim", available: false },
//   { name: "Tamil Nadu", slug: "tamil-nadu", available: true },
//   { name: "Telangana", slug: "telangana", available: true },
//   { name: "Tripura", slug: "tripura", available: true },
//   { name: "Uttar Pradesh", slug: "uttar-pradesh", available: true },
//   { name: "Uttarakhand", slug: "uttarakhand", available: true },
//   { name: "West Bengal", slug: "west-bengal", available: true },
// ];

// export default function ApplicabilitySEActPage() {
//   // Local UI state for filtering
//   const [q, setQ] = useState("");
//   const [stateFilter, setStateFilter] = useState("All States");

//   // Filter states based on search and state filter
//   const searchNeedle = q.trim().toLowerCase();
//   const byText = (state) =>
//     !searchNeedle ||
//     state.name.toLowerCase().includes(searchNeedle);

//   const byState = (state) => stateFilter === "All States" || state.name === stateFilter;

//   const filteredStates = useMemo(
//     () => allStates.filter((state) => byText(state) && byState(state)),
//     [q, stateFilter]
//   );

//   // Unique state list for dropdown
//   const allStateNames = useMemo(() => {
//     const uniqueNames = [...new Set(allStates.map(state => state.name))];
//     return ["All States", ...uniqueNames];
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           {/* Sidebar */}
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
//               <div className="mb-4">
//                 <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                   Applicability of Shops & Establishments Act :
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                   Explore the Applicability of Shops & Establishments Act covering registration, employee conditions, leave policies, and compliance needs. Understand its impact on shops, offices, and businesses to stay aligned with state labour regulations.
//                 </p>
//               </div>
//             </div>

//             {/* Search and State Filter */}
//             <div className="mb-6 sm:mb-8 md:mb-10">
//               <SearchAndStateFilter
//                 searchValue={q}
//                 stateValue={stateFilter}
//                 onSearchChange={setQ}
//                 onStateChange={setStateFilter}
//                 isPending={false}
//                 states={allStateNames?.map((name) => ({ label: name, value: name }))}
//               />
//             </div>

//             {/* States Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
//               {filteredStates.map((state) => (
//                 <Link
//                   key={state.slug}
//                   href={`/applicability-se-act/${state.slug}`}
//                   aria-label={state.name}
//                 >
//                   <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
//                     <div className="p-2 sm:p-3">
//                       <div className="flex items-center justify-between">
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
//                             {state.name}
//                           </h3>
//                         </div>
//                         <div className="flex-shrink-0 ml-2">
//                           <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
//                             <ChevronRight className="w-4 h-4 text-white" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// "use client";

// import { useState, useEffect, useMemo } from "react";
// import Link from "next/link";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronRight } from "lucide-react";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import SearchAndStateFilter from "../SearchAndStateFilter/page";

// // Define types for state and API response
// interface State {
//   state_name: string;
//   state_slug: string;
//   applicable: boolean;
// }

// interface ApiResponse {
//   applicable_states_count: number;
//   applicable_states: State[];
// }

// export default function ApplicabilitySEActPage() {
//   // Local UI state for filtering
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   // State to store the dynamic data from the API
//   const [allStates, setAllStates] = useState<State[]>([]);

//   // Fetch the data when the component mounts
//   useEffect(() => {
//     const fetchStateData = async () => {
//       try {
//         const response = await fetch("https://prns.prisminfoways.com/api/applicability");
//         const result: ApiResponse = await response.json();  // Type the API response
//         const statesData = result.applicable_states;  // Extracting the applicable states from the API response
//         setAllStates(statesData);  // Update state with the applicable states
//       } catch (error) {
//         console.error("Error fetching state data:", error);
//       }
//     };
//     fetchStateData();
//   }, []);

//   // Filter states based on search and state filter
//   const searchNeedle = q.trim().toLowerCase();
//   const byText = (state: State) =>
//     !searchNeedle ||
//     state.state_name.toLowerCase().includes(searchNeedle);

//   const byState = (state: State) => stateFilter === "All States" || state.state_name === stateFilter;

//   const filteredStates = useMemo(
//     () => allStates.filter((state) => byText(state) && byState(state)),
//     [q, stateFilter, allStates]
//   );

//   // Unique state list for dropdown
//   const allStateNames = useMemo(() => {
//     const uniqueNames = [...new Set(allStates.map(state => state.state_name))];
//     return ["All States", ...uniqueNames];
//   }, [allStates]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           {/* Sidebar */}
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
//               <div className="mb-4">
//                 <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                   Applicability of Shops & Establishments Act :
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                   Explore the Applicability of Shops & Establishments Act covering registration, employee conditions, leave policies, and compliance needs. Understand its impact on shops, offices, and businesses to stay aligned with state labour regulations.
//                 </p>
//               </div>
//             </div>

//             {/* Search and State Filter */}
//             <div className="mb-6 sm:mb-8 md:mb-10">
//               <SearchAndStateFilter
//                 searchValue={q}
//                 stateValue={stateFilter}
//                 onSearchChange={setQ}
//                 onStateChange={setStateFilter}
//                 isPending={false}
//                 states={allStateNames?.map((name) => ({ label: name, value: name }))}
//               />
//             </div>

//             {/* States Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
//               {filteredStates.map((state) => (
//                 <Link
//                   key={state.state_slug}
//                   href={`/applicability-se-act/${state.state_slug}`}
//                   aria-label={state.state_name}
//                 >
//                   <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
//                     <div className="p-2 sm:p-3">
//                       <div className="flex items-center justify-between">
//                         <div className="flex-1 min-w-0">
//                           <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
//                             {state.state_name}
//                           </h3>
//                         </div>
//                         <div className="flex-shrink-0 ml-2">
//                           <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
//                             <ChevronRight className="w-4 h-4 text-white" />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// app/se-applicability/page.tsx

import { Metadata } from "next";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import { useState, useMemo } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { fetchSSR } from "@/lib/fetchers"; // Import your fetcher function for SSR/ISR
import SEApplicability from "@/app/_component/ApplicabilitySE/SEApplicability";
export const revalidate = 1800; // ISR: 30 minutes

// Metadata for SEO
export const metadata: Metadata = {
  title: "S&E Applicability | State-wise",
  description:
    "Browse state-wise applicability of S&E Act with search & filters.",
};

type SEState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
};

type SEResponse = {
  applicable_states_count: number;
  applicable_states: SEState[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

async function getSEApplicabilityData(): Promise<SEResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/applicability`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as SEResponse;
  } catch (err) {
    console.error("Failed to fetch S&E Applicability data:", err);
    return null;
  }
}

export default async function SEApplicabilityPage() {
  const initialData = await getSEApplicabilityData();

  return <SEApplicability initialData={initialData} />;
}

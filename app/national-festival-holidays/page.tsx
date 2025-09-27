

// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Building2, MapPin } from "lucide-react";
// import Link from "next/link";
// import { useMemo, useState, useEffect } from "react";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import SearchAndStateFilter from "../SearchAndStateFilter/page";

// export default function NationalFestivalHolidays() {
//   // API data state - bas type annotations add kiye
//   const [apiData, setApiData] = useState<any>(null);


//   // Local UI state for filtering - ye same hai
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   // API se data fetch karne ke liye - same hai
//   useEffect(() => {
//     fetch('http://100.110.147.101:8000/api/national-festival-holidays')
//       .then(response => response.json())
//       .then((data: any) => {
//         setApiData(data);
//       })
//       .catch((error: any) => {
//         console.error('Error:', error);
  
//       });
//   }, []);

//   // Static data ko API data se replace kiya hai - type annotation add kiya
//   const applicableStates = apiData?.applicable_states?.map((state: any) => ({
//     name: state.state,
//     slug: state.state_slug
//   })) || [];

//   const nonApplicableStates = apiData?.non_applicable_states?.map((state: any) => ({
//     name: state.state,
//     slug: state.state_slug
//   })) || [];

//   // Description API se aa rha hai - same hai
//   const pageDescription = apiData?.applicable_states?.[0]?.notes || 
//     "National festivals are celebrations that reflect India's rich cultural diversity, religious traditions, and historical significance. They bring communities together and are officially recognized as public holidays across different states and regions.";

//   // Baaki sab code same hai - type annotations add kiye
//   const allStates = [...applicableStates, ...nonApplicableStates];

//   const searchNeedle = q.trim().toLowerCase();
//   const byText = (state: any) =>
//     !searchNeedle ||
//     state.name.toLowerCase().includes(searchNeedle);

//   const byState = (state: any) => stateFilter === "All States" || state.name === stateFilter;

//   const filteredApplicableStates = useMemo(
//     () => applicableStates.filter((state: any) => byText(state) && byState(state)),
//     [q, stateFilter, applicableStates]
//   );

//   const filteredNonApplicableStates = useMemo(
//     () => nonApplicableStates.filter((state: any) => byText(state) && byState(state)),
//     [q, stateFilter, nonApplicableStates]
//   );

//   const allStateNames = useMemo(() => {
//     const uniqueNames = [...new Set(allStates.map((state: any) => state.name))];
//     return ["All States", ...uniqueNames.sort()];
//   }, [allStates]);


//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-3">
//             {/* Page Header - description dynamic ho gaya */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-3xl font-bold text-slate-800 mb-2">
//                     National & Festival Holidays
//                   </h2>
//                   <p className="text-slate-800 text-sm leading-relaxed ">
//                     {pageDescription}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Search and State Filter - same */}
//             <div className="mb-6 sm:mb-8 md:mb-10">
//               <SearchAndStateFilter
//                 searchValue={q}
//                 stateValue={stateFilter}
//                 onSearchChange={setQ}
//                 onStateChange={setStateFilter}
//                 isPending={false}
//                 states={allStateNames?.map((name: string) => ({ label: name, value: name }))}
//               />
//             </div>

//             {/* States Grid - same */}
//             <Card className="border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-xl ">
//                   State-wise Holiday Matrix
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid lg:grid-cols-2 gap-8">
//                   {/* Applicable States - same */}
//                   <div>
//                     <div className="flex items-center gap-2 mb-4">
//                       <MapPin className="h-5 w-5 text-blue-600" />
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Applicable States
//                       </h3>
//                     </div>

//                     <div className="space-y-3">
//                       {filteredApplicableStates.length > 0 ? (
//                         filteredApplicableStates.map((state: any, index: number) => (
//                           <Link
//                             key={state.slug}
//                             href={`/national-festival-holidays/${state.slug}`}
//                             aria-label={`Go to ${state.name} details`}
//                             className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group"
//                           >
//                             <span className="text-blue-600 group-hover:text-orange-600 font-medium transition-colors">
//                               {index + 1}. {state.name}
//                             </span>
//                             <Badge className="bg-green-100 text-green-800">
//                               Applicable
//                             </Badge>
//                           </Link>
//                         ))
//                       ) : (
//                         <div className="text-center py-8 text-gray-500">
//                           No applicable states found matching your search.
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Non-Applicable States - same */}
//                   <div>
//                     <div className="flex items-center gap-2 mb-4">
//                       <Building2 className="h-5 w-5 text-gray-600" />
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Non-Applicable States
//                       </h3>
//                     </div>

//                     <div className="space-y-3">
//                       {filteredNonApplicableStates.length > 0 ? (
//                         filteredNonApplicableStates.map((state: any, index: number) => (
//                           <div
//                             key={state.slug}
//                             className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
//                           >
//                             <span className="text-gray-600 font-medium">
//                               {index + 1}. {state.name}
//                             </span>
//                             <Badge className="bg-gray-100 text-gray-600">
//                               Not Applicable
//                             </Badge>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="text-center py-8 text-gray-500">
//                           No non-applicable states found matching your search.
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar - same */}
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



















import { Metadata } from "next";
import NationalFestivalHolidays from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidays";

// ---------- SEO ----------
export const metadata: Metadata = {
  title: "National & Festival Holidays - State-wise Holiday Matrix | E-Library",
  description:
    "Complete guide to National & Festival Holidays across all Indian states. Get latest holiday lists, state-wise applicability, and compliance requirements.",
  keywords: [
    "national holidays",
    "festival holidays",
    "state wise holidays",
    "holiday matrix",
    "public holidays india",
    "national festival holidays",
  ],
};

// ---------- Types ----------
export type StateHoliday = {
  id: number;
  state: string;
  state_slug: string;
  is_applicable: boolean;
  updated_date: string;
  effective_date: string;
  notes: string;
};

export type NFHApi = {
  applicable_states_count: number;
  non_applicable_states_count: number;
  applicable_states: StateHoliday[];
  non_applicable_states: StateHoliday[];
};

// ---------- Config ----------
export const revalidate = 1800; // ISR: 30 min
const API_BASE = "http://100.110.147.101:8000";

async function getNFHData(): Promise<NFHApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/national-festival-holidays`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as NFHApi;
  } catch (err) {
    console.error("NFH API error:", err);
    return null;
  }
}

export default async function NationalFestivalHolidaysPage() {
  const initialData = await getNFHData();

  // Props-only render; koi client fetch nahi yahan.
  return (
    <NationalFestivalHolidays
      initialData={initialData}
      apiBase={API_BASE}
    
      enableFilters
    />
  );
}

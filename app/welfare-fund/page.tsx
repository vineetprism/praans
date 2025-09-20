
// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { CheckCircle, XCircle, Calculator, CalculatorIcon, Eye, MapPin } from "lucide-react";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import SearchAndStateFilter from "@/app/SearchAndStateFilter/page"; // ⬅️ using your shared component

// type WFState = {
//   state_name: string;
//   state_slug: string;
//   applicable: boolean;
//   updated_date?: string | null;
//   effective_date?: string | null;
// };

// type WFResponse = {
//   applicable_count: number;
//   non_applicable_count: number;
//   applicable_states: WFState[];
//   non_applicable_states: WFState[];
// };

// const API_BASE = "http://100.110.147.101:8000";

// export default function WelfareFundPage() {
//   // UI state controlled here & passed to SearchAndStateFilter
//   const [q, setQ] = useState("");
//   const [stateFilter, setStateFilter] = useState("All States");

//   // Data state
//   const [data, setData] = useState<WFResponse | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch LWF listing
//   useEffect(() => {
//     const ac = new AbortController();
//     (async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await fetch(`${API_BASE}/api/welfare-funds`, { signal: ac.signal });
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const json = (await res.json()) as WFResponse;
//         setData(json);
//       } catch (e: any) {
//         if (e?.name !== "AbortError") setError("Failed to load Labour Welfare Fund data.");
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     })();
//     return () => ac.abort();
//   }, []);

//   // Filters
//   const searchNeedle = q.trim().toLowerCase();
//   const byText = (s: WFState) =>
//     !searchNeedle ||
//     s.state_name.toLowerCase().includes(searchNeedle) ||
//     s.state_slug.toLowerCase().includes(searchNeedle);

//   const byState = (s: WFState) => stateFilter === "All States" || s.state_name === stateFilter;

//   const filteredApplicable = useMemo(
//     () => (data?.applicable_states ?? []).filter((s) => byText(s) && byState(s)),
//     [data, q, stateFilter]
//   );

//   const filteredNonApplicable = useMemo(
//     () => (data?.non_applicable_states ?? []).filter((s) => byText(s) && byState(s)),
//     [data, q, stateFilter]
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         {loading ? (
//           <div className="text-center text-sm text-gray-600">Loading Labour Welfare Fund data…</div>
//         ) : error ? (
//           <div className="text-center text-red-600">{error}</div>
//         ) : (
//           <div className="grid lg:grid-cols-4 gap-8">
//             {/* Main Content */}
//             <div className="lg:col-span-3">
//               {/* Header */}
//               <div className="mb-8">
//                 <div className="flex items-center justify-between mb-4">
//                   <div>
//                     <h1 className="text-3xl font-bold text-slate-800 mb-2">Labour Welfare Fund :</h1>
//                     <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
//                       Labour welfare provides facilities to workers to improve their working conditions, social security,
//                       and standard of living. Many states have enacted a Labour Welfare Fund Act governing contributions
//                       and benefits.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* 🔄 Reused shared filter (search + state) */}
//               <div className="mb-6 sm:mb-8 md:mb-10">
//                 <SearchAndStateFilter
//                   searchValue={q}
//                   stateValue={stateFilter}
//                   onSearchChange={setQ}
//                   onStateChange={setStateFilter}
//                   isPending={loading}
//                 />
//               </div>

//               {/* Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Applicable States</p>
//                         <p className="text-2xl font-bold text-gray-900">{data?.applicable_count ?? 0}</p>
//                       </div>
//                       <CheckCircle className="w-8 h-8 text-blue-600" />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-sm font-medium text-gray-600">Non-Applicable</p>
//                         <p className="text-2xl font-bold text-gray-900">{data?.non_applicable_count ?? 0}</p>
//                       </div>
//                       <XCircle className="w-8 h-8 text-red-600" />
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
//                   <CardContent className="p-6">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-xl text-gray-900 pb-4">LWF Calculator</p>
//                       </div>
//                       <Calculator className="w-8 h-8 text-orange-600" />
//                     </div>
//                     <Link href="/tools/compliance-checker">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         View
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>

//                 <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
//                   <CardContent className="px-8">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="text-xl text-gray-900">Interest & Penalty Calculator</p>
//                       </div>
//                       <CalculatorIcon className="w-14 h-14 text-orange-600" />
//                     </div>
//                     <Link href="/tools/compliance-checker">
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
//                       >
//                         <Eye className="w-4 h-4 mr-2" />
//                         View
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* State-wise Applicability */}
//               <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//                 <CardHeader>
//                   <CardTitle>State-wise Applicability :</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                     {/* Applicable */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
//                       {filteredApplicable.length === 0 ? (
//                         <p className="text-sm text-gray-500">No matching states.</p>
//                       ) : (
//                         <div className="space-y-3">
//                           {filteredApplicable.map((s, idx) => (
//                             <Link key={s.state_slug} href={`/welfare-fund/${s.state_slug}`} aria-label="View State-wise Applicability">
//                               <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group mb-3">
//                                 <div>
//                                   <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
//                                     {idx + 1}. {s.state_name}
//                                   </span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                   <MapPin className="w-4 h-4 text-green-600 group-hover:text-orange-500 transition-colors" />
//                                   <Badge variant="secondary" className="bg-green-100 text-green-800">
//                                     Applicable
//                                   </Badge>
//                                 </div>
//                               </div>
//                             </Link>
//                           ))}
//                         </div>
//                       )}
//                     </div>

//                     {/* Non-Applicable */}
//                     <div>
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Applicable States</h3>
//                       {filteredNonApplicable.length === 0 ? (
//                         <p className="text-sm text-gray-500">No matching states.</p>
//                       ) : (
//                         <div className="space-y-3">
//                           {filteredNonApplicable.map((s, idx) => (
//                             <div key={s.state_slug || idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
//                               <span className="text-gray-700">{idx + 1}. {s.state_name}</span>
//                               <div className="flex items-center gap-2">
//                                 <MapPin className="w-4 h-4 text-gray-400" />
//                                 <Badge variant="secondary" className="bg-gray-100 text-gray-600">Not Applicable</Badge>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-24">
//                 <Card>
//                   <CardContent>
//                     <PopularSearch className="mb-6" />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }









// app/welfare-fund/page.tsx
import type { Metadata } from "next";
import WelfareFund from "../_component/WelfareFund/WelfareFund";

export const revalidate = 1800; // ISR: 30 minutes

// ---- Types to match the API ----
type WFState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date?: string | null;
  effective_date?: string | null;
};

type WFResponse = {
  applicable_count: number;
  non_applicable_count: number;
  applicable_states: WFState[];
  non_applicable_states: WFState[];
};

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://100.110.147.101:8000";
const API_BASE ="http://100.110.147.101:8000";

// (optional) SEO
export const metadata: Metadata = {
  title: "Labour Welfare Fund | State-wise Applicability & Tools",
  description:
    "Browse state-wise Labour Welfare Fund applicability with search & filters, plus calculators and quick links.",
};

async function getWelfareFunds(): Promise<WFResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as WFResponse;
  } catch (err) {
    console.error("Failed to fetch LWF listing:", err);
    return null;
  }
}

export default async function WelfareFundPage() {
  const initialData = await getWelfareFunds();

  return (
    <WelfareFund
      initialData={initialData}
    />
  );
}

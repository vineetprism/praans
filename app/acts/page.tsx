// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Card,
//   CardContent,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Search,
//   Eye,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";
// import { downloadFile, type DownloadItem } from "@/lib/download-utils";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import { useState } from "react";

// const acts = [
//   {
//     id: 1,
//     title: "The Factories Act, 1948",
//     rulesName: "Factory Rules",
//     formsName: "Factory Forms",
//     slug: "factories-act-1948",
//     state: "Central",
//     applicableState: "All India",
//     category: "Industrial Safety",
//     description:
//       "An Act to consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave.",
//     lastUpdated: "2024-12-15",
//     year: "1948",
//     sections: 118,
//     isPopular: true,
//   },
//   {
//     id: 2,
//     title: "The Contract Labour (Regulation and Abolition) Act, 1970",
//     rulesName: "Contract Labour Rules",
//     formsName: "Contract Labour Forms",
//     slug: "contract-labour-act-1970",
//     state: "Central",
//     applicableState: "All India",
//     category: "Contract Labour",
//     description:
//       "An Act to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
//     lastUpdated: "2024-11-28",
//     year: "1970",
//     sections: 35,
//     isPopular: true,
//   },
//   {
//     id: 3,
//     title: "Maharashtra Shops and Establishments Act, 2017",
//     rulesName: "Maharashtra S&E Rules",
//     formsName: "Maharashtra S&E Forms",
//     slug: "maharashtra-shops-establishments-act-2017",
//     state: "Maharashtra",
//     applicableState: "Maharashtra",
//     category: "Shops & Establishments",
//     description:
//       "An Act to consolidate and amend the law relating to the regulation of conditions of work and employment in shops and establishments.",
//     lastUpdated: "2024-10-22",
//     year: "2017",
//     sections: 142,
//     isPopular: false,
//   },
//   {
//     id: 4,
//     title: "Karnataka Labour Welfare Fund Act, 1965",
//     rulesName: "Karnataka LWF Rules",
//     formsName: "Karnataka LWF Forms",
//     slug: "karnataka-labour-welfare-fund-act-1965",
//     state: "Karnataka",
//     applicableState: "Karnataka",
//     category: "Welfare Fund",
//     description:
//       "An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in the State of Karnataka.",
//     lastUpdated: "2024-09-18",
//     year: "1965",
//     sections: 28,
//     isPopular: false,
//   },
//   {
//     id: 5,
//     title: "The Payment of Wages Act, 1936",
//     rulesName: "Payment of Wages Rules",
//     formsName: "Wages Payment Forms",
//     slug: "payment-of-wages-act-1936",
//     state: "Central",
//     applicableState: "All India",
//     category: "Wages & Payment",
//     description:
//       "An Act to regulate the payment of wages to certain classes of persons employed in industry and to provide for deductions from wages.",
//     lastUpdated: "2024-12-01",
//     year: "1936",
//     sections: 26,
//     isPopular: true,
//   },
//   {
//     id: 6,
//     title: "Tamil Nadu Shops and Establishments Act, 1947",
//     rulesName: "Tamil Nadu S&E Rules",
//     formsName: "Tamil Nadu S&E Forms",
//     slug: "tamil-nadu-shops-establishments-act-1947",
//     state: "Tamil Nadu",
//     applicableState: "Tamil Nadu",
//     category: "Shops & Establishments",
//     description:
//       "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
//     lastUpdated: "2024-11-15",
//     year: "1947",
//     sections: 89,
//     isPopular: false,
//   },
// ];


// const states = [
//   "All States",
//   "Central",
//   "Maharashtra",
//   "Karnataka",
//   "Tamil Nadu",
//   "Gujarat",
//   "Delhi",
//   "West Bengal",
// ];

// export default function ActsPage() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Set this based on your total data

//   const handleActDownload = async (act: (typeof acts)[0]) => {
//     const downloadItem: DownloadItem = {
//       url: `/acts/downloads/${act.slug}.pdf`,
//       filename: `${act.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
//       format: "PDF",
//     };
//     await downloadFile(downloadItem);
//   };
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-4 xl:px-4 2xl:px-6 py-6 sm:py-6 md:py-4 lg:py-4 xl:py-4 2xl:py-8">
//         <div className="grid lg:grid-cols-4 gap-6 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-8">
//           <div className="lg:col-span-3">
//             {/* Header Section - Compact */}
//             <div className="mb-6 sm:mb-6 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8">
//               <div className="flex items-center justify-between mb-3 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-4">
//                 <div>
//                   <h1 className="  font-bold text-slate-800
//                     text-base min-[375px]:text-lg sm:text-xl
//                     mb-1">
//                     Labour Acts & Regulations :
//                   </h1>
//                   <p className=" text-gray-600 leading-relaxed
//                     text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2">
//                     Comprehensive collection of central and state labour acts
//                     with latest amendments and updates.published in the official
//                     gazette vide Government of India Printing Presses containing
//                     significant Statutory Orders (S.O) and General Statutory
//                     Rules (G.S.R).
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Filter Section - Compact */}

//             <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4 p-2">
//               {/* Search Input */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
//                 <Input
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 lg:h-8 2xl:h-10 text-xs lg:text-sm 2xl:text-base
//                  focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               {/* Select Dropdown */}
//               <Select>
//                 <SelectTrigger
//                   className="w-full lg:w-36 2xl:w-48 h-8 lg:h-8 2xl:h-10 
//                              text-xs lg:text-sm 2xl:text-base bg-gray-100"
//                 >
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {states.map((state) => (
//                     <SelectItem
//                       key={state}
//                       value={state.toLowerCase().replace(/ /g, "-")}
//                     >
//                       {state}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Acts Cards - Ultra Compact for md, lg, xl */}
//             <div className="lg:space-y-2">
//               {acts.map((act) => (
//                 <div
//                   key={act.id}
//                   className="
//         group bg-orange-50 border border-gray-200 rounded-lg shadow-sm
//         hover:shadow-md transition-all duration-200
//         border-l-4 border-l-orange-500 overflow-hidden
//       "
//                 >
//                   <div className="p-2 sm:p-3 lg:p-3">
//                     {/* 1 col on mobile, 2 col (content + right meta) on md+ */}
//                     <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
//                       {/* LEFT: title + desc + read more */}
//                       <div className="min-w-0 flex flex-col">
//                         <h4
//                           className="
//                 text-[12px] min-[375px]:text-xs sm:text-sm lg:text-sm
//                 font-semibold text-gray-900 line-clamp-2
//               "
//                         >
//                           {act.title} /Rules/Forms
//                         </h4>

//                         <p
//                           className="
//                 text-gray-700 leading-snug mt-2
//                 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs
//                 line-clamp-2 break-words
//               "
//                         >
//                           {act.description}
//                         </p>

//                         <div className="mt-2 md:mt-3">
//                           <Button
//                             size="sm"
//                             className="
//                   bg-orange-400 text-white hover:bg-orange-500
//                   h-6 sm:h-7 lg:h-8 px-2 sm:px-2.5 lg:px-3
//                   text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm
//                   inline-flex items-center gap-1
//                 "
//                             asChild
//                           >
//                             <Link
//                               href={`/acts/${act.slug}`}
//                               className="flex items-center gap-1"
//                             >
//                               <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
//                               <span className="whitespace-nowrap">
//                                 Read More
//                               </span>
//                             </Link>
//                           </Button>
//                         </div>
//                       </div>

//                       {/* RIGHT: state badge + dates + download */}
//                       <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                         <Badge
//                           variant="outline"
//                           className="
//                 bg-blue-50 text-blue-700 border-blue-200
//                 text-[11px] sm:text-[10px] lg:text-[12px]
//                 px-1.5 py-0.5 font-medium flex-shrink-0 truncate max-w-[120px]
//               "
//                         >
//                           {act.applicableState}
//                         </Badge>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More - Compact */}
//             <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
//               {/* Previous Button */}
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="
//       h-7 sm:h-8 px-2 sm:px-3
//       text-[10px] sm:text-xs
//       border-gray-300 hover:bg-gray-50
//     "
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
//                 aria-label="Previous Page"
//               >
//                 <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
//               </Button>

//               {/* Page Numbers */}
//               {[1, 2, 3, 4, 5].map((page) => (
//                 <Button
//                   key={page}
//                   variant={currentPage === page ? "default" : "outline"}
//                   size="sm"
//                   className={`
//         h-7 sm:h-8 px-2.5 sm:px-3.5
//         text-[10px] sm:text-xs
//         ${currentPage === page
//                       ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                       : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                     }
//       `}
//                   onClick={() => setCurrentPage(page)}
//                   aria-label={`Page ${page}`}
//                 >
//                   {page}
//                 </Button>
//               ))}

//               {/* Dots for more pages */}
//               <span className="px-1 text-gray-400 text-[10px] sm:text-xs">
//                 ...
//               </span>

//               {/* Last page */}
//               <Button
//                 variant={currentPage === totalPages ? "default" : "outline"}
//                 size="sm"
//                 className={`
//       h-7 sm:h-8 px-2.5 sm:px-3.5
//       text-[10px] sm:text-xs
//       ${currentPage === totalPages
//                     ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                     : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                   }
//     `}
//                 onClick={() => setCurrentPage(totalPages)}
//                 aria-label={`Page ${totalPages}`}
//               >
//                 {totalPages}
//               </Button>

//               {/* Next Button */}
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="
//       h-7 sm:h-8 px-2 sm:px-3
//       text-[10px] sm:text-xs
//       border-gray-300 hover:bg-gray-50
//     "
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage(currentPage + 1)}
//                 aria-label="Next Page"
//               >
//                 <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//               </Button>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";
// import PopularSearch from "../PopularSearch/PopularSearch";

// type ActItem = {
//   id: number;
//   title: string;
//   state: string; // e.g., "All India", "Maharashtra"
//   short_description: string;
//   act_doc_url?: string | null;
//   rule_doc_url?: string | null;
//   forms_count?: number;
//   created_at?: string;
// };

// type ApiResponse = {
//   data: ActItem[];
//   links: {
//     first: string | null;
//     last: string | null;
//     prev: string | null;
//     next: string | null;
//   };
//   meta: {
//     current_page: number;
//     from: number | null;
//     last_page: number;
//     path: string;
//     per_page: number;
//     to: number | null;
//     total: number;
//   };
// };

// const API_BASE = "http://100.110.147.101:8000/api/act-rule-forms";

// const ALL_STATES = [
//   "All States",
//   "All India",
//   "Central",
//   "Maharashtra",
//   "Karnataka",
//   "Tamil Nadu",
//   "Gujarat",
//   "Delhi",
//   "West Bengal",
// ];

// export default function ActsPage() {
//   const [page, setPage] = useState<number>(1);
//   const [serverData, setServerData] = useState<ApiResponse | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [err, setErr] = useState<string | null>(null);

//   // UI filters (client-side for now)
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   useEffect(() => {
//     const ac = new AbortController();
//     async function load() {
//       try {
//         setLoading(true);
//         setErr(null);

//         // If later you add server-side filters, append &q=&state= here.
//         const res = await fetch(`${API_BASE}?page=${page}`, {
//           signal: ac.signal,
//           // cache: "no-store"  // uncomment if needed
//         });
//         if (!res.ok) {
//           throw new Error(`HTTP ${res.status}`);
//         }
//         const json: ApiResponse = await res.json();
//         setServerData(json);
//       } catch (e: any) {
//         if (e.name !== "AbortError") {
//           setErr(e.message || "Failed to fetch");
//         }
//       } finally {
//         setLoading(false);
//       }
//     }
//     load();
//     return () => ac.abort();
//   }, [page]);

//   const acts = serverData?.data ?? [];
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const currentPage = serverData?.meta?.current_page ?? 1;

//   // Client-side search + state filter (fast + simple)
//   const filtered = useMemo(() => {
//     let rows = acts;
//     if (stateFilter && stateFilter !== "All States") {
//       rows = rows.filter(
//         (r) => r.state.toLowerCase() === stateFilter.toLowerCase()
//       );
//     }
//     if (q.trim()) {
//       const needle = q.trim().toLowerCase();
//       rows = rows.filter(
//         (r) =>
//           r.title.toLowerCase().includes(needle) ||
//           r.short_description.toLowerCase().includes(needle)
//       );
//     }
//     return rows;
//   }, [acts, q, stateFilter]);

//   const pageNumbers = useMemo(() => {
//     // Compact paginator: show first 5 + last
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-4 xl:px-4 2xl:px-6 py-6">
//         <div className="grid lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-3">
//             {/* Header */}
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-3">
//                 <div>
//                   <h1 className="font-bold text-slate-800 text-base sm:text-xl mb-1">
//                     Labour Acts &amp; Regulations :
//                   </h1>
//                   <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify pb-2">
//                     Comprehensive collection of central and state labour acts
//                     with latest amendments and updates. All cards below are now
//                     API-driven—no static fixtures.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Filters */}
//             <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4 p-2">
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
//                 <Input
//                   value={q}
//                   onChange={(e) => {
//                     setQ(e.target.value);
//                     // jab search change ho, page ko 1 kar do (UX best)
//                     setPage(1);
//                   }}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={(val) => {
//                   setStateFilter(val);
//                   setPage(1);
//                 }}
//               >
//                 <SelectTrigger className="w-full lg:w-36 2xl:w-48 h-8 2xl:h-10 text-xs lg:text-sm bg-gray-100">
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {ALL_STATES.map((s) => (
//                     <SelectItem key={s} value={s}>
//                       {s}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Content */}
//             {loading ? (
//               <div className="text-sm text-gray-600 p-3">Loading…</div>
//             ) : err ? (
//               <div className="text-sm text-red-600 p-3">
//                 Error: {err}. Please retry.
//               </div>
//             ) : filtered.length === 0 ? (
//               <div className="text-sm text-gray-600 p-3">
//                 No results found for your filters.
//               </div>
//             ) : (
//               <div className="lg:space-y-2">
//                 {filtered.map((act) => (
//                   <div
//                     key={act.id}
//                     className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                   >
//                     <div className="p-3">
//                       <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                         {/* Left */}
//                         <div className="min-w-0 flex flex-col">
//                           <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                             {act.title}
//                           </h4>
//                           <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs line-clamp-2 break-words">
//                             {act.short_description}
//                           </p>
//                           <div className="mt-2 md:mt-3">
//                             <Button
//                               size="sm"
//                               className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                               asChild
//                             >
//                               {/* Detail page by id (API does not give slug) */}
//                               <Link href={`/acts/${act.id}`}>
//                                 <Eye className="w-4 h-4" />
//                                 <span>Read More</span>
//                               </Link>
//                             </Button>
//                           </div>
//                         </div>
//                         {/* Right */}
//                         <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                           <Badge
//                             variant="outline"
//                             className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                           >
//                             {act.state || "All India"}
//                           </Badge>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Pagination (server pages) */}
//             {serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() => setPage((p) => Math.max(1, p - 1))}
//                   aria-label="Previous Page"
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>

//                 {pageNumbers.map((p) => (
//                   <Button
//                     key={p}
//                     variant={currentPage === p ? "default" : "outline"}
//                     size="sm"
//                     className={
//                       currentPage === p
//                         ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                         : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                     }
//                     onClick={() => setPage(p)}
//                     aria-label={`Page ${p}`}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && (
//                   <>
//                     <span className="px-1 text-gray-400 text-xs">…</span>
//                     <Button
//                       variant={currentPage === lastPage ? "default" : "outline"}
//                       size="sm"
//                       className={
//                         currentPage === lastPage
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }
//                       onClick={() => setPage(lastPage)}
//                       aria-label={`Page ${lastPage}`}
//                     >
//                       {lastPage}
//                     </Button>
//                   </>
//                 )}

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage >= lastPage}
//                   onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
//                   aria-label="Next Page"
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent className="p-4">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { Metadata } from 'next';
// import ActsPageClient from '../_component/ActRuleForm/ActsPageClient';

// export const metadata: Metadata = {
//   title: "Labour Acts & Regulations | Complete Legal Database",
//   description: "Comprehensive collection of central and state labour acts with latest amendments and updates. Search through Acts, Rules, and Forms.",
//   keywords: [
//     "Labour Acts",
//     "Labour Regulations", 
//     "Legal Database",
//     "Indian Labour Laws",
//     "Employment Acts",
//     "Workplace Regulations",
//     "Legal Compliance"
//   ],
// };

// type ActItem = {
//   id: number;
//   title: string;
//   state: string;
//   short_description: string;
//   act_doc_url?: string | null;
//   rule_doc_url?: string | null;
//   forms_count?: number;
//   created_at?: string;
// };

// type ApiResponse = {
//   data: ActItem[];
//   links: {
//     first: string | null;
//     last: string | null;
//     prev: string | null;
//     next: string | null;
//   };
//   meta: {
//     current_page: number;
//     from: number | null;
//     last_page: number;
//     path: string;
//     per_page: number;
//     to: number | null;
//     total: number;
//   };
// };

// const API_BASE = "http://100.110.147.101:8000/api/act-rule-forms";

// // Server-side data fetching with ISR
// async function getActsData(page: number = 1): Promise<ApiResponse> {
//   try {
//     const res = await fetch(`${API_BASE}?page=${page}`, {
//       next: { 
//         revalidate: 1800 // 30 minutes refresh
//       }
//     });
    
//     if (!res.ok) {
//       throw new Error(`HTTP ${res.status}: Failed to fetch acts data`);
//     }
    
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching acts data:", error);
//     // Return empty response structure as fallback
//     return {
//       data: [],
//       links: {
//         first: null,
//         last: null,
//         prev: null,
//         next: null
//       },
//       meta: {
//         current_page: 1,
//         from: null,
//         last_page: 1,
//         path: "",
//         per_page: 10,
//         to: null,
//         total: 0
//       }
//     };
//   }
// }

// // Main page component (Server Component)
// export default async function ActsPage({
//   searchParams
// }: {
//   searchParams: { page?: string }
// }) {
//   const currentPage = Number(searchParams.page) || 1;
//   const initialData = await getActsData(currentPage);

//   return (
//     <ActsPageClient 
//       initialData={initialData}
//       initialPage={currentPage}
//     />
//   );
// }












// import { Metadata } from "next";
// import ActsPageClient from "../_component/ActRuleForm/ActsPageClient";

// export const metadata: Metadata = {
//   title: "Labour Acts & Regulations | Complete Legal Database",
//   description:
//     "Comprehensive collection of central and state labour acts with latest amendments and updates. Search through Acts, Rules, and Forms.",
//   keywords: [
//     "Labour Acts",
//     "Labour Regulations",
//     "Legal Database",
//     "Indian Labour Laws",
//     "Employment Acts",
//     "Workplace Regulations",
//     "Legal Compliance",
//   ],
// };

// type ActItem = {
//   id: number;
//   title: string;
//   slug: string;               // ✅ add this
//   state: string;
//   short_description: string;
//   act_doc_url?: string | null;
//   rule_doc_url?: string | null;
//   forms_count?: number;
//   created_at?: string;
// };

// type ApiResponse = {
//   data: ActItem[];
//   links: { first: string | null; last: string | null; prev: string | null; next: string | null };
//   meta: {
//     current_page: number;
//     from: number | null;
//     last_page: number;
//     path: string;
//     per_page: number;
//     to: number | null;
//     total: number;
//   };
// };

// const API_BASE = "http://100.110.147.101:8000/api/act-rule-forms";

// async function getActsData(page: number = 1): Promise<ApiResponse> {
//   try {
//     const res = await fetch(`${API_BASE}?page=${page}`, { next: { revalidate: 1800 } });
//     if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch acts data`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching acts data:", error);
//     return {
//       data: [],
//       links: { first: null, last: null, prev: null, next: null },
//       meta: { current_page: 1, from: null, last_page: 1, path: "", per_page: 10, to: null, total: 0 },
//     };
//   }
// }

// export default async function ActsPage({ searchParams }: { searchParams: { page?: string } }) {
//   const currentPage = Number(searchParams.page) || 1;
//   const initialData = await getActsData(currentPage);

//   return <ActsPageClient initialData={initialData} initialPage={currentPage} />;
// }









import { Metadata } from "next";
import ActsPageClient from "../_component/ActRuleForm/ActsPageClient";

const API_BASE = "http://100.110.147.101:8000/api/act-rule-forms";
const STATES_API_BASE = "http://100.110.147.101:8000/api/states";

// Fetch Acts Data
async function getActsData(page: number = 1) {
  try {
    const res = await fetch(`${API_BASE}?page=${page}`, { next: { revalidate: 1800 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch acts data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching acts data:", error);
    return {
      data: [],
      links: { first: null, last: null, prev: null, next: null },
      meta: { current_page: 1, from: null, last_page: 1, path: "", per_page: 10, to: null, total: 0 },
    };
  }
}

// Fetch States Data
async function getStatesData() {
  try {
    const res = await fetch(STATES_API_BASE);
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch states data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching states data:", error);
    return { states: [] };
  }
}

// Server-side metadata
export const metadata: Metadata = {
  title: "Labour Acts & Regulations | Complete Legal Database",
  description:
    "Comprehensive collection of central and state labour acts with latest amendments and updates. Search through Acts, Rules, and Forms.",
  keywords: [
    "Labour Acts",
    "Labour Regulations",
    "Legal Database",
    "Indian Labour Laws",
    "Employment Acts",
    "Workplace Regulations",
    "Legal Compliance",
  ],
};

// Main server component
export default async function ActsPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;

  // Fetch acts and states data
  const [initialData, statesData] = await Promise.all([getActsData(currentPage), getStatesData()]);

  return <ActsPageClient initialData={initialData} initialPage={currentPage} states={statesData.states} />;
}

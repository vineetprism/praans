

// "use client";

// import { useMemo, useTransition } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { useState } from "react";

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

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// export default function ActsPageClient({ 
//   initialData, 
//   initialPage 
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();
  
//   // Use props data directly - no API calls needed
//   const serverData = initialData;
  
//   // UI filters (client-side only)
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");
  
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   // Handle page navigation with URL updates (Server-side navigation)
//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) {
//         params.delete('page');
//       } else {
//         params.set('page', newPage.toString());
//       }
      
//       const newUrl = params.toString() ? `?${params.toString()}` : '';
//       // Let Next.js handle data fetching with ISR
//       router.push(`/acts${newUrl}`);
//     });
//   };

//   // Client-side search + state filter
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
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   // Reset to page 1 when searching (server-side navigation)
//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) {
//       handlePageChange(1);
//     }
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) {
//       handlePageChange(1);
//     }
//   };

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
//                     with latest amendments and updates. Data is automatically 
//                     updated every 30 minutes using ISR for optimal performance.
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
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   disabled={isPending}
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={handleStateChange}
//                 disabled={isPending}
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

//             {/* Loading indicator - only during page transitions */}
//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Content */}
//             {!isPending && (
//               <>
//                 {filtered.length === 0 ? (
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered.map((act) => (
//                       <div
//                         key={act.id}
//                         className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                             {/* Left */}
//                             <div className="min-w-0 flex flex-col">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act.title}
//                               </h4>
//                               <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs line-clamp-2 break-words">
//                                 {act.short_description}
//                               </p>
//                               <div className="mt-2 md:mt-3">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   <Link href={`/acts/${act.id}`}>
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                             {/* Right */}
//                             <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                               >
//                                 {act.state || "All India"}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
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
//                     onClick={() => handlePageChange(p)}
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
//                       onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() => handlePageChange(Math.min(lastPage, currentPage + 1))}
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














// "use client";

// import { useMemo, useTransition, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// type ActItem = {
//   id: number;
//   title: string;
//   slug: string; 
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

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// export default function ActsPageClient({
//   initialData,
//   initialPage,
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   // Use props data directly - no client API calls
//   const serverData = initialData;

//   // UI filters (client-side)   
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   // Server-side navigation with URL updates
//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/acts${newUrl}`);
//     });
//   };

//   // Client-side search + state filter
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
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   // Reset to page 1 when changing filters (server navigation)
//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

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
//                     with latest amendments and updates. Data is automatically
//                     updated every 30 minutes using ISR for optimal performance.
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
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   disabled={isPending}
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={handleStateChange}
//                 disabled={isPending}
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

//             {/* Loading indicator - only during page transitions */}
//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Content */}
//             {!isPending && (
//               <>
//                 {filtered.length === 0 ? (
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered.map((act) => (
//                       <div
//                         key={act.id}
//                         className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                             {/* Left */}
//                             <div className="min-w-0 flex flex-col">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act.title}
//                               </h4>
//                               <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs line-clamp-2 break-words">
//                                 {act.short_description}
//                               </p>
//                               <div className="mt-2 md:mt-3">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   {/* ✅ slug-based route with id fallback */}
//                                   <Link href={`/acts/${act.slug || act.id}`}>
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                             {/* Right */}
//                             <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                               >
//                                 {act.state || "All India"}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() =>
//                     handlePageChange(Math.max(1, currentPage - 1))
//                   }
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
//                     onClick={() => handlePageChange(p)}
//                     aria-label={`Page ${p}`}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && (
//                   <>
//                     <span className="px-1 text-gray-400 text-xs">…</span>
//                     <Button
//                       variant={
//                         currentPage === lastPage ? "default" : "outline"
//                       }
//                       size="sm"
//                       className={
//                         currentPage === lastPage
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }
//                       onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
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








// "use client";

// import { useMemo, useTransition, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// type ActItem = {
//   id: number;
//   title: string;
//   slug: string; 
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

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// // ✅ Custom component for expandable description
// const ExpandableDescription = ({ description }: { description: string }) => {
//   const [isExpanded, setIsExpanded] = useState(false);
  
//   // Check if description is longer than typical 2-line content (roughly 120 characters)
//   const shouldTruncate = description.length > 120;
  
//   if (!shouldTruncate) {
//     return (
//       <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs break-words">
//         {description}
//       </p>
//     );
//   }

//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <div className="relative">
//             <p 
//               className={`text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs break-words cursor-pointer transition-all duration-200 hover:text-gray-900 ${
//                 isExpanded ? '' : 'line-clamp-2'
//               }`}
//               onClick={() => setIsExpanded(!isExpanded)}
//               onMouseEnter={() => setIsExpanded(true)}
//               onMouseLeave={() => setIsExpanded(false)}
//             >
//               {description}
//             </p>
//             {!isExpanded && (
//               <div className="absolute bottom-0 right-0 bg-gradient-to-l from-orange-50 via-orange-50 to-transparent 2xl:ml-18 pr-2">
//                 <span className="text-orange-500 text-[10px] font-medium">...more</span>
//               </div>
//             )}
//           </div>
//         </TooltipTrigger>
//         <TooltipContent side="top" className="max-w-sm p-3 bg-orange-400 text-white text-xs leading-relaxed">
//           <p>{description}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default function ActsPageClient({
//   initialData,
//   initialPage,
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   // Use props data directly - no client API calls
//   const serverData = initialData;

//   // UI filters (client-side)   
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   // Server-side navigation with URL updates
//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/acts${newUrl}`);
//     });
//   };

//   // Client-side search + state filter
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
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   // Reset to page 1 when changing filters (server navigation)
//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

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
//                     with latest amendments and updates. Data is automatically
//                     updated every 30 minutes using ISR for optimal performance.
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
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   disabled={isPending}
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={handleStateChange}
//                 disabled={isPending}
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

//             {/* Loading indicator - only during page transitions */}
//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Content */}
//             {!isPending && (
//               <>
//                 {filtered.length === 0 ? (
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered.map((act) => (
//                       <div
//                         key={act.id}
//                         className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                             {/* Left */}
//                             <div className="min-w-0 flex flex-col">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act.title}
//                               </h4>
                              
//                               {/* ✅ Expandable Description Component */}
//                               <ExpandableDescription description={act.short_description} />
                              
//                               <div className="mt-2 md:mt-3">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   <Link href={`/acts/${act.slug || act.id}`}>
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                             {/* Right */}
//                             <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                               >
//                                 {act.state || "All India"}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() =>
//                     handlePageChange(Math.max(1, currentPage - 1))
//                   }
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
//                     onClick={() => handlePageChange(p)}
//                     aria-label={`Page ${p}`}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && (
//                   <>
//                     <span className="px-1 text-gray-400 text-xs">…</span>
//                     <Button
//                       variant={
//                         currentPage === lastPage ? "default" : "outline"
//                       }
//                       size="sm"
//                       className={
//                         currentPage === lastPage
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }
//                       onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
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






// "use client";

// import { useMemo, useTransition, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// type ActItem = {
//   id: number;
//   title: string;
//   slug: string; 
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

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// // ✅ Fixed ExpandableDescription component - सिर्फ tooltip में full content
// const ExpandableDescription = ({ description }: { description: string }) => {
//   // Check if description is longer than typical 2-line content (roughly 120 characters)
//   const shouldTruncate = description.length > 120;
  
//   if (!shouldTruncate) {
//     return (
//       <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs break-words">
//         {description}
//       </p>
//     );
//   }

//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <div className="relative mt-2">
//             {/* ✅ Text हमेशा truncated रहेगी - कभी expand नहीं होगी */}
//             <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words cursor-help line-clamp-2 pr-12">
//               {description}
//             </p>
            
//             {/* ✅ Fixed position ...more indicator */}
//             <div className="absolute top-0 right-0 h-full flex items-end">
//               <div className="bg-gradient-to-l from-orange-50 via-orange-50 to-transparent pl-4 pr-1 pb-0">
//                 <span className="text-orange-500 text-[10px] font-medium whitespace-nowrap">...more</span>
//               </div>
//             </div>
//           </div>
//         </TooltipTrigger>
//         <TooltipContent side="top" className="max-w-md p-3 bg-orange-400 text-white text-xs leading-relaxed">
//           <p>{description}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default function ActsPageClient({
//   initialData,
//   initialPage,
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   // Use props data directly - no client API calls
//   const serverData = initialData;

//   // UI filters (client-side)   
//   const [q, setQ] = useState<string>("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");

//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   // Server-side navigation with URL updates
//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/acts${newUrl}`);
//     });
//   };

//   // Client-side search + state filter
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
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   // Reset to page 1 when changing filters (server navigation)
//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

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
//                     with latest amendments and updates. Data is automatically
//                     updated every 30 minutes using ISR for optimal performance.
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
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   disabled={isPending}
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={handleStateChange}
//                 disabled={isPending}
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

//             {/* Loading indicator - only during page transitions */}
//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Content */}
//             {!isPending && (
//               <>
//                 {filtered.length === 0 ? (
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered.map((act) => (
//                       <div
//                         key={act.id}
//                         className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                             {/* Left */}
//                             <div className="min-w-0 flex flex-col">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act.title}
//                               </h4>
                              
//                               {/* ✅ Fixed Expandable Description Component */}
//                               <ExpandableDescription description={act.short_description} />
                              
//                               <div className="mt-2 md:mt-3">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   <Link href={`/acts/${act.slug || act.id}`}>
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                             {/* Right */}
//                             <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                               >
//                                 {act.state || "All India"}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() =>
//                     handlePageChange(Math.max(1, currentPage - 1))
//                   }
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
//                     onClick={() => handlePageChange(p)}
//                     aria-label={`Page ${p}`}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && (
//                   <>
//                     <span className="px-1 text-gray-400 text-xs">…</span>
//                     <Button
//                       variant={
//                         currentPage === lastPage ? "default" : "outline"
//                       }
//                       size="sm"
//                       className={
//                         currentPage === lastPage
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }
//                       onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
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




















"use client";

import { useMemo, useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

// ---------- Types matching API ----------
type ActItem = {
  id: number;
  title: string;
  slug: string;
  state: string;
  short_description: string;
  act_doc_url?: string | null;
  rule_doc_url?: string | null;
  forms_count?: number;
  created_at?: string;
};

type ApiResponse = {
  data: ActItem[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
  };
};

type StateApiResponse = {
  states: { id: number; name: string }[];
};

interface ActsPageClientProps {
  initialData: ApiResponse;
  initialPage: number;
}

// ✅ Fixed ExpandableDescription component - सिर्फ tooltip में full content
const ExpandableDescription = ({ description }: { description: string }) => {
  const shouldTruncate = description.length > 120;

  if (!shouldTruncate) {
    return (
      <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs break-words">
        {description}
      </p>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="relative mt-2">
            <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words cursor-help line-clamp-2 pr-12">
              {description}
            </p>
            <div className="absolute top-0 right-0 h-full flex items-end">
              <div className="bg-gradient-to-l from-orange-50 via-orange-50 to-transparent pl-4 pr-1 pb-0">
                <span className="text-orange-500 text-[10px] font-medium whitespace-nowrap">...more</span>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="max-w-md p-3 bg-orange-400 text-white text-xs leading-relaxed">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function ActsPageClient({
  initialData,
  initialPage,
}: ActsPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [states, setStates] = useState<{ id: number; name: string }[]>([]);
  const [stateFilter, setStateFilter] = useState<string>("All States");
  const [q, setQ] = useState<string>("");

  // Use props data directly - no client API calls
  const serverData = initialData;

  // Fetch dynamic states from API
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("http://100.110.147.101:8000/api/states");
        const data: StateApiResponse = await response.json();
        setStates(data.states);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  const currentPage = serverData?.meta?.current_page ?? initialPage;
  const lastPage = serverData?.meta?.last_page ?? 1;
  const acts = serverData?.data ?? [];

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (newPage === 1) params.delete("page");
      else params.set("page", String(newPage));
      const newUrl = params.toString() ? `?${params.toString()}` : "";
      router.push(`/acts${newUrl}`);
    });
  };

  // Client-side search + state filter
  const filtered = useMemo(() => {
    let rows = acts;

    if (stateFilter && stateFilter !== "All States") {
      rows = rows.filter(
        (r) => r.state.toLowerCase() === stateFilter.toLowerCase()
      );
    }

    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      rows = rows.filter(
        (r) =>
          r.title.toLowerCase().includes(needle) ||
          r.short_description.toLowerCase().includes(needle)
      );
    }

    return rows;
  }, [acts, q, stateFilter]);

  const pageNumbers = useMemo(() => {
    const max = Math.min(lastPage, 5);
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [lastPage]);

  const handleSearchChange = (value: string) => {
    setQ(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  const handleStateChange = (value: string) => {
    setStateFilter(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-4 xl:px-4 2xl:px-6 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h1 className="font-bold text-slate-800 text-base sm:text-xl mb-1">
                    Labour Acts &amp; Regulations :
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify pb-2">
                    Comprehensive collection of central and state labour acts
                    with latest amendments and updates. Data is automatically
                    updated every 30 minutes using ISR for optimal performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4 p-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
                <Input
                  value={q}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search by title..."
                  className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  disabled={isPending}
                />
              </div>
<Select
  value={stateFilter}
  onValueChange={handleStateChange}
  disabled={isPending}
>
  <SelectTrigger className="w-full lg:w-36 2xl:w-48 h-8 2xl:h-10 text-xs lg:text-sm bg-gray-100">
    {/* Setting the default value */}
    <SelectValue>Select State</SelectValue>
  </SelectTrigger>
  <SelectContent>
    {/* Default option */}
    <SelectItem value="All States">Select State</SelectItem>
    {states.map((s) => (
      <SelectItem key={s.id} value={s.name}>
        {s.name}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

            </div>

            {/* Loading indicator - only during page transitions */}
            {isPending && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
                <span className="ml-2 text-sm text-gray-600">Loading...</span>
              </div>
            )}

            {/* Content */}
            {!isPending && (
              <>
                {filtered.length === 0 ? (
                  <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    No results found for your filters.
                  </div>
                ) : (
                  <div className="lg:space-y-2">
                    {filtered.map((act) => (
                      <div
                        key={act.id}
                        className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
                      >
                        <div className="p-3">
                          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
                            <div className="min-w-0 flex flex-col">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                                {act.title}
                              </h4>
                              
                              <ExpandableDescription description={act.short_description} />
                              
                              <div className="mt-2 md:mt-3">
                                <Button
                                  size="sm"
                                  className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                  asChild
                                >
                                  <Link href={`/acts/${act.slug || act.id}`}>
                                    <Eye className="w-4 h-4" />
                                    <span>Read More</span>
                                  </Link>
                                </Button>
                              </div>
                            </div>
                            <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
                              >
                                {act.state || "All India"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Pagination */}
            {!isPending && serverData && lastPage > 1 && (
              <div className="flex justify-center items-center gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage <= 1}
                  onClick={() =>
                    handlePageChange(Math.max(1, currentPage - 1))
                  }
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {pageNumbers.map((p) => (
                  <Button
                    key={p}
                    variant={currentPage === p ? "default" : "outline"}
                    size="sm"
                    className={
                      currentPage === p
                        ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                    }
                    onClick={() => handlePageChange(p)}
                    aria-label={`Page ${p}`}
                  >
                    {p}
                  </Button>
                ))}

                {lastPage > 5 && (
                  <>
                    <span className="px-1 text-gray-400 text-xs">…</span>
                    <Button
                      variant={
                        currentPage === lastPage ? "default" : "outline"
                      }
                      size="sm"
                      className={
                        currentPage === lastPage
                          ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                          : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                      }
                      onClick={() => handlePageChange(lastPage)}
                      aria-label={`Page ${lastPage}`}
                    >
                      {lastPage}
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage >= lastPage}
                  onClick={() =>
                    handlePageChange(Math.min(lastPage, currentPage + 1))
                  }
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-4">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}













// "use client";

// import { useMemo, useState, useEffect, useTransition } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
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
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { Search, Eye, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // Types matching API
// type ActItem = {
//   id: number;
//   title: string;
//   slug: string;
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

// type StateApiResponse = {
//   states: { id: number; name: string }[];
// };

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// // Fixed ExpandableDescription component
// const ExpandableDescription = ({ description }: { description: string }) => {
//   const shouldTruncate = description.length > 120;

//   if (!shouldTruncate) {
//     return (
//       <p className="text-gray-700 leading-snug mt-2 text-[11px] sm:text-[0.8rem] lg:text-xs break-words">
//         {description}
//       </p>
//     );
//   }

//   return (
//     <TooltipProvider>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <div className="relative mt-2">
//             <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words cursor-help line-clamp-2 pr-12">
//               {description}
//             </p>
//             <div className="absolute top-0 right-0 h-full flex items-end">
//               <div className="bg-gradient-to-l from-orange-50 via-orange-50 to-transparent pl-4 pr-1 pb-0">
//                 <span className="text-orange-500 text-[10px] font-medium whitespace-nowrap">...more</span>
//               </div>
//             </div>
//           </div>
//         </TooltipTrigger>
//         <TooltipContent side="top" className="max-w-md p-3 bg-orange-400 text-white text-xs leading-relaxed">
//           <p>{description}</p>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// };

// export default function ActsPageClient({
//   initialData,
//   initialPage,
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();
//   const [states, setStates] = useState<{ id: number; name: string }[]>([]);
//   const [stateFilter, setStateFilter] = useState<string>("All India");
//   const [q, setQ] = useState<string>("");

//   // Use props data directly - no client API calls
//   const serverData = initialData;

//   // Fetch dynamic states from API
//   useEffect(() => {
//     const fetchStates = async () => {
//       try {
//         const response = await fetch("http://100.110.147.101:8000/api/states");
//         const data: StateApiResponse = await response.json();
//         setStates(data.states);
//       } catch (error) {
//         console.error("Error fetching states:", error);
//       }
//     };

//     fetchStates();
//   }, []);

//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/acts${newUrl}`);
//     });
//   };

//   // Client-side search + state filter
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
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-4 xl:px-4 2xl:px-6 py-6">
//         <div className="grid lg:grid-cols-4 gap-6">
//           <div className="lg:col-span-3">
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-3">
//                 <div>
//                   <h1 className="font-bold text-slate-800 text-base sm:text-xl mb-1">
//                     Labour Acts &amp; Regulations :
//                   </h1>
//                   <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify pb-2">
//                     Comprehensive collection of central and state labour acts
//                     with latest amendments and updates. Data is automatically
//                     updated every 30 minutes using ISR for optimal performance.
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
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="pl-10 h-8 2xl:h-10 text-xs lg:text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   disabled={isPending}
//                 />
//               </div>

//               <Select
//                 value={stateFilter}
//                 onValueChange={handleStateChange}
//                 disabled={isPending}
//               >
//                 <SelectTrigger className="w-full lg:w-36 2xl:w-48 h-8 2xl:h-10 text-xs lg:text-sm bg-gray-100">
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {states.map((s) => (
//                     <SelectItem key={s.id} value={s.name}>
//                       {s.name} 
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Loading indicator */}
//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Content */}
//             {!isPending && (
//               <>
//                 {filtered.length === 0 ? (
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered.map((act) => (
//                       <div
//                         key={act.id}
//                         className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                             <div className="min-w-0 flex flex-col">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act.title}
//                               </h4>
                              
//                               <ExpandableDescription description={act.short_description} />
                              
//                               <div className="mt-2 md:mt-3">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   <Link href={`/acts/${act.slug || act.id}`}>
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
//                             <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                               <Badge
//                                 variant="outline"
//                                 className="bg-blue-50 text-blue-700 border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium truncate max-w-[140px]"
//                               >
//                                 {act.state || "All India"}
//                               </Badge>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && serverData && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-4">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage <= 1}
//                   onClick={() =>
//                     handlePageChange(Math.max(1, currentPage - 1))
//                   }
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
//                     onClick={() => handlePageChange(p)}
//                     aria-label={`Page ${p}`}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && (
//                   <>
//                     <span className="px-1 text-gray-400 text-xs">…</span>
//                     <Button
//                       variant={
//                         currentPage === lastPage ? "default" : "outline"
//                       }
//                       size="sm"
//                       className={
//                         currentPage === lastPage
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }
//                       onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
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

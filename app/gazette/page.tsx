

// "use client";

// import { useEffect, useMemo, useState, useTransition } from "react";
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
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Calendar as CalendarIcon,
//   Eye,
//   Download,
// } from "lucide-react";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";

// // ---------- Types from API ----------
// type GazetteItem = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description: string | null;
//   description: string | null; // HTML
//   state_slug: string | null;
//   state_name: string | null;
//   updated_date: string | null;   // "2025-09-10"
//   effective_date: string | null; // "2025-09-11"
//   pdf_path?: string | null;
//   pdf_url?: string | null;
//   created_at?: string;
//   updated_at?: string;
// };

// type ApiResponse = {
//   data: GazetteItem[];
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

// // ---------- Env bases ----------
// const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";

// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
//   API_BASE;

// // ---------- helpers ----------
// function normalizeFileUrl(url?: string | null, path?: string | null): string | null {
//   // prefer absolute url
//   if (url) {
//     try {
//       const u = new URL(url, FILE_HOST);
//       const base = new URL(FILE_HOST);
//       const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
//       const origin = isLocal ? base.origin : u.origin;
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       /* fallthrough to path */
//     }
//   }
//   if (path) {
//     let p = path.trim();
//     if (!p.startsWith("/")) p = `/${p}`;
//     if (!p.startsWith("/storage")) p = `/storage${p}`;
//     const cleanPath = encodeURI(decodeURI(p.replace(/\/{2,}/g, "/")));
//     return `${FILE_HOST}${cleanPath}`;
//   }
//   return null;
// }

// function formatOrdinal(n: number) {
//   const s = ["th", "st", "nd", "rd"];
//   const v = n % 100;
//   return n + (s[(v - 20) % 10] || s[v] || s[0]);
// }

// function formatPrettyDate(iso?: string | null) {
//   if (!iso) return "";
//   const d = new Date(iso);
//   if (Number.isNaN(d.getTime())) return "";
//   return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", { month: "short" })}, ${d.getFullYear()}`;
// }

// function sameDay(a?: Date | null, iso?: string | null) {
//   if (!a || !iso) return true;
//   const b = new Date(iso);
//   return (
//     a.getFullYear() === b.getFullYear() &&
//     a.getMonth() === b.getMonth() &&
//     a.getDate() === b.getDate()
//   );
// }

// export default function GazetteNotificationsPage() {
//   // UI state
//   const [q, setQ] = useState("");
//   const [stateFilter, setStateFilter] = useState<string>(""); // "" = placeholder
//   const [effDate, setEffDate] = useState<Date | null>(null);
//   const [updDate, setUpdDate] = useState<Date | null>(null);

//   // pagination
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [lastPage, setLastPage] = useState<number>(1);

//   // data
//   const [rows, setRows] = useState<GazetteItem[]>([]);
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState<string | null>(null);

//   // Fetch page
//   useEffect(() => {
//     let cancelled = false;
//     startTransition(async () => {
//       setError(null);
//       try {
//         const res = await fetch(`${API_BASE}/api/gazettes?page=${currentPage}`, {
//           // cache: "no-store", // or ISR via route server component if you want
//         });
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const json: ApiResponse = await res.json();
//         if (cancelled) return;
//         setRows(Array.isArray(json?.data) ? json.data : []);
//         setLastPage(json?.meta?.last_page ?? 1);
//       } catch (e: any) {
//         if (cancelled) return;
//         setError(e?.message || "Failed to load gazettes.");
//         setRows([]);
//         setLastPage(1);
//       }
//     });
//     return () => {
//       cancelled = true;
//     };
//   }, [currentPage]);

//   // Derive states list (from current page)
//   const states = useMemo(() => {
//     const s = new Set<string>();
//     s.add("All States");
//     rows.forEach(r => r.state_name && s.add(r.state_name));
//     return Array.from(s);
//   }, [rows]);

//   // Client-side filters on current page
//   const filtered = useMemo(() => {
//     let list = rows;

//     if (stateFilter && stateFilter !== "All States") {
//       list = list.filter(r => (r.state_name || "").toLowerCase() === stateFilter.toLowerCase());
//     }

//     if (q.trim()) {
//       const needle = q.trim().toLowerCase();
//       list = list.filter(r =>
//         r.title.toLowerCase().includes(needle) ||
//         (r.short_description || "").toLowerCase().includes(needle)
//       );
//     }

//     if (effDate) {
//       list = list.filter(r => sameDay(effDate, r.effective_date));
//     }
//     if (updDate) {
//       list = list.filter(r => sameDay(updDate, r.updated_date));
//     }

//     return list;
//   }, [rows, q, stateFilter, effDate, updDate]);

//   // simple paginator window (1..5 + last)
//   const pageNumbers = useMemo(() => {
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div
//         className="
//           mx-auto
//           px-2 py-2
//           min-[375px]:px-3 min-[375px]:py-3
//           sm:px-4 sm:py-4
//           lg:px-5 lg:py-5
//           xl:px-6
//         "
//       >
//         {/* Filter Bar */}
//         <div className="mb-3 sm:mb-4 lg:-ml-3 lg:-mt-6">
//           <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-2 p-2 sm:p-3">
//             <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-2 lg:flex-row lg:gap-2">
//               {/* Search */}
//               <div className="relative min-w-0 lg:w-80">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
//                 <Input
//                   value={q}
//                   onChange={(e) => {
//                     setQ(e.target.value);
//                     if (currentPage !== 1) setCurrentPage(1);
//                   }}
//                   placeholder="Search by title..."
//                   className="w-full rounded-lg border-gray-300 bg-white h-8 sm:h-9 lg:h-10 pl-9 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm placeholder:text-gray-500"
//                 />
//               </div>
//             </div>

//             {/* State + Dates */}
//             <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 sm:items-end lg:gap-2 lg:flex-row lg:items-end">
//               {/* State */}
//               <div className="flex-shrink-0 sm:w-28 lg:w-40">
//                 <Select
//                   value={stateFilter || undefined}
//                   onValueChange={(v) => {
//                     setStateFilter(v === "All States" ? "" : v);
//                     if (currentPage !== 1) setCurrentPage(1);
//                   }}
//                 >
//                   <SelectTrigger className="w-full bg-white hover:bg-gray-50 border-gray-300 h-9 sm:h-9 lg:h-10 py-[1.2rem] text-xs sm:text-sm">
//                     <SelectValue placeholder="State" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {states.map((state) => (
//                       <SelectItem key={state} value={state} className="text-xs sm:text-sm">
//                         {state}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Effective Date */}
//               <div className="flex-shrink-0 sm:w-36 lg:w-48">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
//                     >
//                       <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                       <span className="truncate">
//                         {effDate ? effDate.toLocaleDateString() : "Effective Date"}
//                       </span>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={effDate ?? undefined}
//                       onSelect={(d) => setEffDate(d ?? null)}
//                       initialFocus
//                       className="rounded-md border"
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Updated Date */}
//               <div className="flex-shrink-0 sm:w-36 lg:w-48">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
//                     >
//                       <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                       <span className="truncate">
//                         {updDate ? updDate.toLocaleDateString() : "Updated Date"}
//                       </span>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       selected={updDate ?? undefined}
//                       onSelect={(d) => setUpdDate(d ?? null)}
//                       initialFocus
//                       className="rounded-md border"
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           {/* Sidebar */}
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-24 z-10">
//               <Card className="p-2 md:p-3 xl:p-0.5 2xl:p-6">
//                 <CardContent className="p-2">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Main */}
//           <div className="lg:col-span-4 lg:order-1 order-2 ">
//             {/* Header */}
//             <div className="mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
//                 <div>
//                   <div className="flex justify-between">
//                     <h1 className="font-bold text-slate-800 text-base min-[375px]:text-lg sm:text-xl mb-1">
//                       Gazette Notifications :
//                     </h1>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2">
//                     Gazette Notification is an authorized legal document issued by the Ministries of Government of India,
//                     published in the official gazette containing significant Statutory Orders (S.O) and General Statutory Rules (G.S.R).
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Cards */}
//             {error ? (
//               <p className="text-sm text-red-600">{error}</p>
//             ) : isPending ? (
//               <p className="text-sm text-gray-600">Loading…</p>
//             ) : filtered.length === 0 ? (
//               <p className="text-sm text-gray-600">No notifications found.</p>
//             ) : (
//               <div className="lg:space-y-2">
//                 {filtered.map((n) => {
//                   const updated = formatPrettyDate(n.updated_date);
//                   const effective = formatPrettyDate(n.effective_date);
//                   const file = normalizeFileUrl(n.pdf_url, n.pdf_path);

//                   return (
//                     <div
//                       key={n.id}
//                       className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                     >
//                       <div className="p-2 sm:p-3 lg:p-1">
//                         <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
//                           {/* LEFT */}
//                           <div className="min-w-0">
//                             <h4 className="text-[12px] min-[375px]:text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                               {n.title}
//                             </h4>
//                             <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
//                               {n.short_description || ""}
//                             </p>
//                             <div className="mt-2 md:mt-4">
//                               <Button
//                                 size="sm"
//                                 className="bg-orange-400 text-white hover:bg-orange-500 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                 asChild
//                                 aria-label="Read More"
//                               >
//                                 <Link href={`/gazette/${n.slug}`}>
//                                   <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
//                                   <span className="whitespace-nowrap">Read More</span>
//                                 </Link>
//                               </Button>
//                             </div>
//                           </div>

//                           {/* RIGHT */}
//                           <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                             <Badge
//                               variant="outline"
//                               className="bg-blue-50 text-blue-700 border-blue-200 text-[12px] sm:text-[9px] lg:text-[12px] px-1.5 py-0.5 font-medium"
//                             >
//                               {n.state_name || "Central"}
//                             </Badge>

//                             <div className="space-y-1 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem]">
//                               {updated && (
//                                 <div>
//                                   <span className="text-slate-500 font-semibold">Updated Date:&nbsp;</span>
//                                   <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                                     {updated}
//                                   </span>
//                                 </div>
//                               )}
//                               {effective && (
//                                 <div>
//                                   <span className="text-slate-500 font-semibold">Effective Date:&nbsp;</span>
//                                   <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                                     {effective}
//                                   </span>
//                                 </div>
//                               )}
//                             </div>

//                             {/* Fixed Download Button - Only show if file exists */}
//                           {(() => {
//   const hasValidFile = (n.pdf_url && n.pdf_url.trim() !== "") || 
//                       (n.pdf_path && n.pdf_path.trim() !== "");
//   const downloadUrl = normalizeFileUrl(n.pdf_url, n.pdf_path);
  
//   return hasValidFile && downloadUrl ? (
//     <Button
//       size="sm"
//       className="mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1 shrink-0 w-auto max-w-full hover:cursor-pointer"
//       aria-label="Download"
//       onClick={() => window.open(downloadUrl, "_blank")}
//     >
//       <Download className="w-3 h-3 2xl:w-4 2xl:h-4" />
//       <span className="whitespace-nowrap">Download</span>
//     </Button>
//   ) : null;
// })()}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Pagination */}
//             {lastPage > 1 && (
//               <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
//                   aria-label="Previous"
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 >
//                   <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
//                 </Button>

//                 {pageNumbers.map((p) => (
//                   <Button
//                     key={p}
//                     variant={currentPage === p ? "default" : "outline"}
//                     size="sm"
//                     className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${
//                       currentPage === p
//                         ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                         : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                     }`}
//                     aria-label={`Page ${p}`}
//                     onClick={() => setCurrentPage(p)}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && <span className="px-1 text-gray-400 text-[10px] sm:text-xs">…</span>}

//                 {lastPage > 5 && (
//                   <Button
//                     variant={currentPage === lastPage ? "default" : "outline"}
//                     size="sm"
//                     className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${
//                       currentPage === lastPage
//                         ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                         : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                     }`}
//                     aria-label={`Page ${lastPage}`}
//                     onClick={() => setCurrentPage(lastPage)}
//                   >
//                     {lastPage}
//                   </Button>
//                 )}

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
//                   aria-label="Next"
//                   disabled={currentPage === lastPage}
//                   onClick={() => setCurrentPage((p) => Math.min(lastPage, p + 1))}
//                 >
//                   <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












import { Metadata } from "next";
import GazetteNotificationsClient from "@/app/_component/gazette/page";

// ---------- Types from API ----------
type GazetteItem = {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  state_slug: string | null;
  state_name: string | null;
  updated_date: string | null;
  effective_date: string | null;
  pdf_path?: string | null;
  pdf_url?: string | null;
  created_at?: string;
  updated_at?: string;
};

type ApiResponse = {
  data: GazetteItem[];
  links: { first: string | null; last: string | null; prev: string | null; next: string | null };
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

// Use environment variables for API base URLs
const API_BASE = process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") || "http://100.110.147.101:8000";

// Fetch Gazette Data with ISR
async function getGazetteData(page: number = 1): Promise<ApiResponse> {
  try {
    const res = await fetch(`${API_BASE}/api/gazettes?page=${page}`, { 
      next: { 
        revalidate: 1800, // ISR: revalidate every 30 minutes
        tags: ['gazette-notifications'] 
      } 
    });
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch gazette data`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Error fetching gazette data:", error);
    return {
      data: [],
      links: { first: null, last: null, prev: null, next: null },
      meta: {
        current_page: 1,
        from: null,
        last_page: 1,
        path: "",
        per_page: 10,
        to: null,
        total: 0
      }
    };
  }
}

// Fetch States Data (for filters)
async function getStatesFromGazettes(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/gazettes/states`, { 
      next: { 
        revalidate: 3600, // Cache states for 1 hour
        tags: ['gazette-states'] 
      } 
    });
    
    if (!res.ok) {
      console.warn("Failed to fetch states from API, will use client-side derivation");
      return [];
    }
    
    const data = await res.json();
    return data.states || [];
  } catch (error) {
    console.error("Error fetching states:", error);
    return [];
  }
}

// Server-side metadata
export const metadata: Metadata = {
  title: "Gazette Notifications | Official Government Publications",
  description:
    "Gazette Notification is an authorized legal document issued by the Ministries of Government of India, published in the official gazette containing significant Statutory Orders (S.O) and General Statutory Rules (G.S.R).",
  keywords: [
    "Gazette Notifications",
    "Government Gazette",
    "Official Publications",
    "Statutory Orders",
    "Legal Documents",
    "Government Notifications",
    "Indian Government",
    "S.O",
    "G.S.R"
  ],
};

// Main server component with ISR
export default async function GazetteNotificationsPage({ 
  searchParams 
}: { 
  searchParams: { page?: string } 
}) {
  const currentPage = Number(searchParams.page) || 1;

  // Fetch gazette data and states data in parallel
  const [initialData, availableStates] = await Promise.all([
    getGazetteData(currentPage),
    getStatesFromGazettes()
  ]);

  return (
    <GazetteNotificationsClient 
      initialData={initialData} 
      initialPage={currentPage}
      availableStates={availableStates}
    />
  );
}
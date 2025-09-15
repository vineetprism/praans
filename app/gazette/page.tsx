// "use client";

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
//   CalendarIcon,
//   Eye,
//   Download,
// } from "lucide-react";
// import Link from "next/link";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
// import { useState } from "react";

// const notifications = [
//   {
//     id: 1,
//     title:
//       "Notification regarding the Display of Bengali Language on Top of All Signage's in KMC, West Bengal",
//     notificationNumber: "G.O. No. LMW-2024/CR-45/Lab-2",
//     department: "Labour and Employment Department",
//     state: "Maharashtra",
//     category: "Language Policy",
//     description:
//       "The Kolkata Municipal Corporation, Government of West Bengal Vide Municipal Commissioners Circular No.34 of 2025-26, has updated Notification regarding the Display of Bengali Language on Top of All S...",
//     publishedDate: "2024-12-20",
//     effectiveDate: "30th Aug, 2025",
//     updatedDate: "30th Aug, 2025",
//     fileSize: "1.2 MB",
//     format: "PDF",
//     isNew: true,
//     priority: "High",
//     views: 2847,
//     slug: "maharashtra-minimum-wages-revision-2025",
//   },
//   {
//     id: 2,
//     title:
//       "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     notificationNumber: "S.O. 4521(E)",
//     department: "Ministry of Labour and Employment",
//     state: "Central",
//     category: "Contract Labour",
//     description:
//       "Amendment to rules regarding digital registration and compliance mechanisms for contract labour establishments under the Contract Labour Act...",
//     publishedDate: "2024-12-18",
//     effectiveDate: "18th Dec, 2024",
//     updatedDate: "18th Dec, 2024",
//     fileSize: "856 KB",
//     format: "PDF",
//     isNew: true,
//     priority: "High",
//     views: 1923,
//     slug: "contract-labour-rules-amendment-2024",
//   },
//   {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     notificationNumber: "FD 01 CTX 2024",
//     department: "Finance Department",
//     state: "Karnataka",
//     category: "Professional Tax",
//     description:
//       "Revised professional tax slabs and rates applicable for the financial year 2025-26 as per the Karnataka Finance Department circular...",
//     publishedDate: "2024-12-15",
//     effectiveDate: "1st Apr, 2025",
//     updatedDate: "15th Dec, 2024",
//     fileSize: "634 KB",
//     format: "PDF",
//     isNew: true,
//     priority: "Medium",
//     views: 1456,
//     slug: "karnataka-professional-tax-rates-2025",
//   },
//   {
//     id: 4,
//     title: "Provident Fund contribution rate changes - Circular",
//     notificationNumber: "Circular No. 14/2024",
//     department: "Employees' Provident Fund Organisation",
//     state: "Central",
//     category: "Provident Fund",
//     description:
//       "Changes in PF contribution rates and administrative charges effective from February 2025 as notified by EPFO headquarters...",
//     publishedDate: "2024-12-12",
//     effectiveDate: "1st Feb, 2025",
//     updatedDate: "12th Dec, 2024",
//     fileSize: "423 KB",
//     format: "PDF",
//     isNew: false,
//     priority: "High",
//     views: 3241,
//     slug: "pf-contribution-rate-changes-2025",
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
//   "Rajasthan",
//   "Uttar Pradesh",
// ];

// export default function GazetteNotificationsPage() {

//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 10; // Set this based on your total data

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div
//         className="
//          mx-auto
//         px-2 py-2
//         min-[375px]:px-3 min-[375px]:py-3
//         sm:px-4 sm:py-4
//         lg:px-5 lg:py-5
//         xl:px-6
//       "
//       >
//         {/* Fixed Horizontal Filter Bar */}
//         <div className="mb-3 sm:mb-4 lg:-ml-3 lg:-mt-6">
//           <div
//             className="
//     flex flex-col gap-2 
//     lg:flex-row lg:items-end lg:gap-2
//     p-2 sm:p-3 
//   "
//           >
//             {/* Top Row on Mobile, Single Row on Desktop */}
//             <div
//               className="
//       flex flex-col gap-2
//       sm:flex-row sm:items-end sm:gap-2
//       lg:flex-row lg:gap-2
//     "
//             >
//               {/* Search Input */}
//               <div className="relative min-w-0 lg:w-80">
//                 <Search
//                   className="
//           absolute left-3 top-1/2 -translate-y-1/2 
//           text-gray-400 pointer-events-none w-4 h-4
//         "
//                 />
//                 <Input
//                   placeholder="Search by title..."
//                   className="
//             w-full rounded-lg border-gray-300 bg-white
//             h-8 sm:h-9 lg:h-10
//             pl-9 sm:pl-10
//             pr-3 sm:pr-4
//             text-xs sm:text-sm
//             placeholder:text-gray-500
//           "
//                 />
//               </div>
//             </div>

//             {/* Date Pickers Row - All in one line */}
//             <div
//               className="
//       flex flex-col gap-2
//       sm:flex-row sm:gap-2 sm:items-end
//       lg:gap-2 lg:flex-row lg:items-end
//     "
//             >
//               {/* State Dropdown */}
//               <div className="flex-shrink-0 sm:w-28 lg:w-40">
//                 <Select>
//                   <SelectTrigger
//                     className="lg:h-20
//             w-full bg-white hover:bg-gray-50 border-gray-300
//             h-9 sm:h-9 
//             py-[1.2rem] 
//             text-xs sm:text-sm 
//           "
//                   >
//                     <SelectValue placeholder="State" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {states.map((state) => (
//                       <SelectItem
//                         key={state}
//                         value={state.toLowerCase().replace(/ /g, "-")}
//                         className="text-xs sm:text-sm "
//                       >
//                         {state}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               {/* Effective Date */}
//               <div className="flex-shrink-0 sm:w-32 lg:w-46">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="
//                 w-full justify-start text-left font-normal
//                 bg-white hover:bg-gray-50 border-gray-300
//                 h-8 sm:h-9 lg:h-10
//                 px-3
//                 text-xs sm:text-sm
//               "
//                     >
//                       <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                       <span className="truncate">Effective Date</span>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
//                       initialFocus
//                       className="rounded-md border"
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>
//               {/* Update Date */}
//               <div className="flex-shrink-0 sm:w-32 lg:w-46">
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className="
//                 w-full justify-start text-left font-normal
//                 bg-white hover:bg-gray-50 border-gray-300
//                 h-8 sm:h-9 lg:h-10
//                 px-3
//                 text-xs sm:text-sm
//               "
//                     >
//                       <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                       <span className="truncate">Updated Date</span>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0" align="start">
//                     <Calendar
//                       mode="single"
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
//           {/* Ultra Compact Sidebar */}
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-24 z-10">
//               <Card className="p-2 md:p-3 xl:p-0.5 2xl:p-6">
//                 <CardContent className="p-2">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-4 lg:order-1 order-2 ">
//             {/* Ultra Compact Page Header */}
//             <div className="mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
//                 <div>
//                   <div className="flex justify-between">
//                     <h1
//                       className="
//                     font-bold text-slate-800
//                     text-base min-[375px]:text-lg sm:text-xl
//                     mb-1
//                   "
//                     >
//                       Gazette Notifications :
//                     </h1>
//                   </div>
//                   <p
//                     className="
//                     text-gray-600 leading-relaxed
//                     text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2
//                   "
//                   >
//                     Gazette Notification is an authorized legal document issued
//                     by the Ministries of Government of India, published in the
//                     official gazette vide Government of India Printing Presses
//                     containing significant Statutory Orders (S.O) and General
//                     Statutory Rules (G.S.R).
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Div Cards with Full Width - Previously Card Components */}
//             <div className="lg:space-y-2">
//               {notifications.map((notification) => (
//                 <div
//                   key={notification.id}
//                   className="
//         group bg-orange-50 border border-gray-200 rounded-lg shadow-sm
//         hover:shadow-md transition-all duration-200
//         border-l-4 border-l-orange-500 overflow-hidden
//       "
//                 >
//                   <div className="p-2 sm:p-3 lg:p-1">
//                     {/* 1 col on mobile, 1fr + auto on md+ so right side never pushes out */}
//                     <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
//                       {/* LEFT: title + desc + read more */}
//                       <div className="min-w-0">
//                         <h4
//                           className="
             
//               text-[12px] min-[375px]:text-xs sm:text-sm lg:sm
//               font-semibold text-gray-900 line-clamp-2
//             "
//                         >
//                           {notification.title}
//                         </h4>

//                         <p
//                           className="
//               text-gray-700 leading-snug mt-3
//               text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs
//               line-clamp-2
//             "
//                         >
//                           {notification.description}
//                         </p>

//                         <div className="mt-2 md:mt-4">
//                           <Button
//                             // variant="outline"
//                             size="sm"
//                             className="
//                   bg-orange-400 text-white hover:bg-orange-500 border-gray-300
//                   h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3
//                   text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm
//                   inline-flex items-center gap-1
//                 "
//                             asChild
//                             aria-label="Read More"
//                           >
//                             <Link href={`/gazette/${notification.slug}`} aria-label="Read More">
//                               <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
//                               <span className="whitespace-nowrap">
//                                 Read More
//                               </span>
//                             </Link>
//                           </Button>
//                         </div>
//                       </div>

//                       {/* RIGHT: state + dates + download pinned inside card */}
//                       <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                         <Badge
//                           variant="outline"
//                           className="bg-blue-50 text-blue-700 border-blue-200
//                          text-[12px] sm:text-[9px] lg:text-[12px] px-1.5 py-0.5 font-medium"
//                         >
//                           {notification.state}
//                         </Badge>

//                         <div className="space-y-1 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem]">
//                           <div>
//                             <span className="text-slate-500 font-semibold">
//                               Updated Date:&nbsp;
//                             </span>
//                             <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                               {notification.updatedDate}
//                             </span>
//                           </div>
//                           <div>
//                             <span className="text-slate-500 font-semibold">
//                               Effective Date:&nbsp;
//                             </span>
//                             <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                               {notification.effectiveDate}
//                             </span>
//                           </div>
//                         </div>

//                         {/* stays inside: no overflow */}
//                         <Button
//                           size="sm"
//                           className="
//                 mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600
//                 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3
//                 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm
//                 inline-flex items-center gap-1 shrink-0 w-auto max-w-full hover:cursor-pointer
//               "
//                           aria-label="Download"
//                         >
//                           <Download className="w-3 h-3 2xl:w-4 2xl:h-4" />
//                           <span className="whitespace-nowrap">Download</span>
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More Button */}
//             {/* Pagination */}
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
//                 aria-label="Previous"
//                 disabled={currentPage === 1}
//                 onClick={() => setCurrentPage(currentPage - 1)}
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
//                   aria-label={`Page ${page}`}
//                   onClick={() => setCurrentPage(page)}
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
//                 aria-label={`Page ${totalPages}`}
//                 onClick={() => setCurrentPage(totalPages)}
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
//                 aria-label="Next"
//                 disabled={currentPage === totalPages}
//                 onClick={() => setCurrentPage(currentPage + 1)}
//               >
//                 <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
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
  Search,
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Eye,
  Download,
} from "lucide-react";
import PopularSearch from "../PopularSearch/PopularSearch";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

// ---------- Types from API ----------
type GazetteItem = {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null; // HTML
  state_slug: string | null;
  state_name: string | null;
  updated_date: string | null;   // "2025-09-10"
  effective_date: string | null; // "2025-09-11"
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

// ---------- Env bases ----------
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
  API_BASE;

// ---------- helpers ----------
function normalizeFileUrl(url?: string | null, path?: string | null): string | null {
  // prefer absolute url
  if (url) {
    try {
      const u = new URL(url, FILE_HOST);
      const base = new URL(FILE_HOST);
      const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
      const origin = isLocal ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      /* fallthrough to path */
    }
  }
  if (path) {
    let p = path.trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (!p.startsWith("/storage")) p = `/storage${p}`;
    const cleanPath = encodeURI(decodeURI(p.replace(/\/{2,}/g, "/")));
    return `${FILE_HOST}${cleanPath}`;
  }
  return null;
}

function formatOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatPrettyDate(iso?: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", { month: "short" })}, ${d.getFullYear()}`;
}

function sameDay(a?: Date | null, iso?: string | null) {
  if (!a || !iso) return true;
  const b = new Date(iso);
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export default function GazetteNotificationsPage() {
  // UI state
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState<string>(""); // "" = placeholder
  const [effDate, setEffDate] = useState<Date | null>(null);
  const [updDate, setUpdDate] = useState<Date | null>(null);

  // pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);

  // data
  const [rows, setRows] = useState<GazetteItem[]>([]);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Fetch page
  useEffect(() => {
    let cancelled = false;
    startTransition(async () => {
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/api/gazettes?page=${currentPage}`, {
          // cache: "no-store", // or ISR via route server component if you want
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: ApiResponse = await res.json();
        if (cancelled) return;
        setRows(Array.isArray(json?.data) ? json.data : []);
        setLastPage(json?.meta?.last_page ?? 1);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message || "Failed to load gazettes.");
        setRows([]);
        setLastPage(1);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [currentPage]);

  // Derive states list (from current page)
  const states = useMemo(() => {
    const s = new Set<string>();
    s.add("All States");
    rows.forEach(r => r.state_name && s.add(r.state_name));
    return Array.from(s);
  }, [rows]);

  // Client-side filters on current page
  const filtered = useMemo(() => {
    let list = rows;

    if (stateFilter && stateFilter !== "All States") {
      list = list.filter(r => (r.state_name || "").toLowerCase() === stateFilter.toLowerCase());
    }

    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter(r =>
        r.title.toLowerCase().includes(needle) ||
        (r.short_description || "").toLowerCase().includes(needle)
      );
    }

    if (effDate) {
      list = list.filter(r => sameDay(effDate, r.effective_date));
    }
    if (updDate) {
      list = list.filter(r => sameDay(updDate, r.updated_date));
    }

    return list;
  }, [rows, q, stateFilter, effDate, updDate]);

  // simple paginator window (1..5 + last)
  const pageNumbers = useMemo(() => {
    const max = Math.min(lastPage, 5);
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [lastPage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="
          mx-auto
          px-2 py-2
          min-[375px]:px-3 min-[375px]:py-3
          sm:px-4 sm:py-4
          lg:px-5 lg:py-5
          xl:px-6
        "
      >
        {/* Filter Bar */}
        <div className="mb-3 sm:mb-4 lg:-ml-3 lg:-mt-6">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-2 p-2 sm:p-3">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-2 lg:flex-row lg:gap-2">
              {/* Search */}
              <div className="relative min-w-0 lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none w-4 h-4" />
                <Input
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    if (currentPage !== 1) setCurrentPage(1);
                  }}
                  placeholder="Search by title..."
                  className="w-full rounded-lg border-gray-300 bg-white h-8 sm:h-9 lg:h-10 pl-9 sm:pl-10 pr-3 sm:pr-4 text-xs sm:text-sm placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* State + Dates */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-2 sm:items-end lg:gap-2 lg:flex-row lg:items-end">
              {/* State */}
              <div className="flex-shrink-0 sm:w-28 lg:w-40">
                <Select
                  value={stateFilter || undefined}
                  onValueChange={(v) => {
                    setStateFilter(v === "All States" ? "" : v);
                    if (currentPage !== 1) setCurrentPage(1);
                  }}
                >
                  <SelectTrigger className="w-full bg-white hover:bg-gray-50 border-gray-300 h-9 sm:h-9 lg:h-10 py-[1.2rem] text-xs sm:text-sm">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state} className="text-xs sm:text-sm">
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Effective Date */}
              <div className="flex-shrink-0 sm:w-36 lg:w-48">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
                    >
                      <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                      <span className="truncate">
                        {effDate ? effDate.toLocaleDateString() : "Effective Date"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={effDate ?? undefined}
                      onSelect={(d) => setEffDate(d ?? null)}
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Updated Date */}
              <div className="flex-shrink-0 sm:w-36 lg:w-48">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
                    >
                      <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                      <span className="truncate">
                        {updDate ? updDate.toLocaleDateString() : "Updated Date"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={updDate ?? undefined}
                      onSelect={(d) => setUpdDate(d ?? null)}
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-24 z-10">
              <Card className="p-2 md:p-3 xl:p-0.5 2xl:p-6">
                <CardContent className="p-2">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main */}
          <div className="lg:col-span-4 lg:order-1 order-2 ">
            {/* Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-bold text-slate-800 text-base min-[375px]:text-lg sm:text-xl mb-1">
                      Gazette Notifications :
                    </h1>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2">
                    Gazette Notification is an authorized legal document issued by the Ministries of Government of India,
                    published in the official gazette containing significant Statutory Orders (S.O) and General Statutory Rules (G.S.R).
                  </p>
                </div>
              </div>
            </div>

            {/* Cards */}
            {error ? (
              <p className="text-sm text-red-600">{error}</p>
            ) : isPending ? (
              <p className="text-sm text-gray-600">Loading…</p>
            ) : filtered.length === 0 ? (
              <p className="text-sm text-gray-600">No notifications found.</p>
            ) : (
              <div className="lg:space-y-2">
                {filtered.map((n) => {
                  const updated = formatPrettyDate(n.updated_date);
                  const effective = formatPrettyDate(n.effective_date);
                  const file = normalizeFileUrl(n.pdf_url, n.pdf_path);

                  return (
                    <div
                      key={n.id}
                      className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
                    >
                      <div className="p-2 sm:p-3 lg:p-1">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
                          {/* LEFT */}
                          <div className="min-w-0">
                            <h4 className="text-[12px] min-[375px]:text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                              {n.title}
                            </h4>
                            <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
                              {n.short_description || ""}
                            </p>
                            <div className="mt-2 md:mt-4">
                              <Button
                                size="sm"
                                className="bg-orange-400 text-white hover:bg-orange-500 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                asChild
                                aria-label="Read More"
                              >
                                <Link href={`/gazette/${n.slug}`}>
                                  <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
                                  <span className="whitespace-nowrap">Read More</span>
                                </Link>
                              </Button>
                            </div>
                          </div>

                          {/* RIGHT */}
                          <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700 border-blue-200 text-[12px] sm:text-[9px] lg:text-[12px] px-1.5 py-0.5 font-medium"
                            >
                              {n.state_name || "Central"}
                            </Badge>

                            <div className="space-y-1 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem]">
                              {updated && (
                                <div>
                                  <span className="text-slate-500 font-semibold">Updated Date:&nbsp;</span>
                                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
                                    {updated}
                                  </span>
                                </div>
                              )}
                              {effective && (
                                <div>
                                  <span className="text-slate-500 font-semibold">Effective Date:&nbsp;</span>
                                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
                                    {effective}
                                  </span>
                                </div>
                              )}
                            </div>

                            <Button
                              size="sm"
                              className="mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1 shrink-0 w-auto max-w-full hover:cursor-pointer"
                              aria-label="Download"
                              disabled={!file}
                              onClick={() => file && window.open(file, "_blank")}
                            >
                              <Download className="w-3 h-3 2xl:w-4 2xl:h-4" />
                              <span className="whitespace-nowrap">{file ? "Download" : "No File"}</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {lastPage > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
                  aria-label="Previous"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>

                {pageNumbers.map((p) => (
                  <Button
                    key={p}
                    variant={currentPage === p ? "default" : "outline"}
                    size="sm"
                    className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${
                      currentPage === p
                        ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                    }`}
                    aria-label={`Page ${p}`}
                    onClick={() => setCurrentPage(p)}
                  >
                    {p}
                  </Button>
                ))}

                {lastPage > 5 && <span className="px-1 text-gray-400 text-[10px] sm:text-xs">…</span>}

                {lastPage > 5 && (
                  <Button
                    variant={currentPage === lastPage ? "default" : "outline"}
                    size="sm"
                    className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${
                      currentPage === lastPage
                        ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                    }`}
                    aria-label={`Page ${lastPage}`}
                    onClick={() => setCurrentPage(lastPage)}
                  >
                    {lastPage}
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
                  aria-label="Next"
                  disabled={currentPage === lastPage}
                  onClick={() => setCurrentPage((p) => Math.min(lastPage, p + 1))}
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

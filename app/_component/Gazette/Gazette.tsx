// "use client";
// import { useEffect, useMemo, useState, useTransition } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Loader2, ChevronLeft, ChevronRight, Download, Eye, CalendarIcon } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Calendar } from "@/components/ui/calendar";
// import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { openProtectedDownload, handleAutoDownloadOnReturn } from "@/lib/download-auth";

// // ---------- Types from API ----------
// type GazetteItem = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description: string | null;
//   description: string | null;
//   state_slug: string | null;
//   state_name: string | null;
//   updated_date: string | null;
//   effective_date: string | null;
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

// interface GazetteNotificationsClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
//   availableStates: string[];
// }

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// const FILE_HOST = API_BASE;

// // Utils
// const ExpandableDescription = ({ description }: { description: string | null }) => {
//   if (!description || description.trim() === "") return null;
//   const cleanedDescription = description.trim();
//   const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
//   const shouldTruncate = words.length > 50;
//   const displayText = shouldTruncate ? words.slice(0, 50).join(" ") + "..." : cleanedDescription;
//   return (
//     <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
//       {displayText}
//     </p>
//   );
// };

// function normalizeFileUrl(url?: string | null, path?: string | null): string | null {
//   if (url) {
//     try {
//       const u = new URL(url, FILE_HOST);
//       const base = new URL(FILE_HOST);
//       const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
//       const origin = isLocal ? base.origin : u.origin;
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       return null;
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
//   return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
// }

// export default function Gazette({ initialData, initialPage, availableStates }: GazetteNotificationsClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   // UI state
//   const [q, setQ] = useState("");
//   const [stateFilter, setStateFilter] = useState<string>("All States");
//   const [effDate, setEffDate] = useState<Date | null>(null);
//   const [updDate, setUpdDate] = useState<Date | null>(null);

//   // Server data
//   const serverData = initialData;
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const rows = serverData?.data ?? [];

//   // Auto-download when returning from login with ?dl=...
//   useEffect(() => {
//     handleAutoDownloadOnReturn(
//       { replace: (url: string) => router.replace(url) },
//       "/gazette",
//       typeof window !== "undefined" ? window.location.search : ""
//     );
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // URL pagination
//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/gazette${newUrl}`);
//     });
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const filtered = useMemo(() => {
//     let list = rows;

//     if (q.trim()) {
//       const needle = q.trim().toLowerCase();
//       list = list.filter(
//         (r) =>
//           r.title.toLowerCase().includes(needle) ||
//           (r.short_description || "").toLowerCase().includes(needle)
//       );
//     }

//     if (stateFilter && stateFilter !== "All States") {
//       list = list.filter((r) => (r.state_name || "").toLowerCase() === stateFilter.toLowerCase());
//     }

//     if (effDate) list = list.filter((r) => sameDay(effDate, r.effective_date));
//     if (updDate) list = list.filter((r) => sameDay(updDate, r.updated_date));

//     return list;
//   }, [rows, q, stateFilter, effDate, updDate]);

//   const pageNumbers = useMemo(() => {
//     const max = Math.min(lastPage, 5);
//     return Array.from({ length: max }, (_, i) => i + 1);
//   }, [lastPage]);

//   const handleSearchChange = (value: string) => {
//     setQ(value);
//     if (currentPage !== 1) handlePageChange(1);
//   };

//   const stateOptions = useMemo(
//     () =>
//       (Array.isArray(availableStates) ? ["All States", ...availableStates] : ["All States"])
//         .filter(Boolean)
//         .map((s) => ({ label: s, value: s })),
//     [availableStates]
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
//         {/* Filter Bar */}
//         <div className="mb-3 sm:mb-4 lg:-ml-3 lg:-mt-6">
//           <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-1 p-2 sm:p-3">
//             <SearchAndStateFilter
//               searchValue={q}
//               stateValue={stateFilter}
//               onSearchChange={handleSearchChange}
//               onStateChange={handleStateChange}
//               isPending={isPending}
//               states={stateOptions}
//             />

//             {/* Effective Date */}
//             <div className="flex-shrink-0 sm:w-36 lg:w-48">
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
//                     disabled={isPending}
//                     aria-label="Effective Date"
//                   >
//                     <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                     <span className="truncate">{effDate ? effDate?.toLocaleDateString() : "Effective Date"}</span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={effDate ?? undefined}
//                     onSelect={(d) => setEffDate(d ?? null)}
//                     initialFocus
//                     className="rounded-md border"
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Updated Date */}
//             <div className="flex-shrink-0 sm:w-36 lg:w-48">
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
//                     disabled={isPending}
//                     aria-label="Updated Date"
//                   >
//                     <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                     <span className="truncate">{updDate ? updDate?.toLocaleDateString() : "Updated Date"}</span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={updDate ?? undefined}
//                     onSelect={(d) => setUpdDate(d ?? null)}
//                     initialFocus
//                     className="rounded-md border"
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>
//           </div>
//         </div>

//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-24 z-10">
//               <Card className="p-2 md:p-3 xl:p-0.5 2xl:p-6">
//                 <CardContent className="p-2">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           <div className="lg:col-span-4 lg:order-1 order-2">
//             <div className="mb-3 sm:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
//                 <div>
//                   <div className="flex justify-between">
//                     <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                       Gazette Notifications :
//                     </h1>
//                   </div>
//                   <p className="text-gray-600 leading-relaxed text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2">
//                     Explore the latest Gazette Notifications for timely updates on government decisions, legal changes, and compliance requirements. Stay well-informed with official publications that guide businesses, employers, and professionals effectively.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {isPending && (
//               <div className="flex items-center justify-center p-4">
//                 <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {!isPending && (
//               <>
//                 {filtered?.length === 0 ? (
//                   <p className="text-sm text-gray-600">No notifications found.</p>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {filtered?.map((n) => {
//                       const updated = formatPrettyDate(n?.updated_date);
//                       const effective = formatPrettyDate(n?.effective_date);
//                       const downloadUrl = normalizeFileUrl(n?.pdf_url, n?.pdf_path);

//                       return (
//                         <div
//                           key={n?.id}
//                           className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                         >
//                           <div className="p-2 sm:p-3 lg:p-1">
//                             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
//                               <div className="min-w-0">
//                                 <h4 className="text-[12px] min-[375px]:text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                   {n?.title}
//                                 </h4>

//                                 <ExpandableDescription description={n?.short_description} />

//                                 <div className="mt-2 md:mt-4">
//                                   <Button
//                                     size="sm"
//                                     className="bg-orange-400 text-white hover:bg-orange-500 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                     asChild
//                                     aria-label="Read More"
//                                   >
                                    // <Link href={`/gazette-details/${n?.slug}`}>
                                    //   <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
                                    //   <span className="whitespace-nowrap">Read More</span>
                                    // </Link>
//                                   </Button>
//                                 </div>
//                               </div>

//                               <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                                 <Badge
//                                   variant="outline"
//                                   className="bg-blue-50 text-blue-700 border-blue-200 text-[12px] sm:text-[9px] lg:text-[12px] px-1.5 py-0.5 font-medium"
//                                 >
//                                   {n?.state_name || "Central"}
//                                 </Badge>

//                                 <div className="space-y-1 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem]">
//                                   {updated && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">Updated Date:&nbsp;</span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                                         {updated}
//                                       </span>
//                                     </div>
//                                   )}
//                                   {effective && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">Effective Date:&nbsp;</span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
//                                         {formatPrettyDate(n?.effective_date)}
//                                       </span>
//                                     </div>
//                                   )}
//                                 </div>

//                                 {(downloadUrl && downloadUrl.trim() !== "") && (
//                                   <Button
//                                     size="sm"
//                                     className="mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1 shrink-0 w-auto max-w-full hover:cursor-pointer"
//                                     aria-label="Download"
//                                     onClick={() => openProtectedDownload(router, downloadUrl)}
//                                   >
//                                     <Download className="w-3 h-3 2xl:w-4 2xl:h-4" />
//                                     <span className="whitespace-nowrap">Download</span>
//                                   </Button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination */}
//             {!isPending && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
//                   aria-label="Previous"
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
//                 </Button>

//                 {pageNumbers?.map((p) => (
//                   <Button
//                     key={p}
//                     variant={currentPage === p ? "default" : "outline"}
//                     size="sm"
//                     className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${currentPage === p
//                         ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                         : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }`}
//                     aria-label={`Page ${p}`}
//                     onClick={() => handlePageChange(p)}
//                   >
//                     {p}
//                   </Button>
//                 ))}

//                 {lastPage > 5 && <span className="px-1 text-gray-400 text-[10px] sm:text-xs">…</span>}

//                 {lastPage > 5 && (
//                   <Button
//                     variant={currentPage === lastPage ? "default" : "outline"}
//                     size="sm"
//                     className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${currentPage === lastPage
//                         ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                         : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
//                       }`}
//                     aria-label={`Page ${lastPage}`}
//                     onClick={() => handlePageChange(lastPage)}
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
//                   onClick={() => handlePageChange(Math.min(lastPage, currentPage + 1))}
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

// // app/_component/Gazette/Gazette.tsx
// "use client";

// import { useEffect, useMemo, useState, useCallback, Fragment } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Eye,
//   CalendarIcon,
//   Search,
//   X,
//   ChevronDown,
//   Check,
// } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Calendar } from "@/components/ui/calendar";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Combobox, Transition } from "@headlessui/react";
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// // ---------- Types ----------
// type GazetteItem = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description: string | null;
//   description: string | null;
//   state_slug: string | null;
//   state_name: string | null;
//   updated_date: string | null;
//   effective_date: string | null;
//   pdf_path?: string | null;
//   pdf_url?: string | null;
//   created_at?: string;
//   updated_at?: string;
// };

// type ApiResponse = {
//   data: GazetteItem[];
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

// interface GazetteNotificationsClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
//   availableStates: string[];
//   initialSearch?: string;
//   initialState?: string;
//   initialEffective?: string;
//   initialUpdated?: string;
// }

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// const FILE_HOST = API_BASE;

// // Utils
// const ExpandableDescription = ({
//   description,
// }: {
//   description: string | null;
// }) => {
//   if (!description || description.trim() === "") return null;
//   const cleanedDescription = description.trim();
//   const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
//   const shouldTruncate = words.length > 50;
//   const displayText = shouldTruncate
//     ? words.slice(0, 50).join(" ") + "..."
//     : cleanedDescription;
//   return (
//     <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
//       {displayText}
//     </p>
//   );
// };

// function normalizeFileUrl(
//   url?: string | null,
//   path?: string | null
// ): string | null {
//   if (url) {
//     try {
//       const u = new URL(url, FILE_HOST);
//       const base = new URL(FILE_HOST);
//       const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
//         u.hostname
//       );
//       const origin = isLocal ? base.origin : u.origin;
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       return null;
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
//   return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", {
//     month: "short",
//   })}, ${d.getFullYear()}`;
// }

// function formatDateToISO(date: Date | null): string {
//   if (!date) return "";
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// }

// export default function Gazette({
//   initialData,
//   initialPage,
//   availableStates,
//   initialSearch = "",
//   initialState = "",
//   initialEffective = "",
//   initialUpdated = "",
// }: GazetteNotificationsClientProps) {
//   const router = useRouter();
//   const pathname = usePathname();

//   // State
//   const [searchQuery, setSearchQuery] = useState(initialSearch);
//   const [stateFilter, setStateFilter] = useState(initialState || "All States");
//   const [effDate, setEffDate] = useState<Date | null>(
//     initialEffective ? new Date(initialEffective) : null
//   );
//   const [updDate, setUpdDate] = useState<Date | null>(
//     initialUpdated ? new Date(initialUpdated) : null
//   );
//   const [isLoading, setIsLoading] = useState(false);

//   // Debounced search
//   const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   const serverData = initialData;
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const rows = serverData?.data ?? [];

//   // Auto-download
//   useEffect(() => {
//     handleAutoDownloadOnReturn(
//       { replace: (url: string) => router.replace(url) },
//       pathname,
//       typeof window !== "undefined" ? window.location.search : ""
//     );
//   }, []);

//   // State options for Combobox
//   const stateOptions = useMemo(() => {
//     const options = [{ label: "All States", value: "All States" }];

//     availableStates.forEach((state) => {
//       options.push({
//         label: state,
//         value: state,
//       });
//     });

//     return options;
//   }, [availableStates]);

//   const selectedStateOption =
//     stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];

//   // Update URL
//   const updateURL = useCallback(
//     (
//       search: string,
//       state: string,
//       page: number,
//       effective: Date | null,
//       updated: Date | null
//     ) => {
//       const params = new URLSearchParams();

//       const trimmedSearch = search.trim();
//       if (trimmedSearch) {
//         params.set("search", trimmedSearch);
//       }

//       if (state && state !== "All States") {
//         params.set("state", state);
//       }

//       if (effective) {
//         params.set("effective", formatDateToISO(effective));
//       }

//       if (updated) {
//         params.set("updated", formatDateToISO(updated));
//       }

//       // Check if filters are active
//       const hasFilters =
//         trimmedSearch || (state && state !== "All States") || effective || updated;

//       // Only add page if no filters
//       if (page > 1 && !hasFilters) {
//         params.set("page", page.toString());
//       }

//       const queryString = params.toString();
//       const newURL = queryString ? `${pathname}?${queryString}` : pathname;

//       console.log("🔄 [Client] Navigating to:", newURL);
//       setIsLoading(true);
//       router.push(newURL);
//     },
//     [pathname, router]
//   );

//   // Update URL when debounced search changes
//   useEffect(() => {
//     if (debouncedSearch !== initialSearch) {
//       updateURL(debouncedSearch, stateFilter, 1, effDate, updDate);
//     }
//   }, [debouncedSearch]);

//   const handleSearchChange = (value: string) => {
//     setSearchQuery(value);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     updateURL(debouncedSearch, value, 1, effDate, updDate);
//   };

//   const handlePageChange = (newPage: number) => {
//     updateURL(debouncedSearch, stateFilter, newPage, effDate, updDate);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const clearFilters = () => {
//     setSearchQuery("");
//     setStateFilter("All States");
//     setEffDate(null);
//     setUpdDate(null);
//     router.push(pathname);
//   };

//   // Check if filters are active
//   const hasActiveFilters =
//     searchQuery.trim() !== "" ||
//     (stateFilter && stateFilter !== "All States") ||
//     effDate !== null ||
//     updDate !== null;

//   const pageNumbers = useMemo(() => {
//     const pages: (number | string)[] = [];

//     if (lastPage <= 7) {
//       for (let i = 1; i <= lastPage; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
//       if (currentPage > 3) pages.push("...");
//       for (
//         let i = Math.max(2, currentPage - 1);
//         i <= Math.min(lastPage - 1, currentPage + 1);
//         i++
//       ) {
//         pages.push(i);
//       }
//       if (currentPage < lastPage - 2) pages.push("...");
//       pages.push(lastPage);
//     }

//     return pages;
//   }, [currentPage, lastPage]);

//   useEffect(() => {
//     setIsLoading(false);
//   }, [rows]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
//         {/* Clean Search and Filter Bar */}
//         <div className="mb-4">
//           <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-3">
//             {/* Search Input */}
//             <div className="relative flex-1">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => handleSearchChange(e.target.value)}
//                 placeholder="Search by title..."
//                 className="w-full h-10 pl-10 pr-10 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                 disabled={isLoading}
//               />
//               {searchQuery && (
//                 <button
//                   onClick={() => handleSearchChange("")}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               )}
//             </div>

//             {/* State Dropdown */}
//             <div className="flex-shrink-0">
//               <Combobox
//                 value={selectedStateOption}
//                 onChange={(state) => handleStateChange(state?.value || "All States")}
//                 disabled={isLoading}
//               >
//                 <div className="relative">
//                   <Combobox.Button className="relative w-full sm:w-48 h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50">
//                     <span className="block truncate text-left text-gray-900">
//                       {selectedStateOption?.label || "Select State"}
//                     </span>
//                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                       <ChevronDown className="h-4 w-4 text-gray-400" />
//                     </span>
//                   </Combobox.Button>

//                   <Transition
//                     as={Fragment}
//                     leave="transition ease-in duration-100"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                   >
//                     <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       {stateOptions.map((option, index) => (
//                         <Combobox.Option
//                           key={`${option.value}-${index}`}
//                           className={({ active }) =>
//                             `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
//                               active
//                                 ? "bg-orange-100 text-orange-900"
//                                 : "text-gray-900"
//                             }`
//                           }
//                           value={option}
//                         >
//                           {({ selected, active }) => (
//                             <>
//                               <span
//                                 className={`block truncate ${
//                                   selected ? "font-medium" : "font-normal"
//                                 }`}
//                               >
//                                 {option.label}
//                               </span>
//                               {selected ? (
//                                 <span
//                                   className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                     active ? "text-orange-600" : "text-orange-600"
//                                   }`}
//                                 >
//                                   <Check className="h-4 w-4" />
//                                 </span>
//                               ) : null}
//                             </>
//                           )}
//                         </Combobox.Option>
//                       ))}
//                     </Combobox.Options>
//                   </Transition>
//                 </div>
//               </Combobox>
//             </div>

//             {/* Effective Date */}
//             <div className="flex-shrink-0 sm:w-48">
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                     disabled={isLoading}
//                   >
//                     <CalendarIcon className="mr-2 w-4 h-4" />
//                     <span className="truncate">
//                       {effDate ? effDate.toLocaleDateString() : "Effective Date"}
//                     </span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={effDate ?? undefined}
//                     onSelect={(d) => {
//                       setEffDate(d ?? null);
//                       updateURL(debouncedSearch, stateFilter, 1, d ?? null, updDate);
//                     }}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Updated Date */}
//             <div className="flex-shrink-0 sm:w-48">
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <Button
//                     variant="outline"
//                     className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                     disabled={isLoading}
//                   >
//                     <CalendarIcon className="mr-2 w-4 h-4" />
//                     <span className="truncate">
//                       {updDate ? updDate.toLocaleDateString() : "Updated Date"}
//                     </span>
//                   </Button>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={updDate ?? undefined}
//                     onSelect={(d) => {
//                       setUpdDate(d ?? null);
//                       updateURL(debouncedSearch, stateFilter, 1, effDate, d ?? null);
//                     }}
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//             </div>

//             {/* Clear Button */}
//             {hasActiveFilters && (
//               <Button
//                 variant="outline"
//                 onClick={clearFilters}
//                 className="h-10 px-3 text-sm"
//                 disabled={isLoading}
//               >
//                 <X className="w-4 h-4 mr-2" />
//                 Clear
//               </Button>
//             )}
//           </div>

//           {/* Active Filters Display */}
//           {hasActiveFilters && (
//             <div className="flex flex-wrap gap-2 mt-3">
//               {searchQuery.trim() && (
//                 <Badge variant="secondary" className="px-3 py-1 text-xs">
//                   Search: "{searchQuery}"
//                   <button
//                     onClick={() => handleSearchChange("")}
//                     className="ml-2 hover:text-red-600 font-bold"
//                   >
//                     ×
//                   </button>
//                 </Badge>
//               )}
//               {stateFilter && stateFilter !== "All States" && (
//                 <Badge variant="secondary" className="px-3 py-1 text-xs">
//                   State: {stateFilter}
//                   <button
//                     onClick={() => handleStateChange("All States")}
//                     className="ml-2 hover:text-red-600 font-bold"
//                   >
//                     ×
//                   </button>
//                 </Badge>
//               )}
//               {effDate && (
//                 <Badge variant="secondary" className="px-3 py-1 text-xs">
//                   Effective: {effDate.toLocaleDateString()}
//                   <button
//                     onClick={() => {
//                       setEffDate(null);
//                       updateURL(debouncedSearch, stateFilter, 1, null, updDate);
//                     }}
//                     className="ml-2 hover:text-red-600 font-bold"
//                   >
//                     ×
//                   </button>
//                 </Badge>
//               )}
//               {updDate && (
//                 <Badge variant="secondary" className="px-3 py-1 text-xs">
//                   Updated: {updDate.toLocaleDateString()}
//                   <button
//                     onClick={() => {
//                       setUpdDate(null);
//                       updateURL(debouncedSearch, stateFilter, 1, effDate, null);
//                     }}
//                     className="ml-2 hover:text-red-600 font-bold"
//                   >
//                     ×
//                   </button>
//                 </Badge>
//               )}
//             </div>
//           )}
//         </div>

//         <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
//           <div className="lg:col-span-1 lg:order-2 order-1">
//             <div className="sticky top-24 z-10">
//               <Card className="p-2 md:p-3">
//                 <CardContent className="p-2">
//                   <PopularSearch className="mt-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           <div className="lg:col-span-4 lg:order-1 order-2">
//             <div className="mb-4">
//               <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                 Gazette Notifications :
//               </h1>
//               <p className="text-gray-600 leading-relaxed text-[10px] min-[375px]:text-xs sm:text-sm text-justify">
//                 Explore the latest Gazette Notifications for timely updates on
//                 government decisions, legal changes, and compliance requirements.
//               </p>
//             </div>

//             {isLoading && (
//               <div className="flex items-center justify-center p-8">
//                 <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {!isLoading && (
//               <>
//                 {rows?.length === 0 ? (
//                   <Card className="border-gray-200">
//                     <CardContent className="text-center py-12">
//                       <p className="text-gray-600 font-medium mb-2">
//                         No results found
//                       </p>
//                       <p className="text-sm text-gray-500 mb-4">
//                         {hasActiveFilters
//                           ? "Try adjusting your search or filters"
//                           : "No notifications available"}
//                       </p>
//                       {hasActiveFilters && (
//                         <Button onClick={clearFilters} variant="outline">
//                           Clear All Filters
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <div className="lg:space-y-2">
//                     {rows?.map((n) => {
//                       const updated = formatPrettyDate(n?.updated_date);
//                       const effective = formatPrettyDate(n?.effective_date);
//                       const downloadUrl = normalizeFileUrl(n?.pdf_url, n?.pdf_path);

//                       return (
//                         <div
//                           key={n?.id}
//                           className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                         >
//                           <div className="p-2 sm:p-3 lg:p-3">
//                             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
//                               <div className="min-w-0">
//                                 <h4 className="text-[12px] min-[375px]:text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                   {n?.title}
//                                 </h4>

//                                 <ExpandableDescription
//                                   description={n?.short_description}
//                                 />

//                                 <div className="mt-2 md:mt-4">
//                                   <Button
//                                     size="sm"
//                                     className="bg-orange-400 text-white hover:bg-orange-500 h-6 sm:h-8 px-2 lg:px-3 text-[9px] sm:text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                     asChild
//                                   >
//                                     <Link href={`/gazette-details/${n?.slug}`}>
//                                       <Eye className="w-3 h-3" />
//                                       <span>Read More</span>
//                                     </Link>
//                                   </Button>
//                                 </div>
//                               </div>

//                               <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                                 <Badge
//                                   variant="outline"
//                                   className="bg-blue-50 text-blue-700 border-blue-200 text-[12px] px-1.5 py-0.5 font-medium"
//                                 >
//                                   {n?.state_name || "Central"}
//                                 </Badge>

//                                 <div className="space-y-1 text-[11px] sm:text-[12px]">
//                                   {updated && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Updated:&nbsp;
//                                       </span>
//                                       <span className="font-semibold text-orange-600">
//                                         {updated}
//                                       </span>
//                                     </div>
//                                   )}
//                                   {effective && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Effective:&nbsp;
//                                       </span>
//                                       <span className="font-semibold text-orange-600">
//                                         {effective}
//                                       </span>
//                                     </div>
//                                   )}
//                                 </div>

//                                 {downloadUrl && (
//                                   <Button
//                                     size="sm"
//                                     className="mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600 h-6 sm:h-8 px-2 lg:px-3 text-[9px] sm:text-xs font-medium rounded-sm inline-flex items-center gap-1 hover:cursor-pointer"
//                                     onClick={() =>
//                                       openProtectedDownload(router, downloadUrl)
//                                     }
//                                   >
//                                     <Download className="w-3 h-3" />
//                                     <span>Download</span>
//                                   </Button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination - Hide when filters active */}
//             {!isLoading && !hasActiveFilters && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-6">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs"
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>

//                 {pageNumbers?.map((p, idx) =>
//                   typeof p === "number" ? (
//                     <Button
//                       key={idx}
//                       variant={currentPage === p ? "default" : "outline"}
//                       size="sm"
//                       className={
//                         currentPage === p
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500"
//                           : "h-8 px-3 text-xs border-gray-300"
//                       }
//                       onClick={() => handlePageChange(p)}
//                     >
//                       {p}
//                     </Button>
//                   ) : (
//                     <span key={idx} className="px-1 text-gray-400 text-xs">
//                       {p}
//                     </span>
//                   )
//                 )}

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs"
//                   disabled={currentPage === lastPage}
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// // app/_component/Gazette/Gazette.tsx
// "use client";

// import { useEffect, useMemo, useState, useCallback, Fragment } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Eye,
//   CalendarIcon,
//   Search,
//   X,
//   ChevronDown,
//   Check,
// } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Combobox, Transition } from "@headlessui/react";
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// // ---------- Types ----------
// type GazetteItem = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description: string | null;
//   description: string | null;
//   state_slug: string | null;
//   state_name: string | null;
//   updated_date: string | null;
//   effective_date: string | null;
//   pdf_path?: string | null;
//   pdf_url?: string | null;
//   created_at?: string;
//   updated_at?: string;
// };

// type ApiResponse = {
//   data: GazetteItem[];
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

// interface GazetteNotificationsClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
//   availableStates: string[];
//   initialSearch?: string;
//   initialState?: string;
//   initialEffective?: string;
//   initialUpdated?: string;
// }

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// const FILE_HOST = API_BASE;

// // Utils
// const ExpandableDescription = ({
//   description,
// }: {
//   description: string | null;
// }) => {
//   if (!description || description.trim() === "") return null;
//   const cleanedDescription = description.trim();
//   const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
//   const shouldTruncate = words.length > 50;
//   const displayText = shouldTruncate
//     ? words.slice(0, 50).join(" ") + "..."
//     : cleanedDescription;
//   return (
//     <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
//       {displayText}
//     </p>
//   );
// };

// function normalizeFileUrl(
//   url?: string | null,
//   path?: string | null
// ): string | null {
//   if (url) {
//     try {
//       const u = new URL(url, FILE_HOST);
//       const base = new URL(FILE_HOST);
//       const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
//         u.hostname
//       );
//       const origin = isLocal ? base.origin : u.origin;
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       return null;
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
//   return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", {
//     month: "short",
//   })}, ${d.getFullYear()}`;
// }

// function formatDateToISO(date: Date | null): string {
//   if (!date) return "";
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// }

// export default function Gazette({
//   initialData,
//   initialPage,
//   availableStates,
//   initialSearch = "",
//   initialState = "",
//   initialEffective = "",
//   initialUpdated = "",
// }: GazetteNotificationsClientProps) {
//   const router = useRouter();
//   const pathname = usePathname();

//   // State
//   const [searchQuery, setSearchQuery] = useState(initialSearch);
//   const [stateFilter, setStateFilter] = useState(initialState || "All States");
//   const [effDate, setEffDate] = useState<Date | null>(
//     initialEffective ? new Date(initialEffective) : null
//   );
//   const [updDate, setUpdDate] = useState<Date | null>(
//     initialUpdated ? new Date(initialUpdated) : null
//   );
//   const [isLoading, setIsLoading] = useState(false);

//   // Debounced search
//   const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchQuery]);

//   const serverData = initialData;
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const rows = serverData?.data ?? [];

//   // Auto-download
//   useEffect(() => {
//     handleAutoDownloadOnReturn(
//       { replace: (url: string) => router.replace(url) },
//       pathname,
//       typeof window !== "undefined" ? window.location.search : ""
//     );
//   }, []);

//   // State options for Combobox
//   const stateOptions = useMemo(() => {
//     const options = [{ label: "All States", value: "All States" }];

//     availableStates.forEach((state) => {
//       options.push({
//         label: state,
//         value: state,
//       });
//     });

//     return options;
//   }, [availableStates]);

//   const selectedStateOption =
//     stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];

//   // Update URL
//   const updateURL = useCallback(
//     (
//       search: string,
//       state: string,
//       page: number,
//       effective: Date | null,
//       updated: Date | null
//     ) => {
//       const params = new URLSearchParams();

//       const trimmedSearch = search.trim();
//       if (trimmedSearch) {
//         params.set("search", trimmedSearch);
//       }

//       if (state && state !== "All States") {
//         params.set("state", state);
//       }

//       if (effective) {
//         params.set("effective", formatDateToISO(effective));
//       }

//       if (updated) {
//         params.set("updated", formatDateToISO(updated));
//       }

//       const hasFilters =
//         trimmedSearch ||
//         (state && state !== "All States") ||
//         effective ||
//         updated;

//       if (page > 1 && !hasFilters) {
//         params.set("page", page.toString());
//       }

//       const queryString = params.toString();
//       const newURL = queryString ? `${pathname}?${queryString}` : pathname;

//       console.log("🔄 [Client] Navigating to:", newURL);
//       setIsLoading(true);
//       router.push(newURL);
//     },
//     [pathname, router]
//   );

//   useEffect(() => {
//     if (debouncedSearch !== initialSearch) {
//       updateURL(debouncedSearch, stateFilter, 1, effDate, updDate);
//     }
//   }, [debouncedSearch]);

//   const handleSearchChange = (value: string) => {
//     setSearchQuery(value);
//   };

//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     updateURL(debouncedSearch, value, 1, effDate, updDate);
//   };

//   const handlePageChange = (newPage: number) => {
//     updateURL(debouncedSearch, stateFilter, newPage, effDate, updDate);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const clearFilters = () => {
//     setSearchQuery("");
//     setStateFilter("All States");
//     setEffDate(null);
//     setUpdDate(null);
//     router.push(pathname);
//   };

//   const hasActiveFilters =
//     searchQuery.trim() !== "" ||
//     (stateFilter && stateFilter !== "All States") ||
//     effDate !== null ||
//     updDate !== null;

//   const pageNumbers = useMemo(() => {
//     const pages: (number | string)[] = [];

//     if (lastPage <= 7) {
//       for (let i = 1; i <= lastPage; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
//       if (currentPage > 3) pages.push("...");
//       for (
//         let i = Math.max(2, currentPage - 1);
//         i <= Math.min(lastPage - 1, currentPage + 1);
//         i++
//       ) {
//         pages.push(i);
//       }
//       if (currentPage < lastPage - 2) pages.push("...");
//       pages.push(lastPage);
//     }

//     return pages;
//   }, [currentPage, lastPage]);

//   useEffect(() => {
//     setIsLoading(false);
//   }, [rows]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
//         {/* Main Grid Layout */}
//         <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
//           {/* Left Main Content */}
//           <div className="min-w-0">
//             {/* Header */}
//             <div className="mb-4">
//               <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                 Gazette Notifications :
//               </h1>
//               <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify">
//                 Explore the latest Gazette Notifications for timely updates on
//                 government decisions, legal changes, and compliance
//                 requirements.
//               </p>
//             </div>

//             {/* Clean Search and Filter Bar - Properly Constrained */}

//             <div className="mb-6">
//               <div className="flex flex-col gap-3 lg:flex-row lg:gap-3 items-stretch lg:items-center">
//                 {/* Search Input - Reduced Width */}
//                 <div className="relative flex-1 lg:max-w-md">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => handleSearchChange(e.target.value)}
//                     placeholder="Search by title..."
//                     className="w-full h-10 pl-10 pr-10 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                     disabled={isLoading}
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={() => handleSearchChange("")}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       <X className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>

//                 {/* State Dropdown */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Combobox
//                     value={selectedStateOption}
//                     onChange={(state) =>
//                       handleStateChange(state?.value || "All States")
//                     }
//                     disabled={isLoading}
//                   >
//                     <div className="relative">
//                       <Combobox.Button className="relative w-full h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50">
//                         <span className="block truncate text-left text-gray-900">
//                           {selectedStateOption?.label || "Select State"}
//                         </span>
//                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                           <ChevronDown className="h-4 w-4 text-gray-400" />
//                         </span>
//                       </Combobox.Button>

//                       <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           {stateOptions.map((option, index) => (
//                             <Combobox.Option
//                               key={`${option.value}-${index}`}
//                               className={({ active }) =>
//                                 `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
//                                   active
//                                     ? "bg-orange-100 text-orange-900"
//                                     : "text-gray-900"
//                                 }`
//                               }
//                               value={option}
//                             >
//                               {({ selected, active }) => (
//                                 <>
//                                   <span
//                                     className={`block truncate ${
//                                       selected ? "font-medium" : "font-normal"
//                                     }`}
//                                   >
//                                     {option.label}
//                                   </span>
//                                   {selected ? (
//                                     <span
//                                       className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                         active
//                                           ? "text-orange-600"
//                                           : "text-orange-600"
//                                       }`}
//                                     >
//                                       <Check className="h-4 w-4" />
//                                     </span>
//                                   ) : null}
//                                 </>
//                               )}
//                             </Combobox.Option>
//                           ))}
//                         </Combobox.Options>
//                       </Transition>
//                     </div>
//                   </Combobox>
//                 </div>

//                 {/* Effective Date */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                         disabled={isLoading}
//                       >
//                         <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                         <span className="truncate">
//                           {effDate
//                             ? effDate.toLocaleDateString()
//                             : "Effective Date"}
//                         </span>
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={effDate ?? undefined}
//                         onSelect={(d) => {
//                           setEffDate(d ?? null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             d ?? null,
//                             updDate
//                           );
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Updated Date */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                         disabled={isLoading}
//                       >
//                         <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                         <span className="truncate">
//                           {updDate
//                             ? updDate.toLocaleDateString()
//                             : "Updated Date"}
//                         </span>
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={updDate ?? undefined}
//                         onSelect={(d) => {
//                           setUpdDate(d ?? null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             effDate,
//                             d ?? null
//                           );
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {/* Clear Button */}
//                 {hasActiveFilters && (
//                   <Button
//                     variant="outline"
//                     onClick={clearFilters}
//                     className="h-10 px-3 text-sm flex-shrink-0 lg:w-auto"
//                     disabled={isLoading}
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Clear
//                   </Button>
//                 )}
//               </div>

//               {/* Active Filters Display */}
//               {hasActiveFilters && (
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {searchQuery.trim() && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Search: "{searchQuery}"
//                       <button
//                         onClick={() => handleSearchChange("")}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {stateFilter && stateFilter !== "All States" && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       State: {stateFilter}
//                       <button
//                         onClick={() => handleStateChange("All States")}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {effDate && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Effective: {effDate.toLocaleDateString()}
//                       <button
//                         onClick={() => {
//                           setEffDate(null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             null,
//                             updDate
//                           );
//                         }}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {updDate && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Updated: {updDate.toLocaleDateString()}
//                       <button
//                         onClick={() => {
//                           setUpdDate(null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             effDate,
//                             null
//                           );
//                         }}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Loading State */}
//             {isLoading && (
//               <div className="flex items-center justify-center p-8">
//                 <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}

//             {/* Results */}
//             {!isLoading && (
//               <>
//                 {rows?.length === 0 ? (
//                   <Card className="border-gray-200">
//                     <CardContent className="text-center py-12">
//                       <p className="text-gray-600 font-medium mb-2">
//                         No results found
//                       </p>
//                       <p className="text-sm text-gray-500 mb-4">
//                         {hasActiveFilters
//                           ? "Try adjusting your search or filters"
//                           : "No notifications available"}
//                       </p>
//                       {hasActiveFilters && (
//                         <Button onClick={clearFilters} variant="outline">
//                           Clear All Filters
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <div className="space-y-3">
//                     {rows?.map((n) => {
//                       const updated = formatPrettyDate(n?.updated_date);
//                       const effective = formatPrettyDate(n?.effective_date);
//                       const downloadUrl = normalizeFileUrl(
//                         n?.pdf_url,
//                         n?.pdf_path
//                       );

//                       return (
//                         <div
//                           key={n?.id}
//                           className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                         >
//                           <div className="p-3">
//                             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                               <div className="min-w-0">
//                                 <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                   {n?.title}
//                                 </h4>

//                                 <ExpandableDescription
//                                   description={n?.short_description}
//                                 />

//                                 <div className="mt-3">
//                                   <Button
//                                     size="sm"
//                                     className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                     asChild
//                                   >
//                                     <Link href={`/gazette-details/${n?.slug}`}>
//                                       <Eye className="w-4 h-4" />
//                                       <span>Read More</span>
//                                     </Link>
//                                   </Button>
//                                 </div>
//                               </div>

//                               <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                                 <Badge
//                                   variant="outline"
//                                   className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-1.5 py-0.5 font-medium"
//                                 >
//                                   {n?.state_name || "Central"}
//                                 </Badge>

//                                 <div className="space-y-1 text-xs">
//                                   {updated && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Updated:&nbsp;
//                                       </span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
//                                         {updated}
//                                       </span>
//                                     </div>
//                                   )}
//                                   {effective && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Effective:&nbsp;
//                                       </span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
//                                         {effective}
//                                       </span>
//                                     </div>
//                                   )}
//                                 </div>

//                                 {downloadUrl && (
//                                   <Button
//                                     size="sm"
//                                     className="mt-2 bg-orange-500 text-white hover:bg-orange-600 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1 hover:cursor-pointer"
//                                     onClick={() =>
//                                       openProtectedDownload(router, downloadUrl)
//                                     }
//                                   >
//                                     <Download className="w-4 h-4" />
//                                     <span>Download</span>
//                                   </Button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </>
//             )}

//             {/* Pagination - Hide when filters active */}
//             {!isLoading && !hasActiveFilters && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-6">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>

//                 {pageNumbers?.map((p, idx) =>
//                   typeof p === "number" ? (
//                     <Button
//                       key={idx}
//                       variant={currentPage === p ? "default" : "outline"}
//                       size="sm"
//                       className={
//                         currentPage === p
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50"
//                       }
//                       onClick={() => handlePageChange(p)}
//                     >
//                       {p}
//                     </Button>
//                   ) : (
//                     <span key={idx} className="px-1 text-gray-400 text-xs">
//                       {p}
//                     </span>
//                   )
//                 )}

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage === lastPage}
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar - Quick Access */}
//           <div className="min-w-0">
//             <div className="sticky top-24">
//               <Card className="rounded-lg border bg-white shadow-sm">
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







// // app/_component/Gazette/Gazette.tsx
// "use client";
 
// import { useEffect, useMemo, useState, useCallback, Fragment } from "react";
// import { useRouter, usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Loader2,
//   ChevronLeft,
//   ChevronRight,
//   Download,
//   Eye,
//   CalendarIcon,
//   Search,
//   X,
//   ChevronDown,
//   Check,
// } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Combobox, Transition } from "@headlessui/react";
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";
 
// // ---------- Types ----------
// type GazetteItem = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description: string | null;
//   description: string | null;
//   state_slug: string | null;
//   state_name: string | null;
//   updated_date: string | null;
//   effective_date: string | null;
//   pdf_path?: string | null;
//   pdf_url?: string | null;
//   created_at?: string;
//   updated_at?: string;
// };
 
// type ApiResponse = {
//   data: GazetteItem[];
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
 
// interface GazetteNotificationsClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
//   availableStates: string[];
//   initialSearch?: string;
//   initialState?: string;
//   initialEffective?: string;
//   initialUpdated?: string;
// }
 
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// const FILE_HOST = API_BASE;
 
// // Utils
// const ExpandableDescription = ({
//   description,
// }: {
//   description: string | null;
// }) => {
//   if (!description || description.trim() === "") return null;
//   const cleanedDescription = description.trim();
//   const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
//   const shouldTruncate = words.length > 50;
//   const displayText = shouldTruncate
//     ? words.slice(0, 50).join(" ") + "..."
//     : cleanedDescription;
//   return (
//     <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
//       {displayText}
//     </p>
//   );
// };
 
// function normalizeFileUrl(
//   url?: string | null,
//   path?: string | null
// ): string | null {
//   if (url) {
//     try {
//       const u = new URL(url, FILE_HOST);
//       const base = new URL(FILE_HOST);
//       const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
//         u.hostname
//       );
//       const origin = isLocal ? base.origin : u.origin;
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       return null;
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
//   return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", {
//     month: "short",
//   })}, ${d.getFullYear()}`;
// }
 
// function formatDateToISO(date: Date | null): string {
//   if (!date) return "";
//   const year = date.getFullYear();
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const day = String(date.getDate()).padStart(2, "0");
//   return `${year}-${month}-${day}`;
// }
 
// export default function Gazette({
//   initialData,
//   initialPage,
//   availableStates,
//   initialSearch = "",
//   initialState = "",
//   initialEffective = "",
//   initialUpdated = "",
// }: GazetteNotificationsClientProps) {
//   const router = useRouter();
//   const pathname = usePathname();
 
//   // State
//   const [searchQuery, setSearchQuery] = useState(initialSearch);
//   const [stateFilter, setStateFilter] = useState(initialState || "All States");
//   const [effDate, setEffDate] = useState<Date | null>(
//     initialEffective ? new Date(initialEffective) : null
//   );
//   const [updDate, setUpdDate] = useState<Date | null>(
//     initialUpdated ? new Date(initialUpdated) : null
//   );
//   const [isLoading, setIsLoading] = useState(false);
 
//   // Debounced search
//   const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchQuery]);
 
//   const serverData = initialData;
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const rows = serverData?.data ?? [];
 
//   // Auto-download
//   useEffect(() => {
//     handleAutoDownloadOnReturn(
//       { replace: (url: string) => router.replace(url) },
//       pathname,
//       typeof window !== "undefined" ? window.location.search : ""
//     );
//   }, []);
 
//   // State options for Combobox
//   const stateOptions = useMemo(() => {
//     const options = [{ label: "All States", value: "All States" }];
 
//     availableStates.forEach((state) => {
//       options.push({
//         label: state,
//         value: state,
//       });
//     });
 
//     return options;
//   }, [availableStates]);
 
//   const selectedStateOption =
//     stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];
 
//   // Update URL
//   const updateURL = useCallback(
//     (
//       search: string,
//       state: string,
//       page: number,
//       effective: Date | null,
//       updated: Date | null
//     ) => {
//       const params = new URLSearchParams();
 
//       const trimmedSearch = search.trim();
//       if (trimmedSearch) {
//         params.set("search", trimmedSearch);
//       }
 
//       if (state && state !== "All States") {
//         params.set("state", state);
//       }
 
//       if (effective) {
//         params.set("effective", formatDateToISO(effective));
//       }
 
//       if (updated) {
//         params.set("updated", formatDateToISO(updated));
//       }
 
//       const hasFilters =
//         trimmedSearch ||
//         (state && state !== "All States") ||
//         effective ||
//         updated;
 
//       if (page > 1 && !hasFilters) {
//         params.set("page", page.toString());
//       }
 
//       const queryString = params.toString();
//       const newURL = queryString ? `${pathname}?${queryString}` : pathname;
 
//       console.log("🔄 [Client] Navigating to:", newURL);
//       setIsLoading(true);
//       router.push(newURL);
//     },
//     [pathname, router]
//   );
 
//   useEffect(() => {
//     if (debouncedSearch !== initialSearch) {
//       updateURL(debouncedSearch, stateFilter, 1, effDate, updDate);
//     }
//   }, [debouncedSearch]);
 
//   const handleSearchChange = (value: string) => {
//     setSearchQuery(value);
//   };
 
//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     updateURL(debouncedSearch, value, 1, effDate, updDate);
//   };
 
//   const handlePageChange = (newPage: number) => {
//     updateURL(debouncedSearch, stateFilter, newPage, effDate, updDate);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
 
//   const clearFilters = () => {
//     setSearchQuery("");
//     setStateFilter("All States");
//     setEffDate(null);
//     setUpdDate(null);
//     router.push(pathname);
//   };
 
//   const hasActiveFilters =
//     searchQuery.trim() !== "" ||
//     (stateFilter && stateFilter !== "All States") ||
//     effDate !== null ||
//     updDate !== null;
 
//   const pageNumbers = useMemo(() => {
//     const pages: (number | string)[] = [];
 
//     if (lastPage <= 7) {
//       for (let i = 1; i <= lastPage; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
//       if (currentPage > 3) pages.push("...");
//       for (
//         let i = Math.max(2, currentPage - 1);
//         i <= Math.min(lastPage - 1, currentPage + 1);
//         i++
//       ) {
//         pages.push(i);
//       }
//       if (currentPage < lastPage - 2) pages.push("...");
//       pages.push(lastPage);
//     }
 
//     return pages;
//   }, [currentPage, lastPage]);
 
//   useEffect(() => {
//     setIsLoading(false);
//   }, [rows]);
 
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
//         {/* Main Grid Layout */}
//         <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
//           {/* Left Main Content */}
//           <div className="min-w-0">
//             {/* Header */}
//             <div className="mb-4">
//               <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                 Gazette Notifications :
//               </h1>
//               <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify">
//                 Explore the latest Gazette Notifications for timely updates on
//                 government decisions, legal changes, and compliance
//                 requirements.
//               </p>
//             </div>
 
//             {/* Clean Search and Filter Bar - Properly Constrained */}
 
//             <div className="mb-6">
//               <div className="flex flex-col gap-3 lg:flex-row lg:gap-3 items-stretch lg:items-center">
//                 {/* Search Input - Reduced Width */}
//                 <div className="relative flex-1 lg:max-w-md">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
//                   <input
//                     type="text"
//                     value={searchQuery}
//                     onChange={(e) => handleSearchChange(e.target.value)}
//                     placeholder="Search by title..."
//                     className="w-full h-10 pl-10 pr-10 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                     disabled={isLoading}
//                   />
//                   {searchQuery && (
//                     <button
//                       onClick={() => handleSearchChange("")}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                     >
//                       <X className="w-4 h-4" />
//                     </button>
//                   )}
//                 </div>
 
//                 {/* State Dropdown */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Combobox
//                     value={selectedStateOption}
//                     onChange={(state) =>
//                       handleStateChange(state?.value || "All States")
//                     }
//                     disabled={isLoading}
//                   >
//                     <div className="relative">
//                       <Combobox.Button className="relative w-full h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50">
//                         <span className="block truncate text-left text-gray-900">
//                           {selectedStateOption?.label || "Select State"}
//                         </span>
//                         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                           <ChevronDown className="h-4 w-4 text-gray-400" />
//                         </span>
//                       </Combobox.Button>
 
//                       <Transition
//                         as={Fragment}
//                         leave="transition ease-in duration-100"
//                         leaveFrom="opacity-100"
//                         leaveTo="opacity-0"
//                       >
//                         <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                           {stateOptions.map((option, index) => (
//                             <Combobox.Option
//                               key={`${option.value}-${index}`}
//                               className={({ active }) =>
//                                 `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
//                                   active
//                                     ? "bg-orange-100 text-orange-900"
//                                     : "text-gray-900"
//                                 }`
//                               }
//                               value={option}
//                             >
//                               {({ selected, active }) => (
//                                 <>
//                                   <span
//                                     className={`block truncate ${
//                                       selected ? "font-medium" : "font-normal"
//                                     }`}
//                                   >
//                                     {option.label}
//                                   </span>
//                                   {selected ? (
//                                     <span
//                                       className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                         active
//                                           ? "text-orange-600"
//                                           : "text-orange-600"
//                                       }`}
//                                     >
//                                       <Check className="h-4 w-4" />
//                                     </span>
//                                   ) : null}
//                                 </>
//                               )}
//                             </Combobox.Option>
//                           ))}
//                         </Combobox.Options>
//                       </Transition>
//                     </div>
//                   </Combobox>
//                 </div>
 
//                 {/* Effective Date */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                         disabled={isLoading}
//                       >
//                         <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                         <span className="truncate">
//                           {effDate
//                             ? effDate.toLocaleDateString()
//                             : "Effective Date"}
//                         </span>
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={effDate ?? undefined}
//                         onSelect={(d) => {
//                           setEffDate(d ?? null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             d ?? null,
//                             updDate
//                           );
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>
 
//                 {/* Updated Date */}
//                 <div className="flex-shrink-0 lg:w-44">
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
//                         disabled={isLoading}
//                       >
//                         <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
//                         <span className="truncate">
//                           {updDate
//                             ? updDate.toLocaleDateString()
//                             : "Updated Date"}
//                         </span>
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0" align="start">
//                       <Calendar
//                         mode="single"
//                         selected={updDate ?? undefined}
//                         onSelect={(d) => {
//                           setUpdDate(d ?? null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             effDate,
//                             d ?? null
//                           );
//                         }}
//                         initialFocus
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>
 
//                 {/* Clear Button */}
//                 {hasActiveFilters && (
//                   <Button
//                     variant="outline"
//                     onClick={clearFilters}
//                     className="h-10 px-3 text-sm flex-shrink-0 lg:w-auto"
//                     disabled={isLoading}
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Clear
//                   </Button>
//                 )}
//               </div>
 
//               {/* Active Filters Display */}
//               {hasActiveFilters && (
//                 <div className="flex flex-wrap gap-2 mt-3">
//                   {searchQuery.trim() && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Search: "{searchQuery}"
//                       <button
//                         onClick={() => handleSearchChange("")}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {stateFilter && stateFilter !== "All States" && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       State: {stateFilter}
//                       <button
//                         onClick={() => handleStateChange("All States")}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {effDate && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Effective: {effDate.toLocaleDateString()}
//                       <button
//                         onClick={() => {
//                           setEffDate(null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             null,
//                             updDate
//                           );
//                         }}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                   {updDate && (
//                     <Badge variant="secondary" className="px-3 py-1 text-xs">
//                       Updated: {updDate.toLocaleDateString()}
//                       <button
//                         onClick={() => {
//                           setUpdDate(null);
//                           updateURL(
//                             debouncedSearch,
//                             stateFilter,
//                             1,
//                             effDate,
//                             null
//                           );
//                         }}
//                         className="ml-2 hover:text-red-600 font-bold"
//                       >
//                         ×
//                       </button>
//                     </Badge>
//                   )}
//                 </div>
//               )}
//             </div>
 
//             {/* Loading State */}
//             {isLoading && (
//               <div className="flex items-center justify-center p-8">
//                 <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}
 
//             {/* Results */}
//             {!isLoading && (
//               <>
//                 {rows?.length === 0 ? (
//                   <Card className="border-gray-200">
//                     <CardContent className="text-center py-12">
//                       <p className="text-gray-600 font-medium mb-2">
//                         No results found
//                       </p>
//                       <p className="text-sm text-gray-500 mb-4">
//                         {hasActiveFilters
//                           ? "Try adjusting your search or filters"
//                           : "No notifications available"}
//                       </p>
//                       {hasActiveFilters && (
//                         <Button onClick={clearFilters} variant="outline">
//                           Clear All Filters
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <div className="space-y-3">
//                     {rows?.map((n) => {
//                       const updated = formatPrettyDate(n?.updated_date);
//                       const effective = formatPrettyDate(n?.effective_date);
//                       const downloadUrl = normalizeFileUrl(
//                         n?.pdf_url,
//                         n?.pdf_path
//                       );
 
//                       return (
//                         <div
//                           key={n?.id}
//                           className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                         >
//                           <div className="p-3">
//                             <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-3">
//                               <div className="min-w-0">
//                                 <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                   {n?.title}
//                                 </h4>
 
//                                 <ExpandableDescription
//                                   description={n?.short_description}
//                                 />
 
//                                 <div className="mt-3">
//                                   <Button
//                                     size="sm"
//                                     className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                     asChild
//                                   >
//                                     <Link href={`/gazette-details/${n?.slug}`}>
//                                       <Eye className="w-4 h-4" />
//                                       <span>Read More</span>
//                                     </Link>
//                                   </Button>
//                                 </div>
//                               </div>
 
//                               <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
//                                 <Badge
//                                   variant="outline"
//                                   className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-1.5 py-0.5 font-medium"
//                                 >
//                                   {n?.state_name || "Central"}
//                                 </Badge>
 
//                                 <div className="space-y-1 text-xs">
//                                   {updated && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Updated:&nbsp;
//                                       </span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
//                                         {updated}
//                                       </span>
//                                     </div>
//                                   )}
//                                   {effective && (
//                                     <div>
//                                       <span className="text-slate-500 font-semibold">
//                                         Effective:&nbsp;
//                                       </span>
//                                       <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
//                                         {effective}
//                                       </span>
//                                     </div>
//                                   )}
//                                 </div>
 
//                                 {downloadUrl && (
//                                   <Button
//                                     size="sm"
//                                     className="mt-2 bg-orange-500 text-white hover:bg-orange-600 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1 hover:cursor-pointer"
//                                     onClick={() =>
//                                       openProtectedDownload(router, downloadUrl)
//                                     }
//                                   >
//                                     <Download className="w-4 h-4" />
//                                     <span>Download</span>
//                                   </Button>
//                                 )}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 )}
//               </>
//             )}
 
//             {/* Pagination - Hide when filters active */}
//             {!isLoading && !hasActiveFilters && lastPage > 1 && (
//               <div className="flex justify-center items-center gap-2 mt-6">
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage === 1}
//                   onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
//                 >
//                   <ChevronLeft className="w-4 h-4" />
//                 </Button>
 
//                 {pageNumbers?.map((p, idx) =>
//                   typeof p === "number" ? (
//                     <Button
//                       key={idx}
//                       variant={currentPage === p ? "default" : "outline"}
//                       size="sm"
//                       className={
//                         currentPage === p
//                           ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                           : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50"
//                       }
//                       onClick={() => handlePageChange(p)}
//                     >
//                       {p}
//                     </Button>
//                   ) : (
//                     <span key={idx} className="px-1 text-gray-400 text-xs">
//                       {p}
//                     </span>
//                   )
//                 )}
 
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
//                   disabled={currentPage === lastPage}
//                   onClick={() =>
//                     handlePageChange(Math.min(lastPage, currentPage + 1))
//                   }
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </Button>
//               </div>
//             )}
//           </div>
 
//           {/* Right Sidebar - Quick Access */}
//           <div className="min-w-0">
//             <div className="sticky top-24">
//               <Card className="rounded-lg border bg-white shadow-sm">
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
 
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   Loader2,
//   Search,
//   X,
//   ChevronDown,
//   Check,
// } from "lucide-react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// import { useMemo, useState, useEffect, useCallback, Fragment } from "react";
// import { Combobox, Transition } from "@headlessui/react";
 
// // ---------- Types ----------
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
 
// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
//   availableStates: { id: number; name: string }[];
//   initialSearch?: string;
//   initialState?: string;
// }
 
// const ExpandableDescription = ({ description }: { description: string }) => {
//   if (!description || description.trim() === "") {
//     return null;
//   }
 
//   const cleanedDescription = description.trim();
//   const words = cleanedDescription
//     .split(/\s+/)
//     .filter((word) => word.length > 0);
 
//   const shouldTruncate = words.length > 50;
//   const displayText = shouldTruncate
//     ? words.slice(0, 50).join(" ") + "..."
//     : cleanedDescription;
 
//   return (
//     <div className="relative mt-2">
//       <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words line-clamp-2">
//         {displayText}
//       </p>
//     </div>
//   );
// };
 
// export default function ActsPageClient({
//   initialData,
//   initialPage,
//   availableStates,
//   initialSearch = "",
//   initialState = "",
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const pathname = usePathname();
 
//   const [searchQuery, setSearchQuery] = useState(initialSearch);
//   const [stateFilter, setStateFilter] = useState(initialState || "All States");
//   const [isLoading, setIsLoading] = useState(false);
 
//   // Debounced search
//   const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);
 
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedSearch(searchQuery);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [searchQuery]);
 
//   const serverData = initialData;
//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];
 
//   // State options for Combobox
//   const stateOptions = useMemo(() => {
//     const options = [{ label: "All States", value: "All States" }];
   
//     availableStates.forEach((state) => {
//       options.push({
//         label: state.name,
//         value: state.name,
//       });
//     });
 
//     return options;
//   }, [availableStates]);
 
//   const selectedStateOption =
//     stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];
 
//   // Update URL with filters
//   const updateURL = useCallback(
//     (search: string, state: string, page: number) => {
//       const params = new URLSearchParams();
 
//       const trimmedSearch = search.trim();
//       if (trimmedSearch) {
//         params.set("search", trimmedSearch);
//       }
 
//       if (state && state !== "All States") {
//         params.set("state", state);
//       }
 
//       // Only add page if no filters active
//       if (page > 1 && !trimmedSearch && state === "All States") {
//         params.set("page", page.toString());
//       }
 
//       const queryString = params.toString();
//       const newURL = queryString ? `${pathname}?${queryString}` : pathname;
 
//       console.log("🔄 [Client] Navigating to:", newURL);
//       setIsLoading(true);
//       router.push(newURL);
//     },
//     [pathname, router]
//   );
 
//   // Update URL when debounced search changes
//   useEffect(() => {
//     if (debouncedSearch !== initialSearch) {
//       updateURL(debouncedSearch, stateFilter, 1);
//     }
//   }, [debouncedSearch]);
 
//   const handleSearchChange = (value: string) => {
//     setSearchQuery(value);
//   };
 
//   const handleStateChange = (value: string) => {
//     setStateFilter(value);
//     updateURL(debouncedSearch, value, 1);
//   };
 
//   const handlePageChange = (newPage: number) => {
//     updateURL(debouncedSearch, stateFilter, newPage);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };
 
//   const clearFilters = () => {
//     setSearchQuery("");
//     setStateFilter("All States");
//     router.push(pathname);
//   };
 
//   // Check if filters are active
//   const hasActiveFilters =
//     searchQuery.trim() !== "" ||
//     (stateFilter && stateFilter !== "All States");
 
//   const pageNumbers = useMemo(() => {
//     const pages: (number | string)[] = [];
 
//     if (lastPage <= 7) {
//       for (let i = 1; i <= lastPage; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);
//       if (currentPage > 3) pages.push("...");
//       for (
//         let i = Math.max(2, currentPage - 1);
//         i <= Math.min(lastPage - 1, currentPage + 1);
//         i++
//       ) {
//         pages.push(i);
//       }
//       if (currentPage < lastPage - 2) pages.push("...");
//       pages.push(lastPage);
//     }
 
//     return pages;
//   }, [currentPage, lastPage]);
 
//   useEffect(() => {
//     setIsLoading(false);
//   }, [acts]);
 
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
//         <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
//           <div className="min-w-0">
//             {/* Header */}
//             <div className="mb-6">
//               <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                 Labour Acts &amp; Regulations :
//               </h2>
//               <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify">
//                 Stay updated with Labour Acts & Regulations that define
//                 compliance standards, employee rights, and workplace
//                 obligations. This ensures businesses avoid penalties, stay
//                 legally safe, and maintain smooth and lawful working
//                 environments.
//               </p>
//             </div>
 
//             {/* Clean Search and Filter UI */}
//             <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-stretch sm:items-center mb-6">
//               {/* Search Input - Clean & Simple */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
//                 <input
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => handleSearchChange(e.target.value)}
//                   placeholder="Search by title..."
//                   className="w-full h-10 pl-10 pr-10 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
//                   disabled={isLoading}
//                 />
//                 {searchQuery && (
//                   <button
//                     onClick={() => handleSearchChange("")}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>
 
//               {/* State Dropdown - Minimal & Clean using Combobox */}
//               <div className="flex-shrink-0">
//                 <Combobox
//                   value={selectedStateOption}
//                   onChange={(state) => handleStateChange(state?.value || "All States")}
//                   disabled={isLoading}
//                 >
//                   <div className="relative">
//                     <Combobox.Button className="relative w-full sm:w-48 h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
//                       <span className="block truncate text-left text-gray-900">
//                         {selectedStateOption?.label || "Select State"}
//                       </span>
//                       <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <ChevronDown className="h-4 w-4 text-gray-400" />
//                       </span>
//                     </Combobox.Button>
 
//                     <Transition
//                       as={Fragment}
//                       leave="transition ease-in duration-100"
//                       leaveFrom="opacity-100"
//                       leaveTo="opacity-0"
//                     >
//                       <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         {stateOptions.map((option, index) => (
//                           <Combobox.Option
//                             key={`${option.value}-${index}`}
//                             className={({ active }) =>
//                               `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
//                                 active
//                                   ? "bg-orange-100 text-orange-900"
//                                   : "text-gray-900"
//                               }`
//                             }
//                             value={option}
//                           >
//                             {({ selected, active }) => (
//                               <>
//                                 <span
//                                   className={`block truncate ${
//                                     selected ? "font-medium" : "font-normal"
//                                   }`}
//                                 >
//                                   {option.label}
//                                 </span>
//                                 {selected ? (
//                                   <span
//                                     className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
//                                       active
//                                         ? "text-orange-600"
//                                         : "text-orange-600"
//                                     }`}
//                                   >
//                                     <Check className="h-4 w-4" />
//                                   </span>
//                                 ) : null}
//                               </>
//                             )}
//                           </Combobox.Option>
//                         ))}
//                       </Combobox.Options>
//                     </Transition>
//                   </div>
//                 </Combobox>
//               </div>
 
//               {/* Clear Filters Button */}
//               {hasActiveFilters && (
//                 <Button
//                   variant="outline"
//                   onClick={clearFilters}
//                   className="h-10 px-3 text-sm"
//                   disabled={isLoading}
//                 >
//                   <X className="w-4 h-4 mr-2" />
//                   Clear
//                 </Button>
//               )}
//             </div>
 
//             {/* Active Filters Display */}
//             {hasActiveFilters && (
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {searchQuery.trim() && (
//                   <Badge variant="secondary" className="px-3 py-1 text-xs">
//                     Search: "{searchQuery}"
//                     <button
//                       onClick={() => handleSearchChange("")}
//                       className="ml-2 hover:text-red-600 font-bold"
//                     >
//                       ×
//                     </button>
//                   </Badge>
//                 )}
//                 {stateFilter && stateFilter !== "All States" && (
//                   <Badge variant="secondary" className="px-3 py-1 text-xs">
//                     State: {stateFilter}
//                     <button
//                       onClick={() => handleStateChange("All States")}
//                       className="ml-2 hover:text-red-600 font-bold"
//                     >
//                       ×
//                     </button>
//                   </Badge>
//                 )}
//               </div>
//             )}
 
//             {/* Results Count */}
//             <div className="text-xs text-gray-600 mb-4 pb-2 border-b">
//               {isLoading ? (
//                 <span className="flex items-center gap-2">
//                   <Loader2 className="w-3 h-3 animate-spin" />
//                   Loading results...
//                 </span>
//               ) : (
//                 <span>
//                   Showing <strong>{serverData.meta?.from || 0}</strong> to{" "}
//                   <strong>{serverData.meta?.to || 0}</strong> of{" "}
//                   <strong>{serverData.meta?.total || 0}</strong> results
//                 </span>
//               )}
//             </div>
 
//             {isLoading && (
//               <div className="flex items-center justify-center p-8">
//                 <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
//                 <span className="ml-2 text-sm text-gray-600">Loading...</span>
//               </div>
//             )}
 
//             {!isLoading && (
//               <>
//                 {acts?.length === 0 ? (
//                   <Card className="border-gray-200">
//                     <CardContent className="text-center py-12">
//                       <p className="text-gray-600 font-medium mb-2">
//                         No results found
//                       </p>
//                       <p className="text-sm text-gray-500 mb-4">
//                         {hasActiveFilters
//                           ? "Try adjusting your search or filters"
//                           : "No acts available at the moment"}
//                       </p>
//                       {hasActiveFilters && (
//                         <Button onClick={clearFilters} variant="outline">
//                           Clear All Filters
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Card>
//                 ) : (
//                   <div className="grid grid-cols-1 gap-3">
//                     {acts?.map((act) => (
//                       <div
//                         key={act?.id}
//                         className="w-full bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
//                       >
//                         <div className="p-3">
//                           <div className="grid grid-cols-[1fr_auto] gap-3">
//                             <div className="min-w-0">
//                               <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
//                                 {act?.title}
//                               </h4>
 
//                               <ExpandableDescription
//                                 description={act?.short_description}
//                               />
 
//                               <div className="mt-2">
//                                 <Button
//                                   size="sm"
//                                   className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
//                                   asChild
//                                 >
//                                   <Link
//                                     href={`/gazette-details/${
//                                       act?.slug || act?.id
//                                     }`}
//                                   >
//                                     <Eye className="w-4 h-4" />
//                                     <span>Read More</span>
//                                   </Link>
//                                 </Button>
//                               </div>
//                             </div>
 
//                             <div className="pl-3 self-start justify-self-end">
//                               <span className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium rounded">
//                                 {act?.state || "All India"}
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </>
//             )}
 
//             {/* Pagination - Only show when NO filters active */}
//             {!isLoading &&
//               !hasActiveFilters &&
//               serverData &&
//               lastPage > 1 && (
//                 <div className="flex justify-center items-center gap-2 mt-6">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50 "
//                     disabled={currentPage <= 1}
//                     onClick={() =>
//                       handlePageChange(Math.max(1, currentPage - 1))
//                     }
//                     aria-label="Previous Page"
//                   >
//                     <ChevronLeft className="w-4 h-4" />
//                   </Button>
 
//                   {pageNumbers?.map((p, idx) =>
//                     typeof p === "number" ? (
//                       <Button
//                         key={idx}
//                         variant={currentPage === p ? "default" : "outline"}
//                         size="sm"
//                         className={
//                           currentPage === p
//                             ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400 hover:cursor-pointer"
//                             : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200 hover:cursor-pointer"
//                         }
//                         onClick={() => handlePageChange(p)}
//                         aria-label={`Page ${p}`}
//                       >
//                         {p}
//                       </Button>
//                     ) : (
//                       <span key={idx} className="px-1 text-gray-400 text-xs">
//                         {p}
//                       </span>
//                     )
//                   )}
 
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50 hover:cursor-pointer"
//                     disabled={currentPage >= lastPage}
//                     onClick={() =>
//                       handlePageChange(Math.min(lastPage, currentPage + 1))
//                     }
//                     aria-label="Next Page"
//                   >
//                     <ChevronRight className="w-4 h-4" />
//                   </Button>
//                 </div>
//               )}
//           </div>
 
//           {/* ---- Sidebar ---- */}
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







// app/_component/Gazette/Gazette.tsx
"use client";

import { useEffect, useMemo, useState, useCallback, Fragment } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  CalendarIcon,
  Search,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Combobox, Transition } from "@headlessui/react";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

// ---------- Types ----------
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

interface GazetteNotificationsClientProps {
  initialData: ApiResponse;
  initialPage: number;
  availableStates: string[]; // String array from server
  initialSearch?: string;
  initialState?: string;
  initialEffective?: string;
  initialUpdated?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
const FILE_HOST = API_BASE;

// Utils
const ExpandableDescription = ({
  description,
}: {
  description: string | null;
}) => {
  if (!description || description.trim() === "") return null;
  const cleanedDescription = description.trim();
  const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
  const shouldTruncate = words.length > 50;
  const displayText = shouldTruncate
    ? words.slice(0, 50).join(" ") + "..."
    : cleanedDescription;
  return (
    <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[12px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
      {displayText}
    </p>
  );
};

function normalizeFileUrl(
  url?: string | null,
  path?: string | null
): string | null {
  if (url) {
    try {
      const u = new URL(url, FILE_HOST);
      const base = new URL(FILE_HOST);
      const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
        u.hostname
      );
      const origin = isLocal ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      return null;
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
  return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", {
    month: "short",
  })}, ${d.getFullYear()}`;
}

function formatDateToISO(date: Date | null): string {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function Gazette({
  initialData,
  initialPage,
  availableStates,
  initialSearch = "",
  initialState = "",
  initialEffective = "",
  initialUpdated = "",
}: GazetteNotificationsClientProps) {
  const router = useRouter();
  const pathname = usePathname();

  // State
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [stateFilter, setStateFilter] = useState(initialState || "All States");
  const [effDate, setEffDate] = useState<Date | null>(
    initialEffective ? new Date(initialEffective) : null
  );
  const [updDate, setUpdDate] = useState<Date | null>(
    initialUpdated ? new Date(initialUpdated) : null
  );
  const [isLoading, setIsLoading] = useState(false);

  // Debounced search
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const serverData = initialData;
  const currentPage = serverData?.meta?.current_page ?? initialPage;
  const lastPage = serverData?.meta?.last_page ?? 1;
  const rows = serverData?.data ?? [];

  // Auto-download
  useEffect(() => {
    handleAutoDownloadOnReturn(
      { replace: (url: string) => router.replace(url) },
      pathname,
      typeof window !== "undefined" ? window.location.search : ""
    );
  }, []);

  // ⭐ FIXED: State options for Combobox - Handle both string and object formats
  const stateOptions = useMemo(() => {
    console.log("🎯 [Client Gazette] Received states:", availableStates);
    console.log("🎯 [Client Gazette] Type:", typeof availableStates, "IsArray:", Array.isArray(availableStates));
    
    const options = [{ label: "All States", value: "All States" }];

    if (availableStates && Array.isArray(availableStates) && availableStates.length > 0) {
      availableStates.forEach((state: any) => {
        // Handle both string and {id, name} object formats
        const stateName = typeof state === "string" ? state : (state?.name || String(state));
        
        if (stateName && stateName.trim()) {
          options.push({
            label: stateName,
            value: stateName,
          });
        }
      });
    }

    
    return options;
  }, [availableStates]);

  const selectedStateOption =
    stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];

  // Update URL
  const updateURL = useCallback(
    (
      search: string,
      state: string,
      page: number,
      effective: Date | null,
      updated: Date | null
    ) => {
      const params = new URLSearchParams();

      const trimmedSearch = search.trim();
      if (trimmedSearch) {
        params.set("search", trimmedSearch);
      }

      if (state && state !== "All States") {
        params.set("state", state);
      }

      if (effective) {
        params.set("effective", formatDateToISO(effective));
      }

      if (updated) {
        params.set("updated", formatDateToISO(updated));
      }

      const hasFilters =
        trimmedSearch || (state && state !== "All States") || effective || updated;

      if (page > 1 && !hasFilters) {
        params.set("page", page.toString());
      }

      const queryString = params.toString();
      const newURL = queryString ? `${pathname}?${queryString}` : pathname;

      setIsLoading(true);
      router.push(newURL);
    },
    [pathname, router]
  );

  useEffect(() => {
    if (debouncedSearch !== initialSearch) {
      updateURL(debouncedSearch, stateFilter, 1, effDate, updDate);
    }
  }, [debouncedSearch]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleStateChange = (value: string) => {
    setStateFilter(value);
    updateURL(debouncedSearch, value, 1, effDate, updDate);
  };

  const handlePageChange = (newPage: number) => {
    updateURL(debouncedSearch, stateFilter, newPage, effDate, updDate);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStateFilter("All States");
    setEffDate(null);
    setUpdDate(null);
    router.push(pathname);
  };

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    (stateFilter && stateFilter !== "All States") ||
    effDate !== null ||
    updDate !== null;

  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];

    if (lastPage <= 7) {
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(lastPage - 1, currentPage + 1);
        i++
      ) {
        pages.push(i);
      }
      if (currentPage < lastPage - 2) pages.push("...");
      pages.push(lastPage);
    }

    return pages;
  }, [currentPage, lastPage]);

  useEffect(() => {
    setIsLoading(false);
  }, [rows]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                Gazette Notifications :
              </h1>
              <p className="text-gray-600 leading-relaxed text-[12px] sm:text-md text-justify">
                Explore the latest Gazette Notifications for timely updates on
                government decisions, legal changes, and compliance requirements.
              </p>
            </div>

            {/* Clean Search and Filter Bar - Single Line */}
            <div className="mb-6">
              <div className="flex flex-col gap-3 lg:flex-row lg:gap-3 items-stretch lg:items-center">
                {/* Search Input - Reduced Width */}
                <div className="relative flex-1 lg:max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500 w-4 h-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search by title..."
                    className="w-full h-10 pl-10 pr-10 bg-white border border-gray-300 rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    disabled={isLoading}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* State Dropdown */}
                <div className="flex-shrink-0 lg:w-44">
                  <Combobox
                    value={selectedStateOption}
                    onChange={(state) =>
                      handleStateChange(state?.value || "All States")
                    }
                    disabled={isLoading}
                  >
                    <div className="relative">
                      <Combobox.Button className="relative w-full h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50">
                        <span className="block truncate text-left text-gray-900">
                          {selectedStateOption?.label || "Select State"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </span>
                      </Combobox.Button>

                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {stateOptions.map((option, index) => (
                            <Combobox.Option
                              key={`${option.value}-${index}`}
                              className={({ active }) =>
                                `relative cursor-pointer select-none py-2 pl-8 pr-4 ${
                                  active
                                    ? "bg-orange-100 text-orange-900"
                                    : "text-gray-900"
                                }`
                              }
                              value={option}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {option.label}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active
                                          ? "text-orange-600"
                                          : "text-orange-600"
                                      }`}
                                    >
                                      <Check className="h-4 w-4" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </Combobox.Options>
                      </Transition>
                    </div>
                  </Combobox>
                </div>

                {/* Effective Date */}
                <div className="flex-shrink-0 lg:w-44">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
                        disabled={isLoading}
                      >
                        <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                        <span className="truncate">
                          {effDate
                            ? effDate.toLocaleDateString()
                            : "Effective Date"}
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={effDate ?? undefined}
                        onSelect={(d) => {
                          setEffDate(d ?? null);
                          updateURL(
                            debouncedSearch,
                            stateFilter,
                            1,
                            d ?? null,
                            updDate
                          );
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Updated Date */}
                <div className="flex-shrink-0 lg:w-44">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-10 px-3 text-sm"
                        disabled={isLoading}
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
                        onSelect={(d) => {
                          setUpdDate(d ?? null);
                          updateURL(
                            debouncedSearch,
                            stateFilter,
                            1,
                            effDate,
                            d ?? null
                          );
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Clear Button */}
                {hasActiveFilters && (
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    className="h-10 px-3 text-sm flex-shrink-0 lg:w-auto"
                    disabled={isLoading}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Active Filters Display */}
              {hasActiveFilters && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {searchQuery.trim() && (
                    <Badge variant="secondary" className="px-3 py-1 text-xs">
                      Search: "{searchQuery}"
                      <button
                        onClick={() => handleSearchChange("")}
                        className="ml-2 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {stateFilter && stateFilter !== "All States" && (
                    <Badge variant="secondary" className="px-3 py-1 text-xs">
                      State: {stateFilter}
                      <button
                        onClick={() => handleStateChange("All States")}
                        className="ml-2 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {effDate && (
                    <Badge variant="secondary" className="px-3 py-1 text-xs">
                      Effective: {effDate.toLocaleDateString()}
                      <button
                        onClick={() => {
                          setEffDate(null);
                          updateURL(
                            debouncedSearch,
                            stateFilter,
                            1,
                            null,
                            updDate
                          );
                        }}
                        className="ml-2 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                  {updDate && (
                    <Badge variant="secondary" className="px-3 py-1 text-xs">
                      Updated: {updDate.toLocaleDateString()}
                      <button
                        onClick={() => {
                          setUpdDate(null);
                          updateURL(
                            debouncedSearch,
                            stateFilter,
                            1,
                            effDate,
                            null
                          );
                        }}
                        className="ml-2 hover:text-red-600 font-bold"
                      >
                        ×
                      </button>
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
                <span className="ml-2 text-sm text-gray-600">Loading...</span>
              </div>
            )}

            {/* Results */}
            {!isLoading && (
              <>
                {rows?.length === 0 ? (
                  <Card className="border-gray-200">
                    <CardContent className="text-center py-12">
                      <p className="text-gray-600 font-medium mb-2">
                        No results found
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {hasActiveFilters
                          ? "Try adjusting your search or filters"
                          : "No notifications available"}
                      </p>
                      {hasActiveFilters && (
                        <Button onClick={clearFilters} variant="outline">
                          Clear All Filters
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="space-y-3">
                    {rows?.map((n) => {
                      const updated = formatPrettyDate(n?.updated_date);
                      const effective = formatPrettyDate(n?.effective_date);
                      const downloadUrl = normalizeFileUrl(
                        n?.pdf_url,
                        n?.pdf_path
                      );

                      return (
                        <div
                          key={n?.id}
                          className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md border-l-4 border-l-orange-500 overflow-hidden"
                        >
                          <div className="p-3">
                            <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto] md:grid-cols-[1fr_auto] items-start gap-0">
                              <div className="max-w-full min-w-0"> 
                                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                                  {n?.title}
                                </h4>

                                <ExpandableDescription
                                  description={n?.short_description}
                                />

                                <div className="mt-3">
                                  <Button
                                    size="sm"
                                    className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                    asChild
                                  >
                                    <Link href={`/gazette-details/${n?.slug}`}>
                                      <Eye className="w-4 h-4" />
                                      <span>Read More</span>
                                    </Link>
                                  </Button>
                                </div>
                              </div>

                              <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
                                <Badge
                                  variant="outline"
                                  className="bg-blue-50 text-blue-700 border-blue-200 text-xs px-1.5 py-0.5 font-medium"
                                >
                                  {n?.state_name || ""}
                                </Badge>

                                <div className="space-y-1 text-xs">
                                  {updated && (
                                    <div>
                                      <span className="text-slate-500 font-semibold">
                                        Updated:&nbsp;
                                      </span>
                                      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
                                        {updated}
                                      </span>
                                    </div>
                                  )}
                                  {effective && (
                                    <div>
                                      <span className="text-slate-500 font-semibold">
                                        Effective:&nbsp;
                                      </span>
                                      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600">
                                        {effective}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                {downloadUrl && (
                                  <Button
                                    size="sm"
                                    className="mt-2 bg-orange-500 text-white hover:bg-orange-600 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1 hover:cursor-pointer"
                                    onClick={() =>
                                      openProtectedDownload(router, downloadUrl)
                                    }
                                  >
                                    <Download className="w-4 h-4" />
                                    <span>Download</span>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* Pagination - Hide when filters active */}
            {!isLoading && !hasActiveFilters && lastPage > 1 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {pageNumbers?.map((p, idx) =>
                  typeof p === "number" ? (
                    <Button
                      key={idx}
                      variant={currentPage === p ? "default" : "outline"}
                      size="sm"
                      className={
                        currentPage === p
                          ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                          : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50"
                      }
                      onClick={() => handlePageChange(p)}
                    >
                      {p}
                    </Button>
                  ) : (
                    <span key={idx} className="px-1 text-gray-400 text-xs">
                      {p}
                    </span>
                  )
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage === lastPage}
                  onClick={() =>
                    handlePageChange(Math.min(lastPage, currentPage + 1))
                  }
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Right Sidebar - Quick Access */}
          <div className="min-w-0">
            <div className="sticky top-24">
              <Card className="rounded-lg border bg-white shadow-sm">
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

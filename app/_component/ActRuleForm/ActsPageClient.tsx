// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight, Eye, Loader2 } from "lucide-react";
// import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useMemo, useState, useTransition } from "react";

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

// type StateApiResponse = { states: { id: number; name: string }[] };

// interface ActsPageClientProps {
//   initialData: ApiResponse;
//   initialPage: number;
// }

// const ExpandableDescription = ({ description }: { description: string }) => {
//   if (!description || description.trim() === "") {
//     return null;
//   }

//   // Clean the description and split into words
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
// }: ActsPageClientProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [isPending, startTransition] = useTransition();

//   const [states, setStates] = useState<{ id: number; name: string }[]>([]);
//   const [stateFilter, setStateFilter] = useState<string>("");
//   const [q, setQ] = useState<string>("");

//   const serverData = initialData;

//   const currentPage = serverData?.meta?.current_page ?? initialPage;
//   const lastPage = serverData?.meta?.last_page ?? 1;
//   const acts = serverData?.data ?? [];

//   const handlePageChange = (newPage: number) => {
//     startTransition(() => {
//       const params = new URLSearchParams(searchParams);
//       if (newPage === 1) params.delete("page");
//       else params.set("page", String(newPage));
//       const newUrl = params.toString() ? `?${params.toString()}` : "";
//       router.push(`/acts-rule-form${newUrl}`);
//     });
//   };

//   const filtered = useMemo(() => {
//     let rows = acts;
//     if (stateFilter && stateFilter !== "All States") {
//       rows = rows.filter(
//         (r) => r.state.toLowerCase() === stateFilter.toLowerCase()
//       );
//     }
//     if (q.trim()) {
//       const needle = q.trim().toLowerCase();
//       rows = rows?.filter(
//         (r) =>
//           r?.title?.toLowerCase().includes(needle) ||
//           r?.short_description?.toLowerCase().includes(needle)
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
//       <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
//         <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
//           <div className="min-w-0">
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

//             <div className="my-6">
//               <SearchAndStateFilter
//                 states={states}
//                 onSearchChange={handleSearchChange}
//                 onStateChange={handleStateChange}
//                 searchValue={q}
//                 stateValue={stateFilter}
//                 isPending={isPending}
//               />
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
//                   <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
//                     No results found for your filters.
//                   </div>
//                 ) : (
//                   <div className="grid grid-cols-1 gap-3">
//                     {filtered?.map((act) => (
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
//                                     href={`/acts-rule-form-details/${
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

//                 {pageNumbers?.map((p) => (
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








// // app/_component/ActRuleForm/ActsPageClient.tsx
// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   Loader2,
//   Search,
//   X,
//   Filter,
// } from "lucide-react";
// import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
// import { useMemo, useState, useEffect, useCallback } from "react";

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

//             {/* Search and Filter Card */}
//             <Card className="border-l-4 border-l-orange-500 shadow-sm mb-6">
//               <CardContent className="p-4 space-y-4">
//                 <div className="flex items-center gap-2 mb-2">
//                   <Filter className="w-4 h-4 text-orange-500" />
//                   <h3 className="text-sm font-semibold text-gray-800">
//                     Search & Filter
//                   </h3>
//                 </div>

//                 {/* Search Input */}
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <Input
//                     type="text"
//                     placeholder="Search by title..."
//                     value={searchQuery}
//                     onChange={(e) => handleSearchChange(e.target.value)}
//                     className="pl-10 pr-10 h-10"
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

//                 {/* State Filter */}
//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <div className="flex-1">
//                     <Select value={stateFilter} onValueChange={handleStateChange}>
//                       <SelectTrigger className="w-full h-10">
//                         <SelectValue placeholder="All States" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="All States">All States</SelectItem>
//                         {availableStates.map((state) => (
//                           <SelectItem key={state.id} value={state.name}>
//                             {state.name}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                   </div>

//                   {hasActiveFilters && (
//                     <Button
//                       variant="outline"
//                       onClick={clearFilters}
//                       className="h-10"
//                     >
//                       <X className="w-4 h-4 mr-2" />
//                       Clear Filters
//                     </Button>
//                   )}
//                 </div>

//                 {/* Active Filters */}
//                 {hasActiveFilters && (
//                   <div className="flex flex-wrap gap-2 pt-2 border-t">
//                     {searchQuery.trim() && (
//                       <Badge variant="secondary" className="px-3 py-1 text-xs">
//                         Search: "{searchQuery}"
//                         <button
//                           onClick={() => handleSearchChange("")}
//                           className="ml-2 hover:text-red-600 font-bold"
//                         >
//                           ×
//                         </button>
//                       </Badge>
//                     )}
//                     {stateFilter && stateFilter !== "All States" && (
//                       <Badge variant="secondary" className="px-3 py-1 text-xs">
//                         State: {stateFilter}
//                         <button
//                           onClick={() => handleStateChange("All States")}
//                           className="ml-2 hover:text-red-600 font-bold"
//                         >
//                           ×
//                         </button>
//                       </Badge>
//                     )}
//                   </div>
//                 )}

//                 {/* Results Count */}
//                 <div className="text-xs text-gray-600 pt-2 border-t">
//                   {isLoading ? (
//                     <span className="flex items-center gap-2">
//                       <Loader2 className="w-3 h-3 animate-spin" />
//                       Loading results...
//                     </span>
//                   ) : (
//                     <span>
//                       Showing <strong>{serverData.meta?.from || 0}</strong> to{" "}
//                       <strong>{serverData.meta?.to || 0}</strong> of{" "}
//                       <strong>{serverData.meta?.total || 0}</strong> results
//                     </span>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>

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
//                                     href={`/acts-rule-form-details/${
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
//                     className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
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
//                             ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
//                             : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
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
//                     className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
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









// app/_component/ActRuleForm/ActsPageClient.tsx
"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Loader2,
  Search,
  X,
  ChevronDown,
  Check,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useMemo, useState, useEffect, useCallback, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";

// ---------- Types ----------
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

interface ActsPageClientProps {
  initialData: ApiResponse;
  initialPage: number;
  availableStates: { id: number; name: string }[];
  initialSearch?: string;
  initialState?: string;
}

const ExpandableDescription = ({ description }: { description: string }) => {
  if (!description || description.trim() === "") {
    return null;
  }

  const cleanedDescription = description.trim();
  const words = cleanedDescription
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const shouldTruncate = words.length > 50;
  const displayText = shouldTruncate
    ? words.slice(0, 50).join(" ") + "..."
    : cleanedDescription;

  return (
    <div className="relative mt-2">
      <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words line-clamp-2">
        {displayText}
      </p>
    </div>
  );
};

export default function ActsPageClient({
  initialData,
  initialPage,
  availableStates,
  initialSearch = "",
  initialState = "",
}: ActsPageClientProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [stateFilter, setStateFilter] = useState(initialState || "All States");
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
  const acts = serverData?.data ?? [];

  // State options for Combobox
  const stateOptions = useMemo(() => {
    const options = [{ label: "All States", value: "All States" }];
    
    availableStates.forEach((state) => {
      options.push({
        label: state.name,
        value: state.name,
      });
    });

    return options;
  }, [availableStates]);

  const selectedStateOption =
    stateOptions.find((opt) => opt.value === stateFilter) || stateOptions[0];

  // Update URL with filters
  const updateURL = useCallback(
    (search: string, state: string, page: number) => {
      const params = new URLSearchParams();

      const trimmedSearch = search.trim();
      if (trimmedSearch) {
        params.set("search", trimmedSearch);
      }

      if (state && state !== "All States") {
        params.set("state", state);
      }

      // Only add page if no filters active
      if (page > 1 && !trimmedSearch && state === "All States") {
        params.set("page", page.toString());
      }

      const queryString = params.toString();
      const newURL = queryString ? `${pathname}?${queryString}` : pathname;

      console.log("🔄 [Client] Navigating to:", newURL);
      setIsLoading(true);
      router.push(newURL);
    },
    [pathname, router]
  );

  // Update URL when debounced search changes
  useEffect(() => {
    if (debouncedSearch !== initialSearch) {
      updateURL(debouncedSearch, stateFilter, 1);
    }
  }, [debouncedSearch]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  const handleStateChange = (value: string) => {
    setStateFilter(value);
    updateURL(debouncedSearch, value, 1);
  };

  const handlePageChange = (newPage: number) => {
    updateURL(debouncedSearch, stateFilter, newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchQuery("");
    setStateFilter("All States");
    router.push(pathname);
  };

  // Check if filters are active
  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    (stateFilter && stateFilter !== "All States");

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
  }, [acts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                Labour Acts &amp; Regulations :
              </h2>
              <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify">
                Stay updated with Labour Acts & Regulations that define
                compliance standards, employee rights, and workplace
                obligations. This ensures businesses avoid penalties, stay
                legally safe, and maintain smooth and lawful working
                environments.
              </p>
            </div>

            {/* Clean Search and Filter UI */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 items-stretch sm:items-center mb-6">
              {/* Search Input - Clean & Simple */}
              <div className="relative flex-1">
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

              {/* State Dropdown - Minimal & Clean using Combobox */}
              <div className="flex-shrink-0">
                <Combobox
                  value={selectedStateOption}
                  onChange={(state) => handleStateChange(state?.value || "All States")}
                  disabled={isLoading}
                >
                  <div className="relative">
                    <Combobox.Button className="relative w-full sm:w-48 h-10 pl-3 pr-8 bg-white border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
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

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="h-10 px-3 text-sm"
                  disabled={isLoading}
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              )}
            </div>

            {/* Active Filters Display */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
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
              </div>
            )}

            {/* Results Count */}
            <div className="text-xs text-gray-600 mb-4 pb-2 border-b">
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Loading results...
                </span>
              ) : (
                <span>
                  Showing <strong>{serverData.meta?.from || 0}</strong> to{" "}
                  <strong>{serverData.meta?.to || 0}</strong> of{" "}
                  <strong>{serverData.meta?.total || 0}</strong> results
                </span>
              )}
            </div>

            {isLoading && (
              <div className="flex items-center justify-center p-8">
                <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
                <span className="ml-2 text-sm text-gray-600">Loading...</span>
              </div>
            )}

            {!isLoading && (
              <>
                {acts?.length === 0 ? (
                  <Card className="border-gray-200">
                    <CardContent className="text-center py-12">
                      <p className="text-gray-600 font-medium mb-2">
                        No results found
                      </p>
                      <p className="text-sm text-gray-500 mb-4">
                        {hasActiveFilters
                          ? "Try adjusting your search or filters"
                          : "No acts available at the moment"}
                      </p>
                      {hasActiveFilters && (
                        <Button onClick={clearFilters} variant="outline">
                          Clear All Filters
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {acts?.map((act) => (
                      <div
                        key={act?.id}
                        className="w-full bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
                      >
                        <div className="p-3">
                          <div className="grid grid-cols-[1fr_auto] gap-3">
                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                                {act?.title}
                              </h4>

                              <ExpandableDescription
                                description={act?.short_description}
                              />

                              <div className="mt-2">
                                <Button
                                  size="sm"
                                  className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                  asChild
                                >
                                  <Link
                                    href={`/acts-rule-form-details/${
                                      act?.slug || act?.id
                                    }`}
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>Read More</span>
                                  </Link>
                                </Button>
                              </div>
                            </div>

                            <div className="pl-3 self-start justify-self-end">
                              <span className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium rounded">
                                {act?.state || "All India"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Pagination - Only show when NO filters active */}
            {!isLoading &&
              !hasActiveFilters &&
              serverData &&
              lastPage > 1 && (
                <div className="flex justify-center items-center gap-2 mt-6">
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

                  {pageNumbers?.map((p, idx) =>
                    typeof p === "number" ? (
                      <Button
                        key={idx}
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

          {/* ---- Sidebar ---- */}
          <div className="min-w-0">
            <div className="sticky top-24">
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-4">
                  <PopularSearch className="mb-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

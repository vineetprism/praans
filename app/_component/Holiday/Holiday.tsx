// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import Link from "next/link";
// import { Calendar, ChevronRight } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { useEffect, useMemo, useState } from "react";

// type HolidayListItem = { slug: string; state: string };

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

// const buildYears = (start: number, end: number) =>
//   Array.from({ length: end - start + 1 }, (_, i) => start + i);

// function parseHolidayPayload(payload: unknown): HolidayListItem[] {
//   if (Array.isArray(payload)) return payload as HolidayListItem[];
//   if (payload && typeof payload === "object" && Array.isArray((payload as any).data)) {
//     return (payload as any).data as HolidayListItem[];
//   }
//   return [];
// }

// interface Props {
//   initialYear: number;
//   initialHolidays: HolidayListItem[];
// }

// export default function Holiday({ initialYear, initialHolidays }: Props) {
//   const YEARS = useMemo(() => buildYears(2020, 2040), []);
//   const [year, setYear] = useState<string>(String(initialYear));
//   const [holidays, setHolidays] = useState<HolidayListItem[]>(initialHolidays);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!API_BASE) {
//       setError("API base URL not configured.");
//       return;
//     }
//     if (String(initialYear) === year) {
//       setHolidays(initialHolidays);
//       setError(null);
//       setLoading(false);
//       return;
//     }

//     const ac = new AbortController();
//     (async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch(`${API_BASE}/api/holidays/${year}`, { signal: ac.signal });
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data = await res.json();
//         setHolidays(parseHolidayPayload(data));
//       } catch (e: any) {
//         if (e?.name !== "AbortError") {
//           setError("Failed to fetch holidays.");
//           setHolidays([]);
//         }
//       } finally {
//         setLoading(false);
//       }
//     })();

//     return () => ac.abort();
//   }, [year, initialYear, initialHolidays]);

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

//           {/* Main */}
//           <div className="lg:col-span-4 lg:order-1 order-2">
//             <div className="mb-4">
//               <div className="mb-4">
//                 <div className="flex justify-between">
//                   <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">Holiday Lists :</h2>

//                   {/* Year Selector */}
//                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
//                     <div className="flex-shrink-0">
//                       <Select value={year} onValueChange={setYear}>
//                         <SelectTrigger className="w-24 sm:w-32 border-orange-300 focus:ring-orange-500 h-9">
//                           <SelectValue placeholder="Select year" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {YEARS?.map((y) => (
//                             <SelectItem key={y} value={String(y)}>
//                               {y}
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                   "Statutory Holidays" are public or legal holidays designated by government authorities based on cultural,
//                   religious, historical, or national significance within a particular country or region as mandated by law.
//                   Every employee is entitled to a day off with pay or premium pay if they work on such occasions.
//                 </p>
//               </div>
//             </div>

//             {/* Grid */}
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
//               {loading ? (
//                 <p>Loading holidays...</p>
//               ) : error ? (
//                 <p className="text-red-600">{error}</p>
//               ) : holidays?.length === 0 ? (
//                 <p className="text-gray-600 text-sm">No holiday lists found for {year}.</p>
//               ) : (
//                 holidays?.map((holiday) => (
//                   <Link key={holiday?.slug} href={`/holidays-details/${holiday?.slug}`} aria-label={holiday?.state}>
//                     <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden">
//                       <div className="p-2 sm:p-3">
//                         <div className="flex items-center justify-between">
//                           <div className="flex-1 min-w-0">
//                             <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
//                               {holiday?.state}
//                             </h3>
//                             <div className="flex items-center text-xs text-orange-600 font-medium">
//                               <Calendar className="w-3 h-3 mr-1" />
//                               {year}
//                             </div>
//                           </div>
//                           <div className="flex-shrink-0 ml-2">
//                             <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
//                               <ChevronRight className="w-4 h-4 text-white" />
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </Link>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import { useEffect, useMemo, useState } from "react";

type HolidayListItem = { slug: string; state: string };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";

const buildYears = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

function parseHolidayPayload(payload: unknown): HolidayListItem[] {
  if (Array.isArray(payload)) return payload as HolidayListItem[];
  if (
    payload &&
    typeof payload === "object" &&
    Array.isArray((payload as any).data)
  ) {
    return (payload as any).data as HolidayListItem[];
  }
  return [];
}

interface Props {
  initialYear: number;
  initialHolidays: HolidayListItem[];
}

export default function Holiday({ initialYear, initialHolidays }: Props) {
  const YEARS = useMemo(() => buildYears(2020, 2040), []);
  const [year, setYear] = useState<string>(String(initialYear));
  const [holidays, setHolidays] = useState<HolidayListItem[]>(initialHolidays);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");

  useEffect(() => {
    if (!API_BASE) {
      setError("API base URL not configured.");
      return;
    }
    if (String(initialYear) === year) {
      setHolidays(initialHolidays);
      setError(null);
      setLoading(false);
      return;
    }

    const ac = new AbortController();
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_BASE}/api/holidays/${year}`, {
          signal: ac.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setHolidays(parseHolidayPayload(data));
      } catch (e: any) {
        if (e?.name !== "AbortError") {
          setError("Failed to fetch holidays.");
          setHolidays([]);
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => ac.abort();
  }, [year, initialYear, initialHolidays]);

  // Filter holidays based on search and state
  const filteredHolidays = useMemo(() => {
    if (!holidays) return [];

    return holidays.filter((holiday) => {
      const matchesSearch =
        !searchQuery ||
        holiday.state.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState =
        stateFilter === "All States" || holiday.state === stateFilter;

      return matchesSearch && matchesState;
    });
  }, [holidays, searchQuery, stateFilter]);

  // Generate unique state list for dropdown
  const availableStates = useMemo(() => {
    if (!holidays) return ["All States"];

    const uniqueStates = [...new Set(holidays.map((h) => h.state))];
    return ["All States", ...uniqueStates.sort()];
  }, [holidays]);

  const stateOptions = availableStates.map((state) => ({
    label: state,
    value: state,
  }));

  return (
    <div className="">
      <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          {/* Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-4 z-10">
              <Card>
                <CardContent className="p-3">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            <div className="mb-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                    Holiday Lists :
                  </h2>

                  {/* Year Selector */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                    <div className="flex-shrink-0">
                      <Select value={year} onValueChange={setYear}>
                        <SelectTrigger className="w-24 sm:w-32 border-orange-300 focus:ring-orange-500 h-9">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          {YEARS?.map((y) => (
                            <SelectItem key={y} value={String(y)}>
                              {y}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                  Get access to comprehensive Holiday Lists that outline
                  official national, state, and festival holidays applicable to
                  businesses. Ensure compliance with labour laws while offering
                  employees a structured schedule of leaves and mandatory
                  holidays.
                </p>
              </div>
            </div>

            {/* Search and State Filter */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <SearchAndStateFilter
                searchValue={searchQuery}
                stateValue={stateFilter}
                onSearchChange={setSearchQuery}
                onStateChange={setStateFilter}
                isPending={loading}
                states={stateOptions}
              />
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {loading ? (
                <p>Loading holidays...</p>
              ) : error ? (
                <p className="text-red-600">{error}</p>
              ) : filteredHolidays?.length === 0 ? (
                <p className="text-gray-600 text-sm">
                  {searchQuery || stateFilter !== "All States"
                    ? "No holidays match your search criteria."
                    : `No holiday lists found for ${year}.`}
                </p>
              ) : (
                filteredHolidays?.map((holiday) => (
                  <Link
                    key={holiday?.slug}
                    href={`/holidays-details/${holiday?.slug}`}
                    aria-label={holiday?.state}
                  >
                    <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg cursor-pointer overflow-hidden hover:shadow-md transition-shadow">
                      <div className="p-2 sm:p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-xs sm:text-sm font-semibold text-slate-800 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]">
                              {holiday?.state}
                            </h3>
                            <div className="flex items-center text-xs text-orange-600 font-medium">
                              <Calendar className="w-3 h-3 mr-1" />
                              {year}
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

// ---- Types (same as server file) ----
type StateItem = {
  id: number;
  state_name: string;
  state_slug: string;
};

type LeavesWorkingHoursAPI = {
  applicable: StateItem[];
  non_applicable: StateItem[];
};

type GridItem = {
  name: string;
  slug: string;
  available: boolean; // true = applicable (clickable), false = non-applicable (disabled)
};

export default function LeavesWorkingHours({
  initialData,
}: {
  initialData: LeavesWorkingHoursAPI | null;
}) {
  // Local UI state (filtering only)
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");

  // Guard rails (fallback if API fail)
  const data: LeavesWorkingHoursAPI = initialData ?? {
    applicable: [],
    non_applicable: [],
  };

  // Combine API buckets into one list for the grid
  const allGridItems: GridItem[] = useMemo(() => {
    const a = (data.applicable ?? []).map<GridItem>((s) => ({
      name: s.state_name,
      slug: s.state_slug,
      available: true,
    }));
    const n = (data.non_applicable ?? []).map<GridItem>((s) => ({
      name: s.state_name,
      slug: s.state_slug,
      available: false,
    }));
    // Keep original ordering (applicable first, then the rest)
    return [...a, ...n];
  }, [data]);

  // Filters
  const searchNeedle = q.trim().toLowerCase();
  const byText = (s: GridItem) =>
    !searchNeedle ||
    s.name.toLowerCase().includes(searchNeedle) ||
    s.slug.toLowerCase().includes(searchNeedle);

  const byState = (s: GridItem) => stateFilter === "All States" || s.name === stateFilter;

  const filteredStates = useMemo(
    () => allGridItems.filter((s) => byText(s) && byState(s)),
    [allGridItems, q, stateFilter]
  );

  // Unique state list for dropdown
  const allStatesForDropdown = useMemo(() => {
    const set = new Set<string>();
    allGridItems.forEach((s) => set.add(s.name));
    return ["All States", ...Array.from(set)];
  }, [allGridItems]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        {!initialData ? (
          <div className="text-center text-red-600">
            Failed to load CLRA Applicability.
          </div>
        ) : (
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

            {/* Main Content */}
            <div className="lg:col-span-4 lg:order-1 order-2">
              {/* Page Header */}
              <div className="mb-4">
                <div className="mb-4">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                 CLRA Applicability :
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                    Learn in detail about CLRA applicability rules covering weekly offs,
                  , overtime, rest breaks, and duty limits. Employers can create fair
                    work policies while employees benefit from proper work-life balance and legal protection.
                  </p>
                </div>

                {/* 🔎 Search + State Filter */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <SearchAndStateFilter
                    searchValue={q}
                    stateValue={stateFilter}
                    onSearchChange={setQ}
                    onStateChange={setStateFilter}
                    isPending={false}
                    states={allStatesForDropdown.map((name) => ({ label: name, value: name }))}
                  />
                </div>
              </div>

              {/* States Grid (same design language as your reference) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
                {filteredStates.map((s) => {
                  const CardInner = (
                    <div
                      className={[
                        "bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg",
                        "overflow-hidden hover:shadow-md transition-shadow",
                        s.available ? "cursor-pointer" : "opacity-60 cursor-not-allowed",
                      ].join(" ")}
                    >
                      <div className="p-2 sm:p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <h3
                              className={[
                                "text-xs sm:text-sm font-semibold mb-1 sm:mb-2 line-clamp-2 leading-tight",
                                "min-h-[24px] sm:min-h-[28px] lg:min-h-[35px]",
                                s.available ? "text-slate-800" : "text-slate-500",
                              ].join(" ")}
                            >
                              {s.name}
                            </h3>
                            {!s.available && (
                              <span className="inline-block text-[10px] sm:text-xs text-orange-700 bg-orange-200/60 rounded px-1.5 py-0.5">
                                Coming soon
                              </span>
                            )}
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <div
                              className={[
                                "w-6 h-6 rounded-full flex items-center justify-center",
                                s.available ? "bg-orange-500" : "bg-orange-300",
                              ].join(" ")}
                            >
                              <ChevronRight className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  // clickable only if available/applicable
                  return s.available ? (
                    <Link
                      key={s.slug}
                      href={`/leaves-working-hours-details/${s.slug}`}
                      aria-label={`${s.name} leave & working hours`}
                    >
                      {CardInner}
                    </Link>
                  ) : (
                    <div key={s.slug} aria-label={`${s.name} coming soon`}>
                      {CardInner}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

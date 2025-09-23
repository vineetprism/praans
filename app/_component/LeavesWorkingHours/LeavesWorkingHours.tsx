"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
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

  // Filters
  const searchNeedle = q.trim().toLowerCase();
  const byText = (s: StateItem) =>
    !searchNeedle ||
    s.state_name.toLowerCase().includes(searchNeedle) ||
    s.state_slug.toLowerCase().includes(searchNeedle);

  const byState = (s: StateItem) => stateFilter === "All States" || s.state_name === stateFilter;

  const filteredApplicable = useMemo(
    () => (data.applicable ?? []).filter((s) => byText(s) && byState(s)),
    [data, q, stateFilter]
  );

  const filteredNonApplicable = useMemo(
    () => (data.non_applicable ?? []).filter((s) => byText(s) && byState(s)),
    [data, q, stateFilter]
  );

  // Unique state list for dropdown
  const allStates = useMemo(() => {
    const map = new Map<string, string>();
    [...data.applicable, ...data.non_applicable].forEach((s) => {
      if (!map.has(s.state_name)) map.set(s.state_name, s.state_name);
    });
    return ["All States", ...Array.from(map.keys())];
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        {!initialData ? (
          <div className="text-center text-red-600">
            Failed to load Leave &amp; Working Hours data.
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                      Leave &amp; Working Hours :
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                      "Statutory Leave" ensures a healthy work-life balance and boosts employee motivation levels.
                      "Working Hours" regulations define the laboring time an employee is expected to work in exchange
                      for pay as enumerated by Labour Codes.
                    </p>
                  </div>
                </div>

                {/* 🔎 Search + State Filter (local filter, same pattern as WelfareFund) */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <SearchAndStateFilter
                    searchValue={q}
                    stateValue={stateFilter}
                    onSearchChange={setQ}
                    onStateChange={setStateFilter}
                    isPending={false}
                    states={allStates?.map((n) => ({ label: n, value: n }))} // if your component needs options
                  />
                </div>
              </div>

              {/* Listing */}
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>Leave &amp; Working Hours For States Across India</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Applicable States */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Applicable States</h3>
                        <span className="text-xs text-gray-500">{filteredApplicable?.length} results</span>
                      </div>

                      {filteredApplicable?.length === 0 ? (
                        <div className="p-3 rounded-lg border bg-amber-50 text-amber-800 text-sm">
                          No applicable states found right now.
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {filteredApplicable?.map((s, index) => (
                            <Link
                              key={s?.id}
                              href={`/leaves-working-hours-details/${s?.state_slug}`}
                              aria-label={`Go to ${s?.state_name} leaves and working hours`}
                              className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors"
                            >
                              <span className="text-blue-600 hover:text-orange-600 transition-colors">
                                {index + 1}. {s?.state_name}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Non-Applicable States */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Non-Applicable States</h3>
                        <span className="text-xs text-gray-500">{filteredNonApplicable?.length} results</span>
                      </div>

                      {filteredNonApplicable?.length === 0 ? (
                        <div className="p-3 rounded-lg border bg-gray-50 text-gray-600 text-sm">
                          No non-applicable states listed.
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {filteredNonApplicable?.map((s, index) => (
                            <div key={s?.id} className="p-3 rounded-lg border bg-gray-50">
                              <span className="text-gray-600">
                                {index + 1}. {s?.state_name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card>
                  <CardContent>
                    <PopularSearch className="mb-6" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

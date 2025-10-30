"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

type StateHoliday = {
  id: number;
  state: string;
  state_slug: string;
  is_applicable: boolean;
  updated_date: string;
  notes: string;
};

type NFHApi = {
  applicable_states_count: number;
  non_applicable_states_count: number;
  applicable_states: StateHoliday[];
  non_applicable_states: StateHoliday[];
};

type Props = {
  initialData: NFHApi | null;
  apiBase: string;
  enableFilters?: boolean;
};

export default function NationalFestivalHolidays({
  initialData,
  enableFilters = true,
}: Props) {
  const [q, setQ] = useState<string>("");
  const [stateFilter, setStateFilter] = useState<string>("All States");

  const applicableStates = initialData?.applicable_states ?? [];
  const nonApplicableStates = initialData?.non_applicable_states ?? [];

  const pageDescription =
    applicableStates?.[0]?.notes ||
    "National festivals are celebrations that reflect India's rich cultural diversity, religious traditions, and historical significance. They bring communities together and are officially recognized as public holidays across different states and regions.";

  const transformedApplicableStates = applicableStates.map((state) => ({
    name: state.state,
    slug: state.state_slug,
  }));

  const transformedNonApplicableStates = nonApplicableStates.map((state) => ({
    name: state.state,
    slug: state.state_slug,
  }));

  const stateOptions = useMemo(() => {
    const all = new Set<string>(["All States"]);
    transformedApplicableStates.forEach((s) => s?.name && all.add(s.name));
    transformedNonApplicableStates.forEach((s) => s?.name && all.add(s.name));
    return Array.from(all)
      .sort((a, b) => a.localeCompare(b))
      .map((s) => ({ label: s, value: s }));
  }, [transformedApplicableStates, transformedNonApplicableStates]);

  const filteredApplicableStates = useMemo(() => {
    const term = q.trim().toLowerCase();
    return transformedApplicableStates.filter((s) => {
      const byText = s.name.toLowerCase().includes(term);
      const byPick = stateFilter === "All States" || s.name === stateFilter;
      return byText && byPick;
    });
  }, [transformedApplicableStates, q, stateFilter]);

  const filteredNonApplicableStates = useMemo(() => {
    const term = q.trim().toLowerCase();
    return transformedNonApplicableStates.filter((s) => {
      const byText = s.name.toLowerCase().includes(term);
      const byPick = stateFilter === "All States" || s.name === stateFilter;
      return byText && byPick;
    });
  }, [transformedNonApplicableStates, q, stateFilter]);

  const hasError = initialData === null;
  const isEmpty =
    !hasError &&
    transformedApplicableStates.length === 0 &&
    transformedNonApplicableStates.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                    National & Festival Holidays :
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Discover the importance of National & Festival Holidays and
                    their legal requirements for businesses. Ensure compliance
                    with labour laws while giving employees their entitled
                    holidays, fostering harmony, productivity, and workplace
                    balance.
                  </p>
                </div>
              </div>
            </div>
            {enableFilters && (
              <div className="mb-6 sm:mb-8 md:mb-10">
                <SearchAndStateFilter
                  searchValue={q}
                  stateValue={stateFilter}
                  onSearchChange={setQ}
                  onStateChange={setStateFilter}
                  isPending={false}
                  states={stateOptions}
                />
              </div>
            )}

            {hasError && (
              <div className="mb-6 text-sm text-red-600">
                Couldn&apos;t load holiday data. Please try again later.
              </div>
            )}
            {isEmpty && !hasError && (
              <div className="mb-6 text-sm text-gray-600">
                No holiday data available at the moment.
              </div>
            )}

            {!hasError && !isEmpty && (
              <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl">
                    State-wise Holiday Matrix
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-col gap-10">
                    {/* ✅ Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Applicable States ({filteredApplicableStates?.length})
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredApplicableStates?.length === 0 && (
                          <div className="text-sm text-gray-600">
                            No applicable states found.
                          </div>
                        )}

                        {filteredApplicableStates?.map((state, index) => (
                          <Link
                            key={state?.slug}
                            href={`/national-festival-holidays-details/${state?.slug}`}
                            aria-label={`View ${state?.name} details`}
                          >
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:border-orange-300 hover:shadow-md rounded-lg p-4 flex items-center justify-between ">
                              {/* Left Section */}
                              <div className="flex-1">
                                <p className="font-semibold text-slate-800 text-sm mb-1">
                                  {index + 1}. {state?.name}
                                </p>
                              </div>

                              {/* Right Arrow Icon */}
                              <div className="flex-shrink-0 ml-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center ">
                                  <ChevronRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 🚫 Non-Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Non-Applicable States (
                        {filteredNonApplicableStates?.length})
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredNonApplicableStates?.length === 0 && (
                          <div className="text-sm text-gray-600">
                            No non-applicable states found.
                          </div>
                        )}

                        {filteredNonApplicableStates?.map((state, index) => (
                          <div
                            key={state?.slug}
                            className="bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg p-4 flex items-center justify-between hover:shadow-md"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 text-sm mb-1">
                                {index + 1}. {state?.name}
                              </p>
                            </div>

                            <div className="flex-shrink-0 ml-3">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
                                <ChevronRight className="w-4 h-4 text-white" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

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






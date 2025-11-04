

"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page"; // Import your search filter component
import PopularSearch from "@/app/PopularSearch/PopularSearch";

type SEState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
};

type SEResponse = {
  applicable_states_count: number;
  applicable_states: SEState[];
};

export default function SEApplicability({
  initialData,
}: {
  initialData: SEResponse | null;
}) {
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");

  const data: SEResponse = initialData ?? {
    applicable_states_count: 0,
    applicable_states: [],
  };

  const searchNeedle = q.trim().toLowerCase();
  const byText = (s: SEState) =>
    !searchNeedle ||
    s.state_name.toLowerCase().includes(searchNeedle) ||
    s.state_slug.toLowerCase().includes(searchNeedle);

  const byState = (s: SEState) =>
    stateFilter === "All States" || s.state_name === stateFilter;

  const filteredStates = useMemo(
    () => (data.applicable_states ?? []).filter((s) => byText(s) && byState(s)),
    [data, q, stateFilter]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full max-w-none mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {!initialData ? (
          <div className="text-center text-red-600">
            Failed to load S&E Applicability data.
          </div>
        ) : (
          <>
            {/* Popular Search (mobile) */}
            <div className="lg:hidden mb-3 sm:mb-4 w-full">
              <Card className="shadow-sm w-full">
                <CardContent className="p-2 sm:p-3">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>

            <div className="w-full grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
              <div className="w-full lg:col-span-3 min-w-0">
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-800 mb-2">
                        S&E Applicability:
                      </h1>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                        S&E Applicability refers to the extent to which the S&E
                        Act (or Labour Law related to Safety & Environmental
                        standards) applies to a particular organization or
                        industry. It outlines the obligations and compliance
                        requirements that businesses must adhere to, ensuring
                        worker safety, environmental protection, and legal
                        adherence.{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6 sm:mb-8 md:mb-10">
                  <SearchAndStateFilter
                    searchValue={q}
                    stateValue={stateFilter}
                    onSearchChange={setQ}
                    onStateChange={setStateFilter}
                    isPending={false}
                  />
                </div>

                {/* State-wise Applicability */}
                <Card className="mb-8 border-l-4 border-l-orange-500 shadow-sm">
                  {/* <CardHeader className="pb-1 lg:pb-2">
                    <CardTitle className="text-base lg:text-lg font-bold">
                      State-wise Applicability :
                    </CardTitle>
                  </CardHeader> */}
                  <CardContent className="p-3 sm:p-4 lg:p-5">
                    {filteredStates?.length === 0 ? (
                      <p className="text-sm text-gray-500 text-center py-6">
                        No matching states found.
                      </p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {filteredStates.map((s) => (
                          <Link
                            key={s.state_slug}
                            href={`/applicability-se-act/applicability-details/${s.state_slug}`}
                            aria-label={s.state_name}
                          >
                            <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-3 sm:p-4 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer">
                              <h3 className="text-sm sm:text-base font-semibold text-slate-800 leading-tight line-clamp-2">
                                {s.state_name}
                              </h3>
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar - Popular Search */}
              <div className="hidden lg:block w-full">
                <div className="sticky top-2 lg:top-3 w-full">
                  <Card className="shadow-sm hover:shadow-md transition-shadow w-full">
                    <CardContent className="p-2 lg:p-3 xl:p-4">
                      <PopularSearch className="mb-0" />
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

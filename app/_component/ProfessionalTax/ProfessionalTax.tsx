"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Calculator, Users, IndianRupee, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

type ApplicableState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date: string | null;
  effective_date: string | null;
  max_rate: number | null;
  slabs: number | null;
};

type PTApi = {
  applicable_count: number;
  non_applicable_count: number;
  maximum_rate: number | null;
  applicable_states: ApplicableState[];
  non_applicable_states: string[];
};

type Props = {
  initialData: PTApi | null; // ISR server se aaya payload
  apiBase: string;           // future use (links, images etc.)
  enableFilters?: boolean;   // feature flag
};

export default function ProfessionalTax({
  initialData,
  apiBase,
  enableFilters = true,
}: Props) {
  // UI state
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All States");

  const applicableStates = initialData?.applicable_states ?? [];
  const nonApplicableStates = initialData?.non_applicable_states ?? [];
  const applicableCount = initialData?.applicable_count ?? 0;
  const maximumRate = initialData?.maximum_rate ?? 0;

  // Dropdown options from API
  const stateOptions = useMemo(
    () => ["All States", ...applicableStates.map((s) => s.state_name)],
    [applicableStates]
  );

  // filtering
  const filteredApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return applicableStates.filter((s) => {
      const byText = s.state_name.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || s.state_name === selectedState;
      return byText && byPick;
    });
  }, [applicableStates, query, selectedState]);

  const filteredNonApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return nonApplicableStates.filter((name) => {
      const byText = name.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || name === selectedState;
      return byText && byPick;
    });
  }, [nonApplicableStates, query, selectedState]);

  const quickActionCards = [
    {
      title: "PT Calculator",
      icon: Calculator,
      action: "View Calculator",
      link: "/calculators/professional-tax",
    },
    {
      title: "Intrest & Penality Calculator",
      icon: Calculator,
      action: "View AI Tool",
      link: "/ai-tools/pt-calculator",
    },
  ];

  // Empty/error states (props-based)
  const hasError = initialData === null;
  const isEmpty =
    !hasError &&
    applicableStates.length === 0 &&
    nonApplicableStates.length === 0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                    Professional Tax :
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Professional Tax is a state-level tax levied on all persons
                    earning income through employment, profession, or calling.
                    It is governed by individual state legislation and varies
                    across states in terms of rates, slabs, and compliance
                    requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
                <CardContent className="p-6 ">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {applicableCount}
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Maximum Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{(maximumRate ?? 0).toLocaleString("en-IN")}
                      </p>
                    </div>
                    <IndianRupee className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              {quickActionCards?.map((card, index) => (
                <Card key={index} className="border-l-4 border-l-orange-500 lg:h-40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {card?.title}
                        </p>
                      </div>
                      <card.icon className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                    </div>
                    <Link href={card?.link} aria-label="View Calculator">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-orange-400 text-white hover:text-orange-600 hover:cursor-pointer"
                        aria-label="View Calculator"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        {card?.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filters via reusable component */}
            {enableFilters && (
              <div className="mb-6 sm:mb-8 md:mb-10">
                <SearchAndStateFilter
                  stateOptions={stateOptions}
                  placeholder="Search by state..."
                  defaultState="All States"
                  onSearchChange={setQuery}
                  onStateChange={setSelectedState}
                />
              </div>
            )}

            {/* Error / Empty */}
            {hasError && (
              <div className="mb-6 text-sm text-red-600">
                Couldn&apos;t load data. Please try again later.
              </div>
            )}
            {isEmpty && !hasError && (
              <div className="mb-6 text-sm text-gray-600">
                No states available at the moment.
              </div>
            )}

            {!hasError && !isEmpty && (
              <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle>State-wise Applicability :</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Applicable States
                      </h3>
                      <div className="space-y-3">
                        {filteredApplicable?.length === 0 && (
                          <div className="text-sm text-gray-600">No states found.</div>
                        )}
                        {filteredApplicable?.map((state, index) => (
                          <Link
                            key={state?.state_slug}
                            href={`/professional-tax-details/${state?.state_slug}`}
                            aria-label={`View ${state?.state_name}`}
                          >
                            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                              <div>
                                <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                  {index + 1}. {state?.state_name}
                                </span>
                                <div className="text-sm text-gray-700">
                                  Max Rate: ₹{(state?.max_rate ?? 0).toLocaleString("en-IN")} |{" "}
                                  {state?.slabs ?? 0} Slabs
                                </div>
                              </div>
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Applicable
                              </Badge>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Non-Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Non-Applicable States
                      </h3>
                      <div className="space-y-3">
                        {filteredNonApplicable?.length === 0 && (
                          <div className="text-sm text-gray-600">No states found.</div>
                        )}
                        {filteredNonApplicable?.map((name, index) => (
                          <div
                            key={name}
                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                          >
                            <span className="text-gray-700">
                              {index + 1}. {name}
                            </span>
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                              Not Applicable
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
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

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Users,
  IndianRupee,
  Eye,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

// ---------- Types ----------
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
  non_applicable_states: ApplicableState[];
};

type Props = {
  initialData: PTApi | null;
  apiBase: string;
  enableFilters?: boolean;
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

  // ✅ FIXED Dropdown options
  const stateOptions = useMemo(() => {
    const all: string[] = ["All States"];

    // From applicable states
    applicableStates.forEach((s) => {
      if (s?.state_name) all.push(s.state_name);
    });

    // From non-applicable states
    nonApplicableStates.forEach((s) => {
      if (s?.state_name) all.push(s.state_name);
    });

    return Array.from(new Set(all)) // deduplicate
      .filter((s) => typeof s === "string")
      .sort((a, b) => a.localeCompare(b))
      .map((s) => ({ label: s, value: s }));
  }, [applicableStates, nonApplicableStates]);

  // ✅ filtering
  const filteredApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return applicableStates.filter((s) => {
      const byText = s?.state_name?.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || s?.state_name === selectedState;
      return byText && byPick;
    });
  }, [applicableStates, query, selectedState]);

  const filteredNonApplicable = useMemo(() => {
    const term = query.trim().toLowerCase();
    return nonApplicableStates.filter((s) => {
      const byText = s?.state_name?.toLowerCase().includes(term);
      const byPick =
        selectedState === "All States" || s?.state_name === selectedState;
      return byText && byPick;
    });
  }, [nonApplicableStates, query, selectedState]);

  const quickActionCards = [
    {
      title: "PT Calculator",
      icon: Calculator,
      action: "View Calculator",
      link: "/professional-tax-calculator",
    },
    {
      title: "Intrest & Penality Calculator",
      icon: Calculator,
      action: "View AI Tool",
      link: "/interest&penalitycalculator",
    },
  ];

  // Empty/error states
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
                    Gain complete clarity on Professional Tax, its
                    applicability, calculation, and payment methods. Know who
                    should pay, how to comply with state-specific rules, and
                    avoid penalties while ensuring hassle-free and accurate
                    statutory compliance.
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
                <Card
                  key={index}
                  className="border-l-4 border-l-orange-500 lg:h-40"
                >
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

            {/* Filters */}
            {enableFilters && (
              <div className="mb-6 sm:mb-8 md:mb-10">
                <SearchAndStateFilter
                  searchValue={query}
                  stateValue={selectedState}
                  onSearchChange={setQuery}
                  onStateChange={setSelectedState}
                  isPending={false}
                  states={stateOptions}
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
                  <div className="flex flex-col gap-10">
                    {/* ✅ Applicable States Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Applicable States :
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredApplicable?.length === 0 && (
                          <div className="text-sm text-gray-600">
                            No states found.
                          </div>
                        )}

                        {filteredApplicable?.map((state, index) => (
                          <Link
                            key={state?.state_slug}
                            href={`/professional-tax-details/${state?.state_slug}`}
                            aria-label={`View ${state?.state_name}`}
                          >
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 hover:border-orange-300 hover:shadow-md rounded-lg p-4 flex items-center justify-between transition-all duration-200">
                              {/* Left Text Section */}
                              <div className="flex-1">
                                <p className="font-semibold text-slate-800 text-sm mb-1">
                                  {index + 1}. {state?.state_name}
                                </p>
                                <p className="text-xs text-gray-700">
                                  Max Rate: ₹
                                  {(state?.max_rate ?? 0).toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  | {state?.slabs ?? 0} Slabs
                                </p>
                              </div>

                              {/* Orange Circular Icon */}
                              <div className="flex-shrink-0 ml-3">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                  <ChevronRight className="w-4 h-4 text-white" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* 🚫 Non-Applicable States Section */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Non-Applicable States :
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredNonApplicable?.length === 0 && (
                          <div className="text-sm text-gray-600">
                            No states found.
                          </div>
                        )}

                        {filteredNonApplicable?.map((state, index) => (
                          <div
                            key={state?.state_slug}
                            className="bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all duration-200"
                          >
                            <div className="flex-1">
                              <p className="font-medium text-gray-800 text-sm mb-1">
                                {index + 1}. {state?.state_name}
                              </p>
                            </div>

                            <div className="flex-shrink-0 ml-3">
                              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-500 rounded-full flex items-center justify-center">
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

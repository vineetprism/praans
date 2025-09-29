"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";

type MinimumWageItem = {
  state: string;
  state_slug: string;
  updated_date: string;
  effective_date: string;
};

type Props = { items: MinimumWageItem[] };

export default function MinimumWages({ items }: Props) {
  const [query, setQuery] = useState("");
  const [selectedState, setSelectedState] = useState<string>("All States");

  const states = useMemo(() => {
    const s = Array.from(new Set(items.map((x) => x.state))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["All States", ...s];
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((x) => {
      const matchState =
        selectedState === "All States" || x.state === selectedState;
      const matchQuery =
        !q || x.state.toLowerCase().includes(q) || x.state_slug.includes(q);
      return matchState && matchQuery;
    });
  }, [items, query, selectedState]);

  const stateOptions = useMemo(() => {
    const uniq = Array.from(new Set(items.map((x) => x.state))).sort((a, b) =>
      a.localeCompare(b)
    );
    const list = ["All States", ...uniq];
    return list.map((s) => ({ label: s, value: s }));
  }, [items]);

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <div className="lg:hidden mb-4 sm:mb-5 md:mb-6">
          <Card className="shadow-sm w-full">
            <CardContent className="p-3 sm:p-4">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4 xl:gap-8 w-full">
          <div className="lg:col-span-3 2xl:col-span-3 w-full">
            <div className="mb-6 sm:mb-7 md:mb-8">
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3 leading-tight">
                    Minimum Wages :
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Minimum wages wo lowest remuneration hoti hai jo employer ko
                    legally deni hoti hai. Central/State Governments scheduled
                    employments ke liye rates notify karti rehti hain.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 sm:mb-8 md:mb-10 w-full">
              <SearchAndStateFilter
                searchValue={query}
                stateValue={selectedState}
                onSearchChange={setQuery}
                onStateChange={setSelectedState}
                isPending={false}
                states={stateOptions}
              />
            </div>

            <div className="block sm:hidden space-y-3 mb-6 w-full">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                State-wise Wages :
              </h2>

              {filtered?.map((w, idx) => (
                <div
                  key={`${w?.state_slug}-${idx}`}
                  className="bg-orange-300 rounded-lg border border-gray-200 p-4 shadow-sm w-full"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-900 mb-2">
                        {w?.state}
                      </h3>
                      <div className="text-xs text-black space-y-1">
                        <div>Updated Date: {w?.updated_date}</div>
                        <div>Effective Date: {w?.effective_date}</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-orange-400"
                        asChild
                        aria-label="view details"
                      >
                        <Link
                          key={w?.state_slug}
                          href={`/minimum-wages/minimum-wages-details/${w?.state_slug}`}
                          aria-label="view details"
                        >
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet Card View (full width) */}
            <div className="hidden sm:block md:hidden space-y-1 mb-2 w-full">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                State-wise Wages :
              </h2>

              {filtered?.map((w, idx) => (
                <div
                  key={`${w?.state_slug}-${idx}`}
                  className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm w-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-gray-900 mb-1">
                          {w?.state}
                        </h3>
                        <div className="text-sm text-gray-600 flex flex-wrap gap-4">
                          <span>Updated Date: {w?.updated_date}</span>
                          <span>Effective Date: {w?.effective_date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-400 text-white"
                        asChild
                        aria-label="view details"
                      >
                        <Link
                          href={`/minimum-wages/minimum-wages-details/${w?.state_slug}`}
                          aria-label="view details"
                        >
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View (full width) */}
            <section className="hidden md:block w-full">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                State-wise Wages :
              </h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-orange-500">
                      <tr>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          State
                        </th>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Updated Date
                        </th>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Effective Date
                        </th>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filtered?.map((w, idx) => (
                        <tr
                          key={`${w?.state_slug}-${idx}`}
                          className="hover:bg-orange-50"
                        >
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm font-medium text-gray-900">
                              {w?.state}
                            </div>
                          </td>
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm text-gray-700">
                              {w?.updated_date}
                            </div>
                          </td>
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm text-gray-700">
                              {w?.effective_date}
                            </div>
                          </td>
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap text-xs md:text-xs lg:text-sm font-medium">
                            <Button
                              variant="outline"
                              size="sm"
                              aria-label="view details"
                              className="text-white bg-orange-400 hover:text-orange-600 text-xs px-2 py-1 h-7"
                              asChild
                            >
                              <Link
                                href={`/minimum-wages/minimum-wages-details/${w?.state_slug}`}
                                aria-label="view details"
                              >
                                View Details
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}

                      {filtered?.length === 0 && (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-4 py-6 text-center text-sm text-gray-500"
                          >
                            No results found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Popular Search (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1 w-full">
            <div className="sticky top-2 lg:top-3">
              <Card className="shadow-sm hover:shadow-md transition-shadow w-full">
                <CardContent className="p-2 lg:p-3 xl:p-4">
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

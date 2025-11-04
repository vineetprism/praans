"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import FaqMinimumWages from "./FaqMinimumWages";

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
                    Get detailed insights on Minimum Wages and their
                    industry-specific applicability. Ensure fair employee pay as
                    per state rules, stay updated with official revisions, and
                    help employers remain compliant while supporting workers’
                    financial security.
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    In India, it is legally mandated for an employer to pay
                    minimum remuneration to its employee. Each state has its own
                    minimum wage, as it will ensure the protection of employees
                    against exploitation and ensure basic living standards. It
                    is governed by the minimum wages act, 1948; it covers both
                    organized and unorganized sectors. It included skilled,
                    unskilled, and semi-skilled labourers.{" "}
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
                  className=" rounded-lg border border-gray-200 p-4 shadow-sm w-full"
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
                        className="text-xs text-white bg-orange-400"
                        asChild
                        aria-label="view details"
                      >
                        <Link
                          href={`/minimum-wages-details/${w?.state_slug}`}
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
                          href={`/minimum-wages-details/${w?.state_slug}`}
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

              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full ">
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-orange-500">
                      <tr>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white border-r border-orange-400 ">
                          State
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white border-r border-orange-400">
                          Updated Date
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white border-r border-orange-400">
                          Effective Date
                        </th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-white">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filtered?.map((w, idx) => (
                        <tr
                          key={`${w?.state_slug}-${idx}`}
                          className="hover:bg-orange-50 transition-all border-b border-orange-500 text-center"
                        >
                          <td className="px-4 py-3 text-sm text-gray-900 font-medium border-r border-orange-500">
                            {w?.state}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r border-orange-500">
                            {w?.updated_date}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r border-orange-500">
                            {w?.effective_date}
                          </td>
                          <td className="px-4 py-3 text-sm font-medium text-center">
                            <Button
                              variant="outline"
                              size="sm"
                              aria-label="view details"
                              className="text-white bg-orange-400 hover:bg-orange-500 hover:text-white hover:shadow-md text-xs px-3 py-2 h-7"
                              asChild
                            >
                              <Link
                                href={`/minimum-wages-details/${w?.state_slug}`}
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
        <div className="mb-8 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-full">
              <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851] mb-4 mt-8">
                Minimum Wages in India
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-8">
                In India, it is legally mandated for an employer to pay minimum
                remuneration to its employees. Each state has its own minimum
                wage, ensuring protection of employees against exploitation and
                guaranteeing basic living standards. It is governed by the
                <strong> Minimum Wages Act, 1948</strong>, covering both
                organized and unorganized sectors, including skilled, unskilled,
                and semi-skilled labourers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Key Features of Minimum Wages in India
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      Provides <strong>legal protection</strong> against
                      exploitation and non-payment; violations lead to penalties
                      under the law.
                    </li>
                    <li>
                      <strong>Revised periodically</strong> by both state and
                      central governments to align with inflation, cost of
                      living, and economic conditions.
                    </li>
                    <li>
                      <strong>Sector-specific wages</strong> — they differ based
                      on sector, skill level, region, and job type.
                    </li>
                    <li>
                      The <strong>state government</strong> fixes wages for
                      local establishments, and the{" "}
                      <strong>central government</strong> handles industries
                      under its jurisdiction.
                    </li>
                    <li>
                      Payments must be made via{" "}
                      <strong>cash or bank transfer</strong> at regular
                      intervals, usually monthly.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Importance of Minimum Wages
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      Prevents <strong>exploitation</strong> by ensuring fair
                      pay for all workers.
                    </li>
                    <li>
                      Encourages <strong>social justice</strong> and reduces
                      inequality among workers.
                    </li>
                    <li>
                      Boosts <strong>productivity</strong> and motivation among
                      employees.
                    </li>
                    <li>
                      Supports <strong>economic stability</strong> by ensuring
                      fair distribution of income.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Minimum Wage Determination
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-2">
                    Determination of minimum wages involves several critical
                    factors:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      Based on the <strong>cost of living</strong> to cover
                      basic needs of workers.
                    </li>
                    <li>
                      Depends on the <strong>skill level</strong> of the worker.
                    </li>
                    <li>
                      Varies depending on the <strong>type of industry</strong>;
                      riskier jobs often have higher wages.
                    </li>
                    <li>
                      It is <strong>state-specific</strong> — fixed based on
                      recommendations by respective states.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Components of Minimum Wages
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      <strong>Basic Pay:</strong> Core wage forming the
                      foundation for all allowances.
                    </li>
                    <li>
                      <strong>Dearness Allowance (DA):</strong> Adjusted to
                      match inflation and cost of living.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] mt-3">
                    <strong>Formula:</strong> Minimum Wage = Basic Pay +
                    Dearness Allowance (DA)
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] mt-2 italic">
                    Note: Other allowances like HRA or conveyance are optional
                    and not part of minimum wages.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Minimum Wage Revision (2025)
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-2">
                    The revision of wages is state-specific and ensures
                    alignment with inflation and living costs under the{" "}
                    <strong>Minimum Wages Act, 1948</strong>. Most states revise
                    wages half-yearly, adjusting dearness allowance biannually
                    and basic wages every 3–5 years.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Compliance and Penalties
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>Every employer must comply with minimum wage laws.</li>
                    <li>
                      Non-compliance can lead to <strong>imprisonment</strong>{" "}
                      in severe cases.
                    </li>
                    <li>
                      Employees can <strong>legally claim recovery</strong> of
                      unpaid wages.
                    </li>
                    <li>
                      Initial violations may attract fines from{" "}
                      <strong>₹5,000 to ₹10,000</strong>.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FaqMinimumWages />
      </div>
    </div>
  );
}

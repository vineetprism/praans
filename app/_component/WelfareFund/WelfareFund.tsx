"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  XCircle,
  Calculator,
  CalculatorIcon,
  Eye,
  MapPin,
  ChevronRight,
} from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import Faq from "./Faq";

type WFState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date?: string | null;
  effective_date?: string | null;
};

type WFResponse = {
  applicable_count: number;
  non_applicable_count: number;
  applicable_states: WFState[];
  non_applicable_states: WFState[];
};

export default function WelfareFund({
  initialData,
}: {
  initialData: WFResponse | null;
}) {
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState("All States");

  const data: WFResponse = initialData ?? {
    applicable_count: 0,
    non_applicable_count: 0,
    applicable_states: [],
    non_applicable_states: [],
  };

  const searchNeedle = q.trim().toLowerCase();
  const byText = (s: WFState) =>
    !searchNeedle ||
    s.state_name.toLowerCase().includes(searchNeedle) ||
    s.state_slug.toLowerCase().includes(searchNeedle);

  const byState = (s: WFState) =>
    stateFilter === "All States" || s.state_name === stateFilter;

  const filteredApplicable = useMemo(
    () => (data.applicable_states ?? []).filter((s) => byText(s) && byState(s)),
    [data, q, stateFilter]
  );

  const filteredNonApplicable = useMemo(
    () =>
      (data.non_applicable_states ?? []).filter((s) => byText(s) && byState(s)),
    [data, q, stateFilter]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        {!initialData ? (
          <div className="text-center text-red-600">
            Failed to load Labour Welfare Fund data.
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">
                      Labour Welfare Fund :
                    </h1>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                      Understand the Labour Welfare Fund and how it safeguards
                      employees’ well-being. Learn about its benefits,
                      contributions, and the role it plays in providing
                      financial security, better facilities, and overall welfare
                      for workers and their families.
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                      Each state government managed its labour welfare fund
                      (LWF), Employers, employees and in certain states the
                      government of that state contribute to the Labour welfare
                      Fund. The objective of this is to offer and take care of
                      well-being to workers and their dependents in unorganized
                      and organized sectors.
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                      The state specific Labour welfare fund act governed the
                      Labour welfare fund of it’s the state, which is different
                      from the central ESI and EPF. Each state and union
                      territories have their own Labour Welfare Fund rules,
                      applicability, rates and benefits.{" "}
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

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Applicable States
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {data?.applicable_count}
                        </p>
                      </div>
                      <CheckCircle className="w-8 h-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Non-Applicable
                        </p>
                        <p className="text-2xl font-bold text-gray-900">
                          {data?.non_applicable_count}
                        </p>
                      </div>
                      <XCircle className="w-8 h-8 text-red-600" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl text-gray-900 pb-4">
                          LWF Calculator
                        </p>
                      </div>
                      <Calculator className="w-8 h-8 text-orange-600" />
                    </div>
                    <Link href="/tools/compliance-checker">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
                        aria-label="View LWF Calculator"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                  <CardContent className="px-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xl text-gray-900">
                          Interest & Penalty Calculator
                        </p>
                      </div>
                      <CalculatorIcon className="w-14 h-14 text-orange-600" />
                    </div>
                    <Link href="/tools/compliance-checker">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
                        aria-label="View Interest & Penalty Calculator"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              {/* State-wise Applicability */}
              <Card className="mb-8 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle>State-wise Applicability :</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* ✅ Applicable States */}
                  <div className="mb-10">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States :
                    </h3>

                    {filteredApplicable?.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        No matching states.
                      </p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {filteredApplicable.map((s) => (
                          <Link
                            key={s.state_slug}
                            href={`/labour-welfare-fund-details/${s.state_slug}`}
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
                  </div>

                  {/* ✅ Non-Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Non-Applicable States :
                    </h3>

                    {filteredNonApplicable?.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        No matching states.
                      </p>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                        {filteredNonApplicable.map((s) => (
                          <div
                            key={s.state_slug}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 flex items-center justify-between opacity-90"
                          >
                            <h3 className="text-sm sm:text-base font-semibold text-gray-700 leading-tight line-clamp-2">
                              {s.state_name}
                            </h3>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

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
        <div className="mb-8 max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div className="w-full">
              <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851] mb-4">
                What is Labour Welfare Fund?
              </h1>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-8">
                The Labour Welfare Fund is a statutory scheme that requires both
                Employers and employees in certain states the government of that
                state contribute to the Labour welfare Fund. The objective of
                this is to offer housing, medical care, educational, vocational
                training, transport subsidies, marriage, funeral expense and
                recreational facilities to workers and their dependents.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Labour Welfare Act (2025) Applicability:
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-2">
                    It is applicable in:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      16 states out of 37 States including Union Territories
                      (UT)
                    </li>
                    <li>
                      Factories, shops and commercial establishments, depending
                      on state rules.
                    </li>
                    <li>
                      Private companies and contractor establishments employing
                      both permanent and contract workers.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Contribution under Labour Welfare Fund in 2025
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-2">
                    Every state has its own rule for contribution and
                    contribution fixed. It generally includes:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      <strong>Employee contribution:</strong> A nominal amount
                      from its wages
                    </li>
                    <li>
                      <strong>Employer contribution:</strong> Often double or
                      thrice the employee's contribution
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Benefits of Labour Welfare Fund
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed mb-2">
                    The LWF ensures{" "}
                    <strong>social and economic development</strong> of workers
                    through multiple welfare activities. Key benefits include:
                  </p>
                  <ol className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      It provides <strong>education assistance</strong> by
                      providing scholarships to worker's wards.
                    </li>
                    <li>
                      It provides <strong>healthcare facilities</strong> by
                      subsidized or free maternity aid and medical treatments.
                    </li>
                    <li>
                      It provides <strong>the housing schemes</strong>{" "}
                      facilities by giving housing loans or low cost homes.
                    </li>
                    <li>
                      It helps in <strong>skill development</strong> by
                      providing training programs for workers and its
                      dependents.
                    </li>
                    <li>
                      By providing <strong>Recreational Facilities</strong> and
                      welfare societies.
                    </li>
                    <li>
                      It provides the <strong>financial help</strong> in case of
                      disability, death or accidents.
                    </li>
                  </ol>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b2851] mb-3">
                    Importance of Labour Welfare Fund in 2025
                  </h2>
                  <ul className="list-disc list-inside text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] ml-4 space-y-2">
                    <li>
                      Promotes{" "}
                      <strong>employee satisfaction and retention</strong>.
                    </li>
                    <li>
                      Provides <strong>social security</strong> in addition to
                      EPF and ESI.
                    </li>
                    <li>
                      Helps workers cope with inflation and rising living costs.
                    </li>
                    <li>Strengthens the employer-employee relationship.</li>
                    <li>
                      Improves the <strong>work-life balance</strong> of
                      industrial workers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
}

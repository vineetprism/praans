"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Globe, IndianRupee } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

/* ---------- Types ---------- */
type Row = Record<string, string | null>;
export type TableBlock = {
  title?: string | null;
  headers: string[];
  rows: Row[];
};
export type Tiles = {
  form_title?: string | null;
  form_url?: string | null;
  calculator_title?: string | null;
  calculator_url?: string | null;
  website_url?: string | null;
};
export type MWSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;   // e.g. "19-09-2025"
  effective_date?: string | null; // e.g. "20-09-2025"
  minimum_wage_rates: TableBlock;
  employment_categories_benefits: TableBlock;
  tiles?: Tiles;
};

/* ---------- URL helpers (same pattern as WF) ---------- */
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);

function normalizeUrl(input?: string | null, apiBase?: string): string | null {
  if (!input) return null;
  const val = input.trim();
  const API_ORIGIN = apiBase ? new URL(apiBase).origin : "";
  try {
    const u = new URL(val);
    if (LOCAL_HOSTS.has(u.hostname)) {
      return (API_ORIGIN || "") + u.pathname + u.search + u.hash;
    }
    return u.toString();
  } catch {
    if (!apiBase) return null;
    if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
    if (val.startsWith("storage/") || val.startsWith("/storage/")) {
      return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
    }
    return null;
  }
}

function fileNameFromUrl(u: string): string {
  try {
    const url = new URL(u);
    const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
    return last || "Download";
  } catch {
    return "Download";
  }
}

const cell = (row: Row, header: string) => row[header] ?? "—";
const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
const isSkilledCol = (h: string) => /skilled/i.test(h);

/* ---------- Component ---------- */
export default function MinimumWageDetails({
  data,
  apiBase,
}: {
  data: MWSlugData;
  apiBase: string;
}) {
  const mw = data.minimum_wage_rates;
  const cat = data.employment_categories_benefits;
  const tiles = data.tiles ?? {};

  // Tiles normalize
  const formUrlNorm = normalizeUrl(tiles.form_url, apiBase);
  const calcUrlNorm = normalizeUrl(tiles.calculator_url, apiBase);
  const websiteUrlNorm = normalizeUrl(tiles.website_url, apiBase);

  const formTitle = fmt(tiles.form_title);
  const formBtnLabel =
    formTitle !== "—"
      ? `Download ${formTitle}`
      : formUrlNorm
        ? fileNameFromUrl(formUrlNorm)
        : "Download";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className=" mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          <div className="lg:col-span-3">
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
                  Minimum Wages :
                </h1>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                {data?.state?.name}
              </h2>
            </div>

            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-orange-500">
                        {mw?.headers?.map((h, index) => (
                          <th
                            key={h}
                            className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mw?.rows?.map((r, idx) => (
                        <tr key={idx} className="hover:bg-orange-50 transition-colors">
                          {mw?.headers?.map((h, index) => (
                            <td
                              key={h}
                              className={`px-3 py-4 text-sm text-gray-900 break-words text-center ${isSkilledCol(h) ? "text-green-600 font-semibold" : ""
                                }`}
                            >
                              {fmt(cell(r, h))}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {mw?.rows?.length === 0 && (
                        <tr>
                          <td
                            colSpan={mw?.headers?.length || 1}
                            className="px-4 py-6 text-center text-sm text-gray-500"
                          >
                            No data available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Mobile */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">
                    {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {mw?.rows?.map((r, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
                      {mw?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex gap-2 justify-between p-2 rounded"
                        >
                          <span className="font-medium text-gray-600">{h}:</span>
                          <span className={`${isSkilledCol(h) ? "text-green-600 font-semibold" : ""}`}>
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {mw?.rows?.length === 0 && (
                    <div className="text-center text-sm text-gray-500">No data available.</div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Desktop */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Employment Categories & Additional Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-orange-500">
                        {cat?.headers?.map((h) => (
                          <th
                            key={h}
                            className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cat?.rows?.map((r, idx) => (
                        <tr key={idx} className="hover:bg-orange-50 transition-colors">
                          {cat?.headers?.map((h) => (
                            <td
                              key={h}
                              className={`px-3 py-4 text-sm text-gray-900 break-words text-center ${isSkilledCol(h) ? "text-green-600 font-semibold" : ""
                                }`}
                            >
                              {fmt(cell(r, h))}
                            </td>
                          ))}
                        </tr>
                      ))}
                      {cat?.rows?.length === 0 && (
                        <tr>
                          <td
                            colSpan={cat?.headers?.length || 1}
                            className="px-4 py-6 text-center text-sm text-gray-500"
                          >
                            No data available.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Mobile */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">
                    Employment Categories & Additional Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {cat?.rows?.map((r, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
                      {cat?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex gap-2 justify-between p-2 rounded"
                        >
                          <span className="font-medium text-gray-600">{h}:</span>
                          <span className={`${isSkilledCol(h) ? "text-green-600 font-semibold" : ""}`}>
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {cat?.rows?.length === 0 && (
                    <div className="text-center text-sm text-gray-500">No data available.</div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* --------- Quick Actions (same visual) --------- */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">
                    {formTitle !== "—" ? formTitle : "Download Notifications"}
                  </h3>
                  {formUrlNorm ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
                      aria-label={formBtnLabel}
                    >
                      <Link href={formUrlNorm} target="_blank" rel="noopener noreferrer" aria-label={formBtnLabel}>
                        {formBtnLabel}
                      </Link>
                    </Button>
                  ) : (
                    <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label={formBtnLabel}>
                      No Form Available
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Wage Calculator */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <IndianRupee className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Wage Calculator</h3>
                  {calcUrlNorm ? (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
                      aria-label="Open Calculator"
                    >
                      <Link href={calcUrlNorm} target="_blank" rel="noopener noreferrer" aria-label="Open Calculator">
                        Open Calculator
                      </Link>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label="Open Calculator">
                      Not Available
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Official Website */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Globe className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
                  {websiteUrlNorm ? (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
                      aria-label="Visit Website"
                    >
                      <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer" aria-label="Visit Website">
                        Visit Website
                      </Link>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label="Visit Website">
                      Not Available
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="2xl:w-xs hidden lg:block lg:col-span-1">
            <div className="sticky top-2 lg:top-3">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
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
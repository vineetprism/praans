



"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

type TableBlock = {
  headers: string[];
  rows: Record<string, string>[];
};

type Tiles = {
  form_title?: string | null;
  form_url?: string | null;
  website_title?: string | null;
  website_url?: string | null;
};

type StateData = {
  state: { name: string; slug: string };
  is_applicable: boolean;
  updated_date: string | null;
  effective_date: string | null;
  act_information: TableBlock;
  leave_entitlements: TableBlock;
  working_hours: TableBlock;
  tiles?: Tiles;
};

export default function LeavesWorkingHoursDetails({
  apiBase,
  initialData,
}: {
  apiBase: string;
  initialData: StateData;
}) {
  const router = useRouter();

  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, [router]);

  const name = initialData.state?.name ?? "—";

  const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
  const cell = (row: Record<string, string>, header: string) => row[header] ?? "—";

  const tiles = initialData?.tiles ?? {};
  const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
  const resolveFile = (v?: string | null) =>
    !v ? "" : isHttp(v) ? v : `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
  const tileFormUrl = tiles?.form_url
    ? isHttp(tiles?.form_url)
      ? tiles?.form_url
      : resolveFile(tiles?.form_url)
    : "";
  const tileWebsiteUrl = tiles?.website_url ?? "";

  // Data variables
  const actH = initialData?.act_information?.headers || [];
  const actRows = initialData?.act_information?.rows || [];

  return (
    <div className="min-h-screen w-full">
      <div className="w-full max-w-none mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {/* Popular Search (Mobile) */}
        <div className="lg:hidden mb-3 sm:mb-4 w-full">
          <Card className="shadow-sm w-full">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="w-full grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          <div className="w-full lg:col-span-3 min-w-0">
            {/* Header Section */}
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 w-full">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-800 break-words">
                CLRA Applicability :
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-orange-600 font-semibold break-words">
                {name}
              </h2>
            </div>

            {/* ===== Act Information (DESKTOP) ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-2 sm:p-3 lg:p-4">
                {actH?.length ? (
                  <div className="w-full overflow-hidden">
                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[500px] rounded-xl overflow-hidden border border-orange-500">
                        <table className="w-full table-fixed border-collapse">
                          <colgroup>
                            <col style={{ width: "180px", minWidth: "150px" }} />
                            <col />
                          </colgroup>

                          <tbody>
                            {actH.map((h) => (
                              <tr key={h} className="bg-white">
                                {/* left header col */}
                                <th
                                  scope="row"
                                  className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-orange-50 text-orange-700 font-bold uppercase tracking-wide text-left border-y border-orange-300 border-r-2 border-r-orange-300 align-top whitespace-normal break-words"
                                >
                                  {h}
                                </th>

                                {/* values across sets */}
                                {actRows?.map((row, cIdx) => {
                                  const raw = cell(row, h);

                                  return (
                                    <td
                                      key={`${h}-${cIdx}`}
                                      className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-left align-top border border-orange-500 break-words"
                                    >
                                      <span className="break-words whitespace-normal">
                                        {fmt(raw)}
                                      </span>
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-500">
                    No data available.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* ===== Act Information (MOBILE) ===== */}
            <div className="block md:hidden mb-4 w-full">
              <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
                <CardHeader className="bg-orange-200 text-orange-700 rounded pt-2">
                  <CardTitle className="text-sm sm:text-base font-bold text-center ">
                    Act Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-2 sm:space-y-3">
                  {initialData?.act_information?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-2 sm:p-3 border text-xs sm:text-sm space-y-1 sm:space-y-2 w-full">
                      {initialData?.act_information?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex flex-col sm:flex-row sm:justify-between border-b last:border-0 pb-1 gap-1 sm:gap-2"
                        >
                          <span className="font-semibold text-orange-600 break-words">{h}:</span>
                          <span className="text-gray-800 break-words text-right sm:text-left">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Leave Entitlements (DESKTOP) ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="min-w-[600px] w-full border border-collapse">
                    <thead className="bg-orange-50 text-orange-700 font-bold">
                      <tr>
                        {initialData.leave_entitlements.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide border border-orange-600 break-words"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {initialData.leave_entitlements.rows.map((r, ridx) => (
                        <tr key={ridx} className="bg-white hover:bg-orange-50">
                          {initialData.leave_entitlements.headers.map((h) => (
                            <td
                              key={h}
                              className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-orange-600 text-xs sm:text-sm text-gray-800 break-words text-center"
                            >
                              {r[h] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ===== Leave Entitlements (MOBILE) ===== */}
            <div className="block md:hidden mb-4 w-full">
              <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
                <CardHeader className="bg-orange-200 text-orange-700 rounded pt-2">
                  <CardTitle className="text-sm sm:text-base font-bold text-center ">
                    Registration
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-2 sm:space-y-3">
                  {initialData?.leave_entitlements?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-2 sm:p-3 border text-xs sm:text-sm space-y-1 sm:space-y-2 w-full">
                      {initialData?.leave_entitlements?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex flex-col sm:flex-row sm:justify-between border-b last:border-0 pb-1 gap-1 sm:gap-2"
                        >
                          <span className="font-semibold text-orange-600 break-words">{h}:</span>
                          <span className="text-gray-800 break-words text-right sm:text-left">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Working Hours & Overtime (DESKTOP) ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                 Licence
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="min-w-[600px] w-full border border-orange-600 border-collapse">
                    <thead className="bg-orange-50 text-orange-700 font-bold">
                      <tr>
                        {initialData.working_hours.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide border border-orange-600 break-words"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {initialData.working_hours.rows.map((r, ridx) => (
                        <tr key={ridx} className="bg-white hover:bg-orange-50">
                          {initialData.working_hours.headers.map((h) => (
                            <td
                              key={h}
                              className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 border border-orange-600 text-xs sm:text-sm text-gray-800 break-words text-center"
                            >
                              {r[h] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ===== Working Hours (MOBILE) ===== */}
            <div className="block md:hidden mb-4 w-full">
              <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
                <CardHeader className=" bg-orange-200 text-orange-700 rounded pt-2">
                  <CardTitle className="text-sm sm:text-base font-bold  text-center">
                    Licence
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-2 sm:space-y-3">
                  {initialData?.working_hours?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-2 sm:p-3 border text-xs sm:text-sm space-y-1 sm:space-y-2 w-full">
                      {initialData?.working_hours?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex flex-col sm:flex-row sm:justify-between border-b last:border-0 pb-1 gap-1 sm:gap-2"
                        >
                          <span className="font-semibold text-orange-600 break-words">{h}:</span>
                          <span className="text-gray-800 break-words text-right sm:text-left">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Tiles Section - Responsive ===== */}
            <div className="w-full">
              {/* Mobile: Single column */}
              <div className="flex flex-col sm:hidden gap-3 items-center w-full mb-4">
                {/* Download Form */}
                <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm leading-tight text-[#222] px-2">
                      {tiles?.form_title ?? "Download Forms"}
                    </h3>
                    {tileFormUrl ? (
                      <Button
                        size="sm"
                        className="w-[80%] h-9 bg-orange-200 hover:bg-[#d14e0b] text-orange-700 font-semibold text-sm truncate cursor-pointer rounded-md"
                        onClick={() => openProtectedDownload(router, tileFormUrl)}
                      >
                        Download
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        No Form Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Leave Calculator */}
                {/* <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <Calculator className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm leading-tight text-[#222] px-2">
                      Leave Calculator
                    </h3>
                    <Button
                      size="sm"
                      className="w-[80%] h-9 bg-orange-200 hover:bg-[#d14e0b] text-orange-700 font-semibold text-sm truncate cursor-pointer rounded-md"
                    >
                      Calculate
                    </Button>
                  </CardContent>
                </Card> */}

                {/* Official Website */}
                <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm leading-tight text-[#222] px-2">
                      {tiles?.website_title ?? "Official Website"}
                    </h3>
                    {tileWebsiteUrl ? (
                      <Button
                        asChild
                        size="sm"
                        className="w-[80%] h-9 bg-orange-200 hover:bg-[#d14e0b] text-orange-700 font-semibold text-sm truncate rounded-md"
                      >
                        <Link
                          href={tileWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        Not Available
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Tablet & Desktop: Grid layout */}
              <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-3 lg:gap-4 mb-4 lg:mb-3 w-full">
                {/* Download Form */}
                <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2">
                      {tiles?.form_title ?? "Download Forms"}
                    </h3>
                    {tileFormUrl ? (
                      <Button
                        size="sm"
                        className="w-[80%] h-9 bg-orange-100 hover:bg-orange-200 font-bold text-orange-700 text-md text-sm truncate cursor-pointer rounded-md"
                        onClick={() => openProtectedDownload(router, tileFormUrl)}
                      >
                        Download
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        No Form Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Leave Calculator */}
                {/* <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <Calculator className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight px-2">
                      Leave Calculator
                    </h3>
                    <Button
                      size="sm"
                      className="w-[80%] h-9 bg-orange-100 hover:bg-orange-200 font-bold  text-orange-700 cursor-pointer rounded-md"
                    >
                      Calculate
                    </Button>
                  </CardContent>
                </Card> */}

                {/* Official Website for this */}
                <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center">
                    <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2">
                      {tiles?.website_title ?? "Official Website"}
                    </h3>
                    {tileWebsiteUrl ? (
                      <Button
                        asChild
                        size="sm"
                        className="w-[80%] h-9 bg-orange-100 hover:bg-orange-200 font-bold text-orange-700 text-md truncate rounded-md"
                      >
                        <Link
                          href={tileWebsiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Site
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        Not Available
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar */}
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
      </div>
    </div>
  );
}


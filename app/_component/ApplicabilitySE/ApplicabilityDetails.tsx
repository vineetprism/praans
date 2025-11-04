

"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

// Types from API response
type Row = Record<string, string | null>;

type SEApplicabilityData = {
  state: { name: string; slug: string };
  writeup_space?: string | null;
  act_info: { header: string[]; rows: Row[] };
  leave_info: { header: string[]; rows: Row[] };
  holiday_info: { header: string[]; rows: Row[] };
  registration_info: { header: string[]; rows: Row[] };
  tiles: { 
    form_title?: string | null; 
    form_url?: string | null;
    form_title2?: string | null;
    form_url2?: string | null;
    website_url?: string | null;
    noti_url?: string | null;
  };
};

const LOCAL_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "127.1.1.0",
  "127.0.1.1",
  "::1",
]);

// Helper to normalize URLs
function normalizeUrl(input?: string | null, apiBase?: string): string | null {
  if (!input) return null;
  const API_ORIGIN = new URL(apiBase || "").origin;
  const val = input.trim();
  try {
    const u = new URL(val);
    if (LOCAL_HOSTS.has(u.hostname)) {
      return API_ORIGIN + u.pathname + u.search + u.hash;
    }
    return u.toString();
  } catch {
    if (!apiBase) return null;
    if (val.startsWith("/")) return API_ORIGIN + val;
    if (val.startsWith("storage/") || val.startsWith("/storage/")) {
      return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
    }
    return null;
  }
}

const cell = (row: Row, header: string) => row[header] ?? "—";
const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

function fileNameFromUrl(u: string): string {
  try {
    const url = new URL(u);
    const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
    return last || "Download";
  } catch {
    return "Download";
  }
}

export default function SEApplicabilityDetails({
  data,
  apiBase,
}: {
  data: SEApplicabilityData;
  apiBase: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actH = data.act_info.header;
  const actRows = data.act_info.rows;
  const leaveH = data.leave_info.header;
  const leaveRows = data.leave_info.rows;
  const holidayH = data.holiday_info.header;
  const holidayRows = data.holiday_info.rows;
  const regH = data.registration_info.header;
  const regRows = data.registration_info.rows;

  // Normalize URLs for tiles
  const formUrlNorm = normalizeUrl(data.tiles.form_url, apiBase);
  const formUrl2Norm = normalizeUrl(data.tiles.form_url2, apiBase);
  const websiteUrlNorm = normalizeUrl(data.tiles.website_url, apiBase);
  const notiUrlNorm = normalizeUrl(data.tiles.noti_url, apiBase);

  const formTitle = fmt(data.tiles.form_title);
  const formTitle2 = fmt(data.tiles.form_title2);

  const formButtonLabel = formTitle !== "—" ? formTitle : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";
  const formButton2Label = formTitle2 !== "—" ? formTitle2 : formUrl2Norm ? fileNameFromUrl(formUrl2Norm) : "Download";

  return (
    <div className="min-h-screen w-full">
      <div className="w-full max-w-none mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
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
            {/* Header Section - Responsive */}
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 w-full">
              <div className="w-full sm:w-auto">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-800 break-words">
                  S&E Applicability :
                </h1>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-orange-600 font-semibold break-words">
                {data?.state.name}
              </h2>
            </div>

            {/* Write-up Section (Dynamic) */}
            {data?.writeup_space && (
              <div className="mt-2 mb-4 p-3 font-medium text-gray-800 text-md leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: data.writeup_space }} />
              </div>
            )}

        {/* ========== ACT INFORMATION ========== */}
        {/* DESKTOP VERSION */}
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
                            <th
                              scope="row"
                              className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-orange-50 text-orange-700 font-semibold uppercase tracking-wide text-left border-y border-orange-500 border-r-2 border-r-orange-500 align-top whitespace-normal break-words"
                            >
                              {h}
                            </th>

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

        {/* MOBILE VERSION - Act Information */}
        <div className="block md:hidden mb-4 w-full">
          <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
            <CardHeader className="pb-0 px-3 pt-2">
              <CardTitle className="text-sm sm:text-base font-bold bg-orange-100 text-orange-700 text-center py-2 rounded-md shadow-inner">
                Act Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 sm:p-4 mt-3 text-left">
              {actRows?.length ? (
                actRows.map((r, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-orange-200 bg-white shadow-sm p-3 sm:p-4 text-xs sm:text-sm divide-y divide-orange-100 mb-3"
                  >
                    {actH?.map((h, i) => (
                      <div
                        key={i}
                        className="py-2 first:pt-0 last:pb-0 border-b border-orange-100 last:border-0"
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold text-orange-600 min-w-[130px]">
                            {h}:
                          </span>
                          <span className="text-gray-800 text-justify leading-relaxed break-words">
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-500">
                  No data available.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ========== LEAVE INFORMATION ========== */}
        {/* DESKTOP VERSION */}
        <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
          <CardHeader className="pb-1 lg:pb-2">
            <CardTitle className="text-base lg:text-lg font-bold">
              Leave Information
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] rounded-3xl overflow-hidden border border-orange-500">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr className="bg-orange-50 text-orange-700">
                      {leaveH?.map((h, i) => (
                        <th
                          key={h}
                          className={[
                            "px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide",
                            "border border-orange-500 text-center",
                            i === 0 ? "rounded-tl-xl" : "",
                            i === leaveH.length - 1 ? "rounded-tr-xl" : "",
                          ].join(" ")}
                        >
                          <span className="break-words">{h}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {leaveRows?.map((r, ridx) => (
                      <tr key={ridx} className="bg-white">
                        {leaveH?.map((h) => (
                          <td
                            key={h}
                            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-900 align-top border border-orange-500 text-center"
                          >
                            <span className="break-words">{fmt(cell(r, h))}</span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {(!leaveRows || leaveRows.length === 0) && (
                      <tr>
                        <td
                          colSpan={leaveH?.length || 1}
                          className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
                        >
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MOBILE VERSION - Leave Information */}
        <div className="block md:hidden mb-4 w-full">
          <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm sm:text-base font-bold bg-orange-100 text-orange-700 text-center py-2 rounded-md shadow-inner">
                Leave Information
              </CardTitle>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 space-y-3">
              {leaveRows?.length ? (
                leaveRows.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 sm:p-4 border border-orange-200 shadow-sm text-xs sm:text-sm divide-y divide-orange-100"
                  >
                    {leaveH?.map((h, i) => (
                      <div
                        key={i}
                        className="py-2 first:pt-0 last:pb-0 border-b border-orange-100 last:border-0"
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold text-orange-600 min-w-[130px]">
                            {h}:
                          </span>
                          <span className="text-gray-800 leading-relaxed break-words text-justify">
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-500">
                  No data available.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ========== HOLIDAY INFORMATION ========== */}
        {/* DESKTOP VERSION */}
        <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
          <CardHeader className="pb-1 lg:pb-2">
            <CardTitle className="text-base lg:text-lg font-bold">
              Holiday Information
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] rounded-3xl overflow-hidden border border-orange-500">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr className="bg-orange-50 text-orange-700">
                      {holidayH?.map((h, i) => (
                        <th
                          key={h}
                          className={[
                            "px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide",
                            "border border-orange-500 text-center",
                            i === 0 ? "rounded-tl-xl" : "",
                            i === holidayH.length - 1 ? "rounded-tr-xl" : "",
                          ].join(" ")}
                        >
                          <span className="break-words">{h}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {holidayRows?.map((r, ridx) => (
                      <tr key={ridx} className="bg-white">
                        {holidayH?.map((h) => (
                          <td
                            key={h}
                            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-900 align-top border border-orange-500 text-center"
                          >
                            <span className="break-words">{fmt(cell(r, h))}</span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {(!holidayRows || holidayRows.length === 0) && (
                      <tr>
                        <td
                          colSpan={holidayH?.length || 1}
                          className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
                        >
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MOBILE VERSION - Holiday Information */}
        <div className="block md:hidden mb-4 w-full">
          <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm sm:text-base font-bold bg-orange-100 text-orange-700 text-center py-2 rounded-md shadow-inner">
                Holiday Information
              </CardTitle>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 space-y-3">
              {holidayRows?.length ? (
                holidayRows.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 sm:p-4 border border-orange-200 shadow-sm text-xs sm:text-sm divide-y divide-orange-100"
                  >
                    {holidayH?.map((h, i) => (
                      <div
                        key={i}
                        className="py-2 first:pt-0 last:pb-0 border-b border-orange-100 last:border-0"
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold text-orange-600 min-w-[130px]">
                            {h}:
                          </span>
                          <span className="text-gray-800 leading-relaxed break-words text-justify">
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-500">
                  No data available.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ========== REGISTRATION INFORMATION ========== */}
        {/* DESKTOP VERSION */}
        <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
          <CardHeader className="pb-1 lg:pb-2">
            <CardTitle className="text-base lg:text-lg font-bold">
              Registration Information
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[600px] rounded-3xl overflow-hidden border border-orange-500">
                <table className="w-full border-collapse table-fixed">
                  <thead>
                    <tr className="bg-orange-50 text-orange-700">
                      {regH?.map((h, i) => (
                        <th
                          key={h}
                          className={[
                            "px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide",
                            "border border-orange-500 text-center",
                            i === 0 ? "rounded-tl-xl" : "",
                            i === regH.length - 1 ? "rounded-tr-xl" : "",
                          ].join(" ")}
                        >
                          <span className="break-words">{h}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {regRows?.map((r, ridx) => (
                      <tr key={ridx} className="bg-white">
                        {regH?.map((h) => (
                          <td
                            key={h}
                            className="px-2 sm:px-3 lg:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-900 align-top border border-orange-500 text-center"
                          >
                            <span className="break-words">{fmt(cell(r, h))}</span>
                          </td>
                        ))}
                      </tr>
                    ))}

                    {(!regRows || regRows.length === 0) && (
                      <tr>
                        <td
                          colSpan={regH?.length || 1}
                          className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
                        >
                          No data available.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* MOBILE VERSION - Registration Information */}
        <div className="block md:hidden mb-4 w-full">
          <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm sm:text-base font-bold bg-orange-100 text-orange-700 text-center py-2 rounded-md shadow-inner">
                Registration Information
              </CardTitle>
            </CardHeader>

            <CardContent className="p-3 sm:p-4 space-y-3">
              {regRows?.length ? (
                regRows.map((r, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg p-3 sm:p-4 border border-orange-200 shadow-sm text-xs sm:text-sm divide-y divide-orange-100"
                  >
                    {regH?.map((h, i) => (
                      <div
                        key={i}
                        className="py-2 first:pt-0 last:pb-0 border-b border-orange-100 last:border-0"
                      >
                        <div className="flex justify-between">
                          <span className="font-semibold text-orange-600 min-w-[130px]">
                            {h}:
                          </span>
                          <span className="text-gray-800 leading-relaxed break-words text-justify">
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="text-center text-sm text-gray-500">
                  No data available.
                </div>
              )}
            </CardContent>
          </Card>
        </div>

     <div className="w-full mb-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-4 w-full">
    {/* Download Form 1 */}
    <Card className="h-[120px] w-full text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="h-full flex flex-col items-center justify-center px-2">
        <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
        <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2 break-words">
          Act Rule Download
        </h3>

        {formUrlNorm ? (
          <Button
            size="sm"
            className="w-[90%] h-9 truncate rounded-md font-semibold bg-orange-100 text-orange-700 hover:bg-orange-200 hover:cursor-pointer"
            title={formButtonLabel}
            aria-label={formButtonLabel}
            onClick={() => openProtectedDownload(router, formUrlNorm)}
          >
            {formButtonLabel}
          </Button>
        ) : (
          <Button size="sm" disabled className="w-[80%] h-9 text-sm truncate">
            No Form Available
          </Button>
        )}
      </CardContent>
    </Card>

    {/* Download Form 2 */}
    <Card className="h-[120px] w-full text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="h-full flex flex-col items-center justify-center px-2">
        <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
        <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2 break-words">
          Applicability S&E Download
        </h3>
        <Button
          size="sm"
          className="w-[90%] h-9 truncate rounded-md font-semibold bg-orange-100 text-orange-700 hover:bg-orange-200 hover:cursor-pointer"
          title={formButton2Label}
          aria-label={formButton2Label}
          onClick={() => openProtectedDownload(router, formUrl2Norm)}
        >
          {formButton2Label}
        </Button>
      </CardContent>
    </Card>
  </div>
</div>

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
      </div>
    </div>
  );
}
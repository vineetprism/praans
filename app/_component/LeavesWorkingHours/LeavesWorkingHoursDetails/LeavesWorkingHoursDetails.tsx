"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, ExternalLink, FileText } from "lucide-react";
import Link from "next/link";

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
  const name = initialData.state?.name ?? "—";

  const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
  const resolveFile = (v?: string | null) => {
    if (!v) return "";
    if (isHttp(v)) return v;
    return `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
  };

  const parseHeaders = (headers: string[]) =>
    headers.map((h) => {
      const [label, typeRaw] = h.split(":");
      const type = (typeRaw ?? "text").toLowerCase();
      return { key: label.trim(), label: label.trim(), type };
    });

  const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

  const DesktopTable = ({ block }: { block: TableBlock }) => {
    const cols = parseHeaders(block.headers);

    const isCategory = (label: string) => /^category$/i.test(label);
    const isCompact = (c: { label: string; type: string }) =>
      c.type === "file" || c.type === "url";

    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full table-fixed">
          <colgroup>
            {cols?.map((c, i) => {
              if (isCategory(c.label)) {
                return <col key={i} className="w-[420px] max-w-[420px]" />;
              }
              if (isCompact(c)) {
                return <col key={i} className="w-28 max-w-28" />;
              }
              return <col key={i} className="w-auto" />;
            })}
          </colgroup>

          <thead>
            <tr className="bg-orange-500">
              {cols?.map((c) => (
                <th
                  key={c.key}
                  className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
                >
                  {c.label.replace(/:(file|url)$/i, "")}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {(block.rows ?? []).map((row, idx) => (
              <tr key={idx} className="hover:bg-orange-50 transition-colors">
                {cols?.map((c, ci) => {
                  const raw = row[c.key] ?? row[c.label] ?? "";

                  const base = "px-3 py-4 text-sm break-words";
                  const textFor = /^category$/i.test(c.label)
                    ? "text-left align-top whitespace-normal"
                    : "text-center";

                  if (c.type === "file") {
                    const href = resolveFile(raw);
                    return (
                      <td key={ci} className={`${base} ${textFor}`}>
                        {href ? (
                          <Button
                            asChild
                            variant="link"
                            size="sm"
                            className="text-orange-600 p-0"
                            aria-label="Download file"
                          >
                            <Link href={href} target="_blank" rel="noopener noreferrer">
                              <FileText className="h-4 w-4 mr-1" />
                              Download
                            </Link>
                          </Button>
                        ) : (
                          "—"
                        )}
                      </td>
                    );
                  }

                  if (c.type === "url") {
                    const href = typeof raw === "string" ? raw : "";
                    return (
                      <td key={ci} className={`${base} ${textFor}`}>
                        {href ? (
                          <Link
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-600 hover:underline inline-flex items-center"
                            aria-label="Visit URL"
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Visit
                          </Link>
                        ) : (
                          "—"
                        )}
                      </td>
                    );
                  }

                  return (
                    <td key={ci} className={`${base} ${textFor}`}>
                      {fmt(String(raw))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const MobileCards = ({ block, title }: { block: TableBlock; title: string }) => {
    const cols = parseHeaders(block?.headers);
    return (
      <Card className="shadow-sm border-l-4 border-l-orange-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3 space-y-3">
          {(block?.rows ?? [])?.map((row, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
              {cols?.map((c) => {
                const label = c.label.replace(/:(file|url)$/i, "");
                const raw = row[c.key] ?? row[c.label] ?? "";
                if (c.type === "file") {
                  const href = resolveFile(raw);
                  return (
                    <div key={c.key} className="flex gap-2 justify-between">
                      <span className="font-medium text-gray-600">{label}:</span>
                      {href ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 underline"
                          aria-label="Download file"
                        >
                          Download
                        </Link>
                      ) : (
                        "—"
                      )}
                    </div>
                  );
                }
                if (c.type === "url") {
                  const href = typeof raw === "string" ? raw : "";
                  return (
                    <div key={c.key} className="flex gap-2 justify-between">
                      <span className="font-medium text-gray-600">{label}:</span>
                      {href ? (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-600 underline"
                          aria-label="Open URL"
                        >
                          Open
                        </Link>
                      ) : (
                        "—"
                      )}
                    </div>
                  );
                }
                return (
                  <div key={c.key} className="flex gap-2 justify-between">
                    <span className="font-medium text-gray-600">{label}:</span>
                    <span className="text-right">{fmt(String(raw))}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </CardContent>
      </Card>
    );
  };

  const tiles = initialData?.tiles ?? {};
  const tileFormUrl = tiles?.form_url
    ? isHttp(tiles?.form_url)
      ? tiles?.form_url
      : resolveFile(tiles?.form_url)
    : "";
  const tileWebsiteUrl = tiles?.website_url ?? "";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
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
                <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                  Leave &amp; Working Hours :
                </h2>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                {name}
              </h2>
            </div>

            {/* Act Information */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <DesktopTable block={initialData?.act_information} />
              </CardContent>
            </Card>

            <div className="block md:hidden mb-4">
              <MobileCards block={initialData?.act_information} title="Act Information" />
            </div>

            {/* Leave Entitlements */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">Leave Entitlements</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <DesktopTable block={initialData?.leave_entitlements} />
              </CardContent>
            </Card>

            <div className="block md:hidden mb-4">
              <MobileCards block={initialData?.leave_entitlements} title="Leave Entitlements" />
            </div>

            {/* Working Hours & Overtime */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Working Hours &amp; Overtime
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <DesktopTable block={initialData?.working_hours} />
              </CardContent>
            </Card>

            <div className="block md:hidden mb-4">
              <MobileCards block={initialData?.working_hours} title="Working Hours & Overtime" />
            </div>

            {/* Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
              {/* Download Forms */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">
                    {tiles?.form_title ?? "Download Forms"}
                  </h3>
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
                    disabled={!tileFormUrl}
                    aria-label="Download forms"
                  >
                    <Link href={tileFormUrl || "#"} target="_blank" rel="noopener noreferrer">
                      Download
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Leave Calculator (stub) */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Leave Calculator</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
                    aria-label="Leave Calculator"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              {/* Official Website */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">
                    {tiles?.website_title ?? "Official Website"}
                  </h3>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
                    disabled={!tileWebsiteUrl}
                    aria-label="Visit Website"
                  >
                    <Link href={tileWebsiteUrl || "#"} target="_blank" rel="noopener noreferrer">
                      Visit Site
                    </Link>
                  </Button>
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

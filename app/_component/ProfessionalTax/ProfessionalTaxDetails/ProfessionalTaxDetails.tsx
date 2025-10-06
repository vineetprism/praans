

"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calculator, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

/* =========================
   Helpers
   ========================= */
type AnyRow = Record<string, string | number | null | undefined>;
type TableBlockType = { headers: string[]; rows: AnyRow[] };

const norm = (s: string) =>
  (s ?? "")
    .toString()
    .toLowerCase()
    .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
    .trim();

function buildRowKeyMap(row: AnyRow) {
  const map: Record<string, any> = {};
  Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
  return map;
}

function getCell(row: AnyRow, header: string) {
  const m = buildRowKeyMap(row);
  return m[norm(header)] ?? "";
}

const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);
const isNumeric = (val: any) => /^\d+$/.test(String(val || "").trim());

/* =========================
   Generic desktop table
   ========================= */
function GenericTable({
  block,
  emphasizeCols = [],
  linkifyCols = [],
}: {
  block: TableBlockType;
  emphasizeCols?: string[];
  linkifyCols?: string[];
}) {
  const router = useRouter();
  if (!block?.headers?.length) return null;

  const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
  const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

  return (
    <div className="overflow-x-auto">
      <Table className="border border-orange-300 border-collapse w-full">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-orange-500 hover:bg-orange-500">
            {block.headers.map((h) => (
              <TableHead
                key={h}
                className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 border border-orange-300"
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="relative z-10">
          {(block.rows ?? []).map((row, rIdx) => {
            const sno = getCell(row, "S.No.");
            const numericRow = isNumeric(sno);

            return (
              <TableRow
                key={rIdx}
                className="hover:bg-orange-50 border border-orange-300"
              >
                {block.headers.map((h) => {
                  const raw = getCell(row, h);
                  const emph = emSet.has(h.toLowerCase());
                  const linky = linkSet.has(h.toLowerCase());
                  const isFormHeader = h.toLowerCase().includes("form");

                  let content: React.ReactNode = String(raw || "-");

                  if (linky && isUrl(raw)) {
                    const href = String(raw);
                    if (isFormHeader) {
                      content = (
                        <Button
                          size="sm"
                          variant="link"
                          className="text-orange-600 underline p-0 cursor-pointer"
                          onClick={() => openProtectedDownload(router, href)}
                          aria-label="Download"
                        >
                          Download
                        </Button>
                      );
                    } else {
                      content = (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-orange-600 hover:cursor-pointer"
                        >
                          Open
                        </Link>
                      );
                    }
                  }

                  const isCategoryCol = h.toLowerCase().includes("category");

                  return (
                    <TableCell
                      key={h}
                      className={[
                        "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px] border border-orange-300",
                        emph && !numericRow ? "font-semibold text-orange-600 " : "",
                        numericRow && isCategoryCol
                          ? " text-orange-500 font-bold"
                          : "",
                      ].join(" ")}
                    >
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

/* =========================
   Generic mobile block
   ========================= */
function GenericMobileBlock({
  title,
  block,
  linkifyCols = [],
}: {
  title: string;
  block: TableBlockType;
  linkifyCols?: string[];
}) {
  const router = useRouter();
  if (!block?.headers?.length) return null;

  const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

  return (
    <Card className="shadow-sm mb-3">
      <CardContent className="p-3">
        <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
          {title}
        </h3>
        <div className="space-y-3">
          {(block.rows ?? []).map((row, idx) => {
            const sno = getCell(row, "S.No.");
            const numericRow = isNumeric(sno);

            return (
              <div
                key={idx}
                className="rounded-lg p-3 border border-orange-300"
              >
                <div className="space-y-2 text-xs">
                  {block.headers.map((h) => {
                    const v = getCell(row, h);
                    const linky = linkSet.has(h.toLowerCase());
                    const isFormHeader = h.toLowerCase().includes("form");
                    const isCategoryCol = h.toLowerCase().includes("category");

                    return (
                      <div
                        key={h}
                        className="flex justify-between border-b border-orange-300 pb-1"
                      >
                        <span
                          className={`font-medium ${
                            numericRow && isCategoryCol
                              ? " text-orange-500 font-bold px-1 rounded"
                              : "text-orange-600"
                          }`}
                        >
                          {h}:
                        </span>
                        <span
                          className={`break-words text-right max-w-xs ${
                            numericRow && isCategoryCol
                              ? " text-orange-500 font-bold px-1 rounded"
                              : "text-gray-800"
                          }`}
                        >
                          {linky && isUrl(v) ? (
                            isFormHeader ? (
                              <button
                                className="underline text-orange-600 hover:cursor-pointer"
                                onClick={() =>
                                  openProtectedDownload(router, String(v))
                                }
                                aria-label="Download"
                                type="button"
                              >
                                Download
                              </button>
                            ) : (
                              <Link
                                href={String(v)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-orange-600"
                              >
                                Open
                              </Link>
                            )
                          ) : (
                            String(v || "-")
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

/* =========================
   Page Component
   ========================= */
type Payload = {
  data: {
    state: { name: string; slug: string };
    updated_date: string;
    effective_date: string;
    act_information: TableBlockType;
    professional_tax_slabs: TableBlockType;
    employment_categories: TableBlockType;
    downloads: {
      form_title: string | null;
      form_url: string | null;
      website_url: string | null;
    };
    meta: {
      applicable: boolean;
      max_annual_rate: number | null;
      slab_count: number | null;
    };
  };
};

export default function ProfessionalTaxDetails({
  payload,
}: {
  payload: Payload;
}) {
  const router = useRouter();

  useEffect(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/";
    const search =
      typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, [router]);

  const {
    state,
    act_information,
    professional_tax_slabs,
    employment_categories,
    downloads,
  } = payload.data;

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
          {/* Left content */}
          <div className="lg:col-span-3 xl:col-span-4 relative z-10">
            <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Professional Tax :
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold">
                {state.name}
              </h2>
            </div>

            {/* 🔥 Three Cards Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <Calculator className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1 ">
                    PT Calculator
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="PT Calculator"
                    className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 cursor-pointer hover:text-orange-600"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <FileText className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">
                    Download Forms
                  </h3>
                  {downloads?.form_url ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        openProtectedDownload(router, downloads.form_url!)
                      }
                      className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 cursor-pointer hover:text-orange-600"
                    >
                      {downloads?.form_title?.trim() || "Download"}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="text-xs h-6 px-3"
                    >
                      Download
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <Globe className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">
                    Official Portal
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    disabled={!downloads?.website_url}
                    className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    <Link
                      href={downloads?.website_url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Act Information */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Act Information"
                block={act_information}
                linkifyCols={["Form", "Website"]}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable
                  block={act_information}
                  linkifyCols={["Form", "Website"]}
                />
              </CardContent>
            </Card>

            {/* Professional Tax Slabs */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Professional Tax Slabs"
                block={professional_tax_slabs}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Professional Tax Slabs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable block={professional_tax_slabs} />
              </CardContent>
            </Card>

            {/* Employment Categories */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Employment Categories"
                block={employment_categories}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Employment Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable block={employment_categories} />
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 2xl:w-sm">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




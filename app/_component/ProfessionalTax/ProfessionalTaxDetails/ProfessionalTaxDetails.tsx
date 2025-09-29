"use client";

import {
  Download,
  ExternalLink,
  FileText,
  Calculator,
  Globe,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import Link from "next/link";


type ActRow = {
  Act: string;
  Rule: string;
  Applicability: string;
  Frequency: string;
  Form: string;       // URL
  Website: string;    // URL
};

type TableBlock<H extends string, R extends Record<string, any>> = {
  headers: H[];
  rows: R[];
};

type Payload = {
  data: {
    state: { name: string; slug: string };
    updated_date: string;
    effective_date: string;
    act_information: TableBlock<
      "Act" | "Rule" | "Applicability" | "Frequency" | "Form" | "Website",
      ActRow
    >;
    professional_tax_slabs: TableBlock<
      "Income Range (Monthly)" | "Monthly Tax" | "Annual Tax" | "Remarks",
      {
        "Income Range (Monthly)": string;
        "Monthly Tax": string;
        "Annual Tax": string;
        "Remarks": string;
      }
    >;
    employment_categories: TableBlock<
      "Category" | "Description" | "Applicable Rate" | "Remarks",
      {
        Category: string;
        Description: string;
        "Applicable Rate": string;
        Remarks: string;
      }
    >;
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

type Props = {
  payload: Payload; // ✅ props-only, no external type import
};

export default function ProfessionalTaxDetails({ payload }: Props) {
  const {
    state,
    act_information,
    professional_tax_slabs,
    employment_categories,
    downloads,
  } = payload.data;

  const actRow = act_information.rows?.[1];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        <div className="xl:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
          <div className="lg:col-span-3 xl:col-span-4 relative z-10">
            <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Professional Tax :
              </h1>
              <div className="text-right">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                  {state.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-3">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Calculator className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    PT Calculator
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="PT Calculator"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Download Forms
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    aria-label="Download Forms"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                    disabled={!downloads?.form_url}
                  >
                    <Link
                      href={downloads?.form_url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Download Forms"
                    >
                      {downloads?.form_title?.trim() || "Download"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Official Portal
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    aria-label="Visit Official Portal"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                    disabled={!downloads?.website_url}
                  >
                    <Link
                      href={downloads?.website_url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit Official Portal"
                    >
                      Visit
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Bell className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Notifications
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="View Notifications"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Act Information - Mobile */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">Act Information</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-orange-600">Act:</span>{" "}
                          {actRow?.Act || "-"}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Rule:</span>{" "}
                          {actRow?.Rule || "-"}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Applicability:</span>{" "}
                          {actRow?.Applicability || "-"}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Frequency:</span>{" "}
                          {actRow?.Frequency || "-"}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Form:</span>{" "}
                          {actRow?.Form ? (
                            <Link
                              href={actRow?.Form}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-orange-600"
                            >
                              Download
                            </Link>
                          ) : (
                            "-"
                          )}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Website:</span>{" "}
                          {actRow?.Website ? (
                            <Link
                              href={actRow?.Website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline text-orange-600"
                            >
                              Official Site
                            </Link>
                          ) : (
                            "-"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Act Information - Desktop */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="sticky top-0 z-30">
                        <TableRow className="bg-orange-500">
                          {act_information?.headers?.map((h) => (
                            <TableHead
                              key={h}
                              className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30"
                            >
                              {h}
                            </TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody className="relative z-10">
                        <TableRow className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[220px]">
                            {actRow?.Act || "-"}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[220px]">
                            {actRow?.Rule || "-"}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[300px]">
                            {actRow?.Applicability || "-"}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal">
                            {actRow?.Frequency || "-"}
                          </TableCell>
                          <TableCell className="p-4 lg:p-6 align-top">
                            {actRow?.Form ? (
                              <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal hover:text-orange-700"
                                aria-label="Download Form"
                              >
                                <Link href={actRow?.Form} target="_blank" rel="noopener noreferrer" aria-label="Download Form">
                                  <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 inline" />
                                  <span className="break-words">Form</span>
                                </Link>
                              </Button>
                            ) : (
                              <span className="text-xs text-gray-500">-</span>
                            )}
                          </TableCell>
                          <TableCell className="p-4 lg:p-6 align-top">
                            {actRow?.Website ? (
                              <Button
                                asChild
                                variant="link"
                                size="sm"
                                className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal hover:text-orange-700"
                                aria-label="Visit Official Site"
                              >
                                <Link href={actRow?.Website} target="_blank" rel="noopener noreferrer" aria-label="Visit Official Site">
                                  <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1 inline" />
                                  <span className="break-words">Official Site</span>
                                </Link>
                              </Button>
                            ) : (
                              <span className="text-xs text-gray-500">-</span>
                            )}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Tax Slabs - Mobile */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">Professional Tax Slabs</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    {professional_tax_slabs?.rows?.map((slab, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 border">
                        <h3 className="font-semibold text-sm text-orange-600 mb-2">
                          {slab["Income Range (Monthly)"]}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="font-medium text-gray-600">Monthly Tax</div>
                            <div className="font-bold text-green-600">{slab["Monthly Tax"]}</div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-600">Annual Tax</div>
                            <div className="font-bold text-green-600">{slab["Annual Tax"]}</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">{slab["Remarks"]}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Tax Slabs - Desktop */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Professional Tax Slabs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="sticky top-0 z-30">
                      <TableRow className="bg-orange-500 hover:bg-orange-500">
                        {professional_tax_slabs?.headers?.map((h) => (
                          <TableHead
                            key={h}
                            className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30"
                          >
                            {h}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody className="relative z-10">
                      {professional_tax_slabs?.rows?.map((slab, idx) => (
                        <TableRow key={idx} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3">
                            {slab["Income Range (Monthly)"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
                            {slab["Monthly Tax"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
                            {slab["Annual Tax"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {slab["Remarks"]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Employment Categories - Mobile */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">Employment Categories</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    {employment_categories?.rows?.map((row, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-3 border">
                        <h3 className="font-semibold text-sm text-orange-600 mb-2">
                          {row["Category"]}
                        </h3>
                        <div className="space-y-1 text-xs">
                          <p>
                            <span className="font-medium">Description:</span> {row["Description"]}
                          </p>
                          <p>
                            <span className="font-medium">Rate:</span> {row["Applicable Rate"]}
                          </p>
                          <p>
                            <span className="font-medium">Remarks:</span> {row["Remarks"]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Employment Categories - Desktop */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Employment Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="sticky top-0 z-30">
                      <TableRow className="bg-orange-500 hover:bg-orange-500">
                        {employment_categories?.headers?.map((h) => (
                          <TableHead
                            key={h}
                            className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30"
                          >
                            {h}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody className="relative z-10">
                      {employment_categories?.rows?.map((row, idx) => (
                        <TableRow key={idx} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3 text-orange-600">
                            {row["Category"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {row["Description"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {row["Applicable Rate"]}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {row["Remarks"]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Popular Search (Desktop Only) */}
          <div className="lg:col-span-1 2xl:w-sm">
            <div className="sticky top-24 ">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6 " />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

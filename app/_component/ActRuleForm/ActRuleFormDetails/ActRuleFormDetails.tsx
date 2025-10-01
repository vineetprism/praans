"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SanitizedHtmlContent from "@/app/SanitizedHtmlContent/page";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AlertCircle, Download, FileText, Scale } from "lucide-react";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

type FormAPI = {
  id: number;
  form_no: string;
  title: string;
  short_desc: string;
  pdf_url: string | null;
  created_at: string;
};

type AmendmentEntry = {
  short_desc: string;
  date: string;
  date_iso: string;
  doc_path?: string | null;
  doc_url?: string | null;
};

type AmendmentYear = {
  year: string;
  entries: AmendmentEntry[];
};

type ActDetail = {
  id: number;
  title: string;
  slug: string;
  state: string;
  short_description: string;
  form_quote: string;
  act_desc: string;
  rule_desc: string;
  section_count: number;
  rule_count: number;
  form_count: number;

  act_doc_path?: string | null;
  act_doc_url?: string | null;
  rule_doc_path?: string | null;
  rule_doc_url?: string | null;
  forms: FormAPI[];
  amendments?: AmendmentYear[];
  created_at: string;
};

interface ActDetailClientProps {
  act: ActDetail;
}

const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE!;
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0"]);

export function normalizeUrl(
  url?: string | null,
  path?: string | null
): string | null {
  if (url) {
    try {
      const u = new URL(url);
      const base = new URL(FILE_HOST);
      const origin = LOCAL_HOSTS.has(u.hostname) ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      // fallthrough
    }
  }
  if (path) {
    let p = path.trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (!p.startsWith("/storage/"))
      p = `/storage${p.startsWith("/storage") ? "" : p}`;
    const cleanPath = encodeURI(decodeURI(p));
    return `${FILE_HOST}${cleanPath}`;
  }
  return null;
}

export default function ActDetailClient({ act }: ActDetailClientProps) {
  const router = useRouter();
  const forms = act.forms || [];

  // Auto-download after returning from login (respects ?dl=… on the URL)
  useEffect(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/acts";
    const search =
      typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "Invalid Date";
    }
  };

  // === Auth-gated download handlers ===
  const handleActDownload = () => {
    const finalUrl = normalizeUrl(act?.act_doc_url, act?.act_doc_path || null);
    if (!finalUrl) return alert("Act document not available");
    openProtectedDownload(router, finalUrl);
  };

  const handleRulesDownload = () => {
    const finalUrl = normalizeUrl(act?.rule_doc_url, act?.rule_doc_path || null);
    if (!finalUrl) return alert("Rules document not available");
    openProtectedDownload(router, finalUrl);
  };

  const handleFormDownload = (form: FormAPI) => {
    const finalUrl = normalizeUrl(form?.pdf_url, null);
    if (!finalUrl) return alert("Form document not available");
    openProtectedDownload(router, finalUrl);
  };

  const handleAmendmentDownload = (amendment: AmendmentEntry) => {
    const finalUrl = normalizeUrl(amendment?.doc_url, amendment?.doc_path || null);
    if (!finalUrl) return alert("Amendment document not available");
    openProtectedDownload(router, finalUrl);
  };
  // ====================================

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        <div className="w-full px-0 py-3 sm:py-4 lg:py-5">
          <div className="grid gap-3 sm:gap-4 lg:gap-5 xl:gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0 px-2 sm:px-3 lg:px-4 xl:px-6">
              <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
                <CardHeader>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
                          {act?.title}:
                        </CardTitle>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200 text-xs 2xl:text-sm flex-shrink-0"
                      >
                        {act?.state}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-3 gap-1 p-1 rounded h-6">
                      <div className="text-center">
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act?.section_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Sections
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act?.rule_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Rules
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act?.form_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Forms
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Tabs defaultValue="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
                <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5 hover:cursor-pointer"
                  >
                    Act Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="rules"
                    className=" data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer"
                  >
                    Rules
                  </TabsTrigger>
                  <TabsTrigger
                    value="forms"
                    className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer"
                  >
                    Forms
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                        <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                          <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span>Act Overview :</span>
                        </CardTitle>
                        {normalizeUrl(act?.act_doc_url, act?.act_doc_path) && (
                          <Button
                            onClick={handleActDownload}
                            className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
                            aria-label="download act"
                          >
                            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                            Download Act
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 -mt-12 px-15 text-justify space-y-6">
                      {act?.act_desc ? (
                        <SanitizedHtmlContent html={act?.act_desc} />
                      ) : (
                        <div className="text-center text-gray-500 py-8">
                          <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                          <p className="text-sm">No act details available</p>
                        </div>
                      )}

                      {/* Recent Amendments Section */}
                      {act?.amendments && act?.amendments?.length > 0 && (
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <h3 className="text-base font-semibold mb-4 flex items-center gap-2">
                            <Scale className="w-4 h-4 text-orange-500" />
                            Recent Amendments
                          </h3>
                          <div className="space-y-1 rounded-lg p-4">
                            {act?.amendments?.map((yearGroup, yearIndex) => (
                              <div key={yearIndex}>
                                {yearGroup?.entries?.map((amendment, amendmentIndex) => (
                                  <div
                                    key={`${yearIndex}-${amendmentIndex}`}
                                    className="flex items-start gap-4 py-3 last:border-b-0"
                                  >
                                    <div className="flex-shrink-0 mt-1">
                                      <div className="w-10 h-6 bg-orange-50 border border-orange-200 rounded flex items-center justify-center">
                                        <span className="text-orange-600 font-bold text-xs">
                                          {yearGroup?.year}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-sm font-medium leading-relaxed mb-1">
                                        {amendment?.short_desc}
                                      </p>
                                      <p className="text-xs">
                                        Date: {amendment?.date}
                                      </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                      {normalizeUrl(
                                        amendment?.doc_url,
                                        amendment?.doc_path || null
                                      ) ? (
                                        <Button
                                          size="sm"
                                          className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer text-xs"
                                          onClick={() => handleAmendmentDownload(amendment)}
                                          aria-label="Download Amendment"
                                        >
                                          <Download className="w-3 h-3 mr-1" />
                                          Download
                                        </Button>
                                      ) : (
                                        <span className="text-xs text-gray-400">No PDF</span>
                                      )}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Rules */}
                <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                        <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                          <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span>Rules Overview :</span>
                        </CardTitle>
                        {normalizeUrl(act?.rule_doc_url, act?.rule_doc_path) && (
                          <Button
                            onClick={handleRulesDownload}
                            className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
                            aria-label="download rules"
                          >
                            <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                            Download Rules
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 -mt-12 text-justify">
                      {act?.rule_desc ? (
                        <SanitizedHtmlContent html={act?.rule_desc} />
                      ) : (
                        <div className="text-center py-6 sm:py-8  rounded-lg">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center">
                            <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                            No rules information available
                          </p>
                          <p className="text-gray-400 text-[10px] sm:text-xs">
                            Please check with relevant authorities
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Forms */}
                <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span>Forms:</span>
                        </CardTitle>
                      </div>

                      {/* show only if non-empty */}
                      {(() => {
                        const q =
                          typeof act?.form_quote === "string"
                            ? act.form_quote.trim()
                            : "";
                        return q ? (
                          <span className="text-[14px] sm:text-xs lg:text-sm bg-orange-100 text-gray-700 p-2 rounded-md">
                            {q}
                          </span>
                        ) : null;
                      })()}
                    </CardHeader>

                    <CardContent className="pt-0">
                      {forms?.length === 0 ? (
                        <div className="text-center py-6 sm:py-8 rounded-lg">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center">
                            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                            No forms available
                          </p>
                          <p className="text-gray-400 text-[10px] sm:text-xs">
                            Forms will be added when available
                          </p>
                        </div>
                      ) : (
                        <>
                          {/* Mobile Cards */}
                          <div className="block lg:hidden">
                            <div className="space-y-2 sm:space-y-2.5">
                              {forms?.map((form) => (
                                <Card
                                  key={form?.id}
                                  className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                  <CardContent className="p-2 sm:p-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
                                            {form?.title}
                                          </h4>
                                          <Badge
                                            variant="outline"
                                            className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1"
                                          >
                                            {form?.form_no}
                                          </Badge>
                                        </div>
                                      </div>
                                      <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
                                        {form?.short_desc}
                                      </p>
                                      <div className="flex items-center justify-between mt-1">
                                        <span className="text-[9px] sm:text-[10px] text-gray-500">
                                          {formatDate(form?.created_at)}
                                        </span>
                                        {normalizeUrl(form?.pdf_url, null) ? (
                                          <Button
                                            size="sm"
                                            className="text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer"
                                            onClick={() => handleFormDownload(form)}
                                            aria-label="Download Form"
                                          >
                                            <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                            Download
                                          </Button>
                                        ) : (
                                          <span className="text-[9px] sm:text-[10px] text-gray-400">
                                            No PDF
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>

                          {/* Desktop Table */}
                          <div className="hidden lg:block overflow-hidden -mt-6">
                            <Table>
                              <TableHeader>
                                <TableRow className="border-gray-200">
                                  <TableHead className="w-20 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Form No.
                                  </TableHead>
                                  <TableHead className="w-64 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Title
                                  </TableHead>
                                  <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Actions
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {forms?.map((form) => {
                                  const href = normalizeUrl(form?.pdf_url, null);
                                  return (
                                    <TableRow
                                      key={form.id}
                                      className="transition-colors border-gray-200"
                                    >
                                      <TableCell className="py-2">
                                        <Badge
                                          variant="outline"
                                          className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm"
                                        >
                                          {form?.form_no}
                                        </Badge>
                                      </TableCell>

                                      <TableCell className="py-2 max-w-64">
                                        <p>{form?.title}</p>
                                      </TableCell>

                                      <TableCell className="py-2">
                                        {href ? (
                                          <Button
                                            size="lg"
                                            className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 2xl:text-sm hover:cursor-pointer"
                                            onClick={() => handleFormDownload(form)}
                                            aria-label="Download Form"
                                          >
                                            <Download className="w-3 h-3 mr-1" />
                                            Download
                                          </Button>
                                        ) : (
                                          <span className="text-[10px] text-gray-400">
                                            No PDF
                                          </span>
                                        )}
                                      </TableCell>
                                    </TableRow>
                                  );
                                })}
                              </TableBody>
                            </Table>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* ---------- Sidebar (no col-span) ---------- */}
            <div className="min-w-0 px-1 sm:px-3 lg:px-4 xl:px-6">
              <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
                <Card className="shadow-sm border-gray-200">
                  <CardContent className="p-2 sm:p-3 h-[25rem]">
                    <PopularSearch className="mb-2 sm:mb-3" />
                    <Separator className="my-3" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

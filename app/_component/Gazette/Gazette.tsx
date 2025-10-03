"use client";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ChevronLeft, ChevronRight, Download, Eye, CalendarIcon } from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Calendar } from "@/components/ui/calendar";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { openProtectedDownload, handleAutoDownloadOnReturn } from "@/lib/download-auth";

// ---------- Types from API ----------
type GazetteItem = {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  state_slug: string | null;
  state_name: string | null;
  updated_date: string | null;
  effective_date: string | null;
  pdf_path?: string | null;
  pdf_url?: string | null;
  created_at?: string;
  updated_at?: string;
};

type ApiResponse = {
  data: GazetteItem[];
  links: { first: string | null; last: string | null; prev: string | null; next: string | null };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
  };
};

interface GazetteNotificationsClientProps {
  initialData: ApiResponse;
  initialPage: number;
  availableStates: string[];
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
const FILE_HOST = API_BASE;

// Utils
const ExpandableDescription = ({ description }: { description: string | null }) => {
  if (!description || description.trim() === "") return null;
  const cleanedDescription = description.trim();
  const words = cleanedDescription.split(/\s+/).filter((w) => w.length > 0);
  const shouldTruncate = words.length > 50;
  const displayText = shouldTruncate ? words.slice(0, 50).join(" ") + "..." : cleanedDescription;
  return (
    <p className="text-gray-700 leading-snug mt-3 text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-xs line-clamp-2">
      {displayText}
    </p>
  );
};

function normalizeFileUrl(url?: string | null, path?: string | null): string | null {
  if (url) {
    try {
      const u = new URL(url, FILE_HOST);
      const base = new URL(FILE_HOST);
      const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
      const origin = isLocal ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      return null;
    }
  }
  if (path) {
    let p = path.trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (!p.startsWith("/storage")) p = `/storage${p}`;
    const cleanPath = encodeURI(decodeURI(p.replace(/\/{2,}/g, "/")));
    return `${FILE_HOST}${cleanPath}`;
  }
  return null;
}

function formatOrdinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatPrettyDate(iso?: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${formatOrdinal(d.getDate())} ${d.toLocaleString("en-US", { month: "short" })}, ${d.getFullYear()}`;
}

function sameDay(a?: Date | null, iso?: string | null) {
  if (!a || !iso) return true;
  const b = new Date(iso);
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function Gazette({ initialData, initialPage, availableStates }: GazetteNotificationsClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // UI state
  const [q, setQ] = useState("");
  const [stateFilter, setStateFilter] = useState<string>("All States");
  const [effDate, setEffDate] = useState<Date | null>(null);
  const [updDate, setUpdDate] = useState<Date | null>(null);

  // Server data
  const serverData = initialData;
  const currentPage = serverData?.meta?.current_page ?? initialPage;
  const lastPage = serverData?.meta?.last_page ?? 1;
  const rows = serverData?.data ?? [];

  // Auto-download when returning from login with ?dl=...
  useEffect(() => {
    handleAutoDownloadOnReturn(
      { replace: (url: string) => router.replace(url) },
      "/gazette",
      typeof window !== "undefined" ? window.location.search : ""
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // URL pagination
  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (newPage === 1) params.delete("page");
      else params.set("page", String(newPage));
      const newUrl = params.toString() ? `?${params.toString()}` : "";
      router.push(`/gazette${newUrl}`);
    });
  };

  const handleStateChange = (value: string) => {
    setStateFilter(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  const filtered = useMemo(() => {
    let list = rows;

    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      list = list.filter(
        (r) =>
          r.title.toLowerCase().includes(needle) ||
          (r.short_description || "").toLowerCase().includes(needle)
      );
    }

    if (stateFilter && stateFilter !== "All States") {
      list = list.filter((r) => (r.state_name || "").toLowerCase() === stateFilter.toLowerCase());
    }

    if (effDate) list = list.filter((r) => sameDay(effDate, r.effective_date));
    if (updDate) list = list.filter((r) => sameDay(updDate, r.updated_date));

    return list;
  }, [rows, q, stateFilter, effDate, updDate]);

  const pageNumbers = useMemo(() => {
    const max = Math.min(lastPage, 5);
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [lastPage]);

  const handleSearchChange = (value: string) => {
    setQ(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  const stateOptions = useMemo(
    () =>
      (Array.isArray(availableStates) ? ["All States", ...availableStates] : ["All States"])
        .filter(Boolean)
        .map((s) => ({ label: s, value: s })),
    [availableStates]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        {/* Filter Bar */}
        <div className="mb-3 sm:mb-4 lg:-ml-3 lg:-mt-6">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:gap-1 p-2 sm:p-3">
            <SearchAndStateFilter
              searchValue={q}
              stateValue={stateFilter}
              onSearchChange={handleSearchChange}
              onStateChange={handleStateChange}
              isPending={isPending}
              states={stateOptions}
            />

            {/* Effective Date */}
            <div className="flex-shrink-0 sm:w-36 lg:w-48">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
                    disabled={isPending}
                    aria-label="Effective Date"
                  >
                    <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{effDate ? effDate?.toLocaleDateString() : "Effective Date"}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={effDate ?? undefined}
                    onSelect={(d) => setEffDate(d ?? null)}
                    initialFocus
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Updated Date */}
            <div className="flex-shrink-0 sm:w-36 lg:w-48">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-white hover:bg-gray-50 border-gray-300 h-8 sm:h-9 lg:h-10 px-3 text-xs sm:text-sm"
                    disabled={isPending}
                    aria-label="Updated Date"
                  >
                    <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{updDate ? updDate?.toLocaleDateString() : "Updated Date"}</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={updDate ?? undefined}
                    onSelect={(d) => setUpdDate(d ?? null)}
                    initialFocus
                    className="rounded-md border"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-24 z-10">
              <Card className="p-2 md:p-3 xl:p-0.5 2xl:p-6">
                <CardContent className="p-2">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-4 lg:order-1 order-2">
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                <div>
                  <div className="flex justify-between">
                    <h1 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                      Gazette Notifications :
                    </h1>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-[10px] min-[375px]:text-xs sm:text-sm text-justify pb-2">
                    Explore the latest Gazette Notifications for timely updates on government decisions, legal changes, and compliance requirements. Stay well-informed with official publications that guide businesses, employers, and professionals effectively.
                  </p>
                </div>
              </div>
            </div>

            {isPending && (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
                <span className="ml-2 text-sm text-gray-600">Loading...</span>
              </div>
            )}

            {!isPending && (
              <>
                {filtered?.length === 0 ? (
                  <p className="text-sm text-gray-600">No notifications found.</p>
                ) : (
                  <div className="lg:space-y-2">
                    {filtered?.map((n) => {
                      const updated = formatPrettyDate(n?.updated_date);
                      const effective = formatPrettyDate(n?.effective_date);
                      const downloadUrl = normalizeFileUrl(n?.pdf_url, n?.pdf_path);

                      return (
                        <div
                          key={n?.id}
                          className="group bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
                        >
                          <div className="p-2 sm:p-3 lg:p-1">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-2.5 md:gap-3">
                              <div className="min-w-0">
                                <h4 className="text-[12px] min-[375px]:text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                                  {n?.title}
                                </h4>

                                <ExpandableDescription description={n?.short_description} />

                                <div className="mt-2 md:mt-4">
                                  <Button
                                    size="sm"
                                    className="bg-orange-400 text-white hover:bg-orange-500 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                    asChild
                                    aria-label="Read More"
                                  >
                                    <Link href={`/gazette-details/${n?.slug}`}>
                                      <Eye className="w-3 h-3 2xl:w-4 2xl:h-4" />
                                      <span className="whitespace-nowrap">Read More</span>
                                    </Link>
                                  </Button>
                                </div>
                              </div>

                              <div className="md:pl-3 flex flex-col items-end justify-between gap-2">
                                <Badge
                                  variant="outline"
                                  className="bg-blue-50 text-blue-700 border-blue-200 text-[12px] sm:text-[9px] lg:text-[12px] px-1.5 py-0.5 font-medium"
                                >
                                  {n?.state_name || "Central"}
                                </Badge>

                                <div className="space-y-1 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem]">
                                  {updated && (
                                    <div>
                                      <span className="text-slate-500 font-semibold">Updated Date:&nbsp;</span>
                                      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
                                        {updated}
                                      </span>
                                    </div>
                                  )}
                                  {effective && (
                                    <div>
                                      <span className="text-slate-500 font-semibold">Effective Date:&nbsp;</span>
                                      <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-rose-600 tabular-nums underline decoration-orange-300/60">
                                        {formatPrettyDate(n?.effective_date)}
                                      </span>
                                    </div>
                                  )}
                                </div>

                                {(downloadUrl && downloadUrl.trim() !== "") && (
                                  <Button
                                    size="sm"
                                    className="mt-1 md:mt-2 bg-orange-500 text-white hover:bg-orange-600 h-6 sm:h-6 lg:h-8 px-2 sm:px-2.5 lg:px-3 text-[9px] sm:text-[10px] lg:text-xs font-medium rounded-sm inline-flex items-center gap-1 shrink-0 w-auto max-w-full hover:cursor-pointer"
                                    aria-label="Download"
                                    onClick={() => openProtectedDownload(router, downloadUrl)}
                                  >
                                    <Download className="w-3 h-3 2xl:w-4 2xl:h-4" />
                                    <span className="whitespace-nowrap">Download</span>
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* Pagination */}
            {!isPending && lastPage > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
                  aria-label="Previous"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>

                {pageNumbers?.map((p) => (
                  <Button
                    key={p}
                    variant={currentPage === p ? "default" : "outline"}
                    size="sm"
                    className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${currentPage === p
                        ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                      }`}
                    aria-label={`Page ${p}`}
                    onClick={() => handlePageChange(p)}
                  >
                    {p}
                  </Button>
                ))}

                {lastPage > 5 && <span className="px-1 text-gray-400 text-[10px] sm:text-xs">…</span>}

                {lastPage > 5 && (
                  <Button
                    variant={currentPage === lastPage ? "default" : "outline"}
                    size="sm"
                    className={`h-7 sm:h-8 px-2.5 sm:px-3.5 text-[10px] sm:text-xs ${currentPage === lastPage
                        ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                      }`}
                    aria-label={`Page ${lastPage}`}
                    onClick={() => handlePageChange(lastPage)}
                  >
                    {lastPage}
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 sm:h-8 px-2 sm:px-3 text-[10px] sm:text-xs border-gray-300 hover:bg-gray-50"
                  aria-label="Next"
                  disabled={currentPage === lastPage}
                  onClick={() => handlePageChange(Math.min(lastPage, currentPage + 1))}
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

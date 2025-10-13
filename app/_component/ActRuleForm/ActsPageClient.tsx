"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useTransition } from "react";

// ---------- Types ----------
type ActItem = {
  id: number;
  title: string;
  slug: string;
  state: string;
  short_description: string;
  act_doc_url?: string | null;
  rule_doc_url?: string | null;
  forms_count?: number;
  created_at?: string;
};

type ApiResponse = {
  data: ActItem[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
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

type StateApiResponse = { states: { id: number; name: string }[] };

interface ActsPageClientProps {
  initialData: ApiResponse;
  initialPage: number;
}

const ExpandableDescription = ({ description }: { description: string }) => {
  if (!description || description.trim() === "") {
    return null;
  }

  // Clean the description and split into words
  const cleanedDescription = description.trim();
  const words = cleanedDescription
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const shouldTruncate = words.length > 50;
  const displayText = shouldTruncate
    ? words.slice(0, 50).join(" ") + "..."
    : cleanedDescription;

  return (
    <div className="relative mt-2">
      <p className="text-gray-700 leading-snug text-[11px] sm:text-[0.8rem] lg:text-xs break-words line-clamp-2">
        {displayText}
      </p>
    </div>
  );
};

export default function ActsPageClient({
  initialData,
  initialPage,
}: ActsPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [states, setStates] = useState<{ id: number; name: string }[]>([]);
  const [stateFilter, setStateFilter] = useState<string>("");
  const [q, setQ] = useState<string>("");

  const serverData = initialData;

  const currentPage = serverData?.meta?.current_page ?? initialPage;
  const lastPage = serverData?.meta?.last_page ?? 1;
  const acts = serverData?.data ?? [];

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      if (newPage === 1) params.delete("page");
      else params.set("page", String(newPage));
      const newUrl = params.toString() ? `?${params.toString()}` : "";
      router.push(`/acts-rule-form${newUrl}`);
    });
  };

  const filtered = useMemo(() => {
    let rows = acts;
    if (stateFilter && stateFilter !== "All States") {
      rows = rows.filter(
        (r) => r.state.toLowerCase() === stateFilter.toLowerCase()
      );
    }
    if (q.trim()) {
      const needle = q.trim().toLowerCase();
      rows = rows?.filter(
        (r) =>
          r?.title?.toLowerCase().includes(needle) ||
          r?.short_description?.toLowerCase().includes(needle)
      );
    }
    return rows;
  }, [acts, q, stateFilter]);

  const pageNumbers = useMemo(() => {
    const max = Math.min(lastPage, 5);
    return Array.from({ length: max }, (_, i) => i + 1);
  }, [lastPage]);

  const handleSearchChange = (value: string) => {
    setQ(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  const handleStateChange = (value: string) => {
    setStateFilter(value);
    if (currentPage !== 1) handlePageChange(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-6">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <div className="mb-6">
              <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                Labour Acts &amp; Regulations :
              </h2>
              <p className="text-gray-600 leading-relaxed text-[10px] sm:text-sm text-justify">
                Stay updated with Labour Acts & Regulations that define
                compliance standards, employee rights, and workplace
                obligations. This ensures businesses avoid penalties, stay
                legally safe, and maintain smooth and lawful working
                environments.
              </p>
            </div>

            <div className="my-6">
              <SearchAndStateFilter
                states={states}
                onSearchChange={handleSearchChange}
                onStateChange={handleStateChange}
                searchValue={q}
                stateValue={stateFilter}
                isPending={isPending}
              />
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
                  <div className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    No results found for your filters.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-3">
                    {filtered?.map((act) => (
                      <div
                        key={act?.id}
                        className="w-full bg-orange-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border-l-4 border-l-orange-500 overflow-hidden"
                      >
                        <div className="p-3">
                          <div className="grid grid-cols-[1fr_auto] gap-3">
                            <div className="min-w-0">
                              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2">
                                {act?.title}
                              </h4>

                              <ExpandableDescription
                                description={act?.short_description}
                              />

                              <div className="mt-2">
                                <Button
                                  size="sm"
                                  className="bg-orange-400 text-white hover:bg-orange-500 h-8 px-3 text-xs font-medium rounded-sm inline-flex items-center gap-1"
                                  asChild
                                >
                                  <Link
                                    href={`/acts-rule-form-details/${
                                      act?.slug || act?.id
                                    }`}
                                  >
                                    <Eye className="w-4 h-4" />
                                    <span>Read More</span>
                                  </Link>
                                </Button>
                              </div>
                            </div>

                            <div className="pl-3 self-start justify-self-end">
                              <span className="inline-flex items-center bg-blue-50 text-blue-700 border border-blue-200 text-[11px] lg:text-[12px] px-1.5 py-0.5 font-medium rounded">
                                {act?.state || "All India"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Pagination */}
            {!isPending && serverData && lastPage > 1 && (
              <div className="flex justify-center items-center gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                {pageNumbers?.map((p) => (
                  <Button
                    key={p}
                    variant={currentPage === p ? "default" : "outline"}
                    size="sm"
                    className={
                      currentPage === p
                        ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                        : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                    }
                    onClick={() => handlePageChange(p)}
                    aria-label={`Page ${p}`}
                  >
                    {p}
                  </Button>
                ))}

                {lastPage > 5 && (
                  <>
                    <span className="px-1 text-gray-400 text-xs">…</span>
                    <Button
                      variant={currentPage === lastPage ? "default" : "outline"}
                      size="sm"
                      className={
                        currentPage === lastPage
                          ? "h-8 px-3 text-xs bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
                          : "h-8 px-3 text-xs border-gray-300 hover:bg-orange-50 hover:border-orange-200"
                      }
                      onClick={() => handlePageChange(lastPage)}
                      aria-label={`Page ${lastPage}`}
                    >
                      {lastPage}
                    </Button>
                  </>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-3 text-xs border-gray-300 hover:bg-gray-50"
                  disabled={currentPage >= lastPage}
                  onClick={() =>
                    handlePageChange(Math.min(lastPage, currentPage + 1))
                  }
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>

          {/* ---- Sidebar ---- */}
          <div className="min-w-0">
            <div className="sticky top-24">
              <div className="rounded-lg border bg-white shadow-sm">
                <div className="p-4">
                  <PopularSearch className="mb-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

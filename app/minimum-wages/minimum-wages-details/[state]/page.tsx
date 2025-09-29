// import type { Metadata } from "next";
// import { notFound, redirect } from "next/navigation";
// import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min
// const API_BASE = (process.env.NEXT_PUBLIC_API_BASE as string).replace(/\/$/, ""); 
// // e.g. https://prns.prisminfoways.com/api/minimum-wages

// type ApiResp = { data: MWSlugData };
// type ListItem = { state: string; state_slug: string };

// function norm(s: string) {
//   return s.trim().toLowerCase().replace(/%20|\s|_/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
// }

// async function tryFetchBySlug(slug: string): Promise<MWSlugData | null> {
//   try {
//     const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, { next: { revalidate } });
//     if (!res.ok) return null;
//     const json = (await res.json()) as ApiResp;
//     return json?.data ?? null;
//   } catch {
//     return null;
//   }
// }

// async function resolveSlugFromName(name: string): Promise<string | null> {
//   // Hit list endpoint to map "Assam" -> "soi"
//   try {
//     const res = await fetch(`${API_BASE}`, { next: { revalidate: 300 } });
//     if (!res.ok) return null;
//     const json = (await res.json()) as { data: ListItem[] };
//     const match = json?.data?.find(
//       (x) => x.state?.toLowerCase() === name.toLowerCase()
//     );
//     return match?.state_slug ?? null;
//   } catch {
//     return null;
//   }
// }

// async function getDetailFlexible(raw: string): Promise<{ data: MWSlugData; slug: string } | null> {
//   // 1) Assume it’s already a slug
//   const asSlug = norm(raw);
//   const bySlug = await tryFetchBySlug(asSlug);
//   if (bySlug) return { data: bySlug, slug: asSlug };

//   // 2) Maybe it’s a state name (e.g. "Assam") → resolve to canonical slug (e.g. "soi")
//   const resolved = await resolveSlugFromName(raw);
//   if (!resolved) return null;

//   const byResolved = await tryFetchBySlug(resolved);
//   if (!byResolved) return null;

//   return { data: byResolved, slug: resolved };
// }

// /* ---------------- Metadata ---------------- */
// export async function generateMetadata(
//   { params }: { params: { state: string } }
// ): Promise<Metadata> {
//   const result = await getDetailFlexible(params.state);
//   if (!result) {
//     return {
//       title: "State Not Found | Minimum Wages",
//       description: "Requested state minimum wage information was not found.",
//     };
//   }
//   const d = result.data;
//   return {
//     title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
//     description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date ?? "—"}.`,
//     keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
//   };
// }

// /* ---------------- Page ---------------- */
// export default async function Page(
//   { params }: { params: { state: string } }
// ) {
//   const result = await getDetailFlexible(params.state);
//   if (!result) notFound();

//   const canonicalPath = `/minimum-wages/minimum-wages-details/${result.slug}`;
//   if (params.state !== result.slug) {
//     redirect(canonicalPath);
//   }

//   return <MinimumWagesDetails data={result.data} apiBase={API_BASE} />;
// }
















"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

/* ShadCN UI */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Globe, IndianRupee, Check, ChevronsUpDown, Calendar } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

/* Optional */
import PopularSearch from "@/app/PopularSearch/PopularSearch";

/* ================== Types ================== */
type Row = Record<string, string | null>;
type TableBlock = { title?: string | null; headers: string[]; rows: Row[] };
type Tiles = {
  form_title?: string | null;
  form_url?: string | null;
  calculator_title?: string | null;
  calculator_url?: string | null;
  website_url?: string | null;
};
type MWSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  minimum_wage_rates: TableBlock;
  employment_categories_benefits: TableBlock;
  interest_penality?: TableBlock;
  tiles?: Tiles;
};
type ApiResp = { data: MWSlugData };

/* ================== Utils ================== */
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);
const cell = (row: Row, header: string) => row?.[header] ?? "—";
const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
const isSkilledCol = (h: string) => /skilled/i.test(h);
function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
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

/* ================== Period Combobox (UI only) ================== */
const PERIODS = [
  "For the period – 1st Jul, 2025",
  "For the period – 1st Jan, 2025",
  "For the period – 1st Jul, 2024",
  "For the period – 1st Jan, 2024",
  "For the period – 1st Jul, 2023",
  "For the period – 1st Jan, 2023",
  "For the period – 1st Jul, 2022",
  "For the period – 1st Jan, 2022",
  "For the period – 1st Jul, 2021",
  "For the period – 1st Jan, 2021",
];

function PeriodCombobox() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string>("For the period – 1st Jul, 2021");

  return (
    <div className="w-full sm:w-[340px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={cn("w-full justify-between h-10", "border-orange-200 hover:bg-orange-50 hover:border-orange-300")}
          >
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-orange-500" />
              <span className="text-slate-800">{value}</span>
            </span>
            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
          <Command>
            <CommandInput placeholder="Search period…" />
            <CommandList>
              <CommandEmpty>No period found.</CommandEmpty>
              <CommandGroup heading="Available Periods">
                {PERIODS.map((label) => (
                  <CommandItem
                    key={label}
                    onSelect={() => {
                      setValue(label);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === label ? "opacity-100 text-orange-600" : "opacity-0")} />
                    {label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

/* ================== Page (Client-only CSR) ================== */
const API_BASE = process.env.NEXT_PUBLIC_API_BASE!; 

export default function Page() {
  const params = useParams<{ state: string }>();
  const slug = Array.isArray(params?.state) ? params.state[0] : params?.state;

  const [data, setData] = React.useState<MWSlugData | null>(null);
  const [err, setErr] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let alive = true;
    async function run() {
      if (!API_BASE || !slug) return;
      setLoading(true);
      setErr(null);
      try {
        const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, { cache: "no-store" });
        if (!res.ok) {
          const t = await res.text().catch(() => "");
          throw new Error(`HTTP ${res.status} ${t || ""}`);
        }
        const json = (await res.json()) as ApiResp;
        if (!alive) return;
        setData(json?.data ?? null);
        console.log(data)
        if (!json?.data) setErr("Not found");
      } catch (e: any) {
        if (!alive) return;
        setErr(e?.message || "Failed to load");
        setData(null);
      } finally {
        if (alive) setLoading(false);
      }
    }
    run();
    return () => {
      alive = false;
    };
  }, [slug]);

  /* Loading UI */
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="h-6 w-64 bg-gray-200 animate-pulse rounded mb-4" />
          <div className="h-10 w-80 bg-gray-200 animate-pulse rounded mb-6" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="h-64 bg-gray-200 animate-pulse rounded" />
            <div className="h-64 bg-gray-200 animate-pulse rounded" />
          </div>
        </div>
      </div>
    );
  }

  /* Error / Not Found UI */
  if (err || !data) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-10 text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-2">Minimum Wages</h1>
          <p className="text-slate-600 mb-6">State not found or data unavailable for: <span className="font-semibold">{slug}</span></p>
          <Button asChild>
            <Link href="/minimum-wages">Back to list</Link>
          </Button>
        </div>
      </div>
    );
  }

  return <MinimumWageDetails data={data} apiBase={API_BASE} />;
}

/* ================== Details (same file, client) ================== */
function MinimumWageDetails({ data, apiBase }: { data: MWSlugData; apiBase: string }) {
  const mw = data?.minimum_wage_rates;
  const cat = data?.employment_categories_benefits;
  const ip = data?.interest_penality;
  const tiles = data?.tiles ?? {};

  const formUrlNorm = normalizeUrl(tiles.form_url, apiBase);
  const calcUrlNorm = normalizeUrl(tiles.calculator_url, apiBase);
  const websiteUrlNorm = normalizeUrl(tiles.website_url, apiBase);

  const formTitle = fmt(tiles.form_title);
  const formBtnLabel = formTitle !== "—" ? `${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {/* Mobile PopularSearch */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          <div className="lg:col-span-3">
            {/* Header + Combobox */}
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
                  Minimum Wages of {data?.state?.name} :
                </h1>
                <p className="text-xs text-slate-500 mt-1">
                  Updated: {fmt(data?.updated_date)} · Effective: {fmt(data?.effective_date)}
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-2">
                <PeriodCombobox />
              </div>
            </div>

            {/* ====== Table: Minimum Wage Rates ====== */}
            {mw && (
              <>
                {/* Desktop */}
                <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
                  <CardHeader className="pb-1 lg:pb-2">
                    <CardTitle className="text-base lg:text-lg font-bold">{mw?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-orange-500">
                            {mw?.headers?.map((h) => (
                              <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {mw?.rows?.map((r, idx) => (
                            <tr key={idx} className="hover:bg-orange-50 transition-colors">
                              {mw?.headers?.map((h) => (
                                <td
                                  key={h}
                                  className={cn("px-3 py-4 text-sm text-gray-900 break-words text-center", isSkilledCol(h) && "text-green-600 font-semibold")}
                                >
                                  {fmt(cell(r, h))}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {(mw?.rows?.length ?? 0) === 0 && (
                            <tr>
                              <td colSpan={mw?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
                      <CardTitle className="text-base font-bold">{mw?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-3">
                      {mw?.rows?.map((r, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
                          {mw?.headers?.map((h) => (
                            <div key={h} className="flex gap-2 justify-between p-2 rounded">
                              <span className="font-medium text-gray-600">{h}:</span>
                              <span className={cn(isSkilledCol(h) && "text-green-600 font-semibold")}>{fmt(cell(r, h))}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                      {(mw?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {/* ====== Table: Employment Categories ====== */}
            {cat && (
              <>
                {/* Desktop */}
                <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
                  <CardHeader className="pb-1 lg:pb-2">
                    <CardTitle className="text-base lg:text-lg font-bold">Employment Categories &amp; Additional Benefits</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-orange-500">
                            {cat?.headers?.map((h) => (
                              <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {cat?.rows?.map((r, idx) => (
                            <tr key={idx} className="hover:bg-orange-50 transition-colors">
                              {cat?.headers?.map((h) => (
                                <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
                                  {fmt(cell(r, h))}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {(cat?.rows?.length ?? 0) === 0 && (
                            <tr>
                              <td colSpan={cat?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
                      <CardTitle className="text-base font-bold">Employment Categories &amp; Additional Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-3">
                      {cat?.rows?.map((r, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
                          {cat?.headers?.map((h) => (
                            <div key={h} className="flex gap-2 justify-between p-2 rounded">
                              <span className="font-medium text-gray-600">{h}:</span>
                              <span>{fmt(cell(r, h))}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                      {(cat?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {/* ====== Table: Interest & Penalty ====== */}
            {ip && (
              <>
                {/* Desktop */}
                <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
                  <CardHeader className="pb-1 lg:pb-2">
                    <CardTitle className="text-base lg:text-lg font-bold">{ip?.title || "Interest & Penalty"}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="w-full overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-orange-500">
                            {ip?.headers?.map((h) => (
                              <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {ip?.rows?.map((r, idx) => (
                            <tr key={idx} className="hover:bg-orange-50 transition-colors">
                              {ip?.headers?.map((h) => (
                                <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
                                  {fmt(cell(r, h))}
                                </td>
                              ))}
                            </tr>
                          ))}
                          {(ip?.rows?.length ?? 0) === 0 && (
                            <tr>
                              <td colSpan={ip?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
                      <CardTitle className="text-base font-bold">{ip?.title || "Interest & Penalty"}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-3 space-y-3">
                      {ip?.rows?.map((r, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
                          {ip?.headers?.map((h) => (
                            <div key={h} className="flex gap-2 justify-between p-2 rounded">
                              <span className="font-medium text-gray-600">{h}:</span>
                              <span>{fmt(cell(r, h))}</span>
                            </div>
                          ))}
                        </div>
                      ))}
                      {(ip?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
                    </CardContent>
                  </Card>
                </div>
              </>
            )}

            {/* ====== Quick Actions ====== */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
              {/* Download Notifications */}
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">{formTitle !== "—" ? formTitle : "Download Notifications"}</h3>
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

          {/* ===== Sidebar ===== */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-2 lg:top-3">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="lg:p-3 xl:p-4">
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

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


import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 1800; // 30 min ISR

type ApiResponse = { data: MWSlugData };

const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");

const MW_BASE = `${BASE_ROOT}/api/minimum-wages`; // final prefix for all calls

const ensureConfig = () => {
  if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
  if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
};

const normSlug = (s: string) =>
  s.trim()
    .toLowerCase()
    .replace(/%20|\s|_/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
  ensureConfig();

  const slug = normSlug(stateParam);
  const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

  try {
    const res = await fetch(url, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });

    if (res.status === 404) {
      // helpful server log + consistent UX
      console.error("[MW] 404 for URL:", url);
      return null;
    }
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`[MW] HTTP ${res.status} @ ${url} :: ${text || res.statusText}`);
    }

    const json = (await res.json()) as ApiResponse;
    return json?.data ?? null;
  } catch (e) {
    console.error("[MW] fetch failed:", e);
    return null;
  }
}

/* ---------- Metadata ---------- */
export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const data = await getMinimumWageState(state);

  if (!data) {
    return { title: "Minimum Wages", description: "Minimum wage details not found." };
  }

  return {
    title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
    description: `Minimum wage tables, categories & benefits for ${data.state.name}. Updated: ${data.updated_date ?? "—"}.`,
    keywords: [`${data.state.name} minimum wages`, "wage rates", "labour compliance", `${data.state.name} labour laws`],
  };
}

/* ---------- Page ---------- */
export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const data = await getMinimumWageState(state);

  if (!data) {
    // show 404 page instead of crashing the route
    notFound();
  }

  return <MinimumWagesDetails data={data} apiBase={MW_BASE} />;
}












// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// /* ShadCN UI */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Globe, IndianRupee, Check, ChevronsUpDown, Calendar } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

// /* Optional */
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// /* ================== Types ================== */
// type Row = Record<string, string | null>;
// type TableBlock = { title?: string | null; headers: string[]; rows: Row[] };
// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   calculator_title?: string | null;
//   calculator_url?: string | null;
//   website_url?: string | null;
// };
// type MWSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   minimum_wage_rates: TableBlock;
//   employment_categories_benefits: TableBlock;
//   interest_penality?: TableBlock;
//   tiles?: Tiles;
// };
// type ApiResp = { data: MWSlugData };

// /* ================== Utils ================== */
// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);
// const cell = (row: Row, header: string) => row?.[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
// const isSkilledCol = (h: string) => /skilled/i.test(h);
// function cn(...classes: (string | false | null | undefined)[]) {
//   return classes.filter(Boolean).join(" ");
// }
// function fileNameFromUrl(u: string): string {
//   try {
//     const url = new URL(u);
//     const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
//     return last || "Download";
//   } catch {
//     return "Download";
//   }
// }
// function normalizeUrl(input?: string | null, apiBase?: string): string | null {
//   if (!input) return null;
//   const val = input.trim();
//   const API_ORIGIN = apiBase ? new URL(apiBase).origin : "";
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return (API_ORIGIN || "") + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     if (!apiBase) return null;
//     if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
//     if (val.startsWith("storage/") || val.startsWith("/storage/")) {
//       return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
//     }
//     return null;
//   }
// }

// /* ================== Period Combobox (UI only) ================== */
// const PERIODS = [
//   "For the period – 1st Jul, 2025",
//   "For the period – 1st Jan, 2025",
//   "For the period – 1st Jul, 2024",
//   "For the period – 1st Jan, 2024",
//   "For the period – 1st Jul, 2023",
//   "For the period – 1st Jan, 2023",
//   "For the period – 1st Jul, 2022",
//   "For the period – 1st Jan, 2022",
//   "For the period – 1st Jul, 2021",
//   "For the period – 1st Jan, 2021",
// ];

// function PeriodCombobox() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState<string>("For the period – 1st Jul, 2021");

//   return (
//     <div className="w-full sm:w-[340px]">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className={cn("w-full justify-between h-10", "border-orange-200 hover:bg-orange-50 hover:border-orange-300")}
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-slate-800">{value}</span>
//             </span>
//             <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//           <Command>
//             <CommandInput placeholder="Search period…" />
//             <CommandList>
//               <CommandEmpty>No period found.</CommandEmpty>
//               <CommandGroup heading="Available Periods">
//                 {PERIODS.map((label) => (
//                   <CommandItem
//                     key={label}
//                     onSelect={() => {
//                       setValue(label);
//                       setOpen(false);
//                     }}
//                     className="cursor-pointer"
//                   >
//                     <Check className={cn("mr-2 h-4 w-4", value === label ? "opacity-100 text-orange-600" : "opacity-0")} />
//                     {label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// /* ================== Page (Client-only CSR) ================== */
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!; 

// export default function Page() {
//   const params = useParams<{ state: string }>();
//   const slug = Array.isArray(params?.state) ? params.state[0] : params?.state;

//   const [data, setData] = React.useState<MWSlugData | null>(null);
//   const [err, setErr] = React.useState<string | null>(null);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     let alive = true;
//     async function run() {
//       if (!API_BASE || !slug) return;
//       setLoading(true);
//       setErr(null);
//       try {
//         const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, { cache: "no-store" });
//         if (!res.ok) {
//           const t = await res.text().catch(() => "");
//           throw new Error(`HTTP ${res.status} ${t || ""}`);
//         }
//         const json = (await res.json()) as ApiResp;
//         if (!alive) return;
//         setData(json?.data ?? null);
//         console.log(data)
//         if (!json?.data) setErr("Not found");
//       } catch (e: any) {
//         if (!alive) return;
//         setErr(e?.message || "Failed to load");
//         setData(null);
//       } finally {
//         if (alive) setLoading(false);
//       }
//     }
//     run();
//     return () => {
//       alive = false;
//     };
//   }, [slug]);

//   /* Loading UI */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-6xl px-4 py-6">
//           <div className="h-6 w-64 bg-gray-200 animate-pulse rounded mb-4" />
//           <div className="h-10 w-80 bg-gray-200 animate-pulse rounded mb-6" />
//           <div className="grid gap-4 md:grid-cols-2">
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   /* Error / Not Found UI */
//   if (err || !data) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-3xl px-4 py-10 text-center">
//           <h1 className="text-2xl font-bold text-slate-800 mb-2">Minimum Wages</h1>
//           <p className="text-slate-600 mb-6">State not found or data unavailable for: <span className="font-semibold">{slug}</span></p>
//           <Button asChild>
//             <Link href="/minimum-wages">Back to list</Link>
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   return <MinimumWageDetails data={data} apiBase={API_BASE} />;
// }

// /* ================== Details (same file, client) ================== */
// function MinimumWageDetails({ data, apiBase }: { data: MWSlugData; apiBase: string }) {
//   const mw = data?.minimum_wage_rates;
//   const cat = data?.employment_categories_benefits;
//   const ip = data?.interest_penality;
//   const tiles = data?.tiles ?? {};

//   const formUrlNorm = normalizeUrl(tiles.form_url, apiBase);
//   const calcUrlNorm = normalizeUrl(tiles.calculator_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(tiles.website_url, apiBase);

//   const formTitle = fmt(tiles.form_title);
//   const formBtnLabel = formTitle !== "—" ? `${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Mobile PopularSearch */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
//           <div className="lg:col-span-3">
//             {/* Header + Combobox */}
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Minimum Wages of {data?.state?.name} :
//                 </h1>
//                 <p className="text-xs text-slate-500 mt-1">
//                   Updated: {fmt(data?.updated_date)} · Effective: {fmt(data?.effective_date)}
//                 </p>
//               </div>
//               <div className="flex flex-col items-start sm:items-end gap-2">
//                 <PeriodCombobox />
//               </div>
//             </div>

//             {/* ====== Table: Minimum Wage Rates ====== */}
//             {mw && (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">{mw?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {mw?.headers?.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {mw?.rows?.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {mw?.headers?.map((h) => (
//                                 <td
//                                   key={h}
//                                   className={cn("px-3 py-4 text-sm text-gray-900 break-words text-center", isSkilledCol(h) && "text-green-600 font-semibold")}
//                                 >
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                           {(mw?.rows?.length ?? 0) === 0 && (
//                             <tr>
//                               <td colSpan={mw?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
//                                 No data available.
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">{mw?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {mw?.rows?.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {mw?.headers?.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span className={cn(isSkilledCol(h) && "text-green-600 font-semibold")}>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {(mw?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ====== Table: Employment Categories ====== */}
//             {cat && (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">Employment Categories &amp; Additional Benefits</CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {cat?.headers?.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {cat?.rows?.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {cat?.headers?.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                           {(cat?.rows?.length ?? 0) === 0 && (
//                             <tr>
//                               <td colSpan={cat?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
//                                 No data available.
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">Employment Categories &amp; Additional Benefits</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {cat?.rows?.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {cat?.headers?.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {(cat?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ====== Table: Interest & Penalty ====== */}
//             {ip && (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">{ip?.title || "Interest & Penalty"}</CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {ip?.headers?.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {ip?.rows?.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {ip?.headers?.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                           {(ip?.rows?.length ?? 0) === 0 && (
//                             <tr>
//                               <td colSpan={ip?.headers?.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
//                                 No data available.
//                               </td>
//                             </tr>
//                           )}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">{ip?.title || "Interest & Penalty"}</CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {ip?.rows?.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {ip?.headers?.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {(ip?.rows?.length ?? 0) === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ====== Quick Actions ====== */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Notifications */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">{formTitle !== "—" ? formTitle : "Download Notifications"}</h3>
//                   {formUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
//                       aria-label={formBtnLabel}
//                     >
//                       <Link href={formUrlNorm} target="_blank" rel="noopener noreferrer" aria-label={formBtnLabel}>
//                         {formBtnLabel}
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label={formBtnLabel}>
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Wage Calculator */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <IndianRupee className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Wage Calculator</h3>
//                   {calcUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                       aria-label="Open Calculator"
//                     >
//                       <Link href={calcUrlNorm} target="_blank" rel="noopener noreferrer" aria-label="Open Calculator">
//                         Open Calculator
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label="Open Calculator">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Globe className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
//                   {websiteUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                       aria-label="Visit Website"
//                     >
//                       <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer" aria-label="Visit Website">
//                         Visit Website
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8" aria-label="Visit Website">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* ===== Sidebar ===== */}
//           <div className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-2 lg:top-3">
//               <Card className="shadow-sm hover:shadow-md transition-shadow">
//                 <CardContent className="lg:p-3 xl:p-4">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// /* ShadCN UI */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Download, Globe, IndianRupee, Check, ChevronsUpDown, Calendar } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

// /* Optional */
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// /* ================== Types ================== */
// type Row = Record<string, string | null>;
// type TableBlock = { title?: string | null; headers: string[]; rows: Row[] };
// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   calculator_title?: string | null;
//   calculator_url?: string | null;
//   website_url?: string | null;
// };
// type MWSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   minimum_wage_rates: TableBlock;
//   employment_categories_benefits: TableBlock;
//   interest_penality?: TableBlock;
//   tiles?: Tiles;
// };
// type ApiResp = { data: MWSlugData };

// /* ================== Utils ================== */
// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);
// const cell = (row: Row, header: string) => row?.[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
// const isSkilledCol = (h: string) => /skilled/i.test(h);

// function cn(...classes: (string | false | null | undefined)[]) {
//   return classes.filter(Boolean).join(" ");
// }

// function fileNameFromUrl(u: string): string {
//   try {
//     const url = new URL(u);
//     const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
//     return last || "Download";
//   } catch {
//     return "Download";
//   }
// }

// function normalizeUrl(input?: string | null, apiBase?: string): string | null {
//   if (!input) return null;
//   const val = input.trim();
//   const API_ORIGIN = apiBase ? new URL(apiBase).origin : "";
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return (API_ORIGIN || "") + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     if (!apiBase) return null;
//     if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
//     if (val.startsWith("storage/") || val.startsWith("/storage/")) {
//       return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
//     }
//     return null;
//   }
// }

// /* ================== Period Combobox ================== */
// const PERIODS = [
//   "For the period – 1st Jul, 2025",
//   "For the period – 1st Jan, 2025",
//   "For the period – 1st Jul, 2024",
//   "For the period – 1st Jan, 2024",
//   "For the period – 1st Jul, 2023",
//   "For the period – 1st Jan, 2023",
//   "For the period – 1st Jul, 2022",
//   "For the period – 1st Jan, 2022",
//   "For the period – 1st Jul, 2021",
//   "For the period – 1st Jan, 2021",
// ];

// function PeriodCombobox() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState<string>("For the period – 1st Jul, 2021");

//   return (
//     <div className="w-full sm:w-[340px]">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className={cn("w-full justify-between h-10", "border-orange-200 hover:bg-orange-50 hover:border-orange-300")}
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-slate-800">{value}</span>
//             </span>
//             <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//           <Command>
//             <CommandInput placeholder="Search period…" />
//             <CommandList>
//               <CommandEmpty>No period found.</CommandEmpty>
//               <CommandGroup heading="Available Periods">
//                 {PERIODS.map((label) => (
//                   <CommandItem
//                     key={label}
//                     onSelect={() => {
//                       setValue(label);
//                       setOpen(false);
//                     }}
//                     className="cursor-pointer"
//                   >
//                     <Check className={cn("mr-2 h-4 w-4", value === label ? "opacity-100 text-orange-600" : "opacity-0")} />
//                     {label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// /* ================== DEBUG Component ================== */
// function ApiDebugger({ data, error, loading, apiUrl }: any) {
//   const [showDebug, setShowDebug] = React.useState(false);

//   if (!showDebug) {
//     return (
//       <div className="fixed bottom-4 right-4 z-50">
//         <Button
//           onClick={() => setShowDebug(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
//           size="sm"
//         >
//           🐛 Debug API
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-auto p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">API Debug Information</h2>
//           <Button onClick={() => setShowDebug(false)} variant="outline" size="sm">
//             ✕ Close
//           </Button>
//         </div>

//         <div className="space-y-4">
//           {/* API URL */}
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">API URL:</h3>
//             <code className="bg-gray-100 p-2 rounded block text-sm break-all">
//               {apiUrl || "No URL"}
//             </code>
//           </div>

//           {/* Loading State */}
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">Loading State:</h3>
//             <span className={`px-2 py-1 rounded text-sm ${loading ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
//               {loading ? "Loading..." : "Loaded"}
//             </span>
//           </div>

//           {/* Error State */}
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">Error State:</h3>
//             <div className={`p-2 rounded text-sm ${error ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
//               {error || "No errors"}
//             </div>
//           </div>

//           {/* Data Structure */}
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">Data Structure:</h3>
//             <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-96">
//               {JSON.stringify(data, null, 2)}
//             </pre>
//           </div>

//           {/* Data Analysis */}
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">Data Analysis:</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//               <div>
//                 <strong>State Data:</strong>
//                 <ul className="list-disc pl-4 mt-1">
//                   <li>Name: {data?.state?.name || "❌ Missing"}</li>
//                   <li>Slug: {data?.state?.slug || "❌ Missing"}</li>
//                 </ul>
//               </div>
//               <div>
//                 <strong>Tables:</strong>
//                 <ul className="list-disc pl-4 mt-1">
//                   <li>MW Rates: {data?.minimum_wage_rates ? "✅ Present" : "❌ Missing"}</li>
//                   <li>Employment: {data?.employment_categories_benefits ? "✅ Present" : "❌ Missing"}</li>
//                   <li>Interest: {data?.interest_penality ? "✅ Present" : "❌ Missing"}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Headers & Rows Count */}
//           {data && (
//             <div>
//               <h3 className="font-semibold text-orange-600 mb-2">Table Details:</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Minimum Wage Rates:</strong>
//                   <ul className="mt-1">
//                     <li>Headers: {data.minimum_wage_rates?.headers?.length || 0}</li>
//                     <li>Rows: {data.minimum_wage_rates?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Employment Categories:</strong>
//                   <ul className="mt-1">
//                     <li>Headers: {data.employment_categories_benefits?.headers?.length || 0}</li>
//                     <li>Rows: {data.employment_categories_benefits?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Interest & Penalty:</strong>
//                   <ul className="mt-1">
//                     <li>Headers: {data.interest_penality?.headers?.length || 0}</li>
//                     <li>Rows: {data.interest_penality?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================== Main Page Component ================== */
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

// export default function Page() {
//   const params = useParams<{ state: string }>();
//   const slug = Array.isArray(params?.state) ? params.state[0] : params?.state;

//   const [data, setData] = React.useState<MWSlugData | null>(null);
//   const [err, setErr] = React.useState<string | null>(null);
//   const [loading, setLoading] = React.useState(true);
//   const [debugInfo, setDebugInfo] = React.useState<any>({});

//   React.useEffect(() => {
//     let alive = true;
//     async function run() {
//       if (!API_BASE || !slug) {
//         console.log("🚨 Missing API_BASE or slug:", { API_BASE: !!API_BASE, slug });
//         setErr("Missing API configuration or slug");
//         setLoading(false);
//         return;
//       }

//       const apiUrl = `${API_BASE}/${encodeURIComponent(slug)}`;
//       console.log("📡 Making API call to:", apiUrl);
      
//       setLoading(true);
//       setErr(null);
//       setDebugInfo({ apiUrl, requestTime: new Date().toISOString() });

//       try {
//         console.log("🔄 Fetching data...");
//         const res = await fetch(apiUrl, { 
//           cache: "no-store",
//           headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//           }
//         });

//         console.log("📥 Response status:", res.status);
//         console.log("📥 Response headers:", Object.fromEntries(res.headers.entries()));

//         if (!res.ok) {
//           const errorText = await res.text().catch(() => "");
//           console.error("❌ API Error:", res.status, errorText);
//           throw new Error(`HTTP ${res.status}: ${errorText || res.statusText}`);
//         }

//         const json = (await res.json()) as ApiResp;
//         console.log("✅ Raw API Response:", json);

//         if (!alive) return;

//         setData(json?.data ?? null);
//         setDebugInfo(prev => ({ ...prev, rawResponse: json, responseTime: new Date().toISOString() }));

//         if (!json?.data) {
//           console.warn("⚠️ No data in response");
//           setErr("No data received from API");
//         } else {
//           console.log("🎉 Data loaded successfully:", {
//             stateName: json.data?.state?.name,
//             hasMinimumWages: !!json.data?.minimum_wage_rates,
//             hasEmployment: !!json.data?.employment_categories_benefits,
//             hasInterest: !!json.data?.interest_penality
//           });
//         }
//       } catch (e: any) {
//         console.error("💥 Fetch error:", e);
//         if (!alive) return;
//         setErr(e?.message || "Failed to load data");
//         setData(null);
//         setDebugInfo(prev => ({ ...prev, error: e.message, errorTime: new Date().toISOString() }));
//       } finally {
//         if (alive) {
//           setLoading(false);
//           console.log("🏁 Loading complete");
//         }
//       }
//     }

//     run();
//     return () => {
//       alive = false;
//     };
//   }, [slug, API_BASE]);

//   /* Loading UI */
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-6xl px-4 py-6">
//           <div className="text-center mb-8">
//             <div className="h-6 w-64 bg-gray-200 animate-pulse rounded mb-4 mx-auto" />
//             <div className="h-10 w-80 bg-gray-200 animate-pulse rounded mb-6 mx-auto" />
//             <p className="text-gray-500">Loading data for: <strong>{slug}</strong></p>
//             <p className="text-xs text-gray-400 mt-2">API: {API_BASE}</p>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//           </div>
//         </div>
//         <ApiDebugger data={data} error={err} loading={loading} apiUrl={debugInfo.apiUrl} />
//       </div>
//     );
//   }

//   /* Error / Not Found UI */
//   if (err || !data) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-3xl px-4 py-10 text-center">
//           <h1 className="text-2xl font-bold text-slate-800 mb-2">Minimum Wages</h1>
//           <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
//             <p className="text-red-800 font-medium mb-2">❌ Error loading data</p>
//             <p className="text-slate-600 mb-4">
//               State slug: <span className="font-semibold text-orange-600">{slug}</span>
//             </p>
//             <p className="text-red-600 text-sm bg-red-100 p-2 rounded">
//               {err || "Data not found"}
//             </p>
//           </div>
//           <Button asChild>
//             <Link href="/minimum-wages">Back to list</Link>
//           </Button>
//         </div>
//         <ApiDebugger data={data} error={err} loading={loading} apiUrl={debugInfo.apiUrl} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <MinimumWageDetails data={data} apiBase={API_BASE} />
//       <ApiDebugger data={data} error={err} loading={loading} apiUrl={debugInfo.apiUrl} />
//     </>
//   );
// }

// /* ================== Details Component ================== */
// function MinimumWageDetails({ data, apiBase }: { data: MWSlugData; apiBase: string }) {
//   const mw = data?.minimum_wage_rates;
//   const cat = data?.employment_categories_benefits;
//   const ip = data?.interest_penality;
//   const tiles = data?.tiles ?? {};

//   const formUrlNorm = normalizeUrl(tiles.form_url, apiBase);
//   const calcUrlNorm = normalizeUrl(tiles.calculator_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(tiles.website_url, apiBase);

//   const formTitle = fmt(tiles.form_title);
//   const formBtnLabel = formTitle !== "—" ? `${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Mobile PopularSearch */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
//           <div className="lg:col-span-3">
//             {/* Header + Combobox */}
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Minimum Wages of {data?.state?.name || "Unknown State"} :
//                 </h1>
//                 <p className="text-xs text-slate-500 mt-1">
//                   Updated: {fmt(data?.updated_date)} · Effective: {fmt(data?.effective_date)}
//                 </p>
//               </div>
//               <div className="flex flex-col items-start sm:items-end gap-2">
//                 <PeriodCombobox />
//               </div>
//             </div>

//             {/* Debug Info Card */}
//             <Card className="mb-4 border-blue-200 bg-blue-50">
//               <CardContent className="p-3">
//                 <div className="text-xs text-blue-800">
//                   <p><strong>Debug Info:</strong></p>
//                   <p>State: {data?.state?.name} ({data?.state?.slug})</p>
//                   <p>MW Rates: {mw?.headers?.length || 0} headers, {mw?.rows?.length || 0} rows</p>
//                   <p>Employment: {cat?.headers?.length || 0} headers, {cat?.rows?.length || 0} rows</p>
//                   <p>Interest: {ip?.headers?.length || 0} headers, {ip?.rows?.length || 0} rows</p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* ====== Table: Minimum Wage Rates ====== */}
//             {mw && mw.headers && mw.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {mw.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {mw.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {mw.headers.map((h) => (
//                                 <td
//                                   key={h}
//                                   className={cn(
//                                     "px-3 py-4 text-sm text-gray-900 break-words text-center",
//                                     isSkilledCol(h) && "text-green-600 font-semibold"
//                                   )}
//                                 >
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {mw.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {mw.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span className={cn(isSkilledCol(h) && "text-green-600 font-semibold")}>
//                                 {fmt(cell(r, h))}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-red-200 bg-red-50">
//                 <CardContent className="p-4 text-center text-red-600">
//                   ❌ No Minimum Wage Rates data available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Table: Employment Categories ====== */}
//             {cat && cat.headers && cat.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       Employment Categories &amp; Additional Benefits
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {cat.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {cat.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {cat.headers.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         Employment Categories &amp; Additional Benefits
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {cat.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {cat.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-yellow-200 bg-yellow-50">
//                 <CardContent className="p-4 text-center text-yellow-600">
//                   ⚠️ No Employment Categories data available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Table: Interest & Penalty ====== */}
//             {ip && ip.headers && ip.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {ip?.title || "Interest & Penalty"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {ip.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {ip.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {ip.headers.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         {ip?.title || "Interest & Penalty"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {ip.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {ip.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-gray-200 bg-gray-50">
//                 <CardContent className="p-4 text-center text-gray-500">
//                   ℹ️ Interest & Penalty data not available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Quick Actions ====== */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Notifications */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     {formTitle !== "—" ? formTitle : "Download Notifications"}
//                   </h3>
//                   {formUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
//                       aria-label={formBtnLabel}
//                     >
//                       <Link href={formUrlNorm} target="_blank" rel="noopener noreferrer">
//                         {formBtnLabel}
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Wage Calculator */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <IndianRupee className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Wage Calculator</h3>
//                   {calcUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={calcUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Open Calculator
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Globe className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
//                   {websiteUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Visit Website
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* ===== Sidebar ===== */}
//           <div className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-2 lg:top-3">
//               <Card className="shadow-sm hover:shadow-md transition-shadow">
//                 <CardContent className="lg:p-3 xl:p-4">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// "use client";

// import * as React from "react";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// /* shadcn/ui */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Download,
//   Globe,
//   IndianRupee,
//   Check,
//   ChevronsUpDown,
//   Calendar,
// } from "lucide-react";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// /* ================== Types ================== */
// type Row = Record<string, string | null | number | undefined>;
// type TableBlock = { title?: string | null; headers: string[]; rows: Row[] };
// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   calculator_title?: string | null;
//   calculator_url?: string | null;
//   website_url?: string | null;
// };
// type MWSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   minimum_wage_rates?: TableBlock | null;
//   employment_categories_benefits?: TableBlock | null;
//   interest_penality?: TableBlock | null;
//   tiles?: Tiles | null;
// };
// type ApiResp = { data: MWSlugData };

// /* ================== Constants & Utils ================== */
// const DEFAULT_API_BASE =
//   "https://prns.prisminfoways.com/api/minimum-wages";

// const LOCAL_HOSTS = new Set([
//   "localhost",
//   "127.0.0.1",
//   "127.1.1.0",
//   "127.0.1.1",
//   "::1",
// ]);

// const cn = (...classes: (string | false | null | undefined)[]) =>
//   classes.filter(Boolean).join(" ");

// const cell = (row: Row, header: string) =>
//   (row?.[header] as string | number | null | undefined) ?? "—";

// const fmt = (s?: string | number | null) =>
//   s !== undefined && s !== null && String(s).trim().length ? String(s) : "—";

// const isSkilledCol = (h: string) => /skilled/i.test(h);

// function fileNameFromUrl(u: string): string {
//   try {
//     const url = new URL(u);
//     const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
//     return last || "Download";
//   } catch {
//     return "Download";
//   }
// }


// function normalizeUrl(input?: string | null, apiBase?: string): string | null {
//   if (!input) return null;
//   const val = input.trim();
//   const API_ORIGIN = apiBase ? new URL(apiBase).origin : "";
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return (API_ORIGIN || "") + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     if (!apiBase) return null;
//     if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
//     if (val.startsWith("storage/") || val.startsWith("/storage/")) {
//       return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
//     }
//     return null;
//   }
// }

// /* ================== Period Combobox (static for now) ================== */
// const PERIODS = [
//   "For the period – 1st Jul, 2025",
//   "For the period – 1st Jan, 2025",
//   "For the period – 1st Jul, 2024",
//   "For the period – 1st Jan, 2024",
//   "For the period – 1st Jul, 2023",
//   "For the period – 1st Jan, 2023",
//   "For the period – 1st Jul, 2022",
//   "For the period – 1st Jan, 2022",
//   "For the period – 1st Jul, 2021",
//   "For the period – 1st Jan, 2021",
// ];

// function PeriodCombobox() {
//   const [open, setOpen] = React.useState(false);
//   const [value, setValue] = React.useState<string>(PERIODS[PERIODS.length - 1]);

//   return (
//     <div className="w-full sm:w-[340px]">
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             role="combobox"
//             aria-expanded={open}
//             className={cn(
//               "w-full justify-between h-10",
//               "border-orange-200 hover:bg-orange-50 hover:border-orange-300"
//             )}
//           >
//             <span className="flex items-center gap-2">
//               <Calendar className="h-4 w-4 text-orange-500" />
//               <span className="text-slate-800">{value}</span>
//             </span>
//             <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//           <Command>
//             <CommandInput placeholder="Search period…" />
//             <CommandList>
//               <CommandEmpty>No period found.</CommandEmpty>
//               <CommandGroup heading="Available Periods">
//                 {PERIODS.map((label) => (
//                   <CommandItem
//                     key={label}
//                     onSelect={() => {
//                       setValue(label);
//                       setOpen(false);
//                     }}
//                     className="cursor-pointer"
//                   >
//                     <Check
//                       className={cn(
//                         "mr-2 h-4 w-4",
//                         value === label ? "opacity-100 text-orange-600" : "opacity-0"
//                       )}
//                     />
//                     {label}
//                   </CommandItem>
//                 ))}
//               </CommandGroup>
//             </CommandList>
//           </Command>
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

// /* ============== Minimal PopularSearch (no external import) ============== */
// function PopularSearch(props: { className?: string }) {
//   return (
//     <div className={cn("flex flex-wrap gap-2", props.className)}>
//       {["Assam", "Gujarat", "Karnataka", "Maharashtra"].map((s) => (
//         <Link key={s} href={`/minimum-wages/${s.toLowerCase()}`}>
//           <Button variant="outline" size="sm" className="h-7">
//             {s}
//           </Button>
//         </Link>
//       ))}
//     </div>
//   );
// }

// /* ================== Debug Overlay ================== */
// function ApiDebugger({
//   data,
//   error,
//   loading,
//   apiUrl,
// }: {
//   data: any;
//   error: string | null;
//   loading: boolean;
//   apiUrl?: string;
// }) {
//   const [showDebug, setShowDebug] = React.useState(false);

//   if (!showDebug) {
//     return (
//       <div className="fixed bottom-4 right-4 z-50">
//         <Button
//           onClick={() => setShowDebug(true)}
//           className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
//           size="sm"
//         >
//           🐛 Debug API
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-auto p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">API Debug Information</h2>
//           <Button onClick={() => setShowDebug(false)} variant="outline" size="sm">
//             ✕ Close
//           </Button>
//         </div>

//         <div className="space-y-4 text-sm">
//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">API URL</h3>
//             <code className="bg-gray-100 p-2 rounded block break-all">
//               {apiUrl || "No URL"}
//             </code>
//           </div>
//           <div className="flex gap-2">
//             <span
//               className={cn(
//                 "px-2 py-1 rounded",
//                 loading ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
//               )}
//             >
//               {loading ? "Loading…" : "Loaded"}
//             </span>
//             <span
//               className={cn(
//                 "px-2 py-1 rounded",
//                 error ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
//               )}
//             >
//               {error ? `Error: ${error}` : "No errors"}
//             </span>
//           </div>

//           <div>
//             <h3 className="font-semibold text-orange-600 mb-2">Data</h3>
//             <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-96">
//               {JSON.stringify(data, null, 2)}
//             </pre>
//           </div>

//           {data && (
//             <div>
//               <h3 className="font-semibold text-orange-600 mb-2">Table Details</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Minimum Wage Rates:</strong>
//                   <ul className="mt-1">
//                     <li>Headers: {data.minimum_wage_rates?.headers?.length || 0}</li>
//                     <li>Rows: {data.minimum_wage_rates?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Employment Categories:</strong>
//                   <ul className="mt-1">
//                     <li>
//                       Headers: {data.employment_categories_benefits?.headers?.length || 0}
//                     </li>
//                     <li>Rows: {data.employment_categories_benefits?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-50 p-3 rounded">
//                   <strong>Interest &amp; Penalty:</strong>
//                   <ul className="mt-1">
//                     <li>Headers: {data.interest_penality?.headers?.length || 0}</li>
//                     <li>Rows: {data.interest_penality?.rows?.length || 0}</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================== Main Page ================== */
// export default function Page() {
//   const params = useParams<{ state: string }>();
//   const slug = Array.isArray(params?.state) ? params.state[0] : params?.state;

//   const [data, setData] = React.useState<MWSlugData | null>(null);
//   const [err, setErr] = React.useState<string | null>(null);
//   const [loading, setLoading] = React.useState(true);
//   const [apiUrl, setApiUrl] = React.useState<string>("");

//   React.useEffect(() => {
//     let alive = true;

//     async function run() {
//       if (!slug) {
//         setErr("Missing state slug");
//         setLoading(false);
//         return;
//       }

//       const base = DEFAULT_API_BASE;
//       const url = `${base}/${encodeURIComponent(slug)}`;
//       setApiUrl(url);

//       setLoading(true);
//       setErr(null);

//       try {
//         const res = await fetch(url, {
//           cache: "no-store",
//           headers: {
//             Accept: "application/json",
//           },
//         });

//         if (!res.ok) {
//           const errorText = await res.text().catch(() => "");
//           throw new Error(`HTTP ${res.status}: ${errorText || res.statusText}`);
//         }

//         const json = (await res.json()) as ApiResp;
//         if (!alive) return;

//         if (!json?.data) {
//           setErr("No data received from API");
//           setData(null);
//         } else {
//           setData(json.data);
//         }
//       } catch (e: any) {
//         if (!alive) return;
//         setErr(e?.message || "Failed to load data");
//         setData(null);
//       } finally {
//         if (alive) setLoading(false);
//       }
//     }

//     run();
//     return () => {
//       alive = false;
//     };
//   }, [slug]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-6xl px-4 py-6">
//           <div className="text-center mb-8">
//             <div className="h-6 w-64 bg-gray-200 animate-pulse rounded mb-4 mx-auto" />
//             <div className="h-10 w-80 bg-gray-200 animate-pulse rounded mb-6 mx-auto" />
//             <p className="text-gray-500">
//               Loading data for: <strong>{slug}</strong>
//             </p>
//             <p className="text-xs text-gray-400 mt-2">API: {DEFAULT_API_BASE}</p>
//           </div>
//           <div className="grid gap-4 md:grid-cols-2">
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//             <div className="h-64 bg-gray-200 animate-pulse rounded" />
//           </div>
//         </div>
//         <ApiDebugger data={data} error={err} loading={loading} apiUrl={apiUrl} />
//       </div>
//     );
//   }

//   if (err || !data) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <div className="mx-auto max-w-3xl px-4 py-10 text-center">
//           <h1 className="text-2xl font-bold text-slate-800 mb-2">Minimum Wages</h1>
//           <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
//             <p className="text-red-800 font-medium mb-2">❌ Error loading data</p>
//             <p className="text-slate-600 mb-4">
//               State slug:{" "}
//               <span className="font-semibold text-orange-600">{slug}</span>
//             </p>
//             <p className="text-red-600 text-sm bg-red-100 p-2 rounded">
//               {err || "Data not found"}
//             </p>
//           </div>
//           <Button asChild>
//             <Link href="/minimum-wages">Back to list</Link>
//           </Button>
//         </div>
//         <ApiDebugger data={data} error={err} loading={loading} apiUrl={apiUrl} />
//       </div>
//     );
//   }

//   return (
//     <>
//       <MinimumWageDetails data={data} apiBase={DEFAULT_API_BASE} />
//       <ApiDebugger data={data} error={err} loading={loading} apiUrl={apiUrl} />
//     </>
//   );
// }

// /* ================== Details ================== */
// function MinimumWageDetails({
//   data,
//   apiBase,
// }: {
//   data: MWSlugData;
//   apiBase: string;
// }) {
//   const mw = data?.minimum_wage_rates || undefined;
//   const cat = data?.employment_categories_benefits || undefined;
//   const ip = data?.interest_penality || undefined;
//   const tiles = data?.tiles ?? {};

//   const formUrlNorm = normalizeUrl(tiles?.form_url, apiBase);
//   const calcUrlNorm = normalizeUrl(tiles?.calculator_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(tiles?.website_url, apiBase);

//   const formTitle = fmt(tiles?.form_title);
//   const formBtnLabel =
//     formTitle !== "—"
//       ? `${formTitle}`
//       : formUrlNorm
//       ? fileNameFromUrl(formUrlNorm)
//       : "Download";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Mobile PopularSearch */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
//           <div className="lg:col-span-3">
//             {/* Header + Period */}
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Minimum Wages of {data?.state?.name || "Unknown State"} :
//                 </h1>
//                 <p className="text-xs text-slate-500 mt-1">
//                   Updated: {fmt(data?.updated_date)} · Effective:{" "}
//                   {fmt(data?.effective_date)}
//                 </p>
//               </div>
//               <div className="flex flex-col items-start sm:items-end gap-2">
//                 <PeriodCombobox />
//               </div>
//             </div>

//             {/* Debug snapshot */}
//             <Card className="mb-4 border-blue-200 bg-blue-50">
//               <CardContent className="p-3">
//                 <div className="text-xs text-blue-800">
//                   <p>
//                     <strong>Debug Info:</strong>
//                   </p>
//                   <p>
//                     State: {data?.state?.name} ({data?.state?.slug})
//                   </p>
//                   <p>
//                     MW Rates: {mw?.headers?.length || 0} headers,{" "}
//                     {mw?.rows?.length || 0} rows
//                   </p>
//                   <p>
//                     Employment: {cat?.headers?.length || 0} headers,{" "}
//                     {cat?.rows?.length || 0} rows
//                   </p>
//                   <p>
//                     Interest: {ip?.headers?.length || 0} headers,{" "}
//                     {ip?.rows?.length || 0} rows
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* ====== Minimum Wage Rates ====== */}
//             {mw && mw.headers && mw.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {mw.headers.map((h) => (
//                               <th
//                                 key={h}
//                                 className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
//                               >
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {mw.rows.map((r, idx) => (
//                             <tr
//                               key={idx}
//                               className="hover:bg-orange-50 transition-colors"
//                             >
//                               {mw.headers.map((h) => (
//                                 <td
//                                   key={h}
//                                   className={cn(
//                                     "px-3 py-4 text-sm text-gray-900 break-words text-center",
//                                     isSkilledCol(h) &&
//                                       "text-green-600 font-semibold"
//                                   )}
//                                 >
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         {mw?.title || "Minimum Wage Rates (Daily in ₹)"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {mw.rows.map((r, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2"
//                         >
//                           {mw.headers.map((h) => (
//                             <div
//                               key={h}
//                               className="flex gap-2 justify-between p-2 rounded"
//                             >
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               <span
//                                 className={cn(
//                                   isSkilledCol(h) &&
//                                     "text-green-600 font-semibold"
//                                 )}
//                               >
//                                 {fmt(cell(r, h))}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-red-200 bg-red-50">
//                 <CardContent className="p-4 text-center text-red-600">
//                   ❌ No Minimum Wage Rates data available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Employment Categories & Benefits ====== */}
//             {cat && cat.headers && cat.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       Employment Categories &amp; Additional Benefits
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {cat.headers.map((h) => (
//                               <th
//                                 key={h}
//                                 className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
//                               >
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {cat.rows.map((r, idx) => (
//                             <tr
//                               key={idx}
//                               className="hover:bg-orange-50 transition-colors"
//                             >
//                               {cat.headers.map((h) => (
//                                 <td
//                                   key={h}
//                                   className="px-3 py-4 text-sm text-gray-900 break-words text-center"
//                                 >
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         Employment Categories &amp; Additional Benefits
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {cat.rows.map((r, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2"
//                         >
//                           {cat.headers.map((h) => (
//                             <div
//                               key={h}
//                               className="flex gap-2 justify-between p-2 rounded"
//                             >
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-yellow-200 bg-yellow-50">
//                 <CardContent className="p-4 text-center text-yellow-600">
//                   ⚠️ No Employment Categories data available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Interest & Penalty ====== */}
//             {ip && ip.headers && ip.rows ? (
//               <>
//                 {/* Desktop */}
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {ip?.title || "Interest & Penalty"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {ip.headers.map((h) => (
//                               <th
//                                 key={h}
//                                 className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
//                               >
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {ip.rows.map((r, idx) => (
//                             <tr
//                               key={idx}
//                               className="hover:bg-orange-50 transition-colors"
//                             >
//                               {ip.headers.map((h) => (
//                                 <td
//                                   key={h}
//                                   className="px-3 py-4 text-sm text-gray-900 break-words text-center"
//                                 >
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 {/* Mobile */}
//                 <div className="block md:hidden mb-4">
//                   <Card className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         {ip?.title || "Interest & Penalty"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {ip.rows.map((r, idx) => (
//                         <div
//                           key={idx}
//                           className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2"
//                         >
//                           {ip.headers.map((h) => (
//                             <div
//                               key={h}
//                               className="flex gap-2 justify-between p-2 rounded"
//                             >
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             ) : (
//               <Card className="mb-3 border-gray-200 bg-gray-50">
//                 <CardContent className="p-4 text-center text-gray-500">
//                   ℹ️ Interest &amp; Penalty data not available
//                 </CardContent>
//               </Card>
//             )}

//             {/* ====== Quick Actions ====== */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Notifications */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     {formTitle !== "—" ? formTitle : "Download Notifications"}
//                   </h3>
//                   {formUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
//                       aria-label={String(formBtnLabel)}
//                     >
//                       <Link href={formUrlNorm} target="_blank" rel="noopener noreferrer">
//                         {formBtnLabel}
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Wage Calculator */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <IndianRupee className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Wage Calculator</h3>
//                   {calcUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={calcUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Open Calculator
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Globe className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
//                   {websiteUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Visit Website
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* ===== Sidebar ===== */}
//           <div className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-2 lg:top-3">
//               <Card className="shadow-sm hover:shadow-md transition-shadow">
//                 <CardContent className="lg:p-3 xl:p-4">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }













// // // "use client";

// // // import * as React from "react";
// // // import { useParams } from "next/navigation";

// // // /** ====== CONFIG (keep base EXACT) ====== */
// // // const API_BASE ="https://prns.prisminfoways.com/api/minimum-wages"
// // //     .replace(/\/+$/, ""); // no trailing slash

// // // type ApiResp = {
// // //   data: any;
// // // };

// // // export default function Page() {
// // //   const params = useParams<{ state: string }>();
// // //   const slug = Array.isArray(params?.state) ? params.state[0] : params?.state;

// // //   const [json, setJson] = React.useState<any>(null);
// // //   const [apiUrl, setApiUrl] = React.useState<string>("");
// // //   const [loading, setLoading] = React.useState<boolean>(true);
// // //   const [error, setError] = React.useState<string | null>(null);

// // //   React.useEffect(() => {
// // //     let ok = true;
// // //     async function run() {
// // //       if (!slug) {
// // //         setError("Missing slug");
// // //         setLoading(false);
// // //         return;
// // //       }
// // //       const url = `${API_BASE}/${encodeURIComponent(slug)}`;
// // //       setApiUrl(url);
// // //       setLoading(true);
// // //       setError(null);
// // //       console.log(url)
// // //       try {
// // //         const res = await fetch(url, {
// // //           cache: "no-store",
// // //           headers: { Accept: "application/json" },
// // //         });
// // //         if (!res.ok) {
// // //           const text = await res.text().catch(() => "");
// // //           throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
// // //         }
// // //         const data = (await res.json()) as ApiResp;
// // //         if (!ok) return;
// // //         setJson(data);
// // //       } catch (e: any) {
// // //         if (!ok) return;
// // //         setError(e?.message || "Failed to load");
// // //         setJson(null);
// // //       } finally {
// // //         ok && setLoading(false);
// // //       }
// // //     }
// // //     run();
// // //     return () => {
// // //       ok = false;
// // //     };
// // //   }, [slug]);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       <div className="mx-auto max-w-5xl px-4 py-6">
// // //         {/* Header */}
// // //         <div className="mb-4">
// // //           <h1 className="text-2xl font-bold text-slate-800">Minimum Wages · JSON Viewer</h1>
// // //           <p className="text-sm text-slate-500">
// // //             State slug: <span className="font-semibold text-orange-600">{slug || "—"}</span>
// // //           </p>
// // //           <p className="text-xs text-slate-400 mt-1 break-all">API: {apiUrl || "—"}</p>
// // //         </div>

// // //         {/* States */}
// // //         {loading ? (
// // //           <div className="rounded-lg border bg-white p-4">
// // //             <div className="h-5 w-40 bg-gray-200 animate-pulse rounded mb-3" />
// // //             <div className="h-72 bg-gray-200 animate-pulse rounded" />
// // //           </div>
// // //         ) : error ? (
// // //           <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 text-sm">
// // //             <div className="font-semibold mb-2">❌ Error loading data</div>
// // //             <pre className="whitespace-pre-wrap break-all text-xs">{error}</pre>
// // //           </div>
// // //         ) : (
// // //           <JSONCard json={json} />
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // /** Pretty JSON card with copy button */
// // // function JSONCard({ json }: { json: any }) {
// // //   const pretty = React.useMemo(() => JSON.stringify(json, null, 2), [json]);

// // //   const copy = async () => {
// // //     try {
// // //       await navigator.clipboard.writeText(pretty);
// // //       alert("JSON copied to clipboard ✅");
// // //     } catch {
// // //       alert("Copy failed ❌");
// // //     }
// // //   };

// // //   return (
// // //     <div className="rounded-lg border bg-white">
// // //       <div className="flex items-center justify-between px-4 py-3 border-b">
// // //         <h2 className="text-sm font-semibold text-slate-700">Raw API JSON</h2>
// // //         <button
// // //           onClick={copy}
// // //           className="text-xs px-2 py-1 rounded border hover:bg-orange-50 hover:border-orange-200"
// // //         >
// // //           Copy JSON
// // //         </button>
// // //       </div>
// // //       <pre className="p-4 text-xs overflow-auto max-h-[70vh] bg-slate-50">
// // //         {pretty}
// // //       </pre>
// // //     </div>
// // //   );
// // // }

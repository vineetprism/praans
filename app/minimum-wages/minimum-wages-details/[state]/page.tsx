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


// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min ISR

// type ApiResponse = { data: MWSlugData };

// const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");

// const MW_BASE = `${BASE_ROOT}/api/minimum-wages`; // final prefix for all calls

// const ensureConfig = () => {
//   if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
//   if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
// };

// const normSlug = (s: string) =>
//   s.trim()
//     .toLowerCase()
//     .replace(/%20|\s|_/g, "-")
//     .replace(/[^a-z0-9-]/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");

// async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
//   ensureConfig();

//   const slug = normSlug(stateParam);
//   const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

//   try {
//     const res = await fetch(url, {
//       next: { revalidate },
//       headers: { Accept: "application/json" },
//     });

//     if (res.status === 404) {
//       // helpful server log + consistent UX
//       console.error("[MW] 404 for URL:", url);
//       return null;
//     }
//     if (!res.ok) {
//       const text = await res.text().catch(() => "");
//       throw new Error(`[MW] HTTP ${res.status} @ ${url} :: ${text || res.statusText}`);
//     }

//     const json = (await res.json()) as ApiResponse;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("[MW] fetch failed:", e);
//     return null;
//   }
// }

// /* ---------- Metadata ---------- */
// export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) {
//     return { title: "Minimum Wages", description: "Minimum wage details not found." };
//   }

//   return {
//     title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
//     description: `Minimum wage tables, categories & benefits for ${data.state.name}. Updated: ${data.updated_date ?? "—"}.`,
//     keywords: [`${data.state.name} minimum wages`, "wage rates", "labour compliance", `${data.state.name} labour laws`],
//   };
// }

// /* ---------- Page ---------- */
// export default async function Page({ params }: { params: Promise<{ state: string }> }) {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) {
//     // show 404 page instead of crashing the route
//     notFound();
//   }

//   return <MinimumWagesDetails data={data} apiBase={MW_BASE} />;
// }






// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWagesDetails, {
//   MWSlugData,
// } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min ISR

// type ApiResponse = { data: MWSlugData };

// const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
// const MW_BASE = `${BASE_ROOT}/api/minimum-wages`;

// const ensureConfig = () => {
//   if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
//   if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
// };

// const normSlug = (s: string) =>
//   s
//     .trim()
//     .toLowerCase()
//     .replace(/%20|\s|_/g, "-")
//     .replace(/[^a-z0-9-]/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");

// async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
//   ensureConfig();

//   const slug = normSlug(stateParam);
//   const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

//   try {
//     const res = await fetch(url, {
//       next: { revalidate },
//       headers: { Accept: "application/json" },
//     });

//     if (res.status === 404) {
//       console.error("[MW] 404 for URL:", url);
//       return null;
//     }
//     if (!res.ok) {
//       const text = await res.text().catch(() => "");
//       throw new Error(`[MW] HTTP ${res.status} @ ${url} :: ${text || res.statusText}`);
//     }

//     const json = (await res.json()) as ApiResponse;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("[MW] fetch failed:", e);
//     return null;
//   }
// }

// /* ---------- Metadata ---------- */
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }): Promise<Metadata> {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) {
//     return { title: "Minimum Wages", description: "Minimum wage details not found." };
//   }

//   return {
//     title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
//     description: `Minimum wage tables, categories & benefits for ${data.state.name}. Updated: ${data.updated_date ?? "—"}.`,
//     keywords: [
//       `${data.state.name} minimum wages`,
//       "wage rates",
//       "labour compliance",
//       `${data.state.name} labour laws`,
//     ],
//   };
// }


// export default async function Page({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }) {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) notFound();

//   return <MinimumWagesDetails data={data!} apiBase={MW_BASE} />;
// }








// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWagesDetails, {
//   MWSlugData,
// } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min ISR

// type ApiResponse = { data: MWSlugData };

// const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
// const MW_BASE = `${BASE_ROOT}/api/minimum-wages`;

// const ensureConfig = () => {
//   if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
//   if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
// };

// const normSlug = (s: string) =>
//   s
//     .trim()
//     .toLowerCase()
//     .replace(/%20|\s|_/g, "-")
//     .replace(/[^a-z0-9-]/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");

// async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
//   ensureConfig();

//   const slug = normSlug(stateParam);
//   const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

//   try {
//     const res = await fetch(url, {
//       next: { revalidate },
//       headers: { Accept: "application/json" },
//     });

//     if (res.status === 404) {
//       console.error("[MW] 404 for URL:", url);
//       return null;
//     }
//     if (!res.ok) {
//       const text = await res.text().catch(() => "");
//       throw new Error(`[MW] HTTP ${res.status} @ ${url} :: ${text || res.statusText}`);
//     }

//     const json = (await res.json()) as ApiResponse;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("[MW] fetch failed:", e);
//     return null;
//   }
// }

// /* ---------- Metadata ---------- */
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }): Promise<Metadata> {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) {
//     return { title: "Minimum Wages", description: "Minimum wage details not found." };
//   }

//   return {
//     title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
//     description: `Minimum wage tables, categories & benefits for ${data.state.name}. Updated: ${data.updated_date ?? "—"}.`,
//     keywords: [
//       `${data.state.name} minimum wages`,
//       "wage rates",
//       "labour compliance",
//       `${data.state.name} labour laws`,
//     ],
//   };
// }

// /* ---------- Page ---------- */
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }) {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) notFound();

//   return <MinimumWagesDetails data={data!} apiBase={MW_BASE} />;
// }






// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWagesDetails, {
//   MWSlugData,
// } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min ISR

// type ApiResponse = { data: MWSlugData };

// const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
// const MW_BASE = `${BASE_ROOT}/api/minimum-wages`;

// const ensureConfig = () => {
//   if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
//   if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
// };

// const normSlug = (s: string) =>
//   s.trim().toLowerCase()
//     .replace(/%20|\s|_/g, "-")
//     .replace(/[^a-z0-9-]/g, "-")
//     .replace(/-+/g, "-")
//     .replace(/^-|-$/g, "");

// async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
//   ensureConfig();
//   const slug = normSlug(stateParam);
//   const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

//   try {
//     const res = await fetch(url, {
//       next: { revalidate },
//       headers: { Accept: "application/json" },
//     });

//     if (res.status === 404) return null;
//     if (!res.ok) {
//       const text = await res.text().catch(() => "");
//       throw new Error(`[MW] HTTP ${res.status} @ ${url} :: ${text || res.statusText}`);
//     }

//     const json = (await res.json()) as ApiResponse;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("[MW] fetch failed:", e);
//     return null;
//   }
// }

// /* ---------- Metadata ---------- */
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }): Promise<Metadata> {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);

//   if (!data) return { title: "Minimum Wages", description: "Minimum wage details not found." };

//   return {
//     title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
//     description: `Minimum wage tables, categories & benefits for ${data.state.name}. Updated: ${data.updated_date ?? "—"}.`,
//     keywords: [
//       `${data.state.name} minimum wages`,
//       "wage rates",
//       "labour compliance",
//       `${data.state.name} labour laws`,
//     ],
//   };
// }

// /* ---------- Page ---------- */
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ state: string }>;
// }) {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);
//   if (!data) notFound();

//   return <MinimumWagesDetails data={data!} apiBase={MW_BASE} />;
// }






import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 1800; // 30 min

type ApiResponse = { data: MWSlugData };

const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
const MW_BASE = `${BASE_ROOT}/api/minimum-wages`;

const ensureConfig = () => {
  if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
  if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
};

const normSlug = (s: string) =>
  s.trim().toLowerCase().replace(/%20|\s|_/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
  ensureConfig();
  const slug = normSlug(stateParam);
  const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

  try {
    const res = await fetch(url, { next: { revalidate }, headers: { Accept: "application/json" } });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`[MW] HTTP ${res.status} @ ${url}`);
    const json = (await res.json()) as ApiResponse;
    return json?.data ?? null;
  } catch (e) {
    console.error("[MW] fetch failed:", e);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
  const { state } = await params;
  const data = await getMinimumWageState(state);
  if (!data) return { title: "Minimum Wages", description: "Minimum wage details not found." };

  return {
    title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
    description: `Minimum wage tables, categories & benefits for ${data.state.name}.`,
    keywords: [`${data.state.name} minimum wages`, "wage rates", "labour compliance", `${data.state.name} labour laws`],
  };
}

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const data = await getMinimumWageState(state);
  if (!data) notFound();

  return <MinimumWagesDetails data={data!} apiBase={MW_BASE} />;
}










// "use client";

// import * as React from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";

// /* ===== UI (shadcn/lucide) ===== */
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Download,
//   Globe,
//   IndianRupee,
//   Check,
//   ChevronsUpDown,
//   Calendar,
//   Loader2,
// } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";

// /* Optional widget */
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// /* ===== Types ===== */
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

// type PeriodOption = {
//   id: number | string;
//   state: { name: string; slug: string };
//   updated_date_iso: string;
//   effective_date_iso: string;
//   updated_date: string;   // dd-mm-YYYY
//   effective_date: string; // dd-mm-YYYY
//   label: string;
// };

// /* ===== Utils ===== */
// const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
// const cell = (row: Row, header: string) => row?.[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
// const isSkilledCol = (h: string) => /skilled/i.test(h);

// /** 🔥 Absolute API origin with hard fallback */
// const API_ORIGIN =
//   (process.env.NEXT_PUBLIC_API_BASE?.trim().replace(/\/+$/, "")) ||
//   "https://prns.prisminfoways.com";

// /** Build absolute URLs safely */
// const apiUrl = (path: string) =>
//   `${API_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

// /** Normalize doc/file links that might be relative to API origin */
// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);
// function normalizeUrl(input?: string | null): string | null {
//   if (!input) return null;
//   const val = input.trim();
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) return API_ORIGIN + u.pathname + u.search + u.hash;
//     return u.toString();
//   } catch {
//     if (val.startsWith("/")) return new URL(val, API_ORIGIN).toString();
//     if (val.startsWith("storage/") || val.startsWith("/storage/"))
//       return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
//     return null;
//   }
// }
// function fileNameFromUrl(u: string): string {
//   try {
//     const url = new URL(u);
//     return url.pathname.split("/").filter(Boolean).pop() || "Download";
//   } catch {
//     return "Download";
//   }
// }

// /* ============ Page (ALL-IN-ONE, CLIENT) ============ */
// export default function MinimumWagesStatePage() {
//   const params = useParams<{ state: string }>();
//   const stateSlug = String(params?.state || "").trim().toLowerCase();

//   const [loadingInit, setLoadingInit] = React.useState(true);

//   // First table (period API)
//   const [mwTable, setMwTable] = React.useState<TableBlock | null>(null);
//   const [mwVersion, setMwVersion] = React.useState(0);
//   const [busyPeriod, setBusyPeriod] = React.useState(false);
//   const [activePeriod, setActivePeriod] = React.useState<{ updated_on?: string; effective_on?: string } | null>(null);

//   // Debug: show the exact Period API URL called
//   const [lastPeriodUrl, setLastPeriodUrl] = React.useState<string>("");

//   // Other sections + meta from slug API
//   const [slugData, setSlugData] = React.useState<MWSlugData | null>(null);

//   // Dropdown state
//   const [periodOptions, setPeriodOptions] = React.useState<PeriodOption[]>([]);
//   const [periodValue, setPeriodValue] = React.useState<string>("Select period");
//   const [periodOpen, setPeriodOpen] = React.useState(false);
//   const [periodLoading, setPeriodLoading] = React.useState(true);

//   // ---- helpers ----
//   const toTableBlock = React.useCallback((periodRates: any): TableBlock => {
//     const cols = Array.isArray(periodRates?.columns) ? periodRates.columns : [];
//     const rows = Array.isArray(periodRates?.rows) ? periodRates.rows : [];

//     const headers = cols.map(
//       (c: any) => String(c?.label ?? "").trim() || String(c?.key ?? "").trim() || "—"
//     );

//     const mappedRows: Row[] = rows.map((r: any) => {
//       const obj: Row = {};
//       cols.forEach((c: any) => {
//         const key = String(c?.key ?? "").trim();
//         const label = String(c?.label ?? "").trim() || key || "";
//         const val = r && key in r ? String(r[key]) : null;
//         // dual mapping for robustness
//         if (label) obj[label] = val;
//         if (key && key !== label) obj[key] = val;
//       });
//       return obj;
//     });

//     return { title: "Minimum Wage Rates (Daily in ₹)", headers, rows: mappedRows };
//   }, []);

//   /** 🔗 PERIOD API CALL — strictly absolute URL & 3 params */
//   const fetchPeriodTable = React.useCallback(
//     async (opt: PeriodOption) => {
//       const preferredSlug = String(opt?.state?.slug || stateSlug || "").trim().toLowerCase();
//       if (!preferredSlug) return;

//       setBusyPeriod(true);
//       try {
//         const url = new URL(apiUrl("/api/minimum-wages/period"));
//         console.log(url)
//         url.searchParams.set("state_slug", preferredSlug);
//         url.searchParams.set("updated_on", opt.updated_date);     // dd-mm-YYYY
//         url.searchParams.set("effective_on", opt.effective_date); // dd-mm-YYYY
//         setLastPeriodUrl(url.toString()); // debug chip

//         const res = await fetch(url.toString(), {
//           cache: "no-store",
//           headers: { Accept: "application/json" },
//         });
//         if (!res.ok) throw new Error(`[period] ${res.status}`);

//         const json = await res.json();
//         const first = Array.isArray(json?.data) ? json.data[0] : null;
//         const apiSlug = String(first?.state?.slug || "").toLowerCase();
//         if (!first || apiSlug !== preferredSlug) return;

//         const rates = first.minimum_wage_rates;
//         if (rates) {
//           setMwTable(toTableBlock(rates));
//           setMwVersion((v) => v + 1);
//           setActivePeriod({ updated_on: first.updated_date, effective_on: first.effective_date });
//         } else {
//           setMwTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//         }
//       } catch (e) {
//         console.error("[MW] period fetch failed:", e);
//         setMwTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//       } finally {
//         setBusyPeriod(false);
//       }
//     },
//     [stateSlug, toTableBlock]
//   );

//   // ---- initial load flow ----
//   React.useEffect(() => {
//     let mounted = true;

//     (async () => {
//       try {
//         // 1) Load slug data (for meta + other 2 sections)
//         const slugRes = await fetch(apiUrl(`/api/minimum-wages/${encodeURIComponent(stateSlug)}`), {
//           cache: "no-store",
//           headers: { Accept: "application/json" },
//         });
//         if (slugRes.ok) {
//           const json = await slugRes.json();
//           mounted && setSlugData(json?.data ?? null);
//         } else {
//           console.error("[MW] slug API failed", slugRes.status);
//         }

//         // 2) Load periods/options and auto-select first for this state
//         setPeriodLoading(true);
//         const optRes = await fetch(apiUrl("/api/minimum-wages/periods/options"), {
//           cache: "no-store",
//           headers: { Accept: "application/json" },
//         });
//         const optJson = await optRes.json();
//         const all: PeriodOption[] = Array.isArray(optJson?.data) ? optJson.data : [];
//         const filtered = all.filter(
//           (o) => (o.state?.slug || "").toLowerCase() === stateSlug.toLowerCase()
//         );
//         filtered.sort((a, b) => (b.updated_date_iso || "").localeCompare(a.updated_date_iso || ""));

//         if (!mounted) return;
//         setPeriodOptions(filtered);

//         if (filtered[0]) {
//           setPeriodValue(filtered[0].label);
//           await fetchPeriodTable(filtered[0]); // 🔥 hydrate first table via 3-params API
//         } else {
//           setMwTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//         }
//       } catch (e) {
//         console.error("[MW] init failed:", e);
//         setMwTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//       } finally {
//         mounted && setPeriodLoading(false);
//         mounted && setLoadingInit(false);
//       }
//     })();

//     return () => {
//       mounted = false;
//     };
//   }, [stateSlug, fetchPeriodTable]);

//   // ---- Quick Action URLs ----
//   const tiles = slugData?.tiles ?? {};
//   const formUrl = normalizeUrl(tiles.form_url);
//   const calcUrl = normalizeUrl(tiles.calculator_url);
//   const siteUrl = normalizeUrl(tiles.website_url);
//   const formTitle = fmt(tiles.form_title);
//   const formBtnLabel = formTitle !== "—" ? ` ${formTitle}` : formUrl ? fileNameFromUrl(formUrl) : "Download";

//   /* ===== RENDER ===== */
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
//                   Minimum Wages of {slugData?.state?.name || stateSlug.toUpperCase()} :
//                 </h1>
//                 <div className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-orange-700">
//                   <span className="px-2 py-0.5 rounded-full bg-orange-100 border border-orange-200">
//                     state_slug: {stateSlug}
//                   </span>
//                   {(busyPeriod || loadingInit) && (
//                     <span className="inline-flex items-center gap-1">
//                       <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                       updating…
//                     </span>
//                   )}
//                   {lastPeriodUrl && (
//                     <span className="px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 max-w-full truncate" title={lastPeriodUrl}>
//                       {lastPeriodUrl}
//                     </span>
//                   )}
//                 </div>
//               </div>

//               {/* Period Dropdown */}
//               <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto">
//                 <div className="w-full sm:w-[340px]">
//                   <Popover open={periodOpen} onOpenChange={setPeriodOpen}>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         role="combobox"
//                         aria-expanded={periodOpen}
//                         className={cn(
//                           "w-full justify-between h-10",
//                           "border-orange-200 hover:bg-orange-50 hover:border-orange-300"
//                         )}
//                         disabled={periodLoading}
//                       >
//                         <span className="flex items-center gap-2">
//                           <Calendar className="h-4 w-4 text-orange-500" />
//                           <span className="text-slate-800">
//                             {periodLoading ? "Loading periods…" : periodValue}
//                           </span>
//                         </span>
//                         <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//                       <Command>
//                         <CommandInput placeholder="Search period…" />
//                         <CommandList>
//                           <CommandEmpty>No period found.</CommandEmpty>
//                           <CommandGroup heading={`Available Periods (${stateSlug})`}>
//                             {periodOptions.map((opt) => (
//                               <CommandItem
//                                 key={opt.id}
//                                 onSelect={async () => {
//                                   setPeriodValue(opt.label);
//                                   setPeriodOpen(false);
//                                   await fetchPeriodTable(opt);
//                                 }}
//                                 className="cursor-pointer"
//                               >
//                                 <Check
//                                   className={cn(
//                                     "mr-2 h-4 w-4",
//                                     periodValue === opt.label ? "opacity-100 text-orange-600" : "opacity-0"
//                                   )}
//                                 />
//                                 {opt.label}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </CommandList>
//                       </Command>
//                     </PopoverContent>
//                   </Popover>
//                 </div>

//                 {activePeriod && (
//                   <div className="text-[11px] text-orange-700">
//                     Updated <b>{activePeriod.updated_on}</b> • Effective <b>{activePeriod.effective_on}</b>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* ===== FIRST TABLE: ONLY PERIOD API ===== */}
//             {!mwTable ? (
//               <Card className="mb-3 shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-1 lg:pb-2">
//                   <CardTitle className="text-base lg:text-lg font-bold">Minimum Wage Rates (Daily in ₹)</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-6 text-sm text-gray-500 flex items-center gap-2">
//                   <Loader2 className="h-4 w-4 animate-spin" /> Loading current period…
//                 </CardContent>
//               </Card>
//             ) : (
//               <>
//                 {/* Desktop */}
//                 <Card key={`mw-${mwVersion}`} className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {mwTable?.title || "Minimum Wage Rates (Daily in ₹)"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table key={`tbl-${mwVersion}`} className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {mwTable.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {mwTable.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {mwTable.headers.map((h) => (
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
//                           {mwTable.rows.length === 0 && (
//                             <tr>
//                               <td colSpan={mwTable.headers.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
//                   <Card key={`mw-m-${mwVersion}`} className="shadow-sm border-l-4 border-l-orange-500">
//                     <CardHeader className="pb-2">
//                       <CardTitle className="text-base font-bold">
//                         {mwTable?.title || "Minimum Wage Rates (Daily in ₹)"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {mwTable.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {mwTable.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span className={cn(isSkilledCol(h) && "text-green-600 font-semibold")}>
//                                 {fmt(cell(r, h))}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {mwTable.rows.length === 0 && (
//                         <div className="text-center text-sm text-gray-500">No data available.</div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ===== Employment Categories (slug API) ===== */}
//             {slugData?.employment_categories_benefits && (
//               <>
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
//                             {slugData.employment_categories_benefits.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {slugData.employment_categories_benefits.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {slugData.employment_categories_benefits.headers.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                           {(slugData.employment_categories_benefits.rows.length ?? 0) === 0 && (
//                             <tr>
//                               <td colSpan={slugData.employment_categories_benefits.headers.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
//                       <CardTitle className="text-base font-bold">
//                         Employment Categories &amp; Additional Benefits
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {slugData.employment_categories_benefits.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {slugData.employment_categories_benefits.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {(slugData.employment_categories_benefits.rows.length ?? 0) === 0 && (
//                         <div className="text-center text-sm text-gray-500">No data available.</div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ===== Interest & Penalty (slug API) ===== */}
//             {slugData?.interest_penality && (
//               <>
//                 <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//                   <CardHeader className="pb-1 lg:pb-2">
//                     <CardTitle className="text-base lg:text-lg font-bold">
//                       {slugData.interest_penality.title || "Interest & Penalty"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     <div className="w-full overflow-x-auto">
//                       <table className="w-full">
//                         <thead>
//                           <tr className="bg-orange-500">
//                             {slugData.interest_penality.headers.map((h) => (
//                               <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                                 {h}
//                               </th>
//                             ))}
//                           </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                           {slugData.interest_penality.rows.map((r, idx) => (
//                             <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                               {slugData.interest_penality.headers.map((h) => (
//                                 <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                   {fmt(cell(r, h))}
//                                 </td>
//                               ))}
//                             </tr>
//                           ))}
//                           {(slugData.interest_penality.rows.length ?? 0) === 0 && (
//                             <tr>
//                               <td colSpan={slugData.interest_penality.headers.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
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
//                       <CardTitle className="text-base font-bold">
//                         {slugData.interest_penality.title || "Interest & Penalty"}
//                       </CardTitle>
//                     </CardHeader>
//                     <CardContent className="p-3 space-y-3">
//                       {slugData.interest_penality.rows.map((r, idx) => (
//                         <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                           {slugData.interest_penality.headers.map((h) => (
//                             <div key={h} className="flex gap-2 justify-between p-2 rounded">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <span>{fmt(cell(r, h))}</span>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                       {(slugData.interest_penality.rows.length ?? 0) === 0 && (
//                         <div className="text-center text-sm text-gray-500">No data available.</div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </div>
//               </>
//             )}

//             {/* ===== Quick Actions ===== */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     {fmt(tiles.form_title) !== "—" ? tiles.form_title : "Download Notifications"}
//                   </h3>
//                   {normalizeUrl(tiles.form_url) ? (
//                     <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8">
//                       <Link href={normalizeUrl(tiles.form_url)!} target="_blank" rel="noopener noreferrer">
//                         {fmt(tiles.form_title) !== "—" ? ` ${tiles.form_title}` : fileNameFromUrl(normalizeUrl(tiles.form_url)!)}
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <IndianRupee className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Wage Calculator</h3>
//                   {normalizeUrl(tiles.calculator_url) ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={normalizeUrl(tiles.calculator_url)!} target="_blank" rel="noopener noreferrer">
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

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Globe className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
//                   {normalizeUrl(tiles.website_url) ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <Link href={normalizeUrl(tiles.website_url)!} target="_blank" rel="noopener noreferrer">
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

//           {/* Sidebar */}
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
// import { useParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Calendar, Check, ChevronsUpDown, Loader2 } from "lucide-react";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

// /* ================== Types ================== */
// type PeriodOption = {
//   id: number | string;
//   // show-only; fetch me slug route se lenge
//   state?: { name: string; slug: string };
//   updated_date_iso: string;
//   effective_date_iso: string;
//   updated_date: string;   // dd-mm-YYYY
//   effective_date: string; // dd-mm-YYYY
//   label: string;
// };

// type GridTable = { title?: string | null; headers: string[]; rows: (string | null)[][] };

// /* ================== Utils ================== */
// const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
// const isSkilledCol = (h: string) => /skilled/i.test(h);

// const API_ORIGIN =
//   (process.env.NEXT_PUBLIC_API_BASE?.trim().replace(/\/+$/, "")) ||
//   "https://prns.prisminfoways.com";
// const apiUrl = (path: string) => `${API_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;

// /* map period API → order-safe table */
// function toGridTable(rates: any): GridTable {
//   const cols = Array.isArray(rates?.columns) ? rates.columns : [];
//   const rows = Array.isArray(rates?.rows) ? rates.rows : [];
//   const headers: string[] = cols.map((c: any) => String(c?.label ?? c?.key ?? "").trim() || "—");
//   const keys: string[] = cols.map((c: any) => String(c?.key ?? "").trim());
//   const body: (string | null)[][] = rows.map((r: any) => keys.map((k) => (k && k in r ? String(r[k]) : null)));
//   return { title: "Minimum Wage Rates (Daily in ₹)", headers, rows: body };
// }

// /* ================== Page ================== */
// export default function MinimumWagesPeriodOnlyPage() {
//   const params = useParams<{ state: string }>();
//   const stateSlug = String(params?.state || "").trim().toLowerCase();

//   const [periodOptions, setPeriodOptions] = React.useState<PeriodOption[]>([]);
//   const [periodValue, setPeriodValue] = React.useState<string>("Select period");
//   const [periodOpen, setPeriodOpen] = React.useState(false);
//   const [periodLoading, setPeriodLoading] = React.useState(true);

//   const [table, setTable] = React.useState<GridTable | null>(null);
//   const [tableVersion, setTableVersion] = React.useState(0);
//   const [busy, setBusy] = React.useState(false);
//   const [activePeriod, setActivePeriod] = React.useState<{ updated_on?: string; effective_on?: string } | null>(null);

//   // fetch & render table using 3 params (slug from route, dates from dropdown)
//   const fetchPeriodTable = React.useCallback(
//     async (opt: PeriodOption) => {
//       const updatedOn = opt?.updated_date;
//       const effectiveOn = opt?.effective_date;
//       if (!stateSlug || !updatedOn || !effectiveOn) return;

//       setBusy(true);
//       try {
//         const url = new URL(apiUrl("/api/minimum-wages/period"));
//         url.searchParams.set("state_slug", stateSlug);
//         url.searchParams.set("updated_on", updatedOn);
//         url.searchParams.set("effective_on", effectiveOn);

//         const res = await fetch(url.toString(), {
//           cache: "no-store",
//           headers: { Accept: "application/json" },
//         });
//         if (!res.ok) throw new Error(String(res.status));
//         const json = await res.json();
//         const first = Array.isArray(json?.data) ? json.data[0] : null;
//         if (!first) {
//           setTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//           return;
//         }
//         setTable(toGridTable(first.minimum_wage_rates));
//         setTableVersion((v) => v + 1);
//         setActivePeriod({ updated_on: first.updated_date, effective_on: first.effective_date });
//       } catch (e) {
//         console.error("[period] failed", e);
//         setTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//       } finally {
//         setBusy(false);
//       }
//     },
//     [stateSlug]
//   );

//   // init: load options, autoselect newest for this state, hydrate table
//   React.useEffect(() => {
//     let mounted = true;
//     (async () => {
//       try {
//         setPeriodLoading(true);
//         const res = await fetch(apiUrl("/api/minimum-wages/periods/options"), {
//           cache: "no-store",
//           headers: { Accept: "application/json" },
//         });
//         const js = await res.json();
//         const all: PeriodOption[] = Array.isArray(js?.data) ? js.data : [];
//         const filtered = all.filter((o) => (o.state?.slug || "").toLowerCase() === stateSlug);
//         filtered.sort((a, b) => (b.updated_date_iso || "").localeCompare(a.updated_date_iso || ""));

//         if (!mounted) return;
//         setPeriodOptions(filtered);
//         if (filtered[0]) {
//           setPeriodValue(filtered[0].label);
//           await fetchPeriodTable(filtered[0]);
//         } else {
//           setTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//         }
//       } catch (e) {
//         console.error("[init periods] failed", e);
//         setTable({ title: "Minimum Wage Rates (Daily in ₹)", headers: [], rows: [] });
//       } finally {
//         mounted && setPeriodLoading(false);
//       }
//     })();
//     return () => {
//       mounted = false;
//     };
//   }, [stateSlug, fetchPeriodTable]);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto max-w-6xl px-3 py-4 md:px-6 md:py-6">
//         {/* Header + state + dropdown */}
//         <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
//           <div>
//             <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
//               Minimum Wages of {stateSlug.toUpperCase()} :
//             </h1>
//             <div className="mt-1 inline-flex items-center gap-2 text-[11px] text-orange-700">
//               <span className="px-2 py-0.5 rounded-full bg-orange-100 border border-orange-200">
//                 state_slug: {stateSlug}
//               </span>
//               {activePeriod && (
//                 <span>
//                   Updated <b>{activePeriod.updated_on}</b> • Effective <b>{activePeriod.effective_on}</b>
//                 </span>
//               )}
//               {busy && (
//                 <span className="inline-flex items-center gap-1">
//                   <Loader2 className="h-3.5 w-3.5 animate-spin" />
//                   updating…
//                 </span>
//               )}
//             </div>
//           </div>

//           {/* Period dropdown */}
//           <div className="w-full sm:w-[360px]">
//             <Popover open={periodOpen} onOpenChange={setPeriodOpen}>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   role="combobox"
//                   aria-expanded={periodOpen}
//                   className={cn(
//                     "w-full justify-between h-10",
//                     "border-orange-200 hover:bg-orange-50 hover:border-orange-300"
//                   )}
//                   disabled={periodLoading}
//                 >
//                   <span className="flex items-center gap-2">
//                     <Calendar className="h-4 w-4 text-orange-500" />
//                     <span className="text-slate-800">
//                       {periodLoading ? "Loading periods…" : periodValue}
//                     </span>
//                   </span>
//                   <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
//                 <Command>
//                   <CommandInput placeholder="Search period…" />
//                   <CommandList>
//                     <CommandEmpty>No period found.</CommandEmpty>
//                     <CommandGroup heading={`Available Periods (${stateSlug})`}>
//                       {periodOptions.map((opt) => (
//                         <CommandItem
//                           key={opt.id}
//                           onSelect={async () => {
//                             setPeriodValue(opt.label);
//                             setPeriodOpen(false);
//                             await fetchPeriodTable(opt); // slug route se, dates dropdown se
//                           }}
//                           className="cursor-pointer"
//                         >
//                           <Check
//                             className={cn(
//                               "mr-2 h-4 w-4",
//                               periodValue === opt.label ? "opacity-100 text-orange-600" : "opacity-0"
//                             )}
//                           />
//                           {opt.label}
//                         </CommandItem>
//                       ))}
//                     </CommandGroup>
//                   </CommandList>
//                 </Command>
//               </PopoverContent>
//             </Popover>
//           </div>
//         </div>

//         {/* First table only */}
//         {!table ? (
//           <Card className="mb-3 shadow-sm border-l-4 border-l-orange-500">
//             <CardHeader className="pb-1">
//               <CardTitle className="text-base md:text-lg font-bold">Minimum Wage Rates (Daily in ₹)</CardTitle>
//             </CardHeader>
//             <CardContent className="p-6 text-sm text-gray-500 flex items-center gap-2">
//               <Loader2 className="h-4 w-4 animate-spin" /> Loading…
//             </CardContent>
//           </Card>
//         ) : (
//           <>
//             {/* Desktop */}
//             <Card key={`mw-${tableVersion}`} className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1">
//                 <CardTitle className="text-base md:text-lg font-bold">{table?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table key={`tbl-${tableVersion}`} className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {table.headers.map((h) => (
//                           <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {table.rows.map((row, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {row.map((val, i) => {
//                             const header = table.headers[i] || "";
//                             return (
//                               <td
//                                 key={`${idx}-${i}`}
//                                 className={cn(
//                                   "px-3 py-4 text-sm text-gray-900 break-words text-center",
//                                   isSkilledCol(header) && "text-green-600 font-semibold"
//                                 )}
//                               >
//                                 {fmt(val)}
//                               </td>
//                             );
//                           })}
//                         </tr>
//                       ))}
//                       {table.rows.length === 0 && (
//                         <tr>
//                           <td colSpan={table.headers.length || 1} className="px-4 py-6 text-center text-sm text-gray-500">
//                             No data available.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card key={`mw-m-${tableVersion}`} className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">{table?.title || "Minimum Wage Rates (Daily in ₹)"}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {table.rows.map((row, ridx) => (
//                     <div key={ridx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                       {row.map((val, cidx) => (
//                         <div key={`${ridx}-${cidx}`} className="flex gap-2 justify-between p-2 rounded">
//                           <span className="font-medium text-gray-600">{table.headers[cidx]}:</span>
//                           <span className={cn(isSkilledCol(table.headers[cidx]) && "text-green-600 font-semibold")}>
//                             {fmt(val)}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                   {table.rows.length === 0 && <div className="text-center text-sm text-gray-500">No data available.</div>}
//                 </CardContent>
//               </Card>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

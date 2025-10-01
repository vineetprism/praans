
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

// export const revalidate = 1800; // 30 min

// type ApiResponse = { data: MWSlugData };

// const BASE_ROOT = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
// const MW_BASE = `${BASE_ROOT}/api/minimum-wages`;

// const ensureConfig = () => {
//   if (!BASE_ROOT) throw new Error("NEXT_PUBLIC_API_BASE missing");
//   if (!/https?:\/\//.test(BASE_ROOT)) throw new Error(`Invalid NEXT_PUBLIC_API_BASE: "${BASE_ROOT}"`);
// };

// const normSlug = (s: string) =>
//   s.trim().toLowerCase().replace(/%20|\s|_/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

// async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
//   ensureConfig();
//   const slug = normSlug(stateParam);
//   const url = new URL(encodeURIComponent(slug), MW_BASE + "/").toString();

//   try {
//     const res = await fetch(url, { next: { revalidate }, headers: { Accept: "application/json" } });
//     if (res.status === 404) return null;
//     if (!res.ok) throw new Error(`[MW] HTTP ${res.status} @ ${url}`);
//     const json = (await res.json()) as ApiResponse;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("[MW] fetch failed:", e);
//     return null;
//   }
// }

// export async function generateMetadata({ params }: { params: Promise<{ state: string }> }): Promise<Metadata> {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);
//   if (!data) return { title: "Minimum Wages", description: "Minimum wage details not found." };

//   return {
//     title: `${data.state.name} Minimum Wages | Current Rates & Notifications`,
//     description: `Minimum wage tables, categories & benefits for ${data.state.name}.`,
//     keywords: [`${data.state.name} minimum wages`, "wage rates", "labour compliance", `${data.state.name} labour laws`],
//   };
// }

// export default async function Page({ params }: { params: Promise<{ state: string }> }) {
//   const { state } = await params;
//   const data = await getMinimumWageState(state);
//   if (!data) notFound();

//   return <MinimumWagesDetails data={data!} apiBase={MW_BASE} />;
// }





// app/minimum-wages/[state]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 1800; // 30 min
export const dynamicParams = true; // optional but safe

type ApiResponse = { data: MWSlugData };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
const MW_BASE = `${API_BASE.replace(/\/+$/, "")}/api/minimum-wages`;

// --- helpers ---
const normSlug = (s: string) =>
  s.trim().toLowerCase().replace(/%20|\s|_/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

function normalizeKeywords(v: string[] | string | null | undefined): string[] | undefined {
  if (!v) return undefined;
  return Array.isArray(v) ? v.filter(Boolean) : v.split(",").map((s) => s.trim()).filter(Boolean);
}

// ---- meta compat (flat | meta | meta_column) ----
type MWMetaBag = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
};

type MWMetaCompat = {
  // flat
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
  // nested (WF-style)
  meta?: MWMetaBag | null;
  // nested (your API style)
  meta_column?: MWMetaBag | null;
};

function pickMeta(data: unknown) {
  const d = (data ?? {}) as MWMetaCompat;

  const m: MWMetaBag =
    (d.meta_column && typeof d.meta_column === "object" ? d.meta_column :
     d.meta && typeof d.meta === "object" ? d.meta :
     {
       seo_title: d.seo_title,
       meta_description: d.meta_description,
       meta_keywords: d.meta_keywords,
       meta_url: d.meta_url,
     }) || {};

  return {
    seo_title: m.seo_title ?? null,
    meta_description: m.meta_description ?? null,
    meta_keywords: m.meta_keywords ?? null,
    meta_url: m.meta_url ?? null,
  };
}


// ---------- Metadata (Gazette-style: direct fetch + no-store) ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;

  try {
    const r = await fetch(`${MW_BASE}/${encodeURIComponent(normSlug(state))}`, { cache: "no-store" });
    if (!r.ok) return { title: "Minimum Wages" };

    const { data } = (await r.json()) as ApiResponse;
    const meta = pickMeta(data);

    return {
      title: meta.seo_title ?? null,
      description: meta.meta_description ?? undefined,
      ...(normalizeKeywords(meta.meta_keywords) && { keywords: normalizeKeywords(meta.meta_keywords) }),
      ...(meta.meta_url && { alternates: { canonical: meta.meta_url } }),
    };
  } catch (e) {
    console.error("Minimum wages metadata fetch failed:", e);
    return { title: "Minimum Wages" };
  }
}

// ---------- Fetcher for page (ISR hint same as Gazette page) ----------
async function getMinimumWageState(stateParam: string): Promise<MWSlugData | null> {
  const slug = normSlug(stateParam);
  const url = `${MW_BASE}/${encodeURIComponent(slug)}`;

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

// ---------- Page ----------
export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const data = await getMinimumWageState(state);
  if (!data) notFound();

  return <MinimumWagesDetails data={data} apiBase={MW_BASE} />;
}


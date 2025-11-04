
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NationalFestivalHolidaysDetails from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidaysDetails/NationalFestivalHolidaysDetails";

/* --- Types --- */
export type NFHTableRow = Record<string, string>;
export type StateNFHData = {
  state: { name: string; slug: string };  
  updated_date: string | null;
  effective_date: string | null;
  nfh_table?: { header: string[]; rows: NFHTableRow[] } | null;
  tiles?: { form_title?: string; form_url?: string } | null;
  meta?: { seo_title?: string; meta_description?: string; meta_keywords?: string[] | string; meta_url?: string } | null;
  meta_column?: { seo_title?: string; meta_description?: string; meta_keywords?: string[] | string; meta_url?: string } | null;
};
export type NFHDetailApi = { data: StateNFHData };

export const revalidate = 1800;
export const dynamic = "force-dynamic"; // ✅ avoids build-time fetch crash

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
const NFH_BASE = `${API_BASE}/api/national-festival-holidays`;

/* --- Helpers --- */
const normalizeKeywords = (v?: string[] | string | null) =>
  !v ? undefined : Array.isArray(v) ? v.filter(Boolean) : v.split(",").map((x) => x.trim());

const pickMeta = (data: StateNFHData) => data.meta_column ?? data.meta ?? {};

/* --- Fetcher --- */
async function getStateNFHData(slug: string): Promise<StateNFHData | null> {
  if (!API_BASE) {
    console.warn("⚠️ API base not configured, skipping NFH fetch.");
    return null;
  }

  try {
    const res = await fetch(`${NFH_BASE}/${encodeURIComponent(slug)}`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`[NFH] HTTP ${res.status}`);
    const json = (await res.json()) as NFHDetailApi;
    return json?.data ?? null;
  } catch (err) {
    console.error("State NFH API error:", err);
    return null;
  }
}

/* --- Metadata --- */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  try {
    // ✅ Use revalidate instead of no-store (safe for ISR build)
    const res = await fetch(`${NFH_BASE}/${encodeURIComponent(slug)}`, { next: { revalidate: 3600 } });
    if (!res.ok) return { title: "National Festival Holidays | Praans" };

    const { data } = (await res.json()) as NFHDetailApi;
    const meta = pickMeta(data);
    const stateName = data.state?.name ?? "State";

    return {
      title: meta.seo_title ?? `${stateName} - National Festival Holidays | Praans`,
      description:
        meta.meta_description ??
        `National & Festival Holiday details for ${stateName}. Applicability, holiday list, and compliance guide.`,
      keywords: normalizeKeywords(meta.meta_keywords),
      alternates: meta.meta_url ? { canonical: meta.meta_url } : undefined,
    };
  } catch (err) {
    console.error("NFH metadata fetch failed:", err);
    return { title: "National Festival Holidays | Praans", description: "State-wise NFH details." };
  }
}

/* --- Static Params --- */
export async function generateStaticParams() {
  if (!API_BASE) {
    console.warn("⚠️ Skipping generateStaticParams due to missing API_BASE");
    return [];
  }

  try {
    const res = await fetch(NFH_BASE, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const allStates = [
      ...(data?.applicable_states || []),
      ...(data?.non_applicable_states || []),
    ];
    return allStates.map((state: any) => ({ slug: state.state_slug }));
  } catch (error) {
    console.error("Generate static params error:", error);
    return [];
  }
}

/* --- Page --- */
export default async function StateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const initialData = await getStateNFHData(slug);
  if (!initialData) notFound();
  return <NationalFestivalHolidaysDetails initialData={{ data: initialData }} />;
}

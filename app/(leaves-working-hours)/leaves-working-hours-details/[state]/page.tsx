

// app/leaves-working-hours/[state]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeavesWorkingHoursDetails from "@/app/_component/LeavesWorkingHours/LeavesWorkingHoursDetails/LeavesWorkingHoursDetails";

export const revalidate = 1800;
export const dynamicParams = true;

const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
const LWH_BASE = `${API_BASE}/api/leaves-working-hours`;

/* =========================
   Types
   ========================= */

type LWHApi = {
  data: {
    state: { name: string; slug: string };
    is_applicable: boolean;
    updated_date: string | null;
    effective_date: string | null;
    act_information: { headers: string[]; rows: Record<string, string>[] };
    leave_entitlements: { headers: string[]; rows: Record<string, string>[] };
    working_hours: { headers: string[]; rows: Record<string, string>[] };
    tiles?: {
      form_title?: string | null;
      form_url?: string | null;
      website_title?: string | null;
      website_url?: string | null;
    };
    meta?: {
      seo_title?: string | null;
      meta_description?: string | null;
      meta_keywords?: string[] | string | null;
      meta_url?: string | null;
    } | null;
    meta_column?: {
      seo_title?: string | null;
      meta_description?: string | null;
      meta_keywords?: string[] | string | null;
      meta_url?: string | null;
    } | null;
  };
};

/* =========================
   Helpers
   ========================= */

const normSlug = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/%20|\s|_/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

function normalizeKeywords(v: string[] | string | null | undefined): string[] | undefined {
  if (!v) return undefined;
  return Array.isArray(v) ? v.filter(Boolean) : v.split(",").map((s) => s.trim()).filter(Boolean);
}

type MetaBag = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
};

function pickMeta(data: any): MetaBag {
  if (!data) return {};
  if (data.meta_column) return data.meta_column;
  if (data.meta) return data.meta;
  return {
    seo_title: data.seo_title,
    meta_description: data.meta_description,
    meta_keywords: data.meta_keywords,
    meta_url: data.meta_url,
  };
}

/* =========================
   Fetcher
   ========================= */

async function getStateLWH(slug: string): Promise<LWHApi["data"] | null> {
  const url = `${LWH_BASE}/${encodeURIComponent(normSlug(slug))}`;
  try {
    const res = await fetch(url, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`[LWH] HTTP ${res.status} @ ${url}`);
    const json = (await res.json()) as LWHApi;
    return json?.data ?? null;
  } catch (e) {
    console.error("[LWH] fetch failed:", e);
    return null;
  }
}

/* =========================
   Metadata
   ========================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;

  try {
    const r = await fetch(`${LWH_BASE}/${encodeURIComponent(normSlug(state))}`, {
      cache: "no-store",
    });
    if (!r.ok) return { title: "Leave & Working Hours | E-Library" };

    const { data } = (await r.json()) as LWHApi;
    const meta = pickMeta(data);

    const title =
      meta.seo_title ??
      `${data.state.name} - Leave & Working Hours | E-Library`;

    const description =
      meta.meta_description ??
      `Leave entitlements, working hour limits, OT, and references for ${data.state.name}.`;

    return {
      title,
      description,
      ...(normalizeKeywords(meta.meta_keywords) && { keywords: normalizeKeywords(meta.meta_keywords) }),
      ...(meta.meta_url && { alternates: { canonical: meta.meta_url } }),
    };
  } catch (e) {
    console.error("LWH metadata fetch failed:", e);
    return {
      title: "Leave & Working Hours | E-Library",
      description: "State-wise leave & working hours details.",
    };
  }
}

/* =========================
   Page
   ========================= */

export default async function StateLeavesWorkingHoursPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const payload = await getStateLWH(state);
  if (!payload?.state?.slug) notFound();

  return <LeavesWorkingHoursDetails apiBase={API_BASE} initialData={payload} />;
}

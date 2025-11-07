import { Metadata } from "next";
import { notFound } from "next/navigation";
import SEApplicabilityDetails from "@/app/_component/ApplicabilitySE/ApplicabilityDetails";

export const revalidate = 86400;
export const dynamicParams = true;

type Row = Record<string, string | null>;

export type SEApplicabilityMeta = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
  
};
type SEApplicabilityData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  seo_title: string | null;
  meta: SEApplicabilityMeta | null;
  meta_description: string | null;
  meta_keywords: string | null;
  meta_url: string | null;
  act_information: { headers: string[]; rows: Row[] };
  labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
  downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
 
};

type SEApplicabilityResponse = { data: SEApplicabilityData };
type SEListResponse = {
  applicable_states: { state_slug: string }[];
  non_applicable_states: { state_slug: string }[];
   data: string | null;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

function normalizeKeywords(v: SEApplicabilityMeta["meta_keywords"]): string[] | undefined {
  if (!v) return undefined;
  if (Array.isArray(v)) return v.filter(Boolean);
  return v.split(",").map(s => s.trim()).filter(Boolean);
}

async function getSEApplicabilityState(slug: string): Promise<SEApplicabilityData | null> {
  try {
    const res = await fetch(`${API_BASE}/api/applicabilities/${slug}`, { next: { revalidate } });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as SEApplicabilityResponse;
    return json?.data ?? null;
  } catch {
    return null;
  }
}

async function getAllSESlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/applicabilities`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as SEListResponse;
    return [
      ...(json.applicable_states || []).map(s => s.state_slug),
      ...(json.non_applicable_states || []).map(s => s.state_slug),
    ].filter(Boolean);
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;

  try {
    const res = await fetch(`${API_BASE}/api/applicabilities/${state}`, { next: { revalidate } });
    if (!res.ok) return { title: "S&E Applicability" };

    const { data }: SEApplicabilityResponse = await res.json();

    return {
      title: data?.meta?.seo_title,
      description: data?.meta?.meta_description,
      ...(normalizeKeywords(data?.meta?.meta_keywords) && {
        keywords: normalizeKeywords(data?.meta?.meta_keywords),
      }),
      ...(data?.meta?.meta_url && {
        alternates: { canonical: data.meta.meta_url },
      }),
    };
  } catch (e) {
    console.error("S&E Applicability metadata fetch failed:", e);
    return { title: "S&E Applicability" };
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSESlugs();
  return slugs.map(state => ({ state }));
}

export default async function SEApplicabilityPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = await getSEApplicabilityState(state);
  if (!data) notFound();
return <SEApplicabilityDetails data={data as unknown as any} apiBase={API_BASE} />;
}

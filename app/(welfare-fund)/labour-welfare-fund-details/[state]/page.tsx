import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const WelfareFundDetails = dynamic(() => import("@/app/_component/WelfareFund/WelfareFundDetails/WelfareFundDetails"), {
  ssr: true,
});

export const revalidate = 86400;
export const dynamicParams = true;

type Row = Record<string, string | null>;

export type WelfareFundStateMeta = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
};
type WFSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  seo_title: string | null;
  meta: WelfareFundStateMeta | null;
  meta_description: string | null;
  meta_keywords: string | null;
  meta_url: string | null;
  act_information: { headers: string[]; rows: Row[] };
  labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
  downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
};

type WFSlugResponse = { data: WFSlugData };
type WFListResponse = {
  applicable_states: { state_slug: string }[];
  non_applicable_states: { state_slug: string }[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

function normalizeKeywords(v: WelfareFundStateMeta["meta_keywords"]): string[] | undefined {
  if (!v) return undefined;
  if (Array.isArray(v)) return v.filter(Boolean);
  return v.split(",").map(s => s.trim()).filter(Boolean);
}

async function getWFState(slug: string): Promise<WFSlugData | null> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds/${slug}`, { next: { revalidate } });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as WFSlugResponse;
    return json?.data ?? null;
  } catch {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as WFListResponse;
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
    const res = await fetch(`${API_BASE}/api/welfare-funds/${state}`, { next: { revalidate } });
    if (!res.ok) return { title: "Labour Welfare Fund" };

    const { data }: WFSlugResponse = await res.json();

    return {
      title: data?.meta?.seo_title,
      description:
        data?.meta?.meta_description,
      ...(normalizeKeywords(data?.meta?.meta_keywords) && {
        keywords: normalizeKeywords(data?.meta?.meta_keywords),
      }),
      ...(data?.meta?.meta_url && {
        alternates: { canonical: data.meta.meta_url },
      }),
    };
  } catch (e) {
    console.error("Welfare fund metadata fetch failed:", e);
    return { title: "Labour Welfare Fund" };
  }
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map(state => ({ state }));
}
export default async function StateWelfareFundPage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const data = await getWFState(state);
  if (!data) notFound();
  return <WelfareFundDetails data={data} apiBase={API_BASE} />;
}


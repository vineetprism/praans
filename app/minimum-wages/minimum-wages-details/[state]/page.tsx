import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import MinimumWagesDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 1800; // 30 min
const API_BASE = (process.env.NEXT_PUBLIC_API_BASE as string).replace(/\/$/, ""); 
// e.g. https://prns.prisminfoways.com/api/minimum-wages

type ApiResp = { data: MWSlugData };
type ListItem = { state: string; state_slug: string };

function norm(s: string) {
  return s.trim().toLowerCase().replace(/%20|\s|_/g, "-").replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

async function tryFetchBySlug(slug: string): Promise<MWSlugData | null> {
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, { next: { revalidate } });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiResp;
    return json?.data ?? null;
  } catch {
    return null;
  }
}

async function resolveSlugFromName(name: string): Promise<string | null> {
  // Hit list endpoint to map "Assam" -> "soi"
  try {
    const res = await fetch(`${API_BASE}`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    const json = (await res.json()) as { data: ListItem[] };
    const match = json?.data?.find(
      (x) => x.state?.toLowerCase() === name.toLowerCase()
    );
    return match?.state_slug ?? null;
  } catch {
    return null;
  }
}

async function getDetailFlexible(raw: string): Promise<{ data: MWSlugData; slug: string } | null> {
  // 1) Assume it’s already a slug
  const asSlug = norm(raw);
  const bySlug = await tryFetchBySlug(asSlug);
  if (bySlug) return { data: bySlug, slug: asSlug };

  // 2) Maybe it’s a state name (e.g. "Assam") → resolve to canonical slug (e.g. "soi")
  const resolved = await resolveSlugFromName(raw);
  if (!resolved) return null;

  const byResolved = await tryFetchBySlug(resolved);
  if (!byResolved) return null;

  return { data: byResolved, slug: resolved };
}

/* ---------------- Metadata ---------------- */
export async function generateMetadata(
  { params }: { params: { state: string } }
): Promise<Metadata> {
  const result = await getDetailFlexible(params.state);
  if (!result) {
    return {
      title: "State Not Found | Minimum Wages",
      description: "Requested state minimum wage information was not found.",
    };
  }
  const d = result.data;
  return {
    title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
    description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date ?? "—"}.`,
    keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
  };
}

/* ---------------- Page ---------------- */
export default async function Page(
  { params }: { params: { state: string } }
) {
  const result = await getDetailFlexible(params.state);
  if (!result) notFound();

  const canonicalPath = `/minimum-wages/minimum-wages-details/${result.slug}`;
  if (params.state !== result.slug) {
    redirect(canonicalPath);
  }

  return <MinimumWagesDetails data={result.data} apiBase={API_BASE} />;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MinimumWagesDetails,{ MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 1800; // ✅ 10 min ISR

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

type ApiResp = { data: MWSlugData };

async function getDetail(slug: string): Promise<MWSlugData | null> {
  try {
    const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, {
      next: { revalidate }, // optional but explicit
    });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiResp;
    return json?.data ?? null;
  } catch (e) {
    console.error("Minimum Wage detail fetch failed:", e);
    return null;
  }
}

// ---------- Metadata (await params) ----------
export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params; // ✅ await params
  const d = await getDetail(state);
  if (!d) {
    return {
      title: "State Not Found | Minimum Wages",
      description: "Requested state minimum wage information was not found.",
    };
  }
  return {
    title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
    description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date}.`,
    keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
  };
}

export default async function Page(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params; // ✅ await params
  const data = await getDetail(state);
  if (!data) notFound();
  return <MinimumWagesDetails data={data} apiBase={API_BASE} />;
}
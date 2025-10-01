
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







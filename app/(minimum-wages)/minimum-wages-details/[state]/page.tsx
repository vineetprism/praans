// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import MinimumWageDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails"; // ⬅️ adjust path if needed

// export const revalidate = 600; // ✅ 10 min ISR for this route

// const API_BASE = "http://100.110.147.101:8000/api/minimum-wages";

// type ApiResp = { data: MWSlugData };

// async function getDetail(slug: string): Promise<MWSlugData | null> {
//   try {
//     // export const revalidate already sets default; explicit next option optional
//     const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`);
//     if (!res.ok) return null;
//     const json = (await res.json()) as ApiResp;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("Minimum Wage detail fetch failed:", e);
//     return null;
//   }
// }

// // ---------- Metadata ----------
// export async function generateMetadata(
//   { params }: { params: { state: string } }
// ): Promise<Metadata> {
//   const d = await getDetail(params.state);
//   if (!d) {
//     return {
//       title: "State Not Found | Minimum Wages",
//       description: "Requested state minimum wage information was not found.",
//     };
//   }
//   return {
//     title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
//     description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date}.`,
//     keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
//   };
// }

// // ---------- Page (Data-orchestrator only) ----------
// export default async function StateMinimumWagesPage({
//   params,
// }: {
//   params: { state: string };
// }) {
//   const data = await getDetail(params.state);
//   if (!data) notFound();

//   return <MinimumWageDetails data={data} apiBase={API_BASE} />;
// }



















// app/minimum-wages/[state]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MinimumWageDetails, { MWSlugData } from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails";

export const revalidate = 600; // ✅ 10 min ISR

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

// ---------- Page (await params) ----------
export default async function StateMinimumWagesPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params; // ✅ await params
  const data = await getDetail(state);
  if (!data) notFound();
  return <MinimumWageDetails data={data} apiBase={API_BASE} />;
}

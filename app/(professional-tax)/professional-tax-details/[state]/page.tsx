
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import ProfessionalTaxDetails from "@/app/_component/ProfessionalTax/ProfessionalTaxDetails/ProfessionalTaxDetails";

// type ActRow = {
//   Act: string;
//   Rule: string;
//   Applicability: string;
//   Frequency: string;
//   Form: string;       
//   Website: string;    
// };

// type TableBlock<H extends string, R extends Record<string, any>> = {
//   headers: H[];
//   rows: R[];
// };

// export type ApiPayload = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date: string;
//     effective_date: string;
//     act_information: TableBlock<
//       "Act" | "Rule" | "Applicability" | "Frequency" | "Form" | "Website",
//       ActRow
//     >;
//     professional_tax_slabs: TableBlock<
//       "Income Range (Monthly)" | "Monthly Tax" | "Annual Tax" | "Remarks",
//       {
//         "Income Range (Monthly)": string;
//         "Monthly Tax": string;
//         "Annual Tax": string;
//         "Remarks": string;
//       }
//     >;
//     employment_categories: TableBlock<
//       "Category" | "Description" | "Applicable Rate" | "Remarks",
//       {
//         Category: string;
//         Description: string;
//         "Applicable Rate": string;
//         Remarks: string;
//       }
//     >;
//     downloads: {
//       form_title: string | null;
//       form_url: string | null;
//       website_url: string | null;
//     };
//     meta: {
//       applicable: boolean;
//       max_annual_rate: number | null;
//       slab_count: number | null;
//     };
//   };
// };

// /* =========================
//    Config
//    ========================= */
// export const revalidate = 1800; 
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE

// function buildStateUrl(slug: string) {
//   return `${API_BASE}/api/professional-tax/${slug}`;
// }

// async function fetchState(slug: string): Promise<ApiPayload | null> {
//   try {
//     const res = await fetch(buildStateUrl(slug), { next: { revalidate } });
//     if (!res.ok) return null;
//     const json = (await res.json()) as ApiPayload;
//     // console.log(json)
//     if (!json?.data?.state?.name) return null;
//     return json;
//   } catch {
//     return null;
//   }
// }

// /* =========================
//    Metadata (dynamic) — await params
//    ========================= */
// export async function generateMetadata(
//   { params }: { params: Promise<{ state: string }> }
// ): Promise<Metadata> {
//   const { state } = await params; // ✅ await the promise
//   const payload = await fetchState(state);
//   if (!payload) {
//     return {
//       title: "State Not Found | Professional Tax",
//       description:
//         "The requested state professional tax information is not available.",
//     };
//   }
//   const name = payload.data.state.name;
//   console.log(name)
//   return {
//     title: `${name} Professional Tax - Rates, Slabs & Forms | E-Library`,
//     description: `Complete guide to ${name} Professional Tax rates, slabs, forms, and compliance requirements. Updated PT information for ${name}.`,
//     keywords: `${name} professional tax, PT rates ${name}, professional tax slabs, PT forms ${name}`,
//   };
// }

// /* =========================
//    Page — await params
//    ========================= */
// export default async function StateProfessionalTaxPage(
//   { params }: { params: Promise<{ state: string }> }
// ) {
//   const { state } = await params; // ✅ await the promise
//   const payload = await fetchState(state);
//   if (!payload) notFound();

//   return <ProfessionalTaxDetails payload={payload} />;
// } 








// app/professional-tax/[state]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfessionalTaxDetails from "@/app/_component/ProfessionalTax/ProfessionalTaxDetails/ProfessionalTaxDetails";
import { ApiPayload } from "./types"; // optional: if you extracted ApiPayload to a separate file

/* =========================
   Config
   ========================= */

export const revalidate = 1800;
export const dynamicParams = true;

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
const PT_BASE = `${API_BASE.replace(/\/+$/, "")}/api/professional-tax`;

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

/* =========================
   Meta compatibility (flat | meta | meta_column)
   ========================= */
type PTMetaBag = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
};

type PTMetaCompat = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null;
  meta_url?: string | null;
  meta?: PTMetaBag | null;
  meta_column?: PTMetaBag | null;
};

function pickMeta(data: unknown) {
  const d = (data ?? {}) as PTMetaCompat;

  const m: PTMetaBag =
    (d.meta_column && typeof d.meta_column === "object"
      ? d.meta_column
      : d.meta && typeof d.meta === "object"
      ? d.meta
      : {
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

/* =========================
   Fetcher
   ========================= */

async function getProfessionalTaxState(stateParam: string): Promise<ApiPayload["data"] | null> {
  const slug = normSlug(stateParam);
  const url = `${PT_BASE}/${encodeURIComponent(slug)}`;

  try {
    const res = await fetch(url, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`[PT] HTTP ${res.status} @ ${url}`);

    const json = (await res.json()) as ApiPayload;
    return json?.data ?? null;
  } catch (e) {
    console.error("[PT] fetch failed:", e);
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
    const r = await fetch(`${PT_BASE}/${encodeURIComponent(normSlug(state))}`, {
      cache: "no-store",
    });
    if (!r.ok) return { title: "Professional Tax" };

    const { data } = (await r.json()) as ApiPayload;
    const meta = pickMeta(data);

    return {
      title: meta.seo_title ?? `${data.state.name} Professional Tax | Rates & Compliance`,
      description:
        meta.meta_description ?? `Complete details of ${data.state.name} Professional Tax rates, slabs, forms, and compliance requirements.`,
      ...(normalizeKeywords(meta.meta_keywords) && {
        keywords: normalizeKeywords(meta.meta_keywords),
      }),
      ...(meta.meta_url && { alternates: { canonical: meta.meta_url } }),
    };
  } catch (e) {
    console.error("Professional tax metadata fetch failed:", e);
    return { title: "Professional Tax" };
  }
}

/* =========================
   Page
   ========================= */

export default async function Page({ params }: { params: Promise<{ state: string }> }) {
  const { state } = await params;
  const data = await getProfessionalTaxState(state);
  if (!data) notFound();

  return <ProfessionalTaxDetails payload={{ data }} />;
}

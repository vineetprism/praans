// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import NationalFestivalHolidaysDetails from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidaysDetails/NationalFestivalHolidaysDetails";

// export type NFHTableRow = {
//   Act: string;
//   "Applicability to": string;
//   "Eligible to avail wages on NH&FH": string;
//   "List of National Holidays": string;
//   "Festival Holidays": string;
//   "Total Number of National & Festival Holidays in a year": string;
//   "Provision if worked on NH/FH (Double the Wages/Comp off)": string;
//   "Time Limit to Avail the Comp Off": string;
//   "Notice to Labour Inspector in case of working on Holidays": string;
//   "Any other Forms to be maintained/submitted": string;
//   "Penal Consequences": string;
// };

// export type StateNFHData = {
//   state: {
//     name: string;
//     slug: string;
//   };
//   updated_date: string;
//   effective_date: string;
//   nfh_table: {
//     header: string[];
//     rows: NFHTableRow[];
//   };
//   tiles: {
//     form_title: string;
//     form_url: string;
//   };
// };

// export type NFHDetailApi = {
//   data: StateNFHData;
// };

// export const revalidate = 1800;
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

// async function getStateNFHData(slug: string): Promise<NFHDetailApi | null> {
//   try {
//     const res = await fetch(
//       `${API_BASE}/api/national-festival-holidays/${slug}`,
//       {
//         next: { revalidate },
//       }
//     );
//     if (!res.ok) {
//       if (res.status === 404) return null;
//       throw new Error(`HTTP ${res.status}`);
//     }
//     return (await res.json()) as NFHDetailApi;
//   } catch (err) {
//     console.error("State NFH API error:", err);
//     return null;
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;
//   const stateData = await getStateNFHData(slug);

//   if (!stateData) {
//     return {
//       title: "State Not Found | NFH Details",
//       description:
//         "The requested state's National Festival Holiday details could not be found.",
//     };
//   }

//   const stateName = stateData.data.state.name;

//   return {
//     title: `${stateName} - National Festival Holiday Details | Praans`,
//     description: `Complete National & Festival Holiday matrix for ${stateName}. View holiday lists, applicability, compensation details, and compliance requirements.`,
//     keywords: [
//       `${stateName} holidays`,
//       `${stateName} national holidays`,
//       `${stateName} festival holidays`,
//       "holiday matrix",
//       "public holidays",
//       "NFH details",
//     ],
//   };
// }

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(`${API_BASE}/api/national-festival-holidays`, {
//       next: { revalidate: 3600 },
//     });

//     if (!res.ok) return [];

//     const data = await res.json();
//     const allStates = [
//       ...(data?.applicable_states || []),
//       ...(data?.non_applicable_states || []),
//     ];

//     return allStates?.map((state: any) => ({
//       slug: state?.state_slug,
//     }));
//   } catch (error) {
//     console.error("Generate static params error:", error);
//     return [];
//   }
// }

// export default async function StateDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const initialData = await getStateNFHData(slug);

//   if (!initialData) {
//     notFound();
//   }

//   return (
//     <NationalFestivalHolidaysDetails
//       initialData={initialData}
//     />
//   );
// }







// // app/national-festival-holidays/[slug]/page.tsx

// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import NationalFestivalHolidaysDetails from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidaysDetails/NationalFestivalHolidaysDetails";

// /* =========================
//    Types
//    ========================= */

// export type NFHTableRow = {
//   Act: string;
//   "Applicability to": string;
//   "Eligible to avail wages on NH&FH": string;
//   "List of National Holidays": string;
//   "Festival Holidays": string;
//   "Total Number of National & Festival Holidays in a year": string;
//   "Provision if worked on NH/FH (Double the Wages/Comp off)": string;
//   "Time Limit to Avail the Comp Off": string;
//   "Notice to Labour Inspector in case of working on Holidays": string;
//   "Any other Forms to be maintained/submitted": string;
//   "Penal Consequences": string;
// };

// export type StateNFHData = {
//   state: { name: string; slug: string };
//   updated_date: string | null;
//   effective_date: string | null;
//   nfh_table?: { header: string[]; rows: NFHTableRow[] } | null; // ✅ safe optional
//   tiles?: { form_title?: string; form_url?: string } | null;
//   meta?: {
//     seo_title?: string | null;
//     meta_description?: string | null;
//     meta_keywords?: string[] | string | null;
//     meta_url?: string | null;
//   } | null;
//   meta_column?: {
//     seo_title?: string | null;
//     meta_description?: string | null;
//     meta_keywords?: string[] | string | null;
//     meta_url?: string | null;
//   } | null;
// };

// export type NFHDetailApi = { data: StateNFHData };

// export const revalidate = 1800;
// const API_BASE = (process.env.NEXT_PUBLIC_API_BASE || "").replace(/\/+$/, "");
// const NFH_BASE = `${API_BASE}/api/national-festival-holidays`;

// /* =========================
//    Helpers
//    ========================= */

// function normalizeKeywords(v: string[] | string | null | undefined): string[] | undefined {
//   if (!v) return undefined;
//   return Array.isArray(v) ? v.filter(Boolean) : v.split(",").map((s) => s.trim()).filter(Boolean);
// }

// type NFHMetaBag = {
//   seo_title?: string | null;
//   meta_description?: string | null;
//   meta_keywords?: string[] | string | null;
//   meta_url?: string | null;
// };

// function pickMeta(data: StateNFHData): NFHMetaBag {
//   if (data?.meta_column) return data.meta_column;
//   if (data?.meta) return data.meta;
//   return {};
// }

// /* =========================
//    Fetcher
//    ========================= */

// async function getStateNFHData(slug: string): Promise<StateNFHData | null> {
//   try {
//     const res = await fetch(`${NFH_BASE}/${encodeURIComponent(slug)}`, {
//       next: { revalidate },
//       headers: { Accept: "application/json" },
//     });
//     if (res.status === 404) return null;
//     if (!res.ok) throw new Error(`[NFH] HTTP ${res.status}`);
//     const json = (await res.json()) as NFHDetailApi;
//     return json?.data ?? null;
//   } catch (err) {
//     console.error("State NFH API error:", err);
//     return null;
//   }
// }

// /* =========================
//    Metadata
//    ========================= */

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }): Promise<Metadata> {
//   const { slug } = await params;

//   try {
//     const res = await fetch(`${NFH_BASE}/${encodeURIComponent(slug)}`, { cache: "no-store" });
//     if (!res.ok) return { title: "National Festival Holidays | Praans" };

//     const { data } = (await res.json()) as NFHDetailApi;
//     const meta = pickMeta(data);

//     const stateName = data.state?.name ?? "State";
//     const title = meta.seo_title ?? `${stateName} - National Festival Holidays | Praans`;
//     const description =
//       meta.meta_description ??
//       `Complete National & Festival Holiday matrix for ${stateName}. View holiday lists, applicability, compensation details, and compliance requirements.`;

//     return {
//       title,
//       description,
//       ...(normalizeKeywords(meta.meta_keywords) && { keywords: normalizeKeywords(meta.meta_keywords) }),
//       ...(meta.meta_url && { alternates: { canonical: meta.meta_url } }),
//     };
//   } catch (err) {
//     console.error("NFH metadata fetch failed:", err);
//     return {
//       title: "National Festival Holidays | Praans",
//       description: "National & Festival Holiday details by state.",
//     };
//   }
// }

// /* =========================
//    Static Params
//    ========================= */

// export async function generateStaticParams() {
//   try {
//     const res = await fetch(NFH_BASE, { next: { revalidate: 3600 } });
//     if (!res.ok) return []; 
//     const data = await res.json();
//     const allStates = [
//       ...(data?.applicable_states || []),
//       ...(data?.non_applicable_states || []),
//     ];
//     return allStates?.map((state: any) => ({ slug: state?.state_slug }));
//   } catch (error) {
//     console.error("Generate static params error:", error);
//     return [];
//   }
// }

// /* =========================
//    Page
//    ========================= */

// export default async function StateDetailPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const initialData = await getStateNFHData(slug);

//   if (!initialData) notFound();

//   return <NationalFestivalHolidaysDetails initialData={{ data: initialData }} />;
// }









// ✅ app/national-festival-holidays/[slug]/page.tsx

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

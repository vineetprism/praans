// import { Metadata } from "next";
// import HolidayDetails from "@/app/_component/Holiday/HolidayDetails/HolidayDetails";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";
// export const revalidate = 1800;

// type HolidayDetail = {
//   holiday_name: string;
//   type: "National" | "Regional" | "Optional" | string;
//   date: string;
//   day: string;
//   month: string;
//   sort_order: number;
// };

// export type HolidayStateMeta = {
//   seo_title?: string | null;
//   meta_description?: string | null;
//   meta_keywords?: string[] | string | null; 
//   meta_url?: string | null;
// };

// export type HolidayStateData = {
//   state: string;
//   year: string;
//   slug: string;
//   title: string;
//   short_desc: string;
//   seo_title: string | null;
//   meta: HolidayStateMeta | null;          // ⬅️ string se object
//   meta_description: string | null;        // (agar API top-level bhi bhejti ho)
//   meta_keywords: string | null;           // (optional legacy)
//   meta_url: string | null;                // (optional legacy)
//   holiday_pdf_url: string | null;
//   holiday_details: HolidayDetail[];
// };



// type ApiResponse = { data: HolidayStateData };

// async function getHolidayState(slug: string): Promise<HolidayStateData | null> {
//   if (!API_BASE) return null;
//   try {
//     const res = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
//       next: { revalidate },
//     });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = await res.json();
//     return (json?.data ?? null) as HolidayStateData | null;
//   } catch (e) {
//     console.error("Holiday detail fetch failed:", e);
//     return null;
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params; // ✅ must await
//   try {
//    const r = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
//       next: { revalidate },
//     });
//     if (!r.ok) return { title: "Holidys" };
//     const { data }: ApiResponse = await r.json();
//     console.log(data.meta)
//     return {
//       title: data?.meta?.seo_title || "vin-pages",
//       description: data?.meta?.meta_description || "",
//       keywords:data.meta?.meta_keywords,
//       url: data.meta?.meta_url
//       // openGraph: { title: data?.title || "", description: data?.short_description || "" },
//       // twitter: { card: "summary", title: data?.title || "", description: data?.short_description || "" },
//     };
  
//   } catch {
//     return { title: "vin-Holidays" };
//   }
// }

// export default async function Page(
//   { params }: { params: Promise<{ slug: string }> }
// ) {
//   const { slug } = await params;                // ⬅️ await params
//   const data = await getHolidayState(slug);

//   return (
//     <HolidayDetails
//       initialData={data}
//       slug={slug}
//     />
//   );
// }


















import { Metadata } from "next";
import HolidayDetails from "@/app/_component/Holiday/HolidayDetails/HolidayDetails";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";
export const revalidate = 1800;

type HolidayDetail = {
  holiday_name: string;
  type: "National" | "Regional" | "Optional" | string;
  date: string;
  day: string;
  month: string;
  sort_order: number;
};

export type HolidayStateMeta = {
  seo_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string[] | string | null; 
  meta_url?: string | null;
};

export type HolidayStateData = {
  state: string;
  year: string;
  slug: string;
  title: string;
  short_desc: string;
  seo_title: string | null;
  meta: HolidayStateMeta | null;
  meta_description: string | null;
  meta_keywords: string | null;
  meta_url: string | null;
  holiday_pdf_url: string | null;
  holiday_details: HolidayDetail[];
};

type ApiResponse = { data: HolidayStateData };

async function getHolidayState(slug: string): Promise<HolidayStateData | null> {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return (json?.data ?? null) as HolidayStateData | null;
  } catch (e) {
    console.error("Holiday detail fetch failed:", e);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ must await
  try {
   const r = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
      next: { revalidate },
    });
    if (!r.ok) return { title: "Holidays" }; // ✅ Fixed typo
    const { data }: ApiResponse = await r.json();
    console.log(data.meta);
    return {
      title: data?.meta?.seo_title || "vin-pages",
      description: data?.meta?.meta_description || "",
      keywords: data.meta?.meta_keywords,
      // ✅ Changed 'url' to proper Next.js metadata property
      ...(data.meta?.meta_url && {
        alternates: {
          canonical: data.meta.meta_url
        }
      })
    };
  
  } catch {
    return { title: "vin-Holidays" };
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const data = await getHolidayState(slug);

  return (
    <HolidayDetails
      initialData={data}
      slug={slug}
    />
  );
}

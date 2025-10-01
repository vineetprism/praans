
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









// app/professional-tax/[state]/page.tsx (Server Component)

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfessionalTaxDetails from "@/app/_component/ProfessionalTax/ProfessionalTaxDetails/ProfessionalTaxDetails";



type ActRow = {
  Act: string;
  Rule: string;
  Applicability: string;
  Frequency: string;
  Form: string;       // Can be a string or URL label from API
  Website: string;    // URL string
};

type TableBlock<H extends string, R extends Record<string, any>> = {
  headers: H[];
  rows: R[];
};

export type ApiPayload = {
  data: {
    state: { name: string; slug: string };
    updated_date: string;
    effective_date: string;
    act_information: TableBlock<
      "Act" | "Rule" | "Applicability" | "Frequency" | "Form" | "Website",
      ActRow
    >;
    professional_tax_slabs: TableBlock<
      "Income Range (Monthly)" | "Monthly Tax" | "Annual Tax" | "Remarks",
      {
        "Income Range (Monthly)": string;
        "Monthly Tax": string;
        "Annual Tax": string;
        "Remarks": string;
      }
    >;
    employment_categories: TableBlock<
      "Category" | "Description" | "Applicable Rate" | "Remarks",
      {
        Category: string;
        Description: string;
        "Applicable Rate": string;
        Remarks: string;
      }
    >;
    downloads: {
      form_title: string | null;
      form_url: string | null;
      website_url: string | null;
    };
    meta: {
      applicable: boolean;
      max_annual_rate: number | null;
      slab_count: number | null;
    };
  };
};

/* =========================
   Config
   ========================= */

export const revalidate = 1800; // 30 minutes ISR
const RAW_API_BASE = process.env.NEXT_PUBLIC_API_BASE;
const API_BASE = (RAW_API_BASE || "").trim();
if (!API_BASE) {
  // Optional warn: helps during build-time misconfig
  console.warn("NEXT_PUBLIC_API_BASE is not set. Professional Tax page will fail to fetch.");
}

function buildStateUrl(slug: string) {
  return `${API_BASE}/api/professional-tax/${slug}`;
}

/* =========================
   Server-side data fetching
   (Act/Rule style: robust + headers)
   ========================= */

async function fetchState(slug: string): Promise<ApiPayload | null> {
  try {
    const res = await fetch(buildStateUrl(slug), {
      next: { revalidate },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Failed to fetch Professional Tax for slug: ${slug}. Status: ${res.status}`);
      return null;
    }

    const json = (await res.json()) as ApiPayload;
    if (!json?.data?.state?.name) return null;
    return json;
  } catch (err) {
    console.error("Error fetching Professional Tax:", err);
    return null;
  }
}

/* =========================
   Metadata (dynamic)
   Act/Rule pattern: fresh fetch
   ========================= */

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params; // await the promise like your Act page
  // Fresh read for SEO (avoid stale): no-store
  try {
    const res = await fetch(buildStateUrl(state), {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return {
        title: "Professional Tax | State Not Found",
        description: "Requested state Professional Tax information is not available.",
      };
    }

    const payload = (await res.json()) as ApiPayload | null;
    const name = payload?.data?.state?.name;
    if (!name) {
      return {
        title: "Professional Tax | State Not Found",
        description: "Requested state Professional Tax information is not available.",
      };
    }

    // If your API ever adds meta_title/meta_description/meta_keywords,
    // you can prefer those here. For now, compute smart defaults:
    const title = `${name} Professional Tax - Rates, Slabs & Forms | E-Library`;
    const description = `Complete guide to ${name} Professional Tax: latest rates, slabs, forms, applicability, and compliance requirements.`;
    const keywords = `${name} professional tax, PT rates ${name}, professional tax slabs, PT forms ${name}, ${name} PT compliance`;

    return {
      title,
      description,
      keywords,
      // You can also add openGraph/twitter here if needed
    };
  } catch {
    return {
      title: "Professional Tax | Error",
      description: "Unable to fetch Professional Tax metadata at the moment.",
    };
  }
}

/* =========================
   Page — await params
   ========================= */

export default async function StateProfessionalTaxPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params; // keep same pattern as Act page
  const payload = await fetchState(state);
  if (!payload) notFound();

  // (Optional) JSON-LD for SEO — keep minimal & valid
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    name: `${payload.data.state.name} Professional Tax`,
    areaServed: payload.data.state.name,
    serviceType: "Tax Information Service",
    url: `/professional-tax/${payload.data.state.slug}`, // prefix with SITE_URL if you want absolute URL
    dateModified: payload.data.updated_date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProfessionalTaxDetails payload={payload} />
    </>
  );
}


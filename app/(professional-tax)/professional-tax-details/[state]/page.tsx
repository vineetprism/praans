
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProfessionalTaxDetails from "@/app/_component/ProfessionalTax/ProfessionalTaxDetails/ProfessionalTaxDetails";

type ActRow = {
  Act: string;
  Rule: string;
  Applicability: string;
  Frequency: string;
  Form: string;       
  Website: string;    
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
export const revalidate = 1800; 
const API_BASE = process.env.NEXT_PUBLIC_API_BASE

function buildStateUrl(slug: string) {
  return `${API_BASE}/api/professional-tax/${slug}`;
}

async function fetchState(slug: string): Promise<ApiPayload | null> {
  try {
    const res = await fetch(buildStateUrl(slug), { next: { revalidate } });
    if (!res.ok) return null;
    const json = (await res.json()) as ApiPayload;
    if (!json?.data?.state?.name) return null;
    return json;
  } catch {
    return null;
  }
}

/* =========================
   Metadata (dynamic) — await params
   ========================= */
export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params; // ✅ await the promise
  const payload = await fetchState(state);
  if (!payload) {
    return {
      title: "State Not Found | Professional Tax",
      description:
        "The requested state professional tax information is not available.",
    };
  }
  const name = payload.data.state.name;
  return {
    title: `${name} Professional Tax - Rates, Slabs & Forms | E-Library`,
    description: `Complete guide to ${name} Professional Tax rates, slabs, forms, and compliance requirements. Updated PT information for ${name}.`,
    keywords: `${name} professional tax, PT rates ${name}, professional tax slabs, PT forms ${name}`,
  };
}

/* =========================
   Page — await params
   ========================= */
export default async function StateProfessionalTaxPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params; // ✅ await the promise
  const payload = await fetchState(state);
  if (!payload) notFound();

  return <ProfessionalTaxDetails payload={payload} />;
} 

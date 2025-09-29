import { Metadata } from "next";
import ProfessionalTax from "@/app/_component/ProfessionalTax/ProfessionalTax";

// ---------- SEO ----------
 const metadata: Metadata = {
  title: "Professional Tax - State-wise Rates & Slabs | E-Library",
  description:
    "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
  keywords: [
    "professional tax",
    "PT rates",
    "state wise professional tax",
    "professional tax slabs",
    "professional tax compliance",
    "professional tax forms",
  ],
};

// ---------- Types ----------
export type ApplicableState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date: string | null;
  effective_date: string | null;
  max_rate: number | null;
  slabs: number | null;
};

export type PTApi = {
  applicable_count: number;
  non_applicable_count: number;
  maximum_rate: number | null;
  applicable_states: ApplicableState[];
  non_applicable_states: string[];
};

// ---------- Config ----------
export const revalidate = 1800; 
const API_BASE=process.env.NEXT_PUBLIC_API_BASE!
async function getPTData(): Promise<PTApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/professional-tax`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as PTApi;
  } catch (err) {
    console.error("PT API error:", err);
    return null;
  }
}

export default async function ProfessionalTaxPage() {
  const initialData = await getPTData();

  return (
    <ProfessionalTax
      initialData={initialData}
      apiBase={API_BASE}
      enableFilters
    />
  );
}

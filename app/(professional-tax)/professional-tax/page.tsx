import dynamic from "next/dynamic";

const ProfessionalTax = dynamic(() => import("@/app/_component/ProfessionalTax/ProfessionalTax"), {
  ssr: true,
});

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

export const revalidate = 86400; 
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

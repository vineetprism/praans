import type { Metadata } from "next";
import WelfareFund from "@/app/_component/WelfareFund/WelfareFund";

export const revalidate = 1800; // ISR: 30 minutes


type WFState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
  updated_date?: string | null;
  effective_date?: string | null;
};

type WFResponse = {
  applicable_count: number;
  non_applicable_count: number;
  applicable_states: WFState[];
  non_applicable_states: WFState[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

export const metadata: Metadata = {
  title: "Labour Welfare Fund | State-wise Applicability & Tools",
  description:
    "Browse state-wise Labour Welfare Fund applicability with search & filters, plus calculators and quick links.",
};

async function getWelfareFunds(): Promise<WFResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as WFResponse;
  } catch (err) {
    console.error("Failed to fetch LWF listing:", err);
    return null;
  }
}

export default async function WelfareFundPage() {
  const initialData = await getWelfareFunds();

  return (
    <WelfareFund
      initialData={initialData}
    />
  );
}

import dynamic from "next/dynamic";
import { Metadata } from "next";

const SEApplicability = dynamic(
  () => import("@/app/_component/ApplicabilitySE/SEApplicability"),
  {
    ssr: true,
  }
);

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Shops & Establishment Act Guide",
  description:
    "Understand labour compliance and applicability of the Shops and Establishment Act for various business sectors.",
  keywords: ["shops and establishment", "labour compliance"],
};

type SEState = {
  state_name: string;
  state_slug: string;
  applicable: boolean;
};

type SEResponse = {
  applicable_states_count: number;
  applicable_states: SEState[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

async function getSEApplicabilityData(): Promise<SEResponse | null> {
  try {
    const res = await fetch(`${API_BASE}/api/applicability`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as SEResponse;
  } catch (err) {
    console.error("Failed to fetch S&E Applicability data:", err);
    return null;
  }
}

export default async function SEApplicabilityPage() {
  const initialData = await getSEApplicabilityData();

  return <SEApplicability initialData={initialData} />;
}

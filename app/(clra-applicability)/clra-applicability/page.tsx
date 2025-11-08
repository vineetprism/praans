import type { Metadata } from "next";
import dynamic from "next/dynamic";

const LeavesWorkingHours = dynamic(
  () => import("@/app/_component/ClraApplicability/ClraApplicability"),
  {
    ssr: true,
  }
);

export const revalidate = 86400;

type StateItem = {
  id: number;
  state_name: string;
  state_slug: string;
};

type LeavesWorkingHoursAPI = {
  applicable: StateItem[];
  non_applicable: StateItem[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
export const metadata: Metadata = {
  title: "CLRA Rules & Contract Labour",
  description:
    "Learn about CLRA applicability, registration, and compliance rules for contract labour under Indian labour laws.",
  keywords: ["CLRA rules, contract labour"],
};

async function getLeavesWorkingHours(): Promise<LeavesWorkingHoursAPI | null> {
  try {
    const res = await fetch(`${API_BASE}/api/leaves-working-hours`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as LeavesWorkingHoursAPI;

    return {
      applicable: Array.isArray(data.applicable) ? data.applicable : [],
      non_applicable: Array.isArray(data.non_applicable)
        ? data.non_applicable
        : [],
    };
  } catch (err) {
    console.error("Failed to fetch Leave & Working Hours:", err);
    return null;
  }
}

export default async function LeavesWorkingHoursPage() {
  const initialData = await getLeavesWorkingHours();

  return <LeavesWorkingHours initialData={initialData} />;
}

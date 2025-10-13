import type { Metadata } from "next";
import LeavesWorkingHours from "@/app/_component/LeavesWorkingHours/LeavesWorkingHours";

export const revalidate = 900; // ISR: 15 minutes


type StateItem = {
  id: number;
  state_name: string;
  state_slug: string;
};

type LeavesWorkingHoursAPI = {
  applicable: StateItem[];
  non_applicable: StateItem[];
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE
// (optional) SEO
export const metadata: Metadata = {
  title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
  description:
    "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
  keywords:
    "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
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
      non_applicable: Array.isArray(data.non_applicable) ? data.non_applicable : [],
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

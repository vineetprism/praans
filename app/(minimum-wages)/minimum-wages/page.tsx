

// app/minimum-wages/page.tsx
import { Metadata } from "next";
import MinimumWages from "@/app/_component/MinimumWages/MinimumWages";

export const revalidate = 600; // ✅ ISR window (10 min)

export const metadata: Metadata = {
  title: "Minimum Wages in India - State-wise Rates & Notifications | E-Library",
  description:
    "Complete guide to minimum wages across Indian states. Find current rates, notifications, and compliance requirements for different categories of workers.",
  keywords:
    "minimum wages, state wise minimum wages, wage rates, labour compliance, wage notification, minimum wage act",
};

export type MinimumWageItem = {
  state: string;
  state_slug: string;
  updated_date: string;
  effective_date: string;
};

type ApiResponse = { data: MinimumWageItem[] };

async function getMinimumWages(): Promise<MinimumWageItem[]> {
  try {
    const res = await fetch("http://100.110.147.101:8000/api/minimum-wages", {
      next: { revalidate }, // same as export const revalidate above
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as ApiResponse;
    return Array.isArray(json?.data) ? json.data : [];
  } catch (err) {
    console.error("Failed to fetch minimum wages:", err);
    return [];
  }
}

export default async function MinimumWagesPage() {
  const items = await getMinimumWages();
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
        <MinimumWages items={items} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import MinimumWages from "@/app/_component/MinimumWages/MinimumWages";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

async function getMinimumWagesData() {
  try {
    const res = await fetch(`${API_BASE}/api/minimum-wages`, {
      next: { revalidate: 1800 },
    });

    if (!res.ok)
      throw new Error(`HTTP ${res.status}: Failed to fetch minimum wages data`);

    return await res.json();
  } catch (error) {
    console.error("Error fetching minimum wages data:", error);
  }
}

export const metadata: Metadata = {
  title:
    "Minimum Wages in India - State-wise Rates & Notifications | E-Library",
  description:
    "Complete guide to minimum wages across Indian states. Find current rates, notifications, and compliance requirements for different categories of workers.",
  keywords: [
    "minimum wages",
    "state wise minimum wages",
    "wage rates",
    "labour compliance",
    "wage notification",
    "minimum wage act",
  ],
};

export default async function MinimumWagesPage() {
  const initialData = await getMinimumWagesData();

  return (
    <div className="bg-white">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
        <MinimumWages items={initialData?.data || []} />
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import dynamic from "next/dynamic";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const MinimumWages = dynamic(
  () => import("@/app/_component/MinimumWages/MinimumWages"),
  {
    ssr: true,
  }
);

async function getMinimumWagesData() {
  try {
    const res = await fetch(`${API_BASE}/api/minimum-wages`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok)
      throw new Error(`HTTP ${res.status}: Failed to fetch minimum wages data`);

    return await res.json();
  } catch (error) {
    console.error("Error fetching minimum wages data:", error);
  }
}

export const metadata: Metadata = {
  title: "Minimum Wages & Wage Rates India",
  description:
    "Check updated minimum wages and state-wise wage rates to ensure compliance with current labour standards.",
  keywords: ["minimum wages", "wage rates"],
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

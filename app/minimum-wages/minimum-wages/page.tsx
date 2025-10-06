

// // app/minimum-wages/page.tsx
// import type { Metadata } from "next";
// import MinimumWages from "@/app/_component/MinimumWages/MinimumWages";

// export const revalidate = 1800; 

// export const metadata: Metadata = {
//   title: "Minimum Wages in India - State-wise Rates & Notifications | E-Library",
//   description:
//     "Complete guide to minimum wages across Indian states. Find current rates, notifications, and compliance requirements for different categories of workers.",
//   keywords:
//     "minimum wages, state wise minimum wages, wage rates, labour compliance, wage notification, minimum wage act",
// };

// export type MinimumWageItem = {
//   state: string;
//   state_slug: string;
//   updated_date: string;
//   effective_date: string;
// };

// type ApiResponse = { data: MinimumWageItem[] };

// // ---- Config (ENV first, fallback second, no trailing slash) ----
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!
// const API_URL = `${API_BASE}/api/minimum-wages`;

// // Server fetch with ISR + defensive parsing
// async function getMinimumWages(): Promise<MinimumWageItem[]> {
//   try {
//     const res = await fetch(API_URL, {
//       // next: { revalidate }, 
     
//     });

//     if (!res.ok) throw new Error(`HTTP ${res.status}`);

//     // Some backends return either { data: [...] } or direct array—handle both
//     const json = (await res.json()) as ApiResponse | MinimumWageItem[];
//     const list = Array.isArray(json)
//       ? json
//       : Array.isArray((json as ApiResponse)?.data)
//       ? (json as ApiResponse).data
//       : [];

//     return list;
//   } catch (err) {
//     console.error("Failed to fetch minimum wages:", err);
//     return [];
//   }
// }

// export default async function MinimumWagesPage() {
//   const items = await getMinimumWages();

//   return (
//     <div className=" bg-white">
//       <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
//         <MinimumWages items={items} />
//       </div>
//     </div>
//   );
// }










// app/minimum-wages/page.tsx
import type { Metadata } from "next";
import MinimumWages from "@/app/_component/MinimumWages/MinimumWages";

// ✅ Environment variable for API base URL
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

// ---------- Server Fetcher with ISR (30 min revalidate) ----------
async function getMinimumWagesData() {
  try {
    const res = await fetch(`${API_BASE}/api/minimum-wages`, {
      next: { revalidate: 1800 }, // 30 minutes
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch minimum wages data`);

    // Return the parsed JSON
    return await res.json();
  } catch (error) {
    console.error("Error fetching minimum wages data:", error);
    // 👇 Default fallback structure (matches component expectations)
    
  }
}

// ---------- Static SEO ----------
export const metadata: Metadata = {
  title: "Minimum Wages in India - State-wise Rates & Notifications | E-Library",
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

// ---------- Page ----------
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

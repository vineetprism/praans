// import { Metadata } from "next";
// import Gazette from "@/app/_component/gazette/Gazette"; // Client-side component

// // Use environment variables for API base URLs
// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";
// const STATES_API_BASE = process.env.NEXT_PUBLIC_STATES_API_BASE || "https://prns.prisminfoways.com";

// // Fetch Gazette Data
// async function getGazetteData(page: number = 1) {
//   try {
//     const res = await fetch(`${API_BASE}/api/gazettes?page=${page}`, { next: { revalidate: 1800 } });
//     if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch gazette data`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching gazette data:", error);
//     return {
//       data: [],
//       links: { first: null, last: null, prev: null, next: null },
//       meta: { current_page: 1, from: null, last_page: 1, path: "", per_page: 10, to: null, total: 0 },
//     };
//   }
// }

// // Fetch States Data
// async function getStatesData() {
//   try {
//     const res = await fetch(STATES_API_BASE + "/api/states");
//     if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch states data`);
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching states data:", error);
//     return { states: [] };  // Return empty states if there's an error
//   }
// }

// // Server-side metadata
// export const metadata: Metadata = {
//   title: "Gazette Notifications | Government Legal Publications",
//   description:
//     "Find and read official government gazette notifications, statutory orders, and rules published in the official gazette by the Indian government.",
//   keywords: [
//     "Gazette Notifications",
//     "Legal Publications",
//     "Government Gazette",
//     "Statutory Orders",
//     "Official Government Documents",
//     "Indian Laws",
//   ],
// };

// // Main server component
// export default async function GazetteNotificationsPage({ searchParams }: { searchParams: { page?: string } }) {
//   const currentPage = Number(searchParams.page) || 1;

//   // Fetch Gazette data and States data concurrently
//   const [initialData, statesData] = await Promise.all([getGazetteData(currentPage), getStatesData()]);

//   // Pass both initialData (gazette) and statesData (states) to the client-side component
//   return <Gazette initialData={initialData} initialPage={currentPage} availableStates={statesData.states} />;
// }











// app/(e-library)/gazette/page.tsx
import type { Metadata } from "next";
import Gazette from "@/app/_component/Gazette/Gazette"; // Client-side component

// Use environment variables for API base URLs (safe fallback + trim trailing slash)
const API_BASE =
  (process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com").replace(/\/+$/, "");
const STATES_API_BASE =
  (process.env.NEXT_PUBLIC_STATES_API_BASE || "https://prns.prisminfoways.com").replace(/\/+$/, "");

// ---------- Server fetchers (ISR enabled) ----------
async function getGazetteData(page: number = 1) {
  try {
    const res = await fetch(`${API_BASE}/api/gazettes?page=${page}`, {
      next: { revalidate: 1800 }, // 30 min ISR
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch gazette data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching gazette data:", error);
    return {
      data: [],
      links: { first: null, last: null, prev: null, next: null },
      meta: { current_page: 1, from: null, last_page: 1, path: "", per_page: 10, to: null, total: 0 },
    };
  }
}

async function getStatesData() {
  try {
    const res = await fetch(`${STATES_API_BASE}/api/states`, {
      next: { revalidate: 1800 }, // cache align
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch states data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching states data:", error);
    return { states: [] };
  }
}

// ---------- Static SEO ----------
export const metadata: Metadata = {
  title: "Gazette Notifications | Government Legal Publications",
  description:
    "Find and read official government gazette notifications, statutory orders, and rules published in the official gazette by the Indian government.",
  keywords: [
    "Gazette Notifications",
    "Legal Publications",
    "Government Gazette",
    "Statutory Orders",
    "Official Government Documents",
    "Indian Laws",
  ],
};

// ---------- Page (await searchParams) ----------
export default async function GazetteNotificationsPage(
  { searchParams }: { searchParams: Promise<{ page?: string }> } // 👈 Promise type
) {
  const { page } = await searchParams; // 👈 await karo
  const currentPage = Number(page) || 1;

  // Concurrent fetch
  const [initialData, statesData] = await Promise.all([
    getGazetteData(currentPage),
    getStatesData(),
  ]);

  return (
    <Gazette
      initialData={initialData}
      initialPage={currentPage}
      availableStates={statesData.states}
    />
  );
}


import type { Metadata } from "next";
import Gazette from "@/app/_component/Gazette/Gazette"; // Client-side component

// Use environment variable for API base URL
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

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
  { searchParams }: { searchParams: Promise<{ page?: string }> } // keeping your Promise-based typing
) {
  const { page } = await searchParams; // await as you had
  const currentPage = Number(page) || 1;

  // Fetch gazettes
  const initialData = await getGazetteData(currentPage);

  return (
    <Gazette
      initialData={initialData}
      initialPage={currentPage}
    />
  );
}

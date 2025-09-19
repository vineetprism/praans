import { Metadata } from "next";
import GazetteNotificationsClient from "../_component/Gazette/Gazette"; // Client-side component

// Use environment variables for API base URLs
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";
const STATES_API_BASE = process.env.NEXT_PUBLIC_STATES_API_BASE || "https://prns.prisminfoways.com";

// Fetch Gazette Data
async function getGazetteData(page: number = 1) {
  try {
    const res = await fetch(`${API_BASE}/api/gazettes?page=${page}`, { next: { revalidate: 1800 } });
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

// Fetch States Data
async function getStatesData() {
  try {
    const res = await fetch(STATES_API_BASE + "/api/states");
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch states data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching states data:", error);
    return { states: [] };  // Return empty states if there's an error
  }
}

// Server-side metadata
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

// Main server component
export default async function GazetteNotificationsPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;

  // Fetch Gazette data and States data concurrently
  const [initialData, statesData] = await Promise.all([getGazetteData(currentPage), getStatesData()]);

  // Pass both initialData (gazette) and statesData (states) to the client-side component
  return <GazetteNotificationsClient initialData={initialData} initialPage={currentPage} availableStates={statesData.states} />;
}

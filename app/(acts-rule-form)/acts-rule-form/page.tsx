import { Metadata } from "next";
import ActsPageClient from "../../_component/ActRuleForm/ActsPageClient";

// Use environment variables for API base URLs
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";
const STATES_API_BASE = process.env.NEXT_PUBLIC_STATES_API_BASE || "https://prns.prisminfoways.com";

// Fetch Acts Data
async function getActsData(page: number = 1) {
  try {
    const res = await fetch(`${API_BASE}/api/act-rule-forms?page=${page}`, { next: { revalidate: 1800 } });
    if (!res.ok) throw new Error(`HTTP ${res.status}: Failed to fetch acts data`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching acts data:", error);
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
    return { states: [] };
  }
}

// Server-side metadata
export const metadata: Metadata = {
  title: "Labour Acts & Regulations | Complete Legal Database",
  description:
    "Comprehensive collection of central and state labour acts with latest amendments and updates. Search through Acts, Rules, and Forms.",
  keywords: [
    "Labour Acts",
    "Labour Regulations",
    "Legal Database",
    "Indian Labour Laws",
    "Employment Acts",
    "Workplace Regulations",
    "Legal Compliance",
  ],
};

// Main server component
export default async function ActsPage({ searchParams }: { searchParams: { page?: string } }) {
  const currentPage = Number(searchParams.page) || 1;

  // Fetch acts and states data
  const [initialData, statesData] = await Promise.all([getActsData(currentPage), getStatesData()]);

  return <ActsPageClient initialData={initialData} initialPage={currentPage} states={statesData.states} />;
}

import type { Metadata } from "next";
import ActsPageClient from "../../_component/ActRuleForm/ActsPageClient";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

// Fetch acts data with search and state filters
async function getActsData(page: number = 1, search?: string, state?: string) {
  try {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    if (search && search.trim()) {
      params.set("search", search.trim());
    }

    if (state && state !== "All States" && state.trim()) {
      params.set("state", state.trim());
    }

    const url = `${API_BASE}/api/act-rule-forms?${params.toString()}`;

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch acts data`);
    }

    const data = await res.json();
    console.log("✅ [SSR] Fetched:", data.data?.length, "acts");

    return data;
  } catch (error) {
    console.error("❌ [SSR] Error fetching acts data:", error);
    return {
      data: [],
      links: { first: null, last: null, prev: null, next: null },
      meta: {
        current_page: 1,
        from: null,
        last_page: 1,
        path: "",
        per_page: 10,
        to: null,
        total: 0,
      },
    };
  }
}

// Fetch available states from CORRECT API
async function getStates() {
  try {
    // Use the correct states API endpoint
    const url = `${API_BASE}/api/states`;
    console.log("🏢 [SSR] Fetching states from:", url);

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 1 hour
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error("❌ [SSR] States API failed:", res.status);
      return [];
    }

    const data = await res.json();

    // Handle different possible response formats
    let statesArray = [];

    if (Array.isArray(data)) {
      // Format: [{ id: 1, name: "State" }]
      statesArray = data;
    } else if (data.states && Array.isArray(data.states)) {
      // Format: { states: [{ id: 1, name: "State" }] }
      statesArray = data.states;
    } else if (data.data && Array.isArray(data.data)) {
      // Format: { data: [{ id: 1, name: "State" }] }
      statesArray = data.data;
    }


    // Ensure proper format
    const formattedStates = statesArray.map((state: any, index: number) => ({
      id: state.id || index,
      name: state.name || state.state_name || String(state),
    }));

    return formattedStates;
  } catch (error) {
    console.error("❌ [SSR] Error fetching states:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Labour Laws & Compliance Forms",
  description:
    "Explore key labour laws and compliance regulations with essential forms for smooth business operations in India.",
  keywords: ["labour laws", "compliance regulations"],
};

export default async function ActsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; state?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const search = params.search || "";
  const state = params.state || "";

  console.log("🔍 [SSR] Page params:", { currentPage, search, state });

  const [initialData, statesData] = await Promise.all([
    getActsData(currentPage, search, state),
    getStates(),
  ]);


  return (
    <ActsPageClient
      initialData={initialData}
      initialPage={currentPage}
      availableStates={statesData}
      initialSearch={search}
      initialState={state}
    />
  );
}

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

// import type { Metadata } from "next";
// import Gazette from "@/app/_component/Gazette/Gazette";

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE;
// async function getGazetteData(page: number = 1) {
//   try {
//     const res = await fetch(`${API_BASE}/api/gazettes?page=${page}`, {
//       next: { revalidate: 86400 },
//     });
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

// export default async function GazetteNotificationsPage(
//   { searchParams }: { searchParams: Promise<{ page?: string }> }
// ) {
//   const { page } = await searchParams;
//   const currentPage = Number(page) || 1;

//   const initialData = await getGazetteData(currentPage);

//   return (
//     <Gazette
//       initialData={initialData}
//       initialPage={currentPage}
//     />
//   );
// }






// app/gazette/page.tsx
import type { Metadata } from "next";
import Gazette from "@/app/_component/Gazette/Gazette";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

// Fetch gazette data with all filters
async function getGazetteData(
  page: number = 1,
  search?: string,
  state?: string,
  effective?: string,
  updated?: string
) {
  try {
    const params = new URLSearchParams();
    params.set("page", page.toString());

    if (search && search.trim()) {
      params.set("search", search.trim());
    }

    if (state && state !== "All States" && state.trim()) {
      params.set("state", state.trim());
    }

    if (effective && effective.trim()) {
      params.set("effective", effective.trim());
    }

    if (updated && updated.trim()) {
      params.set("updated", updated.trim());
    }

    const url = `${API_BASE}/api/gazettes?${params.toString()}`;
    console.log("🔍 [SSR] Fetching gazettes:", url);

    const res = await fetch(url, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: Failed to fetch gazette data`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("❌ [SSR] Error fetching gazette data:", error);
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

// Fetch available states
async function getStates() {
  try {
    const url = `${API_BASE}/api/states`;
    console.log("🏢 [SSR] Fetching states from:", url);

    const res = await fetch(url, {
      next: { revalidate: 3600 },
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

    // Handle different response formats
    let statesArray = [];
    if (Array.isArray(data)) {
      statesArray = data;
    } else if (data.states && Array.isArray(data.states)) {
      statesArray = data.states;
    } else if (data.data && Array.isArray(data.data)) {
      statesArray = data.data;
    }

    const formattedStates = statesArray.map((state: any, index: number) => {
      if (typeof state === "string") {
        return state;
      }
      return state.name || state.state_name || String(state);
    });

    console.log("✅ [SSR] States count:", formattedStates.length);

    return formattedStates;
  } catch (error) {
    console.error("❌ [SSR] Error fetching states:", error);
    return [];
  }
}

export const metadata: Metadata = {
  title: "Latest Gazette Notifications India",
  description:
    "Stay informed with government circulars and gazette notifications related to labour law and policy updates in India.",
  keywords: ["gazette notifications", "government circulars"],
};

export default async function GazetteNotificationsPage({
  searchParams,
}: {
  searchParams: Promise<{
    page?: string;
    search?: string;
    state?: string;
    effective?: string;
    updated?: string;
  }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const search = params.search || "";
  const state = params.state || "";
  const effective = params.effective || "";
  const updated = params.updated || "";



  const [initialData, statesData] = await Promise.all([
    getGazetteData(currentPage, search, state, effective, updated),
    getStates(),
  ]);

  return (
    <Gazette
      initialData={initialData}
      initialPage={currentPage}
      availableStates={statesData}
      initialSearch={search}
      initialState={state}
      initialEffective={effective}
      initialUpdated={updated}
    />
  );
}

// Force dynamic rendering
export const dynamic = "force-dynamic";
export const revalidate = 0;

import type { Metadata } from "next";
import ActsPageClient from "../../_component/ActRuleForm/ActsPageClient";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!

async function getActsData(page: number = 1) {
  try {
    const res = await fetch(`${API_BASE}/api/act-rule-forms?page=${page}`, {
      next: { revalidate: 86400 },
    });
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


export default async function ActsPage(
  { searchParams }: { searchParams: Promise<{ page?: string }> }
) {
  const { page } = await searchParams;        
  const currentPage = Number(page) || 1;

  const [initialData] = await Promise.all([
    getActsData(currentPage),
  ]);

  return (
    <ActsPageClient
      initialData={initialData}
      initialPage={currentPage}
    />
  );
}

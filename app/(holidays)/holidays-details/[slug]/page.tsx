import { Metadata } from "next";
import HolidayDetails from "@/app/_component/Holiday/HolidayDetails/HolidayDetails";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "";
export const revalidate = 1800;

type HolidayDetail = {
  holiday_name: string;
  type: "National" | "Regional" | "Optional" | string;
  date: string;
  day: string;
  month: string;
  sort_order: number;
};

export type HolidayStateData = {
  state: string;
  year: string;
  slug: string;
  title: string;
  short_desc: string;
  holiday_pdf_url: string | null;
  holiday_details: HolidayDetail[];
};

async function getHolidayState(slug: string): Promise<HolidayStateData | null> {
  if (!API_BASE) return null;
  try {
    const res = await fetch(`${API_BASE}/api/holidaysdetail/${slug}`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return (json?.data ?? null) as HolidayStateData | null;
  } catch (e) {
    console.error("Holiday detail fetch failed:", e);
    return null;
  }
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;                // ⬅️ await params
  const data = await getHolidayState(slug);
  const title = data
    ? `${data.title} Holidays ${data.year} | Prism PRNS`
    : "Holiday Details | Prism PRNS";
  const description = data?.short_desc
    ? `Official holidays for ${data.title} (${data.year}).`
    : "Browse official state-wise holidays.";
  return { title, description };
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;                // ⬅️ await params
  const data = await getHolidayState(slug);

  return (
    <HolidayDetails
      initialData={data}
      slug={slug}
    />
  );
}

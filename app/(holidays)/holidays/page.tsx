import { Metadata } from "next";
import HolidaysPageClient from "@/app/_component/Holiday/Holiday";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;

type HolidayListItem = { slug: string; state: string };

function parseHolidayPayload(payload: unknown): HolidayListItem[] {
  if (Array.isArray(payload)) return payload as HolidayListItem[];
  if (payload && typeof payload === "object" && Array.isArray((payload as any).data)) {
    return (payload as any).data as HolidayListItem[];
  }
  return [];
}

async function getHolidays(year: number) {
  try {
    if (!API_BASE) throw new Error("API base missing");
    const res = await fetch(`${API_BASE}/api/holidays/${year}`, {
      next: { revalidate: 1800 }, // ISR: 30 mins
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return parseHolidayPayload(data);
  } catch (e) {
    console.error("Error fetching holidays:", e);
    return [] as HolidayListItem[];
  }
}

 const metadata: Metadata = {
  title: "Holiday Lists | Prism PRNS",
  description: "Browse state-wise statutory holiday lists with year-wise filters.",
};

export default async function HolidaysPage() {
  const CY = new Date().getFullYear();
  const initialYear = CY >= 2020 && CY <= 2040 ? CY : 2025;
  const initialHolidays = await getHolidays(initialYear);

  return (
    <HolidaysPageClient
      initialYear={initialYear}
      initialHolidays={initialHolidays}
    />
  );
}

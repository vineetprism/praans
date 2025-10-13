import { Metadata } from "next";
import NationalFestivalHolidays from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidays";

export const metadata: Metadata = {
  title: "National & Festival Holidays - State-wise Holiday Matrix | Praans",
  description:
    "Complete guide to National & Festival Holidays across all Indian states. Get latest holiday lists, state-wise applicability, and compliance requirements.",
  keywords: [
    "national holidays",
    "festival holidays",
    "state wise holidays",
    "holiday matrix",
    "public holidays india",
    "national festival holidays",
  ],
};

export type StateHoliday = {
  id: number;
  state: string;
  state_slug: string;
  is_applicable: boolean;
  updated_date: string;
  effective_date: string;
  notes: string;
};

export type NFHApi = {
  applicable_states_count: number;
  non_applicable_states_count: number;
  applicable_states: StateHoliday[];
  non_applicable_states: StateHoliday[];
};

export const revalidate = 1800;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

async function getNFHData(): Promise<NFHApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/national-festival-holidays`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return (await res.json()) as NFHApi;
  } catch (err) {
    console.error("NFH API error:", err);
    return null;
  }
}

export default async function NationalFestivalHolidaysPage() {
  const initialData = await getNFHData();

  return (
    <NationalFestivalHolidays
      initialData={initialData}
      apiBase={API_BASE}
      enableFilters
    />
  );
}
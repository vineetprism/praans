
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeavesWorkingHoursDetails from "@/app/_component/LeavesWorkingHours/LeavesWorkingHoursDetails/LeavesWorkingHoursDetails";

export const revalidate = 1800; 


type LWHApi = {
  data: {
    state: { name: string; slug: string };
    is_applicable: boolean;
    updated_date: string | null;
    effective_date: string | null;
    act_information: {
      headers: string[];
      rows: Record<string, string>[];
    };
    leave_entitlements: {
      headers: string[];
      rows: Record<string, string>[];
    };
    working_hours: {
      headers: string[];
      rows: Record<string, string>[];
    };
    tiles?: {
      form_title?: string | null;
      form_url?: string | null;
      website_title?: string | null;
      website_url?: string | null;
    };
  };
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!

async function getStateLWH(slug: string): Promise<LWHApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/leaves-working-hours/${encodeURIComponent(slug)}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return (await res.json()) as LWHApi;
  } catch {
    return null;
  }
}


export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  try {
    const { state } = await params; // ✅ await
    const res = await fetch(`${API_BASE}/api/leaves-working-hours/${encodeURIComponent(state)}`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error("nope");
    const json = (await res.json()) as LWHApi;
    const name = json?.data?.state?.name ?? "State";
    return {
      title: `${name} - Leave & Working Hours | E-Library`,
      description: `Leave entitlements, working hour limits, OT, and references for ${name}.`,
    };
  } catch {
    return {
      title: "Leave & Working Hours | E-Library",
      description: "State-wise leave & working hours details.",
    };
  }
}


export default async function StateLeavesWorkingHoursPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params;
  const payload = await getStateLWH(state);
  if (!payload?.data?.state?.slug) notFound();

  return (
    <LeavesWorkingHoursDetails
      apiBase={API_BASE}
      initialData={payload.data}
    />
  );
}

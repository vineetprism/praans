import { Metadata } from "next";
import { notFound } from "next/navigation";
import NationalFestivalHolidaysDetails from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidaysDetails/NationalFestivalHolidaysDetails";

export type NFHTableRow = {
  Act: string;
  "Applicability to": string;
  "Eligible to avail wages on NH&FH": string;
  "List of National Holidays": string;
  "Festival Holidays": string;
  "Total Number of National & Festival Holidays in a year": string;
  "Provision if worked on NH/FH (Double the Wages/Comp off)": string;
  "Time Limit to Avail the Comp Off": string;
  "Notice to Labour Inspector in case of working on Holidays": string;
  "Any other Forms to be maintained/submitted": string;
  "Penal Consequences": string;
};

export type StateNFHData = {
  state: {
    name: string;
    slug: string;
  };
  updated_date: string;
  effective_date: string;
  nfh_table: {
    header: string[];
    rows: NFHTableRow[];
  };
  tiles: {
    form_title: string;
    form_url: string;
  };
};

export type NFHDetailApi = {
  data: StateNFHData;
};

export const revalidate = 1800;
const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

async function getStateNFHData(slug: string): Promise<NFHDetailApi | null> {
  try {
    const res = await fetch(
      `${API_BASE}/api/national-festival-holidays/${slug}`,
      {
        next: { revalidate },
      }
    );
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`HTTP ${res.status}`);
    }
    return (await res.json()) as NFHDetailApi;
  } catch (err) {
    console.error("State NFH API error:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stateData = await getStateNFHData(slug);

  if (!stateData) {
    return {
      title: "State Not Found | NFH Details",
      description:
        "The requested state's National Festival Holiday details could not be found.",
    };
  }

  const stateName = stateData.data.state.name;

  return {
    title: `${stateName} - National Festival Holiday Details | Praans`,
    description: `Complete National & Festival Holiday matrix for ${stateName}. View holiday lists, applicability, compensation details, and compliance requirements.`,
    keywords: [
      `${stateName} holidays`,
      `${stateName} national holidays`,
      `${stateName} festival holidays`,
      "holiday matrix",
      "public holidays",
      "NFH details",
    ],
  };
}

export async function generateStaticParams() {
  try {
    const res = await fetch(`${API_BASE}/api/national-festival-holidays`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const allStates = [
      ...(data?.applicable_states || []),
      ...(data?.non_applicable_states || []),
    ];

    return allStates?.map((state: any) => ({
      slug: state?.state_slug,
    }));
  } catch (error) {
    console.error("Generate static params error:", error);
    return [];
  }
}

export default async function StateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const initialData = await getStateNFHData(slug);

  if (!initialData) {
    notFound();
  }

  return (
    <NationalFestivalHolidaysDetails
      initialData={initialData}
    />
  );
}

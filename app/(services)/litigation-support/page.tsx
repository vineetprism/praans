import React from "react";
import LitigationSupport from "@/app/_component/Services/LitigationSupport/LitigationSupport";
import { Metadata } from "next";

type ApiPost = {
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  meta_url?: string | null;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

export const revalidate = 1800;

function normalizeKeywords(v?: string | null): string[] | undefined {
  if (!v) return undefined;
  return v
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean);
}

function resolveCanonical(metaUrl?: string | null): string {
  if (!metaUrl) return `${API_BASE}/service/litigation`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/service/litigation`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "Litigation Support Services in Gurugram | Praans Consultech",
        description:
          "End-to-end Litigation Support services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "Litigation Support",
          "Labour Compliance India",
          "PAN India Services",
          "Praans Consultech",
          "business sectors",
          "India",
          "corporate compliance",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/service/litigation` },
      };
    }

    const json = await res.json();

    const raw =
      json && json.data && !Array.isArray(json.data)
        ? json.data
        : Array.isArray(json?.data)
        ? json.data[0]
        : json;

    const data = raw as Partial<ApiPost>;

    const title =
      data.meta_title ||
      "Litigation Support Services in Gurugram | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end Litigation Support services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.";

    const keywords = normalizeKeywords(data.meta_keywords);

    const canonical = resolveCanonical(data.meta_url);

    return {
      title,
      description,
      keywords,
      alternates: { canonical },
    };
  } catch {
    return {
      title:
        "Litigation Support Services in Gurugram | Praans Consultech",
      description:
        "End-to-end Litigation Support services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "Litigation Support",
        "Labour Compliance India",
        "PAN India Services",
        "Praans Consultech",
        "business sectors",
        "India",
        "corporate compliance",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/service/litigation` },
    };
  }
}


export default function Page() {
  return (
    <>
      <LitigationSupport />
    </>
  );
}

import Hero from '@/app/_component/AboutSection/Location/Hero'
import Map_Sidebar from '@/app/_component/AboutSection/Location/Map_Sidebar'
import React from 'react'
import { Metadata } from 'next'

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
  if (!metaUrl) return `${API_BASE}/about/location`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/about/location`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title: "Our Locations | Praans Consultech",
        description:
          "Our locations in India with offices in Haryana, Karnataka, and Assam.",
        keywords: [
          "locations",
          "praans consultech",
          "labour law compliance",
          "business sectors",
          "India",
          "corporate compliance",
          "HR solutions",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/about/location` },
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

    const title = data.meta_title || "Our Locations | Praans Consultech";

    const description =
      data.meta_description ||
      "Our locations in India with offices in Haryana, Karnataka, and Assam.";

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
      title: "Our Locations | Praans Consultech",
      description:
        "Our locations in India with offices in Haryana, Karnataka, and Assam.",
      keywords: [
        "locations",
        "praans consultech",
        "labour law compliance",
        "business sectors",
        "India",
        "corporate compliance",
        "HR solutions",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/about/location` },
    };
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <Map_Sidebar />
    </>
  )
}
import React from "react";
import Hero from "@/app/_component/AboutSection/Clients/Hero";
import Sector from "@/app/_component/AboutSection/Clients/Sector";
import Confidental from "@/app/_component/AboutSection/Clients/Confidental";
import Cta from "@/app/_component/AboutSection/Clients/Cta";
import type { Metadata } from "next";

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
  if (!metaUrl) return `${API_BASE}/about/client`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/about/client`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title: "Our Clients | Praans Consultech",
        description:
          "Trusted by businesses across all major sectors in India for labour law compliance solutions.",
        keywords: [
          "clients",
          "Praans Consultech",
          "labour law compliance",
          "business sectors",
          "India",
          "corporate compliance",
          "HR solutions",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/about/client` },
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

    const title = data.meta_title || "Our Clients | Praans Consultech";

    const description =
      data.meta_description ||
      "Trusted by businesses across major sectors in India for labour law compliance.";

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
      title: "Our Clients | Praans Consultech",
      description:
        "Trusted by businesses across all major sectors in India for labour law compliance solutions.",
      keywords: [
        "clients",
        "Praans Consultech",
        "labour law compliance",
        "business sectors",
        "India",
        "corporate compliance",
        "HR solutions",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/about/client` },
    };
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <Sector />
      <Confidental />
      <Cta />
    </>
  );
}

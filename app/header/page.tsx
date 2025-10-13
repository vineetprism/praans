import React from "react";
import SiteHeader from "../_component/siteHeader";
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
  if (!metaUrl) return `${API_BASE}/header`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/header`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title: "Praans Consultech | Labour Law Compliance Solutions in India",
        description:
          "Praans Consultech is a trusted partner for labour law compliance in India. Explore our services, resource library, compliance updates, and expert guidance to streamline statutory compliance for your business.",
        keywords: [
          "labour welfare fund",
          "Shop & Establishment Registration",
          "FSSAI",
          "Professional Tax",
          "MSME Registration",
          "GST Registration",
          "Trade Licence",
          "business sectors",
          "India",
          "corporate compliance",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/header` },
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
      "Praans Consultech | Labour Law Compliance Solutions in India";

    const description =
      data.meta_description ||
      "Praans Consultech is a trusted partner for labour law compliance in India. Explore our services, resource library, compliance updates, and expert guidance to streamline statutory compliance for your business.";

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
      title: "Praans Consultech | Labour Law Compliance Solutions in India",
      description:
        "Praans Consultech is a trusted partner for labour law compliance in India. Explore our services, resource library, compliance updates, and expert guidance to streamline statutory compliance for your business.",
      keywords: [
        "labour welfare fund",
        "Shop & Establishment Registration",
        "FSSAI",
        "Professional Tax",
        "MSME Registration",
        "GST Registration",
        "Trade Licence",
        "business sectors",
        "India",
        "corporate compliance",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/header` },
    };
  }
}

export default function Page() {
  return (
    <>
      <SiteHeader />
    </>
  );
}

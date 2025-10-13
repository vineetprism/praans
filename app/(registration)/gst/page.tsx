import BenefitsGST from "@/app/_component/Registration/GST/Benefits";
import GstDocsAndPenalties from "@/app/_component/Registration/GST/Documents";
import FaqPage from "@/app/_component/Registration/GST/Faq";
import GSTNeeds from "@/app/_component/Registration/GST/GSTNeeds";
import GSTRegistration from "@/app/_component/Registration/GST/GSTRegistration";
import GstHero from "@/app/_component/Registration/GST/Hero";
import GSTReviews from "@/app/_component/Registration/GST/Reviews";
import FounderPage from "@/app/_component/Registration/Msme_Registration/Founder";
import { Metadata } from "next";
import React from "react";

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
  if (!metaUrl) return `${API_BASE}/registration/gst`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/gst`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "GST Registration & Goods and Services Tax Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end GST Registration & Goods and Services Tax services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "GST Registration",
          "Goods and Services Tax",
          "Goods and Services Tax Registration",
          "Goods and Services Tax Compliance",
          "Goods and Services Tax Compliance India",
          "PAN India Services",
          "Praans Consultech",
          "labour law compliance",
          "business sectors",
          "India",
          "corporate compliance",
          "HR solutions",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/registration/gst` },
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
      "GST Registration & Goods and Services Tax Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end GST Registration & Goods and Services Tax services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.";

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
        "GST Registration & Goods and Services Tax Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end GST Registration & Goods and Services Tax services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "GST Registration",
        "Goods and Services Tax",
        "Goods and Services Tax Registration",
        "Goods and Services Tax Compliance",
        "Goods and Services Tax Compliance India",
        "PAN India Services",
        "Praans Consultech",
        "labour law compliance",
        "business sectors",
        "India",
        "corporate compliance",
        "HR solutions",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/registration/gst` },
    };
  }
}

export default function Page() {
  return (
    <>
      <GstHero />
      <GSTRegistration />
      <BenefitsGST />
      <GSTReviews />
      <GSTNeeds />
      <GstDocsAndPenalties />
      <FounderPage />
      <FaqPage />
    </>
  );
}

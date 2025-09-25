import BenefitsCLRA from "@/app/_component/Registration/CLRA/Benefits";
import CLRANeeds from "@/app/_component/Registration/CLRA/CLRANeeds";
import ClraRegistration from "@/app/_component/Registration/CLRA/ClraRegistration";
import CLRADocs from "@/app/_component/Registration/CLRA/Document";
import FaqPage from "@/app/_component/Registration/CLRA/Faq";
import CLRAHero from "@/app/_component/Registration/CLRA/Hero";
import CLRAProcessPage from "@/app/_component/Registration/CLRA/Process";
import CLRAReviews from "@/app/_component/Registration/CLRA/Reviews";
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
  if (!metaUrl) return `${API_BASE}/registration/contract`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/contract`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "CLRA Registration & Licence Consultant (PAN India) in Gurugram | Praans Consultech",
        description:
          "End-to-end CLRA Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "CLRA Registration",
          "Contract Labour (Regulation and Abolition) Act",
          "Labour Licence",
          "Contractor Licence",
          "Principal Employer Registration",
          "CLRA Licence Renewal",
          "CLRA Licence Amendment",
          "Labour Compliance India",
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
        alternates: { canonical: `${API_BASE}/registration/contract` },
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
      "CLRA Registration & Licence Consultant (PAN India) in Gurugram | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end CLRA Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.";

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
        "CLRA Registration & Licence Consultant (PAN India) in Gurugram | Praans Consultech",
      description:
        "End-to-end CLRA Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "CLRA Registration",
        "Contract Labour (Regulation and Abolition) Act",
        "Labour Licence",
        "Contractor Licence",
        "Principal Employer Registration",
        "CLRA Licence Renewal",
        "CLRA Licence Amendment",
        "Labour Compliance India",
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
      alternates: { canonical: `${API_BASE}/registration/contract` },
    };
  }
}

export default function Page() {
  return (
    <>
      <CLRAHero />
      <ClraRegistration />
      <BenefitsCLRA />
      <CLRAReviews />
      <CLRAProcessPage />
      <CLRANeeds />
      <CLRADocs />
      <FounderPage />
      <FaqPage />
    </>
  );
}

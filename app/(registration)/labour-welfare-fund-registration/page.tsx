import LWFAdvantage from "@/app/_component/Registration/LWF/Advantage";
import LWFDocuments from "@/app/_component/Registration/LWF/Documents";
import FaqPage from "@/app/_component/Registration/LWF/Faq";
import LWFHero from "@/app/_component/Registration/LWF/Hero";
import LWFNeeds from "@/app/_component/Registration/LWF/LWFNeeds";
import LWFRegistration from "@/app/_component/Registration/LWF/LWFRegistration";
import LWFProcessPage from "@/app/_component/Registration/LWF/Process";
import LWFReviews from "@/app/_component/Registration/LWF/Reviews";
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
  if (!metaUrl) return `${API_BASE}/registration/labour`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/labour`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "Labour Welfare Fund (LWF) Registration & Compliance Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end Labour Welfare Fund (LWF) registration, contribution setup, deductions, and return filing for employers. Fast TAT, expert guidance, PAN-India/state-specific compliance, and free consultation.",
        keywords: [
          "Labour Welfare Fund",
          "LWF Registration",
          "LWF Employer Registration",
          "LWF Contribution",
          "LWF Deduction",
          "LWF Return Filing",
          "LWF Compliance",
          "State-wise Labour Welfare Fund",
          "Labour Compliance India",
          "PAN India Services",
          "Praans Consultech",
        ],
        alternates: { canonical: `${API_BASE}/registration/labour` },
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
      "Labour Welfare Fund (LWF) Registration & Compliance Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end Labour Welfare Fund (LWF) registration, contribution setup, deductions, and return filing for employers. Fast TAT, expert guidance, PAN-India/state-specific compliance, and free consultation.";

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
        "Labour Welfare Fund (LWF) Registration & Compliance Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end Labour Welfare Fund (LWF) registration, contribution setup, deductions, and return filing for employers. Fast TAT, expert guidance, PAN-India/state-specific compliance, and free consultation.",
      keywords: [
        "Labour Welfare Fund",
        "LWF Registration",
        "LWF Employer Registration",
        "LWF Contribution",
        "LWF Deduction",
        "LWF Return Filing",
        "LWF Compliance",
        "State-wise Labour Welfare Fund",
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
      alternates: { canonical: `${API_BASE}/registration/labour` },
    };
  }
}

export default function Page() {
  return (
    <>
      <LWFHero />
      <LWFRegistration />
      <LWFAdvantage />
      <LWFReviews />
      <LWFProcessPage />
      <LWFNeeds />
      <LWFDocuments />
      <FounderPage />
      <FaqPage />
    </>
  );
}

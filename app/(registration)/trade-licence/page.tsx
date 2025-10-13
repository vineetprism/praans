import FounderPage from "@/app/_component/Registration/Msme_Registration/Founder";
import BenefitsTradeLicence from "@/app/_component/Registration/TradeLicence/Benefits";
import WhyChooseTradeLicence from "@/app/_component/Registration/TradeLicence/Choose";
import TradeLicenceDocuments from "@/app/_component/Registration/TradeLicence/Documents";
import FaqPage from "@/app/_component/Registration/TradeLicence/Faq";
import TradeLicenceHero from "@/app/_component/Registration/TradeLicence/Hero";
import TradeLicenceProcessPage from "@/app/_component/Registration/TradeLicence/Process";
import TradeLicence from "@/app/_component/Registration/TradeLicence/TradeLicence";
import TradeLicenceNeeds from "@/app/_component/Registration/TradeLicence/TradeLicenceNeeds";
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
  if (!metaUrl) return `${API_BASE}/registration/trade`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/trade`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "Trade Licence Registration & Compliance Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end Trade Licence registration with municipal authorities, renewals, amendments (name/activity/address), inspections support, and state/city-wise compliance. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
        keywords: [
          "Trade Licence",
          "Trade License Registration",
          "Municipal Trade Licence",
          "Trade Licence Renewal",
          "Trade Licence Amendment",
          "Trade Storage Licence",
          "Municipal Compliance",
          "City-wise Trade Licence",
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
        alternates: { canonical: `${API_BASE}/registration/trade` },
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
      "Trade Licence Registration & Compliance Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end Trade Licence registration with municipal authorities, renewals, amendments (name/activity/address), inspections support, and state/city-wise compliance. Fast TAT, expert guidance, PAN-India coverage, and free consultation.";

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
        "Trade Licence Registration & Compliance Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end Trade Licence registration with municipal authorities, renewals, amendments (name/activity/address), inspections support, and state/city-wise compliance. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
      keywords: [
        "Trade Licence",
        "Trade License Registration",
        "Municipal Trade Licence",
        "Trade Licence Renewal",
        "Trade Licence Amendment",
        "Trade Storage Licence",
        "Municipal Compliance",
        "City-wise Trade Licence",
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
      alternates: { canonical: `${API_BASE}/registration/trade` },
    };
  }
}

export default function Page() {
  return (
    <>
      <TradeLicenceHero />
      <TradeLicence />
      <BenefitsTradeLicence />
      <WhyChooseTradeLicence />
      <TradeLicenceProcessPage />
      <TradeLicenceNeeds />
      <TradeLicenceDocuments />
      <FounderPage />
      <FaqPage />
    </>
  );
}

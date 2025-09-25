import MsmeRegistrationAbout from "@/app/_component/Registration/Msme_Registration/About";
import BenefitsPage from "@/app/_component/Registration/Msme_Registration/Benefits";
import ReviewsPage from "@/app/_component/Registration/Msme_Registration/Review";
import EmploymentPage from "@/app/_component/Registration/Msme_Registration/EmployementBenfits";
import MsmeHero from "@/app/_component/Registration/Msme_Registration/Hero";
import ProtectionPage from "@/app/_component/Registration/Msme_Registration/Protection";
import React from "react";
import MsmeProcessPage from "@/app/_component/Registration/Msme_Registration/Process";
import WhoCanApplyPage from "@/app/_component/Registration/Msme_Registration/Apply";
import FounderPage from "@/app/_component/Registration/Msme_Registration/Founder";
import FaqPage from "@/app/_component/Registration/Msme_Registration/Faq";
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
  if (!metaUrl) return `${API_BASE}/registration/msme`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/msme`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title: "MSME Registration Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end MSME registration, renewals, updates/corrections, and certificate download. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
        keywords: [
          "MSME Registration",
          "MSME Certificate",
          "MSME Renewal",
          "NIC Code Selection",
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
        alternates: { canonical: `${API_BASE}/registration/msme` },
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
      "MSME Registration Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end MSME registration, renewals, updates/corrections, and certificate download. Fast TAT, expert guidance, PAN-India coverage, and free consultation.";

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
      title: "MSME Registration Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end MSME registration, renewals, updates/corrections, and certificate download. Fast TAT, expert guidance, PAN-India coverage, and free consultation.",
      keywords: [
        "MSME Registration",
        "MSME Certificate",
        "MSME Renewal",
        "NIC Code Selection",
        "Micro Small Medium Enterprise",
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
      alternates: { canonical: `${API_BASE}/registration/msme` },
    };
  }
}

export default function Page() {
  return (
    <>
      <MsmeHero />
      <MsmeRegistrationAbout />
      <BenefitsPage />
      <ProtectionPage />
      <EmploymentPage />
      <ReviewsPage />
      <MsmeProcessPage />
      <WhoCanApplyPage />
      <FounderPage />
      <FaqPage />
    </>
  );
}

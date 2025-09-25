import FssaiDocumentsPage from "@/app/_component/Registration/Fssai/Documents";
import FaqPage from "@/app/_component/Registration/Fssai/Faq";
import FssaiNeeds from "@/app/_component/Registration/Fssai/FssaiNeeds";
import FassaiRegistration from "@/app/_component/Registration/Fssai/FssaiRegistration";
import FssaiHero from "@/app/_component/Registration/Fssai/Hero";
import FssaiProcessPage from "@/app/_component/Registration/Fssai/Process";
import Reviews from "@/app/_component/Registration/Fssai/Review";
import WhyFssaiImp from "@/app/_component/Registration/Fssai/WhyFssaiImp";
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
  if (!metaUrl) return `${API_BASE}/registration/fssai`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/fssai`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "FSSAI Registration & Licence Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end FSSAI Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "FSSAI Registration",
          "Food Safety and Standards Act",
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
        alternates: { canonical: `${API_BASE}/registration/fssai` },
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
      "FSSAI Registration & Licence Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end FSSAI Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.";

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
        "FSSAI Registration & Licence Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end FSSAI Registration & Labour Licence services for contractors and principal employers. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "FSSAI Registration",
        "Food Safety and Standards Act",
        "Food Licence",
        "Food Business Operator Registration",
        "FSSAI Licence Renewal",
        "FSSAI Licence Amendment",
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
      alternates: { canonical: `${API_BASE}/registration/fssai` },
    };
  }
}

export default function Page() {
  return (
    <>
      <FssaiHero />
      <FassaiRegistration />
      <WhyFssaiImp />
      <Reviews />
      <FssaiProcessPage />
      <FssaiNeeds />
      <FssaiDocumentsPage />
      <FounderPage />
      <FaqPage />
    </>
  );
}

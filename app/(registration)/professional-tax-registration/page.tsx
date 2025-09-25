import FounderPage from "@/app/_component/Registration/Msme_Registration/Founder";
import BenefitsProfessionalTax from "@/app/_component/Registration/Professional_Tax/Benefits";
import ProfessionalTaxKeyDifference from "@/app/_component/Registration/Professional_Tax/Difference";
import ProfessionalTaxDocs from "@/app/_component/Registration/Professional_Tax/Document";
import FaqPage from "@/app/_component/Registration/Professional_Tax/Faq";
import ProfessionalTaxHero from "@/app/_component/Registration/Professional_Tax/Hero";
import FssaiProcessPage from "@/app/_component/Registration/Professional_Tax/Process";
import ProfessionalTaxNeeds from "@/app/_component/Registration/Professional_Tax/ProfessionalTaxNeeds";
import ProfessionalTaxRegistration from "@/app/_component/Registration/Professional_Tax/ProfessionalTaxRegistration";
import ProfessionalTaxReviews from "@/app/_component/Registration/Professional_Tax/Reviews";
import ProfessionalTaxTypes from "@/app/_component/Registration/Professional_Tax/TypesProfessionalTax";
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
  if (!metaUrl) return `${API_BASE}/registration/professional`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/professional`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "Professional Tax (PT) Registration & Compliance Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end Professional Tax (PT) enrolment (PTEC), employer registration (PTRC), monthly deductions & challans, return filing, and state-wise compliance. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "Professional Tax",
          "PT Registration",
          "PTEC Enrolment",
          "PTRC Registration",
          "Professional Tax Return",
          "Professional Tax Challan",
          "Professional Tax Slab",
          "Professional Tax Compliance",
          "Employer PT",
          "Employee PT Deduction",
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
        alternates: { canonical: `${API_BASE}/registration/professional` },
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
      "Professional Tax (PT) Registration & Compliance Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end Professional Tax (PT) enrolment (PTEC), employer registration (PTRC), monthly deductions & challans, return filing, and state-wise compliance. Fast TAT, expert guidance, PAN-India support, and free consultation.";

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
        "Professional Tax (PT) Registration & Compliance Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end Professional Tax (PT) enrolment (PTEC), employer registration (PTRC), monthly deductions & challans, return filing, and state-wise compliance. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "Professional Tax",
        "PT Registration",
        "PTEC Enrolment",
        "PTRC Registration",
        "Professional Tax Return",
        "Professional Tax Challan",
        "Professional Tax Slab",
        "Professional Tax Compliance",
        "Employer PT",
        "Employee PT Deduction",
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
      alternates: { canonical: `${API_BASE}/registration/professional` },
    };
  }
}

export default function Page() {
  return (
    <>
      <ProfessionalTaxHero />
      <ProfessionalTaxRegistration />
      <BenefitsProfessionalTax />
      <ProfessionalTaxTypes />
      <ProfessionalTaxKeyDifference />
      <ProfessionalTaxReviews />
      <FssaiProcessPage />
      <ProfessionalTaxNeeds />
      <ProfessionalTaxDocs />
      <FounderPage />
      <FaqPage />
    </>
  );
}

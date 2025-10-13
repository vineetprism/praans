import FounderPage from "@/app/_component/Registration/Msme_Registration/Founder";
import BenefitsShopEstabilishment from "@/app/_component/Registration/Shop_Estabilishment/Benefits";
import ShopEstabilishmentDocs from "@/app/_component/Registration/Shop_Estabilishment/Documents";
import FaqPage from "@/app/_component/Registration/Shop_Estabilishment/Faq";
import ShopEstablishmentHero from "@/app/_component/Registration/Shop_Estabilishment/Hero";
import ShopEstabilishmentProcessPage from "@/app/_component/Registration/Shop_Estabilishment/Process";
import ShopEstablishmentReviews from "@/app/_component/Registration/Shop_Estabilishment/Reviews";
import ShopEstabilishment from "@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishment";
import ShopEstabilishmentNeeds from "@/app/_component/Registration/Shop_Estabilishment/ShopEstabilishmentNeeds";
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
  if (!metaUrl) return `${API_BASE}/registration/shop`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/registration/shop`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title:
          "Shop & Establishment Registration & Compliance Consultant (PAN India) | Praans Consultech",
        description:
          "End-to-end Shops & Establishments Act registration/licence, renewals, amendments (name/address/manager), closure intimation, and state-wise compliance for shops, offices, and commercial establishments. Fast TAT, expert guidance, PAN-India support, and free consultation.",
        keywords: [
          "Shop and Establishment Registration",
          "Shops & Establishments Act",
          "Shop & Establishment Licence",
          "S&E Registration",
          "Gumasta Licence",
          "Shop Licence Renewal",
          "Shop & Establishment Amendment",
          "Shop Establishment Closure",
          "State-wise Labour Compliance",
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
        alternates: { canonical: `${API_BASE}/registration/shop` },
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
      "Shop & Establishment Registration & Compliance Consultant (PAN India) | Praans Consultech";

    const description =
      data.meta_description ||
      "End-to-end Shops & Establishments Act registration/licence, renewals, amendments (name/address/manager), closure intimation, and state-wise compliance for shops, offices, and commercial establishments. Fast TAT, expert guidance, PAN-India support, and free consultation.";

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
        "Shop & Establishment Registration & Compliance Consultant (PAN India) | Praans Consultech",
      description:
        "End-to-end Shops & Establishments Act registration/licence, renewals, amendments (name/address/manager), closure intimation, and state-wise compliance for shops, offices, and commercial establishments. Fast TAT, expert guidance, PAN-India support, and free consultation.",
      keywords: [
        "Shop and Establishment Registration",
        "Shops & Establishments Act",
        "Shop & Establishment Licence",
        "S&E Registration",
        "Gumasta Licence",
        "Shop Licence Renewal",
        "Shop & Establishment Amendment",
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
      alternates: { canonical: `${API_BASE}/registration/shop` },
    };
  }
}

export default function Page() {
  return (
    <>
      <ShopEstablishmentHero />
      <ShopEstabilishment />
      <BenefitsShopEstabilishment />
      <ShopEstablishmentReviews />
      <ShopEstabilishmentProcessPage />
      <ShopEstabilishmentNeeds />
      <ShopEstabilishmentDocs />
      <FounderPage />
      <FaqPage />
    </>
  );
}

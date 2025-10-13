import React from "react";
import Hero from "@/app/_component/AboutSection/Company/Hero";
import OurStory from "@/app/_component/AboutSection/Company/OurStory";
import OurJourney from "@/app/_component/AboutSection/Company/OurJourney";
import Services from "@/app/_component/AboutSection/Company/Services";
import Choose from "@/app/_component/AboutSection/Company/Choose";
import Team from "@/app/_component/AboutSection/Company/Team";
import VisionMission from "@/app/_component/AboutSection/Company/VisionMission";
import Certification from "@/app/_component/AboutSection/Company/Certification";
import LabourLaw from "@/app/_component/AboutSection/Company/LabourLaw";
import OurPromise from "@/app/_component/AboutSection/Company/OurPromise";
import Serve from "@/app/_component/AboutSection/Company/Serve";
import Media from "@/app/_component/AboutSection/Company/Media";
import { Metadata } from "next";
import AboutFaq from "@/app/_component/AboutSection/Company/AboutFaq";

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
  if (!metaUrl) return `${API_BASE}/about/company`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/about/company`, {
      next: { revalidate },
    });

    if (!res.ok) {
      return {
        title: "Our Company | Praans Consultech",
        description:
          "Discover Praans Consultech — India’s trusted labour law compliance partner. Learn about our story, journey, services, team, certifications, labour law expertise, vision & mission, and our promise to businesses across sectors.",
        keywords: [
          "Praans Consultech, about Praans Consultech, labour law compliance, compliance services, corporate compliance India, HR solutions, compliance outsourcing, labour law expertise, certifications, team, vision and mission, our story, our journey",
          "labour law compliance",
          "business sectors",
          "India",
          "corporate compliance",
          "HR solutions",
          "compliance outsourcing",
          "industry leaders",
        ],
        alternates: { canonical: `${API_BASE}/about/company` },
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

    const title = data.meta_title || "Our Company | Praans Consultech";

    const description =
      data.meta_description ||
      "Discover Praans Consultech — India’s trusted labour law compliance partner. Learn about our story, journey, services, team, certifications, labour law expertise, vision & mission, and our promise to businesses across sectors.";

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
      title: "Our Company | Praans Consultech",
      description:
        "Discover Praans Consultech — India’s trusted labour law compliance partner. Learn about our story, journey, services, team, certifications, labour law expertise, vision & mission, and our promise to businesses across sectors.",
      keywords: [
        "Praans Consultech, about Praans Consultech, labour law compliance, compliance services, corporate compliance India, HR solutions, compliance outsourcing, labour law expertise, certifications, team, vision and mission, our story, our journey",
        "labour law compliance",
        "business sectors",
        "India",
        "corporate compliance",
        "HR solutions",
        "compliance outsourcing",
        "industry leaders",
      ],
      alternates: { canonical: `${API_BASE}/about/company` },
    };
  }
}

export default function Page() {
  return (
    <>
      <Hero />
      <OurStory />
      <OurJourney />
      <Services />
      <Choose />
      <Team />
      <VisionMission />
      <Certification />
      <LabourLaw />
      <OurPromise />
      <Serve />
      <Media />
      <AboutFaq/>
    </>
  );
}

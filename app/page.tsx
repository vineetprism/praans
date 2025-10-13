import type { Metadata } from "next";
import ResourceLibrary from "@/app/_component/Home/resource-library/page";
import NewsCarouselSection from "@/app/_component/Home/carousel-section/page";
import HeroSection from "./_component/Home/hero-section/page";
import CTASection from "./_component/Home/cta-section/page";
import { ServiceSection } from "./_component/Home/service-section/page";
import { cache } from "react";

type ApiPost = {
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  meta_url?: string | null;
};

type GazetteResponse = {
  data: any[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
  };
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
  if (!metaUrl) return `${API_BASE}/home`;
  if (/^https?:\/\//i.test(metaUrl)) return metaUrl;
  return `${API_BASE}${metaUrl.startsWith("/") ? "" : "/"}${metaUrl}`;
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/home`, { next: { revalidate } });

    if (!res.ok) {
      return {
        title: "Praans | Labour Law Compliance Solutions in India",
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
        alternates: { canonical: `${API_BASE}/home` },
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
      data.meta_title || "Praans | Labour Law Compliance Solutions in India";
    const description =
      data.meta_description ||
      "Praans Consultech is a trusted partner for labour law compliance in India. Explore our services, resource library, compliance updates, and expert guidance to streamline statutory compliance for your business.";
    const keywords = normalizeKeywords(data.meta_keywords);
    const canonical = resolveCanonical(data.meta_url);

    return { title, description, keywords, alternates: { canonical } };
  } catch {
    return {
      title: "Praans | Labour Law Compliance Solutions in India",
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
      alternates: { canonical: `${API_BASE}/home` },
    };
  }
}

const getGazetteData = cache(
  async (opts?: {
    page?: number;
    slug?: string | null;
  }): Promise<GazetteResponse> => {
    const page = opts?.page ?? 1;
    const slug = (opts?.slug ?? "").trim();

    const url = new URL(`${API_BASE}/api/gazettes`);
    url.searchParams.set("page", String(page));
    if (slug) url.searchParams.set("slug", slug);

    try {
      const res = await fetch(url.toString(), { next: { revalidate: 1800 } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as GazetteResponse;
    } catch {
      return {
        data: [],
        links: { first: null, last: null, prev: null, next: null },
        meta: {
          current_page: 1,
          from: null,
          last_page: 1,
          path: "",
          per_page: 10,
          to: null,
          total: 0,
        },
      };
    }
  }
);

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ slug?: string | string[] }>;
}) {
  const sp = await searchParams;
  const slug = Array.isArray(sp?.slug) ? sp.slug[0] ?? "" : sp?.slug ?? "";

  const initialData = await getGazetteData({ page: 1, slug });

  return (
    <div className="min-h-screen">
      <HeroSection />
      <NewsCarouselSection initialData={initialData} slug={slug} />
      <ServiceSection />
      <ResourceLibrary />
      <CTASection />
    </div>
  );
}

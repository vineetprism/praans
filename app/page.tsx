import type { Metadata } from "next";
import React from "react";
import ResourceLibrary from "@/app/_component/Home/resource-library/page";
import NewsCarouselSection from "@/app/_component/Home/carousel-section/page";
import HeroSection from "./_component/Home/hero-section/page";
import CTASection from "./_component/Home/cta-section/page";
import { ServiceSection } from "./_component/Home/service-section/page";

export const metadata: Metadata = {
  title: "Praans Consultech | Labour Law Compliance Solutions in India",
  description:
    "Praans Consultech is a trusted partner for labour law compliance in India. Explore our services, resource library, compliance updates, and expert guidance to streamline statutory compliance for your business.",
  keywords:
    "Praans Consultech, labour law compliance India, compliance outsourcing, HR solutions, compliance services, minimum wages, professional tax, labour welfare fund, acts and gazettes, resource library",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <NewsCarouselSection />
      <ServiceSection />
      <ResourceLibrary />
      <CTASection />
    </div>
  );
}


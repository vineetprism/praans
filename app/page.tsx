"use client";
import React from "react";
import ResourceLibrary from "./resource-library/page";
import NewsCarouselSection from "@/app/carousel-section/page";
import HeroSection from "./hero-section/page";
import CTASection from "./cta-section/page";
import { MiddleSection } from "./middle-section/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <NewsCarouselSection />
      <MiddleSection />
      <ResourceLibrary />
      <CTASection />
    </div>
  );
}

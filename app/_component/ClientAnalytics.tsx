"use client";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-VQQP9G251C";

export default function ClientAnalytics() {
  if (process.env.NODE_ENV !== "production") return null;
  return <GoogleAnalytics gaId={GA_ID} />;
}

import type { Metadata } from "next";
import ResourceLibrary from "../_component/Home/resource-library/page";

export const metadata: Metadata = {
  title: "Resource Library | Praans Consultech",
  description:
    "Explore Praans Consultech’s resource library for acts, gazettes, holidays, minimum wages, professional tax, labour welfare fund, S&E Act applicability, and more compliance resources.",
  keywords:
    "Praans Consultech resource library, labour law compliance, acts and rules, gazette notifications, holidays list, minimum wages, professional tax, labour welfare fund, shops and establishments act",
};

export default function Page() {
  return (
    <div className=" bg-gray-50">
      <ResourceLibrary />
    </div>
  );
}


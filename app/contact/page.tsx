import type { Metadata } from "next";
import React from "react";
import Hero from "../_component/Contact/Hero";
import Contact from "../_component/Contact/Contact";
import Locations from "../_component/Contact/Map";

export const metadata: Metadata = {
  title: "Contact Us | Praans Consultech",
  description:
    "Get in touch with Praans Consultech for expert labour law compliance solutions. Reach our offices across India or connect with our team directly.",
  keywords:
    "Contact Praans Consultech, labour law compliance contact, compliance solutions India, HR compliance support, compliance office locations",
};

export default function Page() {

  return (
    <>
      <Hero />
      <Contact />
      <Locations />
    </>
  );
}

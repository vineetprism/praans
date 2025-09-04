import type { Metadata } from "next";
import Terms from "../_component/TermsConditions/Terms";

export const metadata: Metadata = {
  title: "Terms & Conditions | Praans Consultech",
  description:
    "Read the Terms & Conditions of Praans Consultech. Understand the legal guidelines, usage policies, and compliance terms governing our services.",
  keywords:
    "Praans Consultech terms and conditions, compliance policies, service terms, legal guidelines, user agreement, company policies",
};

export default function TermsAndConditionsPage() {
  return <Terms />;
}


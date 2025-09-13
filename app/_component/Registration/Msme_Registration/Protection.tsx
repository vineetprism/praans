import React from "react";

type Item = { title: string; desc: string };

const exportPromotion: Item[] = [
  {
    title: "Duty Exemptions and Refunds",
    desc:
      "MSME exporters benefit from reduced customs duties and tax refunds under schemes like RoDTEP (Remission of Duties and Taxes on Exported Products).",
  },
  {
    title: "Market Development Assistance",
    desc:
      "The government provides financial assistance to MSMEs for participating in international trade fairs and exhibitions, encouraging global market access.",
  },
  {
    title: "Export Credit Guarantee",
    desc:
      "MSMEs exporting goods can access credit insurance through the Export Credit Guarantee Corporation (ECGC) protecting them against payment defaults.",
  },
];

const techAndSkill: Item[] = [
  {
    title: "Technology Upgradation Subsidy",
    desc:
      "MSMEs can receive subsidies under the Credit Linked Capital Subsidy Scheme (CLCSS) to upgrade technology and improve operational efficiency.",
  },
  {
    title: "Skill Development Programs",
    desc:
      "The government conducts various skill development and training programs to enhance workforce capabilities in MSMEs.",
  },
  {
    title: "Zero Defect Zero Effect (ZED)",
    desc:
      "This scheme offers financial support to MSMEs for achieving higher quality standards and adopting sustainable practices.",
  },
];

const infraUtility: Item[] = [
  {
    title: "Concessions on Electricity Bills",
    desc:
      "MSMEs enjoy subsidies or concessions on electricity tariffs, reducing operating costs in states that implement such measures.",
  },
  {
    title: "Land and Infrastructure Subsidies",
    desc:
      "State governments offer subsidized land and reduced stamp duties for MSMEs setting up operations in industrial areas.",
  },
  {
    title: "Cluster Development Programs",
    desc:
      "The government promotes cluster-based development, providing shared facilities, infrastructure, and support services to MSME groups.",
  },
];

const ipInnovation: Item[] = [
  {
    title: "Subsidized Patent and Trademark Filing",
    desc:
      "MSMEs can avail up to 50% subsidy on filing fees for patents, trademarks, and designs to encourage innovation.",
  },
  {
    title: "R&D Tax Deductions",
    desc:
      "Businesses conducting research and development activities can claim tax deductions under Section 35 of the Income Tax Act.",
  },
  {
    title: "Start-Up Support",
    desc:
      "MSMEs registered as startups under Startup India are eligible for incubator support, funding, and tax holidays.",
  },
];

export default function ProtectionPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#f5f7fc]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-4">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Protection Against Delayed Payments
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-[15px] leading-7 text-slate-900 text-justify">
            MSMEs are legally protected under the MSME Development Act, 2006, which mandates
            buyers to make payments within 45 days of accepting goods/services. Delayed payments
            attract interest at three times the RBI’s bank rate, safeguarding the business’s cash
            flow.
          </p>
        </div>
      </section>

      <Section bg="white" title="Export Promotion and Subsidies">
        <CardsGrid items={exportPromotion} hoverColor="#eb8535" />
      </Section>

      <Section bg="gray" title="Technology and Skill Development">
        <CardsGrid items={techAndSkill} hoverColor="#eb8535" />
      </Section>

      <Section bg="white" title="Infrastructure and Utility Benefits">
        <CardsGrid items={infraUtility} hoverColor="#eb8535" />
      </Section>

      <Section bg="gray" title="Intellectual Property and Innovation Support">
        <CardsGrid items={ipInnovation} hoverColor="#eb8535" />
      </Section>
    </main>
  );
}

/* ---------- Reusable blocks ---------- */

function Section({
  children,
  title,
  bg,
}: {
  children: React.ReactNode;
  title: string;
  bg: "white" | "gray";
}) {
  return (
    <section className={bg === "white" ? "bg-white py-2 sm:py-6" : "bg-gray-50 py-2 sm:py-6"}>
      <h2 className="text-center text-[26px] sm:text-[30px] font-extrabold text-[#142a63]">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function CardsGrid({
  items,
  hoverColor,
}: {
  items: Item[];
  hoverColor: string;
}) {
  return (
    <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 text-justify">
      {items?.map((it) => (
        <Card key={it.title} title={it.title} desc={it.desc} hoverColor={hoverColor} />
      ))}
    </div>
  );
}

function Card({
  title,
  desc,
  hoverColor,
}: {
  title: string;
  desc: string;
  hoverColor: string;
}) {
  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(16,24,40,0.08)] ring-1 ring-slate-200">
        <span
          aria-hidden
          className="absolute inset-0 origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
          style={{ backgroundColor: hoverColor }}
        />
        <div className="relative z-10 flex h-full min-h-[180px] flex-col bg-white p-6 transition-colors duration-300 group-hover:bg-transparent">
          <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/95">
            {desc}
          </p>
          <div className="mt-auto" />
        </div>
      </div>
    </div>
  );
}

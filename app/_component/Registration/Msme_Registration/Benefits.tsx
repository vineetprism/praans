import React from "react";

type Benefit = { title: string; desc: string };

const financialBenefits: Benefit[] = [
  {
    title: "Collateral-Free Loans",
    desc: "MSMEs can secure collateral-free loans under the Credit Guarantee Fund Scheme (CGTMSE), enabling easy access to funds without risking assets.",
  },
  {
    title: "Subsidies on Interest Rates",
    desc: "MSMEs are eligible for subsidized interest rates on loans under schemes like the Prime Minister’s Employment Generation Programme (PMEGP) and Stand-Up India.",
  },
  {
    title: "Priority Sector Lending",
    desc: "Banks classify MSMEs as part of priority sector lending, making credit availability easier and faster.",
  },
];

const taxBenefits: Benefit[] = [
  {
    title: "Lower Income Tax Rates",
    desc: "MSMEs benefit from a 25% tax rate for companies with turnover up to ₹400 crores, while proprietorships and partnerships enjoy slab-based tax rates.",
  },
  {
    title: "GST Exemptions",
    desc: "MSMEs with turnover below ₹40 lakhs (goods) or ₹20 lakhs (services) are exempt from GST registration. For North-Eastern states, these thresholds are ₹20 lakhs and ₹10 lakhs, respectively.",
  },
  {
    title: "GST Composition Scheme",
    desc: "Eligible MSMEs can opt for the Composition Scheme to pay reduced GST rates (1% for traders/manufacturers and 5% for restaurants) and file quarterly returns.",
  },
  {
    title: "Reimbursement for ISO Certifications",
    desc: "Registered MSMEs can claim reimbursements for expenses incurred during ISO certification, promoting global quality standards.",
  },
];

const govtProcurement: Benefit[] = [
  {
    title: "Exclusive Tenders",
    desc: "MSMEs have exclusive access to certain government tenders, ensuring a level playing field against large corporations.",
  },
  {
    title: "Public Procurement Policy",
    desc: "Under the Public Procurement Policy, 25% of all government procurements are reserved for MSMEs, with 3% exclusively for women-owned MSMEs.",
  },
  {
    title: "E-Marketplace Access",
    desc: "Registered MSMEs can sell products directly to government agencies through platforms like the Government e-Marketplace (GeM).",
  },
];

export default function BenefitsPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#f5f7fc]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-4">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-[#eb8535]">
            Benefits of MSME Registration
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-[14.5px] font-semibold leading-7 text-slate-800 text-justify">
            The Micro, Small, and Medium Enterprises (MSMEs) sector is vital to
            India’s economic growth, contributing significantly to GDP,
            employment, and exports. To empower and support MSMEs, the
            Government of India provides numerous benefits to registered
            entities. Here’s a detailed breakdown:
          </p>
        </div>
      </section>

      <PlainSection bg="white">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
          Financial Benefits
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 px-5 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 text-justify">
          {financialBenefits?.map((b) => (
            <BenefitCard
              key={b.title}
              title={b.title}
              desc={b.desc}
              hoverColor="#eb8535"
            />
          ))}
        </div>
      </PlainSection>

      <PlainSection bg="gray">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
          Tax and Compliance Benefits
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 px-5 sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4 text-justify">
          {taxBenefits?.map((b) => (
            <BenefitCard key={b.title} title={b.title} desc={b.desc} />
          ))}
        </div>
      </PlainSection>

      <PlainSection bg="white">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
          Government Procurement Benefits
        </h2>
        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 px-5 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-3 text-justify">
          {govtProcurement?.map((b) => (
            <BenefitCard
              key={b.title}
              title={b.title}
              desc={b.desc}
              hoverColor="#eb8535"
            />
          ))}
        </div>
      </PlainSection>
    </main>
  );
}

function BenefitCard({
  title,
  desc,
  hoverColor = "#1b2b4b",
}: Benefit & { hoverColor?: string }) {
  return (
    <div className="group relative h-full">
      <div className="relative h-full overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(16,24,40,0.08)] ring-1 ring-slate-200">
        <span
          aria-hidden
          className="absolute inset-0 origin-top scale-y-0 transition-transform duration-300 ease-out will-change-transform group-hover:scale-y-100"
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

function PlainSection({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: "white" | "gray";
}) {
  return (
    <section
      className={
        bg === "white" ? "bg-white py-2 sm:py-6" : "bg-gray-50 py-2 sm:py-6"
      }
    >
      <div className="relative">{children}</div>
    </section>
  );
}

import React from "react";

type Item = { title: string; desc: string };

const employmentBenefits: Item[] = [
  {
    title: "Job Creation Schemes",
    desc:
      "Schemes like PMEGP and others provide financial assistance to MSMEs to create new job opportunities.",
  },
  {
    title: "Employee Provident Fund (EPF) Subsidies",
    desc:
      "Some states offer subsidies on EPF contributions to businesses employing a certain number of workers.",
  },
];

export default function EmploymentPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-[#f5f7fc]">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8 py-4">
          <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-[#142a63]">
            Sick Unit Support and Rehabilitation
          </h1>
          <p className="mx-auto mt-4 max-w-5xl text-center text-[15px] leading-7 text-slate-900">
            The government provides support for the rehabilitation of sick MSMEs by offering
            financial assistance and restructuring opportunities to help them regain operational
            health.
          </p>
        </div>
      </section>

      <Section bg="white" title="Employment Benefits">
        <CardsGrid items={employmentBenefits} hoverColor="#eb8535" />
      </Section>
    </main>
  );
}


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
    <section
      className={bg === "white" ? "bg-white py-2 sm:py-6" : "bg-gray-50 py-2 sm:py-6"}
    >
      <h2 className="text-center text-[26px] sm:text-[30px] font-extrabold text-[#142a63]">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function CardsGrid({ items, hoverColor }: { items: Item[]; hoverColor: string }) {
  return (
    <div className="mx-auto grid max-w-5xl items-stretch gap-6 px-5 sm:px-6 lg:px-8 md:grid-cols-2">
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
      <div className="relative h-full overflow-hidden rounded-2xl shadow-[0_10px_25px_rgba(16,24,40,0.08)] ring-1 ring-slate-200">
        <span
          aria-hidden
          className="absolute inset-0 origin-top scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
          style={{ backgroundColor: hoverColor }}
        />
        <div className="relative z-10 flex h-full min-h-[140px] flex-col bg-white p-5 sm:p-5 transition-colors duration-300 group-hover:bg-transparent">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 group-hover:text-white">
              {title}
            </h3>
            <p className="text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-white/95 text-justify">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


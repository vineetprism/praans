"use client";
import Image from "next/image";

export default function FounderPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-[#1b2851] uppercase">
          Founder of Praans Consultech
        </h1>

        <div className="mt-8 grid lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 h-full">
            <div className="space-y-4 text-[15px] leading-7 text-slate-800 text-justify h-full">
              <p>
                With 15 years of rich experience in labour law, business
                registration, and startup advisory,{" "}
                <span className="font-semibold text-orange-500">
                  Mr. Sandeep Kumar
                </span>{" "}
                serves as the guiding force shaping our company’s vision and
                achievements. He is a proficient expert with a solid academic
                background. He holds an{" "}
                <span className="font-semibold">LLB and LLM</span>, and is an
                alumnus of <span className="font-semibold">XLRI</span>, one of
                India’s premier business schools. Currently, he is pursuing a{" "}
                <span className="font-semibold">Ph.D</span> to further expand
                his knowledge and expertise in business and law.
              </p>

              <p>
                Before embarking on his entrepreneurial journey,{" "}
                <span className="font-semibold text-orange-500">
                  Mr. Sandeep Kumar
                </span>{" "}
                held the prestigious role of Director at a renowned logistics
                company, where he led large teams and drove strategic
                initiatives that contributed to the company’s success. Even with
                a successful career and a lucrative job, he made the courageous
                choice to leave his corporate position and pursue his
                passion—creating a business dedicated to assisting entrepreneurs
                in navigating the complexities of labour law and business
                registrations.
              </p>

              <p>
                As an advisor to startups and a legal expert, he has worked with
                various businesses to ensure they comply with industry
                regulations, streamline their registration processes, and create
                strong foundations for long-term success. His work blends legal
                expertise, strategic insight, and a passion for supporting
                businesses at every stage of growth.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 h-full">
            <div className="flex h-full flex-col items-center">
              <div className="relative w-full h-full min-h-[360px]">
                <Image
                  src="/services/admin1.jpg"
                  alt="Sandeep Kumar - Founder of Praans Consultech"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold tracking-wide text-[#ff4f8a]">
                  Sandeep Kumar
                </div>

                <div className="mt-3 w-full inline-flex items-center rounded-[4px] bg-[#142a63] px-6 py-2 text-white text-[14px] sm:text-[15px] font-semibold shadow-sm">
                  B.Sc, LL.B, LL.M , XLRI , (Ph.D)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";

const Team = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-[30px] font-bold text-[#1C284F]">
              Our <span className="text-orange-500">Team</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
          </div>

          {/* Content */}
          <div className="text-[15px] text-[#1C284F] text-base leading-relaxed text-justify">
            <p>
              <span className="font-semibold text-orange-500">
                <em>Praans Consultech</em>
              </span>{" "}
              is powered by a dynamic team of legal experts, HR specialists, and
              technology professionals. We strongly believe that legal knowledge
              is more effective when combined with modern tools and practical
              execution.
            </p>
            <p>
              Our strength lies not just in knowledge, but in the{" "}
              <strong>practical application of the subject</strong>. With a team
              spread across India, our compliance officers ensure local
              expertise with centralized efficiency, helping businesses stay
              fully compliant and future-ready.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;

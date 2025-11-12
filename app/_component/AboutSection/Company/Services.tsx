import React from "react";

const Services = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold mb-2 text-[#1C284F]">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-1 mb-4 rounded-full"></div>
            <p className="max-w-8xl text-base text-[15px] text-[#1C284F] mx-auto leading-relaxed">
              At{" "}
              <span className="font-semibold text-orange-500">
                <em>Praans Consultech</em>
              </span>
              , we are honoured to provide end-to-end labour law solutions under
              one portal. Our services include comprehensive support designed to
              keep your business fully compliant with ever-evolving regulations.
            </p>
            <p className="max-w-8xl text-base text-[15px] text-[#1C284F] mx-auto leading-relaxed">
              Considering all the above services, your business is in safe hands
              — ensuring smooth operations, zero compliance gaps, and strong
              risk mitigation across India.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                AI-Based Compliance Management Software
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Smart automation for error-free compliance, real-time alerts,
                digital record maintenance, and compliance tracking.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                Labour Law Registrations
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Complete assistance and support in obtaining registrations and
                licenses under applicable laws across India.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                Compliance Outsourcing Solutions
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Ease of doing business: you focus on growth, while we manage all
                your compliance requirements.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                Litigation Support & Legal Representation
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Professional support for disputes, complex labour law cases, and
                inspections with expert representation.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                Labour Law Advisory Services
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Risk mitigation and strategic guidance to ensure long-term
                compliance and legal accuracy.
              </p>
            </div>

            <div className="bg-gray-50 shadow-sm rounded-xl p-4 transition border border-orange-100">
              <h3 className="text-lg font-semibold text-[#1C284F] mb-2">
                Audit and Inspection Support
              </h3>
              <p className="text-[#1C284F] text-sm leading-relaxed">
                Dedicated on-ground team for audits and managing labour
                inspections seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

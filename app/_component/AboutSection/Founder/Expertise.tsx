import React from 'react'

export default function Expertise() {
    return (
        <>
            <section className="relative py-12 bg-gray-50 overflow-hidden w-full">
                <div className="w-full px-4 md:px-6 relative z-10">
                    <div className="w-full max-w-none mx-auto text-center">

                        <h2 className="text-[30px] font-bold text-[#1C284F] leading-tight">
                            From Field Expertise to <span className="text-orange-500">Tech-Driven Solutions</span>
                        </h2>
                        <div className="w-24 h-1 mt-2 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>

                        <p className="text-[15px] text-gray-600 leading-relaxed w-full mx-auto text-justify mt-4">
                            To meet the growing need for real-time compliance tracking and automation, our founder developed a smart way for businesses to manage their statutory obligations. Praans Consultech launched its AI-based Compliance Management Software in 2022 — designed with real-world challenges in mind. The platform helps organisations automate compliance tracking, receive deadline alerts, maintain registers, and avoid penalties.
                        </p>

                        <p className="text-[15px] text-gray-600 leading-relaxed w-full mx-auto text-justify">
                            Backed by hands-on field experience and a visionary approach, this solution helped Praans Consultech become a leading labour-law consultancy in India, offering focused services that combine legal expertise with technology.
                        </p>

                        {/* Service List - full width grid */}
                        <div className="grid md:grid-cols-3 gap-4 mt-6 text-left w-full">
                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">Labour Law Registrations</h3>
                                <p className="text-gray-600 text-sm">
                                    Shops & Establishments, CLRA, ESIC, EPF and other statutory registrations.
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">AI-Powered Compliance Software</h3>
                                <p className="text-gray-600 text-sm">
                                    Monitor and manage statutory obligations seamlessly with automated alerts and register management.
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">Compliance Outsourcing</h3>
                                <p className="text-gray-600 text-sm">
                                    End-to-end labour law management — from registrations to routine compliance execution.
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">Labour Law Litigation Support</h3>
                                <p className="text-gray-600 text-sm">
                                    Legal representation and case management for employment and industrial disputes.
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">Advisory Services</h3>
                                <p className="text-gray-600 text-sm">
                                    Strategic guidance on labour law policy, audits, process redesign and regulatory reforms.
                                </p>
                            </div>

                            <div className="bg-white shadow-sm rounded-xl p-4 border border-orange-100 transition w-full">
                                <h3 className="text-md font-semibold text-[#1C284F] mb-2">Audit & Inspection Handling</h3>
                                <p className="text-gray-600 text-sm">
                                    Complete support during statutory audits, inspections and departmental visits.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
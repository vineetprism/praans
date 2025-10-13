import React from 'react'

const Services = () => {
    return (
        <>
            <section className="py-16 md:py-20 lg:pu-10 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                            Our <span className="text-orange-500">Services</span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            At <span className="font-semibold text-orange-500"><em>Praans Consultech</em></span>, we are honoured to provide
                            end-to-end labour law solutions under one portal.
                            Our services include comprehensive support designed to
                            keep your business fully compliant with ever-evolving regulations.
                        </p>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                AI-Based Compliance Management Software
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Smart automation for error-free compliance, real-time alerts,
                                digital record maintenance, and compliance tracking.
                            </p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                Labour Law Registrations
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Complete assistance and support in obtaining registrations
                                and licenses under applicable laws across India.
                            </p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                Compliance Outsourcing Solutions
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Ease of doing business: you focus on growth, while we manage
                                all your compliance requirements.
                            </p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                Litigation Support & Legal Representation
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Professional support for disputes, complex labour law cases,
                                and inspections with expert representation.
                            </p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                Labour Law Advisory Services
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Risk mitigation and strategic guidance to ensure long-term
                                compliance and legal accuracy.
                            </p>
                        </div>

                        <div className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 border border-gray-100 transition">
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">
                                Audit and Inspection Support
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Dedicated on-ground team for audits and managing labour
                                inspections seamlessly.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Considering all the above services, your business is in safe hands
                            — ensuring smooth operations, zero compliance gaps, and strong risk
                            mitigation across India.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services

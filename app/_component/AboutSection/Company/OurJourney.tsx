import React from 'react'

const OurJourney = () => {
    return (
        <>
            <section className="relative py-10 bg-gray-50 overflow-hidden">
                <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="w-full space-y-8">

                        {/* Heading + Paragraphs */}
                        <div className="space-y-8 text-center">
                            <h2 className="text-[30px] font-bold mb-3 text-[#1C284F]">
                                Our <span className="text-orange-500">Journey</span>
                            </h2>
                            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>

                            <div className="space-y-6 text-base text-[15px] text-[#1C284F] leading-relaxed text-justify">
                                <p>
                                    When <span className="text-orange-500"><em>Praans Consultech</em></span> started in <span className="font-semibold text-orange-500"><em>2021</em></span>, our aim was simple and precise – to become a trusted compliance partner for Indian businesses. Our core team brought together years of industry experience in labour laws, HR operations, and corporate legal advisory. They understood how errors in compliance could lead to heavy penalties, disrupt business operations, and cause reputational damage.
                                </p>
                                <p>
                                    To counter these challenges, our team developed <span className="font-semibold text-orange-500"><em>AI-based Intelligent Compliance Management Software</em></span> by 2023. It automates filings, generates real-time alerts, simplifies workflows, and monitors deadlines. A breakthrough that reduced the burden of spreadsheets and manual registers, while enabling seamless multi-state compliance.
                                </p>
                                <p>
                                    Since then, we have expanded rapidly, serving clients across all states and union territories of India. Praans Consultech has emerged as a trusted compliance partner for start-ups, SMEs, and large enterprises across industries – a safe and faster way to manage compliance.
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative border-l-2 border-orange-500 ml-6">
                            {/* 2022 */}
                            <div className="mb-8 ml-6 relative">
                                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                                <h3 className="text-[15px] font-semibold text-[#1C284F]">2022</h3>
                                <p className="text-gray-600">Company Founded</p>
                            </div>

                            {/* 2023 */}
                            <div className="mb-8 ml-6 relative">
                                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                                <h3 className="text-[15px] font-semibold text-[#1C284F]">2023</h3>
                                <p className="text-gray-600">Recognized as Start-up India and Compliance Software Launched</p>
                            </div>

                            {/* 2024 */}
                            <div className="mb-8 ml-6 relative">
                                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                                <h3 className="text-[15px] font-semibold text-[#1C284F]">2024</h3>
                                <p className="text-gray-600">PAN India Reach for Labour Law Compliances</p>
                            </div>

                            {/* 2025 */}
                            <div className="ml-6 relative">
                                <span className="absolute -left-8 top-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></span>
                                <h3 className="text-[15px] font-semibold text-[#1C284F]">2025</h3>
                                <p className="text-gray-600">Awarded as the Best Labour Law Consultant, Certified by ISO, and Launched our AI Chatbot for Labour Law</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default OurJourney

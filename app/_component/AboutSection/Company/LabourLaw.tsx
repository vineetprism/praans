import React from 'react'

export default function LabourLaw() {
    return (
        <>
            <section className="py-12 bg-gray-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <h2 className="text-[30px] font-bold text-[#1C284F]">
                            Why Labour Law <span className="text-orange-500">Compliance Matters</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-2 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="space-y-4 text-[15px] text-[#1C284F] text-base text-[15px] leading-relaxed text-justify">
                        <p>
                            India has extensive labour laws and rules that are constantly evolving. Businesses must comply with
                            numerous central and state-level legislations such as the <strong>Factories Act, Shops & Establishments Act,
                                Minimum Wages Act, Provident Fund Act, Employees’ State Insurance Act, CLRA Act, Payment of Bonus Act</strong>,
                            and many others.
                        </p>

                        <p className="font-medium text-slate-800">If compliance is not maintained, it can lead to:</p>

                        {/* Bullet List */}
                        <ul className="list-disc list-inside space-y-2 text-[15px] text-[#1C284F]">
                            <li>Heavy financial penalties and fines</li>
                            <li>Court battles and prolonged legal disputes</li>
                            <li>Damage to business reputation</li>
                            <li>Operational disruptions during inspections</li>
                        </ul>

                        <p>
                            This is where <span className="font-semibold text-orange-500"><em>Praans Consultech</em></span> steps in as a trusted
                            compliance partner—ensuring your business remains compliant, safeguards its brand,
                            and continues to grow without disruptions.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
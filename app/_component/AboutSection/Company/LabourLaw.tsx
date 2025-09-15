import React from 'react'

export default function LabourLaw() {
    return (
        <>
            <section className="py-16 md:py-20 lg:10 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                    {/* Heading */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Why Labour Law <span className="text-orange-500">Compliance Matters</span>
                        </h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                        <p>
                            India has extensive labour laws and rules that are constantly evolving. Businesses must comply with
                            numerous central and state-level legislations such as the <strong>Factories Act, Shops & Establishments Act,
                                Minimum Wages Act, Provident Fund Act, Employees’ State Insurance Act, CLRA Act, Payment of Bonus Act</strong>,
                            and many others.
                        </p>

                        <p className="font-medium text-slate-800">If compliance is not maintained, it can lead to:</p>

                        {/* Bullet List */}
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
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
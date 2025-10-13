import { BarChart3, Building, Rocket } from 'lucide-react'
import React from 'react'

export default function Serve() {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">

                    {/* Heading */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Who We <span className="text-orange-500">Serve</span></h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            {/* At <span className="font-semibold text-[#eb8535]">Praans Consultech</span>, we provide tailored compliance solutions for businesses of all sizes—because compliance is critical, no matter the scale. */}
                            We provide our services to:
                        </p>
                    </div>

                    {/* Service Categories */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Startups */}
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                            <Rocket className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-800">Startups</h3>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed text-justify">
                                At reasonably priced compliance to guide and assist young businesses to get started its business on right track.
                            </p>
                        </div>

                        {/* SMEs */}
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                            <BarChart3 className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-800">SMEs</h3>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed text-justify">
                                With maximum risk mitigations and simplifying the complexity of compliance for the growth of business.
                            </p>
                        </div>

                        {/* Large Enterprises */}
                        <div className="text-center bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-lg transition">
                            <Building className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-slate-800">Large Enterprises</h3>
                            <p className="mt-2 text-gray-600 text-sm leading-relaxed text-justify">
                                Scalable solutions for operations with multiple locations throughout India.
                            </p>
                        </div>
                    </div>

                    {/* Closing Note */}
                    <div className="text-center mt-12">
                        <p className="text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed">
                            <strong>Praans Consultech</strong> — the name you can trust on in compliance partner, regardless of the size of the business.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
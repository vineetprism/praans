import { CheckCircle2, Cpu, Layers, ShieldCheck } from 'lucide-react'
import React from 'react'

export default function OurPromise() {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    {/* Heading */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Our <span className="text-orange-500">Promise</span></h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
                        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We are more than just consultants, we, Praans Consultech, are partners in your growth journey of your business. We promise you to:
                        </p>
                    </div>

                    {/* Promises */}
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-orange-500 mt-1" />
                            <p className="text-gray-700 leading-relaxed">
                                Provide <strong>accurate, reliable, and timely</strong> compliance services.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Cpu className="w-6 h-6 text-orange-500 mt-1" />
                            <p className="text-gray-700 leading-relaxed">
                                Offer <strong>technology-driven solutions</strong> that streamline your processes.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <Layers className="w-6 h-6 text-orange-500 mt-1" />
                            <p className="text-gray-700 leading-relaxed">
                                Assure <strong>end-to-end support</strong>—from registrations to litigation.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 text-orange-500 mt-1" />
                            <p className="text-gray-700 leading-relaxed">
                                Safeguard your business from <strong>fines</strong> and <strong>compliance mismanagement</strong>.
                            </p>
                        </div>
                    </div>

                    {/* Closing Note */}
                    <div className="text-center mt-10">
                        <p className="text-base md:text-lg text-slate-800 max-w-3xl mx-auto leading-relaxed">
                            Legal compliance should never be a burden—it should <strong>enable your growth</strong>.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
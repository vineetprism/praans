import React from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function Cta() {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10" />
                <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                        Looking for a reliable partner to manage your labour law compliance?
                    </h2>
                    <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
                        Get in touch with Praans Consultech — Led by India's trusted labour law expert
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center max-w-2xl mx-auto">
                        <Button className="bg-orange-500 hover:bg-orange-400 text-white text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 shadow-2xl hover:shadow-orange-500/25 rounded-2xl font-bold w-full sm:w-auto cursor-pointer" aria-label="get expert consultation">
                            Get Expert Consultation
                            <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            className="border-2 border-white text-white hover:bg-white hover:text-slate-800 text-lg md:text-xl px-6 md:px-10 py-4 md:py-6 bg-transparent rounded-2xl font-bold w-full sm:w-auto cursor-pointer"
                            aria-label="schedule a demo"
                        >
                            Schedule a Demo
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
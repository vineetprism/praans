import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    MapPin,
    Gavel,
    Bell,
    Server,
    ClipboardCheck,
} from "lucide-react"

const keyStrengths = [
    {
        title: "Local executions with centralized control",
        icon: MapPin,
    },
    {
        title: "Expert handling of notices, legal issues, and inspections",
        icon: Gavel,
    },
    {
        title: "Real-time compliance alerts tailored to your industry",
        icon: Bell,
    },
    {
        title: "Scalable solutions for large businesses, MSMEs and startups",
        icon: Server,
    },
    {
        title: "Smooth readiness for auditing and inspections",
        icon: ClipboardCheck,
    },
];

export default function Leadership() {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
                            Why Our Founder's <span className="text-orange-500">Leadership Matters</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto text-justify">
                            In a country where labour laws vary by state, enforcement is dynamic, and penalties are costly, having a knowledgeable
                            and proactive labour law compliance consultant makes all the difference.
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-4 max-w-5xl mx-auto">
                        {keyStrengths.map((strength, index) => {
                            const Icon = strength.icon;
                            return (
                                <Card
                                    key={index}
                                    className="group hover:shadow-md transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="pl-4 pr-4 md:pl-5 md:pr-5 lg:pt-0 lg:pb-0">
                                        {/* Icon above title (stacked) */}
                                        <div className="flex flex-col items-start">
                                            <div className="mb-3">
                                                <div className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6 2xl:w-6 2xl:h-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center shadow-sm">
                                                    <Icon className="w-5 h-5 text-orange-500" aria-hidden />
                                                </div>
                                            </div>

                                            <h3 className="text-base md:text-lg text-slate-700 font-semibold mb-1 group-hover:text-orange-600 transition-colors duration-300">
                                                {strength.title}
                                            </h3>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="text-center mt-12 md:mt-16 lg:mt-10">
                        <Card className="bg-gray-100 max-w-4xl mx-auto">
                            <CardContent className="p-3 md:p-4 lg:p-0">
                                <p className="text-lg md:text-xl font-semibold text-gray-600 leading-relaxed mb-0 text-center">
                                    Our founder continues to lead Praans Consultech as one of the most reputable and reliable labour-law consultancies in India, with a fast-growing network and PAN-India presence.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
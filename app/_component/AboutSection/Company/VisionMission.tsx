import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Shield } from 'lucide-react'

export default function VisionMission() {
    return (
        <>
            <section className="relative overflow-hidden py-16 md:py-20 lg:py-10 bg-gray-50">
                {/* Soft background glows */}
                <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 bottom-24 h-72 w-72 rounded-full bg-amber-200/20 blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    {/* Heading */}
                    <div className="text-center mb-10 md:mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-800">
                            Our Mission <span className="text-orange-500">and Vision</span>
                        </h2>
                        <p className="mt-3 text-gray-600 max-w-3xl mx-auto text-justify">
                            Guiding principles that drive our commitment to compliance excellence and
                            business wellbeing
                        </p>
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-4"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Mission */}
                        <Card className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200 pt-10">
                            {/* top colored strip */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-[#2c3454] rounded-t-2xl" />
                            <CardContent className="p-8">
                                {/* Icon badge */}
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#bec8dd]">
                                    <Shield className="h-8 w-8 text-[#2c3454]" />
                                </div>

                                <h3 className="text-center text-2xl font-extrabold tracking-wide text-[#2c3454]">
                                    OUR MISSION
                                </h3>

                                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto text-justify">
                                    To enable companies to concentrate on its growth while we handle the intricacies of regulations by providing them with smart tools, knowledgeable assistance and smooth compliance services.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Vision */}
                        <Card className="relative overflow-hidden rounded-2xl shadow-md border border-gray-200 pt-10">
                            {/* top colored strip */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-orange-500 rounded-t-2xl" />
                            <CardContent className="p-8">
                                {/* Icon badge */}
                                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-50">
                                    <Eye className="h-8 w-8 text-orange-500" />
                                </div>

                                <h3 className="text-center text-2xl font-extrabold tracking-wide text-orange-500">
                                    OUR VISION
                                </h3>

                                <p className="mt-5 text-center text-gray-600 max-w-xl mx-auto text-justify">
                                    To establish ourselves as India’s most reliable and technologically advanced labour aw compliance partner, while simplifying, facilitating and managing the requirements for all kinds of businesses.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}
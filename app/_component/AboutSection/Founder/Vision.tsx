import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Target } from "lucide-react"

export default function Vision() {
    return (
        <>
            <section className="py-16 md:py-20 lg:py-10 bg-white relative overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute top-20 left-10 w-32 h-32  rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our <span className="text-orange-500">Vision</span></h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <Card className="bg-gray-50 backdrop-blur-sm border-0 text-gray-700">
                                <CardContent className="p-8 md:p-10 lg:pt-0 lg:pb-0">
                                    <div className="text-center mb-6">
                                        <Target className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-orange-500" />
                                        <h3 className="text-xl md:text-2xl font-semibold mb-4">Our founder's vision is both practical and impactful:</h3>
                                    </div>
                                    <blockquote className="text-base md:text-lg text-gray-600 leading-relaxed italic border-l-4 border-orange-500 pl-6 text-justify">
                                        "To empower businesses across India with accessible, affordable, and intelligent labour law compliance
                                        solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <div className="space-y-6 text-gray-700">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">Simplifying Compliance, Empowering Businesses</h2>
                                <p className="text-base md:text-lg leading-relaxed text-justify">
                                    They strongly believe that labour law compliance shouldn't be a burden but a well-managed system that
                                    promotes fair practices, protects organizations, and upholds employee rights. This belief fuels everything
                                    we do at Praans Consultech.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
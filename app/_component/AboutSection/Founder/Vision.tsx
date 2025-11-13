import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Target } from "lucide-react"

export default function Vision() {
    return (
        <>
            <section className="py-12 bg-white relative overflow-hidden w-full">
                <div className="absolute inset-0" />
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-3xl" />

                <div className="w-full px-4 md:px-6 relative z-10">
                    <div className="w-full max-w-none mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-[30px] font-bold mb-4 text-[#1C284F]">Our <span className="text-orange-500">Vision</span></h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center w-full">
                            <Card className="bg-gray-50 backdrop-blur-sm border-0 text-gray-700 w-full">
                                <CardContent className="p-6 md:p-8 lg:pt-0 lg:pb-0">
                                    <div className="text-center mb-6">
                                        <Target className="w-10 h-10 mx-auto mb-2 text-orange-500" />
                                        <h3 className="text-[20px] font-semibold">Our founder's vision is both practical and impactful:</h3>
                                    </div>
                                    <blockquote className="text-[15px] text-gray-600 leading-relaxed italic border-l-4 border-orange-500 pl-6 text-justify">
                                        "To empower businesses across India with accessible, affordable, and intelligent labour law compliance
                                        solutions—ensuring legal safety while promoting employee welfare and operational efficiency."
                                    </blockquote>
                                </CardContent>
                            </Card>

                            <div className="space-y-6 text-gray-700 w-full">
                                <h2 className="text-[20px] font-bold mb-2">Simplifying Compliance, Empowering Businesses</h2>
                                <p className="text-[15px] leading-relaxed text-justify">
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

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Truck,
    Factory,
    Store,
    Stethoscope,
    Building2,
    Laptop,
    Utensils,
    Tractor,
    School,
    Landmark,
    Users,
    Coffee,
    Briefcase,
    UserCheck,
    UsersRound,
    Map,
    Dog
} from "lucide-react"


const clientSectors = [
    { icon: Truck, name: "Logistics & Warehousing" },
    { icon: Factory, name: "Manufacturing & Industrial Units" },
    { icon: Store, name: "Retail & E-Commerce" },
    { icon: Stethoscope, name: "Healthcare & Pharmaceuticals" },
    { icon: Building2, name: "Construction & Infrastructure" },
    { icon: Laptop, name: "Information Technology & BPO" },
    { icon: Utensils, name: "Food & Beverage Industry" },
    { icon: Tractor, name: "Agriculture & Farming Sector" },
    { icon: School, name: "Education & EdTech Companies" },
    { icon: Landmark, name: "Banking, Finance & Insurance (BFSI)" },
    { icon: Users, name: "Manpower Supply & Contract Staffing Firms" },
    { icon: Dog, name: "Pet Care & Veterinary Services" },
    { icon: Coffee, name: "Restaurants, Cafes & Food Service Chains" },
    { icon: Briefcase, name: "Business Consulting & Professional Services" },
];

const stats = [
    { icon: UserCheck, value: "100+", label: "Clients Served", color: "text-blue-500" },
    { icon: UsersRound, value: "4,000+", label: "Employees Covered", color: "text-green-500" },
    { icon: Map, value: "25+", label: "PAN India Operations", color: "text-orange-500" },
]

export default function Sector() {
    return (
            <section className="py-16 md:py-20 lg:py-10 2xl:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-slate-800">
                            Trusted by Businesses Across <span className="text-orange-500">All Major Sectors</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-6xl mx-auto text-justify">
                            We proudly serve a wide spectrum of clients across India, offering tailored labour law compliance solutions that meet the unique needs of each industry. From startups and SMEs to large enterprises, our clients trust us to manage their statutory obligations with accuracy, consistency, and integrity.
                        </p>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                        {clientSectors.map((sector, index) => (
                            <Card
                                key={index}
                                className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-gray-50"
                            >
                                <CardContent className="px-3 py-3 h-full">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                                            <sector.icon className="w-6 h-6 text-orange-500" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-bold text-gray-800 text-sm">{sector.name}</h3>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center max-w-4xl mx-auto">
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed w-full mx-auto text-justify">
                            From ensuring proper registrations and renewals to managing inspections,
                            audits, contract labour documentation, and compliance reporting, we
                            handle it all. Our team brings in-depth legal expertise, industry
                            experience, and tech-enabled solutions that help clients stay fully
                            compliant and penalty-free.
                        </p>

                        {/* Added top margin so stats don’t collide with the paragraph */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 bg-gray-50 rounded-xl transition-shadow"
                                >
                                    <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                                    <p className="text-4xl font-bold text-slate-800 mb-2">{stat.value}</p>
                                    <p className="text-gray-600 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    )
}
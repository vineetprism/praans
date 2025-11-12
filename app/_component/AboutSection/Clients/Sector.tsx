import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  Dog,
  Coffee,
  Briefcase,
  UserCheck,
  UsersRound,
  Map,
} from "lucide-react";

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
  {
    icon: UserCheck,
    value: "100+",
    label: "Clients Served",
    color: "text-blue-500",
  },
  {
    icon: UsersRound,
    value: "4,000+",
    label: "Employees Covered",
    color: "text-green-500",
  },
  {
    icon: Map,
    value: "25+",
    label: "PAN India Operations",
    color: "text-orange-500",
  },
];

export default function Sector() {
  return (
    <section className="py-12 bg-white w-full">
      {/* full-width wrapper with horizontal padding (gutters) */}
      <div className="w-full px-4">
        <div className="text-center mb-6">
          <h2 className="text-[30px] font-bold mb-2 text-[#1C284F]">
            Trusted by Businesses Across{" "}
            <span className="text-orange-500">All Major Sectors</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mt-2 mb-2" />
          <p className="text-[15px] text-gray-600 mx-auto text-justify max-w-none">
            We proudly serve a wide spectrum of clients across India, offering
            tailored labour law compliance solutions that meet the unique needs
            of each industry. From startups and SMEs to large enterprises, our
            clients trust us to manage their statutory obligations with
            accuracy, consistency, and integrity.
          </p>
        </div>

        {/* sectors grid — full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {clientSectors.map((sector, index) => (
            <Card key={index} className="bg-gray-50 border border-orange-100">
              <CardContent className="px-2 py-2 h-full flex flex-col justify-start">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0">
                    <sector.icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-sm">
                      {sector.name}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-[15px] text-gray-600 leading-relaxed w-full text-justify">
            From ensuring proper registrations and renewals to managing
            inspections, audits, contract labour documentation, and compliance
            reporting, we handle it all. Our team brings in-depth legal
            expertise, industry experience, and tech-enabled solutions that help
            clients stay fully compliant and penalty-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 bg-gray-50 border border-orange-100 rounded-xl transition-shadow"
              >
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <p className="text-[20px] font-bold text-slate-800 mb-2">
                  {stat.value}
                </p>
                <p className="text-[15px] font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

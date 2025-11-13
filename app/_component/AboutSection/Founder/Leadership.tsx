import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Gavel, Bell, Server, ClipboardCheck } from "lucide-react";

const keyStrengths = [
  { title: "Local executions with centralized control", icon: MapPin },
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
    <section className="py-12 bg-gray-50 w-full">
      <div className="w-full px-4 md:px-6">
        <div className="w-full mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[30px] font-bold mb-2 text-slate-800">
              Why Our Founder's{" "}
              <span className="text-orange-500">Leadership Matters</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full mt-2" />
            <p className="text-[15px] text-gray-600 mt-2 max-w-none mx-auto text-center">
              In a country where labour laws vary by state, enforcement is
              dynamic, and penalties are costly, having a knowledgeable and
              proactive labour law compliance consultant makes all the
              difference.
            </p>
            <p className="text-[15px] text-gray-600 max-w-none mx-auto text-center">
              Our founder continues to lead Praans Consultech as one of the most
              reputable and reliable labour-law consultancies in India, with a
              fast-growing network and PAN-India presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 w-full">
            {keyStrengths.map((strength, index) => {
              const Icon = strength.icon;
              return (
                <Card
                  key={index}
                  className="border border-orange-100 shadow-sm w-full"
                >
                  <CardContent className="px-2 py-0">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-orange-500" aria-hidden />
                      </div>

                      <h3 className="text-base text-[15px] text-[#1C284F] font-semibold leading-tight">
                        {strength.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

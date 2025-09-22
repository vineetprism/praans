import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import PopularSearch from "../PopularSearch/PopularSearch";

export const metadata: Metadata = {
  title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
  description:
    "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
  keywords:
    "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
};

const applicableStates = [
  "Andhra Pradesh",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Tamil Nadu",
  "Telangana",
  "West Bengal",
];

const nonApplicableStates = [
  "Central",
  "Andaman and Nicobar Islands",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Ladakh",
  "Lakshadweep",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Puducherry",
  "Rajasthan",
  "Sikkim",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
];

const categories = [
  "All Categories",
  "Leave Policy",
  "Working Hours",
  "Overtime Rules",
  "Weekly Off",
  "Public Holidays",
];

const states = [
  "All States",
  "Central",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Delhi",
  "West Bengal",
];

export default function LeavesWorkingHoursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
                    Leave & Working Hours
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                    "Statutory Leave" ensures a healthy work-life balance and
                    boosts employee motivation levels. "Working Hours"
                    regulations define the laboring time an employee is expected
                    to work in exchange for pay as enumerated by Labour Codes.
                  </p>
                </div>
              </div>
            </div>

            {/* Leave & Working Hours For States */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Users className="h-5 w-5" />
                  <span>Leave & Working Hours For States Across India</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States
                    </h3>
                    <div className="space-y-2">
                      {applicableStates.map((state, index) => (
                        <Link
                          key={index}
                          href={`/leaves-working-hours/${state
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                          aria-label={`Go to ${state} leaves and working hours`}
                          className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors "
                        >
                          <span className="text-blue-600 hover:text-orange-600 transition-colors">
                            {index + 1}. {state}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Non-Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Non-Applicable States
                    </h3>
                    <div className="space-y-2">
                      {nonApplicableStates.map((state, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg border bg-gray-50"
                        >
                          <span className="text-gray-600 ">
                            {index + 1}. {state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 2xl:w-sm">
            <div className="sticky top-24 ">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6 " />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

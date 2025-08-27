"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, Users, Scale } from "lucide-react";
import Link from "next/link";
import PopularSearch from "../PopularSearch/PopularSearch";

const applicableStates = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh" },
  { name: "Assam", slug: "assam" },
  { name: "Bihar", slug: "bihar" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Delhi", slug: "delhi" },
  { name: "Goa", slug: "goa" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "Haryana", slug: "haryana" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh" },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir" },
  { name: "Jharkhand", slug: "jharkhand" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Kerala", slug: "kerala" },
  { name: "Ladakh", slug: "ladakh" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh" },
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Manipur", slug: "manipur" },
  { name: "Meghalaya", slug: "meghalaya" },
  { name: "Mizoram", slug: "mizoram" },
  { name: "Nagaland", slug: "nagaland" },
  { name: "Odisha", slug: "odisha" },
  { name: "Puducherry", slug: "puducherry" },
  { name: "Punjab", slug: "punjab" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Telangana", slug: "telangana" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "Uttarakhand", slug: "uttarakhand" },
  { name: "West Bengal", slug: "west-bengal" },
];

const nonApplicableStates = [
  { name: "Central", slug: "central" },
  { name: "Dadra and Nagar Haveli", slug: "dadra-nagar-haveli" },
  { name: "Daman and Diu", slug: "daman-diu" },
  { name: "Lakshadweep", slug: "lakshadweep" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Sikkim", slug: "sikkim" },
  { name: "Tripura", slug: "tripura" },
];

const categories = [
  "All Categories",
  "National Holidays",
  "Festival Holidays",
  "Regional Festivals",
  "Religious Festivals"
];

const states = ["All States", "Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu", "West Bengal", "Delhi"];

export default function NationalFestivalHolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">National & Festival Holidays</h1>
                  <p className="text-gray-600 text-lg">
                    Comprehensive guide to national and festival holidays across all Indian states and territories
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {applicableStates.length + nonApplicableStates.length} States Covered
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are National Festival Holidays?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        National festivals are celebrations that reflect India's rich cultural diversity, religious
                        traditions, and historical significance. They bring communities together and are officially
                        recognized as public holidays across different states and regions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {applicableStates.length}
                      </p>
                    </div>
                    <MapPin className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Non-Applicable
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {nonApplicableStates.length}
                      </p>
                    </div>
                    <Building2 className="h-8 w-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        National Holidays
                      </p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Coverage
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        All Workers
                      </p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Information Card */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">
                  National and Festival Holidays Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  It is intended to provide National and Festival holidays to
                  workers in industrial establishments, factories, shops,
                  commercial establishments, plantations, etc. Public holidays
                  vis-à-vis National and Festival Holidays are being regulated
                  under the Industrial Employment (Standing Orders) Act and
                  Rules thereof in many states. However, in a few states, the
                  same is being regulated under the Shops and Establishments Act
                  of the respective states.
                </p>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Eligibility to receive wages on account of festival
                    holidays:
                  </h3>
                  <p>
                    The wages to an employee on account of festival holidays
                    shall be entitled if he has been in service under the
                    employer for a total period of 30 days within a continuous
                    period of 90 days immediately preceding such a holiday
                    (which may vary from state to state).
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Eligibility to receive wages on account of national
                    holidays:
                  </h3>
                  <p>
                    The employee is eligible from day one itself to avail of
                    wages on National Holidays.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    What is the provision given in the Act if employees are
                    engaged during National and Festival Holidays?
                  </h3>
                  <p>
                    If employees are engaged during National and Festival
                    Holidays, they are, at their option, entitled to (a) twice
                    the wages; or (b) wages for such a day and to avail of a
                    substituted holiday with wages on any other day. (Varies
                    from state to state).
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* States Grid */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl ">State-wise Holiday Matrix</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Applicable States
                      </h3>
                      <Badge className="bg-blue-100 text-blue-800 ml-auto">
                        {applicableStates.length} states
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {applicableStates.map((state, index) => (
                        <Link
                          key={state.slug}
                          href={`/national-festival-holidays/${state.slug}`}
                          aria-label={`Go to ${state.name} details`}
                          className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group"
                        >
                          <span className="text-blue-600 group-hover:text-orange-600 font-medium transition-colors">
                            {index + 1}. {state.name}
                          </span>
                          <Badge className="bg-green-100 text-green-800">
                            Available
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Non-Applicable States */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="h-5 w-5 text-gray-600" />
                      <h3 className="text-lg font-semibold text-gray-900">
                        Non-Applicable States
                      </h3>
                      <Badge className="bg-gray-100 text-gray-700 ml-auto">
                        {nonApplicableStates.length} states
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {nonApplicableStates.map((state, index) => (
                        <div
                          key={state.slug}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <span className="text-gray-600 font-medium">
                            {index + 1}. {state.name}
                          </span>
                          <Badge className="bg-gray-100 text-gray-600">
                            Not Applicable
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
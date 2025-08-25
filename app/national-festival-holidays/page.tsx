"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, MapPin, Building2, Users, Star } from "lucide-react";
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

export default function NationalFestivalHolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Bar */}
      {/* <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search National Festival Holidays, states..."
              className=" pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Grid Layout with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <Card className="bg-blue-50 border-blue-200 mb-8">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      What are National Festivals?
                    </h3>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      National festivals are celebrations that reflect India's
                      rich cultural diversity, religious traditions, and
                      historical significance. They bring communities together
                      and are officially recognized as public holidays across
                      different states and regions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
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
                  <h3 className="text-xl font-semibold text-gray-900">
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    Eligibility to receive wages on account of national
                    holidays:
                  </h3>
                  <p>
                    The employee is eligible from day one itself to avail of
                    wages on National Holidays.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">
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

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Applicable States */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {/* Header - Full Width Background */}
                <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Applicable States
                    </h3>
                    <Badge className="bg-blue-100 text-blue-800 ml-auto">
                      {applicableStates.length} states
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {applicableStates.map((state, index) => (
                      <Link
                        key={state.slug}
                        href={`/national-festival-holidays/${state.slug}`}
                        className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer group"
                      >
                        <span className="text-blue-700 font-medium group-hover:text-blue-800">
                          {index + 1}. {state.name}
                        </span>
                        <Badge className="bg-green-100 text-green-800">
                          Available
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Non-Applicable States */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {/* Header - Full Width Background */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-gray-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Non-Applicable States
                    </h3>
                    <Badge className="bg-gray-100 text-gray-700 ml-auto">
                      {nonApplicableStates.length} states
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3">
                    {nonApplicableStates.map((state, index) => (
                      <div
                        key={state.slug}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
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
            </div>
          </div>

          {/* Sidebar with Quick Access */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                </CardHeader>
                <CardContent className="space-y-2">
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

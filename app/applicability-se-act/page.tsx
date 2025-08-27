

"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building2, Users, FileText, Filter, Eye, Scale } from "lucide-react"
import PopularSearch from "../PopularSearch/PopularSearch"



const applicableStates = [
  { name: "Andaman and Nicobar Islands", slug: "andaman-nicobar", code: "AN" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh", code: "AP" },
  { name: "Arunachal Pradesh", slug: "arunachal-pradesh", code: "AR" },
  { name: "Assam", slug: "assam", code: "AS" },
  { name: "Bihar", slug: "bihar", code: "BR" },
  { name: "Chandigarh", slug: "chandigarh", code: "CH" },
  { name: "Chhattisgarh", slug: "chhattisgarh", code: "CG" },
  { name: "Delhi", slug: "delhi", code: "DL" },
  { name: "Goa", slug: "goa", code: "GA" },
  { name: "Gujarat", slug: "gujarat", code: "GJ" },
  { name: "Haryana", slug: "haryana", code: "HR" },
  { name: "Himachal Pradesh", slug: "himachal-pradesh", code: "HP" },
  { name: "Jammu and Kashmir", slug: "jammu-kashmir", code: "JK" },
  { name: "Jharkhand", slug: "jharkhand", code: "JH" },
  { name: "Karnataka", slug: "karnataka", code: "KA" },
  { name: "Kerala", slug: "kerala", code: "KL" },
  { name: "Ladakh", slug: "ladakh", code: "LA" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", code: "MP" },
  { name: "Maharashtra", slug: "maharashtra", code: "MH" },
  { name: "Manipur", slug: "manipur", code: "MN" },
  { name: "Meghalaya", slug: "meghalaya", code: "ML" },
  { name: "Mizoram", slug: "mizoram", code: "MZ" },
  { name: "Nagaland", slug: "nagaland", code: "NL" },
  { name: "Odisha", slug: "odisha", code: "OR" },
  { name: "Puducherry", slug: "puducherry", code: "PY" },
  { name: "Punjab", slug: "punjab", code: "PB" },
  { name: "Rajasthan", slug: "rajasthan", code: "RJ" },
  { name: "Tamil Nadu", slug: "tamil-nadu", code: "TN" },
  { name: "Telangana", slug: "telangana", code: "TG" },
  { name: "Tripura", slug: "tripura", code: "TR" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh", code: "UP" },
  { name: "Uttarakhand", slug: "uttarakhand", code: "UK" },
  { name: "West Bengal", slug: "west-bengal", code: "WB" },
]

const nonApplicableStates = [
  { name: "Central", slug: "central", code: "CT" },
  { name: "Daman and Diu", slug: "daman-diu", code: "DD" },
  { name: "Lakshadweep", slug: "lakshadweep", code: "LD" },
  { name: "Sikkim", slug: "sikkim", code: "SK" },
]

const categories = [
  "All Categories",
  "Registration",
  "Compliance",
  "Working Hours",
  "Licenses",
  "Penalties"
]

const states = ["All States", "Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu", "Delhi", "West Bengal"]

export default function ApplicabilitySEActPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredApplicableStates = applicableStates.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredNonApplicableStates = nonApplicableStates.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Applicability of Shops & Establishments Act</h1>
                  <p className="text-gray-600 text-lg">
                    Complete guide to Shops & Establishments Act applicability, registration, and compliance across Indian states
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {filteredApplicableStates.length} Applicable States
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What is Shops & Establishments Act?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        The Shops and Establishments Act regulates the working conditions of employees in commercial
                        establishments, shops, and other business premises. It covers aspects like working hours, holidays,
                        leave entitlements, and other terms of employment across different states and union territories.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horizontal Filters */}
            <Card className="mb-8">
              <CardContent className="py-2">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Filters Button */}
                  <Button variant="outline" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input 
                      placeholder="Search states and union territories..." 
                      className="pl-12 py-3 h-12 rounded-lg"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* State Dropdown */}
                  <Select>
                    <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Category Dropdown */}
                  <Select>
                    <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/ /g, '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Apply Button */}
                  <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{filteredApplicableStates.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
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
                      <p className="text-2xl font-bold text-gray-900">{filteredNonApplicableStates.length}</p>
                    </div>
                    <FileText className="w-8 h-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                        Registration Guide
                      </p>
                      <p className="text-sm text-gray-600">Step-by-step process</p>
                    </div>
                    <Building2 className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                  </div>
                  <Link href="/guides/se-act-registration">
                    <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      View Guide
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                        Compliance Check
                      </p>
                      <p className="text-sm text-gray-600">Verify requirements</p>
                    </div>
                    <Scale className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                  </div>
                  <Link href="/tools/compliance-checker">
                    <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent">
                      <Eye className="w-4 h-4 mr-2" />
                      Check Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* What is Shops & Establishments Act */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">What is Shops & Establishments Act?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Shops and Establishments Act is state-specific legislation that regulates the working conditions, 
                  rights, and welfare of workers employed in shops, commercial establishments, restaurants, hotels, 
                  entertainment centers, and other establishments.
                </p>
                <p className="text-gray-700 mb-4">
                  Each state has its own Shops and Establishments Act with specific provisions regarding working hours, 
                  overtime, holidays, leave entitlements, employment conditions, and registration requirements for different 
                  types of commercial establishments.
                </p>
              </CardContent>
            </Card>

            {/* Scope and Coverage */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Scope and Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  The Act typically covers the following establishments:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Shops and commercial establishments</li>
                  <li>Hotels, restaurants, and eating houses</li>
                  <li>Entertainment and amusement centers</li>
                  <li>Offices and business establishments</li>
                  <li>Banks and financial institutions</li>
                  <li>Educational and medical institutions</li>
                </ul>
                <p className="text-gray-700">
                  The Act mandates registration for establishments employing a certain number of workers 
                  and regulates their working conditions, wages, and welfare measures.
                </p>
              </CardContent>
            </Card>

            {/* State-wise Applicability */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle>State-wise Applicability</CardTitle>
                <div className="text-sm text-gray-600">
                  The Shops & Establishments Act is applicable in {filteredApplicableStates.length} states and union territories across India
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States ({filteredApplicableStates.length})
                    </h3>
                    <div className="space-y-3">
                      {filteredApplicableStates.map((state, index) => (
                        <Link key={state.slug} href={`/applicability-se-act/${state.slug}`} className="block">
                          <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                            <div>
                              <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                {index + 1}. {state.name}
                              </span>
                              <div className="text-sm text-gray-700">
                                State Code: {state.code}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Applicable
                              </Badge>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Non-Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Non-Applicable States ({filteredNonApplicableStates.length})
                    </h3>
                    <div className="space-y-3">
                      {filteredNonApplicableStates.map((state, index) => (
                        <div
                          key={state.slug}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <div>
                            <span className="text-gray-700">
                              {index + 1}. {state.name}
                            </span>
                            <div className="text-sm text-gray-500">
                              State Code: {state.code}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                              Not Applicable
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Registration requirements and compliance procedures vary significantly across states. 
                      Always refer to the specific state's legislation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Employers must display registration certificates prominently at the establishment premises.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Non-compliance with registration and working condition requirements may result in 
                      penalties and legal action.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Regular renewal of registration certificates is mandatory in most states.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Popular Search */}
              <Card>
                <CardContent className="p-6">
                  <PopularSearch />
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
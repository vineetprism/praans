"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Building2, Users, FileText } from "lucide-react"
import Link from "next/link"

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

export default function ApplicabilitySEActPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredApplicableStates = applicableStates.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredNonApplicableStates = nonApplicableStates.filter((state) =>
    state.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-orange-50 to-white border-b border-orange-100">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">Applicability of Shops & Establishments Act</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Shops and Establishments Act regulates the working conditions of employees in commercial
              establishments, shops, and other business premises. This page shows the applicability across different
              states and union territories of India.
            </p>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search states and union territories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg border-orange-200 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Applicable States */}
          <Card className="border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b border-orange-200">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                Applicable States
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  {filteredApplicableStates.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-3">
                {filteredApplicableStates.map((state, index) => (
                  <Link key={state.slug} href={`/applicability-se-act/${state.slug}`} className="group block">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <span className="text-sm font-semibold text-orange-700">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-black group-hover:text-orange-700 transition-colors">
                            {state.name}
                          </h3>
                          <p className="text-sm text-gray-500">State Code: {state.code}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-orange-600 hover:text-orange-700 hover:bg-orange-50"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Non-Applicable States */}
          <Card className="border-gray-200">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <CardTitle className="flex items-center gap-3 text-black">
                <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Non-Applicable States
                <Badge variant="secondary" className="bg-gray-100 text-gray-800">
                  {filteredNonApplicableStates.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-3">
                {filteredNonApplicableStates.map((state, index) => (
                  <Link key={state.slug} href={`/applicability-se-act/${state.slug}`} className="group block">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          <span className="text-sm font-semibold text-gray-700">{index + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-medium text-black group-hover:text-gray-700 transition-colors">
                            {state.name}
                          </h3>
                          <p className="text-sm text-gray-500">State Code: {state.code}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400 group-hover:text-gray-500 transition-colors" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-gray-700 hover:bg-gray-50"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

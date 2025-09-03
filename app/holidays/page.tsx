
"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"
import { MapPin, Calendar, CheckCircle, ChevronRight } from "lucide-react"
import PopularSearch from "../PopularSearch/PopularSearch"

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
]

export default function HolidaysPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 min-[375px]:px-3 min-[375px]:py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5 xl:px-6">
        
        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          
          {/* Popular Search Sidebar */}
          <div className="lg:col-span-1 lg:order-2 order-1">
            <div className="sticky top-4 z-10">
              <Card>
                <CardContent className="p-3">
                  <PopularSearch className="mt-0" />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            
            {/* Page Header */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div className="flex items-center justify-between flex-1">
                      <h1 className="font-bold text-slate-800 text-lg sm:text-xl lg:text-2xl">
                        Holiday Lists :
                      </h1>
                      {/* <Badge className="px-2 py-1 text-xs bg-orange-400 text-white font-bold ml-2">
                        {applicableStates.length} States
                      </Badge> */}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                    "Statutory Holidays" is public or legal holidays designated by government or authorities based on
                    cultural, religious, historical or national significance within a particular country or region as mandated
                    by law. Every employees are entitled to a day-off with pay or premium pay if they work on such occasions.
                  </p>
                </div>
                
                {/* Year Selector */}
                <div className="flex-shrink-0">
                  <Select defaultValue="2025">
                    <SelectTrigger className="w-24 sm:w-32 border-orange-300 focus:ring-orange-500 h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
{/* 
              <div className="mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                  Lists of Government & Public Holidays in India 2025
                </h2>
                <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
                  Team Simpliance is driven to enable simple, Beautiful and Effective compliance for you always. You now have
                  access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
                  holidays in the year 2025, which includes Government and National Holidays.
                </p>

                <div className="flex items-center gap-2 text-orange-600 bg-orange-50 p-2 sm:p-3 rounded-lg border border-orange-200">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Lists of Holidays For States Across India</span>
                </div>
              </div> */}
            </div>

            {/* States Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3">
              {applicableStates.map((state) => (
                <Link key={state.slug} href={`/holidays/${state.slug}`}>
                  <div className="group border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all duration-300 cursor-pointer border-l-4 border-l-orange-500 bg-white rounded-lg overflow-hidden">
                    <div className="p-2 sm:p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors duration-200 mb-1 sm:mb-2 line-clamp-2 leading-tight min-h-[24px] sm:min-h-[28px]">
                            {state.name}
                          </h3>
                          
                          <div className="text-xs text-gray-600">
                            2025
                          </div>
                        </div>
                        
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 group-hover:text-orange-600 transition-colors ml-1 sm:ml-2 flex-shrink-0" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm mb-1">Updated Holiday Lists</h4>
                  <p className="text-blue-700 text-xs sm:text-sm leading-relaxed">
                    All holiday lists are updated as per the latest government notifications and gazette publications. 
                    Click on any state to view detailed holiday calendar with dates and occasions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
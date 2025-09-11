

"use client"

// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Bell,
  TrendingUp,
  IndianRupee,
  Users,
  CheckCircle,
  XCircle,
  FileClock,
  ScrollText,
  Calculator,
  CalculatorIcon,
  Eye,
  MapPin
} from "lucide-react"
import Link from "next/link"
import PopularSearch from "../PopularSearch/PopularSearch"
import { Button } from "@/components/ui/button"

const applicableStates = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh', contributionRate: '₹20/month', lastUpdated: '2024-12-15', establishments: 2847 },
  { name: 'Chandigarh', slug: 'chandigarh', contributionRate: '₹15/month', lastUpdated: '2024-12-10', establishments: 456 },
  { name: 'Chhattisgarh', slug: 'chhattisgarh', contributionRate: '₹18/month', lastUpdated: '2024-12-12', establishments: 1234 },
  { name: 'Delhi', slug: 'delhi', contributionRate: '₹25/month', lastUpdated: '2024-12-20', establishments: 3567 },
  { name: 'Goa', slug: 'goa', contributionRate: '₹20/month', lastUpdated: '2024-12-08', establishments: 567 },
  { name: 'Gujarat', slug: 'gujarat', contributionRate: '₹22/month', lastUpdated: '2024-12-18', establishments: 4123 },
  { name: 'Haryana', slug: 'haryana', contributionRate: '₹20/month', lastUpdated: '2024-12-14', establishments: 1890 },
  { name: 'Karnataka', slug: 'karnataka', contributionRate: '₹25/month', lastUpdated: '2024-12-19', establishments: 3456 },
  { name: 'Kerala', slug: 'kerala', contributionRate: '₹30/month', lastUpdated: '2024-12-16', establishments: 2234 },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh', contributionRate: '₹18/month', lastUpdated: '2024-12-11', establishments: 1567 },
  { name: 'Maharashtra', slug: 'maharashtra', contributionRate: '₹24/month', lastUpdated: '2024-12-22', establishments: 5678 },
  { name: 'Odisha', slug: 'odisha', contributionRate: '₹16/month', lastUpdated: '2024-12-13', establishments: 1123 },
  { name: 'Punjab', slug: 'punjab', contributionRate: '₹20/month', lastUpdated: '2024-12-17', establishments: 1789 },
  { name: 'Tamil Nadu', slug: 'tamil-nadu', contributionRate: '₹28/month', lastUpdated: '2024-12-21', establishments: 4567 },
  { name: 'Telangana', slug: 'telangana', contributionRate: '₹22/month', lastUpdated: '2024-12-15', establishments: 2345 },
  { name: 'West Bengal', slug: 'west-bengal', contributionRate: '₹20/month', lastUpdated: '2024-12-09', establishments: 3234 }
]

const nonApplicableStates = [
  { name: 'Central', reason: 'No central LWF legislation' },
  { name: 'Andaman and Nicobar Islands', reason: 'Under central administration' },
  { name: 'Arunachal Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Assam', reason: 'State has not enacted LWF Act' },
  { name: 'Bihar', reason: 'State has not enacted LWF Act' },
  { name: 'Dadra and Nagar Haveli', reason: 'Under central administration' },
  { name: 'Daman and Diu', reason: 'Under central administration' },
  { name: 'Himachal Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Jammu and Kashmir', reason: 'Special administrative status' },
  { name: 'Jharkhand', reason: 'State has not enacted LWF Act' },
  { name: 'Ladakh', reason: 'Under central administration' },
  { name: 'Lakshadweep', reason: 'Under central administration' },
  { name: 'Manipur', reason: 'State has not enacted LWF Act' },
  { name: 'Meghalaya', reason: 'State has not enacted LWF Act' },
  { name: 'Mizoram', reason: 'State has not enacted LWF Act' },
  { name: 'Nagaland', reason: 'State has not enacted LWF Act' },
  { name: 'Puducherry', reason: 'Under central administration' },
  { name: 'Rajasthan', reason: 'State has not enacted LWF Act' },
  { name: 'Sikkim', reason: 'State has not enacted LWF Act' },
  { name: 'Tripura', reason: 'State has not enacted LWF Act' },
  { name: 'Uttar Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Uttarakhand', reason: 'State has not enacted LWF Act' }
]

const recentUpdates = [
  {
    state: "Maharashtra",
    title: "LWF Contribution Rates Revised",
    date: "2024-12-22",
    type: "Rate Update",
    slug: "maharashtra"
  },
  {
    state: "Karnataka",
    title: "New Online Payment Portal",
    date: "2024-12-19",
    type: "System Update",
    slug: "karnataka"
  },
  {
    state: "Tamil Nadu",
    title: "LWF Forms Digitization",
    date: "2024-12-21",
    type: "Process Update",
    slug: "tamil-nadu"
  }
]

const filterOptions = {
  states: ["All States", "Maharashtra", "Karnataka", "Delhi", "Gujarat", "Tamil Nadu", "West Bengal"],
  contributionRange: ["All Ranges", "₹10-₹20", "₹20-₹30", "₹30+"],
  lastUpdated: ["All Time", "Last 7 Days", "Last 30 Days", "Last 90 Days"]
}

export default function WelfareFundPage() {
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
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Labour Welfare Fund :
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Labour welfare is an aid in the form of money or necessities for those in need. It provides facilities to labourers in order to improve their working conditions, provide social security, and raise their standard of living. Various state legislatures have enacted an Act exclusively focusing on welfare of the workers, known as the Labour Welfare Fund Act.
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Search by state..."
                  className="pl-10 sm:pl-12 h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm"
                />
              </div>

              {/* State Dropdown */}
              <div className="w-full sm:w-auto">
                <Select>
                  <SelectTrigger
                    className="
                          w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10
                          bg-white text-gray-900 border border-gray-300 rounded-lg
                          text-xs sm:text-sm
                          focus:outline-none
                          focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white
                          !focus-visible:ring-orange-500 !focus-visible:border-orange-500
                          hover:bg-orange-50
                        "
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-md">
                    {filterOptions.states.map((state) => (
                      <SelectItem
                        key={state}
                        value={state}
                        className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
                      >
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
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
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Non-Applicable
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{nonApplicableStates.length}</p>
                    </div>
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <p className="text-sm font-medium text-gray-600">
                        LWF Calculator
                      </p> */}
                      <p className="text-xl text-gray-900 pb-4">  LWF Calculator</p>
                    </div>
                    <Calculator className="w-8 h-8 text-orange-600" />
                  </div>
                  <Link href="/tools/compliance-checker">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="px-8">
                  <div className="flex items-center justify-between">
                    <div>
                      {/* <p className="text-sm font-medium text-gray-600">
                        Coverage
                      </p> */}
                      <p className="text-xl text-gray-900">Intrest & Penality Calculator</p>
                    </div>
                    <CalculatorIcon className="w-14 h-14 text-orange-600" />
                  </div>
                  <Link href="/tools/compliance-checker">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-orange-500 text-white hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 hover:cursor-pointer"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* State-wise Applicability */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle>State-wise Applicability :</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States
                    </h3>
                    <div className="space-y-3">
                      {applicableStates.map((state, index) => (
                        <Link
                          key={index}
                          href={`/welfare-fund/${state.slug}`}
                          aria-label="View State-wise Applicability"
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                            <div>
                              <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                {index + 1}. {state.name}
                              </span>
                              {/* <div className="text-sm text-gray-700">
                                Contribution: {state.contributionRate}
                              </div> */}
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4 text-green-600 group-hover:text-orange-500 transition-colors" />
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                              >
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
                      Non-Applicable States
                    </h3>
                    <div className="space-y-3">
                      {nonApplicableStates.map((state, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <span className="text-gray-700">
                            {index + 1}. {state.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-400" />
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-600"
                            >
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
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Users, Building, Clock, IndianRupee, Filter, Scale } from 'lucide-react'
import PopularSearch from '../PopularSearch/PopularSearch'

export const metadata: Metadata = {
  title: 'Minimum Wages in India - State-wise Rates & Notifications | E-Library',
  description: 'Complete guide to minimum wages across Indian states. Find current rates, notifications, and compliance requirements for different categories of workers.',
  keywords: 'minimum wages, state wise minimum wages, wage rates, labour compliance, wage notification, minimum wage act',
}

const stateWiseWages = [
  { state: 'Andhra Pradesh', skilled: 395, semiSkilled: 365, unskilled: 335, lastUpdated: '2024-01-01', available: true },
  { state: 'Assam', skilled: 285, semiSkilled: 265, unskilled: 245, lastUpdated: '2024-01-01', available: true },
  { state: 'Bihar', skilled: 325, semiSkilled: 305, unskilled: 285, lastUpdated: '2024-01-01', available: true },
  { state: 'Chhattisgarh', skilled: 315, semiSkilled: 295, unskilled: 275, lastUpdated: '2024-01-01', available: true },
  { state: 'Delhi', skilled: 692, semiSkilled: 623, unskilled: 554, lastUpdated: '2024-01-01', available: true },
  { state: 'Goa', skilled: 385, semiSkilled: 355, unskilled: 325, lastUpdated: '2024-01-01', available: true },
  { state: 'Gujarat', skilled: 375, semiSkilled: 345, unskilled: 315, lastUpdated: '2024-01-01', available: true },
  { state: 'Haryana', skilled: 425, semiSkilled: 395, unskilled: 365, lastUpdated: '2024-01-01', available: true },
  { state: 'Himachal Pradesh', skilled: 335, semiSkilled: 315, unskilled: 295, lastUpdated: '2024-01-01', available: true },
  { state: 'Jharkhand', skilled: 315, semiSkilled: 295, unskilled: 275, lastUpdated: '2024-01-01', available: true },
  { state: 'Karnataka', skilled: 425, semiSkilled: 395, unskilled: 365, lastUpdated: '2024-01-01', available: true },
  { state: 'Kerala', skilled: 395, semiSkilled: 365, unskilled: 335, lastUpdated: '2024-01-01', available: true },
  { state: 'Madhya Pradesh', skilled: 315, semiSkilled: 295, unskilled: 275, lastUpdated: '2024-01-01', available: true },
  { state: 'Maharashtra', skilled: 425, semiSkilled: 395, unskilled: 365, lastUpdated: '2024-01-01', available: true },
  { state: 'Odisha', skilled: 315, semiSkilled: 295, unskilled: 275, lastUpdated: '2024-01-01', available: true },
  { state: 'Punjab', skilled: 425, semiSkilled: 395, unskilled: 365, lastUpdated: '2024-01-01', available: true },
  { state: 'Rajasthan', skilled: 335, semiSkilled: 315, unskilled: 295, lastUpdated: '2024-01-01', available: true },
  { state: 'Tamil Nadu', skilled: 425, semiSkilled: 395, unskilled: 365, lastUpdated: '2024-01-01', available: true },
  { state: 'Telangana', skilled: 395, semiSkilled: 365, unskilled: 335, lastUpdated: '2024-01-01', available: true },
  { state: 'Uttar Pradesh', skilled: 335, semiSkilled: 315, unskilled: 295, lastUpdated: '2024-01-01', available: true },
  { state: 'West Bengal', skilled: 365, semiSkilled: 335, unskilled: 305, lastUpdated: '2024-01-01', available: true },
]

const categories = [
  "All Categories",
  "Agricultural",
  "Construction",
  "Manufacturing",
  "Service Sector",
  "Domestic Workers",
  "Contract Workers"
]

const states = [
  "All States",
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "West Bengal"
]

const trendingSearches = [
  'Minimum wage rates 2024',
  'State wise minimum wages',
  'Skilled worker wages',
  'Unskilled labour rates',
  'Minimum wage notification',
  'Daily wage calculation',
  'Overtime wage rates',
  'Agricultural wages',
  'Construction worker wages',
  'Domestic worker wages'
]

export default function MinimumWagesPage() {
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
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Minimum Wages</h1>
                  <p className="text-gray-600 text-lg">
                    Complete guide to minimum wages across Indian states with current rates and compliance requirements
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {stateWiseWages.length} States Available
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are Minimum Wages?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Minimum wages refer to the lowest remuneration that an employer is legally required to pay to workers for their labor. The Minimum Wages Act, 1948 empowers both Central and State Governments to fix minimum wages for scheduled employments to ensure fair compensation and prevent exploitation of workers.
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
                    <Input placeholder="Search by state or category..." className="pl-12 py-3 h-12 rounded-lg" />
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
                  <Button className="bg-orange-500 hover:bg-orange-600 px-6" variant="outline" aria-label='apply filters'>
                    Apply
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total States</p>
                      <p className="text-2xl font-bold text-gray-900">29</p>
                    </div>
                    <Building className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Scheduled Employments</p>
                      <p className="text-2xl font-bold text-gray-900">1,700+</p>
                    </div>
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Highest Daily Rate</p>
                      <p className="text-2xl font-bold text-gray-900">₹692</p>
                    </div>
                    <IndianRupee className="h-8 w-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Last Updated</p>
                      <p className="text-2xl font-bold text-gray-900">2024</p>
                    </div>
                    <Clock className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* State-wise Minimum Wages Table */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">State-wise Minimum Wages (Daily Rates in ₹)</h2>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          State
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Skilled
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Semi-Skilled
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Unskilled
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Updated
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stateWiseWages.map((wage, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="text-sm font-medium text-gray-900">
                                {wage.state}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₹{wage.skilled}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₹{wage.semiSkilled}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">₹{wage.unskilled}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{wage.lastUpdated}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button
                              variant="outline"
                              size="sm"
                              aria-label='view details'
                              className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
                              asChild
                            >
                              <Link href={`/minimum-wages/${wage.state.toLowerCase().replace(/\s+/g, '-')}`} aria-label='view details'>
                                View Details
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8 bg-transparent" aria-label='load more states'>
                Load More States
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Popular Search */}
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
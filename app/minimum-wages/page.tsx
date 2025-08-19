import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Download, Calculator, FileText, Globe, TrendingUp, Users, Building, Clock, IndianRupee } from 'lucide-react'
import PopularSearchBoxes from '../PopularSearchBoxes/PopularSearchBoxes'

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
   <PopularSearchBoxes className='m-6'/>
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search minimum wages, notifications, etc..."
              className="pl-10 pr-4 py-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      {/* <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-700">Trending Searches in Minimum Wages</h3>
            <Button variant="ghost" size="sm">
              <TrendingUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Minimum Wages</h1>
          <p className="text-lg text-gray-600 mb-6">
            "Minimum Wages" refers to the lowest remuneration that an employer is legally required to pay to workers for their labor. 
            The Minimum Wages Act, 1948 empowers both Central and State Governments to fix minimum wages for scheduled employments 
            to ensure fair compensation and prevent exploitation of workers.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calculator className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wage Calculator</h3>
              <p className="text-sm text-gray-600">Calculate minimum wages and overtime</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notifications</h3>
              <p className="text-sm text-gray-600">Latest wage notifications and updates</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Download className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forms & Returns</h3>
              <p className="text-sm text-gray-600">Download wage-related forms</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Official Websites</h3>
              <p className="text-sm text-gray-600">State labour department links</p>
            </CardContent>
          </Card>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* What is Minimum Wages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Minimum Wages?</h2>
            <p className="text-gray-700 mb-4">
              Minimum wage is the lowest wage per hour that a worker may be paid, as mandated by federal law. 
              It is a legally mandated price floor on hourly wages, below which non-exempt workers may not be offered 
              or accept a job. The primary purpose of minimum wage laws is to protect workers against unduly low pay.
            </p>
            <p className="text-gray-700">
              In India, the Minimum Wages Act, 1948 provides for fixing minimum rates of wages in certain employments. 
              The Act empowers both the Central Government and State Governments to fix, review, and revise the minimum 
              wages of the workers employed in the scheduled employments under their respective jurisdictions.
            </p>
          </section>

          {/* Scope of Minimum Wages Act */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Minimum Wages Act</h2>
            <p className="text-gray-700 mb-4">
              The Act applies to employments specified in the Schedule to the Act. The appropriate government may add 
              any employment to the Schedule if it employs 1,000 or more workers in the State. The Act covers various 
              categories of workers including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Agricultural workers</li>
              <li>Construction workers</li>
              <li>Manufacturing industry workers</li>
              <li>Service sector employees</li>
              <li>Domestic workers (in some states)</li>
              <li>Contract and casual workers</li>
            </ul>
          </section>

          {/* State-wise Minimum Wages */}
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
                          <Link 
                            href={`/minimum-wages/${wage.state.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    <strong>Note:</strong> The minimum wage rates mentioned above are indicative and may vary based on 
                    specific employment categories, geographical areas, and recent notifications. Employers should refer 
                    to the latest official notifications from respective state labour departments for accurate and 
                    up-to-date information.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Library" className="h-8 w-auto" />
                <span className="text-xl font-bold">E-Library</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your comprehensive resource for labour laws, compliance, and statutory requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/acts" className="text-gray-400 hover:text-white">Acts</Link></li>
                <li><Link href="/rules" className="text-gray-400 hover:text-white">Rules</Link></li>
                <li><Link href="/forms" className="text-gray-400 hover:text-white">Forms</Link></li>
                <li><Link href="/calculators" className="text-gray-400 hover:text-white">Calculators</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/gazette" className="text-gray-400 hover:text-white">Gazette Notifications</Link></li>
                <li><Link href="/holidays" className="text-gray-400 hover:text-white">Holiday List</Link></li>
                <li><Link href="/welfare-fund" className="text-gray-400 hover:text-white">Welfare Fund</Link></li>
                <li><Link href="/minimum-wages" className="text-gray-400 hover:text-white">Minimum Wages</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">
                Stay updated with the latest labour law changes and notifications.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 E-Library. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

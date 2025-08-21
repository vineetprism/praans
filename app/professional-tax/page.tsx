import { Metadata } from 'next'
import Link from 'next/link'
import { Search, Calculator, FileText, Globe, TrendingUp, Users, IndianRupee, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import PopularSearchBoxes from '../PopularSearchBoxes/PopularSearchBoxes'

export const metadata: Metadata = {
  title: 'Professional Tax - State-wise Rates & Slabs | E-Library',
  description: 'Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.',
  keywords: 'professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms'
}

const professionalTaxStates = [
  { name: 'Andhra Pradesh', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/andhra-pradesh' },
  { name: 'Assam', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/assam' },
  { name: 'Bihar', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/bihar' },
  { name: 'Chhattisgarh', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/chhattisgarh' },
  { name: 'Gujarat', maxRate: 2500, slabs: 6, status: 'Active', link: '/professional-tax/gujarat' },
  { name: 'Jharkhand', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/jharkhand' },
  { name: 'Karnataka', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/karnataka' },
  { name: 'Kerala', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/kerala' },
  { name: 'Madhya Pradesh', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/madhya-pradesh' },
  { name: 'Maharashtra', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/maharashtra' },
  { name: 'Meghalaya', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/meghalaya' },
  { name: 'Odisha', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/odisha' },
  { name: 'Sikkim', maxRate: 2500, slabs: 3, status: 'Active', link: '/professional-tax/sikkim' },
  { name: 'Tamil Nadu', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/tamil-nadu' },
  { name: 'Telangana', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/telangana' },
  { name: 'Tripura', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/tripura' },
  { name: 'West Bengal', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/west-bengal' }
]

const nonApplicableStates = [
  'Arunachal Pradesh', 'Chandigarh', 'Delhi', 'Goa', 'Haryana', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Ladakh', 'Manipur', 'Mizoram', 'Nagaland', 'Punjab',
  'Rajasthan', 'Uttar Pradesh', 'Uttarakhand'
]

const trendingSearches = [
  'Professional Tax Rates 2024',
  'PT Slab Calculation',
  'Professional Tax Forms',
  'PT Registration Process',
  'Professional Tax Exemptions',
  'PT Due Dates',
  'Professional Tax Certificate',
  'PT Compliance Requirements'
]

export default function ProfessionalTaxPage() {
  return (
    <div className="min-h-screen bg-gray-50">
<PopularSearchBoxes className='m-6' />
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search Professional Tax, PT rates, slabs..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Professional Tax</h1>
          <p className="text-lg text-gray-700 mb-6">
            Professional Tax is a state-level tax levied on all persons earning income through employment, profession, or calling. 
            It is governed by individual state legislation and varies across states in terms of rates, slabs, and compliance requirements.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Applicable States</p>
                  <p className="text-2xl font-bold text-gray-900">17</p>
                </div>
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Maximum Rate</p>
                  <p className="text-2xl font-bold text-gray-900">₹2,500</p>
                </div>
                <IndianRupee className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Average Slabs</p>
                  <p className="text-2xl font-bold text-gray-900">4-6</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Last Updated</p>
                  <p className="text-2xl font-bold text-gray-900">Dec 2024</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">PT Calculator</h3>
              <p className="text-sm text-gray-600 mb-4">Calculate professional tax for different states and salary slabs</p>
              <Button variant="outline" size="sm">Calculate Now</Button>
            </CardContent>
          </Card>
          {/* <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">PT Forms</h3>
              <p className="text-sm text-gray-600 mb-4">Download registration and return forms for all states</p>
              <Button variant="outline" size="sm">Download Forms</Button>
            </CardContent>
          </Card> */}
          {/* <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">State Portals</h3>
              <p className="text-sm text-gray-600 mb-4">Access official state professional tax portals</p>
              <Button variant="outline" size="sm">Visit Portals</Button>
            </CardContent>
          </Card> */}
          {/* <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Due Dates</h3>
              <p className="text-sm text-gray-600 mb-4">Track important PT compliance dates and deadlines</p>
              <Button variant="outline" size="sm">View Calendar</Button>
            </CardContent>
          </Card> */}
        </div>

        {/* What is Professional Tax */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What is Professional Tax?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Professional Tax is a direct tax levied by state governments on individuals earning income through employment, 
              profession, or calling. It is collected by the employer from the employee's salary and remitted to the state government.
            </p>
            <p className="text-gray-700 mb-4">
              The tax is governed by individual state legislation, and each state has its own rates, slabs, and compliance requirements. 
              The maximum amount of professional tax that can be levied is ₹2,500 per year as per the Constitution of India.
            </p>
          </CardContent>
        </Card>

        {/* Scope and Coverage */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Scope and Coverage</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Professional Tax applies to all persons earning income through:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Employment or service under any person</li>
              <li>Carrying on any profession</li>
              <li>Carrying on any trade, calling or employment</li>
              <li>Company directors and partners in firms</li>
            </ul>
            <p className="text-gray-700">
              The tax is applicable to both residents and non-residents earning income within the state jurisdiction.
            </p>
          </CardContent>
        </Card>

        {/* State-wise Applicability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>State-wise Applicability</CardTitle>
            <CardDescription>
              Professional Tax is currently applicable in 17 states across India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Applicable States */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
                <div className="space-y-3">
                  {professionalTaxStates.map((state, index) => (
                    <Link key={index} href={state.link}>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
                        <div>
                          <span className="font-medium text-blue-900">{index + 1}. {state.name}</span>
                          <div className="text-sm text-blue-700">
                            Max Rate: ₹{state.maxRate} | {state.slabs} Slabs
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {state.status}
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Non-Applicable States */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Applicable States</h3>
                <div className="space-y-3">
                  {nonApplicableStates.map((state, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{index + 1}. {state}</span>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                        Not Applicable
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card>
          <CardHeader>
            <CardTitle>Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Professional Tax rates and slabs vary significantly across states. Always refer to the specific state's legislation.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Employers are responsible for deducting PT from employee salaries and remitting to the state government.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Non-compliance with Professional Tax regulations may result in penalties and interest charges.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-700">
                  Some states provide exemptions for certain categories of employees or income levels.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="font-bold text-xl">E-Library</span>
              </div>
              <p className="text-gray-400">
                Your comprehensive resource for labour law compliance and statutory requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/acts" className="hover:text-white">Acts</Link></li>
                <li><Link href="/rules" className="hover:text-white">Rules</Link></li>
                <li><Link href="/forms" className="hover:text-white">Forms</Link></li>
                <li><Link href="/calculators" className="hover:text-white">Calculators</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/gazette" className="hover:text-white">Gazette Notifications</Link></li>
                <li><Link href="/holidays" className="hover:text-white">Holiday List</Link></li>
                <li><Link href="/welfare-fund" className="hover:text-white">Welfare Fund</Link></li>
                <li><Link href="/professional-tax" className="hover:text-white">Professional Tax</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with latest labour law changes</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none bg-orange-600 hover:bg-orange-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

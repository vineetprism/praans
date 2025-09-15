import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calculator, FileText, Globe, Bell, Building2, ExternalLink, Search, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Provident Fund (PF) - Complete Guide & State-wise Information | E-Library',
  description: 'Comprehensive guide to Provident Fund (PF) in India. Get state-wise PF rates, contribution details, forms, and compliance information for employers and employees.',
  keywords: 'provident fund, PF, EPF, EPFO, employee provident fund, PF contribution, PF withdrawal, PF forms, state wise PF'
}

const pfStats = [
  { label: 'Applicable States', value: '29', description: 'All states & UTs' },
  { label: 'Current Rate', value: '12%', description: 'Employee + Employer' },
  { label: 'Minimum Wage', value: '₹15,000', description: 'For mandatory PF' },
  { label: 'Last Updated', value: 'Oct 2024', description: 'Latest rates' }
]

const applicableStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
  'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
]

const unionTerritories = [
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli',
  'Daman and Diu', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
]

const trendingSearches = [
  'PF withdrawal process', 'EPF balance check', 'PF transfer online',
  'PF contribution rates 2024', 'EPFO portal login', 'PF claim status',
  'UAN activation', 'PF nomination form', 'EPF interest rate',
  'PF settlement online', 'EPFO grievance', 'PF account merge'
]

const quickActions = [
  {
    title: 'PF Calculator',
    description: 'Calculate PF contributions and maturity amount',
    icon: Calculator,
    href: '/calculators/provident-fund',
    color: 'bg-blue-500'
  },
  {
    title: 'PF Forms',
    description: 'Download all PF related forms and documents',
    icon: FileText,
    href: '/forms/provident-fund',
    color: 'bg-green-500'
  },
  {
    title: 'EPFO Portal',
    description: 'Access official EPFO website and services',
    icon: Globe,
    href: 'https://www.epfindia.gov.in',
    color: 'bg-purple-500',
    external: true
  },
  {
    title: 'PF Notifications',
    description: 'Latest PF circulars and notifications',
    icon: Bell,
    href: '/gazette?category=provident-fund',
    color: 'bg-orange-500'
  }
]

export default function ProvidentFundPage() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700" aria-label="Home">Home</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Provident Fund</span>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-label="Search" />
              <input
                type="text"
                placeholder="Search PF acts, rules, forms..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search PF acts, rules, forms..."
              />
            </div>
            <Button className="bg-black text-white hover:bg-gray-800" aria-label="Search">
              <Search className="w-4 h-4" aria-label="Search" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Trending Searches in Provident Fund</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Provident Fund (PF)</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            The Employee Provident Fund (EPF) is a retirement savings scheme managed by the Employees' Provident Fund Organisation (EPFO) 
            under the Ministry of Labour and Employment, Government of India. It provides financial security to employees after retirement 
            through mandatory contributions from both employer and employee.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pfStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                <Link href={action.href} className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center" aria-label="Learn More">
                  Learn More
                  {action.external ? <ExternalLink className="w-3 h-3 ml-1" /> : <span className="ml-1">→</span>}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What is Provident Fund */}
            <Card>
              <CardHeader>
                <CardTitle>What is Provident Fund?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Employee Provident Fund (EPF) is a social security scheme that enables employees to save for their retirement. 
                  Both the employee and employer contribute 12% of the employee's basic salary and dearness allowance to the EPF account. 
                  The fund earns interest and provides financial security upon retirement, resignation, or in case of emergencies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The EPF is managed by the Employees' Provident Fund Organisation (EPFO), which is a statutory body under the 
                  Ministry of Labour and Employment. It covers establishments with 20 or more employees and provides various 
                  benefits including pension, insurance, and medical facilities.
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features of Provident Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Mandatory Contribution</h4>
                      <p className="text-sm text-gray-600">12% contribution from both employee and employer on basic salary + DA</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Tax Benefits</h4>
                      <p className="text-sm text-gray-600">Contributions are tax-deductible under Section 80C of Income Tax Act</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Interest Earnings</h4>
                      <p className="text-sm text-gray-600">Annual interest rate declared by EPFO (currently 8.15% for 2023-24)</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Partial Withdrawal</h4>
                      <p className="text-sm text-gray-600">Allowed for specific purposes like medical emergency, education, marriage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-medium text-gray-900">Portability</h4>
                      <p className="text-sm text-gray-600">PF account can be transferred when changing jobs</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Applicability */}
            <Card>
              <CardHeader>
                <CardTitle>Applicability of Provident Fund</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  The Employee Provident Fund Act is applicable across all states and union territories in India. 
                  It covers establishments engaged in any industry specified in Schedule I of the Act and employing 20 or more persons.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-green-600" />
                      Applicable States ({applicableStates.length})
                    </h4>
                    <div className="space-y-2">
                      {applicableStates.map((state, index) => (
                        <div key={index} className="flex items-center justify-between py-1">
                          <Link 
                            href={`/provident-fund/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-blue-600 hover:text-blue-800 text-sm"
                            aria-label={`Link to ${state} Provident Fund`}
                          >
                            {index + 1}. {state}
                          </Link>
                          <Badge variant="secondary" className="text-xs">Available</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                      Union Territories ({unionTerritories.length})
                    </h4>
                    <div className="space-y-2">
                      {unionTerritories.map((ut, index) => (
                        <div key={index} className="flex items-center justify-between py-1">
                          <span className="text-gray-700 text-sm">{index + 1}. {ut}</span>
                          <Badge variant="secondary" className="text-xs">Available</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contribution Structure */}
            <Card>
              <CardHeader>
                <CardTitle>PF Contribution Structure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Component</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Employee Share</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Employer Share</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">EPF Contribution</td>
                        <td className="border border-gray-300 px-4 py-3">12% of Basic + DA</td>
                        <td className="border border-gray-300 px-4 py-3">3.67% of Basic + DA</td>
                        <td className="border border-gray-300 px-4 py-3">15.67%</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3">EPS Contribution</td>
                        <td className="border border-gray-300 px-4 py-3">Nil</td>
                        <td className="border border-gray-300 px-4 py-3">8.33% of Basic + DA</td>
                        <td className="border border-gray-300 px-4 py-3">8.33%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">EDLI Contribution</td>
                        <td className="border border-gray-300 px-4 py-3">Nil</td>
                        <td className="border border-gray-300 px-4 py-3">0.5% of Basic + DA</td>
                        <td className="border border-gray-300 px-4 py-3">0.5%</td>
                      </tr>
                      <tr className="bg-blue-50 font-semibold">
                        <td className="border border-gray-300 px-4 py-3">Total Contribution</td>
                        <td className="border border-gray-300 px-4 py-3">12%</td>
                        <td className="border border-gray-300 px-4 py-3">12%</td>
                        <td className="border border-gray-300 px-4 py-3">24%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> PF contribution is calculated on Basic Salary + Dearness Allowance, 
                    subject to a maximum of ₹15,000 per month. For salaries above ₹15,000, contribution is calculated on ₹15,000 only.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Searches */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Trending Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingSearches.map((search, index) => (
                    <Link
                      key={index}
                      href={`/search?q=${encodeURIComponent(search)}`}
                      aria-label={`Search for ${search}`}
                      className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {search}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Important Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Links</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Link href="https://www.epfindia.gov.in" className="flex items-center text-sm text-blue-600 hover:text-blue-800" aria-label="EPFO Official Website">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    EPFO Official Website
                  </Link>
                  <Link href="https://passbook.epfindia.gov.in" className="flex items-center text-sm text-blue-600 hover:text-blue-800" aria-label="EPF Passbook">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    EPF Passbook
                  </Link>
                  <Link href="https://unifiedportal-mem.epfindia.gov.in" className="flex items-center text-sm text-blue-600 hover:text-blue-800" aria-label="Member Portal">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Member Portal
                  </Link>
                  <Link href="https://unifiedportal-emp.epfindia.gov.in" className="flex items-center text-sm text-blue-600 hover:text-blue-800" aria-label="Employer Portal">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Employer Portal
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Latest Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Latest Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900 text-sm">Interest Rate 2023-24</h4>
                    <p className="text-xs text-gray-600 mt-1">EPFO declares 8.15% interest rate for FY 2023-24</p>
                    <span className="text-xs text-gray-500">Oct 15, 2024</span>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900 text-sm">Online Claim Process</h4>
                    <p className="text-xs text-gray-600 mt-1">New simplified online claim process launched</p>
                    <span className="text-xs text-gray-500">Sep 28, 2024</span>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-gray-900 text-sm">UAN Update</h4>
                    <p className="text-xs text-gray-600 mt-1">Mandatory UAN seeding with Aadhaar extended</p>
                    <span className="text-xs text-gray-500">Sep 10, 2024</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-xl">E-Library</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your comprehensive resource for labour law compliance and statutory information.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/acts" className="text-gray-400 hover:text-white" aria-label="Acts">Acts</Link></li>
                <li><Link href="/rules" className="text-gray-400 hover:text-white" aria-label="Rules">Rules</Link></li>
                <li><Link href="/forms" className="text-gray-400 hover:text-white" aria-label="Forms">Forms</Link></li>
                <li><Link href="/calculators" className="text-gray-400 hover:text-white" aria-label="Calculators">Calculators</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/gazette" className="text-gray-400 hover:text-white" aria-label="Gazette">Gazette</Link></li>
                <li><Link href="/holidays" className="text-gray-400 hover:text-white" aria-label="Holidays">Holidays</Link></li>
                <li><Link href="/welfare-fund" className="text-gray-400 hover:text-white" aria-label="Welfare Fund">Welfare Fund</Link></li>
                <li><Link href="/provident-fund" className="text-gray-400 hover:text-white" aria-label="Provident Fund">Provident Fund</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with latest labour law changes</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none" aria-label="Subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}





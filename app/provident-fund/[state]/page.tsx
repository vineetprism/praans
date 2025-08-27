import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calculator, FileText, Globe, Bell, Users, TrendingUp, Building2, Calendar, Download, ExternalLink, Search, ChevronDown, MapPin, Clock, AlertCircle } from 'lucide-react'

interface StateData {
  name: string
  code: string
  lastUpdated: string
  actInfo: {
    act: string
    rule: string
    applicability: string
    frequency: string
    form: string
    website: string
  }
  pfRates: {
    category: string
    employeeContribution: string
    employerContribution: string
    totalContribution: string
    remarks: string
  }[]
  complianceInfo: {
    category: string
    description: string
    dueDate: string
    penalty: string
    remarks: string
  }[]
}

const stateData: Record<string, StateData> = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    code: 'AP',
    lastUpdated: '3rd Oct, 2024',
    actInfo: {
      act: 'Employees Provident Fund and Miscellaneous Provisions Act, 1952',
      rule: 'Employees Provident Fund Scheme, 1952',
      applicability: 'All establishments with 20 or more employees',
      frequency: 'Monthly',
      form: 'Form 3A, 6A, 10C',
      website: 'https://www.epfindia.gov.in'
    },
    pfRates: [
      {
        category: 'All Employees (Basic + DA ≤ ₹15,000)',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'Mandatory for all eligible employees'
      },
      {
        category: 'All Employees (Basic + DA > ₹15,000)',
        employeeContribution: '12% on ₹15,000',
        employerContribution: '12% on ₹15,000',
        totalContribution: '24% on ₹15,000',
        remarks: 'Ceiling limit of ₹15,000 applicable'
      },
      {
        category: 'Voluntary Higher Pension',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'On actual salary if opted for VHP'
      }
    ],
    complianceInfo: [
      {
        category: 'Monthly PF Return',
        description: 'File monthly PF return and deposit contributions',
        dueDate: '15th of following month',
        penalty: '25% of due amount + 1% per month delay',
        remarks: 'ECR filing mandatory through unified portal'
      },
      {
        category: 'Annual Return',
        description: 'File annual return of PF contributions',
        dueDate: '30th April',
        penalty: '₹100 per day of delay',
        remarks: 'Form 6A to be filed annually'
      },
      {
        category: 'Inspection Compliance',
        description: 'Maintain all PF records for inspection',
        dueDate: 'Always',
        penalty: 'As per PF Act provisions',
        remarks: 'Digital records preferred'
      }
    ]
  },
  'maharashtra': {
    name: 'Maharashtra',
    code: 'MH',
    lastUpdated: '5th Oct, 2024',
    actInfo: {
      act: 'Employees Provident Fund and Miscellaneous Provisions Act, 1952',
      rule: 'Employees Provident Fund Scheme, 1952',
      applicability: 'All establishments with 20 or more employees',
      frequency: 'Monthly',
      form: 'Form 3A, 6A, 10C',
      website: 'https://www.epfindia.gov.in'
    },
    pfRates: [
      {
        category: 'All Employees (Basic + DA ≤ ₹15,000)',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'Standard PF rate applicable'
      },
      {
        category: 'All Employees (Basic + DA > ₹15,000)',
        employeeContribution: '12% on ₹15,000',
        employerContribution: '12% on ₹15,000',
        totalContribution: '24% on ₹15,000',
        remarks: 'Ceiling limit strictly enforced'
      },
      {
        category: 'Contract Workers',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'Same rates for contract employees'
      }
    ],
    complianceInfo: [
      {
        category: 'Monthly Compliance',
        description: 'ECR filing and contribution deposit',
        dueDate: '15th of following month',
        penalty: '25% of due amount + interest',
        remarks: 'Online filing mandatory'
      },
      {
        category: 'Wage Ceiling Review',
        description: 'Review salary components for PF calculation',
        dueDate: 'Monthly',
        penalty: 'Penalty for wrong calculation',
        remarks: 'Basic + DA components only'
      },
      {
        category: 'Employee Registration',
        description: 'Register new employees within 30 days',
        dueDate: '30 days from joining',
        penalty: '₹100 per employee per day',
        remarks: 'UAN generation mandatory'
      }
    ]
  },
  'karnataka': {
    name: 'Karnataka',
    code: 'KA',
    lastUpdated: '2nd Oct, 2024',
    actInfo: {
      act: 'Employees Provident Fund and Miscellaneous Provisions Act, 1952',
      rule: 'Employees Provident Fund Scheme, 1952',
      applicability: 'All establishments with 20 or more employees',
      frequency: 'Monthly',
      form: 'Form 3A, 6A, 10C',
      website: 'https://www.epfindia.gov.in'
    },
    pfRates: [
      {
        category: 'Regular Employees',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'On Basic + DA up to ₹15,000'
      },
      {
        category: 'IT Sector Employees',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'Special provisions for IT companies'
      },
      {
        category: 'Apprentices',
        employeeContribution: '12%',
        employerContribution: '12%',
        totalContribution: '24%',
        remarks: 'If stipend > ₹15,000'
      }
    ],
    complianceInfo: [
      {
        category: 'Digital Compliance',
        description: 'All filings through digital mode only',
        dueDate: '15th of following month',
        penalty: 'Late filing charges applicable',
        remarks: 'Karnataka promotes digital compliance'
      },
      {
        category: 'Startup Exemptions',
        description: 'Special provisions for recognized startups',
        dueDate: 'As applicable',
        penalty: 'Standard penalties apply',
        remarks: 'Consult EPFO for startup benefits'
      },
      {
        category: 'Multi-location Compliance',
        description: 'Separate compliance for each location',
        dueDate: 'Monthly',
        penalty: 'Location-wise penalties',
        remarks: 'Each establishment treated separately'
      }
    ]
  }
}

const availableStates = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh', available: true },
  { name: 'Arunachal Pradesh', slug: 'arunachal-pradesh', available: false },
  { name: 'Assam', slug: 'assam', available: false },
  { name: 'Bihar', slug: 'bihar', available: false },
  { name: 'Chhattisgarh', slug: 'chhattisgarh', available: false },
  { name: 'Delhi', slug: 'delhi', available: false },
  { name: 'Goa', slug: 'goa', available: false },
  { name: 'Gujarat', slug: 'gujarat', available: false },
  { name: 'Haryana', slug: 'haryana', available: false },
  { name: 'Himachal Pradesh', slug: 'himachal-pradesh', available: false },
  { name: 'Jharkhand', slug: 'jharkhand', available: false },
  { name: 'Karnataka', slug: 'karnataka', available: true },
  { name: 'Kerala', slug: 'kerala', available: false },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh', available: false },
  { name: 'Maharashtra', slug: 'maharashtra', available: true },
  { name: 'Manipur', slug: 'manipur', available: false },
  { name: 'Meghalaya', slug: 'meghalaya', available: false },
  { name: 'Mizoram', slug: 'mizoram', available: false },
  { name: 'Nagaland', slug: 'nagaland', available: false },
  { name: 'Odisha', slug: 'odisha', available: false },
  { name: 'Punjab', slug: 'punjab', available: false },
  { name: 'Rajasthan', slug: 'rajasthan', available: false },
  { name: 'Sikkim', slug: 'sikkim', available: false },
  { name: 'Tamil Nadu', slug: 'tamil-nadu', available: false },
  { name: 'Telangana', slug: 'telangana', available: false },
  { name: 'Tripura', slug: 'tripura', available: false },
  { name: 'Uttar Pradesh', slug: 'uttar-pradesh', available: false },
  { name: 'Uttarakhand', slug: 'uttarakhand', available: false },
  { name: 'West Bengal', slug: 'west-bengal', available: false }
]

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const state = stateData[params.state]

  if (!state) {
    return {
      title: 'State Not Found | Provident Fund',
      description: 'The requested state information is not available.'
    }
  }

  return {
    title: `Provident Fund in ${state.name} - Rates, Forms & Compliance | E-Library`,
    description: `Complete guide to Provident Fund (PF) in ${state.name}. Get PF contribution rates, forms, compliance requirements and official information.`,
    keywords: `provident fund ${state.name}, PF rates ${state.name}, EPF ${state.code}, PF compliance ${state.name}`
  }
}

export default function StateProvidentFundPage({ params }: { params: { state: string } }) {
  const state = stateData[params.state]

  if (!state) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2" aria-label="Home">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="font-bold text-xl">E-Library</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/acts" className="text-gray-700 hover:text-blue-600" aria-label="Acts">Acts</Link>
              <Link href="/rules" className="text-gray-700 hover:text-blue-600" aria-label="Rules">Rules</Link>
              <Link href="/forms" className="text-gray-700 hover:text-blue-600" aria-label="Forms">Forms</Link>
              <Link href="/calculators" className="text-gray-700 hover:text-blue-600" aria-label="Calculators">Calculators</Link>
              <Link href="/gazette" className="text-gray-700 hover:text-blue-600" aria-label="Gazette">Gazette</Link>
              <Link href="/holidays" className="text-gray-700 hover:text-blue-600" aria-label="Holidays">Holidays</Link>
              <Link href="/welfare-fund" className="text-gray-700 hover:text-blue-600" aria-label="Welfare Fund">Welfare Fund</Link>
              <Link href="/provident-fund" className="text-blue-600 font-medium" aria-label="Provident Fund">Provident Fund</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700" aria-label="Home">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/provident-fund" className="text-gray-500 hover:text-gray-700" aria-label="Provident Fund">Provident Fund</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{state.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select State</CardTitle>
                <CardDescription>
                  Updated As On: {state.lastUpdated}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {availableStates.map((stateItem) => (
                    <div key={stateItem.slug} className="flex items-center justify-between">
                      {stateItem.available ? (
                        <Link
                          href={`/provident-fund/${stateItem.slug}`}
                          className={`text-sm hover:text-blue-600 ${stateItem.slug === params.state ? 'text-blue-600 font-medium' : 'text-gray-700'
                            }`}
                          aria-label={`Go to ${stateItem.name} Provident Fund`}
                        >
                          {stateItem.name}
                        </Link>
                      ) : (
                        <span className="text-sm text-gray-400">{stateItem.name}</span>
                      )}
                      <Badge variant={stateItem.available ? "default" : "secondary"} className="text-xs">
                        {stateItem.available ? "Available" : "Soon"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Page Header */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <h1 className="text-3xl font-bold text-gray-900">Provident Fund</h1>
              </div>
              <h2 className="text-xl text-gray-600 mb-4">{state.name}</h2>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm">PF Calculator</h3>
                  <p className="text-xs text-gray-600 mt-1">Calculate contributions</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm">Download Forms</h3>
                  <p className="text-xs text-gray-600 mt-1">Get PF forms</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm">Official Website</h3>
                  <p className="text-xs text-gray-600 mt-1">Visit EPFO portal</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Bell className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm">Notifications</h3>
                  <p className="text-xs text-gray-600 mt-1">Latest updates</p>
                </CardContent>
              </Card>
            </div>

            {/* Act Information */}
            <Card>
              <CardHeader>
                <CardTitle>Act Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">ACT</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">RULE</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">APPLICABILITY</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FREQUENCY</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">FORM</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">WEBSITE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3">{state.actInfo.act}</td>
                        <td className="border border-gray-300 px-4 py-3">{state.actInfo.rule}</td>
                        <td className="border border-gray-300 px-4 py-3">{state.actInfo.applicability}</td>
                        <td className="border border-gray-300 px-4 py-3">{state.actInfo.frequency}</td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Button variant="outline" size="sm" className="text-blue-600" aria-label="Download Act">
                            <Download className="w-4 h-4 mr-1" />
                            {state.actInfo.form}
                          </Button>
                        </td>
                        <td className="border border-gray-300 px-4 py-3">
                          <Button variant="outline" size="sm" className="text-blue-600" aria-label="Visit Official Site">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Official Site
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* PF Contribution Rates */}
            <Card>
              <CardHeader>
                <CardTitle>Provident Fund Contribution Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">CATEGORY</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EMPLOYEE CONTRIBUTION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">EMPLOYER CONTRIBUTION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">TOTAL CONTRIBUTION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">REMARKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.pfRates.map((rate, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 font-medium">{rate.category}</td>
                          <td className="border border-gray-300 px-4 py-3">{rate.employeeContribution}</td>
                          <td className="border border-gray-300 px-4 py-3">{rate.employerContribution}</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold">{rate.totalContribution}</td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{rate.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Information */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">CATEGORY</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DESCRIPTION</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">DUE DATE</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PENALTY</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold">REMARKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.complianceInfo.map((info, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-3 font-medium">{info.category}</td>
                          <td className="border border-gray-300 px-4 py-3">{info.description}</td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 text-orange-500 mr-1" />
                              {info.dueDate}
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3">
                            <div className="flex items-center">
                              <AlertCircle className="w-4 h-4 text-red-500 mr-1" />
                              {info.penalty}
                            </div>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">{info.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">Contribution Calculation</h4>
                    <p className="text-sm text-blue-800">
                      PF contribution is calculated on Basic Salary + Dearness Allowance only.
                      The maximum ceiling for PF contribution is ₹15,000 per month.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">Online Services</h4>
                    <p className="text-sm text-green-800">
                      All PF services including ECR filing, claim settlement, and balance inquiry
                      are available online through the EPFO unified portal.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                    <h4 className="font-medium text-orange-900 mb-2">Compliance Deadline</h4>
                    <p className="text-sm text-orange-800">
                      Monthly PF contributions must be deposited by 15th of the following month.
                      Late payment attracts penalty and interest charges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

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
                  aria-label="Enter your email"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none" aria-label="Subscribe">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

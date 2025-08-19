import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, ExternalLink, Clock, Calendar, FileText, ChevronDown, Check } from 'lucide-react'

interface StateData {
  name: string
  slug: string
  lastUpdated: string
  act: {
    name: string
    year: string
    rule: string
    ruleYear: string
    applicability: string
    frequency: string
    formName: string
    formLink: string
    websiteLink: string
  }
  leaveEntitlements: {
    category: string
    annualLeave: string
    sickLeave: string
    casualLeave: string
    maternityLeave: string
    paternityLeave: string
    remarks: string
  }[]
  workingHours: {
    category: string
    dailyHours: string
    weeklyHours: string
    overtimeRate: string
    nightShiftAllowance: string
    weeklyOff: string
    remarks: string
  }[]
}

const statesData: Record<string, StateData> = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    lastUpdated: '3rd Oct, 2024',
    act: {
      name: 'Andhra Pradesh Shops and Commercial Establishments Act',
      year: '1988',
      rule: 'The Andhra Pradesh Shops and Commercial Establishments Rules',
      ruleYear: '1989',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM A.xlsx',
      formLink: '#',
      websiteLink: 'http://labour.ap.gov.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis',
        annualLeave: '12 days',
        sickLeave: '12 days',
        casualLeave: '7 days',
        maternityLeave: '12 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '10% of basic wage',
        weeklyOff: '1 day per week',
        remarks: 'Overtime after 9 hours/day or 48 hours/week'
      }
    ]
  },
  'maharashtra': {
    name: 'Maharashtra',
    slug: 'maharashtra',
    lastUpdated: '15th Sep, 2024',
    act: {
      name: 'Maharashtra Shops and Establishments Act',
      year: '2017',
      rule: 'The Maharashtra Shops and Establishments Rules',
      ruleYear: '2018',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM 1.xlsx',
      formLink: '#',
      websiteLink: 'http://mahakamgar.gov.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity',
        annualLeave: '15 days',
        sickLeave: '7 days',
        casualLeave: '7 days',
        maternityLeave: '26 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Maharashtra Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '15% of basic wage',
        weeklyOff: '1.5 days per week',
        remarks: 'Flexible working hours allowed'
      }
    ]
  },
  'karnataka': {
    name: 'Karnataka',
    slug: 'karnataka',
    lastUpdated: '20th Aug, 2024',
    act: {
      name: 'Karnataka Shops and Commercial Establishments Act',
      year: '1961',
      rule: 'The Karnataka Shops and Commercial Establishments Rules',
      ruleYear: '1963',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM I.xlsx',
      formLink: '#',
      websiteLink: 'http://labour.kar.nic.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity',
        annualLeave: '12 days',
        sickLeave: '12 days',
        casualLeave: '12 days',
        maternityLeave: '12 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Karnataka Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '12% of basic wage',
        weeklyOff: '1 day per week',
        remarks: 'Special provisions for IT employees'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateData = statesData[params.state]
  
  if (!stateData) {
    return {
      title: 'State Not Found - Leave & Working Hours | E-Library'
    }
  }

  return {
    title: `${stateData.name} - Leave & Working Hours Regulations | E-Library`,
    description: `Comprehensive guide to leave policies and working hours regulations in ${stateData.name}. Find leave entitlements, working hour limits, and compliance requirements.`,
    keywords: `${stateData.name} leave policy, working hours, shops and establishments act, annual leave, sick leave, overtime rules`
  }
}

export default function StateLeavesWorkingHoursPage({ params }: { params: { state: string } }) {
  const stateData = statesData[params.state]

  if (!stateData) {
    notFound()
  }

  const availableStates = Object.values(statesData)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="E-Library" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">E-Library</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/acts" className="text-gray-600 hover:text-gray-900">Acts</Link>
              <Link href="/rules" className="text-gray-600 hover:text-gray-900">Rules</Link>
              <Link href="/forms" className="text-gray-600 hover:text-gray-900">Forms</Link>
              <Link href="/calculators" className="text-gray-600 hover:text-gray-900">Calculators</Link>
              <Link href="/gazette" className="text-gray-600 hover:text-gray-900">Gazette</Link>
              <Link href="/holidays" className="text-gray-600 hover:text-gray-900">Holidays</Link>
              <Link href="/welfare-fund" className="text-gray-600 hover:text-gray-900">Welfare Fund</Link>
              <Link href="/leaves-working-hours" className="text-blue-600 font-medium">Leaves & Working Hours</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link href="/leaves-working-hours" className="hover:text-gray-900">Leave & Working Hours</Link>
          <span>/</span>
          <span className="text-gray-900">{stateData.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select State</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {availableStates.map((state) => (
                    <Link
                      key={state.slug}
                      href={`/leaves-working-hours/${state.slug}`}
                      className={`block p-3 rounded-lg border transition-colors ${
                        state.slug === params.state
                          ? 'bg-blue-50 border-blue-200 text-blue-700'
                          : 'hover:bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{state.name}</span>
                        {state.slug === params.state && (
                          <Check className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">
                    <strong>Updated As On:</strong><br />
                    {stateData.lastUpdated}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Leave & Working Hours</h1>
                  <h2 className="text-xl text-gray-600 mt-2">{stateData.name}</h2>
                </div>
              </div>

              {/* Act Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Act Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">ACT</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">RULE</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">APPLICABILITY</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">FREQUENCY</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">FORM</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">WEBSITE</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3">
                            {stateData.act.name}, {stateData.act.year}
                          </td>
                          <td className="border border-gray-200 px-4 py-3">
                            {stateData.act.rule}, {stateData.act.ruleYear}
                          </td>
                          <td className="border border-gray-200 px-4 py-3">
                            {stateData.act.applicability}
                          </td>
                          <td className="border border-gray-200 px-4 py-3">
                            {stateData.act.frequency}
                          </td>
                          <td className="border border-gray-200 px-4 py-3">
                            <Button size="sm" variant="outline" className="text-blue-600">
                              <Download className="h-4 w-4 mr-1" />
                              {stateData.act.formName}
                            </Button>
                          </td>
                          <td className="border border-gray-200 px-4 py-3">
                            <Button size="sm" variant="outline" className="text-blue-600">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Official Site
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Leave Entitlements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Leave Entitlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-blue-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CATEGORY</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">ANNUAL LEAVE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">SICK LEAVE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">CASUAL LEAVE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">MATERNITY LEAVE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">PATERNITY LEAVE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">REMARKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stateData.leaveEntitlements.map((leave, index) => (
                          <tr key={index}>
                            <td className="border border-gray-200 px-4 py-3">
                              {leave.category}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {leave.annualLeave}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {leave.sickLeave}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {leave.casualLeave}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {leave.maternityLeave}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {leave.paternityLeave}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center">
                              {leave.remarks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Working Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Working Hours & Overtime</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-green-50">
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CATEGORY</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">DAILY HOURS</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">WEEKLY HOURS</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">OVERTIME RATE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">NIGHT SHIFT ALLOWANCE</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">WEEKLY OFF</th>
                          <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">REMARKS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stateData.workingHours.map((hours, index) => (
                          <tr key={index}>
                            <td className="border border-gray-200 px-4 py-3">
                              {hours.category}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {hours.dailyHours}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {hours.weeklyHours}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {hours.overtimeRate}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {hours.nightShiftAllowance}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
                              {hours.weeklyOff}
                            </td>
                            <td className="border border-gray-200 px-4 py-3 text-center">
                              {hours.remarks}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Download Forms</h3>
                    <p className="text-sm text-gray-600 mb-3">Get registration and compliance forms</p>
                    <Button size="sm">Download</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Leave Calculator</h3>
                    <p className="text-sm text-gray-600 mb-3">Calculate leave entitlements</p>
                    <Button size="sm" variant="outline">Calculate</Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Official Website</h3>
                    <p className="text-sm text-gray-600 mb-3">Visit state labour department</p>
                    <Button size="sm" variant="outline">Visit Site</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Important Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Important Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 mb-2">Leave Policy Compliance</h4>
                      <p className="text-sm text-yellow-700">
                        Employers must ensure their leave policy is at least as beneficial as the minimum requirements specified in the state's Shops and Establishments Act.
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Working Hours Regulations</h4>
                      <p className="text-sm text-blue-700">
                        Any work beyond the specified daily or weekly hours must be compensated as overtime at the prescribed rates. Night shift workers are entitled to additional allowances.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Record Maintenance</h4>
                      <p className="text-sm text-green-700">
                        Employers must maintain proper records of leave taken, working hours, overtime payments, and other statutory requirements as per the Act.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Library" className="h-8 w-auto" />
                <span className="text-xl font-bold">E-Library</span>
              </div>
              <p className="text-gray-400">
                Your comprehensive resource for labour laws, regulations, and compliance requirements.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/acts" className="text-gray-400 hover:text-white">Acts</Link></li>
                <li><Link href="/rules" className="text-gray-400 hover:text-white">Rules</Link></li>
                <li><Link href="/forms" className="text-gray-400 hover:text-white">Forms</Link></li>
                <li><Link href="/calculators" className="text-gray-400 hover:text-white">Calculators</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/gazette" className="text-gray-400 hover:text-white">Gazette Notifications</Link></li>
                <li><Link href="/holidays" className="text-gray-400 hover:text-white">Holidays</Link></li>
                <li><Link href="/welfare-fund" className="text-gray-400 hover:text-white">Welfare Fund</Link></li>
                <li><Link href="/leaves-working-hours" className="text-gray-400 hover:text-white">Leaves & Working Hours</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to get the latest updates on labour laws and regulations.</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2024 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

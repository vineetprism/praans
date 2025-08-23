import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, ExternalLink, FileText, Globe, Calendar, IndianRupee, Users, Building } from 'lucide-react'

interface StateWageData {
  state: string
  slug: string
  act: string
  rule: string
  applicability: string
  frequency: string
  form: string
  website: string
  lastUpdated: string
  wageRates: {
    category: string
    skilled: number
    semiSkilled: number
    unskilled: number
    remarks: string
  }[]
  employmentCategories: {
    category: string
    description: string
    applicableRate: string
    overtime: string
    nightShift: string
  }[]
}

const stateWageData: Record<string, StateWageData> = {
  'andhra-pradesh': {
    state: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    act: 'Andhra Pradesh Minimum Wages Act, 1948',
    rule: 'The Andhra Pradesh Minimum Wages Rules, 1950',
    applicability: 'All establishments employing workers in scheduled employments',
    frequency: 'Revised every 5 years or as notified',
    form: 'Form MW-1, MW-2',
    website: 'https://labour.ap.gov.in',
    lastUpdated: '1st January 2024',
    wageRates: [
      {
        category: 'Agricultural Workers',
        skilled: 395,
        semiSkilled: 365,
        unskilled: 335,
        remarks: 'Includes farm labourers, plantation workers'
      },
      {
        category: 'Construction Workers',
        skilled: 425,
        semiSkilled: 395,
        unskilled: 365,
        remarks: 'Building and other construction work'
      },
      {
        category: 'Manufacturing',
        skilled: 415,
        semiSkilled: 385,
        unskilled: 355,
        remarks: 'Factory workers, industrial establishments'
      },
      {
        category: 'Service Sector',
        skilled: 405,
        semiSkilled: 375,
        unskilled: 345,
        remarks: 'Hotels, restaurants, security services'
      }
    ],
    employmentCategories: [
      {
        category: 'Agriculture',
        description: 'Cultivation of crops, plantation work, animal husbandry',
        applicableRate: 'Unskilled: ₹335, Semi-skilled: ₹365, Skilled: ₹395',
        overtime: '2x normal rate after 9 hours',
        nightShift: '25% additional allowance'
      },
      {
        category: 'Construction',
        description: 'Building construction, road work, infrastructure projects',
        applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
        overtime: '2x normal rate after 8 hours',
        nightShift: '30% additional allowance'
      },
      {
        category: 'Manufacturing',
        description: 'Factory work, industrial production, processing units',
        applicableRate: 'Unskilled: ₹355, Semi-skilled: ₹385, Skilled: ₹415',
        overtime: '2x normal rate after 8 hours',
        nightShift: '25% additional allowance'
      }
    ]
  },
  'maharashtra': {
    state: 'Maharashtra',
    slug: 'maharashtra',
    act: 'Maharashtra Minimum Wages Act, 1948',
    rule: 'The Maharashtra Minimum Wages Rules, 1963',
    applicability: 'All establishments employing workers in scheduled employments',
    frequency: 'Revised every 5 years or as notified',
    form: 'Form MW-1, MW-2, MW-3',
    website: 'https://mahakamgar.maharashtra.gov.in',
    lastUpdated: '1st January 2024',
    wageRates: [
      {
        category: 'Agricultural Workers',
        skilled: 425,
        semiSkilled: 395,
        unskilled: 365,
        remarks: 'Includes farm labourers, plantation workers'
      },
      {
        category: 'Construction Workers',
        skilled: 455,
        semiSkilled: 425,
        unskilled: 395,
        remarks: 'Building and other construction work'
      },
      {
        category: 'Manufacturing',
        skilled: 445,
        semiSkilled: 415,
        unskilled: 385,
        remarks: 'Factory workers, industrial establishments'
      },
      {
        category: 'Service Sector',
        skilled: 435,
        semiSkilled: 405,
        unskilled: 375,
        remarks: 'Hotels, restaurants, security services'
      }
    ],
    employmentCategories: [
      {
        category: 'Agriculture',
        description: 'Cultivation of crops, plantation work, animal husbandry',
        applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
        overtime: '2x normal rate after 9 hours',
        nightShift: '25% additional allowance'
      },
      {
        category: 'Construction',
        description: 'Building construction, road work, infrastructure projects',
        applicableRate: 'Unskilled: ₹395, Semi-skilled: ₹425, Skilled: ₹455',
        overtime: '2x normal rate after 8 hours',
        nightShift: '30% additional allowance'
      },
      {
        category: 'Manufacturing',
        description: 'Factory work, industrial production, processing units',
        applicableRate: 'Unskilled: ₹385, Semi-skilled: ₹415, Skilled: ₹445',
        overtime: '2x normal rate after 8 hours',
        nightShift: '25% additional allowance'
      }
    ]
  },
  'karnataka': {
    state: 'Karnataka',
    slug: 'karnataka',
    act: 'Karnataka Minimum Wages Act, 1948',
    rule: 'The Karnataka Minimum Wages Rules, 1958',
    applicability: 'All establishments employing workers in scheduled employments',
    frequency: 'Revised every 5 years or as notified',
    form: 'Form MW-1, MW-2',
    website: 'https://labour.karnataka.gov.in',
    lastUpdated: '1st January 2024',
    wageRates: [
      {
        category: 'Agricultural Workers',
        skilled: 425,
        semiSkilled: 395,
        unskilled: 365,
        remarks: 'Includes farm labourers, plantation workers'
      },
      {
        category: 'Construction Workers',
        skilled: 455,
        semiSkilled: 425,
        unskilled: 395,
        remarks: 'Building and other construction work'
      },
      {
        category: 'Manufacturing',
        skilled: 445,
        semiSkilled: 415,
        unskilled: 385,
        remarks: 'Factory workers, industrial establishments'
      },
      {
        category: 'Service Sector',
        skilled: 435,
        semiSkilled: 405,
        unskilled: 375,
        remarks: 'Hotels, restaurants, security services'
      }
    ],
    employmentCategories: [
      {
        category: 'Agriculture',
        description: 'Cultivation of crops, plantation work, animal husbandry',
        applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
        overtime: '2x normal rate after 9 hours',
        nightShift: '25% additional allowance'
      },
      {
        category: 'Construction',
        description: 'Building construction, road work, infrastructure projects',
        applicableRate: 'Unskilled: ₹395, Semi-skilled: ₹425, Skilled: ₹455',
        overtime: '2x normal rate after 8 hours',
        nightShift: '30% additional allowance'
      },
      {
        category: 'Manufacturing',
        description: 'Factory work, industrial production, processing units',
        applicableRate: 'Unskilled: ₹385, Semi-skilled: ₹415, Skilled: ₹445',
        overtime: '2x normal rate after 8 hours',
        nightShift: '25% additional allowance'
      }
    ]
  }
}

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateData = stateWageData[params.state]
  
  if (!stateData) {
    return {
      title: 'State Not Found | Minimum Wages',
      description: 'The requested state minimum wage information could not be found.'
    }
  }

  return {
    title: `${stateData.state} Minimum Wages - Current Rates & Notifications | E-Library`,
    description: `Complete minimum wage information for ${stateData.state}. Find current wage rates, employment categories, overtime rates, and compliance requirements.`,
    keywords: `${stateData.state} minimum wages, wage rates, labour compliance, ${stateData.state} labour laws`,
  }
}

export default function StateMinimumWagesPage({ params }: { params: { state: string } }) {
  const stateData = stateWageData[params.state]

  if (!stateData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">


      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Select State</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.values(stateWageData).map((state) => (
                    <Link
                      key={state.slug}
                      href={`/minimum-wages/${state.slug}`}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        state.slug === params.state
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {state.state}
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500">
                    Updated As On:<br />
                    {stateData.lastUpdated}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Minimum Wages</h1>
              <h2 className="text-xl text-gray-600">{stateData.state}</h2>
            </div>

            {/* Act Information Table */}
            <Card className="mb-8">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Act</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rule</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicability</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-900">{stateData.act}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{stateData.rule}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{stateData.applicability}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{stateData.frequency}</td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            {stateData.form}
                          </Button>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="outline" size="sm" asChild>
                            <a href={stateData.website} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Official Site
                            </a>
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Minimum Wage Rates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Minimum Wage Rates (Daily in ₹)</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skilled</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semi-Skilled</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unskilled</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stateData.wageRates.map((rate, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{rate.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">₹{rate.skilled}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">₹{rate.semiSkilled}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">₹{rate.unskilled}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{rate.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Employment Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Employment Categories & Additional Benefits</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicable Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overtime</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Night Shift</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stateData.employmentCategories.map((category, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{category.category}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{category.description}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{category.applicableRate}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{category.overtime}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{category.nightShift}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Forms</h3>
                  <p className="text-sm text-gray-600">Get wage-related forms and returns</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <IndianRupee className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Wage Calculator</h3>
                  <p className="text-sm text-gray-600">Calculate wages and overtime</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Official Website</h3>
                  <p className="text-sm text-gray-600">Visit state labour department</p>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle>Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <ul className="text-sm text-yellow-700 space-y-2">
                    <li>• Minimum wage rates are subject to periodic revision by the state government</li>
                    <li>• Employers must display wage rates prominently at the workplace</li>
                    <li>• Payment below minimum wage is a punishable offense under the Act</li>
                    <li>• Different rates may apply for different geographical areas within the state</li>
                    <li>• Always refer to the latest official notifications for current rates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

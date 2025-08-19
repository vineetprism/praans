import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, Download, ExternalLink, ChevronDown } from 'lucide-react'
import PopularSearchBoxes from '../PopularSearchBoxes/PopularSearchBoxes'

export const metadata: Metadata = {
  title: 'Labour Welfare Fund - State-wise Contribution Rates & Forms | E-Library',
  description: 'Complete guide to Labour Welfare Fund Act, state-wise contribution rates, forms, and compliance requirements for employers and employees.',
  keywords: 'labour welfare fund, LWF, contribution rates, state wise, forms, compliance, employer, employee'
}

const applicableStates = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh' },
  { name: 'Chandigarh', slug: 'chandigarh' },
  { name: 'Chhattisgarh', slug: 'chhattisgarh' },
  { name: 'Delhi', slug: 'delhi' },
  { name: 'Goa', slug: 'goa' },
  { name: 'Gujarat', slug: 'gujarat' },
  { name: 'Haryana', slug: 'haryana' },
  { name: 'Karnataka', slug: 'karnataka' },
  { name: 'Kerala', slug: 'kerala' },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh' },
  { name: 'Maharashtra', slug: 'maharashtra' },
  { name: 'Odisha', slug: 'odisha' },
  { name: 'Punjab', slug: 'punjab' },
  { name: 'Tamil Nadu', slug: 'tamil-nadu' },
  { name: 'Telangana', slug: 'telangana' },
  { name: 'West Bengal', slug: 'west-bengal' }
]

const nonApplicableStates = [
  'Central', 'Andaman and Nicobar Islands', 'Arunachal Pradesh', 'Assam',
  'Bihar', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Jharkhand', 'Ladakh', 'Lakshadweep',
  'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Puducherry', 'Rajasthan', 'Sikkim', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand'
]

const trendingSearches = [
  'LWF contribution rates 2024',
  'Maharashtra LWF forms',
  'Karnataka welfare fund',
  'Andhra Pradesh LWF rules',
  'Gujarat labour welfare',
  'Tamil Nadu contribution'
]

export default function WelfareFundPage() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Breadcrumb */}
      {/* <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/acts" className="text-gray-500 hover:text-gray-700">Labour, Employment & Industrial</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Labour Welfare Fund</span>
          </nav>
        </div>
      </div> */}
   <PopularSearchBoxes className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" />
      {/* Search Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search Act, Rules, etc..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
            <Button className="bg-black text-white hover:bg-gray-800">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      {/* <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Trending Searches in Labour Welfare Fund</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {trendingSearches.map((search, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {search}
              </Badge>
            ))}
          </div>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Labour Welfare Fund</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              "Labour Welfare Fund" (LWF) is statutory endowment contributed by Employer, Employee and by the Government (in some states) to improve the working conditions, to provide social security and to raise the living standards of Laborers and Workers in unorganized sectors. The quantum and periodicity of contribution is fixed by respective State Labour Welfare Board. This page will show the exact quantum, state wise.
            </p>
          </div>

          {/* What is Labour Welfare Fund */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">What is Labour Welfare Fund?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Labour welfare is an aid in the form of money or necessities for those in need. It provides facilities to labourers in order to improve their working conditions, provide social security, and raise their standard of living.
              </p>
              <p className="text-gray-700">
                To justify the above statement, various state legislatures have enacted an Act exclusively focusing on welfare of the workers, known as the Labour Welfare Fund Act. The Labour Welfare Fund Act incorporates various services, benefits and facilities offered to the employees by the employer. Such facilities are offered by the means of contribution from the employer and the employee. However, the rate of contribution may differ from one state to another.
              </p>
            </CardContent>
          </Card>

          {/* Scope of Labour Welfare Fund Act */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Scope of Labour Welfare Fund Act</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The scope of this Act is extended to housing, family care & worker's health service by providing medical examination, clinic for general treatment, infant welfare, women's general education, workers activity facilities, marriage, education, funeral etc. State specific Labour Welfare Funds are funded by contributions from the employer, employee and in few states, the government also.
              </p>
            </CardContent>
          </Card>

          {/* Applicability of the Act */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Applicability of the Act</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                In order to provide social security to workers, the government has introduced the Labour Welfare Fund Act. This act has been implemented only in 16 states out of 37 states including union territories.
              </p>
              <p className="text-gray-700 font-medium">
                The below table depicts the states in which the Act has been implemented and not implemented:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Applicable States */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
                  <div className="grid gap-2">
                    {applicableStates.map((state, index) => (
                      <Link
                        key={state.slug}
                        href={`/welfare-fund/${state.slug}`}
                        className="flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                      >
                        <span className="text-blue-700 font-medium">
                          {index + 1}. {state.name}
                        </span>
                        <ExternalLink className="h-4 w-4 text-blue-600" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Non-Applicable States */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Applicable States</h3>
                  <div className="grid gap-2">
                    {nonApplicableStates.map((state, index) => (
                      <div
                        key={state}
                        className="flex items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="text-gray-600">
                          {index + 1}. {state}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Employee Coverage & Applicability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                The Labour Welfare Fund Act is not applicable to all category of employees working in the establishment. It depends upon the wages earned and designation of the employee. Also, one needs to check the total number of employees working before extending this Act to their establishment. The applicability of the Act based on wages and number of employees may differ from state to state.
              </p>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Download className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Download Forms</h3>
                <p className="text-sm text-gray-600 mb-4">Access state-wise LWF forms and documents</p>
                <Button variant="outline" size="sm">
                  View Forms
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">State-wise Rates</h3>
                <p className="text-sm text-gray-600 mb-4">Check contribution rates for your state</p>
                <Button variant="outline" size="sm">
                  View Rates
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <ExternalLink className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Official Websites</h3>
                <p className="text-sm text-gray-600 mb-4">Visit state labour department websites</p>
                <Button variant="outline" size="sm">
                  Visit Sites
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

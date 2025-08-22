import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Search, Download, ExternalLink, FileText, Calculator, Globe, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

interface StateData {
  name: string
  slug: string
  act: string
  rule: string
  applicability: string
  frequency: string
  form: string
  website: string
  lastUpdated: string
  slabs: Array<{
    range: string
    monthlyTax: string
    annualTax: string
    remarks: string
  }>
  employmentCategories: Array<{
    category: string
    description: string
    applicableRate: string
    remarks: string
  }>
}

const statesData: Record<string, StateData> = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    act: 'Andhra Pradesh Tax on Professions, Trades, Callings and Employments Act, 1987',
    rule: 'Andhra Pradesh Tax on Professions, Trades, Callings and Employments Rules, 1988',
    applicability: 'All persons earning income through employment, profession, or calling',
    frequency: 'Monthly',
    form: 'Form PT-1, PT-2, PT-3',
    website: 'https://webland.ap.gov.in',
    lastUpdated: '15th November, 2024',
    slabs: [
      { range: 'Up to ₹15,000', monthlyTax: 'Nil', annualTax: 'Nil', remarks: 'Exempted' },
      { range: '₹15,001 - ₹20,000', monthlyTax: '₹80', annualTax: '₹960', remarks: 'Standard rate' },
      { range: '₹20,001 - ₹25,000', monthlyTax: '₹150', annualTax: '₹1,800', remarks: 'Standard rate' },
      { range: '₹25,001 - ₹40,000', monthlyTax: '₹200', annualTax: '₹2,400', remarks: 'Standard rate' },
      { range: 'Above ₹40,000', monthlyTax: '₹208', annualTax: '₹2,500', remarks: 'Maximum limit' }
    ],
    employmentCategories: [
      {
        category: 'Government Employees',
        description: 'All state and central government employees',
        applicableRate: 'As per salary slab',
        remarks: 'Deducted at source'
      },
      {
        category: 'Private Employees',
        description: 'Employees in private companies and establishments',
        applicableRate: 'As per salary slab',
        remarks: 'Employer responsibility'
      },
      {
        category: 'Professionals',
        description: 'Doctors, lawyers, chartered accountants, etc.',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Self-assessment'
      },
      {
        category: 'Company Directors',
        description: 'Directors of companies registered in AP',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Company deduction'
      }
    ]
  },
  'maharashtra': {
    name: 'Maharashtra',
    slug: 'maharashtra',
    act: 'Maharashtra Tax on Professions, Trades, Callings and Employments Act, 1975',
    rule: 'Maharashtra Tax on Professions, Trades, Callings and Employments Rules, 1975',
    applicability: 'All persons earning income through employment, profession, or calling',
    frequency: 'Monthly',
    form: 'Form 1, Form 2, Form 3',
    website: 'https://mahakosh.gov.in',
    lastUpdated: '10th December, 2024',
    slabs: [
      { range: 'Up to ₹21,000', monthlyTax: 'Nil', annualTax: 'Nil', remarks: 'Exempted' },
      { range: '₹21,001 - ₹25,000', monthlyTax: '₹175', annualTax: '₹2,100', remarks: 'Standard rate' },
      { range: '₹25,001 - ₹40,000', monthlyTax: '₹200', annualTax: '₹2,400', remarks: 'Standard rate' },
      { range: 'Above ₹40,000', monthlyTax: '₹208', annualTax: '₹2,500', remarks: 'Maximum limit' }
    ],
    employmentCategories: [
      {
        category: 'Salaried Employees',
        description: 'All employees receiving salary or wages',
        applicableRate: 'As per salary slab',
        remarks: 'Monthly deduction'
      },
      {
        category: 'Professionals',
        description: 'Independent professionals and consultants',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Quarterly payment'
      },
      {
        category: 'Partnership Firms',
        description: 'Partners in registered firms',
        applicableRate: 'Fixed ₹2,500 per partner',
        remarks: 'Firm responsibility'
      },
      {
        category: 'Company Directors',
        description: 'Directors and managing directors',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Company deduction'
      }
    ]
  },
  'karnataka': {
    name: 'Karnataka',
    slug: 'karnataka',
    act: 'Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976',
    rule: 'Karnataka Tax on Professions, Trades, Callings and Employments Rules, 1976',
    applicability: 'All persons earning income through employment, profession, or calling',
    frequency: 'Half-yearly',
    form: 'Form A, Form B, Form C',
    website: 'https://karnatakaone.gov.in',
    lastUpdated: '5th January, 2025',
    slabs: [
      { range: 'Up to ₹15,000', monthlyTax: 'Nil', annualTax: 'Nil', remarks: 'Exempted' },
      { range: '₹15,001 - ₹25,000', monthlyTax: '₹100', annualTax: '₹1,200', remarks: 'Standard rate' },
      { range: '₹25,001 - ₹40,000', monthlyTax: '₹150', annualTax: '₹1,800', remarks: 'Standard rate' },
      { range: '₹40,001 - ₹60,000', monthlyTax: '₹200', annualTax: '₹2,400', remarks: 'Standard rate' },
      { range: 'Above ₹60,000', monthlyTax: '₹208', annualTax: '₹2,500', remarks: 'Maximum limit' }
    ],
    employmentCategories: [
      {
        category: 'IT Employees',
        description: 'Employees in IT and software companies',
        applicableRate: 'As per salary slab',
        remarks: 'Monthly deduction'
      },
      {
        category: 'Manufacturing Workers',
        description: 'Workers in manufacturing industries',
        applicableRate: 'As per salary slab',
        remarks: 'Employer deduction'
      },
      {
        category: 'Professionals',
        description: 'Doctors, engineers, architects, etc.',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Half-yearly payment'
      },
      {
        category: 'Traders',
        description: 'Business owners and traders',
        applicableRate: 'Fixed ₹2,500 annually',
        remarks: 'Self-assessment'
      }
    ]
  }
}

const applicableStates = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh', available: true },
  { name: 'Assam', slug: 'assam', available: false },
  { name: 'Bihar', slug: 'bihar', available: false },
  { name: 'Chhattisgarh', slug: 'chhattisgarh', available: false },
  { name: 'Gujarat', slug: 'gujarat', available: false },
  { name: 'Jharkhand', slug: 'jharkhand', available: false },
  { name: 'Karnataka', slug: 'karnataka', available: true },
  { name: 'Kerala', slug: 'kerala', available: false },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh', available: false },
  { name: 'Maharashtra', slug: 'maharashtra', available: true },
  { name: 'Meghalaya', slug: 'meghalaya', available: false },
  { name: 'Odisha', slug: 'odisha', available: false },
  { name: 'Sikkim', slug: 'sikkim', available: false },
  { name: 'Tamil Nadu', slug: 'tamil-nadu', available: false },
  { name: 'Telangana', slug: 'telangana', available: false },
  { name: 'Tripura', slug: 'tripura', available: false },
  { name: 'West Bengal', slug: 'west-bengal', available: false }
]

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateData = statesData[params.state]
  
  if (!stateData) {
    return {
      title: 'State Not Found | Professional Tax',
      description: 'The requested state professional tax information is not available.'
    }
  }

  return {
    title: `${stateData.name} Professional Tax - Rates, Slabs & Forms | E-Library`,
    description: `Complete guide to ${stateData.name} Professional Tax rates, slabs, forms, and compliance requirements. Updated PT information for ${stateData.name}.`,
    keywords: `${stateData.name} professional tax, PT rates ${stateData.name}, professional tax slabs, PT forms ${stateData.name}`
  }
}

export default function StateProfessionalTaxPage({ params }: { params: { state: string } }) {
  const stateData = statesData[params.state]
  
  if (!stateData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Select State</CardTitle>
                <CardDescription>Updated As On: {stateData.lastUpdated}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {applicableStates.map((state) => (
                    <Link
                      key={state.slug}
                      href={state.available ? `/professional-tax/${state.slug}` : '#'}
                      className={`block p-3 rounded-lg transition-colors ${
                        state.slug === params.state
                          ? 'bg-orange-100 text-orange-900 border border-orange-200'
                          : state.available
                          ? 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{state.name}</span>
                        {state.available ? (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            Available
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-gray-100 text-gray-600 text-xs">
                            Soon
                          </Badge>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Professional Tax</h1>
              <h2 className="text-xl text-gray-700">{stateData.name}</h2>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">PT Calculator</h3>
                  <Button variant="outline" size="sm">Calculate</Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">Download Forms</h3>
                  <Button variant="outline" size="sm">Download</Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Globe className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">Official Portal</h3>
                  <Button variant="outline" size="sm">Visit</Button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Bell className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">Notifications</h3>
                  <Button variant="outline" size="sm">View</Button>
                </CardContent>
              </Card>
            </div>

            {/* Act Information */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Act Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Act</TableHead>
                      <TableHead>Rule</TableHead>
                      <TableHead>Applicability</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Form</TableHead>
                      <TableHead>Website</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">{stateData.act}</TableCell>
                      <TableCell>{stateData.rule}</TableCell>
                      <TableCell>{stateData.applicability}</TableCell>
                      <TableCell>{stateData.frequency}</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                          <Download className="w-4 h-4 mr-1" />
                          {stateData.form}
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="link" size="sm" className="p-0 h-auto text-blue-600">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Official Site
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Professional Tax Slabs */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Professional Tax Slabs</CardTitle>
                <CardDescription>
                  Monthly and annual professional tax rates for {stateData.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Income Range (Monthly)</TableHead>
                      <TableHead>Monthly Tax</TableHead>
                      <TableHead>Annual Tax</TableHead>
                      <TableHead>Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stateData.slabs.map((slab, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{slab.range}</TableCell>
                        <TableCell>{slab.monthlyTax}</TableCell>
                        <TableCell>{slab.annualTax}</TableCell>
                        <TableCell>{slab.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Employment Categories */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Employment Categories</CardTitle>
                <CardDescription>
                  Professional tax applicability for different employment categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Category</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Applicable Rate</TableHead>
                      <TableHead>Remarks</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {stateData.employmentCategories.map((category, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{category.category}</TableCell>
                        <TableCell>{category.description}</TableCell>
                        <TableCell>{category.applicableRate}</TableCell>
                        <TableCell>{category.remarks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
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
                      Professional Tax is deducted from salary on monthly basis and remitted to the state government.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Employers must register for Professional Tax and obtain a registration certificate.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Late payment of Professional Tax may attract penalty and interest charges.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Professional Tax rates and slabs are subject to change based on state government notifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

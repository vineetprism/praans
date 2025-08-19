import { Metadata } from 'next'
import { Calendar, MapPin, Building2, Clock, Download, ChevronRight, Home, Search, Mic, FileText, Users, Shield, BookOpen, Bell, Briefcase, Scale, FileCheck, Building, Heart, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'

// State-specific NFH data
const stateNFHData: Record<string, any> = {
  'andaman-nicobar': {
    name: 'Andaman And Nicobar Islands',
    act: 'The Andaman And Nicobar Islands Shops And Establishments Regulation, 2004',
    applicability: {
      factory: 'No',
      shops: 'Yes', 
      plantation: 'No'
    },
    eligibleWages: 'There is no Statutory requirements',
    nationalHolidays: {
      count: 3,
      list: [
        '26th January (Republic Day)',
        '15th August (Independence Day)', 
        '2nd October (Gandhi Jayanti)'
      ]
    },
    festivalHolidays: {
      count: 5,
      details: 'Will be specified in the notification'
    },
    totalHolidays: 8,
    compensationProvision: 'To be provided with either Compensatory holiday or double the ordinary rate of wages in lieu of such holiday if he is required to work on such comp off',
    timeLimit: 'within thirty days from the date of such holiday',
    noticeRequirement: 'Not Required',
    otherForms: '-',
    penalConsequences: 'Punishable with fine which may be extended upto Rs. 500/-. For subsequent offence, he shall be punishable with imprisonment upto 3 months or fine upto Rs. 1000/- or with both - Regulation 26',
    lastUpdated: '2024-12-15'
  },
  'delhi': {
    name: 'Delhi',
    act: 'The Delhi Shops and Establishments Act, 1954',
    applicability: {
      factory: 'No',
      shops: 'Yes',
      plantation: 'No'
    },
    eligibleWages: 'All employees working in shops and establishments',
    nationalHolidays: {
      count: 3,
      list: [
        '26th January (Republic Day)',
        '15th August (Independence Day)',
        '2nd October (Gandhi Jayanti)'
      ]
    },
    festivalHolidays: {
      count: 7,
      details: 'Diwali, Holi, Dussehra, Eid ul-Fitr, Eid ul-Adha, Christmas, Good Friday'
    },
    totalHolidays: 10,
    compensationProvision: 'Double wages or compensatory off within 30 days',
    timeLimit: 'within thirty days from the date of such holiday',
    noticeRequirement: 'Prior approval from Labour Inspector required',
    otherForms: 'Form A - Application for permission to work on holidays',
    penalConsequences: 'Fine up to Rs. 2000/- for first offence, Rs. 5000/- for subsequent offences',
    lastUpdated: '2024-12-10'
  },
  'maharashtra': {
    name: 'Maharashtra',
    act: 'The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017',
    applicability: {
      factory: 'No',
      shops: 'Yes',
      plantation: 'Yes'
    },
    eligibleWages: 'All employees in shops, establishments, and commercial establishments',
    nationalHolidays: {
      count: 3,
      list: [
        '26th January (Republic Day)',
        '15th August (Independence Day)',
        '2nd October (Gandhi Jayanti)'
      ]
    },
    festivalHolidays: {
      count: 8,
      details: 'Gudi Padwa, Ganesh Chaturthi, Diwali, Holi, Dussehra, Eid ul-Fitr, Eid ul-Adha, Christmas'
    },
    totalHolidays: 11,
    compensationProvision: 'Compensatory holiday within 30 days or wages at double the ordinary rate',
    timeLimit: 'within thirty days from the date of such holiday',
    noticeRequirement: 'Prior permission from competent authority',
    otherForms: 'Online application through Maharashtra Labour Department portal',
    penalConsequences: 'Fine up to Rs. 25,000/- and imprisonment up to 3 months for willful violation',
    lastUpdated: '2024-12-08'
  },
  'karnataka': {
    name: 'Karnataka',
    act: 'The Karnataka Shops and Commercial Establishments Act, 1961',
    applicability: {
      factory: 'No',
      shops: 'Yes',
      plantation: 'No'
    },
    eligibleWages: 'Employees in shops and commercial establishments',
    nationalHolidays: {
      count: 3,
      list: [
        '26th January (Republic Day)',
        '15th August (Independence Day)',
        '2nd October (Gandhi Jayanti)'
      ]
    },
    festivalHolidays: {
      count: 6,
      details: 'Ugadi, Dussehra, Diwali, Eid ul-Fitr, Eid ul-Adha, Christmas'
    },
    totalHolidays: 9,
    compensationProvision: 'Compensatory leave or double wages as per employee choice',
    timeLimit: 'within one month from the date of such holiday',
    noticeRequirement: 'Written notice to Labour Inspector 7 days in advance',
    otherForms: 'Form VII - Notice for working on holidays',
    penalConsequences: 'Fine up to Rs. 10,000/- for first offence, up to Rs. 20,000/- for subsequent offences',
    lastUpdated: '2024-12-05'
  }
}

// All Indian states and UTs for the sidebar
const allStatesUTs = [
  { id: 'andaman-nicobar', name: 'Andaman & Nicobar Islands', available: true },
  { id: 'andhra-pradesh', name: 'Andhra Pradesh', available: false },
  { id: 'arunachal-pradesh', name: 'Arunachal Pradesh', available: false },
  { id: 'assam', name: 'Assam', available: false },
  { id: 'bihar', name: 'Bihar', available: false },
  { id: 'chandigarh', name: 'Chandigarh', available: false },
  { id: 'chhattisgarh', name: 'Chhattisgarh', available: false },
  { id: 'dadra-nagar-haveli', name: 'Dadra & Nagar Haveli', available: false },
  { id: 'daman-diu', name: 'Daman & Diu', available: false },
  { id: 'delhi', name: 'Delhi', available: true },
  { id: 'goa', name: 'Goa', available: false },
  { id: 'gujarat', name: 'Gujarat', available: false },
  { id: 'haryana', name: 'Haryana', available: false },
  { id: 'himachal-pradesh', name: 'Himachal Pradesh', available: false },
  { id: 'jammu-kashmir', name: 'Jammu & Kashmir', available: false },
  { id: 'jharkhand', name: 'Jharkhand', available: false },
  { id: 'karnataka', name: 'Karnataka', available: true },
  { id: 'kerala', name: 'Kerala', available: false },
  { id: 'ladakh', name: 'Ladakh', available: false },
  { id: 'lakshadweep', name: 'Lakshadweep', available: false },
  { id: 'madhya-pradesh', name: 'Madhya Pradesh', available: false },
  { id: 'maharashtra', name: 'Maharashtra', available: true },
  { id: 'manipur', name: 'Manipur', available: false },
  { id: 'meghalaya', name: 'Meghalaya', available: false },
  { id: 'mizoram', name: 'Mizoram', available: false },
  { id: 'nagaland', name: 'Nagaland', available: false },
  { id: 'odisha', name: 'Odisha', available: false },
  { id: 'puducherry', name: 'Puducherry', available: false },
  { id: 'punjab', name: 'Punjab', available: false },
  { id: 'rajasthan', name: 'Rajasthan', available: false },
  { id: 'sikkim', name: 'Sikkim', available: false },
  { id: 'tamil-nadu', name: 'Tamil Nadu', available: false },
  { id: 'telangana', name: 'Telangana', available: false },
  { id: 'tripura', name: 'Tripura', available: false },
  { id: 'uttar-pradesh', name: 'Uttar Pradesh', available: false },
  { id: 'uttarakhand', name: 'Uttarakhand', available: false },
  { id: 'west-bengal', name: 'West Bengal', available: false }
]

interface PageProps {
  params: {
    state: string
  }
}

export async function generateStaticParams() {
  const availableStates = ['andaman-nicobar', 'delhi', 'maharashtra', 'karnataka']
  
  return availableStates.map((state) => ({
    state: state,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const stateData = stateNFHData[params.state]
  
  if (!stateData) {
    return {
      title: 'State Not Found | National Festival Holidays',
      description: 'The requested state information is not available.'
    }
  }

  return {
    title: `${stateData.name} - National Festival Holiday Details | E-Library`,
    description: `Complete NFH details for ${stateData.name} including national holidays, festival holidays, compensation provisions, and compliance requirements.`,
    keywords: `${stateData.name} holidays, NFH details, national festival holidays, ${stateData.name} labour law, shops establishments act`
  }
}

export default function StateNFHDetailsPage({ params }: PageProps) {
  const stateData = stateNFHData[params.state]
  
  if (!stateData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">State Not Found</h1>
          <p className="text-gray-600 mb-4">The requested state information is not available.</p>
          <Link href="/national-festival-holidays">
            <Button>Back to Holidays</Button>
          </Link>
        </div>
      </div>
    )
  }

  const currentState = allStatesUTs.find(s => s.id === params.state)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Pragans Consultech" 
                  width={180} 
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">Acts</Link>
              <Link href="/minimum-wages" className="text-gray-600 hover:text-orange-500 transition-colors">Wages</Link>
              <Link href="/forms" className="text-gray-600 hover:text-orange-500 transition-colors">Forms</Link>
              <Link href="/gazette" className="text-gray-600 hover:text-orange-500 transition-colors">Notifications</Link>
              <Link href="/national-festival-holidays" className="text-orange-500 font-medium">Festivals</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Statutory Resources</h2>
            
            <nav className="space-y-2">
              <Link href="/acts" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <BookOpen className="h-5 w-5 mr-3 text-purple-600" />
                Labour codes
              </Link>
              <Link href="/acts" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Scale className="h-5 w-5 mr-3 text-blue-600" />
                Acts
              </Link>
              <Link href="/rules" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FileText className="h-5 w-5 mr-3 text-green-600" />
                Rules
              </Link>
              <Link href="/#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Heart className="h-5 w-5 mr-3 text-pink-600" />
                Schemes
              </Link>
              <Link href="/#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Building className="h-5 w-5 mr-3 text-indigo-600" />
                Regulations
              </Link>
              <Link href="/gazette" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5 mr-3 text-yellow-600" />
                Gazette Notifications
              </Link>
              <Link href="/forms" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <FileCheck className="h-5 w-5 mr-3 text-orange-600" />
                Forms
              </Link>
              <Link href="/welfare-fund" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Users className="h-5 w-5 mr-3 text-teal-600" />
                Labour Welfare Fund
              </Link>
              <Link href="/leaves-working-hours" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Clock className="h-5 w-5 mr-3 text-red-600" />
                Leaves & Working Hours
              </Link>
              <Link href="/national-festival-holidays" className="flex items-center px-3 py-2 bg-purple-50 text-purple-700 rounded-lg">
                <Calendar className="h-5 w-5 mr-3 text-purple-600" />
                Holidays
              </Link>
              <Link href="/national-festival-holidays" className="flex items-center px-3 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium">
                <Globe className="h-5 w-5 mr-3 text-purple-700" />
                NFH Details
              </Link>
              <Link href="/professional-tax" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <Briefcase className="h-5 w-5 mr-3 text-cyan-600" />
                Professional Tax
              </Link>
            </nav>

            <Separator className="my-6" />

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Resources</h3>
              <nav className="space-y-2">
                <Link href="/#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Scale className="h-5 w-5 mr-3 text-gray-500" />
                  Case Laws
                </Link>
                <Link href="/#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <BookOpen className="h-5 w-5 mr-3 text-gray-500" />
                  Legal Maxims
                </Link>
                <Link href="/minimum-wages" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Building2 className="h-5 w-5 mr-3 text-gray-500" />
                  Minimum Wages
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Home className="h-4 w-4" />
              <ChevronRight className="h-4 w-4" />
              <FileText className="h-4 w-4" />
              <span>Labour, Employment & Industrial</span>
              <ChevronRight className="h-4 w-4" />
              <Calendar className="h-4 w-4" />
              <span>NFH Details</span>
              <ChevronRight className="h-4 w-4" />
              <Users className="h-4 w-4" />
              <span>{stateData.name}</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search Act, Rules, etc..."
                  className="pl-10 pr-12 h-12 text-base"
                />
                <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Trending Searches */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Trending Searches in NFH Details</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Page Header */}
          <div className="bg-white px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-900">NFH Details</h1>
              <Select value={params.state}>
                <SelectTrigger className="w-80">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {allStatesUTs.map((state) => (
                    <SelectItem 
                      key={state.id} 
                      value={state.id}
                      disabled={!state.available}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{state.name}</span>
                        {!state.available && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {stateData.name} - National Festival Holiday Matrix
              </h2>
            </div>

            {/* NFH Details Table */}
            <div className="space-y-6">
              {/* Act Information */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Act</div>
                    <div className="p-4 text-gray-700">{stateData.act}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Applicability */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Applicability to</div>
                    <div className="p-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Factory</div>
                          <Badge variant={stateData.applicability.factory === 'Yes' ? 'default' : 'secondary'}>
                            {stateData.applicability.factory}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Shops</div>
                          <Badge variant={stateData.applicability.shops === 'Yes' ? 'default' : 'secondary'}>
                            {stateData.applicability.shops}
                          </Badge>
                        </div>
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Plantation</div>
                          <Badge variant={stateData.applicability.plantation === 'Yes' ? 'default' : 'secondary'}>
                            {stateData.applicability.plantation}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Eligible to avail wages */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Eligible to avail wages on NH&FH</div>
                    <div className="p-4 text-gray-700">{stateData.eligibleWages}</div>
                  </div>
                </CardContent>
              </Card>

              {/* National Holidays */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">List of National Holidays</div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="text-2xl font-bold text-gray-900 mr-4">
                          {stateData.nationalHolidays.count}
                        </div>
                        <div className="flex-1">
                          <ul className="space-y-1">
                            {stateData.nationalHolidays.list.map((holiday: string, index: number) => (
                              <li key={index} className="text-gray-700 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                {holiday}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Festival Holidays */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Festival Holidays</div>
                    <div className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="text-2xl font-bold text-gray-900 mr-4">
                          {stateData.festivalHolidays.count}
                        </div>
                        <div className="flex-1">
                          <div className="text-gray-700 flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                            {stateData.festivalHolidays.details}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Holidays */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Total Number of National & Festival Holidays in a year</div>
                    <div className="p-4">
                      <div className="text-2xl font-bold text-gray-900">
                        {stateData.totalHolidays}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compensation Provision */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Provision if worked on NH/FH (Double the Wages/ Comp off)</div>
                    <div className="p-4 text-gray-700">{stateData.compensationProvision}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Time Limit */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Time Limit to Avail the Comp Off</div>
                    <div className="p-4 text-gray-700">{stateData.timeLimit}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Notice Requirement */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Notice to Labour Inspector in case of working on Holidays</div>
                    <div className="p-4 text-gray-700">{stateData.noticeRequirement}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Other Forms */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Any other Forms to be maintained/submitted</div>
                    <div className="p-4 text-gray-700">{stateData.otherForms}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Penal Consequences */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Penal Consequences</div>
                    <div className="p-4 text-gray-700">{stateData.penalConsequences}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Act Document */}
              <Card>
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x divide-gray-200">
                    <div className="p-4 bg-gray-50 font-medium text-gray-900">Act Document</div>
                    <div className="p-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Last Updated */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Last updated: {stateData.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Pragans Consultech" 
                  width={160} 
                  height={35}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for compliance and labor law resources.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/acts" className="hover:text-white transition-colors">Acts</Link></li>
                <li><Link href="/minimum-wages" className="hover:text-white transition-colors">Minimum Wages</Link></li>
                <li><Link href="/forms" className="hover:text-white transition-colors">Forms</Link></li>
                <li><Link href="/gazette" className="hover:text-white transition-colors">Notifications</Link></li>
                <li><Link href="/national-festival-holidays" className="hover:text-white transition-colors">Holidays</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/#" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="/#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Get the latest compliance updates</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex justify-between items-center">
            <p className="text-gray-400">&copy; 2025, Aparajitha. All Rights Reserved.</p>
            <div className="flex space-x-6 text-gray-400">
              <Link href="/#" className="hover:text-white transition-colors">CSR Policy</Link>
              <Link href="/#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/#" className="hover:text-white transition-colors">Terms and Conditions</Link>
              <Link href="/#" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

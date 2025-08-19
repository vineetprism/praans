import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, Download, ExternalLink, Clock, Calendar, Users, FileText, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leave & Working Hours - Labour Laws & Regulations | E-Library',
  description: 'Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.',
  keywords: 'leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act'
}

const applicableStates = [
  'Andhra Pradesh', 'Chandigarh', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat',
  'Haryana', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Odisha',
  'Punjab', 'Tamil Nadu', 'Telangana', 'West Bengal'
]

const nonApplicableStates = [
  'Central', 'Andaman and Nicobar Islands', 'Arunachal Pradesh', 'Assam',
  'Bihar', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Jharkhand', 'Ladakh', 'Lakshadweep', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Puducherry', 'Rajasthan', 'Sikkim',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand'
]

const trendingSearches = [
  'Annual Leave Calculation',
  'Overtime Rules',
  'Weekly Off Policy',
  'Maternity Leave',
  'Sick Leave Entitlement',
  'Working Hours Limit',
  'Night Shift Regulations',
  'Compensatory Off',
  'Leave Encashment',
  'Public Holiday Rules'
]

const quickActions = [
  {
    title: 'Leave Policy Templates',
    description: 'Download standard leave policy templates',
    icon: FileText,
    action: 'Download Forms',
    link: '/forms'
  },
  {
    title: 'Working Hours Calculator',
    description: 'Calculate overtime and working hours',
    icon: Clock,
    action: 'Use Calculator',
    link: '/calculators'
  },
  {
    title: 'State-wise Regulations',
    description: 'View state-specific leave rules',
    icon: Users,
    action: 'Browse States',
    link: '#states'
  },
  {
    title: 'Official Notifications',
    description: 'Latest updates and amendments',
    icon: ExternalLink,
    action: 'View Updates',
    link: '/gazette'
  }
]

export default function LeavesWorkingHoursPage() {
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
          <Link href="#" className="hover:text-gray-900">Labour, Employment & Industrial</Link>
          <span>/</span>
          <span className="text-gray-900">Leave & Working Hours</span>
        </nav>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search Act, Rules, etc..."
              className="pl-10 pr-12 py-3 text-lg"
            />
            <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trending Searches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Trending Searches in Leave & Working Hours</h3>
            <ChevronDown className="h-5 w-5 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((search, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Statutory Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/labour-codes" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Labour codes</span>
                </Link>
                <Link href="/acts" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Acts</span>
                </Link>
                <Link href="/rules" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Rules</span>
                </Link>
                <Link href="/schemes" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Schemes</span>
                </Link>
                <Link href="/regulations" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Regulations</span>
                </Link>
                <Link href="/gazette" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Gazette Notifications</span>
                </Link>
                <Link href="/forms" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Forms</span>
                </Link>
                <Link href="/welfare-fund" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <span>Labour Welfare Fund</span>
                </Link>
                <Link href="/leaves-working-hours" className="flex items-center space-x-3 p-2 rounded bg-blue-50 text-blue-600">
                  <Clock className="h-5 w-5" />
                  <span>Leaves & Working Hours</span>
                </Link>
                <Link href="/holidays" className="flex items-center space-x-3 p-2 rounded hover:bg-gray-50">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <span>Holidays</span>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {/* Title */}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Leave & Working Hours</h1>
                <p className="text-lg text-gray-700 leading-relaxed">
                  "Statutory Leave" is a leave that ensures a healthy work-life balance of an employee and boosts his motivation levels. It significantly aims to 
                  enable the employees to take-off from work for reasonable causes without salary deductions enumerated as per Labour Codes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  "Working Hours" is the laboring time an employee is expected to work in exchange of pay. It obligates the employee to comply with the 
                  working hours of the company as a mandatory requirement of employment as enumerated by Labour Codes.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <action.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{action.description}</p>
                          <Link href={action.link}>
                            <Button size="sm" variant="outline">
                              {action.action}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Leave Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Leave</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    The Shops and Establishments Act is enacted by every state in India. The Act is designed to regulate the payment of wages, hours of work, 
                    an interval for rest, opening and closing hours, holidays, overtime work, annual leave, sick leave, casual leave, condition of the employment, etc.
                  </p>
                </CardContent>
              </Card>

              {/* Concept of Leaves */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Concept of Leaves</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Employees are entitled to a certain number of days of leave per year aside from the holidays and days off. Generally, three types of leave 
                    are mentioned under the Shops and Establishments Act i.e., Privilege leave, Sick leave and Casual leave. This varies from state to state. So, 
                    the number of leave entitled to an employee depends upon the state in which the establishment is located. The leave policy of an 
                    establishment should align with the leave provision of the respective state's Shops and Establishments Act. The said leave policy cannot be 
                    less beneficial than that mentioned by the respective state's Shops and Establishments Act.
                  </p>
                  <p className="text-gray-700">
                    Generally, the framework of the Act is similar throughout. However, the leave provision under the Act varies for every state.
                  </p>
                </CardContent>
              </Card>

              {/* Leave & Working Hours For States */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>Leave & Working Hours For States Across India</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">
                    The states in which leave & working hours are applicable are listed below:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
                      <div className="space-y-2">
                        {applicableStates.map((state, index) => (
                          <Link 
                            key={index} 
                            href={`/leaves-working-hours/${state.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block p-3 rounded-lg border hover:bg-blue-50 hover:border-blue-200 transition-colors"
                          >
                            <span className="text-blue-600 hover:text-blue-800">
                              {index + 1}. {state}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Non-Applicable States */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Applicable States</h3>
                      <div className="space-y-2">
                        {nonApplicableStates.map((state, index) => (
                          <div key={index} className="p-3 rounded-lg border bg-gray-50">
                            <span className="text-gray-600">
                              {index + 1}. {state}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Note:</strong> The Leave & Working Hours regulations are not applicable to all categories of employees working in the establishment. 
                      It depends upon the wages earned and designation of the employee. Also, one needs to check the total number of employees working before 
                      extending this Act to their establishment. The applicability of the Act based on the number of employees varies from state to state.
                    </p>
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
                <Input placeholder="Enter your email" className="bg-gray-800 border-gray-700" />
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

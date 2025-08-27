
import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Scale } from 'lucide-react'
import PopularSearch from '../PopularSearch/PopularSearch'

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


const categories = [
  "All Categories",
  "Leave Policy",
  "Working Hours",
  "Overtime Rules",
  "Weekly Off",
  "Public Holidays"
]

const states = ["All States", "Central", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Delhi", "West Bengal"]

export default function LeavesWorkingHoursPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Leave & Working Hours</h1>
                  <p className="text-gray-600 text-lg">
                    Comprehensive guide to statutory leave policies and working hours regulations across Indian states
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {applicableStates.length + nonApplicableStates.length} States Covered
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are Leave & Working Hours Regulations?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        "Statutory Leave" ensures a healthy work-life balance and boosts employee motivation levels.
                        "Working Hours" regulations define the laboring time an employee is expected to work in exchange
                        for pay as enumerated by Labour Codes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Leave Section */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">Leave</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The Shops and Establishments Act is enacted by every state in India. The Act is designed to regulate the payment of wages, hours of work,
                  an interval for rest, opening and closing hours, holidays, overtime work, annual leave, sick leave, casual leave, condition of the employment, etc.
                </p>
              </CardContent>
            </Card>

            {/* Concept of Leaves */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-orange-600 transition-colors">Concept of Leaves</CardTitle>
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
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="text-xl flex items-center space-x-2 group-hover:text-orange-600 transition-colors">
                  <Users className="h-5 w-5" />
                  <span>Leave & Working Hours For States Across India</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  The states in which leave & working hours are applicable are listed below:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
                    <div className="space-y-2">
                      {applicableStates.map((state, index) => (
                        <Link
                          key={index}
                          href={`/leaves-working-hours/${state.toLowerCase().replace(/\s+/g, '-')}`}
                          aria-label={`Go to ${state} leaves and working hours`}
                          className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors "
                        >
                          <span className="text-blue-600 hover:text-orange-600 transition-colors">
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
                          <span className="text-gray-600 ">
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

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                </CardHeader>
                <CardContent className="space-y-2">
                  <PopularSearch />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
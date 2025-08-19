import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, ExternalLink, FileText, Calendar } from 'lucide-react'
import { StatePicker } from "./components/state-picker"

// ------------------- DATA -------------------

interface StateData {
  name: string
  act: string
  rule: string
  applicability: string
  frequency: string
  form: string
  website: string
  lastUpdated: string
  contributions: {
    category: string
    employeeContribution: string
    employerContribution: string
    totalContribution: string
    dateOfDeduction: string
    lastDateForSubmission: string
    remarks: string
  }[]
}

const stateData: Record<string, StateData> = {
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
    rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
    applicability:
      "Any Employer/Establishment employing one or more employees/persons",
    frequency: "Yearly",
    form: "FORM F.xlsx",
    website:
      "http://labour.ap.gov.in/LabourViews/RecentAmendementNewActs.aspx",
    lastUpdated: "3rd Oct, 2024",
    contributions: [
      {
        category:
          "All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis",
        employeeContribution: "30.00",
        employerContribution: "70.00",
        totalContribution: "100.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
  "maharashtra": {
    name: "Maharashtra",
    act: "Maharashtra Labour Welfare Fund Act, 1953",
    rule: "The Maharashtra Labour Welfare Fund Rules, 1954",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Half Yearly",
    form: "FORM A.pdf",
    website: "https://mahakamgar.maharashtra.gov.in/",
    lastUpdated: "15th Sep, 2024",
    contributions: [
      {
        category: "All employees drawing wages up to Rs. 21,000 per month",
        employeeContribution: "42.00",
        employerContribution: "84.00",
        totalContribution: "126.00",
        dateOfDeduction: "30th June & 31st December",
        lastDateForSubmission: "31st July & 31st January",
        remarks: "Revised rates w.e.f. 1st April 2024",
      },
    ],
  },
  "karnataka": {
    name: "Karnataka",
    act: "Karnataka Labour Welfare Fund Act, 1965",
    rule: "The Karnataka Labour Welfare Fund Rules, 1966",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Half Yearly",
    form: "FORM LWF-1.pdf",
    website: "https://labour.karnataka.gov.in/",
    lastUpdated: "20th Aug, 2024",
    contributions: [
      {
        category: "All employees drawing wages up to Rs. 25,000 per month",
        employeeContribution: "20.00",
        employerContribution: "40.00",
        totalContribution: "60.00",
        dateOfDeduction: "30th June & 31st December",
        lastDateForSubmission: "15th July & 15th January",
        remarks: "Online filing mandatory",
      },
    ],
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    act: "Tamil Nadu Labour Welfare Fund Act, 1972",
    rule: "Tamil Nadu Labour Welfare Fund Rules, 1973",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Yearly",
    form: "LWF Form TN.pdf",
    website: "https://www.tn.gov.in/labour/",
    lastUpdated: "1st Oct, 2024",
    contributions: [
      {
        category: "All employees",
        employeeContribution: "20.00",
        employerContribution: "40.00",
        totalContribution: "60.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
  "west-bengal": {
    name: "West Bengal",
    act: "West Bengal Labour Welfare Fund Act, 1974",
    rule: "West Bengal Labour Welfare Fund Rules, 1976",
    applicability: "As notified",
    frequency: "Yearly",
    form: "WB-LWF.pdf",
    website: "https://wb.gov.in/",
    lastUpdated: "12th Jul, 2024",
    contributions: [
      {
        category: "All employees",
        employeeContribution: "10.00",
        employerContribution: "20.00",
        totalContribution: "30.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
}

const APPLICABLE = [
  "Andhra Pradesh",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Odisha",
  "Maharashtra",
  "Punjab",
  "Tamil Nadu",
  "Telangana",
  "West Bengal",
]

const NON_APPLICABLE = [
  "Andaman and Nicobar Islands",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Ladakh",
  "Lakshadweep",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Puducherry",
  "Rajasthan",
  "Sikkim",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
]

type PageProps = {
  params: { state: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = stateData[params.state]
  if (!data) {
    return { title: "State Not Found | Labour Welfare Fund" }
  }
  return {
    title: `${data.name} Labour Welfare Fund - Contribution Rates & Forms | E-Library`,
    description: `Complete guide to ${data.name} Labour Welfare Fund contribution rates, forms, compliance requirements and official information.`,
    keywords: `${data.name.toLowerCase()} labour welfare fund, LWF, contribution rates, forms, compliance`,
  }
}

// ------------------- PAGE -------------------

export default function StateWelfareFundPage({ params }: PageProps) {
  const data = stateData[params.state]
  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/logo.png" alt="E-Library" className="h-8 w-auto" />
                <span className="text-xl font-bold text-gray-900">E-Library</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/acts" className="text-gray-700 hover:text-blue-600">Acts</Link>
              <Link href="/rules" className="text-gray-700 hover:text-blue-600">Rules</Link>
              <Link href="/forms" className="text-gray-700 hover:text-blue-600">Forms</Link>
              <Link href="/calculators" className="text-gray-700 hover:text-blue-600">Calculators</Link>
              <Link href="/gazette" className="text-gray-700 hover:text-blue-600">Gazette</Link>
              <Link href="/holidays" className="text-gray-700 hover:text-blue-600">Holidays</Link>
              <Link href="/welfare-fund" className="text-blue-600 font-medium">Welfare Fund</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/welfare-fund" className="text-gray-500 hover:text-gray-700">Labour Welfare Fund</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{data.name}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with modern State Picker */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200 shadow-md">
              <CardHeader className="pb-0">
                <CardTitle className="text-base">Filters</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-6">
                <StatePicker
                  currentSlug={params.state}
                  availableStates={Object.keys(stateData)}
                  applicableStates={APPLICABLE}
                  nonApplicableStates={NON_APPLICABLE}
                />

                <div className="rounded-md bg-slate-50 p-3 text-xs text-slate-600">
                  <p className="font-medium">Updated As On:</p>
                  <p>{data.lastUpdated}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Labour Welfare Fund</h1>
              <h2 className="text-xl text-gray-700">{data.name}</h2>
            </div>

            {/* Act Details Table */}
            <Card className="rounded-xl shadow-sm">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
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
                        <td className="px-6 py-4 text-sm text-gray-900">{data.act}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{data.rule}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{data.applicability}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          <Badge variant="outline">{data.frequency}</Badge>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="link" size="sm" className="text-blue-600 p-0">
                            <FileText className="h-4 w-4 mr-1" />
                            {data.form}
                          </Button>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <Button variant="link" size="sm" className="text-blue-600 p-0">
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

            {/* Contribution Details */}
            <Card className="rounded-xl shadow-sm">
              <CardHeader className="bg-gray-100">
                <CardTitle className="text-center">Labour Welfare Fund Contribution</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Employee Contribution</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Employer Contribution</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total Contribution</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Date Of Deduction</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Last Date For Submission</th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.contributions.map((contribution, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">{contribution.category}</td>
                          <td className="px-4 py-4 text-sm text-center text-gray-900">{"₹"}{contribution.employeeContribution}</td>
                          <td className="px-4 py-4 text-sm text-center text-gray-900">{"₹"}{contribution.employerContribution}</td>
                          <td className="px-4 py-4 text-sm text-center font-medium text-gray-900">{"₹"}{contribution.totalContribution}</td>
                          <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.dateOfDeduction}</td>
                          <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.lastDateForSubmission}</td>
                          <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Download Form</h3>
                  <Button size="sm" className="w-full">
                    Download {data.form}
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <ExternalLink className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Official Website</h3>
                  <Button size="sm" variant="outline" className="w-full">
                    Visit Website
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Calendar className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-medium mb-2">Due Dates</h3>
                  <Button size="sm" variant="outline" className="w-full">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Contribution rates are subject to periodic revision by the state government.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Late submission may attract penalties as per state rules.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Employers must maintain proper records of contributions made.
                  </p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700">
                    Check official website for latest updates and notifications.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/logo.png" alt="E-Library" className="h-8 w-auto" />
                <span className="text-xl font-bold">E-Library</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your comprehensive resource for labour laws, compliance, and statutory requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/acts" className="text-gray-400 hover:text-white">Acts</Link></li>
                <li><Link href="/rules" className="text-gray-400 hover:text-white">Rules</Link></li>
                <li><Link href="/forms" className="text-gray-400 hover:text-white">Forms</Link></li>
                <li><Link href="/calculators" className="text-gray-400 hover:text-white">Calculators</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/gazette" className="text-gray-400 hover:text-white">Gazette Notifications</Link></li>
                <li><Link href="/holidays" className="text-gray-400 hover:text-white">Holiday List</Link></li>
                <li><Link href="/welfare-fund" className="text-gray-400 hover:text-white">Welfare Fund</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Stay updated with latest labour law changes</p>
              <div className="flex">
                <Input type="email" placeholder="Enter your email" className="bg-gray-800 border-gray-700 text-white placeholder-gray-400" />
                <Button className="ml-2 bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>{"\u00A9"} 2024 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({ state }))
}

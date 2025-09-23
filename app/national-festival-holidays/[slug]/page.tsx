"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Download, Search, Home, ChevronRight, Calendar, MapPin, FileText } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"
import PopularSearch from '@/app/PopularSearch/PopularSearch'

// Sample data - in real app this would come from API/database
const stateData: Record<string, {
  name: string;
  act: string;
  applicability: {
    factory: string;
    shops: string;
    plantation: string;
  };
  eligibleWages: string;
  nationalHolidays: {
    count: number;
    list: string[];
  };
  festivalHolidays: {
    count: number;
    details: string;
  };
  totalHolidays: number;
  provision: string;
  timeLimit: string;
  noticeRequired: string;
  otherForms: string;
  penalties: string;
}> = {
  "andaman-nicobar": {
    name: "Andaman and Nicobar Islands",
    act: "The Andaman And Nicobar Islands Shops And Establishments Regulation, 2004",
    applicability: {
      factory: "No",
      shops: "Yes",
      plantation: "No",
    },
    eligibleWages: "There is no Statutory requirements",
    nationalHolidays: {
      count: 3,
      list: ["26th January (Republic Day)", "15th August (Independence Day)", "2nd October (Gandhi Jayanti)"],
    },
    festivalHolidays: {
      count: 5,
      details: "Will be specified in the notification",
    },
    totalHolidays: 8,
    provision:
      "To be provided with either Compensatory holiday or double the ordinary rate of wages in lieu of such holiday if he is required to work on such comp off",
    timeLimit: "within thirty days from the date of such holiday",
    noticeRequired: "Not Required",
    otherForms: "-",
    penalties:
      "Punishable with fine which may be extended upto Rs. 500/-. For subsequent offence, he shall be punishable with imprisonment upto 3 months or fine upto Rs. 1000/- or with both - Regulation 26",
  },
}

export default function StateDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = stateData[slug] || stateData["andaman-nicobar"] // fallback to sample data

  const handleDownload = () => {
    // In real app, this would download the actual document
    console.log("Downloading document for", data.name)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Grid Layout with Sidebar */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                 <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">NFH Details :</h2>
                </div>
                <p className="px-3 py-1 text-orange-600 text-lg">
                  {data.name}
                </p>
              </div>
            </div>

            {/* Statistics Cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">National Holidays</p>
                      <p className="text-2xl font-bold text-gray-900">{data.nationalHolidays.count}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Festival Holidays</p>
                      <p className="text-2xl font-bold text-gray-900">{data.festivalHolidays.count}</p>
                    </div>
                    <MapPin className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Holidays</p>
                      <p className="text-2xl font-bold text-gray-900">{data.totalHolidays}</p>
                    </div>
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div> */}

            {/* Main Detail Card */}
            <Card className="border-l-4 border-l-orange-500">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle className="text-2xl text-gray-900">{data.name} - National Festival Holiday Matrix</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50 w-1/3">Act</td>
                        <td className="p-4 text-gray-700">{data.act}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Applicability to</td>
                        <td className="p-4">
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <div className="font-medium text-gray-900">Factory</div>
                              <Badge className={`mt-1 ${data.applicability.factory === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {data.applicability.factory}
                              </Badge>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Shops</div>
                              <Badge className={`mt-1 ${data.applicability.shops === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {data.applicability.shops}
                              </Badge>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Plantation</div>
                              <Badge className={`mt-1 ${data.applicability.plantation === 'Yes' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {data.applicability.plantation}
                              </Badge>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Eligible to avail wages on NH&FH</td>
                        <td className="p-4 text-gray-700">{data.eligibleWages}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">List of National Holidays</td>
                        <td className="p-4">
                          <div className="flex items-start gap-4">
                            <Badge className="bg-blue-100 text-blue-800 font-semibold">{data.nationalHolidays.count}</Badge>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                              {data.nationalHolidays.list.map((holiday, index) => (
                                <li key={index}>{holiday}</li>
                              ))}
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Festival Holidays</td>
                        <td className="p-4">
                          <div className="flex items-start gap-4">
                            <Badge className="bg-green-100 text-green-800 font-semibold">{data.festivalHolidays.count}</Badge>
                            <ul className="list-disc list-inside text-gray-700">
                              <li>{data.festivalHolidays.details}</li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">
                          Total Number of National & Festival Holidays in a year
                        </td>
                        <td className="p-4">
                          <Badge className="bg-purple-100 text-purple-800 font-semibold text-lg px-3 py-1">
                            {data.totalHolidays}
                          </Badge>
                        </td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">
                          Provision if worked on NH/FH (Double the Wages/Comp off)
                        </td>
                        <td className="p-4 text-gray-700">{data.provision}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Time Limit to Avail the Comp Off</td>
                        <td className="p-4 text-gray-700">{data.timeLimit}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">
                          Notice to Labour Inspector in case of working on Holidays
                        </td>
                        <td className="p-4 text-gray-700">{data.noticeRequired}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">
                          Any other Forms to be maintained/submitted
                        </td>
                        <td className="p-4 text-gray-700">{data.otherForms}</td>
                      </tr>

                      <tr className="border-b border-gray-200">
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Penal Consequences</td>
                        <td className="p-4 text-gray-700">{data.penalties}</td>
                      </tr>

                      <tr>
                        <td className="p-4 font-semibold text-gray-900 bg-gray-50">Act Document</td>
                        <td className="p-4">
                          <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Back Button */}
            {/* <div className="mt-8">
              <Button
                asChild
                variant="outline"
                aria-label="Back to Holidays Matrix"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Link href="/national-festival-holidays" aria-label="Back to Holidays Matrix">← Back to Holidays Matrix</Link>
              </Button>
            </div> */}
          </div>

          {/* Sidebar with Quick Access */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="space-y-6">
                <PopularSearch className="mt-4" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
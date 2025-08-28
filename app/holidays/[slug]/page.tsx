"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const holidayData = [
  {
    id: 1,
    name: "Makar Sankranti",
    month: "Jan",
    date: "14-01-2025",
    day: "Tuesday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 2, name: "Republic day", month: "Jan", date: "26-01-2025", day: "Sunday", type: "National", remarks: "NULL" },
  {
    id: 3,
    name: "Maha Shivratri",
    month: "Feb",
    date: "26-02-2025",
    day: "Wednesday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 4, name: "Holi", month: "Mar", date: "14-03-2025", day: "Friday", type: "Regional", remarks: "NULL" },
  { id: 5, name: "Good Friday", month: "Mar", date: "30-03-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 6,
    name: "Eid-Ul-Fitr (Ramzan)",
    month: "Mar",
    date: "31-03-2025",
    day: "Monday",
    type: "Regional",
    remarks: "NULL",
  },
  {
    id: 7,
    name: "Bank Closing Day",
    month: "Apr",
    date: "01-04-2025",
    day: "Tuesday",
    type: "Optional",
    remarks: "NULL",
  },
  { id: 8, name: "Srirama Navami", month: "Apr", date: "06-04-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 9,
    name: "Dr.B.R.Ambedkar's Birthday",
    month: "Apr",
    date: "14-04-2025",
    day: "Monday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 10, name: "Good Friday", month: "Apr", date: "18-04-2025", day: "Friday", type: "Regional", remarks: "NULL" },
  { id: 11, name: "May Day", month: "May", date: "01-05-2025", day: "Thursday", type: "National", remarks: "NULL" },
  {
    id: 12,
    name: "Bakrid (Eid-Ul-Zuha)",
    month: "Jun",
    date: "07-06-2025",
    day: "Saturday",
    type: "Regional",
    remarks: "NULL",
  },
  { id: 13, name: "Moharram", month: "Jul", date: "06-07-2025", day: "Sunday", type: "Regional", remarks: "NULL" },
  {
    id: 14,
    name: "Independence day",
    month: "Aug",
    date: "15-08-2025",
    day: "Friday",
    type: "National",
    remarks: "NULL",
  },
]

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]
const types = ["National", "Regional", "Optional"]

const stateData = {
  "andaman-nicobar": { name: "Andaman and Nicobar Islands" },
  "andhra-pradesh": { name: "Andhra Pradesh" },
  "arunachal-pradesh": { name: "Arunachal Pradesh" },
  assam: { name: "Assam" },
  bihar: { name: "Bihar" },
  chandigarh: { name: "Chandigarh" },
  chhattisgarh: { name: "Chhattisgarh" },
  delhi: { name: "Delhi" },
  goa: { name: "Goa" },
  gujarat: { name: "Gujarat" },
  haryana: { name: "Haryana" },
  "himachal-pradesh": { name: "Himachal Pradesh" },
  "jammu-kashmir": { name: "Jammu and Kashmir" },
  jharkhand: { name: "Jharkhand" },
  karnataka: { name: "Karnataka" },
  kerala: { name: "Kerala" },
  ladakh: { name: "Ladakh" },
  "madhya-pradesh": { name: "Madhya Pradesh" },
  maharashtra: { name: "Maharashtra" },
  manipur: { name: "Manipur" },
  meghalaya: { name: "Meghalaya" },
  mizoram: { name: "Mizoram" },
  nagaland: { name: "Nagaland" },
  odisha: { name: "Odisha" },
  puducherry: { name: "Puducherry" },
  punjab: { name: "Punjab" },
  "tamil-nadu": { name: "Tamil Nadu" },
  telangana: { name: "Telangana" },
  "uttar-pradesh": { name: "Uttar Pradesh" },
  uttarakhand: { name: "Uttarakhand" },
  "west-bengal": { name: "West Bengal" },
}

export default function StateDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const data = stateData[slug] || stateData["andhra-pradesh"]

  const [selectedMonth, setSelectedMonth] = useState("all")
  const [selectedType, setSelectedType] = useState("all")

  const filteredHolidays = holidayData.filter((holiday) => {
    const monthMatch =
      selectedMonth === "all" || holiday.month.toLowerCase() === selectedMonth.toLowerCase().slice(0, 3)
    const typeMatch = selectedType === "all" || holiday.type === selectedType
    return monthMatch && typeMatch
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Holidays</h1>
          <Select defaultValue={slug}>
            <SelectTrigger className="w-64 border-gray-300">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(stateData).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Content Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            List of National and Regional Holidays of {data.name} in 2025
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Team Simpliance is driven to enable Simple, Beautiful and Effective compliance for you always. You now have
            access to the most accurate state-wise holiday lists released by the Government gazettes. Lists of all
            holidays in the year 2025, which includes Government and National Holidays. You can plan your year-end
            returns and official 2025 holiday list now with ease.
          </p>

          <div className="flex justify-between items-center mb-6">
            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-48 border-gray-300">
                  <SelectValue placeholder="-- Select Month --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">-- Select Month --</SelectItem>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48 border-gray-300">
                  <SelectValue placeholder="-- Select Type --" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">-- Select Type --</SelectItem>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Info */}
            <div className="text-right text-sm text-gray-600">
              <div>Effective From: 2025-01-01</div>
              <div>Updated as on: 2025-08-28</div>
            </div>
          </div>
        </div>

        {/* Holidays Table */}
        <Card className="border border-gray-200">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-100 border-b border-gray-200">
                    <th className="p-4 text-left font-semibold text-gray-900">S.No</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Holidays ↕</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Month ↕</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Date ↕</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Day</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Type</th>
                    <th className="p-4 text-left font-semibold text-gray-900">Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHolidays.map((holiday, index) => (
                    <tr key={holiday.id} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="p-4 text-gray-700">{index + 1}</td>
                      <td className="p-4 text-gray-700">{holiday.name}</td>
                      <td className="p-4 text-gray-700">{holiday.month}</td>
                      <td className="p-4 text-gray-700">{holiday.date}</td>
                      <td className="p-4 text-gray-700">{holiday.day}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            holiday.type === "National"
                              ? "bg-green-100 text-green-800"
                              : holiday.type === "Regional"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {holiday.type}
                        </span>
                      </td>
                      <td className="p-4 text-gray-700">{holiday.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="mt-8">
          <Button
            asChild
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
          >
            <Link href="/national-festival-holidays">← Back to Holidays Matrix</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

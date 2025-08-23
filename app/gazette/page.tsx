
// // export const metadata = {
// //   title: 'Gazette Notifications - Latest Government Updates | E-Library',
// //   description: 'Stay updated with the latest government gazette notifications, circulars, and amendments across various labour laws and regulations.',
// //   keywords: 'gazette notifications, government circulars, labour law updates, compliance notifications, amendments'
// // }






"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Download, FileText, ChevronRight, Home, Building2, Calendar, MapPin, Eye, Star, Clock, Users, AlertCircle, Bell, Newspaper, ExternalLink, TrendingUp } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import PopularSearch from "../PopularSearch/PopularSearch"

const notifications = [
  {
    id: 1,
    title: "Notification regarding revision of Minimum Wages for Maharashtra State",
    notificationNumber: "G.O. No. LMW-2024/CR-45/Lab-2",
    department: "Labour and Employment Department",
    state: "Maharashtra",
    category: "Minimum Wages",
    description: "Revision of minimum wages for various categories of workers in Maharashtra state effective from January 1, 2025",
    publishedDate: "2024-12-20",
    effectiveDate: "2025-01-01",
    fileSize: "1.2 MB",
    format: "PDF",
    isNew: true,
    priority: "High",
    views: 2847,
    slug: "maharashtra-minimum-wages-revision-2025"
  },
  {
    id: 2,
    title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
    notificationNumber: "S.O. 4521(E)",
    department: "Ministry of Labour and Employment",
    state: "Central",
    category: "Contract Labour",
    description: "Amendment to rules regarding digital registration and compliance mechanisms for contract labour establishments",
    publishedDate: "2024-12-18",
    effectiveDate: "2024-12-18",
    fileSize: "856 KB",
    format: "PDF",
    isNew: true,
    priority: "High",
    views: 1923,
    slug: "contract-labour-rules-amendment-2024"
  },
  {
    id: 3,
    title: "Notification on Professional Tax rates for Karnataka - 2025",
    notificationNumber: "FD 01 CTX 2024",
    department: "Finance Department",
    state: "Karnataka",
    category: "Professional Tax",
    description: "Revised professional tax slabs and rates applicable for the financial year 2025-26",
    publishedDate: "2024-12-15",
    effectiveDate: "2025-04-01",
    fileSize: "634 KB",
    format: "PDF",
    isNew: true,
    priority: "Medium",
    views: 1456,
    slug: "karnataka-professional-tax-rates-2025"
  },
  {
    id: 4,
    title: "Provident Fund contribution rate changes - Circular",
    notificationNumber: "Circular No. 14/2024",
    department: "Employees' Provident Fund Organisation",
    state: "Central",
    category: "Provident Fund",
    description: "Changes in PF contribution rates and administrative charges effective from February 2025",
    publishedDate: "2024-12-12",
    effectiveDate: "2025-02-01",
    fileSize: "423 KB",
    format: "PDF",
    isNew: false,
    priority: "High",
    views: 3241,
    slug: "pf-contribution-rate-changes-2025"
  },
  {
    id: 5,
    title: "ESI Medical Benefit rates revision notification",
    notificationNumber: "F.No.1/15/2024-P&P",
    department: "Employees' State Insurance Corporation",
    state: "Central",
    category: "ESI",
    description: "Revision of medical benefit rates and reimbursement limits under ESI scheme",
    publishedDate: "2024-12-10",
    effectiveDate: "2025-01-01",
    fileSize: "789 KB",
    format: "PDF",
    isNew: false,
    priority: "Medium",
    views: 1834,
    slug: "esi-medical-benefit-rates-revision-2025"
  },
  {
    id: 6,
    title: "Tamil Nadu Shops and Establishments Act - Amendment Notification",
    notificationNumber: "G.O.(Ms.)No.156",
    department: "Labour and Employment Department",
    state: "Tamil Nadu",
    category: "Shops & Establishments",
    description: "Amendment to working hours and overtime provisions for shops and establishments",
    publishedDate: "2024-12-08",
    effectiveDate: "2024-12-15",
    fileSize: "567 KB",
    format: "PDF",
    isNew: false,
    priority: "Medium",
    views: 987,
    slug: "tamil-nadu-shops-establishments-amendment-2024"
  },
  {
    id: 7,
    title: "Maternity Benefit Act - Enhanced benefit rates notification",
    notificationNumber: "S.O. 4234(E)",
    department: "Ministry of Labour and Employment",
    state: "Central",
    category: "Maternity Benefits",
    description: "Enhancement of maternity benefit rates and extension of coverage to more categories",
    publishedDate: "2024-12-05",
    effectiveDate: "2025-01-01",
    fileSize: "445 KB",
    format: "PDF",
    isNew: false,
    priority: "High",
    views: 2156,
    slug: "maternity-benefit-enhanced-rates-2025"
  },
  {
    id: 8,
    title: "Factory License fee revision - Gujarat State",
    notificationNumber: "GHN/25/2024/IND-1023-L",
    department: "Industries and Mines Department",
    state: "Gujarat",
    category: "Factory Registration",
    description: "Revision of factory license fees and renewal charges for various categories of factories",
    publishedDate: "2024-12-03",
    effectiveDate: "2025-01-01",
    fileSize: "312 KB",
    format: "PDF",
    isNew: false,
    priority: "Low",
    views: 743,
    slug: "gujarat-factory-license-fee-revision-2025"
  }
]

const categories = [
  "All Categories",
  "Minimum Wages",
  "Contract Labour",
  "Professional Tax",
  "Provident Fund",
  "ESI",
  "Shops & Establishments",
  "Maternity Benefits",
  "Factory Registration",
  "Bonus",
  "Gratuity"
]

const states = [
  "All States",
  "Central",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Delhi",
  "West Bengal",
  "Rajasthan",
  "Uttar Pradesh"
]

const priorities = [
  "All Priorities",
  "High",
  "Medium",
  "Low"
]

const departments = [
  "All Departments",
  "Ministry of Labour and Employment",
  "Labour and Employment Department",
  "Finance Department",
  "Employees' Provident Fund Organisation",
  "Employees' State Insurance Corporation",
  "Industries and Mines Department"
]

const popularSearches = [
  "Minimum wage notification",
  "PF rate changes",
  "Professional tax updates",
  "ESI benefit revision",
  "Contract labour amendments",
  "Factory license updates"
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-100 text-red-700'
    case 'Medium':
      return 'bg-yellow-100 text-yellow-700'
    case 'Low':
      return 'bg-green-100 text-green-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const formatViews = (views: number) => {
  if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}k`
  }
  return views.toString()
}

export default function GazetteNotificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-8">
        {/* Top Filter and Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Filters Button */}
              <Button variant="outline" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search by title..." className="pl-12 py-3 h-12 rounded-lg" />
              </div>
              
              {/* Category Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/ /g, '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* State Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Priority Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority.toLowerCase()}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Department Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept.toLowerCase().replace(/ /g, '-')}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Apply Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with Quick Access */}
         <div className="lg:col-span-1 lg:order-2">
    <Card className="sticky top-24">
      <CardContent className="space-y-6">
        <PopularSearch className="mt-4" />
      </CardContent>
    </Card>
  </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Gazette Notifications</h1>
                  <p className="text-gray-600 text-lg">
                    Stay updated with the latest government notifications, circulars, and amendments across various labour laws
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {notifications.length} Notifications
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">About Gazette Notifications</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Gazette notifications are official government publications that announce new laws, amendments, rules, 
                        and important policy changes. These notifications have legal validity and are essential for compliance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Notifications Grid */}
            <div className="grid gap-6">
              {notifications.map((notification) => (
                <Card key={notification.id} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2">
                          {notification.title}
                        </CardTitle>
                        <p>{notification.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                          asChild
                        >
                          <Link href={`/gazette/${notification.slug}`}>
                            <Newspaper className="w-4 h-4 mr-2" />
                            Read More
                          </Link>
                        </Button>
                      </div>
                   
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Notifications
              </Button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-0">
            <CardContent className="p-8">
              <div className="text-center max-w-2xl mx-auto">
                <Bell className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated with Notifications</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Subscribe to our notification service to receive instant alerts about new gazette notifications, 
                  amendments, and important compliance updates relevant to your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-orange-500 hover:bg-orange-600">
                    <Bell className="w-4 h-4 mr-2" />
                    Subscribe to Alerts
                  </Button>
                  <Button variant="outline">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    View Trending
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// export const metadata = {
//   title: 'Gazette Notifications - Latest Government Updates | E-Library',
//   description: 'Stay updated with the latest government gazette notifications, circulars, and amendments across various labour laws and regulations.',
//   keywords: 'gazette notifications, government circulars, labour law updates, compliance notifications, amendments'
// }
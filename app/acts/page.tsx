
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
  Search,
  Filter,
  Download,
  Eye,
  Calendar,
  MapPin,
  FileText,
  ChevronRight,
  Home,
  Building2,
  Scale,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"
// import PopularSearchBoxes from "../PopularSearchBoxes/PopularSearchBoxes"
import PopularSearch from "../PopularSearch/PopularSearch"

const acts = [
  {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    state: "Central",
    category: "Industrial Safety",
    description:
      "An Act to consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave.",
    lastUpdated: "2024-12-15",
    year: "1948",
    sections: 118,
    isPopular: true,
  },
  {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-act-1970",
    state: "Central",
    category: "Contract Labour",
    description:
      "An Act to regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
    lastUpdated: "2024-11-28",
    year: "1970",
    sections: 35,
    isPopular: true,
  },
  {
    id: 3,
    title: "Maharashtra Shops and Establishments Act, 2017",
    slug: "maharashtra-shops-establishments-act-2017",
    state: "Maharashtra",
    category: "Shops & Establishments",
    description:
      "An Act to consolidate and amend the law relating to the regulation of conditions of work and employment in shops and establishments.",
    lastUpdated: "2024-10-22",
    year: "2017",
    sections: 142,
    isPopular: false,
  },
  {
    id: 4,
    title: "Karnataka Labour Welfare Fund Act, 1965",
    slug: "karnataka-labour-welfare-fund-act-1965",
    state: "Karnataka",
    category: "Welfare Fund",
    description:
      "An Act to provide for the constitution of a fund for financing activities to promote welfare of labour in the State of Karnataka.",
    lastUpdated: "2024-09-18",
    year: "1965",
    sections: 28,
    isPopular: false,
  },
  {
    id: 5,
    title: "The Payment of Wages Act, 1936",
    slug: "payment-of-wages-act-1936",
    state: "Central",
    category: "Wages & Payment",
    description:
      "An Act to regulate the payment of wages to certain classes of persons employed in industry and to provide for deductions from wages.",
    lastUpdated: "2024-12-01",
    year: "1936",
    sections: 26,
    isPopular: true,
  },
  {
    id: 6,
    title: "Tamil Nadu Shops and Establishments Act, 1947",
    slug: "tamil-nadu-shops-establishments-act-1947",
    state: "Tamil Nadu",
    category: "Shops & Establishments",
    description:
      "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
    lastUpdated: "2024-11-15",
    year: "1947",
    sections: 89,
    isPopular: false,
  },
]

const categories = [
  "All Categories",
  "Industrial Safety",
  "Contract Labour",
  "Shops & Establishments",
  "Welfare Fund",
  "Wages & Payment",
  "Employment Terms",
]

const states = ["All States", "Central", "Maharashtra", "Karnataka", "Tamil Nadu", "Gujarat", "Delhi", "West Bengal"]

const popularSearches = [
  "Factories Act 1948",
  "Contract Labour Act",
  "Payment of Wages",
  "Shops Establishments",
  "Minimum Wages Act",
  "Provident Fund Act",
]

export default function ActsPage() {
  const handleActDownload = async (act: (typeof acts)[0]) => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${act.slug}.pdf`,
      filename: `${act.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    }

    await downloadFile(downloadItem)
  }

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
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Labour Acts & Regulations</h1>
                  <p className="text-gray-600 text-lg">
                    Comprehensive collection of central and state labour acts with latest amendments and updates
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {acts.length} Acts Available
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What are Labour Acts?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Labour Acts are comprehensive legal frameworks that govern employment relationships, workplace
                        safety, wages, working conditions, and worker rights. They provide the foundation for compliance
                        and dispute resolution in various industries and establishments.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horizontal Filters */}
            <Card className="mb-4">
  <div className="flex flex-wrap md:flex-nowrap items-center gap-3 p-3">
    {/* Inline title + icon */}
    <div className="flex items-center gap-2 shrink-0 text-base leading-none">
      <Filter className="w-4 h-4" />
      <span className="font-semibold">Filters</span>
    </div>

    {/* thin vertical divider on md+ */}
    <Separator orientation="vertical" className="hidden md:block h-8" />

    {/* Search */}
    <div className="relative w-full md:max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search by name..."
        className="h-9 pl-9 text-sm"
      />
    </div>

    {/* State */}
    <Select>
      <SelectTrigger className="h-9 w-full md:w-48 text-sm">
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent>
        {states.map((s) => (
          <SelectItem key={s} value={s.toLowerCase()} className="text-sm">
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

    {/* Category */}
    <Select>
      <SelectTrigger className="h-9 w-full md:w-56 text-sm">
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories.map((c) => (
          <SelectItem key={c} value={c.toLowerCase()} className="text-sm">
            {c}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
</Card>

            {/* Acts Grid */}
            <div className="grid gap-6">
              {acts.map((act) => (
                <Card
                  key={act.id}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        {/* <div className="flex items-center gap-3 mb-3">
                          <Badge
                            variant={act.state === "Central" ? "default" : "secondary"}
                            className={act.state === "Central" ? "bg-slate-800" : "bg-gray-100 text-gray-700"}
                          >
                            <Building2 className="w-3 h-3 mr-1" />
                            {act.state}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {act.category}
                          </Badge>
                          {act.isPopular && <Badge className="bg-orange-100 text-orange-700 text-xs">Popular</Badge>}
                        </div> */}
                        <Link href={`/acts/${act.slug}`}>
                          <CardTitle className="text-xl group-hover:text-orange-600 transition-colors leading-tight mb-2 cursor-pointer">
                            {act.title}
                          </CardTitle>
                        </Link>
                        <CardDescription className="text-gray-600 leading-relaxed mb-4">
                          {act.description}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Act Details */}
                    {/* <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Year: {act.year}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>{act.sections} Sections</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>Updated: {new Date(act.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div> */}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent"
                          asChild
                        >
                          <Link href={`/acts/${act.slug}`}>
                            <Eye className="w-4 h-4 mr-2" />
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
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                Load More Acts
              </Button>
            </div>
          </div>

          {/* Right Sidebar - Popular Search */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PopularSearch className="mb-6" />
              
              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Searches</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {popularSearches.map((search, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-left h-auto p-3 text-sm hover:bg-orange-50 hover:text-orange-600 border border-transparent hover:border-orange-200"
                      >
                        <Search className="w-3 h-3 mr-2 opacity-60" />
                        {search}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
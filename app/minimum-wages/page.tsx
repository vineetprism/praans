


import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Users,
  Building,
  Clock,
  IndianRupee,
  Filter,
  Scale,
} from "lucide-react";
import PopularSearch from "../PopularSearch/PopularSearch";

export const metadata: Metadata = {
  title:
    "Minimum Wages in India - State-wise Rates & Notifications | E-Library",
  description:
    "Complete guide to minimum wages across Indian states. Find current rates, notifications, and compliance requirements for different categories of workers.",
  keywords:
    "minimum wages, state wise minimum wages, wage rates, labour compliance, wage notification, minimum wage act",
};

const stateWiseWages = [
  {
    state: "Andhra Pradesh",
    dailyRate: 395,
    updatedDate: "01-01-2024",
    effectiveDate: "15-01-2024",
    available: true,
  },
  {
    state: "Assam",
    dailyRate: 285,
    updatedDate: "05-02-2024",
    effectiveDate: "20-02-2024",
    available: true,
  },
  {
    state: "Bihar",
    dailyRate: 325,
    updatedDate: "12-01-2024",
    effectiveDate: "26-01-2024",
    available: true,
  },
  {
    state: "Chhattisgarh",
    dailyRate: 315,
    updatedDate: "18-01-2024",
    effectiveDate: "01-02-2024",
    available: true,
  },
  {
    state: "Delhi",
    dailyRate: 692,
    updatedDate: "10-01-2024",
    effectiveDate: "25-01-2024",
    available: true,
  },
  {
    state: "Goa",
    dailyRate: 385,
    updatedDate: "15-01-2024",
    effectiveDate: "30-01-2024",
    available: true,
  },
  {
    state: "Gujarat",
    dailyRate: 375,
    updatedDate: "08-01-2024",
    effectiveDate: "22-01-2024",
    available: true,
  },
  {
    state: "Haryana",
    dailyRate: 425,
    updatedDate: "20-01-2024",
    effectiveDate: "05-02-2024",
    available: true,
  },
  {
    state: "Himachal Pradesh",
    dailyRate: 335,
    updatedDate: "25-01-2024",
    effectiveDate: "10-02-2024",
    available: true,
  },
  {
    state: "Jharkhand",
    dailyRate: 315,
    updatedDate: "14-01-2024",
    effectiveDate: "28-01-2024",
    available: true,
  },
  {
    state: "Karnataka",
    dailyRate: 425,
    updatedDate: "22-01-2024",
    effectiveDate: "06-02-2024",
    available: true,
  },
  {
    state: "Kerala",
    dailyRate: 395,
    updatedDate: "17-01-2024",
    effectiveDate: "01-02-2024",
    available: true,
  },
  {
    state: "Madhya Pradesh",
    dailyRate: 315,
    updatedDate: "11-01-2024",
    effectiveDate: "26-01-2024",
    available: true,
  },
  {
    state: "Maharashtra",
    dailyRate: 425,
    updatedDate: "19-01-2024",
    effectiveDate: "03-02-2024",
    available: true,
  },
  {
    state: "Odisha",
    dailyRate: 315,
    updatedDate: "13-01-2024",
    effectiveDate: "27-01-2024",
    available: true,
  },
  {
    state: "Punjab",
    dailyRate: 425,
    updatedDate: "21-01-2024",
    effectiveDate: "05-02-2024",
    available: true,
  },
  {
    state: "Rajasthan",
    dailyRate: 335,
    updatedDate: "16-01-2024",
    effectiveDate: "31-01-2024",
    available: true,
  },
  {
    state: "Tamil Nadu",
    dailyRate: 425,
    updatedDate: "23-01-2024",
    effectiveDate: "07-02-2024",
    available: true,
  },
  {
    state: "Telangana",
    dailyRate: 395,
    updatedDate: "24-01-2024",
    effectiveDate: "08-02-2024",
    available: true,
  },
  {
    state: "Uttar Pradesh",
    dailyRate: 335,
    updatedDate: "26-01-2024",
    effectiveDate: "10-02-2024",
    available: true,
  },
  {
    state: "West Bengal",
    dailyRate: 365,
    updatedDate: "28-01-2024",
    effectiveDate: "12-02-2024",
    available: true,
  },
];

const categories = [
  "All Categories",
  "Agricultural",
  "Construction",
  "Manufacturing",
  "Service Sector",
  "Domestic Workers",
  "Contract Workers",
];

const states = [
  "All States",
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Delhi",
  "Gujarat",
  "Karnataka",
  "Maharashtra",
  "Tamil Nadu",
  "West Bengal",
];

const trendingSearches = [
  "Minimum wage rates 2024",
  "State wise minimum wages",
  "Skilled worker wages",
  "Unskilled labour rates",
  "Minimum wage notification",
  "Daily wage calculation",
  "Overtime wage rates",
  "Agricultural wages",
  "Construction worker wages",
  "Domestic worker wages",
];

export default function MinimumWagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
        
        {/* Popular Search - Top for Mobile/Tablet */}
        <div className="lg:hidden mb-4 sm:mb-5 md:mb-6">
          <Card className="shadow-sm">
            <CardContent className="p-3 sm:p-4">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4 xl:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 2xl:col-span-3">
            {/* Page Header */}
            <div className="mb-6 sm:mb-7 md:mb-8">
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div className="flex-1">
                  <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-slate-800 mb-2 sm:mb-3 leading-tight">
                    Minimum Wages :
                  </h2>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Minimum wages refer to the lowest remuneration that an
                    employer is legally required to pay to workers for their
                    labor. The Minimum Wages Act, 1948 empowers both Central and
                    State Governments to fix minimum wages for scheduled
                    employments to ensure fair compensation and prevent
                    exploitation of workers.
                  </p>
                </div>
              </div>
            </div>

            {/* Responsive Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Search by state..."
                  className="pl-10 sm:pl-12 h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm 
                  "
                />
              </div>

              {/* State Dropdown */}
          <div className="w-full sm:w-auto">
    <Select>
      <SelectTrigger
        className="
          w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10
          bg-white text-gray-900 border border-gray-300 rounded-lg
          text-xs sm:text-sm
          focus:outline-none
          focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white
          !focus-visible:ring-orange-500 !focus-visible:border-orange-500
          hover:bg-orange-50
        "
      >
        <SelectValue placeholder="Select state" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 shadow-md">
        {states.map((state) => (
          <SelectItem
            key={state}
            value={state}
            className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
          >
            {state}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>

              {/* Apply Button */}
              {/* <Button
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 h-8 sm:h-9 md:h-10 lg:h-9 text-xs sm:text-sm"
                // variant="outline"
                aria-label="apply filters"
              >
                Apply
              </Button> */}
            </div>

            {/* Mobile Card View (Small Devices) */}
            <div className="block sm:hidden space-y-3 mb-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                State-wise Wages :
              </h2>
              {stateWiseWages.map((wage, index) => (
                <div key={index} className="bg-orange-300 rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm text-gray-900 mb-2">
                        {wage.state}
                      </h3>
                      <div className="text-xs text-black space-y-1">
                        {/* <div className="flex items-center gap-2">
                          <IndianRupee className="w-3 h-3" />
                          <span className="font-medium text-black">₹{wage.dailyRate}</span>
                        </div> */}
                        <div>Updated Date: {wage.updatedDate}</div>
                        <div>Effective Date: {wage.effectiveDate}</div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs text-orange-400"
                        asChild
                      >
                        <Link
                          href={`/minimum-wages/${wage.state
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet Card View (Medium Devices) */}
            <div className="hidden sm:block md:hidden space-y-1 mb-2">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                State-wise Wages :
              </h2>
              {stateWiseWages.map((wage, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-1">
                        <h3 className="font-semibold text-base text-gray-900 mb-1">
                          {wage.state}
                        </h3>
                        <div className="text-sm text-gray-600 flex flex-wrap gap-4">
                          <span className="font-medium text-gray-900">₹{wage.dailyRate}</span>
                          <span>Updated Date: {wage.updatedDate}</span>
                          <span>Effective Date: {wage.effectiveDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-orange-400 text-white"
                        asChild
                      >
                        <Link
                          href={`/minimum-wages/${wage.state
                            .toLowerCase()
                            .replace(/\s+/g, "-")}`}
                        >
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Table View (Large+ Devices) */}
            <section className="hidden md:block">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                State-wise Wages :
              </h3>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-orange-500">
                      <tr>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          State
                        </th>
                        {/* <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Wage Rate (₹)
                        </th> */}
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Updated Date
                        </th>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Effective Date
                        </th>
                        <th className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 text-left text-xs md:text-xs lg:text-sm font-semibold text-white tracking-wide">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {stateWiseWages.map((wage, index) => (
                        <tr key={index} className="hover:bg-orange-50">
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm font-medium text-gray-900">
                              {wage.state}
                            </div>
                          </td>
                          {/* <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm font-semibold text-green-600">
                              ₹{wage.dailyRate}
                            </div>
                          </td> */}
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm text-gray-700">
                              {wage.updatedDate}
                            </div>
                          </td>
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap">
                            <div className="text-xs md:text-xs lg:text-sm text-gray-700">
                              {wage.effectiveDate}
                            </div>
                          </td>
                          <td className="px-2 md:px-3 lg:px-4 py-2 md:py-2.5 lg:py-3 whitespace-nowrap text-xs md:text-xs lg:text-sm font-medium">
                            <Button
                              variant="outline"
                              size="sm"
                              aria-label="view details"
                              className="text-white bg-orange-400 hover:text-orange-600 text-xs px-2 py-1 h-7"
                              asChild
                            >
                              <Link
                                href={`/minimum-wages/${wage.state
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                aria-label="view details"
                              >
                                View Details
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Popular Search (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-2 lg:top-3">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-2 lg:p-3 xl:p-4">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
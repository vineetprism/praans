"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Bell,
  Newspaper,
  TrendingUp,
  CalendarIcon,
  Eye,
} from "lucide-react";
import Link from "next/link";
import PopularSearch from "../PopularSearch/PopularSearch";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useState } from "react";

const notifications = [
  {
    id: 1,
    title:
      "Notification regarding the Display of Bengali Language on Top of All Signage's in KMC, West Bengal",
    notificationNumber: "G.O. No. LMW-2024/CR-45/Lab-2",
    department: "Labour and Employment Department",
    state: "Maharashtra",
    category: "Language Policy",
    description:
      "The Kolkata Municipal Corporation, Government of West Bengal Vide Municipal Commissioners Circular No.34 of 2025-26, has updated Notification regarding the Display of Bengali Language on Top of All S...",
    publishedDate: "2024-12-20",
    effectiveDate: "30th Aug, 2025",
    updatedDate: "30th Aug, 2025",
    fileSize: "1.2 MB",
    format: "PDF",
    isNew: true,
    priority: "High",
    views: 2847,
    slug: "maharashtra-minimum-wages-revision-2025",
  },
  {
    id: 2,
    title:
      "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
    notificationNumber: "S.O. 4521(E)",
    department: "Ministry of Labour and Employment",
    state: "Central",
    category: "Contract Labour",
    description:
      "Amendment to rules regarding digital registration and compliance mechanisms for contract labour establishments under the Contract Labour Act...",
    publishedDate: "2024-12-18",
    effectiveDate: "18th Dec, 2024",
    updatedDate: "18th Dec, 2024",
    fileSize: "856 KB",
    format: "PDF",
    isNew: true,
    priority: "High",
    views: 1923,
    slug: "contract-labour-rules-amendment-2024",
  },
  {
    id: 3,
    title: "Notification on Professional Tax rates for Karnataka - 2025",
    notificationNumber: "FD 01 CTX 2024",
    department: "Finance Department",
    state: "Karnataka",
    category: "Professional Tax",
    description:
      "Revised professional tax slabs and rates applicable for the financial year 2025-26 as per the Karnataka Finance Department circular...",
    publishedDate: "2024-12-15",
    effectiveDate: "1st Apr, 2025",
    updatedDate: "15th Dec, 2024",
    fileSize: "634 KB",
    format: "PDF",
    isNew: true,
    priority: "Medium",
    views: 1456,
    slug: "karnataka-professional-tax-rates-2025",
  },
  {
    id: 4,
    title: "Provident Fund contribution rate changes - Circular",
    notificationNumber: "Circular No. 14/2024",
    department: "Employees' Provident Fund Organisation",
    state: "Central",
    category: "Provident Fund",
    description:
      "Changes in PF contribution rates and administrative charges effective from February 2025 as notified by EPFO headquarters...",
    publishedDate: "2024-12-12",
    effectiveDate: "1st Feb, 2025",
    updatedDate: "12th Dec, 2024",
    fileSize: "423 KB",
    format: "PDF",
    isNew: false,
    priority: "High",
    views: 3241,
    slug: "pf-contribution-rate-changes-2025",
  },
];

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
  "Uttar Pradesh",
];

export default function GazetteNotificationsPage() {
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  return (
    <div className="min-h-screen bg-gray-50">
      <div
        className="
        container mx-auto
        px-2 py-2
        min-[375px]:px-3 min-[375px]:py-3
        sm:px-4 sm:py-4
        lg:px-5 lg:py-5
        xl:px-6
      "
      >
        {/* Fixed Horizontal Filter Bar */}
        <div className="mb-3 sm:mb-4">
          <div
            className="
    flex flex-col gap-2 
    lg:flex-row lg:items-end lg:gap-3
    p-2 sm:p-3
  "
          >
            {/* Top Row on Mobile, Single Row on Desktop */}
            <div
              className="
      flex flex-col gap-2
      sm:flex-row sm:items-end sm:gap-2.5
      lg:flex-row lg:gap-3 lg:flex-1
    "
            >
              {/* Search Input */}
              <div className="relative flex-1 min-w-0">
                <Search
                  className="
          absolute left-3 top-1/2 -translate-y-1/2 
          text-gray-400 pointer-events-none w-4 h-4
        "
                />
                <Input
                  placeholder="Search by title..."
                  className="
          w-full rounded-lg border-gray-300 bg-white
          h-8 sm:h-9 lg:h-10
          pl-9 sm:pl-10
          pr-3 sm:pr-4
          text-xs sm:text-sm
          placeholder:text-gray-500
        "
                />
              </div>
            </div>

            {/* Date Pickers Row - All in one line */}
            <div
              className="
      flex flex-col gap-2
      sm:flex-row sm:gap-2.5 sm:items-end
      lg:gap-3 lg:flex-row lg:items-end
    "
            >
              {/* From Date */}
              {/* <div className="flex-shrink-0 sm:w-28 lg:w-32">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="
              w-full justify-start text-left font-normal
              bg-white hover:bg-gray-50 border-gray-300
              h-8 sm:h-9 lg:h-10
              px-3
              text-xs sm:text-sm
            "
                    >
                      <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                      <span className="truncate">
                        {fromDate ? format(fromDate, "dd-MM-yyyy") : "From"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={fromDate}
                      onSelect={setFromDate}
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div> */}

              {/* To Date */}
              {/* <div className="flex-shrink-0 sm:w-28 lg:w-32">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="
              w-full justify-start text-left font-normal
              bg-white hover:bg-gray-50 border-gray-300
              h-8 sm:h-9 lg:h-10
              px-3
              text-xs sm:text-sm
            "
                    >
                      <CalendarIcon className="mr-2 w-4 h-4 flex-shrink-0" />
                      <span className="truncate">
                        {toDate ? format(toDate, "dd-MM-yyyy") : "To"}
                      </span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={toDate}
                      onSelect={setToDate}
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div> */}
              {/* State Dropdown */}
              <div className="flex-shrink-0 sm:w-28 lg:w-32">
                <Select>
                  <SelectTrigger
                    className="
            w-full bg-white hover:bg-gray-50 border-gray-300
            h-8 sm:h-9 lg:h-10
            px-3
            text-xs sm:text-sm
          "
                  >
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem
                        key={state}
                        value={state.toLowerCase().replace(/ /g, "-")}
                        className="text-xs sm:text-sm"
                      >
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Update Date */}
              <div className="flex-shrink-0 sm:w-28 lg:w-32">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="
              w-full justify-start text-left font-normal
              bg-white hover:bg-gray-50 border-gray-300
              h-8 sm:h-9 lg:h-10
              px-3
              text-xs sm:text-sm
            "
                    >
                      <CalendarIcon className="w-auto h-4 flex-shrink-0" />
                      <span className="">Updated Date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Effective Date */}
              <div className="flex-shrink-0 sm:w-28 lg:w-32">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="
              w-full justify-start text-left font-normal
              bg-white hover:bg-gray-50 border-gray-300
              h-8 sm:h-9 lg:h-10
              px-3
              text-xs sm:text-sm
            "
                    >
                      <CalendarIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="">Effective Date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      initialFocus
                      className="rounded-md border"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Apply Button */}
              <div className="flex-shrink-0">
                <Button
                  className="
          bg-orange-500 hover:bg-orange-600 text-white font-medium
          h-8 sm:h-9 lg:h-10
          px-4 sm:px-5 lg:px-6
          text-xs sm:text-sm
          w-full sm:w-auto
        "
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-3 sm:gap-4 lg:grid-cols-5">
          {/* Ultra Compact Sidebar */}
          <div className=" lg:col-span-1 lg:order-2 order-1">
            <Card className="sticky top-0 p-2 md:p-3 lg:p-0.5 xl:p-0.5 2xl:p-6">
              <CardContent className="p-2">
                <PopularSearch className="mt-0" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-4 lg:order-1 order-2">
            {/* Ultra Compact Page Header */}
            <div className="mb-3 sm:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                <div>
                  <div className="flex justify-between">
                    <h1
                    className="
                    font-bold text-slate-800
                    text-base min-[375px]:text-lg sm:text-xl
                    mb-1
                  "
                  >
                    Gazette Notifications :
                  </h1>
                  <Badge
                  variant="secondary"
                  className="
                  px-1.5 py-0.5 text-[9px] min-[375px]:text-[10px] bg-orange-400 text-white font-bold
                "
                >
                  {notifications.length} Notifications
                </Badge>
                  </div>
                  <p
                    className="
                    text-gray-600 leading-relaxed
                    text-[10px] min-[375px]:text-xs sm:text-sm text-justify
                  "
                  >
                    “Gazette Notification” is an authorized legal document
                    issued by the Ministries of Government of India, published
                    in the official gazette vide Government of India Printing
                    Presses containing significant Statutory Orders (S.O) and
                    General Statutory Rules (G.S.R). Any change, update,
                    amendment, or new information is usually announced by the
                    Government of India through Gazette Notifications.{" "}
                  </p>
                </div>
                
              </div>
            </div>

            {/* Ultra Compressed Cards - 4 per viewport */}
            <div className="space-y-0.5 sm:space-y-1">
              {notifications.map((notification) => (
                <Card
                  key={notification.id}
                  className="
                  group hover:shadow-md transition-all duration-200 
                  border-l-4 border-l-orange-500 shadow-sm bg-white lg:h-35
                "
                >
                  <CardContent className="p-1.5 sm:p-2 lg:p-2.5">
                    <div className="flex items-start justify-between gap-2.5">
                      {/* Left Content - Ultra Compressed */}
                      <div className="flex-1 min-w-0">
                        <CardTitle
                          className="
                          group-hover:text-orange-600 transition-colors 
                          leading-tight mb-1
                          text-[12px] min-[375px]:text-xs sm:text-sm lg:text-base
                          font-semibold text-gray-900 line-clamp-2
                        "
                        >
                          {notification.title}
                        </CardTitle>

                        <p
                          className="
                          text-gray-700 leading-snug mb-1.5
                          text-[11px] min-[375px]:text-[10px] sm:text-[0.8rem] lg:text-sm
                          line-clamp-2
                        "
                        >
                          {notification.description}
                        </p>

                        {/* Read More Button - Ultra Compact */}
                        <div className="mb-1">
                          <Button
                            variant="outline"
                            size="sm"
                            className="
                             bg-orange-400 text-white hover:bg-orange-500 hover:text-shadow-amber-50  border-gray-300
                              
                              h-5 sm:h-6 lg:h-7
                              px-2 sm:px-2.5 lg:px-3
                              text-[9px] sm:text-[10px] lg:text-xs
                              font-medium rounded-sm
                              inline-flex items-center gap-1
                            "
                            asChild
                          >
                            <Link
                              href={`/gazette/${notification.slug}`}
                              className=""
                            >
                              <Eye className="w-3 h-3 2xl:w-4 2xl:h-4 flex-shrink-0" />
                              <span className="whitespace-nowrap">
                                Read More
                              </span>
                            </Link>
                          </Button>
                        </div>
                      </div>

                      {/* Right Side - State + Dates */}
                      <div className="flex-shrink-0 text-right">
                        {/* State Badge */}
                        <div className="mb-1.5">
                          <Badge
                            variant="outline"
                            className="
                            bg-blue-50 text-blue-700 border-blue-200
                            text-[12px] sm:text-[9px] lg:text-[12px] 
                            px-1.5 py-0.5 font-medium
                          "
                          >
                            {notification.state}
                          </Badge>
                        </div>

                        {/* Dates Section */}
                        <div className="space-y-0.5 text-[11px] sm:text-[9px] lg:text-[12px] 2xl:text-[0.8rem] text-gray-600">
                          <div>
                            <span className="font-medium text-gray-700">
                              Updated Date:{" "}
                            </span>
                            <span className="text-gray-900 font-medium">
                              {notification.updatedDate}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-700">
                              Effective Date:{" "}
                            </span>
                            <span className="text-gray-900 font-medium">
                              {notification.effectiveDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-4 sm:mt-5">
              <Button
                size="lg"
                // variant="outline"
                className="
                shadow-sm bg-orange-400 text-white hover:bg-orange-500
                h-7 sm:h-8 px-4 sm:px-5
                text-[10px] sm:text-xs hover:cursor-pointer
              "
              >
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Eye,
  Scale,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { downloadFile, type DownloadItem } from "@/lib/download-utils";
import PopularSearch from "../PopularSearch/PopularSearch";
import { useState } from "react";

const acts = [
  {
    id: 1,
    title: "The Factories Act, 1948",
    rulesName: "Factory Rules",
    formsName: "Factory Forms",
    slug: "factories-act-1948",
    state: "Central",
    applicableState: "All India",
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
    rulesName: "Contract Labour Rules",
    formsName: "Contract Labour Forms",
    slug: "contract-labour-act-1970",
    state: "Central",
    applicableState: "All India",
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
    rulesName: "Maharashtra S&E Rules",
    formsName: "Maharashtra S&E Forms",
    slug: "maharashtra-shops-establishments-act-2017",
    state: "Maharashtra",
    applicableState: "Maharashtra",
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
    rulesName: "Karnataka LWF Rules",
    formsName: "Karnataka LWF Forms",
    slug: "karnataka-labour-welfare-fund-act-1965",
    state: "Karnataka",
    applicableState: "Karnataka",
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
    rulesName: "Payment of Wages Rules",
    formsName: "Wages Payment Forms",
    slug: "payment-of-wages-act-1936",
    state: "Central",
    applicableState: "All India",
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
    rulesName: "Tamil Nadu S&E Rules",
    formsName: "Tamil Nadu S&E Forms",
    slug: "tamil-nadu-shops-establishments-act-1947",
    state: "Tamil Nadu",
    applicableState: "Tamil Nadu",
    category: "Shops & Establishments",
    description:
      "An Act to provide for the regulation of conditions of work and employment in shops and commercial establishments.",
    lastUpdated: "2024-11-15",
    year: "1947",
    sections: 89,
    isPopular: false,
  },
];

const categories = [
  "All Categories",
  "Industrial Safety",
  "Contract Labour",
  "Shops & Establishments",
  "Welfare Fund",
  "Wages & Payment",
  "Employment Terms",
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
];

export default function ActsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Set this based on your total data

  const handleActDownload = async (act: (typeof acts)[0]) => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${act.slug}.pdf`,
      filename: `${act.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    };
    await downloadFile(downloadItem);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-4 lg:px-4 xl:px-4 2xl:px-6 py-6 sm:py-6 md:py-4 lg:py-4 xl:py-4 2xl:py-8">
        <div className="grid lg:grid-cols-4 gap-6 md:gap-4 lg:gap-4 xl:gap-4 2xl:gap-8">
          <div className="lg:col-span-3">
            {/* Header Section - Compact */}
            <div className="mb-6 sm:mb-6 md:mb-4 lg:mb-4 xl:mb-4 2xl:mb-8">
              <div className="flex items-center justify-between mb-3 md:mb-2 lg:mb-2 xl:mb-2 2xl:mb-4">
                <div>
                  <h1 className="text-2xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl 2xl:text-3xl font-bold text-slate-800 mb-1 md:mb-1 lg:mb-1 xl:mb-1 2xl:mb-2">
                    Labour Acts & Regulations :
                  </h1>
                  <p className="text-gray-600 text-base sm:text-base md:text-sm lg:text-sm xl:text-sm 2xl:text-lg">
                    Comprehensive collection of central and state labour acts
                    with latest amendments and updates.published in the official
                    gazette vide Government of India Printing Presses containing
                    significant Statutory Orders (S.O) and General Statutory
                    Rules (G.S.R).
                  </p>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="px-2 py-1 text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm"
                  >
                    {acts.length} Acts Available
                  </Badge>
                </div> */}
              </div>
            </div>

            {/* Filter Section - Compact */}

            <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4 p-2">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 2xl:w-5 2xl:h-5" />
                <Input
                  placeholder="Search by title..."
                  className="pl-10 h-8 lg:h-8 2xl:h-10 text-xs lg:text-sm 2xl:text-base
                 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              {/* Select Dropdown */}
              <Select>
                <SelectTrigger
                  className="w-full lg:w-36 2xl:w-48 h-8 lg:h-8 2xl:h-10 
                             text-xs lg:text-sm 2xl:text-base bg-gray-100"
                >
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem
                      key={state}
                      value={state.toLowerCase().replace(/ /g, "-")}
                    >
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Apply Button */}
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white
                     px-4 h-8 lg:h-8 2xl:h-10 text-xs lg:text-sm 2xl:text-base"
              >
                Apply
              </Button>
            </div>

            {/* Acts Cards - Ultra Compact for md, lg, xl */}
            <div className="grid gap-3 sm:gap-3 md:gap-2 lg:gap-2 xl:gap-2 2xl:gap-4">
              {acts.map((act) => (
                <Card
                  key={act.id}
                  className="
        lg:h-28 xl:h-31 2xl:h-47
        group bg-orange-50 border border-gray-200 rounded-lg shadow-sm
        hover:shadow-md transition-all duration-200
        border-l-4 border-l-orange-500 overflow-hidden
        h-full flex flex-col
      "
                >
                  <CardHeader className="lg:pb:20 2xl:pb-2 px-4 2xl:px-6 lg:-mb-5.5 2xl:pt-4 flex-shrink-0">
                    <div className="flex items-start justify-between min-h-0">
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/acts/${act.slug}`}
                          aria-label="title of act"
                          className="block"
                        >
                          <CardTitle
                            className="
                  text-sm 2xl:text-lg hover:text-orange-600 transition-colors
                  leading-tight mb-0.5 2xl:mb-1 cursor-pointer
                "
                          >
                            <div className="flex items-center justify-between gap-2 2xl:gap-4 min-w-0">
                              <div className="flex-1 min-w-0">
                                <span className="text-slate-800 font-semibold line-clamp-1 break-words text-sm 2xl:text-lg">
                                  {act.title} /Rules/Forms
                                </span>
                              </div>
                              <Badge
                                variant="outline"
                                className="bg-blue-50 text-blue-700 border-blue-200 
                      text-xs 2xl:text-sm flex-shrink-0 max-w-[100px] truncate"
                              >
                                {act.applicableState}
                              </Badge>
                            </div>
                          </CardTitle>
                        </Link>

                        <CardDescription
                          className="text-gray-700 leading-snug line-clamp-2
                text-xs 2xl:text-sm mb-1 2xl:mb-2 break-words"
                        >
                          {act.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pb-3 2xl:pb-4 px-4 2xl:px-6 mt-auto flex-shrink-0">
                    <div className="flex items-center justify-start">
                      <Button
                        size="sm"
                        aria-label="read more"
                        className="
              bg-orange-400 text-white hover:bg-orange-500
              h-8 2xl:h-8 px-2 2xl:px-3
              text-xs 2xl:text-sm font-medium rounded-sm
              inline-flex items-center gap-1 transition-all duration-200
            "
                        asChild
                      >
                        <Link
                          href={`/acts/${act.slug}`}
                          className="flex items-center gap-1 min-w-0"
                        >
                          <Eye className="w-3 h-3 2xl:w-4 2xl:h-4 flex-shrink-0" />
                          <span className="whitespace-nowrap">Read More</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More - Compact */}
            <div className="flex justify-center items-center gap-1 sm:gap-2 mt-4 sm:mt-5">
              {/* Previous Button */}
              <Button
                variant="outline"
                size="sm"
                className="
      h-7 sm:h-8 px-2 sm:px-3
      text-[10px] sm:text-xs
      border-gray-300 hover:bg-gray-50
    "
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>

              {/* Page Numbers */}
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  className={`
        h-7 sm:h-8 px-2.5 sm:px-3.5
        text-[10px] sm:text-xs
        ${
          currentPage === page
            ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
            : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
        }
      `}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </Button>
              ))}

              {/* Dots for more pages */}
              <span className="px-1 text-gray-400 text-[10px] sm:text-xs">
                ...
              </span>

              {/* Last page */}
              <Button
                variant={currentPage === totalPages ? "default" : "outline"}
                size="sm"
                className={`
      h-7 sm:h-8 px-2.5 sm:px-3.5
      text-[10px] sm:text-xs
      ${
        currentPage === totalPages
          ? "bg-orange-400 text-white hover:bg-orange-500 border-orange-400"
          : "border-gray-300 hover:bg-orange-50 hover:border-orange-200"
      }
    `}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Button>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                className="
      h-7 sm:h-8 px-2 sm:px-3
      text-[10px] sm:text-xs
      border-gray-300 hover:bg-gray-50
    "
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
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


"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, Download, Eye, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { notFound } from "next/navigation";
import { use } from "react";
import { downloadFile, type DownloadItem } from "@/lib/download-utils";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { useSearchParams } from "next/navigation";

// Sample forms data for table
const formsData = [
  {
    id: 1,
    formNumber: "Form I",
    title: "Notice of Commencement of Work",
    description: "Form to be submitted before commencing work in factory",
    lastUpdated: "2024-10-15",
    fileSize: "250 KB",
  },
  {
    id: 2,
    formNumber: "Form II",
    title: "Notice of Occupancy",
    description: "Form for giving notice of occupancy of factory premises",
    lastUpdated: "2024-09-20",
    fileSize: "180 KB",
  },
  {
    id: 3,
    formNumber: "Form III",
    title: "Register of Workers",
    description: "Mandatory register to maintain worker details",
    lastUpdated: "2024-08-10",
    fileSize: "320 KB",
  },
  {
    id: 4,
    formNumber: "Form IV",
    title: "Leave Record",
    description: "Record of leave with wages for workers",
    lastUpdated: "2024-07-25",
    fileSize: "200 KB",
  },
  {
    id: 5,
    formNumber: "Form V",
    title: "Overtime Register",
    description: "Register for recording overtime work details",
    lastUpdated: "2024-06-12",
    fileSize: "175 KB",
  },
  {
    id: 6,
    formNumber: "Form VI",
    title: "Accident Report",
    description: "Form for reporting workplace accidents and incidents",
    lastUpdated: "2024-05-28",
    fileSize: "290 KB",
  },
];

const actsDatabase = {
  "factories-act-1948": {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    fullTitle:
      "An Act to consolidate and amend the law regulating labour in factories",
    state: "Central",
    category: "Industrial Safety",
    year: "1948",
    actNumber: "Act No. 63 of 1948",
    lastUpdated: "2024-12-15",
    effectiveDate: "1948-04-01",
    sections: 118,
    chapters: 14,
    applicability:
      "All factories employing 10 or more workers with power, or 20 or more workers without power",
    objective:
      "To consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave of workers employed in factories.",
    keyProvisions: [
      "Health and safety measures in factories",
      "Welfare provisions for workers including drinking water, washing facilities, and first aid",
      "Working hours and overtime regulations with maximum limits",
      "Employment of young persons and women with special protections",
      "Annual leave with wages for all factory workers",
      "Factory licensing and registration requirements",
      "Penalties for non-compliance and violations",
      "Inspector powers and factory examination procedures",
    ],
    penalties:
      "Imprisonment up to 2 years and/or fine up to ₹1,00,000 for violations. Repeated offenses may result in factory closure and higher penalties.",
    amendments: [
      {
        year: "2023",
        description:
          "Amendment regarding digital compliance and online reporting mechanisms",
        date: "2023-08-15",
      },
      {
        year: "2019",
        description: "Updates to safety standards and penalty provisions",
        date: "2019-03-22",
      },
      {
        year: "2016",
        description: "Modifications to working hours for women employees",
        date: "2016-11-10",
      },
    ],
    stateRules: {
      "All India": [
        {
          id: 1,
          title: "The Factories (Central) Rules, 1950",
          description:
            "Central rules for implementation of the Factories Act across all states",
          lastUpdated: "2024-10-15",
          state: "Central",
        },
      ],
      Maharashtra: [
        {
          id: 2,
          title: "Maharashtra Factories Rules, 1963",
          description:
            "State-specific rules for Maharashtra factories with additional safety provisions",
          lastUpdated: "2024-09-20",
          state: "Maharashtra",
        },
      ],
      Karnataka: [
        {
          id: 3,
          title: "Karnataka Factories Rules, 1969",
          description:
            "Karnataka state rules for factory operations and worker welfare",
          lastUpdated: "2024-08-15",
          state: "Karnataka",
        },
      ],
      Gujarat: [
        {
          id: 4,
          title: "Gujarat Factories Rules, 1965",
          description:
            "Gujarat specific implementation guidelines for the Factories Act",
          lastUpdated: "2024-07-10",
          state: "Gujarat",
        },
      ],
    },
  },
};

interface ActDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ActDetailPage({ params }: ActDetailPageProps) {
  const searchParams = useSearchParams();
  const selectedState = searchParams.get("state") || "All India";

  const resolvedParams = use(params);
  const actData =
    actsDatabase[resolvedParams.slug as keyof typeof actsDatabase];

  if (!actData) {
    notFound();
  }

  const stateSpecificRules =
    actData.stateRules[selectedState] || actData.stateRules["All India"] || [];

  // Calculate counts for stats grid
  const rulesCount =
    stateSpecificRules.length ||
    Object.values(actData.stateRules).flat().length;
  const formsCount = formsData.length;

  const handleActDownload = async () => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${actData.slug}.pdf`,
      filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    };
    await downloadFile(downloadItem);
  };

  const handleFormDownload = async (form: any) => {
    const downloadItem: DownloadItem = {
      url: `/forms/downloads/${actData.slug}/${form.formNumber
        .toLowerCase()
        .replace(/ /g, "-")}.pdf`,
      filename: `${form.formNumber}-${form.title.replace(
        /[^a-zA-Z0-9]/g,
        "-"
      )}.pdf`,
      format: "PDF",
    };
    await downloadFile(downloadItem);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-5">
        <div className="grid lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
          <div className="lg:col-span-3">
            <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
              <CardHeader className="">
                <div className="space-y-1">
                  {/* Title + (optional) badge */}
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-[15px] 2xl:text-xl font-semi-bold text-slate-800 leading-tight truncate">
                        {actData.title}
                      </CardTitle>
                      <CardDescription className="text-[13px] 2xl:text:16px text-gray-600 leading-snug line-clamp-1">
                        {actData.fullTitle}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Ultra-compact metadata grid */}
                  <div className="grid grid-cols-3 gap-1 p-1 rounded h-4">
                    <div className="text-center">
                      <div className="text-[16px] font-bold text-orange-500 leading-none">
                        {actData.sections}
                      </div>
                      <div className="text-[14px] font-semibold text-gray-600 leading-none mt-0.5">
                        Sections
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-orange-500 leading-none">
                        {rulesCount}
                      </div>
                      <div className="text-[14px] font-semibold text-gray-600 leading-none mt-0.5">
                        Rules
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-orange-500 leading-none">
                        {formsCount}
                      </div>
                      <div className="text-[14px] font-semibold text-gray-600 leading-none mt-0.5">
                        Forms
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
            <Tabs
              defaultValue="overview"
              className="space-y-1 sm:space-y-3 lg:space-y-0.5 "
            >
              <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2 ">
                <TabsTrigger
                  value="overview"
                  className="text-[4vw] min-[360px]:text-xs sm:text-[1rem]  py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5 rounded-md hover:cursor-pointer"
                >
                  Act Details
                </TabsTrigger>
                <TabsTrigger
                  value="rules"
                  className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 rounded-md hover:cursor-pointer"
                >
                  Rules
                </TabsTrigger>
                <TabsTrigger
                  value="forms"
                  className="text-[4vw] min-[360px]:text-xs sm:text-sm  md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 rounded-md hover:cursor-pointer"
                >
                  Forms
                </TabsTrigger>
              </TabsList>
              {/* 
              {/* Act Overview Tab */}
              <TabsContent
                value="overview"
                className="space-y-0.5 sm:space-y-3 lg:space-y-0.5"
              >
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Act Overview</span>
                      </CardTitle>
                      <Button
                        onClick={handleActDownload}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 
                                 text-[10px] sm:text-xs lg:text-sm rounded-md transition-colors duration-200 h-auto hover:cursor-pointer"
                        aria-label="download act"
                      >
                        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                        Download Act
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4">
                    <div>
                      <h3 className="font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-gray-900">
                        Objective
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs lg:text-sm">
                        {actData.objective}
                      </p>
                    </div>

                    <Separator className="bg-gray-200" />
                    <div>
                      <h3 className="font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-gray-900">
                        Applicability
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs lg:text-sm">
                        {actData.applicability}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-2.5 text-xs sm:text-sm lg:text-base text-gray-900">
                        Key Provisions
                      </h3>
                      <ul className="space-y-1 sm:space-y-1.5">
                        {actData.keyProvisions.map((provision, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-1.5 sm:gap-2"
                          >
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-gray-700 text-[10px] sm:text-xs lg:text-sm leading-relaxed">
                              {provision}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="font-semibold mb-1.5 sm:mb-2 text-xs sm:text-sm lg:text-base text-gray-900">
                        Penalties & Compliance
                      </h3>
                      <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs lg:text-sm">
                        {actData.penalties}
                      </p>
                    </div>

                    <Separator className="bg-gray-200" />

                    <div>
                      <h3 className="font-semibold mb-2 sm:mb-2.5 text-xs sm:text-sm lg:text-base text-gray-900">
                        Recent Amendments
                      </h3>
                      <div className="space-y-1.5 sm:space-y-2">
                        {actData.amendments
                          .slice(0, 3)
                          .map((amendment, index) => (
                            <div
                              key={index}
                              className="flex items-start gap-2 p-1.5 sm:p-2 bg-gray-50 rounded-md"
                            >
                              <Badge
                                variant="outline"
                                className="text-[9px] sm:text-[10px] bg-white"
                              >
                                {amendment.year}
                              </Badge>
                              <div className="flex-1">
                                <p className="text-[10px] sm:text-xs lg:text-sm text-gray-700">
                                  {amendment.description}
                                </p>
                                <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">
                                  Date:{" "}
                                  {new Date(
                                    amendment.date
                                  ).toLocaleDateString()}
                                </p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent
                value="rules"
                className="space-y-2 sm:space-y-3 lg:space-y-4"
              >
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Rules Overview</span>
                      </CardTitle>
                      <Button
                        onClick={async () => {
                          const downloadItem: DownloadItem = {
                            url: `/acts/rules/${actData.slug}-${selectedState
                              .toLowerCase()
                              .replace(/ /g, "-")}-rules.pdf`,
                            filename: `${actData.title.replace(
                              /[^a-zA-Z0-9]/g,
                              "-"
                            )}-${selectedState}-Rules.pdf`,
                            format: "PDF",
                          };
                          await downloadFile(downloadItem);
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 
                                 text-[10px] sm:text-xs lg:text-sm rounded-md transition-colors duration-200 h-auto hover:cursor-pointer"
                        aria-label="download rules"
                      >
                        <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 " />
                        Download Rules
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4">
                    {stateSpecificRules.length > 0 ? (
                      stateSpecificRules.map((rule) => (
                        <div
                          key={rule.id}
                          className="space-y-2 sm:space-y-3 p-2 sm:p-3 bg-gray-50 rounded-md lg:rounded-lg"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <h4 className="font-semibold text-xs sm:text-sm lg:text-base text-gray-900 mb-1">
                                {rule.title}
                              </h4>
                              <p className="text-gray-700 leading-relaxed text-[10px] sm:text-xs lg:text-sm">
                                {rule.description}
                              </p>
                            </div>
                            <Badge
                              variant="secondary"
                              className="text-[9px] sm:text-[10px] flex-shrink-0"
                            >
                              {rule.state}
                            </Badge>
                          </div>

                          <Separator className="bg-gray-200" />

                          <div>
                            <h5 className="font-semibold mb-1.5 sm:mb-2 text-[10px] sm:text-xs lg:text-sm text-gray-900">
                              Key Implementation Guidelines:
                            </h5>
                            <ul className="space-y-1 sm:space-y-1.5">
                              <li className="flex items-start gap-1.5 sm:gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-gray-700 text-[10px] sm:text-xs lg:text-sm">
                                  State-specific compliance requirements and
                                  procedures for factory registration
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5 sm:gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-gray-700 text-[10px] sm:text-xs lg:text-sm">
                                  Documentation and record-keeping obligations
                                  with digital filing options
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5 sm:gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-gray-700 text-[10px] sm:text-xs lg:text-sm">
                                  Safety standards and inspection protocols
                                  specific to {selectedState}
                                </span>
                              </li>
                              <li className="flex items-start gap-1.5 sm:gap-2">
                                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 rounded-full mt-1.5 flex-shrink-0" />
                                <span className="text-gray-700 text-[10px] sm:text-xs lg:text-sm">
                                  Worker welfare provisions and grievance
                                  redressal mechanisms
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                          <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                          No specific rules available for {selectedState}
                        </p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">
                          Please check Central Rules or contact local factory
                          inspector
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Forms Tab */}
              <TabsContent
                value="forms"
                className="space-y-2 sm:space-y-3 lg:space-y-4"
              >
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Forms</span>
                      </CardTitle>
                      {/* <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[10px] sm:text-xs border-orange-200 text-orange-700">
                          {formsCount} Forms Available
                        </Badge>
                      </div> */}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Mobile & Small Tablet Card View */}
                    <div className="block lg:hidden">
                      <div className="space-y-2 sm:space-y-2.5 p-2 sm:p-3">
                        {formsData.map((form) => (
                          <Card
                            key={form.id}
                            className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            <CardContent className="p-2 sm:p-3">
                              <div className="flex flex-col gap-2">
                                <div className="flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    {/* <Badge variant="outline" className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mb-1">
                                      {form.formNumber}
                                    </Badge> */}
                                    <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm truncate">
                                      {form.title}
                                    </h4>
                                  </div>
                                </div>
                                <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
                                  {form.description}
                                </p>
                                <div className="flex gap-1.5">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex-1 text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white"
                                    onClick={() => handleFormDownload(form)}
                                  >
                                    <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                    Download
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50 border-gray-200 ">
                            <TableHead className="w-16 text-[10px] sm:text-xs font-semibold py-2 2xl:text-[1rem]">
                              Form No.
                            </TableHead>
                            <TableHead className="text-[10px] sm:text-xs font-semibold py-2 2xl:text-[1rem]">
                              Title
                            </TableHead>
                            <TableHead className="hidden xl:table-cell text-[10px] sm:text-xs font-semibold py-2 2xl:text-[1rem]">
                              Description
                            </TableHead>
                            <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-[1rem]">
                              Actions
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {formsData.map((form, index) => (
                            <TableRow
                              key={form.id}
                              className="hover:bg-gray-50 transition-colors border-gray-200"
                            >
                              <TableCell className="py-2">
                                <Badge
                                  variant="outline"
                                  className="text-[10px] text-orange-600 border-orange-200 2xl:text-[0.8rem]"
                                >
                                  {form.formNumber}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-medium text-[11px] sm:text-xs py-2 2xl:text-[0.8rem]">
                                {form.title}
                              </TableCell>
                              <TableCell className="hidden xl:table-cell text-[11px] text-gray-600 py-2 max-w-xs 2xl:text-[0.8rem]">
                                <span className="line-clamp-2">
                                  {form.description}
                                </span>
                              </TableCell>
                              <TableCell className="py-2">
                                <div className="flex gap-1">
                                  <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-7 px-2 bg-orange-400 text-white 2xl:text-[0.8rem] hover:cursor-pointer"
                                    onClick={() => handleFormDownload(form)}
                                  >
                                    <Download className="w-3 h-3 mr-1" />
                                    Download
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar - Compact & Functional */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
              {/* Popular Searches */}
              <Card className="shadow-sm border-gray-200">
                <CardContent className="p-2 sm:p-3 h-[25rem]">
                  <PopularSearch className="mb-2 sm:mb-3" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

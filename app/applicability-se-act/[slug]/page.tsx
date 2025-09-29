
"use client";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  Users,
XCircle
} from "lucide-react";

// Sample data for state details
const getStateDetails = (slug: string) => {
  const stateData: Record<string, any> = {
    "andhra-pradesh": {
      name: "Andhra Pradesh",
      code: "AP",
      applicable: true,
      act: "The Andhra Pradesh Shops and Commercial Establishments Act, 1988",
      lastUpdated: "15 March 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: [
        "26th January (Republic Day)",
        "15th August (Independence Day)",
        "2nd October (Gandhi Jayanti)",
        "State specific festivals as notified",
      ],
      registration: {
        required: true,
        fee: "₹500 - ₹2000 (based on employees)",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹500 - ₹2000",
        violations: "₹100 - ₹500 per violation",
        repeatOffense: "₹1000 - ₹5000",
      },
    },
    maharashtra: {
      name: "Maharashtra",
      code: "MH",
      applicable: true,
      act: "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017",
      lastUpdated: "10 February 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: [
        "26th January (Republic Day)",
        "15th August (Independence Day)",
        "2nd October (Gandhi Jayanti)",
        "Maharashtra Day",
        "Gudi Padwa",
      ],
      registration: {
        required: true,
        fee: "₹200 - ₹5000 (based on employees)",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹1000 - ₹5000",
        violations: "₹500 - ₹2000 per violation",
        repeatOffense: "₹2000 - ₹10000",
      },
    },
  };

  return (
    stateData[slug] || {
      name: "Sample State",
      code: "SS",
      applicable: true,
      act: "The Sample State Shops and Establishments Act",
      lastUpdated: "01 January 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: [
        "26th January (Republic Day)",
        "15th August (Independence Day)",
        "2nd October (Gandhi Jayanti)",
      ],
      registration: {
        required: true,
        fee: "₹500 - ₹2000",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹500 - ₹2000",
        violations: "₹100 - ₹500 per violation",
        repeatOffense: "₹1000 - ₹5000",
      },
    }
  );
};

export default function StateDetailPage() {
  // For demo purposes, using a default slug
  const slug = "andhra-pradesh";
  const stateDetails = getStateDetails(slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        
        {/* Popular Search - Top for Mobile/Tablet */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        {/* Page Header */}
        <div className="mb-4 sm:mb-5 lg:mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-2xl font-semibold text-slate-800 leading-tight">
            {stateDetails.name} - S&E Act Details
          </h2>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-3 lg:space-y-4">
            {/* Act Information */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-orange-600 transition-colors">
                  <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  Act Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="space-y-3 lg:space-y-4">
                  <div>
                    <h3 className="font-semibold text-sm lg:text-base text-slate-800 mb-1 lg:mb-2">
                      Governing Act
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">{stateDetails.act}</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 px-3 lg:px-4">
                    <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                    Download Act Document
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Applicability Matrix */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Building2 className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  Applicability Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
                  {Object.entries(stateDetails.applicability).map(
                    ([type, applicable]) => (
                      <div
                        key={type}
                        className="flex items-center justify-between p-2 lg:p-3 rounded-lg border border-gray-200 hover:bg-orange-50 transition-colors"
                      >
                        <span className="font-medium text-xs lg:text-sm text-slate-800 capitalize">
                          {type}
                        </span>
                        <Badge
                          className={
                            applicable === "Yes"
                              ? "bg-green-100 text-green-800 text-xs"
                              : "bg-gray-100 text-gray-600 text-xs"
                          }
                        >
                          {applicable === "Yes" ? (
                            <CheckCircle className="w-2 h-2 lg:w-3 lg:h-3 mr-1 text-green-600" />
                          ) : (
                            <XCircle className="w-2 h-2 lg:w-3 lg:h-3 mr-1 text-red-600" />
                          )}
                          {applicable as string}
                        </Badge>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Clock className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  Working Hours & Overtime
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
                  <div className="p-3 lg:p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Daily Hours
                    </h3>
                    <p className="text-lg lg:text-2xl font-bold text-orange-600">
                      {stateDetails.workingHours.daily}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Weekly Hours
                    </h3>
                    <p className="text-lg lg:text-2xl font-bold text-orange-600">
                      {stateDetails.workingHours.weekly}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Overtime
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 font-medium">
                      {stateDetails.workingHours.overtime}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Requirements */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Users className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  Registration Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Registration Required
                    </h3>
                    <Badge
                      className={
                        stateDetails.registration.required
                          ? "bg-green-100 text-green-800 text-xs"
                          : "bg-gray-100 text-gray-600 text-xs"
                      }
                    >
                      {stateDetails.registration.required ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Registration Fee
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 font-medium">
                      {stateDetails.registration.fee}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Validity
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 font-medium">
                      {stateDetails.registration.validity}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Renewal
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-700 font-medium">
                      {stateDetails.registration.renewal}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Holidays */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-orange-600" />
                  Mandatory Holidays
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="grid gap-2 lg:gap-3">
                  {stateDetails.holidays.map(
                    (holiday: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 lg:gap-3 p-2 lg:p-3 rounded-lg border border-gray-200 hover:bg-orange-50 transition-colors"
                      >
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-xs lg:text-sm font-semibold text-orange-700">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-xs lg:text-sm text-gray-700">{holiday}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Penalties */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="flex items-center gap-2 lg:gap-3 text-base lg:text-lg text-slate-800 group-hover:text-red-600 transition-colors">
                  <AlertTriangle className="w-5 h-5 lg:w-6 lg:h-6 text-red-600" />
                  Penalties & Consequences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="grid gap-3 lg:gap-4">
                  <div className="p-3 lg:p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Non-Registration
                    </h3>
                    <p className="text-red-600 font-medium text-xs lg:text-sm">
                      {stateDetails.penalties.nonRegistration}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Act Violations
                    </h3>
                    <p className="text-red-600 font-medium text-xs lg:text-sm">
                      {stateDetails.penalties.violations}
                    </p>
                  </div>
                  <div className="p-3 lg:p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-xs lg:text-sm text-slate-800 mb-1 lg:mb-2">
                      Repeat Offense
                    </h3>
                    <p className="text-red-600 font-medium text-xs lg:text-sm">
                      {stateDetails.penalties.repeatOffense}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
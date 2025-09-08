"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from 'lucide-react'
import { useParams } from "next/navigation"
import PopularSearch from "@/app/PopularSearch/PopularSearch" // Adjust the import path as needed

// Mock database of gazette notifications with SEO-friendly slugs
const notificationsDatabase = {
  "maharashtra-minimum-wages-revision-2025": {
    id: 1,
    title: "Notification regarding revision of Minimum Wages for Maharashtra State",
    slug: "maharashtra-minimum-wages-revision-2025",
    state: "Maharashtra",
    description: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
    updatedDate: "30th Aug, 2025",
    effectiveDate: "30th Aug, 2025",
    impact: [
      "Increased minimum wage rates will affect over 2.5 million workers across various sectors in Maharashtra",
      "Employers must comply with new wage structures within 30 days of notification to avoid penalties",
      "Enhanced worker purchasing power is expected to boost local economy and consumer spending",
      "Industries including manufacturing, construction, and services will need to adjust their payroll systems"
    ]
  },
  "contract-labour-rules-amendment-2024": {
    id: 2,
    title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
    slug: "contract-labour-rules-amendment-2024",
    state: "Central",
    description: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
    updatedDate: "18th Dec, 2024",
    effectiveDate: "18th Dec, 2024",
    impact: [
      "Streamlined registration process for contractors and principal employers across all states",
      "Enhanced compliance monitoring through digital platforms and automated reporting systems",
      "Improved welfare measures for contract workers including better working conditions and benefits",
      "Stricter penalties for non-compliance may increase operational costs for non-compliant businesses"
    ]
  },
  "karnataka-professional-tax-rates-2025": {
    id: 3,
    title: "Notification on Professional Tax rates for Karnataka - 2025",
    slug: "karnataka-professional-tax-rates-2025",
    state: "Karnataka",
    description: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
    updatedDate: "15th Dec, 2024",
    effectiveDate: "1st Apr, 2025",
    impact: [
      "Revised tax slabs will affect approximately 8 million professionals and employees in Karnataka",
      "Increased revenue generation for state development projects and infrastructure improvements",
      "Employers need to update payroll systems to reflect new professional tax deductions",
      "Enhanced digital payment options will simplify tax compliance for businesses and individuals"
    ]
  },
  "west-bengal-bengali-language-signage-2025": {
    id: 4,
    title: "ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025",
    slug: "west-bengal-bengali-language-signage-2025",
    state: "Central",
    description: "The Press Information Bureau released news regarding ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025. Please refer the press release for more details.",
    updatedDate: "1st Sep, 2025",
    effectiveDate: "1st Feb, 2025",
    impact: [
      "Opportunity for employers to regularize pending ESIC contributions without additional penalties",
      "Simplified compliance process will encourage more businesses to participate in social security schemes",
      "Enhanced medical and cash benefits coverage for previously non-compliant employees",
      "Reduced administrative burden on businesses through one-time settlement of outstanding dues"
    ]
  }
}

export default function NotificationDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
  // Default to first notification if slug not found
  const displayData = notificationData || notificationsDatabase["west-bengal-bengali-language-signage-2025"]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="
        container mx-auto
        px-3 py-2
        min-[375px]:px-4 min-[375px]:py-3
        sm:px-6 sm:py-3
        lg:px-8 lg:py-4
        xl:px-12
        max-w-7xl
      ">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          
          {/* Popular Search - Shows on top for small devices */}
          <div className="lg:hidden">
            <Card>
              <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
                <PopularSearch className="mb-0" />
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Card with Orange Left Border - Minimized Height */}
            <div className="
              bg-white rounded-lg shadow-sm border border-gray-200
              border-l-4 border-l-orange-500
              p-3 sm:p-4 lg:p-4
            ">
              
              {/* Header Section */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <h1 className="
                    font-bold text-gray-900 leading-tight mb-1
                    text-base sm:text-lg lg:text-sm xl:text-lg
                  ">
                    {displayData.title}
                  </h1>
                  
                  <div className="text-xs sm:text-sm text-gray-500 mb-2 space-y-1">
                    <div>
                      <span className="font-medium text-gray-700">Updated Date:</span> {displayData.updatedDate}  <span className="font-medium text-gray-700">/ Effective Date:</span> {displayData.effectiveDate}
                    </div>
                    <div>
                      {/* <span className="font-medium text-gray-700">/Effective Date:</span> {displayData.effectiveDate} */}
                    </div>
                  </div>
                </div>
                
                {/* State Badge */}
                <Badge className="
                  bg-orange-100 text-orange-700 border-orange-200
                  text-xs sm:text-sm px-2 py-1 flex-shrink-0
                ">
                  {displayData.state}
                </Badge>
              </div>
              
              {/* Description */}
              <div className="mb-3">
                <p className="
                  text-gray-700 leading-relaxed
                  text-sm sm:text-base text-justify lg:text-sm
                ">
                  {displayData.description}
                </p>
              </div>

              {/* Impact Section */}
              <div className="mb-3">
                <h3 className="
                  font-semibold text-gray-900 mb-2
                  text-sm sm:text-base lg:text-md
                ">
                  Impact :
                </h3>
                <div className="space-y-2">
                  {displayData.impact?.map((impactPoint, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="
                        w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 flex-shrink-0
                      "></div>
                      <p className="
                        text-gray-700 leading-relaxed
                        text-sm sm:text-base lg:text-sm
                      ">
                        {impactPoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Download Button - Orange Color */}
              <div className="flex justify-start">
                <Button className="
                  bg-orange-500 hover:bg-orange-600 text-white
                  px-4 py-2 sm:px-5 sm:py-2
                  text-sm sm:text-base
                  rounded-md font-medium
                  inline-flex items-center gap-2 hover:cursor-pointer
                ">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
              
            </div>
          </div>

          {/* Popular Search - Shows on right side for large devices */}
          <div className="hidden lg:block lg:col-span-1">
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
  )
}
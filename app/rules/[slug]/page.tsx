"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, BookOpen, MapPin, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"
import PopularSearchBoxes from "@/app/PopularSearchBoxes/PopularSearchBoxes"

interface RuleDetail {
  id: number
  title: string
  state: string
  relatedAct: string
  slug: string
  description: string
  dateOfNotification: string
  lastAmended: string
  applicability: string
  keyProvisions: string[]
  sections: Array<{
    title: string
    content: string
  }>
}

const ruleDetailsData: { [key: string]: RuleDetail } = {
  "factories-central-rules-1950": {
    id: 1,
    title: "The Factories (Central) Rules, 1950",
    state: "Central",
    relatedAct: "The Factories Act, 1948",
    slug: "factories-central-rules-1950",
    description:
      "These rules provide detailed procedures for the implementation of the Factories Act, 1948, covering safety, health, welfare, and working hours in factories.",
    dateOfNotification: "1950-08-15",
    lastAmended: "2023-03-15",
    applicability: "All factories employing 10 or more workers with power, or 20 or more workers without power",
    keyProvisions: [
      "Safety measures and precautions in factories",
      "Health and welfare provisions for workers",
      "Working hours and overtime regulations",
      "Leave and holiday entitlements",
      "Factory registration and licensing procedures",
    ],
    sections: [
      {
        title: "Chapter I - Preliminary",
        content:
          "This chapter covers definitions, scope, and general provisions applicable to all factories under the Act.",
      },
      {
        title: "Chapter II - Health Provisions",
        content:
          "Detailed provisions regarding cleanliness, ventilation, temperature, dust and fume control, artificial humidification, overcrowding, lighting, drinking water, latrines and urinals, and spittoons.",
      },
      {
        title: "Chapter III - Safety Provisions",
        content:
          "Safety requirements for machinery, work on or near machinery in motion, employment of young persons on dangerous machines, striking gear and devices for cutting off power, self-acting machines, casing of new machinery, prohibition of employment of women and children near cotton-openers.",
      },
    ],
  },
  "maharashtra-factories-rules-1963": {
    id: 2,
    title: "Maharashtra Factories Rules, 1963",
    state: "Maharashtra",
    relatedAct: "The Factories Act, 1948",
    slug: "maharashtra-factories-rules-1963",
    description:
      "State-specific rules for Maharashtra implementing the Factories Act, 1948 with additional provisions for local conditions.",
    dateOfNotification: "1963-04-01",
    lastAmended: "2022-12-10",
    applicability: "All factories located within the state of Maharashtra",
    keyProvisions: [
      "State-specific safety and health standards",
      "Local factory inspection procedures",
      "Maharashtra-specific welfare measures",
      "Regional compliance requirements",
    ],
    sections: [
      {
        title: "Part I - General",
        content: "General provisions and definitions specific to Maharashtra state implementation.",
      },
      {
        title: "Part II - Health and Safety",
        content: "Enhanced health and safety provisions tailored for Maharashtra's industrial landscape.",
      },
    ],
  },
}

export default function RuleDetailPage({ params }: { params: { slug: string } }) {
  const rule = ruleDetailsData[params.slug]

  if (!rule) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Rule Not Found</h2>
            <p className="text-gray-500 mb-6">The requested rule could not be found in our database.</p>
            <Link href="/acts">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Acts
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleDownload = async () => {
    const downloadItem: DownloadItem = {
      url: `/rules/downloads/${rule.slug}.pdf`,
      filename: `${rule.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    }

    await downloadFile(downloadItem)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <PopularSearchBoxes/>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <Badge variant="outline" className="mb-3 font-medium">
              <MapPin className="w-3 h-3 mr-1.5" />
              {rule.state}
            </Badge>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{rule.title}</h1>
            <p className="text-gray-600">Related Act: {rule.relatedAct}</p>
          </div>
          <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 mt-4">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>

      {/* Rule Overview */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            Rule Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{rule.description}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Important Dates
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date of Notification:</span>
                  <span className="font-medium">{new Date(rule.dateOfNotification).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Amended:</span>
                  <span className="font-medium">{new Date(rule.lastAmended).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Applicability</h3>
              <p className="text-sm text-gray-700">{rule.applicability}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Provisions */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Key Provisions</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {rule.keyProvisions.map((provision, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{provision}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Sections */}
      <Card>
        <CardHeader>
          <CardTitle>Sections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {rule.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-l-blue-500 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

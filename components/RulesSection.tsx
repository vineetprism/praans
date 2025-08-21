"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, MapPin } from "lucide-react"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"

interface Rule {
  id: number
  title: string
  state: string
  relatedAct: string
  slug: string
}

interface RulesSectionProps {
  actTitle: string
  actSlug: string
}

const rulesData: { [key: string]: Rule[] } = {
  "factories-act-1948": [
    {
      id: 1,
      title: "The Factories (Central) Rules, 1950",
      state: "Central",
      relatedAct: "The Factories Act, 1948",
      slug: "factories-central-rules-1950",
    },
    {
      id: 2,
      title: "Maharashtra Factories Rules, 1963",
      state: "Maharashtra",
      relatedAct: "The Factories Act, 1948",
      slug: "maharashtra-factories-rules-1963",
    },
    {
      id: 3,
      title: "Karnataka Factories Rules, 1969",
      state: "Karnataka",
      relatedAct: "The Factories Act, 1948",
      slug: "karnataka-factories-rules-1969",
    },
  ],
  "contract-labour-act-1970": [
    {
      id: 1,
      title: "The Contract Labour (Regulation and Abolition) Central Rules, 1971",
      state: "Central",
      relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
      slug: "contract-labour-central-rules-1971",
    },
    {
      id: 2,
      title: "Maharashtra Contract Labour Rules, 1975",
      state: "Maharashtra",
      relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
      slug: "maharashtra-contract-labour-rules-1975",
    },
  ],
  "payment-of-wages-act-1936": [
    {
      id: 1,
      title: "The Payment of Wages (Mines) Rules, 1956",
      state: "Central",
      relatedAct: "The Payment of Wages Act, 1936",
      slug: "payment-of-wages-mines-rules-1956",
    },
    {
      id: 2,
      title: "The Payment of Wages (Railway) Rules, 1959",
      state: "Central",
      relatedAct: "The Payment of Wages Act, 1936",
      slug: "payment-of-wages-railway-rules-1959",
    },
  ],
}

export default function RulesSection({ actTitle, actSlug }: RulesSectionProps) {
  const rules = rulesData[actSlug] || []

  const handleDownload = async (rule: Rule) => {
    const downloadItem: DownloadItem = {
      url: `/rules/downloads/${rule.slug}.pdf`,
      filename: `${rule.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    }

    await downloadFile(downloadItem)
  }

  if (rules.length === 0) {
    return (
      <Card>
        <CardHeader>
          {/* <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            Related Rules
          </CardTitle> */}
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No Rules Available</h3>
            <p className="text-gray-500">Rules for this act are not currently available in our database.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-orange-500" />
          Related Rules
        </CardTitle>
        <p className="text-gray-600 mt-2">
          Rules are legislative pieces providing guidelines which define the procedures for performing and implementing
          the {actTitle}.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {rules.map((rule) => (
            <Card
              key={rule.id}
              className="transition-all duration-300 shadow-md hover:shadow-xl border-l-4 border-l-blue-500"
            >
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 mb-4 sm:mb-0">
                    <Badge variant="outline" className="mb-3 font-medium">
                      <MapPin className="w-3 h-3 mr-1.5" />
                      {rule.state}
                    </Badge>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{rule.title}</h3>
                    <p className="text-sm text-gray-500">Related Act: {rule.relatedAct}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read More
                    </Button>
                    {/* <Button
                      size="sm"
                      className="bg-orange-500 hover:bg-orange-600"
                      onClick={() => handleDownload(rule)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

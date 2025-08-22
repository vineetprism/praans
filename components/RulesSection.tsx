// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Download, BookOpen, MapPin } from "lucide-react"
// import { downloadFile, type DownloadItem } from "@/lib/download-utils"
// import Link from "next/link"

// interface Rule {
//   id: number
//   title: string
//   state: string
//   relatedAct: string
//   slug: string
// }

// interface RulesSectionProps {
//   actTitle: string
//   actSlug: string
// }

// const rulesData: { [key: string]: Rule[] } = {
//   "factories-act-1948": [
//     {
//       id: 1,
//       title: "The Factories (Central) Rules, 1950",
//       state: "Central",
//       relatedAct: "The Factories Act, 1948",
//       slug: "factories-central-rules-1950",
//     },
//     {
//       id: 2,
//       title: "Maharashtra Factories Rules, 1963",
//       state: "Maharashtra",
//       relatedAct: "The Factories Act, 1948",
//       slug: "maharashtra-factories-rules-1963",
//     },
//     {
//       id: 3,
//       title: "Karnataka Factories Rules, 1969",
//       state: "Karnataka",
//       relatedAct: "The Factories Act, 1948",
//       slug: "karnataka-factories-rules-1969",
//     },
//   ],
//   "contract-labour-act-1970": [
//     {
//       id: 1,
//       title: "The Contract Labour (Regulation and Abolition) Central Rules, 1971",
//       state: "Central",
//       relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
//       slug: "contract-labour-central-rules-1971",
//     },
//     {
//       id: 2,
//       title: "Maharashtra Contract Labour Rules, 1975",
//       state: "Maharashtra",
//       relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
//       slug: "maharashtra-contract-labour-rules-1975",
//     },
//   ],
//   "payment-of-wages-act-1936": [
//     {
//       id: 1,
//       title: "The Payment of Wages (Mines) Rules, 1956",
//       state: "Central",
//       relatedAct: "The Payment of Wages Act, 1936",
//       slug: "payment-of-wages-mines-rules-1956",
//     },
//     {
//       id: 2,
//       title: "The Payment of Wages (Railway) Rules, 1959",
//       state: "Central",
//       relatedAct: "The Payment of Wages Act, 1936",
//       slug: "payment-of-wages-railway-rules-1959",
//     },
//   ],
// }

// export default function RulesSection({ actTitle, actSlug }: RulesSectionProps) {
//   const rules = rulesData[actSlug] || []

//   const handleDownload = async (rule: Rule) => {
//     const downloadItem: DownloadItem = {
//       url: `/rules/downloads/${rule.slug}.pdf`,
//       filename: `${rule.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
//       format: "PDF",
//     }

//     await downloadFile(downloadItem)
//   }

//   if (rules.length === 0) {
//     return (
//       <Card>
//         <CardHeader>
//           {/* <CardTitle className="flex items-center gap-2">
//             <BookOpen className="w-5 h-5 text-orange-500" />
//             Related Rules
//           </CardTitle> */}
//         </CardHeader>
//         <CardContent>
//           <div className="text-center py-8">
//             <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-semibold text-gray-600 mb-2">No Rules Available</h3>
//             <p className="text-gray-500">Rules for this act are not currently available in our database.</p>
//           </div>
//         </CardContent>
//       </Card>
//     )
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//           <BookOpen className="w-5 h-5 text-orange-500" />
//           Related Rules
//         </CardTitle>
//         <p className="text-gray-600 mt-2">
//           Rules are legislative pieces providing guidelines which define the procedures for performing and implementing
//           the {actTitle}.
//         </p>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-6">
//           {rules.map((rule) => (
//             <Card
//               key={rule.id}
//               className="transition-all duration-300 shadow-md hover:shadow-xl border-l-4 border-l-blue-500"
//             >
//               <CardContent className="p-6">
//                 <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
//                   <div className="flex-1 mb-4 sm:mb-0">
//                     <Badge variant="outline" className="mb-3 font-medium">
//                       <MapPin className="w-3 h-3 mr-1.5" />
//                       {rule.state}
//                     </Badge>
//                     <h3 className="text-xl font-semibold text-slate-800 mb-2">{rule.title}</h3>
//                     <p className="text-sm text-gray-500">Related Act: {rule.relatedAct}</p>
//                   </div>
//                   <div className="flex items-center gap-3 flex-shrink-0">
//                     <Link href={`/rules/${rule.slug}`}>
//                       <Button variant="outline" size="sm">
//                         <BookOpen className="w-4 h-4 mr-2" />
//                         Read More
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }












"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, BookOpen, MapPin, ChevronDown, ChevronUp, Scale } from "lucide-react"
import { downloadFile, type DownloadItem } from "@/lib/download-utils"
import { useState } from "react"

interface Rule {
  id: number
  title: string
  state: string
  relatedAct: string
  slug: string
  objective?: string
  applicability?: string
  keyProvisions?: string[]
  penalties?: string
  sections?: { title: string; content: string }[]
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
      objective:
        "To provide detailed procedures and guidelines for the implementation of safety, health, and welfare provisions under the Factories Act, 1948.",
      applicability:
        "All factories registered under the Factories Act, 1948 across India, employing 10 or more workers with power or 20 or more workers without power.",
      keyProvisions: [
        "Safety measures and precautions in factories",
        "Health standards and medical facilities",
        "Welfare provisions for workers",
        "Working hours and overtime regulations",
        "Factory licensing and registration procedures",
        "Inspection and compliance requirements",
      ],
      penalties: "Fine up to ₹25,000 and/or imprisonment up to 3 months for violations",
      sections: [
        {
          title: "Safety Provisions",
          content:
            "Detailed safety measures including machinery guarding, electrical safety, fire prevention, and emergency procedures.",
        },
        {
          title: "Health Standards",
          content:
            "Requirements for ventilation, lighting, drinking water, latrines, and medical facilities in factories.",
        },
      ],
    },
    {
      id: 2,
      title: "Maharashtra Factories Rules, 1963",
      state: "Maharashtra",
      relatedAct: "The Factories Act, 1948",
      slug: "maharashtra-factories-rules-1963",
      objective:
        "State-specific implementation guidelines for factories operating in Maharashtra under the Factories Act, 1948.",
      applicability:
        "All factories located within the state of Maharashtra employing the prescribed number of workers.",
      keyProvisions: [
        "State-specific safety protocols",
        "Maharashtra factory registration procedures",
        "Local health and welfare standards",
        "State inspection mechanisms",
      ],
      penalties: "As per Maharashtra state regulations and Factories Act provisions",
    },
    {
      id: 3,
      title: "Karnataka Factories Rules, 1969",
      state: "Karnataka",
      relatedAct: "The Factories Act, 1948",
      slug: "karnataka-factories-rules-1969",
      objective:
        "Karnataka state-specific rules for factory operations, safety, and worker welfare under the Factories Act.",
      applicability: "All factories operating within Karnataka state boundaries.",
      keyProvisions: [
        "Karnataka-specific safety measures",
        "State factory licensing procedures",
        "Local compliance requirements",
        "Worker welfare standards for Karnataka",
      ],
      penalties: "State penalties as prescribed under Karnataka factory regulations",
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
  const [expandedRule, setExpandedRule] = useState<number | null>(null)

  const handleDownload = async (rule: Rule) => {
    const downloadItem: DownloadItem = {
      url: `/rules/downloads/${rule.slug}.pdf`,
      filename: `${rule.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    }

    await downloadFile(downloadItem)
  }

  const toggleRuleDetails = (ruleId: number) => {
    setExpandedRule(expandedRule === ruleId ? null : ruleId)
  }

  if (rules.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            Related Rules
          </CardTitle>
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
              className="transition-all duration-300 shadow-md hover:shadow-xl border-l-4 border-l-orange-500"
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
                    <Button variant="outline" size="sm" onClick={() => toggleRuleDetails(rule.id)}>
                      <BookOpen className="w-4 h-4 mr-2" />
                      {expandedRule === rule.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 ml-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 ml-1" />
                          Read More
                        </>
                      )}
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

                {expandedRule === rule.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Scale className="w-5 h-5 text-orange-500" />
                        <h4 className="text-lg font-semibold text-slate-800">Rule Overview</h4>
                      </div>

                      {rule.objective && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-2">Objective</h5>
                          <p className="text-gray-700 leading-relaxed">{rule.objective}</p>
                        </div>
                      )}

                      {rule.applicability && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-2">Applicability</h5>
                          <p className="text-gray-700 leading-relaxed">{rule.applicability}</p>
                        </div>
                      )}

                      {rule.keyProvisions && rule.keyProvisions.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-3">Key Provisions</h5>
                          <ul className="space-y-2">
                            {rule.keyProvisions.map((provision, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{provision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {rule.sections && rule.sections.length > 0 && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-3">Key Sections</h5>
                          <div className="space-y-4">
                            {rule.sections.map((section, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <h6 className="font-medium text-slate-800 mb-2">{section.title}</h6>
                                <p className="text-gray-700 text-sm">{section.content}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {rule.penalties && (
                        <div>
                          <h5 className="font-semibold text-slate-800 mb-2">Penalties</h5>
                          <p className="text-gray-700 leading-relaxed">{rule.penalties}</p>
                        </div>
                      )}

                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h5 className="font-semibold text-slate-800 mb-2">Download Rule Document</h5>
                        <p className="text-gray-600 text-sm mb-3">
                          Get the complete rule document with all sections, amendments, and official notifications.
                        </p>
                        <Button className="bg-orange-500 hover:bg-orange-600" onClick={() => handleDownload(rule)}>
                          <Download className="w-4 h-4 mr-2" />
                          Download Complete Rule (PDF)
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

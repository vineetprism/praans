import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Eye, Calendar, MapPin, FileText, ChevronRight, Home, Building2, Scale, BookOpen, AlertCircle, Share2, Bookmark, Clock, Users, Gavel, ExternalLink } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'

// Mock database of rules with SEO-friendly slugs
const rulesDatabase = {
  "payment-of-wages-mines-rules-1956": {
    id: 1,
    title: "The Payment of Wages (Mines) Rules, 1956",
    slug: "payment-of-wages-mines-rules-1956",
    fullTitle: "Rules made under the Payment of Wages Act, 1936 for application to mines",
    state: "Central",
    relatedAct: "The Payment of Wages Act, 1936",
    relatedActSlug: "payment-of-wages-act-1936",
    year: "1956",
    ruleNumber: "G.S.R. 1025, dated 15th September, 1956",
    lastUpdated: "2024-11-20",
    effectiveDate: "1956-10-01",
    totalRules: 26,
    chapters: 4,
    applicability: "All mines employing workers covered under the Payment of Wages Act, 1936",
    objective: "To provide detailed procedures and guidelines for the implementation of wage payment provisions specifically in mining establishments.",
    keyProvisions: [
      "Wage payment procedures in mines",
      "Deduction rules specific to mining operations",
      "Record maintenance requirements",
      "Penalty provisions for violations",
      "Dispute resolution mechanisms",
      "Special provisions for underground workers"
    ],
    penalties: "Fine up to ₹200 for breach of rules 3, 4, 5, 6, 8, 12, 15 or 18",
    amendments: [
      {
        year: "2023",
        description: "Digital compliance mechanisms and online wage payment systems",
        date: "2023-06-15"
      },
      {
        year: "2018",
        description: "Updated penalty provisions and record maintenance requirements",
        date: "2018-09-10"
      }
    ]
  },
  "contract-labour-central-rules-1971": {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Central Rules, 1971",
    slug: "contract-labour-central-rules-1971",
    fullTitle: "Rules made under the Contract Labour (Regulation and Abolition) Act, 1970",
    state: "Central",
    relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
    relatedActSlug: "contract-labour-act-1970",
    year: "1971",
    ruleNumber: "G.S.R. 131, dated 20th February, 1971",
    lastUpdated: "2024-10-15",
    effectiveDate: "1971-02-20",
    totalRules: 85,
    chapters: 8,
    applicability: "All establishments employing contract labour as defined under the Act",
    objective: "To provide detailed procedures for registration, licensing, and welfare of contract workers.",
    keyProvisions: [
      "Registration procedures for establishments",
      "Licensing requirements for contractors",
      "Welfare facilities for contract workers",
      "Wage payment through principal employer",
      "Health and safety provisions",
      "Record maintenance and returns"
    ],
    penalties: "Fine and imprisonment as prescribed under the parent Act",
    amendments: [
      {
        year: "2021",
        description: "Digital registration and online compliance mechanisms",
        date: "2021-09-29"
      }
    ]
  }
}

const sections = [
  {
    chapter: "Chapter I",
    title: "Preliminary",
    rules: "1-2",
    description: "Short title, commencement and definitions"
  },
  {
    chapter: "Chapter II",
    title: "Payment of Wages",
    rules: "3-12",
    description: "Procedures for wage payment, time limits, and authorized deductions"
  },
  {
    chapter: "Chapter III",
    title: "Records and Returns",
    rules: "13-20",
    description: "Maintenance of wage registers, muster rolls, and statutory returns"
  },
  {
    chapter: "Chapter IV",
    title: "Penalties and Miscellaneous",
    rules: "21-26",
    description: "Penalty provisions, appeals, and other miscellaneous matters"
  }
]

const relatedRules = [
  {
    title: "The Payment of Wages (Railway) Rules, 1956",
    state: "Central",
    relevance: "Similar wage payment rules for railway establishments",
    slug: "payment-of-wages-railway-rules-1956"
  },
  {
    title: "The Minimum Wages (Central) Rules, 1950",
    state: "Central",
    relevance: "Complementary rules for minimum wage implementation",
    slug: "minimum-wages-central-rules-1950"
  },
  {
    title: "Maharashtra Payment of Wages Rules, 1957",
    state: "Maharashtra",
    relevance: "State-specific implementation of wage payment rules",
    slug: "maharashtra-payment-wages-rules-1957"
  }
]

interface RuleDetailPageProps {
  params: {
    slug: string
  }
}

export default function RuleDetailPage({ params }: RuleDetailPageProps) {
  const ruleData = rulesDatabase[params.slug as keyof typeof rulesDatabase]
  
  if (!ruleData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Pragans Consultech" 
                width={180} 
                height={40}
                className="h-10 w-auto"
                priority
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'block';
                }}
              />
              <div className="hidden text-xl font-bold text-orange-500">
                Pragans Consultech
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">Acts</Link>
              <Link href="/rules" className="text-orange-500 font-medium">Rules</Link>
              <Link href="/forms" className="text-gray-600 hover:text-orange-500 transition-colors">Forms</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Home className="w-4 h-4" />
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/rules" className="hover:text-orange-500">Rules</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-orange-500 font-medium">{ruleData.title}</span>
        </nav>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Rule Header */}
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-slate-800">
                        <Building2 className="w-3 h-3 mr-1" />
                        {ruleData.state}
                      </Badge>
                      <Badge variant="outline">
                        Rules
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {ruleData.ruleNumber}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold text-slate-800 mb-3 leading-tight">
                      {ruleData.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {ruleData.fullTitle}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Related Act Link */}
                <div className="mb-4">
                  <Link 
                    href={`/acts/${ruleData.relatedActSlug}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <Scale className="w-4 h-4" />
                    <span className="font-medium">Related Act: {ruleData.relatedAct}</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                {/* Rule Metadata */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{ruleData.year}</div>
                    <div className="text-sm text-gray-600">Enacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{ruleData.totalRules}</div>
                    <div className="text-sm text-gray-600">Rules</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{ruleData.chapters}</div>
                    <div className="text-sm text-gray-600">Chapters</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">2024</div>
                    <div className="text-sm text-gray-600">Last Updated</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Important Notice */}
            <Alert className="mb-8 border-orange-200 bg-orange-50">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Latest Update:</strong> These rules were last amended on {new Date(ruleData.lastUpdated).toLocaleDateString()}. 
                Please ensure you're referencing the most current version for compliance purposes.
              </AlertDescription>
            </Alert>

            {/* Tabs Content */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="structure">Structure</TabsTrigger>
                <TabsTrigger value="amendments">Amendments</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                      Rule Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Objective</h3>
                      <p className="text-gray-700 leading-relaxed">{ruleData.objective}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-2">Applicability</h3>
                      <p className="text-gray-700 leading-relaxed">{ruleData.applicability}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-3">Key Provisions</h3>
                      <ul className="space-y-2">
                        {ruleData.keyProvisions.map((provision, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{provision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-2">Penalties</h3>
                      <p className="text-gray-700 leading-relaxed">{ruleData.penalties}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="structure" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-500" />
                      Rule Structure
                    </CardTitle>
                    <CardDescription>
                      Detailed breakdown of chapters and rules in {ruleData.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {sections.map((section, index) => (
                        <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {section.chapter}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                  Rules {section.rules}
                                </Badge>
                              </div>
                              <h4 className="font-semibold text-lg mb-2">{section.title}</h4>
                              <p className="text-gray-600 text-sm">{section.description}</p>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amendments" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gavel className="w-5 h-5 text-orange-500" />
                      Recent Amendments
                    </CardTitle>
                    <CardDescription>
                      Track the latest changes and updates to these rules
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ruleData.amendments.map((amendment, index) => (
                        <div key={index} className="border-l-4 border-l-orange-500 pl-4 py-3">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-orange-100 text-orange-700">
                              {amendment.year}
                            </Badge>
                            <span className="text-sm text-gray-500">{amendment.date}</span>
                          </div>
                          <p className="text-gray-700">{amendment.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      Compliance Requirements
                    </CardTitle>
                    <CardDescription>
                      Essential compliance steps and requirements for employers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">Mandatory Requirements</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Maintain proper wage registers and records
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Follow prescribed wage payment procedures
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Submit required returns to authorities
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Regular Compliance</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Ensure timely wage payments as per rules
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Maintain updated employee records
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Conduct periodic compliance audits
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-24">
              {/* Download Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Download Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Online
                  </Button>
                  <div className="text-xs text-gray-500 pt-2">
                    Last updated: {new Date(ruleData.lastUpdated).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Effective from: {new Date(ruleData.effectiveDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Last amended: {new Date(ruleData.lastUpdated).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Jurisdiction: {ruleData.state}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Scale className="w-4 h-4 text-gray-400" />
                    <span>Parent Act: {ruleData.relatedAct}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Rules */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Rules</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {relatedRules.map((rule, index) => (
                    <Link key={index} href={`/rules/${rule.slug}`}>
                      <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="font-medium text-sm mb-1">{rule.title}</div>
                        <div className="text-xs text-gray-500 mb-1">{rule.state}</div>
                        <div className="text-xs text-gray-600">{rule.relevance}</div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: RuleDetailPageProps) {
  const ruleData = rulesDatabase[params.slug as keyof typeof rulesDatabase]
  
  if (!ruleData) {
    return {
      title: 'Rule Not Found'
    }
  }

  return {
    title: `${ruleData.title} - Pragans Consultech E-Library`,
    description: ruleData.fullTitle,
    keywords: `${ruleData.title}, ${ruleData.relatedAct}, ${ruleData.state}, labour rules, compliance`
  }
}

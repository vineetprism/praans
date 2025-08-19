import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Eye, Calendar, MapPin, FileText, ChevronRight, Home, Building2, Scale, BookOpen, AlertCircle, Share2, Bookmark, Clock, Users, Gavel } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { notFound } from 'next/navigation'
import PopularSearch from "@/app/PopularSearch/PopularSearch"

// Mock database of acts with SEO-friendly slugs
const actsDatabase = {
  "factories-act-1948": {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    fullTitle: "An Act to consolidate and amend the law regulating labour in factories",
    state: "Central",
    category: "Industrial Safety",
    year: "1948",
    actNumber: "Act No. 63 of 1948",
    // lastUpdated: "2024-12-15",
    effectiveDate: "1948-04-01",
    sections: 118,
    chapters: 14,
    applicability: "All factories employing 10 or more workers with power, or 20 or more workers without power",
    objective: "To consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave of workers employed in factories.",
    keyProvisions: [
      "Health and safety measures in factories",
      "Welfare provisions for workers",
      "Working hours and overtime regulations", 
      "Employment of young persons and women",
      "Annual leave with wages",
      "Factory licensing and registration"
    ],
    penalties: "Imprisonment up to 2 years and/or fine up to ₹1,00,000 for violations",
    amendments: [
      {
        year: "2023",
        description: "Amendment regarding digital compliance and online reporting mechanisms",
        date: "2023-08-15"
      },
      {
        year: "2019", 
        description: "Updates to safety standards and penalty provisions",
        date: "2019-03-22"
      }
    ]
  },
  "contract-labour-act-1970": {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-act-1970",
    fullTitle: "An Act to regulate the employment of contract labour in certain establishments",
    state: "Central",
    category: "Contract Labour",
    year: "1970",
    actNumber: "Act No. 37 of 1970",
    lastUpdated: "2024-11-28",
    effectiveDate: "1970-02-10",
    sections: 35,
    chapters: 8,
    applicability: "Establishments employing 20 or more contract workers",
    objective: "To regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
    keyProvisions: [
      "Registration of establishments employing contract labour",
      "Licensing of contractors",
      "Welfare and health provisions for contract workers",
      "Payment of wages through principal employer",
      "Prohibition of contract labour in certain processes"
    ],
    penalties: "Fine up to ₹1,000 and imprisonment up to 3 months for violations",
    amendments: [
      {
        year: "2021",
        description: "Digital registration and compliance mechanisms introduced",
        date: "2021-09-29"
      }
    ]
  }
}

const sections = [
  {
    chapter: "Chapter I",
    title: "Preliminary",
    sections: "1-2",
    description: "Short title, extent, commencement and definitions"
  },
  {
    chapter: "Chapter II", 
    title: "The Chief Inspector and other Officers",
    sections: "3-10",
    description: "Appointment and powers of inspectors"
  },
  {
    chapter: "Chapter III",
    title: "Approval, Licensing and Registration of Factories", 
    sections: "11-12",
    description: "Factory licensing requirements and procedures"
  },
  {
    chapter: "Chapter IV",
    title: "Health",
    sections: "13-20",
    description: "Cleanliness, ventilation, lighting, drinking water, latrines and urinals"
  },
  {
    chapter: "Chapter V",
    title: "Safety",
    sections: "21-41",
    description: "Fencing of machinery, work on or near machinery in motion, employment of young persons on dangerous machines"
  },
  {
    chapter: "Chapter VI",
    title: "Welfare",
    sections: "42-50",
    description: "Washing facilities, facilities for sitting, first-aid appliances, canteens, shelters, rest rooms and lunch rooms"
  }
]

const relatedActs = [
  {
    title: "The Contract Labour (Regulation and Abolition) Act, 1970",
    state: "Central",
    relevance: "Complementary legislation for contract workers",
    slug: "contract-labour-act-1970"
  },
  {
    title: "The Payment of Wages Act, 1936", 
    state: "Central",
    relevance: "Wage payment regulations for factory workers",
    slug: "payment-of-wages-act-1936"
  },
  {
    title: "The Industrial Disputes Act, 1947",
    state: "Central", 
    relevance: "Dispute resolution mechanisms in industrial establishments",
    slug: "industrial-disputes-act-1947"
  }
]

interface ActDetailPageProps {
  params: {
    slug: string
  }
}

export default function ActDetailPage({ params }: ActDetailPageProps) {
  const actData = actsDatabase[params.slug as keyof typeof actsDatabase]
  
  if (!actData) {
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
              />
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/acts" className="text-orange-500 font-medium">Acts</Link>
              <Link href="/minimum-wages" className="text-gray-600 hover:text-orange-500 transition-colors">Wages</Link>
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
          <Link href="/acts" className="hover:text-orange-500">Acts</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-orange-500 font-medium">{actData.title}</span>
        </nav>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Act Header */}
            <Card className="mb-8 border-l-4 border-l-orange-500">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-slate-800">
                        <Building2 className="w-3 h-3 mr-1" />
                        {actData.state}
                      </Badge>
                      <Badge variant="outline">
                        {actData.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {actData.actNumber}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl font-bold text-slate-800 mb-3 leading-tight">
                      {actData.title}
                    </CardTitle>
                    <CardDescription className="text-lg text-gray-600 leading-relaxed">
                      {actData.fullTitle}
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

                {/* Act Metadata */}
                <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{actData.year}</div>
                    <div className="text-sm text-gray-600">Enacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{actData.sections}</div>
                    <div className="text-sm text-gray-600">Sections</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{actData.chapters}</div>
                    <div className="text-sm text-gray-600">Chapters</div>
                  </div>
                  {/* <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500">2024</div>
                    <div className="text-sm text-gray-600">Last Updated</div>
                  </div> */}
                </div>
              </CardHeader>
            </Card>

            {/* Important Notice */}
            {/* <Alert className="mb-8 border-orange-200 bg-orange-50">
              <AlertCircle className="h-4 w-4 text-orange-600" />
              <AlertDescription className="text-orange-800">
                <strong>Latest Update:</strong> This act was last amended on {new Date(actData.lastUpdated).toLocaleDateString()}. 
                Please ensure you're referencing the most current version for compliance purposes.
              </AlertDescription>
            </Alert> */}

            {/* Tabs Content */}
            {/* <Tabs defaultValue="overview" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="sections">Sections</TabsTrigger>
                <TabsTrigger value="amendments">Amendments</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="w-5 h-5 text-orange-500" />
                      Act Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2">Objective</h3>
                      <p className="text-gray-700 leading-relaxed">{actData.objective}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-2">Applicability</h3>
                      <p className="text-gray-700 leading-relaxed">{actData.applicability}</p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-3">Key Provisions</h3>
                      <ul className="space-y-2">
                        {actData.keyProvisions.map((provision, index) => (
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
                      <p className="text-gray-700 leading-relaxed">{actData.penalties}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sections" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-orange-500" />
                      Act Structure
                    </CardTitle>
                    <CardDescription>
                      Detailed breakdown of chapters and sections in {actData.title}
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
                                  Sections {section.sections}
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
                      Track the latest changes and updates to this act
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {actData.amendments.map((amendment, index) => (
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
                        <h4 className="font-semibold mb-3">Mandatory Registrations</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Factory license from State Factory Inspector
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Registration with local authorities
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">Regular Compliance</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Maintain statutory registers and records
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Conduct periodic safety audits
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            Submit annual returns to authorities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs> */}
            {/* Full Content (no tabs) */}
<div className="space-y-6">

  {/* Overview */}
  <Card id="overview">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Scale className="w-5 h-5 text-orange-500" />
        Act Overview
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Objective</h3>
        <p className="text-gray-700 leading-relaxed">{actData.objective}</p>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-2">Applicability</h3>
        <p className="text-gray-700 leading-relaxed">{actData.applicability}</p>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-3">Key Provisions</h3>
        <ul className="space-y-2">
          {actData.keyProvisions.map((provision, index) => (
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
        <p className="text-gray-700 leading-relaxed">{actData.penalties}</p>
      </div>
    </CardContent>
  </Card>

  {/* Sections */}
  <Card id="sections">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-orange-500" />
        Act Structure
      </CardTitle>
      <CardDescription>
        Detailed breakdown of chapters and sections in {actData.title}
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
                    Sections {section.sections}
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

  {/* Amendments */}
  <Card id="amendments">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Gavel className="w-5 h-5 text-orange-500" />
        Recent Amendments
      </CardTitle>
      <CardDescription>
        Track the latest changes and updates to this act
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {actData.amendments.map((amendment, index) => (
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

  {/* Compliance */}
  <Card id="compliance">
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
          <h4 className="font-semibold mb-3">Mandatory Registrations</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              Factory license from State Factory Inspector
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              Registration with local authorities
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Regular Compliance</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              Maintain statutory registers and records
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              Conduct periodic safety audits
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
              Submit annual returns to authorities
            </li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>

</div>

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
                  {/* <Button variant="outline" className="w-full">
                    <FileText className="w-4 h-4 mr-2" />
                    View Online
                  </Button>
                  <div className="text-xs text-gray-500 pt-2">
                    Last updated: {new Date(actData.lastUpdated).toLocaleDateString()}
                  </div> */}
                </CardContent>
              </Card>

              {/* Quick Info */}
              {/* <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>Effective from: {new Date(actData.effectiveDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>Last amended: {new Date(actData.lastUpdated).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Jurisdiction: {actData.state}</span>
                  </div>
                </CardContent>
              </Card> */}
<Card>
  <CardHeader>
    <CardTitle className="text-lg">Popular Searches</CardTitle>
  </CardHeader>
  <CardContent>
    {/* Label already card title me hai, isliye title="" */}
    <PopularSearch title="" />
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
export async function generateMetadata({ params }: ActDetailPageProps) {
  const actData = actsDatabase[params.slug as keyof typeof actsDatabase]
  
  if (!actData) {
    return {
      title: 'Act Not Found'
    }
  }

  return {
    title: `${actData.title} - Pragans Consultech E-Library`,
    description: actData.fullTitle,
    keywords: `${actData.title}, ${actData.category}, ${actData.state}, labour law, compliance`
  }
}

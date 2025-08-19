
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, Filter, Download, BookOpen, ChevronRight, Home, FileText, MapPin, Mic, SlidersHorizontal } from 'lucide-react'
import Link from "next/link"
import PopularSearch from "../PopularSearch/PopularSearch"

const rules = [
  {
    id: 1,
    title: "The Payment of Wages (Mines) Rules, 1956",
    state: "Central",
    relatedAct: "The Payment of Wages Act, 1936",
    slug: "payment-of-wages-mines-rules-1956",
  },
  {
    id: 2,
    title: "The Contract Labour (Regulation and Abolition) Central Rules, 1971",
    state: "Central",
    relatedAct: "The Contract Labour (Regulation and Abolition) Act, 1970",
    slug: "contract-labour-central-rules-1971",
  },
  {
    id: 3,
    title: "Maharashtra Factories Rules, 1963",
    state: "Maharashtra",
    relatedAct: "The Factories Act, 1948",
    slug: "maharashtra-factories-rules-1963",
  },
  {
    id: 4,
    title: "Karnataka Minimum Wages Rules, 1958",
    state: "Karnataka",
    relatedAct: "The Minimum Wages Act, 1948",
    slug: "karnataka-minimum-wages-rules-1958",
  },
  {
    id: 5,
    title: "The Payment of Gratuity (Central) Rules, 1972",
    state: "Central",
    relatedAct: "The Payment of Gratuity Act, 1972",
    slug: "payment-of-gratuity-central-rules-1972",
  },
  {
    id: 6,
    title: "Tamil Nadu Shops and Establishments Rules, 1948",
    state: "Tamil Nadu",
    relatedAct: "Tamil Nadu Shops and Establishments Act, 1947",
    slug: "tamil-nadu-shops-establishments-rules-1948",
  }
]

const states = [
  "All States",
  "Central",
  "Maharashtra",
  "Karnataka",
  "Tamil Nadu",
  "Gujarat",
  "Delhi",
  "West Bengal"
]

const acts = [
    "All Acts",
    "The Factories Act, 1948",
    "The Contract Labour (Regulation and Abolition) Act, 1970",
    "The Payment of Wages Act, 1936",
    "The Minimum Wages Act, 1948",
    "The Payment of Gratuity Act, 1972",
]

const trendingSearches = [
    "Overtime wage calculation rules",
    "Maternity benefit rules for contract employees",
    "Rules for PF withdrawal",
    "Gratuity payment timeline rules",
]

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        {/* Top Filter and Search Bar */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Filters Button */}
                 <span className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-medium">
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </span>
              
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input placeholder="Search by name..." className="pl-12 py-3 h-12 rounded-lg" />
              </div>
              
              {/* State Dropdown */}
              <Select>
                <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
 
              
              {/* Apply Button */}
              <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                Apply
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with Quick Access */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Quick Access
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">State/Central</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <PopularSearch className="mt-4" />
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Search and Header */}
            <div className="mb-8">
                {/* <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Mic className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-orange-500" />
                    <Input placeholder="Search Rules, Acts, etc..." className="pl-12 pr-20 py-3 h-14 text-lg rounded-xl shadow-md" />
                    <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-slate-900 h-10">
                        <Search className="w-5 h-5" />
                    </Button>
                </div> */}

                {/* <Accordion type="single" collapsible className="w-full bg-white rounded-lg shadow-sm">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="px-4 font-medium hover:no-underline">Trending Searches in Rules</AccordionTrigger>
                    <AccordionContent className="p-4 pt-0">
                        <div className="flex flex-wrap gap-2">
                            {trendingSearches.map((search, index) => (
                                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-orange-50">{search}</Badge>
                            ))}
                        </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion> */}
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-3">Rules</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Rules" are legislative pieces providing guidelines which in turn define the procedures for performing and implementing the concerned Act. Rules are inherently secondary and complimentary to the concerned Acts.
              </p>
            </div>

            {/* Rules List */}
            <div className="space-y-6">
              {rules.map((rule) => (
                <Card key={rule.id} className="transition-all duration-300 shadow-md hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <Badge variant="outline" className="mb-3 font-medium">
                          <MapPin className="w-3 h-3 mr-1.5" />
                          {rule.state}
                        </Badge>
                        <h2 className="text-xl font-semibold text-slate-800 mb-2">{rule.title}</h2>
                        {/* <p className="text-sm text-gray-500">
                          Related Act: {rule.relatedAct}
                        </p> */}
                      </div>
                      <div className="flex items-center gap-3 flex-shrink-0">
                        <Button variant="outline" asChild>
                          <Link href={`/rules/${rule.slug}`}>
                            <BookOpen className="w-4 h-4 mr-2" />
                            Read More
                          </Link>
                        </Button>
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Rules
              </Button>
            </div>
          </main>
        </div> 
      </div>
    </div>
  )
}
import { Metadata } from 'next'
import { Calendar, MapPin, Building2, Clock, Filter, Search, Download, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Holiday List 2024 - Central & State Government Holidays | E-Library',
  description: 'Complete list of central and state government holidays for 2024. Download official holiday calendars, check restricted holidays, and plan your work schedule.',
  keywords: 'holiday list 2024, government holidays, central holidays, state holidays, restricted holidays, gazetted holidays, optional holidays',
}

// Mock data for holidays
const centralHolidays = [
  {
    id: 1,
    name: "Republic Day",
    date: "2024-01-26",
    day: "Friday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "National holiday celebrating the adoption of the Constitution of India",
    isRestricted: false,
    isOptional: false,
    significance: "Constitutional celebration marking the day India became a republic"
  },
  {
    id: 2,
    name: "Holi",
    date: "2024-03-25",
    day: "Monday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States except Tamil Nadu, Kerala"],
    description: "Festival of colors celebrating the arrival of spring",
    isRestricted: false,
    isOptional: false,
    significance: "Hindu festival celebrating love, joy, and the triumph of good over evil"
  },
  {
    id: 3,
    name: "Good Friday",
    date: "2024-03-29",
    day: "Friday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "Christian holiday commemorating the crucifixion of Jesus Christ",
    isRestricted: false,
    isOptional: false,
    significance: "Solemn Christian observance of the crucifixion and death of Jesus Christ"
  },
  {
    id: 4,
    name: "Eid ul-Fitr",
    date: "2024-04-11",
    day: "Thursday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "Islamic festival marking the end of Ramadan",
    isRestricted: false,
    isOptional: false,
    significance: "Celebration of the end of the holy month of fasting (Ramadan)"
  },
  {
    id: 5,
    name: "Buddha Purnima",
    date: "2024-05-23",
    day: "Thursday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "Buddhist festival celebrating the birth of Gautama Buddha",
    isRestricted: false,
    isOptional: false,
    significance: "Celebration of the birth, enlightenment, and death of Buddha"
  },
  {
    id: 6,
    name: "Independence Day",
    date: "2024-08-15",
    day: "Thursday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "National holiday celebrating India's independence from British rule",
    isRestricted: false,
    isOptional: false,
    significance: "Commemoration of India's independence on August 15, 1947"
  },
  {
    id: 7,
    name: "Gandhi Jayanti",
    date: "2024-10-02",
    day: "Wednesday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "National holiday celebrating the birth of Mahatma Gandhi",
    isRestricted: false,
    isOptional: false,
    significance: "Birth anniversary of the Father of the Nation, Mahatma Gandhi"
  },
  {
    id: 8,
    name: "Dussehra",
    date: "2024-10-12",
    day: "Saturday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States except Kerala, Tamil Nadu"],
    description: "Hindu festival celebrating the victory of good over evil",
    isRestricted: false,
    isOptional: false,
    significance: "Celebrates Lord Rama's victory over Ravana and Goddess Durga's victory over Mahishasura"
  },
  {
    id: 9,
    name: "Diwali",
    date: "2024-11-01",
    day: "Friday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "Festival of lights celebrating the victory of light over darkness",
    isRestricted: false,
    isOptional: false,
    significance: "Hindu festival of lights symbolizing the spiritual victory of light over darkness"
  },
  {
    id: 10,
    name: "Christmas Day",
    date: "2024-12-25",
    day: "Wednesday",
    type: "Central Holiday",
    category: "Gazetted Holiday",
    states: ["All States"],
    description: "Christian festival celebrating the birth of Jesus Christ",
    isRestricted: false,
    isOptional: false,
    significance: "Christian celebration of the birth of Jesus Christ"
  }
]

const stateHolidays = {
  "Maharashtra": [
    {
      id: 11,
      name: "Gudi Padwa",
      date: "2024-04-09",
      day: "Tuesday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Marathi New Year celebration",
      significance: "Traditional New Year festival of Maharashtra"
    },
    {
      id: 12,
      name: "Maharashtra Day",
      date: "2024-05-01",
      day: "Wednesday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Formation day of Maharashtra state",
      significance: "Commemorates the formation of Maharashtra state in 1960"
    },
    {
      id: 13,
      name: "Ganesh Chaturthi",
      date: "2024-09-07",
      day: "Saturday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Festival celebrating Lord Ganesha",
      significance: "Major festival in Maharashtra celebrating the elephant-headed deity"
    }
  ],
  "Tamil Nadu": [
    {
      id: 14,
      name: "Tamil New Year",
      date: "2024-04-14",
      day: "Sunday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Tamil New Year celebration",
      significance: "Traditional New Year festival of Tamil Nadu"
    },
    {
      id: 15,
      name: "Thiruvalluvar Day",
      date: "2024-01-15",
      day: "Monday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Honoring the great Tamil poet Thiruvalluvar",
      significance: "Celebrates the contributions of the ancient Tamil poet and philosopher"
    }
  ],
  "West Bengal": [
    {
      id: 16,
      name: "Poila Boishakh",
      date: "2024-04-15",
      day: "Monday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Bengali New Year",
      significance: "Traditional New Year festival of West Bengal"
    },
    {
      id: 17,
      name: "Kali Puja",
      date: "2024-11-01",
      day: "Friday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Festival dedicated to Goddess Kali",
      significance: "Major festival in West Bengal honoring Goddess Kali"
    }
  ],
  "Punjab": [
    {
      id: 18,
      name: "Baisakhi",
      date: "2024-04-13",
      day: "Saturday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Sikh New Year and harvest festival",
      significance: "Celebrates the Sikh New Year and spring harvest"
    },
    {
      id: 19,
      name: "Guru Nanak Jayanti",
      date: "2024-11-15",
      day: "Friday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Birth anniversary of Guru Nanak",
      significance: "Celebrates the birth of the first Sikh Guru"
    }
  ],
  "Kerala": [
    {
      id: 20,
      name: "Vishu",
      date: "2024-04-14",
      day: "Sunday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Malayalam New Year",
      significance: "Traditional New Year festival of Kerala"
    },
    {
      id: 21,
      name: "Onam",
      date: "2024-09-15",
      day: "Sunday",
      type: "State Holiday",
      category: "Gazetted Holiday",
      description: "Harvest festival of Kerala",
      significance: "Major harvest festival celebrating King Mahabali's return"
    }
  ]
}

const states = Object.keys(stateHolidays)

const categories = ["All Categories", "Gazetted Holiday", "Restricted Holiday", "Optional Holiday"]

export default function HolidaysPage() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }

  const getMonthName = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-IN', { month: 'long' })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Gazetted Holiday':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Restricted Holiday':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Optional Holiday':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Group holidays by month
  const holidaysByMonth = centralHolidays.reduce((acc, holiday) => {
    const month = getMonthName(holiday.date)
    if (!acc[month]) {
      acc[month] = []
    }
    acc[month].push(holiday)
    return acc
  }, {} as Record<string, typeof centralHolidays>)

  const HolidayCard = ({ holiday }: { holiday: any }) => (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {holiday.name}
              </h3>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className={getCategoryColor(holiday.category)}>
                  {holiday.category}
                </Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(holiday.date)} ({holiday.day})
                </div>
                {holiday.states && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {holiday.states.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-3">{holiday.description}</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-medium text-blue-900 mb-2">Significance:</h4>
            <p className="text-blue-800 text-sm">{holiday.significance}</p>
          </div>
        </div>
        
        <div className="lg:ml-6 mt-4 lg:mt-0">
          <div className="text-center bg-gray-50 rounded-lg p-4 min-w-[120px]">
            <div className="text-3xl font-bold text-gray-900">
              {new Date(holiday.date).getDate()}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">
              {new Date(holiday.date).toLocaleDateString('en-IN', { month: 'short' })}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {holiday.day}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image 
                  src="/logo.png" 
                  alt="Pragans Consultech" 
                  width={180} 
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">Acts</Link>
              <Link href="/minimum-wages" className="text-gray-600 hover:text-orange-500 transition-colors">Wages</Link>
              <Link href="/forms" className="text-gray-600 hover:text-orange-500 transition-colors">Forms</Link>
              <Link href="/gazette" className="text-gray-600 hover:text-orange-500 transition-colors">Notifications</Link>
              <Link href="/holidays" className="text-orange-500 font-medium">Holidays</Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header> */}

      {/* Page Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">Holiday Calendar 2024</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete list of central and state government holidays. Plan your work schedule with official holiday notifications.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Central Holidays</p>
                  <p className="text-2xl font-bold text-gray-900">{centralHolidays.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MapPin className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">States Covered</p>
                  <p className="text-2xl font-bold text-gray-900">{states.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">State Holidays</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {Object.values(stateHolidays).reduce((acc, holidays) => acc + holidays.length, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Holidays</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {centralHolidays.length + Object.values(stateHolidays).reduce((acc, holidays) => acc + holidays.length, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Holidays
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search holidays..."
                  className="pl-10"
                />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {states.map((state) => (
                    <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Holiday Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Holiday Tabs */}
        <Tabs defaultValue="central" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="central">Central Government Holidays</TabsTrigger>
            <TabsTrigger value="state">State-wise Holidays</TabsTrigger>
          </TabsList>

          <TabsContent value="central" className="space-y-8">
            {/* Central Holiday List by Month */}
            {Object.entries(holidaysByMonth).map(([month, monthHolidays]) => (
              <Card key={month}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <Calendar className="h-6 w-6 mr-3 text-blue-600" />
                    {month} 2024
                    <Badge variant="secondary" className="ml-3">
                      {monthHolidays.length} holidays
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {monthHolidays.map((holiday) => (
                      <HolidayCard key={holiday.id} holiday={holiday} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="state" className="space-y-8">
            {/* State-wise Holiday List */}
            {Object.entries(stateHolidays).map(([state, holidays]) => (
              <Card key={state}>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <MapPin className="h-6 w-6 mr-3 text-purple-600" />
                    {state}
                    <Badge variant="secondary" className="ml-3">
                      {holidays.length} holidays
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {holidays.map((holiday) => (
                      <HolidayCard key={holiday.id} holiday={holiday} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Important Notes */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Gazetted Holidays:</strong> These are compulsory holidays for all central government offices and most state government offices.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Restricted Holidays:</strong> Employees can choose any two from the list of restricted holidays during the year.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Optional Holidays:</strong> These may vary by state and organization. Check with your local administration.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>State Variations:</strong> Some holidays may not be observed in all states. Please verify with your state government notifications.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="Pragans Consultech" 
                  width={160} 
                  height={35}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner for compliance and labor law resources.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/acts" className="hover:text-white transition-colors">Acts</Link></li>
                <li><Link href="/minimum-wages" className="hover:text-white transition-colors">Minimum Wages</Link></li>
                <li><Link href="/forms" className="hover:text-white transition-colors">Forms</Link></li>
                <li><Link href="/gazette" className="hover:text-white transition-colors">Notifications</Link></li>
                <li><Link href="/holidays" className="hover:text-white transition-colors">Holidays</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/api" className="hover:text-white transition-colors">API Documentation</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Get the latest compliance updates</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 E-Library. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}

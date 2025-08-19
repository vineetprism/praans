import { Metadata } from 'next'
import { Calendar, MapPin, Building2, Clock, Filter, Search, Download, Bell, Star, Globe, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from "next/link"
import Image from "next/image"
// import PopularSearch from '../PopularSearch/PopularSearch'
import PopularSearchBoxes from '../PopularSearchBoxes/PopularSearchBoxes'

export const metadata: Metadata = {
  title: 'National & Festival Holidays 2024 - Complete Holiday Calendar | E-Library',
  description: 'Comprehensive list of national holidays, religious festivals, and cultural celebrations in India. Get official holiday dates, significance, and state-wise variations.',
  keywords: 'national holidays 2024, festival holidays, religious festivals, cultural holidays, Indian festivals, holiday calendar, gazetted holidays',
}

// National Holidays Data
const nationalHolidays = [
  {
    id: 1,
    name: "Republic Day",
    date: "2024-01-26",
    day: "Friday",
    type: "National Holiday",
    category: "Gazetted Holiday",
    religion: "Secular",
    states: ["All States & UTs"],
    description: "Commemorates the adoption of the Constitution of India",
    significance: "On this day in 1950, India became a republic with the Constitution coming into effect. The day is marked by a grand parade in New Delhi showcasing India's cultural diversity and military strength.",
    traditions: ["Flag hoisting", "Parade at Rajpath", "Cultural programs", "Awards ceremony"],
    isNational: true,
    historicalBackground: "The Constitution of India was adopted by the Constituent Assembly on 26 November 1949 and came into effect on 26 January 1950, making India a republic.",
    celebrations: "The main celebration is held at Rajpath in New Delhi with the President of India hoisting the national flag and a grand parade showcasing India's defense capability and cultural heritage."
  },
  {
    id: 2,
    name: "Independence Day",
    date: "2024-08-15",
    day: "Thursday",
    type: "National Holiday",
    category: "Gazetted Holiday",
    religion: "Secular",
    states: ["All States & UTs"],
    description: "Celebrates India's independence from British colonial rule",
    significance: "India gained independence from British rule on August 15, 1947, after nearly 200 years of colonial domination. This day marks the birth of free India.",
    traditions: ["Flag hoisting", "Prime Minister's speech from Red Fort", "Cultural programs", "Kite flying"],
    isNational: true,
    historicalBackground: "After years of struggle led by Mahatma Gandhi and other freedom fighters, India finally achieved independence at the stroke of midnight on August 15, 1947.",
    celebrations: "The Prime Minister hoists the national flag at the Red Fort in Delhi and addresses the nation. Similar ceremonies are held across the country."
  },
  {
    id: 3,
    name: "Gandhi Jayanti",
    date: "2024-10-02",
    day: "Wednesday",
    type: "National Holiday",
    category: "Gazetted Holiday",
    religion: "Secular",
    states: ["All States & UTs"],
    description: "Birth anniversary of Mahatma Gandhi, Father of the Nation",
    significance: "Honors Mahatma Gandhi, who led India's non-violent independence movement and is revered as the Father of the Nation.",
    traditions: ["Prayer meetings", "Spinning wheel demonstrations", "Cleanliness drives", "Non-violence pledges"],
    isNational: true,
    historicalBackground: "Mohandas Karamchand Gandhi was born on October 2, 1869, in Porbandar, Gujarat. He became the leader of India's independence movement through non-violent civil disobedience.",
    celebrations: "Prayer meetings are held at Raj Ghat in Delhi and Gandhi memorials across the country. The day is also observed as International Day of Non-Violence."
  }
]

// Religious Festival Holidays Data
const religiousFestivals = [
  {
    id: 4,
    name: "Diwali (Deepavali)",
    date: "2024-11-01",
    day: "Friday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Hindu",
    states: ["All States & UTs"],
    description: "Festival of lights celebrating the victory of light over darkness",
    significance: "Celebrates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over Ravana. Also celebrates Goddess Lakshmi, the goddess of wealth and prosperity.",
    traditions: ["Lighting diyas and candles", "Rangoli decorations", "Fireworks", "Exchanging sweets", "Lakshmi Puja"],
    isNational: false,
    historicalBackground: "Diwali has multiple origins in Hindu mythology, primarily celebrating Lord Rama's return and the worship of Goddess Lakshmi.",
    celebrations: "Homes are decorated with lights and rangoli, prayers are offered to Goddess Lakshmi, and families exchange sweets and gifts.",
    duration: "5 days",
    regionalVariations: {
      "North India": "Celebrates Lord Rama's return",
      "South India": "Celebrates Lord Krishna's victory over Narakasura",
      "West India": "New Year celebrations in Gujarat and Maharashtra",
      "East India": "Worship of Goddess Kali"
    }
  },
  {
    id: 5,
    name: "Holi",
    date: "2024-03-25",
    day: "Monday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Hindu",
    states: ["All States except Tamil Nadu, Kerala"],
    description: "Festival of colors celebrating the arrival of spring",
    significance: "Celebrates the victory of good over evil, the arrival of spring, and the divine love of Radha and Krishna.",
    traditions: ["Playing with colors", "Water balloons", "Traditional sweets", "Holika Dahan", "Folk songs and dances"],
    isNational: false,
    historicalBackground: "Associated with the legend of Prahlad and Holika, and the divine love story of Radha and Krishna.",
    celebrations: "People play with colored powders and water, enjoy traditional foods, and celebrate with music and dance.",
    duration: "2 days",
    regionalVariations: {
      "North India": "Celebrated with great enthusiasm, especially in Uttar Pradesh",
      "Maharashtra": "Known as Rangpanchami",
      "Bengal": "Called Dol Jatra or Basant Utsav",
      "South India": "Limited celebration in Tamil Nadu and Kerala"
    }
  },
  {
    id: 6,
    name: "Eid ul-Fitr",
    date: "2024-04-11",
    day: "Thursday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Islamic",
    states: ["All States & UTs"],
    description: "Celebrates the end of Ramadan, the holy month of fasting",
    significance: "Marks the end of the month-long fasting period of Ramadan and celebrates spiritual purification and community bonding.",
    traditions: ["Special prayers (Eid Salah)", "Zakat al-Fitr charity", "Feasting", "New clothes", "Visiting family and friends"],
    isNational: false,
    historicalBackground: "Instituted by Prophet Muhammad after the first Ramadan fast in Medina.",
    celebrations: "Muslims gather for special prayers, give charity to the poor, prepare special meals, and visit family and friends.",
    duration: "1-3 days",
    regionalVariations: {
      "Kashmir": "Celebrated with traditional Wazwan feast",
      "Hyderabad": "Famous for Haleem and biryani",
      "Kerala": "Known as Cheriya Perunnal",
      "West Bengal": "Called Choti Eid"
    }
  },
  {
    id: 7,
    name: "Eid ul-Adha (Bakrid)",
    date: "2024-06-17",
    day: "Monday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Islamic",
    states: ["All States & UTs"],
    description: "Festival of sacrifice commemorating Abraham's willingness to sacrifice his son",
    significance: "Commemorates the willingness of Ibrahim (Abraham) to sacrifice his son as an act of obedience to God's command.",
    traditions: ["Qurbani (animal sacrifice)", "Special prayers", "Charity to poor", "Feasting", "Visiting relatives"],
    isNational: false,
    historicalBackground: "Based on the Quranic account of Ibrahim's sacrifice, which is also found in Jewish and Christian traditions.",
    celebrations: "Muslims perform animal sacrifice, distribute meat to family and the poor, and gather for special prayers and meals.",
    duration: "3-4 days",
    regionalVariations: {
      "All regions": "Universally celebrated with similar traditions across India"
    }
  },
  {
    id: 8,
    name: "Christmas Day",
    date: "2024-12-25",
    day: "Wednesday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Christian",
    states: ["All States & UTs"],
    description: "Celebrates the birth of Jesus Christ",
    significance: "Commemorates the birth of Jesus Christ, whom Christians believe to be the Son of God and savior of humanity.",
    traditions: ["Church services", "Christmas tree decoration", "Gift exchange", "Carol singing", "Special meals"],
    isNational: false,
    historicalBackground: "Celebrates the nativity of Jesus Christ as described in the Christian Gospels.",
    celebrations: "Christians attend midnight mass, decorate Christmas trees, exchange gifts, and enjoy special meals with family.",
    duration: "1 day (extended celebrations)",
    regionalVariations: {
      "Goa": "Grand celebrations with midnight mass and traditional sweets",
      "Kerala": "Significant Christian population celebrates with great fervor",
      "Northeast": "Major festival in Christian-majority states",
      "Mumbai/Delhi": "Cosmopolitan celebrations with decorations and parties"
    }
  },
  {
    id: 9,
    name: "Good Friday",
    date: "2024-03-29",
    day: "Friday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Christian",
    states: ["All States & UTs"],
    description: "Commemorates the crucifixion and death of Jesus Christ",
    significance: "Solemn day remembering the crucifixion of Jesus Christ and his death at Calvary.",
    traditions: ["Church services", "Stations of the Cross", "Fasting", "Prayer and reflection", "Hot cross buns"],
    isNational: false,
    historicalBackground: "Commemorates the crucifixion of Jesus Christ as described in the Christian Gospels.",
    celebrations: "Christians attend solemn church services, observe fasting, and reflect on the sacrifice of Jesus Christ.",
    duration: "1 day",
    regionalVariations: {
      "All regions": "Observed solemnly by Christian communities across India"
    }
  },
  {
    id: 10,
    name: "Buddha Purnima (Vesak)",
    date: "2024-05-23",
    day: "Thursday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Buddhist",
    states: ["All States & UTs"],
    description: "Celebrates the birth, enlightenment, and death of Gautama Buddha",
    significance: "Triple blessed day commemorating the birth, enlightenment (Nirvana), and death (Parinirvana) of Gautama Buddha.",
    traditions: ["Meditation", "Prayer at Buddhist temples", "Charitable acts", "Vegetarian meals", "Bodhi tree worship"],
    isNational: false,
    historicalBackground: "Celebrates the most important events in the life of Gautama Buddha, the founder of Buddhism.",
    celebrations: "Buddhists visit temples, meditate, perform charitable acts, and participate in processions.",
    duration: "1 day",
    regionalVariations: {
      "Ladakh": "Major celebration in Buddhist-majority region",
      "Sikkim": "Significant festival in Buddhist communities",
      "Maharashtra": "Celebrated at Buddhist sites like Ajanta and Ellora",
      "Bihar": "Special celebrations at Bodh Gaya"
    }
  },
  {
    id: 11,
    name: "Guru Nanak Jayanti",
    date: "2024-11-15",
    day: "Friday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Sikh",
    states: ["All States & UTs"],
    description: "Birth anniversary of Guru Nanak, the first Sikh Guru",
    significance: "Celebrates the birth of Guru Nanak Dev Ji, the founder of Sikhism and the first of the ten Sikh Gurus.",
    traditions: ["Gurdwara prayers", "Langar (community kitchen)", "Processions", "Kirtan (devotional singing)", "Reading Guru Granth Sahib"],
    isNational: false,
    historicalBackground: "Guru Nanak Dev Ji was born in 1469 in Talwandi (now in Pakistan) and founded the Sikh religion.",
    celebrations: "Sikhs visit gurdwaras, participate in processions, and serve free meals (langar) to all visitors.",
    duration: "1 day (extended celebrations)",
    regionalVariations: {
      "Punjab": "Grand celebrations with processions and community gatherings",
      "Delhi": "Major celebrations at historic gurdwaras",
      "Haryana": "Significant Sikh population celebrates with enthusiasm",
      "Other states": "Celebrated by Sikh communities nationwide"
    }
  },
  {
    id: 12,
    name: "Dussehra (Vijayadashami)",
    date: "2024-10-12",
    day: "Saturday",
    type: "Religious Festival",
    category: "Gazetted Holiday",
    religion: "Hindu",
    states: ["All States except Kerala, Tamil Nadu"],
    description: "Celebrates the victory of good over evil",
    significance: "Celebrates Lord Rama's victory over the demon king Ravana and Goddess Durga's victory over the buffalo demon Mahishasura.",
    traditions: ["Ravana effigy burning", "Durga Puja", "Ram Lila performances", "Weapon worship", "New venture beginnings"],
    isNational: false,
    historicalBackground: "Based on the Ramayana epic and the victory of Goddess Durga over Mahishasura.",
    celebrations: "Effigies of Ravana are burned, Durga Puja is celebrated, and Ram Lila performances are held.",
    duration: "1 day (part of 10-day celebration)",
    regionalVariations: {
      "North India": "Ravana effigy burning and Ram Lila",
      "West Bengal": "End of Durga Puja celebrations",
      "South India": "Golu displays and cultural programs",
      "Karnataka": "Mysore Dasara with grand processions"
    }
  }
]

// Cultural and Regional Festivals
const culturalFestivals = [
  {
    id: 13,
    name: "Baisakhi",
    date: "2024-04-13",
    day: "Saturday",
    type: "Cultural Festival",
    category: "Regional Holiday",
    religion: "Sikh/Hindu",
    states: ["Punjab", "Haryana", "Himachal Pradesh"],
    description: "Harvest festival and Sikh New Year",
    significance: "Celebrates the spring harvest and marks the Sikh New Year. Also commemorates the formation of the Khalsa by Guru Gobind Singh.",
    traditions: ["Bhangra dancing", "Gurdwara prayers", "Community feasts", "Folk music", "Harvest celebrations"],
    isNational: false,
    historicalBackground: "Agricultural festival that became significant in Sikh history when Guru Gobind Singh established the Khalsa in 1699.",
    celebrations: "Farmers celebrate the harvest with traditional dances, music, and community gatherings.",
    duration: "1 day",
    regionalVariations: {
      "Punjab": "Major harvest festival with Bhangra and Giddha",
      "Haryana": "Celebrated as harvest festival",
      "Himachal Pradesh": "Spring festival celebrations"
    }
  },
  {
    id: 14,
    name: "Onam",
    date: "2024-09-15",
    day: "Sunday",
    type: "Cultural Festival",
    category: "State Holiday",
    religion: "Hindu",
    states: ["Kerala"],
    description: "Harvest festival of Kerala celebrating King Mahabali's return",
    significance: "Celebrates the homecoming of the legendary King Mahabali and marks the harvest season in Kerala.",
    traditions: ["Pookalam (flower carpets)", "Onasadya (feast)", "Kathakali performances", "Boat races", "Traditional games"],
    isNational: false,
    historicalBackground: "Based on the legend of King Mahabali, a benevolent ruler who was granted permission to visit his subjects once a year.",
    celebrations: "Elaborate flower carpets are made, traditional feast is prepared, and cultural programs are organized.",
    duration: "10 days",
    regionalVariations: {
      "Kerala": "State festival celebrated across all communities"
    }
  },
  {
    id: 15,
    name: "Durga Puja",
    date: "2024-10-09",
    day: "Wednesday",
    type: "Cultural Festival",
    category: "State Holiday",
    religion: "Hindu",
    states: ["West Bengal", "Assam", "Tripura"],
    description: "Worship of Goddess Durga and celebration of her victory over evil",
    significance: "Celebrates the victory of Goddess Durga over the buffalo demon Mahishasura, symbolizing the triumph of good over evil.",
    traditions: ["Pandal hopping", "Cultural programs", "Traditional music and dance", "Sindoor khela", "Immersion processions"],
    isNational: false,
    historicalBackground: "Ancient festival celebrating the Divine Mother in her various forms, particularly popular in Bengal.",
    celebrations: "Elaborate pandals are constructed, cultural programs are organized, and the festival ends with immersion of idols.",
    duration: "5 days",
    regionalVariations: {
      "West Bengal": "Biggest festival with elaborate pandals and celebrations",
      "Assam": "Celebrated with traditional Assamese customs",
      "Tripura": "Significant celebration in Bengali communities"
    }
  },
  {
    id: 16,
    name: "Ganesh Chaturthi",
    date: "2024-09-07",
    day: "Saturday",
    type: "Cultural Festival",
    category: "State Holiday",
    religion: "Hindu",
    states: ["Maharashtra", "Karnataka", "Andhra Pradesh", "Telangana"],
    description: "Birth celebration of Lord Ganesha, the remover of obstacles",
    significance: "Celebrates the birth of Lord Ganesha, the elephant-headed deity who is revered as the remover of obstacles and patron of arts and sciences.",
    traditions: ["Ganesha idol installation", "Modak preparation", "Cultural programs", "Processions", "Visarjan (immersion)"],
    isNational: false,
    historicalBackground: "Ancient festival that gained prominence during the Indian independence movement, particularly in Maharashtra.",
    celebrations: "Ganesha idols are installed in homes and public places, prayers are offered, and the festival ends with immersion ceremonies.",
    duration: "11 days",
    regionalVariations: {
      "Maharashtra": "Grand public celebrations with elaborate processions",
      "Karnataka": "Traditional home celebrations",
      "Andhra Pradesh": "Community celebrations with cultural programs",
      "Telangana": "Significant festival in urban and rural areas"
    }
  }
]

const allHolidays = [...nationalHolidays, ...religiousFestivals, ...culturalFestivals]

const religions = ["All Religions", "Secular", "Hindu", "Islamic", "Christian", "Buddhist", "Sikh"]
const categories = ["All Categories", "Gazetted Holiday", "Regional Holiday", "State Holiday"]

export default function NationalFestivalHolidaysPage() {
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
      case 'Regional Holiday':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'State Holiday':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getReligionColor = (religion: string) => {
    switch (religion) {
      case 'Secular':
        return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Hindu':
        return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'Islamic':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Christian':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Buddhist':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Sikh':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const HolidayCard = ({ holiday }: { holiday: any }) => (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  {holiday.name}
                </h3>
                {holiday.isNational && (
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                )}
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <Badge className={getCategoryColor(holiday.category)}>
                  {holiday.category}
                </Badge>
                
                <Badge className={getReligionColor(holiday.religion)}>
                  {holiday.religion}
                </Badge>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formatDate(holiday.date)} ({holiday.day})
                </div>
                {holiday.duration && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {holiday.duration}
                  </div>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-600 mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {holiday.states.join(', ')}
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4">{holiday.description}</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-blue-900 mb-2 flex items-center">
              <Heart className="h-4 w-4 mr-2" />
              Significance:
            </h4>
            <p className="text-blue-800 text-sm">{holiday.significance}</p>
          </div>

          {holiday.traditions && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-green-900 mb-2">Traditions & Customs:</h4>
              <div className="flex flex-wrap gap-2">
                {holiday.traditions.map((tradition: string, index: number) => (
                  <span key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {tradition}
                  </span>
                ))}
              </div>
            </div>
          )}

          {holiday.regionalVariations && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
              <h4 className="font-medium text-yellow-900 mb-2">Regional Variations:</h4>
              <div className="space-y-2">
                {Object.entries(holiday.regionalVariations).map(([region, variation]) => (
                  <div key={region} className="text-sm">
                    <span className="font-medium text-yellow-800">{region}:</span>
                    <span className="text-yellow-700 ml-2">{variation as string}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Historical Background:</h4>
            <p className="text-gray-700 text-sm">{holiday.historicalBackground}</p>
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

  // Group holidays by month
  const holidaysByMonth = allHolidays.reduce((acc, holiday) => {
    const month = getMonthName(holiday.date)
    if (!acc[month]) {
      acc[month] = []
    }
    acc[month].push(holiday)
    return acc
  }, {} as Record<string, typeof allHolidays>)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
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
              <Link href="/national-festival-holidays" className="text-orange-500 font-medium">Festivals</Link>
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
              <Globe className="h-12 w-12 text-purple-600 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">National & Festival Holidays 2024</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to India's national holidays, religious festivals, and cultural celebrations with their significance and traditions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">National Holidays</p>
                  <p className="text-2xl font-bold text-gray-900">{nationalHolidays.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Heart className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Religious Festivals</p>
                  <p className="text-2xl font-bold text-gray-900">{religiousFestivals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Cultural Festivals</p>
                  <p className="text-2xl font-bold text-gray-900">{culturalFestivals.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Holidays</p>
                  <p className="text-2xl font-bold text-gray-900">{allHolidays.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> */}
     <PopularSearchBoxes  className=""/>
        {/* Filters and Search */}
        <Card className="mb-8 mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter Holidays & Festivals
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
                  <SelectValue placeholder="Select Religion" />
                </SelectTrigger>
                <SelectContent>
                  {religions.map((religion) => (
                    <SelectItem key={religion} value={religion.toLowerCase().replace(/\s+/g, '-')}>
                      {religion}
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
                  Download Calendar
                </Button>
                <Button variant="outline">
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Holiday Tabs */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Holidays</TabsTrigger>
            <TabsTrigger value="national">National Holidays</TabsTrigger>
            <TabsTrigger value="religious">Religious Festivals</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Festivals</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            {/* All Holidays by Month */}
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
                  <div className="space-y-6">
                    {monthHolidays.map((holiday) => (
                      <HolidayCard key={holiday.id} holiday={holiday} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="national" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Star className="h-6 w-6 mr-3 text-purple-600" />
                  National Holidays
                  <Badge variant="secondary" className="ml-3">
                    {nationalHolidays.length} holidays
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {nationalHolidays.map((holiday) => (
                    <HolidayCard key={holiday.id} holiday={holiday} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="religious" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Heart className="h-6 w-6 mr-3 text-red-600" />
                  Religious Festivals
                  <Badge variant="secondary" className="ml-3">
                    {religiousFestivals.length} festivals
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {religiousFestivals.map((holiday) => (
                    <HolidayCard key={holiday.id} holiday={holiday} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cultural" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                  <Globe className="h-6 w-6 mr-3 text-blue-600" />
                  Cultural Festivals
                  <Badge variant="secondary" className="ml-3">
                    {culturalFestivals.length} festivals
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {culturalFestivals.map((holiday) => (
                    <HolidayCard key={holiday.id} holiday={holiday} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Festival Calendar Overview */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Festival Calendar Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <h4 className="font-medium text-purple-900 mb-2">National Holidays</h4>
                <p className="text-purple-800 text-sm mb-3">
                  Secular holidays observed across all states and union territories of India.
                </p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Republic Day (Jan 26)</li>
                  <li>• Independence Day (Aug 15)</li>
                  <li>• Gandhi Jayanti (Oct 2)</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h4 className="font-medium text-red-900 mb-2">Religious Festivals</h4>
                <p className="text-red-800 text-sm mb-3">
                  Major religious festivals celebrated by different communities across India.
                </p>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Hindu: Diwali, Holi, Dussehra</li>
                  <li>• Islamic: Eid ul-Fitr, Eid ul-Adha</li>
                  <li>• Christian: Christmas, Good Friday</li>
                  <li>• Buddhist: Buddha Purnima</li>
                  <li>• Sikh: Guru Nanak Jayanti</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-2">Cultural Festivals</h4>
                <p className="text-blue-800 text-sm mb-3">
                  Regional and cultural festivals specific to different states and communities.
                </p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Onam (Kerala)</li>
                  <li>• Durga Puja (West Bengal)</li>
                  <li>• Ganesh Chaturthi (Maharashtra)</li>
                  <li>• Baisakhi (Punjab)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900">Important Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>National Holidays:</strong> These are observed across all states and union territories and are compulsory holidays for government offices.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Gazetted Holidays:</strong> Official holidays declared by the government and observed by all government offices and most private organizations.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Regional Variations:</strong> Some festivals may be celebrated differently across regions or may not be observed in all states.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Lunar Calendar:</strong> Many festivals are based on lunar calendar and dates may vary slightly each year.</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p><strong>Cultural Significance:</strong> Each festival has deep cultural and historical significance and promotes unity in diversity.</p>
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
                <li><Link href="/national-festival-holidays" className="hover:text-white transition-colors">Holidays</Link></li>
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

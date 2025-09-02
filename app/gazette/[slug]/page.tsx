// "use client"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { MapPin, Building2, Newspaper, AlertCircle, Share2, Bookmark, Clock, Users, ExternalLink, TrendingUp, Target, CheckCircle, Search } from 'lucide-react'
// import Link from "next/link"
// import { Input } from "@/components/ui/input"
// import PopularSearch from "@/app/PopularSearch/PopularSearch"
// import { useParams } from "next/navigation"

// // Mock database of gazette notifications with SEO-friendly slugs
// const notificationsDatabase = {
//   "maharashtra-minimum-wages-revision-2025": {
//     id: 1,
//     title: "Notification regarding revision of Minimum Wages for Maharashtra State",
//     slug: "maharashtra-minimum-wages-revision-2025",
//     notificationNumber: "G.O. No. LMW-2024/CR-45/Lab-2",
//     department: "Labour and Employment Department",
//     state: "Maharashtra",
//     category: "Minimum Wages",
//     description: "Revision of minimum wages for various categories of workers in Maharashtra state effective from January 1, 2025",
//     publishedDate: "2024-12-20",
//     effectiveDate: "2025-01-01",
//     fileSize: "1.2 MB",
//     format: "PDF",
//     isNew: true,
//     priority: "High",
//     views: 2847,
//     fullContent: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
//     keyHighlights: [
//       "Minimum wage increased by 12% across all categories",
//       "New rates applicable from January 1, 2025",
//       "Covers agricultural and non-agricultural workers",
//       "Special provisions for skilled and semi-skilled workers",
//       "Overtime rates revised accordingly"
//     ],
//     affectedSectors: [
//       "Agriculture and Allied Activities",
//       "Construction Industry",
//       "Manufacturing Sector",
//       "Service Industry",
//       "Retail and Wholesale Trade"
//     ],
//     complianceRequirements: [
//       "Update wage registers by December 31, 2024",
//       "Display revised wage rates at workplace",
//       "Ensure payment as per new rates from January 2025",
//       "Submit compliance report to labour department"
//     ],
//     penalties: "Non-compliance may result in penalties up to ₹50,000 and imprisonment up to 6 months",
//     contactInfo: {
//       office: "Commissioner of Labour, Maharashtra",
//       address: "New Administrative Building, Opposite Mantralaya, Mumbai - 400032",
//       phone: "+91-22-2202-2574",
//       email: "labour.mah@gov.in"
//     }
//   },
//   "contract-labour-rules-amendment-2024": {
//     id: 2,
//     title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     slug: "contract-labour-rules-amendment-2024",
//     notificationNumber: "S.O. 4521(E)",
//     department: "Ministry of Labour and Employment",
//     state: "Central",
//     category: "Contract Labour",
//     description: "Amendment to rules regarding digital registration and compliance mechanisms for contract labour establishments",
//     publishedDate: "2024-12-18",
//     effectiveDate: "2024-12-18",
//     fileSize: "856 KB",
//     format: "PDF",
//     isNew: true,
//     priority: "High",
//     views: 1923,
//     fullContent: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
//     keyHighlights: [
//       "Introduction of digital registration process",
//       "Online submission of returns and reports",
//       "Simplified renewal procedures",
//       "Enhanced monitoring mechanisms",
//       "Reduced compliance burden for small establishments"
//     ],
//     affectedSectors: [
//       "Manufacturing Industries",
//       "Construction Companies",
//       "Service Providers",
//       "IT and Software Companies",
//       "Healthcare Institutions"
//     ],
//     complianceRequirements: [
//       "Migrate to digital platform by March 31, 2025",
//       "Update existing registrations online",
//       "Submit quarterly returns electronically",
//       "Maintain digital records of contract workers"
//     ],
//     penalties: "Failure to comply with digital requirements may result in suspension of registration",
//     contactInfo: {
//       office: "Ministry of Labour and Employment",
//       address: "Shram Shakti Bhawan, Rafi Marg, New Delhi - 110001",
//       phone: "+91-11-2371-6000",
//       email: "secy-labour@nic.in"
//     }
//   },
//   "karnataka-professional-tax-rates-2025": {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     slug: "karnataka-professional-tax-rates-2025",
//     notificationNumber: "FD 01 CTX 2024",
//     department: "Finance Department",
//     state: "Karnataka",
//     category: "Professional Tax",
//     description: "Revised professional tax slabs and rates applicable for the financial year 2025-26",
//     publishedDate: "2024-12-15",
//     effectiveDate: "2025-04-01",
//     fileSize: "634 KB",
//     format: "PDF",
//     isNew: true,
//     priority: "Medium",
//     views: 1456,
//     fullContent: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
//     keyHighlights: [
//       "New tax slabs based on monthly income",
//       "Reduced rates for lower income groups",
//       "Online payment facility available",
//       "Simplified registration process",
//       "Penalty waiver for early compliance"
//     ],
//     affectedSectors: [
//       "All Professions and Trades",
//       "Salaried Employees",
//       "Business Establishments",
//       "Professional Service Providers",
//       "Self-employed Individuals"
//     ],
//     complianceRequirements: [
//       "Register for professional tax by March 31, 2025",
//       "File monthly returns online",
//       "Display registration certificate at workplace",
//       "Maintain proper books of accounts"
//     ],
//     penalties: "Late payment attracts penalty of 2% per month on the tax amount",
//     contactInfo: {
//       office: "Commercial Taxes Department, Karnataka",
//       address: "MS Building, Dr. Ambedkar Veedhi, Bangalore - 560001",
//       phone: "+91-80-2235-2525",
//       email: "commtax.kar@gov.in"
//     }
//   }
// }

// const relatedNotifications = [
//   {
//     title: "PF contribution rate changes - Circular",
//     state: "Central",
//     category: "Provident Fund",
//     publishedDate: "2024-12-12",
//     slug: "pf-contribution-rate-changes-2025"
//   },
//   {
//     title: "ESI Medical Benefit rates revision notification",
//     state: "Central", 
//     category: "ESI",
//     publishedDate: "2024-12-10",
//     slug: "esi-medical-benefit-rates-revision-2025"
//   },
//   {
//     title: "Maternity Benefit Act - Enhanced benefit rates notification",
//     state: "Central",
//     category: "Maternity Benefits", 
//     publishedDate: "2024-12-05",
//     slug: "maternity-benefit-enhanced-rates-2025"
//   }
// ]

// export default function NotificationDetailPage() {
//   // Use useParams hook instead of async params
//   const params = useParams()
//   const slug = params.slug as string
  
//   const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
//   // Default to first notification if slug not found
//   const displayData = notificationData || notificationsDatabase["maharashtra-minimum-wages-revision-2025"]

//   const getPriorityColor = (priority: string) => {
//     switch (priority) {
//       case 'High':
//         return 'bg-red-100 text-red-700'
//       case 'Medium':
//         return 'bg-yellow-100 text-yellow-700'
//       case 'Low':
//         return 'bg-green-100 text-green-700'
//       default:
//         return 'bg-gray-100 text-gray-700'
//     }
//   }

//   const formatViews = (views: number) => {
//     if (views >= 1000) {
//       return `${(views / 1000).toFixed(1)}k`
//     }
//     return views.toString()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Search Bar */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" aria-label="Search" />
//             <Input
//               type="text"
//               placeholder="Search gazette notifications..."
//               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//               aria-label="Search gazette notifications"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

//         {/* Grid Layout with Sidebar */}
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Title and Description */}
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-slate-800 mb-2">{displayData.title}</h1>
//               <p className="text-gray-600 text-lg leading-relaxed">
//                 {displayData.description}
//               </p>
//             </div>

//             {/* Notification Header */}
//             <Card className="mb-8 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-center gap-3 mb-4">
//                       <Badge className="bg-slate-800">
//                         <Building2 className="w-3 h-3 mr-1" />
//                         {displayData.state}
//                       </Badge>
//                       <Badge variant="outline">
//                         {displayData.category}
//                       </Badge>
//                       <Badge className={`text-xs ${getPriorityColor(displayData.priority)}`}>
//                         {displayData.priority} Priority
//                       </Badge>
//                       {displayData.isNew && (
//                         <Badge className="bg-green-100 text-green-700 text-xs">
//                           New
//                         </Badge>
//                       )}
//                     </div>
//                   </div>
//                   <div className="flex gap-2 ml-4">
//                     <Button variant="outline" size="sm" aria-label="Share notification">
//                       <Share2 className="w-4 h-4" />
//                     </Button>
//                     <Button variant="outline" size="sm" aria-label="Bookmark notification">
//                       <Bookmark className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Notification Metadata */}
//                 <div className="grid md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-500">{new Date(displayData.publishedDate).getDate()}</div>
//                     <div className="text-sm text-gray-600">
//                       {new Date(displayData.publishedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                     </div>
//                     <div className="text-xs text-gray-500">Published</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-500">{new Date(displayData.effectiveDate).getDate()}</div>
//                     <div className="text-sm text-gray-600">
//                       {new Date(displayData.effectiveDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
//                     </div>
//                     <div className="text-xs text-gray-500">Effective</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-500">{formatViews(displayData.views)}</div>
//                     <div className="text-sm text-gray-600">Views</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-500">{displayData.fileSize}</div>
//                     <div className="text-sm text-gray-600">{displayData.format}</div>
//                   </div>
//                 </div>

//                 {/* Department Info */}
//                 <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                   <div className="text-sm text-blue-800">
//                     <strong>Issuing Authority:</strong> {displayData.department}
//                   </div>
//                   <div className="text-sm text-blue-700 mt-1">
//                     <strong>Notification Number:</strong> {displayData.notificationNumber}
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>

//             {/* Important Notice */}
//             <Alert className="mb-8 border-orange-200 bg-orange-50">
//               <AlertCircle className="h-4 w-4 text-orange-600" />
//               <AlertDescription className="text-orange-800">
//                 <strong>Important:</strong> This notification is effective from {new Date(displayData.effectiveDate).toLocaleDateString()}. 
//                 Please ensure compliance with all requirements mentioned in this notification.
//               </AlertDescription>
//             </Alert>

//             {/* Tabs Content */}
//             <Tabs defaultValue="overview" className="space-y-6">
//               <TabsList className="grid w-full grid-cols-4">
//                 <TabsTrigger value="overview">Overview</TabsTrigger>
//                 <TabsTrigger value="highlights">Key Points</TabsTrigger>
//                 <TabsTrigger value="compliance">Compliance</TabsTrigger>
//                 <TabsTrigger value="contact">Contact</TabsTrigger>
//               </TabsList>

//               <TabsContent value="overview" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Newspaper className="w-5 h-5 text-orange-500" />
//                       Notification Overview
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div>
//                       <h3 className="font-semibold mb-2">Full Content</h3>
//                       <p className="text-gray-700 leading-relaxed">{displayData.fullContent}</p>
//                     </div>
                    
//                     <Separator />
                    
//                     <div>
//                       <h3 className="font-semibold mb-3">Affected Sectors</h3>
//                       <ul className="space-y-2">
//                         {displayData.affectedSectors.map((sector, index) => (
//                           <li key={index} className="flex items-start gap-2">
//                             <Target className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
//                             <span className="text-gray-700">{sector}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     <Separator />
                    
//                     <div>
//                       <h3 className="font-semibold mb-2">Penalties for Non-Compliance</h3>
//                       <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                         <p className="text-red-800 text-sm">{displayData.penalties}</p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="highlights" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <TrendingUp className="w-5 h-5 text-orange-500" />
//                       Key Highlights
//                     </CardTitle>
//                     <CardDescription>
//                       Important points and changes introduced by this notification
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       {displayData.keyHighlights.map((highlight, index) => (
//                         <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
//                           <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
//                           <span className="text-green-800 font-medium">{highlight}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="compliance" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Users className="w-5 h-5 text-orange-500" />
//                       Compliance Requirements
//                     </CardTitle>
//                     <CardDescription>
//                       Actions required to ensure compliance with this notification
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <h4 className="font-semibold mb-3">Required Actions</h4>
//                       {displayData.complianceRequirements.map((requirement, index) => (
//                         <div key={index} className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
//                           <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
//                             {index + 1}
//                           </div>
//                           <span className="text-gray-700">{requirement}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="contact" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Building2 className="w-5 h-5 text-orange-500" />
//                       Contact Information
//                     </CardTitle>
//                     <CardDescription>
//                       Get in touch with the issuing authority for queries and clarifications
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-4">
//                       <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
//                         <h4 className="font-semibold text-blue-800 mb-3">{displayData.contactInfo.office}</h4>
//                         <div className="space-y-2 text-blue-700">
//                           <div className="flex items-start gap-2">
//                             <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
//                             <span className="text-sm">{displayData.contactInfo.address}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Clock className="w-4 h-4 flex-shrink-0" />
//                             <span className="text-sm">{displayData.contactInfo.phone}</span>
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <ExternalLink className="w-4 h-4 flex-shrink-0" />
//                             <Link href={`mailto:${displayData.contactInfo.email}`} className="text-sm hover:underline" aria-label="Email">
//                               {displayData.contactInfo.email}
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>

//             {/* Back Button */}
//             <div className="mt-8">
//               <Button
//                 asChild
//                 variant="outline"
//                 className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
//                 aria-label="Back to Gazette Notifications"
//               >
//                 <Link href="/gazette" aria-label="Back to Gazette Notifications">← Back to Gazette Notifications</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="space-y-6 sticky top-24">
//               <Card>
//                 <CardContent className="space-y-6">
//                   <PopularSearch className="mt-4" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }















// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Download } from 'lucide-react'
// import { useParams } from "next/navigation"

// // Mock database of gazette notifications with SEO-friendly slugs
// const notificationsDatabase = {
//   "maharashtra-minimum-wages-revision-2025": {
//     id: 1,
//     title: "Notification regarding revision of Minimum Wages for Maharashtra State",
//     slug: "maharashtra-minimum-wages-revision-2025",
//     state: "Maharashtra",
//     description: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
//     updatedDate: "1st Sep, 2025"
//   },
//   "contract-labour-rules-amendment-2024": {
//     id: 2,
//     title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     slug: "contract-labour-rules-amendment-2024",
//     state: "Central",
//     description: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
//     updatedDate: "18th Dec, 2024"
//   },
//   "karnataka-professional-tax-rates-2025": {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     slug: "karnataka-professional-tax-rates-2025",
//     state: "Karnataka",
//     description: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
//     updatedDate: "15th Dec, 2024"
//   },
//   "west-bengal-bengali-language-signage-2025": {
//     id: 4,
//     title: "ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025",
//     slug: "west-bengal-bengali-language-signage-2025",
//     state: "Central",
//     description: "The Press Information Bureau released news regarding ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025. Please refer the press release for more details.",
//     updatedDate: "1st Sep, 2025"
//   }
// }

// export default function NotificationDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
  
//   const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
//   // Default to first notification if slug not found
//   const displayData = notificationData || notificationsDatabase["west-bengal-bengali-language-signage-2025"]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="
//         container mx-auto
//         px-3 py-6
//         min-[375px]:px-4 min-[375px]:py-7
//         sm:px-6 sm:py-8
//         lg:px-8 lg:py-10
//         xl:px-12
//         max-w-4xl
//       ">
        
//         {/* Simple Card Layout */}
//         <div className="
//           bg-white rounded-lg shadow-sm border border-gray-200
//           p-4 sm:p-6 lg:p-8
//         ">
          
//           {/* Header Section */}
//           <div className="flex items-start justify-between gap-4 mb-6">
//             <div className="flex-1">
//               <h1 className="
//                 font-bold text-gray-900 leading-tight mb-3
//                 text-lg sm:text-xl lg:text-2xl xl:text-3xl
//               ">
//                 {displayData.title}
//               </h1>
              
//               <div className="text-xs sm:text-sm text-gray-500 mb-4">
//                 Updated on {displayData.updatedDate}
//               </div>
//             </div>
            
//             {/* State Badge */}
//             <Badge className="
//               bg-orange-100 text-orange-700 border-orange-200
//               text-xs sm:text-sm px-2 py-1 flex-shrink-0
//             ">
//               {displayData.state}
//             </Badge>
//           </div>
          
//           {/* Description */}
//           <div className="mb-8">
//             <p className="
//               text-gray-700 leading-relaxed
//               text-sm sm:text-base lg:text-lg
//             ">
//               {displayData.description}
//             </p>
//           </div>
          
//           {/* Download Button */}
//           <div className="flex justify-start">
//             <Button className="
//               bg-blue-600 hover:bg-blue-700 text-white
//               px-4 py-2 sm:px-6 sm:py-3
//               text-sm sm:text-base
//               rounded-md font-medium
//               inline-flex items-center gap-2
//             ">
//               <Download className="w-4 h-4" />
//               Download
//             </Button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   )
// } 



// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Download } from 'lucide-react'
// import { useParams } from "next/navigation"

// // Mock database of gazette notifications with SEO-friendly slugs
// const notificationsDatabase = {
//   "maharashtra-minimum-wages-revision-2025": {
//     id: 1,
//     title: "Notification regarding revision of Minimum Wages for Maharashtra State",
//     slug: "maharashtra-minimum-wages-revision-2025",
//     state: "Maharashtra",
//     description: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
//     updatedDate: "1st Sep, 2025"
//   },
//   "contract-labour-rules-amendment-2024": {
//     id: 2,
//     title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     slug: "contract-labour-rules-amendment-2024",
//     state: "Central",
//     description: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
//     updatedDate: "18th Dec, 2024"
//   },
//   "karnataka-professional-tax-rates-2025": {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     slug: "karnataka-professional-tax-rates-2025",
//     state: "Karnataka",
//     description: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
//     updatedDate: "15th Dec, 2024"
//   },
//   "west-bengal-bengali-language-signage-2025": {
//     id: 4,
//     title: "ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025",
//     slug: "west-bengal-bengali-language-signage-2025",
//     state: "Central",
//     description: "The Press Information Bureau released news regarding ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025. Please refer the press release for more details.",
//     updatedDate: "1st Sep, 2025"
//   }
// }

// export default function NotificationDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
  
//   const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
//   // Default to first notification if slug not found
//   const displayData = notificationData || notificationsDatabase["west-bengal-bengali-language-signage-2025"]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="
//         container mx-auto
//         px-3 py-4
//         min-[375px]:px-4 min-[375px]:py-5
//         sm:px-6 sm:py-6
//         lg:px-8 lg:py-7
//         xl:px-12
//         max-w-4xl
//       ">
        
//         {/* Card with Orange Left Border */}
//         <div className="
//           bg-white rounded-lg shadow-sm border border-gray-200
//           border-l-4 border-l-orange-500
//           p-4 sm:p-5 lg:p-6
//         ">
          
//           {/* Header Section */}
//           <div className="flex items-start justify-between gap-4 mb-4">
//             <div className="flex-1">
//               <h1 className="
//                 font-bold text-gray-900 leading-tight mb-2
//                 text-lg sm:text-xl lg:text-2xl xl:text-3xl
//               ">
//                 {displayData.title}
//               </h1>
              
//               <div className="text-xs sm:text-sm text-gray-500 mb-3">
//                 Updated on {displayData.updatedDate}
//               </div>
//             </div>
            
//             {/* State Badge */}
//             <Badge className="
//               bg-orange-100 text-orange-700 border-orange-200
//               text-xs sm:text-sm px-2 py-1 flex-shrink-0
//             ">
//               {displayData.state}
//             </Badge>
//           </div>
          
//           {/* Description */}
//           <div className="mb-5">
//             <p className="
//               text-gray-700 leading-relaxed
//               text-sm sm:text-base lg:text-lg
//             ">
//               {displayData.description}
//             </p>
//           </div>
          
//           {/* Download Button */}
//           <div className="flex justify-start">
//             <Button className="
//               bg-blue-600 hover:bg-blue-700 text-white
//               px-4 py-2 sm:px-6 sm:py-3
//               text-sm sm:text-base
//               rounded-md font-medium
//               inline-flex items-center gap-2
//             ">
//               <Download className="w-4 h-4" />
//               Download
//             </Button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   )
// }











// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Download } from 'lucide-react'
// import { useParams } from "next/navigation"

// // Mock database of gazette notifications with SEO-friendly slugs
// const notificationsDatabase = {
//   "maharashtra-minimum-wages-revision-2025": {
//     id: 1,
//     title: "Notification regarding revision of Minimum Wages for Maharashtra State",
//     slug: "maharashtra-minimum-wages-revision-2025",
//     state: "Maharashtra",
//     description: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
//     updatedDate: "1st Sep, 2025"
//   },
//   "contract-labour-rules-amendment-2024": {
//     id: 2,
//     title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     slug: "contract-labour-rules-amendment-2024",
//     state: "Central",
//     description: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
//     updatedDate: "18th Dec, 2024"
//   },
//   "karnataka-professional-tax-rates-2025": {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     slug: "karnataka-professional-tax-rates-2025",
//     state: "Karnataka",
//     description: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
//     updatedDate: "15th Dec, 2024"
//   },
//   "west-bengal-bengali-language-signage-2025": {
//     id: 4,
//     title: "ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025",
//     slug: "west-bengal-bengali-language-signage-2025",
//     state: "Central",
//     description: "The Press Information Bureau released news regarding ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025. Please refer the press release for more details.",
//     updatedDate: "1st Sep, 2025"
//   }
// }

// export default function NotificationDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
  
//   const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
//   // Default to first notification if slug not found
//   const displayData = notificationData || notificationsDatabase["west-bengal-bengali-language-signage-2025"]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="
//         container mx-auto
//         px-3 py-2
//         min-[375px]:px-4 min-[375px]:py-3
//         sm:px-6 sm:py-3
//         lg:px-8 lg:py-4
//         xl:px-12
//         max-w-4xl
//       ">
        
//         {/* Card with Orange Left Border - Minimized Height */}
//         <div className="
//           bg-white rounded-lg shadow-sm border border-gray-200
//           border-l-4 border-l-orange-500
//           p-3 sm:p-4 lg:p-4
//         ">
          
//           {/* Header Section */}
//           <div className="flex items-start justify-between gap-4 mb-2">
//             <div className="flex-1">
//               <h1 className="
//                 font-bold text-gray-900 leading-tight mb-1
//                 text-base sm:text-lg lg:text-xl xl:text-2xl
//               ">
//                 {displayData.title}
//               </h1>
              
//               <div className="text-xs sm:text-sm text-gray-500 mb-2">
//                 Updated on {displayData.updatedDate}
//               </div>
//             </div>
            
//             {/* State Badge */}
//             <Badge className="
//               bg-orange-100 text-orange-700 border-orange-200
//               text-xs sm:text-sm px-2 py-1 flex-shrink-0
//             ">
//               {displayData.state}
//             </Badge>
//           </div>
          
//           {/* Description */}
//           <div className="mb-3">
//             <p className="
//               text-gray-700 leading-relaxed
//               text-sm sm:text-base
//             ">
//               {displayData.description}
//             </p>
//           </div>
          
//           {/* Download Button - Orange Color */}
//           <div className="flex justify-start">
//             <Button className="
//               bg-orange-500 hover:bg-orange-600 text-white
//               px-4 py-2 sm:px-5 sm:py-2
//               text-sm sm:text-base
//               rounded-md font-medium
//               inline-flex items-center gap-2
//             ">
//               <Download className="w-4 h-4" />
//               Download
//             </Button>
//           </div>
          
//         </div>
//       </div>
//     </div>
//   )
// }









// "use client"

// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { Download } from 'lucide-react'
// import { useParams } from "next/navigation"
// import PopularSearch from "@/app/PopularSearch/PopularSearch" // Adjust the import path as needed

// // Mock database of gazette notifications with SEO-friendly slugs
// const notificationsDatabase = {
//   "maharashtra-minimum-wages-revision-2025": {
//     id: 1,
//     title: "Notification regarding revision of Minimum Wages for Maharashtra State",
//     slug: "maharashtra-minimum-wages-revision-2025",
//     state: "Maharashtra",
//     description: "The Government of Maharashtra hereby notifies the revision of minimum wages for various categories of workers employed in scheduled employments in the State of Maharashtra. This notification supersedes all previous notifications on the subject.",
//     updatedDate: "1st Sep, 2025"
//   },
//   "contract-labour-rules-amendment-2024": {
//     id: 2,
//     title: "Amendment to Contract Labour (Regulation and Abolition) Central Rules, 1971",
//     slug: "contract-labour-rules-amendment-2024",
//     state: "Central",
//     description: "In exercise of the powers conferred by section 35 of the Contract Labour (Regulation and Abolition) Act, 1970, the Central Government hereby makes the following amendments to the Contract Labour (Regulation and Abolition) Central Rules, 1971.",
//     updatedDate: "18th Dec, 2024"
//   },
//   "karnataka-professional-tax-rates-2025": {
//     id: 3,
//     title: "Notification on Professional Tax rates for Karnataka - 2025",
//     slug: "karnataka-professional-tax-rates-2025",
//     state: "Karnataka",
//     description: "The Government of Karnataka hereby notifies the revised rates of Professional Tax to be levied on persons engaged in professions, trades, callings and employments in the State of Karnataka for the financial year 2025-26.",
//     updatedDate: "15th Dec, 2024"
//   },
//   "west-bengal-bengali-language-signage-2025": {
//     id: 4,
//     title: "ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025",
//     slug: "west-bengal-bengali-language-signage-2025",
//     state: "Central",
//     description: "The Press Information Bureau released news regarding ESIC announces the kick-starting of outreach activities for Amnesty Scheme 2025. Please refer the press release for more details.",
//     updatedDate: "1st Sep, 2025"
//   }
// }

// export default function NotificationDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
  
//   const notificationData = notificationsDatabase[slug as keyof typeof notificationsDatabase]
  
//   // Default to first notification if slug not found
//   const displayData = notificationData || notificationsDatabase["west-bengal-bengali-language-signage-2025"]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="
//         container mx-auto
//         px-3 py-2
//         min-[375px]:px-4 min-[375px]:py-3
//         sm:px-6 sm:py-3
//         lg:px-8 lg:py-4
//         xl:px-12
//         max-w-7xl
//       ">
        
//         {/* Responsive Grid Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
          
//           {/* Popular Search - Shows on top for small devices */}
//           <div className="lg:hidden">
//             <Card>
//               <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
//                 <PopularSearch className="mb-0" />
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Card with Orange Left Border - Minimized Height */}
//             <div className="
//               bg-white rounded-lg shadow-sm border border-gray-200
//               border-l-4 border-l-orange-500
//               p-3 sm:p-4 lg:p-4
//             ">
              
//               {/* Header Section */}
//               <div className="flex items-start justify-between gap-4 mb-2">
//                 <div className="flex-1">
//                   <h1 className="
//                     font-bold text-gray-900 leading-tight mb-1
//                     text-base sm:text-lg lg:text-xl xl:text-2xl
//                   ">
//                     {displayData.title}
//                   </h1>
                  
//                   <div className="text-xs sm:text-sm text-gray-500 mb-2">
//                     Updated on {displayData.updatedDate}
//                   </div>
//                 </div>
                
//                 {/* State Badge */}
//                 <Badge className="
//                   bg-orange-100 text-orange-700 border-orange-200
//                   text-xs sm:text-sm px-2 py-1 flex-shrink-0
//                 ">
//                   {displayData.state}
//                 </Badge>
//               </div>
              
//               {/* Description */}
//               <div className="mb-3">
//                 <p className="
//                   text-gray-700 leading-relaxed
//                   text-sm sm:text-base
//                 ">
//                   {displayData.description}
//                 </p>
//               </div>
              
//               {/* Download Button - Orange Color */}
//               <div className="flex justify-start">
//                 <Button className="
//                   bg-orange-500 hover:bg-orange-600 text-white
//                   px-4 py-2 sm:px-5 sm:py-2
//                   text-sm sm:text-base
//                   rounded-md font-medium
//                   inline-flex items-center gap-2
//                 ">
//                   <Download className="w-4 h-4" />
//                   Download
//                 </Button>
//               </div>
              
//             </div>
//           </div>

//           {/* Popular Search - Shows on right side for large devices */}
//           <div className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent className="p-4 md:p-3 lg:p-3 xl:p-3 2xl:p-6">
//                   <PopularSearch className="mb-0" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }













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
    updatedDate: "1st Sep, 2025",
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
                    text-base sm:text-lg lg:text-xl xl:text-2xl
                  ">
                    {displayData.title}
                  </h1>
                  
                  <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    Updated on {displayData.updatedDate}
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
                  text-sm sm:text-base text-justify
                ">
                  {displayData.description}
                </p>
              </div>

              {/* Impact Section */}
              <div className="mb-3">
                <h3 className="
                  font-semibold text-gray-900 mb-2
                  text-sm sm:text-base lg:text-lg
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
                        text-sm sm:text-base
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

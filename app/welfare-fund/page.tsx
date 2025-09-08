// "use client"

// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   Search,
//   Filter,
//   Bell,
//   TrendingUp,
//   IndianRupee,
//   Users,
//   CheckCircle,
//   XCircle,
//   FileClock,
//   ScrollText
// } from "lucide-react"
// import Link from "next/link"
// import PopularSearch from "../PopularSearch/PopularSearch"

// const applicableStates = [
//   { name: 'Andhra Pradesh', slug: 'andhra-pradesh', contributionRate: '₹20/month', lastUpdated: '2024-12-15', establishments: 2847 },
//   { name: 'Chandigarh', slug: 'chandigarh', contributionRate: '₹15/month', lastUpdated: '2024-12-10', establishments: 456 },
//   { name: 'Chhattisgarh', slug: 'chhattisgarh', contributionRate: '₹18/month', lastUpdated: '2024-12-12', establishments: 1234 },
//   { name: 'Delhi', slug: 'delhi', contributionRate: '₹25/month', lastUpdated: '2024-12-20', establishments: 3567 },
//   { name: 'Goa', slug: 'goa', contributionRate: '₹20/month', lastUpdated: '2024-12-08', establishments: 567 },
//   { name: 'Gujarat', slug: 'gujarat', contributionRate: '₹22/month', lastUpdated: '2024-12-18', establishments: 4123 },
//   { name: 'Haryana', slug: 'haryana', contributionRate: '₹20/month', lastUpdated: '2024-12-14', establishments: 1890 },
//   { name: 'Karnataka', slug: 'karnataka', contributionRate: '₹25/month', lastUpdated: '2024-12-19', establishments: 3456 },
//   { name: 'Kerala', slug: 'kerala', contributionRate: '₹30/month', lastUpdated: '2024-12-16', establishments: 2234 },
//   { name: 'Madhya Pradesh', slug: 'madhya-pradesh', contributionRate: '₹18/month', lastUpdated: '2024-12-11', establishments: 1567 },
//   { name: 'Maharashtra', slug: 'maharashtra', contributionRate: '₹24/month', lastUpdated: '2024-12-22', establishments: 5678 },
//   { name: 'Odisha', slug: 'odisha', contributionRate: '₹16/month', lastUpdated: '2024-12-13', establishments: 1123 },
//   { name: 'Punjab', slug: 'punjab', contributionRate: '₹20/month', lastUpdated: '2024-12-17', establishments: 1789 },
//   { name: 'Tamil Nadu', slug: 'tamil-nadu', contributionRate: '₹28/month', lastUpdated: '2024-12-21', establishments: 4567 },
//   { name: 'Telangana', slug: 'telangana', contributionRate: '₹22/month', lastUpdated: '2024-12-15', establishments: 2345 },
//   { name: 'West Bengal', slug: 'west-bengal', contributionRate: '₹20/month', lastUpdated: '2024-12-09', establishments: 3234 }
// ]

// const nonApplicableStates = [
//   { name: 'Central', reason: 'No central LWF legislation' },
//   { name: 'Andaman and Nicobar Islands', reason: 'Under central administration' },
//   { name: 'Arunachal Pradesh', reason: 'State has not enacted LWF Act' },
//   { name: 'Assam', reason: 'State has not enacted LWF Act' },
//   { name: 'Bihar', reason: 'State has not enacted LWF Act' },
//   { name: 'Dadra and Nagar Haveli', reason: 'Under central administration' },
//   { name: 'Daman and Diu', reason: 'Under central administration' },
//   { name: 'Himachal Pradesh', reason: 'State has not enacted LWF Act' },
//   { name: 'Jammu and Kashmir', reason: 'Special administrative status' },
//   { name: 'Jharkhand', reason: 'State has not enacted LWF Act' },
//   { name: 'Ladakh', reason: 'Under central administration' },
//   { name: 'Lakshadweep', reason: 'Under central administration' },
//   { name: 'Manipur', reason: 'State has not enacted LWF Act' },
//   { name: 'Meghalaya', reason: 'State has not enacted LWF Act' },
//   { name: 'Mizoram', reason: 'State has not enacted LWF Act' },
//   { name: 'Nagaland', reason: 'State has not enacted LWF Act' },
//   { name: 'Puducherry', reason: 'Under central administration' },
//   { name: 'Rajasthan', reason: 'State has not enacted LWF Act' },
//   { name: 'Sikkim', reason: 'State has not enacted LWF Act' },
//   { name: 'Tripura', reason: 'State has not enacted LWF Act' },
//   { name: 'Uttar Pradesh', reason: 'State has not enacted LWF Act' },
//   { name: 'Uttarakhand', reason: 'State has not enacted LWF Act' }
// ]

// const recentUpdates = [
//   {
//     state: "Maharashtra",
//     title: "LWF Contribution Rates Revised",
//     date: "2024-12-22",
//     type: "Rate Update",
//     slug: "maharashtra"
//   },
//   {
//     state: "Karnataka",
//     title: "New Online Payment Portal",
//     date: "2024-12-19",
//     type: "System Update",
//     slug: "karnataka"
//   },
//   {
//     state: "Tamil Nadu",
//     title: "LWF Forms Digitization",
//     date: "2024-12-21",
//     type: "Process Update",
//     slug: "tamil-nadu"
//   }
// ]

// const filterOptions = {
//   states: ["All States", "Maharashtra", "Karnataka", "Delhi", "Gujarat", "Tamil Nadu", "West Bengal"],
//   contributionRange: ["All Ranges", "₹10-₹20", "₹20-₹30", "₹30+"],
//   lastUpdated: ["All Time", "Last 7 Days", "Last 30 Days", "Last 90 Days"]
// }

// export default function WelfareFundPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
      
//       <div className="container mx-auto px-4 py-8">
//         {/* Top Filter and Search Bar */}
//         <Card className="mb-8">
//           <CardContent className="p-6">
//             <div className="flex flex-col lg:flex-row gap-4 items-center">
//               {/* Filters Button */}
//               <Button variant="outline" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200" aria-label="Filters">
//                 <Filter className="w-4 h-4" />
//                 Filters
//               </Button>
              
//               {/* Search Input */}
//               <div className="relative flex-1">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input placeholder="Search by state name or contribution rate..." className="pl-12 py-3 h-12 rounded-lg" />
//               </div>
              
//               {/* State Filter */}
//               <Select>
//                 <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
//                   <SelectValue placeholder="Select state" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {filterOptions.states.map((state) => (
//                     <SelectItem key={state} value={state.toLowerCase().replace(/ /g, '-')}>
//                       {state}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               {/* Contribution Range Filter */}
//               <Select>
//                 <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
//                   <SelectValue placeholder="Contribution range" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {filterOptions.contributionRange.map((range) => (
//                     <SelectItem key={range} value={range.toLowerCase().replace(/ /g, '-')}>
//                       {range}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               {/* Last Updated Filter */}
//               <Select>
//                 <SelectTrigger className="w-48 bg-gray-100 hover:bg-gray-200">
//                   <SelectValue placeholder="Last updated" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {filterOptions.lastUpdated.map((period) => (
//                     <SelectItem key={period} value={period.toLowerCase().replace(/ /g, '-')}>
//                       {period}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
              
//               {/* Apply Button */}
//               <Button className="bg-orange-500 hover:bg-orange-600 px-6" aria-label="Apply">
//                 Apply
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 order-1 lg:order-1">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h1 className="text-3xl font-bold text-slate-800 mb-2">Labour Welfare Fund</h1>
//                   <p className="text-gray-600 text-lg">
//                     State-wise contribution rates, forms, and compliance requirements for LWF
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <Badge variant="secondary" className="px-3 py-1">
//                     {applicableStates.length} Applicable States
//                   </Badge>
//                 </div>
//               </div>

//               {/* Info Card */}
//               <Card className="bg-blue-50 border-blue-200 mb-8">
//                 <CardContent className="p-4">
//                   <div className="flex items-start gap-3">
//                     <IndianRupee className="w-5 h-5 text-blue-600 mt-0.5" />
//                     <div>
//                       <h3 className="font-semibold text-blue-900 mb-1">About Labour Welfare Fund</h3>
//                       <p className="text-blue-800 text-sm leading-relaxed">
//                         LWF is a statutory contribution by employers and employees to improve working conditions, 
//                         provide social security and raise living standards of workers in unorganized sectors.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Applicable States</p>
//                       <p className="text-2xl font-bold text-gray-900">{applicableStates.length}</p>
//                     </div>
//                     <CheckCircle className="h-8 w-8 text-blue-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Non-Applicable</p>
//                       <p className="text-2xl font-bold text-gray-900">{nonApplicableStates.length}</p>
//                     </div>
//                     <XCircle className="h-8 w-8 text-red-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Avg. Contribution</p>
//                       <p className="text-2xl font-bold text-gray-900">₹22</p>
//                     </div>
//                     <IndianRupee className="h-8 w-8 text-green-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">Coverage</p>
//                       <p className="text-2xl font-bold text-gray-900">Workers</p>
//                     </div>
//                     <Users className="h-8 w-8 text-purple-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Detailed Information Card */}
//             <Card className="mb-8 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-2xl text-gray-900">Understanding Labour Welfare Fund</CardTitle>
//               </CardHeader>
//               <CardContent className="text-gray-700 leading-relaxed space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">What is Labour Welfare Fund?</h3>
//                   <p>
//                     Labour welfare is an aid in the form of money or necessities for those in need. It provides facilities to labourers in order to improve their working conditions, provide social security, and raise their standard of living. Various state legislatures have enacted an Act exclusively focusing on welfare of the workers, known as the Labour Welfare Fund Act.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">Scope of Labour Welfare Fund Act</h3>
//                   <p>
//                     The scope of this Act is extended to housing, family care & worker's health service by providing medical examination, clinic for general treatment, infant welfare, women's general education, workers activity facilities, marriage, education, funeral etc. State specific Labour Welfare Funds are funded by contributions from the employer, employee and in few states, the government also.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Coverage & Applicability</h3>
//                   <p>
//                     The Labour Welfare Fund Act is not applicable to all category of employees working in the establishment. It depends upon the wages earned and designation of the employee. Also, one needs to check the total number of employees working before extending this Act to their establishment. The applicability of the Act based on wages and number of employees may differ from state to state.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions Cards */}
//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center">
//                 <CardContent className="pt-6">
//                   <div className="mx-auto mb-4 grid place-items-center size-12 rounded-xl bg-blue-50 ring-1 ring-blue-200">
//                     <FileClock className="h-6 w-6 text-blue-600" />
//                   </div>
//                   <h3 className="font-semibold mb-2">Latest Amendment</h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     View recent changes, effective dates, and Gazette references.
//                   </p>
//                   <Button variant="outline" size="sm" aria-label="View Amendments">View Amendments</Button>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center">
//                 <CardContent className="pt-6">
//                   <div className="mx-auto mb-4 grid place-items-center size-12 rounded-xl bg-emerald-50 ring-1 ring-emerald-200">
//                     <IndianRupee className="h-6 w-6 text-emerald-600" />
//                   </div>
//                   <h3 className="font-semibold mb-2">State-wise Rates</h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     Check contribution slabs, thresholds, and due cycles for your state.
//                   </p>
//                   <Button variant="outline" size="sm" aria-label="View Rates">View Rates</Button>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center">
//                 <CardContent className="pt-6">
//                   <div className="mx-auto mb-4 grid place-items-center size-12 rounded-xl bg-violet-50 ring-1 ring-violet-200">
//                     <ScrollText className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="font-semibold mb-2">Highlights of Acts</h3>
//                   <p className="text-sm text-gray-600 mb-4">
//                     One-page summaries: coverage, applicability, key compliance, penalties.
//                   </p>
//                   <Button variant="outline" size="sm" aria-label="Read Highlights">Read Highlights</Button>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* States Grid - Updated with Clean Design */}
//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Applicable States - Clean Design */}
//               <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//                 {/* Header - Full Width Background */}
//                 <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
//                   <div className="flex items-center gap-2">
//                     <CheckCircle className="h-5 w-5 text-blue-600" />
//                     <h3 className="text-xl font-semibold text-gray-900">Applicable States</h3>
//                     <Badge className="bg-blue-100 text-blue-800 ml-auto">
//                       {applicableStates.length} states
//                     </Badge>
//                   </div>
//                   <p className="text-sm text-blue-700 mt-1">
//                     States with active Labour Welfare Fund legislation
//                   </p>
//                 </div>
                
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="space-y-3">
//                     {applicableStates.map((state, index) => (
//                       <Link
//                         key={state.slug}
//                         href={`/welfare-fund/${state.slug}`}
//                         aria-label={`View details for ${state.name}`}
//                         className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer group border border-blue-100"
//                       >
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-blue-700 font-medium group-hover:text-orange-600 transition-colors">
//                             {state.name}
//                           </span>
//                           <Badge className="bg-green-100 text-green-800">
//                             {state.contributionRate}
//                           </Badge>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Non-Applicable States - Clean Design */}
//               <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
//                 {/* Header - Full Width Background */}
//                 <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                   <div className="flex items-center gap-2">
//                     <XCircle className="h-5 w-5 text-gray-600" />
//                     <h3 className="text-xl font-semibold text-gray-900">Non-Applicable States</h3>
//                     <Badge className="bg-gray-100 text-gray-700 ml-auto">
//                       {nonApplicableStates.length} states
//                     </Badge>
//                   </div>
//                   <p className="text-sm text-gray-600 mt-1">
//                     States/UTs without LWF legislation
//                   </p>
//                 </div>
                
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="space-y-3">
//                     {nonApplicableStates.map((state, index) => (
//                       <div
//                         key={state.name}
//                         className="p-4 bg-gray-50 rounded-lg border border-gray-200"
//                       >
//                         <div className="flex items-center justify-between mb-2">
//                           <span className="text-gray-600 font-medium">
//                             {state.name}
//                           </span>
//                           <Badge className="bg-gray-100 text-gray-600">
//                             Not Applicable
//                           </Badge>
//                         </div>
//                         <div className="flex items-center gap-1 text-xs text-gray-500">
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Sidebar with Quick Access */}
//           <div className="lg:col-span-1 order-2 lg:order-2">
//             <div className="space-y-6 sticky top-24">
//               <Card>
//                 <CardContent className="space-y-6">
//                   <PopularSearch className="mt-4" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>

//         {/* Help Section */}
//         <div className="mt-16">
//           <Card className="bg-gradient-to-r from-orange-50 to-blue-50 border-0">
//             <CardContent className="p-8">
//               <div className="text-center max-w-2xl mx-auto">
//                 <IndianRupee className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-slate-800 mb-4">Stay Updated with LWF Changes</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   Subscribe to our notification service to receive instant alerts about contribution rate changes, 
//                   new forms, and important compliance updates for your state.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Button className="bg-orange-500 hover:bg-orange-600" aria-label="Subscribe to Updates">
//                     <Bell className="w-4 h-4 mr-2" />
//                     Subscribe to Updates
//                   </Button>
//                   <Button variant="outline" aria-label="View Contribution Calculator">
//                     <TrendingUp className="w-4 h-4 mr-2" />
//                     View Contribution Calculator
//                   </Button>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }






"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  Filter,
  Bell,
  TrendingUp,
  IndianRupee,
  Users,
  CheckCircle,
  XCircle,
  FileClock,
  ScrollText
} from "lucide-react"
import Link from "next/link"
import PopularSearch from "../PopularSearch/PopularSearch"

const applicableStates = [
  { name: 'Andhra Pradesh', slug: 'andhra-pradesh', contributionRate: '₹20/month', lastUpdated: '2024-12-15', establishments: 2847 },
  { name: 'Chandigarh', slug: 'chandigarh', contributionRate: '₹15/month', lastUpdated: '2024-12-10', establishments: 456 },
  { name: 'Chhattisgarh', slug: 'chhattisgarh', contributionRate: '₹18/month', lastUpdated: '2024-12-12', establishments: 1234 },
  { name: 'Delhi', slug: 'delhi', contributionRate: '₹25/month', lastUpdated: '2024-12-20', establishments: 3567 },
  { name: 'Goa', slug: 'goa', contributionRate: '₹20/month', lastUpdated: '2024-12-08', establishments: 567 },
  { name: 'Gujarat', slug: 'gujarat', contributionRate: '₹22/month', lastUpdated: '2024-12-18', establishments: 4123 },
  { name: 'Haryana', slug: 'haryana', contributionRate: '₹20/month', lastUpdated: '2024-12-14', establishments: 1890 },
  { name: 'Karnataka', slug: 'karnataka', contributionRate: '₹25/month', lastUpdated: '2024-12-19', establishments: 3456 },
  { name: 'Kerala', slug: 'kerala', contributionRate: '₹30/month', lastUpdated: '2024-12-16', establishments: 2234 },
  { name: 'Madhya Pradesh', slug: 'madhya-pradesh', contributionRate: '₹18/month', lastUpdated: '2024-12-11', establishments: 1567 },
  { name: 'Maharashtra', slug: 'maharashtra', contributionRate: '₹24/month', lastUpdated: '2024-12-22', establishments: 5678 },
  { name: 'Odisha', slug: 'odisha', contributionRate: '₹16/month', lastUpdated: '2024-12-13', establishments: 1123 },
  { name: 'Punjab', slug: 'punjab', contributionRate: '₹20/month', lastUpdated: '2024-12-17', establishments: 1789 },
  { name: 'Tamil Nadu', slug: 'tamil-nadu', contributionRate: '₹28/month', lastUpdated: '2024-12-21', establishments: 4567 },
  { name: 'Telangana', slug: 'telangana', contributionRate: '₹22/month', lastUpdated: '2024-12-15', establishments: 2345 },
  { name: 'West Bengal', slug: 'west-bengal', contributionRate: '₹20/month', lastUpdated: '2024-12-09', establishments: 3234 }
]

const nonApplicableStates = [
  { name: 'Central', reason: 'No central LWF legislation' },
  { name: 'Andaman and Nicobar Islands', reason: 'Under central administration' },
  { name: 'Arunachal Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Assam', reason: 'State has not enacted LWF Act' },
  { name: 'Bihar', reason: 'State has not enacted LWF Act' },
  { name: 'Dadra and Nagar Haveli', reason: 'Under central administration' },
  { name: 'Daman and Diu', reason: 'Under central administration' },
  { name: 'Himachal Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Jammu and Kashmir', reason: 'Special administrative status' },
  { name: 'Jharkhand', reason: 'State has not enacted LWF Act' },
  { name: 'Ladakh', reason: 'Under central administration' },
  { name: 'Lakshadweep', reason: 'Under central administration' },
  { name: 'Manipur', reason: 'State has not enacted LWF Act' },
  { name: 'Meghalaya', reason: 'State has not enacted LWF Act' },
  { name: 'Mizoram', reason: 'State has not enacted LWF Act' },
  { name: 'Nagaland', reason: 'State has not enacted LWF Act' },
  { name: 'Puducherry', reason: 'Under central administration' },
  { name: 'Rajasthan', reason: 'State has not enacted LWF Act' },
  { name: 'Sikkim', reason: 'State has not enacted LWF Act' },
  { name: 'Tripura', reason: 'State has not enacted LWF Act' },
  { name: 'Uttar Pradesh', reason: 'State has not enacted LWF Act' },
  { name: 'Uttarakhand', reason: 'State has not enacted LWF Act' }
]

const recentUpdates = [
  {
    state: "Maharashtra",
    title: "LWF Contribution Rates Revised",
    date: "2024-12-22",
    type: "Rate Update",
    slug: "maharashtra"
  },
  {
    state: "Karnataka",
    title: "New Online Payment Portal",
    date: "2024-12-19",
    type: "System Update",
    slug: "karnataka"
  },
  {
    state: "Tamil Nadu",
    title: "LWF Forms Digitization",
    date: "2024-12-21",
    type: "Process Update",
    slug: "tamil-nadu"
  }
]

const filterOptions = {
  states: ["All States", "Maharashtra", "Karnataka", "Delhi", "Gujarat", "Tamil Nadu", "West Bengal"],
  contributionRange: ["All Ranges", "₹10-₹20", "₹20-₹30", "₹30+"],
  lastUpdated: ["All Time", "Last 7 Days", "Last 30 Days", "Last 90 Days"]
}

export default function WelfareFundPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">
                    Labour Welfare Fund :
                  </h1>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-[0.9rem] text-justify leading-relaxed">
                    Labour welfare is an aid in the form of money or necessities for those in need. It provides facilities to labourers in order to improve their working conditions, provide social security, and raise their standard of living. Various state legislatures have enacted an Act exclusively focusing on welfare of the workers, known as the Labour Welfare Fund Act.
                  </p>
                </div>
              </div>
            </div>

            {/* Horizontal Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-6 sm:mb-8 md:mb-10">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                <Input
                  placeholder="Search by state..."
                  className="pl-10 sm:pl-12 h-8 sm:h-9 md:h-10 rounded-lg text-xs sm:text-sm"
                />
              </div>

              {/* State Dropdown */}
              <div className="w-full sm:w-auto">
                <Select>
                  <SelectTrigger
                    className="
                          w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10
                          bg-white text-gray-900 border border-gray-300 rounded-lg
                          text-xs sm:text-sm
                          focus:outline-none
                          focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white
                          !focus-visible:ring-orange-500 !focus-visible:border-orange-500
                          hover:bg-orange-50
                        "
                  >
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-md">
                    {filterOptions.states.map((state) => (
                      <SelectItem
                        key={state}
                        value={state}
                        className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
                      >
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Contribution Range Filter */}
              <div className="w-full sm:w-auto">
                <Select>
                  <SelectTrigger
                    className="
                          w-full sm:w-48 md:w-52 h-8 sm:h-9 md:h-10
                          bg-white text-gray-900 border border-gray-300 rounded-lg
                          text-xs sm:text-sm
                          focus:outline-none
                          focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-white
                          !focus-visible:ring-orange-500 !focus-visible:border-orange-500
                          hover:bg-orange-50
                        "
                  >
                    <SelectValue placeholder="Contribution range" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-md">
                    {filterOptions.contributionRange.map((range) => (
                      <SelectItem
                        key={range}
                        value={range.toLowerCase().replace(/ /g, '-')}
                        className="text-xs sm:text-sm text-gray-900 cursor-pointer focus:bg-orange-100 focus:text-orange-700"
                      >
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40 lg:w-auto">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {applicableStates.length}
                      </p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Non-Applicable
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{nonApplicableStates.length}</p>
                    </div>
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Avg. Contribution
                      </p>
                      <p className="text-2xl font-bold text-gray-900">₹22</p>
                    </div>
                    <IndianRupee className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500 lg:h-40">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Coverage
                      </p>
                      <p className="text-2xl font-bold text-gray-900">Workers</p>
                    </div>
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* State-wise Applicability */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle>State-wise Applicability :</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States
                    </h3>
                    <div className="space-y-3">
                      {applicableStates.map((state, index) => (
                        <Link
                          key={index}
                          href={`/welfare-fund/${state.slug}`}
                          aria-label="View State-wise Applicability"
                        >
                          <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                            <div>
                              <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                {index + 1}. {state.name}
                              </span>
                              <div className="text-sm text-gray-700">
                                Contribution: {state.contributionRate}
                              </div>
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              Applicable
                            </Badge>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* Non-Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Non-Applicable States
                    </h3>
                    <div className="space-y-3">
                      {nonApplicableStates.map((state, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
                        >
                          <span className="text-gray-700">
                            {index + 1}. {state.name}
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-gray-100 text-gray-600"
                          >
                            Not Applicable
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
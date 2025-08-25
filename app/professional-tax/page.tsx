// // import { Metadata } from 'next'
// // import Link from 'next/link'
// // import { Search, Calculator, FileText, Globe, TrendingUp, Users, IndianRupee, Calendar, Bot } from 'lucide-react'
// // import { Button } from '@/components/ui/button'
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
// // import { Badge } from '@/components/ui/badge'
// // import { Input } from '@/components/ui/input'
// // import PopularSearchBoxes from '../PopularSearchBoxes/PopularSearchBoxes'
// // import PopularSearch from '../PopularSearch/PopularSearch'

// // export const metadata: Metadata = {
// //   title: 'Professional Tax - State-wise Rates & Slabs | E-Library',
// //   description: 'Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.',
// //   keywords: 'professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms'
// // }

// // const professionalTaxStates = [
// //   { name: 'Andhra Pradesh', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/andhra-pradesh' },
// //   { name: 'Assam', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/assam' },
// //   { name: 'Bihar', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/bihar' },
// //   { name: 'Chhattisgarh', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/chhattisgarh' },
// //   { name: 'Gujarat', maxRate: 2500, slabs: 6, status: 'Active', link: '/professional-tax/gujarat' },
// //   { name: 'Jharkhand', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/jharkhand' },
// //   { name: 'Karnataka', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/karnataka' },
// //   { name: 'Kerala', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/kerala' },
// //   { name: 'Madhya Pradesh', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/madhya-pradesh' },
// //   { name: 'Maharashtra', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/maharashtra' },
// //   { name: 'Meghalaya', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/meghalaya' },
// //   { name: 'Odisha', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/odisha' },
// //   { name: 'Sikkim', maxRate: 2500, slabs: 3, status: 'Active', link: '/professional-tax/sikkim' },
// //   { name: 'Tamil Nadu', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/tamil-nadu' },
// //   { name: 'Telangana', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/telangana' },
// //   { name: 'Tripura', maxRate: 2500, slabs: 4, status: 'Active', link: '/professional-tax/tripura' },
// //   { name: 'West Bengal', maxRate: 2500, slabs: 5, status: 'Active', link: '/professional-tax/west-bengal' }
// // ]

// // const nonApplicableStates = [
// //   'Arunachal Pradesh', 'Chandigarh', 'Delhi', 'Goa', 'Haryana', 'Himachal Pradesh',
// //   'Jammu and Kashmir', 'Ladakh', 'Manipur', 'Mizoram', 'Nagaland', 'Punjab',
// //   'Rajasthan', 'Uttar Pradesh', 'Uttarakhand'
// // ]

// // const trendingSearches = [
// //   'Professional Tax Rates 2024',
// //   'PT Slab Calculation',
// //   'Professional Tax Forms',
// //   'PT Registration Process',
// //   'Professional Tax Exemptions',
// //   'PT Due Dates',
// //   'Professional Tax Certificate',
// //   'PT Compliance Requirements'
// // ]

// // export default function ProfessionalTaxPage() {
// //   return (
// //     <div className="min-h-screen bg-gray-50">

// //       {/* Search Bar */}
// //       <div className="bg-white border-b">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
// //           <div className="relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// //             <Input
// //               type="text"
// //               placeholder="Search Professional Tax, PT rates, slabs..."
// //               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// //         {/* Main Content */}
// //         <div className="mb-8">
// //           <h1 className="text-3xl font-bold text-gray-900 mb-4">Professional Tax</h1>
// //           <p className="text-lg text-gray-700 mb-6">
// //             Professional Tax is a state-level tax levied on all persons earning income through employment, profession, or calling.
// //             It is governed by individual state legislation and varies across states in terms of rates, slabs, and compliance requirements.
// //           </p>
// //         </div>

// //         {/* Statistics Cards */}
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Applicable States</p>
// //                   <p className="text-2xl font-bold text-gray-900">17</p>
// //                 </div>
// //                 <Users className="w-8 h-8 text-blue-600" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Maximum Rate</p>
// //                   <p className="text-2xl font-bold text-gray-900">₹2,500</p>
// //                 </div>
// //                 <IndianRupee className="w-8 h-8 text-green-600" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="font-bold text-2xl text-gray-600">PT Calculator</p>
// //                   {/* <p className="text-2xl font-bold text-gray-900">4-6</p> */}
// //                 </div>
// //                 <Calculator className="w-8 h-8 text-blue-600 mx-auto mb-4" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //           <Card>
// //             <CardContent className="p-6">
// //               <div className="flex items-center justify-between">
// //                 <div>
// //                   <p className="text-sm font-medium text-gray-600">Ai Powered And PT Interest & Penalities Calculate</p>
// //                 </div>
// //                 <Bot className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* What is Professional Tax */}
// //         <Card className="mb-8">
// //           <CardHeader>
// //             <CardTitle>What is Professional Tax?</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <p className="text-gray-700 mb-4">
// //               Professional Tax is a direct tax levied by state governments on individuals earning income through employment,
// //               profession, or calling. It is collected by the employer from the employee's salary and remitted to the state government.
// //             </p>
// //             <p className="text-gray-700 mb-4">
// //               The tax is governed by individual state legislation, and each state has its own rates, slabs, and compliance requirements.
// //               The maximum amount of professional tax that can be levied is ₹2,500 per year as per the Constitution of India.
// //             </p>
// //           </CardContent>
// //         </Card>

// //         {/* Scope and Coverage */}
// //         <Card className="mb-8">
// //           <CardHeader>
// //             <CardTitle>Scope and Coverage</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <p className="text-gray-700 mb-4">
// //               Professional Tax applies to all persons earning income through:
// //             </p>
// //             <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
// //               <li>Employment or service under any person</li>
// //               <li>Carrying on any profession</li>
// //               <li>Carrying on any trade, calling or employment</li>
// //               <li>Company directors and partners in firms</li>
// //             </ul>
// //             <p className="text-gray-700">
// //               The tax is applicable to both residents and non-residents earning income within the state jurisdiction.
// //             </p>
// //           </CardContent>
// //         </Card>

// //         {/* State-wise Applicability */}
// //         <Card className="mb-8">
// //           <CardHeader>
// //             <CardTitle>State-wise Applicability</CardTitle>
// //             <CardDescription>
// //               Professional Tax is currently applicable in 17 states across India
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //               {/* Applicable States */}
// //               <div>
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Applicable States</h3>
// //                 <div className="space-y-3">
// //                   {professionalTaxStates.map((state, index) => (
// //                     <Link key={index} href={state.link}>
// //                       <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
// //                         <div>
// //                           <span className="font-medium text-blue-900">{index + 1}. {state.name}</span>
// //                           <div className="text-sm text-blue-700">
// //                             Max Rate: ₹{state.maxRate} | {state.slabs} Slabs
// //                           </div>
// //                         </div>
// //                         <Badge variant="secondary" className="bg-green-100 text-green-800">
// //                           {state.status}
// //                         </Badge>
// //                       </div>
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Non-Applicable States */}
// //               <div>
// //                 <h3 className="text-lg font-semibold text-gray-900 mb-4">Non-Applicable States</h3>
// //                 <div className="space-y-3">
// //                   {nonApplicableStates.map((state, index) => (
// //                     <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
// //                       <span className="text-gray-700">{index + 1}. {state}</span>
// //                       <Badge variant="secondary" className="bg-gray-100 text-gray-600">
// //                         Not Applicable
// //                       </Badge>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Important Notes */}
// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Important Notes</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-3">
// //               <div className="flex items-start space-x-3">
// //                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-700">
// //                   Professional Tax rates and slabs vary significantly across states. Always refer to the specific state's legislation.
// //                 </p>
// //               </div>
// //               <div className="flex items-start space-x-3">
// //                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-700">
// //                   Employers are responsible for deducting PT from employee salaries and remitting to the state government.
// //                 </p>
// //               </div>
// //               <div className="flex items-start space-x-3">
// //                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-700">
// //                   Non-compliance with Professional Tax regulations may result in penalties and interest charges.
// //                 </p>
// //               </div>
// //               <div className="flex items-start space-x-3">
// //                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
// //                 <p className="text-gray-700">
// //                   Some states provide exemptions for certain categories of employees or income levels.
// //                 </p>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   )
// // }




// import { Metadata } from "next";
// import Link from "next/link";
// import {
//   Search,
//   Calculator,
//   Users,
//   IndianRupee,
//   Calendar,
//   Bot,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import PopularSearchBoxes from "../PopularSearchBoxes/PopularSearchBoxes";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export const metadata: Metadata = {
//   title: "Professional Tax - State-wise Rates & Slabs | E-Library",
//   description:
//     "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
//   keywords:
//     "professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms",
// };

// const professionalTaxStates = [
//   {
//     name: "Andhra Pradesh",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/andhra-pradesh",
//   },
//   {
//     name: "Assam",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/assam",
//   },
//   {
//     name: "Bihar",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/bihar",
//   },
//   {
//     name: "Chhattisgarh",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/chhattisgarh",
//   },
//   {
//     name: "Gujarat",
//     maxRate: 2500,
//     slabs: 6,
//     status: "Applicable",
//     link: "/professional-tax/gujarat",
//   },
//   {
//     name: "Jharkhand",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/jharkhand",
//   },
//   {
//     name: "Karnataka",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/karnataka",
//   },
//   {
//     name: "Kerala",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/kerala",
//   },
//   {
//     name: "Madhya Pradesh",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/madhya-pradesh",
//   },
//   {
//     name: "Maharashtra",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/maharashtra",
//   },
//   {
//     name: "Meghalaya",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/meghalaya",
//   },
//   {
//     name: "Odisha",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/odisha",
//   },
//   {
//     name: "Sikkim",
//     maxRate: 2500,
//     slabs: 3,
//     status: "Applicable",
//     link: "/professional-tax/sikkim",
//   },
//   {
//     name: "Tamil Nadu",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/tamil-nadu",
//   },
//   {
//     name: "Telangana",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/telangana",
//   },
//   {
//     name: "Tripura",
//     maxRate: 2500,
//     slabs: 4,
//     status: "Applicable",
//     link: "/professional-tax/tripura",
//   },
//   {
//     name: "West Bengal",
//     maxRate: 2500,
//     slabs: 5,
//     status: "Applicable",
//     link: "/professional-tax/west-bengal",
//   },
// ];

// const nonApplicableStates = [
//   "Arunachal Pradesh",
//   "Chandigarh",
//   "Delhi",
//   "Goa",
//   "Haryana",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Ladakh",
//   "Manipur",
//   "Mizoram",
//   "Nagaland",
//   "Punjab",
//   "Rajasthan",
//   "Uttar Pradesh",
//   "Uttarakhand",
// ];

// const trendingSearches = [
//   "Professional Tax Rates 2024",
//   "PT Slab Calculation",
//   "Professional Tax Forms",
//   "PT Registration Process",
//   "Professional Tax Exemptions",
//   "PT Due Dates",
//   "Professional Tax Certificate",
//   "PT Compliance Requirements",
// ];

// export default function ProfessionalTaxPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Search Bar */}
//       <div className="bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="relative">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <Input
//               type="text"
//               placeholder="Search Professional Tax, PT rates, slabs..."
//               className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Grid Layout with Sidebar */}
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                 Professional Tax
//               </h1>
//               <p className="text-lg text-gray-700 mb-6">
//                 Professional Tax is a state-level tax levied on all persons
//                 earning income through employment, profession, or calling. It is
//                 governed by individual state legislation and varies across
//                 states in terms of rates, slabs, and compliance requirements.
//               </p>
//             </div>

//             {/* Statistics Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         Applicable States
//                       </p>
//                       <p className="text-2xl font-bold text-gray-900">17</p>
//                     </div>
//                     <Users className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-medium text-gray-600">
//                         Maximum Rate
//                       </p>
//                       <p className="text-2xl font-bold text-gray-900">₹2,500</p>
//                     </div>
//                     <IndianRupee className="w-8 h-8 text-green-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="font-bold text-lg text-black-600">
//                         PT Calculator
//                       </p>
//                     </div>
//                     <Calculator className="w-8 h-8 text-blue-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent className="p-6">
//                   <div className="flex items-center justify-between">
//                     <div>
//                       <p className="text-sm font-bold text-black-600">
//                         Ai Powered PT Interest & Penalities Calculate
//                       </p>
//                     </div>
//                     <Bot className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* What is Professional Tax */}
//             <Card className="mb-8">
//               <CardHeader>
//                 <CardTitle>What is Professional Tax?</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 mb-4">
//                   Professional Tax is a direct tax levied by state governments
//                   on individuals earning income through employment, profession,
//                   or calling. It is collected by the employer from the
//                   employee's salary and remitted to the state government.
//                 </p>
//                 <p className="text-gray-700 mb-4">
//                   The tax is governed by individual state legislation, and each
//                   state has its own rates, slabs, and compliance requirements.
//                   The maximum amount of professional tax that can be levied is
//                   ₹2,500 per year as per the Constitution of India.
//                 </p>
//               </CardContent>
//             </Card>
//             {/* Scope and Coverage */}
//             <Card className="mb-8">
//               <CardHeader>
//                 <CardTitle>Scope and Coverage</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-gray-700 mb-4">
//                   Professional Tax applies to all persons earning income
//                   through:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
//                   <li>Employment or service under any person</li>
//                   <li>Carrying on any profession</li>
//                   <li>Carrying on any trade, calling or employment</li>
//                   <li>Company directors and partners in firms</li>
//                 </ul>
//                 <p className="text-gray-700">
//                   The tax is applicable to both residents and non-residents
//                   earning income within the state jurisdiction.
//                 </p>
//               </CardContent>
//             </Card>

//             {/* State-wise Applicability */}
//             <Card className="mb-8">
//               <CardHeader>
//                 <CardTitle>State-wise Applicability</CardTitle>
//                 <CardDescription>
//                   Professional Tax is currently applicable in 17 states across
//                   India
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
//                   {/* Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Applicable States
//                     </h3>
//                     <div className="space-y-3">
//                       {professionalTaxStates.map((state, index) => (
//                         <Link key={index} href={state.link}>
//                           <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
//                             <div>
//                               <span className="font-medium text-blue-900">
//                                 {index + 1}. {state.name}
//                               </span>
//                               <div className="text-sm text-blue-700">
//                                 Max Rate: ₹{state.maxRate} | {state.slabs} Slabs
//                               </div>
//                             </div>
//                             <Badge
//                               variant="secondary"
//                               className="bg-green-100 text-green-800"
//                             >
//                               {state.status}
//                             </Badge>
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                   {/* Non-Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Non-Applicable States
//                     </h3>
//                     <div className="space-y-3">
//                       {nonApplicableStates.map((state, index) => (
//                         <div
//                           key={index}
//                           className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//                         >
//                           <span className="text-gray-700">
//                             {index + 1}. {state}
//                           </span>
//                           <Badge
//                             variant="secondary"
//                             className="bg-gray-100 text-gray-600"
//                           >
//                             Not Applicable
//                           </Badge>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//             {/* Important Notes */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Important Notes</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Professional Tax rates and slabs vary significantly across
//                       states. Always refer to the specific state's legislation.
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Employers are responsible for deducting PT from employee
//                       salaries and remitting to the state government.
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Non-compliance with Professional Tax regulations may
//                       result in penalties and interest charges.
//                     </p>
//                   </div>
//                   <div className="flex items-start space-x-3">
//                     <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
//                     <p className="text-gray-700">
//                       Some states provide exemptions for certain categories of
//                       employees or income levels.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24">
//               <Card>
//                 <CardContent>
//                   <PopularSearch className="mb-6" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
















import { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  Calculator,
  Users,
  IndianRupee,
  Calendar,
  Bot,
  Filter,
  Eye,
  Building2,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PopularSearch from "../PopularSearch/PopularSearch";

export const metadata: Metadata = {
  title: "Professional Tax - State-wise Rates & Slabs | E-Library",
  description:
    "Complete guide to Professional Tax rates, slabs, and compliance across all Indian states. Get latest PT rates, forms, and calculation methods.",
  keywords:
    "professional tax, PT rates, state wise professional tax, professional tax slabs, professional tax compliance, professional tax forms",
};

const professionalTaxStates = [
  {
    name: "Andhra Pradesh",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/andhra-pradesh",
  },
  {
    name: "Assam",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/assam",
  },
  {
    name: "Bihar",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/bihar",
  },
  {
    name: "Chhattisgarh",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/chhattisgarh",
  },
  {
    name: "Gujarat",
    maxRate: 2500,
    slabs: 6,
    status: "Applicable",
    link: "/professional-tax/gujarat",
  },
  {
    name: "Jharkhand",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/jharkhand",
  },
  {
    name: "Karnataka",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/karnataka",
  },
  {
    name: "Kerala",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/kerala",
  },
  {
    name: "Madhya Pradesh",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/madhya-pradesh",
  },
  {
    name: "Maharashtra",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/maharashtra",
  },
  {
    name: "Meghalaya",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/meghalaya",
  },
  {
    name: "Odisha",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/odisha",
  },
  {
    name: "Sikkim",
    maxRate: 2500,
    slabs: 3,
    status: "Applicable",
    link: "/professional-tax/sikkim",
  },
  {
    name: "Tamil Nadu",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/tamil-nadu",
  },
  {
    name: "Telangana",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/telangana",
  },
  {
    name: "Tripura",
    maxRate: 2500,
    slabs: 4,
    status: "Applicable",
    link: "/professional-tax/tripura",
  },
  {
    name: "West Bengal",
    maxRate: 2500,
    slabs: 5,
    status: "Applicable",
    link: "/professional-tax/west-bengal",
  },
];

const nonApplicableStates = [
  "Arunachal Pradesh",
  "Chandigarh",
  "Delhi",
  "Goa",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Ladakh",
  "Manipur",
  "Mizoram",
  "Nagaland",
  "Punjab",
  "Rajasthan",
  "Uttar Pradesh",
  "Uttarakhand",
];

const trendingSearches = [
  "Professional Tax Rates 2024",
  "PT Slab Calculation",
  "Professional Tax Forms",
  "PT Registration Process",
  "Professional Tax Exemptions",
  "PT Due Dates",
  "Professional Tax Certificate",
  "PT Compliance Requirements",
];

const categories = [
  "All Categories",
  "PT Rates",
  "Tax Slabs",
  "Compliance",
  "Forms",
  "Registration"
];

const states = ["All States", "Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu", "West Bengal", "Kerala"];

const quickActionCards = [
  {
    title: "PT Calculator",
    description: "Calculate professional tax for all states",
    icon: Calculator,
    action: "View Calculator",
    link: "/calculators/professional-tax"
  },
  {
    title: "AI PT Assistant",
    description: "AI Powered PT Interest & Penalties Calculator",
    icon: Bot,
    action: "View AI Tool",
    link: "/ai-tools/pt-calculator"
  }
];

export default function ProfessionalTaxPage() {
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
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Professional Tax</h1>
                  <p className="text-gray-600 text-lg">
                    Complete guide to Professional Tax rates, slabs, and compliance across all Indian states
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    {professionalTaxStates.length} Applicable States
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">What is Professional Tax?</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Professional Tax is a state-level tax levied on all persons earning income through employment, 
                        profession, or calling. It is governed by individual state legislation and varies across states 
                        in terms of rates, slabs, and compliance requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Horizontal Filters */}
            <Card className="mb-8">
              <CardContent className="py-2">
                <div className="flex flex-col lg:flex-row gap-4 items-center">
                  {/* Filters Button */}
                  <Button variant="outline" className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200">
                    <Filter className="w-4 h-4" />
                    Filters
                  </Button>
                  {/* Search Input */}
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Search Professional Tax, PT rates, slabs..." className="pl-12 py-3 h-12 rounded-lg" />
                  </div>
                  
                  {/* State Dropdown */}
                  <Select>
                    <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
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
          
                  {/* Category Dropdown */}
                  <Select>
                    <SelectTrigger className="w-full lg:w-48 bg-gray-100 hover:bg-gray-200">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase().replace(/ /g, '-')}>
                          {category}
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

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Applicable States
                      </p>
                      <p className="text-2xl font-bold text-gray-900">{professionalTaxStates.length}</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Maximum Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900">₹2,500</p>
                    </div>
                    <IndianRupee className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              {quickActionCards.map((card, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
                          {card.title}
                        </p>
                        <p className="text-sm text-gray-600">{card.description}</p>
                      </div>
                      <card.icon className="shrink-0 w-6 h-6 md:w-7 md:h-7 text-orange-600" />
                    </div>
                    <Link href={card.link}>
                      <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 bg-transparent">
                        <Eye className="w-4 h-4 mr-2" />
                        {card.action}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* What is Professional Tax */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">What is Professional Tax?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Professional Tax is a direct tax levied by state governments
                  on individuals earning income through employment, profession,
                  or calling. It is collected by the employer from the
                  employee's salary and remitted to the state government.
                </p>
                <p className="text-gray-700 mb-4">
                  The tax is governed by individual state legislation, and each
                  state has its own rates, slabs, and compliance requirements.
                  The maximum amount of professional tax that can be levied is
                  ₹2,500 per year as per the Constitution of India.
                </p>
              </CardContent>
            </Card>

            {/* Scope and Coverage */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Scope and Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Professional Tax applies to all persons earning income
                  through:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                  <li>Employment or service under any person</li>
                  <li>Carrying on any profession</li>
                  <li>Carrying on any trade, calling or employment</li>
                  <li>Company directors and partners in firms</li>
                </ul>
                <p className="text-gray-700">
                  The tax is applicable to both residents and non-residents
                  earning income within the state jurisdiction.
                </p>
              </CardContent>
            </Card>

            {/* State-wise Applicability */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle>State-wise Applicability</CardTitle>
                <CardDescription>
                  Professional Tax is currently applicable in {professionalTaxStates.length} states across
                  India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* Applicable States */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Applicable States
                    </h3>
                    <div className="space-y-3">
                      {professionalTaxStates.map((state, index) => (
                        <Link key={index} href={state.link}>
                          <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-orange-50 hover:border-orange-200 transition-colors cursor-pointer group">
                            <div>
                              <span className="font-medium text-blue-600 group-hover:text-orange-600 transition-colors">
                                {index + 1}. {state.name}
                              </span>
                              <div className="text-sm text-gray-700">
                                Max Rate: ₹{state.maxRate} | {state.slabs} Slabs
                              </div>
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800"
                            >
                              {state.status}
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
                            {index + 1}. {state}
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

            {/* Important Notes */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Professional Tax rates and slabs vary significantly across
                      states. Always refer to the specific state's legislation.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Employers are responsible for deducting PT from employee
                      salaries and remitting to the state government.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Non-compliance with Professional Tax regulations may
                      result in penalties and interest charges.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <p className="text-gray-700">
                      Some states provide exemptions for certain categories of
                      employees or income levels.
                    </p>
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
  );
}

// import { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import {
//   Download,
//   ExternalLink,
//   FileText, 
//   Calculator,
//   Globe,
//   Bell,
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
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// interface StateData {
//   name: string;
//   slug: string;
//   act: string;
//   rule: string;
//   applicability: string;
//   frequency: string;
//   form: string;
//   website: string;
//   lastUpdated: string;
//   slabs: Array<{
//     range: string;
//     monthlyTax: string;
//     annualTax: string;
//     remarks: string;
//   }>;
//   employmentCategories: Array<{
//     category: string;
//     description: string;
//     applicableRate: string;
//     remarks: string;
//   }>;
// }

// const statesData: Record<string, StateData> = {
//   "andhra-pradesh": {
//     name: "Andhra Pradesh",
//     slug: "andhra-pradesh",
//     act: "Andhra Pradesh Tax on Professions, Trades, Callings and Employments Act, 1987",
//     rule: "Andhra Pradesh Tax on Professions, Trades, Callings and Employments Rules, 1988",
//     applicability:
//       "All persons earning income through employment, profession, or calling",
//     frequency: "Monthly",
//     form: "Form PT-1, PT-2, PT-3",
//     website: "https://webland.ap.gov.in",
//     lastUpdated: "15th November, 2024",
//     slabs: [
//       {
//         range: "Up to ₹15,000",
//         monthlyTax: "Nil",
//         annualTax: "Nil",
//         remarks: "Exempted",
//       },
//       {
//         range: "₹15,001 - ₹20,000",
//         monthlyTax: "₹80",
//         annualTax: "₹960",
//         remarks: "Standard rate",
//       },
//       {
//         range: "₹20,001 - ₹25,000",
//         monthlyTax: "₹150",
//         annualTax: "₹1,800",
//         remarks: "Standard rate",
//       },
//       {
//         range: "₹25,001 - ₹40,000",
//         monthlyTax: "₹200",
//         annualTax: "₹2,400",
//         remarks: "Standard rate",
//       },
//       {
//         range: "Above ₹40,000",
//         monthlyTax: "₹208",
//         annualTax: "₹2,500",
//         remarks: "Maximum limit",
//       },
//     ],
//     employmentCategories: [
//       {
//         category: "Government Employees",
//         description: "All state and central government employees",
//         applicableRate: "As per salary slab",
//         remarks: "Deducted at source",
//       },
//       {
//         category: "Private Employees",
//         description: "Employees in private companies and establishments",
//         applicableRate: "As per salary slab",
//         remarks: "Employer responsibility",
//       },
//       {
//         category: "Professionals",
//         description: "Doctors, lawyers, chartered accountants, etc.",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Self-assessment",
//       },
//       {
//         category: "Company Directors",
//         description: "Directors of companies registered in AP",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Company deduction",
//       },
//     ],
//   },
//   maharashtra: {
//     name: "Maharashtra",
//     slug: "maharashtra",
//     act: "Maharashtra Tax on Professions, Trades, Callings and Employments Act, 1975",
//     rule: "Maharashtra Tax on Professions, Trades, Callings and Employments Rules, 1975",
//     applicability:
//       "All persons earning income through employment, profession, or calling",
//     frequency: "Monthly",
//     form: "Form 1, Form 2, Form 3",
//     website: "https://mahakosh.gov.in",
//     lastUpdated: "10th December, 2024",
//     slabs: [
//       {
//         range: "Up to ₹21,000",
//         monthlyTax: "Nil",
//         annualTax: "Nil",
//         remarks: "Exempted",
//       },
//       {
//         range: "₹21,001 - ₹25,000",
//         monthlyTax: "₹175",
//         annualTax: "₹2,100",
//         remarks: "Standard rate",
//       },
//       {
//         range: "₹25,001 - ₹40,000",
//         monthlyTax: "₹200",
//         annualTax: "₹2,400",
//         remarks: "Standard rate",
//       },
//       {
//         range: "Above ₹40,000",
//         monthlyTax: "₹208",
//         annualTax: "₹2,500",
//         remarks: "Maximum limit",
//       },
//     ],
//     employmentCategories: [
//       {
//         category: "Salaried Employees",
//         description: "All employees receiving salary or wages",
//         applicableRate: "As per salary slab",
//         remarks: "Monthly deduction",
//       },
//       {
//         category: "Professionals",
//         description: "Independent professionals and consultants",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Quarterly payment",
//       },
//       {
//         category: "Partnership Firms",
//         description: "Partners in registered firms",
//         applicableRate: "Fixed ₹2,500 per partner",
//         remarks: "Firm responsibility",
//       },
//       {
//         category: "Company Directors",
//         description: "Directors and managing directors",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Company deduction",
//       },
//     ],
//   },
//   karnataka: {
//     name: "Karnataka",
//     slug: "karnataka",
//     act: "Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976",
//     rule: "Karnataka Tax on Professions, Trades, Callings and Employments Rules, 1976",
//     applicability:
//       "All persons earning income through employment, profession, or calling",
//     frequency: "Half-yearly",
//     form: "Form A, Form B, Form C",
//     website: "https://karnatakaone.gov.in",
//     lastUpdated: "5th January, 2025",
//     slabs: [
//       {
//         range: "Up to ₹15,000",
//         monthlyTax: "Nil",
//         annualTax: "Nil",
//         remarks: "Exempted",
//       },
//       {
//         range: "₹15,001 - ₹25,000",
//         monthlyTax: "₹100",
//         annualTax: "₹1,200",
//         remarks: "Standard rate",
//       },
//       {
//         range: "₹25,001 - ₹40,000",
//         monthlyTax: "₹150",
//         annualTax: "₹1,800",
//         remarks: "Standard rate",
//       },
//       {
//         range: "₹40,001 - ₹60,000",
//         monthlyTax: "₹200",
//         annualTax: "₹2,400",
//         remarks: "Standard rate",
//       },
//       {
//         range: "Above ₹60,000",
//         monthlyTax: "₹208",
//         annualTax: "₹2,500",
//         remarks: "Maximum limit",
//       },
//     ],
//     employmentCategories: [
//       {
//         category: "IT Employees",
//         description: "Employees in IT and software companies",
//         applicableRate: "As per salary slab",
//         remarks: "Monthly deduction",
//       },
//       {
//         category: "Manufacturing Workers",
//         description: "Workers in manufacturing industries",
//         applicableRate: "As per salary slab",
//         remarks: "Employer deduction",
//       },
//       {
//         category: "Professionals",
//         description: "Doctors, engineers, architects, etc.",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Half-yearly payment",
//       },
//       {
//         category: "Traders",
//         description: "Business owners and traders",
//         applicableRate: "Fixed ₹2,500 annually",
//         remarks: "Self-assessment",
//       },
//     ],
//   },
// };

// const applicableStates = [
//   { name: "Andhra Pradesh", slug: "andhra-pradesh", available: true },
//   { name: "Assam", slug: "assam", available: false },
//   { name: "Bihar", slug: "bihar", available: false },
//   { name: "Chhattisgarh", slug: "chhattisgarh", available: false },
//   { name: "Gujarat", slug: "gujarat", available: false },
//   { name: "Jharkhand", slug: "jharkhand", available: false },
//   { name: "Karnataka", slug: "karnataka", available: true },
//   { name: "Kerala", slug: "kerala", available: false },
//   { name: "Madhya Pradesh", slug: "madhya-pradesh", available: false },
//   { name: "Maharashtra", slug: "maharashtra", available: true },
//   { name: "Meghalaya", slug: "meghalaya", available: false },
//   { name: "Odisha", slug: "odisha", available: false },
//   { name: "Sikkim", slug: "sikkim", available: false },
//   { name: "Tamil Nadu", slug: "tamil-nadu", available: false },
//   { name: "Telangana", slug: "telangana", available: false },
//   { name: "Tripura", slug: "tripura", available: false },
//   { name: "West Bengal", slug: "west-bengal", available: false },
// ];

// export async function generateMetadata({
//   params,
// }: {
//   params: { state: string };
// }): Promise<Metadata> {
//   const stateData = statesData[params.state];

//   if (!stateData) {
//     return {
//       title: "State Not Found | Professional Tax",
//       description:
//         "The requested state professional tax information is not available.",
//     };
//   }

//   return {
//     title: `${stateData.name} Professional Tax - Rates, Slabs & Forms | E-Library`,
//     description: `Complete guide to ${stateData.name} Professional Tax rates, slabs, forms, and compliance requirements. Updated PT information for ${stateData.name}.`,
//     keywords: `${stateData.name} professional tax, PT rates ${stateData.name}, professional tax slabs, PT forms ${stateData.name}`,
//   };
// }

// export default function StateProfessionalTaxPage({
//   params,
// }: {
//   params: { state: string };
// }) {
//   const stateData = statesData[params.state];

//   if (!stateData) {
//     notFound();
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search - Top for Mobile/Tablet */}
//         <div className="xl:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">


//           {/* Main Content */}
//           <div className="lg:col-span-3 xl:col-span-4">
//             <div className="mb-3 sm:mb-4 lg:mb-3">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
//                 Professional Tax :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {stateData.name}
//               </h2>
//             </div>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-3">
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-2 lg:p-3 text-center">
//                   <Calculator className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
//                   <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
//                     PT Calculator
//                   </h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     aria-label="PT Calculator"
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Calculate
//                   </Button>
//                 </CardContent>
//               </Card>
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-2 lg:p-3 text-center">
//                   <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
//                   <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
//                     Download Forms
//                   </h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     aria-label="Download Forms"
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Download
//                   </Button>
//                 </CardContent>
//               </Card>
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-2 lg:p-3 text-center">
//                   <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
//                   <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
//                     Official Portal
//                   </h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     aria-label="Visit Official Portal"
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Visit
//                   </Button>
//                 </CardContent>
//               </Card>
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-400">
//                 <CardContent className="p-2 lg:p-3 text-center">
//                   <Bell className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
//                   <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
//                     Notifications
//                   </h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     aria-label="View Notifications"
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     View
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Act Information - Mobile Card View */}
//             <div className="block lg:hidden mb-4">
//               <Card className="shadow-sm">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Act Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   <div className="space-y-3">
//                     <div className="bg-gray-50 rounded-lg p-3">
//                       <div className="space-y-2 text-xs">
//                         <div>
//                           <span className="font-medium text-orange-600">
//                             Act:
//                           </span>{" "}
//                           {stateData.act}
//                         </div>
//                         <div>
//                           <span className="font-medium text-orange-600">
//                             Rule:
//                           </span>{" "}
//                           {stateData.rule}
//                         </div>
//                         <div>
//                           <span className="font-medium text-orange-600">
//                             Applicability:
//                           </span>{" "}
//                           {stateData.applicability}
//                         </div>
//                         <div>
//                           <span className="font-medium text-orange-600">
//                             Frequency:
//                           </span>{" "}
//                           {stateData.frequency}
//                         </div>
//                         <div>
//                           <span className="font-medium text-orange-600">
//                             Form:
//                           </span>{" "}
//                           {stateData.form}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Act Information - Desktop Table */}
//             <Card className="hidden lg:block mb-3 shadow-sm ">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="bg-orange-500">
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6">
//                           Act
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6">
//                           Rule
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/4">
//                           Applicability
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6">
//                           Frequency
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6">
//                           Form
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6">
//                           Website
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow className="hover:bg-gray-50">
//                         <TableCell
//                           className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top 
//              break-words whitespace-normal max-w-[120px]"
//                         >
//                           {stateData.act}
//                         </TableCell>
//                         <TableCell
//                           className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top 
//              break-words whitespace-normal max-w-[120px]"
//                         >
//                           {stateData.rule}
//                         </TableCell>
//                         <TableCell
//                           className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top 
//              break-words whitespace-normal max-w-[120px]"
//                         >
//                           {stateData.applicability}
//                         </TableCell>
//                         <TableCell
//                           className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top 
//              break-words whitespace-normal max-w-[120px]"
//                         >
//                           {stateData.frequency}
//                         </TableCell>
//                         <TableCell className="p-4 lg:p-6 align-top">
//                           <Button
//                             variant="link"
//                             size="sm"
//                             className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal"
//                           >
//                             <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
//                             <span className="break-words">
//                               {stateData.form}
//                             </span>
//                           </Button>
//                         </TableCell>
//                         <TableCell className="p-4 lg:p-6 align-top">
//                           <Button
//                             variant="link"
//                             size="sm"
//                             className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal"
//                           >
//                             <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
//                             <span className="break-words">Official Site</span>
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Professional Tax Slabs - Mobile Card View */}
//             <div className="block lg:hidden mb-4">
//               <Card className="shadow-sm">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Professional Tax Slabs
//                   </CardTitle>
//                   <CardDescription className="text-xs">
//                     Monthly and annual professional tax rates for{" "}
//                     {stateData.name}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   <div className="space-y-3">
//                     {stateData.slabs.map((slab, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-50 rounded-lg p-3 border"
//                       >
//                         <h3 className="font-semibold text-sm text-orange-600 mb-2">
//                           {slab.range}
//                         </h3>
//                         <div className="grid grid-cols-2 gap-2 text-xs">
//                           <div>
//                             <div className="font-medium text-gray-600">
//                               Monthly Tax
//                             </div>
//                             <div className="font-bold text-green-600">
//                               {slab.monthlyTax}
//                             </div>
//                           </div>
//                           <div>
//                             <div className="font-medium text-gray-600">
//                               Annual Tax
//                             </div>
//                             <div className="font-bold text-green-600">
//                               {slab.annualTax}
//                             </div>
//                           </div>
//                         </div>
//                         <p className="text-xs text-gray-600 mt-2">
//                           {slab.remarks}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Professional Tax Slabs - Desktop Table */}
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Professional Tax Slabs
//                 </CardTitle>
//                 <CardDescription className="text-xs lg:text-sm">
//                   Monthly and annual professional tax rates for {stateData.name}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="bg-orange-500">
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Income Range (Monthly)
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Monthly Tax
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Annual Tax
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Remarks
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {stateData.slabs.map((slab, index) => (
//                         <TableRow key={index} className="hover:bg-gray-50">
//                           <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3">
//                             {slab.range}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
//                             {slab.monthlyTax}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
//                             {slab.annualTax}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
//                             {slab.remarks}
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Employment Categories - Mobile Card View */}
//             <div className="block lg:hidden mb-4">
//               <Card className="shadow-sm">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Employment Categories
//                   </CardTitle>
//                   <CardDescription className="text-xs">
//                     Professional tax applicability for different employment
//                     categories
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   <div className="space-y-3">
//                     {stateData.employmentCategories.map((category, index) => (
//                       <div
//                         key={index}
//                         className="bg-gray-50 rounded-lg p-3 border"
//                       >
//                         <h3 className="font-semibold text-sm text-orange-600 mb-2">
//                           {category.category}
//                         </h3>
//                         <div className="space-y-1 text-xs">
//                           <p>
//                             <span className="font-medium">Description:</span>{" "}
//                             {category.description}
//                           </p>
//                           <p>
//                             <span className="font-medium">Rate:</span>{" "}
//                             {category.applicableRate}
//                           </p>
//                           <p>
//                             <span className="font-medium">Remarks:</span>{" "}
//                             {category.remarks}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Employment Categories - Desktop Table */}
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Employment Categories
//                 </CardTitle>
//                 <CardDescription className="text-xs lg:text-sm">
//                   Professional tax applicability for different employment
//                   categories
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <Table>
//                     <TableHeader>
//                       <TableRow className="bg-orange-500">
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Category
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Description
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Applicable Rate
//                         </TableHead>
//                         <TableHead className="text-white text-xs lg:text-sm font-semibold">
//                           Remarks
//                         </TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       {stateData.employmentCategories.map((category, index) => (
//                         <TableRow key={index} className="hover:bg-gray-50">
//                           <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3 text-orange-600">
//                             {category.category}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
//                             {category.description}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
//                             {category.applicableRate}
//                           </TableCell>
//                           <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
//                             {category.remarks}
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar - Popular Search (Desktop Only) */}
//           <div className="hidden xl:block xl:col-span-1">
//             <div className="sticky top-2 lg:top-3">
//               <Card className="shadow-sm hover:shadow-md transition-shadow">
//                 <CardContent className="p-2 lg:p-3 xl:p-4">
//                   <PopularSearch className="mb-0" />
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
import { notFound } from "next/navigation";
import {
  Download,
  ExternalLink,
  FileText, 
  Calculator,
  Globe,
  Bell,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PopularSearch from "@/app/PopularSearch/PopularSearch";

// ... existing interfaces and data remain same

interface StateData {
  name: string;
  slug: string;
  act: string;
  rule: string;
  applicability: string;
  frequency: string;
  form: string;
  website: string;
  lastUpdated: string;
  slabs: Array<{
    range: string;
    monthlyTax: string;
    annualTax: string;
    remarks: string;
  }>;
  employmentCategories: Array<{
    category: string;
    description: string;
    applicableRate: string;
    remarks: string;
  }>;
}

const statesData: Record<string, StateData> = {
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    slug: "andhra-pradesh",
    act: "Andhra Pradesh Tax on Professions, Trades, Callings and Employments Act, 1987",
    rule: "Andhra Pradesh Tax on Professions, Trades, Callings and Employments Rules, 1988",
    applicability: "All persons earning income through employment, profession, or calling",
    frequency: "Monthly",
    form: "Form PT-1, PT-2, PT-3",
    website: "https://webland.ap.gov.in",
    lastUpdated: "15th November, 2024",
    slabs: [
      {
        range: "Up to ₹15,000",
        monthlyTax: "Nil",
        annualTax: "Nil",
        remarks: "Exempted",
      },
      {
        range: "₹15,001 - ₹20,000",
        monthlyTax: "₹80",
        annualTax: "₹960",
        remarks: "Standard rate",
      },
      {
        range: "₹20,001 - ₹25,000",
        monthlyTax: "₹150",
        annualTax: "₹1,800",
        remarks: "Standard rate",
      },
      {
        range: "₹25,001 - ₹40,000",
        monthlyTax: "₹200",
        annualTax: "₹2,400",
        remarks: "Standard rate",
      },
      {
        range: "Above ₹40,000",
        monthlyTax: "₹208",
        annualTax: "₹2,500",
        remarks: "Maximum limit",
      },
    ],
    employmentCategories: [
      {
        category: "Government Employees",
        description: "All state and central government employees",
        applicableRate: "As per salary slab",
        remarks: "Deducted at source",
      },
      {
        category: "Private Employees",
        description: "Employees in private companies and establishments",
        applicableRate: "As per salary slab",
        remarks: "Employer responsibility",
      },
      {
        category: "Professionals",
        description: "Doctors, lawyers, chartered accountants, etc.",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Self-assessment",
      },
      {
        category: "Company Directors",
        description: "Directors of companies registered in AP",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Company deduction",
      },
    ],
  },
  maharashtra: {
    name: "Maharashtra",
    slug: "maharashtra",
    act: "Maharashtra Tax on Professions, Trades, Callings and Employments Act, 1975",
    rule: "Maharashtra Tax on Professions, Trades, Callings and Employments Rules, 1975",
    applicability: "All persons earning income through employment, profession, or calling",
    frequency: "Monthly",
    form: "Form 1, Form 2, Form 3",
    website: "https://mahakosh.gov.in",
    lastUpdated: "10th December, 2024",
    slabs: [
      {
        range: "Up to ₹21,000",
        monthlyTax: "Nil",
        annualTax: "Nil",
        remarks: "Exempted",
      },
      {
        range: "₹21,001 - ₹25,000",
        monthlyTax: "₹175",
        annualTax: "₹2,100",
        remarks: "Standard rate",
      },
      {
        range: "₹25,001 - ₹40,000",
        monthlyTax: "₹200",
        annualTax: "₹2,400",
        remarks: "Standard rate",
      },
      {
        range: "Above ₹40,000",
        monthlyTax: "₹208",
        annualTax: "₹2,500",
        remarks: "Maximum limit",
      },
    ],
    employmentCategories: [
      {
        category: "Salaried Employees",
        description: "All employees receiving salary or wages",
        applicableRate: "As per salary slab",
        remarks: "Monthly deduction",
      },
      {
        category: "Professionals",
        description: "Independent professionals and consultants",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Quarterly payment",
      },
      {
        category: "Partnership Firms",
        description: "Partners in registered firms",
        applicableRate: "Fixed ₹2,500 per partner",
        remarks: "Firm responsibility",
      },
      {
        category: "Company Directors",
        description: "Directors and managing directors",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Company deduction",
      },
    ],
  },
  karnataka: {
    name: "Karnataka",
    slug: "karnataka",
    act: "Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976",
    rule: "Karnataka Tax on Professions, Trades, Callings and Employments Rules, 1976",
    applicability: "All persons earning income through employment, profession, or calling",
    frequency: "Half-yearly",
    form: "Form A, Form B, Form C",
    website: "https://karnatakaone.gov.in",
    lastUpdated: "5th January, 2025",
    slabs: [
      {
        range: "Up to ₹15,000",
        monthlyTax: "Nil",
        annualTax: "Nil",
        remarks: "Exempted",
      },
      {
        range: "₹15,001 - ₹25,000",
        monthlyTax: "₹100",
        annualTax: "₹1,200",
        remarks: "Standard rate",
      },
      {
        range: "₹25,001 - ₹40,000",
        monthlyTax: "₹150",
        annualTax: "₹1,800",
        remarks: "Standard rate",
      },
      {
        range: "₹40,001 - ₹60,000",
        monthlyTax: "₹200",
        annualTax: "₹2,400",
        remarks: "Standard rate",
      },
      {
        range: "Above ₹60,000",
        monthlyTax: "₹208",
        annualTax: "₹2,500",
        remarks: "Maximum limit",
      },
    ],
    employmentCategories: [
      {
        category: "IT Employees",
        description: "Employees in IT and software companies",
        applicableRate: "As per salary slab",
        remarks: "Monthly deduction",
      },
      {
        category: "Manufacturing Workers",
        description: "Workers in manufacturing industries",
        applicableRate: "As per salary slab",
        remarks: "Employer deduction",
      },
      {
        category: "Professionals",
        description: "Doctors, engineers, architects, etc.",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Half-yearly payment",
      },
      {
        category: "Traders",
        description: "Business owners and traders",
        applicableRate: "Fixed ₹2,500 annually",
        remarks: "Self-assessment",
      },
    ],
  },
};

const applicableStates = [
  { name: "Andhra Pradesh", slug: "andhra-pradesh", available: true },
  { name: "Assam", slug: "assam", available: false },
  { name: "Bihar", slug: "bihar", available: false },
  { name: "Chhattisgarh", slug: "chhattisgarh", available: false },
  { name: "Gujarat", slug: "gujarat", available: false },
  { name: "Jharkhand", slug: "jharkhand", available: false },
  { name: "Karnataka", slug: "karnataka", available: true },
  { name: "Kerala", slug: "kerala", available: false },
  { name: "Madhya Pradesh", slug: "madhya-pradesh", available: false },
  { name: "Maharashtra", slug: "maharashtra", available: true },
  { name: "Meghalaya", slug: "meghalaya", available: false },
  { name: "Odisha", slug: "odisha", available: false },
  { name: "Sikkim", slug: "sikkim", available: false },
  { name: "Tamil Nadu", slug: "tamil-nadu", available: false },
  { name: "Telangana", slug: "telangana", available: false },
  { name: "Tripura", slug: "tripura", available: false },
  { name: "West Bengal", slug: "west-bengal", available: false },
];

export async function generateMetadata({
  params,
}: {
  params: { state: string };
}): Promise<Metadata> {
  const stateData = statesData[params.state];

  if (!stateData) {
    return {
      title: "State Not Found | Professional Tax",
      description: "The requested state professional tax information is not available.",
    };
  }

  return {
    title: `${stateData.name} Professional Tax - Rates, Slabs & Forms | E-Library`,
    description: `Complete guide to ${stateData.name} Professional Tax rates, slabs, forms, and compliance requirements. Updated PT information for ${stateData.name}.`,
    keywords: `${stateData.name} professional tax, PT rates ${stateData.name}, professional tax slabs, PT forms ${stateData.name}`,
  };
}

export default function StateProfessionalTaxPage({
  params,
}: {
  params: { state: string };
}) {
  const stateData = statesData[params.state];

  if (!stateData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        
        {/* Popular Search - Top for Mobile/Tablet */}
        <div className="xl:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">

          {/* Main Content */}
          <div className="lg:col-span-3 xl:col-span-4 relative z-10">
            
            {/* Page Header */}
            <div className="mb-3 sm:mb-4 lg:mb-3">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                Professional Tax
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                {stateData.name}
              </h2>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-3">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Calculator className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    PT Calculator
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="PT Calculator"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <FileText className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Download Forms
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Download Forms"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    Download
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Official Portal
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="Visit Official Portal"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    Visit
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-2 lg:p-3 text-center">
                  <Bell className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
                  <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
                    Notifications
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="View Notifications"
                    className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Act Information - Mobile Card View */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">
                    Act Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2 text-xs">
                        <div>
                          <span className="font-medium text-orange-600">Act:</span>{" "}
                          {stateData.act}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Rule:</span>{" "}
                          {stateData.rule}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Applicability:</span>{" "}
                          {stateData.applicability}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Frequency:</span>{" "}
                          {stateData.frequency}
                        </div>
                        <div>
                          <span className="font-medium text-orange-600">Form:</span>{" "}
                          {stateData.form}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Act Information - Desktop Table */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-hidden">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="sticky top-0 z-30">
                        <TableRow className="bg-orange-500">
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6 bg-orange-500 sticky top-0 z-3">
                            Act
                          </TableHead>
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6 bg-orange-500 sticky top-0 z-30 ">
                            Rule
                          </TableHead>
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/4 bg-orange-500 sticky top-0 z-30">
                            Applicability
                          </TableHead>
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6 bg-orange-500 sticky top-0 z-30 ">
                            Frequency
                          </TableHead>
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6 bg-orange-500 sticky top-0 z-30 ">
                            Form
                          </TableHead>
                          <TableHead className="text-white text-xs lg:text-sm font-semibold w-1/6 bg-orange-500 sticky top-0 z-30 ">
                            Website
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody className="relative z-10">
                        <TableRow className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[120px]">
                            {stateData.act}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[120px]">
                            {stateData.rule}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[120px]">
                            {stateData.applicability}
                          </TableCell>
                          <TableCell className="font-medium text-xs lg:text-sm p-4 lg:p-6 align-top break-words whitespace-normal max-w-[120px]">
                            {stateData.frequency}
                          </TableCell>
                          <TableCell className="p-4 lg:p-6 align-top">
                            <Button
                              variant="link"
                              size="sm"
                              className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal hover:text-orange-700"
                            >
                              <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                              <span className="break-words">{stateData.form}</span>
                            </Button>
                          </TableCell>
                          <TableCell className="p-4 lg:p-6 align-top">
                            <Button
                              variant="link"
                              size="sm"
                              className="p-0 h-auto text-orange-600 text-xs lg:text-sm whitespace-normal hover:text-orange-700"
                            >
                              <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 mr-1 flex-shrink-0" />
                              <span className="break-words">Official Site</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Tax Slabs - Mobile Card View */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">
                    Professional Tax Slabs
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Monthly and annual professional tax rates for {stateData.name}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    {stateData.slabs.map((slab, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 border">
                        <h3 className="font-semibold text-sm text-orange-600 mb-2">
                          {slab.range}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <div className="font-medium text-gray-600">Monthly Tax</div>
                            <div className="font-bold text-green-600">{slab.monthlyTax}</div>
                          </div>
                          <div>
                            <div className="font-medium text-gray-600">Annual Tax</div>
                            <div className="font-bold text-green-600">{slab.annualTax}</div>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">{slab.remarks}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Professional Tax Slabs - Desktop Table */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Professional Tax Slabs
                </CardTitle>
                <CardDescription className="text-xs lg:text-sm">
                  Monthly and annual professional tax rates for {stateData.name}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="sticky top-0 z-30">
                      <TableRow className="bg-orange-500 hover:bg-orange-500">
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30s">
                          Income Range (Monthly)
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30s">
                          Monthly Tax
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30s">
                          Annual Tax
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30s">
                          Remarks
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="relative z-10">
                      {stateData.slabs.map((slab, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3">
                            {slab.range}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
                            {slab.monthlyTax}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3 font-semibold text-green-600">
                            {slab.annualTax}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {slab.remarks}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Employment Categories - Mobile Card View */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">
                    Employment Categories
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Professional tax applicability for different employment categories
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    {stateData.employmentCategories.map((category, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 border">
                        <h3 className="font-semibold text-sm text-orange-600 mb-2">
                          {category.category}
                        </h3>
                        <div className="space-y-1 text-xs">
                          <p>
                            <span className="font-medium">Description:</span> {category.description}
                          </p>
                          <p>
                            <span className="font-medium">Rate:</span> {category.applicableRate}
                          </p>
                          <p>
                            <span className="font-medium">Remarks:</span> {category.remarks}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Employment Categories - Desktop Table */}
            <Card className="hidden lg:block mb-3 shadow-sm relative z-20">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Employment Categories
                </CardTitle>
                <CardDescription className="text-xs lg:text-sm">
                  Professional tax applicability for different employment categories
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader className="sticky top-0 z-30">
                      <TableRow className="bg-orange-500 hover:bg-orange-500">
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 ">
                          Category
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30">
                          Description
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 ">
                          Applicable Rate
                        </TableHead>
                        <TableHead className="text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30">
                          Remarks
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody className="relative z-10">
                      {stateData.employmentCategories.map((category, index) => (
                        <TableRow key={index} className="hover:bg-gray-50">
                          <TableCell className="font-medium text-xs lg:text-sm p-2 lg:p-3 text-orange-600">
                            {category.category}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {category.description}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {category.applicableRate}
                          </TableCell>
                          <TableCell className="text-xs lg:text-sm p-2 lg:p-3">
                            {category.remarks}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Popular Search (Desktop Only) */}
          <div className="hidden xl:block xl:col-span-1">
            <div className="sticky top-2 lg:top-3 z-5">
              <Card className="shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-2 lg:p-3 xl:p-4">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

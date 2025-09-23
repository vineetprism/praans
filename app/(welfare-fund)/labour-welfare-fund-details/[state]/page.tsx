

// // import type { Metadata } from "next"
// // import { notFound } from "next/navigation"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import { Button } from "@/components/ui/button"
// // import { Download, ExternalLink, FileText, Calendar } from 'lucide-react'
// // import PopularSearch from "@/app/PopularSearch/PopularSearch"

// // // ------------------- DATA -------------------

// // interface StateData {
// //   name: string
// //   act: string
// //   rule: string
// //   applicability: string
// //   frequency: string
// //   form: string
// //   website: string
// //   lastUpdated: string
// //   contributions: {
// //     category: string
// //     employeeContribution: string
// //     employerContribution: string
// //     totalContribution: string
// //     dateOfDeduction: string
// //     lastDateForSubmission: string
// //     remarks: string
// //   }[]
// // }

// // const stateData: Record<string, StateData> = {
// //   "andhra-pradesh": {
// //     name: "Andhra Pradesh",
// //     act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
// //     rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
// //     applicability:
// //       "Any Employer/Establishment employing one or more employees/persons",
// //     frequency: "Yearly",
// //     form: "FORM F.xlsx",
// //     website:
// //       "http://labour.ap.gov.in/LabourViews/RecentAmendementNewActs.aspx",
// //     lastUpdated: "3rd Oct, 2024",
// //     contributions: [
// //       {
// //         category:
// //           "All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis",
// //         employeeContribution: "30.00",
// //         employerContribution: "70.00",
// //         totalContribution: "100.00",
// //         dateOfDeduction: "31st December",
// //         lastDateForSubmission: "31st January",
// //         remarks: "-",
// //       },
// //     ],
// //   },
// //   "maharashtra": {
// //     name: "Maharashtra",
// //     act: "Maharashtra Labour Welfare Fund Act, 1953",
// //     rule: "The Maharashtra Labour Welfare Fund Rules, 1954",
// //     applicability: "Any Employer/Establishment employing 5 or more employees",
// //     frequency: "Half Yearly",
// //     form: "FORM A.pdf",
// //     website: "https://mahakamgar.maharashtra.gov.in/",
// //     lastUpdated: "15th Sep, 2024",
// //     contributions: [
// //       {
// //         category: "All employees drawing wages up to Rs. 21,000 per month",
// //         employeeContribution: "42.00",
// //         employerContribution: "84.00",
// //         totalContribution: "126.00",
// //         dateOfDeduction: "30th June & 31st December",
// //         lastDateForSubmission: "31st July & 31st January",
// //         remarks: "Revised rates w.e.f. 1st April 2024",
// //       },
// //     ],
// //   },
// //   "karnataka": {
// //     name: "Karnataka",
// //     act: "Karnataka Labour Welfare Fund Act, 1965",
// //     rule: "The Karnataka Labour Welfare Fund Rules, 1966",
// //     applicability: "Any Employer/Establishment employing 5 or more employees",
// //     frequency: "Half Yearly",
// //     form: "FORM LWF-1.pdf",
// //     website: "https://labour.karnataka.gov.in/",
// //     lastUpdated: "20th Aug, 2024",
// //     contributions: [
// //       {
// //         category: "All employees drawing wages up to Rs. 25,000 per month",
// //         employeeContribution: "20.00",
// //         employerContribution: "40.00",
// //         totalContribution: "60.00",
// //         dateOfDeduction: "30th June & 31st December",
// //         lastDateForSubmission: "15th July & 15th January",
// //         remarks: "Online filing mandatory",
// //       },
// //     ],
// //   },
// //   "tamil-nadu": {
// //     name: "Tamil Nadu",
// //     act: "Tamil Nadu Labour Welfare Fund Act, 1972",
// //     rule: "Tamil Nadu Labour Welfare Fund Rules, 1973",
// //     applicability: "Any Employer/Establishment employing 5 or more employees",
// //     frequency: "Yearly",
// //     form: "LWF Form TN.pdf",
// //     website: "https://www.tn.gov.in/labour/",
// //     lastUpdated: "1st Oct, 2024",
// //     contributions: [
// //       {
// //         category: "All employees",
// //         employeeContribution: "20.00",
// //         employerContribution: "40.00",
// //         totalContribution: "60.00",
// //         dateOfDeduction: "31st December",
// //         lastDateForSubmission: "31st January",
// //         remarks: "-",
// //       },
// //     ],
// //   },
// //   "west-bengal": {
// //     name: "West Bengal",
// //     act: "West Bengal Labour Welfare Fund Act, 1974",
// //     rule: "West Bengal Labour Welfare Fund Rules, 1976",
// //     applicability: "As notified",
// //     frequency: "Yearly",
// //     form: "WB-LWF.pdf",
// //     website: "https://wb.gov.in/",
// //     lastUpdated: "12th Jul, 2024",
// //     contributions: [
// //       {
// //         category: "All employees",
// //         employeeContribution: "10.00",
// //         employerContribution: "20.00",
// //         totalContribution: "30.00",
// //         dateOfDeduction: "31st December",
// //         lastDateForSubmission: "31st January",
// //         remarks: "-",
// //       },
// //     ],
// //   },
// // }

// // const APPLICABLE = [
// //   "Andhra Pradesh",
// //   "Chandigarh",
// //   "Chhattisgarh",
// //   "Delhi",
// //   "Goa",
// //   "Gujarat",
// //   "Haryana",
// //   "Karnataka",
// //   "Kerala",
// //   "Madhya Pradesh",
// //   "Odisha",
// //   "Maharashtra",
// //   "Punjab",
// //   "Tamil Nadu",
// //   "Telangana",
// //   "West Bengal",
// // ]

// // const NON_APPLICABLE = [
// //   "Andaman and Nicobar Islands",
// //   "Arunachal Pradesh",
// //   "Assam",
// //   "Bihar",
// //   "Dadra and Nagar Haveli",
// //   "Daman and Diu",
// //   "Himachal Pradesh",
// //   "Jammu and Kashmir",
// //   "Jharkhand",
// //   "Ladakh",
// //   "Lakshadweep",
// //   "Manipur",
// //   "Meghalaya",
// //   "Mizoram",
// //   "Nagaland",
// //   "Puducherry",
// //   "Rajasthan",
// //   "Sikkim",
// //   "Tripura",
// //   "Uttar Pradesh",
// //   "Uttarakhand",
// // ]

// // type PageProps = {
// //   params: { state: string }
// // }

// // export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
// //   const data = stateData[params.state]
// //   if (!data) {
// //     return { title: "State Not Found | Labour Welfare Fund" }
// //   }
// //   return {
// //     title: `${data.name} Labour Welfare Fund - Contribution Rates & Forms | E-Library`,
// //     description: `Complete guide to ${data.name} Labour Welfare Fund contribution rates, forms, compliance requirements and official information.`,
// //     keywords: `${data.name.toLowerCase()} labour welfare fund, LWF, contribution rates, forms, compliance`,
// //   }
// // }

// // // ------------------- PAGE -------------------

// // export default function StateWelfareFundPage({ params }: PageProps) {
// //   const data = stateData[params.state]
// //   if (!data) {
// //     notFound()
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        
// //         {/* Popular Search - Top for Mobile/Tablet */}
// //         <div className="lg:hidden mb-3 sm:mb-4">
// //           <Card className="shadow-sm">
// //             <CardContent className="p-2 sm:p-3">
// //               <PopularSearch className="mb-0" />
// //             </CardContent>
// //           </Card>
// //         </div>

// //         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
// //           {/* Main Content */}
// //           <div className="lg:col-span-3">
// //             {/* Page Header */}
// //             <div className="mb-4 sm:mb-5 lg:mb-4">
// //               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-3">
// //                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800 leading-tight">
// //                   Labour Welfare Fund :
// //                 </h1>
// //                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
// //                   {data.name}
// //                 </h2>
// //               </div>
// //             </div>

// //             {/* Act Details - Mobile Card View */}
// //             <div className="block lg:hidden mb-4">
// //               <Card className="shadow-sm border-l-4 border-l-orange-500">
// //                 <CardHeader className="pb-2">
// //                   <CardTitle className="text-base font-bold">Act Information</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="p-3">
// //                   <div className="space-y-3">
// //                     <div className="bg-gray-50 rounded-lg p-3">
// //                       <div className="space-y-2 text-xs">
// //                         <div><span className="font-medium text-orange-600">Act:</span> {data.act}</div>
// //                         <div><span className="font-medium text-orange-600">Rule:</span> {data.rule}</div>
// //                         <div><span className="font-medium text-orange-600">Applicability:</span> {data.applicability}</div>
// //                         <div><span className="font-medium text-orange-600">Frequency:</span> <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">{data.frequency}</Badge></div>
// //                         <div><span className="font-medium text-orange-600">Form:</span> {data.form}</div>
// //                         <div><span className="font-medium text-orange-600">Updated:</span> {data.lastUpdated}</div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Act Details - Desktop Table */}
// //             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
// //               <CardHeader className="pb-1 lg:pb-2">
// //                 <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
// //               </CardHeader>
// //               <CardContent className="p-0">
// //                 <div className="w-full">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="bg-orange-500 hover:bg-orange-500">
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Act</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Rule</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Applicability</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Frequency</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Form</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Website</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white">
// //                       <tr className="hover:bg-orange-50 transition-colors">
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.act}</td>
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.rule}</td>
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.applicability}</td>
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
// //                           <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">{data.frequency}</Badge>
// //                         </td>
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
// //                           <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0 text-xs lg:text-sm" aria-label="Download form">
// //                             <FileText className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
// //                             {data.form}
// //                           </Button>
// //                         </td>
// //                         <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
// //                           <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0 text-xs lg:text-sm" aria-label="Visit official site">
// //                             <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
// //                             Official Site
// //                           </Button>
// //                         </td>
// //                       </tr>
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Contribution Details - Mobile Card View */}
// //             <div className="block lg:hidden mb-4">
// //               <Card className="shadow-sm border-l-4 border-l-orange-500">
// //                 <CardHeader className="pb-2">
// //                   <CardTitle className="text-base font-bold text-center">Labour Welfare Fund Contribution</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="p-3">
// //                   <div className="space-y-3">
// //                     {data.contributions.map((contribution, index) => (
// //                       <div key={index} className="bg-gray-50 rounded-lg p-3 border">
// //                         <h3 className="font-semibold text-sm text-orange-600 mb-2">Employee Category</h3>
// //                         <p className="text-xs text-gray-700 mb-3">{contribution.category}</p>
                        
// //                         <div className="grid grid-cols-2 gap-2 text-xs mb-3">
// //                           <div className="text-center">
// //                             <div className="font-medium text-gray-600">Employee</div>
// //                             <div className="font-bold text-green-600">₹{contribution.employeeContribution}</div>
// //                           </div>
// //                           <div className="text-center">
// //                             <div className="font-medium text-gray-600">Employer</div>
// //                             <div className="font-bold text-green-600">₹{contribution.employerContribution}</div>
// //                           </div>
// //                         </div>
                        
// //                         <div className="text-center mb-3">
// //                           <div className="font-medium text-gray-600 text-xs">Total Contribution</div>
// //                           <div className="font-bold text-green-600 text-sm">₹{contribution.totalContribution}</div>
// //                         </div>

// //                         <div className="space-y-1 text-xs">
// //                           <p><span className="font-medium">Deduction:</span> {contribution.dateOfDeduction}</p>
// //                           <p><span className="font-medium">Submission:</span> {contribution.lastDateForSubmission}</p>
// //                           <p><span className="font-medium">Remarks:</span> {contribution.remarks}</p>
// //                         </div>
// //                       </div>
// //                     ))}
// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Contribution Details - Desktop Table */}
// //             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
// //               <CardHeader className="pb-1 lg:pb-2">
// //                 <CardTitle className="text-base lg:text-lg font-bold text-center">Labour Welfare Fund Contribution</CardTitle>
// //               </CardHeader>
// //               <CardContent className="p-0">
// //                 <div className="w-full">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="bg-orange-500 hover:bg-orange-500">
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Category</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Employee</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Employer</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Total</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Deduction</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Submission</th>
// //                         <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Remarks</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {data.contributions.map((contribution, index) => (
// //                         <tr key={index} className="hover:bg-orange-50 transition-colors">
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words max-w-xs">{contribution.category}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-green-600 font-semibold">₹{contribution.employeeContribution}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-green-600 font-semibold">₹{contribution.employerContribution}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center font-bold text-green-600">₹{contribution.totalContribution}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900 break-words">{contribution.dateOfDeduction}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900 break-words">{contribution.lastDateForSubmission}</td>
// //                           <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900">{contribution.remarks}</td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Quick Actions */}
// //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
// //                   <Button 
// //                     size="sm" 
// //                     className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8" 
// //                     aria-label="Download form"
// //                   >
// //                     Download {data.form}
// //                   </Button>
// //                 </CardContent>
// //               </Card>

// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
// //                   <Button 
// //                     size="sm" 
// //                     variant="outline" 
// //                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8" 
// //                     aria-label="Visit official website"
// //                   >
// //                     Visit Website
// //                   </Button>
// //                 </CardContent>
// //               </Card>

// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <Calendar className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Due Dates</h3>
// //                   <Button 
// //                     size="sm" 
// //                     variant="outline" 
// //                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8" 
// //                     aria-label="View calendar"
// //                   >
// //                     View Calendar
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             </div>

          
// //           </div>

// //           {/* Right Sidebar - Popular Search (Desktop Only) */}
// //           <div className="hidden lg:block lg:col-span-1">
// //             <div className="sticky top-2 lg:top-3">
// //               <Card className="shadow-sm hover:shadow-md transition-shadow">
// //                 <CardContent className="p-2 lg:p-3 xl:p-4">
// //                   <PopularSearch className="mb-0" />
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export async function generateStaticParams() {
// //   return Object.keys(stateData).map((state) => ({ state }))
// // }





























// // import type { Metadata } from "next";
// // import { notFound } from "next/navigation";
// // import Link from "next/link";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { Download, ExternalLink, FileText, Calendar as CalIcon } from "lucide-react";
// // import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // export const revalidate = 1800;

// // type Row = Record<string, string | null>;
// // type WFSlugResponse = {
// //   data: {
// //     state: { name: string; slug: string };
// //     updated_date?: string | null;
// //     effective_date?: string | null;
// //     act_information: { headers: string[]; rows: Row[] };
// //     labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
// //     downloads: {form_url?: string | null };
// //   };
// // };

// // type WFListResponse = {
// //   applicable_states: { state_slug: string }[];
// //   non_applicable_states: { state_slug: string }[];
// // };

// // const API_BASE ="http://100.110.147.101:8000";

// // async function getWFState(slug: string) {
// //   try {
// //     const res = await fetch(`${API_BASE}/api/welfare-funds/${slug}`, { next: { revalidate } });
// //     if (res.status === 404) return null;
// //     if (!res.ok) throw new Error(`HTTP ${res.status}`);
// //     const json = (await res.json()) as WFSlugResponse;
// //     return json?.data ?? null;
// //   } catch {
// //     return null;
// //   }
// // }


// // async function getAllSlugs(): Promise<string[]> {
// //   try {
// //     const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
// //     if (!res.ok) throw new Error(`HTTP ${res.status}`);
// //     const json = (await res.json()) as WFListResponse;
// //     return [
// //       ...(json.applicable_states || []).map(s => s.state_slug),
// //       ...(json.non_applicable_states || []).map(s => s.state_slug),
// //     ];
// //   } catch {
// //     return [];
// //   }
// // }


// // const cell = (row: Row, header: string) => row[header] ?? "—";
// // const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

// // export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
// //   const data = await getWFState(params.state);
// //   if (!data) return { title: "Labour Welfare Fund | Not Found" };
// //   return {
// //     title: `${data.state.name} Labour Welfare Fund | Contribution, Forms & Rules`,
// //     description: `Official ${data.state.name} LWF details – act & rules, contribution table, frequency, forms & website.`,
// //   };
// // }

// // export async function generateStaticParams() {
// //   const slugs = await getAllSlugs();
// //   return slugs.map((state) => ({ state }));
// // }


// // export default async function StateWelfareFundPage({ params }: { params: { state: string } }) {
// //   const data = await getWFState(params.state);
// //   if (!data) notFound();

// //   const actH = data.act_information.headers;
// //   const actRows = data.act_information.rows;
// //   const contribH = data.labour_welfare_fund_contribution.headers;
// //   const contribRows = data.labour_welfare_fund_contribution.rows;

// //   const formTitle = fmt(data.downloads.form_title);
// //   const formUrl = data.downloads.form_url || "";
// //   const websiteUrl = data.downloads.website_url || "";

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
// //         {/* Popular Search (mobile) */}
// //         <div className="lg:hidden mb-3 sm:mb-4">
// //           <Card className="shadow-sm">
// //             <CardContent className="p-2 sm:p-3">
// //               <PopularSearch className="mb-0" />
// //             </CardContent>
// //           </Card>
// //         </div>

// //         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
// //           {/* Main */}
// //           <div className="lg:col-span-3">
// //             {/* Header */}
// //             <div className="mb-4 sm:mb-5 lg:mb-4">
// //               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-3">
// //                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">Labour Welfare Fund :</h1>
// //                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
// //                   {data.state.name}
// //                 </h2>
// //               </div>
// //             </div>

// //             {/* Act Information – Desktop Table */}
// //             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
// //               <CardHeader className="pb-1 lg:pb-2">
// //                 <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
// //               </CardHeader>
// //               <CardContent className="p-0">
// //                 <div className="w-full overflow-x-auto">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="bg-orange-500">
// //                         {actH.map(h => (
// //                           <th key={h} className="px-3 py-3 text-left text-sm font-bold text-white uppercase tracking-wide">{h}</th>
// //                         ))}
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white">
// //                       {actRows.map((r, idx) => (
// //                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
// //                           {actH.map(h => {
// //                             const val = cell(r, h);
// //                             if (h.toLowerCase() === "frequency") {
// //                               return (
// //                                 <td key={h} className="px-3 py-4 text-sm">
// //                                   <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">{fmt(val)}</Badge>
// //                                 </td>
// //                               );
// //                             }
// //                             if (h.toLowerCase() === "form") {
// //                               return (
// //                                 <td key={h} className="px-3 py-4 text-sm">
// //                                   {val && val !== "—" ? (
// //                                     <Button asChild variant="link" size="sm" className="text-orange-600 p-0">
// //                                       <a href={val as string} target="_blank" rel="noopener noreferrer">
// //                                         <FileText className="h-4 w-4 mr-1" /> {val}
// //                                       </a>
// //                                     </Button>
// //                                   ) : "—"}
// //                                 </td>
// //                               );
// //                             }
// //                             if (h.toLowerCase() === "website") {
// //                               const href = (val && val !== "—" ? (val as string) : websiteUrl) || "";
// //                               return (
// //                                 <td key={h} className="px-3 py-4 text-sm">
// //                                   {href ? (
// //                                     <a href={href} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline inline-flex items-center">
// //                                       <ExternalLink className="h-4 w-4 mr-1" /> Official Site
// //                                     </a>
// //                                   ) : "—"}
// //                                 </td>
// //                               );
// //                             }
// //                             return <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words">{fmt(val)}</td>;
// //                           })}
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Act Information – Mobile Cards */}
// //             <div className="block lg:hidden mb-4">
// //               <Card className="shadow-sm border-l-4 border-l-orange-500">
// //                 <CardHeader className="pb-2">
// //                   <CardTitle className="text-base font-bold">Act Information</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="p-3">
// //                   {actRows.map((r, idx) => (
// //                     <div key={idx} className="bg-gray-50 rounded-lg p-3 space-y-2 text-xs">
// //                       {actH.map(h => (
// //                         <div key={h}>
// //                           <span className="font-medium text-orange-600">{h}:</span>{" "}
// //                           {h.toLowerCase() === "frequency" ? (
// //                             <Badge variant="secondary" className="bg-green-100 text-green-800">{fmt(cell(r, h))}</Badge>
// //                           ) : h.toLowerCase() === "website" ? (
// //                             (cell(r, h) || websiteUrl) ? (
// //                               <a href={(cell(r, h) || websiteUrl)!} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
// //                                 Official Site
// //                               </a>
// //                             ) : "—"
// //                           ) : (
// //                             fmt(cell(r, h))
// //                           )}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   ))}
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Contribution – Desktop Table */}
// //             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
// //               <CardHeader className="pb-1 lg:pb-2">
// //                 <CardTitle className="text-base lg:text-lg font-bold">Labour Welfare Fund Contribution</CardTitle>
// //               </CardHeader>
// //               <CardContent className="p-0">
// //                 <div className="w-full overflow-x-auto">
// //                   <table className="w-full">
// //                     <thead>
// //                       <tr className="bg-orange-500">
// //                         {contribH.map(h => (
// //                           <th key={h} className="px-3 py-3 text-left text-sm font-bold text-white uppercase tracking-wide">{h}</th>
// //                         ))}
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {contribRows.map((r, idx) => (
// //                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
// //                           {contribH.map(h => (
// //                             <td key={h} className={`px-3 py-4 text-sm ${["Employee","Employer","Total"].includes(h) ? "text-green-600 font-semibold text-center" : ""}`}>
// //                               {fmt(cell(r, h))}
// //                             </td>
// //                           ))}
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               </CardContent>
// //             </Card>

// //             {/* Contribution – Mobile Cards */}
// //             <div className="block lg:hidden mb-4">
// //               <Card className="shadow-sm border-l-4 border-l-orange-500">
// //                 <CardHeader className="pb-2">
// //                   <CardTitle className="text-base font-bold text-center">Labour Welfare Fund Contribution</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="p-3 space-y-3">
// //                   {contribRows.map((r, idx) => (
// //                     <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
// //                       {contribH.map(h => (
// //                         <div key={h} className="flex gap-2">
// //                           <span className="font-medium text-gray-600 min-w-[88px]">{h}:</span>
// //                           <span className={`${["Employee","Employer","Total"].includes(h) ? "text-green-600 font-semibold" : ""}`}>
// //                             {fmt(cell(r, h))}
// //                           </span>
// //                         </div>
// //                       ))}
// //                     </div>
// //                   ))}
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             {/* Quick Actions */}
// //             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
// //                   {formUrl ? (
// //                     <Button asChild size="sm" className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8">
// //                       <a href={formUrl} target="_blank" rel="noopener noreferrer">
// //                         {formTitle !== "—" ? `Download ${formTitle}` : "Download Form"}
// //                       </a>
// //                     </Button>
// //                   ) : (
// //                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
// //                       No Form Available
// //                     </Button>
// //                   )}
// //                 </CardContent>
// //               </Card>

// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
// //                   {websiteUrl ? (
// //                     <Button asChild size="sm" variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8">
// //                       <a href={websiteUrl} target="_blank" rel="noopener noreferrer">Visit Website</a>
// //                     </Button>
// //                   ) : (
// //                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
// //                       Not Available
// //                     </Button>
// //                   )}
// //                 </CardContent>
// //               </Card>

// //               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
// //                 <CardContent className="p-3 lg:p-4">
// //                   <CalIcon className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
// //                   <h3 className="font-medium mb-2 text-sm lg:text-base">Due Dates</h3>
// //                   <Link href="/calendar" className="block">
// //                     <Button size="sm" variant="outline" className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8">
// //                       View Calendar
// //                     </Button>
// //                   </Link>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>

// //           {/* Sidebar */}
// //           <div className="hidden lg:block lg:col-span-1">
// //             <div className="sticky top-2 lg:top-3">
// //               <Card className="shadow-sm hover:shadow-md transition-shadow">
// //                 <CardContent className="p-2 lg:p-3 xl:p-4">
// //                   <PopularSearch className="mb-0" />
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }














// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Download, ExternalLink, FileText, Calendar as CalIcon } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// export const revalidate = 1800;

// type Row = Record<string, string | null>;
// type WFSlugResponse = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date?: string | null;
//     effective_date?: string | null;
//     act_information: { headers: string[]; rows: Row[] };
//     labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
//     downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
//   };
// };

// type WFListResponse = {
//   applicable_states: { state_slug: string }[];
//   non_applicable_states: { state_slug: string }[];
// };

// // ------- ENV / URL helpers -------
// const API_BASE = "http://100.110.147.101:8000";
// const API_ORIGIN = new URL(API_BASE).origin;
// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);

// function normalizeUrl(input?: string | null): string | null {
//   if (!input) return null;
//   const val = input.trim();
//   // absolute URL
//   try {
//     const u = new URL(val);
//     // if coming from local dev host, swap to API origin
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return API_ORIGIN + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     // not absolute; treat as path like /storage/...
//     if (val.startsWith("/")) return API_ORIGIN + val;
//     if (val.startsWith("storage/") || val.startsWith("/storage/")) {
//       return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
//     }
//     return null;
//   }
// }

// function fileNameFromUrl(u: string): string {
//   try {
//     const url = new URL(u);
//     const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
//     return last || "Download";
//   } catch {
//     return "Download";
//   }
// }

// // ------- Fetchers -------
// async function getWFState(slug: string) {
//   try {
//     const res = await fetch(`${API_BASE}/api/welfare-funds/${slug}`, { next: { revalidate } });
//     if (res.status === 404) return null;
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = (await res.json()) as WFSlugResponse;
//     return json?.data ?? null;
//   } catch {
//     return null;
//   }
// }

// async function getAllSlugs(): Promise<string[]> {
//   try {
//     const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = (await res.json()) as WFListResponse;
//     return [
//       ...(json.applicable_states || []).map((s) => s.state_slug),
//       ...(json.non_applicable_states || []).map((s) => s.state_slug),
//     ];
//   } catch {
//     return [];
//   }
// }

// // ------- utils -------
// const cell = (row: Row, header: string) => row[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

// // ------- metadata -------
// export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
//   const data = await getWFState(params.state);
//   if (!data) return { title: "Labour Welfare Fund | Not Found" };
//   return {
//     title: `${data.state.name} Labour Welfare Fund | Contribution, Forms & Rules`,
//     description: `Official ${data.state.name} LWF details – act & rules, contribution table, frequency, forms & website.`,
//   };
// }

// export async function generateStaticParams() {
//   const slugs = await getAllSlugs();
//   return slugs.map((state) => ({ state }));
// }

// // ------- page -------
// export default async function StateWelfareFundPage({ params }: { params: { state: string } }) {
//   const data = await getWFState(params.state);
//   if (!data) notFound();

//   const actH = data.act_information.headers;
//   const actRows = data.act_information.rows;
//   const contribH = data.labour_welfare_fund_contribution.headers;
//   const contribRows = data.labour_welfare_fund_contribution.rows;

//   // normalize downloads
//   const formUrlNorm = normalizeUrl(data.downloads.form_url);
//   const websiteUrlNorm = normalizeUrl(data.downloads.website_url);
//   const formTitle = fmt(data.downloads.form_title);
//   const formButtonLabel =
//     formTitle !== "—" ? `Download ${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className=" mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search (mobile) */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
//           {/* Main */}
//           <div className="lg:col-span-3">
//             <div className="mb-4 sm:mb-5 lg:mb-4">
//               <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-3">
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Labour Welfare Fund :
//                 </h1>
//                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                   {data.state.name}
//                 </h2>
//               </div>
//             </div>

//             {/* Act Information – Desktop */}
//             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {actH.map((h) => (
//                           <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide">
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white">
//                       {actRows.map((r, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {actH.map((h) => {
//                             const raw = cell(r, h);
//                             const low = h.toLowerCase();

//                             if (low === "frequency") {
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm">
//                                   <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
//                                     {fmt(raw)}
//                                   </Badge>
//                                 </td>
//                               );
//                             }

//                             if (low === "form") {
//                               const href = normalizeUrl(typeof raw === "string" ? raw : null);
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm">
//                                   {href ? (
//                                     <Button asChild variant="link" size="sm" className="text-orange-600 p-0">
//                                       <a href={href} target="_blank" rel="noopener noreferrer">
//                                         <FileText className="h-4 w-4 mr-1" />
//                                         {fileNameFromUrl(href)}
//                                       </a>
//                                     </Button>
//                                   ) : (
//                                     "—"
//                                   )}
//                                 </td>
//                               );
//                             }

//                             if (low === "website") {
//                               const href =
//                                 normalizeUrl(typeof raw === "string" ? raw : null) || websiteUrlNorm || "";
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm">
//                                   {href ? (
//                                     <a
//                                       href={href}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="text-orange-600 hover:underline inline-flex items-center"
//                                     >
//                                       <ExternalLink className="h-4 w-4 mr-1" /> Official Site
//                                     </a>
//                                   ) : (
//                                     "—"
//                                   )}
//                                 </td>
//                               );
//                             }

//                             return (
//                               <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words">
//                                 {fmt(raw)}
//                               </td>
//                             );
//                           })}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Act Information – Mobile cards */}
//             <div className="block lg:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">Act Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   {actRows.map((r, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-3 space-y-2 text-xs">
//                       {actH.map((h) => {
//                         const raw = cell(r, h);
//                         const low = h.toLowerCase();

//                         if (low === "frequency") {
//                           return (
//                             <div key={h}>
//                               <span className="font-medium text-orange-600">{h}:</span>{" "}
//                               <Badge variant="secondary" className="bg-green-100 text-green-800">
//                                 {fmt(raw)}
//                               </Badge>
//                             </div>
//                           );
//                         }

//                         if (low === "form") {
//                           const href = normalizeUrl(typeof raw === "string" ? raw : null);
//                           return (
//                             <div key={h}>
//                               <span className="font-medium text-orange-600">{h}:</span>{" "}
//                               {href ? (
//                                 <a
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                 >
//                                   {fileNameFromUrl(href)}
//                                 </a>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         if (low === "website") {
//                           const href =
//                             normalizeUrl(typeof raw === "string" ? raw : null) || websiteUrlNorm || "";
//                           return (
//                             <div key={h}>
//                               <span className="font-medium text-orange-600">{h}:</span>{" "}
//                               {href ? (
//                                 <a
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                 >
//                                   Official Site
//                                 </a>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         return (
//                           <div key={h}>
//                             <span className="font-medium text-orange-600">{h}:</span> {fmt(raw)}
//                           </div>
//                         );
//                       })}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>


//             {/* Contribution – Desktop */}
//             <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Labour Welfare Fund Contribution</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {contribH.map((h) => (
//                           <th key={h}  className={`px-3 py-3 text-sm font-bold text-white uppercase tracking-wide`}>
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {contribRows.map((r, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {contribH.map((h) => (
//                             <td
//                               key={h}
//                               className={`px-3 py-4 text-sm ${
//                                 ["Employee", "Employer", "Total"].includes(h)
//                                   ? "text-green-600 font-semibold text-center"
//                                   : "text-center"
//                               }`}
//                             >
//                               {fmt(cell(r, h))}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Contribution – Mobile */}
//             <div className="block lg:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold text-center">
//                     Labour Welfare Fund Contribution
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {contribRows.map((r, idx) => (
//                     <div key={idx} className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                       {contribH.map((h) => (
//                         <div key={h} className="flex gap-2">
//                           <span className="font-medium text-gray-600 min-w-[88px]">{h}:</span>
//                           <span
//                             className={`${
//                               ["Employee", "Employer", "Total"].includes(h) ? "text-green-600 font-semibold" : ""
//                             }`}
//                           >
//                             {fmt(cell(r, h))}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
//                   {formUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <a href={formUrlNorm} target="_blank" rel="noopener noreferrer">
//                         {formButtonLabel}
//                       </a>
//                     </Button>
//                   ) : (
//                     <Button size="sm" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
//                   {websiteUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       <a href={websiteUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Visit Website
//                       </a>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <CalIcon className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Due Dates</h3>
//                   <Link href="/calendar" className="block">
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                     >
//                       View Calendar
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="2xl:w-xs  hidden lg:block lg:col-span-1">
//             <div className=" sticky top-2 lg:top-3">
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







// // app/welfare-fund/[state]/page.tsx
// import type { Metadata } from "next";
// import { notFound } from "next/navigation";
// import WelfareFundDetails from "@/app/_component/WelfareFund/WelfareFundDetails/WelfareFundDetails";

// export const revalidate = 1800; // ISR 30min

// // ---------- Types from API ----------
// type Row = Record<string, string | null>;
// type WFSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   act_information: { headers: string[]; rows: Row[] };
//   labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
//   downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
// };
// type WFSlugResponse = { data: WFSlugData };
// type WFListResponse = {
//   applicable_states: { state_slug: string }[];
//   non_applicable_states: { state_slug: string }[];
// };

// // const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://100.110.147.101:8000";
// const API_BASE ="http://100.110.147.101:8000";

// // ---------- Fetchers ----------
// async function getWFState(slug: string): Promise<WFSlugData | null> {
//   try {
//     const res = await fetch(`${API_BASE}/api/welfare-funds/${slug}`, { next: { revalidate } });
//     if (res.status === 404) return null;
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = (await res.json()) as WFSlugResponse;
//     return json?.data ?? null;
//   } catch {
//     return null;
//   }
// }

// async function getAllSlugs(): Promise<string[]> {
//   try {
//     const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
//     if (!res.ok) throw new Error(`HTTP ${res.status}`);
//     const json = (await res.json()) as WFListResponse;
//     return [
//       ...(json.applicable_states || []).map((s) => s.state_slug),
//       ...(json.non_applicable_states || []).map((s) => s.state_slug),
//     ];
//   } catch {
//     return [];
//   }
// }

// // ---------- Metadata ----------
// export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
//   const data = await getWFState(params.state);
//   if (!data) return { title: "Labour Welfare Fund | Not Found" };
//   return {
//     title: `${data.state.name} Labour Welfare Fund | Contribution, Forms & Rules`,
//     description: `Official ${data.state.name} LWF details – act & rules, contribution table, frequency, forms & website.`,
//   };
// }

// export async function generateStaticParams() {
//   const slugs = await getAllSlugs();
//   return slugs.map((state) => ({ state }));
// }

// // ---------- Page ----------
// export default async function StateWelfareFundPage({ params }: { params: { state: string } }) {
//   const data = await getWFState(params.state);
//   if (!data) notFound();
//   return <WelfareFundDetails data={data} apiBase={API_BASE} />;
// }






// app/welfare-fund/[state]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WelfareFundDetails from "@/app/_component/WelfareFund/WelfareFundDetails/WelfareFundDetails";

export const revalidate = 1800; // ISR 30min

// ---------- Types from API ----------
type Row = Record<string, string | null>;
type WFSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  act_information: { headers: string[]; rows: Row[] };
  labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
  downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
};
type WFSlugResponse = { data: WFSlugData };
type WFListResponse = {
  applicable_states: { state_slug: string }[];
  non_applicable_states: { state_slug: string }[];
};

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, "") || "http://100.110.147.101:8000";
const API_BASE = "http://100.110.147.101:8000";

// ---------- Fetchers ----------
async function getWFState(slug: string): Promise<WFSlugData | null> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds/${slug}`, { next: { revalidate } });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as WFSlugResponse;
    return json?.data ?? null;
  } catch {
    return null;
  }
}

async function getAllSlugs(): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/api/welfare-funds`, { next: { revalidate } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = (await res.json()) as WFListResponse;
    return [
      ...(json.applicable_states || []).map((s) => s.state_slug),
      ...(json.non_applicable_states || []).map((s) => s.state_slug),
    ];
  } catch {
    return [];
  }
}

// ---------- Metadata (await params) ----------
export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state } = await params; // ✅ await
  const data = await getWFState(state);
  if (!data) return { title: "Labour Welfare Fund | Not Found" };
  return {
    title: `${data.state.name} Labour Welfare Fund | Contribution, Forms & Rules`,
    description: `Official ${data.state.name} LWF details – act & rules, contribution table, frequency, forms & website.`,
  };
}

// ---------- Static Params (ISR prebuild) ----------
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((state) => ({ state }));
}

// ---------- Page (await params) ----------
export default async function StateWelfareFundPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state } = await params; // ✅ await
  const data = await getWFState(state);
  if (!data) notFound();
  return <WelfareFundDetails data={data} apiBase={API_BASE} />;
}

// import { Metadata } from 'next'
// import { notFound } from 'next/navigation'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Download, Globe, IndianRupee } from 'lucide-react'
// import PopularSearch from '@/app/PopularSearch/PopularSearch'

// interface StateWageData {
//   state: string
//   slug: string
//   act: string
//   rule: string
//   applicability: string
//   frequency: string
//   form: string
//   website: string
//   lastUpdated: string
//   wageRates: {
//     category: string
//     skilled: number
//     semiSkilled: number
//     unskilled: number
//     remarks: string
//   }[]
//   employmentCategories: {
//     category: string
//     description: string
//     applicableRate: string
//     overtime: string
//     nightShift: string
//   }[]
// }


// const stateWageData: Record<string, StateWageData> = {
//   'andhra-pradesh': {
//     state: 'Andhra Pradesh',
//     slug: 'andhra-pradesh',
//     act: 'Andhra Pradesh Minimum Wages Act, 1948',
//     rule: 'The Andhra Pradesh Minimum Wages Rules, 1950',
//     applicability: 'All establishments employing workers in scheduled employments',
//     frequency: 'Revised every 5 years or as notified',
//     form: 'Form MW-1, MW-2',
//     website: 'https://labour.ap.gov.in',
//     lastUpdated: '1st January 2024',
//     wageRates: [
//       {
//         category: 'Agricultural Workers',
//         skilled: 395,
//         semiSkilled: 365,
//         unskilled: 335,
//         remarks: 'Includes farm labourers, plantation workers'
//       },
//       {
//         category: 'Construction Workers',
//         skilled: 425,
//         semiSkilled: 395,
//         unskilled: 365,
//         remarks: 'Building and other construction work'
//       },
//       {
//         category: 'Manufacturing',
//         skilled: 415,
//         semiSkilled: 385,
//         unskilled: 355,
//         remarks: 'Factory workers, industrial establishments'
//       },
//       {
//         category: 'Service Sector',
//         skilled: 405,
//         semiSkilled: 375,
//         unskilled: 345,
//         remarks: 'Hotels, restaurants, security services'
//       }
//     ],

//     employmentCategories: [
//       {
//         category: 'Agriculture',
//         description: 'Cultivation of crops, plantation work, animal husbandry',
//         applicableRate: 'Unskilled: ₹335, Semi-skilled: ₹365, Skilled: ₹395',
//         overtime: '2x normal rate after 9 hours',
//         nightShift: '25% additional allowance'
//       },
//       {
//         category: 'Construction',
//         description: 'Building construction, road work, infrastructure projects',
//         applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '30% additional allowance'
//       },
//       {
//         category: 'Manufacturing',
//         description: 'Factory work, industrial production, processing units',
//         applicableRate: 'Unskilled: ₹355, Semi-skilled: ₹385, Skilled: ₹415',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '25% additional allowance'
//       }
//     ]
//   },

//   'maharashtra': {
//     state: 'Maharashtra',
//     slug: 'maharashtra',
//     act: 'Maharashtra Minimum Wages Act, 1948',
//     rule: 'The Maharashtra Minimum Wages Rules, 1963',
//     applicability: 'All establishments employing workers in scheduled employments',
//     frequency: 'Revised every 5 years or as notified',
//     form: 'Form MW-1, MW-2, MW-3',
//     website: 'https://mahakamgar.maharashtra.gov.in',
//     lastUpdated: '1st January 2024',
//     wageRates: [
//       {
//         category: 'Agricultural Workers',
//         skilled: 425,
//         semiSkilled: 395,
//         unskilled: 365,
//         remarks: 'Includes farm labourers, plantation workers'
//       },
//       {
//         category: 'Construction Workers',
//         skilled: 455,
//         semiSkilled: 425,
//         unskilled: 395,
//         remarks: 'Building and other construction work'
//       },
//       {
//         category: 'Manufacturing',
//         skilled: 445,
//         semiSkilled: 415,
//         unskilled: 385,
//         remarks: 'Factory workers, industrial establishments'
//       },
//       {
//         category: 'Service Sector',
//         skilled: 435,
//         semiSkilled: 405,
//         unskilled: 375,
//         remarks: 'Hotels, restaurants, security services'
//       }
//     ],
//     employmentCategories: [
//       {
//         category: 'Agriculture',
//         description: 'Cultivation of crops, plantation work, animal husbandry',
//         applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
//         overtime: '2x normal rate after 9 hours',
//         nightShift: '25% additional allowance'
//       },
//       {
//         category: 'Construction',
//         description: 'Building construction, road work, infrastructure projects',
//         applicableRate: 'Unskilled: ₹395, Semi-skilled: ₹425, Skilled: ₹455',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '30% additional allowance'
//       },
//       {
//         category: 'Manufacturing',
//         description: 'Factory work, industrial production, processing units',
//         applicableRate: 'Unskilled: ₹385, Semi-skilled: ₹415, Skilled: ₹445',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '25% additional allowance'
//       }
//     ]
//   },
//   'karnataka': {
//     state: 'Karnataka',
//     slug: 'karnataka',
//     act: 'Karnataka Minimum Wages Act, 1948',
//     rule: 'The Karnataka Minimum Wages Rules, 1958',
//     applicability: 'All establishments employing workers in scheduled employments',
//     frequency: 'Revised every 5 years or as notified',
//     form: 'Form MW-1, MW-2',
//     website: 'https://labour.karnataka.gov.in',
//     lastUpdated: '1st January 2024',
//     wageRates: [
//       {
//         category: 'Agricultural Workers',
//         skilled: 425,
//         semiSkilled: 395,
//         unskilled: 365,
//         remarks: 'Includes farm labourers, plantation workers'
//       },
//       {
//         category: 'Construction Workers',
//         skilled: 455,
//         semiSkilled: 425,
//         unskilled: 395,
//         remarks: 'Building and other construction work'
//       },
//       {
//         category: 'Manufacturing',
//         skilled: 445,
//         semiSkilled: 415,
//         unskilled: 385,
//         remarks: 'Factory workers, industrial establishments'
//       },
//       {
//         category: 'Service Sector',
//         skilled: 435,
//         semiSkilled: 405,
//         unskilled: 375,
//         remarks: 'Hotels, restaurants, security services'
//       }
//     ],
//     employmentCategories: [
//       {
//         category: 'Agriculture',
//         description: 'Cultivation of crops, plantation work, animal husbandry',
//         applicableRate: 'Unskilled: ₹365, Semi-skilled: ₹395, Skilled: ₹425',
//         overtime: '2x normal rate after 9 hours',
//         nightShift: '25% additional allowance'
//       },
//       {
//         category: 'Construction',
//         description: 'Building construction, road work, infrastructure projects',
//         applicableRate: 'Unskilled: ₹395, Semi-skilled: ₹425, Skilled: ₹455',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '30% additional allowance'
//       },
//       {
//         category: 'Manufacturing',
//         description: 'Factory work, industrial production, processing units',
//         applicableRate: 'Unskilled: ₹385, Semi-skilled: ₹415, Skilled: ₹445',
//         overtime: '2x normal rate after 8 hours',
//         nightShift: '25% additional allowance'
//       }
//     ]
//   }
// }

// export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
//   const stateData = stateWageData[params.state]

//   if (!stateData) {
//     return {
//       title: 'State Not Found | Minimum Wages',
//       description: 'The requested state minimum wage information could not be found.'
//     }
//   }

//   return {
//     title: `${stateData.state} Minimum Wages - Current Rates & Notifications | E-Library`,
//     description: `Complete minimum wage information for ${stateData.state}. Find current wage rates, employment categories, overtime rates, and compliance requirements.`,
//     keywords: `${stateData.state} minimum wages, wage rates, labour compliance, ${stateData.state} labour laws`,
//   }
// }

// export default function StateMinimumWagesPage({ params }: { params: { state: string } }) {
//   const stateData = stateWageData[params.state]

//   if (!stateData) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">

//         {/* Popular Search - Top for Mobile/Tablet */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5 ">

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex justify-between">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">Minimum Wages :</h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl text-orange-600 font-semibold">{stateData.state}</h2>
//             </div>

//             {/* Minimum Wage Rates - Mobile Card View */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm">
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-center text-base font-bold text-gray-900">Minimum Wage Rates (Daily in ₹)</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   <div className="space-y-3">
//                     {stateData.wageRates.map((rate, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-3 border">
//                         <h3 className="font-semibold text-sm text-gray-900 mb-2">{rate.category}</h3>
//                         <div className="grid grid-cols-3 gap-2 text-xs">
//                           <div className="text-center">
//                             <div className="font-medium text-orange-600">Skilled</div>
//                             <div className="font-bold">₹{rate.skilled}</div>
//                           </div>
//                           <div className="text-center">
//                             <div className="font-medium text-orange-600">Semi-Skilled</div>
//                             <div className="font-bold">₹{rate.semiSkilled}</div>
//                           </div>
//                           <div className="text-center">
//                             <div className="font-medium text-orange-600">Unskilled</div>
//                             <div className="font-bold">₹{rate.unskilled}</div>
//                           </div>
//                         </div>
//                         <p className="text-xs text-gray-600 mt-2">{rate.remarks}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Minimum Wage Rates - Desktop Table */}
//             <Card className="hidden md:block mb-4 lg:mb-3 shadow-sm">
//               <CardHeader className="pb-2 lg:pb-1">
//                 <CardTitle className="text-center text-lg lg:text-base xl:text-lg font-bold text-gray-900">Minimum Wage Rates (Daily in ₹)</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full">
//                     <thead className="bg-orange-500">
//                       <tr>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Category</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Skilled</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Semi-Skilled</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Unskilled</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Remarks</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {stateData.wageRates.map((rate, index) => (
//                         <tr key={index} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-medium text-gray-900">{rate.category}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-green-600">₹{rate.skilled}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-green-600">₹{rate.semiSkilled}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-semibold text-green-600">₹{rate.unskilled}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-600">{rate.remarks}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Employment Categories - Mobile Card View */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm">
//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-base font-bold text-gray-900">Employment Categories & Benefits</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3">
//                   <div className="space-y-3">
//                     {stateData.employmentCategories.map((category, index) => (
//                       <div key={index} className="bg-gray-50 rounded-lg p-3 border">
//                         <h3 className="font-semibold text-sm text-orange-600 mb-2">{category.category}</h3>
//                         <div className="space-y-1 text-xs">
//                           <p><span className="font-medium">Description:</span> {category.description}</p>
//                           <p><span className="font-medium">Rate:</span> {category.applicableRate}</p>
//                           <p><span className="font-medium">Overtime:</span> {category.overtime}</p>
//                           <p><span className="font-medium">Night Shift:</span> {category.nightShift}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Employment Categories - Desktop Table */}
//             <Card className="hidden md:block mb-4 lg:mb-3 shadow-sm">
//               <CardHeader className="pb-2 lg:pb-1">
//                 <CardTitle className="text-lg lg:text-base xl:text-lg font-bold text-gray-900">Employment Categories & Additional Benefits</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full">
//                     <thead className="bg-orange-500">
//                       <tr>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Category</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Description</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Applicable Rate</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Overtime</th>
//                         <th className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide">Night Shift</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {stateData.employmentCategories.map((category, index) => (
//                         <tr key={index} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm font-medium text-orange-600">{category.category}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-700">{category.description}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-900">{category.applicableRate}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-900">{category.overtime}</td>
//                           <td className="px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm text-gray-900">{category.nightShift}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 lg:p-4 text-center">
//                   <Download className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">Download Notifactions</h3>
//                   <p className="text-xs lg:text-sm text-gray-600">Get wage-related forms and returns</p>
//                 </CardContent>
//               </Card>
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 lg:p-4 text-center">
//                   <IndianRupee className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">Wage Calculator</h3>
//                   <p className="text-xs lg:text-sm text-gray-600">Calculate wages and overtime</p>
//                 </CardContent>
//               </Card>
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 lg:p-4 text-center">
//                   <Globe className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">Official Website</h3>
//                   <p className="text-xs lg:text-sm text-gray-600">Visit state labour department</p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Right Sidebar - Popular Search (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-1">
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
//   )
// }










// import { Metadata } from "next";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Download, Globe, IndianRupee } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// const API_BASE = "http://100.110.147.101:8000/api/minimum-wages";

// // ---------- Types ----------
// type TableBlock = {
//   title?: string;
//   headers: string[];
//   rows: Record<string, string>[];
// };

// type Tiles = {
//   form_title?: string;
//   form_url?: string;
//   calculator_title?: string;
//   calculator_url?: string;
//   website_url?: string;
// };

// type DetailData = {
//   state: { name: string; slug: string };
//   updated_date: string;      
//   effective_date: string;      
//   minimum_wage_rates: TableBlock;
//   employment_categories_benefits: TableBlock;
//   tiles?: Tiles;
// };

// type ApiResp = { data: DetailData };

// // ---------- Data Fetch ----------
// async function getDetail(slug: string): Promise<DetailData | null> {
//   try {
//     const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`, {
//       // Ultra-live chahiye to: cache: "no-store"
//       next: { revalidate: 600 },
//     });
//     if (!res.ok) return null;
//     const json = (await res.json()) as ApiResp;
//     return json?.data ?? null;
//   } catch (e) {
//     console.error("Minimum Wage detail fetch failed:", e);
//     return null;
//   }
// }

// // ---------- Metadata ----------
// export async function generateMetadata(
//   { params }: { params: { state: string } }
// ): Promise<Metadata> {
//   const d = await getDetail(params.state);
//   if (!d) {
//     return {
//       title: "State Not Found | Minimum Wages",
//       description: "Requested state minimum wage information was not found.",
//     };
//   }
//   return {
//     title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
//     description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date}.`,
//     keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
//   };
// }

// // ---------- UI Helpers ----------
// function classForHeader(h: string) {
//   // Skilled columns ka green vibe
//   if (/skilled/i.test(h)) return "text-green-600 font-semibold";
//   return "text-gray-900";
// }

// function DynamicTable({
//   title,
//   headers,
//   rows,
// }: {
//   title?: string;
//   headers: string[];
//   rows: Record<string, string>[];
// }) {
//   return (
//     <>
//       {/* Mobile Cards */}
//       <div className="block md:hidden mb-4">
//         <Card className="shadow-sm">
//           {title ? (
//             <CardHeader className="pb-3">
//               <CardTitle className="text-base font-bold text-gray-900 text-center">
//                 {title}
//               </CardTitle>
//             </CardHeader>
//           ) : null}
//           <CardContent className="p-3">
//             <div className="space-y-3">
//               {rows.map((row, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-gray-50 rounded-lg p-3 border"
//                 >
//                   <div className="grid grid-cols-1 gap-2 text-xs">
//                     {headers.map((h) => (
//                       <div key={h} className="flex justify-between gap-3">
//                         <span className="font-medium text-gray-600">{h}</span>
//                         <span className={classForHeader(h)}>
//                           {row[h] ?? "-"}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//               {rows.length === 0 && (
//                 <div className="text-center text-sm text-gray-500">
//                   No data available.
//                 </div>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Desktop Table */}
//       <Card className="hidden md:block mb-4 lg:mb-3 shadow-sm">
//         {title ? (
//           <CardHeader className="pb-2 lg:pb-1">
//             <CardTitle className="text-center text-lg lg:text-base xl:text-lg font-bold text-gray-900">
//               {title}
//             </CardTitle>
//           </CardHeader>
//         ) : null}
//         <CardContent className="p-0">
//           <div className="overflow-x-auto">
//             <table className="min-w-full">
//               <thead className="bg-orange-500">
//                 <tr>
//                   {headers.map((h) => (
//                     <th
//                       key={h}
//                       className="px-3 lg:px-4 py-2 lg:py-2.5 text-left text-xs lg:text-sm font-semibold text-white uppercase tracking-wide"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {rows.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-gray-50 transition-colors">
//                     {headers.map((h) => (
//                       <td
//                         key={h}
//                         className={`px-3 lg:px-4 py-2 lg:py-3 text-xs lg:text-sm ${/skilled/i.test(h) ? "text-green-600 font-semibold" : "text-gray-900"}`}
//                       >
//                         {row[h] ?? "-"}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//                 {rows.length === 0 && (
//                   <tr>
//                     <td
//                       colSpan={headers.length || 1}
//                       className="px-4 py-6 text-center text-sm text-gray-500"
//                     >
//                       No data available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>
//     </>
//   );
// }

// // ---------- Page ----------
// export default async function StateMinimumWagesPage({
//   params,
// }: {
//   params: { state: string };
// }) {
//   const data = await getDetail(params.state);
//   if (!data) notFound();

//   const mw = data.minimum_wage_rates;
//   const cat = data.employment_categories_benefits;
//   const tiles = data.tiles ?? {};

//   const quickTiles = [
//     {
//       icon: Download,
//       title: tiles.form_title ?? "Download Notifications",
//       sub: "Get wage-related forms and returns",
//       href: tiles.form_url,
//     },
//     {
//       icon: IndianRupee,
//       title: tiles.calculator_title ?? "Wage Calculator",
//       sub: "Calculate wages and overtime",
//       href: tiles.calculator_url,
//     },
//     {
//       icon: Globe,
//       title: "Official Website",
//       sub: "Visit state labour department",
//       href: tiles.website_url,
//     },
//   ].filter((t) => !!t.href); // sirf valid links show karo

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search - Top for Mobile/Tablet */}
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
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex justify-between items-end">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
//                   Minimum Wages :
//                 </h1>
//                 <p className="text-xs sm:text-sm text-gray-600 mt-1">
//                   Updated: <span className="font-medium">{data.updated_date}</span> •
//                   Effective: <span className="font-medium">{data.effective_date}</span>
//                 </p>
//               </div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-2xl text-orange-600 font-semibold">
//                 {data.state.name}
//               </h2>
//             </div>

//             {/* Table 1: Minimum Wage Rates */}
//             <DynamicTable
//               title={mw?.title ?? "Minimum Wage Rates (Daily in ₹)"}
//               headers={mw?.headers ?? []}
//               rows={mw?.rows ?? []}
//             />

//             {/* Table 2: Employment Categories & Benefits */}
//             <DynamicTable
//               title={"Employment Categories & Additional Benefits"}
//               headers={cat?.headers ?? []}
//               rows={cat?.rows ?? []}
//             />

//             {/* Quick Action Tiles */}
//             {quickTiles.length > 0 && (
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//                 {quickTiles.map((t, i) => {
//                   const Icon = t.icon;
//                   return (
//                     <Link
//                       key={i}
//                       href={t.href!}
//                       target="_blank"
//                       className="hover:shadow-lg transition-shadow border border-gray-200 hover:border-orange-200 rounded-lg"
//                     >
//                       <Card className="border-0">
//                         <CardContent className="p-3 lg:p-4 text-center">
//                           <Icon className="h-8 w-8 lg:h-10 lg:w-10 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                           <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
//                             {t.title}
//                           </h3>
//                           <p className="text-xs lg:text-sm text-gray-600">{t.sub}</p>
//                         </CardContent>
//                       </Card>
//                     </Link>
//                   );
//                 })}
//               </div>
//             )}
//           </div>

//           {/* Right Sidebar */}
//           <div className="hidden lg:block lg:col-span-1">
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
import { notFound } from "next/navigation";
import  MinimumWageDetails
 from "@/app/_component/MinimumWages/MinimumWagesDetails/MinimumWagesDetails"; // ⬅️ adjust path if needed

export const revalidate = 600; // ✅ 10 min ISR for this route

const API_BASE = "http://100.110.147.101:8000/api/minimum-wages";

type ApiResp = { data: DetailData };

async function getDetail(slug: string): Promise<DetailData | null> {
  try {
    // export const revalidate already sets default; explicit next option optional
    const res = await fetch(`${API_BASE}/${encodeURIComponent(slug)}`);
    if (!res.ok) return null;
    const json = (await res.json()) as ApiResp;
    return json?.data ?? null;
  } catch (e) {
    console.error("Minimum Wage detail fetch failed:", e);
    return null;
  }
}

// ---------- Metadata ----------
export async function generateMetadata(
  { params }: { params: { state: string } }
): Promise<Metadata> {
  const d = await getDetail(params.state);
  if (!d) {
    return {
      title: "State Not Found | Minimum Wages",
      description: "Requested state minimum wage information was not found.",
    };
  }
  return {
    title: `${d.state.name} Minimum Wages - Current Rates & Notifications | E-Library`,
    description: `Current minimum wage tables, categories & benefits for ${d.state.name}. Updated: ${d.updated_date}.`,
    keywords: `${d.state.name} minimum wages, wage rates, labour compliance, ${d.state.name} labour laws`,
  };
}

// ---------- Page (Data-orchestrator only) ----------
export default async function StateMinimumWagesPage({
  params,
}: {
  params: { state: string };
}) {
  const data = await getDetail(params.state);
  if (!data) notFound();

  return <MinimumWageDetails data={data} />;
}

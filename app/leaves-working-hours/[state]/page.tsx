// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calculator, Download, ExternalLink, FileText } from "lucide-react";
// import type { Metadata } from "next";
// import Link from "next/link";
// import { notFound } from "next/navigation";


// interface StateData {
//   name: string;
//   slug: string;
//   updated_date: string;
//   effective_date: string;
//   act: {
//     name: string;
//     year: string;
//     rule: string;
//     ruleYear: string;
//     applicability: string;
//     frequency: string;
//     formName: string;
//     formLink: string;
//     websiteLink: string;
//   };
//   leaveEntitlements: {
//     category: string;
//     annualLeave: string;
//     sickLeave: string;
//     casualLeave: string;
//     maternityLeave: string;
//     paternityLeave: string;
//     remarks: string;
//   }[];
//   workingHours: {
//     category: string;
//     dailyHours: string;
//     weeklyHours: string;
//     overtimeRate: string;
//     nightShiftAllowance: string;
//     weeklyOff: string;
//     remarks: string;
//   }[];
// }

// const statesData: Record<string, StateData> = {
//   "andhra-pradesh": {
//     name: "Andhra Pradesh",
//     slug: "andhra-pradesh",
//     updated_date: "19-09-2025",
//     effective_date: "20-09-2025",
//     act: {
//       name: "Andhra Pradesh Shops and Commercial Establishments Act",
//       year: "1988",
//       rule: "The Andhra Pradesh Shops and Commercial Establishments Rules",
//       ruleYear: "1989",
//       applicability:
//         "Any Employer/Establishment employing one or more employees/persons",
//       frequency: "Yearly",
//       formName: "FORM A.xlsx",
//       formLink: "#",
//       websiteLink: "http://labour.ap.gov.in",
//     },
//     leaveEntitlements: [
//       {
//         category:
//           "All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis",
//         annualLeave: "12 days",
//         sickLeave: "12 days",
//         casualLeave: "7 days",
//         maternityLeave: "12 weeks",
//         paternityLeave: "15 days",
//         remarks: "As per Shops & Establishments Act",
//       },
//     ],
//     workingHours: [
//       {
//         category: "General employees",
//         dailyHours: "9 hours",
//         weeklyHours: "48 hours",
//         overtimeRate: "2x basic wage",
//         nightShiftAllowance: "10% of basic wage",
//         weeklyOff: "1 day per week",
//         remarks: "Overtime after 9 hours/day or 48 hours/week",
//       },
//     ],
//   },
// };

// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

// export async function generateMetadata({
//   params,
// }: {
//   params: { state: string };
// }): Promise<Metadata> {
//   const stateData = statesData[params.state];
//   if (!stateData) {
//     return { title: "State Not Found - Leave & Working Hours | E-Library" };
//   }
//   return {
//     title: `${stateData.name} - Leave & Working Hours Regulations | E-Library`,
//     description: `Comprehensive guide to leave policies and working hours regulations in ${stateData.name}. Find leave entitlements, working hour limits, and compliance requirements.`,
//     keywords: `${stateData.name} leave policy, working hours, shops and establishments act, annual leave, sick leave, overtime rules`,
//   };
// }

// export default async function StateLeavesWorkingHoursPage({
//   params,
// }: {
//   params: { state: string };
// }) {
//   const { state } = params;
//   const stateData = statesData[state];
//   if (!stateData) notFound();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search (mobile) */}
//         <div className="lg:hidden mb-3 sm:mb-4">
//           <Card className="shadow-sm">
//             <CardContent className="p-2 sm:p-3">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Header */}
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                   Leave & Working Hours :
//                 </h2>
//               </div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {stateData.name}
//               </h2>
//             </div>

//             {/* ============== Act Information ============== */}
//             {/* Desktop */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Act
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Rule
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Applicability
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Frequency
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Form
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Website
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       <tr className="hover:bg-orange-50 transition-colors">
//                         <td className="px-3 py-4 text-sm text-gray-900 text-center break-words">
//                           <div className="font-medium">
//                             {stateData.act.name}
//                           </div>
//                           <div className="text-gray-600 text-xs">
//                             ({stateData.act.year})
//                           </div>
//                         </td>
//                         <td className="px-3 py-4 text-sm text-gray-900 text-center break-words">
//                           <div className="font-medium">
//                             {stateData.act.rule}
//                           </div>
//                           <div className="text-gray-600 text-xs">
//                             ({stateData.act.ruleYear})
//                           </div>
//                         </td>
//                         <td className="px-3 py-4 text-sm text-gray-900 text-center break-words">
//                           {stateData.act.applicability}
//                         </td>
//                         <td className="px-3 py-4 text-sm text-center">
//                           {stateData.act.frequency}
//                         </td>
//                         <td className="px-3 py-4 text-sm text-center">
//                           {stateData.act.formLink &&
//                           stateData.act.formLink !== "#" ? (
//                             <Button
//                               asChild
//                               variant="link"
//                               size="sm"
//                               className="text-orange-600 p-0"
//                             >
//                               <a
//                                 href={stateData.act.formLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                               >
//                                 <FileText className="h-4 w-4 mr-1" />
//                                 {stateData.act.formName}
//                               </a>
//                             </Button>
//                           ) : (
//                             "—"
//                           )}
//                         </td>
//                         <td className="px-3 py-4 text-sm text-center">
//                           {stateData.act.websiteLink ? (
//                             <Link
//                               href={stateData.act.websiteLink}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="text-orange-600 hover:underline inline-flex items-center"
//                             >
//                               <ExternalLink className="h-4 w-4 mr-1" />
//                               Official Site
//                             </Link>
//                           ) : (
//                             "—"
//                           )}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Act Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   <div className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2">
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">Act:</span>
//                       <span>
//                         {stateData.act.name} ({stateData.act.year})
//                       </span>
//                     </div>
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">Rule:</span>
//                       <span>
//                         {stateData.act.rule} ({stateData.act.ruleYear})
//                       </span>
//                     </div>
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">
//                         Applicability:
//                       </span>
//                       <span>{stateData.act.applicability}</span>
//                     </div>
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">
//                         Frequency:
//                       </span>
//                       <span>{stateData.act.frequency}</span>
//                     </div>
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">Form:</span>
//                       {stateData.act.formLink &&
//                       stateData.act.formLink !== "#" ? (
//                         <a
//                           href={stateData.act.formLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-orange-600 underline"
//                         >
//                           {stateData.act.formName}
//                         </a>
//                       ) : (
//                         stateData.act.formName
//                       )}
//                     </div>
//                     <div className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">
//                         Website:
//                       </span>
//                       {stateData.act.websiteLink ? (
//                         <a
//                           href={stateData.act.websiteLink}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-orange-600 underline"
//                         >
//                           Official Site
//                         </a>
//                       ) : (
//                         "—"
//                       )}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ============== Leave Entitlements ============== */}
//             {/* Desktop */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Leave Entitlements
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center w-48 max-w-48">
//                           Category
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Annual Leave
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Sick Leave
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Casual Leave
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Maternity Leave
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Paternity Leave
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Remarks
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {stateData.leaveEntitlements.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className="hover:bg-orange-50 transition-colors"
//                         >
//                           <td className="px-3 py-4 text-sm text-gray-900 break-words w-48 max-w-48 text-justify">
//                             {row.category}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.annualLeave}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.sickLeave}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.casualLeave}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.maternityLeave}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.paternityLeave}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-gray-900 text-center">
//                             {row.remarks}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Leave Entitlements
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {stateData.leaveEntitlements.map((row, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2"
//                     >
//                       <div className="font-semibold text-orange-600 mb-2">
//                         {row.category}
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Annual Leave:
//                         </span>
//                         <span>{row.annualLeave}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Sick Leave:
//                         </span>
//                         <span>{row.sickLeave}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Casual Leave:
//                         </span>
//                         <span>{row.casualLeave}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Maternity Leave:
//                         </span>
//                         <span>{row.maternityLeave}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Paternity Leave:
//                         </span>
//                         <span>{row.paternityLeave}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Remarks:
//                         </span>
//                         <span>{row.remarks}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ============== Working Hours & OT ============== */}
//             {/* Desktop */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Working Hours & Overtime
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center w-48 max-w-48">
//                           Category
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Daily Hours
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Weekly Hours
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           OT Rate
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Night Shift Allowance
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Weekly Off
//                         </th>
//                         <th className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                           Remarks
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {stateData.workingHours.map((row, idx) => (
//                         <tr
//                           key={idx}
//                           className="hover:bg-orange-50 transition-colors"
//                         >
//                           <td className="px-3 py-4 text-sm text-gray-900 break-words w-48 max-w-48 text-justify">
//                             {row.category}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.dailyHours}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.weeklyHours}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.overtimeRate}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.nightShiftAllowance}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-center">
//                             {row.weeklyOff}
//                           </td>
//                           <td className="px-3 py-4 text-sm text-gray-900 text-center">
//                             {row.remarks}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold">
//                     Working Hours & Overtime
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {stateData.workingHours.map((row, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-gray-50 rounded-lg p-3 border text-xs space-y-2"
//                     >
//                       <div className="font-semibold text-orange-600 mb-2">
//                         {row.category}
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Daily Hours:
//                         </span>
//                         <span>{row.dailyHours}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Weekly Hours:
//                         </span>
//                         <span>{row.weeklyHours}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           OT Rate:
//                         </span>
//                         <span>{row.overtimeRate}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Night Shift:
//                         </span>
//                         <span>{row.nightShiftAllowance}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Weekly Off:
//                         </span>
//                         <span>{row.weeklyOff}</span>
//                       </div>
//                       <div className="flex gap-2 justify-between">
//                         <span className="font-medium text-gray-600">
//                           Remarks:
//                         </span>
//                         <span>{row.remarks}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* --------- Quick Actions --------- */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Forms */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     Download Forms
//                   </h3>
//                   <Button
//                     asChild
//                     size="sm"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8"
//                   >
//                     <a
//                       href={stateData.act.formLink || "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Download
//                     </a>
//                   </Button>
//                 </CardContent>
//               </Card>

//               {/* Leave Calculator */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     Leave Calculator
//                   </h3>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                   >
//                     Calculate
//                   </Button>
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     Official Website
//                   </h3>
//                   <Button
//                     asChild
//                     size="sm"
//                     variant="outline"
//                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8"
//                   >
//                     <a
//                       href={stateData.act.websiteLink || "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Visit Site
//                     </a>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="2xl:w-xs hidden lg:block lg:col-span-1">
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






















import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeavesWorkingHoursDetails from "@/app/_component/LeavesWorkingHours/LeavesWorkingHoursDetails/LeavesWorkingHoursDetails";

export const revalidate = 900; // ISR: 15 min

// ---- API Types (match exact payload) ----
type LWHApi = {
  data: {
    state: { name: string; slug: string };
    is_applicable: boolean;
    updated_date: string | null;
    effective_date: string | null;
    act_information: {
      headers: string[];
      rows: Record<string, string>[];
    };
    leave_entitlements: {
      headers: string[];
      rows: Record<string, string>[];
    };
    working_hours: {
      headers: string[];
      rows: Record<string, string>[];
    };
    tiles?: {
      form_title?: string | null;
      form_url?: string | null;
      website_title?: string | null;
      website_url?: string | null;
    };
  };
};

const API_BASE = "http://100.110.147.101:8000";

// (Optional) SEO from API (lightweight; if API fails, fallback)
export async function generateMetadata({
  params,
}: {
  params: { state: string };
}): Promise<Metadata> {
  try {
    const res = await fetch(`${API_BASE}/api/leaves-working-hours/${params.state}`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error("nope");
    const json = (await res.json()) as LWHApi;
    const name = json?.data?.state?.name ?? "State";
    return {
      title: `${name} - Leave & Working Hours | E-Library`,
      description: `Leave entitlements, working hour limits, OT, and references for ${name}.`,
    };
  } catch {
    return {
      title: "Leave & Working Hours | E-Library",
      description: "State-wise leave & working hours details.",
    };
  }
}

async function getStateLWH(slug: string): Promise<LWHApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/leaves-working-hours/${slug}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return (await res.json()) as LWHApi;
  } catch {
    return null;
  }
}

export default async function StateLeavesWorkingHoursPage({
  params,
}: {
  params: { state: string };
}) {
  const payload = await getStateLWH(params.state);
  if (!payload?.data?.state?.slug) notFound();

  return (
    <LeavesWorkingHoursDetails
      apiBase={API_BASE}
      initialData={payload.data}
    />
  );
}

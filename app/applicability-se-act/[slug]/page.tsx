// // "use client"
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Button } from "@/components/ui/button"
// // import { Badge } from "@/components/ui/badge"
// // import {
// //   ArrowLeft,
// //   Building2,
// //   FileText,
// //   Download,
// //   Calendar,
// //   Users,
// //   Clock,
// //   AlertTriangle,
// //   CheckCircle,
// //   XCircle,
// // } from "lucide-react"
// // import Link from "next/link"
// // import { useParams } from "next/navigation"

// // // Sample data for state details
// // const getStateDetails = (slug: string) => {
// //   const stateData = {
// //     "andhra-pradesh": {
// //       name: "Andhra Pradesh",
// //       code: "AP",
// //       applicable: true,
// //       act: "The Andhra Pradesh Shops and Commercial Establishments Act, 1988",
// //       lastUpdated: "15 March 2024",
// //       applicability: {
// //         shops: "Yes",
// //         commercial: "Yes",
// //         restaurants: "Yes",
// //         hotels: "Yes",
// //         theaters: "Yes",
// //         factories: "No",
// //       },
// //       workingHours: {
// //         daily: "9 hours",
// //         weekly: "48 hours",
// //         overtime: "After 9 hours daily",
// //       },
// //       holidays: [
// //         "26th January (Republic Day)",
// //         "15th August (Independence Day)",
// //         "2nd October (Gandhi Jayanti)",
// //         "State specific festivals as notified",
// //       ],
// //       registration: {
// //         required: true,
// //         fee: "₹500 - ₹2000 (based on employees)",
// //         validity: "Permanent",
// //         renewal: "Not required",
// //       },
// //       penalties: {
// //         nonRegistration: "₹500 - ₹2000",
// //         violations: "₹100 - ₹500 per violation",
// //         repeatOffense: "₹1000 - ₹5000",
// //       },
// //     },
// //     maharashtra: {
// //       name: "Maharashtra",
// //       code: "MH",
// //       applicable: true,
// //       act: "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017",
// //       lastUpdated: "10 February 2024",
// //       applicability: {
// //         shops: "Yes",
// //         commercial: "Yes",
// //         restaurants: "Yes",
// //         hotels: "Yes",
// //         theaters: "Yes",
// //         factories: "No",
// //       },
// //       workingHours: {
// //         daily: "9 hours",
// //         weekly: "48 hours",
// //         overtime: "After 9 hours daily",
// //       },
// //       holidays: [
// //         "26th January (Republic Day)",
// //         "15th August (Independence Day)",
// //         "2nd October (Gandhi Jayanti)",
// //         "Maharashtra Day",
// //         "Gudi Padwa",
// //       ],
// //       registration: {
// //         required: true,
// //         fee: "₹200 - ₹5000 (based on employees)",
// //         validity: "Permanent",
// //         renewal: "Not required",
// //       },
// //       penalties: {
// //         nonRegistration: "₹1000 - ₹5000",
// //         violations: "₹500 - ₹2000 per violation",
// //         repeatOffense: "₹2000 - ₹10000",
// //       },
// //     },
// //   }

// //   return (
// //     stateData[slug] || {
// //       name: "Sample State",
// //       code: "SS",
// //       applicable: true,
// //       act: "The Sample State Shops and Establishments Act",
// //       lastUpdated: "01 January 2024",
// //       applicability: {
// //         shops: "Yes",
// //         commercial: "Yes",
// //         restaurants: "Yes",
// //         hotels: "Yes",
// //         theaters: "Yes",
// //         factories: "No",
// //       },
// //       workingHours: {
// //         daily: "9 hours",
// //         weekly: "48 hours",
// //         overtime: "After 9 hours daily",
// //       },
// //       holidays: ["26th January (Republic Day)", "15th August (Independence Day)", "2nd October (Gandhi Jayanti)"],
// //       registration: {
// //         required: true,
// //         fee: "₹500 - ₹2000",
// //         validity: "Permanent",
// //         renewal: "Not required",
// //       },
// //       penalties: {
// //         nonRegistration: "₹500 - ₹2000",
// //         violations: "₹100 - ₹500 per violation",
// //         repeatOffense: "₹1000 - ₹5000",
// //       },
// //     }
// //   )
// // }

// // export default function StateDetailPage() {
// //   const params = useParams()
// //   const slug = params?.slug as string
// //   const stateDetails = getStateDetails(slug)

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Header */}
// //       <div className="bg-gradient-to-br from-orange-50 to-white border-b border-orange-100">
// //         <div className="container mx-auto px-4 py-8">
// //           <div className="max-w-4xl mx-auto">
// //             <Link
// //               href="/applicability-se-act"
// //               className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors"
// //             >
// //               <ArrowLeft className="w-4 h-4" />
// //               Back to Applicability List
// //             </Link>

// //             <div className="flex items-center gap-4 mb-6">
// //               <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
// //                 <Building2 className="w-8 h-8 text-white" />
// //               </div>
// //               <div>
// //                 <h1 className="text-3xl font-bold text-black">{stateDetails.name} - S&E Act Details</h1>
// //                 <p className="text-gray-600">State Code: {stateDetails.code}</p>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-4">
// //               <Badge
// //                 variant={stateDetails.applicable ? "default" : "secondary"}
// //                 className={stateDetails.applicable ? "bg-green-500" : "bg-red-500"}
// //               >
// //                 {stateDetails.applicable ? (
// //                   <CheckCircle className="w-4 h-4 mr-1" />
// //                 ) : (
// //                   <XCircle className="w-4 h-4 mr-1" />
// //                 )}
// //                 {stateDetails.applicable ? "Applicable" : "Not Applicable"}
// //               </Badge>
// //               <span className="text-sm text-gray-500">Last Updated: {stateDetails.lastUpdated}</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Content */}
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="max-w-6xl mx-auto grid gap-8">
// //           {/* Act Information */}
// //           <Card className="border-orange-200">
// //             <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <FileText className="w-6 h-6 text-orange-600" />
// //                 Act Information
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="space-y-4">
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Governing Act</h3>
// //                   <p className="text-gray-700">{stateDetails.act}</p>
// //                 </div>
// //                 <Button className="bg-orange-500 hover:bg-orange-600 text-white">
// //                   <Download className="w-4 h-4 mr-2" />
// //                   Download Act Document
// //                 </Button>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Applicability Matrix */}
// //           <Card className="border-orange-200">
// //             <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <Building2 className="w-6 h-6 text-orange-600" />
// //                 Applicability Matrix
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {Object.entries(stateDetails.applicability).map(([type, applicable]) => (
// //                   <div key={type} className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
// //                     <span className="font-medium text-black capitalize">{type}</span>
// //                     <Badge variant={applicable === "Yes" ? "default" : "secondary"}>
// //                       {applicable === "Yes" ? (
// //                         <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
// //                       ) : (
// //                         <XCircle className="w-3 h-3 mr-1 text-red-600" />
// //                       )}
// //                       {applicable}
// //                     </Badge>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Working Hours */}
// //           <Card className="border-orange-200">
// //             <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <Clock className="w-6 h-6 text-orange-600" />
// //                 Working Hours & Overtime
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="grid md:grid-cols-3 gap-6">
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Daily Hours</h3>
// //                   <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.daily}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Weekly Hours</h3>
// //                   <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.weekly}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Overtime</h3>
// //                   <p className="text-sm text-gray-700">{stateDetails.workingHours.overtime}</p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Registration Requirements */}
// //           <Card className="border-orange-200">
// //             <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <Users className="w-6 h-6 text-orange-600" />
// //                 Registration Requirements
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="grid md:grid-cols-2 gap-6">
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Registration Required</h3>
// //                   <Badge variant={stateDetails.registration.required ? "default" : "secondary"}>
// //                     {stateDetails.registration.required ? "Yes" : "No"}
// //                   </Badge>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Registration Fee</h3>
// //                   <p className="text-gray-700">{stateDetails.registration.fee}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Validity</h3>
// //                   <p className="text-gray-700">{stateDetails.registration.validity}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Renewal</h3>
// //                   <p className="text-gray-700">{stateDetails.registration.renewal}</p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Holidays */}
// //           <Card className="border-orange-200">
// //             <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <Calendar className="w-6 h-6 text-orange-600" />
// //                 Mandatory Holidays
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="grid gap-2">
// //                 {stateDetails.holidays.map((holiday, index) => (
// //                   <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200">
// //                     <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
// //                       <span className="text-sm font-semibold text-orange-700">{index + 1}</span>
// //                     </div>
// //                     <span className="text-gray-700">{holiday}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Penalties */}
// //           <Card className="border-red-200">
// //             <CardHeader className="bg-gradient-to-r from-red-50 to-red-100">
// //               <CardTitle className="flex items-center gap-3 text-black">
// //                 <AlertTriangle className="w-6 h-6 text-red-600" />
// //                 Penalties & Consequences
// //               </CardTitle>
// //             </CardHeader>
// //             <CardContent className="p-6">
// //               <div className="grid gap-4">
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Non-Registration</h3>
// //                   <p className="text-red-600 font-medium">{stateDetails.penalties.nonRegistration}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Act Violations</h3>
// //                   <p className="text-red-600 font-medium">{stateDetails.penalties.violations}</p>
// //                 </div>
// //                 <div>
// //                   <h3 className="font-semibold text-black mb-2">Repeat Offense</h3>
// //                   <p className="text-red-600 font-medium">{stateDetails.penalties.repeatOffense}</p>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }













// "use client"
// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   ArrowLeft,
//   Building2,
//   FileText,
//   Download,
//   Calendar,
//   Users,
//   Clock,
//   AlertTriangle,
//   CheckCircle,
//   XCircle,
// } from "lucide-react"
// import PopularSearch from "@/app/PopularSearch/PopularSearch"

// // Sample data for state details
// const getStateDetails = (slug) => {
//   const stateData = {
//     "andhra-pradesh": {
//       name: "Andhra Pradesh",
//       code: "AP",
//       applicable: true,
//       act: "The Andhra Pradesh Shops and Commercial Establishments Act, 1988",
//       lastUpdated: "15 March 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: [
//         "26th January (Republic Day)",
//         "15th August (Independence Day)",
//         "2nd October (Gandhi Jayanti)",
//         "State specific festivals as notified",
//       ],
//       registration: {
//         required: true,
//         fee: "₹500 - ₹2000 (based on employees)",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹500 - ₹2000",
//         violations: "₹100 - ₹500 per violation",
//         repeatOffense: "₹1000 - ₹5000",
//       },
//     },
//     maharashtra: {
//       name: "Maharashtra",
//       code: "MH",
//       applicable: true,
//       act: "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017",
//       lastUpdated: "10 February 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: [
//         "26th January (Republic Day)",
//         "15th August (Independence Day)",
//         "2nd October (Gandhi Jayanti)",
//         "Maharashtra Day",
//         "Gudi Padwa",
//       ],
//       registration: {
//         required: true,
//         fee: "₹200 - ₹5000 (based on employees)",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹1000 - ₹5000",
//         violations: "₹500 - ₹2000 per violation",
//         repeatOffense: "₹2000 - ₹10000",
//       },
//     },
//   }

//   return (
//     stateData[slug] || {
//       name: "Sample State",
//       code: "SS",
//       applicable: true,
//       act: "The Sample State Shops and Establishments Act",
//       lastUpdated: "01 January 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: ["26th January (Republic Day)", "15th August (Independence Day)", "2nd October (Gandhi Jayanti)"],
//       registration: {
//         required: true,
//         fee: "₹500 - ₹2000",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹500 - ₹2000",
//         violations: "₹100 - ₹500 per violation",
//         repeatOffense: "₹1000 - ₹5000",
//       },
//     }
//   )
// }

// export default function StateDetailPage() {
//   // For demo purposes, using a default slug
//   const slug = "andhra-pradesh"
//   const stateDetails = getStateDetails(slug)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-8">
//           <div className="max-w-4xl mx-auto">
//             <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors">
//               <ArrowLeft className="w-4 h-4" />
//               Back to Applicability List
//             </button>

//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold text-slate-800">{stateDetails.name} - S&E Act Details</h1>
//                 <p className="text-gray-600">State Code: {stateDetails.code}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <Badge
//                 className={stateDetails.applicable ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}
//               >
//                 {stateDetails.applicable ? (
//                   <CheckCircle className="w-4 h-4 mr-1" />
//                 ) : (
//                   <XCircle className="w-4 h-4 mr-1" />
//                 )}
//                 {stateDetails.applicable ? "Applicable" : "Not Applicable"}
//               </Badge>
//               <span className="text-sm text-gray-500">Last Updated: {stateDetails.lastUpdated}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto grid gap-8">
//           {/* Act Information */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                 <FileText className="w-6 h-6 text-orange-600" />
//                 Act Information
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="space-y-4">
//                 <div>
//                   <h3 className="font-semibold text-slate-800 mb-2">Governing Act</h3>
//                   <p className="text-gray-700">{stateDetails.act}</p>
//                 </div>
//                 <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//                   <Download className="w-4 h-4 mr-2" />
//                   Download Act Document
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Applicability Matrix */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                 <Building2 className="w-6 h-6 text-orange-600" />
//                 Applicability Matrix
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {Object.entries(stateDetails.applicability).map(([type, applicable]) => (
//                   <div key={type} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
//                     <span className="font-medium text-slate-800 capitalize">{type}</span>
//                     <Badge className={applicable === "Yes" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
//                       {applicable === "Yes" ? (
//                         <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
//                       ) : (
//                         <XCircle className="w-3 h-3 mr-1 text-red-600" />
//                       )}
//                       {applicable}
//                     </Badge>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Working Hours */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                 <Clock className="w-6 h-6 text-orange-600" />
//                 Working Hours & Overtime
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid md:grid-cols-3 gap-6">
//                 <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                   <h3 className="font-semibold text-slate-800 mb-2">Daily Hours</h3>
//                   <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.daily}</p>
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                   <h3 className="font-semibold text-slate-800 mb-2">Weekly Hours</h3>
//                   <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.weekly}</p>
//                 </div>
//                 <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                   <h3 className="font-semibold text-slate-800 mb-2">Overtime</h3>
//                   <p className="text-sm text-gray-700">{stateDetails.workingHours.overtime}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Registration Requirements */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                 <Users className="w-6 h-6 text-orange-600" />
//                 Registration Requirements
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Registration Required</h3>
//                   <Badge className={stateDetails.registration.required ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
//                     {stateDetails.registration.required ? "Yes" : "No"}
//                   </Badge>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Registration Fee</h3>
//                   <p className="text-gray-700 font-medium">{stateDetails.registration.fee}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Validity</h3>
//                   <p className="text-gray-700 font-medium">{stateDetails.registration.validity}</p>
//                 </div>
//                 <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Renewal</h3>
//                   <p className="text-gray-700 font-medium">{stateDetails.registration.renewal}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Holidays */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                 <Calendar className="w-6 h-6 text-orange-600" />
//                 Mandatory Holidays
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid gap-3">
//                 {stateDetails.holidays.map((holiday, index) => (
//                   <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
//                     <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
//                       <span className="text-sm font-semibold text-orange-700">{index + 1}</span>
//                     </div>
//                     <span className="text-gray-700">{holiday}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>

//           {/* Penalties */}
//           <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-red-600 transition-colors">
//                 <AlertTriangle className="w-6 h-6 text-red-600" />
//                 Penalties & Consequences
//               </CardTitle>
//             </CardHeader>
//             <CardContent className="p-6">
//               <div className="grid gap-4">
//                 <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Non-Registration</h3>
//                   <p className="text-red-600 font-medium">{stateDetails.penalties.nonRegistration}</p>
//                 </div>
//                 <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Act Violations</h3>
//                   <p className="text-red-600 font-medium">{stateDetails.penalties.violations}</p>
//                 </div>
//                 <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                   <h3 className="font-semibold text-slate-800 mb-2">Repeat Offense</h3>
//                   <p className="text-red-600 font-medium">{stateDetails.penalties.repeatOffense}</p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//          <div className="lg:col-span-1">
//             <div className="sticky top-4 space-y-6">
//               <Card className="group hover:shadow-lg transition-all duration-300">
//                 <CardContent className="p-6">
//                   <PopularSearch />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
     
//       </div>
      
//     </div>
//   )
// }




// "use client"
// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   ArrowLeft,
//   Building2,
//   FileText,
//   Download,
//   Calendar,
//   Users,
//   Clock,
//   AlertTriangle,
//   CheckCircle,
//   XCircle,
// } from "lucide-react"
// import PopularSearch from "@/app/PopularSearch/PopularSearch"

// // Sample data for state details
// const getStateDetails = (slug) => {
//   const stateData = {
//     "andhra-pradesh": {
//       name: "Andhra Pradesh",
//       code: "AP",
//       applicable: true,
//       act: "The Andhra Pradesh Shops and Commercial Establishments Act, 1988",
//       lastUpdated: "15 March 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: [
//         "26th January (Republic Day)",
//         "15th August (Independence Day)",
//         "2nd October (Gandhi Jayanti)",
//         "State specific festivals as notified",
//       ],
//       registration: {
//         required: true,
//         fee: "₹500 - ₹2000 (based on employees)",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹500 - ₹2000",
//         violations: "₹100 - ₹500 per violation",
//         repeatOffense: "₹1000 - ₹5000",
//       },
//     },
//     maharashtra: {
//       name: "Maharashtra",
//       code: "MH",
//       applicable: true,
//       act: "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017",
//       lastUpdated: "10 February 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: [
//         "26th January (Republic Day)",
//         "15th August (Independence Day)",
//         "2nd October (Gandhi Jayanti)",
//         "Maharashtra Day",
//         "Gudi Padwa",
//       ],
//       registration: {
//         required: true,
//         fee: "₹200 - ₹5000 (based on employees)",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹1000 - ₹5000",
//         violations: "₹500 - ₹2000 per violation",
//         repeatOffense: "₹2000 - ₹10000",
//       },
//     },
//   }

//   return (
//     stateData[slug] || {
//       name: "Sample State",
//       code: "SS",
//       applicable: true,
//       act: "The Sample State Shops and Establishments Act",
//       lastUpdated: "01 January 2024",
//       applicability: {
//         shops: "Yes",
//         commercial: "Yes",
//         restaurants: "Yes",
//         hotels: "Yes",
//         theaters: "Yes",
//         factories: "No",
//       },
//       workingHours: {
//         daily: "9 hours",
//         weekly: "48 hours",
//         overtime: "After 9 hours daily",
//       },
//       holidays: ["26th January (Republic Day)", "15th August (Independence Day)", "2nd October (Gandhi Jayanti)"],
//       registration: {
//         required: true,
//         fee: "₹500 - ₹2000",
//         validity: "Permanent",
//         renewal: "Not required",
//       },
//       penalties: {
//         nonRegistration: "₹500 - ₹2000",
//         violations: "₹100 - ₹500 per violation",
//         repeatOffense: "₹1000 - ₹5000",
//       },
//     }
//   )
// }

// export default function StateDetailPage() {
//   // For demo purposes, using a default slug
//   const slug = "andhra-pradesh"
//   const stateDetails = getStateDetails(slug)

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="container mx-auto px-4 py-8">
//           <div className="max-w-6xl mx-auto">
//             <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors">
//               <ArrowLeft className="w-4 h-4" />
//               Back to Applicability List
//             </button>

//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
//                 <Building2 className="w-8 h-8 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold text-slate-800">{stateDetails.name} - S&E Act Details</h1>
//                 <p className="text-gray-600">State Code: {stateDetails.code}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <Badge
//                 className={stateDetails.applicable ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}
//               >
//                 {stateDetails.applicable ? (
//                   <CheckCircle className="w-4 h-4 mr-1" />
//                 ) : (
//                   <XCircle className="w-4 h-4 mr-1" />
//                 )}
//                 {stateDetails.applicable ? "Applicable" : "Not Applicable"}
//               </Badge>
//               <span className="text-sm text-gray-500">Last Updated: {stateDetails.lastUpdated}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Act Information */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                   <FileText className="w-6 h-6 text-orange-600" />
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="space-y-4">
//                   <div>
//                     <h3 className="font-semibold text-slate-800 mb-2">Governing Act</h3>
//                     <p className="text-gray-700">{stateDetails.act}</p>
//                   </div>
//                   <Button className="bg-orange-500 hover:bg-orange-600 text-white">
//                     <Download className="w-4 h-4 mr-2" />
//                     Download Act Document
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Applicability Matrix */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                   <Building2 className="w-6 h-6 text-orange-600" />
//                   Applicability Matrix
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   {Object.entries(stateDetails.applicability).map(([type, applicable]) => (
//                     <div key={type} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
//                       <span className="font-medium text-slate-800 capitalize">{type}</span>
//                       <Badge className={applicable === "Yes" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
//                         {applicable === "Yes" ? (
//                           <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
//                         ) : (
//                           <XCircle className="w-3 h-3 mr-1 text-red-600" />
//                         )}
//                         {applicable}
//                       </Badge>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Working Hours */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                   <Clock className="w-6 h-6 text-orange-600" />
//                   Working Hours & Overtime
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid md:grid-cols-3 gap-6">
//                   <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                     <h3 className="font-semibold text-slate-800 mb-2">Daily Hours</h3>
//                     <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.daily}</p>
//                   </div>
//                   <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                     <h3 className="font-semibold text-slate-800 mb-2">Weekly Hours</h3>
//                     <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.weekly}</p>
//                   </div>
//                   <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
//                     <h3 className="font-semibold text-slate-800 mb-2">Overtime</h3>
//                     <p className="text-sm text-gray-700">{stateDetails.workingHours.overtime}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Registration Requirements */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                   <Users className="w-6 h-6 text-orange-600" />
//                   Registration Requirements
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Registration Required</h3>
//                     <Badge className={stateDetails.registration.required ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
//                       {stateDetails.registration.required ? "Yes" : "No"}
//                     </Badge>
//                   </div>
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Registration Fee</h3>
//                     <p className="text-gray-700 font-medium">{stateDetails.registration.fee}</p>
//                   </div>
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Validity</h3>
//                     <p className="text-gray-700 font-medium">{stateDetails.registration.validity}</p>
//                   </div>
//                   <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Renewal</h3>
//                     <p className="text-gray-700 font-medium">{stateDetails.registration.renewal}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Holidays */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
//                   <Calendar className="w-6 h-6 text-orange-600" />
//                   Mandatory Holidays
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid gap-3">
//                   {stateDetails.holidays.map((holiday, index) => (
//                     <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
//                       <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
//                         <span className="text-sm font-semibold text-orange-700">{index + 1}</span>
//                       </div>
//                       <span className="text-gray-700">{holiday}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Penalties */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-red-600 transition-colors">
//                   <AlertTriangle className="w-6 h-6 text-red-600" />
//                   Penalties & Consequences
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid gap-4">
//                   <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Non-Registration</h3>
//                     <p className="text-red-600 font-medium">{stateDetails.penalties.nonRegistration}</p>
//                   </div>
//                   <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Act Violations</h3>
//                     <p className="text-red-600 font-medium">{stateDetails.penalties.violations}</p>
//                   </div>
//                   <div className="p-4 bg-red-50 rounded-lg border border-red-200">
//                     <h3 className="font-semibold text-slate-800 mb-2">Repeat Offense</h3>
//                     <p className="text-red-600 font-medium">{stateDetails.penalties.repeatOffense}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar - Popular Search */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-4 space-y-6">
//               <Card className="group hover:shadow-lg transition-all duration-300">
//                 <CardContent className="p-6">
//                   <PopularSearch />
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
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Building2,
  FileText,
  Download,
  Calendar,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react"
import PopularSearch from "@/app/PopularSearch/PopularSearch"

// Sample data for state details
const getStateDetails = (slug) => {
  const stateData = {
    "andhra-pradesh": {
      name: "Andhra Pradesh",
      code: "AP",
      applicable: true,
      act: "The Andhra Pradesh Shops and Commercial Establishments Act, 1988",
      lastUpdated: "15 March 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: [
        "26th January (Republic Day)",
        "15th August (Independence Day)",
        "2nd October (Gandhi Jayanti)",
        "State specific festivals as notified",
      ],
      registration: {
        required: true,
        fee: "₹500 - ₹2000 (based on employees)",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹500 - ₹2000",
        violations: "₹100 - ₹500 per violation",
        repeatOffense: "₹1000 - ₹5000",
      },
    },
    maharashtra: {
      name: "Maharashtra",
      code: "MH",
      applicable: true,
      act: "The Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act, 2017",
      lastUpdated: "10 February 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: [
        "26th January (Republic Day)",
        "15th August (Independence Day)",
        "2nd October (Gandhi Jayanti)",
        "Maharashtra Day",
        "Gudi Padwa",
      ],
      registration: {
        required: true,
        fee: "₹200 - ₹5000 (based on employees)",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹1000 - ₹5000",
        violations: "₹500 - ₹2000 per violation",
        repeatOffense: "₹2000 - ₹10000",
      },
    },
  }

  return (
    stateData[slug] || {
      name: "Sample State",
      code: "SS",
      applicable: true,
      act: "The Sample State Shops and Establishments Act",
      lastUpdated: "01 January 2024",
      applicability: {
        shops: "Yes",
        commercial: "Yes",
        restaurants: "Yes",
        hotels: "Yes",
        theaters: "Yes",
        factories: "No",
      },
      workingHours: {
        daily: "9 hours",
        weekly: "48 hours",
        overtime: "After 9 hours daily",
      },
      holidays: ["26th January (Republic Day)", "15th August (Independence Day)", "2nd October (Gandhi Jayanti)"],
      registration: {
        required: true,
        fee: "₹500 - ₹2000",
        validity: "Permanent",
        renewal: "Not required",
      },
      penalties: {
        nonRegistration: "₹500 - ₹2000",
        violations: "₹100 - ₹500 per violation",
        repeatOffense: "₹1000 - ₹5000",
      },
    }
  )
}

export default function StateDetailPage() {
  // For demo purposes, using a default slug
  const slug = "andhra-pradesh"
  const stateDetails = getStateDetails(slug)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <button className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Applicability List
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800">{stateDetails.name} - S&E Act Details</h1>
                <p className="text-gray-600">State Code: {stateDetails.code}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Badge
                className={stateDetails.applicable ? "bg-green-500 hover:bg-green-600 text-white" : "bg-red-500 hover:bg-red-600 text-white"}
              >
                {stateDetails.applicable ? (
                  <CheckCircle className="w-4 h-4 mr-1" />
                ) : (
                  <XCircle className="w-4 h-4 mr-1" />
                )}
                {stateDetails.applicable ? "Applicable" : "Not Applicable"}
              </Badge>
              <span className="text-sm text-gray-500">Last Updated: {stateDetails.lastUpdated}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Act Information */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
                  <FileText className="w-6 h-6 text-orange-600" />
                  Act Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-2">Governing Act</h3>
                    <p className="text-gray-700">{stateDetails.act}</p>
                  </div>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Act Document
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Applicability Matrix */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Building2 className="w-6 h-6 text-orange-600" />
                  Applicability Matrix
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {Object.entries(stateDetails.applicability).map(([type, applicable]) => (
                    <div key={type} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-slate-800 capitalize">{type}</span>
                      <Badge className={applicable === "Yes" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
                        {applicable === "Yes" ? (
                          <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                        ) : (
                          <XCircle className="w-3 h-3 mr-1 text-red-600" />
                        )}
                        {applicable}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Clock className="w-6 h-6 text-orange-600" />
                  Working Hours & Overtime
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Daily Hours</h3>
                    <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.daily}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Weekly Hours</h3>
                    <p className="text-2xl font-bold text-orange-600">{stateDetails.workingHours.weekly}</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <h3 className="font-semibold text-slate-800 mb-2">Overtime</h3>
                    <p className="text-sm text-gray-700">{stateDetails.workingHours.overtime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registration Requirements */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Users className="w-6 h-6 text-orange-600" />
                  Registration Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Registration Required</h3>
                    <Badge className={stateDetails.registration.required ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}>
                      {stateDetails.registration.required ? "Yes" : "No"}
                    </Badge>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Registration Fee</h3>
                    <p className="text-gray-700 font-medium">{stateDetails.registration.fee}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Validity</h3>
                    <p className="text-gray-700 font-medium">{stateDetails.registration.validity}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Renewal</h3>
                    <p className="text-gray-700 font-medium">{stateDetails.registration.renewal}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Holidays */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-orange-600 transition-colors">
                  <Calendar className="w-6 h-6 text-orange-600" />
                  Mandatory Holidays
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-3">
                  {stateDetails.holidays.map((holiday, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-semibold text-orange-700">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{holiday}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Penalties */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-slate-800 group-hover:text-red-600 transition-colors">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  Penalties & Consequences
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Non-Registration</h3>
                    <p className="text-red-600 font-medium">{stateDetails.penalties.nonRegistration}</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Act Violations</h3>
                    <p className="text-red-600 font-medium">{stateDetails.penalties.violations}</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <h3 className="font-semibold text-slate-800 mb-2">Repeat Offense</h3>
                    <p className="text-red-600 font-medium">{stateDetails.penalties.repeatOffense}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar - Popular Search */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <PopularSearch />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
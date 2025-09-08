
// import type { Metadata } from "next"
// import { notFound } from "next/navigation"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Download, ExternalLink, FileText, Calendar } from 'lucide-react'
// import PopularSearch from "@/app/PopularSearch/PopularSearch"

// // ------------------- DATA -------------------

// interface StateData {
//   name: string
//   act: string
//   rule: string
//   applicability: string
//   frequency: string
//   form: string
//   website: string
//   lastUpdated: string
//   contributions: {
//     category: string
//     employeeContribution: string
//     employerContribution: string
//     totalContribution: string
//     dateOfDeduction: string
//     lastDateForSubmission: string
//     remarks: string
//   }[]
// }

// const stateData: Record<string, StateData> = {
//   "andhra-pradesh": {
//     name: "Andhra Pradesh",
//     act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
//     rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
//     applicability:
//       "Any Employer/Establishment employing one or more employees/persons",
//     frequency: "Yearly",
//     form: "FORM F.xlsx",
//     website:
//       "http://labour.ap.gov.in/LabourViews/RecentAmendementNewActs.aspx",
//     lastUpdated: "3rd Oct, 2024",
//     contributions: [
//       {
//         category:
//           "All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis",
//         employeeContribution: "30.00",
//         employerContribution: "70.00",
//         totalContribution: "100.00",
//         dateOfDeduction: "31st December",
//         lastDateForSubmission: "31st January",
//         remarks: "-",
//       },
//     ],
//   },
//   "maharashtra": {
//     name: "Maharashtra",
//     act: "Maharashtra Labour Welfare Fund Act, 1953",
//     rule: "The Maharashtra Labour Welfare Fund Rules, 1954",
//     applicability: "Any Employer/Establishment employing 5 or more employees",
//     frequency: "Half Yearly",
//     form: "FORM A.pdf",
//     website: "https://mahakamgar.maharashtra.gov.in/",
//     lastUpdated: "15th Sep, 2024",
//     contributions: [
//       {
//         category: "All employees drawing wages up to Rs. 21,000 per month",
//         employeeContribution: "42.00",
//         employerContribution: "84.00",
//         totalContribution: "126.00",
//         dateOfDeduction: "30th June & 31st December",
//         lastDateForSubmission: "31st July & 31st January",
//         remarks: "Revised rates w.e.f. 1st April 2024",
//       },
//     ],
//   },
//   "karnataka": {
//     name: "Karnataka",
//     act: "Karnataka Labour Welfare Fund Act, 1965",
//     rule: "The Karnataka Labour Welfare Fund Rules, 1966",
//     applicability: "Any Employer/Establishment employing 5 or more employees",
//     frequency: "Half Yearly",
//     form: "FORM LWF-1.pdf",
//     website: "https://labour.karnataka.gov.in/",
//     lastUpdated: "20th Aug, 2024",
//     contributions: [
//       {
//         category: "All employees drawing wages up to Rs. 25,000 per month",
//         employeeContribution: "20.00",
//         employerContribution: "40.00",
//         totalContribution: "60.00",
//         dateOfDeduction: "30th June & 31st December",
//         lastDateForSubmission: "15th July & 15th January",
//         remarks: "Online filing mandatory",
//       },
//     ],
//   },
//   "tamil-nadu": {
//     name: "Tamil Nadu",
//     act: "Tamil Nadu Labour Welfare Fund Act, 1972",
//     rule: "Tamil Nadu Labour Welfare Fund Rules, 1973",
//     applicability: "Any Employer/Establishment employing 5 or more employees",
//     frequency: "Yearly",
//     form: "LWF Form TN.pdf",
//     website: "https://www.tn.gov.in/labour/",
//     lastUpdated: "1st Oct, 2024",
//     contributions: [
//       {
//         category: "All employees",
//         employeeContribution: "20.00",
//         employerContribution: "40.00",
//         totalContribution: "60.00",
//         dateOfDeduction: "31st December",
//         lastDateForSubmission: "31st January",
//         remarks: "-",
//       },
//     ],
//   },
//   "west-bengal": {
//     name: "West Bengal",
//     act: "West Bengal Labour Welfare Fund Act, 1974",
//     rule: "West Bengal Labour Welfare Fund Rules, 1976",
//     applicability: "As notified",
//     frequency: "Yearly",
//     form: "WB-LWF.pdf",
//     website: "https://wb.gov.in/",
//     lastUpdated: "12th Jul, 2024",
//     contributions: [
//       {
//         category: "All employees",
//         employeeContribution: "10.00",
//         employerContribution: "20.00",
//         totalContribution: "30.00",
//         dateOfDeduction: "31st December",
//         lastDateForSubmission: "31st January",
//         remarks: "-",
//       },
//     ],
//   },
// }

// const APPLICABLE = [
//   "Andhra Pradesh",
//   "Chandigarh",
//   "Chhattisgarh",
//   "Delhi",
//   "Goa",
//   "Gujarat",
//   "Haryana",
//   "Karnataka",
//   "Kerala",
//   "Madhya Pradesh",
//   "Odisha",
//   "Maharashtra",
//   "Punjab",
//   "Tamil Nadu",
//   "Telangana",
//   "West Bengal",
// ]

// const NON_APPLICABLE = [
//   "Andaman and Nicobar Islands",
//   "Arunachal Pradesh",
//   "Assam",
//   "Bihar",
//   "Dadra and Nagar Haveli",
//   "Daman and Diu",
//   "Himachal Pradesh",
//   "Jammu and Kashmir",
//   "Jharkhand",
//   "Ladakh",
//   "Lakshadweep",
//   "Manipur",
//   "Meghalaya",
//   "Mizoram",
//   "Nagaland",
//   "Puducherry",
//   "Rajasthan",
//   "Sikkim",
//   "Tripura",
//   "Uttar Pradesh",
//   "Uttarakhand",
// ]

// type PageProps = {
//   params: { state: string }
// }

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const data = stateData[params.state]
//   if (!data) {
//     return { title: "State Not Found | Labour Welfare Fund" }
//   }
//   return {
//     title: `${data.name} Labour Welfare Fund - Contribution Rates & Forms | E-Library`,
//     description: `Complete guide to ${data.name} Labour Welfare Fund contribution rates, forms, compliance requirements and official information.`,
//     keywords: `${data.name.toLowerCase()} labour welfare fund, LWF, contribution rates, forms, compliance`,
//   }
// }

// // ------------------- PAGE -------------------

// export default function StateWelfareFundPage({ params }: PageProps) {
//   const data = stateData[params.state]
//   if (!data) {
//     notFound()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         {/* Popular Search - Top for Mobile/Tablet */}
//         <div className="lg:hidden mb-6">
//           <Card className="">
//             <CardContent className="p-4">
//               <PopularSearch className="mb-0" />
//             </CardContent>
//           </Card>
//         </div>

//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8 flex justify-between">
//               <h1 className="text-3xl font-bold text-slate-800 mb-2">
//                 Labour Welfare Fund :
//               </h1>
//               <h2 className="text-xl text-orange-600 font-semibold">
//                 {data.name}
//               </h2>
//             </div>

//             {/* Act Details Table */}
//             <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle>Act Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Act</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Rule</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Applicability</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Frequency</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Form</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Website</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white">
//                       <tr className="hover:bg-orange-50">
//                         <td className="px-6 py-4 text-sm text-gray-900">{data.act}</td>
//                         <td className="px-6 py-4 text-sm text-gray-900">{data.rule}</td>
//                         <td className="px-6 py-4 text-sm text-gray-900">{data.applicability}</td>
//                         <td className="px-6 py-4 text-sm text-gray-900">
//                           <Badge variant="secondary" className="bg-green-100 text-green-800">{data.frequency}</Badge>
//                         </td>
//                         <td className="px-6 py-4 text-sm">
//                           <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0" aria-label="Download form">
//                             <FileText className="h-4 w-4 mr-1" />
//                             {data.form}
//                           </Button>
//                         </td>
//                         <td className="px-6 py-4 text-sm">
//                           <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0" aria-label="Visit official site">
//                             <ExternalLink className="h-4 w-4 mr-1" />
//                             Official Site
//                           </Button>
//                         </td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Contribution Details */}
//             <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-center">Labour Welfare Fund Contribution</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         <th className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Category</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Employee Contribution</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Employer Contribution</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Total Contribution</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Date Of Deduction</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Last Date For Submission</th>
//                         <th className="px-4 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">Remarks</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {data.contributions.map((contribution, index) => (
//                         <tr key={index} className="hover:bg-orange-50">
//                           <td className="px-4 py-4 text-sm text-gray-900 max-w-xs">{contribution.category}</td>
//                           <td className="px-4 py-4 text-sm text-center text-green-600 font-semibold">₹{contribution.employeeContribution}</td>
//                           <td className="px-4 py-4 text-sm text-center text-green-600 font-semibold">₹{contribution.employerContribution}</td>
//                           <td className="px-4 py-4 text-sm text-center font-bold text-green-600">₹{contribution.totalContribution}</td>
//                           <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.dateOfDeduction}</td>
//                           <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.lastDateForSubmission}</td>
//                           <td className="px-4 py-4 text-sm text-center text-gray-900">{contribution.remarks}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <div className="grid md:grid-cols-3 gap-6 mb-8">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500">
//                 <CardContent className="pt-6">
//                   <Download className="h-8 w-8 text-orange-500 mx-auto mb-3" />
//                   <h3 className="font-medium mb-2">Download Form</h3>
//                   <Button 
//                     size="sm" 
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
//                     aria-label="Download form"
//                   >
//                     Download {data.form}
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500">
//                 <CardContent className="pt-6">
//                   <ExternalLink className="h-8 w-8 text-orange-500 mx-auto mb-3" />
//                   <h3 className="font-medium mb-2">Official Website</h3>
//                   <Button 
//                     size="sm" 
//                     variant="outline" 
//                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600" 
//                     aria-label="Visit official website"
//                   >
//                     Visit Website
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500">
//                 <CardContent className="pt-6">
//                   <Calendar className="h-8 w-8 text-orange-500 mx-auto mb-3" />
//                   <h3 className="font-medium mb-2">Due Dates</h3>
//                   <Button 
//                     size="sm" 
//                     variant="outline" 
//                     className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600" 
//                     aria-label="View calendar"
//                   >
//                     View Calendar
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Important Notes */}
//             <Card className="border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-lg">Important Notes</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                   <p className="text-sm text-gray-700">
//                     Contribution rates are subject to periodic revision by the state government.
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                   <p className="text-sm text-gray-700">
//                     Late submission may attract penalties as per state rules.
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                   <p className="text-sm text-gray-700">
//                     Employers must maintain proper records of contributions made.
//                   </p>
//                 </div>
//                 <div className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                   <p className="text-sm text-gray-700">
//                     Check official website for latest updates and notifications.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar - Popular Search (Desktop Only) */}
//           <div className="hidden lg:block lg:col-span-1">
//             <div className="sticky top-24">
//               <Card className="git sta">
//                 <CardContent>
//                   <PopularSearch className="mb-6" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export async function generateStaticParams() {
//   return Object.keys(stateData).map((state) => ({ state }))
// }

















import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, FileText, Calendar } from 'lucide-react'
import PopularSearch from "@/app/PopularSearch/PopularSearch"

// ------------------- DATA -------------------

interface StateData {
  name: string
  act: string
  rule: string
  applicability: string
  frequency: string
  form: string
  website: string
  lastUpdated: string
  contributions: {
    category: string
    employeeContribution: string
    employerContribution: string
    totalContribution: string
    dateOfDeduction: string
    lastDateForSubmission: string
    remarks: string
  }[]
}

const stateData: Record<string, StateData> = {
  "andhra-pradesh": {
    name: "Andhra Pradesh",
    act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
    rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
    applicability:
      "Any Employer/Establishment employing one or more employees/persons",
    frequency: "Yearly",
    form: "FORM F.xlsx",
    website:
      "http://labour.ap.gov.in/LabourViews/RecentAmendementNewActs.aspx",
    lastUpdated: "3rd Oct, 2024",
    contributions: [
      {
        category:
          "All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis",
        employeeContribution: "30.00",
        employerContribution: "70.00",
        totalContribution: "100.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
  "maharashtra": {
    name: "Maharashtra",
    act: "Maharashtra Labour Welfare Fund Act, 1953",
    rule: "The Maharashtra Labour Welfare Fund Rules, 1954",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Half Yearly",
    form: "FORM A.pdf",
    website: "https://mahakamgar.maharashtra.gov.in/",
    lastUpdated: "15th Sep, 2024",
    contributions: [
      {
        category: "All employees drawing wages up to Rs. 21,000 per month",
        employeeContribution: "42.00",
        employerContribution: "84.00",
        totalContribution: "126.00",
        dateOfDeduction: "30th June & 31st December",
        lastDateForSubmission: "31st July & 31st January",
        remarks: "Revised rates w.e.f. 1st April 2024",
      },
    ],
  },
  "karnataka": {
    name: "Karnataka",
    act: "Karnataka Labour Welfare Fund Act, 1965",
    rule: "The Karnataka Labour Welfare Fund Rules, 1966",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Half Yearly",
    form: "FORM LWF-1.pdf",
    website: "https://labour.karnataka.gov.in/",
    lastUpdated: "20th Aug, 2024",
    contributions: [
      {
        category: "All employees drawing wages up to Rs. 25,000 per month",
        employeeContribution: "20.00",
        employerContribution: "40.00",
        totalContribution: "60.00",
        dateOfDeduction: "30th June & 31st December",
        lastDateForSubmission: "15th July & 15th January",
        remarks: "Online filing mandatory",
      },
    ],
  },
  "tamil-nadu": {
    name: "Tamil Nadu",
    act: "Tamil Nadu Labour Welfare Fund Act, 1972",
    rule: "Tamil Nadu Labour Welfare Fund Rules, 1973",
    applicability: "Any Employer/Establishment employing 5 or more employees",
    frequency: "Yearly",
    form: "LWF Form TN.pdf",
    website: "https://www.tn.gov.in/labour/",
    lastUpdated: "1st Oct, 2024",
    contributions: [
      {
        category: "All employees",
        employeeContribution: "20.00",
        employerContribution: "40.00",
        totalContribution: "60.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
  "west-bengal": {
    name: "West Bengal",
    act: "West Bengal Labour Welfare Fund Act, 1974",
    rule: "West Bengal Labour Welfare Fund Rules, 1976",
    applicability: "As notified",
    frequency: "Yearly",
    form: "WB-LWF.pdf",
    website: "https://wb.gov.in/",
    lastUpdated: "12th Jul, 2024",
    contributions: [
      {
        category: "All employees",
        employeeContribution: "10.00",
        employerContribution: "20.00",
        totalContribution: "30.00",
        dateOfDeduction: "31st December",
        lastDateForSubmission: "31st January",
        remarks: "-",
      },
    ],
  },
}

const APPLICABLE = [
  "Andhra Pradesh",
  "Chandigarh",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Odisha",
  "Maharashtra",
  "Punjab",
  "Tamil Nadu",
  "Telangana",
  "West Bengal",
]

const NON_APPLICABLE = [
  "Andaman and Nicobar Islands",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Ladakh",
  "Lakshadweep",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Puducherry",
  "Rajasthan",
  "Sikkim",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
]

type PageProps = {
  params: { state: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const data = stateData[params.state]
  if (!data) {
    return { title: "State Not Found | Labour Welfare Fund" }
  }
  return {
    title: `${data.name} Labour Welfare Fund - Contribution Rates & Forms | E-Library`,
    description: `Complete guide to ${data.name} Labour Welfare Fund contribution rates, forms, compliance requirements and official information.`,
    keywords: `${data.name.toLowerCase()} labour welfare fund, LWF, contribution rates, forms, compliance`,
  }
}

// ------------------- PAGE -------------------

export default function StateWelfareFundPage({ params }: PageProps) {
  const data = stateData[params.state]
  if (!data) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        
        {/* Popular Search - Top for Mobile/Tablet */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Page Header */}
            <div className="mb-4 sm:mb-5 lg:mb-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4 lg:mb-3">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800 leading-tight">
                  Labour Welfare Fund :
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                  {data.name}
                </h2>
              </div>
            </div>

            {/* Act Details - Mobile Card View */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold">Act Information</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="space-y-2 text-xs">
                        <div><span className="font-medium text-orange-600">Act:</span> {data.act}</div>
                        <div><span className="font-medium text-orange-600">Rule:</span> {data.rule}</div>
                        <div><span className="font-medium text-orange-600">Applicability:</span> {data.applicability}</div>
                        <div><span className="font-medium text-orange-600">Frequency:</span> <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">{data.frequency}</Badge></div>
                        <div><span className="font-medium text-orange-600">Form:</span> {data.form}</div>
                        <div><span className="font-medium text-orange-600">Updated:</span> {data.lastUpdated}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Act Details - Desktop Table */}
            <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-orange-500 hover:bg-orange-500">
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Act</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Rule</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Applicability</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Frequency</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Form</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Website</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="hover:bg-orange-50 transition-colors">
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.act}</td>
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.rule}</td>
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words">{data.applicability}</td>
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">{data.frequency}</Badge>
                        </td>
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
                          <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0 text-xs lg:text-sm" aria-label="Download form">
                            <FileText className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                            {data.form}
                          </Button>
                        </td>
                        <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm">
                          <Button variant="link" size="sm" className="text-orange-600 hover:text-orange-700 p-0 text-xs lg:text-sm" aria-label="Visit official site">
                            <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
                            Official Site
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Contribution Details - Mobile Card View */}
            <div className="block lg:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold text-center">Labour Welfare Fund Contribution</CardTitle>
                </CardHeader>
                <CardContent className="p-3">
                  <div className="space-y-3">
                    {data.contributions.map((contribution, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-3 border">
                        <h3 className="font-semibold text-sm text-orange-600 mb-2">Employee Category</h3>
                        <p className="text-xs text-gray-700 mb-3">{contribution.category}</p>
                        
                        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                          <div className="text-center">
                            <div className="font-medium text-gray-600">Employee</div>
                            <div className="font-bold text-green-600">₹{contribution.employeeContribution}</div>
                          </div>
                          <div className="text-center">
                            <div className="font-medium text-gray-600">Employer</div>
                            <div className="font-bold text-green-600">₹{contribution.employerContribution}</div>
                          </div>
                        </div>
                        
                        <div className="text-center mb-3">
                          <div className="font-medium text-gray-600 text-xs">Total Contribution</div>
                          <div className="font-bold text-green-600 text-sm">₹{contribution.totalContribution}</div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <p><span className="font-medium">Deduction:</span> {contribution.dateOfDeduction}</p>
                          <p><span className="font-medium">Submission:</span> {contribution.lastDateForSubmission}</p>
                          <p><span className="font-medium">Remarks:</span> {contribution.remarks}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contribution Details - Desktop Table */}
            <Card className="hidden lg:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold text-center">Labour Welfare Fund Contribution</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-orange-500 hover:bg-orange-500">
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-left text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Category</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Employee</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Employer</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Total</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Deduction</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Submission</th>
                        <th className="px-2 lg:px-3 py-2 lg:py-3 text-center text-xs lg:text-sm font-bold text-white uppercase tracking-wide">Remarks</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data.contributions.map((contribution, index) => (
                        <tr key={index} className="hover:bg-orange-50 transition-colors">
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-gray-900 break-words max-w-xs">{contribution.category}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-green-600 font-semibold">₹{contribution.employeeContribution}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-green-600 font-semibold">₹{contribution.employerContribution}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center font-bold text-green-600">₹{contribution.totalContribution}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900 break-words">{contribution.dateOfDeduction}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900 break-words">{contribution.lastDateForSubmission}</td>
                          <td className="px-2 lg:px-3 py-3 lg:py-4 text-xs lg:text-sm text-center text-gray-900">{contribution.remarks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
                  <Button 
                    size="sm" 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8" 
                    aria-label="Download form"
                  >
                    Download {data.form}
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <ExternalLink className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Official Website</h3>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8" 
                    aria-label="Visit official website"
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
                <CardContent className="p-3 lg:p-4">
                  <Calendar className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
                  <h3 className="font-medium mb-2 text-sm lg:text-base">Due Dates</h3>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8" 
                    aria-label="View calendar"
                  >
                    View Calendar
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            {/* <Card className="border-l-4 border-l-orange-500 shadow-sm">
              <CardHeader className="pb-2 lg:pb-3">
                <CardTitle className="text-base lg:text-lg font-bold">Important Notes</CardTitle>
              </CardHeader>
              <CardContent className="p-3 lg:p-4">
                <div className="space-y-2 lg:space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs lg:text-sm text-gray-700">
                      Contribution rates are subject to periodic revision by the state government.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs lg:text-sm text-gray-700">
                      Late submission may attract penalties as per state rules.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs lg:text-sm text-gray-700">
                      Employers must maintain proper records of contributions made.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-xs lg:text-sm text-gray-700">
                      Check official website for latest updates and notifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Right Sidebar - Popular Search (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-2 lg:top-3">
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
  )
}

export async function generateStaticParams() {
  return Object.keys(stateData).map((state) => ({ state }))
}
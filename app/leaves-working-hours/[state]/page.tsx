// import { Metadata } from 'next'
// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Badge } from '@/components/ui/badge'
// import { Download, ExternalLink, Clock, Calendar, FileText, ChevronDown, Check } from 'lucide-react'

// interface StateData {
//   name: string
//   slug: string
//   lastUpdated: string
//   act: {
//     name: string
//     year: string
//     rule: string
//     ruleYear: string
//     applicability: string
//     frequency: string
//     formName: string
//     formLink: string
//     websiteLink: string
//   }
//   leaveEntitlements: {
//     category: string
//     annualLeave: string
//     sickLeave: string
//     casualLeave: string
//     maternityLeave: string
//     paternityLeave: string
//     remarks: string
//   }[]
//   workingHours: {
//     category: string
//     dailyHours: string
//     weeklyHours: string
//     overtimeRate: string
//     nightShiftAllowance: string
//     weeklyOff: string
//     remarks: string
//   }[]
// }

// const statesData: Record<string, StateData> = {
//   'andhra-pradesh': {
//     name: 'Andhra Pradesh',
//     slug: 'andhra-pradesh',
//     lastUpdated: '3rd Oct, 2024',
//     act: {
//       name: 'Andhra Pradesh Shops and Commercial Establishments Act',
//       year: '1988',
//       rule: 'The Andhra Pradesh Shops and Commercial Establishments Rules',
//       ruleYear: '1989',
//       applicability: 'Any Employer/Establishment employing one or more employees/persons',
//       frequency: 'Yearly',
//       formName: 'FORM A.xlsx',
//       formLink: '#',
//       websiteLink: 'http://labour.ap.gov.in'
//     },
//     leaveEntitlements: [
//       {
//         category: 'All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis',
//         annualLeave: '12 days',
//         sickLeave: '12 days',
//         casualLeave: '7 days',
//         maternityLeave: '12 weeks',
//         paternityLeave: '15 days',
//         remarks: 'As per Shops & Establishments Act'
//       }
//     ],
//     workingHours: [
//       {
//         category: 'General employees',
//         dailyHours: '9 hours',
//         weeklyHours: '48 hours',
//         overtimeRate: '2x basic wage',
//         nightShiftAllowance: '10% of basic wage',
//         weeklyOff: '1 day per week',
//         remarks: 'Overtime after 9 hours/day or 48 hours/week'
//       }
//     ]
//   },
//   'maharashtra': {
//     name: 'Maharashtra',
//     slug: 'maharashtra',
//     lastUpdated: '15th Sep, 2024',
//     act: {
//       name: 'Maharashtra Shops and Establishments Act',
//       year: '2017',
//       rule: 'The Maharashtra Shops and Establishments Rules',
//       ruleYear: '2018',
//       applicability: 'Any Employer/Establishment employing one or more employees/persons',
//       frequency: 'Yearly',
//       formName: 'FORM 1.xlsx',
//       formLink: '#',
//       websiteLink: 'http://mahakamgar.gov.in'
//     },
//     leaveEntitlements: [
//       {
//         category: 'All employees except those employed mainly in a managerial capacity',
//         annualLeave: '15 days',
//         sickLeave: '7 days',
//         casualLeave: '7 days',
//         maternityLeave: '26 weeks',
//         paternityLeave: '15 days',
//         remarks: 'As per Maharashtra Shops & Establishments Act'
//       }
//     ],
//     workingHours: [
//       {
//         category: 'General employees',
//         dailyHours: '9 hours',
//         weeklyHours: '48 hours',
//         overtimeRate: '2x basic wage',
//         nightShiftAllowance: '15% of basic wage',
//         weeklyOff: '1.5 days per week',
//         remarks: 'Flexible working hours allowed'
//       }
//     ]
//   },
//   'karnataka': {
//     name: 'Karnataka',
//     slug: 'karnataka',
//     lastUpdated: '20th Aug, 2024',
//     act: {
//       name: 'Karnataka Shops and Commercial Establishments Act',
//       year: '1961',
//       rule: 'The Karnataka Shops and Commercial Establishments Rules',
//       ruleYear: '1963',
//       applicability: 'Any Employer/Establishment employing one or more employees/persons',
//       frequency: 'Yearly',
//       formName: 'FORM I.xlsx',
//       formLink: '#',
//       websiteLink: 'http://labour.kar.nic.in'
//     },
//     leaveEntitlements: [
//       {
//         category: 'All employees except those employed mainly in a managerial capacity',
//         annualLeave: '12 days',
//         sickLeave: '12 days',
//         casualLeave: '12 days',
//         maternityLeave: '12 weeks',
//         paternityLeave: '15 days',
//         remarks: 'As per Karnataka Shops & Establishments Act'
//       }
//     ],
//     workingHours: [
//       {
//         category: 'General employees',
//         dailyHours: '9 hours',
//         weeklyHours: '48 hours',
//         overtimeRate: '2x basic wage',
//         nightShiftAllowance: '12% of basic wage',
//         weeklyOff: '1 day per week',
//         remarks: 'Special provisions for IT employees'
//       }
//     ]
//   }
// }

// export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
//   const stateData = statesData[params.state]
  
//   if (!stateData) {
//     return {
//       title: 'State Not Found - Leave & Working Hours | E-Library'
//     }
//   }

//   return {
//     title: `${stateData.name} - Leave & Working Hours Regulations | E-Library`,
//     description: `Comprehensive guide to leave policies and working hours regulations in ${stateData.name}. Find leave entitlements, working hour limits, and compliance requirements.`,
//     keywords: `${stateData.name} leave policy, working hours, shops and establishments act, annual leave, sick leave, overtime rules`
//   }
// }

// export default function StateLeavesWorkingHoursPage({ params }: { params: { state: string } }) {
//   const stateData = statesData[params.state]

//   if (!stateData) {
//     notFound()
//   }

//   const availableStates = Object.values(statesData)

//   return (
//     <div className="min-h-screen bg-gray-50">

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Select State</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-2">
//                   {availableStates.map((state) => (
//                     <Link
//                       key={state.slug}
//                       href={`/leaves-working-hours/${state.slug}`}
//                       className={`block p-3 rounded-lg border transition-colors ${
//                         state.slug === params.state
//                           ? 'bg-blue-50 border-blue-200 text-blue-700'
//                           : 'hover:bg-gray-50 border-gray-200'
//                       }`}
//                     >
//                       <div className="flex items-center justify-between">
//                         <span className="font-medium">{state.name}</span>
//                         {state.slug === params.state && (
//                           <Check className="h-4 w-4 text-blue-600" />
//                         )}
//                       </div>
//                     </Link>
//                   ))}
//                 </div>
//                 <div className="mt-4 pt-4 border-t">
//                   <p className="text-sm text-gray-600">
//                     <strong>Updated As On:</strong><br />
//                     {stateData.lastUpdated}
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             <div className="space-y-8">
//               {/* Header */}
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold text-gray-900">Leave & Working Hours</h1>
//                   <h2 className="text-xl text-gray-600 mt-2">{stateData.name}</h2>
//                 </div>
//               </div>

//               {/* Act Information */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Act Information</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-50">
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">ACT</th>
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">RULE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">APPLICABILITY</th>
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">FREQUENCY</th>
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">FORM</th>
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">WEBSITE</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td className="border border-gray-200 px-4 py-3">
//                             {stateData.act.name}, {stateData.act.year}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-3">
//                             {stateData.act.rule}, {stateData.act.ruleYear}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-3">
//                             {stateData.act.applicability}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-3">
//                             {stateData.act.frequency}
//                           </td>
//                           <td className="border border-gray-200 px-4 py-3">
//                             <Button size="sm" variant="outline" className="text-blue-600">
//                               <Download className="h-4 w-4 mr-1" />
//                               {stateData.act.formName}
//                             </Button>
//                           </td>
//                           <td className="border border-gray-200 px-4 py-3">
//                             <Button size="sm" variant="outline" className="text-blue-600">
//                               <ExternalLink className="h-4 w-4 mr-1" />
//                               Official Site
//                             </Button>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Leave Entitlements */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-center">Leave Entitlements</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-blue-50">
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CATEGORY</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">ANNUAL LEAVE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">SICK LEAVE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">CASUAL LEAVE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">MATERNITY LEAVE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">PATERNITY LEAVE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">REMARKS</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {stateData.leaveEntitlements.map((leave, index) => (
//                           <tr key={index}>
//                             <td className="border border-gray-200 px-4 py-3">
//                               {leave.category}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {leave.annualLeave}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {leave.sickLeave}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {leave.casualLeave}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {leave.maternityLeave}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {leave.paternityLeave}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center">
//                               {leave.remarks}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Working Hours */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="text-center">Working Hours & Overtime</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="overflow-x-auto">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-green-50">
//                           <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">CATEGORY</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">DAILY HOURS</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">WEEKLY HOURS</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">OVERTIME RATE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">NIGHT SHIFT ALLOWANCE</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">WEEKLY OFF</th>
//                           <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">REMARKS</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {stateData.workingHours.map((hours, index) => (
//                           <tr key={index}>
//                             <td className="border border-gray-200 px-4 py-3">
//                               {hours.category}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {hours.dailyHours}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {hours.weeklyHours}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {hours.overtimeRate}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {hours.nightShiftAllowance}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center font-semibold">
//                               {hours.weeklyOff}
//                             </td>
//                             <td className="border border-gray-200 px-4 py-3 text-center">
//                               {hours.remarks}
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Quick Actions */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <Card className="hover:shadow-md transition-shadow cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">Download Forms</h3>
//                     <p className="text-sm text-gray-600 mb-3">Get registration and compliance forms</p>
//                     <Button size="sm">Download</Button>
//                   </CardContent>
//                 </Card>

//                 <Card className="hover:shadow-md transition-shadow cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">Leave Calculator</h3>
//                     <p className="text-sm text-gray-600 mb-3">Calculate leave entitlements</p>
//                     <Button size="sm" variant="outline">Calculate</Button>
//                   </CardContent>
//                 </Card>

//                 <Card className="hover:shadow-md transition-shadow cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-3" />
//                     <h3 className="font-semibold text-gray-900 mb-2">Official Website</h3>
//                     <p className="text-sm text-gray-600 mb-3">Visit state labour department</p>
//                     <Button size="sm" variant="outline">Visit Site</Button>
//                   </CardContent>
//                 </Card>
//               </div>

//               {/* Important Notes */}
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Important Notes</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//                       <h4 className="font-semibold text-yellow-800 mb-2">Leave Policy Compliance</h4>
//                       <p className="text-sm text-yellow-700">
//                         Employers must ensure their leave policy is at least as beneficial as the minimum requirements specified in the state's Shops and Establishments Act.
//                       </p>
//                     </div>
//                     <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                       <h4 className="font-semibold text-blue-800 mb-2">Working Hours Regulations</h4>
//                       <p className="text-sm text-blue-700">
//                         Any work beyond the specified daily or weekly hours must be compensated as overtime at the prescribed rates. Night shift workers are entitled to additional allowances.
//                       </p>
//                     </div>
//                     <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
//                       <h4 className="font-semibold text-green-800 mb-2">Record Maintenance</h4>
//                       <p className="text-sm text-green-700">
//                         Employers must maintain proper records of leave taken, working hours, overtime payments, and other statutory requirements as per the Act.
//                       </p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }





















import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Download, ExternalLink, Clock, Calendar, FileText, ChevronDown, Check, Filter, Search, Eye, Scale, Building2 } from 'lucide-react'
import PopularSearch from '@/app/PopularSearch/PopularSearch'

interface StateData {
  name: string
  slug: string
  lastUpdated: string
  act: {
    name: string
    year: string
    rule: string
    ruleYear: string
    applicability: string
    frequency: string
    formName: string
    formLink: string
    websiteLink: string
  }
  leaveEntitlements: {
    category: string
    annualLeave: string
    sickLeave: string
    casualLeave: string
    maternityLeave: string
    paternityLeave: string
    remarks: string
  }[]
  workingHours: {
    category: string
    dailyHours: string
    weeklyHours: string
    overtimeRate: string
    nightShiftAllowance: string
    weeklyOff: string
    remarks: string
  }[]
}

const statesData: Record<string, StateData> = {
  'andhra-pradesh': {
    name: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    lastUpdated: '3rd Oct, 2024',
    act: {
      name: 'Andhra Pradesh Shops and Commercial Establishments Act',
      year: '1988',
      rule: 'The Andhra Pradesh Shops and Commercial Establishments Rules',
      ruleYear: '1989',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM A.xlsx',
      formLink: '#',
      websiteLink: 'http://labour.ap.gov.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity or who is employed as an apprentice or on part-time basis',
        annualLeave: '12 days',
        sickLeave: '12 days',
        casualLeave: '7 days',
        maternityLeave: '12 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '10% of basic wage',
        weeklyOff: '1 day per week',
        remarks: 'Overtime after 9 hours/day or 48 hours/week'
      }
    ]
  },
  'maharashtra': {
    name: 'Maharashtra',
    slug: 'maharashtra',
    lastUpdated: '15th Sep, 2024',
    act: {
      name: 'Maharashtra Shops and Establishments Act',
      year: '2017',
      rule: 'The Maharashtra Shops and Establishments Rules',
      ruleYear: '2018',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM 1.xlsx',
      formLink: '#',
      websiteLink: 'http://mahakamgar.gov.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity',
        annualLeave: '15 days',
        sickLeave: '7 days',
        casualLeave: '7 days',
        maternityLeave: '26 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Maharashtra Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '15% of basic wage',
        weeklyOff: '1.5 days per week',
        remarks: 'Flexible working hours allowed'
      }
    ]
  },
  'karnataka': {
    name: 'Karnataka',
    slug: 'karnataka',
    lastUpdated: '20th Aug, 2024',
    act: {
      name: 'Karnataka Shops and Commercial Establishments Act',
      year: '1961',
      rule: 'The Karnataka Shops and Commercial Establishments Rules',
      ruleYear: '1963',
      applicability: 'Any Employer/Establishment employing one or more employees/persons',
      frequency: 'Yearly',
      formName: 'FORM I.xlsx',
      formLink: '#',
      websiteLink: 'http://labour.kar.nic.in'
    },
    leaveEntitlements: [
      {
        category: 'All employees except those employed mainly in a managerial capacity',
        annualLeave: '12 days',
        sickLeave: '12 days',
        casualLeave: '12 days',
        maternityLeave: '12 weeks',
        paternityLeave: '15 days',
        remarks: 'As per Karnataka Shops & Establishments Act'
      }
    ],
    workingHours: [
      {
        category: 'General employees',
        dailyHours: '9 hours',
        weeklyHours: '48 hours',
        overtimeRate: '2x basic wage',
        nightShiftAllowance: '12% of basic wage',
        weeklyOff: '1 day per week',
        remarks: 'Special provisions for IT employees'
      }
    ]
  }
}

const categories = ["All Categories", "Leave Policy", "Working Hours", "Compliance"];
const states = ["All States", "Andhra Pradesh", "Maharashtra", "Karnataka"];

export async function generateMetadata({ params }: { params: { state: string } }): Promise<Metadata> {
  const stateData = statesData[params.state]
  
  if (!stateData) {
    return {
      title: 'State Not Found - Leave & Working Hours | E-Library'
    }
  }

  return {
    title: `${stateData.name} - Leave & Working Hours Regulations | E-Library`,
    description: `Comprehensive guide to leave policies and working hours regulations in ${stateData.name}. Find leave entitlements, working hour limits, and compliance requirements.`,
    keywords: `${stateData.name} leave policy, working hours, shops and establishments act, annual leave, sick leave, overtime rules`
  }
}

export default function StateLeavesWorkingHoursPage({ params }: { params: { state: string } }) {
  const stateData = statesData[params.state]

  if (!stateData) {
    notFound()
  }

  const availableStates = Object.values(statesData)

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
                  <h1 className="text-3xl font-bold text-slate-800 mb-2">Leave & Working Hours</h1>
                  <h2 className="text-xl text-gray-600">{stateData.name}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="px-3 py-1">
                    Updated: {stateData.lastUpdated}
                  </Badge>
                </div>
              </div>

              {/* Info Card */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">{stateData.name} Regulations</h3>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        State-specific leave policies and working hours as per {stateData.act.name}, {stateData.act.year}. 
                        This information is updated as of {stateData.lastUpdated}.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>


            {/* Act Information */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Act Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-orange-50 to-orange-100">
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">ACT</th>
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">RULE</th>
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">APPLICABILITY</th>
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">FREQUENCY</th>
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">FORM</th>
                        <th className="border border-orange-200 px-4 py-3 text-left font-semibold text-orange-800">WEBSITE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-orange-25 transition-colors">
                        <td className="border border-gray-200 px-4 py-3 bg-white">
                          <div className="font-medium text-gray-900">{stateData.act.name}</div>
                          <div className="text-sm text-gray-600">{stateData.act.year}</div>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 bg-white">
                          <div className="font-medium text-gray-900">{stateData.act.rule}</div>
                          <div className="text-sm text-gray-600">{stateData.act.ruleYear}</div>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 bg-white text-sm">
                          {stateData.act.applicability}
                        </td>
                        <td className="border border-gray-200 px-4 py-3 bg-white">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {stateData.act.frequency}
                          </Badge>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 bg-white">
                          <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600">
                            <Download className="h-4 w-4 mr-1" />
                            {stateData.act.formName}
                          </Button>
                        </td>
                        <td className="border border-gray-200 px-4 py-3 bg-white">
                          <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600">
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Official Site
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Leave Entitlements */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
              <CardHeader>
                <CardTitle className="text-center group-hover:text-orange-600 transition-colors">Leave Entitlements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-blue-50 to-blue-100">
                        <th className="border border-blue-200 px-4 py-3 text-left font-semibold text-blue-800">CATEGORY</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">ANNUAL LEAVE</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">SICK LEAVE</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">CASUAL LEAVE</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">MATERNITY LEAVE</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">PATERNITY LEAVE</th>
                        <th className="border border-blue-200 px-4 py-3 text-center font-semibold text-blue-800">REMARKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateData.leaveEntitlements.map((leave, index) => (
                        <tr key={index} className="hover:bg-blue-25 transition-colors">
                          <td className="border border-gray-200 px-4 py-3 bg-white text-sm">
                            {leave.category}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-green-100 text-green-800 font-semibold">
                              {leave.annualLeave}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-red-100 text-red-800 font-semibold">
                              {leave.sickLeave}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 font-semibold">
                              {leave.casualLeave}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 font-semibold">
                              {leave.maternityLeave}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">
                              {leave.paternityLeave}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white text-sm">
                            {leave.remarks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card className="mb-8 group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
              <CardHeader>
                <CardTitle className="text-center group-hover:text-orange-600 transition-colors">Working Hours & Overtime</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-50 to-green-100">
                        <th className="border border-green-200 px-4 py-3 text-left font-semibold text-green-800">CATEGORY</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">DAILY HOURS</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">WEEKLY HOURS</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">OVERTIME RATE</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">NIGHT SHIFT ALLOWANCE</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">WEEKLY OFF</th>
                        <th className="border border-green-200 px-4 py-3 text-center font-semibold text-green-800">REMARKS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {stateData.workingHours.map((hours, index) => (
                        <tr key={index} className="hover:bg-green-25 transition-colors">
                          <td className="border border-gray-200 px-4 py-3 bg-white text-sm">
                            {hours.category}
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-semibold">
                              {hours.dailyHours}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 font-semibold">
                              {hours.weeklyHours}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-orange-100 text-orange-800 font-semibold">
                              {hours.overtimeRate}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-purple-100 text-purple-800 font-semibold">
                              {hours.nightShiftAllowance}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white">
                            <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 font-semibold">
                              {hours.weeklyOff}
                            </Badge>
                          </td>
                          <td className="border border-gray-200 px-4 py-3 text-center bg-white text-sm">
                            {hours.remarks}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
                <CardContent className="p-6 text-center">
                  <Download className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Download Forms</h3>
                  <p className="text-sm text-gray-600 mb-3">Get registration and compliance forms</p>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <Eye className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Leave Calculator</h3>
                  <p className="text-sm text-gray-600 mb-3">Calculate leave entitlements</p>
                  <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600">
                    <Eye className="w-4 h-4 mr-2" />
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
                <CardContent className="p-6 text-center">
                  <ExternalLink className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Official Website</h3>
                  <p className="text-sm text-gray-600 mb-3">Visit state labour department</p>
                  <Button size="sm" variant="outline" className="hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600">
                    <Eye className="w-4 h-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Important Notes */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-r-4 border-r-orange-500">
              <CardHeader>
                <CardTitle className="group-hover:text-orange-600 transition-colors">Important Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Leave Policy Compliance</h4>
                    <p className="text-sm text-yellow-700">
                      Employers must ensure their leave policy is at least as beneficial as the minimum requirements specified in the state's Shops and Establishments Act.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Working Hours Regulations</h4>
                    <p className="text-sm text-blue-700">
                      Any work beyond the specified daily or weekly hours must be compensated as overtime at the prescribed rates. Night shift workers are entitled to additional allowances.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Record Maintenance</h4>
                    <p className="text-sm text-green-700">
                      Employers must maintain proper records of leave taken, working hours, overtime payments, and other statutory requirements as per the Act.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Popular Search Component */}
              <Card>
                <CardContent>
                  <PopularSearch />
                </CardContent>
              </Card>

              {/* State Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg border-b-4 border-orange-500 pb-2">Select State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {availableStates.map((state) => (
                      <Link
                        key={state.slug}
                        href={`/leaves-working-hours/${state.slug}`}
                        className={`block p-3 rounded-lg border transition-colors group ${
                          state.slug === params.state
                            ? 'bg-orange-50 border-orange-200 text-orange-700'
                            : 'hover:bg-orange-50 hover:border-orange-200 border-gray-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`font-medium transition-colors ${
                            state.slug === params.state 
                              ? 'text-orange-700' 
                              : 'text-gray-700 group-hover:text-orange-600'
                          }`}>{state.name}</span>
                          {state.slug === params.state && (
                            <Check className="h-4 w-4 text-orange-600" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      <strong>Updated As On:</strong><br />
                      {stateData.lastUpdated}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
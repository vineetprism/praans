
// "use client";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Scale, MapPin, Download } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// import { notFound } from "next/navigation";
// import { use } from "react";
// import FormsSection from "@/components/FormsSection";
// import { downloadFile, type DownloadItem } from "@/lib/download-utils";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { useSearchParams } from "next/navigation";

// const actsDatabase = {
//   "factories-act-1948": {
//     id: 1,
//     title: "The Factories Act, 1948",
//     slug: "factories-act-1948",
//     fullTitle:
//       "An Act to consolidate and amend the law regulating labour in factories",
//     state: "Central",
//     category: "Industrial Safety",
//     year: "1948",
//     actNumber: "Act No. 63 of 1948",
//     lastUpdated: "2024-12-15",
//     effectiveDate: "1948-04-01",
//     sections: 118,
//     chapters: 14,
//     applicability:
//       "All factories employing 10 or more workers with power, or 20 or more workers without power",
//     objective:
//       "To consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave of workers employed in factories.",
//     keyProvisions: [
//       "Health and safety measures in factories",
//       "Welfare provisions for workers",
//       "Working hours and overtime regulations",
//       "Employment of young persons and women",
//       "Annual leave with wages",
//       "Factory licensing and registration",
//     ], 
//     penalties:
//       "Imprisonment up to 2 years and/or fine up to ₹1,00,000 for violations",
//     amendments: [
//       {
//         year: "2023",
//         description:
//           "Amendment regarding digital compliance and online reporting mechanisms",
//         date: "2023-08-15",
//       },
//       {
//         year: "2019",
//         description: "Updates to safety standards and penalty provisions",
//         date: "2019-03-22",
//       },
//     ],
//     stateRules: {
//       "All India": [
//         {
//           id: 1,
//           title: "The Factories (Central) Rules, 1950",
//           description: "Central rules for implementation of the Factories Act",
//           lastUpdated: "2024-10-15",
//           state: "Central",
//         },
//       ],
//       "Maharashtra": [
//         {
//           id: 2,
//           title: "Maharashtra Factories Rules, 1963",
//           description: "State-specific rules for Maharashtra factories",
//           lastUpdated: "2024-09-20",
//           state: "Maharashtra",
//         },
//       ],
//       "Karnataka": [
//         {
//           id: 3,
//           title: "Karnataka Factories Rules, 1969",
//           description: "State-specific rules for Karnataka factories",
//           lastUpdated: "2024-08-10",
//           state: "Karnataka",
//         },
//       ],
//       "Tamil Nadu": [
//         {
//           id: 4,
//           title: "Tamil Nadu Factories Rules, 1950",
//           description: "State-specific rules for Tamil Nadu factories",
//           lastUpdated: "2024-07-25",
//           state: "Tamil Nadu",
//         },
//       ],
//     },
//   },
//   "contract-labour-act-1970": {
//     id: 2,
//     title: "The Contract Labour (Regulation and Abolition) Act, 1970",
//     slug: "contract-labour-act-1970",
//     fullTitle:
//       "An Act to regulate the employment of contract labour in certain establishments",
//     state: "Central",
//     category: "Contract Labour",
//     year: "1970",
//     actNumber: "Act No. 37 of 1970",
//     lastUpdated: "2024-11-28",
//     effectiveDate: "1970-02-10",
//     sections: 35,
//     chapters: 8,
//     applicability: "Establishments employing 20 or more contract workers",
//     objective:
//       "To regulate the employment of contract labour in certain establishments and to provide for its abolition in certain circumstances.",
//     keyProvisions: [
//       "Registration of establishments employing contract labour",
//       "Licensing of contractors",
//       "Welfare and health provisions for contract workers",
//       "Payment of wages through principal employer",
//       "Prohibition of contract labour in certain processes",
//     ],
//     penalties:
//       "Fine up to ₹1,000 and imprisonment up to 3 months for violations",
//     amendments: [
//       {
//         year: "2021",
//         description:
//           "Digital registration and compliance mechanisms introduced",
//         date: "2021-09-29",
//       },
//     ],
//     stateRules: {
//       "All India": [
//         {
//           id: 1,
//           title: "The Contract Labour (Central) Rules, 1971",
//           description: "Central rules for contract labour regulation",
//           lastUpdated: "2024-11-10",
//           state: "Central",
//         },
//       ],
//       "Maharashtra": [
//         {
//           id: 2,
//           title: "Maharashtra Contract Labour Rules, 1974",
//           description: "Maharashtra specific contract labour rules",
//           lastUpdated: "2024-10-05",
//           state: "Maharashtra",
//         },
//       ],
//     },
//   },
// };

// interface ActDetailPageProps {
//   params: Promise<{
//     slug: string;
//   }>;
// }

// export default function ActDetailPage({ params }: ActDetailPageProps) {
//   const searchParams = useSearchParams();
//   const selectedState = searchParams.get('state') || 'All India';
  
//   const resolvedParams = use(params);
//   const actData =
//     actsDatabase[resolvedParams.slug as keyof typeof actsDatabase];

//   if (!actData) {
//     notFound();
//   }

//   // Get state-specific rules
//   const stateSpecificRules = actData.stateRules[selectedState] || actData.stateRules["All India"] || [];

//   const handleActDownload = async () => {
//     const downloadItem: DownloadItem = {
//       url: `/acts/downloads/${actData.slug}.pdf`,
//       filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
//       format: "PDF",
//     };

//     await downloadFile(downloadItem);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-3">
//             <Card className="mb-8 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex-1">
//                     <div className="flex items-start justify-between gap-4 mb-3">
//                       <CardTitle className="text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl font-bold text-slate-800 leading-tight flex-1">
//                         {actData.title}
//                       </CardTitle>
//                       <div className="flex flex-col items-end gap-2">
//                         <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 text-sm md:text-base">
//                           <MapPin className="w-4 h-4 mr-1" />
//                           {selectedState}
//                         </Badge>
//                       </div>
//                     </div>
//                     <CardDescription className="text-base md:text-lg lg:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
//                       {actData.fullTitle}
//                     </CardDescription>
//                   </div>
//                 </div>

//                 {/* Act Metadata */}
//                 <div className="grid md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
//                   <div className="text-center">
//                     <div className="text-xl md:text-2xl lg:text-2xl 2xl:text-3xl font-bold text-orange-500">
//                       {actData.year}
//                     </div>
//                     <div className="text-xs md:text-sm lg:text-sm 2xl:text-base text-gray-600">Enacted</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl md:text-2xl lg:text-2xl 2xl:text-3xl font-bold text-orange-500">
//                       {actData.sections}
//                     </div>
//                     <div className="text-xs md:text-sm lg:text-sm 2xl:text-base text-gray-600">Sections</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl md:text-2xl lg:text-2xl 2xl:text-3xl font-bold text-orange-500">
//                       {actData.chapters}
//                     </div>
//                     <div className="text-xs md:text-sm lg:text-sm 2xl:text-base text-gray-600">Chapters</div>
//                   </div>
//                 </div>

//                 {/* State-specific notice */}
//                 {selectedState !== 'All India' && (
//                   <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                     <p className="text-sm text-blue-700">
//                       <strong>Note:</strong> Showing {selectedState}-specific rules and forms for this act.
//                     </p>
//                   </div>
//                 )}
//               </CardHeader>
//             </Card>

//             {/* Tabs for Act Details, Rules, and Forms */}
//             <Tabs defaultValue="overview" className="space-y-6">
//               <TabsList className="grid w-full grid-cols-3">
//                 <TabsTrigger value="overview" className="hover:cursor-pointer text-xs md:text-sm lg:text-base">
//                   Act Details
//                 </TabsTrigger>
//                 <TabsTrigger value="rules" className="hover:cursor-pointer text-xs md:text-sm lg:text-base">
//                   Rules 
//                 </TabsTrigger>
//                 <TabsTrigger value="forms" className="hover:cursor-pointer text-xs md:text-sm lg:text-base">
//                   Forms
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="overview" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <CardTitle className="flex items-center gap-2 text-lg md:text-xl lg:text-xl 2xl:text-2xl">
//                         <Scale className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
//                         Act Overview
//                       </CardTitle>
//                       <Button
//                         onClick={handleActDownload}
//                         className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-xs md:text-sm lg:text-sm 2xl:text-base"
//                         aria-label="download act"
//                       >
//                         <Download className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 mr-1 md:mr-2" />
//                         Download Act
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     <div>
//                       <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Objective</h3>
//                       <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                         {actData.objective}
//                       </p>
//                     </div>

//                     <Separator />

//                     <div>
//                       <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Applicability</h3>
//                       <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                         {actData.applicability}
//                       </p>
//                     </div>
//                     <Separator />
//                     <div>
//                       <h3 className="font-semibold mb-3 text-base md:text-lg lg:text-lg 2xl:text-xl">Key Provisions</h3>
//                       <ul className="space-y-2">
//                         {actData.keyProvisions.map((provision, index) => (
//                           <li key={index} className="flex items-start gap-2">
//                             <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                             <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">{provision}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <Separator />
//                     <div>
//                       <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Penalties</h3>
//                       <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                         {actData.penalties}
//                       </p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="rules" className="space-y-6">
//                 <Card>
//                   <CardHeader>
//                     <div className="flex items-center justify-between">
//                       <CardTitle className="flex items-center gap-2 text-lg md:text-xl lg:text-xl 2xl:text-2xl">
//                         <Scale className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
//                         Rules Overview
//                       </CardTitle>
//                       <Button
//                         onClick={async () => {
//                           const downloadItem: DownloadItem = {
//                             url: `/acts/rules/${actData.slug}-${selectedState.toLowerCase().replace(/ /g, '-')}-rules.pdf`,
//                             filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}-${selectedState}-Rules.pdf`,
//                             format: "PDF",
//                           };
//                           await downloadFile(downloadItem);
//                         }}
//                         className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 2xl:px-6 2xl:py-3 text-xs md:text-sm lg:text-sm 2xl:text-base"
//                         aria-label="download rules"
//                       >
//                         <Download className="w-3 h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 mr-1 md:mr-2" />
//                         Download Rules
//                       </Button>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-6">
//                     {stateSpecificRules.length > 0 ? (
//                       stateSpecificRules.map((rule) => (
//                         <div key={rule.id} className="space-y-6">
//                           <div>
//                             <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Objective</h3>
//                             <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                               {rule.description} These rules provide detailed implementation guidelines for {selectedState} and ensure proper compliance with the main Act provisions.
//                             </p>
//                           </div>

//                           <Separator />

//                           <div>
//                             <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Applicability</h3>
//                             <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                               These rules are applicable to all establishments operating in {rule.state} and must be followed in conjunction with the main Act provisions for complete compliance.
//                             </p>
//                           </div>

//                           <Separator />

//                           <div>
//                             <h3 className="font-semibold mb-3 text-base md:text-lg lg:text-lg 2xl:text-xl">Key Rule Provisions</h3>
//                             <ul className="space-y-2">
//                               <li className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                                 <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">State-specific compliance requirements and procedures</span>
//                               </li>
//                               <li className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                                 <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">Documentation and record-keeping obligations</span>
//                               </li>
//                               <li className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                                 <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">Registration and licensing procedures with state authorities</span>
//                               </li>
//                               <li className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                                 <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">Inspection protocols and compliance verification methods</span>
//                               </li>
//                               <li className="flex items-start gap-2">
//                                 <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
//                                 <span className="text-gray-700 text-sm md:text-base lg:text-base 2xl:text-lg">Reporting requirements to state regulatory bodies</span>
//                               </li>
//                             </ul>
//                           </div>

//                           <Separator />

//                           <div>
//                             <h3 className="font-semibold mb-2 text-base md:text-lg lg:text-lg 2xl:text-xl">Penalties for Non-Compliance</h3>
//                             <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-base 2xl:text-lg">
//                               Violations of these rules may result in penalties as prescribed under the main Act, along with additional state-specific sanctions including fines, license suspension, or other enforcement actions by {rule.state} authorities.
//                             </p>
//                           </div>
//                         </div>
//                       ))
//                     ) : (
//                       <div className="text-center py-8">
//                         <p className="text-gray-500 text-base md:text-lg">
//                           No specific rules available for {selectedState}. 
//                           Please refer to central/default rules.
//                         </p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               <TabsContent value="forms" className="space-y-6">
//                 <FormsSection 
//                   actTitle={actData.title} 
//                   actSlug={actData.slug} 
//                   selectedState={selectedState}
//                 />
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Sidebar */}
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












"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, MapPin, Download, Eye, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { notFound } from "next/navigation";
import { use } from "react";
import { downloadFile, type DownloadItem } from "@/lib/download-utils";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { useSearchParams } from "next/navigation";

// Sample forms data for table
const formsData = [
  {
    id: 1,
    formNumber: "Form I",
    title: "Notice of Commencement of Work",
    description: "Form to be submitted before commencing work in factory",
    lastUpdated: "2024-10-15",
    fileSize: "250 KB",
  },
  {
    id: 2,
    formNumber: "Form II",
    title: "Notice of Occupancy",
    description: "Form for giving notice of occupancy of factory premises",
    lastUpdated: "2024-09-20",
    fileSize: "180 KB",
  },
  {
    id: 3,
    formNumber: "Form III",
    title: "Register of Workers",
    description: "Mandatory register to maintain worker details",
    lastUpdated: "2024-08-10",
    fileSize: "320 KB",
  },
  {
    id: 4,
    formNumber: "Form IV",
    title: "Leave Record",
    description: "Record of leave with wages for workers",
    lastUpdated: "2024-07-25",
    fileSize: "200 KB",
  },
];

const actsDatabase = {
  "factories-act-1948": {
    id: 1,
    title: "The Factories Act, 1948",
    slug: "factories-act-1948",
    fullTitle: "An Act to consolidate and amend the law regulating labour in factories",
    state: "Central",
    category: "Industrial Safety",
    year: "1948",
    actNumber: "Act No. 63 of 1948",
    lastUpdated: "2024-12-15",
    effectiveDate: "1948-04-01",
    sections: 118,
    chapters: 14,
    applicability: "All factories employing 10 or more workers with power, or 20 or more workers without power",
    objective: "To consolidate and amend the law regulating labour in factories with provisions for safety, health, welfare, working hours and leave of workers employed in factories.",
    keyProvisions: [
      "Health and safety measures in factories",
      "Welfare provisions for workers", 
      "Working hours and overtime regulations",
      "Employment of young persons and women",
      "Annual leave with wages",
      "Factory licensing and registration",
    ],
    penalties: "Imprisonment up to 2 years and/or fine up to ₹1,00,000 for violations",
    amendments: [
      {
        year: "2023",
        description: "Amendment regarding digital compliance and online reporting mechanisms",
        date: "2023-08-15",
      },
      {
        year: "2019", 
        description: "Updates to safety standards and penalty provisions",
        date: "2019-03-22",
      },
    ],
    stateRules: {
      "All India": [
        {
          id: 1,
          title: "The Factories (Central) Rules, 1950",
          description: "Central rules for implementation of the Factories Act",
          lastUpdated: "2024-10-15",
          state: "Central",
        },
      ],
      "Maharashtra": [
        {
          id: 2,
          title: "Maharashtra Factories Rules, 1963", 
          description: "State-specific rules for Maharashtra factories",
          lastUpdated: "2024-09-20",
          state: "Maharashtra",
        },
      ],
    },
  },
};

interface ActDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ActDetailPage({ params }: ActDetailPageProps) {
  const searchParams = useSearchParams();
  const selectedState = searchParams.get('state') || 'All India';
  
  const resolvedParams = use(params);
  const actData = actsDatabase[resolvedParams.slug as keyof typeof actsDatabase];

  if (!actData) {
    notFound();
  }

  const stateSpecificRules = actData.stateRules[selectedState] || actData.stateRules["All India"] || [];
  
  // Calculate counts for stats grid
  const rulesCount = stateSpecificRules.length || Object.values(actData.stateRules).flat().length;
  const formsCount = formsData.length;

  const handleActDownload = async () => {
    const downloadItem: DownloadItem = {
      url: `/acts/downloads/${actData.slug}.pdf`,
      filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    };
    await downloadFile(downloadItem);
  };

  const handleFormDownload = async (form: any) => {
    const downloadItem: DownloadItem = {
      url: `/forms/downloads/${actData.slug}/${form.formNumber.toLowerCase().replace(/ /g, '-')}.pdf`,
      filename: `${form.formNumber}-${form.title.replace(/[^a-zA-Z0-9]/g, "-")}.pdf`,
      format: "PDF",
    };
    await downloadFile(downloadItem);
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8  ">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8 ">
          <div className="lg:col-span-3 ">
            
            {/* Header Card - Responsive */}

            <Card className="mb-4 sm:mb-6 border-l-4 lg:h-45 border-l-orange-500 overflow-hidden ">
              <CardHeader className="p-1 sm:p-2">
                <div className="space-y-0.5">
                  {/* Title and Badge in single row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 leading-tight">
                        {actData.title}
                      </CardTitle>
                      <CardDescription className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mt-1">
                        {actData.fullTitle}
                      </CardDescription>
                    </div>
                    {/* <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs flex-shrink-0">
                      <MapPin className="w-3 h-3 mr-1" />
                      {selectedState}
                    </Badge> */}
                  </div>

                  {/* Compact Metadata Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-500">
                        {actData.sections}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Sections</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-500">
                        12
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Rules</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-orange-500">
                        8
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600">Forms</div>
                    </div>
                  </div>

                  {/* Compact State Notice */}
                  {selectedState !== 'All India' && (
                    <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-[10px] sm:text-xs text-blue-700">
                        <strong>Note:</strong> Showing {selectedState}-specific content.
                      </p>
                    </div>
                  )}
                </div>
              </CardHeader>
            </Card>

            

            {/* Tabs - Responsive */}
            <Tabs defaultValue="overview" className="space-y-4 sm:space-y-6 lg:space-y-1">
   <TabsList className="grid grid-cols-3 w-full mx-auto h-auto p-1 gap-1 sm:gap-2">
      <TabsTrigger 
        value="overview" 
        className="text-[2.5vw] min-[360px]:text-xs sm:text-sm  py-1 px-1 sm:px-2 sm:py-1.5 rounded-md transition-all"
      >
        Act Details
      </TabsTrigger>
      <TabsTrigger 
        value="rules" 
        className="text-[2.5vw] min-[360px]:text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 sm:py-1.5 rounded-md transition-all"
      >
        Rules
      </TabsTrigger>
      <TabsTrigger 
        value="forms" 
        className="text-[2.5vw] min-[360px]:text-xs sm:text-sm lg:text-base py-1 px-1 sm:px-2 sm:py-1.5 rounded-md transition-all"
      >
        Forms
      </TabsTrigger>
    </TabsList>
              {/* Act Overview Tab */}
              <TabsContent value="overview" className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl xl:text-2xl">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-500" />
                        Act Overview
                      </CardTitle>
                      <Button
                        onClick={handleActDownload}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base"
                        aria-label="download act"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Download Act
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base lg:text-lg xl:text-xl">Objective</h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg">
                        {actData.objective}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base lg:text-lg xl:text-xl">Applicability</h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg">
                        {actData.applicability}
                      </p>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">Key Provisions</h3>
                      <ul className="space-y-2">
                        {actData.keyProvisions.map((provision, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg">{provision}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="font-semibold mb-2 text-sm sm:text-base lg:text-lg xl:text-xl">Penalties</h3>
                      <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg">
                        {actData.penalties}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Rules Tab */}
              <TabsContent value="rules" className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl xl:text-2xl">
                        <Scale className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-500" />
                        Rules Overview
                      </CardTitle>
                      <Button
                        onClick={async () => {
                          const downloadItem: DownloadItem = {
                            url: `/acts/rules/${actData.slug}-${selectedState.toLowerCase().replace(/ /g, '-')}-rules.pdf`,
                            filename: `${actData.title.replace(/[^a-zA-Z0-9]/g, "-")}-${selectedState}-Rules.pdf`,
                            format: "PDF",
                          };
                          await downloadFile(downloadItem);
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base"
                        aria-label="download rules"
                      >
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Download Rules
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
                    {stateSpecificRules.length > 0 ? (
                      stateSpecificRules.map((rule) => (
                        <div key={rule.id} className="space-y-4 sm:space-y-6">
                          <div>
                            <h3 className="font-semibold mb-2 text-sm sm:text-base lg:text-lg xl:text-xl">Objective</h3>
                            <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-base xl:text-lg">
                              {rule.description} These rules provide detailed implementation guidelines for {selectedState} and ensure proper compliance with the main Act provisions.
                            </p>
                          </div>

                          <Separator />

                          <div>
                            <h3 className="font-semibold mb-3 text-sm sm:text-base lg:text-lg xl:text-xl">Key Rule Provisions</h3>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg">State-specific compliance requirements and procedures</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-700 text-xs sm:text-sm lg:text-base xl:text-lg">Documentation and record-keeping obligations</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500 text-sm sm:text-base lg:text-lg">
                          No specific rules available for {selectedState}.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Forms Tab - Table View */}
              <TabsContent value="forms" className="space-y-4 sm:space-y-6">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg lg:text-xl xl:text-2xl">
                        <FileText className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-orange-500" />
                        Forms & Documents
                      </CardTitle>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {formsCount} Forms Available
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {/* Mobile Card View */}
                    <div className="block lg:hidden">
                      <div className="space-y-3 p-4 sm:p-6">
                        {formsData.map((form) => (
                          <Card key={form.id} className="border border-gray-200">
                            <CardContent className="p-4">
                              <div className="flex flex-col gap-3">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <Badge variant="outline" className="text-xs text-orange-600 border-orange-200 mb-2">
                                      {form.formNumber}
                                    </Badge>
                                    <h4 className="font-semibold text-sm">{form.title}</h4>
                                  </div>
                                </div>
                                <p className="text-xs text-gray-600">{form.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>Updated: {form.lastUpdated}</span>
                                  <span>{form.fileSize}</span>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex-1 text-xs h-8"
                                    onClick={() => handleFormDownload(form)}
                                  >
                                    <Download className="w-3 h-3 mr-1" />
                                    Download
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="flex-1 text-xs h-8"
                                  >
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-20">Form No.</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden xl:table-cell">Description</TableHead>
                            <TableHead className="w-24">Updated</TableHead>
                            <TableHead className="w-20">Size</TableHead>
                            <TableHead className="w-32">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {formsData.map((form) => (
                            <TableRow key={form.id} className="hover:bg-gray-50">
                              <TableCell>
                                <Badge variant="outline" className="text-xs text-orange-600 border-orange-200">
                                  {form.formNumber}
                                </Badge>
                              </TableCell>
                              <TableCell className="font-medium text-sm">{form.title}</TableCell>
                              <TableCell className="hidden xl:table-cell text-xs text-gray-600">
                                {form.description}
                              </TableCell>
                              <TableCell className="text-xs text-gray-500">{form.lastUpdated}</TableCell>
                              <TableCell className="text-xs text-gray-500">{form.fileSize}</TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs"
                                    onClick={() => handleFormDownload(form)}
                                  >
                                    <Download className="w-3 h-3 mr-1" />
                                    Download
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="h-7 px-2 text-xs"
                                  >
                                    <Eye className="w-3 h-3 mr-1" />
                                    View
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
          </div>

          {/* Sidebar - Responsive */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <PopularSearch className="mb-4 sm:mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// "use client"

// import PopularSearch from '@/app/PopularSearch/PopularSearch'
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Download } from "lucide-react"
// import { useParams } from "next/navigation"
// import { useEffect, useState } from "react"

// export default function StateDetailPage() {
//   const params = useParams()
//   const slug = params.slug as string
  
//   // API data state
//   const [apiData, setApiData] = useState<any>(null)

  
//   useEffect(() => {
//     if (slug) {
//       fetch(`http://100.110.147.101:8000/api/national-festival-holidays/${slug}`)
//         .then(response => response.json())
//         .then(data => setApiData(data))
//         .catch(error => console.error('Error:', error))
//     }
//   }, [slug])


//   if (!apiData) return null

//   const handleDownload = () => {
//     window.open(apiData.data.tiles.form_url, '_blank')
//   }


//   const headers = apiData.data.nfh_table.header
//   const rows = apiData.data.nfh_table.rows

 
//   const renderCellContent = (header: string, value: string) => {

//     if (header === "Applicability to") {
     
//       const applicabilityRegex = /(\w+)\((\w+)\)/g;
//       const categories: { [key: string]: string } = {};
      
//       let match;
//       while ((match = applicabilityRegex.exec(value)) !== null) {
//         categories[match[1]] = match[2]; // match[1] = category name, match[2] = Yes/No
//       }
      
     
//       if (Object.keys(categories).length === 0) {
//         // Space se split kar ke try karte hain
//         const parts = value.split(/\s+/);
//         parts.forEach(part => {
//           if (part.includes('(') && part.includes(')')) {
//             const categoryMatch = part.match(/(\w+)\((\w+)\)/);
//             if (categoryMatch) {
//               categories[categoryMatch[1]] = categoryMatch[2];
//             }
//           }
//         });
//       }
      
//       // Dynamic categories ka array banate hain
//       const categoryKeys = Object.keys(categories);
      
//       // Agar koi categories nahi mile toh simple text show karte hain
//       if (categoryKeys.length === 0) {
//         return <span className="text-gray-700">{value}</span>;
//       }
      
//       // Smart color function - sirf Yes/No basis pe color
//       const getBadgeColor = (value: string) => {
//         const normalizedValue = value.toLowerCase().trim();
        
//         // Yes variants - green color
//         if (normalizedValue === 'yes' || normalizedValue === 'y' || normalizedValue === '1' || normalizedValue === 'true') {
//           return 'bg-green-100 text-green-800';
//         }
//         // No variants - red color
//         else if (normalizedValue === 'no' || normalizedValue === 'n' || normalizedValue === '0' || normalizedValue === 'false') {
//           return 'bg-red-100 text-red-800';
//         }
//         // Unknown/Other values ke liye neutral color
//         else {
//           return 'bg-gray-100 text-gray-800';
//         }
//       };
      
//       // Dynamic grid - categories ki count ke basis pe
//       const gridCols = Math.min(categoryKeys.length, 4);
      
//       return (
//         <div className={`grid grid-cols-${gridCols} gap-4`}>
//           {categoryKeys.map((category, index) => {
//             const status = categories[category];
            
//             return (
//               <div key={index}>
//                 {/* Category name capitalize kar ke show karte hain */}
//                 <div className="font-medium text-gray-900 capitalize">
//                   {category.toLowerCase()}
//                 </div>
//                 <Badge className={`mt-1 ${getBadgeColor(status)}`}>
//                   {status}
//                 </Badge>
//               </div>
//             );
//           })}
//         </div>
//       );
//     }

//     // National Holidays ke liye dynamic handling
//     if (header === "List of National Holidays") {
//       // Multiple patterns try karte hain
//       let holidays: string[] = [];
      
//       // Pattern 1: Text with parentheses - "26th January (Republic Day)"
//       const parenthesesPattern = /[^()]*\([^)]*\)/g;
//       const parenthesesMatches = value.match(parenthesesPattern);
      
//       if (parenthesesMatches && parenthesesMatches.length > 0) {
//         holidays = parenthesesMatches.map(match => match.trim());
//       } else {
//         // Pattern 2: Comma or newline separated
//         if (value.includes(',')) {
//           holidays = value.split(',').map(item => item.trim()).filter(item => item.length > 0);
//         } else if (value.includes('\n')) {
//           holidays = value.split('\n').map(item => item.trim()).filter(item => item.length > 0);
//         } else {
//           // Pattern 3: Space separated with parentheses
//           holidays = value.split(' ').filter(item => item.includes('('));
//         }
//       }
      
//       // Dynamic count calculate karte hain
//       const holidayCount = holidays.length || 3; // fallback to 3
      
//       return (
//         <div className="flex items-start gap-4">
//           <Badge className="bg-blue-100 text-blue-800 font-semibold">{holidayCount}</Badge>
//           <ul className="list-disc list-inside space-y-1 text-gray-700">
//             {holidays.length > 0 ? (
//               holidays.map((holiday: string, index: number) => (
//                 <li key={index}>{holiday}</li>
//               ))
//             ) : (
//               <li>{value}</li>
//             )}
//           </ul>
//         </div>
//       );
//     }

//     // Festival Holidays ke liye dynamic handling
//     if (header === "Festival Holidays") {
//       // Total holidays se national holidays subtract kar ke festival holidays calculate karte hain
//       let totalHolidays;
//       let nationalCount; // default
      
//       // Same row se total holidays extract karte hain
//       if (rows && rows.length > 0) {
//         const totalField = rows[0]["Total Number of National & Festival Holidays in a year"];
//         if (totalField) {
//           totalHolidays = parseInt(totalField.toString()) || 0;
//         }
        
//         // National holidays count extract karte hain
//         const nationalField = rows[0]["List of National Holidays"];
//         if (nationalField) {
//           const nationalMatches = nationalField.match(/[^()]*\([^)]*\)/g);
//           if (nationalMatches) {
//             nationalCount = nationalMatches.length;
//           } else {
//             // Alternative count method
//             const spaceMatches = nationalField.split(' ').filter(item => item.includes('('));
//             nationalCount = spaceMatches.length;
//           }
//         }
//       }
      
//       const festivalCount = Math.max(0, totalHolidays - nationalCount);
      
//       return (
//         <div className="flex items-start gap-4">
//           <Badge className="bg-green-100 text-green-800 font-semibold">{festivalCount}</Badge>
//           <ul className="list-disc list-inside text-gray-700">
//             <li>{value}</li>
//           </ul>
//         </div>
//       );
//     }

//     // Total Holidays ke liye special handling
//     if (header === "Total Number of National & Festival Holidays in a year") {
//       return (
//         <Badge className="bg-purple-100 text-purple-800 font-semibold text-lg px-3 py-1">
//           {value}
//         </Badge>
//       );
//     }

//     // Default text rendering for all other fields
//     return <span className="text-gray-700">{value}</span>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-8 py-8">

//         {/* Grid Layout with Sidebar */}
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header - dynamic */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                  <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                    NFH Details of {apiData.data.state.name} :
//                  </h2>
//                 </div>
//                 <p className="px-3 py-1 text-orange-600 text-lg">
//                    <Button onClick={handleDownload} className="bg-orange-500 hover:bg-orange-600 text-white">
//                             <Download className="w-4 h-4 mr-2" />
//                             Download NFH
//                           </Button>
//                 </p>
//               </div>
//             </div>

//             {/* Main Detail Card - fully dynamic */}
//             <Card className="border-l-4 border-l-orange-500">
//               <CardHeader className="bg-gray-50 border-b border-gray-200">
//                 <CardTitle className="text-2xl text-gray-900">
//                   National Festival Holiday Matrix
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <tbody>
//                       {/* Dynamic table rows - headers aur data dono dynamic */}
//                       {headers.map((header: string, headerIndex: number) => (
//                         <tr key={headerIndex} className="border-b border-gray-200">
//                           <td className="p-4 font-semibold text-gray-900 bg-gray-50 w-1/3">
//                             {header}
//                           </td>
//                           <td className="p-4">
//                             {rows.map((row: any, rowIndex: number) => (
//                               <div key={rowIndex}>
//                                 {renderCellContent(header, row[header])}
//                               </div>
//                             ))}
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar with Quick Access */}
//           <div className="lg:col-span-1">
//             <Card className="sticky top-24">
//               <CardContent className="space-y-6">
//                 <PopularSearch className="mt-4" />
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }






















import { Metadata } from "next";
import { notFound } from "next/navigation";
import NationalFestivalHolidaysDetails from "@/app/_component/NationalFestivalHolidays/NationalFestivalHolidaysDetails/NationalFestivalHolidaysDetails";

// ---------- Types ----------
export type NFHTableRow = {
  Act: string;
  "Applicability to": string;
  "Eligible to avail wages on NH&FH": string;
  "List of National Holidays": string;
  "Festival Holidays": string;
  "Total Number of National & Festival Holidays in a year": string;
  "Provision if worked on NH/FH (Double the Wages/Comp off)": string;
  "Time Limit to Avail the Comp Off": string;
  "Notice to Labour Inspector in case of working on Holidays": string;
  "Any other Forms to be maintained/submitted": string;
  "Penal Consequences": string;
};

export type StateNFHData = {
  state: {
    name: string;
    slug: string;
  };
  updated_date: string;
  effective_date: string;
  nfh_table: {
    header: string[];
    rows: NFHTableRow[];
  };
  tiles: {
    form_title: string;
    form_url: string;
  };
};

export type NFHDetailApi = {
  data: StateNFHData;
};

// ---------- Config ----------
export const revalidate = 1800; // ISR: 30 min
const API_BASE = "http://100.110.147.101:8000";

async function getStateNFHData(slug: string): Promise<NFHDetailApi | null> {
  try {
    const res = await fetch(`${API_BASE}/api/national-festival-holidays/${slug}`, {
      next: { revalidate },
    });
    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`HTTP ${res.status}`);
    }
    return (await res.json()) as NFHDetailApi;
  } catch (err) {
    console.error("State NFH API error:", err);
    return null;
  }
}

// ---------- Dynamic SEO ----------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const stateData = await getStateNFHData(slug);

  if (!stateData) {
    return {
      title: "State Not Found | NFH Details",
      description: "The requested state's National Festival Holiday details could not be found.",
    };
  }

  const stateName = stateData.data.state.name;
  
  return {
    title: `${stateName} - National Festival Holiday Details | E-Library`,
    description: `Complete National & Festival Holiday matrix for ${stateName}. View holiday lists, applicability, compensation details, and compliance requirements.`,
    keywords: [
      `${stateName} holidays`,
      `${stateName} national holidays`,
      `${stateName} festival holidays`,
      "holiday matrix",
      "public holidays",
      "NFH details",
    ],
  };
}

// ---------- Static Params (Optional) ----------
export async function generateStaticParams() {
  try {
    // Get all states from main API
    const res = await fetch(`${API_BASE}/api/national-festival-holidays`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) return [];
    
    const data = await res.json();
    const allStates = [
      ...(data.applicable_states || []),
      ...(data.non_applicable_states || [])
    ];
    
    return allStates.map((state: any) => ({
      slug: state.state_slug,
    }));
  } catch (error) {
    console.error("Generate static params error:", error);
    return [];
  }
}

export default async function StateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const initialData = await getStateNFHData(slug);

  // Handle 404 case
  if (!initialData) {
    notFound();
  }

  // Props-only render; koi client fetch nahi yahan.
  return (
    <NationalFestivalHolidaysDetails
      initialData={initialData}
      apiBase={API_BASE}
      slug={slug}
    />
  );
}

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Users } from "lucide-react";
// import { Metadata } from "next";
// import Link from "next/link";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export const metadata: Metadata = {
//   title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
//   description:
//     "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
//   keywords:
//     "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
// };

// const applicableStates = [
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
//   "Maharashtra",
//   "Odisha",
//   "Punjab",
//   "Tamil Nadu",
//   "Telangana",
//   "West Bengal",
// ];

// const nonApplicableStates = [
//   "Central",
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
// ];

// const categories = [
//   "All Categories",
//   "Leave Policy",
//   "Working Hours",
//   "Overtime Rules",
//   "Weekly Off",
//   "Public Holidays",
// ];

// const states = [
//   "All States",
//   "Central",
//   "Maharashtra",
//   "Karnataka",
//   "Tamil Nadu",
//   "Gujarat",
//   "Delhi",
//   "West Bengal",
// ];

// export default function LeavesWorkingHoursPage() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                     Leave & Working Hours :
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                     "Statutory Leave" ensures a healthy work-life balance and
//                     boosts employee motivation levels. "Working Hours"
//                     regulations define the laboring time an employee is expected
//                     to work in exchange for pay as enumerated by Labour Codes.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Leave & Working Hours For States */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-xl flex items-center">
//                   <Users className="h-5 w-5" />
//                   <span>Leave & Working Hours For States Across India</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
//                   {/* Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Applicable States
//                     </h3>
//                     <div className="space-y-2">
//                       {applicableStates.map((state, index) => (
//                         <Link
//                           key={index}
//                           href={`/leaves-working-hours/${state
//                             .toLowerCase()
//                             .replace(/\s+/g, "-")}`}
//                           aria-label={`Go to ${state} leaves and working hours`}
//                           className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors "
//                         >
//                           <span className="text-blue-600 hover:text-orange-600 transition-colors">
//                             {index + 1}. {state}
//                           </span>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Non-Applicable States */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">
//                       Non-Applicable States
//                     </h3>
//                     <div className="space-y-2">
//                       {nonApplicableStates.map((state, index) => (
//                         <div
//                           key={index}
//                           className="p-3 rounded-lg border bg-gray-50"
//                         >
//                           <span className="text-gray-600 ">
//                             {index + 1}. {state}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 2xl:w-sm">
//             <div className="sticky top-24 ">
//               <Card>
//                 <CardContent>
//                   <PopularSearch className="mb-6 " />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


















// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Users } from "lucide-react";
// import { Metadata } from "next";
// import Link from "next/link";
// import PopularSearch from "../PopularSearch/PopularSearch";

// export const metadata: Metadata = {
//   title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
//   description:
//     "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
//   keywords:
//     "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
// };

// type StateItem = {
//   id: number;
//   state_name: string;
//   state_slug: string;
// };

// type LeavesWorkingHoursAPI = {
//   applicable: StateItem[];
//   non_applicable: StateItem[];
// };

// // TIP: shift this to env for prod
// const API_BASE =
//   // process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, "") ??
//   "http://100.110.147.101:8000";

// async function getLeavesWorkingHours(): Promise<LeavesWorkingHoursAPI> {
//   const url = `${API_BASE}/api/leaves-working-hours`;
//   const res = await fetch(url, {
//     // Change to `cache: "no-store"` if you want *always fresh* data
//     next: { revalidate: 900 },
//   });

//   if (!res.ok) {
//     // safe fallback
//     return { applicable: [], non_applicable: [] };
//   }

//   const data = (await res.json()) as LeavesWorkingHoursAPI;

//   // Normalize (defensive)
//   return {
//     applicable: Array.isArray(data.applicable) ? data.applicable : [],
//     non_applicable: Array.isArray(data.non_applicable) ? data.non_applicable : [],
//   };
// }

// export default async function LeavesWorkingHoursPage() {
//   const { applicable, non_applicable } = await getLeavesWorkingHours();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-8">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                     Leave &amp; Working Hours :
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                     "Statutory Leave" ensures a healthy work-life balance and boosts employee motivation levels.
//                     "Working Hours" regulations define the laboring time an employee is expected to work in exchange for pay as enumerated by Labour Codes.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Leave & Working Hours For States */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-xl flex items-center gap-2">
//                   <Users className="h-5 w-5" />
//                   <span>Leave &amp; Working Hours For States Across India</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {/* Applicable States */}
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Applicable States
//                       </h3>
                   
//                     </div>

//                     {applicable.length === 0 ? (
//                       <div className="p-3 rounded-lg border bg-amber-50 text-amber-800 text-sm">
//                         No applicable states found right now.
//                       </div>
//                     ) : (
//                       <div className="space-y-2">
//                         {applicable.map((s, index) => (
//                           <Link
//                             key={s.id}
//                             href={`/leaves-working-hours/${s.state_slug}`}
//                             aria-label={`Go to ${s.state_name} leaves and working hours`}
//                             className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors"
//                           >
//                             <span className="text-blue-600 hover:text-orange-600 transition-colors">
//                               {index + 1}. {s.state_name}
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Non-Applicable States */}
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Non-Applicable States
//                       </h3>
//                       {/* <span className="text-xs text-gray-500">
//                         {non_applicable.length} states
//                       </span> */}
//                     </div>

//                     {non_applicable.length === 0 ? (
//                       <div className="p-3 rounded-lg border bg-gray-50 text-gray-600 text-sm">
//                         No non-applicable states listed.
//                       </div>
//                     ) : (
//                       <div className="space-y-2">
//                         {non_applicable.map((s, index) => (
//                           <div key={s.id} className="p-3 rounded-lg border bg-gray-50">
//                             <span className="text-gray-600">
//                               {index + 1}. {s.state_name}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 2xl:w-sm">
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











// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Users } from "lucide-react";
// import { Metadata } from "next";
// import Link from "next/link";
// import PopularSearch from "../PopularSearch/PopularSearch";
// import SearchAndStateFilter from "@/app/SearchAndStateFilter/page";
// // import dynamic from "next/dynamic";

//  const metadata: Metadata = {
//   title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
//   description:
//     "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
//   keywords:
//     "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
// };

// type StateItem = {
//   id: number;
//   state_name: string;
//   state_slug: string;
// };

// type LeavesWorkingHoursAPI = {
//   applicable: StateItem[];
//   non_applicable: StateItem[];
// };



// // TIP: shift this to env for prod
// const API_BASE = "http://100.110.147.101:8000";

// async function getLeavesWorkingHours(): Promise<LeavesWorkingHoursAPI> {
//   const url = `${API_BASE}/api/leaves-working-hours`;
//   const res = await fetch(url, {
//     next: { revalidate: 900 },
//   });

//   if (!res.ok) return { applicable: [], non_applicable: [] };

//   const data = (await res.json()) as LeavesWorkingHoursAPI;
//   return {
//     applicable: Array.isArray(data.applicable) ? data.applicable : [],
//     non_applicable: Array.isArray(data.non_applicable) ? data.non_applicable : [],
//   };
// }

// export default async function LeavesWorkingHoursPage() {
//   const { applicable, non_applicable } = await getLeavesWorkingHours();

//   // 🔗 Build state options for the dropdown
//   const stateOptions = [...applicable, ...non_applicable].map((s) => ({
//     label: s.state_name,
//     value: s.state_slug,
//     id: s.id,
//   }));

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="mx-auto px-4 py-8">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3">
//             {/* Page Header */}
//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div>
//                   <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                     Leave &amp; Working Hours :
//                   </h2>
//                   <p className="text-gray-700 leading-relaxed text-xs sm:text-sm text-justify mb-3">
//                     "Statutory Leave" ensures a healthy work-life balance and boosts employee motivation levels.
//                     "Working Hours" regulations define the laboring time an employee is expected to work in exchange for pay as enumerated by Labour Codes.
//                   </p>
//                 </div>
//               </div>

//               {/* 🔍 Search + State Filter (your component) */}
//               <SearchAndStateFilter
//                 className="mb-6"
//                 placeholder="Search by title..."
//                 states={stateOptions}
//                 /* Optional: If your component accepts these, they'll push routing/query */
//                   onSearch={(q: string) => {/* handle search navigation */}}
//                   onStateSelect={(slug: string) => {/* navigate to /leaves-working-hours/[slug] */}}
//               />
//             </div>

//             {/* Leave & Working Hours For States */}
//             <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
//               <CardHeader>
//                 <CardTitle className="text-xl flex items-center gap-2">
//                   <Users className="h-5 w-5" />
//                   <span>Leave &amp; Working Hours For States Across India</span>
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                   {/* Applicable States */}
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Applicable States
//                       </h3>
//                     </div>

//                     {applicable.length === 0 ? (
//                       <div className="p-3 rounded-lg border bg-amber-50 text-amber-800 text-sm">
//                         No applicable states found right now.
//                       </div>
//                     ) : (
//                       <div className="space-y-2">
//                         {applicable.map((s, index) => (
//                           <Link
//                             key={s.id}
//                             href={`/leaves-working-hours/${s.state_slug}`}
//                             aria-label={`Go to ${s.state_name} leaves and working hours`}
//                             className="block p-3 rounded-lg border hover:bg-orange-100 transition-colors"
//                           >
//                             <span className="text-blue-600 hover:text-orange-600 transition-colors">
//                               {index + 1}. {s.state_name}
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>

//                   {/* Non-Applicable States */}
//                   <div>
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="text-lg font-semibold text-gray-900">
//                         Non-Applicable States
//                       </h3>
//                     </div>

//                     {non_applicable.length === 0 ? (
//                       <div className="p-3 rounded-lg border bg-gray-50 text-gray-600 text-sm">
//                         No non-applicable states listed.
//                       </div>
//                     ) : (
//                       <div className="space-y-2">
//                         {non_applicable.map((s, index) => (
//                           <div key={s.id} className="p-3 rounded-lg border bg-gray-50">
//                             <span className="text-gray-600">
//                               {index + 1}. {s.state_name}
//                             </span>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1 2xl:w-sm">
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




import type { Metadata } from "next";
import LeavesWorkingHours from "@/app/_component/LeavesWorkingHours/LeavesWorkingHours";

export const revalidate = 900; // ISR: 15 minutes

// ---- Types to match the API ----
type StateItem = {
  id: number;
  state_name: string;
  state_slug: string;
};

type LeavesWorkingHoursAPI = {
  applicable: StateItem[];
  non_applicable: StateItem[];
};

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, "") || "http://100.110.147.101:8000";
const API_BASE = "http://100.110.147.101:8000";

// (optional) SEO
export const metadata: Metadata = {
  title: "Leave & Working Hours - Labour Laws & Regulations | E-Library",
  description:
    "Comprehensive guide to statutory leave policies and working hours regulations across Indian states. Find state-wise leave entitlements, working hour limits, and compliance requirements.",
  keywords:
    "leave policy, working hours, statutory leave, annual leave, sick leave, casual leave, overtime, labour laws, shops and establishments act",
};

async function getLeavesWorkingHours(): Promise<LeavesWorkingHoursAPI | null> {
  try {
    const res = await fetch(`${API_BASE}/api/leaves-working-hours`, {
      next: { revalidate },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as LeavesWorkingHoursAPI;

    return {
      applicable: Array.isArray(data.applicable) ? data.applicable : [],
      non_applicable: Array.isArray(data.non_applicable) ? data.non_applicable : [],
    };
  } catch (err) {
    console.error("Failed to fetch Leave & Working Hours:", err);
    return null;
  }
}

export default async function LeavesWorkingHoursPage() {
  const initialData = await getLeavesWorkingHours();

  return <LeavesWorkingHours initialData={initialData} />;
}

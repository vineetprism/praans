// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Calculator, FileText, Globe } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// /* 🔐 Auth-gated download helpers */
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// /* =========================
//    Helpers: dynamic table map
//    ========================= */

// type AnyRow = Record<string, string | number | null | undefined>;
// type TableBlockType = { headers: string[]; rows: AnyRow[] };

// const norm = (s: string) =>
//   (s ?? "")
//     .toString()
//     .toLowerCase()
//     .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
//     .trim();

// function buildRowKeyMap(row: AnyRow) {
//   const map: Record<string, any> = {};
//   Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
//   return map;
// }

// function getCell(row: AnyRow, header: string) {
//   const m = buildRowKeyMap(row);
//   return m[norm(header)] ?? "";
// }

// const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);

// /* =========================
//    Generic desktop table (CENTERED)
//    ========================= */

// function GenericTable({
//   block,
//   emphasizeCols = [],
//   linkifyCols = [],
// }: {
//   block: TableBlockType;
//   emphasizeCols?: string[];
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader className="sticky top-0 z-30">
//           <TableRow className="bg-orange-500 hover:bg-orange-500">
//             {block.headers.map((h) => (
//               <TableHead
//                 key={h}
//                 className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30"
//               >
//                 {h}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody className="relative z-10">
//           {(block.rows ?? []).map((row, rIdx) => (
//             <TableRow key={rIdx} className="">
//               {block.headers.map((h) => {
//                 const raw = getCell(row, h);
//                 const emph = emSet.has(h.toLowerCase());
//                 const linky = linkSet.has(h.toLowerCase());
//                 const isFormHeader = h.toLowerCase().includes("form");

//                 let content: React.ReactNode = String(raw || "-");

//                 if (linky && isUrl(raw)) {
//                   const href = String(raw);
//                   if (isFormHeader) {
//                     // 🔐 Gate “Form” downloads
//                     content = (
//                       <Button
//                         size="sm"
//                         variant="link"
//                         className="text-orange-600 p-0 cursor-pointer hover:cursor-pointer"
//                         onClick={() => openProtectedDownload(router, href)}
//                         aria-label="Download"
//                       >
//                         Download
//                       </Button>
//                     );
//                   } else {
//                     // Public links (e.g., Website)
//                     content = (
//                       <Link
//                         href={href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="underline text-orange-600 hover:text-orange-700"
//                       >
//                         {h.toLowerCase().includes("form") ? "Download" : "Open"}
//                       </Link>
//                     );
//                   }
//                 }

//                 return (
//                   <TableCell
//                     key={h}
//                     className={[
//                       "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px]",
//                       emph ? "font-semibold text-orange-600 " : "",
//                     ].join(" ")}
//                   >
//                     {content}
//                   </TableCell>
//                 );
//               })}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// /* =========================
//    Generic mobile block 
//    ========================= */

// function GenericMobileBlock({
//   title,
//   block,
//   linkifyCols = [],
// }: {
//   title: string;
//   block: TableBlockType;
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <Card className="shadow-sm">
//   <CardContent className="p-3 ">
//     <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
//       {title}
//     </h3>
//     <div className="space-y-3">
//       {(block.rows ?? []).map((row, idx) => (
//         <div key={idx} className="rounded-lg p-3 border">
//           <div className="space-y-2 text-xs">
//             {block.headers.map((h) => {
//               const v = getCell(row, h);
//               const linky = linkSet.has(h.toLowerCase());
//               const isFormHeader = h.toLowerCase().includes("form");

//               return (
//                 <div key={h} className="flex justify-between">
//                   <span className="font-medium text-orange-600">{h}:</span>
//                   <span className="break-words text-gray-800 text-right max-w-xs">
//                     {linky && isUrl(v) ? (
//                       isFormHeader ? (
//                         <button
//                           className="underline text-orange-600 cursor-pointer hover:cursor-pointer"
//                           onClick={() => openProtectedDownload(router, String(v))}
//                           aria-label="Download"
//                           type="button"
//                         >
//                           Download
//                         </button>
//                       ) : (
//                         <Link
//                           href={String(v)}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline text-orange-600"
//                         >
//                           {h.toLowerCase().includes("form") ? "Download" : "Open"}
//                         </Link>
//                       )
//                     ) : (
//                       String(v || "-")
//                     )}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   </CardContent>
// </Card>
//   );
// }

// /* =========================
//    Page component (single file)
//    ========================= */

// type Payload = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date: string;
//     effective_date: string;
//     act_information: TableBlockType;
//     professional_tax_slabs: TableBlockType;
//     employment_categories: TableBlockType;
//     downloads: {
//       form_title: string | null;
//       form_url: string | null;
//       website_url: string | null;
//     };
//     meta: {
//       applicable: boolean;
//       max_annual_rate: number | null;
//       slab_count: number | null;
//     };
//   };
// };

// export default function ProfessionalTaxDetails({
//   payload,
// }: {
//   payload: Payload;
// }) {
//   const router = useRouter();

//   // ▶ Auto-download if returning from login with ?dl=...
//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const {
//     state,
//     act_information,
//     professional_tax_slabs,
//     employment_categories,
//     downloads,
//   } = payload.data;

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
//           {/* Left content */}
//           <div className="lg:col-span-3 xl:col-span-4 relative z-10">
//             <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
//                 Professional Tax :
//               </h1>
//               <div className="text-right">
//                 <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                   {state.name}
//                 </h2>
//               </div>
//             </div>

//             {/* Act Information */}
//             <div className="block lg:hidden mb-4 ">
//               <GenericMobileBlock
//                 title="Act Information"
//                 block={act_information}
//                 linkifyCols={["Form", "Website"]}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable
//                   block={act_information}
//                   linkifyCols={["Form", "Website"]}
//                 />
//               </CardContent>
//             </Card>

//             {/* Professional Tax Slabs */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Professional Tax Slabs"
//                 block={professional_tax_slabs}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader className="pb-1 lg:pb-2 ">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Professional Tax Slabs
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable
//                   block={professional_tax_slabs}
//                   emphasizeCols={["Monthly Tax", "Annual Tax"]}
//                 />
//               </CardContent>
//             </Card>

//             {/* Employment Categories */}
//             <div className="block lg:hidden mb-4 ">
//               <GenericMobileBlock
//                 title="Employment Categories"
//                 block={employment_categories}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader className="pb-1 lg:pb-2 ">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Employment Categories
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={employment_categories} />
//               </CardContent>
//             </Card>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-3 mb-4 lg:mb-3 2xl:grid-cols-3">
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
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 cursor-pointer hover:cursor-pointer"
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
//                   {downloads?.form_url ? (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       aria-label="Download Forms"
//                       className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 cursor-pointer hover:cursor-pointer"
//                       onClick={() =>
//                         openProtectedDownload(router, downloads.form_url!)
//                       }
//                     >
//                       {downloads?.form_title?.trim() || "Download"}
//                     </Button>
//                   ) : (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       disabled
//                       aria-label="Download Forms"
//                       className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3"
//                     >
//                       Download
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-2 lg:p-3 text-center">
//                   <Globe className="w-6 h-6 lg:w-8 lg:h-8 text-orange-500 mx-auto mb-1 lg:mb-2" />
//                   <h3 className="font-medium text-xs lg:text-sm text-gray-900 mb-1">
//                     Official Portal
//                   </h3>
//                   <Button
//                     asChild
//                     variant="outline"
//                     size="sm"
//                     aria-label="Visit Official Portal"
//                     className="text-xs lg:text-sm h-6 lg:h-7 px-2 lg:px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 cursor-pointer hover:cursor-pointer"
//                     disabled={!downloads?.website_url}
//                   >
//                     <Link
//                       href={downloads?.website_url ?? "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       aria-label="Visit Official Portal"
//                     >
//                       Visit
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
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






// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Calculator, FileText, Globe } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// /* 🔐 Auth-gated download helpers */
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// /* =========================
//    Helpers
//    ========================= */
// type AnyRow = Record<string, string | number | null | undefined>;
// type TableBlockType = { headers: string[]; rows: AnyRow[] };

// const norm = (s: string) =>
//   (s ?? "")
//     .toString()
//     .toLowerCase()
//     .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
//     .trim();

// function buildRowKeyMap(row: AnyRow) {
//   const map: Record<string, any> = {};
//   Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
//   return map;
// }

// function getCell(row: AnyRow, header: string) {
//   const m = buildRowKeyMap(row);
//   return m[norm(header)] ?? "";
// }

// const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);
// const isNumeric = (val: any) => /^\d+$/.test(String(val || "").trim());

// /* =========================
//    Generic desktop table
//    ========================= */
// function GenericTable({
//   block,
//   emphasizeCols = [],
//   linkifyCols = [],
// }: {
//   block: TableBlockType;
//   emphasizeCols?: string[];
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <div className="overflow-x-auto">
//       <Table>
//         <TableHeader className="sticky top-0 z-30">
//           <TableRow className="bg-orange-500 hover:bg-orange-500">
//             {block.headers.map((h) => (
//               <TableHead
//                 key={h}
//                 className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30"
//               >
//                 {h}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody className="relative z-10">
//           {(block.rows ?? []).map((row, rIdx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <TableRow key={rIdx} className="hover:bg-orange-50">
//                 {block.headers.map((h) => {
//                   const raw = getCell(row, h);
//                   const emph = emSet.has(h.toLowerCase());
//                   const linky = linkSet.has(h.toLowerCase());
//                   const isFormHeader = h.toLowerCase().includes("form");

//                   let content: React.ReactNode = String(raw || "-");

//                   if (linky && isUrl(raw)) {
//                     const href = String(raw);
//                     if (isFormHeader) {
//                       content = (
//                         <Button
//                           size="sm"
//                           variant="link"
//                           className="text-orange-600 underline p-0 cursor-pointer"
//                           onClick={() => openProtectedDownload(router, href)}
//                           aria-label="Download"
//                         >
//                           Download
//                         </Button>
//                       );
//                     } else {
//                       content = (
//                         <Link
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline text-orange-600"
//                         >
//                           Open
//                         </Link>
//                       );
//                     }
//                   }

//                   // ✅ Only Category column highlight when S.No. is numeric
//                   const isCategoryCol = h.toLowerCase().includes("category");

//                   return (
//                     <TableCell
//                       key={h}
//                       className={[
//                         "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px]",
//                         emph && !numericRow
//                           ? "font-semibold text-orange-600"
//                           : "",
//                         numericRow && isCategoryCol
//                           ? " text-orange-500 font-bold"
//                           : "",
//                       ].join(" ")}
//                     >
//                       {content}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// /* =========================
//    Generic mobile block
//    ========================= */
// function GenericMobileBlock({
//   title,
//   block,
//   linkifyCols = [],
// }: {
//   title: string;
//   block: TableBlockType;
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <Card className="shadow-sm">
//       <CardContent className="p-3">
//         <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
//           {title}
//         </h3>
//         <div className="space-y-3">
//           {(block.rows ?? []).map((row, idx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <div key={idx} className="rounded-lg p-3 border">
//                 <div className="space-y-2 text-xs">
//                   {block.headers.map((h) => {
//                     const v = getCell(row, h);
//                     const linky = linkSet.has(h.toLowerCase());
//                     const isFormHeader = h.toLowerCase().includes("form");

//                     const isCategoryCol = h.toLowerCase().includes("category");

//                     return (
//                       <div key={h} className="flex justify-between">
//                         <span
//                           className={`font-medium ${
//                             numericRow && isCategoryCol
//                               ? "text-orange-600 px-1 rounded"
//                               : "text-orange-600"
//                           }`}
//                         >
//                           {h}:
//                         </span>
//                         <span
//                           className={`break-words text-right max-w-xs ${
//                             numericRow && isCategoryCol
//                               ? "text-orange-500 font-bold px-1 rounded"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {linky && isUrl(v) ? (
//                             isFormHeader ? (
//                               <button
//                                 className="underline text-orange-600 cursor-pointer"
//                                 onClick={() =>
//                                   openProtectedDownload(router, String(v))
//                                 }
//                                 aria-label="Download"
//                                 type="button"
//                               >
//                                 Download
//                               </button>
//                             ) : (
//                               <Link
//                                 href={String(v)}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="underline text-orange-600"
//                               >
//                                 Open
//                               </Link>
//                             )
//                           ) : (
//                             String(v || "-")
//                           )}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// /* =========================
//    Page Component
//    ========================= */
// type Payload = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date: string;
//     effective_date: string;
//     act_information: TableBlockType;
//     professional_tax_slabs: TableBlockType;
//     employment_categories: TableBlockType;
//     downloads: {
//       form_title: string | null;
//       form_url: string | null;
//       website_url: string | null;
//     };
//     meta: {
//       applicable: boolean;
//       max_annual_rate: number | null;
//       slab_count: number | null;
//     };
//   };
// };

// export default function ProfessionalTaxDetails({ payload }: { payload: Payload }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const {
//     state,
//     act_information,
//     professional_tax_slabs,
//     employment_categories,
//     downloads,
//   } = payload.data;

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
//           {/* Left content */}
//           <div className="lg:col-span-3 xl:col-span-4 relative z-10">
//             <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
//                 Professional Tax :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold">
//                 {state.name}
//               </h2>
//             </div>

//             {/* Act Information */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Act Information"
//                 block={act_information}
//                 linkifyCols={["Form", "Website"]}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable
//                   block={act_information}
//                   linkifyCols={["Form", "Website"]}
//                 />
//               </CardContent>
//             </Card>

//             {/* Professional Tax Slabs */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Professional Tax Slabs"
//                 block={professional_tax_slabs}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Professional Tax Slabs
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={professional_tax_slabs} />
//               </CardContent>
//             </Card>

//             {/* Employment Categories */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Employment Categories"
//                 block={employment_categories}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Employment Categories
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={employment_categories} />
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









// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Calculator, FileText, Globe } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// /* 🔐 Auth-gated download helpers */
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// /* =========================
//    Helpers
//    ========================= */
// type AnyRow = Record<string, string | number | null | undefined>;
// type TableBlockType = { headers: string[]; rows: AnyRow[] };

// const norm = (s: string) =>
//   (s ?? "")
//     .toString()
//     .toLowerCase()
//     .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
//     .trim();

// function buildRowKeyMap(row: AnyRow) {
//   const map: Record<string, any> = {};
//   Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
//   return map;
// }

// function getCell(row: AnyRow, header: string) {
//   const m = buildRowKeyMap(row);
//   return m[norm(header)] ?? "";
// }

// const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);
// const isNumeric = (val: any) => /^\d+$/.test(String(val || "").trim());

// /* =========================
//    Generic desktop table
//    ========================= */
// function GenericTable({
//   block,
//   emphasizeCols = [],
//   linkifyCols = [],
// }: {
//   block: TableBlockType;
//   emphasizeCols?: string[];
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <div className="overflow-x-auto">
//       <Table className="border border-orange-300 border-collapse w-full">
//         <TableHeader className="sticky top-0 z-30">
//           <TableRow className="bg-orange-500 hover:bg-orange-500">
//             {block.headers.map((h) => (
//               <TableHead
//                 key={h}
//                 className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 border border-orange-300"
//               >
//                 {h}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody className="relative z-10">
//           {(block.rows ?? []).map((row, rIdx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <TableRow key={rIdx} className="hover:bg-orange-50 border border-orange-300">
//                 {block.headers.map((h) => {
//                   const raw = getCell(row, h);
//                   const emph = emSet.has(h.toLowerCase());
//                   const linky = linkSet.has(h.toLowerCase());
//                   const isFormHeader = h.toLowerCase().includes("form");

//                   let content: React.ReactNode = String(raw || "-");

//                   if (linky && isUrl(raw)) {
//                     const href = String(raw);
//                     if (isFormHeader) {
//                       content = (
//                         <Button
//                           size="sm"
//                           variant="link"
//                           className="text-orange-600 underline p-0 cursor-pointer"
//                           onClick={() => openProtectedDownload(router, href)}
//                           aria-label="Download"
//                         >
//                           Download
//                         </Button>
//                       );
//                     } else {
//                       content = (
//                         <Link
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline text-orange-600"
//                         >
//                           Open
//                         </Link>
//                       );
//                     }
//                   }

//                   // ✅ Only Category column highlight when S.No. is numeric
//                   const isCategoryCol = h.toLowerCase().includes("category");

//                   return (
//                     <TableCell
//                       key={h}
//                       className={[
//                         "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px] border border-orange-300",
//                         emph && !numericRow
//                           ? "font-semibold text-orange-600"
//                           : "",
//                         numericRow && isCategoryCol
//                           ? "bg-orange-500 text-white font-bold"
//                           : "",
//                       ].join(" ")}
//                     >
//                       {content}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// /* =========================
//    Generic mobile block
//    ========================= */
// function GenericMobileBlock({
//   title,
//   block,
//   linkifyCols = [],
// }: {
//   title: string;
//   block: TableBlockType;
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <Card className="shadow-sm">
//       <CardContent className="p-3">
//         <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
//           {title}
//         </h3>
//         <div className="space-y-3">
//           {(block.rows ?? []).map((row, idx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <div key={idx} className="rounded-lg p-3 border border-orange-300">
//                 <div className="space-y-2 text-xs">
//                   {block.headers.map((h) => {
//                     const v = getCell(row, h);
//                     const linky = linkSet.has(h.toLowerCase());
//                     const isFormHeader = h.toLowerCase().includes("form");
//                     const isCategoryCol = h.toLowerCase().includes("category");

//                     return (
//                       <div key={h} className="flex justify-between border-b border-orange-300 pb-1">
//                         <span
//                           className={`font-medium ${
//                             numericRow && isCategoryCol
//                               ? "bg-orange-500 text-white px-1 rounded"
//                               : "text-orange-600"
//                           }`}
//                         >
//                           {h}:
//                         </span>
//                         <span
//                           className={`break-words text-right max-w-xs ${
//                             numericRow && isCategoryCol
//                               ? "bg-orange-500 text-white font-bold px-1 rounded"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {linky && isUrl(v) ? (
//                             isFormHeader ? (
//                               <button
//                                 className="underline text-orange-600 cursor-pointer"
//                                 onClick={() =>
//                                   openProtectedDownload(router, String(v))
//                                 }
//                                 aria-label="Download"
//                                 type="button"
//                               >
//                                 Download
//                               </button>
//                             ) : (
//                               <Link
//                                 href={String(v)}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="underline text-orange-600"
//                               >
//                                 Open
//                               </Link>
//                             )
//                           ) : (
//                             String(v || "-")
//                           )}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// /* =========================
//    Page Component
//    ========================= */
// type Payload = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date: string;
//     effective_date: string;
//     act_information: TableBlockType;
//     professional_tax_slabs: TableBlockType;
//     employment_categories: TableBlockType;
//     downloads: {
//       form_title: string | null;
//       form_url: string | null;
//       website_url: string | null;
//     };
//     meta: {
//       applicable: boolean;
//       max_annual_rate: number | null;
//       slab_count: number | null;
//     };
//   };
// };

// export default function ProfessionalTaxDetails({ payload }: { payload: Payload }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const {
//     state,
//     act_information,
//     professional_tax_slabs,
//     employment_categories,
//     downloads,
//   } = payload.data;

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
//           {/* Left content */}
//           <div className="lg:col-span-3 xl:col-span-4 relative z-10">
//             <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
//                 Professional Tax :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold">
//                 {state.name}
//               </h2>
//             </div>

//             {/* Act Information */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Act Information"
//                 block={act_information}
//                 linkifyCols={["Form", "Website"]}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable
//                   block={act_information}
//                   linkifyCols={["Form", "Website"]}
//                 />
//               </CardContent>
//             </Card>

//             {/* Professional Tax Slabs */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Professional Tax Slabs"
//                 block={professional_tax_slabs}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Professional Tax Slabs
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={professional_tax_slabs} />
//               </CardContent>
//             </Card>

//             {/* Employment Categories */}
//             <div className="block lg:hidden mb-4">
//               <GenericMobileBlock
//                 title="Employment Categories"
//                 block={employment_categories}
//               />
//             </div>
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Employment Categories
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={employment_categories} />
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









// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Calculator, FileText, Globe } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// /* 🔐 Auth-gated download helpers */
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// /* =========================
//    Helpers
//    ========================= */
// type AnyRow = Record<string, string | number | null | undefined>;
// type TableBlockType = { headers: string[]; rows: AnyRow[] };

// const norm = (s: string) =>
//   (s ?? "")
//     .toString()
//     .toLowerCase()
//     .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
//     .trim();

// function buildRowKeyMap(row: AnyRow) {
//   const map: Record<string, any> = {};
//   Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
//   return map;
// }

// function getCell(row: AnyRow, header: string) {
//   const m = buildRowKeyMap(row);
//   return m[norm(header)] ?? "";
// }

// const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);
// const isNumeric = (val: any) => /^\d+$/.test(String(val || "").trim());

// /* =========================
//    Generic desktop table
//    ========================= */
// function GenericTable({
//   block,
//   emphasizeCols = [],
//   linkifyCols = [],
// }: {
//   block: TableBlockType;
//   emphasizeCols?: string[];
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <div className="overflow-x-auto">
//       <Table className="border border-orange-300 border-collapse w-full">
//         <TableHeader className="sticky top-0 z-30">
//           <TableRow className="bg-orange-500 hover:bg-orange-500">
//             {block.headers.map((h) => (
//               <TableHead
//                 key={h}
//                 className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 border border-orange-300"
//               >
//                 {h}
//               </TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody className="relative z-10">
//           {(block.rows ?? []).map((row, rIdx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <TableRow key={rIdx} className="hover:bg-orange-50 border border-orange-300">
//                 {block.headers.map((h) => {
//                   const raw = getCell(row, h);
//                   const emph = emSet.has(h.toLowerCase());
//                   const linky = linkSet.has(h.toLowerCase());
//                   const isFormHeader = h.toLowerCase().includes("form");

//                   let content: React.ReactNode = String(raw || "-");

//                   if (linky && isUrl(raw)) {
//                     const href = String(raw);
//                     if (isFormHeader) {
//                       content = (
//                         <Button
//                           size="sm"
//                           variant="link"
//                           className="text-orange-600 underline p-0 cursor-pointer"
//                           onClick={() => openProtectedDownload(router, href)}
//                           aria-label="Download"
//                         >
//                           Download
//                         </Button>
//                       );
//                     } else {
//                       content = (
//                         <Link
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="underline text-orange-600"
//                         >
//                           Open
//                         </Link>
//                       );
//                     }
//                   }

//                   // ✅ Only Category column highlight when S.No. is numeric
//                   const isCategoryCol = h.toLowerCase().includes("category");

//                   return (
//                     <TableCell
//                       key={h}
//                       className={[
//                         "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px] border border-orange-300",
//                         emph && !numericRow ? "font-semibold text-orange-600" : "",
//                         numericRow && isCategoryCol ? " text-orange-500  font-bold" : "",
//                       ].join(" ")}
//                     >
//                       {content}
//                     </TableCell>
//                   );
//                 })}
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </div>
//   );
// }

// /* =========================
//    Generic mobile block
//    ========================= */
// function GenericMobileBlock({
//   title,
//   block,
//   linkifyCols = [],
// }: {
//   title: string;
//   block: TableBlockType;
//   linkifyCols?: string[];
// }) {
//   const router = useRouter();
//   if (!block?.headers?.length) return null;

//   const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

//   return (
//     <Card className="shadow-sm">
//       <CardContent className="p-3">
//         <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
//           {title}
//         </h3>
//         <div className="space-y-3">
//           {(block.rows ?? []).map((row, idx) => {
//             const sno = getCell(row, "S.No.");
//             const numericRow = isNumeric(sno);

//             return (
//               <div key={idx} className="rounded-lg p-3 border border-orange-300">
//                 <div className="space-y-2 text-xs">
//                   {block.headers.map((h) => {
//                     const v = getCell(row, h);
//                     const linky = linkSet.has(h.toLowerCase());
//                     const isFormHeader = h.toLowerCase().includes("form");
//                     const isCategoryCol = h.toLowerCase().includes("category");

//                     return (
//                       <div key={h} className="flex justify-between border-b border-orange-300 pb-1">
//                         <span
//                           className={`font-medium ${
//                             numericRow && isCategoryCol
//                               ? " text-orange-500 font-bold px-1 rounded"
//                               : "text-orange-600"
//                           }`}
//                         >
//                           {h}:
//                         </span>
//                         <span
//                           className={`break-words text-right max-w-xs ${
//                             numericRow && isCategoryCol
//                               ? "bg-orange-500 text-white font-bold px-1 rounded"
//                               : "text-gray-800"
//                           }`}
//                         >
//                           {linky && isUrl(v) ? (
//                             isFormHeader ? (
//                               <button
//                                 className="underline text-orange-600 cursor-pointer"
//                                 onClick={() => openProtectedDownload(router, String(v))}
//                                 aria-label="Download"
//                                 type="button"
//                               >
//                                 Download
//                               </button>
//                             ) : (
//                               <Link
//                                 href={String(v)}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="underline text-orange-600"
//                               >
//                                 Open
//                               </Link>
//                             )
//                           ) : (
//                             String(v || "-")
//                           )}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// /* =========================
//    Page Component
//    ========================= */
// type Payload = {
//   data: {
//     state: { name: string; slug: string };
//     updated_date: string;
//     effective_date: string;
//     act_information: TableBlockType;
//     professional_tax_slabs: TableBlockType;
//     employment_categories: TableBlockType;
//     downloads: {
//       form_title: string | null;
//       form_url: string | null;
//       website_url: string | null;
//     };
//     meta: {
//       applicable: boolean;
//       max_annual_rate: number | null;
//       slab_count: number | null;
//     };
//   };
// };

// export default function ProfessionalTaxDetails({ payload }: { payload: Payload }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const {
//     state,
//     act_information,
//     professional_tax_slabs,
//     employment_categories,
//     downloads,
//   } = payload.data;

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
//           {/* Left content */}
//           <div className="lg:col-span-3 xl:col-span-4 relative z-10">
//             <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
//               <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
//                 Professional Tax :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold">
//                 {state.name}
//               </h2>
//             </div>

//             {/* 🔥 Three Cards Section */}
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 text-center">
//                   <Calculator className="w-6 h-6 text-orange-500 mx-auto mb-1" />
//                   <h3 className="font-medium text-sm text-gray-900 mb-1">PT Calculator</h3>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     aria-label="PT Calculator"
//                     className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     Calculate
//                   </Button>
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 text-center">
//                   <FileText className="w-6 h-6 text-orange-500 mx-auto mb-1" />
//                   <h3 className="font-medium text-sm text-gray-900 mb-1">Download Forms</h3>
//                   {downloads?.form_url ? (
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => openProtectedDownload(router, downloads.form_url!)}
//                       className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                     >
//                       {downloads?.form_title?.trim() || "Download"}
//                     </Button>
//                   ) : (
//                     <Button variant="outline" size="sm" disabled className="text-xs h-6 px-3">
//                       Download
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
//                 <CardContent className="p-3 text-center">
//                   <Globe className="w-6 h-6 text-orange-500 mx-auto mb-1" />
//                   <h3 className="font-medium text-sm text-gray-900 mb-1">Official Portal</h3>
//                   <Button
//                     asChild
//                     variant="outline"
//                     size="sm"
//                     disabled={!downloads?.website_url}
//                     className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
//                   >
//                     <Link
//                       href={downloads?.website_url ?? "#"}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Visit
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Act Information */}
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={act_information} linkifyCols={["Form", "Website"]} />
//               </CardContent>
//             </Card>

//             {/* Professional Tax Slabs */}
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Professional Tax Slabs
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={professional_tax_slabs} />
//               </CardContent>
//             </Card>

//             {/* Employment Categories */}
//             <Card className="hidden lg:block mb-3 shadow-sm">
//               <CardHeader>
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Employment Categories
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <GenericTable block={employment_categories} />
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







"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Calculator, FileText, Globe } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

/* =========================
   Helpers
   ========================= */
type AnyRow = Record<string, string | number | null | undefined>;
type TableBlockType = { headers: string[]; rows: AnyRow[] };

const norm = (s: string) =>
  (s ?? "")
    .toString()
    .toLowerCase()
    .replace(/[\s_\-\(\)\[\]\{\}:;.,/\\|]+/g, "")
    .trim();

function buildRowKeyMap(row: AnyRow) {
  const map: Record<string, any> = {};
  Object.keys(row || {}).forEach((k) => (map[norm(k)] = row[k]));
  return map;
}

function getCell(row: AnyRow, header: string) {
  const m = buildRowKeyMap(row);
  return m[norm(header)] ?? "";
}

const isUrl = (v: any) => typeof v === "string" && /^https?:\/\/.+/i.test(v);
const isNumeric = (val: any) => /^\d+$/.test(String(val || "").trim());

/* =========================
   Generic desktop table
   ========================= */
function GenericTable({
  block,
  emphasizeCols = [],
  linkifyCols = [],
}: {
  block: TableBlockType;
  emphasizeCols?: string[];
  linkifyCols?: string[];
}) {
  const router = useRouter();
  if (!block?.headers?.length) return null;

  const emSet = new Set(emphasizeCols.map((h) => h.toLowerCase()));
  const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

  return (
    <div className="overflow-x-auto">
      <Table className="border border-orange-300 border-collapse w-full">
        <TableHeader className="sticky top-0 z-30">
          <TableRow className="bg-orange-500 hover:bg-orange-500">
            {block.headers.map((h) => (
              <TableHead
                key={h}
                className="!text-center text-white text-xs lg:text-sm font-semibold bg-orange-500 sticky top-0 z-30 border border-orange-300"
              >
                {h}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="relative z-10">
          {(block.rows ?? []).map((row, rIdx) => {
            const sno = getCell(row, "S.No.");
            const numericRow = isNumeric(sno);

            return (
              <TableRow
                key={rIdx}
                className="hover:bg-orange-50 border border-orange-300"
              >
                {block.headers.map((h) => {
                  const raw = getCell(row, h);
                  const emph = emSet.has(h.toLowerCase());
                  const linky = linkSet.has(h.toLowerCase());
                  const isFormHeader = h.toLowerCase().includes("form");

                  let content: React.ReactNode = String(raw || "-");

                  if (linky && isUrl(raw)) {
                    const href = String(raw);
                    if (isFormHeader) {
                      content = (
                        <Button
                          size="sm"
                          variant="link"
                          className="text-orange-600 underline p-0 cursor-pointer"
                          onClick={() => openProtectedDownload(router, href)}
                          aria-label="Download"
                        >
                          Download
                        </Button>
                      );
                    } else {
                      content = (
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline text-orange-600 hover:cursor-pointer"
                        >
                          Open
                        </Link>
                      );
                    }
                  }

                  const isCategoryCol = h.toLowerCase().includes("category");

                  return (
                    <TableCell
                      key={h}
                      className={[
                        "text-center text-xs lg:text-sm p-2 lg:p-3 align-top whitespace-normal break-words max-w-[150px] border border-orange-300",
                        emph && !numericRow ? "font-semibold text-orange-600 " : "",
                        numericRow && isCategoryCol
                          ? " text-orange-500 font-bold"
                          : "",
                      ].join(" ")}
                    >
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

/* =========================
   Generic mobile block
   ========================= */
function GenericMobileBlock({
  title,
  block,
  linkifyCols = [],
}: {
  title: string;
  block: TableBlockType;
  linkifyCols?: string[];
}) {
  const router = useRouter();
  if (!block?.headers?.length) return null;

  const linkSet = new Set(linkifyCols.map((h) => h.toLowerCase()));

  return (
    <Card className="shadow-sm mb-3">
      <CardContent className="p-3">
        <h3 className="text-base font-bold mb-2 bg-orange-500 text-white text-center">
          {title}
        </h3>
        <div className="space-y-3">
          {(block.rows ?? []).map((row, idx) => {
            const sno = getCell(row, "S.No.");
            const numericRow = isNumeric(sno);

            return (
              <div
                key={idx}
                className="rounded-lg p-3 border border-orange-300"
              >
                <div className="space-y-2 text-xs">
                  {block.headers.map((h) => {
                    const v = getCell(row, h);
                    const linky = linkSet.has(h.toLowerCase());
                    const isFormHeader = h.toLowerCase().includes("form");
                    const isCategoryCol = h.toLowerCase().includes("category");

                    return (
                      <div
                        key={h}
                        className="flex justify-between border-b border-orange-300 pb-1"
                      >
                        <span
                          className={`font-medium ${
                            numericRow && isCategoryCol
                              ? " text-orange-500 font-bold px-1 rounded"
                              : "text-orange-600"
                          }`}
                        >
                          {h}:
                        </span>
                        <span
                          className={`break-words text-right max-w-xs ${
                            numericRow && isCategoryCol
                              ? " text-orange-500 font-bold px-1 rounded"
                              : "text-gray-800"
                          }`}
                        >
                          {linky && isUrl(v) ? (
                            isFormHeader ? (
                              <button
                                className="underline text-orange-600 hover:cursor-pointer"
                                onClick={() =>
                                  openProtectedDownload(router, String(v))
                                }
                                aria-label="Download"
                                type="button"
                              >
                                Download
                              </button>
                            ) : (
                              <Link
                                href={String(v)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-orange-600"
                              >
                                Open
                              </Link>
                            )
                          ) : (
                            String(v || "-")
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

/* =========================
   Page Component
   ========================= */
type Payload = {
  data: {
    state: { name: string; slug: string };
    updated_date: string;
    effective_date: string;
    act_information: TableBlockType;
    professional_tax_slabs: TableBlockType;
    employment_categories: TableBlockType;
    downloads: {
      form_title: string | null;
      form_url: string | null;
      website_url: string | null;
    };
    meta: {
      applicable: boolean;
      max_annual_rate: number | null;
      slab_count: number | null;
    };
  };
};

export default function ProfessionalTaxDetails({
  payload,
}: {
  payload: Payload;
}) {
  const router = useRouter();

  useEffect(() => {
    const path =
      typeof window !== "undefined" ? window.location.pathname : "/";
    const search =
      typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, [router]);

  const {
    state,
    act_information,
    professional_tax_slabs,
    employment_categories,
    downloads,
  } = payload.data;

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:grid-cols-5 xl:gap-5">
          {/* Left content */}
          <div className="lg:col-span-3 xl:col-span-4 relative z-10">
            <div className="mb-3 sm:mb-4 lg:mb-3 flex justify-between">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                Professional Tax :
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-orange-600 font-semibold">
                {state.name}
              </h2>
            </div>

            {/* 🔥 Three Cards Section */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <Calculator className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1 ">
                    PT Calculator
                  </h3>
                  <Button
                    variant="outline"
                    size="sm"
                    aria-label="PT Calculator"
                    className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 cursor-pointer hover:text-orange-600"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <FileText className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">
                    Download Forms
                  </h3>
                  {downloads?.form_url ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        openProtectedDownload(router, downloads.form_url!)
                      }
                      className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 cursor-pointer hover:text-orange-600"
                    >
                      {downloads?.form_title?.trim() || "Download"}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="text-xs h-6 px-3"
                    >
                      Download
                    </Button>
                  )}
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-orange-200">
                <CardContent className="p-3 text-center">
                  <Globe className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <h3 className="font-medium text-sm text-gray-900 mb-1">
                    Official Portal
                  </h3>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    disabled={!downloads?.website_url}
                    className="text-xs h-6 px-3 hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600"
                  >
                    <Link
                      href={downloads?.website_url ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Act Information */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Act Information"
                block={act_information}
                linkifyCols={["Form", "Website"]}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable
                  block={act_information}
                  linkifyCols={["Form", "Website"]}
                />
              </CardContent>
            </Card>

            {/* Professional Tax Slabs */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Professional Tax Slabs"
                block={professional_tax_slabs}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Professional Tax Slabs
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable block={professional_tax_slabs} />
              </CardContent>
            </Card>

            {/* Employment Categories */}
            <div className="block lg:hidden mb-4">
              <GenericMobileBlock
                title="Employment Categories"
                block={employment_categories}
              />
            </div>
            <Card className="hidden lg:block mb-3 shadow-sm">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg font-bold">
                  Employment Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <GenericTable block={employment_categories} />
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 2xl:w-sm">
            <div className="sticky top-24">
              <Card>
                <CardContent>
                  <PopularSearch className="mb-6" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// import React from 'react';
// import { ExternalLink } from 'lucide-react';

// const ActInformation = () => {
//   const actData = {
//     act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
//     rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
//     applicability: "It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.",
//     frequency: "Annual",
//     form: "Form-F",
//     website: "www.praansconsultech.com",
//     websiteUrl: "https://www.praansconsultech.com",
//     exemption: "Supervisor and Manager",
//     authority: "Labour Welfare Fund Commissioner",
//     interest: "10% on every late payment",
//     penalty: "13% per annum on every late payment",
//     notification: "Download",
//     remarks: "—",
//     // Contribution Details
//     contributions: [
//       {
//         category: "All Employees",
//         employeeContribution: "10",
//         employerContribution: "80",
//         total: "100",
//         dateOfLWFDeduction: "31st Dec'2025",
//         returnSubmission: "31st Jan'25",
//         form: "Form-F"
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
//       <div className=" mx-auto">
//         <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          
//           {/* Left Sidebar - Orange */}
//           <div className="bg-gradient-to-b from-orange-500 to-orange-600 lg:w-80 p-8 text-white flex flex-col justify-start">
//             <div className="mb-10">
//               <h1 className="text-4xl font-bold leading-tight mb-1">Act</h1>
//               <h1 className="text-4xl font-bold leading-tight">Information</h1>
//             </div>

//             <div className="space-y-5">
//               {/* Frequency Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 text-center">
//                 <div className="text-white text-xl font-bold mb-1">{actData.frequency}</div>
//                 <div className="text-white text-sm opacity-90">Frequency</div>
//               </div>

//               {/* Form Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 text-center">
//                 <div className="text-white text-xl font-bold mb-1">{actData.form}</div>
//                 <div className="text-white text-sm opacity-90">Form</div>
//               </div>

//               {/* Official Site Box */}
//               <a 
//                 href={actData.websiteUrl} 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 text-center block hover:bg-opacity-50 transition-all"
//               >
//                 <div className="flex items-center justify-center mb-1">
//                   <ExternalLink className="text-white" size={20} />
//                 </div>
//                 <div className="text-white text-sm">Official Site</div>
//               </a>
//             </div>
//           </div>

//           {/* Main Content - Right Side */}
//           <div className="flex-1 p-10 lg:p-12 bg-white">
            
//             {/* Act Section */}
//             <div className="mb-8">
//               <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-3">
//                 ACT
//               </div>
//               <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
//                 {actData.act}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-8"></div>

//             {/* Rule Section */}
//             <div className="mb-8">
//               <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-3">
//                 RULE
//               </div>
//               <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
//                 {actData.rule}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-8"></div>

//             {/* Applicability Section */}
//             <div className="mb-10">
//               <div className="text-orange-500 text-sm font-bold uppercase tracking-wider mb-3">
//                 APPLICABILITY
//               </div>
//               <p className="text-gray-600 text-base leading-relaxed">
//                 {actData.applicability}
//               </p>
//             </div>

//             <div className="border-t border-gray-300 my-10"></div>

//             {/* Additional Information Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
//               {/* Exemption */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   EXEMPTION
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.exemption}
//                 </div>
//               </div>

//               {/* Authority */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   AUTHORITY
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.authority}
//                 </div>
//               </div>

//               {/* Website */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   WEBSITE
//                 </div>
//                 <a 
//                   href={actData.websiteUrl} 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="text-orange-500 text-base font-medium hover:text-orange-600 inline-flex items-center gap-2"
//                 >
//                   {actData.website}
//                   <ExternalLink size={16} />
//                 </a>
//               </div>

//               {/* Interest */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   INTEREST
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.interest}
//                 </div>
//               </div>

//               {/* Penalty */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   PENALTY
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.penalty}
//                 </div>
//               </div>

//               {/* Notification */}
//               <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   NOTIFICATION
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.notification}
//                 </div>
//               </div>

//               {/* Remarks - Full Width */}
//               <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-3 tracking-wider">
//                   REMARKS
//                 </div>
//                 <div className="text-gray-800 text-base font-medium">
//                   {actData.remarks}
//                 </div>
//               </div>

//             </div>

//             {/* Contribution Details Table */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Contribution Details</h3>
              
//               <div className="overflow-x-auto -mx-6 px-6">
//                 <div className="inline-block min-w-full align-middle">
//                   <table className="min-w-full border-collapse bg-white shadow-md rounded-xl overflow-hidden">
//                     <thead>
//                       <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//                         <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider">Category</th>
//                         <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Employee Contribution</th>
//                         <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Employer Contribution</th>
//                         <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Total</th>
//                         <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider">Date of LWF Deduction</th>
//                         <th className="px-4 py-4 text-left text-xs font-bold uppercase tracking-wider">Return Submission</th>
//                         <th className="px-4 py-4 text-center text-xs font-bold uppercase tracking-wider">Form</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {actData.contributions.map((item, index) => (
//                         <tr key={index} className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
//                           <td className="px-4 py-4 text-gray-800 font-medium">{item.category}</td>
//                           <td className="px-4 py-4 text-gray-800 text-center">{item.employeeContribution}</td>
//                           <td className="px-4 py-4 text-gray-800 text-center">{item.employerContribution}</td>
//                           <td className="px-4 py-4 text-gray-800 font-semibold text-center">{item.total}</td>
//                           <td className="px-4 py-4 text-gray-800">{item.dateOfLWFDeduction}</td>
//                           <td className="px-4 py-4 text-gray-800">{item.returnSubmission}</td>
//                           <td className="px-4 py-4 text-orange-600 font-semibold text-center">{item.form}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActInformation;
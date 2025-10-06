// "use client";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Download, ExternalLink, FileText, Calendar as CalIcon } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // 🔐 Auth-gated download helpers (shared util)
// import { openProtectedDownload, handleAutoDownloadOnReturn } from "@/lib/download-auth";

// type Row = Record<string, string | null>;
// type WFSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   act_information: { headers: string[]; rows: Row[] };
//   labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
//   downloads: { form_title?: string | null; form_url?: string | null; website_url?: string | null };
// };

// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0", "127.0.1.1", "::1"]);
// function normalizeUrl(input?: string | null, apiBase?: string): string | null {
//   if (!input) return null;
//   const API_ORIGIN = new URL(apiBase || "").origin;
//   const val = input.trim();
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return API_ORIGIN + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     if (!apiBase) return null;
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
// const cell = (row: Row, header: string) => row[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

// // ---------- Component ----------
// export default function WelfareFundDetails({ data, apiBase }: { data: WFSlugData; apiBase: string }) {
//   const router = useRouter();

//   // Auto-download if user just returned from login (?dl=...)
//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const actH = data.act_information.headers;
//   const actRows = data.act_information.rows;
//   const contribH = data.labour_welfare_fund_contribution.headers;
//   const contribRows = data.labour_welfare_fund_contribution.rows;

//   const formUrlNorm = normalizeUrl(data.downloads.form_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(data.downloads.website_url, apiBase);
//   const formTitle = fmt(data.downloads.form_title);
//   const formButtonLabel =
//     formTitle !== "—" ? `Download ${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

//   return (
//     <div className="min-h-screen">
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
//           <div className="lg:col-span-3">
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Labour Welfare Fund :
//                 </h1>
//               </div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {data?.state.name}
//               </h2>
//             </div>

//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {actH?.map((h) => (
//                           <th key={h} className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center">
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {actRows?.map((r, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {actH?.map((h) => {
//                             const raw = cell(r, h);
//                             const low = h.toLowerCase();

//                             if (low === "frequency") {
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm text-center">
//                                   <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
//                                     {fmt(raw)}
//                                   </Badge>
//                                 </td>
//                               );
//                             }

//                             if (low === "form") {
//                               const href = normalizeUrl(typeof raw === "string" ? raw : null, apiBase);
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm text-center">
//                                   {href ? (
//                                     <Button
//                                       asChild
//                                       variant="link"
//                                       size="sm"
//                                       className="text-orange-600 p-0"
//                                       aria-label={`Download ${fileNameFromUrl(href)}`}
//                                     >
//                                       {/* Intercept click -> gated download */}
//                                       <Link
//                                         href={href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         onClick={(e) => {
//                                           e.preventDefault();
//                                           openProtectedDownload(router, href);
//                                         }}
//                                       >
//                                         <FileText className="h-4 w-4 mr-1" />
//                                         {fileNameFromUrl(href)}
//                                       </Link>
//                                     </Button>
//                                   ) : (
//                                     "—"
//                                   )}
//                                 </td>
//                               );
//                             }

//                             if (low === "website") {
//                               const href =
//                                 normalizeUrl(typeof raw === "string" ? raw : null, apiBase) || websiteUrlNorm || "";
//                               return (
//                                 <td key={h} className="px-3 py-4 text-sm text-center">
//                                   {href ? (
//                                     <Link
//                                       href={href}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="text-orange-600 hover:underline inline-flex items-center"
//                                       aria-label="Open Official Site"
//                                     >
//                                       <ExternalLink className="h-4 w-4 mr-1" /> Official Site
//                                     </Link>
//                                   ) : (
//                                     "—"
//                                   )}
//                                 </td>
//                               );
//                             }

//                             return (
//                               <td key={h} className="px-3 py-4 text-sm text-gray-900 break-words text-center">
//                                 {fmt(raw)}
//                               </td>
//                             );
//                           })}
//                         </tr>
//                       ))}
//                       {actRows?.length === 0 && (
//                         <tr>
//                           <td
//                             colSpan={actH?.length || 1}
//                             className="px-4 py-6 text-center text-sm text-gray-500"
//                           >
//                             No data available.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500 ">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">Act Information</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {actRows?.map((r, idx) => (
//                     <div key={idx} className=" rounded-lg p-3 border text-xs space-y-2">
//                       {actH?.map((h) => {
//                         const raw = cell(r, h);
//                         const low = h.toLowerCase();

//                         if (low === "frequency") {
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
//                                 {fmt(raw)}
//                               </Badge>
//                             </div>
//                           );
//                         }

//                         if (low === "form") {
//                           const href = normalizeUrl(typeof raw === "string" ? raw : null, apiBase);
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               {href ? (
//                                 <Link
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                   aria-label={`Download ${fileNameFromUrl(href)}`}
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     openProtectedDownload(router, href);
//                                   }}
//                                 >
//                                   {fileNameFromUrl(href)}
//                                 </Link>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         if (low === "website") {
//                           const href =
//                             normalizeUrl(typeof raw === "string" ? raw : null, apiBase) || websiteUrlNorm || "";
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               {href ? (
//                                 <Link
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                   aria-label="Open Official Site"
//                                 >
//                                   Official Site
//                                 </Link>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         return (
//                           <div key={h} className="flex gap-2 justify-between">
//                             <span className="font-medium text-orange-500">{h}:</span>
//                             <span>{fmt(raw)}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   ))}
//                   {actRows?.length === 0 && (
//                     <div className="text-center text-sm text-gray-500">No data available.</div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Desktop */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Labour Welfare Fund Contribution</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {contribH?.map((h) => (
//                           <th
//                             key={h}
//                             className={`px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center ${h.toLowerCase() === 'category' ? 'w-48 max-w-48' : ''
//                               }`}
//                           >
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {contribRows?.map((r, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {contribH?.map((h) => (
//                             <td
//                               key={h}
//                               className={`px-3 py-4 text-sm text-gray-900 break-words text-center ${["Employee", "Employer", "Total"].includes(h) ? "text-green-600 font-semibold" : ""
//                                 } ${h.toLowerCase() === 'category' ? 'w-48 max-w-48 text-justify' : ''
//                                 }`}
//                             >
//                               {fmt(cell(r, h))}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                       {contribRows?.length === 0 && (
//                         <tr>
//                           <td
//                             colSpan={contribH?.length || 1}
//                             className="px-4 py-6 text-center text-sm text-gray-500"
//                           >
//                             No data available.
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Mobile */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
//                     Labour Welfare Fund Contribution
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {contribRows?.map((r, idx) => (
//                     <div key={idx} className="bg-white rounded-lg p-3 border text-xs space-y-2c">
//                       {contribH?.map((h) => (
//                         <div key={h} className="flex gap-2 justify-between">
//                           <span className="font-medium text-orange-500">{h}:</span>
//                           <span
//                             className={`${["Employee", "Employer", "Total"].includes(h) ? "text-green-600 font-semibold" : ""
//                               }`}
//                           >
//                             {fmt(cell(r, h))}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                   {contribRows?.length === 0 && (
//                     <div className="text-center text-sm text-gray-500">No data available.</div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* --------- Quick Actions --------- */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
//                   {formUrlNorm ? (
//                     <Button
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 cursor-pointer"
//                       aria-label={formButtonLabel}
//                       onClick={() => openProtectedDownload(router, formUrlNorm)}
//                     >
//                       {formButtonLabel}
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
//                       aria-label="Visit Website"
//                     >
//                       <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer">
//                         Visit Website
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button size="sm" variant="outline" disabled className="w-full text-xs lg:text-sm h-7 lg:h-8">
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <CalIcon className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Due Dates</h3>
//                   <Link href="/calendar" className="block">
//                     <Button
//                       size="sm"
//                       variant="outline"
//                       className="w-full hover:bg-orange-50 hover:border-orange-200 hover:text-orange-600 text-xs lg:text-sm h-7 lg:h-8 cursor-pointer"
//                       aria-label="View Calendar"
//                     >
//                       View Calendar
//                     </Button>
//                   </Link>
//                 </CardContent>
//               </Card> */}
//             </div>
//           </div>

//           {/* Sidebar */}
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
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Download,
//   ExternalLink,
//   FileText,
//   Calendar as CalIcon,
// } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// type Row = Record<string, string | null>;
// type WFSlugData = {
//   state: { name: string; slug: string };
//   updated_date?: string | null;
//   effective_date?: string | null;
//   act_information: { headers: string[]; rows: Row[] };
//   labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
//   downloads: {
//     form_title?: string | null;
//     form_url?: string | null;
//     website_url?: string | null;
//   };
// };

// const LOCAL_HOSTS = new Set([
//   "localhost",
//   "127.0.0.1",
//   "127.1.1.0",
//   "127.0.1.1",
//   "::1",
// ]);
// function normalizeUrl(input?: string | null, apiBase?: string): string | null {
//   if (!input) return null;
//   const API_ORIGIN = new URL(apiBase || "").origin;
//   const val = input.trim();
//   try {
//     const u = new URL(val);
//     if (LOCAL_HOSTS.has(u.hostname)) {
//       return API_ORIGIN + u.pathname + u.search + u.hash;
//     }
//     return u.toString();
//   } catch {
//     if (!apiBase) return null;
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
// const cell = (row: Row, header: string) => row[header] ?? "—";
// const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

// export default function WelfareFundDetails({
//   data,
//   apiBase,
// }: {
//   data: WFSlugData;
//   apiBase: string;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const actH = data.act_information.headers;
//   const actRows = data.act_information.rows;
//   const contribH = data.labour_welfare_fund_contribution.headers;
//   const contribRows = data.labour_welfare_fund_contribution.rows;

//   const formUrlNorm = normalizeUrl(data.downloads.form_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(data.downloads.website_url, apiBase);
//   const formTitle = fmt(data.downloads.form_title);
//   const formButtonLabel =
//     formTitle !== "—"
//       ? ` ${formTitle}`
//       : formUrlNorm
//       ? fileNameFromUrl(formUrlNorm)
//       : "Download";

//   // ---------- helpers for first table values ----------
//   const first = actRows?.[0];
//   const vAct = first ? cell(first, "Act") : "—";
//   const vRule = first ? cell(first, "Rule") : "—";
//   const vDetails = first ? cell(first, "Applicability") : "—";
//   // const vFreq = first ? cell(first, "Frequency") : "—";
//   const vFormRaw = first ? cell(first, "Form") : "—";
//   const vWebsiteRaw = first ? cell(first, "Website") : null;

//   const formHref = normalizeUrl(
//     typeof vFormRaw === "string" ? vFormRaw : null,
//     apiBase
//   );
//   const siteHref =
//     normalizeUrl(
//       typeof vWebsiteRaw === "string" ? vWebsiteRaw : null,
//       apiBase
//     ) ||
//     websiteUrlNorm ||
//     undefined;

//   return (
//     <div className="min-h-[80vh]">
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
//           <div className="lg:col-span-3">
//             <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
//               <div>
//                 <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                   Labour Welfare Fund :
//                 </h1>
//               </div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {data?.state.name}
//               </h2>
//             </div>

//             {/* ===== Act Information (DESKTOP) ===== */}
//             {/* ===== Act Information (DESKTOP) — MATCH SECOND CARD ===== */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="p-4">
//                 {actH?.length ? (
//                   <div className="rounded-xl overflow-hidden border border-orange-500">
//                     <table className="w-full table-fixed border-collapse">
//                       {/* lock first col width (fixed header col) */}
//                       <colgroup>
//                         <col style={{ width: "14rem" }} />
//                         <col span={actRows?.length || 0} />
//                       </colgroup>

//                       <tbody>
//                         {actH.map((h) => (
//                           <tr key={h} className="bg-white">
//                             {/* left header col */}
//                             <th
//                               scope="row"
//                               className={[
//                                 "px-4 py-3 text-xs lg:text-sm",
//                                 "bg-orange-50 text-orange-700 font-semibold uppercase tracking-wide text-left",
//                                 "border-y border-orange-500 border-r-2 border-r-orange-500",
//                                 "align-top whitespace-normal",
//                               ].join(" ")}
//                             >
//                               {h}
//                             </th>

//                             {/* values across sets (dynamic columns) */}
//                             {actRows?.map((row, cIdx) => {
//                               const raw = cell(row, h);
//                               const low = h.trim().toLowerCase();
//                               const looksLikeWebsite =
//                                 low.includes("website") ||
//                                 low.includes("portal") ||
//                                 low.includes("site");
//                               const looksLikeForm = low.includes("form");
//                               const href =
//                                 typeof raw === "string"
//                                   ? normalizeUrl(raw, apiBase)
//                                   : null;
//                               const isHttpUrl =
//                                 typeof raw === "string" &&
//                                 /^https?:\/\/.+/i.test(raw.trim());

//                               return (
//                                 <td
//                                   key={`${h}-${cIdx}`}
//                                   className={[
//                                     "px-4 py-3 text-xs lg:text-sm text-gray-900 text-left align-top",
//                                     "border border-orange-500",
//                                     cIdx === 0 ? "border-l-0" : "",
//                                   ].join(" ")}
//                                 >
//                                   {looksLikeWebsite && (href || isHttpUrl) ? (
//                                     <Link
//                                       href={href || String(raw)}
//                                       target="_blank"
//                                       rel="noopener noreferrer"
//                                       className="underline text-orange-600 break-all"
//                                     >
//                                       {String(raw)}
//                                     </Link>
//                                   ) : looksLikeForm && (href || isHttpUrl) ? (
//                                     <button
//                                       type="button"
//                                       onClick={() =>
//                                         openProtectedDownload(
//                                           router,
//                                           href || String(raw)
//                                         )
//                                       }
//                                       className="underline text-orange-600"
//                                     >
//                                       {fileNameFromUrl(href || String(raw))}
//                                     </button>
//                                   ) : (
//                                     <span className="break-words">
//                                       {fmt(raw)}
//                                     </span>
//                                   )}
//                                 </td>
//                               );
//                             })}
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 ) : (
//                   <div className="px-4 py-6 text-center text-sm text-gray-500">
//                     No data available.
//                   </div>
//                 )}
//               </CardContent>
//             </Card>

//             {/* ===== /Act Information (DESKTOP) ===== */}

//             {/* Mobile Act Information — UNTOUCHED */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500 ">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
//                     Act Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {actRows?.map((r, idx) => (
//                     <div
//                       key={idx}
//                       className=" rounded-lg p-3 border text-xs space-y-2"
//                     >
//                       {actH?.map((h) => {
//                         const raw = cell(r, h);
//                         const low = h.toLowerCase();

//                         if (low === "frequency") {
//                           return (
//                             <div key={h} className="flex gap-2 justify-between align-text-bottom">
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               <Badge
//                                 variant="secondary"
//                                 className="bg-green-100 text-green-800 text-xs"
//                               >
//                                 {fmt(raw)}
//                               </Badge>
//                             </div>
//                           );
//                         }

//                         if (low === "form") {
//                           const href = normalizeUrl(
//                             typeof raw === "string" ? raw : null,
//                             apiBase
//                           );
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               {href ? (
//                                 <Link
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                   aria-label={`Download ${fileNameFromUrl(
//                                     href
//                                   )}`}
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     openProtectedDownload(router, href);
//                                   }}
//                                 >
//                                   {fileNameFromUrl(href)}
//                                 </Link>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         if (low === "website") {
//                           const href =
//                             normalizeUrl(
//                               typeof raw === "string" ? raw : null,
//                               apiBase
//                             ) ||
//                             websiteUrlNorm ||
//                             "";
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">
//                                 {h}:
//                               </span>
//                               {href ? (
//                                 <Link
//                                   href={href}
//                                   target="_blank"
//                                   rel="noopener noreferrer"
//                                   className="text-orange-600 underline"
//                                   aria-label="Open Official Site"
//                                 >
//                                   Official Site
//                                 </Link>
//                               ) : (
//                                 "—"
//                               )}
//                             </div>
//                           );
//                         }

//                         return (
//                           <div key={h} className="table-row">
//           {/* Left label */}
//           <span className="table-cell align-top font-medium text-orange-500 w-[38%] pr-2">
//             {h}:
//           </span>

//           {/* Right value */}
//           <span className="table-cell align-top text-gray-800 break-words text-justify">
//             {fmt(raw)}
//           </span>
//         </div>
//                         );
//                       })}
//                     </div>
//                   ))}
//                   {actRows?.length === 0 && (
//                     <div className="text-center text-sm text-gray-500">
//                       No data available.
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ===== Contribution (DESKTOP) — UNTOUCHED ===== */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Labour Welfare Fund Contribution
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   {/* Outer rounded frame exactly like reference */}
//                   <div className="rounded-xl overflow-hidden border border-orange-500">
//                     {/* 🔸 NO GAP: use border-collapse, not border-separate */}
//                     <table className="w-full border-collapse table-fixed">
//                       <thead>
//                         <tr className="bg-orange-700 text-white">
//                           {contribH?.map((h, i) => (
//                             <th
//                               key={h}
//                               className={[
//                                 "px-4 py-3 text-xs lg:text-sm font-semibold uppercase tracking-wide",
//                                 // tight grid on header itself (no spacer row)
//                                 "border border-orange-500",
//                                 // first column a bit wider + left aligned like ref
//                                 h.toLowerCase() === "category"
//                                   ? "w-64 text-left"
//                                   : "text-center",
//                                 // rounded top corners like the card
//                                 i === 0 ? "rounded-tl-xl" : "",
//                                 i === contribH.length - 1
//                                   ? "rounded-tr-xl"
//                                   : "",
//                               ].join(" ")}
//                             >
//                               {h}
//                             </th>
//                           ))}
//                         </tr>
//                       </thead>

//                       <tbody>
//                         {contribRows?.map((r, ridx) => (
//                           <tr key={ridx} className="bg-white">
//                             {contribH?.map((h, cidx) => (
//                               <td
//                                 key={h}
//                                 className={[
//                                   "px-4 py-4 text-xs lg:text-sm text-gray-900 align-top",
//                                   // thin orange grid exactly like screenshot
//                                   "border border-orange-500",
//                                   // first column left, others center (matches ref)
//                                   cidx === 0 ? "text-left" : "text-center",
//                                   // green emphasis for numeric columns shown in ref
//                                   ["Employee", "Employer", "Total"].includes(h)
//                                     ? "text-green-700 font-semibold"
//                                     : "",
//                                 ].join(" ")}
//                               >
//                                 {fmt(cell(r, h))}
//                               </td>
//                             ))}
//                           </tr>
//                         ))}

//                         {(!contribRows || contribRows.length === 0) && (
//                           <tr>
//                             <td
//                               colSpan={contribH?.length || 1}
//                               className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
//                             >
//                               No data available.
//                             </td>
//                           </tr>
//                         )}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* ===== Contribution (MOBILE) — UNTOUCHED ===== */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
//                     Labour Welfare Fund Contribution
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {contribRows?.map((r, idx) => (
//                     <div
//                       key={idx}
//                       className="bg-white rounded-lg p-3 border text-xs space-y-2c"
//                     >
//                       {contribH?.map((h) => (
//                         <div key={h} className="flex gap-2 justify-between">
//                           <span className="font-medium text-orange-500">
//                             {h}:
//                           </span>
//                           <span
//                             className={`${
//                               ["Employee", "Employer", "Total"].includes(h)
//                                 ? "text-green-600 font-semibold"
//                                 : ""
//                             }`}
//                           >
//                             {fmt(cell(r, h))}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                   {contribRows?.length === 0 && (
//                     <div className="text-center text-sm text-gray-500">
//                       No data available.
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* --------- Quick Actions --------- */}

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Form */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     Download Form
//                   </h3>
//                   {formUrlNorm ? (
//                     <Button
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
//                       title={formButtonLabel}
//                       aria-label={formButtonLabel}
//                       onClick={() => openProtectedDownload(router, formUrlNorm)}
//                     >
//                       {formButtonLabel}
//                     </Button>
//                   ) : (
//                     <Button
//                       size="sm"
//                       disabled
//                       className="w-[90%] h-9 text-sm truncate"
//                     >
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     Official Website
//                   </h3>
//                   {websiteUrlNorm ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate rounded-md"
//                       aria-label="Visit Website"
//                       title="Visit Website"
//                     >
//                       <Link
//                         href={websiteUrlNorm}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Visit Website
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button
//                       size="sm"
//                       disabled
//                       className="w-[90%] h-9 text-sm truncate"
//                     >
//                       Not Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Static Download Notification */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className=" font-bold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     Download Notification
//                   </h3>
//                   <Button
//                     size="sm"
//                     className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
//                   >
//                     Statement regarding notification
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>

          
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
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Download,
  ExternalLink,
  FileText,
  Calendar as CalIcon,
} from "lucide-react";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

type Row = Record<string, string | null>;
type WFSlugData = {
  state: { name: string; slug: string };
  updated_date?: string | null;
  effective_date?: string | null;
  act_information: { headers: string[]; rows: Row[] };
  labour_welfare_fund_contribution: { headers: string[]; rows: Row[] };
  downloads: {
    form_title?: string | null;
    form_url?: string | null;
    website_url?: string | null;
  };
};

const LOCAL_HOSTS = new Set([
  "localhost",
  "127.0.0.1",
  "127.1.1.0",
  "127.0.1.1",
  "::1",
]);

function normalizeUrl(input?: string | null, apiBase?: string): string | null {
  if (!input) return null;
  const API_ORIGIN = new URL(apiBase || "").origin;
  const val = input.trim();
  try {
    const u = new URL(val);
    if (LOCAL_HOSTS.has(u.hostname)) {
      return API_ORIGIN + u.pathname + u.search + u.hash;
    }
    return u.toString();
  } catch {
    if (!apiBase) return null;
    if (val.startsWith("/")) return API_ORIGIN + val;
    if (val.startsWith("storage/") || val.startsWith("/storage/")) {
      return API_ORIGIN + (val.startsWith("/") ? "" : "/") + val;
    }
    return null;
  }
}

function fileNameFromUrl(u: string): string {
  try {
    const url = new URL(u);
    const last = url.pathname.split("/").filter(Boolean).pop() ?? "";
    return last || "Download";
  } catch {
    return "Download";
  }
}

const cell = (row: Row, header: string) => row[header] ?? "—";
const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

export default function WelfareFundDetails({
  data,
  apiBase,
}: {
  data: WFSlugData;
  apiBase: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const actH = data.act_information.headers;
  const actRows = data.act_information.rows;
  const contribH = data.labour_welfare_fund_contribution.headers;
  const contribRows = data.labour_welfare_fund_contribution.rows;

  const formUrlNorm = normalizeUrl(data.downloads.form_url, apiBase);
  const websiteUrlNorm = normalizeUrl(data.downloads.website_url, apiBase);
  const formTitle = fmt(data.downloads.form_title);
  const formButtonLabel =
    formTitle !== "—"
      ? ` ${formTitle}`
      : formUrlNorm
      ? fileNameFromUrl(formUrlNorm)
      : "Download";

  // ---------- helpers for first table values ----------
  const first = actRows?.[0];
  const vAct = first ? cell(first, "Act") : "—";
  const vRule = first ? cell(first, "Rule") : "—";
  const vDetails = first ? cell(first, "Applicability") : "—";
  const vFormRaw = first ? cell(first, "Form") : "—";
  const vWebsiteRaw = first ? cell(first, "Website") : null;

  const formHref = normalizeUrl(
    typeof vFormRaw === "string" ? vFormRaw : null,
    apiBase
  );
  const siteHref =
    normalizeUrl(
      typeof vWebsiteRaw === "string" ? vWebsiteRaw : null,
      apiBase
    ) ||
    websiteUrlNorm ||
    undefined;

  return (
    <div className="min-h-screen w-full">
      <div className="w-full max-w-none mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {/* Popular Search (mobile) */}
        <div className="lg:hidden mb-3 sm:mb-4 w-full">
          <Card className="shadow-sm w-full">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="w-full grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          <div className="w-full lg:col-span-3 min-w-0">
            {/* Header Section - Responsive */}
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3 w-full">
              <div className="w-full sm:w-auto">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-slate-800 break-words">
                  Labour Welfare Fund :
                </h1>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl text-orange-600 font-semibold break-words">
                {data?.state.name}
              </h2>
            </div>

            {/* ===== Act Information (DESKTOP) - Responsive ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-2 sm:p-3 lg:p-4">
                {actH?.length ? (
                  <div className="w-full overflow-hidden">
                    <div className="w-full overflow-x-auto">
                      <div className="min-w-[500px] rounded-xl overflow-hidden border border-orange-500">
                        <table className="w-full table-fixed border-collapse">
                          {/* lock first col width (fixed header col) */}
                          <colgroup>
                            <col style={{ width: "180px", minWidth: "150px" }} />
                            <col />
                          </colgroup>

                          <tbody>
                            {actH.map((h) => (
                              <tr key={h} className="bg-white">
                                {/* left header col */}
                                <th
                                  scope="row"
                                  className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm bg-orange-50 text-orange-700 font-semibold uppercase tracking-wide text-left border-y border-orange-500 border-r-2 border-r-orange-500 align-top whitespace-normal break-words"
                                >
                                  {h}
                                </th>

                                {/* values across sets (dynamic columns) */}
                                {actRows?.map((row, cIdx) => {
                                  const raw = cell(row, h);
                                  const low = h.trim().toLowerCase();
                                  const looksLikeWebsite =
                                    low.includes("website") ||
                                    low.includes("portal") ||
                                    low.includes("site");
                                  const looksLikeForm = low.includes("form");
                                  const href =
                                    typeof raw === "string"
                                      ? normalizeUrl(raw, apiBase)
                                      : null;
                                  const isHttpUrl =
                                    typeof raw === "string" &&
                                    /^https?:\/\/.+/i.test(raw.trim());

                                  return (
                                    <td
                                      key={`${h}-${cIdx}`}
                                      className="px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-left align-top border border-orange-500 break-words"
                                    >
                                      {looksLikeWebsite && (href || isHttpUrl) ? (
                                        <Link
                                          href={href || String(raw)}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="underline text-orange-600 break-all"
                                        >
                                          {String(raw)}
                                        </Link>
                                      ) : looksLikeForm && (href || isHttpUrl) ? (
                                        <button
                                          type="button"
                                          onClick={() =>
                                            openProtectedDownload(
                                              router,
                                              href || String(raw)
                                            )
                                          }
                                          className="underline text-orange-600"
                                        >
                                          {fileNameFromUrl(href || String(raw))}
                                        </button>
                                      ) : (
                                        <span className="break-words whitespace-normal">
                                          {fmt(raw)}
                                        </span>
                                      )}
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-500">
                    No data available.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Mobile Act Information — Responsive */}
            <div className="block md:hidden mb-4 w-full">
              <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base font-bold bg-orange-500 text-white text-center">
                    Act Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-2 sm:space-y-3">
                  {actRows?.map((r, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg p-2 sm:p-3 border text-xs sm:text-sm space-y-1 sm:space-y-2 w-full"
                    >
                      {actH?.map((h) => {
                        const raw = cell(r, h);
                        const low = h.toLowerCase();

                        if (low === "frequency") {
                          return (
                            <div key={h} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:justify-between sm:items-center">
                              <span className="font-medium text-gray-600 break-words">
                                {h}:
                              </span>
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800 text-xs w-fit"
                              >
                                {fmt(raw)}
                              </Badge>
                            </div>
                          );
                        }

                        if (low === "form") {
                          const href = normalizeUrl(
                            typeof raw === "string" ? raw : null,
                            apiBase
                          );
                          return (
                            <div key={h} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:justify-between">
                              <span className="font-medium text-gray-600 break-words">
                                {h}:
                              </span>
                              {href ? (
                                <Link
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-600 underline break-words text-right sm:text-left"
                                  aria-label={`Download ${fileNameFromUrl(
                                    href
                                  )}`}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    openProtectedDownload(router, href);
                                  }}
                                >
                                  {fileNameFromUrl(href)}
                                </Link>
                              ) : (
                                <span className="text-right sm:text-left">—</span>
                              )}
                            </div>
                          );
                        }

                        if (low === "website") {
                          const href =
                            normalizeUrl(
                              typeof raw === "string" ? raw : null,
                              apiBase
                            ) ||
                            websiteUrlNorm ||
                            "";
                          return (
                            <div key={h} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:justify-between">
                              <span className="font-medium text-gray-600 break-words">
                                {h}:
                              </span>
                              {href ? (
                                <Link
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-600 underline break-words text-right sm:text-left"
                                  aria-label="Open Official Site"
                                >
                                  Official Site
                                </Link>
                              ) : (
                                <span className="text-right sm:text-left">—</span>
                              )}
                            </div>
                          );
                        }

                        return (
                          <div key={h} className="flex flex-col sm:table-row gap-1 sm:gap-0">
                            {/* Left label */}
                            <span className="sm:table-cell sm:align-top font-medium text-orange-500 sm:w-[38%] sm:pr-2 break-words">
                              {h}:
                            </span>

                            {/* Right value */}
                            <span className="sm:table-cell sm:align-top text-gray-800 break-words text-justify">
                              {fmt(raw)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  {actRows?.length === 0 && (
                    <div className="text-center text-sm text-gray-500">
                      No data available.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* ===== Contribution (DESKTOP) — Responsive ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500 w-full">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Labour Welfare Fund Contribution
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  {/* Outer rounded frame exactly like reference */}
                  <div className="min-w-[600px] rounded-xl overflow-hidden border border-orange-500">
                    {/* 🔸 NO GAP: use border-collapse, not border-separate */}
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr className="bg-orange-700 text-white">
                          {contribH?.map((h, i) => (
                            <th
                              key={h}
                              className={[
                                "px-2 sm:px-3 lg:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide",
                                // tight grid on header itself (no spacer row)
                                "border border-orange-500",
                                // first column a bit wider + left aligned like ref
                                h.toLowerCase() === "category"
                                  ? "w-48 sm:w-64 text-left"
                                  : "text-center",
                                // rounded top corners like the card
                                i === 0 ? "rounded-tl-xl" : "",
                                i === contribH.length - 1
                                  ? "rounded-tr-xl"
                                  : "",
                              ].join(" ")}
                            >
                              <span className="break-words">{h}</span>
                            </th>
                          ))}
                        </tr>
                      </thead>

                      <tbody>
                        {contribRows?.map((r, ridx) => (
                          <tr key={ridx} className="bg-white">
                            {contribH?.map((h, cidx) => (
                              <td
                                key={h}
                                className={[
                                  "px-2 sm:px-3 lg:px-4 py-2 sm:py-4 text-xs sm:text-sm text-gray-900 align-top",
                                  // thin orange grid exactly like screenshot
                                  "border border-orange-500",
                                  // first column left, others center (matches ref)
                                  cidx === 0 ? "text-left" : "text-center",
                                  // green emphasis for numeric columns shown in ref
                                  ["Employee", "Employer", "Total"].includes(h)
                                    ? "text-green-700 font-semibold"
                                    : "",
                                ].join(" ")}
                              >
                                <span className="break-words">{fmt(cell(r, h))}</span>
                              </td>
                            ))}
                          </tr>
                        ))}

                        {(!contribRows || contribRows.length === 0) && (
                          <tr>
                            <td
                              colSpan={contribH?.length || 1}
                              className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
                            >
                              No data available.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ===== Contribution (MOBILE) — Responsive ===== */}
            <div className="block md:hidden mb-4 w-full">
              <Card className="shadow-sm border-l-4 border-l-orange-500 w-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm sm:text-base font-bold bg-orange-500 text-white text-center">
                    Labour Welfare Fund Contribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-2 sm:p-3 space-y-2 sm:space-y-3">
                  {contribRows?.map((r, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-2 sm:p-3 border text-xs sm:text-sm space-y-1 sm:space-y-2 w-full"
                    >
                      {contribH?.map((h) => (
                        <div key={h} className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:justify-between">
                          <span className="font-medium text-orange-500 break-words">
                            {h}:
                          </span>
                          <span
                            className={`break-words text-right sm:text-left ${
                              ["Employee", "Employer", "Total"].includes(h)
                                ? "text-green-600 font-semibold"
                                : ""
                            }`}
                          >
                            {fmt(cell(r, h))}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                  {contribRows?.length === 0 && (
                    <div className="text-center text-sm text-gray-500">
                      No data available.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* --------- Quick Actions - Fully Responsive --------- */}
            <div className="w-full">
              {/* Mobile: Single column, centered */}
              <div className="flex flex-col sm:hidden gap-3 items-center w-full mb-4">
                {/* Download Form */}
                <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm leading-tight text-[#222] px-2 break-words">
                      Download Form
                    </h3>
                    {formUrlNorm ? (
                      <Button
                        size="sm"
                        className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                        title={formButtonLabel}
                        aria-label={formButtonLabel}
                        onClick={() => openProtectedDownload(router, formUrlNorm)}
                      >
                        {formButtonLabel}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        No Form Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Official Website */}
                <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm leading-tight text-[#222] px-2 break-words">
                      Official Website
                    </h3>
                    {websiteUrlNorm ? (
                      <Button
                        asChild
                        size="sm"
                        className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate rounded-md"
                        aria-label="Visit Website"
                        title="Visit Website"
                      >
                        <Link
                          href={websiteUrlNorm}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        Not Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Static Download Notification */}
                <Card className="h-[140px] w-full max-w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-bold mb-2 text-sm leading-tight text-[#222] px-2 break-words">
                      Download Notification
                    </h3>
                    <Button
                      size="sm"
                      className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                    >
                      Statement regarding notification
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Tablet & Desktop: Flex wrap layout */}
              <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-3 lg:gap-4 mb-4 lg:mb-3 w-full">
                {/* Download Form */}
                <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2 break-words">
                      Download Form
                    </h3>
                    {formUrlNorm ? (
                      <Button
                        size="sm"
                        className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                        title={formButtonLabel}
                        aria-label={formButtonLabel}
                        onClick={() => openProtectedDownload(router, formUrlNorm)}
                      >
                        {formButtonLabel}
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        No Form Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Official Website */}
                <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2 break-words">
                      Official Website
                    </h3>
                    {websiteUrlNorm ? (
                      <Button
                        asChild
                        size="sm"
                        className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate rounded-md"
                        aria-label="Visit Website"
                        title="Visit Website"
                      >
                        <Link
                          href={websiteUrlNorm}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Website
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        disabled
                        className="w-[80%] h-9 text-sm truncate"
                      >
                        Not Available
                      </Button>
                    )}
                  </CardContent>
                </Card>

                {/* Static Download Notification */}
                <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="h-full flex flex-col items-center justify-center px-2">
                    <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                    <h3 className="font-bold mb-2 text-sm lg:text-base leading-tight text-[#222] px-2 break-words">
                      Download Notification
                    </h3>
                    <Button
                      size="sm"
                      className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                    >
                      Statement regarding notification
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Sidebar - Responsive */}
          <div className="hidden lg:block w-full">
            <div className="sticky top-2 lg:top-3 w-full">
              <Card className="shadow-sm hover:shadow-md transition-shadow w-full">
                <CardContent className="p-2 lg:p-3 xl:p-4">
                  <PopularSearch className="mb-0" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

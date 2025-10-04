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
      ? `Download ${formTitle}`
      : formUrlNorm
      ? fileNameFromUrl(formUrlNorm)
      : "Download";

  // ---------- helpers for first table values ----------
  const first = actRows?.[0];
  const vAct = first ? cell(first, "Act") : "—";
  const vRule = first ? cell(first, "Rule") : "—";
  const vDetails = first ? cell(first, "Applicability") : "—";
  // const vFreq = first ? cell(first, "Frequency") : "—";
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
    <div className="min-h-screen">
      <div className=" mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {/* Popular Search (mobile) */}
        <div className="lg:hidden mb-3 sm:mb-4">
          <Card className="shadow-sm">
            <CardContent className="p-2 sm:p-3">
              <PopularSearch className="mb-0" />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-3 sm:gap-4 md:gap-5 lg:grid-cols-4 lg:gap-4 xl:gap-5">
          <div className="lg:col-span-3">
            <div className="mb-4 sm:mb-5 lg:mb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 sm:gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
                  Labour Welfare Fund :
                </h1>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                {data?.state.name}
              </h2>
            </div>

            {/* ===== Act Information (DESKTOP) ===== */}
            {/* ===== Act Information (DESKTOP) — MATCH SECOND CARD ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4">
                {actH?.length ? (
                  <div className="rounded-xl overflow-hidden border border-orange-500">
                    <table className="w-full table-fixed border-collapse">
                      {/* lock first col width (fixed header col) */}
                      <colgroup>
                        <col style={{ width: "14rem" }} />
                        <col span={actRows?.length || 0} />
                      </colgroup>

                      <tbody>
                        {actH.map((h) => (
                          <tr key={h} className="bg-white">
                            {/* left header col */}
                            <th
                              scope="row"
                              className={[
                                "px-4 py-3 text-xs lg:text-sm",
                                "bg-orange-50 text-orange-700 font-semibold uppercase tracking-wide text-left",
                                "border-y border-orange-500 border-r-2 border-r-orange-500",
                                "align-top whitespace-normal",
                              ].join(" ")}
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
                                  className={[
                                    "px-4 py-3 text-xs lg:text-sm text-gray-900 text-left align-top",
                                    "border border-orange-500",
                                    cIdx === 0 ? "border-l-0" : "",
                                  ].join(" ")}
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
                                    <span className="break-words">
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
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-500">
                    No data available.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* ===== /Act Information (DESKTOP) ===== */}

            {/* Mobile Act Information — UNTOUCHED */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500 ">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
                    Act Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {actRows?.map((r, idx) => (
                    <div
                      key={idx}
                      className=" rounded-lg p-3 border text-xs space-y-2"
                    >
                      {actH?.map((h) => {
                        const raw = cell(r, h);
                        const low = h.toLowerCase();

                        if (low === "frequency") {
                          return (
                            <div key={h} className="flex gap-2 justify-between">
                              <span className="font-medium text-gray-600">
                                {h}:
                              </span>
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800 text-xs"
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
                            <div key={h} className="flex gap-2 justify-between">
                              <span className="font-medium text-gray-600">
                                {h}:
                              </span>
                              {href ? (
                                <Link
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-600 underline"
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
                                "—"
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
                            <div key={h} className="flex gap-2 justify-between">
                              <span className="font-medium text-gray-600">
                                {h}:
                              </span>
                              {href ? (
                                <Link
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-orange-600 underline"
                                  aria-label="Open Official Site"
                                >
                                  Official Site
                                </Link>
                              ) : (
                                "—"
                              )}
                            </div>
                          );
                        }

                        return (
                          <div key={h} className="flex gap-2 justify-between">
                            <span className="font-medium text-orange-500">
                              {h}:
                            </span>
                            <span>{fmt(raw)}</span>
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

            {/* ===== Contribution (DESKTOP) — UNTOUCHED ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Labour Welfare Fund Contribution
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  {/* Outer rounded frame exactly like reference */}
                  <div className="rounded-xl overflow-hidden border border-orange-500">
                    {/* 🔸 NO GAP: use border-collapse, not border-separate */}
                    <table className="w-full border-collapse table-fixed">
                      <thead>
                        <tr className="bg-orange-500 text-white">
                          {contribH?.map((h, i) => (
                            <th
                              key={h}
                              className={[
                                "px-4 py-3 text-xs lg:text-sm font-semibold uppercase tracking-wide",
                                // tight grid on header itself (no spacer row)
                                "border border-orange-500",
                                // first column a bit wider + left aligned like ref
                                h.toLowerCase() === "category"
                                  ? "w-64 text-left"
                                  : "text-center",
                                // rounded top corners like the card
                                i === 0 ? "rounded-tl-xl" : "",
                                i === contribH.length - 1
                                  ? "rounded-tr-xl"
                                  : "",
                              ].join(" ")}
                            >
                              {h}
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
                                  "px-4 py-4 text-xs lg:text-sm text-gray-900 align-top",
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
                                {fmt(cell(r, h))}
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

            {/* ===== Contribution (MOBILE) — UNTOUCHED ===== */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
                    Labour Welfare Fund Contribution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {contribRows?.map((r, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-3 border text-xs space-y-2c"
                    >
                      {contribH?.map((h) => (
                        <div key={h} className="flex gap-2 justify-between">
                          <span className="font-medium text-orange-500">
                            {h}:
                          </span>
                          <span
                            className={`${
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

            {/* --------- Quick Actions --------- */}
           {/* Quick Actions — compact, no grid, same theme */}
{/* Quick Actions — fixed height/width, overflow-safe */}
<div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-4 lg:mb-3">
  {/* Download Form */}
  <Card className="w-full sm:w-[380px] 2xl:w-[380px] h-[140px] text-center border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="h-full px-1 flex flex-col items-center justify-center">
      <Download className="h-6 w-6 text-orange-500 mb-2" />
      <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight">
        Download Form
      </h3>
      {formUrlNorm ? (
        <Button
          size="sm"
          className="w-[80%] h-9 lg:h-10 bg-orange-500 hover:bg-orange-600 text-white text-sm truncate cursor-pointer"
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
          className="w-[90%] h-9 lg:h-10 text-sm truncate"
        >
          No Form Available
        </Button>
      )}
    </CardContent>
  </Card>

  {/* Official Website */}
  <Card className="w-full sm:w-[380px] 2xl:w-[370px] h-[140px] text-center border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="h-full px-1 flex flex-col items-center justify-center">
      <ExternalLink className="h-6 w-6 text-orange-500 mb-2" />
      <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight">
        Official Website
      </h3>
      {websiteUrlNorm ? (
        <Button
          asChild
          size="sm"
          variant="outline"
          className="w-[90%] h-9 lg:h-10 text-sm bg-orange-500 hover:bg-orange-600 hover:text-white truncate text-white" 
          aria-label="Visit Website"
          title="Visit Website"
        >
          <Link href={websiteUrlNorm} target="_blank" rel="noopener noreferrer">
            Visit Website
          </Link>
        </Button>
      ) : (
        <Button
          size="sm"
          variant="outline"
          disabled
          className="w-[90%] h-9 lg:h-10 text-sm truncate"
        >
          Not Available
        </Button>
      )}
    </CardContent>
  </Card>
</div>


          </div>

          {/* Sidebar */}
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









// "use client";

// import { ExternalLink } from "lucide-react";

// /** Static data */
// const actData = {
//   act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
//   rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
//   applicability:
//     "It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.",
//   frequency: "Annual",
//   form: "Form-F",
//   website: "Official Site",
//   websiteUrl: "https://www.praansconsultech.com",
// };

// export default function Page() {
//   return (
//     <div className="max-w-4xl mx-auto p-4 md:p-6">
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//         {/* Top gradient bar */}
//         <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

//         <div className="p-6 md:p-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
//             Act Information
//           </h2>

//           <div className="space-y-6">
//             {/* ACT */}
//             <div className="flex gap-6">
//               <div className="w-24 text-orange-600 font-bold text-sm pt-1">ACT</div>
//               <div className="flex-1 text-gray-800 text-lg">{actData.act}</div>
//             </div>

//             <div className="border-t border-gray-200" />

//             {/* RULE */}
//             <div className="flex gap-6">
//               <div className="w-24 text-orange-600 font-bold text-sm pt-1">RULE</div>
//               <div className="flex-1 text-gray-800 text-lg">{actData.rule}</div>
//             </div>

//             <div className="border-t border-gray-200" />

//             {/* DETAILS */}
//             <div className="flex gap-6">
//               <div className="w-24 text-orange-600 font-bold text-sm pt-1">DETAILS</div>
//               <div className="flex-1 text-gray-700">{actData.applicability}</div>
//             </div>

//             <div className="border-t border-gray-200" />

//             {/* META */}
//             <div className="flex gap-6 items-center">
//               <div className="w-24 text-orange-600 font-bold text-sm">META</div>

//               <div className="flex-1 flex flex-wrap gap-3 md:gap-4">
//                 {/* Frequency pill */}
//                 <div className="bg-orange-50 px-3 py-2 md:px-4 rounded-lg inline-flex items-center">
//                   <span className="text-xs text-gray-600">Frequency:</span>
//                   <span className="ml-2 font-bold text-orange-600">{actData.frequency}</span>
//                 </div>

//                 {/* Form pill */}
//                 <div className="bg-gray-50 px-3 py-2 md:px-4 rounded-lg inline-flex items-center">
//                   <span className="text-xs text-gray-600">Form:</span>
//                   <span className="ml-2 font-bold text-gray-800">{actData.form || "—"}</span>
//                 </div>

//                 {/* Official site button */}
//                 <a
//                   href={actData.websiteUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-orange-500 text-white px-3 py-2 md:px-4 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-orange-600 transition-colors"
//                 >
//                   {actData.website} <ExternalLink size={16} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { ExternalLink } from "lucide-react";

// /** Static data */
// const actData = {
//   act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
//   rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
//   applicability:
//     "It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.",
//   frequency: "Annual",
//   form: "Form-F",
//   website: "Official Site",
//   websiteUrl: "https://www.praansconsultech.com",
// };

// export default function Page() {
//   return (
//     <div className=" mx-auto p-4 md:p-6">
//       <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//         {/* Top gradient bar */}
//         <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

//         <div className="p-6 md:p-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
//             Act Information
//           </h2>

//           {/* === TABLE WITH VERTICAL + HORIZONTAL LINES === */}
//          {/* === TABLE WITH VERTICAL + HORIZONTAL LINES (rounded corners fixed) === */}
// <div className="rounded-xl overflow-hidden">
//   <table className="w-full border-separate border-spacing-0">
//     <tbody>
//       {/* ACT */}
//       <tr>
//         <td className="w-32 md:w-40 bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide px-4 py-3
//                        border border-orange-200 first:rounded-tl-xl">
//           Act
//         </td>
//         <td className="px-4 py-3 text-gray-900 text-base border border-orange-200 first:border-l-0 last:rounded-tr-xl">
//           {actData.act}
//         </td>
//       </tr>

//       {/* RULE */}
//       <tr>
//         <td className="bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide px-4 py-3 border border-orange-200">
//           Rule
//         </td>
//         <td className="px-4 py-3 text-gray-900 text-base border border-orange-200">
//           {actData.rule}
//         </td>
//       </tr>

//       {/* DETAILS */}
//       <tr>
//         <td className="bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide px-4 py-3 border border-orange-200">
//           Details
//         </td>
//         <td className="px-4 py-3 text-gray-700 border border-orange-200">
//           {actData.applicability}
//         </td>
//       </tr>

//       {/* META (last row => bottom corners) */}
//       <tr>
//         <td className="bg-orange-50 text-orange-600 font-bold text-xs uppercase tracking-wide px-4 py-3
//                        border border-orange-200 first:rounded-bl-xl">
//           Meta
//         </td>
//         <td className="px-4 py-3 border border-orange-200 last:rounded-br-xl">
//           <div className="flex flex-wrap gap-3">
//             <div className="bg-orange-50 px-3 py-2 rounded-lg inline-flex items-center">
//               <span className="text-xs text-gray-600">Frequency:</span>
//               <span className="ml-2 font-bold text-orange-600">{actData.frequency}</span>
//             </div>
//             <div className="bg-gray-50 px-3 py-2 rounded-lg inline-flex items-center">
//               <span className="text-xs text-gray-600">Form:</span>
//               <span className="ml-2 font-bold text-gray-800">{actData.form || "—"}</span>
//             </div>
//             <a
//               href={actData.websiteUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2 hover:bg-orange-600 transition-colors"
//             >
//               Official Site <ExternalLink size={16} />
//             </a>
//           </div>
//         </td>
//       </tr>
//     </tbody>
//   </table>
// </div>
// {/* === /TABLE === */}

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
// import { Download, ExternalLink, FileText } from "lucide-react";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { openProtectedDownload, handleAutoDownloadOnReturn } from "@/lib/download-auth";
// import React from 'react';

// // Hardcoded fallback data
// const fallbackActData = {
//   act: "Andhra Pradesh Labour Welfare Fund Act, 1987",
//   rule: "The Andhra Pradesh Labour Welfare Fund Rules, 1988",
//   applicability: "It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.",
//   frequency: "Annual",
//   form: "Form-F",
//   website: "www.praansconsultech.com",
//   websiteUrl: "https://www.praansconsultech.com",
//   exemption: "It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.",
//   authority: "Labour Welfare Fund Commissioner",
//   interest: "10% on every late payment",
//   penalty: "13% per annum on every late payment",
//   notification: "Download",
//   remarks: "—",
//   contributions: [
//     {
//       category: "All Employees",
//       employeeContribution: "10",
//       employerContribution: "80",
//       total: "100",
//       dateOfLWFDeduction: "31st Dec'2025",
//       returnSubmission: "31st Jan'25",
//       form: "Form-F"
//     }
//   ]
// };

// // Fallback headers for contributions
// const fallbackContribHeaders = [
//   "Category", "Employee", "Employer", "Total",
//   "LWF Deduction", "Submission", "Form"
// ];

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

// // Static Act Information Component
// function StaticActInformation({
//   actRows,
//   contribRows,
//   contribH,
//   apiBase,
//   router,
// }: {
//   actRows: Row[];
//   contribRows: Row[];
//   contribH: string[];
//   apiBase: string;
//   router: any;
// }) {
//   // Use dynamic data if available, otherwise fallback to hardcoded
//   const firstRow = actRows?.length > 0 ? actRows[0] : null;

//   const actData = {
//     act: firstRow ? cell(firstRow, "Act") : fallbackActData.act,
//     rule: firstRow ? cell(firstRow, "Rule") : fallbackActData.rule,
//     applicability: firstRow ? cell(firstRow, "Applicability") : fallbackActData.applicability,
//     frequency: firstRow ? cell(firstRow, "Frequency") : fallbackActData.frequency,
//     form: firstRow ? cell(firstRow, "Form") : fallbackActData.form,
//     website: firstRow ? cell(firstRow, "Website") : fallbackActData.website,
//     exemption: firstRow ? cell(firstRow, "Exemption") : fallbackActData.exemption,
//     authority: firstRow ? cell(firstRow, "Authority") : fallbackActData.authority,
//     interest: firstRow ? cell(firstRow, "Interest") : fallbackActData.interest,
//     penalty: firstRow ? cell(firstRow, "Penalty") : fallbackActData.penalty,
//     notification: firstRow ? cell(firstRow, "Notification") : fallbackActData.notification,
//     remarks: firstRow ? cell(firstRow, "Remarks") : fallbackActData.remarks,
//   };

//   const websiteUrl = normalizeUrl(actData.website, apiBase) || fallbackActData.websiteUrl;
//   const formUrl = normalizeUrl(actData.form, apiBase);

//   // Use dynamic contribution data if available, otherwise fallback
//   const contributionData = contribRows?.length > 0 ? contribRows : fallbackActData.contributions.map(item => ({
//     [fallbackContribHeaders[0]]: item.category,
//     [fallbackContribHeaders[1]]: item.employeeContribution,
//     [fallbackContribHeaders[2]]: item.employerContribution,
//     [fallbackContribHeaders[3]]: item.total,
//     [fallbackContribHeaders[4]]: item.dateOfLWFDeduction,
//     [fallbackContribHeaders[5]]: item.returnSubmission,
//     [fallbackContribHeaders[6]]: item.form,
//   }));

//   const contributionHeaders = contribH?.length > 0 ? contribH : fallbackContribHeaders;

//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-3">
//       <div className="mx-auto">
//         <div className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row">

//           {/* Left Sidebar - Orange */}
//           <div className="bg-gradient-to-b from-orange-500 to-orange-600 lg:w-64 p-4 text-white flex flex-col justify-start">
//             <div className="mb-4">
//               <h1 className="text-2xl font-bold leading-tight mb-1">Act</h1>
//               <h1 className="text-2xl font-bold leading-tight">Information</h1>
//             </div>

//             <div className="space-y-3">
//               {/* Frequency Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center">
//                 <div className="text-white text-lg font-bold mb-1">{actData.frequency}</div>
//                 <div className="text-white text-xs opacity-90">Frequency</div>
//               </div>

//               {/* Form Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center">
//                 <div className="text-white text-lg font-bold mb-1">{actData.form}</div>
//                 <div className="text-white text-xs opacity-90">Form</div>
//               </div>

//               {/* Official Site Box */}
//               <a
//                 href={websiteUrl || "#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center block hover:bg-opacity-50 transition-all"
//               >
//                 <div className="flex items-center justify-center mb-1">
//                   <ExternalLink className="text-white" size={18} />
//                 </div>
//                 <div className="text-white text-xs">Official Site</div>
//               </a>
//             </div>
//           </div>

//           {/* Main Content - Right Side */}
//           <div className="flex-1 p-5 bg-white overflow-y-auto" style={{maxHeight: '96vh'}}>

//             {/* Act Section */}
//             <div className="mb-3">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 ACT
//               </div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {actData.act}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-3"></div>

//             {/* Rule Section */}
//             <div className="mb-3">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 RULE
//               </div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {actData.rule}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-3"></div>

//             {/* Applicability Section */}
//             <div className="mb-4">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 APPLICABILITY
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {actData.applicability}
//               </p>
//             </div>

//             <div className="border-t border-gray-300 my-4"></div>

//             {/* Additional Information Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">

//               {/* Exemption */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   EXEMPTION
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {/* {actData.exemption} */}
//                   It is applicable to any commercial establishment and shops employing more than 1 or more employees fall under this. Its enforcement is overseen by the Labour Commissioner.
//                 </div>
//               </div>

//               {/* Authority */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   AUTHORITY
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.authority}
//                 </div>
//               </div>

//               {/* Website */}
//               {/* <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   WEBSITE
//                 </div>
//                 <a
//                   href={websiteUrl || "#"}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-orange-500 text-sm font-medium hover:text-orange-600 inline-flex items-center gap-1"
//                 >
//                   {actData.website}
//                   <ExternalLink size={14} />
//                 </a>
//               </div> */}

//               {/* Interest */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   INTEREST
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.interest}
//                 </div>
//               </div>

//               {/* Penalty */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   PENALTY
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.penalty}
//                 </div>
//               </div>

//               {/* Notification */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   NOTIFICATION
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.notification}
//                 </div>
//               </div>

//             </div>

//             {/* Contribution Details Table - Hybrid approach */}
//             <div className="mt-4">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Contribution Details</h3>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden text-xs">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//                       {contributionHeaders?.map((h) => (
//                         <th key={h} className="px-2 py-2 text-left font-bold uppercase tracking-wider">
//                           {h}
//                         </th>
//                       ))}
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {contributionData?.map((row, index) => (
//                       <tr key={index} className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
//                         {contributionHeaders?.map((h) => (
//                           <td key={h} className="px-2 py-2 text-gray-800">
//                             {typeof row === 'object' && row !== null ? fmt(row[h] as string) : '—'}
//                           </td>
//                         ))}
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function WelfareFundDetails({ data, apiBase }: { data: WFSlugData; apiBase: string }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const actH = data?.act_information?.headers || [];
//   const actRows = data?.act_information?.rows || [];
//   const contribH = data?.labour_welfare_fund_contribution?.headers || [];
//   const contribRows = data?.labour_welfare_fund_contribution?.rows || [];

//   const formUrlNorm = normalizeUrl(data?.downloads?.form_url, apiBase);
//   const websiteUrlNorm = normalizeUrl(data?.downloads?.website_url, apiBase);
//   const formTitle = fmt(data?.downloads?.form_title);
//   const formButtonLabel =
//     formTitle !== "—" ? `Download ${formTitle}` : formUrlNorm ? fileNameFromUrl(formUrlNorm) : "Download";

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
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
//                 {data?.state?.name || "State Name"}
//               </h2>
//             </div>

//             {/* Static Act Information - Desktop */}
//             <div className="hidden md:block">
//               <StaticActInformation
//                 actRows={actRows}
//                 contribRows={contribRows}
//                 contribH={contribH}
//                 apiBase={apiBase}
//                 router={router}
//               />
//             </div>

//             {/* Mobile Act Information - Same hybrid approach */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
//                     Act Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {(actRows?.length > 0 ? actRows : [{}]).map((r, idx) => (
//                     <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//                       {(actH?.length > 0 ? actH : Object.keys(fallbackActData)).map((h) => {
//                         const raw = actRows?.length > 0 ? cell(r, h) : fallbackActData[h as keyof typeof fallbackActData];
//                         const low = h.toLowerCase();

//                         if (low === "frequency") {
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
//                                 {fmt(raw as string)}
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
//                           const href = normalizeUrl(typeof raw === "string" ? raw : null, apiBase) || websiteUrlNorm || fallbackActData.websiteUrl;
//                           return (
//                             <div key={h} className="flex gap-2 justify-between">
//                               <span className="font-medium text-gray-600">{h}:</span>
//                               {href ? (
//                                 <Link href={href} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
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
//                             <span>{fmt(raw as string)}</span>
//                           </div>
//                         );
//                       })}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Labour Welfare Fund Contribution - Desktop - Hybrid approach */}
//             {/* <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Labour Welfare Fund Contribution</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full">
//                     <thead>
//                       <tr className="bg-orange-500">
//                         {(contribH?.length > 0 ? contribH : fallbackContribHeaders).map((h) => (
//                           <th
//                             key={h}
//                             className={`px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center ${
//                               h.toLowerCase() === "category" ? "w-48 max-w-48" : ""
//                             }`}
//                           >
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {(contribRows?.length > 0 ? contribRows : fallbackActData.contributions.map(item => ({
//                         [fallbackContribHeaders[0]]: item.category,
//                         [fallbackContribHeaders[1]]: item.employeeContribution,
//                         [fallbackContribHeaders[2]]: item.employerContribution,
//                         [fallbackContribHeaders[3]]: item.total,
//                         [fallbackContribHeaders[4]]: item.dateOfLWFDeduction,
//                         [fallbackContribHeaders[5]]: item.returnSubmission,
//                         [fallbackContribHeaders[6]]: item.form,
//                       }))).map((r, idx) => (
//                         <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                           {(contribH?.length > 0 ? contribH : fallbackContribHeaders).map((h) => (
//                             <td
//                               key={h}
//                               className={`px-3 py-4 text-sm text-gray-900 break-words text-center ${
//                                 ["Employee", "Employer", "Total"].includes(h) ? "text-green-600 font-semibold" : ""
//                               } ${h.toLowerCase() === "category" ? "w-48 max-w-48 text-justify" : ""}`}
//                             >
//                               {fmt(typeof r === 'object' && r !== null ? r[h] as string : '—')}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card> */}

//             {/* Mobile Contribution - Same hybrid approach */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center">
//                     Labour Welfare Fund Contribution
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {(contribRows?.length > 0 ? contribRows : fallbackActData.contributions.map(item => ({
//                     [fallbackContribHeaders[0]]: item.category,
//                     [fallbackContribHeaders[1]]: item.employeeContribution,
//                     [fallbackContribHeaders[2]]: item.employerContribution,
//                     [fallbackContribHeaders[3]]: item.total,
//                     [fallbackContribHeaders[4]]: item.dateOfLWFDeduction,
//                     [fallbackContribHeaders[5]]: item.returnSubmission,
//                     [fallbackContribHeaders[6]]: item.form,
//                   }))).map((r, idx) => (
//                     <div key={idx} className="bg-white rounded-lg p-3 border text-xs space-y-2">
//                       {(contribH?.length > 0 ? contribH : fallbackContribHeaders).map((h) => (
//                         <div key={h} className="flex gap-2 justify-between">
//                           <span className="font-medium text-orange-500">{h}:</span>
//                           <span className={`${["Employee", "Employer", "Total"].includes(h) ? "text-green-600 font-semibold" : ""}`}>
//                             {fmt(typeof r === 'object' && r !== null ? r[h] as string : '—')}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* Quick Actions */}
//             {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-4">
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Download Form</h3>
//                   {formUrlNorm ? (
//                     <Button
//                       size="sm"
//                       className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 cursor-pointer"
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
//                   {websiteUrlNorm || fallbackActData.websiteUrl ? (
//                     <Button asChild size="sm" variant="outline" className="w-full hover:bg-orange-50 text-xs lg:text-sm h-7 lg:h-8">
//                       <Link href={websiteUrlNorm || fallbackActData.websiteUrl} target="_blank" rel="noopener noreferrer">
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
//             </div> */}
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
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-3 px-3">
//       <div className="mx-auto">
//         <div className="bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row" style={{maxHeight: '96vh'}}>

//           {/* Left Sidebar - Orange */}
//           <div className="bg-gradient-to-b from-orange-500 to-orange-600 lg:w-64 p-4 text-white flex flex-col justify-start">
//             <div className="mb-4">
//               <h1 className="text-2xl font-bold leading-tight mb-1">Act</h1>
//               <h1 className="text-2xl font-bold leading-tight">Information</h1>
//             </div>

//             <div className="space-y-3">
//               {/* Frequency Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center">
//                 <div className="text-white text-lg font-bold mb-1">{actData.frequency}</div>
//                 <div className="text-white text-xs opacity-90">Frequency</div>
//               </div>

//               {/* Form Box */}
//               <div className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center">
//                 <div className="text-white text-lg font-bold mb-1">{actData.form}</div>
//                 <div className="text-white text-xs opacity-90">Form</div>
//               </div>

//               {/* Official Site Box */}
//               <a
//                 href={actData.websiteUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-orange-400 bg-opacity-40 backdrop-blur-sm rounded-xl p-3 text-center block hover:bg-opacity-50 transition-all"
//               >
//                 <div className="flex items-center justify-center mb-1">
//                   <ExternalLink className="text-white" size={18} />
//                 </div>
//                 <div className="text-white text-xs">Official Site</div>
//               </a>
//             </div>
//           </div>

//           {/* Main Content - Right Side */}
//           <div className="flex-1 p-5 bg-white overflow-y-auto" style={{maxHeight: '96vh'}}>

//             {/* Act Section */}
//             <div className="mb-3">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 ACT
//               </div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {actData.act}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-3"></div>

//             {/* Rule Section */}
//             <div className="mb-3">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 RULE
//               </div>
//               <h2 className="text-lg font-semibold text-gray-800">
//                 {actData.rule}
//               </h2>
//             </div>

//             <div className="border-t border-gray-200 my-3"></div>

//             {/* Applicability Section */}
//             <div className="mb-4">
//               <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-1">
//                 APPLICABILITY
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {actData.applicability}
//               </p>
//             </div>

//             <div className="border-t border-gray-300 my-4"></div>

//             {/* Additional Information Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-4">

//               {/* Exemption */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   EXEMPTION
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.exemption}
//                 </div>
//               </div>

//               {/* Authority */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   AUTHORITY
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.authority}
//                 </div>
//               </div>

//               {/* Website */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   WEBSITE
//                 </div>
//                 <a
//                   href={actData.websiteUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-orange-500 text-sm font-medium hover:text-orange-600 inline-flex items-center gap-1"
//                 >
//                   {actData.website}
//                   <ExternalLink size={14} />
//                 </a>
//               </div>

//               {/* Interest */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   INTEREST
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.interest}
//                 </div>
//               </div>

//               {/* Penalty */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   PENALTY
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.penalty}
//                 </div>
//               </div>

//               {/* Notification */}
//               <div className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
//                 <div className="text-orange-500 text-xs font-bold uppercase mb-1 tracking-wider">
//                   NOTIFICATION
//                 </div>
//                 <div className="text-gray-800 text-sm font-medium">
//                   {actData.notification}
//                 </div>
//               </div>

//             </div>

//             {/* Contribution Details Table */}
//             <div className="mt-4">
//               <h3 className="text-lg font-bold text-gray-800 mb-3">Contribution Details</h3>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden text-xs">
//                   <thead>
//                     <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//                       <th className="px-2 py-2 text-left font-bold uppercase tracking-wider">Category</th>
//                       <th className="px-2 py-2 text-center font-bold uppercase tracking-wider">Employee</th>
//                       <th className="px-2 py-2 text-center font-bold uppercase tracking-wider">Employer</th>
//                       <th className="px-2 py-2 text-center font-bold uppercase tracking-wider">Total</th>
//                       <th className="px-2 py-2 text-left font-bold uppercase tracking-wider">LWF Deduction</th>
//                       <th className="px-2 py-2 text-left font-bold uppercase tracking-wider">Submission</th>
//                       <th className="px-2 py-2 text-center font-bold uppercase tracking-wider">Form</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {actData.contributions.map((item, index) => (
//                       <tr key={index} className="border-b border-gray-200 hover:bg-orange-50 transition-colors">
//                         <td className="px-2 py-2 text-gray-800 font-medium">{item.category}</td>
//                         <td className="px-2 py-2 text-gray-800 text-center">{item.employeeContribution}</td>
//                         <td className="px-2 py-2 text-gray-800 text-center">{item.employerContribution}</td>
//                         <td className="px-2 py-2 text-gray-800 font-semibold text-center">{item.total}</td>
//                         <td className="px-2 py-2 text-gray-800">{item.dateOfLWFDeduction}</td>
//                         <td className="px-2 py-2 text-gray-800">{item.returnSubmission}</td>
//                         <td className="px-2 py-2 text-orange-600 font-semibold text-center">{item.form}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ActInformation;

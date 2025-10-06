// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calculator, Download, ExternalLink, FileText } from "lucide-react";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// type TableBlock = {
//   headers: string[];
//   rows: Record<string, string>[];
// };

// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   website_title?: string | null;
//   website_url?: string | null;
// };

// type StateData = {
//   state: { name: string; slug: string };
//   is_applicable: boolean;
//   updated_date: string | null;
//   effective_date: string | null;
//   act_information: TableBlock;
//   leave_entitlements: TableBlock;
//   working_hours: TableBlock;
//   tiles?: Tiles;
// };

// export default function LeavesWorkingHoursDetails({
//   apiBase,
//   initialData,
// }: {
//   apiBase: string;
//   initialData: StateData;
// }) {
//   const router = useRouter();

//   // ▶ Auto-download if coming back from /login?next=...&dl=...
//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const name = initialData.state?.name ?? "—";

//   const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
//   const resolveFile = (v?: string | null) => {
//     if (!v) return "";
//     if (isHttp(v)) return v;
//     return `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
//   };

//   const parseHeaders = (headers: string[]) =>
//     headers.map((h) => {
//       const [label, typeRaw] = h.split(":");
//       const type = (typeRaw ?? "text").toLowerCase();
//       return { key: label.trim(), label: label.trim(), type };
//     });

//   const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

//   const DesktopTable = ({ block }: { block: TableBlock }) => {
//     const cols = parseHeaders(block.headers);

//     const isCategory = (label: string) => /^category$/i.test(label);
//     const isCompact = (c: { label: string; type: string }) =>
//       c.type === "file" || c.type === "url";

//     return (
//       <div className="w-full overflow-x-auto">
//         <table className="w-full table-fixed">
//           <colgroup>
//             {cols?.map((c, i) => {
//               if (isCategory(c.label)) {
//                 return <col key={i} className="w-[420px] max-w-[420px]" />;
//               }
//               if (isCompact(c)) {
//                 return <col key={i} className="w-28 max-w-28" />;
//               }
//               return <col key={i} className="w-auto" />;
//             })}
//           </colgroup>

//           <thead>
//             <tr className="bg-orange-500">
//               {cols?.map((c) => (
//                 <th
//                   key={c.key}
//                   className="px-3 py-3 text-sm font-bold text-white uppercase tracking-wide text-center"
//                 >
//                   {c.label.replace(/:(file|url)$/i, "")}
//                 </th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="bg-white divide-y divide-gray-200">
//             {(block.rows ?? []).map((row, idx) => (
//               <tr key={idx} className="hover:bg-orange-50 transition-colors">
//                 {cols?.map((c, ci) => {
//                   const raw = row[c.key] ?? row[c.label] ?? "";

//                   const base = "px-3 py-4 text-sm break-words";
//                   const textFor = /^category$/i.test(c.label)
//                     ? "text-center align-top whitespace-normal"
//                     : "text-center";

//                   if (c.type === "file") {
//                     const href = resolveFile(raw);
//                     return (
//                       <td key={ci} className={`${base} ${textFor}`}>
//                         {href ? (
//                           <Button
//                             variant="link"
//                             size="sm"
//                             className="text-orange-600 p-0 cursor-pointer hover:cursor-pointer"
//                             aria-label="Download file"
//                             onClick={() => openProtectedDownload(router, href)}
//                           >
//                             <FileText className="h-4 w-4 mr-1" />
//                             Download
//                           </Button>
//                         ) : (
//                           "—"
//                         )}
//                       </td>
//                     );
//                   }

//                   if (c.type === "url") {
//                     const href = typeof raw === "string" ? raw : "";
//                     return (
//                       <td key={ci} className={`${base} ${textFor}`}>
//                         {href ? (
//                           <Link
//                             href={href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-orange-600 hover:underline inline-flex items-center"
//                             aria-label="Visit URL"
//                           >
//                             <ExternalLink className="h-4 w-4 mr-1" />
//                             Visit
//                           </Link>
//                         ) : (
//                           "—"
//                         )}
//                       </td>
//                     );
//                   }

//                   return (
//                     <td key={ci} className={`${base} ${textFor}`}>
//                       {fmt(String(raw))}
//                     </td>
//                   );
//                 })}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const MobileCards = ({ block, title }: { block: TableBlock; title: string }) => {
//     const cols = parseHeaders(block?.headers);
//     return (
//       <Card className="shadow-sm border-l-4 border-l-orange-500">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-base font-bold">{title}</CardTitle>
//         </CardHeader>
//         <CardContent className="p-3 space-y-3">
//           {(block?.rows ?? [])?.map((row, idx) => (
//             <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//               {cols?.map((c) => {
//                 const label = c.label.replace(/:(file|url)$/i, "");
//                 const raw = row[c.key] ?? row[c.label] ?? "";

//                 if (c.type === "file") {
//                   const href = resolveFile(raw);
//                   return (
//                     <div key={c.key} className="flex gap-2 justify-between ">
//                       <span className="font-medium text-gray-600 ">{label}:</span>
//                       {href ? (
//                         <button
//                           type="button"
//                           className="text-orange-600 underline cursor-pointer hover:cursor-pointer"
//                           onClick={() => openProtectedDownload(router, href)}
//                           aria-label="Download file"
//                         >
//                           Download
//                         </button>
//                       ) : (
//                         "—"
//                       )}
//                     </div>
//                   );
//                 }

//                 if (c.type === "url") {
//                   const href = typeof raw === "string" ? raw : "";
//                   return (
//                     <div key={c.key} className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">{label}:</span>
//                       {href ? (
//                         <Link
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-orange-600 underline"
//                           aria-label="Open URL"
//                         >
//                           Open
//                         </Link>
//                       ) : (
//                         "—"
//                       )}
//                     </div>
//                   );
//                 }

//                 return (
//                   <div key={c.key} className="flex gap-2 justify-between">
//                     <span className="font-medium text-gray-600">{label}:</span>
//                     <span className="text-right">{fmt(String(raw))}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//         </CardContent>
//       </Card>
//     );
//   };

//   const tiles = initialData?.tiles ?? {};
//   const tileFormUrl = tiles?.form_url
//     ? isHttp(tiles?.form_url)
//       ? tiles?.form_url
//       : resolveFile(tiles?.form_url)
//     : "";
//   const tileWebsiteUrl = tiles?.website_url ?? "";

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
//                 <h2 className="text-base sm:text-lg font-semibold text-slate-800 mb-2 2xl:text-2xl">
//                   Leave &amp; Working Hours :
//                 </h2>
//               </div>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {name}
//               </h2>
//             </div>

//             {/* Act Information */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Act Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.act_information} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4 ">
//               <MobileCards block={initialData?.act_information} title="Act Information" />
//             </div>

//             {/* Leave Entitlements */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">Leave Entitlements</CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.leave_entitlements} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4 ">
//               <MobileCards block={initialData?.leave_entitlements} title="Leave Entitlements" />
//             </div>

//             {/* Working Hours & Overtime */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Working Hours &amp; Overtime
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.working_hours} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4">
//               <MobileCards block={initialData?.working_hours} title="Working Hours & Overtime" />
//             </div>

//             {/* Tiles */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Forms */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Download className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">
//                     {tiles?.form_title ?? "Download Forms"}
//                   </h3>
//                   <Button
//                     size="sm"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 cursor-pointer hover:cursor-pointer"
//                     disabled={!tileFormUrl}
//                     aria-label="Download forms"
//                     onClick={() => tileFormUrl && openProtectedDownload(router, tileFormUrl)}
//                   >
//                     Download
//                   </Button>
//                 </CardContent>
//               </Card>

//               {/* Leave Calculator (stub) */}
//               <Card className="group hover:shadow-lg transition-all duration-300 text-center border-l-4 border-l-orange-500 shadow-sm">
//                 <CardContent className="p-3 lg:p-4">
//                   <Calculator className="h-6 w-6 lg:h-7 lg:w-7 text-orange-500 mx-auto mb-2 lg:mb-3" />
//                   <h3 className="font-medium mb-2 text-sm lg:text-base">Leave Calculator</h3>
//                   <Button
//                     size="sm"
//                     variant="outline"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 cursor-pointer hover:cursor-pointer"
//                     aria-label="Leave Calculator"
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
//                     {tiles?.website_title ?? "Official Website"}
//                   </h3>
//                   <Button
//                     asChild
//                     size="sm"
//                     variant="outline"
//                     className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs lg:text-sm h-7 lg:h-8 cursor-pointer hover:cursor-pointer"
//                     disabled={!tileWebsiteUrl}
//                     aria-label="Visit Website"
//                   >
//                     <Link href={tileWebsiteUrl || "#"} target="_blank" rel="noopener noreferrer">
//                       Visit Site
//                     </Link>
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

// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calculator, Download, ExternalLink, FileText } from "lucide-react";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// type TableBlock = {
//   headers: string[];
//   rows: Record<string, string>[];
// };

// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   website_title?: string | null;
//   website_url?: string | null;
// };

// type StateData = {
//   state: { name: string; slug: string };
//   is_applicable: boolean;
//   updated_date: string | null;
//   effective_date: string | null;
//   act_information: TableBlock;
//   leave_entitlements: TableBlock;
//   working_hours: TableBlock;
//   tiles?: Tiles;
// };

// export default function LeavesWorkingHoursDetails({
//   apiBase,
//   initialData,
// }: {
//   apiBase: string;
//   initialData: StateData;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const name = initialData.state?.name ?? "—";

//   const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
//   const resolveFile = (v?: string | null) => {
//     if (!v) return "";
//     if (isHttp(v)) return v;
//     return `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
//   };

//   const parseHeaders = (headers: string[]) =>
//     headers.map((h) => {
//       const [label, typeRaw] = h.split(":");
//       const type = (typeRaw ?? "text").toLowerCase();
//       return { key: label.trim(), label: label.trim(), type };
//     });

//   const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

//   // ------------------- Desktop Table (Orange Grid Style) -------------------
//   const DesktopTable = ({ block }: { block: TableBlock }) => {
//     const cols = parseHeaders(block.headers);

//     return (
//       <div className="w-full overflow-x-auto">
//         <div className="rounded-xl overflow-hidden border border-orange-500">
//           <table className="w-full border-collapse table-fixed">
//             <thead>
//               <tr className="bg-orange-700 text-white">
//                 {cols?.map((c, i) => (
//                   <th
//                     key={c.key}
//                     className={[
//                       "px-4 py-3 text-xs lg:text-sm font-semibold uppercase tracking-wide border border-orange-500",
//                       i === 0 ? "text-left w-[240px]" : "text-center",
//                     ].join(" ")}
//                   >
//                     {c.label.replace(/:(file|url)$/i, "")}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody>
//               {(block.rows ?? []).length > 0 ? (
//                 block.rows.map((row, ridx) => (
//                   <tr key={ridx} className="bg-white">
//                     {cols?.map((c, cidx) => {
//                       const raw = row[c.key] ?? row[c.label] ?? "—";

//                       return (
//                         <td
//                           key={cidx}
//                           className={[
//                             "px-4 py-3 text-xs lg:text-sm text-gray-900 border border-orange-500",
//                             cidx === 0 ? "text-left align-top" : "text-center",
//                             /^\d+(\.\d+)?$/.test(raw)
//                               ? "text-green-700 font-semibold"
//                               : "",
//                           ].join(" ")}
//                         >
//                           {c.type === "file" ? (
//                             raw ? (
//                               <Button
//                                 variant="link"
//                                 size="sm"
//                                 className="text-orange-600 p-0 cursor-pointer hover:underline"
//                                 onClick={() =>
//                                   openProtectedDownload(router, resolveFile(raw))
//                                 }
//                               >
//                                 <FileText className="h-4 w-4 mr-1" />
//                                 Download
//                               </Button>
//                             ) : (
//                               "—"
//                             )
//                           ) : c.type === "url" ? (
//                             raw ? (
//                               <Link
//                                 href={raw}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-orange-600 underline hover:text-orange-700"
//                               >
//                                 Visit
//                               </Link>
//                             ) : (
//                               "—"
//                             )
//                           ) : (
//                             fmt(raw)
//                           )}
//                         </td>
//                       );
//                     })}
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan={cols.length}
//                     className="px-4 py-6 text-center text-sm text-gray-500 border border-orange-500"
//                   >
//                     No data available.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   };

//   // ------------------- Mobile Card Layout -------------------
//   const MobileCards = ({ block, title }: { block: TableBlock; title: string }) => {
//     const cols = parseHeaders(block?.headers);
//     return (
//       <Card className="shadow-sm border-l-4 border-l-orange-500">
//         <CardHeader className="pb-2">
//           <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
//             {title}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="p-3 space-y-3">
//           {(block?.rows ?? [])?.map((row, idx) => (
//             <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//               {cols?.map((c) => {
//                 const label = c.label.replace(/:(file|url)$/i, "");
//                 const raw = row[c.key] ?? row[c.label] ?? "";

//                 if (c.type === "file") {
//                   const href = resolveFile(raw);
//                   return (
//                     <div key={c.key} className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">{label}:</span>
//                       {href ? (
//                         <button
//                           type="button"
//                           className="text-orange-600 underline cursor-pointer hover:text-orange-700"
//                           onClick={() => openProtectedDownload(router, href)}
//                         >
//                           Download
//                         </button>
//                       ) : (
//                         "—"
//                       )}
//                     </div>
//                   );
//                 }

//                 if (c.type === "url") {
//                   const href = typeof raw === "string" ? raw : "";
//                   return (
//                     <div key={c.key} className="flex gap-2 justify-between">
//                       <span className="font-medium text-gray-600">{label}:</span>
//                       {href ? (
//                         <Link
//                           href={href}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-orange-600 underline"
//                         >
//                           Visit
//                         </Link>
//                       ) : (
//                         "—"
//                       )}
//                     </div>
//                   );
//                 }

//                 return (
//                   <div key={c.key} className="flex gap-2 justify-between">
//                     <span className="font-medium text-gray-600">{label}:</span>
//                     <span>{fmt(String(raw))}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           ))}
//           {(!block.rows || block.rows.length === 0) && (
//             <div className="text-center text-sm text-gray-500">No data available.</div>
//           )}
//         </CardContent>
//       </Card>
//     );
//   };

//   const tiles = initialData?.tiles ?? {};
//   const tileFormUrl = tiles?.form_url
//     ? isHttp(tiles?.form_url)
//       ? tiles?.form_url
//       : resolveFile(tiles?.form_url)
//     : "";
//   const tileWebsiteUrl = tiles?.website_url ?? "";

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search (Mobile) */}
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
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                 Leave &amp; Working Hours :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {name}
//               </h2>
//             </div>

//             {/* Act Information */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.act_information} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4">
//               <MobileCards
//                 block={initialData?.act_information}
//                 title="Act Information"
//               />
//             </div>

//             {/* Leave Entitlements */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Leave Entitlements
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.leave_entitlements} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4">
//               <MobileCards
//                 block={initialData?.leave_entitlements}
//                 title="Leave Entitlements"
//               />
//             </div>

//             {/* Working Hours & Overtime */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Working Hours &amp; Overtime
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <DesktopTable block={initialData?.working_hours} />
//               </CardContent>
//             </Card>

//             <div className="block md:hidden mb-4">
//               <MobileCards
//                 block={initialData?.working_hours}
//                 title="Working Hours & Overtime"
//               />
//             </div>

//             {/* Tiles Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Forms */}
//               <Card className="h-[140px] text-center border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Download className="h-7 w-7 text-orange-500 mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     {tiles?.form_title ?? "Download Forms"}
//                   </h3>
//                   {tileFormUrl ? (
//                     <Button
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-orange-600 text-white text-sm rounded-md"
//                       onClick={() => openProtectedDownload(router, tileFormUrl)}
//                     >
//                       Download
//                     </Button>
//                   ) : (
//                     <Button
//                       size="sm"
//                       disabled
//                       className="w-[80%] h-9 text-sm truncate bg-orange-200 text-white"
//                     >
//                       No Form Available
//                     </Button>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Leave Calculator */}
//               <Card className="h-[140px] text-center border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Calculator className="h-7 w-7 text-orange-500 mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     Leave Calculator
//                   </h3>
//                   <Button
//                     size="sm"
//                     className="w-[80%] h-9 bg-orange-700 hover:bg-orange-600 text-white text-sm rounded-md"
//                   >
//                     Calculate
//                   </Button>
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="h-[140px] text-center border-l-4 border-l-orange-500 shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <ExternalLink className="h-7 w-7 text-orange-500 mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     {tiles?.website_title ?? "Official Website"}
//                   </h3>
//                   {tileWebsiteUrl ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-orange-600 text-white text-sm rounded-md"
//                     >
//                       <Link
//                         href={tileWebsiteUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Visit Site
//                       </Link>
//                     </Button>
//                   ) : (
//                     <Button
//                       size="sm"
//                       disabled
//                       className="w-[80%] h-9 text-sm truncate bg-orange-200 text-white"
//                     >
//                       Not Available
//                     </Button>
//                   )}
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





// "use client";

// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Calculator, Download, ExternalLink } from "lucide-react";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import {
//   openProtectedDownload,
//   handleAutoDownloadOnReturn,
// } from "@/lib/download-auth";

// type TableBlock = {
//   headers: string[];
//   rows: Record<string, string>[];
// };

// type Tiles = {
//   form_title?: string | null;
//   form_url?: string | null;
//   website_title?: string | null;
//   website_url?: string | null;
// };

// type StateData = {
//   state: { name: string; slug: string };
//   is_applicable: boolean;
//   updated_date: string | null;
//   effective_date: string | null;
//   act_information: TableBlock;
//   leave_entitlements: TableBlock;
//   working_hours: TableBlock;
//   tiles?: Tiles;
// };

// export default function LeavesWorkingHoursDetails({
//   apiBase,
//   initialData,
// }: {
//   apiBase: string;
//   initialData: StateData;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     const path = typeof window !== "undefined" ? window.location.pathname : "/";
//     const search = typeof window !== "undefined" ? window.location.search : "";
//     handleAutoDownloadOnReturn(router, path, search);
//   }, [router]);

//   const name = initialData.state?.name ?? "—";

//   const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");

//   const tiles = initialData?.tiles ?? {};
//   const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
//   const resolveFile = (v?: string | null) =>
//     !v ? "" : isHttp(v) ? v : `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
//   const tileFormUrl = tiles?.form_url
//     ? isHttp(tiles?.form_url)
//       ? tiles?.form_url
//       : resolveFile(tiles?.form_url)
//     : "";
//   const tileWebsiteUrl = tiles?.website_url ?? "";

//   return (
//     <div className="min-h-screen">
//       <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
//         {/* Popular Search (Mobile) */}
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
//               <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
//                 Leave &amp; Working Hours :
//               </h1>
//               <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
//                 {name}
//               </h2>
//             </div>

//             {/* ===== Act Information (DESKTOP) ===== */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Act Information
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="p-4">
//                 {initialData?.act_information?.rows?.length ? (
//                   <div className="rounded-md overflow-hidden border border-orange-500">
//                     <table className="w-full border-collapse">
//                       <colgroup>
//                         <col style={{ width: "22%" }} />
//                         <col />
//                       </colgroup>
//                       <tbody>
//                         {initialData.act_information.headers.map((header, idx) => {
//                           const value =
//                             initialData.act_information.rows[0][header] ?? "—";
//                           return (
//                             <tr key={idx}>
//                               <th className="border border-orange-500 bg-orange-50 text-orange-700 font-semibold uppercase text-left px-4 py-3 text-sm align-top whitespace-normal">
//                                 {header}
//                               </th>
//                               <td className="border border-orange-500 px-4 py-3 text-gray-800 text-sm leading-relaxed align-top">
//                                 {value && value.trim() ? value : "—"}
//                               </td>
//                             </tr>
//                           );
//                         })}
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

//             {/* ===== Act Information (MOBILE) ===== */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
//                     Act Information
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {initialData?.act_information?.rows?.map((r, idx) => (
//                     <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//                       {initialData?.act_information?.headers?.map((h) => (
//                         <div
//                           key={h}
//                           className="flex justify-between border-b last:border-0 pb-1"
//                         >
//                           <span className="font-semibold text-orange-600">{h}</span>
//                           <span className="text-gray-800">{r[h] ?? "—"}</span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ===== Leave Entitlements ===== */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Leave Entitlements
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full border border-orange-500 border-collapse">
//                     <thead className="bg-orange-700 text-white">
//                       <tr>
//                         {initialData.leave_entitlements.headers.map((h, i) => (
//                           <th
//                             key={i}
//                             className="px-4 py-3 text-sm font-semibold uppercase tracking-wide border border-orange-500"
//                           >
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {initialData.leave_entitlements.rows.map((r, ridx) => (
//                         <tr key={ridx} className="bg-white even:bg-orange-50">
//                           {initialData.leave_entitlements.headers.map((h) => (
//                             <td
//                               key={h}
//                               className="px-4 py-3 border border-orange-500 text-sm text-gray-800"
//                             >
//                               {r[h] ?? "—"}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* ===== Leave Entitlements (MOBILE) ===== */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
//                     Leave Entitlements
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {initialData?.leave_entitlements?.rows?.map((r, idx) => (
//                     <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//                       {initialData?.leave_entitlements?.headers?.map((h) => (
//                         <div
//                           key={h}
//                           className="flex justify-between border-b last:border-0 pb-1"
//                         >
//                           <span className="font-semibold text-orange-600">{h}</span>
//                           <span className="text-gray-800">{r[h] ?? "—"}</span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ===== Working Hours & Overtime ===== */}
//             <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
//               <CardHeader className="pb-1 lg:pb-2">
//                 <CardTitle className="text-base lg:text-lg font-bold">
//                   Working Hours &amp; Overtime
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full overflow-x-auto">
//                   <table className="w-full border border-orange-500 border-collapse">
//                     <thead className="bg-orange-700 text-white">
//                       <tr>
//                         {initialData.working_hours.headers.map((h, i) => (
//                           <th
//                             key={i}
//                             className="px-4 py-3 text-sm font-semibold uppercase tracking-wide border border-orange-500"
//                           >
//                             {h}
//                           </th>
//                         ))}
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {initialData.working_hours.rows.map((r, ridx) => (
//                         <tr key={ridx} className="bg-white even:bg-orange-50">
//                           {initialData.working_hours.headers.map((h) => (
//                             <td
//                               key={h}
//                               className="px-4 py-3 border border-orange-500 text-sm text-gray-800"
//                             >
//                               {r[h] ?? "—"}
//                             </td>
//                           ))}
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* ===== Working Hours (MOBILE) ===== */}
//             <div className="block md:hidden mb-4">
//               <Card className="shadow-sm border-l-4 border-l-orange-500">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
//                     Working Hours &amp; Overtime
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-3 space-y-3">
//                   {initialData?.working_hours?.rows?.map((r, idx) => (
//                     <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
//                       {initialData?.working_hours?.headers?.map((h) => (
//                         <div
//                           key={h}
//                           className="flex justify-between border-b last:border-0 pb-1"
//                         >
//                           <span className="font-semibold text-orange-600">{h}</span>
//                           <span className="text-gray-800">{r[h] ?? "—"}</span>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ===== Tiles Section ===== */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
//               {/* Download Form */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     {tiles?.form_title ?? "Download Forms"}
//                   </h3>
//                   {tileFormUrl ? (
//                     <Button
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
//                       onClick={() => openProtectedDownload(router, tileFormUrl)}
//                     >
//                       Download
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

//               {/* Leave Calculator */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <Calculator className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     Leave Calculator
//                   </h3>
//                   <Button
//                     size="sm"
//                     className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
//                   >
//                     Calculate
//                   </Button>
//                 </CardContent>
//               </Card>

//               {/* Official Website */}
//               <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
//                 <CardContent className="h-full flex flex-col items-center justify-center">
//                   <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
//                   <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
//                     {tiles?.website_title ?? "Official Website"}
//                   </h3>
//                   {tileWebsiteUrl ? (
//                     <Button
//                       asChild
//                       size="sm"
//                       className="w-[80%] h-9 bg-orange-700 hover:bg-[#d14e0b] text-white text-sm truncate rounded-md"
//                     >
//                       <Link
//                         href={tileWebsiteUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Visit Site
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
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className=" hidden lg:block">
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

















"use client";

import PopularSearch from "@/app/PopularSearch/PopularSearch";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  openProtectedDownload,
  handleAutoDownloadOnReturn,
} from "@/lib/download-auth";

type TableBlock = {
  headers: string[];
  rows: Record<string, string>[];
};

type Tiles = {
  form_title?: string | null;
  form_url?: string | null;
  website_title?: string | null;
  website_url?: string | null;
};

type StateData = {
  state: { name: string; slug: string };
  is_applicable: boolean;
  updated_date: string | null;
  effective_date: string | null;
  act_information: TableBlock;
  leave_entitlements: TableBlock;
  working_hours: TableBlock;
  tiles?: Tiles;
};

export default function LeavesWorkingHoursDetails({
  apiBase,
  initialData,
}: {
  apiBase: string;
  initialData: StateData;
}) {
  const router = useRouter();

  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : "/";
    const search = typeof window !== "undefined" ? window.location.search : "";
    handleAutoDownloadOnReturn(router, path, search);
  }, [router]);

  const name = initialData.state?.name ?? "—";

  const fmt = (s?: string | null) => (s && s.trim().length ? s : "—");
  const cell = (row: Record<string, string>, header: string) => row[header] ?? "—";

  const tiles = initialData?.tiles ?? {};
  const isHttp = (v?: string | null) => (v ?? "").startsWith("http");
  const resolveFile = (v?: string | null) =>
    !v ? "" : isHttp(v) ? v : `${apiBase}/storage/${v.replace(/^\/+/, "")}`;
  const tileFormUrl = tiles?.form_url
    ? isHttp(tiles?.form_url)
      ? tiles?.form_url
      : resolveFile(tiles?.form_url)
    : "";
  const tileWebsiteUrl = tiles?.website_url ?? "";

  // Data variables
  const actH = initialData?.act_information?.headers || [];
  const actRows = initialData?.act_information?.rows || [];

  return (
    <div className="min-h-screen">
      <div className="mx-auto px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-4 lg:px-5 lg:py-4 xl:px-6 xl:py-5">
        {/* Popular Search (Mobile) */}
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
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold text-slate-800">
                Leave &amp; Working Hours :
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl text-orange-600 font-semibold">
                {name}
              </h2>
            </div>

            {/* ===== Act Information (DESKTOP) - Updated Design ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Act Information
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4">
                {actH?.length ? (
                  <div className="rounded-xl overflow-hidden border border-orange-400">
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
                                "bg-orange-500 text-white font-semibold uppercase tracking-wide text-left",
                                "border-y border-orange-300 border-r-2 border-r-orange-300",
                                "align-top whitespace-normal",
                              ].join(" ")}
                            >
                              {h}
                            </th>

                            {/* values across sets (dynamic columns) */}
                            {actRows?.map((row, cIdx) => {
                              const raw = cell(row, h);

                              return (
                                <td
                                  key={`${h}-${cIdx}`}
                                  className={[
                                    "px-4 py-3 text-xs lg:text-sm text-gray-900 text-left align-top",
                                    "border border-orange-300",
                                    cIdx === 0 ? "border-l-0" : "",
                                  ].join(" ")}
                                >
                                  <span className="break-words">
                                    {fmt(raw)}
                                  </span>
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

            {/* ===== Act Information (MOBILE) ===== */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
                    Act Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {initialData?.act_information?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
                      {initialData?.act_information?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex justify-between border-b last:border-0 pb-1"
                        >
                          <span className="font-semibold text-orange-600">{h}</span>
                          <span className="text-gray-800">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Leave Entitlements ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Leave Entitlements
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="w-full border border-collapse">
                    <thead className="bg-orange-500 text-white">
                      <tr>
                        {initialData.leave_entitlements.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-4 py-3 text-sm font-semibold uppercase tracking-wide border border-orange-300"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {initialData.leave_entitlements.rows.map((r, ridx) => (
                        <tr key={ridx} className="bg-white ">
                          {initialData.leave_entitlements.headers.map((h) => (
                            <td
                              key={h}
                              className="px-4 py-3 border border-orange-300 text-sm text-gray-800"
                            >
                              {r[h] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ===== Leave Entitlements (MOBILE) ===== */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
                    Leave Entitlements
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {initialData?.leave_entitlements?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
                      {initialData?.leave_entitlements?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex justify-between border-b last:border-0 pb-1"
                        >
                          <span className="font-semibold text-orange-600">{h}</span>
                          <span className="text-gray-800">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Working Hours & Overtime ===== */}
            <Card className="hidden md:block mb-3 shadow-sm border-l-4 border-l-orange-500">
              <CardHeader className="pb-1 lg:pb-2">
                <CardTitle className="text-base lg:text-lg font-bold">
                  Working Hours &amp; Overtime
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full overflow-x-auto">
                  <table className="w-full border border-orange-500 border-collapse">
                    <thead className="bg-orange-500 text-white">
                      <tr>
                        {initialData.working_hours.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-4 py-3 text-sm font-semibold uppercase tracking-wide border border-orange-300"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {initialData.working_hours.rows.map((r, ridx) => (
                        <tr key={ridx} className="bg-white ">
                          {initialData.working_hours.headers.map((h) => (
                            <td
                              key={h}
                              className="px-4 py-3 border border-orange-300 text-sm text-gray-800"
                            >
                              {r[h] ?? "—"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* ===== Working Hours (MOBILE) ===== */}
            <div className="block md:hidden mb-4">
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-bold bg-orange-500 text-white text-center rounded-t-md">
                    Working Hours &amp; Overtime
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 space-y-3">
                  {initialData?.working_hours?.rows?.map((r, idx) => (
                    <div key={idx} className="rounded-lg p-3 border text-xs space-y-2">
                      {initialData?.working_hours?.headers?.map((h) => (
                        <div
                          key={h}
                          className="flex justify-between border-b last:border-0 pb-1"
                        >
                          <span className="font-semibold text-orange-600">{h}</span>
                          <span className="text-gray-800">{r[h] ?? "—"}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ===== Tiles Section ===== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-3">
              {/* Download Form */}
              <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="h-full flex flex-col items-center justify-center">
                  <Download className="h-7 w-7 text-[#E85C0D] mb-2" />
                  <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
                    {tiles?.form_title ?? "Download Forms"}
                  </h3>
                  {tileFormUrl ? (
                    <Button
                      size="sm"
                      className="w-[80%] h-9 bg-orange-500 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                      onClick={() => openProtectedDownload(router, tileFormUrl)}
                    >
                      Download
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="w-[90%] h-9 text-sm truncate"
                    >
                      No Form Available
                    </Button>
                  )}
                </CardContent>
              </Card>

              {/* Leave Calculator */}
              <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="h-full flex flex-col items-center justify-center">
                  <Calculator className="h-7 w-7 text-[#E85C0D] mb-2" />
                  <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
                    Leave Calculator
                  </h3>
                  <Button
                    size="sm"
                    className="w-[80%] h-9 bg-orange-500 hover:bg-[#d14e0b] text-white text-sm truncate cursor-pointer rounded-md"
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>

              {/* Official Website */}
              <Card className="h-[140px] w-[330px] text-center border-l-4 border-l-[#E85C0D] shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="h-full flex flex-col items-center justify-center">
                  <ExternalLink className="h-7 w-7 text-[#E85C0D] mb-2" />
                  <h3 className="font-semibold mb-2 text-sm lg:text-base leading-tight text-[#222]">
                    {tiles?.website_title ?? "Official Website"}
                  </h3>
                  {tileWebsiteUrl ? (
                    <Button
                      asChild
                      size="sm"
                      className="w-[80%] h-9 bg-orange-500 hover:bg-[#d14e0b] text-white text-sm truncate rounded-md"
                    >
                      <Link
                        href={tileWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Site
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="w-[90%] h-9 text-sm truncate"
                    >
                      Not Available
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className=" hidden lg:block">
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
  );
}

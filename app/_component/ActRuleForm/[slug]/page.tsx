

// "use client";

// import {
//   Card, CardContent, CardDescription, CardHeader, CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Scale, Download, FileText, AlertCircle } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
// } from "@/components/ui/table";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";

// // ---------- Types matching API ----------
// type FormAPI = {
//   id: number;
//   form_no: string;
//   title: string;
//   short_desc: string;
//   pdf_url: string | null;
//   created_at: string;
// };

// type ActDetail = {
//   id: number;
//   title: string;
//   slug: string;
//   state: string;
//   short_description: string;
//   act_desc: string;         // HTML content from API
//   rule_desc: string;        // HTML content from API
//   act_doc_path?: string | null;
//   act_doc_url?: string | null;
//   rule_doc_path?: string | null;
//   rule_doc_url?: string | null;
//   forms: FormAPI[];
//   created_at: string;
// };

// interface ActDetailClientProps {
//   act: ActDetail;
// }

// /* =========================
//    ✅ Base host override
//    ========================= */
// // ✅ one place me rakho (utils/url.ts)
// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";

// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0"]);

// export function normalizeUrl(url?: string | null, path?: string | null): string | null {
//   // Absolute URL path
//   if (url) {
//     try {
//       const u = new URL(url);
//       const base = new URL(FILE_HOST);
//       const origin = LOCAL_HOSTS.has(u.hostname) ? base.origin : u.origin;

//       // 🔑 single-encode: pehle decode, phir encode
//       const cleanPath = encodeURI(decodeURI(u.pathname));

//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       // not absolute, fall through to path
//     }
//   }

//   // Relative path (e.g., act_doc_path)
//   if (path) {
//     // ensure leading slash & /storage prefix
//     let p = path.trim();
//     if (!p.startsWith("/")) p = `/${p}`;
//     if (!p.startsWith("/storage/")) p = `/storage${p.startsWith("/storage") ? "" : p}`;

//     const cleanPath = encodeURI(decodeURI(p));
//     return `${FILE_HOST}${cleanPath}`;
//   }

//   return null;
// }

// /* ========================= */

// export default function ActDetailClient({ act }: ActDetailClientProps) {
//   const forms = act.forms || [];
//   const formsCount = forms.length;

//   const formatDate = (dateString: string) => {
//     try {
//       return new Date(dateString).toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       });
//     } catch {
//       return "Invalid Date";
//     }
//   };

//   // ---------- Downloads using normalized URL ----------
//   const handleActDownload = () => {
//     const finalUrl = normalizeUrl(act.act_doc_url, act.act_doc_path || null);
//     if (!finalUrl) {
//       alert("Act document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   const handleRulesDownload = () => {
//     const finalUrl = normalizeUrl(act.rule_doc_url, act.rule_doc_path || null);
//     if (!finalUrl) {
//       alert("Rules document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   const handleFormDownload = (form: FormAPI) => {
//     const finalUrl = normalizeUrl(form.pdf_url, null);
//     if (!finalUrl) {
//       alert("Form document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-5">
//         <div className="grid lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
//           <div className="lg:col-span-3">
//             {/* Header Card - Using API data */}
//             <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
//               <CardHeader>
//                 <div className="space-y-4">
//                   <div className="flex items-start justify-between gap-1.5">
//                     <div className="flex-1 min-w-0">
//                       <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
//                         {act.title}
//                       </CardTitle>
//                       <CardDescription className="text-[13px] 2xl:text-base text-gray-600 leading-snug mt-1">
//                         {act.short_description}
//                       </CardDescription>
//                     </div>
//                     <Badge
//                       variant="outline"
//                       className="bg-blue-50 text-blue-700 border-blue-200 text-xs 2xl:text-sm flex-shrink-0"
//                     >
//                       {act.state}
//                     </Badge>
//                   </div>

//                   {/* Stats */}
//                   <div className="grid grid-cols-3 gap-1 p-1 rounded h-6">
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">—</div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Sections
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {act.rule_desc ? 1 : 0}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Rules
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {formsCount}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Forms
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>
//             <Tabs defaultValue="overview" className="space-y-1 sm:space-y-3 lg:space-y-0.5">
//               <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
//                 <TabsTrigger value="overview" className="text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5">
//                   Act Details
//                 </TabsTrigger>
//                 <TabsTrigger value="rules" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
//                   Rules
//                 </TabsTrigger>
//                 <TabsTrigger value="forms" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
//                   Forms
//                 </TabsTrigger>
//               </TabsList>

//               {/* Act Overview (HTML from API) */}
//               <TabsContent value="overview" className="space-y-0.5 sm:space-y-3 lg:space-y-0.5">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:py-1">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Act Overview :</span>
//                       </CardTitle>

//                       {normalizeUrl(act.act_doc_url, act.act_doc_path) && (
//                         <Button
//                           onClick={handleActDownload}
//                           className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                           aria-label="download act"
//                         >
//                           <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                           Download Act
//                         </Button>
//                       )}
//                     </div>
//                   </CardHeader>

//                   <CardContent className="space-y-0.5 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4 -mt-10">
//                     {act.act_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none
//                                    prose-p:leading-relaxed prose-p:text-gray-700
//                                    prose-headings:font-semibold prose-headings:text-slate-900
//                                    [&_ul>li]:marker:text-orange-500"
//                         dangerouslySetInnerHTML={{ __html: act.act_desc }}
//                       />
//                     ) : (
//                       <div className="text-center text-gray-500 py-8">
//                         <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
//                         <p className="text-sm">No act details available</p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Rules (HTML from API) */}
//               <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:p-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Rules Overview :</span>
//                       </CardTitle>

//                       {normalizeUrl(act.rule_doc_url, act.rule_doc_path) && (
//                         <Button
//                           onClick={handleRulesDownload}
//                           className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                           aria-label="download rules"
//                         >
//                           <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                           Download Rules
//                         </Button>
//                       )}
//                     </div>
//                   </CardHeader>

//                   <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4">
//                     {act.rule_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none
//                                    prose-p:leading-relaxed prose-p:text-gray-700
//                                    prose-headings:font-semibold prose-headings:text-slate-900
//                                    [&_ul>li]:marker:text-orange-500 p-2 sm:p-3 bg-gray-50 rounded-md lg:rounded-lg -mt-14"
//                         dangerouslySetInnerHTML={{ __html: act.rule_desc }}
//                       />
//                     ) : (
//                       <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                           <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                         </div>
//                         <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                           No rules information available
//                         </p>
//                         <p className="text-gray-400 text-[10px] sm:text-xs">
//                           Please check with relevant authorities
//                         </p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Forms (from API) */}
//               <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:p-4">
//                     <div className="flex items-center gap-1.5 sm:gap-2">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Forms ({formsCount}) :</span>
//                       </CardTitle>
//                     </div>
//                   </CardHeader>

//                   <CardContent className="p-0">
//                     {forms.length === 0 ? (
//                       <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg mx-2 sm:mx-3 mb-2 sm:mb-3">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                           <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                         </div>
//                         <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                           No forms available
//                         </p>
//                         <p className="text-gray-400 text-[10px] sm:text-xs">Forms will be added when available</p>
//                       </div>
//                     ) : (
//                       <>
//                         {/* Mobile Cards */}
//                         <div className="block lg:hidden">
//                           <div className="space-y-2 sm:space-y-2.5 p-2 sm:p-3">
//                             {forms.map((form) => (
//                               <Card key={form.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//                                 <CardContent className="p-2 sm:p-3">
//                                   <div className="flex flex-col gap-2">
//                                     <div className="flex items-start justify-between">
//                                       <div className="flex-1 min-w-0">
//                                         <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
//                                           {form.title}
//                                         </h4>
//                                         <Badge variant="outline" className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1">
//                                           {form.form_no}
//                                         </Badge>
//                                       </div>
//                                     </div>
//                                     <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
//                                       {form.short_desc}
//                                     </p>
//                                     <div className="flex items-center justify-between mt-1">
//                                       <span className="text-[9px] sm:text-[10px] text-gray-500">
//                                         {formatDate(form.created_at)}
//                                       </span>
//                                       {normalizeUrl(form.pdf_url, null) ? (
//                                         <Button
//                                           size="sm"
//                                           className="text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer"
//                                           onClick={() => handleFormDownload(form)}
//                                           aria-label="Download Form"
//                                         >
//                                           <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
//                                           Download
//                                         </Button>
//                                       ) : (
//                                         <span className="text-[9px] sm:text-[10px] text-gray-400">No PDF</span>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </CardContent>
//                               </Card>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Desktop Table */}
//                         <div className="hidden lg:block -mt-7">
//                           <Table>
//                             <TableHeader>
//                               <TableRow className="bg-gray-50 border-gray-200">
//                                 <TableHead className="w-16 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Form No.</TableHead>
//                                 <TableHead className="text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Title</TableHead>
//                                 <TableHead className="hidden xl:table-cell text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Description</TableHead>
//                                 <TableHead className="w-24 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Date</TableHead>
//                                 <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Actions</TableHead>
//                               </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                               {forms.map((form) => {
//                                 const href = normalizeUrl(form.pdf_url, null);
//                                 return (
//                                   <TableRow key={form.id} className="hover:bg-gray-50 transition-colors border-gray-200">
//                                     <TableCell className="py-2">
//                                       <Badge variant="outline" className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm">
//                                         {form.form_no}
//                                       </Badge>
//                                     </TableCell>
//                                     <TableCell className="font-medium text-[11px] sm:text-xs py-2 2xl:text-sm">
//                                       {form.title}
//                                     </TableCell>
//                                     <TableCell className="hidden xl:table-cell text-[11px] text-gray-600 py-2 max-w-xs 2xl:text-sm">
//                                       <span className="line-clamp-2">{form.short_desc}</span>
//                                     </TableCell>
//                                     <TableCell className="py-2 text-[10px] text-gray-500">
//                                       {formatDate(form.created_at)}
//                                     </TableCell>
//                                     <TableCell className="py-2">
//                                       {href ? (
//                                         <Button
//                                           size="lg"
//                                           className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 2xl:text-sm hover:cursor-pointer"
//                                           onClick={() => handleFormDownload(form)}
//                                           aria-label="Download Form"
//                                         >
//                                           <Download className="w-3 h-3 mr-1" />
//                                           Download
//                                         </Button>
//                                       ) : (
//                                         <span className="text-[10px] text-gray-400">No PDF</span>
//                                       )}
//                                     </TableCell>
//                                   </TableRow>
//                                 );
//                               })}
//                             </TableBody>
//                           </Table>
//                         </div>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
//               <Card className="shadow-sm border-gray-200">
//                 <CardContent className="p-2 sm:p-3 h-[25rem]">
//                   <PopularSearch className="mb-2 sm:mb-3" />
//                   <Separator className="my-3" />
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
// import {
//   Card, CardContent, CardDescription, CardHeader, CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Scale, Download, FileText, AlertCircle } from "lucide-react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
// } from "@/components/ui/table";
// import PopularSearch from "@/app/PopularSearch/PopularSearch";
// import DOMPurify from 'dompurify';

// // ---------- Types matching API ----------
// type FormAPI = {
//   id: number;
//   form_no: string;
//   title: string;
//   short_desc: string;
//   pdf_url: string | null;
//   created_at: string;
// };

// type ActDetail = {
//   id: number;
//   title: string;
//   slug: string;
//   state: string;
//   short_description: string;
//   act_desc: string;         // HTML content from API
//   rule_desc: string;        // HTML content from API
//   act_doc_path?: string | null;
//   act_doc_url?: string | null;
//   rule_doc_path?: string | null;
//   rule_doc_url?: string | null;
//   forms: FormAPI[];
//   created_at: string;
// };

// interface ActDetailClientProps {
//   act: ActDetail;
// }

// /* =========================
//    ✅ Base host override
//    ========================= */
// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";

// const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0"]);

// export function normalizeUrl(url?: string | null, path?: string | null): string | null {
//   // Absolute URL path
//   if (url) {
//     try {
//       const u = new URL(url);
//       const base = new URL(FILE_HOST);
//       const origin = LOCAL_HOSTS.has(u.hostname) ? base.origin : u.origin;
//       // 🔑 single-encode: pehle decode, phir encode
//       const cleanPath = encodeURI(decodeURI(u.pathname));
//       return `${origin}${cleanPath}${u.search}${u.hash}`;
//     } catch {
//       // not absolute, fall through to path
//     }
//   }
  
//   // Relative path (e.g., act_doc_path)
//   if (path) {
//     // ensure leading slash & /storage prefix
//     let p = path.trim();
//     if (!p.startsWith("/")) p = `/${p}`;
//     if (!p.startsWith("/storage/")) p = `/storage${p.startsWith("/storage") ? "" : p}`;
//     const cleanPath = encodeURI(decodeURI(p));
//     return `${FILE_HOST}${cleanPath}`;
//   }
  
//   return null;
// }

// export default function ActDetailClient({ act }: ActDetailClientProps) {
//   const forms = act.forms || [];
//   const formsCount = forms.length;

//   // ✅ DOMPurify sanitization function
//   const sanitizeHTML = (htmlContent: string) => {
//     if (typeof window !== 'undefined') {
//       return DOMPurify.sanitize(htmlContent, {
//         ALLOWED_TAGS: [
//           'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
//           'ul', 'ol', 'li', 'blockquote', 'div', 'span', 'a'
//         ],
//         ALLOWED_ATTR: ['href', 'target', 'class', 'id'],
//         KEEP_CONTENT: true
//       });
//     }
//     return htmlContent; // Server-side fallback
//   };

//   const formatDate = (dateString: string) => {
//     try {
//       return new Date(dateString).toLocaleDateString("en-IN", {
//         day: "2-digit",
//         month: "short",
//         year: "numeric",
//       });
//     } catch {
//       return "Invalid Date";
//     }
//   };

//   // ---------- Downloads using normalized URL ----------
//   const handleActDownload = () => {
//     const finalUrl = normalizeUrl(act.act_doc_url, act.act_doc_path || null);
//     if (!finalUrl) {
//       alert("Act document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   const handleRulesDownload = () => {
//     const finalUrl = normalizeUrl(act.rule_doc_url, act.rule_doc_path || null);
//     if (!finalUrl) {
//       alert("Rules document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   const handleFormDownload = (form: FormAPI) => {
//     const finalUrl = normalizeUrl(form.pdf_url, null);
//     if (!finalUrl) {
//       alert("Form document not available");
//       return;
//     }
//     window.open(finalUrl, "_blank");
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="container mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-5">
//         <div className="grid lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
//           <div className="lg:col-span-3">
//             {/* Header Card - Using API data */}
//             <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
//               <CardHeader>
//                 <div className="space-y-4">
//                   <div className="flex items-start justify-between gap-1.5">
//                     <div className="flex-1 min-w-0">
//                       <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
//                         {act.title}
//                       </CardTitle>
//                       <CardDescription className="text-[13px] 2xl:text-base text-gray-600 leading-snug mt-1">
//                         {act.short_description}
//                       </CardDescription>
//                     </div>
//                     <Badge
//                       variant="outline"
//                       className="bg-blue-50 text-blue-700 border-blue-200 text-xs 2xl:text-sm flex-shrink-0"
//                     >
//                       {act.state}
//                     </Badge>
//                   </div>
                  
//                   {/* Stats */}
//                   <div className="grid grid-cols-3 gap-1 p-1 rounded h-6">
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">—</div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Sections
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {act.rule_desc ? 1 : 0}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Rules
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {formsCount}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Forms
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>

//             <Tabs defaultValue="overview" className="space-y-1 sm:space-y-3 lg:space-y-0.5">
//               <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
//                 <TabsTrigger value="overview" className="text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5">
//                   Act Details
//                 </TabsTrigger>
//                 <TabsTrigger value="rules" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
//                   Rules
//                 </TabsTrigger>
//                 <TabsTrigger value="forms" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
//                   Forms
//                 </TabsTrigger>
//               </TabsList>

//               {/* ✅ Act Overview (HTML from API with DOMPurify) */}
//               <TabsContent value="overview" className="space-y-0.5 sm:space-y-3 lg:space-y-0.5">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:py-1">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Act Overview :</span>
//                       </CardTitle>
//                       {normalizeUrl(act.act_doc_url, act.act_doc_path) && (
//                         <Button
//                           onClick={handleActDownload}
//                           className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                           aria-label="download act"
//                         >
//                           <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                           Download Act
//                         </Button>
//                       )}
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-0.5 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4 -mt-10">
//                     {act.act_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none
//                                    prose-p:leading-relaxed prose-p:text-gray-700
//                                    prose-headings:font-semibold prose-headings:text-slate-900
//                                    [&_ul>li]:marker:text-orange-500"
//                         dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.act_desc) }}
//                       />
//                     ) : (
//                       <div className="text-center text-gray-500 py-8">
//                         <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
//                         <p className="text-sm">No act details available</p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* ✅ Rules (HTML from API with DOMPurify) */}
//               <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:p-4">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Rules Overview :</span>
//                       </CardTitle>
//                       {normalizeUrl(act.rule_doc_url, act.rule_doc_path) && (
//                         <Button
//                           onClick={handleRulesDownload}
//                           className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                           aria-label="download rules"
//                         >
//                           <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                           Download Rules
//                         </Button>
//                       )}
//                     </div>
//                   </CardHeader>
//                   <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4">
//                     {act.rule_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none
//                                    prose-p:leading-relaxed prose-p:text-gray-700
//                                    prose-headings:font-semibold prose-headings:text-slate-900
//                                    [&_ul>li]:marker:text-orange-500 p-2 sm:p-3 bg-gray-50 rounded-md lg:rounded-lg -mt-14"
//                         dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.rule_desc) }}
//                       />
//                     ) : (
//                       <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                           <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                         </div>
//                         <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                           No rules information available
//                         </p>
//                         <p className="text-gray-400 text-[10px] sm:text-xs">
//                           Please check with relevant authorities
//                         </p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>

//               {/* Forms (from API) */}
//               <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="p-2 sm:p-3 lg:p-4">
//                     <div className="flex items-center gap-1.5 sm:gap-2">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Forms ({formsCount}) :</span>
//                       </CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="p-0">
//                     {forms.length === 0 ? (
//                       <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg mx-2 sm:mx-3 mb-2 sm:mb-3">
//                         <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                           <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                         </div>
//                         <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                           No forms available
//                         </p>
//                         <p className="text-gray-400 text-[10px] sm:text-xs">Forms will be added when available</p>
//                       </div>
//                     ) : (
//                       <>
//                         {/* Mobile Cards */}
//                         <div className="block lg:hidden">
//                           <div className="space-y-2 sm:space-y-2.5 p-2 sm:p-3">
//                             {forms.map((form) => (
//                               <Card key={form.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//                                 <CardContent className="p-2 sm:p-3">
//                                   <div className="flex flex-col gap-2">
//                                     <div className="flex items-start justify-between">
//                                       <div className="flex-1 min-w-0">
//                                         <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
//                                           {form.title}
//                                         </h4>
//                                         <Badge variant="outline" className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1">
//                                           {form.form_no}
//                                         </Badge>
//                                       </div>
//                                     </div>
//                                     <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
//                                       {form.short_desc}
//                                     </p>
//                                     <div className="flex items-center justify-between mt-1">
//                                       <span className="text-[9px] sm:text-[10px] text-gray-500">
//                                         {formatDate(form.created_at)}
//                                       </span>
//                                       {normalizeUrl(form.pdf_url, null) ? (
//                                         <Button
//                                           size="sm"
//                                           className="text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer"
//                                           onClick={() => handleFormDownload(form)}
//                                           aria-label="Download Form"
//                                         >
//                                           <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
//                                           Download
//                                         </Button>
//                                       ) : (
//                                         <span className="text-[9px] sm:text-[10px] text-gray-400">No PDF</span>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </CardContent>
//                               </Card>
//                             ))}
//                           </div>
//                         </div>

//                         {/* Desktop Table */}
//                         <div className="hidden lg:block -mt-7">
//                           <Table>
//                             <TableHeader>
//                               <TableRow className="bg-gray-50 border-gray-200">
//                                 <TableHead className="w-16 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Form No.</TableHead>
//                                 <TableHead className="text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Title</TableHead>
//                                 <TableHead className="hidden xl:table-cell text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Description</TableHead>
//                                 <TableHead className="w-24 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Date</TableHead>
//                                 <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Actions</TableHead>
//                               </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                               {forms.map((form) => {
//                                 const href = normalizeUrl(form.pdf_url, null);
//                                 return (
//                                   <TableRow key={form.id} className="hover:bg-gray-50 transition-colors border-gray-200">
//                                     <TableCell className="py-2">
//                                       <Badge variant="outline" className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm">
//                                         {form.form_no}
//                                       </Badge>
//                                     </TableCell>
//                                     <TableCell className="font-medium text-[11px] sm:text-xs py-2 2xl:text-sm">
//                                       {form.title}
//                                     </TableCell>
//                                     <TableCell className="hidden xl:table-cell text-[11px] text-gray-600 py-2 max-w-xs 2xl:text-sm">
//                                       <span className="line-clamp-2">{form.short_desc}</span>
//                                     </TableCell>
//                                     <TableCell className="py-2 text-[10px] text-gray-500">
//                                       {formatDate(form.created_at)}
//                                     </TableCell>
//                                     <TableCell className="py-2">
//                                       {href ? (
//                                         <Button
//                                           size="lg"
//                                           className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 2xl:text-sm hover:cursor-pointer"
//                                           onClick={() => handleFormDownload(form)}
//                                           aria-label="Download Form"
//                                         >
//                                           <Download className="w-3 h-3 mr-1" />
//                                           Download
//                                         </Button>
//                                       ) : (
//                                         <span className="text-[10px] text-gray-400">No PDF</span>
//                                       )}
//                                     </TableCell>
//                                   </TableRow>
//                                 );
//                               })}
//                             </TableBody>
//                           </Table>
//                         </div>
//                       </>
//                     )}
//                   </CardContent>
//                 </Card>
//               </TabsContent>
//             </Tabs>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
//               <Card className="shadow-sm border-gray-200">
//                 <CardContent className="p-2 sm:p-3 h-[25rem]">
//                   <PopularSearch className="mb-2 sm:mb-3" />
//                   <Separator className="my-3" />
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
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scale, Download, FileText, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import DOMPurify from 'dompurify';

// ---------- Types matching API ----------
type FormAPI = {
  id: number;
  form_no: string;
  title: string;
  short_desc: string;
  pdf_url: string | null;
  created_at: string;
};

type ActDetail = {
  id: number;
  title: string;
  slug: string;
  state: string;
  short_description: string;
  act_desc: string;         // HTML content from API
  rule_desc: string;        // HTML content from API
  act_doc_path?: string | null;
  act_doc_url?: string | null;
  rule_doc_path?: string | null;
  rule_doc_url?: string | null;
  forms: FormAPI[];
  created_at: string;
};

interface ActDetailClientProps {
  act: ActDetail;
}

/* =========================
   ✅ Base host override
   ========================= */
const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "127.1.1.0"]);

export function normalizeUrl(url?: string | null, path?: string | null): string | null {
  // Absolute URL path
  if (url) {
    try {
      const u = new URL(url);
      const base = new URL(FILE_HOST);
      const origin = LOCAL_HOSTS.has(u.hostname) ? base.origin : u.origin;
      // 🔑 single-encode: pehle decode, phir encode
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      // not absolute, fall through to path
    }
  }
  
  // Relative path (e.g., act_doc_path)
  if (path) {
    // ensure leading slash & /storage prefix
    let p = path.trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (!p.startsWith("/storage/")) p = `/storage${p.startsWith("/storage") ? "" : p}`;
    const cleanPath = encodeURI(decodeURI(p));
    return `${FILE_HOST}${cleanPath}`;
  }
  
  return null;
}

export default function ActDetailClient({ act }: ActDetailClientProps) {
  const forms = act.forms || [];
  const formsCount = forms.length;

  // ✅ Enhanced DOMPurify sanitization with complete list support
  const sanitizeHTML = (htmlContent: string) => {
    if (typeof window !== 'undefined') {
      return DOMPurify.sanitize(htmlContent, {
        ALLOWED_TAGS: [
          'p', 'br', 'strong', 'em', 'u', 'b', 'i',
          'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
          'ul', 'ol', 'li', 'blockquote', 'div', 'span', 'a'
        ],
        ALLOWED_ATTR: ['href', 'target', 'class', 'id', 'type', 'start', 'reversed'],
        KEEP_CONTENT: true,
        ADD_ATTR: ['type', 'start'] // Allow list type attributes
      });
    }
    return htmlContent; // Server-side fallback
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "Invalid Date";
    }
  };

  // ---------- Downloads using normalized URL ----------
  const handleActDownload = () => {
    const finalUrl = normalizeUrl(act.act_doc_url, act.act_doc_path || null);
    if (!finalUrl) {
      alert("Act document not available");
      return;
    }
    window.open(finalUrl, "_blank");
  };

  const handleRulesDownload = () => {
    const finalUrl = normalizeUrl(act.rule_doc_url, act.rule_doc_path || null);
    if (!finalUrl) {
      alert("Rules document not available");
      return;
    }
    window.open(finalUrl, "_blank");
  };

  const handleFormDownload = (form: FormAPI) => {
    const finalUrl = normalizeUrl(form.pdf_url, null);
    if (!finalUrl) {
      alert("Form document not available");
      return;
    }
    window.open(finalUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-5">
        <div className="grid lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
          <div className="lg:col-span-3">
            {/* Header Card - Using API data */}
            <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
              <CardHeader>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-1.5">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
                        {act.title}
                      </CardTitle>
                      <CardDescription className="text-[13px] 2xl:text-base text-gray-600 leading-snug mt-1">
                        {act.short_description}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-blue-50 text-blue-700 border-blue-200 text-xs 2xl:text-sm flex-shrink-0"
                    >
                      {act.state}
                    </Badge>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-1 p-1 rounded h-6">
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-orange-500 leading-none">—</div>
                      <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                        Sections
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-orange-500 leading-none">
                        {act.rule_desc ? 1 : 0}
                      </div>
                      <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                        Rules
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-[17px] font-bold text-orange-500 leading-none">
                        {formsCount}
                      </div>
                      <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                        Forms
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Tabs defaultValue="overview" className="space-y-1 sm:space-y-3 lg:space-y-0.5">
              <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
                <TabsTrigger value="overview" className="text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5">
                  Act Details
                </TabsTrigger>
                <TabsTrigger value="rules" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
                  Rules
                </TabsTrigger>
                <TabsTrigger value="forms" className="text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5">
                  Forms
                </TabsTrigger>
              </TabsList>

              {/* ✅ Act Overview with Complete List Support */}
              <TabsContent value="overview" className="space-y-0.5 sm:space-y-3 lg:space-y-0.5">
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:py-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Act Overview :</span>
                      </CardTitle>
                      {normalizeUrl(act.act_doc_url, act.act_doc_path) && (
                        <Button
                          onClick={handleActDownload}
                          className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
                          aria-label="download act"
                        >
                          <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                          Download Act
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-0.5 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4 -mt-10">
                    {act.act_desc ? (
                      <div
                        className="prose prose-sm max-w-none
                                  /* Paragraph Styling */
                                  prose-p:leading-relaxed prose-p:text-gray-700 prose-p:mb-4
                                  
                                  /* Heading Styling */
                                  prose-headings:font-semibold prose-headings:text-slate-900 prose-headings:mb-3 prose-headings:mt-6
                                  prose-h1:text-xl prose-h1:font-bold
                                  prose-h2:text-lg prose-h2:font-bold  
                                  prose-h3:text-base prose-h3:font-bold prose-h3:text-slate-800
                                  prose-h4:text-sm prose-h4:font-semibold
                                  
                                  /* List Styling - All Types */
                                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ul:space-y-1
                                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-ol:space-y-1
                                  prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-1
                                  
                                  /* Custom List Controls */
                                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
                                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
                                  [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:pl-2
                                  
                                  /* List Markers */
                                  [&_ul>li]:marker:text-orange-500 
                                  [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
                                  
                                  /* Nested Lists */
                                  [&_ul_ul]:list-circle [&_ul_ul]:mt-2
                                  [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2
                                  [&_ul_ul_ul]:list-square
                                  
                                  /* Roman Numerals Support */
                                  [&_ol[type='i']]:list-lower-roman
                                  [&_ol[type='I']]:list-upper-roman
                                  [&_ol[type='a']]:list-lower-alpha
                                  [&_ol[type='A']]:list-upper-alpha
                                  
                                  /* Strong/Bold Text */
                                  prose-strong:font-semibold prose-strong:text-slate-900
                                  
                                  /* Links */
                                  prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.act_desc) }}
                      />
                    ) : (
                      <div className="text-center text-gray-500 py-8">
                        <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">No act details available</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* ✅ Rules with Complete List Support */}
              <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Rules Overview :</span>
                      </CardTitle>
                      {normalizeUrl(act.rule_doc_url, act.rule_doc_path) && (
                        <Button
                          onClick={handleRulesDownload}
                          className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
                          aria-label="download rules"
                        >
                          <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                          Download Rules
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 sm:space-y-3 lg:space-y-4 p-2 sm:p-3 lg:p-4">
                    {act.rule_desc ? (
                      <div
                        className="prose prose-sm max-w-none
                                  /* Paragraph Styling */
                                  prose-p:leading-relaxed prose-p:text-gray-700 prose-p:mb-4
                                  
                                  /* Heading Styling */
                                  prose-headings:font-semibold prose-headings:text-slate-900 prose-headings:mb-3 prose-headings:mt-6
                                  prose-h1:text-xl prose-h1:font-bold
                                  prose-h2:text-lg prose-h2:font-bold  
                                  prose-h3:text-base prose-h3:font-bold prose-h3:text-slate-800
                                  prose-h4:text-sm prose-h4:font-semibold
                                  
                                  /* List Styling - All Types */
                                  prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4 prose-ul:space-y-1
                                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4 prose-ol:space-y-1
                                  prose-li:text-gray-700 prose-li:leading-relaxed prose-li:mb-1
                                  
                                  /* Custom List Controls */
                                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4
                                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4
                                  [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:pl-2
                                  
                                  /* List Markers */
                                  [&_ul>li]:marker:text-orange-500 
                                  [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
                                  
                                  /* Nested Lists */
                                  [&_ul_ul]:list-circle [&_ul_ul]:mt-2
                                  [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2
                                  [&_ul_ul_ul]:list-square
                                  
                                  /* Roman Numerals Support */
                                  [&_ol[type='i']]:list-lower-roman
                                  [&_ol[type='I']]:list-upper-roman
                                  [&_ol[type='a']]:list-lower-alpha
                                  [&_ol[type='A']]:list-upper-alpha
                                  
                                  /* Strong/Bold Text */
                                  prose-strong:font-semibold prose-strong:text-slate-900
                                  
                                  /* Links */
                                  prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline
                                  
                                  /* Background for Rules */
                                  p-2 sm:p-3 bg-gray-50 rounded-md lg:rounded-lg -mt-14"
                        dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.rule_desc) }}
                      />
                    ) : (
                      <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                          <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                          No rules information available
                        </p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">
                          Please check with relevant authorities
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Forms (from API) */}
              <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
                <Card className="shadow-sm border-gray-200">
                  <CardHeader className="p-2 sm:p-3 lg:p-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                        <span>Forms ({formsCount}) :</span>
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    {forms.length === 0 ? (
                      <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg mx-2 sm:mx-3 mb-2 sm:mb-3">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                          <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
                          No forms available
                        </p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">Forms will be added when available</p>
                      </div>
                    ) : (
                      <>
                        {/* Mobile Cards */}
                        <div className="block lg:hidden">
                          <div className="space-y-2 sm:space-y-2.5 p-2 sm:p-3">
                            {forms.map((form) => (
                              <Card key={form.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                                <CardContent className="p-2 sm:p-3">
                                  <div className="flex flex-col gap-2">
                                    <div className="flex items-start justify-between">
                                      <div className="flex-1 min-w-0">
                                        <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
                                          {form.title}
                                        </h4>
                                        <Badge variant="outline" className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1">
                                          {form.form_no}
                                        </Badge>
                                      </div>
                                    </div>
                                    <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
                                      {form.short_desc}
                                    </p>
                                    <div className="flex items-center justify-between mt-1">
                                      <span className="text-[9px] sm:text-[10px] text-gray-500">
                                        {formatDate(form.created_at)}
                                      </span>
                                      {normalizeUrl(form.pdf_url, null) ? (
                                        <Button
                                          size="sm"
                                          className="text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer"
                                          onClick={() => handleFormDownload(form)}
                                          aria-label="Download Form"
                                        >
                                          <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                                          Download
                                        </Button>
                                      ) : (
                                        <span className="text-[9px] sm:text-[10px] text-gray-400">No PDF</span>
                                      )}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden lg:block -mt-7">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-gray-50 border-gray-200">
                                <TableHead className="w-16 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Form No.</TableHead>
                                <TableHead className="text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Title</TableHead>
                                <TableHead className="hidden xl:table-cell text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Description</TableHead>
                                <TableHead className="w-24 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Date</TableHead>
                                <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Actions</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {forms.map((form) => {
                                const href = normalizeUrl(form.pdf_url, null);
                                return (
                                  <TableRow key={form.id} className="hover:bg-gray-50 transition-colors border-gray-200">
                                    <TableCell className="py-2">
                                      <Badge variant="outline" className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm">
                                        {form.form_no}
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="font-medium text-[11px] sm:text-xs py-2 2xl:text-sm">
                                      {form.title}
                                    </TableCell>
                                    <TableCell className="hidden xl:table-cell text-[11px] text-gray-600 py-2 max-w-xs 2xl:text-sm">
                                      <span className="line-clamp-2">{form.short_desc}</span>
                                    </TableCell>
                                    <TableCell className="py-2 text-[10px] text-gray-500">
                                      {formatDate(form.created_at)}
                                    </TableCell>
                                    <TableCell className="py-2">
                                      {href ? (
                                        <Button
                                          size="lg"
                                          className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 2xl:text-sm hover:cursor-pointer"
                                          onClick={() => handleFormDownload(form)}
                                          aria-label="Download Form"
                                        >
                                          <Download className="w-3 h-3 mr-1" />
                                          Download
                                        </Button>
                                      ) : (
                                        <span className="text-[10px] text-gray-400">No PDF</span>
                                      )}
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
              <Card className="shadow-sm border-gray-200">
                <CardContent className="p-2 sm:p-3 h-[25rem]">
                  <PopularSearch className="mb-2 sm:mb-3" />
                  <Separator className="my-3" />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

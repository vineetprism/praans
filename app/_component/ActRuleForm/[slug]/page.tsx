
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
//   section_count: number;
//   rule_count: number;
//   form_count: number;

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
//       //  single-encode: pehle decode, phir encode
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

//   // ✅ Enhanced DOMPurify sanitization - API se aane wala HTML properly render karne ke liye
//   const sanitizeHTML = (htmlContent: string) => {
//     if (typeof window !== 'undefined') {
//       return DOMPurify.sanitize(htmlContent, {
//         ALLOWED_TAGS: [
//           'p', 'br', 'strong', 'em', 'u', 'b', 'i',
//           'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
//           'ul', 'ol', 'li', 'blockquote', 'div', 'span', 'a',
//           'pre', 'code', 'mark', 'strike'
//         ],
//         ALLOWED_ATTR: ['href', 'target', 'class', 'id', 'type', 'start', 'reversed', 'style', 'color', 'data-as-button'],
//         KEEP_CONTENT: true,
//         ADD_ATTR: ['type', 'start'] // Allow list type attributes
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
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {act.section_count}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Sections
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {act.rule_count}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Rules
//                       </div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[17px] font-bold text-orange-500 leading-none">
//                         {act.form_count}
//                       </div>
//                       <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                         Forms
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardHeader>
//             </Card>

//             <Tabs defaultValue="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
//               <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
//                 <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                   Act Details
//                 </TabsTrigger>
//                 <TabsTrigger value="rules" className=" data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                   Rules
//                 </TabsTrigger>
//                 <TabsTrigger value="forms" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                   Forms
//                 </TabsTrigger>
//               </TabsList>
// {/* text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.9rem] lg:text-[0.9rem] 2xl:text-base py-2 px-2 sm:px-3 sm:py-2 hover:cursor-pointer font-medium data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-200 */}
//               {/* ✅ Act Overview with Enhanced HTML Content Rendering */}
//               <TabsContent value="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
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
//                   <CardContent className="pt-0">
//                     {act.act_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none text-gray-700 leading-relaxed
//                                   /* Paragraph Styling - API content ke liye */
//                                   [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]

//                                   /* Heading Styling - API se aane wale headings ke liye */
//                                   [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
//                                   [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
//                                   [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
//                                   [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3

//                                   /* List Styling - API content mein jo bhi lists hain */
//                                   [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
//                                   [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
//                                   [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]

//                                   /* List Markers ko orange color */
//                                   [&_ul>li]:marker:text-orange-500 
//                                   [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold

//                                   /* Nested Lists */
//                                   [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
//                                   [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
//                                   [&_ul_ul_ul]:list-square

//                                   /* Strong/Bold Text */
//                                   [&_strong]:font-semibold [&_strong]:text-slate-900
//                                   [&_b]:font-semibold [&_b]:text-slate-900

//                                   /* Links */
//                                   [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium

//                                   /* Special HTML elements jo API se aa sakte hain */
//                                   [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
//                                   [&_strike]:line-through [&_strike]:text-gray-500
//                                   [&_u]:underline [&_u]:decoration-orange-400
//                                   [&_em]:italic [&_em]:text-gray-600
//                                   [&_i]:italic [&_i]:text-gray-600

//                                   /* Code blocks */
//                                   [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
//                                   [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono

//                                   /* Blockquote */
//                                   [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4"
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

//               {/* ✅ Rules with Enhanced HTML Content Rendering */}
//               <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
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
//                   <CardContent className="pt-0">
//                     {act.rule_desc ? (
//                       <div
//                         className="prose prose-sm max-w-none text-gray-700 leading-relaxed
//                                   /* Same styling as Act content for consistency */
//                                   [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]
//                                   [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
//                                   [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
//                                   [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
//                                   [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3
//                                   [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
//                                   [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
//                                   [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]
//                                   [&_ul>li]:marker:text-orange-500 
//                                   [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
//                                   [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
//                                   [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
//                                   [&_strong]:font-semibold [&_strong]:text-slate-900
//                                   [&_b]:font-semibold [&_b]:text-slate-900
//                                   [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
//                                   [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
//                                   [&_strike]:line-through [&_strike]:text-gray-500
//                                   [&_u]:underline [&_u]:decoration-orange-400
//                                   [&_em]:italic [&_em]:text-gray-600
//                                   [&_i]:italic [&_i]:text-gray-600
//                                   [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
//                                   [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
//                                   [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4

//                                   /* Background for Rules */
//                                   p-3 sm:p-4 bg-gray-50 rounded-md lg:rounded-lg"
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

//               {/* Forms (from API) - Same as before */}
//               <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
//                     <div className="flex items-center gap-1.5 sm:gap-2">
//                       <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                         <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                         <span>Forms ({formsCount}) :</span>
//                       </CardTitle>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-0">
//                     {forms.length === 0 ? (
//                       <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
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
//                           <div className="space-y-2 sm:space-y-2.5">
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
//                         <div className="hidden lg:block">
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
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
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
//   section_count: number;
//   rule_count: number;
//   form_count: number;

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
//       //  single-encode: pehle decode, phir encode
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

//   // ✅ Enhanced DOMPurify sanitization - API se aane wala HTML properly render karne ke liye
//   const sanitizeHTML = (htmlContent: string) => {
//     if (typeof window !== 'undefined') {
//       return DOMPurify.sanitize(htmlContent, {
//         ALLOWED_TAGS: [
//           'p', 'br', 'strong', 'em', 'u', 'b', 'i',
//           'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
//           'ul', 'ol', 'li', 'blockquote', 'div', 'span', 'a',
//           'pre', 'code', 'mark', 'strike'
//         ],
//         ALLOWED_ATTR: ['href', 'target', 'class', 'id', 'type', 'start', 'reversed', 'style', 'color', 'data-as-button'],
//         KEEP_CONTENT: true,
//         ADD_ATTR: ['type', 'start'] // Allow list type attributes
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
//     <TooltipProvider>
//       <div className="min-h-screen">
//         <div className="container mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 py-3 sm:py-4 lg:py-5">
//           <div className="grid lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
//             <div className="lg:col-span-3">
//               {/* Header Card - Using API data */}
//               <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
//                 <CardHeader>
//                   <div className="space-y-4">
//                     <div className="flex items-start justify-between gap-1.5">
//                       <div className="flex-1 min-w-0">
//                         <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
//                           {act.title}:
//                         </CardTitle>
//                         {/* <CardDescription className="text-[13px] 2xl:text-base text-gray-600 leading-snug mt-1">
//                           {act.short_description}
//                         </CardDescription> */}
//                       </div>
//                       <Badge
//                         variant="outline"
//                         className="bg-blue-50 text-blue-700 border-blue-200 text-xs 2xl:text-sm flex-shrink-0"
//                       >
//                         {act.state}
//                       </Badge>
//                     </div>

//                     {/* Stats */}
//                     <div className="grid grid-cols-3 gap-1 p-1 rounded h-6">
//                       <div className="text-center">
//                         <div className="text-[17px] font-bold text-orange-500 leading-none">
//                           {act.section_count}
//                         </div>
//                         <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                           Sections
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-[17px] font-bold text-orange-500 leading-none">
//                           {act.rule_count}
//                         </div>
//                         <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                           Rules
//                         </div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-[17px] font-bold text-orange-500 leading-none">
//                           {act.form_count}
//                         </div>
//                         <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
//                           Forms
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </CardHeader>
//               </Card>

//               <Tabs defaultValue="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                 <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
//                   <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                     Act Details
//                   </TabsTrigger>
//                   <TabsTrigger value="rules" className=" data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                     Rules
//                   </TabsTrigger>
//                   <TabsTrigger value="forms" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
//                     Forms
//                   </TabsTrigger>
//                 </TabsList>

//                 {/* ✅ Act Overview with Enhanced HTML Content Rendering */}
//                 <TabsContent value="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   <Card className="shadow-sm border-gray-200">
//                     <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                         <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                           <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                           <span>Act Overview :</span>
//                         </CardTitle>
//                         {normalizeUrl(act.act_doc_url, act.act_doc_path) && (
//                           <Button
//                             onClick={handleActDownload}
//                             className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                             aria-label="download act"
//                           >
//                             <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                             Download Act
//                           </Button>
//                         )}
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-0 -mt-8">
//                       {act.act_desc ? (
//                         <div
//                           className="prose prose-sm max-w-none text-gray-700 leading-relaxed
//                                     /* Paragraph Styling - API content ke liye */
//                                     [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]

//                                     /* Heading Styling - API se aane wale headings ke liye */
//                                     [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
//                                     [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
//                                     [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
//                                     [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3

//                                     /* List Styling - API content mein jo bhi lists hain */
//                                     [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
//                                     [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
//                                     [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]

//                                     /* List Markers ko orange color */
//                                     [&_ul>li]:marker:text-orange-500 
//                                     [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold

//                                     /* Nested Lists */
//                                     [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
//                                     [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
//                                     [&_ul_ul_ul]:list-square

//                                     /* Strong/Bold Text */
//                                     [&_strong]:font-semibold [&_strong]:text-slate-900
//                                     [&_b]:font-semibold [&_b]:text-slate-900

//                                     /* Links */
//                                     [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium

//                                     /* Special HTML elements jo API se aa sakte hain */
//                                     [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
//                                     [&_strike]:line-through [&_strike]:text-gray-500
//                                     [&_u]:underline [&_u]:decoration-orange-400
//                                     [&_em]:italic [&_em]:text-gray-600
//                                     [&_i]:italic [&_i]:text-gray-600

//                                     /* Code blocks */
//                                     [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
//                                     [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono

//                                     /* Blockquote */
//                                     [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4"
//                           dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.act_desc) }}
//                         />
//                       ) : (
//                         <div className="text-center text-gray-500 py-8">
//                           <AlertCircle className="w-8 h-8 mx-auto mb-2 text-gray-400" />
//                           <p className="text-sm">No act details available</p>
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </TabsContent>

//                 {/* ✅ Rules with Enhanced HTML Content Rendering */}
//                 <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   <Card className="shadow-sm border-gray-200">
//                     <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
//                       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
//                         <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                           <Scale className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                           <span>Rules Overview :</span>
//                         </CardTitle>
//                         {normalizeUrl(act.rule_doc_url, act.rule_doc_path) && (
//                           <Button
//                             onClick={handleRulesDownload}
//                             className="bg-orange-500 hover:bg-orange-600 hover:cursor-pointer text-white px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 text-[10px] sm:text-xs lg:text-sm rounded-md h-auto"
//                             aria-label="download rules"
//                           >
//                             <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
//                             Download Rules
//                           </Button>
//                         )}
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-0 -mt-8">
//                       {act.rule_desc ? (
//                         <div
//                           className="prose prose-sm max-w-none text-gray-700 leading-relaxed
//                                     /* Same styling as Act content for consistency */
//                                     [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]
//                                     [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
//                                     [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
//                                     [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
//                                     [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3
//                                     [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
//                                     [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
//                                     [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]
//                                     [&_ul>li]:marker:text-orange-500 
//                                     [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
//                                     [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
//                                     [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
//                                     [&_strong]:font-semibold [&_strong]:text-slate-900
//                                     [&_b]:font-semibold [&_b]:text-slate-900
//                                     [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
//                                     [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
//                                     [&_strike]:line-through [&_strike]:text-gray-500
//                                     [&_u]:underline [&_u]:decoration-orange-400
//                                     [&_em]:italic [&_em]:text-gray-600
//                                     [&_i]:italic [&_i]:text-gray-600
//                                     [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
//                                     [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
//                                     [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4

//                                     /* Background for Rules */
//                                     p-3 sm:p-4  rounded-md lg:rounded-lg"
//                           dangerouslySetInnerHTML={{ __html: sanitizeHTML(act.rule_desc) }}
//                         />
//                       ) : (
//                         <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
//                           <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                             <Scale className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                           </div>
//                           <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                             No rules information available
//                           </p>
//                           <p className="text-gray-400 text-[10px] sm:text-xs">
//                             Please check with relevant authorities
//                           </p>
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </TabsContent>

//                 {/* ✅ Forms with Tooltip for Title and Description */}
//                 <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   <Card className="shadow-sm border-gray-200">
//                     <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
//                       <div className="flex items-center gap-1.5 sm:gap-2">
//                         <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
//                           <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
//                           <span>Forms:</span>
//                         </CardTitle>
//                       </div>
//                     </CardHeader>
//                     <CardContent className="pt-0">
//                       {forms.length === 0 ? (
//                         <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
//                           <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
//                             <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
//                           </div>
//                           <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">
//                             No forms available
//                           </p>
//                           <p className="text-gray-400 text-[10px] sm:text-xs">Forms will be added when available</p>
//                         </div>
//                       ) : (
//                         <>
//                           {/* Mobile Cards */}
//                           <div className="block lg:hidden">
//                             <div className="space-y-2 sm:space-y-2.5">
//                               {forms.map((form) => (
//                                 <Card key={form.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
//                                   <CardContent className="p-2 sm:p-3">
//                                     <div className="flex flex-col gap-2">
//                                       <div className="flex items-start justify-between">
//                                         <div className="flex-1 min-w-0">
//                                           <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
//                                             {form.title}
//                                           </h4>
//                                           <Badge variant="outline" className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1">
//                                             {form.form_no}
//                                           </Badge>
//                                         </div>
//                                       </div>
//                                       <p className="text-[12px] sm:text-[15px] text-gray-600 line-clamp-2 leading-relaxed">
//                                         {form.short_desc}
//                                       </p>
//                                       <div className="flex items-center justify-between mt-1">
//                                         <span className="text-[9px] sm:text-[10px] text-gray-500">
//                                           {formatDate(form.created_at)}
//                                         </span>
//                                         {normalizeUrl(form.pdf_url, null) ? (
//                                           <Button
//                                             size="sm"
//                                             className="text-[9px] sm:text-[10px] h-6 sm:h-7 bg-orange-400 text-white hover:bg-orange-500 hover:cursor-pointer"
//                                             onClick={() => handleFormDownload(form)}
//                                             aria-label="Download Form"
//                                           >
//                                             <Download className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
//                                             Download
//                                           </Button>
//                                         ) : (
//                                           <span className="text-[9px] sm:text-[10px] text-gray-400">No PDF</span>
//                                         )}
//                                       </div>
//                                     </div>
//                                   </CardContent>
//                                 </Card>
//                               ))}
//                             </div>
//                           </div>

//                           {/* ✅ Desktop Table with Tooltips */}
//                           <div className="hidden lg:block overflow-hidden -mt-8">
//                             <Table>
//                               <TableHeader>
//                                 <TableRow className="bg-gray-50 border-gray-200">
//                                   <TableHead className="w-20 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Form No.</TableHead>
//                                   <TableHead className="w-64 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Title</TableHead>
//                                   <TableHead className="hidden xl:table-cell w-80 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Description</TableHead>
//                                   <TableHead className="w-24 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Date</TableHead>
//                                   <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">Actions</TableHead>
//                                 </TableRow>
//                               </TableHeader>
//                               <TableBody>
//                                 {forms.map((form) => {
//                                   const href = normalizeUrl(form.pdf_url, null);
//                                   return (
//                                     <TableRow key={form.id} className="hover:bg-gray-50 transition-colors border-gray-200">
//                                       <TableCell className="py-2">
//                                         <Badge variant="outline" className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm">
//                                           {form.form_no}
//                                         </Badge>
//                                       </TableCell>

//                                       {/* ✅ Title with Tooltip */}
//                                       <TableCell className="py-2 max-w-64">
//                                         <Tooltip>
//                                           <TooltipTrigger asChild>
//                                             <div className="font-medium text-[11px] sm:text-xs 2xl:text-sm truncate cursor-help">
//                                               {form.title}
//                                             </div>
//                                           </TooltipTrigger>
//                                           <TooltipContent side="top" className="max-w-sm p-2 text-xs bg-orange-400 text-white rounded-md shadow-lg">
//                                             <p>{form.title}</p>
//                                           </TooltipContent>
//                                         </Tooltip>
//                                       </TableCell>

//                                       {/* ✅ Description with Tooltip */}
//                                       <TableCell className="hidden xl:table-cell py-2 max-w-80">
//                                         <Tooltip>
//                                           <TooltipTrigger asChild>
//                                             <div className="text-[11px] text-gray-600 2xl:text-sm truncate cursor-help">
//                                               {form.short_desc}
//                                             </div>
//                                           </TooltipTrigger>
//                                           <TooltipContent side="top" className="max-w-md p-3 text-xs bg-orange-400 text-white rounded-md shadow-lg">
//                                             <p className="whitespace-pre-wrap">{form.short_desc}</p>
//                                           </TooltipContent>
//                                         </Tooltip>
//                                       </TableCell>

//                                       <TableCell className="py-2 text-[14px] text-gray-500 font-medium">
//                                         {formatDate(form.created_at)}
//                                       </TableCell>
//                                       <TableCell className="py-2">
//                                         {href ? (
//                                           <Button
//                                             size="lg"
//                                             className="h-7 px-2 bg-orange-400 text-white hover:bg-orange-500 2xl:text-sm hover:cursor-pointer"
//                                             onClick={() => handleFormDownload(form)}
//                                             aria-label="Download Form"
//                                           >
//                                             <Download className="w-3 h-3 mr-1" />
//                                             Download
//                                           </Button>
//                                         ) : (
//                                           <span className="text-[10px] text-gray-400">No PDF</span>
//                                         )}
//                                       </TableCell>
//                                     </TableRow>
//                                   );
//                                 })}
//                               </TableBody>
//                             </Table>
//                           </div>
//                         </>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </TabsContent>
//               </Tabs>
//             </div>

//             {/* Sidebar */}
//             <div className="lg:col-span-1">
//               <div className="sticky top-10 sm:top-20 space-y-2 sm:space-y-4">
//                 <Card className="shadow-sm border-gray-200">
//                   <CardContent className="p-2 sm:p-3 h-[25rem]">
//                     <PopularSearch className="mb-2 sm:mb-3" />
//                     <Separator className="my-3" />
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </TooltipProvider>
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PopularSearch from "@/app/PopularSearch/PopularSearch";
import DOMPurify from "dompurify";

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
  act_desc: string; // HTML content from API
  rule_desc: string; // HTML content from API
  section_count: number;
  rule_count: number;
  form_count: number;

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
  if (url) {
    try {
      const u = new URL(url);
      const base = new URL(FILE_HOST);
      const origin = LOCAL_HOSTS.has(u.hostname) ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {
      // fallthrough
    }
  }
  if (path) {
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

  const sanitizeHTML = (htmlContent: string) => {
    if (typeof window !== "undefined") {
      return DOMPurify.sanitize(htmlContent, {
        ALLOWED_TAGS: [
          "p", "br", "strong", "em", "u", "b", "i",
          "h1", "h2", "h3", "h4", "h5", "h6",
          "ul", "ol", "li", "blockquote", "div", "span", "a",
          "pre", "code", "mark", "strike",
        ],
        ALLOWED_ATTR: ["href", "target", "class", "id", "type", "start", "reversed", "style", "color", "data-as-button"],
        KEEP_CONTENT: true,
        ADD_ATTR: ["type", "start"],
      });
    }
    return htmlContent;
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

  const handleActDownload = () => {
    const finalUrl = normalizeUrl(act.act_doc_url, act.act_doc_path || null);
    if (!finalUrl) return alert("Act document not available");
    window.open(finalUrl, "_blank");
  };

  const handleRulesDownload = () => {
    const finalUrl = normalizeUrl(act.rule_doc_url, act.rule_doc_path || null);
    if (!finalUrl) return alert("Rules document not available");
    window.open(finalUrl, "_blank");
  };

  const handleFormDownload = (form: FormAPI) => {
    const finalUrl = normalizeUrl(form.pdf_url, null);
    if (!finalUrl) return alert("Form document not available");
    window.open(finalUrl, "_blank");
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen">
        {/* 🔥 Full-width: NO container, NO max-width cap */}
        {/* If you want a tiny gutter, change px-0 -> px-2 or px-4 */}
        <div className="w-full px-0 py-3 sm:py-4 lg:py-5">
          {/* 🔧 Responsive 2-col grid: main flex + fixed sidebar */}
          <div className="grid gap-3 sm:gap-4 lg:gap-5 xl:gap-6 md:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* ---------- Main (no col-span) ---------- */}
            <div className="min-w-0 px-2 sm:px-3 lg:px-4 xl:px-6">
              {/* Header Card */}
              <Card className="mb-2 border-l-[3px] border-l-orange-500 overflow-hidden shadow-sm">
                <CardHeader>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-1.5">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-[15px] 2xl:text-xl font-semibold text-slate-800 leading-tight">
                          {act.title}:
                        </CardTitle>
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
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act.section_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Sections
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act.rule_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Rules
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-[17px] font-bold text-orange-500 leading-none">
                          {act.form_count}
                        </div>
                        <div className="text-[17px] font-semibold text-gray-600 leading-none mt-0.5">
                          Forms
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Tabs defaultValue="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
                <TabsList className="grid grid-cols-3 w-full mx-auto h-auto gap-1 sm:gap-2">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-[1rem] py-1 px-1 md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm sm:px-2 sm:py-1.5 hover:cursor-pointer">
                    Act Details
                  </TabsTrigger>
                  <TabsTrigger value="rules" className=" data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
                    Rules
                  </TabsTrigger>
                  <TabsTrigger value="forms" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-md  text-[4vw] min-[360px]:text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.8rem] 2xl:text-sm py-1 px-1 sm:px-2 sm:py-1.5 hover:cursor-pointer">
                    Forms
                  </TabsTrigger>
                </TabsList>

                {/* Act Overview */}
                <TabsContent value="overview" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
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
                    <CardContent className="pt-0 -mt-12 px-15 text-justify">
                      {act.act_desc ? (
                        <div
                          className="prose prose-sm max-w-none text-gray-700 leading-relaxed
                          [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]
                          [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
                          [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
                          [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
                          [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
                          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
                          [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]
                          [&_ul>li]:marker:text-orange-500 
                          [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
                          [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
                          [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
                          [&_strong]:font-semibold [&_strong]:text-slate-900
                          [&_b]:font-semibold [&_b]:text-slate-900
                          [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
                          [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
                          [&_strike]:line-through [&_strike]:text-gray-500
                          [&_u]:underline [&_u]:decoration-orange-400
                          [&_em]:italic [&_em]:text-gray-600
                          [&_i]:italic [&_i]:text-gray-600
                          [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
                          [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                          [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4"
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

                {/* Rules */}
                <TabsContent value="rules" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
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
                    <CardContent className="pt-0 -mt-12 text-justify">
                      {act.rule_desc ? (
                        <div
                          className="prose prose-sm max-w-none text-gray-700 leading-relaxed
                          [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-gray-700 [&_p]:text-[15px]
                          [&_h1]:text-xl [&_h1]:font-bold [&_h1]:text-slate-900 [&_h1]:mb-4 [&_h1]:mt-6
                          [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mb-3 [&_h2]:mt-5
                          [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-slate-800 [&_h3]:mb-3 [&_h3]:mt-4
                          [&_h4]:text-sm [&_h4]:font-semibold [&_h4]:text-slate-700 [&_h4]:mb-2 [&_h4]:mt-3
                          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
                          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
                          [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:mb-1 [&_li]:text-[14px]
                          [&_ul>li]:marker:text-orange-500 
                          [&_ol>li]:marker:text-orange-500 [&_ol>li]:marker:font-semibold
                          [&_ul_ul]:list-circle [&_ul_ul]:mt-2 [&_ul_ul]:pl-4
                          [&_ol_ol]:list-lower-roman [&_ol_ol]:mt-2 [&_ol_ol]:pl-4
                          [&_strong]:font-semibold [&_strong]:text-slate-900
                          [&_b]:font-semibold [&_b]:text-slate-900
                          [&_a]:text-orange-600 [&_a]:no-underline hover:[&_a]:underline [&_a]:font-medium
                          [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:rounded [&_mark]:text-gray-800
                          [&_strike]:line-through [&_strike]:text-gray-500
                          [&_u]:underline [&_u]:decoration-orange-400
                          [&_em]:italic [&_em]:text-gray-600
                          [&_i]:italic [&_i]:text-gray-600
                          [&_pre]:bg-gray-100 [&_pre]:p-3 [&_pre]:rounded [&_pre]:text-sm [&_pre]:overflow-x-auto [&_pre]:mb-4
                          [&_code]:bg-gray-100 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm [&_code]:font-mono
                          [&_blockquote]:border-l-4 [&_blockquote]:border-orange-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-gray-600 [&_blockquote]:mb-4
                          p-3 sm:p-4 rounded-md lg:rounded-lg"
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

                {/* Forms */}
                <TabsContent value="forms" className="space-y-2 sm:space-y-3 lg:space-y-4">
                  <Card className="shadow-sm border-gray-200">
                    <CardHeader className="pb-2 sm:pb-3 lg:pb-4">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <CardTitle className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base lg:text-lg">
                          <FileText className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-orange-500 flex-shrink-0" />
                          <span>Forms:</span>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {forms.length === 0 ? (
                        <div className="text-center py-6 sm:py-8 bg-gray-50 rounded-lg">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 sm:mb-3 bg-gray-200 rounded-full flex items-center justify-center">
                            <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />
                          </div>
                          <p className="text-gray-500 text-xs sm:text-sm font-medium mb-1">No forms available</p>
                          <p className="text-gray-400 text-[10px] sm:text-xs">Forms will be added when available</p>
                        </div>
                      ) : (
                        <>
                          {/* Mobile Cards */}
                          <div className="block lg:hidden">
                            <div className="space-y-2 sm:space-y-2.5">
                              {forms.map((form) => (
                                <Card
                                  key={form.id}
                                  className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
                                >
                                  <CardContent className="p-2 sm:p-3">
                                    <div className="flex flex-col gap-2">
                                      <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-semibold text-[14px] sm:text-xs lg:text-sm line-clamp-2">
                                            {form.title}
                                          </h4>
                                          <Badge
                                            variant="outline"
                                            className="text-[9px] sm:text-[10px] text-orange-600 border-orange-200 mt-1"
                                          >
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
                          <div className="hidden lg:block overflow-hidden -mt-8">
                            <Table>
                              <TableHeader>
                                <TableRow className="bg-gray-50 border-gray-200">
                                  <TableHead className="w-20 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Form No.
                                  </TableHead>
                                  <TableHead className="w-64 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Title
                                  </TableHead>
                                  <TableHead className="w-28 text-[10px] sm:text-xs font-semibold py-2 2xl:text-base">
                                    Actions
                                  </TableHead>
                                </TableRow>
                              </TableHeader>
                              <TableBody>
                                {forms.map((form) => {
                                  const href = normalizeUrl(form.pdf_url, null);
                                  return (
                                    <TableRow key={form.id} className="hover:bg-gray-50 transition-colors border-gray-200">
                                      <TableCell className="py-2">
                                        <Badge
                                          variant="outline"
                                          className="text-[10px] text-orange-600 border-orange-200 2xl:text-sm"
                                        >
                                          {form.form_no}
                                        </Badge>
                                      </TableCell>

                                      {/* Title + Tooltip */}
                                      <TableCell className="py-2 max-w-64">
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <div className="font-medium text-[11px] sm:text-xs 2xl:text-sm truncate cursor-help">
                                              {form.title}
                                            </div>
                                          </TooltipTrigger>
                                          <TooltipContent
                                            side="top"
                                            className="max-w-sm p-2 text-xs bg-orange-400 text-white rounded-md shadow-lg"
                                          >
                                            <p>{form.title}</p>
                                          </TooltipContent>
                                        </Tooltip>
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

            {/* ---------- Sidebar (no col-span) ---------- */}
            <div className="min-w-0 px-1 sm:px-3 lg:px-4 xl:px-6">
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
    </TooltipProvider>
  );
}

// "use client";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Calendar,
//   ChevronLeft,
//   ChevronRight,
//   ChevronsLeft,
//   ChevronsRight,
//   Facebook,
//   Instagram,
//   Linkedin,
//   MessageCircle,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import * as React from "react";

// // ==================== TYPES ====================
// type ApiPost = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description?: string | null;
//   content?: string | null;
//   published_date?: string | null;
//   image_url?: string | null;
//   image_path?: string | null;
//   meta_image_url?: string | null;
//   meta_image_path?: string | null;
//   tags?: string[] | null;
// };

// type BlogProps = {
//   posts: ApiPost[];
//   errorMsg?: string;
//   currentPage?: number;
//   totalPages?: number;
//   totalPosts?: number;
//   basePath?: string;
// };

// // ==================== CONFIG ====================
// const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE!;

// // ==================== HELPER FUNCTIONS ====================
// function normalizeImageUrl(post: ApiPost): string | null {
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   try {
//     const u = new URL(raw, FILE_HOST);
//     const shouldSwap = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
//       u.hostname
//     );
//     const base = new URL(FILE_HOST);
//     const origin = shouldSwap ? base.origin : u.origin;
//     const cleanPath = encodeURI(decodeURI(u.pathname));
//     return `${origin}${cleanPath}${u.search}${u.hash}`;
//   } catch {
//     const path = raw.startsWith("/") ? raw : `/${raw}`;
//     return `${FILE_HOST}${path}`;
//   }
// }

// function formatDate(iso?: string | null): string {
//   if (!iso) return "";
//   const d = new Date(iso);
//   if (isNaN(d.getTime())) return "";
//   return d.toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// // ==================== TAGS COMPONENT ====================
// function TagsInline({
//   tags,
//   max = 2,
//   label = "All Comments",
// }: {
//   tags: string[];
//   max?: number;
//   label?: string;
// }) {
//   const [open, setOpen] = React.useState(false);

//   if (!tags || tags.length === 0) {
//     return <span className="text-gray-500 text-xs">No Comments</span>;
//   }

//   const visible = tags.slice(0, max);
//   const remaining = tags.slice(max);

//   return (
//     <div className="flex items-center gap-1 flex-wrap">
//       <MessageCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
//       {visible?.map((t, i) => (
//         <span
//           key={`${t}-${i}`}
//           className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs whitespace-nowrap"
//         >
//           {t}
//         </span>
//       ))}

//       {remaining?.length > 0 && (
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <button
//               type="button"
//               className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs hover:bg-orange-200 whitespace-nowrap"
//               aria-label={`Show ${remaining?.length} more comments`}
//             >
//               +{remaining?.length}
//             </button>
//           </PopoverTrigger>
//           <PopoverContent
//             side="bottom"
//             align="start"
//             className="w-64 p-0 rounded-md border bg-white shadow-md z-50"
//           >
//             <div className="p-3">
//               <p className="text-sm font-medium mb-2">{label}</p>
//               <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
//                 {tags?.map((t, i) => (
//                   <div
//                     key={`${t}-${i}`}
//                     className="px-2 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-xs"
//                   >
//                     {t}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
//       )}
//     </div>
//   );
// }

// // ==================== PAGINATION COMPONENT ====================
// function Pagination({
//   currentPage,
//   totalPages,
//   basePath = "/blog-main",
// }: {
//   currentPage: number;
//   totalPages: number;
//   basePath?: string;
// }) {
//   const router = useRouter();

//   const handlePageChange = (page: number) => {
//     if (page < 1 || page > totalPages) return;

//     // Smooth scroll to top
//     window.scrollTo({ top: 0, behavior: "smooth" });

//     // ✅ Navigate with clean URLs
//     if (page === 1) {
//       router.push(basePath); // /blog-main
//     } else {
//       router.push(`${basePath}/${page}`); // /blog-main/2
//     }
//   };

//   // Generate page numbers to display
//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
//     const maxVisiblePages = 5;

//     if (totalPages <= maxVisiblePages) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       pages.push(1);

//       if (currentPage > 3) {
//         pages.push("...");
//       }

//       const start = Math.max(2, currentPage - 1);
//       const end = Math.min(totalPages - 1, currentPage + 1);

//       for (let i = start; i <= end; i++) {
//         pages.push(i);
//       }

//       if (currentPage < totalPages - 2) {
//         pages.push("...");
//       }

//       pages.push(totalPages);
//     }

//     return pages;
//   };

//   const pages = getPageNumbers();

//   return (
//     <nav
//       className="flex items-center justify-center gap-1 sm:gap-2 mt-8 mb-4 px-2"
//       aria-label="Blog pagination"
//     >
//       {/* First Page Button */}
//       <button
//         onClick={() => handlePageChange(1)}
//         disabled={currentPage === 1}
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === 1
//             ? "border-gray-200 text-gray-400 cursor-not-allowed"
//             : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//         aria-label="First page"
//       >
//         <ChevronsLeft size={16} className="sm:w-5 sm:h-5" />
//       </button>

//       {/* Previous Button */}
//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === 1
//             ? "border-gray-200 text-gray-400 cursor-not-allowed"
//             : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//         aria-label="Previous page"
//       >
//         <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
//       </button>

//       {/* Page Numbers */}
//       <div className="flex gap-0.5 sm:gap-1">
//         {pages.map((page, index) => {
//           if (page === "...") {
//             return (
//               <span
//                 key={`ellipsis-${index}`}
//                 className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-500 text-sm"
//               >
//                 ...
//               </span>
//             );
//           }

//           const pageNumber = page as number;
//           const isActive = pageNumber === currentPage;

//           return (
//             <button
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border font-medium text-xs sm:text-sm transition-all ${
//                 isActive
//                   ? "bg-orange-500 border-orange-500 text-white shadow-md scale-105"
//                   : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//               }`}
//               aria-label={`Page ${pageNumber}`}
//               aria-current={isActive ? "page" : undefined}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}
//       </div>

//       {/* Next Button */}
//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === totalPages
//             ? "border-gray-200 text-gray-400 cursor-not-allowed"
//             : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//         aria-label="Next page"
//       >
//         <ChevronRight size={16} className="sm:w-5 sm:h-5" />
//       </button>

//       {/* Last Page Button */}
//       <button
//         onClick={() => handlePageChange(totalPages)}
//         disabled={currentPage === totalPages}
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === totalPages
//             ? "border-gray-200 text-gray-400 cursor-not-allowed"
//             : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//         aria-label="Last page"
//       >
//         <ChevronsRight size={16} className="sm:w-5 sm:h-5" />
//       </button>
//     </nav>
//   );
// }

// // ==================== MAIN BLOG COMPONENT ====================
// export default function Blog({
//   posts,
//   errorMsg,
//   currentPage = 1,
//   totalPages = 1,
//   totalPosts,
//   basePath = "/blog-main",
// }: BlogProps) {
//   return (
//     <div className=" px-8 py-8">
//       <div className="flex justify-between py-4 mb-4">
//         <div className="flex gap-3">
//           <Link
//             href="https://www.facebook.com/profile.php?id=100084889211872"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors"
//             aria-label="Follow us on Facebook"
//           >
//             <Facebook size={24} />
//           </Link>
//           <Link
//             href="https://x.com/SANDEEP9112605"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors"
//             aria-label="Follow us on Twitter"
//           >
//             <Twitter size={24} />
//           </Link>
//           <Link
//             href="https://www.linkedin.com/company/83492002/admin/dashboard/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors"
//             aria-label="Follow us on LinkedIn"
//           >
//             <Linkedin size={24} />
//           </Link>
//           <Link
//             href="https://www.instagram.com/praans_consultech/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors"
//             aria-label="Contact us on WhatsApp"
//           >
//             <Instagram size={24} />
//           </Link>
//         </div>
//       </div>

//       {/* Pagination Info */}
//       {totalPosts && totalPages > 1 && (
//         <div className="mb-4 text-xs sm:text-sm text-gray-600 flex items-center justify-between">
//           <span>
//             Showing page{" "}
//             <strong className="text-orange-600">{currentPage}</strong> of{" "}
//             <strong className="text-orange-600">{totalPages}</strong>
//           </span>
//           <span className="hidden sm:inline">({totalPosts} total posts)</span>
//         </div>
//       )}

//       {/* Error State */}
//       {errorMsg ? (
//         <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
//           <p className="text-sm">{errorMsg}</p>
//         </div>
//       ) : posts.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-600">No posts available right now.</p>
//         </div>
//       ) : (
//         <>
//           {/* Posts Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//             {posts?.map((post, index) => {
//               const img = normalizeImageUrl(post);
//               const href = `/${post.slug}`;
//               const dateLabel = formatDate(post.published_date);
//               const short_description =
//                 post?.short_description ||
//                 (post?.content
//                   ? post?.content?.replace(/<[^>]+>/g, "")?.slice(0, 180) + "…"
//                   : "");
//               const tags = Array.isArray(post?.tags)
//                 ? post?.tags?.filter(Boolean)
//                 : [];

//               return (
//                 <article
//                   key={post?.id}
//                   className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 >
//                   {/* Image */}
//                   <Link href={href}>
//                     <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
//                       {img ? (
//                         <Image
//                           src={img}
//                           alt={post?.title}
//                           fill
//                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                           className="object-cover hover:scale-105 transition-transform duration-300"
//                           priority={index === 0}
//                           fetchPriority={index === 0 ? "high" : undefined}
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <span className="text-gray-400 text-sm">
//                             No Image
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </Link>

//                   {/* Content */}
//                   <div className="p-6">
//                     <Link href={href}>
//                       <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight hover:text-orange-600 transition-colors">
//                         {post?.title}
//                       </h2>
//                     </Link>

//                     {/* Meta: Date & Tags */}
//                     <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={14} className="sm:w-4 sm:h-4" />
//                         {dateLabel && (
//                           <time dateTime={post?.published_date || undefined}>
//                             {dateLabel}
//                           </time>
//                         )}
//                       </div>
//                       {tags.length > 0 && (
//                         <>
//                           <span className="text-gray-300">•</span>
//                           <TagsInline
//                             tags={tags}
//                             max={2}
//                             label="All Comments"
//                           />
//                         </>
//                       )}
//                     </div>

//                     <Link href={href}>
//                       <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed text-justify">
//                         {short_description}
//                       </p>
//                     </Link>

//                     <Link
//                       href={href}
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                       Read More
//                       <span aria-hidden="true">→</span>
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <Pagination
//               currentPage={currentPage}
//               totalPages={totalPages}
//               basePath={basePath}
//             />
//           )}
//         </>
//       )}
//     </div>
//   );
// }

















// "use client";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Calendar,
//   ChevronLeft,
//   ChevronRight,
//   ChevronsLeft,
//   ChevronsRight,
//   MessageCircle,
//   Search as SearchIcon
// } from "lucide-react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import * as React from "react";

// // ==================== TYPES ====================
// type ApiPost = {
//   id: number;
//   title: string;
//   slug: string;
//   short_description?: string | null;
//   content?: string | null;
//   published_date?: string | null;
//   image_url?: string | null;
//   image_path?: string | null;
//   meta_image_url?: string | null;
//   meta_image_path?: string | null;
//   tags?: string[] | null;
// };

// type BlogProps = {
//   posts: ApiPost[];
//   errorMsg?: string;
//   currentPage?: number;
//   totalPages?: number;
//   totalPosts?: number;
//   basePath?: string;
// };

// // ==================== CONFIG ====================
// const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE ?? "";

// // ==================== HELPER FUNCTIONS ====================
// function normalizeImageUrl(post: ApiPost): string | null {
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   if (!FILE_HOST) {
//     try {
//       const test = new URL(raw);
//       return test.toString();
//     } catch {
//       return raw.startsWith("/") ? raw : `/${raw}`;
//     }
//   }

//   try {
//     const base = new URL(FILE_HOST);
//     const resolved = new URL(raw, base);
//     const pathname = encodeURI(decodeURI(resolved.pathname));
//     return `${resolved.origin}${pathname}${resolved.search}${resolved.hash}`;
//   } catch {
//     const path = raw.startsWith("/") ? raw : `/${raw}`;
//     return `${FILE_HOST.replace(/\/$/, "")}${path}`;
//   }
// }

// function formatDate(iso?: string | null): string {
//   if (!iso) return "";
//   const d = new Date(iso);
//   if (isNaN(d.getTime())) return "";
//   return d.toLocaleDateString("en-IN", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   });
// }

// // ==================== TAGS COMPONENT ====================
// function TagsInline({
//   tags,
//   max = 2,
//   label = "All Comments",
// }: {
//   tags?: string[] | null;
//   max?: number;
//   label?: string;
// }) {
//   const [open, setOpen] = React.useState(false);
//   const safeTags = Array.isArray(tags) ? tags.filter(Boolean) : [];

//   if (safeTags.length === 0) {
//     return <span className="text-gray-500 text-xs">No Comments</span>;
//   }

//   const visible = safeTags.slice(0, max);
//   const remaining = safeTags.slice(max);

//   return (
//     <div className="flex items-center gap-1 flex-wrap">
//       <MessageCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
//       {visible.map((t, i) => (
//         <span
//           key={`${t}-${i}`}
//           className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs whitespace-nowrap"
//         >
//           {t}
//         </span>
//       ))}

//       {remaining.length > 0 && (
//         <Popover open={open} onOpenChange={setOpen}>
//           <PopoverTrigger asChild>
//             <button
//               type="button"
//               className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs hover:bg-orange-200 whitespace-nowrap"
//               aria-label={`Show ${remaining.length} more comments`}
//             >
//               +{remaining.length}
//             </button>
//           </PopoverTrigger>
//           <PopoverContent
//             side="bottom"
//             align="start"
//             className="w-64 p-0 rounded-md border bg-white shadow-md z-50"
//           >
//             <div className="p-3">
//               <p className="text-sm font-medium mb-2">{label}</p>
//               <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
//                 {safeTags.map((t, i) => (
//                   <div
//                     key={`${t}-${i}`}
//                     className="px-2 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-xs"
//                   >
//                     {t}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </PopoverContent>
//         </Popover>
//       )}
//     </div>
//   );
// }

// // ==================== PAGINATION COMPONENT ====================
// function Pagination({
//   currentPage,
//   totalPages,
//   basePath = "/blog-main",
// }: {
//   currentPage: number;
//   totalPages: number;
//   basePath?: string;
// }) {
//   const router = useRouter();

//   const handlePageChange = (page: number) => {
//     if (page < 1 || page > totalPages) return;
//     if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
//     const target = page === 1 ? basePath : `${basePath}/${page}`;
//     router.push(target);
//   };

//   const getPageNumbers = () => {
//     const pages: (number | string)[] = [];
//     const maxVisiblePages = 5;
//     if (totalPages <= maxVisiblePages) {
//       for (let i = 1; i <= totalPages; i++) pages.push(i);
//     } else {
//       pages.push(1);
//       if (currentPage > 3) pages.push("...");
//       const start = Math.max(2, currentPage - 1);
//       const end = Math.min(totalPages - 1, currentPage + 1);
//       for (let i = start; i <= end; i++) pages.push(i);
//       if (currentPage < totalPages - 2) pages.push("...");
//       pages.push(totalPages);
//     }
//     return pages;
//   };

//   const pages = getPageNumbers();

//   return (
//     <nav className="flex items-center justify-center gap-1 sm:gap-2 mt-8 mb-4 px-2" aria-label="Blog pagination">
//       <button
//         onClick={() => handlePageChange(1)}
//         disabled={currentPage === 1}
//         aria-label="First page"
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === 1 ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//       >
//         <ChevronsLeft size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
//       </button>

//       <button
//         onClick={() => handlePageChange(currentPage - 1)}
//         disabled={currentPage === 1}
//         aria-label="Previous page"
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all  ${
//           currentPage === 1 ? " border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//       >
//         <ChevronLeft size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
//       </button>

//       <div className="flex gap-0.5 sm:gap-1">
//         {pages.map((page, index) => {
//           if (page === "...") {
//             return (
//               <span key={`ellipsis-${index}`} className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-500 text-sm">
//                 ...
//               </span>
//             );
//           }
//           const pageNumber = page as number;
//           const isActive = pageNumber === currentPage;
//           return (
//             <button
//               key={pageNumber}
//               onClick={() => handlePageChange(pageNumber)}
//               aria-current={isActive ? "page" : undefined}
//               className={` hover:cursor-pointer flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border font-medium text-xs sm:text-sm transition-all ${
//                 isActive ? "bg-orange-500 border-orange-500 text-white shadow-md scale-105" : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//               }`}
//               aria-label={`Page ${pageNumber}`}
//             >
//               {pageNumber}
//             </button>
//           );
//         })}
//       </div>

//       <button
//         onClick={() => handlePageChange(currentPage + 1)}
//         disabled={currentPage === totalPages}
//         aria-label="Next page"
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === totalPages ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//       >
//         <ChevronRight size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
//       </button>

//       <button
//         onClick={() => handlePageChange(totalPages)}
//         disabled={currentPage === totalPages}
//         aria-label="Last page"
//         className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
//           currentPage === totalPages ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
//         }`}
//       >
//         <ChevronsRight size={16} className="sm:w-5 sm:h-5" />
//       </button>
//     </nav>
//   );
// }

// // ==================== ComboboxSearch (local) ====================
// type Item = { id: number | string; label: string };

// // Simple input + search button (no dropdown)
// function ComboboxSearch({
//   items = [],
//   value,
//   onChange,
//   onSearchButtonClick,
//   placeholder = "Search...",
//   className = "",
// }: {
//   items?: Item[];
//   value?: Item | null;
//   onChange: (v: Item | null) => void;
//   onSearchButtonClick?: (q: string) => void;
//   placeholder?: string;
//   className?: string;
// }) {
//   // default query controlled by value.label if provided
//   const [query, setQuery] = React.useState<string>(value?.label ?? "");

//   React.useEffect(() => {
//     setQuery(value?.label ?? "");
//   }, [value]);

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       onSearchButtonClick?.(query);
//     }
//   };

//   return (
//     <div className={`flex items-center gap-2 ${className} w-full sm:w-auto`}>
//       <div className="relative w-full">
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => {
//             setQuery(e.target.value);
//             onChange?.(null);
//           }}
//           onKeyDown={handleKeyDown}
//           placeholder={placeholder}
//           aria-label="Search"
//           className="w-full sm:w-80 pl-10 pr-4 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
//         />

//         {/* left search icon */}
//         <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none">
//           <SearchIcon size={16} />
//         </div>
//       </div>

//       <button
//         type="button"
//         onClick={() => onSearchButtonClick?.(query)}
//         className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md font-semibold text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
//         aria-label="Search button"
//       >
//         Search
//       </button>
//     </div>
//   );
// }

// // ==================== MAIN BLOG COMPONENT ====================
// export default function Blog({
//   posts = [],
//   errorMsg,
//   currentPage = 1,
//   totalPages = 1,
//   totalPosts,
//   basePath = "/blog-main",
// }: BlogProps) {
//   // Router (used by pagination if needed)
//   const router = useRouter();

//   // Combobox items derived from posts
//   const comboboxItems = React.useMemo(
//     () =>
//       (posts || []).map((p) => ({
//         id: p.id,
//         label: p.title || p.slug || `Post ${p.id}`,
//       })),
//     [posts]
//   );

//   const [selectedItem, setSelectedItem] = React.useState<Item | null>(null);
//   const [clientFilterQuery, setClientFilterQuery] = React.useState<string>("");

//   function handleClientSearchClick(q: string) {
//     setClientFilterQuery(q || "");
//   }

//   // When user selects an item from combobox, filter to that item
//   React.useEffect(() => {
//     if (selectedItem) {
//       setClientFilterQuery(selectedItem.label);
//     }
//   }, [selectedItem]);

//   // posts to render after client-side filter
//   const postsToShow = React.useMemo(() => {
//     if (!clientFilterQuery) return posts;
//     const q = clientFilterQuery.trim().toLowerCase();
//     return (posts || []).filter((p) =>
//       (p.title || p.short_description || p.content || "")
//         .toString()
//         .toLowerCase()
//         .includes(q)
//     );
//   }, [posts, clientFilterQuery]);

//   return (
//     <div className="px-4 sm:px-8 py-8">
//       {/* Header: stack on mobile, row on desktop */}
//       <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-between py-4 mb-4">
//         {/* Left: social icons */}
//         <div className="flex items-center gap-3">
//           <Link
//             href="https://www.facebook.com/profile.php?id=100084889211872"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
//             aria-label="Follow us on Facebook"
//           >
//     <FaFacebookF size={20} className="text-orange-400 hover:text-orange-500" />
//           </Link>
//           <Link
//             href="https://x.com/SANDEEP9112605"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
//             aria-label="Follow us on Twitter"
//           >
//      <FaTwitter size={20} className="text-orange-400 hover:text-orange-500" />
//           </Link>
//           <Link
//             href="https://www.linkedin.com/company/83492002/admin/dashboard/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
//             aria-label="Follow us on LinkedIn"
//           >
//                 <FaLinkedinIn size={20} className="text-orange-400 hover:text-orange-500" />

//           </Link>
//           <Link
//             href="https://www.instagram.com/praans_consultech/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
//             aria-label="Contact us on Instagram"
//           >
//     <FaInstagram size={20} className="text-orange-400 hover:text-orange-500" />
//           </Link>
//         </div>

//         {/* Search: full width on mobile, inline on desktop */}
//         <div className="w-full sm:w-auto mt-2 sm:mt-0">
//           <ComboboxSearch
//             items={comboboxItems}
//             value={selectedItem}
//             onChange={(v) => setSelectedItem(v as Item | null)}
//             onSearchButtonClick={handleClientSearchClick}
//             placeholder="Search posts or titles..."
//             className=""
//           />
//         </div>
//       </div>

//       {/* Pagination Info */}
//       {totalPosts && totalPages > 1 && (
//         <div className="mb-4 text-xs sm:text-sm text-gray-600 flex items-center justify-between">
//           <span>
//             Showing page <strong className="text-orange-600">{currentPage}</strong> of{" "}
//             <strong className="text-orange-600">{totalPages}</strong>
//           </span>
//           <span className="hidden sm:inline">({totalPosts} total posts)</span>
//         </div>
//       )}

//       {/* Error State */}
//       {errorMsg ? (
//         <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
//           <p className="text-sm">{errorMsg}</p>
//         </div>
//       ) : postsToShow.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-gray-600">No posts available right now.</p>
//         </div>
//       ) : (
//         <>
//           {/* Posts Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
//             {postsToShow.map((post, index) => {
//               const img = normalizeImageUrl(post);
//               const href = `/${post.slug}`;
//               const dateLabel = formatDate(post.published_date);
//               const short_description =
//                 post?.short_description ||
//                 (post?.content ? post?.content?.replace(/<[^>]+>/g, "").slice(0, 180) + "…" : "");
//               const tags = Array.isArray(post?.tags) ? post?.tags?.filter(Boolean) : [];

//               return (
//                 <article
//                   key={post?.id ?? index}
//                   className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                 >
//                   {/* Image */}
//                   <Link href={href}>
//                     <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
//                       {img ? (
//                         <Image
//                           src={img}
//                           alt={post?.title ?? "Post image"}
//                           fill
//                           sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                           className="object-cover hover:scale-105 transition-transform duration-300"
//                           priority={index === 0}
//                           fetchPriority={index === 0 ? "high" : undefined}
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//                           <span className="text-gray-400 text-sm">No Image</span>
//                         </div>
//                       )}
//                     </div>
//                   </Link>

//                   {/* Content */}
//                   <div className="p-6">
//                     <Link href={href}>
//                       <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight hover:text-orange-600 transition-colors">
//                         {post?.title}
//                       </h2>
//                     </Link>

//                     {/* Meta: Date & Tags */}
//                     <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
//                       <div className="flex items-center gap-1">
//                         <Calendar size={14} className="sm:w-4 sm:h-4" />
//                         {dateLabel && <time dateTime={post?.published_date ?? undefined}>{dateLabel}</time>}
//                       </div>
//                       {tags.length > 0 && (
//                         <>
//                           <span className="text-gray-300">•</span>
//                           <TagsInline tags={tags} max={2} label="All Comments" />
//                         </>
//                       )}
//                     </div>

//                     <Link href={href}>
//                       <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed text-justify line-clamp-3">
//                         {short_description}
//                       </p>
//                     </Link>

//                     <Link
//                       href={href}
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                     >
//                       Read More <span aria-hidden="true">→</span>
//                     </Link>
//                   </div>
//                 </article>
//               );
//             })}
//           </div>

//           {/* Pagination */}
//           {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />}
//         </>
//       )}
//     </div>
//   );
// }



























"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MessageCircle,
  Search as SearchIcon,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import * as React from "react";

// ==================== TYPES ====================
type ApiPost = {
  id: number;
  title: string;
  slug: string;
  short_description?: string | null;
  content?: string | null;
  published_date?: string | null;
  image_url?: string | null;
  image_path?: string | null;
  meta_image_url?: string | null;
  meta_image_path?: string | null;
  tags?: string[] | null;
};

type BlogProps = {
  posts: ApiPost[];
  errorMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalPosts?: number;
  basePath?: string;
  searchQuery?: string; // SSR se aaya hua search query
};

// ==================== CONFIG ====================
const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE ?? "";

// ==================== HELPER FUNCTIONS ====================
function normalizeImageUrl(post: ApiPost): string | null {
  const raw =
    post.image_url ||
    post.meta_image_url ||
    (post.image_path ? `/storage/${post.image_path}` : null) ||
    (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

  if (!raw) return null;

  if (!FILE_HOST) {
    try {
      const test = new URL(raw);
      return test.toString();
    } catch {
      return raw.startsWith("/") ? raw : `/${raw}`;
    }
  }

  try {
    const base = new URL(FILE_HOST);
    const resolved = new URL(raw, base);
    const pathname = encodeURI(decodeURI(resolved.pathname));
    return `${resolved.origin}${pathname}${resolved.search}${resolved.hash}`;
  } catch {
    const path = raw.startsWith("/") ? raw : `/${raw}`;
    return `${FILE_HOST.replace(/\/$/, "")}${path}`;
  }
}

function formatDate(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ==================== TAGS COMPONENT ====================
function TagsInline({
  tags,
  max = 2,
  label = "All Comments",
}: {
  tags?: string[] | null;
  max?: number;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const safeTags = Array.isArray(tags) ? tags.filter(Boolean) : [];

  if (safeTags.length === 0) {
    return <span className="text-gray-500 text-xs">No Comments</span>;
  }

  const visible = safeTags.slice(0, max);
  const remaining = safeTags.slice(max);

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <MessageCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
      {visible.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs whitespace-nowrap"
        >
          {t}
        </span>
      ))}

      {remaining.length > 0 && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs hover:bg-orange-200 whitespace-nowrap"
              aria-label={`Show ${remaining.length} more comments`}
            >
              +{remaining.length}
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="start"
            className="w-64 p-0 rounded-md border bg-white shadow-md z-50"
          >
            <div className="p-3">
              <p className="text-sm font-medium mb-2">{label}</p>
              <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
                {safeTags.map((t, i) => (
                  <div
                    key={`${t}-${i}`}
                    className="px-2 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-xs"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

// ==================== PAGINATION COMPONENT ====================
function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog-main",
}: {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });

    // Preserve search query agar hai to
    const params = new URLSearchParams(searchParams);
    const query = params.get("q");

    let target = page === 1 ? basePath : `${basePath}/${page}`;

    // Agar search query hai, to usse preserve karo
    if (query) {
      target += `?q=${encodeURIComponent(query)}`;
    }

    router.push(target);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className="flex items-center justify-center gap-1 sm:gap-2 mt-8 mb-4 px-2"
      aria-label="Blog pagination"
    >
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        aria-label="First page"
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        <ChevronsLeft size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
      </button>

      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all  ${
          currentPage === 1
            ? " border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
      </button>

      <div className="flex gap-0.5 sm:gap-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-500 text-sm"
              >
                ...
              </span>
            );
          }
          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              aria-current={isActive ? "page" : undefined}
              className={` hover:cursor-pointer flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border font-medium text-xs sm:text-sm transition-all ${
                isActive
                  ? "bg-orange-500 border-orange-500 text-white shadow-md scale-105"
                  : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
              }`}
              aria-label={`Page ${pageNumber}`}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5 hover:cursor-pointer" />
      </button>

      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        aria-label="Last page"
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
      >
        <ChevronsRight size={16} className="sm:w-5 sm:h-5" />
      </button>
    </nav>
  );
}

// ==================== SERVER-SIDE SEARCH BAR COMPONENT ====================
function ServerSearchBar({ defaultQuery = "" }: { defaultQuery?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [query, setQuery] = React.useState<string>(defaultQuery);

  // Update local state jab SSR se naya query aaye
  React.useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (query.trim()) {
      params.set("q", query.trim());
    } else {
      params.delete("q");
    }

    // Always redirect to page 1 on new search
    router.push(`/blog-main?${params.toString()}`);
  };

  const handleClearSearch = () => {
    setQuery("");
    const params = new URLSearchParams(searchParams);
    params.delete("q");
    router.push(`/blog-main`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 w-full sm:w-auto">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search articles..."
          aria-label="Search"
          className="w-full sm:w-80 pl-10 pr-10 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />

        {/* Left search icon */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
          <SearchIcon size={16} />
        </div>

        {/* Right clear button - sirf jab query hai */}
        {query && (
          <button
            type="button"
            onClick={handleClearSearch}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <button
        type="button"
        onClick={handleSearch}
        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-md font-semibold text-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
        aria-label="Search button"
      >
        Search
      </button>
    </div>
  );
}

// ==================== MAIN BLOG COMPONENT ====================
export default function Blog({
  posts = [],
  errorMsg,
  currentPage = 1,
  totalPages = 1,
  totalPosts,
  basePath = "/blog-main",
  searchQuery = "", // SSR se aaya hua search query
}: BlogProps) {
  const searchParams = useSearchParams();

  // Get current search query from URL (fallback to prop)
  const currentSearchQuery = searchParams.get("q") || searchQuery;

  return (
    <div className="px-4 sm:px-8 py-8">
      {/* Header: stack on mobile, row on desktop */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0 justify-between py-4 mb-4">
        {/* Left: social icons */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=100084889211872"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
            aria-label="Follow us on Facebook"
          >
            <FaFacebookF
              size={20}
              className="text-orange-400 hover:text-orange-500"
            />
          </Link>
          <Link
            href="https://x.com/SANDEEP9112605"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
            aria-label="Follow us on Twitter"
          >
            <FaTwitter
              size={20}
              className="text-orange-400 hover:text-orange-500"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/83492002/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
            aria-label="Follow us on LinkedIn"
          >
            <FaLinkedinIn
              size={20}
              className="text-orange-400 hover:text-orange-500"
            />
          </Link>
          <Link
            href="https://www.instagram.com/praans_consultech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors text-sm sm:text-base"
            aria-label="Contact us on Instagram"
          >
            <FaInstagram
              size={20}
              className="text-orange-400 hover:text-orange-500"
            />
          </Link>
        </div>

        {/* Server-Side Search Bar */}
        <div className="w-full sm:w-auto mt-2 sm:mt-0">
          <ServerSearchBar defaultQuery={currentSearchQuery} />
        </div>
      </div>

      {/* Search Results Info */}
      {currentSearchQuery && (
        <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-gray-700">
            Showing search results for:{" "}
            <strong className="text-orange-600">"{currentSearchQuery}"</strong>
            {totalPosts !== undefined && (
              <span className="ml-2 text-gray-600">
                ({totalPosts} result{totalPosts !== 1 ? "s" : ""} found)
              </span>
            )}
          </p>
        </div>
      )}

      {/* Pagination Info - Sirf jab search nahi hai */}
      {!currentSearchQuery && totalPosts && totalPages > 1 && (
        <div className="mb-4 text-xs sm:text-sm text-gray-600 flex items-center justify-between">
          <span>
            Showing page{" "}
            <strong className="text-orange-600">{currentPage}</strong> of{" "}
            <strong className="text-orange-600">{totalPages}</strong>
          </span>
          <span className="hidden sm:inline">({totalPosts} total posts)</span>
        </div>
      )}

      {/* Error State */}
      {errorMsg ? (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          <p className="text-sm">{errorMsg}</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
          <SearchIcon size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600 text-lg font-medium mb-2">
            {currentSearchQuery
              ? "No results found"
              : "No posts available right now"}
          </p>
          {currentSearchQuery && (
            <p className="text-gray-500 text-sm mb-4">
              Try different keywords or clear your search
            </p>
          )}
        </div>
      ) : (
        <>
          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {posts.map((post, index) => {
              const img = normalizeImageUrl(post);
              const href = `/${post.slug}`;
              const dateLabel = formatDate(post.published_date);
              const short_description =
                post?.short_description ||
                (post?.content
                  ? post?.content?.replace(/<[^>]+>/g, "").slice(0, 180) + "…"
                  : "");
              const tags = Array.isArray(post?.tags)
                ? post?.tags?.filter(Boolean)
                : [];

              return (
                <article
                  key={post?.id ?? index}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <Link href={href}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      {img ? (
                        <Image
                          src={img}
                          alt={post?.title ?? "Post image"}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          priority={index === 0}
                          fetchPriority={index === 0 ? "high" : undefined}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <Link href={href}>
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight hover:text-orange-600 transition-colors">
                        {post?.title}
                      </h2>
                    </Link>

                    {/* Meta: Date & Tags */}
                    <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        {dateLabel && (
                          <time dateTime={post?.published_date ?? undefined}>
                            {dateLabel}
                          </time>
                        )}
                      </div>
                      {tags.length > 0 && (
                        <>
                          <span className="text-gray-300">•</span>
                          <TagsInline
                            tags={tags}
                            max={2}
                            label="All Comments"
                          />
                        </>
                      )}
                    </div>

                    <Link href={href}>
                      <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed text-justify line-clamp-3">
                        {short_description}
                      </p>
                    </Link>

                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Read More <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination - Sirf jab search nahi hai ya search results me pagination support ho */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={basePath}
            />
          )}
        </>
      )}
    </div>
  );
}

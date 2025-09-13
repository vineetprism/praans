// import React from "react";
// import { Facebook, Twitter, Linkedin, Calendar, User, MessageCircle, Eye } from "lucide-react";
// import { FaLinkedin, FaTwitter } from "react-icons/fa";

// export default function BlogPostPage () {
//     return (
//         <div className="bg-gray-50 min-h-screen">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//                 <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
//                     {/* Main Content - 3 columns on large screens */}
//                     <div className="col-span-1 lg:col-span-3">
//                         {/* Header Section */}
//                         <div className="mb-6 sm:mb-8">
//                             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight break-words">
//                                 Shop and Establishment Certificate & Registration Process in Chhattisgarh
//                             </h1>
//                             <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-4">
//                                 <div className="flex items-center gap-1">
//                                     <User size={14} className="sm:w-4 sm:h-4" />
//                                     <span className="truncate">admin-pransconsultech</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <Calendar size={14} className="sm:w-4 sm:h-4" />
//                                     <span>Aug 19, 2025</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <span>Blogs</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <span className="hidden sm:inline">General blog</span>
//                                 </div>
//                                 <div className="flex items-center gap-1">
//                                     <MessageCircle size={14} className="sm:w-4 sm:h-4" />
//                                     <span>0 comments</span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Image Section */}
//                         <div className="relative w-full mb-6 sm:mb-8 rounded-lg overflow-hidden">
//                             <img
//                                 src="/blog/1st.webp"
//                                 alt="Shop and Establishment Certificate & Registration Process in Chhattisgarh"
//                                 className="w-full h-auto object-contain bg-gray-100 max-w-full"
//                             />
//                         </div>

//                         {/* Social Share Section */}
//                         <div className="mb-6 sm:mb-8">
//                             <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Spread the love</h3>
//                             <div className="flex gap-2 flex-wrap">
//                                 <button className="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <Facebook size={16} className="sm:w-5 sm:h-5" />
//                                 </button>
//                                 <button className="bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <FaTwitter size={16} className="sm:w-5 sm:h-5" />
//                                 </button>
//                                 <button className="bg-orange-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-white text-xs sm:text-sm font-bold">R</span>
//                                 </button>
//                                 <button className="bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <FaLinkedin size={16} className="sm:w-5 sm:h-5" />
//                                 </button>
//                                 <button className="bg-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-white text-xs sm:text-sm font-bold">P</span>
//                                 </button>
//                                 <button className="bg-blue-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-white text-xs sm:text-sm font-bold">M</span>
//                                 </button>
//                                 <button className="bg-orange-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-white text-xs sm:text-sm font-bold">M</span>
//                                 </button>
//                                 <button className="bg-green-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-white text-xs sm:text-sm font-bold">W</span>
//                                 </button>
//                                 <button className="bg-gray-400 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-500 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                                     <span className="text-xs sm:text-sm font-bold">+</span>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Introduction Content Section */}
//                         <div className="rounded-lg">
//                             <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Introduction</h2>
//                             <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 space-y-4">
//                                 <p className="leading-relaxed">
//                                     If you are beginning or running a business in Chhattisgarh, you cannot afford to ignore the regulatory requirement to register your shop and establishment. All businesses, whether they be small retail establishments, large multinationals, or even home-based businesses, are required to abide by the Chhattisgarh Shops and Commercial Establishments Act.
//                                 </p>
//                                 <p className="leading-relaxed">
//                                     Learn everything you need to know about registering a business or shop in Chhattisgarh, including the purpose of obtaining a <span className="text-orange-500 font-semibold">shop act licence</span>, the required documentation, the registration procedure, the primary benefits, the legal requirements, and frequently asked questions.
//                                 </p>
//                                 <p className="leading-relaxed">
//                                     In Chhattisgarh, Praans Consultech offers quick and simple retail and establishment registration.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Sidebar - 1 column on large screens, full width on smaller screens */}
//                     <div className="col-span-1 lg:col-span-1 order-first lg:order-last">
//                         <div className="rounded-lg p-4 sm:p-6 border bg-white lg:sticky lg:top-24">
//                             <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-center">Our Visitors</h3>

//                             {/* Digital Counter Display */}
//                             <div className="text-center mb-4 sm:mb-6">
//                                 <div className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded font-mono text-lg sm:text-xl lg:text-2xl inline-block">
//                                     012794
//                                 </div>
//                             </div>

//                             {/* Visitor Statistics */}
//                             <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm overflow-hidden">
//                                 <div className="flex items-center justify-between min-w-0 gap-1">
//                                     <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                                         <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-500 flex-shrink-0" />
//                                         <span className="font-medium truncate text-xs sm:text-sm">Visit Today</span>
//                                     </div>
//                                     <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">157</span>
//                                 </div>
//                                 <div className="flex items-center justify-between min-w-0 gap-1">
//                                     <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                                         <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-gray-500 flex-shrink-0" />
//                                         <span className="font-medium truncate text-xs sm:text-sm">Visit Yesterday</span>
//                                     </div>
//                                     <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">220</span>
//                                 </div>
//                                 <div className="flex items-center justify-between min-w-0 gap-1">
//                                     <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                                         <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-400 flex-shrink-0" />
//                                         <span className="font-medium truncate text-xs sm:text-sm">This Month</span>
//                                     </div>
//                                     <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">2729</span>
//                                 </div>
//                                 <div className="flex items-center justify-between min-w-0 gap-1">
//                                     <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                                         <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-orange-500 flex-shrink-0" />
//                                         <span className="font-medium truncate text-xs sm:text-sm">This Year</span>
//                                     </div>
//                                     <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">11794</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };









// // app/blog/[slug]/page.tsx
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Calendar,
//   User,
//   MessageCircle,
//   Eye,
// } from "lucide-react";
// import DOMPurify from "isomorphic-dompurify"; // SSR-safe sanitizer

// type ApiPost = {
//   id: number;
//   title: string;
//   slug: string;
//   content?: string | null;
//   short_description?: string | null;
//   published_date?: string | null;
//   image_url?: string | null;
//   image_path?: string | null;
//   meta_image_url?: string | null;
//   meta_image_path?: string | null;
//   meta_title?: string | null;
//   meta_description?: string | null;
//   meta_keywords?: string | null;
//   tags?: string[] | null;
// };

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";
// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") || API_BASE;
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

// /* ---------- utils ---------- */
// function normalizeImageUrl(post: ApiPost): string | null {
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   try {
//     const u = new URL(raw, FILE_HOST);
//     const base = new URL(FILE_HOST);
//     const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
//     const origin = isLocal ? base.origin : u.origin;
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
//     day: "2-digit",
//     month: "short",
//     year: "numeric",
//   });
// }

// /* ---------- SEO metadata ---------- */
// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const res = await fetch(`${API_BASE}/api/posts/${params.slug}`, {
//     cache: "no-store",
//   }).catch(() => null);

//   if (!res || !res.ok) return { title: "Blog | Prism" };  

//   const json = await res.json();
//   const data: ApiPost =
//     json && json.data && !Array.isArray(json.data) ? json.data :
//     Array.isArray(json?.data) ? json.data[0] : json;

//   const title = data?.meta_title || data?.title || "Blog | Prism";
//   const description = data?.meta_description || data?.short_description || "";
//   const img = normalizeImageUrl(data) || undefined;

//   return {
//     title,
//     description,
//     openGraph: { title, description, images: img ? [{ url: img }] : [] },
//     twitter: { card: "summary_large_image", title, description, images: img ? [img] : [] },
//   };
// }

// /* ---------- Page (same design/layout as your sample) ---------- */
// export default async function BlogPostPage({ params }: { params: { slug: string } }) {
//   // 30 min ISR
//   const res = await fetch(`${API_BASE}/api/posts/${params.slug}`, {
//     next: { revalidate: 1800 },
//   });

//   if (!res.ok) {
//     return (
//       <div className="bg-gray-50 min-h-screen">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
//           <p className="text-gray-600">We couldn’t fetch this article right now.</p>
//           <Link href="/blog" className="text-orange-600 font-semibold mt-3 inline-block">← Back to Blog</Link>
//         </div>
//       </div>
//     );
//   }

//   const json = await res.json();
//   const post: ApiPost =
//     json && json.data && !Array.isArray(json.data) ? json.data :
//     Array.isArray(json?.data) ? json.data[0] : json;

//   if (!post) {
//     return (
//       <div className="bg-gray-50 min-h-screen">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">No data</h1>
//           <p className="text-gray-600">This slug didn’t return any content.</p>
//           <Link href="/blog" className="text-orange-600 font-semibold mt-3 inline-block">← Back to Blog</Link>
//         </div>
//       </div>
//     );
//   }

//   const hero = normalizeImageUrl(post);
//   const published = formatDate(post.published_date);
//   const safeHtml = DOMPurify.sanitize(post.content || "", {
//     ALLOWED_TAGS: [
//       "p","br","strong","em","u","b","i",
//       "h1","h2","h3","h4","h5","h6",
//       "ul","ol","li","blockquote","div","span","a",
//       "pre","code","mark","strike"
//     ],
//     ALLOWED_ATTR: ["href","target","class","id","type","start","reversed","style"],
//     KEEP_CONTENT: true,
//   });

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* EXACT same container + grid skeleton as your static page */}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
//           {/* Main Content - 3 columns on large screens */}
//           <div className="col-span-1 lg:col-span-3">
//             {/* Header Section */}
//             <div className="mb-6 sm:mb-8">
//               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight break-words">
//                 {post.title}
//               </h1>
//               <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-4">
//                 <div className="flex items-center gap-1">
//                   <User size={14} className="sm:w-4 sm:h-4" />
//                   <span className="truncate">admin-pransconsultech</span>
//                 </div>
//                 {published && (
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} className="sm:w-4 sm:h-4" />
//                     <time dateTime={post.published_date || undefined}>{published}</time>
//                   </div>
//                 )}
//                 <div className="flex items-center gap-1">
//                   <span>Blogs</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <span className="hidden sm:inline">General blog</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <MessageCircle size={14} className="sm:w-4 sm:h-4" />
//                   <span>0 comments</span>
//                 </div>
//               </div>
//             </div>

//             {/* Image Section — object-contain to match your design */}
//             {hero && (
//               <div className="relative w-full mb-6 sm:mb-8 rounded-lg overflow-hidden">
//                 <img
//                     src={hero}
//                     alt={post.title}
//                     className="w-full h-auto object-contain bg-gray-100 max-w-full"
//                 />
//               </div>
//             )}

//             {/* Social Share Section (same circular buttons UI) */}
//             <div className="mb-6 sm:mb-8">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Spread the love</h3>
//               <div className="flex gap-2 flex-wrap">
//                 <a
//                   className="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
//                   href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
//                   target="_blank"
//                 >
//                   <Facebook size={16} className="sm:w-5 sm:h-5" />
//                 </a>
//                 <a
//                   className="bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
//                   href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
//                   target="_blank"
//                 >
//                   <Twitter size={16} className="sm:w-5 sm:h-5" />
//                 </a>
//                 <button className="bg-orange-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-orange-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-white text-xs sm:text-sm font-bold">R</span>
//                 </button>
//                 <a
//                   className="bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
//                   href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
//                   target="_blank"
//                 >
//                   <Linkedin size={16} className="sm:w-5 sm:h-5" />
//                 </a>
//                 <button className="bg-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-white text-xs sm:text-sm font-bold">P</span>
//                 </button>
//                 <button className="bg-blue-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-white text-xs sm:text-sm font-bold">M</span>
//                 </button>
//                 <button className="bg-orange-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-white text-xs sm:text-sm font-bold">M</span>
//                 </button>
//                 <button className="bg-green-500 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-white text-xs sm:text-sm font-bold">W</span>
//                 </button>
//                 <button className="bg-gray-400 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-500 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0">
//                   <span className="text-xs sm:text-sm font-bold">+</span>
//                 </button>
//               </div>
//             </div>

//             {/* Content Section (API HTML) */}
//             <div className="rounded-lg">
//               <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Introduction</h2>
//               <div
//                 className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 space-y-4"
//                 dangerouslySetInnerHTML={{ __html: safeHtml }}
//               />
//             </div>
//           </div>

//           {/* Right Sidebar - 1 column on large screens, full width on smaller screens */}
//           <div className="col-span-1 lg:col-span-1 order-first lg:order-last">
//             <div className="rounded-lg p-4 sm:p-6 border bg-white lg:sticky lg:top-24">
//               <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-center">
//                 Our Visitors
//               </h3>

//               {/* Digital Counter Display */}
//               <div className="text-center mb-4 sm:mb-6">
//                 <div className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded font-mono text-lg sm:text-xl lg:text-2xl inline-block">
//                   012794
//                 </div>
//               </div>

//               {/* Visitor Statistics */}
//               <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm overflow-hidden">
//                 <div className="flex items-center justify-between min-w-0 gap-1">
//                   <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                     <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-500 flex-shrink-0" />
//                     <span className="font-medium truncate text-xs sm:text-sm">
//                       Visit Today
//                     </span>
//                   </div>
//                   <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">
//                     157
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between min-w-0 gap-1">
//                   <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                     <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-gray-500 flex-shrink-0" />
//                     <span className="font-medium truncate text-xs sm:text-sm">
//                       Visit Yesterday
//                     </span>
//                   </div>
//                   <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">
//                     220
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between min-w-0 gap-1">
//                   <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                     <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-400 flex-shrink-0" />
//                     <span className="font-medium truncate text-xs sm:text-sm">
//                       This Month
//                     </span>
//                   </div>
//                   <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">
//                     2729
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between min-w-0 gap-1">
//                   <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
//                     <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-orange-500 flex-shrink-0" />
//                     <span className="font-medium truncate text-xs sm:text-sm">
//                       This Year
//                     </span>
//                   </div>
//                   <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">
//                     11794
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* /Sidebar */}
//         </div>
//       </div>
//     </div>
//   );
// }







// app/blog/[slug]/page.tsx
import Link from "next/link";
import BlogSlug from "@/app/_component/Blog/[slug]/page";

type ApiPost = {
  id: number;
  title: string;
  slug: string;
  content?: string | null;
  short_description?: string | null;
  published_date?: string | null;
  image_url?: string | null;
  image_path?: string | null;
  meta_image_url?: string | null;
  meta_image_path?: string | null;
  meta_title?: string | null;
  meta_description?: string | null;
  meta_keywords?: string | null;
  tags?: string[] | null;
};

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") || API_BASE;

/* ---------- tiny helper for metadata image ---------- */
function normalizeImageUrlForMeta(post?: Partial<ApiPost> | null): string | undefined {
  if (!post) return undefined;
  const raw =
    post.image_url ||
    post.meta_image_url ||
    (post.image_path ? `/storage/${post.image_path}` : undefined) ||
    (post.meta_image_path ? `/storage/${post.meta_image_path}` : undefined);
  if (!raw) return undefined;

  try {
    const u = new URL(raw as string, FILE_HOST);
    const base = new URL(FILE_HOST);
    const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
    const origin = isLocal ? base.origin : u.origin;
    const cleanPath = encodeURI(decodeURI(u.pathname));
    return `${origin}${cleanPath}${u.search}${u.hash}`;
  } catch {
    const path = (raw as string).startsWith("/") ? (raw as string) : `/${raw}`;
    return `${FILE_HOST}${path}`;
  }
}

/* ---------- SEO metadata ---------- */
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await fetch(`${API_BASE}/api/posts/${params.slug}`, { cache: "no-store" }).catch(() => null);
  if (!res || !res.ok) return { title: "Blog | Prism" };

  const json = await res.json();
  const data: ApiPost =
    json && json.data && !Array.isArray(json.data) ? json.data :
    Array.isArray(json?.data) ? json.data[0] : json;

  const title = data?.meta_title || data?.title || "Blog | Prism";
  const description = data?.meta_description || data?.short_description || "";
  const img = normalizeImageUrlForMeta(data);

  return {
    title,
    description,
    openGraph: { title, description, images: img ? [{ url: img }] : [] },
    twitter: { card: "summary_large_image", title, description, images: img ? [img] : [] },
  };
}

/* ---------- Page (ISR fetch -> render-only component) ---------- */
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // ✅ 30-min ISR
  const res = await fetch(`${API_BASE}/api/posts/${params.slug}`, {
    next: { revalidate: 1800 },
  }).catch(() => null);

  if (!res || !res.ok) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600">We couldn’t fetch this article right now.</p>
          <Link href="/blog" className="text-orange-600 font-semibold mt-3 inline-block">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const json = await res.json();
  const post: ApiPost =
    json && json.data && !Array.isArray(json.data) ? json.data :
    Array.isArray(json?.data) ? json.data[0] : json;

  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No data</h1>
          <p className="text-gray-600">This slug didn’t return any content.</p>
          <Link href="/blog" className="text-orange-600 font-semibold mt-3 inline-block">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  // 🔥 render-only component — same design as your static version
  return <BlogSlug post={post} />;
}



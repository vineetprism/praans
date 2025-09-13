// import React from "react";
// import { Facebook, Twitter, Linkedin } from "lucide-react"; // Importing icons from Lucide
// import { FaPinterest, FaWhatsapp } from "react-icons/fa"; // Fallback icons from react-icons
// import Link from "next/link";
// import Image from "next/image";

// type BlogPost = {
//     title: string;
//     date: string;
//     description: string;
//     image: string;
//     link: string;
// };

// const blogPosts: BlogPost[] = [
//     {
//         title: "Is it Necessary to Pay Minimum Wages under the Minimum Wages Act 1948?",
//         date: "September 8, 2025",
//         description:
//             "Introduction Minimum wages protect workers from exploitation. It also ensures they receive a minimum wage to meet basic needs.",
//         image: "/blog/1st.webp",
//         link: "/blog-details",
//     },
//     {
//         title: "Can You Get Fired for Interviewing? Termination of Employment Explained",
//         date: "August 30, 2025",
//         description:
//             "For all professionals, changing jobs is a normal part of their career. Employees often look for new opportunities.",
//         image: "/blog/2nd.webp",
//         link: "/blog-details",
//     },
//     {
//         title: "Gujarat Shop Act Licence Registration",
//         date: "August 15, 2025",
//         description: "Details about Gujarat's shop act and license registration.",
//         image: "/blog/3rd.webp",
//         link: "/blog-details",
//     },
// ];

// export default function BlogPage() {
//     return (
//         <div className="container mx-auto px-4 py-8">
//             {/* Social Media Links */}
//             <div className="flex justify-between py-4">
//                 <div className="flex gap-3">
//                     <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//                         <Facebook size={24} />
//                     </Link>
//                     <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//                         <Twitter size={24} />
//                     </Link>
//                     <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//                         <Linkedin size={24} />
//                     </Link>
//                     <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//                         <FaPinterest size={24} />
//                     </Link>
//                     <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//                         <FaWhatsapp size={24} />
//                     </Link>
//                 </div>
//             </div>

//             {/* Blog Posts Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {blogPosts.map((post, index) => (
//                     <article
//                         key={index}
//                         className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//                     >
//                         {/* Image Container - Fixed aspect ratio */}
//                         <div className="relative w-full aspect-[4/3] overflow-hidden">
//                             <Image
//                                 src={post.image}
//                                 alt={post.title}
//                                 fill
//                                 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                                 className="object-cover hover:scale-105 transition-transform duration-300"
//                                 priority={index < 3} // Prioritize loading for first 3 images
//                             />
//                         </div>
                        
//                         {/* Content Container */}
//                         <div className="p-6">
//                             <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
//                                 {post.title}
//                             </h2>
                            
//                             <div className="text-gray-500 text-sm mb-3 flex items-center gap-2">
//                                 <time dateTime={post.date}>{post.date}</time>
//                                 <span>•</span>
//                                 <span>No Comments</span>
//                             </div>
                            
//                             <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
//                                 {post.description}
//                             </p>
                            
//                             <Link
//                                 href={post.link}
//                                 className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                             >
//                                 Read More
//                                 <span aria-hidden="true">→</span>
//                             </Link>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     );
// }














// // components/blog/BlogGrid.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import { FaPinterest, FaWhatsapp } from "react-icons/fa";

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
// };

// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
//   process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";

// /* ---------- helpers (render-only) ---------- */
// function normalizeImageUrl(post: ApiPost): string | null {
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   try {
//     const u = new URL(raw, FILE_HOST);
//     const host = u.hostname;
//     const shouldSwap = ["127.0.0.1", "127.1.1.0", "localhost"].includes(host);
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
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
// }

// /* ---------- renderer ---------- */
// export default function Blog({
//   posts,
//   errorMsg,
// }: {
//   posts: ApiPost[];
//   errorMsg?: string;
// }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Social Media Links */}
//       <div className="flex justify-between py-4">
//         <div className="flex gap-3">
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Facebook size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Twitter size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Linkedin size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <FaPinterest size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <FaWhatsapp size={24} />
//           </Link>
//         </div>
//       </div>

//       {/* Error / Empty states */}
//       {errorMsg ? (
//         <p className="text-sm text-gray-600">{errorMsg}</p>
//       ) : posts.length === 0 ? (
//         <p className="text-gray-600">No posts available right now.</p>
//       ) : (
//         // Blog Posts Grid (same UI you had)
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post, index) => {
//             const img = normalizeImageUrl(post);
//             const href = `/blog/${post.slug}`;
//             const dateLabel = formatDate(post.published_date);
//             const desc =
//               post.short_description ||
//               (post.content ? post.content.replace(/<[^>]+>/g, "").slice(0, 180) + "…" : "");

//             return (
//               <article
//                 key={post.id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative w-full aspect-[4/3] overflow-hidden">
//                   {img ? (
//                     <Image
//                       src={img}
//                       alt={post.title}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover hover:scale-105 transition-transform duration-300"
//                       priority={index < 3}
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gray-100" />
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
//                     {post.title}
//                   </h2>

//                   <div className="text-gray-500 text-sm mb-3 flex items-center gap-2">
//                     {dateLabel && (
//                       <time dateTime={post.published_date || undefined}>{dateLabel}</time>
//                     )}
//                     <span>•</span>
//                     <span>No Comments</span>
//                   </div>

//                   <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">{desc}</p>

//                   <Link
//                     href={href}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                   >
//                     Read More
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }









// // components/blog/BlogGrid.tsx
// import Link from "next/link";
// import Image from "next/image";
// import { Facebook, Twitter, Linkedin } from "lucide-react";
// import { FaPinterest, FaWhatsapp } from "react-icons/fa";

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
//   /** 🔸 tags ko “comments” की तरह use karenge */
//   tags?: string[] | null;
// };

// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
//   process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";

// /* ---------- helpers ---------- */
// function normalizeImageUrl(post: ApiPost): string | null {
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   try {
//     const u = new URL(raw, FILE_HOST);
//     const host = u.hostname;
//     const shouldSwap = ["127.0.0.1", "127.1.1.0", "localhost"].includes(host);
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
//   return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
// }

// /* ---------- renderer ---------- */
// export default function Blog({
//   posts,
//   errorMsg,
// }: {
//   posts: ApiPost[];
//   errorMsg?: string;
// }) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Social Media Links */}
//       <div className="flex justify-between py-4">
//         <div className="flex gap-3">
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Facebook size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Twitter size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <Linkedin size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <FaPinterest size={24} />
//           </Link>
//           <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
//             <FaWhatsapp size={24} />
//           </Link>
//         </div>
//       </div>

//       {/* Error / Empty states */}
//       {errorMsg ? (
//         <p className="text-sm text-gray-600">{errorMsg}</p>
//       ) : posts.length === 0 ? (
//         <p className="text-gray-600">No posts available right now.</p>
//       ) : (
//         // Blog Posts Grid
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post, index) => {
//             const img = normalizeImageUrl(post);
//             const href = `/blog/${post.slug}`;
//             const dateLabel = formatDate(post.published_date);
//             const desc =
//               post.short_description ||
//               (post.content ? post.content.replace(/<[^>]+>/g, "").slice(0, 180) + "…" : "");

//             const tags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];
//             const hasTags = tags.length > 0;
//             const visibleTags = tags.slice(0, 2); // pehle 2 chips
//             const extraCount = Math.max(0, tags.length - 2);

//             return (
//               <article
//                 key={post.id}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative w-full aspect-[4/3] overflow-hidden">
//                   {img ? (
//                     <Image
//                       src={img}
//                       alt={post.title}
//                       fill
//                       sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
//                       className="object-cover hover:scale-105 transition-transform duration-300"
//                       priority={index < 3}
//                     />
//                   ) : (
//                     <div className="w-full h-full bg-gray-100" />
//                   )}
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
//                     {post.title}
//                   </h2>

//                   {/* Meta row: Date • Tags-as-Comments */}
//                   <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
//                     {dateLabel && (
//                       <time dateTime={post.published_date || undefined}>{dateLabel}</time>
//                     )}
//                     <span>•</span>

//                     {/* 🔸 “No Comments” ki jagah tags */}
//                     {hasTags ? (
//                       <div className="flex items-center gap-1">
//                         {visibleTags.map((t) => (
//                           <span
//                             key={t}
//                             className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs"
//                           >
//                             {t}
//                           </span>
//                         ))}
//                         {extraCount > 0 && (
//                           <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs">
//                             +{extraCount}
//                           </span>
//                         )}
//                       </div>
//                     ) : (
//                       <span>No Comments</span>
//                     )}
//                   </div>

//                   <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">{desc}</p>

//                   <Link
//                     href={href}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
//                   >
//                     Read More
//                     <span aria-hidden="true">→</span>
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }






"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, MessageCircle, Calendar } from "lucide-react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

/* =======================
   Types
======================= */
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
  tags?: string[] | null; // ← comments as tags
};

/* =======================
   Hosts / helpers
======================= */
const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

function normalizeImageUrl(post: ApiPost): string | null {
  const raw =
    post.image_url ||
    post.meta_image_url ||
    (post.image_path ? `/storage/${post.image_path}` : null) ||
    (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

  if (!raw) return null;

  try {
    const u = new URL(raw, FILE_HOST);
    const shouldSwap = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
    const base = new URL(FILE_HOST);
    const origin = shouldSwap ? base.origin : u.origin;
    const cleanPath = encodeURI(decodeURI(u.pathname));
    return `${origin}${cleanPath}${u.search}${u.hash}`;
  } catch {
    const path = raw.startsWith("/") ? raw : `/${raw}`;
    return `${FILE_HOST}${path}`;
  }
}

function formatDate(iso?: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

/* =======================
   Inline Tags (Comments) with +N popover
======================= */
function TagsInline({
  tags,
  max = 2,
  label = "All Comments",
}: {
  tags: string[];
  max?: number;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  if (!tags || tags.length === 0) {
    return <span className="text-gray-500">No Comments</span>;
  }

  const visible = tags.slice(0, max);
  const remaining = tags.slice(max);

  return (
    <div className="flex items-center gap-1">
         <MessageCircle size={14} className="sm:w-5 sm:h-5" />
      {visible.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs"
        >
          {t}
        </span>
      ))}

      {remaining.length > 0 && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs hover:bg-orange-200"
              aria-label={`Show ${remaining.length} more comments`}
            >
              +{remaining.length}
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="start"
            className="w-64 p-0 rounded-md border bg-white shadow-md"
          >
            
            <div className="p-3">
                
              <p className="text-sm font-medium mb-2">{label}</p>
              <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
               
                {tags.map((t, i) => (
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

/* =======================
   Main Grid Renderer
======================= */
export default function Blog({
  posts,
  errorMsg, 
}: {
  posts: ApiPost[];
  errorMsg?: string;
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Socials */}
      <div className="flex justify-between py-4">
        <div className="flex gap-3">
          <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
            <Facebook size={24} />
          </Link>
          <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
            <Twitter size={24} />
          </Link>
          <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
            <FaPinterest size={24} />
          </Link>
          <Link href="#" className="text-orange-400 hover:text-orange-500 transition-colors">
            <FaWhatsapp size={24} />
          </Link>
        </div>
      </div>

      {/* States */}
      {errorMsg ? (
        <p className="text-sm text-gray-600">{errorMsg}</p>
      ) : posts.length === 0 ? (
        <p className="text-gray-600">No posts available right now.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const img = normalizeImageUrl(post);
            const href = `/blog/${post.slug}`;
            const dateLabel = formatDate(post.published_date);
            const desc =
              post.short_description ||
              (post.content ? post.content.replace(/<[^>]+>/g, "").slice(0, 180) + "…" : "");
            const tags = Array.isArray(post.tags) ? post.tags.filter(Boolean) : [];

            return (
              <article
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  {img ? (
                    <Image
                      src={img}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100" />
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {post.title}
                  </h2>

                  {/* Meta row: date • tags-as-comments with +N */}
                  <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
                     <Calendar size={14} className="sm:w-4 sm:h-4" />
                    {dateLabel && (
                      <time dateTime={post.published_date || undefined}>{dateLabel}</time>
                    )}
                    <span>•</span>
                    <TagsInline tags={tags} max={2} label="All Comments" />
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">{desc}</p>

                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  >
                    Read More
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

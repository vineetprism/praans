// import React from 'react'
// import BlogPage from '../_component/Blog/Blog'

// export default function Page () {
//   return (
//     <div>
//       <BlogPage />
//     </div>
//   )
// }





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

// type ApiResponse = {
//   data: ApiPost[];
// };

// const API_BASE =
//   process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
//   "http://100.110.147.101:8000";
// const FILE_HOST =
//   process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") || API_BASE;

// function normalizeImageUrl(post: ApiPost): string | null {
//   // Prefer explicit image_url then meta_image_url; else build from path
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : null) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

//   if (!raw) return null;

//   try {
//     // Absolute URL? normalize host if it's 127.* or localhost
//     const u = new URL(raw, FILE_HOST);
//     const host = u.hostname;
//     const shouldSwap =
//       host === "127.0.0.1" || host === "127.1.1.0" || host === "localhost";
//     const base = new URL(FILE_HOST);
//     const origin = shouldSwap ? base.origin : u.origin;
//     const cleanPath = encodeURI(decodeURI(u.pathname));
//     return `${origin}${cleanPath}${u.search}${u.hash}`;
//   } catch {
//     // Relative path
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

// export default async function BlogPage() {
//   // 30 min ISR like the rest of your stack
//   const res = await fetch(`${API_BASE}/api/posts`, {
//     next: { revalidate: 1800 },
//   });

//   if (!res.ok) {
//     // Fail-soft UI
//     return (
//       <div className="container mx-auto px-4 py-8">
//         <div className="flex justify-between py-4">
//           <div className="flex gap-3 text-orange-400">
//             <Link href="#"><Facebook size={24} /></Link>
//             <Link href="#"><Twitter size={24} /></Link>
//             <Link href="#"><Linkedin size={24} /></Link>
//             <Link href="#"><FaPinterest size={24} /></Link>
//             <Link href="#"><FaWhatsapp size={24} /></Link>
//           </div>
//         </div>
//         <p className="text-sm text-gray-600">
//           Couldn’t load posts (HTTP {res.status}). Try again shortly.
//         </p>
//       </div>
//     );
//   }

//   const { data }: ApiResponse = await res.json();

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

//       {/* Blog Posts Grid */}
//       {(!data || data.length === 0) ? (
//         <p className="text-gray-600">No posts available right now.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((post, index) => {
//             const img = normalizeImageUrl(post);
//             const href = `/blog/${post.slug}`;
//             const dateLabel = formatDate(post.published_date);
//             const desc =
//               post.short_description ||
//               // fallback from HTML content (very light strip)
//               (post.content
//                 ? post.content.replace(/<[^>]+>/g, "").slice(0, 180) + "…"
//                 : "");

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
//                     {dateLabel && <time dateTime={post.published_date || undefined}>{dateLabel}</time>}
//                     <span>•</span>
//                     <span>No Comments</span>
//                   </div>

//                   <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
//                     {desc}
//                   </p>

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






// app/blog/page.tsx
import Blog from "../_component/Blog/Blog";

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
};

type ApiResponse = { data: ApiPost[] };

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

export default async function BlogPage() {
  // ✅ ISR here (30 minutes)
  const res = await fetch(`${API_BASE}/api/posts`, {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    // Soft-fail: render empty state using renderer too (for layout parity)
    return <Blog posts={[]} errorMsg={`Couldn’t load posts (HTTP ${res.status}).`} />;
  }

  const json: ApiResponse = await res.json();
  const posts = Array.isArray(json?.data) ? json.data : [];

  return <Blog posts={posts} />;
}

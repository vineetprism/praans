// import dynamic from "next/dynamic";
// import Link from "next/link";
// import { Metadata } from "next";

// const BlogSlug = dynamic(
//   () => import("@/app/_component/Blog/(BlogDetails)/BlogDetails"),
//   {
//     ssr: true,
//   }
// );

// type ApiPost = {
//   id: number;
//   title: string;
//   slug: string;
//   author?: { name: string };
//   name?: string;
//   category?: { name: string };
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
//   meta_url?: string | null;
//   tags?: string[] | null;
// };

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
// const FILE_HOST = API_BASE;
// const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || API_BASE;

// function normalizeImageUrlForMeta(
//   post?: Partial<ApiPost> | null
// ): string | undefined {
//   if (!post) return undefined;
//   const raw =
//     post.image_url ||
//     post.meta_image_url ||
//     (post.image_path ? `/storage/${post.image_path}` : undefined) ||
//     (post.meta_image_path ? `/storage/${post.meta_image_path}` : undefined);
//   if (!raw) return undefined;

//   try {
//     const u = new URL(raw as string, FILE_HOST);
//     const base = new URL(FILE_HOST);
//     const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
//       u.hostname
//     );
//     const origin = isLocal ? base.origin : u.origin;
//     const cleanPath = encodeURI(decodeURI(u.pathname));
//     return `${origin}${cleanPath}${u.search}${u.hash}`;
//   } catch {
//     const path = (raw as string).startsWith("/") ? (raw as string) : `/${raw}`;
//     return `${FILE_HOST}${path}`;
//   }
// }

// function normalizePost(data: any): ApiPost {
//   if (!data || typeof data !== "object") return data as ApiPost;
  
//   const author = data.author
//     ? typeof data.author === "string"
//       ? { name: data.author }
//       : data.author
//     : undefined;
    
//   const category = data.category
//     ? typeof data.category === "string"
//       ? { name: data.category }
//       : data.category
//     : undefined;
  
//   // Extract nested meta object from API
//   const meta = data.meta || {};
  
//   return {
//     id: data.id,
//     title: data.title,
//     slug: data.slug,
//     author,
//     name: data.name ?? undefined,
//     category,
//     content: data.content ?? null,
//     short_description: data.short_description ?? null,
//     published_date: data.published_date ?? null,
//     image_url: data.image_url ?? null,
//     image_path: data.image_path ?? null,
//     meta_image_url: data.meta_image_url ?? null,
//     meta_image_path: data.meta_image_path ?? null,
    
//     // Extract from nested meta object with your exact field names
//     meta_title: meta.seo_title ?? null,
//     meta_description: meta.meta_description ?? null,
//     meta_keywords: Array.isArray(meta.meta_keywords)
//       ? meta.meta_keywords.join(", ")
//       : meta.meta_keywords ?? null,
//     meta_url: meta.meta_url ?? null,
    
//     tags: Array.isArray(data.tags) ? data.tags : null,
//   };
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const { slug } = await params;

//   try {
//     const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
//       cache: "no-store",
//     });

   

//     const json = await res.json();
//     const dataRaw =
//       json && json.data && !Array.isArray(json.data)
//         ? json.data
//         : Array.isArray(json?.data)
//         ? json.data[0]
//         : json;
        
//     const data: ApiPost = normalizePost(dataRaw);

//     const title = data?.meta_title || "" 
//     const description =
//       data?.meta_description || "";
//     const keywords = data?.meta_keywords || "";
//     const canonical = data?.meta_url || `${SITE_URL}/blog/${slug}`;
//     const imageUrl = normalizeImageUrlForMeta(data);
//     const author = data?.author?.name || "";

//     return {
//       title,
//       description,
//       keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
//       authors: [{ name: author }],
      
//       alternates: {
//         canonical,
//       },

//       openGraph: {
//         type: "article",
//         title,
//         description,
//         url: canonical,
//         siteName: "",
//         locale: "en_IN",
//         images: imageUrl
//           ? [
//               {
//                 url: imageUrl,
//                 width: 1200,
//                 height: 630,
//                 alt: title,
//               },
//             ]
//           : undefined,
//         publishedTime: data?.published_date || undefined,
//         authors: [author],
//         tags: data?.tags || undefined,
//       },

//       twitter: {
//         card: "summary_large_image",
//         title,
//         description,
//         creator: "@prism",
//         site: "@prism",
//         images: imageUrl ? [imageUrl] : undefined,
//       },

//       robots: {
//         index: true,
//         follow: true,
//         googleBot: {
//           index: true,
//           follow: true,
//           "max-video-preview": -1,
//           "max-image-preview": "large",
//           "max-snippet": -1,
//         },
//       },
//     };
//   } catch (error) {
//     console.error("[generateMetadata] Error:", error);
//     return {
//       title: "Blog | Prism",
//       description: "Read our latest blog posts.",
//     };
//   }
// }

// export default async function BlogPostPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = await params;

//   const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
//     next: { revalidate: 86400 },
//   }).catch(() => null);

//   if (!res || !res.ok) {
//     return (
//       <div className="bg-gray-50 min-h-screen">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">
//             Post not found
//           </h1>
//           <p className="text-gray-600">
//             We couldn't fetch this article right now.
//           </p>
//           <Link
//             href="/blog-main"
//             className="text-orange-600 font-semibold mt-3 inline-block"
//           >
//             ← Back to Blog
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const json = await res.json();
//   const postRaw =
//     json && json.data && !Array.isArray(json.data)
//       ? json.data
//       : Array.isArray(json?.data)
//       ? json.data[0]
//       : json;
//   const post: ApiPost = normalizePost(postRaw);

//   if (!post) {
//     return (
//       <div className="bg-gray-50 min-h-screen">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
//           <h1 className="text-2xl font-bold text-gray-900 mb-2">No data</h1>
//           <p className="text-gray-600">This slug didn't return any content.</p>
//           <Link
//             href="/blog-main"
//             className="text-orange-600 font-semibold mt-3 inline-block"
//           >
//             ← Back to Blog
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return <BlogSlug post={post} />;
// }





















import dynamic from "next/dynamic";
import Link from "next/link";
import { Metadata } from "next";

const BlogSlug = dynamic(
  () => import("@/app/_component/Blog/(BlogDetails)/BlogDetails"),
  {
    ssr: true,
  }
);

type ApiPost = {
  id: number;
  title: string;
  slug: string;
  author?: { name: string };
  name?: string;
  category?: { name: string };
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
  meta_url?: string | null;
  tags?: string[] | null;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!;
const FILE_HOST = API_BASE;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || API_BASE;

function normalizeImageUrlForMeta(
  post?: Partial<ApiPost> | null
): string | undefined {
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
    const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
      u.hostname
    );
    const origin = isLocal ? base.origin : u.origin;
    const cleanPath = encodeURI(decodeURI(u.pathname));
    return `${origin}${cleanPath}${u.search}${u.hash}`;
  } catch {
    const path = (raw as string).startsWith("/") ? (raw as string) : `/${raw}`;
    return `${FILE_HOST}${path}`;
  }
}

function normalizePost(data: any): ApiPost {
  if (!data || typeof data !== "object") return data as ApiPost;
  
  const author = data.author
    ? typeof data.author === "string"
      ? { name: data.author }
      : data.author
    : undefined;
    
  const category = data.category
    ? typeof data.category === "string"
      ? { name: data.category }
      : data.category
    : undefined;
  
  // Extract nested meta object from API
  const meta = data.meta || {};
  
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    author,
    name: data.name ?? undefined,
    category,
    content: data.content ?? null,
    short_description: data.short_description ?? null,
    published_date: data.published_date ?? null,
    image_url: data.image_url ?? null,
    image_path: data.image_path ?? null,
    meta_image_url: data.meta_image_url ?? null,
    meta_image_path: data.meta_image_path ?? null,
    
    // Extract from nested meta object with your exact field names
    meta_title: meta.seo_title ?? null,
    meta_description: meta.meta_description ?? null,
    meta_keywords: Array.isArray(meta.meta_keywords)
      ? meta.meta_keywords.join(", ")
      : meta.meta_keywords ?? null,
    meta_url: meta.meta_url ?? null,
    
    tags: Array.isArray(data.tags) ? data.tags : null,
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.status}`);
    }

    const json = await res.json();
    const dataRaw =
      json && json.data && !Array.isArray(json.data)
        ? json.data
        : Array.isArray(json?.data)
        ? json.data[0]
        : json;
        
    const data: ApiPost = normalizePost(dataRaw);
 console.log(data)
    // ✅ Fallback values for better SEO
    const title = data?.meta_title || data?.title || "Blog Post | Prism Infoways";
    const description =
      data?.meta_description || data?.short_description || "Read our latest insights and articles.";
    const keywords = data?.meta_keywords || "";
    const canonical = data?.meta_url || `${SITE_URL}/blog/${slug}`;
    const imageUrl = normalizeImageUrlForMeta(data);
    const author = data?.author?.name || "Prism Infoways";

    // ✅ Ensure absolute URL for images (critical for social media)
    const absoluteImageUrl = imageUrl?.startsWith("http")
      ? imageUrl
      : imageUrl
      ? `${SITE_URL}${imageUrl}`
      : `${SITE_URL}/og-default.jpg`; // Fallback default image

    return {
      // ✅ CRITICAL: metadataBase for absolute URL resolution
      metadataBase: new URL(SITE_URL),
      
      title,
      description,
      keywords: keywords ? keywords.split(",").map((k) => k.trim()) : undefined,
      authors: [{ name: author }],
      
      alternates: {
        canonical,
      },

      // ✅ FIXED: Complete OpenGraph implementation
      openGraph: {
        // type: "article",
        title,
        description,
        url: canonical,
        // siteName: "Prism Infoways", // ✅ FIXED: Added proper site name
        // locale: "en_IN",
        images: [
          {
            url: absoluteImageUrl, // ✅ Absolute URL
            width: 1200,
            height: 630,
            alt: title, // ✅ Accessibility
          },
        ],
        publishedTime: data?.published_date || undefined,
        authors: [author],
        tags: data?.tags || undefined,
      },

      // ✅ FIXED: Twitter Card with proper image object format
      twitter: {
        // card: "summary_large_image",
        title,
        description,
        // creator: "@prism", // Replace with your actual Twitter handle
        // site: "@prism", // Replace with your actual Twitter handle
        images: [
          {
            url: absoluteImageUrl, // ✅ FIXED: Object format instead of array
            alt: title,
          },
        ],
      },

      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  } catch (error) {
    console.error("[generateMetadata] Error:", error);
    
    // ✅ FIXED: Better fallback metadata with proper OG and Twitter
    return {
      metadataBase: new URL(SITE_URL),
      title: "Blog | Prism Infoways",
      description: "Read our latest blog posts and insights.",
      openGraph: {
        type: "website",
        siteName: "Prism Infoways",
        images: [
          {
            url: `${SITE_URL}/og-default.jpg`,
            width: 1200,
            height: 630,
            alt: "Prism Infoways Blog",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@prism",
        images: [
          {
            url: `${SITE_URL}/og-default.jpg`,
            alt: "Prism Infoways Blog",
          },
        ],
      },
    };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
    next: { revalidate: 86400 },
  }).catch(() => null);

  if (!res || !res.ok) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Post not found
          </h1>
          <p className="text-gray-600">
            We couldn't fetch this article right now.
          </p>
          <Link
            href="/blog-main"
            className="text-orange-600 font-semibold mt-3 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const json = await res.json();
  const postRaw =
    json && json.data && !Array.isArray(json.data)
      ? json.data
      : Array.isArray(json?.data)
      ? json.data[0]
      : json;
  const post: ApiPost = normalizePost(postRaw);

  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">No data</h1>
          <p className="text-gray-600">This slug didn't return any content.</p>
          <Link
            href="/blog-main"
            className="text-orange-600 font-semibold mt-3 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return <BlogSlug post={post} />;
}

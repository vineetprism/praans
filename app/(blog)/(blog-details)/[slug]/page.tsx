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
  tags?: string[] | null;
  
  // Separate nested objects for different metadata types
  meta?: {
    seo_title?: string | null;
    meta_description?: string | null;
    meta_keywords?: string | string[] | null;
    meta_url?: string | null;
  };
  
  opengraph?: {
    og_type?: string | null;
    og_title?: string | null;
    og_url?: string | null;
    og_description?: string | null;
    og_image?: string | null;
  };
  
  twittercard?: {
    twitter_card?: string | null;
    twitter_title?: string | null;
    twitter_site?: string | null;
    twitter_description?: string | null;
    twitter_image?: string | null;
  };
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
  
  // Extract nested objects separately
  const meta = data.meta || {};
  const opengraph = data.opengraph || {};
  const twittercard = data.twittercard || {};
  
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
    tags: Array.isArray(data.tags) ? data.tags : null,
    
    // SEO metadata object
    meta: {
      seo_title: meta.seo_title ?? null,
      meta_description: meta.meta_description ?? null,
      meta_keywords: Array.isArray(meta.meta_keywords)
        ? meta.meta_keywords.join(", ")
        : meta.meta_keywords ?? null,
      meta_url: meta.meta_url ?? null,
    },
    
    // OpenGraph metadata object
    opengraph: {
      og_type: opengraph.og_type ?? null,
      og_title: opengraph.og_title ?? null,
      og_url: opengraph.og_url ?? null,
      og_description: opengraph.og_description ?? null,
      og_image: opengraph.og_image ?? null,
    },
    
    // Twitter Card metadata object
    twittercard: {
      twitter_card: twittercard.twitter_card ?? null,
      twitter_title: twittercard.twitter_title ?? null,
      twitter_site: twittercard.twitter_site ?? null,
      twitter_description: twittercard.twitter_description ?? null,
      twitter_image: twittercard.twitter_image ?? null,
    },
  };
}

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

//     if (!res.ok) {
//       throw new Error(`Failed to fetch post: ${res.status}`);
//     }

//     const json = await res.json();
//     const dataRaw =
//       json && json.data && !Array.isArray(json.data)
//         ? json.data
//         : Array.isArray(json?.data)
//         ? json.data[0]
//         : json;
        
//     const data: ApiPost = normalizePost(dataRaw);

//     // Extract SEO data
//     const seoTitle = data?.meta?.seo_title || undefined;
//     const seoDescription = data?.meta?.meta_description || undefined;
//     const seoKeywords = data?.meta?.meta_keywords || undefined;
//     const seoUrl = data?.meta?.meta_url || undefined;
    
//     // Extract OpenGraph data
//     const ogType = data?.opengraph?.og_type || undefined;
//     const ogTitle = data?.opengraph?.og_title || undefined;
//     const ogUrl = data?.opengraph?.og_url || undefined;
//     const ogDescription = data?.opengraph?.og_description || undefined;
//     const ogImageRaw = data?.opengraph?.og_image || undefined;
    
//     // Extract Twitter Card data
//     const twitterCard = data?.twittercard?.twitter_card || undefined;
//     const twitterTitle = data?.twittercard?.twitter_title || undefined;
//     const twitterSite = data?.twittercard?.twitter_site || undefined;
//     const twitterDescription = data?.twittercard?.twitter_description || undefined;
//     const twitterImageRaw = data?.twittercard?.twitter_image || undefined;

//     // Process OpenGraph image
//     const ogImageUrl = ogImageRaw
//       ? ogImageRaw.startsWith("http")
//         ? ogImageRaw
//         : `${SITE_URL}${ogImageRaw}`
//       : undefined;

//     // Process Twitter image
//     const twitterImageUrl = twitterImageRaw
//       ? twitterImageRaw.startsWith("http")
//         ? twitterImageRaw
//         : `${SITE_URL}${twitterImageRaw}`
//       : undefined;

//     return {
//       metadataBase: new URL(SITE_URL),
      
//       // SEO Metadata
//       title: seoTitle,
//       description: seoDescription,
//       keywords: seoKeywords?.split(",").map((k) => k.trim()),
//       authors: data?.author?.name ? [{ name: data.author.name }] : undefined,
//       alternates: seoUrl ? { canonical: seoUrl } : undefined,
      
//       // OpenGraph Metadata
//       openGraph: {
//         type: ogType as "website" | "article" | undefined,
//         title: ogTitle,
//         description: ogDescription,
//         url: ogUrl,
//         images: ogImageUrl
//           ? [
//               {
//                 url: ogImageUrl,
//                 width: 1200,
//                 height: 630,
//                 alt: ogTitle || "Blog Image",
//               },
//             ]
//           : undefined,
//         publishedTime: data?.published_date || undefined,
//         authors: data?.author?.name ? [data.author.name] : undefined,
//         tags: data?.tags || undefined,
//       },

//       // Twitter Card Metadata
//       twitter: {
//         card: twitterCard as "summary" | "summary_large_image" | undefined,
//         title: twitterTitle,
//         description: twitterDescription,
//         site: twitterSite,
//         images: twitterImageUrl
//           ? [
//               {
//                 url: twitterImageUrl,
//                 alt: twitterTitle || "Blog Image",
//               },
//             ]
//           : undefined,
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
//       metadataBase: new URL(SITE_URL),
//     };
//   }
// }



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

    // Extract SEO data
    const seoTitle = data?.meta?.seo_title || undefined;
    const seoDescription = data?.meta?.meta_description || undefined;
    const seoKeywords = data?.meta?.meta_keywords || undefined;
    const seoUrl = data?.meta?.meta_url || undefined;
    
    // Extract OpenGraph data
    const ogType = data?.opengraph?.og_type || undefined;
    const ogTitle = data?.opengraph?.og_title || undefined;
    const ogUrl = data?.opengraph?.og_url || undefined;
    const ogDescription = data?.opengraph?.og_description || undefined;
    const ogImageRaw = data?.opengraph?.og_image || undefined;
    
    // Extract Twitter Card data
    const twitterCard = data?.twittercard?.twitter_card || undefined;
    const twitterTitle = data?.twittercard?.twitter_title || undefined;
    const twitterSite = data?.twittercard?.twitter_site || undefined;
    const twitterDescription = data?.twittercard?.twitter_description || undefined;
    const twitterImageRaw = data?.twittercard?.twitter_image || undefined;

    // Process OpenGraph image
    const ogImageUrl = ogImageRaw
      ? ogImageRaw.startsWith("http")
        ? ogImageRaw
        : `${SITE_URL}${ogImageRaw}`
      : undefined;

    // Process Twitter image
    const twitterImageUrl = twitterImageRaw
      ? twitterImageRaw.startsWith("http")
        ? twitterImageRaw
        : `${SITE_URL}${twitterImageRaw}`
      : undefined;

    // ✅ FIX: Process keywords properly - handle both string and array
    let processedKeywords: string[] | undefined;
    if (seoKeywords) {
      if (typeof seoKeywords === "string") {
        // If string, split it
        processedKeywords = seoKeywords.split(",").map((k) => k.trim());
      } else if (Array.isArray(seoKeywords)) {
        // If already array, just trim each item
        processedKeywords = seoKeywords.map((k) => k.trim());
      }
    }

    return {
      metadataBase: new URL(SITE_URL),
      
      // SEO Metadata
      title: seoTitle,
      description: seoDescription,
      keywords: processedKeywords, // ✅ Use processed keywords
      authors: data?.author?.name ? [{ name: data.author.name }] : undefined,
      alternates: seoUrl ? { canonical: seoUrl } : undefined,
      
      // OpenGraph Metadata
      openGraph: {
        type: ogType as "website" | "article" | undefined,
        title: ogTitle,
        description: ogDescription,
        url: ogUrl,
        images: ogImageUrl
          ? [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: ogTitle || "Blog Image",
              },
            ]
          : undefined,
        publishedTime: data?.published_date || undefined,
        authors: data?.author?.name ? [data.author.name] : undefined,
        tags: data?.tags || undefined,
      },

      // Twitter Card Metadata
      twitter: {
        card: twitterCard as "summary" | "summary_large_image" | undefined,
        title: twitterTitle,
        description: twitterDescription,
        site: twitterSite,
        images: twitterImageUrl
          ? [
              {
                url: twitterImageUrl,
                alt: twitterTitle || "Blog Image",
              },
            ]
          : undefined,
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
    return {
      metadataBase: new URL(SITE_URL),
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

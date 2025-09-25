import Link from "next/link";
import BlogSlug from "@/app/_component/Blog/BlogDetails/BlogDetails";

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

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") || API_BASE;

/* ---------- tiny helper for metadata image ---------- */
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

/* ---------- normalize API response shape ---------- */
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
    meta_title: data.meta_title ?? null,
    meta_description: data.meta_description ?? null,
    meta_keywords: data.meta_keywords ?? null,
    tags: Array.isArray(data.tags) ? data.tags : null,
  };
}

/* ---------- SEO metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Await `params` to access the `slug`
  const { slug } = await params;

  const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
    cache: "no-store",
  }).catch(() => null);
  if (!res || !res.ok) return { title: "Blog | Prism" };

  const json = await res.json();
  const dataRaw =
    json && json.data && !Array.isArray(json.data)
      ? json.data
      : Array.isArray(json?.data)
      ? json.data[0]
      : json;
  const data: ApiPost = normalizePost(dataRaw);

  const title = data?.meta_title || data?.title || "Blog | Prism";
  const description = data?.meta_description || data?.short_description || "";
  const keywords = data?.meta_keywords || "" ;
  const url = data.meta_url;
  const img = normalizeImageUrlForMeta(data);


  return {
    title,
    description,   
    keywords,
    url,
    img
    // openGraph: { title, description, images: img ? [{ url: img }] : [] },
    // twitter: { card: "summary_large_image", title, description, images: img ? [img] : [] },
  };
}

/* ---------- Page (ISR fetch -> render-only component) ---------- */
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Await `params` to access the `slug`
  const { slug } = await params;

  // ✅ 30-min ISR
  const res = await fetch(`${API_BASE}/api/posts/${slug}`, {
    next: { revalidate: 1800 },
  }).catch(() => null);

  if (!res || !res.ok) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Post not found
          </h1>
          <p className="text-gray-600">
            We couldn’t fetch this article right now.
          </p>
          <Link
            href="/blog"
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
          <p className="text-gray-600">This slug didn’t return any content.</p>
          <Link
            href="/blog"
            className="text-orange-600 font-semibold mt-3 inline-block"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // 🔥 render-only component — same design as your static version
  return <BlogSlug post={post} />;
}

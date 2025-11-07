import Blog from "@/app/_component/Blog/Blog";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

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

type ApiResponse = {
  data: ApiPost[];
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

type PageProps = {
  params: Promise<{ page: string }>;
};
const API_BASE = process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "");
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Blog - Page ${page} | Praans Consultech`,
    description: `Labour law compliance articles - Page ${page}`,
    openGraph: {
      title: `Blog - Page ${page} | Praans Consultech`,
      description: "Latest insights on labour law compliance",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  try {
    console.log("[STATIC PARAMS] Generating static params for blog pages");

    const res = await fetch(`${API_BASE}/api/posts?page=1`, {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const json: ApiResponse = await res.json();
      const totalPages = json?.meta?.last_page || 1;

      console.log(`[STATIC PARAMS] Total pages: ${totalPages}`);

      // Generate params for pages 2 to totalPages
      return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
        page: String(i + 2), // 2, 3, 4, ...
      }));
    }
  } catch (error) {
    console.error("[STATIC PARAMS] Error:", error);
  }

  return [];
}

export default async function BlogPageDynamic({ params }: PageProps) {
  const { page: pageParam } = await params;
  const currentPage = parseInt(pageParam, 10);

  console.log(`[BLOG DYNAMIC] Rendering page ${currentPage}`);

  if (isNaN(currentPage) || currentPage < 1) {
    console.warn(`[BLOG DYNAMIC] Invalid page number: ${pageParam}`);
    notFound();
  }

  try {
    const res = await fetch(`${API_BASE}/api/posts?page=${currentPage}`, {
      next: { revalidate: 86400 },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error(
        `[BLOG DYNAMIC] Failed to fetch posts for page ${currentPage}. Status: ${res.status}`
      );
      return (
        <Blog
          posts={[]}
          errorMsg={`Couldn't load posts (HTTP ${res.status}).`}
          currentPage={currentPage}
          totalPages={1}
          basePath="/blog-main"
        />
      );
    }

    const json: ApiResponse = await res.json();
    const posts = Array.isArray(json?.data) ? json.data : [];
    const totalPages = json?.meta?.last_page || 1;
    const totalPosts = json?.meta?.total;

    if (currentPage > totalPages) {
      console.warn(
        `[BLOG DYNAMIC] Page ${currentPage} exceeds total pages ${totalPages}`
      );
      notFound();
    }

    console.log(
      `[BLOG DYNAMIC] Successfully fetched ${posts.length} posts for page ${currentPage}`
    );

    return (
      <Blog
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
        totalPosts={totalPosts}
        basePath="/blog-main"
      />
    );
  } catch (error) {
    console.error(`[BLOG DYNAMIC] Error fetching posts for page ${currentPage}:`, error);
    return (
      <Blog
        posts={[]}
        errorMsg="Failed to load posts. Please try again later."
        currentPage={currentPage}
        totalPages={1}
        basePath="/blog-main"
      />
    );
  }
}

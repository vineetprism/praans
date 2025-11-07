import Blog from "@/app/_component/Blog/Blog";
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

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";
export const metadata: Metadata = {
  title: "Blog | Praans Consultech - Labour Law Compliance Insights",
  description:
    "Latest articles on labour law compliance, business registration, and legal insights from Praans Consultech experts",
  keywords:
    "blog, labour law, compliance, business registration, legal insights, India",
  openGraph: {
    title: "Blog | Praans Consultech",
    description: "Latest insights on labour law compliance",
    type: "website",
    url: "https://praansconsultech.com/blog-main",
  },
};

export default async function BlogMainPage() {
  const page = 1;

  try {
    console.log(`[BLOG] Fetching posts for page ${page}`);

    const res = await fetch(`${API_BASE}/api/posts?page=${page}`, {
      next: { revalidate: 86400 },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.error(`[BLOG] Failed to fetch posts. Status: ${res.status}`);
      return (
        <Blog
          posts={[]}
          errorMsg={`Couldn't load posts (HTTP ${res.status}).`}
          currentPage={page}
          totalPages={1}
          basePath="/blog-main"
        />
      );
    }

    const json: ApiResponse = await res.json();
    const posts = Array.isArray(json?.data) ? json.data : [];
    const totalPages = json?.meta?.last_page || 1;
    const totalPosts = json?.meta?.total;

    console.log(
      `[BLOG] Successfully fetched ${posts.length} posts for page ${page}`
    );

    return (
      <Blog
        posts={posts}
        currentPage={page}
        totalPages={totalPages}
        totalPosts={totalPosts}
        basePath="/blog-main"
      />
    );
  } catch (error) {
    console.error("[BLOG] Error fetching posts:", error);
    return (
      <Blog
        posts={[]}
        errorMsg="Failed to load posts. Please try again later."
        currentPage={page}
        totalPages={1}
        basePath="/blog-main"
      />
    );
  }
}

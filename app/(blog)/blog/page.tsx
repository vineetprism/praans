import Blog from "../../_component/Blog/Blog";

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
  // "http://100.110.147.101:8000";
  console.log(process.env.NEXT_PUBLIC_API_BASE);

export default async function BlogPage() {
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

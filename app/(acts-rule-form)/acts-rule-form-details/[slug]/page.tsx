
// app/acts/[slug]/page.tsx (Server Component)
import ActDetailClient from "@/app/_component/ActRuleForm/ActRuleFormDetails/ActRuleFormDetails";
import { notFound } from "next/navigation";

// API base ko environment variable se connect karo (safe fallback + trim)
const API_BASE=process.env.NEXT_PUBLIC_API_BASE!

// Types based on actual API response
type FormAPI = {
  id: number;
  form_no: string;
  title: string;
  short_desc: string;
  pdf_url: string | null;
  created_at: string;
};

type ActDetailAPI = {
  data: {
    id: number;
    title: string;
    slug: string;
    state: string;
    short_description: string;
    act_desc: string;
    rule_desc: string;
    act_doc_path?: string | null;
    act_doc_url?: string | null;
    rule_doc_path?: string | null;
    rule_doc_url?: string | null;
    forms: FormAPI[];
    created_at: string;
  };
};

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
  tags?: string[] | null;
};

// Server-side data fetching with ISR
async function getActDetail(slug: string): Promise<ActDetailAPI | null> {
  try {
    const res = await fetch(`${API_BASE}/api/act-rule-forms/${slug}`, {
      next: { revalidate: 1800 }, // 30 minutes ISR cache
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!res.ok) {
      console.error(`Failed to fetch act detail for slug: ${slug}, Status: ${res.status}`);
      return null;
    }
    const data = (await res.json()) as ActDetailAPI;
    if (!data?.data?.title) return null;
    return data;
  } catch (error) {
    console.error("Error fetching act detail:", error);
    return null;
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
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // ✅ Await `params` to access the `slug`
  const { slug } = await params;

  const res = await fetch(`${API_BASE}/api/act-rule-forms/${slug}`, { cache: "no-store" }).catch(() => null);
  if (!res || !res.ok) return { title: "ACT-RULE-FORMS | Prism" };

  const json = await res.json();
  const dataRaw =
    json && json.data && !Array.isArray(json.data) ? json.data :
    Array.isArray(json?.data) ? json.data[0] : json;
  const data: ApiPost = normalizePost(dataRaw);

  const title = data?.meta_title || data?.title || "ACT-RULE-FORMS | Labour Acts & Regulations";
  const description = data?.meta_description || data?.short_description || "";
  const keywords = data?.meta_keywords || "" ;

  return {
    title,
    description,
    keywords,
    
  };
}

/* =========================
   Page — await params
   ========================= */
export default async function ActDetailPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;            // ✅ await params
  const payload = await getActDetail(slug);
  const act = payload?.data;

  if (!act) notFound();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "GovernmentOrganization",
            name: act.title,
            description: act.short_description,
            url: `/acts/${act.slug}`, // absolute URL chahiye ho to SITE_URL env se prefix kar lo
            areaServed: act.state,
            dateCreated: act.created_at,
            governmentType: "Legal Database",
          }),
        }}
      />
      <ActDetailClient act={act} />
    </>
  );
}

/* =========================
   Static params (optional)
   ========================= */
export async function generateStaticParams() {
  try {
    return [{ slug: "maharashtra-shops-and-establishments-act-2017" }];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}




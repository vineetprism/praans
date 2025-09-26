// import DOMPurify from "isomorphic-dompurify";
import GazetteView, { GazetteVM } from "@/app/_component/Gazette/GazzetteDetails/GazetteDetails";


type GazetteItem = {
  id: number;
  title: string;
  slug: string;
  short_description: string | null;
  safeHtml: string | null;
  description: string | null;     
  state_slug: string | null;
  state_name: string | null;
  updated_date: string | null;     
  effective_date: string | null;  
  pdf_path?: string | null;
  pdf_url?: string | null;
 meta_description: string | null;
 meta_keywords: string | null;
 seo_title: string | null;
 meta_url: string | null;
};
type ApiResponse = { data: GazetteItem };

const API_BASE = process.env.NEXT_PUBLIC_API_BASE!

const FILE_HOST = API_BASE;

function normalizeFileUrl(url?: string | null, path?: string | null) {
  if (url) {
    try {
      const u = new URL(url, FILE_HOST);
      const base = new URL(FILE_HOST);
      const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
      const origin = isLocal ? base.origin : u.origin;
      const cleanPath = encodeURI(decodeURI(u.pathname));
      return `${origin}${cleanPath}${u.search}${u.hash}`;
    } catch {}
  }
  if (path) {
    let p = path.trim();
    if (!p.startsWith("/")) p = `/${p}`;
    if (!p.startsWith("/storage")) p = `/storage${p}`;
    p = p.replace(/\/{2,}/g, "/");
    return `${FILE_HOST}${encodeURI(decodeURI(p))}`;
  }
  return null;
}

function ordinal(n: number) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function prettyDate(iso?: string | null) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${ordinal(d.getDate())} ${d.toLocaleString("en-US",{month:"short"})}, ${d.getFullYear()}`;
}

// 👇 Next.js 15+: params is a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ must await
  try {
    const r = await fetch(`${API_BASE}/api/gazettes/${slug}`, { cache: "no-store" });
    if (!r.ok) return { title: "Gazette Notification" };
    const { data }: ApiResponse = await r.json();
    return {
      title: data?.seo_title || "Gazette Notification",
      description: data?.meta_description || "",
      keywords:data.meta_keywords,
      url: data.meta_url
    };
  
  } catch {
    return { title: "Gazette Notification" };
  }
}

// 👇 Next.js 15+: params is a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ must await

  const res = await fetch(`${API_BASE}/api/gazettes/${slug}`, {
    next: { revalidate: 1800 }, // ISR hint
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="w-full px-3 sm:px-4 lg:px-6 py-6">
          <h1 className="text-xl font-semibold">Notification not found</h1>
          <p className="text-gray-600 mt-1">We couldn’t fetch this notification right now.</p>
        </div>
      </div>
    );
  }

  const { data }: ApiResponse = await res.json();

  const vm: GazetteVM = {
    title: data.title,
    stateName: data.state_name || "",
    shortDescription: data.short_description || "",
    safeHtml : data.description || "",
    updatedLabel: prettyDate(data.updated_date),
    effectiveLabel: prettyDate(data.effective_date),
    downloadUrl: normalizeFileUrl(data.pdf_url, data.pdf_path),
  };

  return <GazetteView vm={vm} />;
}

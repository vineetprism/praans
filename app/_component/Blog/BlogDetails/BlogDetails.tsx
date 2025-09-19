"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  User,
  MessageCircle,
  Eye,
} from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Image from "next/image";

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
};

const FILE_HOST =
  process.env.NEXT_PUBLIC_FILE_HOST?.replace(/\/+$/, "") ||
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/+$/, "") ||
  "http://100.110.147.101:8000";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

function normalizeImageUrl(post: ApiPost): string | null {
  const raw =
    post.image_url ||
    post.meta_image_url ||
    (post.image_path ? `/storage/${post.image_path}` : null) ||
    (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

  if (!raw) return null;

  try {
    const u = new URL(raw, FILE_HOST);
    const base = new URL(FILE_HOST);
    const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(u.hostname);
    const origin = isLocal ? base.origin : u.origin;
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
  return d.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogDetails({ post }: { post: ApiPost }) {
  const hero = normalizeImageUrl(post);
  const published = formatDate(post.published_date);
  const safeHtml = DOMPurify.sanitize(post.content || "", {
    ALLOWED_TAGS: [
      "p", "br", "strong", "em", "u", "b", "i",
      "h1", "h2", "h3", "h4", "h5", "h6",
      "ul", "ol", "li", "blockquote", "div", "span", "a",
      "pre", "code", "mark", "strike"
    ],
    ALLOWED_ATTR: ["href", "target", "class", "id", "type", "start", "reversed", "style"],
    KEEP_CONTENT: true,
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="col-span-1 lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight break-words">
                {post?.title}
              </h1>
              <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-4">
                <div className="flex items-center gap-1">
                  <User size={14} className="sm:w-4 sm:h-4" />
                  <span className="truncate">{post?.author?.name || "Unknown Author"}</span>
                </div>
                {published && (
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="sm:w-4 sm:h-4" />
                    <time dateTime={post?.published_date || undefined}>{published}</time>
                  </div>
                )}

                <div className="flex items-center gap-1">
                  <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">{post?.category?.name || "Uncategorized"}</span>
                </div>
              </div>
            </div>

            {hero && (
              <div className="relative w-full mb-6 sm:mb-8 rounded-lg overflow-hidden">
                <img
                  src={hero}
                  alt={post?.title}
                  className="object-contain bg-gray-100 max-w-full"
                />
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Spread the love</h3>
              <div className="flex gap-2 flex-wrap">
                <Link
                  className="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blog/${post?.slug}`)}`}
                  target="_blank"
                  aria-label="Share on Facebook"
                >
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </Link>
                <Link
                  className="bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`${SITE_URL}/blog/${post?.slug}`)}&text=${encodeURIComponent(post?.title)}`}
                  target="_blank"
                  aria-label="Share on Twitter"
                >
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </Link>
                <Link
                  className="bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${SITE_URL}/blog/${post?.slug}`)}`}
                  target="_blank"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Introduction</h2>
              <div
                className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 space-y-4 text-justify"
                dangerouslySetInnerHTML={{ __html: safeHtml }}
              />
            </div>
          </div>

          <div className="col-span-1 lg:col-span-1 order-first lg:order-last">
            <div className="rounded-lg p-4 sm:p-6 border bg-white lg:sticky lg:top-24">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 text-center">
                Our Visitors
              </h3>

              <div className="text-center mb-4 sm:mb-6">
                <div className="bg-gray-900 text-white px-3 sm:px-4 py-2 rounded font-mono text-lg sm:text-xl lg:text-2xl inline-block">
                  012794
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm overflow-hidden">
                <div className="flex items-center justify-between min-w-0 gap-1">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
                    <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-500 flex-shrink-0" />
                    <span className="font-medium truncate text-xs sm:text-sm">Visit Today</span>
                  </div>
                  <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">157</span>
                </div>
                <div className="flex items-center justify-between min-w-0 gap-1">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
                    <Eye size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-gray-500 flex-shrink-0" />
                    <span className="font-medium truncate text-xs sm:text-sm">Visit Yesterday</span>
                  </div>
                  <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">220</span>
                </div>
                <div className="flex items-center justify-between min-w-0 gap-1">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
                    <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-blue-400 flex-shrink-0" />
                    <span className="font-medium truncate text-xs sm:text-sm">This Month</span>
                  </div>
                  <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">2729</span>
                </div>
                <div className="flex items-center justify-between min-w-0 gap-1">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-shrink">
                    <Calendar size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-orange-500 flex-shrink-0" />
                    <span className="font-medium truncate text-xs sm:text-sm">This Year</span>
                  </div>
                  <span className="font-semibold flex-shrink-0 text-xs sm:text-sm">11794</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

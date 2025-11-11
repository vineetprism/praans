"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Calendar,
  User,
  MessageCircle,
  Instagram,
} from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

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

const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE!;
const SITE_URL = process.env.NEXT_PUBLIC_API_BASE!;

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
    const isLocal = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
      u.hostname
    );
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
      "p",
      "br",
      "strong",
      "em",
      "u",
      "b",
      "i",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ul",
      "ol",
      "li",
      "blockquote",
      "div",
      "span",
      "a",
      "pre",
      "code",
      "mark",
      "strike",
      "table",
      "thead",
      "tbody",
      "tfoot",
      "tr",
      "th",
      "td",
      "caption",
      "colgroup",
      "col",
      "img",
      "figure",
      "figcaption",
      "iframe",
      "video",
      "source",
    ],
    ALLOWED_ATTR: [
      "href",
      "target",
      "class",
      "id",
      "type",
      "start",
      "reversed",
      "style",
      "colspan",
      "rowspan",
      "border",
      "cellpadding",
      "cellspacing",
      "width",
      "height",
      "align",
      "valign",
      "scope",
      "src",
      "alt",
      "title",
      "loading",
      "frameborder",
      "allow",
      "allowfullscreen",
      "referrerpolicy",
    ],
    KEEP_CONTENT: true,
  });

  useEffect(() => {
    // Convert tables to responsive cards (mobile) while keeping a desktop table
    const convertTablesToCards = () => {
      // Exclude already-cloned tables to prevent infinite processing
      const tables = document.querySelectorAll<HTMLTableElement>(
        ".blog-content table:not(.rt-clone)"
      );

      tables.forEach((table) => {
        // Skip if already handled or already inside our wrapper
        if (table.dataset.converted === "1") return;
        if (table.closest(".responsive-table-cards")) return;

        const headers: string[] = [];
        const headerCells = table.querySelectorAll("thead th, thead td");
        headerCells.forEach((cell) =>
          headers.push(cell.textContent?.trim() || "")
        );

        const rows: string[][] = [];
        const bodyRows = table.querySelectorAll("tbody tr, :scope > tr");

        // If no thead, treat first row as header
        if (!headers.length && bodyRows.length) {
          const first = bodyRows[0];
          first.querySelectorAll("th, td").forEach((c) => {
            headers.push(c.textContent?.trim() || "");
          });
        }

        bodyRows.forEach((row, idx) => {
          // Skip first row if we used it as header
          if (!headerCells.length && idx === 0) return;
          const rowData: string[] = [];
          row.querySelectorAll("td, th").forEach((c) => {
            rowData.push(c.innerHTML?.trim() || c.textContent?.trim() || "");
          });
          if (rowData.length) rows.push(rowData);
        });

        // Build wrappers
        const cardContainer = document.createElement("div");
        cardContainer.className = "responsive-table-cards";

        const desktopWrapper = document.createElement("div");
        desktopWrapper.className = "desktop-table-wrapper";

        // Clone the original table for desktop view and mark it
        const cloned = table.cloneNode(true) as HTMLTableElement;
        cloned.classList.add("rt-clone");
        desktopWrapper.appendChild(cloned);

        const mobileWrapper = document.createElement("div");
        mobileWrapper.className = "mobile-cards-wrapper";

        // Build cards for mobile
        rows.forEach((rowData) => {
          const card = document.createElement("div");
          card.className = "table-card";

          rowData.forEach((cell, i) => {
            if (!headers[i] || cell === "") return;
            const line = document.createElement("div");
            line.className = "card-row";

            const label = document.createElement("div");
            label.className = "card-label";
            label.textContent = headers[i];

            const value = document.createElement("div");
            value.className = "card-value";
            value.innerHTML = cell;

            line.appendChild(label);
            line.appendChild(value);
            card.appendChild(line);
          });

          mobileWrapper.appendChild(card);
        });

        // Assemble and replace original table
        cardContainer.appendChild(desktopWrapper);
        cardContainer.appendChild(mobileWrapper);
        table.replaceWith(cardContainer);
        // Mark source as converted (in case reference persists)
        table.dataset.converted = "1";
      });
    };

    // Make iframes/videos responsive
    const wrapEmbeds = () => {
      const selectors = ".blog-content iframe, .blog-content video";
      document.querySelectorAll<HTMLElement>(selectors).forEach((el) => {
        if (el.dataset.wrapped === "1") return;
        const wrapper = document.createElement("div");
        wrapper.className = "embed-wrapper";
        el.parentNode?.insertBefore(wrapper, el);
        wrapper.appendChild(el);
        el.dataset.wrapped = "1";
        el.removeAttribute("width");
        el.removeAttribute("height");
        el.setAttribute("loading", "lazy");
        if (el.tagName.toLowerCase() === "iframe") {
          el.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
        }
      });
    };

    const t1 = setTimeout(convertTablesToCards, 50);
    const t2 = setTimeout(wrapEmbeds, 50);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [safeHtml]);

  return (
    <>
      {/* Global responsive styles for blog-content */}
      <style jsx global>{`
        /* --- Generic content hardening --- */
        .blog-content {
          overflow-wrap: anywhere;
          word-break: break-word;
          line-height: 1.75;
        }
        .blog-content p,
        .blog-content li {
          font-size: 1rem;
        }
        @media (min-width: 640px) {
          .blog-content p,
          .blog-content li {
            font-size: 1.0625rem;
          }
        }

        /* Links */
        .blog-content a {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        /* Images */
        .blog-content img {
          max-width: 100% !important;
          height: auto !important;
          display: block;
          margin: 1rem auto;
        }
        .blog-content figure {
          margin: 1rem 0;
        }
        .blog-content figcaption {
          text-align: center;
          font-size: 0.875rem;
          opacity: 0.8;
        }

        /* Code & pre */
        .blog-content pre {
          overflow-x: auto;
          padding: 1rem;
          border-radius: 0.5rem;
          background: #0b1220;
          color: #e5e7eb;
          font-size: 0.875rem;
        }
        .blog-content code {
          white-space: pre-wrap;
          word-break: break-word;
        }

        /* Blockquote */
        .blog-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          color: #4b5563;
          background: #fafafa;
          border-radius: 0.25rem;
        }

        /* Lists */
        .blog-content ul {
          list-style: disc;
          padding-left: 1.25rem;
        }
        .blog-content ol {
          list-style: decimal;
          padding-left: 1.25rem;
        }

        /* Tables: fallback horizontal scroll even if JS fails */
        .blog-content table {
          width: 100% !important;
          border-collapse: collapse;
          display: block;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        .blog-content th,
        .blog-content td {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
          vertical-align: top;
        }
        .blog-content thead th {
          background: #f9fafb;
        }

        /* === Responsive table view control (strong, scoped) === */
        /* Default (mobile first): show cards, hide desktop table */
        .responsive-table-cards .desktop-table-wrapper {
          display: none !important;
        }
        .responsive-table-cards .mobile-cards-wrapper {
          display: block !important;
        }

        /* Desktop ≥768px: show desktop table, hide cards */
        @media (min-width: 768px) {
          .responsive-table-cards .desktop-table-wrapper {
            display: block !important;
            overflow-x: auto;
            margin: 1.5rem 0;
          }
          .responsive-table-cards .mobile-cards-wrapper {
            display: none !important;
          }
        }

        /* Desktop table aesthetics */
        .desktop-table-wrapper table {
          width: 100%;
          border-collapse: collapse;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .desktop-table-wrapper table thead {
          background: #f9fafb;
          border-bottom: 2px solid #e5e7eb;
        }
        .desktop-table-wrapper table th {
          padding: 1rem 1.5rem;
          text-align: left;
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
        }
        .desktop-table-wrapper table td {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 0.875rem;
        }
        .desktop-table-wrapper table tbody tr:last-child td {
          border-bottom: none;
        }
        .desktop-table-wrapper table tbody tr:hover {
          background: #f9fafb;
        }

        /* Mobile cards styling */
        .mobile-cards-wrapper {
          display: block;
          margin: 1rem 0;
        }
        .table-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1rem;
          margin-bottom: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        .table-card:last-child {
          margin-bottom: 0;
        }
        .card-row {
          display: flex;
          justify-content: space-between;
          align-items: start;
          padding: 0.75rem 0;
          border-bottom: 1px solid #f3f4f6;
          gap: 1rem;
        }
        .card-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .card-row:first-child {
          padding-top: 0;
        }
        .card-label {
          font-weight: 600;
          color: #374151;
          font-size: 0.875rem;
          flex-shrink: 0;
          min-width: 40%;
        }
        .card-value {
          color: #6b7280;
          font-size: 0.875rem;
          text-align: right;
          word-break: break-word;
        }

        /* Embeds (iframes/videos) – responsive */
        .embed-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #00000010;
          border-radius: 0.5rem;
          overflow: hidden;
          margin: 1rem 0;
        }
        .embed-wrapper > iframe,
        .embed-wrapper > video {
          position: absolute;
          inset: 0;
          width: 100% !important;
          height: 100% !important;
          border: 0;
          display: block;
        }

        /* Headings spacing */
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          line-height: 1.25;
          word-wrap: anywhere;
          margin-top: 1.25em;
          margin-bottom: 0.75em;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl min-h-screen">
        <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
          <div className="grid lg:grid-cols-1 gap-4 sm:gap-6">
            <div className="col-span-1 lg:col-span-1">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight break-words">
                  {post?.title}
                </h1>

                <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-4">
                  <div className="flex items-center gap-1">
                    <User size={14} className="sm:w-4 sm:h-4" />
                    <span className="truncate">
                      {post?.author?.name || "Unknown Author"}
                    </span>
                  </div>

                  {published && (
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="sm:w-4 sm:h-4" />
                      <time dateTime={post?.published_date || undefined}>
                        {published}
                      </time>
                    </div>
                  )}

                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">
                      {post?.category?.name || "Uncategorized"}
                    </span>
                  </div>
                </div>
              </div>

              {hero && (
                <div className="relative w-full lg:h-[35rem] mb-2 sm:mb-8 rounded-lg overflow-hidden">
                  <div className="aspect-[14/9]">
                    <Image
                      src={hero}
                      alt={post?.title}
                      fill
                      sizes="70vw"
                      className="object-contain"
                      priority
                      fetchPriority="high"
                    />
                  </div>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                  Spread the love
                </h3>

                <div className="flex gap-2 flex-wrap">
                  <Link
                    className="bg-blue-600 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center flex-shrink-0"
                    href={`https://www.facebook.com/profile.php?id=100084889211872`}
                    target="_blank"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} className="sm:w-5 sm:h-5" />
                  </Link>

                  <Link
                    className="bg-gray-800 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center flex-shrink-0"
                    href="https://www.instagram.com/praans_consultech/"
                    target="_blank"
                    aria-label="Visit Instagram"
                  >
                    <Instagram size={16} className="sm:w-5 sm:h-5" />
                  </Link>

                  <Link
                    className="bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center flex-shrink-0"
                    href={`https://www.linkedin.com/company/83492002/admin/dashboard/`}
                    target="_blank"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                  <Link
                    className="bg-blue-700 text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-blue-800 transition-colors flex items-center justify-center flex-shrink-0"
                    href={`https://x.com/SANDEEP9112605`}
                    target="_blank"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} className="sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>

              <div className="rounded-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Introduction
                </h2>

                <div
                  className="blog-content prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-700 space-y-4"
                  dangerouslySetInnerHTML={{ __html: safeHtml }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

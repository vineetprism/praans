"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Instagram,
} from "lucide-react";
import { FaPinterest, FaWhatsapp } from "react-icons/fa";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

// ==================== TYPES ====================
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

type BlogProps = {
  posts: ApiPost[];
  errorMsg?: string;
  currentPage?: number;
  totalPages?: number;
  totalPosts?: number;
  basePath?: string;
};

// ==================== CONFIG ====================
const FILE_HOST = process.env.NEXT_PUBLIC_API_BASE!;


// ==================== HELPER FUNCTIONS ====================
function normalizeImageUrl(post: ApiPost): string | null {
  const raw =
    post.image_url ||
    post.meta_image_url ||
    (post.image_path ? `/storage/${post.image_path}` : null) ||
    (post.meta_image_path ? `/storage/${post.meta_image_path}` : null);

    
  if (!raw) return null;

  try {
    const u = new URL(raw, FILE_HOST);
    const shouldSwap = ["127.0.0.1", "127.1.1.0", "localhost"].includes(
      u.hostname
    );
    const base = new URL(FILE_HOST);
    const origin = shouldSwap ? base.origin : u.origin;
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
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ==================== TAGS COMPONENT ====================
function TagsInline({
  tags,
  max = 2,
  label = "All Comments",
}: {
  tags: string[];
  max?: number;
  label?: string;
}) {
  const [open, setOpen] = React.useState(false);

  if (!tags || tags.length === 0) {
    return <span className="text-gray-500 text-xs">No Comments</span>;
  }

  const visible = tags.slice(0, max);
  const remaining = tags.slice(max);

  return (
    <div className="flex items-center gap-1 flex-wrap">
      <MessageCircle size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
      {visible?.map((t, i) => (
        <span
          key={`${t}-${i}`}
          className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs whitespace-nowrap"
        >
          {t}
        </span>
      ))}

      {remaining?.length > 0 && (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-xs hover:bg-orange-200 whitespace-nowrap"
              aria-label={`Show ${remaining?.length} more comments`}
            >
              +{remaining?.length}
            </button>
          </PopoverTrigger>
          <PopoverContent
            side="bottom"
            align="start"
            className="w-64 p-0 rounded-md border bg-white shadow-md z-50"
          >
            <div className="p-3">
              <p className="text-sm font-medium mb-2">{label}</p>
              <div className="max-h-56 overflow-y-auto space-y-1 pr-1">
                {tags?.map((t, i) => (
                  <div
                    key={`${t}-${i}`}
                    className="px-2 py-1 rounded-md bg-orange-50 border border-orange-200 text-orange-700 text-xs"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

// ==================== PAGINATION COMPONENT ====================
function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog-main",
}: {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // ✅ Navigate with clean URLs
    if (page === 1) {
      router.push(basePath); // /blog-main
    } else {
      router.push(`${basePath}/${page}`); // /blog-main/2
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav
      className="flex items-center justify-center gap-1 sm:gap-2 mt-8 mb-4 px-2"
      aria-label="Blog pagination"
    >
      {/* First Page Button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
        aria-label="First page"
      >
        <ChevronsLeft size={16} className="sm:w-5 sm:h-5" />
      </button>

      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === 1
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
      </button>

      {/* Page Numbers */}
      <div className="flex gap-0.5 sm:gap-1">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 text-gray-500 text-sm"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border font-medium text-xs sm:text-sm transition-all ${
                isActive
                  ? "bg-orange-500 border-orange-500 text-white shadow-md scale-105"
                  : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
              }`}
              aria-label={`Page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
        aria-label="Next page"
      >
        <ChevronRight size={16} className="sm:w-5 sm:h-5" />
      </button>

      {/* Last Page Button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg border transition-all ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-400 cursor-not-allowed"
            : "border-gray-300 text-gray-700 hover:bg-orange-50 hover:border-orange-500 hover:text-orange-600"
        }`}
        aria-label="Last page"
      >
        <ChevronsRight size={16} className="sm:w-5 sm:h-5" />
      </button>
    </nav>
  );
}

// ==================== MAIN BLOG COMPONENT ====================
export default function Blog({
  posts,
  errorMsg,
  currentPage = 1,
  totalPages = 1,
  totalPosts,
  basePath = "/blog-main",
}: BlogProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* <div className="flex justify-between py-4 mb-4">
        <div className="flex gap-3">
          <Link
            href="https://www.facebook.com/profile.php?id=100084889211872"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors"
            aria-label="Follow us on Facebook"
          >
            <Facebook size={24} />
          </Link>
          <Link
            href="https://twitter.com/praansconsultech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors"
            aria-label="Follow us on Twitter"
          >
            <Twitter size={24} />
          </Link>
          <Link
            href="https://linkedin.com/company/praansconsultech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors"
            aria-label="Follow us on LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="https://pinterest.com/praansconsultech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors"
            aria-label="Follow us on Pinterest"
          >
            <FaPinterest size={24} />
          </Link>
          <Link
            href="https://www.instagram.com/praans_consultech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:text-orange-500 transition-colors"
            aria-label="Contact us on WhatsApp"
          >
            <Instagram size={24} />
          </Link>
        </div>
      </div> */}

      {/* Pagination Info */}
      {totalPosts && totalPages > 1 && (
        <div className="mb-4 text-xs sm:text-sm text-gray-600 flex items-center justify-between">
          <span>
            Showing page{" "}
            <strong className="text-orange-600">{currentPage}</strong> of{" "}
            <strong className="text-orange-600">{totalPages}</strong>
          </span>
          <span className="hidden sm:inline">({totalPosts} total posts)</span>
        </div>
      )}

      {/* Error State */}
      {errorMsg ? (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
          <p className="text-sm">{errorMsg}</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No posts available right now.</p>
        </div>
      ) : (
        <>
          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {posts?.map((post, index) => {
              const img = normalizeImageUrl(post);
              const href = `/${post.slug}`;
              const dateLabel = formatDate(post.published_date);
              const short_description =
                post?.short_description ||
                (post?.content
                  ? post?.content?.replace(/<[^>]+>/g, "")?.slice(0, 180) +
                    "…"
                  : "");
              const tags = Array.isArray(post?.tags)
                ? post?.tags?.filter(Boolean)
                : [];

              return (
                <article
                  key={post?.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <Link href={href}>
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                      {img ? (
                        <Image
                          src={img}
                          alt={post?.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          priority={index === 0}
                          fetchPriority={index === 0 ? "high" : undefined}
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400 text-sm">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-6">
                    <Link href={href}>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 leading-tight hover:text-orange-600 transition-colors">
                        {post?.title}
                      </h2>
                    </Link>

                    {/* Meta: Date & Tags */}
                    <div className="text-gray-500 text-sm mb-3 flex items-center gap-2 flex-wrap">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="sm:w-4 sm:h-4" />
                        {dateLabel && (
                          <time dateTime={post?.published_date || undefined}>
                            {dateLabel}
                          </time>
                        )}
                      </div>
                      {tags.length > 0 && (
                        <>
                          <span className="text-gray-300">•</span>
                          <TagsInline tags={tags} max={2} label="All Comments" />
                        </>
                      )}
                    </div>

                    <Link href={href}>
                      <p className="text-gray-700 mb-4 line-clamp-3 text-sm leading-relaxed text-justify">
                        {short_description}
                      </p>
                    </Link>

                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                      Read More
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath={basePath}
            />
          )}
        </>
      )}
    </div>
  );
}

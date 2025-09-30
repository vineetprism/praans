"use client";
import React, { useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GazetteItem = {
  id: number | string;
  title: string;
  slug?: string | null;
  effective_date?: string | null;
  short_description?: string | null;
  state_name?: string | null;
  state_slug?: string | null;
};

type GazetteApiResponse = {
  data: GazetteItem[];
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number | null;
    last_page: number;
    path: string;
    per_page: number;
    to: number | null;
    total: number;
  };
};

type CarouselCard = {
  id: string;
  title: string;
  slug?: string;
  effective_date?: string;
  isNew: boolean;
  hasLink: boolean;
};

function isWithinDays(dateStr?: string | null, days = 7): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return false;
  const diff = Date.now() - d.getTime();
  return diff <= days * 24 * 60 * 60 * 1000 && diff >= 0;
}

function mapApiToCarousel(items?: GazetteItem[]): CarouselCard[] {
  if (!items?.length) return [];
  return items.map((it, idx) => {
    const slug = (it.slug ?? undefined) as string | undefined;
    const title = it.title ?? "Update";
    const effective_date = it.effective_date ?? undefined;

    return {
      id: String(it.id ?? idx),
      title,
      slug,
      effective_date,
      isNew: isWithinDays(effective_date, 7),
      hasLink: Boolean(slug),
    };
  });
}

function toDDMMYYYY(input?: string | null): string {
  if (!input) return "";
  const ddmmyyyy = input.match(/^(\d{2})[/-](\d{2})[/-](\d{4})$/);
  if (ddmmyyyy) return `${ddmmyyyy[1]}-${ddmmyyyy[2]}-${ddmmyyyy[3]}`;
  const iso = input.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return `${iso[3]}-${iso[2]}-${iso[1]}`;
  const d = new Date(input);
  if (!Number.isNaN(d.getTime())) {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }
  return input;
}

const paginationStyles = `
  .swiper-pagination-bullet{background-color:#f97316!important;opacity:.4}
  .swiper-pagination-bullet-active{background-color:#ea580c!important;opacity:1}
  .swiper-pagination-bullets{bottom:6px!important}
  @media(min-width:768px){.swiper-pagination-bullets{bottom:10px!important}}
`;

export default function NewsCarouselSection({
  initialData,
  slug,
}: {
  initialData: GazetteApiResponse;
  slug?: string;
}) {
  const router = useRouter();
  const swiperRef = useRef<SwiperType | null>(null);

  const [q, setQ] = useState<string>(slug ?? "");

  const allCards = useMemo(
    () => mapApiToCarousel(initialData?.data),
    [initialData]
  );
  const cards = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return allCards;
    return allCards.filter(
      (c) =>
        c.title.toLowerCase().includes(needle) ||
        toDDMMYYYY(c.effective_date)?.toLowerCase().includes(needle)
    );
  }, [allCards, q]);

  const loopEnabled = cards.length > 4;

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const term = q.trim();
      const url = term ? `/gazette?q=${encodeURIComponent(term)}` : `/gazette`;
      router.push(url);
    },
    [q, router]
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
      <section className="w-full pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4 ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl ">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 lg:mb-8 gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-1 text-slate-900 leading-tight">
                Latest Updates{slug ? ` · ${slug}` : ""}
              </h2>
              <p className="text-sm md:text-base 2xl:text-lg text-gray-700">
                Stay informed with the most recent compliance news
              </p>
            </div>

            <div className="w-full md:w-auto md:flex md:flex-col md:items-end md:gap-2 lg:gap-3 ">
              <form
                onSubmit={onSubmit}
                className="flex items-center gap-2 w-full md:w-64 lg:w-72 2xl:w-[25rem]"
                aria-label="Search updates"
              >
                <input
                  type="text"
                  name="q"
                  placeholder="Search updates…"
                  className="w-full px-3 py-2 md:py-1.5 border rounded-lg
                   text-sm md:text-xs lg:text-sm 
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Search query"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white
                   px-4 py-2 md:px-3 md:py-1.5 lg:px-4 lg:py-2
                   text-sm md:text-xs lg:text-sm rounded-lg font-semibold cursor-pointer shrink-0"
                  aria-label="Search"
                >
                  Search
                  <ArrowRight className="ml-1 h-3 w-3 lg:h-4 lg:w-4" />
                </Button>
              </form>
            </div>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(s) => (swiperRef.current = s)}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={loopEnabled}
              speed={600}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 12 },
                640: { slidesPerView: 3, spaceBetween: 16 },
                768: { slidesPerView: 4, spaceBetween: 16 },
                1024: { slidesPerView: 5, spaceBetween: 20 },
                1280: { slidesPerView: 6, spaceBetween: 20 },
                1536: { slidesPerView: 7, spaceBetween: 24 },
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              className="!pb-6 md:!pb-8 lg:!pb-10 "
            >
              {cards?.map((news) => (
                <SwiperSlide key={news?.id}>
                  <Card className="border-l-4 bg-gradient-to-br from-orange-50 to-orange-100 border-l-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-[140px] sm:h-[130px] md:h-[120px] lg:h-[125px] xl:h-[130px] flex flex-col">
                    <CardHeader className="p-2 pb-1 flex-shrink-0">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xs sm:text-sm md:text-xs lg:text-sm leading-tight line-clamp-2 flex-1 cursor-pointer">
                          {news?.hasLink ? (
                            <Link
                              href={`/gazette-details/${news?.slug}`}
                              className="hover:text-orange-600 transition-colors"
                            >
                              {news?.title}
                            </Link>
                          ) : (
                            news?.title
                          )}
                        </CardTitle>
                      </div>
                    </CardHeader>

                    <CardContent className="flex flex-col justify-end flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <span className=" text-[10px] sm:text-xs font-semibold 2xl:text-[11px] ">
                          {toDDMMYYYY(news?.effective_date)}
                        </span>
                        {news?.hasLink && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[10px] sm:text-xs px-1 py-0.5 h-5 sm:h-6 hover:bg-orange-100 hover:text-orange-700 2xl:text-[11px]"
                            asChild
                            aria-label="Read more"
                          >
                            <Link href={`/gazette-details/${news?.slug}`}>
                              Read
                              <ArrowRight className="ml-0.5 w-2.5 h-2.5" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex items-center justify-center gap-3 mt-4 lg:mt-6">
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-orange-50 hover:border-orange-300 hover:scale-105 transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
              </Button>

              <Button
                onClick={() => swiperRef.current?.slideNext()}
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 hover:bg-orange-50 hover:border-orange-300 hover:scale-105 transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}









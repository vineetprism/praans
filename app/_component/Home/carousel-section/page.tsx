"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* Tighter bullets + brand color */
const paginationStyles = `
  .swiper-pagination-bullet{background-color:#f97316!important;opacity:.4}
  .swiper-pagination-bullet-active{background-color:#ea580c!important;opacity:1}
  .swiper-pagination-bullets{bottom:6px!important}
  @media(min-width:768px){.swiper-pagination-bullets{bottom:10px!important}}
  
`;

const newsUpdates = [
  {
    title: "New GDPR Guidelines Released for Data Processing",
    date: "2024-03-15",
    isNew: true,
    href: "/updates/gdpr-guidelines",
  },
  {
    title: "Updated Compliance Framework for Financial Services",
    date: "2024-03-10",
    isNew: true,
    href: "/updates/financial-compliance",
  },
  {
    title: "SOX Compliance Requirements Updated for 2024",
    date: "2024-03-08",
    isNew: false,
    href: "/updates/sox-2024",
  },
  {
    title: "Critical Security Patch Available",
    date: "2024-03-05",
    isNew: true,
    href: "/updates/security-patch",
  },
  {
    title: "New Compliance Training Modules Released",
    date: "2024-03-01",
    isNew: false,
    href: "/updates/training-modules",
  },
  {
    title: "Platform Maintenance Scheduled",
    date: "2024-02-28",
    isNew: false,
    href: "/updates/maintenance",
  },
  {
    title: "Enhanced Reporting Dashboard Now Available",
    date: "2024-02-25",
    isNew: true,
    href: "/updates/reporting-dashboard",
  },
  {
    title: "ISO 27001 Certification Requirements Updated",
    date: "2024-02-20",
    isNew: false,
    href: "/updates/iso-27001",
  },
];

export default function NewsCarouselSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
      <section className="w-full pt-6 pb-2 md:pt-8 md:pb-3 lg:pt-10 lg:pb-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-9xl">
          {/* Header */}
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6 lg:mb-8 gap-4">
            {/* Title */}
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-1 text-slate-900 leading-tight">
                Latest Updates
              </h2>
              <p className="text-sm md:text-base 2xl:text-lg text-gray-700">
                Stay informed with the most recent compliance news
              </p>
            </div>

            {/* RIGHT SIDE: vertical stack on md+ */}
            <div className="w-full md:w-auto md:flex md:flex-col md:items-end md:gap-2 lg:gap-3">
              {/* Search */}
              <form
                action="/updates"
                method="GET"
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

              {/* Newsletter */}
              
              {/* <form
      action="/newsletter-subscribe"
      method="POST"
      className="flex items-center gap-2 w-full md:w-64 lg:w-72"
      aria-label="Newsletter subscription"
    >
      <input
        type="email"
        name="email"
        placeholder="Your email..."
        required
        className="w-full px-3 py-2 md:py-1.5 border rounded-lg
                   text-sm md:text-xs lg:text-sm
                   focus:outline-none focus:ring-2 focus:ring-orange-500"
        aria-label="Email for newsletter"
      />
      <Button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white
                   px-4 py-2 md:px-3 md:py-1.5 lg:px-4 lg:py-2
                   text-sm md:text-xs lg:text-sm rounded-lg font-semibold whitespace-nowrap cursor-pointer shrink-0"
        aria-label="Subscribe to newsletter"
      >
        Subscribe
      </Button>
    </form> */}
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(s) => (swiperRef.current = s)}
              onSlideChange={(s) => {
                setIsBeginning(s.isBeginning);
                setIsEnd(s.isEnd);
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={newsUpdates.length > 4}
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
              /* tighter bottom padding for bullets */
              className="!pb-6 md:!pb-8 lg:!pb-10"
            >
              {newsUpdates.map((news, i) => (
                <SwiperSlide key={i}>
                  <Card className="border-l-4 bg-gradient-to-br from-orange-50 to-orange-100 border-l-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-[140px] sm:h-[130px] md:h-[120px] lg:h-[125px] xl:h-[130px] flex flex-col">
                    <CardHeader className="p-3 pb-1 flex-shrink-0">
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-xs sm:text-sm md:text-xs lg:text-sm leading-tight line-clamp-2 flex-1">
                          {news.href ? (
                            <Link
                              href={news.href}
                              className="hover:text-orange-600 transition-colors"
                            >
                              {news.title}
                            </Link>
                          ) : (
                            news.title
                          )}
                        </CardTitle>
                        {news.isNew && (
                          <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold">
                            New
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-end flex-grow">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">
                          {new Date(news.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })}
                        </span>
                        {news.href && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-[10px] sm:text-xs px-2 py-0.5 h-5 sm:h-6 hover:bg-orange-100 hover:text-orange-700"
                            asChild
                            aria-label="Read more"
                          >
                            <Link href={news.href}>
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

            {/* Nav buttons – smaller top margin */}
            <div className="flex items-center justify-center gap-3 mt-4 lg:mt-6 ">
              <Button
                onClick={() => swiperRef.current?.slidePrev()}
                disabled={isBeginning}
                variant="outline"
                size="icon"
                className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all hover:cursor-pointer ${
                  isBeginning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-50 hover:border-orange-300 hover:scale-105"
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
              </Button>

              <Button
                onClick={() => swiperRef.current?.slideNext()}
                disabled={isEnd}
                variant="outline"
                size="icon"
                className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all hover:cursor-pointer ${
                  isEnd
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-orange-50 hover:border-orange-300 hover:scale-105"
                }`}
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

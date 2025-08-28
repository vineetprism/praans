
'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Download,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Keep your ShadCN UI primitives if you want the same look
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// 👉 Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Sample news data (unchanged)
const newsUpdates = [
  {
    category: "Regulatory Update",
    title: "New GDPR Guidelines Released for Data Processing",
    date: "2024-03-15",
    isNew: true,
    href: "/updates/gdpr-guidelines",
    downloadUrl: "/downloads/gdpr-guide.pdf"
  },
  {
    category: "Policy Change",
    title: "Updated Compliance Framework for Financial Services",
    date: "2024-03-10",
    isNew: true,
    href: "/updates/financial-compliance"
  },
  {
    category: "Industry News",
    title: "SOX Compliance Requirements Updated for 2024",
    date: "2024-03-08",
    isNew: false,
    href: "/updates/sox-2024",
    downloadUrl: "/downloads/sox-requirements.pdf"
  },
  {
    category: "Alert",
    title: "Critical Security Patch Available",
    date: "2024-03-05",
    isNew: true,
    href: "/updates/security-patch"
  },
  {
    category: "Training",
    title: "New Compliance Training Modules Released",
    date: "2024-03-01",
    isNew: false,
    href: "/updates/training-modules",
    downloadUrl: "/downloads/training-guide.pdf"
  },
  {
    category: "Announcement",
    title: "Platform Maintenance Scheduled",
    date: "2024-02-28",
    isNew: false,
    href: "/updates/maintenance"
  },
  {
    category: "Feature Update",
    title: "Enhanced Reporting Dashboard Now Available",
    date: "2024-02-25",
    isNew: true,
    href: "/updates/reporting-dashboard"
  },
  {
    category: "Regulatory Update",
    title: "ISO 27001 Certification Requirements Updated",
    date: "2024-02-20",
    isNew: false,
    href: "/updates/iso-27001",
    downloadUrl: "/downloads/iso-guide.pdf"
  }
];

const NewsCarouselSection = () => {
  // Refs for custom navigation buttons
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
 
      {/* Header */}
<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
  <div>
    <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-foreground">
      Latest Updates
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground">
      Stay informed with the most recent compliance news
    </p>
  </div>

  {/* Search + Button (replacing View All Updates) */}
  <form
    action="/updates"
    method="GET"
    className="w-full md:w-auto flex items-center gap-2"
    aria-label="Search updates"
  >
    <input
      type="text"
      name="q"
      placeholder="Search updates…"
      className="w-full md:w-72 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
      aria-label="Search query"
    />
    <Button
      type="submit"
      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
      aria-label="Search"
    >
      Search
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </form>
</div>
        {/* Swiper Carousel */}
        <div className="relative b">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // autoplay setup
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={newsUpdates.length > 4}
            speed={450}
            spaceBetween={16}
            // responsive slidesPerView
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            // custom navigation via refs
            onBeforeInit={(swiper) => {
              // @ts-ignore - Swiper types are a bit strict here
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            className="!pb-10" // add bottom room for bullets
          >
            {newsUpdates.map((news, index) => (
              <SwiperSlide key={index}>
                <Card className="border-l-4 bg-orange-200 border-l-orange-500 hover:shadow-md transition-shadow duration-200 h-[160px] flex flex-col">
                  <CardHeader className="pb-2 p-4 flex-shrink-0">
                    <CardTitle className="text-sm leading-tight hover:text-orange-500 transition-colors duration-200 line-clamp-2 min-h-[2.5rem]">
                      {news.href ? (
                        <Link href={news.href} className="hover:text-orange-500" aria-label={news.title}>
                          {news.title}
                        </Link>
                      ) : (
                        news.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 flex flex-col justify-between flex-grow">
                    <div className="flex-grow" />
                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <span className="text-sm text-muted-foreground">
                        {new Date(news.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric'
                        })}
                      </span>
                      <div className="flex gap-1 flex-shrink-0">
                        {news.href && (
                          <Button size="sm" variant="ghost" className="text-xs px-2 py-1 h-7" asChild aria-label="Read">
                            <Link href={news.href}>
                              Read <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                          </Button>
                        )}
                       
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Controls */}
          <div className="flex items-center justify-center md:justify-end gap-2 mt-6 md:mt-8">
            <Button
              ref={prevRef}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              ref={nextRef}
              variant="outline"
              size="icon"
              className="rounded-full"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarouselSection;

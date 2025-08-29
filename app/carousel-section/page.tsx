

'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const newsUpdates = [
  {  title: 'New GDPR Guidelines Released for Data Processing', date: '2024-03-15', isNew: true, href: '/updates/gdpr-guidelines', downloadUrl: '/downloads/gdpr-guide.pdf' },
  { title: 'Updated Compliance Framework for Financial Services', date: '2024-03-10', isNew: true, href: '/updates/financial-compliance' },
  {  title: 'SOX Compliance Requirements Updated for 2024', date: '2024-03-08', isNew: false, href: '/updates/sox-2024', downloadUrl: '/downloads/sox-requirements.pdf' },
  {title: 'Critical Security Patch Available', date: '2024-03-05', isNew: true, href: '/updates/security-patch' },
  { title: 'New Compliance Training Modules Released', date: '2024-03-01', isNew: false, href: '/updates/training-modules', downloadUrl: '/downloads/training-guide.pdf' },
  {  title: 'Platform Maintenance Scheduled', date: '2024-02-28', isNew: false, href: '/updates/maintenance' },
  {title: 'Enhanced Reporting Dashboard Now Available', date: '2024-02-25', isNew: true, href: '/updates/reporting-dashboard' },
  { title: 'ISO 27001 Certification Requirements Updated', date: '2024-02-20', isNew: false, href: '/updates/iso-27001', downloadUrl: '/downloads/iso-guide.pdf' },
];

const NewsCarouselSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section >
      {/* Full width on 2xl to remove side gaps; keep light padding */}
      <div className="mx-auto w-full px-4 md:px-6 md:pt-20 lg:px-8 2xl:px-20 2xl:my-17 max-w-6xl 2xl:max-w-none">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-3 md:mb-4 text-foreground">
              Latest Updates
            </h2>
            <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground">
              Stay informed with the most recent compliance news
            </p>
          </div>

          <div className="w-full md:w-auto space-y-3">
            {/* Search */}
            <form action="/updates" method="GET" className="flex items-center gap-2" aria-label="Search updates">
              <input
                type="text"
                name="q"
                placeholder="Search updates…"
                className="w-full md:w-72 2xl:w-[28rem] px-3 py-2 2xl:py-3 border rounded-lg text-sm 2xl:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Search query"
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 2xl:px-6 2xl:py-3 rounded-lg text-sm 2xl:text-base font-semibold"
                aria-label="Search"
              >
                Search
                <ArrowRight className="ml-1 h-2 w-3 2xl:h-5 2xl:w-5" />
              </Button>
            </form>

            {/* Newsletter Subscription */}
            <form action="/newsletter-subscribe" method="POST" className="flex items-center gap-2" aria-label="Newsletter subscription">
              <input
                type="email"
                name="email"
                placeholder="Your email..."
                required
                className="w-full md:w-72 2xl:w-[28rem] px-3 py-2 2xl:py-3 border rounded-lg text-sm 2xl:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 2xl:px-6 2xl:py-3 rounded-lg text-sm 2xl:text-base font-semibold whitespace-nowrap"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Swiper */}
        <div className="relative ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop={newsUpdates.length > 6}
            speed={450}
            // Spread more on big screens
            breakpoints={{
              0:    { slidesPerView: 1, spaceBetween: 12 },
              640:  { slidesPerView: 2, spaceBetween: 14 },
              768:  { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 4, spaceBetween: 16 },
              1440: { slidesPerView: 5, spaceBetween: 22 }, // 2xl
              1680: { slidesPerView: 6, spaceBetween: 24 }, // wider desktops
              1920: { slidesPerView: 6, spaceBetween: 28 }, // ultrawide
            }}
            onSwiper={(swiper) => {
              // hook custom nav
              // @ts-expect-error Swiper typing for navigation refs is loose
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="!pb-10"
          >
            {newsUpdates.map((news, index) => (
              <SwiperSlide key={index}>
                <Card
                  className="
                    border-l-4 bg-orange-200 border-l-orange-500 hover:shadow-md transition-shadow duration-200
                    h-[160px] sm:h-[180px] md:h-[200px] 2xl:h-[190px]
                    flex flex-col
                  "
                >
                  <CardHeader className="pb-2 p-4 2xl:p-5 flex-shrink-0">
                    <CardTitle
                      className="
                        text-sm sm:text-base md:text-[1.05rem] 2xl:text-lg
                        leading-tight hover:text-orange-500 transition-colors duration-200 line-clamp-2
                        min-h-[2.5rem] 2xl:min-h-[3rem]
                      "
                    >
                      {news.href ? (
                        <Link href={news.href} className="hover:text-orange-500" aria-label={news.title}>
                          {news.title}
                        </Link>
                      ) : (
                        news.title
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 2xl:p-6 2xl:pt-0 flex flex-col justify-between flex-grow">
                    <div className="flex-grow" />
                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <span className="text-sm md:text-base 2xl:text-lg text-muted-foreground">
                        {new Date(news.date).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: '2-digit',
                          year: 'numeric',
                        })}
                      </span>
                      <div className="flex gap-1 flex-shrink-0">
                        {news.href && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-xs sm:text-sm 2xl:text-base px-2 sm:px-3 2xl:px-4 py-1 h-7 2xl:h-9"
                            asChild
                            aria-label="Read"
                          >
                            <Link href={news.href}>
                              Read <ArrowRight className="ml-1 w-3 h-3 2xl:w-4 2xl:h-4" />
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

          {/* Custom Navigation */}
          <div className="flex items-center justify-center md:justify-end gap-2 mt-6 md:mt-8">
            <Button ref={prevRef} variant="outline" size="icon" className="rounded-full h-9 w-9 2xl:h-12 2xl:w-12" aria-label="Previous">
              <ChevronLeft className="h-4 w-4 2xl:h-6 2xl:w-6" />
            </Button>
            <Button ref={nextRef} variant="outline" size="icon" className="rounded-full h-9 w-9 2xl:h-12 2xl:w-12" aria-label="Next">
              <ChevronRight className="h-4 w-4 2xl:h-6 2xl:w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCarouselSection;
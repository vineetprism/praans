'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Download, 
  Star, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sample news data
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

// Enhanced Carousel Hook with responsive support
const useCarousel = (itemsCount: number) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  
  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);
  
  const maxIndex = Math.max(0, itemsCount - itemsPerView);
  
  const next = React.useCallback(() => {
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  }, [maxIndex]);
  
  const prev = React.useCallback(() => {
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  }, [maxIndex]);
  
  const goTo = React.useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);
  
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || maxIndex === 0) return;
    
    const interval = setInterval(() => {
      next();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [next, isAutoPlaying, maxIndex]);
  
  return {
    currentIndex,
    next,
    prev,
    goTo,
    canGoNext: currentIndex < maxIndex,
    canGoPrev: currentIndex > 0,
    setIsAutoPlaying,
    itemsPerView,
    maxIndex
  };
};

// Main News Carousel Component
const NewsCarouselSection = () => {
  const containerRef = useRef(null);
  const { 
    currentIndex, 
    next, 
    prev, 
    goTo,
    canGoNext, 
    canGoPrev, 
    setIsAutoPlaying,
    itemsPerView,
    maxIndex
  } = useCarousel(newsUpdates.length);
  
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  
  // Calculate number of dots needed
  const totalDots = Math.ceil(newsUpdates.length / itemsPerView);
  const currentDot = Math.floor(currentIndex / itemsPerView);
  
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
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
          <Button variant="outline" className="w-full md:w-auto" asChild aria-label='View All Updates'>
            <Link href="/updates" aria-label='View All Updates'>
              View All Updates
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Enhanced Carousel */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={containerRef}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
            }}
          >
            {newsUpdates.map((news, index) => (
              <div
                key={index}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 16 / itemsPerView}px)` }}
              >
                <Card className="border-l-4 border-l-orange-500 hover:shadow-md transition-shadow duration-200 h-[200px] flex flex-col">
                  <CardHeader className="pb-2 p-4 flex-shrink-0">
                    <div className="flex items-center justify-between mb-2 gap-2">
                      <Badge variant="secondary" className="text-xs px-2 py-1 truncate">
                        {news.category}
                      </Badge>
                      {news.isNew && (
                        <Badge className="bg-green-500 text-white hover:bg-green-600 text-xs px-2 py-1 flex-shrink-0">
                          <Star className="w-3 h-3 mr-1" />
                          New
                        </Badge>
                      )}
                    </div>
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
                    <div className="flex-grow"></div>
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
                        {news.downloadUrl && (
                          <Button size="sm" variant="ghost" className="text-xs px-2 py-1 h-7" asChild aria-label="Download">
                            <Link href={news.downloadUrl}>
                              <Download className="w-3 h-3 mr-1" /> PDF
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        {maxIndex > 0 && (
          <>
            <div className="flex items-center justify-center md:justify-end gap-2 mt-6 md:mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                disabled={!canGoPrev}
                className="rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                disabled={!canGoNext}
                className="rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {Array.from({ length: totalDots }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index * itemsPerView)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentDot === index 
                      ? 'bg-orange-500' 
                      : 'bg-muted hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsCarouselSection;


// 'use client';

// import React, { useRef } from 'react';
// import Link from 'next/link';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const newsUpdates = [
//   {  title: 'New GDPR Guidelines Released for Data Processing', date: '2024-03-15', isNew: true, href: '/updates/gdpr-guidelines', downloadUrl: '/downloads/gdpr-guide.pdf' },
//   { title: 'Updated Compliance Framework for Financial Services', date: '2024-03-10', isNew: true, href: '/updates/financial-compliance' },
//   {  title: 'SOX Compliance Requirements Updated for 2024', date: '2024-03-08', isNew: false, href: '/updates/sox-2024', downloadUrl: '/downloads/sox-requirements.pdf' },
//   {title: 'Critical Security Patch Available', date: '2024-03-05', isNew: true, href: '/updates/security-patch' },
//   { title: 'New Compliance Training Modules Released', date: '2024-03-01', isNew: false, href: '/updates/training-modules', downloadUrl: '/downloads/training-guide.pdf' },
//   {  title: 'Platform Maintenance Scheduled', date: '2024-02-28', isNew: false, href: '/updates/maintenance' },
//   {title: 'Enhanced Reporting Dashboard Now Available', date: '2024-02-25', isNew: true, href: '/updates/reporting-dashboard' },
//   { title: 'ISO 27001 Certification Requirements Updated', date: '2024-02-20', isNew: false, href: '/updates/iso-27001', downloadUrl: '/downloads/iso-guide.pdf' },
// ];

// const NewsCarouselSection: React.FC = () => {
//   const prevRef = useRef<HTMLButtonElement | null>(null);
//   const nextRef = useRef<HTMLButtonElement | null>(null);

//   return (
//     <section >
//       {/* Full width on 2xl to remove side gaps; keep light padding */}
//       <div className="mx-auto w-full px-4 md:px-6 md:pt-20 lg:px-8 2xl:px-20 2xl:my-17 max-w-6xl 2xl:max-w-none">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
//           <div>
//             <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-3 md:mb-4 text-foreground">
//               Latest Updates
//             </h2>
//             <p className="text-lg md:text-xl 2xl:text-2xl text-muted-foreground">
//               Stay informed with the most recent compliance news
//             </p>
//           </div>

//           <div className="w-full md:w-auto space-y-3">
//             {/* Search */}
//             <form action="/updates" method="GET" className="flex items-center gap-2" aria-label="Search updates">
//               <input
//                 type="text"
//                 name="q"
//                 placeholder="Search updates…"
//                 className="w-full md:w-72 2xl:w-[28rem] px-3 py-2 2xl:py-3 border rounded-lg text-sm 2xl:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 aria-label="Search query"
//               />
//               <Button
//                 type="submit"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 2xl:px-6 2xl:py-3 rounded-lg text-sm 2xl:text-base font-semibold"
//                 aria-label="Search"
//               >
//                 Search
//                 <ArrowRight className="ml-1 h-2 w-3 2xl:h-5 2xl:w-5" />
//               </Button>
//             </form>

//             {/* Newsletter Subscription */}
//             <form action="/newsletter-subscribe" method="POST" className="flex items-center gap-2" aria-label="Newsletter subscription">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email..."
//                 required
//                 className="w-full md:w-72 2xl:w-[28rem] px-3 py-2 2xl:py-3 border rounded-lg text-sm 2xl:text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
//                 aria-label="Email for newsletter"
//               />
//               <Button
//                 type="submit"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 2xl:px-6 2xl:py-3 rounded-lg text-sm 2xl:text-base font-semibold whitespace-nowrap"
//                 aria-label="Subscribe to newsletter"
//               >
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Swiper */}
//         <div className="relative ">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
//             loop={newsUpdates.length > 6}
//             speed={450}
//             // Spread more on big screens
//             breakpoints={{
//               0:    { slidesPerView: 1, spaceBetween: 12 },
//               640:  { slidesPerView: 2, spaceBetween: 14 },
//               768:  { slidesPerView: 3, spaceBetween: 16 },
//               1024: { slidesPerView: 4, spaceBetween: 16 },
//               1440: { slidesPerView: 5, spaceBetween: 22 }, // 2xl
//               1680: { slidesPerView: 6, spaceBetween: 24 }, // wider desktops
//               1920: { slidesPerView: 6, spaceBetween: 28 }, // ultrawide
//             }}
//             onSwiper={(swiper) => {
//               // hook custom nav
//               // @ts-expect-error Swiper typing for navigation refs is loose
//               swiper.params.navigation.prevEl = prevRef.current;
//               // @ts-expect-error
//               swiper.params.navigation.nextEl = nextRef.current;
//               swiper.navigation.init();
//               swiper.navigation.update();
//             }}
//             navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//             pagination={{ clickable: true, dynamicBullets: true }}
//             className="!pb-10"
//           >
//             {newsUpdates.map((news, index) => (
//               <SwiperSlide key={index}>
//                 <Card
//   className="
//     border-l-4 bg-orange-200 border-l-orange-500 hover:shadow-md transition-shadow duration-200
//     h-[160px] sm:h-[170px] md:h-[135px] lg:h-[145px] 2xl:h-[190px]
//     flex flex-col
//   "
// >
//   <CardHeader
//     className="
//       p-4 pb-2
//       sm:p-4 sm:pb-2
//       md:p-3 md:pb-1
//       lg:p-3 lg:pb-1
//       2xl:p-5 2xl:pb-2
//       flex-shrink-0
//     "
//   >
//     <CardTitle
//       className="
//         text-sm sm:text-[0.95rem] md:text-[0.9rem] lg:text-[0.95rem] 2xl:text-lg
//         leading-tight hover:text-orange-500 transition-colors duration-200 line-clamp-2
//         min-h-[2.25rem] md:min-h-[2rem] lg:min-h-[2.25rem] 2xl:min-h-[3rem]
//       "
//     >
//       {news.href ? (
//         <Link href={news.href} className="hover:text-orange-500" aria-label={news.title}>
//           {news.title}
//         </Link>
//       ) : (
//         news.title
//       )}
//     </CardTitle>
//   </CardHeader>

//   <CardContent
//     className="
//       p-4 pt-0
//       md:p-3 md:pt-0
//       lg:p-3 lg:pt-0
//       2xl:p-6 2xl:pt-0
//       flex flex-col justify-between flex-grow
//     "
//   >
//     <div className="flex-grow" />
//     <div className="flex items-center justify-between gap-2 mt-auto">
//       <span className="text-sm md:text-[13px] lg:text-sm 2xl:text-lg text-muted-foreground">
//         {new Date(news.date).toLocaleDateString('en-GB', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric',
//         })}
//       </span>

//       <div className="flex gap-1 flex-shrink-0">
//         {news.href && (
//           <Button
//             size="sm"
//             variant="ghost"
//             className="
//               text-[11px] sm:text-xs md:text-xs lg:text-xs 2xl:text-base
//               px-2 sm:px-2 md:px-2 lg:px-2 2xl:px-4
//               py-1
//               h-6 sm:h-6 md:h-7 lg:h-7 2xl:h-9
//             "
//             asChild
//             aria-label="Read"
//           >
//             <Link href={news.href}>
//               Read <ArrowRight className="ml-1 w-3 h-3 md:w-3 md:h-3 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4" />
//             </Link>
//           </Button>
//         )}
//       </div>
//     </div>
//   </CardContent>
// </Card>

//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation */}
//           <div className="flex items-center justify-center md:justify-end gap-2 mt-6 md:mt-8">
//             <Button ref={prevRef} variant="outline" size="icon" className="rounded-full h-9 w-9 2xl:h-12 2xl:w-12" aria-label="Previous">
//               <ChevronLeft className="h-4 w-4 2xl:h-6 2xl:w-6" />
//             </Button>
//             <Button ref={nextRef} variant="outline" size="icon" className="rounded-full h-9 w-9 2xl:h-12 2xl:w-12" aria-label="Next">
//               <ChevronRight className="h-4 w-4 2xl:h-6 2xl:w-6" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewsCarouselSection;





// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import type { Swiper as SwiperType } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Custom styles for pagination
// const paginationStyles = `
//   .swiper-pagination-bullet {
//     background-color: #f97316 !important;
//     opacity: 0.4;
//   }
//   .swiper-pagination-bullet-active {
//     background-color: #ea580c !important;
//     opacity: 1;
//   }
// `;

// const newsUpdates = [
//   { title: 'New GDPR Guidelines Released for Data Processing', date: '2024-03-15', isNew: true, href: '/updates/gdpr-guidelines', downloadUrl: '/downloads/gdpr-guide.pdf' },
//   { title: 'Updated Compliance Framework for Financial Services', date: '2024-03-10', isNew: true, href: '/updates/financial-compliance' },
//   { title: 'SOX Compliance Requirements Updated for 2024', date: '2024-03-08', isNew: false, href: '/updates/sox-2024', downloadUrl: '/downloads/sox-requirements.pdf' },
//   { title: 'Critical Security Patch Available', date: '2024-03-05', isNew: true, href: '/updates/security-patch' },
//   { title: 'New Compliance Training Modules Released', date: '2024-03-01', isNew: false, href: '/updates/training-modules', downloadUrl: '/downloads/training-guide.pdf' },
//   { title: 'Platform Maintenance Scheduled', date: '2024-02-28', isNew: false, href: '/updates/maintenance' },
//   { title: 'Enhanced Reporting Dashboard Now Available', date: '2024-02-25', isNew: true, href: '/updates/reporting-dashboard' },
//   { title: 'ISO 27001 Certification Requirements Updated', date: '2024-02-20', isNew: false, href: '/updates/iso-27001', downloadUrl: '/downloads/iso-guide.pdf' },
// ];

// const NewsCarouselSection: React.FC = () => {
//   const swiperRef = useRef<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   const handlePrevClick = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slidePrev();
//     }
//   };

//   const handleNextClick = () => {
//     if (swiperRef.current) {
//       swiperRef.current.slideNext();
//     }
//   };

//   const handleSlideChange = (swiper: SwiperType) => {
//     setIsBeginning(swiper.isBeginning);
//     setIsEnd(swiper.isEnd);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
//       <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-12 gap-6 lg:gap-8">
//           {/* Title Section */}
//           <div className="flex-1">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground leading-tight">
//               Latest Updates
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground">
//               Stay informed with the most recent compliance news
//             </p>
//           </div>

//           {/* Forms Section */}
//           <div className="w-full lg:w-auto lg:min-w-[300px] xl:min-w-[400px] space-y-4">
//             {/* Search Form */}
//             <form action="/updates" method="GET" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//               <input
//                 type="text"
//                 name="q"
//                 placeholder="Search updates..."
//                 className="flex-1 min-w-0 px-3 py-2.5 lg:py-3 border border-gray-300 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 aria-label="Search query"
//               />
//               <Button
//                 type="submit"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 lg:py-3 rounded-lg text-sm lg:text-base font-semibold whitespace-nowrap transition-colors"
//                 aria-label="Search"
//               >
//                 Search
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Button>
//             </form>

//             {/* Newsletter Form */}
//             <form action="/newsletter-subscribe" method="POST" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your email..."
//                 required
//                 className="flex-1 min-w-0 px-3 py-2.5 lg:py-3 border border-gray-300 rounded-lg text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 aria-label="Email for newsletter"
//               />
//               <Button
//                 type="submit"
//                 className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 lg:py-3 rounded-lg text-sm lg:text-base font-semibold whitespace-nowrap transition-colors"
//                 aria-label="Subscribe to newsletter"
//               >
//                 Subscribe
//               </Button>
//             </form>
//           </div>
//         </div>

//         {/* Carousel Section */}
//         <div className="relative">
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             onSwiper={(swiper) => {
//               swiperRef.current = swiper;
//             }}
//             onSlideChange={handleSlideChange}
//             autoplay={{ 
//               delay: 5000, 
//               disableOnInteraction: false, 
//               pauseOnMouseEnter: true 
//             }}
//             loop={newsUpdates.length > 4}
//             speed={600}
//             spaceBetween={16}
//             slidesPerView={1}
//             breakpoints={{
//               // Mobile (>= 640px)
//               640: {
//                 slidesPerView: 2,
//                 spaceBetween: 16,
//               },
//               // Tablet (>= 768px)
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 20,
//               },
//               // Desktop (>= 1024px)
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 24,
//               },
//               // Large Desktop (>= 1280px)
//               1280: {
//                 slidesPerView: 4,
//                 spaceBetween: 24,
//               },
//               // Extra Large (>= 1536px)
//               1536: {
//                 slidesPerView: 5,
//                 spaceBetween: 28,
//               }
//             }}
//             pagination={{ 
//               clickable: true, 
//               dynamicBullets: true
//             }}
//             className="!pb-12 md:!pb-14"
//           >
//             {newsUpdates.map((news, index) => (
//               <SwiperSlide key={index} className="h-auto">
//                 <Card className="border-l-4 bg-gradient-to-br from-orange-50 to-orange-100 border-l-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
//                   <CardHeader className="p-4 pb-2 flex-shrink-0">
//                     <div className="flex items-start justify-between gap-2 mb-2">
//                       <CardTitle className="text-sm sm:text-base lg:text-lg leading-tight hover:text-orange-600 transition-colors duration-200 line-clamp-3 flex-1">
//                         {news.href ? (
//                           <Link 
//                             href={news.href} 
//                             className="hover:text-orange-600 block" 
//                             aria-label={news.title}
//                           >
//                             {news.title}
//                           </Link>
//                         ) : (
//                           news.title
//                         )}
//                       </CardTitle>
//                       {news.isNew && (
//                         <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold flex-shrink-0">
//                           New
//                         </span>
//                       )}
//                     </div>
//                   </CardHeader>

//                   <CardContent className="p-4 pt-0 flex flex-col justify-between flex-grow">
//                     <div className="flex-grow" />
//                     <div className="flex items-center justify-between gap-3 mt-4">
//                       <span className="text-xs sm:text-sm text-muted-foreground font-medium">
//                         {new Date(news.date).toLocaleDateString('en-GB', {
//                           day: '2-digit',
//                           month: '2-digit',
//                           year: 'numeric',
//                         })}
//                       </span>

//                       <div className="flex gap-2 flex-shrink-0">
//                         {news.downloadUrl && (
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="text-xs px-3 py-1 h-7 hover:bg-orange-100 hover:text-orange-700 transition-colors"
//                             asChild
//                             aria-label="Download"
//                           >
//                             <Link href={news.downloadUrl}>
//                               Download
//                             </Link>
//                           </Button>
//                         )}
//                         {news.href && (
//                           <Button
//                             size="sm"
//                             variant="ghost"
//                             className="text-xs px-3 py-1 h-7 hover:bg-orange-100 hover:text-orange-700 transition-colors"
//                             asChild
//                             aria-label="Read more"
//                           >
//                             <Link href={news.href}>
//                               Read
//                               <ArrowRight className="ml-1 w-3 h-3" />
//                             </Link>
//                           </Button>
//                         )}
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Buttons */}
//           <div className="flex items-center justify-center gap-3 mt-6 lg:mt-8">
//             <Button 
//               onClick={handlePrevClick}
//               disabled={isBeginning}
//               variant="outline" 
//               size="icon" 
//               className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all duration-200 ${
//                 isBeginning 
//                   ? 'opacity-50 cursor-not-allowed' 
//                   : 'hover:bg-orange-50 hover:border-orange-300 hover:scale-105'
//               }`}
//               aria-label="Previous slide"
//             >
//               <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
//             </Button>
            
//             <Button 
//               onClick={handleNextClick}
//               disabled={isEnd}
//               variant="outline" 
//               size="icon" 
//               className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all duration-200 ${
//                 isEnd 
//                   ? 'opacity-50 cursor-not-allowed' 
//                   : 'hover:bg-orange-50 hover:border-orange-300 hover:scale-105'
//               }`}
//               aria-label="Next slide"
//             >
//               <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
//             </Button>
//           </div>

//           {/* View All Link */}
//           <div className="text-center mt-8">
//             <Button
//               variant="outline"
//               className="bg-white hover:bg-orange-50 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base font-semibold transition-all duration-200"
//               asChild
//             >
//               <Link href="/updates">
//                 View All Updates
//                 <ArrowRight className="ml-2 h-4 w-4" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// };

// export default NewsCarouselSection;












'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Custom styles for pagination
const paginationStyles = `
  .swiper-pagination-bullet {
    background-color: #f97316 !important;
    opacity: 0.4;
  }
  .swiper-pagination-bullet-active {
    background-color: #ea580c !important;
    opacity: 1;
  }
`;

const newsUpdates = [
  { title: 'New GDPR Guidelines Released for Data Processing', date: '2024-03-15', isNew: true, href: '/updates/gdpr-guidelines' },
  { title: 'Updated Compliance Framework for Financial Services', date: '2024-03-10', isNew: true, href: '/updates/financial-compliance' },
  { title: 'SOX Compliance Requirements Updated for 2024', date: '2024-03-08', isNew: false, href: '/updates/sox-2024' },
  { title: 'Critical Security Patch Available', date: '2024-03-05', isNew: true, href: '/updates/security-patch' },
  { title: 'New Compliance Training Modules Released', date: '2024-03-01', isNew: false, href: '/updates/training-modules' },
  { title: 'Platform Maintenance Scheduled', date: '2024-02-28', isNew: false, href: '/updates/maintenance' },
  { title: 'Enhanced Reporting Dashboard Now Available', date: '2024-02-25', isNew: true, href: '/updates/reporting-dashboard' },
  { title: 'ISO 27001 Certification Requirements Updated', date: '2024-02-20', isNew: false, href: '/updates/iso-27001' },
];

const NewsCarouselSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: paginationStyles }} />
      <section className="w-full py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 lg:mb-12 gap-6 lg:gap-8">
          {/* Title Section */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-4xl font-bold mb-2 2xl:mb-3 text-slate-900 leading-tight">
              Latest Updates
            </h2>
            <p className="text-xs sm:text-sm md:text-[1rem] lg:text-base 2xl:text-lg text-gray-700 max-w-2xl 2xl:max-w-3xl leading-snug 2xl:leading-relaxed">
              Stay informed with the most recent compliance news
            </p>
          </div>


          {/* Forms Section */}
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

        {/* Carousel Section */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={handleSlideChange}
            autoplay={{ 
              delay: 5000, 
              disableOnInteraction: false, 
              pauseOnMouseEnter: true 
            }}
            loop={newsUpdates.length > 4}
            speed={600}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              // Mobile (>= 480px)
              480: {
                slidesPerView: 2,
                spaceBetween: 12,
              },
              // Small Tablet (>= 640px)
              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              // Tablet (>= 768px)
              768: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
              // Desktop (>= 1024px)
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              // Large Desktop (>= 1280px)
              1280: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              // Extra Large (>= 1536px)
              1536: {
                slidesPerView: 7,
                spaceBetween: 24,
              }
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true
            }}
            className="!pb-12 md:!pb-14"
          >
            {newsUpdates.map((news, index) => (
              <SwiperSlide key={index}>
                <Card className="border-l-4 bg-gradient-to-br from-orange-50 to-orange-100 border-l-orange-500 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 h-[140px] sm:h-[130px] md:h-[120px] lg:h-[125px] xl:h-[130px] flex flex-col">
                  <CardHeader className="p-3 pb-1 flex-shrink-0">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-xs sm:text-sm md:text-xs lg:text-sm leading-tight hover:text-orange-600 transition-colors duration-200 line-clamp-2 flex-1">
                        {news.href ? (
                          <Link 
                            href={news.href} 
                            className="hover:text-orange-600 block" 
                            aria-label={news.title}
                          >
                            {news.title}
                          </Link>
                        ) : (
                          news.title
                        )}
                      </CardTitle>
                      {news.isNew && (
                        <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-semibold flex-shrink-0">
                          New
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className=" flex flex-col justify-end flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] sm:text-xs text-muted-foreground font-medium">
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
                            className="text-[10px] sm:text-xs px-2 py-0.5 h-5 sm:h-6 hover:bg-orange-100 hover:text-orange-700 transition-colors"
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
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex items-center justify-center gap-3 mt-6 lg:mt-8">
            <Button 
              onClick={handlePrevClick}
              disabled={isBeginning}
              variant="outline" 
              size="icon" 
              className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all duration-200 ${
                isBeginning 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-orange-50 hover:border-orange-300 hover:scale-105'
              }`}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            
            <Button 
              onClick={handleNextClick}
              disabled={isEnd}
              variant="outline" 
              size="icon" 
              className={`rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 transition-all duration-200 ${
                isEnd 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:bg-orange-50 hover:border-orange-300 hover:scale-105'
              }`}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="bg-white hover:bg-orange-50 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 px-6 py-2 lg:px-8 lg:py-3 text-sm lg:text-base font-semibold transition-all duration-200"
              asChild
            >
            </Button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default NewsCarouselSection;


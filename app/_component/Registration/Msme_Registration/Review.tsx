"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Review = {
  name: string;
  date: string;
  text: string;
  avatar: string;
  stars: number;
};

const REVIEWS: Review[] = [
  {
    name: "Sachin Sharma",
    date: "2025-05-15",
    text: "Best Consultant for FSSAI and GST Registration.",
    avatar: "", // no local file yet -> will show "S"
    stars: 4,
  },
  {
    name: "Subodh Excel",
    date: "2025-05-14",
    text: "One of the best compliance consultancy.",
    avatar: "", // no local file yet -> will show "S"
    stars: 5,
  },
  {
    name: "Pankaj Sharma",
    date: "2025-05-14",
    text: "Best labour law consultant. Highly recommended.",
    avatar: "/testimonial/pankaj.png",
    stars: 5,
  },
  {
    name: "Nishita Jain",
    date: "2025-05-11",
    text: "We've had a great experience working with Praans Consultech. Their legal guidance has been clear, prompt, and always solution-oriented. They bring a strong understanding of both compliance and business practicality, which has been invaluable to us. Highly recommended for anyone seeking reliable and professional legal support.",
    avatar: "/testimonial/nishita.png",
    stars: 5,
  },
  {
    name: "Kavita Gupta",
    date: "2025-05-10",
    text: "I took GST and Shop registration services for my family business from the Praans and we are very much satisfied.",
    avatar: "", // will show "K"
    stars: 4,
  },
  {
    name: "Sagar Malik",
    date: "2025-05-09",
    text: "Best labour law consultant in Haryana. I was in need of shop and establishment registration in Gurugram for my office, and Praans provided us within 2 days. Then I again approached for GST , PF , and ESI registration along with MSME. It was also provided within time.Very speedy process. The whole process was online. Now, Praaan Consultech is my all time labour law consultant.",
    avatar: "/testimonial/sagar.png",
    stars: 5,
  },
  {
    name: "Kunal Rana",
    date: "2025-05-09",
    text: "# Experienced staff # # Correct Advice # #Fast in process# # Best company in India for GST , FSSAI and Shop registration# # Highly recommended#",
    avatar: "/testimonial/kunal.png",
    stars: 5,
  },
];

const StarRow = ({ n }: { n: number }) => (
  <div className="flex items-center justify-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} className={i < n ? "text-amber-500" : "text-slate-300"}>
        ★
      </span>
    ))}
    <span className="ml-2 inline-block h-4 w-4 rounded-full bg-[#4285F4] text-[10px] leading-4 text-white text-center">
      ✓
    </span>
  </div>
);

const GoogleBadge = () => (
  <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-white shadow ring-1 ring-slate-200">
    <span className="grid h-4 w-4 place-items-center rounded-full bg-white text-[10px] font-extrabold text-[#4285F4] ring-1 ring-slate-200">
      G
    </span>
  </span>
);

function Avatar({
  name,
  src,
  size = 56,
  className = "h-14 w-14 object-cover",
}: {
  name: string;
  src?: string;
  size?: number;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  const initial = (name?.trim()?.[0] ?? "?").toUpperCase();

  if (!src || errored) {
    return (
      <div
        className="h-14 w-14 rounded-full bg-slate-100 text-slate-700 grid place-items-center font-semibold text-lg uppercase"
        aria-label={name}
        role="img"
      >
        {initial}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      onError={() => setErrored(true)}
      unoptimized={src.startsWith("/")}
      priority={false}
    />
  );
}

function ClampedText({
  text,
  expanded,
  onNeedsClamp,
}: {
  text: string;
  expanded: boolean;
  onNeedsClamp: (needs: boolean) => void;
}) {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const measure = () => {
      const el = pRef.current;
      if (!el) return;
      const prev = el.style.cssText;
      el.style.display = "-webkit-box";
      el.style.webkitLineClamp = "3";
      el.style.webkitBoxOrient = "vertical";
      el.style.overflow = "hidden";
      const needs = el.scrollHeight > el.clientHeight + 1;
      onNeedsClamp(needs);
      el.style.cssText = prev;
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text, onNeedsClamp]);

  const clampStyle: React.CSSProperties = expanded
    ? {}
    : {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      };

  return (
    <p
      ref={pRef}
      className="text-center text-[14px] leading-6 text-slate-700"
      style={clampStyle}
    >
      {text}
    </p>
  );
}

function Card({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const [needsClamp, setNeedsClamp] = useState(false);

  return (
    <div className="relative w-full">
      <div className="relative overflow-visible flex h-full min-h=[290px] min-h-[290px] flex-col justify-start rounded-2xl border border-slate-200 bg-white p-6 pt-20 shadow-[0_10px_34px_rgba(16,24,40,0.08)]">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white shadow-lg">
            <Avatar
              name={review.name}
              src={review.avatar}
              size={56}
              className="h-14 w-14 object-cover"
            />

            <GoogleBadge />
          </div>
        </div>

        <div className="mt-1 text-center">
          <div className="text-[15px] font-semibold capitalize text-slate-900">
            {review.name}
          </div>
          <div className="text-xs text-slate-500">{review.date}</div>
        </div>

        <div className="mt-2">
          <StarRow n={review.stars} />
        </div>

        <div className="mt-3">
          <ClampedText
            text={review.text}
            expanded={expanded}
            onNeedsClamp={setNeedsClamp}
          />
        </div>

        <div className="flex-1" />

        {needsClamp && (
          <div className="mt-3 text-center">
            <button
              className="text-sm font-medium text-slate-500 hover:text-slate-700"
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* White round nav buttons — accept generic React refs */
function NavButtons({
  prevRef,
  nextRef,
}: {
  prevRef: React.Ref<HTMLButtonElement>;
  nextRef: React.Ref<HTMLButtonElement>;
}) {
  return (
    <>
      <button
        ref={prevRef}
        className="absolute left-2 md:left-4 top-1/2 z-20 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-700 shadow-[0_4px_18px_rgba(2,6,23,0.15)] ring-1 ring-slate-200 hover:bg-slate-50"
        aria-label="Previous"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Previous"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        ref={nextRef}
        className="absolute right-2 md:right-4 top-1/2 z-20 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white text-slate-700 shadow-[0_4px_18px_rgba(2,6,23,0.15)] ring-1 ring-slate-200 hover:bg-slate-50"
        aria-label="Next"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-label="Next"
        >
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </>
  );
}

type Feature = {
  title: string;
  img: string;
};

const FEATURES: Feature[] = [
  { title: "Quick and Easy Process", img: "/register/process.webp" },
  { title: "Free Expert Assistance", img: "/register/support.webp" },
  { title: "Affordable Prices", img: "/register/price.webp" },
  { title: "100% Compliance Guarantee", img: "/register/guarantee.webp" },
  { title: "Pay Service Charge", img: "/register/charge.webp" },
  { title: "Money Back Guarantee", img: "/register/money.webp" },
  { title: "ISO Certified", img: "/register/iso.webp" },
  { title: "15 years of experience", img: "/register/experince.webp" },
];

function BenefitsSection() {
  return (
    <section className="bg-white py-4 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[26px] sm:text-[30px] font-extrabold text-[#142a63]">
          Why Choose Us For MSME Registration ?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES?.map(({ title, img }) => (
            <div
              key={title}
              className="rounded-2xl bg-[#f7f8ff] ring-1 ring-slate-200 shadow-[0_8px_28px_rgba(2,6,23,0.06)] p-4 flex flex-col items-center justify-center text-center"
            >
              <Image
                unoptimized
                src={img}
                alt={title}
                width={96}
                height={96}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <p className="mt-4 font-semibold text-slate-900">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function TestimonialsThreeExact() {
  const loopSlides = useMemo(() => Math.max(REVIEWS.length, 6), []);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <style jsx global>{`
        .swiper {
          overflow-x: hidden !important;
          overflow-y: visible !important;
        }
        .swiper-wrapper,
        .swiper-slide {
          overflow: visible !important;
        }
      `}</style>

      <section className="bg-gray-50 py-4 sm:py-6">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <NavButtons prevRef={prevRef} nextRef={nextRef} />

          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            loopPreventsSliding={false}
            loopAdditionalSlides={loopSlides}
            autoplay={{
              delay: 2600,
              disableOnInteraction: false,
              reverseDirection: true,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav === "object") {
                nav.prevEl = prevRef.current!;
                nav.nextEl = nextRef.current!;
              } else {
                swiper.params.navigation = {
                  prevEl: prevRef.current!,
                  nextEl: nextRef.current!,
                };
              }
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            spaceBetween={28}
            centeredSlides={false}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="relative !pb-10"
          >
            {REVIEWS.map((r, idx) => (
              <SwiperSlide
                key={`rev-${idx}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`Testimonial ${idx + 1}`}
              >
                <Card review={r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <BenefitsSection />
    </>
  );
}

// "use client";

// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Bot, Crown } from "lucide-react";

// export default function HeroSection() {
//   return (
//      <section
//         className="relative min-h-[85vh] flex items-start justify-center 
//       pt-6 sm:pt-8 lg:pt-10 2xl:pt-16 
//       px-3 sm:px-5 lg:px-6 2xl:px-16 
//       bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden
     
//       "
//       >
//         {/* Background Elements */}
//         <div className="absolute inset-0 bg-orange-100/10" />
//         <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
//         <div
//           className="absolute top-8 sm:top-12 left-5 sm:left-10 
//         w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 2xl:w-40 2xl:h-40 
//         bg-orange-200/30 rounded-full blur-2xl animate-pulse"
//         />
//         <div
//           className="absolute bottom-8 sm:bottom-12 right-5 sm:right-10 
//         w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44 
//         bg-blue-200/30 rounded-full blur-2xl animate-pulse"
//         />

//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
//         w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 2xl:w-96 2xl:h-96 
//         bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-2xl"
//         />

//         {/* Content Container - Moderately broader on 2xl */}
//         <div
//           className="w-full max-w-5xl 2xl:max-w-8xl mx-auto text-center 
//         space-y-2 sm:space-y-3 2xl:space-y-6 relative z-10"
//         >
//           {/* Heading */}
//           <h1
//             className="text-xl sm:text-3xl md:text-3xl lg:text-[5.6rem] 2xl:text-[7.1rem]
//           font-black text-slate-900 tracking-tight leading-tight animate-fade-up"
//           >
//             Simplifying{" "}
//             <span className="relative inline-block">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
//                 Labour
//               </span>
//               <div
//                 className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
//               h-0.5 sm:h-1 2xl:h-1.5 
//               bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
//               />
//             </span>
//             <br className="block sm:hidden" />
//             <span className="relative inline-block">
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
//                 Law
//               </span>
//               <div
//                 className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
//               h-0.5 sm:h-1 2xl:h-1.5 
//               bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
//               />
//             </span>
//             <br />
//             <div className="text-slate-800 mt-1 2xl:mt-5 2xl:text-[6.9rem]">
//               Compliance
//             </div>
//             <p
//               className="text-sm sm:text-base md:text-2xl lg:text-4xl 2xl:text-6xl 
//             font-medium italic text-blue-600 "
//             >
//               for Your Business
//             </p>
//           </h1>

//           {/* Subtitle */}
//           <p
//             className="text-xs sm:text-sm md:text-base  lg:text-xl 2xl:text-4xl 
//           text-gray-700 max-w-xl 2xl:max-w-4xl mx-auto 
//           animate-fade-up delay-100 leading-snug 2xl:leading-normal px-3 2xl:px-6"
//           >
//             All-in-One Platform: Software, Legal Advisory, Registrations &amp;
//             More – PAN India
//           </p>

//           {/* AI ChatBot Badge */}
//           <div className="pt-2 sm:pt-3 lg:pt-4 2xl:pt-6">
//             <div
//               className="
//     relative inline-flex items-center
//     gap-2 sm:gap-2.5 lg:gap-3 2xl:gap-4
//     h-8 sm:h-9 md:h-10 lg:h-12 2xl:h-16
//     px-3 sm:px-4 lg:px-5 2xl:px-6
//     rounded-full ring-1 ring-orange-500/50
//     bg-gradient-to-r from-orange-600 to-red-600
//     text-white shadow-[0_12px_28px_rgba(234,88,12,0.25)]
//   "
//             >
//               <Bot className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-white/90" />
//               <span className="relative z-10 font-black tracking-tight text-[10px] sm:text-xs md:text-xl lg:text-2xl lg:py-30 2xl:text-4xl">
//                 India&apos;s First Labour Law Compliance AI ChatBot
//               </span>
//               <Crown className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-yellow-300" />
//             </div>
//           </div>

//           {/* CTA Buttons */}
//           <div
//             className="flex flex-col sm:flex-row gap-2 sm:gap-3 2xl:gap-4 
//           justify-center max-w-md 2xl:max-w-2xl mx-auto pt-2 2xl:pt-8"
//           >
//             <Button
//               size="sm"
//               className="bg-gradient-to-r  bg-blue-950 hover:bg-blue-900 
//               text-white text-xs sm:text-sm 2xl:text-xl 
//               px-4 sm:px-5 2xl:px-8 lg:h-10
//               py-3 sm:py-2.5 2xl:py-8 
//               shadow-md hover:shadow-orange-500/25 rounded-lg font-bold w-full sm:w-auto
//               "
//             >
//               Get a Free Demo Of Software
//               <ArrowRight className="ml-1 w-4 h-4 2xl:w-5 2xl:h-5" />
//             </Button>
//             <Button
//               size="sm"
//               className="text-white bg-blue-950 hover:bg-blue-900 
//               text-xs sm:text-sm 2xl:text-xl 
//               px-4 sm:px-5 2xl:px-8 
//               py-2 sm:py-2.5 2xl:py-8 
//               rounded-lg font-bold w-full sm:w-auto lg:h-10"
//             >
//               Talk to Our Compliance Experts
//             </Button>
//           </div>
//         </div>
//       </section>
//   );
// }











"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Crown } from "lucide-react";

export default function HeroSection() {
  return (
     <section
        className="
      relative min-h-screen flex items-center justify-center 
      pb-7 sm:pb:30 md:pb-10 lg:pb-20 2xl:pb-20
      px-4 sm:px-6 lg:px-8 2xl:px-16
      bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden
     
      "
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-orange-100/10" />
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/40 to-blue-100/20" />
        <div
          className="absolute top-8 sm:top-12 left-5 sm:left-10 
        w-14 h-14 sm:w-20 sm:h-20 lg:w-28 lg:h-28 2xl:w-40 2xl:h-40 
        bg-orange-200/30 rounded-full blur-2xl"
        />
        <div
          className="absolute bottom-8 sm:bottom-12 right-5 sm:right-10 
        w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 2xl:w-44 2xl:h-44 
        bg-blue-200/30 rounded-full blur-2xl"
        />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 2xl:w-96 2xl:h-96               
        bg-gradient-to-r from-orange-100/20 to-blue-100/20 rounded-full blur-2xl"
        />

        {/* Content Container - Moderately broader on 2xl */}
        <div
          className="w-full max-w-5xl 2xl:max-w-8xl mx-auto text-center 
        space-y-0.5 sm:space-y-6 md:space-y-5 lg:space-y-2 2xl:space-y-0.5 relative z-10"
        >
          {/* Heading */}
          <h1
            className="text-[2rem] sm:text-5xl md:text-6xl lg:text-[5rem] 2xl:text-8xl
          font-black text-slate-900 tracking-tight leading-tight"
          >
            Simplifying{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Labour
              </span>
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
              h-0.5 sm:h-1 2xl:h-1.5 
              bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
              />
            </span>
            <br className="block sm:hidden" />
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
                Law
              </span>
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 
              h-0.5 sm:h-1 2xl:h-1.5 
              bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60 blur-sm"
              />
            </span>
            <br />
            <div className="text-slate-800 mt-1 2xl:mt-5 2xl:text-[6.9rem]">
              Compliance
            </div>
            <p
              className="text-[25px] sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl 
            font-medium italic text-blue-600 mt-2 sm:mt-4 "
            >
              for Your Business
            </p>
          </h1>

          {/* Subtitle */}
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-4xl 
          text-gray-700 max-w-2xl 2xl:max-w-4xl mx-auto 
          animate-fade-up delay-100 leading-relaxed px-2 sm:px-4 2xl:px-6
          font-medium"
          >
            All-in-One Platform: Software, Legal Advisory, Registrations &amp;
            More – PAN India
          </p>

          {/* AI ChatBot Badge */}
          <div className="pt-1 sm:pt-6 md:pt-2 lg:pt-4 2xl:pt-10">
            <div
              className="
    relative inline-flex items-center
    gap-2 sm:gap-2.5 lg:gap-3 2xl:gap-4
    h-12 sm:h-9 md:h-10 lg:h-14 2xl:h-16
    px-3 sm:px-4 lg:px-5 2xl:px-6
    rounded-full ring-1 ring-orange-500/50
    bg-gradient-to-r from-orange-600 to-red-600
    text-white shadow-[0_12px_28px_rgba(234,88,12,0.25)]
  "
            >
              <Bot  className="w-10 h-10 sm:w-6 sm:h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8" />
              <span className="relative z-10 font-black tracking-tight text-[16px] sm:text-xs md:text-xl lg:text-2xl lg:py-30 2xl:text-4xl">
                India&apos;s First Labour Law Compliance AI ChatBot
              </span>
              <Crown className=" w-10 h-10 sm:w-5 sm:h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7 text-yellow-300" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 2xl:gap-6 
          justify-center max-w-lg sm:max-w-2xl 2xl:max-w-3xl mx-auto 
          pt-6 sm:pt-8 2xl:pt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r  bg-blue-950 hover:bg-blue-900 
              text-white text-xs sm:text-sm 2xl:text-xl 
              px-4 sm:px-5 2xl:px-8 lg:h-10
              py-3 sm:py-2.5 2xl:py-8 
              shadow-md hover:shadow-orange-500/25 rounded-lg font-bold w-full sm:w-auto
              "
            >
              Get a Free Demo Of Software
              <ArrowRight className="ml-1 w-4 h-4 2xl:w-5 2xl:h-5" />
            </Button>
            <Button
              size="lg"
              className="text-white bg-blue-950 hover:bg-blue-900 
              text-xs sm:text-sm 2xl:text-xl 
              px-4 sm:px-5 2xl:px-8 
              py-2 sm:py-2.5 2xl:py-8 
              rounded-lg font-bold w-full sm:w-auto lg:h-10"
            >
              Talk to Our Compliance Experts
            </Button>
          </div>
        </div>
      </section>
  );
}
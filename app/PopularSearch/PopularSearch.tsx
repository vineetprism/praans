// "use client"
// import { useEffect } from "react"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import {
//   ScrollText, Megaphone, CalendarDays, HandCoins,
//   Banknote, Receipt, Calculator, FileText,
//   CalendarClock
// } from "lucide-react"

// const POPULAR_SEARCHES = [
//   { label: "Act,Rules And Forms", href: "/acts", Icon: ScrollText },
//   { label: "Gazette Notifications", href: "/gazette", Icon: Megaphone },
//   { label: "Holiday List", href: "/holidays", Icon: CalendarDays },
//   { label: "Labour welfare funds", href: "/welfare-fund", Icon: HandCoins },
//   { label: "Minimum wages", href: "/minimum-wages", Icon: Banknote },
//   { label: "Professional tax", href: "/professional-tax", Icon: Receipt },
//   { label: "Calculators", href: "/calculators/bonus", Icon: Calculator },
//   // { label: "Bonus Calculators", href: "/calculators/bonus", Icon: Calculator },
//   // { label: "Gratuity Calculators", href: "/calculators/gratuity", Icon: FileText },
//   { label: "Leaves Working Hours", href: "/leaves-working-hours", Icon:CalendarClock },
//   { label: "National Festival Holidays", href: "/national-festival-holidays", Icon:CalendarClock },
//   { label: "Applicability S&E Act", href: "/applicability-se-act", Icon:CalendarClock },
// ] as const

// export default function PopularSearch({
//   title = "Quick Access",
//   className = "",
// }: { title?: string; className?: string }) {
//   const pathname = usePathname()
//   const router = useRouter()
  
//   // Warm the cache once the component mounts
//   useEffect(() => {
//     POPULAR_SEARCHES.forEach(i => router.prefetch(i.href))
//   }, [router])
  
//   return (
//     <div className={className}>
//       <label className="text-sm font-medium mb-3 block border-b-4 border-orange-500 pb-2">
//         {title}
//       </label>
//       <div className="space-y-2">
//         {POPULAR_SEARCHES.map(({ label, href, Icon }) => {
//           const isActive = pathname?.startsWith(href)
//           return (
//             <Link
//               key={href}
//               href={href}
//               aria-label={label}
//               prefetch
//               onMouseEnter={() => router.prefetch(href)}
//               aria-current={isActive ? "page" : undefined}
//               className={[
//                 "inline-flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm transition-colors group hover:shadow-lg duration-300 border-l-4 border-l-orange-500",
//                 isActive ? "bg-orange-100 text-orange-600" : "hover:bg-orange-100 hover:text-orange-600",
//               ].join(" ")}
//             >
//               <Icon className="w-4 h-4" />
//               <span>{label}</span>
//             </Link>
//           )
//         })}
//       </div>
//     </div>  
//   )
// }



























// // "use client"
// // import { useEffect } from "react"
// // import Link from "next/link"
// // import { usePathname, useRouter } from "next/navigation"
// // import {
// //   ScrollText, Megaphone, CalendarDays, HandCoins,
// //   Banknote, Receipt, Calculator, FileText,
// //   CalendarClock, ChevronRight
// // } from "lucide-react"

// // const POPULAR_SEARCHES = [
// //   { label: "Acts, Rules & Forms", href: "/acts", Icon: ScrollText, color: "text-blue-600" },
// //   { label: "Gazette Notifications", href: "/gazette", Icon: Megaphone, color: "text-purple-600" },
// //   { label: "Holiday List", href: "/national-festival-holidays", Icon: CalendarDays, color: "text-green-600" },
// //   { label: "Labour Welfare Funds", href: "/welfare-fund", Icon: HandCoins, color: "text-yellow-600" },
// //   { label: "Minimum Wages", href: "/minimum-wages", Icon: Banknote, color: "text-emerald-600" },
// //   { label: "Professional Tax", href: "/professional-tax", Icon: Receipt, color: "text-red-600" },
// //   { label: "Bonus Calculator", href: "/calculators/bonus", Icon: Calculator, color: "text-indigo-600" },
// //   { label: "Gratuity Calculator", href: "/calculators/gratuity", Icon: FileText, color: "text-pink-600" },
// //   { label: "Leaves & Working Hours", href: "/leaves-working-hours", Icon: CalendarClock, color: "text-orange-600" },
// // ] as const

// // export default function PopularSearch({
// //   title = "Quick Access",
// //   className = "",
// // }: { title?: string; className?: string }) {
// //   const pathname = usePathname()
// //   const router = useRouter()
  
// //   // Warm the cache once the component mounts
// //   useEffect(() => {
// //     POPULAR_SEARCHES.forEach(i => router.prefetch(i.href))
// //   }, [router])
  
// //   return (
// //     <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
// //       {/* Header with gradient background */}
// //       <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-4 py-3 border-b border-orange-200 rounded-t-lg">
// //         <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
// //           <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
// //           {title}
// //         </h3>
// //       </div>

// //       {/* Content */}
// //       <div className="p-3">
// //         <div className="space-y-1">
// //           {POPULAR_SEARCHES.map(({ label, href, Icon, color }) => {
// //             const isActive = pathname?.startsWith(href)
// //             return (
// //               <Link
// //                 key={href}
// //                 href={href}
// //                 prefetch
// //                 onMouseEnter={() => router.prefetch(href)}
// //                 aria-current={isActive ? "page" : undefined}
// //                 className={[
// //                   "group flex items-center justify-between w-full rounded-lg px-3 py-2.5 text-sm transition-all duration-200 hover:shadow-md",
// //                   isActive 
// //                     ? "bg-orange-50 text-orange-700 border-l-3 border-orange-500 shadow-sm" 
// //                     : "hover:bg-gray-50 text-gray-700 hover:text-gray-900 border-l-3 border-transparent hover:border-orange-300",
// //                 ].join(" ")}
// //               >
// //                 <div className="flex items-center gap-3">
// //                   <div className={`p-1.5 rounded-md transition-colors ${
// //                     isActive 
// //                       ? 'bg-orange-100' 
// //                       : 'bg-gray-100 group-hover:bg-orange-100'
// //                   }`}>
// //                     <Icon className={`w-3.5 h-3.5 transition-colors ${
// //                       isActive 
// //                         ? 'text-orange-600' 
// //                         : `${color} group-hover:text-orange-600`
// //                     }`} />
// //                   </div>
// //                   <span className="font-medium text-xs leading-relaxed">{label}</span>
// //                 </div>
                
// //                 <ChevronRight className={`w-3 h-3 transition-all duration-200 ${
// //                   isActive 
// //                     ? 'text-orange-500 transform translate-x-0.5' 
// //                     : 'text-gray-400 group-hover:text-orange-500 group-hover:transform group-hover:translate-x-0.5'
// //                 }`} />
// //               </Link>
// //             )
// //           })}
// //         </div>
// //       </div>

      
// //     </div>
// //   )
// // }











// "use client"
// import { useEffect } from "react"
// import Link from "next/link"
// import { usePathname, useRouter } from "next/navigation"
// import {
//   ScrollText, Megaphone, CalendarDays, HandCoins,
//   Banknote, Receipt, Calculator, FileText,
//   CalendarClock
// } from "lucide-react"

// const POPULAR_SEARCHES = [
//   { label: "Act,Rules And Forms", href: "/acts", Icon: ScrollText },
//   { label: "Gazette Notifications", href: "/gazette", Icon: Megaphone },
//   { label: "Holiday List", href: "/holidays", Icon: CalendarDays },
//   { label: "Labour welfare funds", href: "/welfare-fund", Icon: HandCoins },
//   { label: "Minimum wages", href: "/minimum-wages", Icon: Banknote },
//   { label: "Professional tax", href: "/professional-tax", Icon: Receipt },
//   { label: "Calculators", href: "/calculators/bonus", Icon: Calculator },
//   { label: "Leaves Working Hours", href: "/leaves-working-hours", Icon: CalendarClock },
//   { label: "National Festival Holidays", href: "/national-festival-holidays", Icon: CalendarClock },
//   { label: "Applicability S&E Act", href: "/applicability-se-act", Icon: CalendarClock },
// ] as const

// export default function PopularSearch({
//   title = "Quick Access",
//   className = "",
// }: { title?: string; className?: string }) {
//   const pathname = usePathname()
//   const router = useRouter()
  
//   // Warm the cache once the component mounts
//   useEffect(() => {
//     POPULAR_SEARCHES.forEach(i => router.prefetch(i.href))
//   }, [router])
  
//   return (
//     <div className={className}>
//       <label className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg font-medium mb-2 sm:mb-3 md:mb-3 lg:mb-4 xl:mb-4 2xl:mb-5 block border-b-2 sm:border-b-3 md:border-b-4 lg:border-b-4 xl:border-b-4 2xl:border-b-4 border-orange-500 pb-1 sm:pb-2 md:pb-2 lg:pb-3 xl:pb-3 2xl:pb-3">
//         {title}
//       </label>
//       <div className="space-y-1 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-2 2xl:space-y-3">
//         {POPULAR_SEARCHES.map(({ label, href, Icon }) => {
//           const isActive = pathname?.startsWith(href)
//           return (
//             <Link
//               key={href}
//               href={href}
//               aria-label={label}
//               prefetch
//               onMouseEnter={() => router.prefetch(href)}
//               aria-current={isActive ? "page" : undefined}
//               className={[
//                 "inline-flex w-full items-center gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4 rounded-sm sm:rounded-md md:rounded-md lg:rounded-lg xl:rounded-lg 2xl:rounded-lg px-1 sm:px-2 md:px-2 lg:px-3 xl:px-3 2xl:px-4 py-1 sm:py-2 md:py-2 lg:py-2.5 xl:py-2.5 2xl:py-3 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base 2xl:text-lg transition-colors group hover:shadow-sm sm:hover:shadow-md md:hover:shadow-lg lg:hover:shadow-lg xl:hover:shadow-lg 2xl:hover:shadow-xl duration-300 border-l-2 sm:border-l-3 md:border-l-4 lg:border-l-4 xl:border-l-4 2xl:border-l-4 border-l-orange-500",
//                 isActive ? "bg-orange-100 text-orange-600" : "hover:bg-orange-100 hover:text-orange-600",
//               ].join(" ")}
//             >
//               <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 flex-shrink-0" />
//               <span className="truncate leading-tight sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal 2xl:leading-relaxed">{label}</span>
//             </Link>
//           )
//         })}
//       </div>
//     </div>  
//   )
// }








"use client"
import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  ScrollText, Megaphone, CalendarDays, HandCoins,
  Banknote, Receipt, Calculator, FileText,
  CalendarClock
} from "lucide-react"

const POPULAR_SEARCHES = [
  { label: "Act,Rules And Forms", href: "/acts", Icon: ScrollText },
  { label: "Gazette Notifications", href: "/gazette", Icon: Megaphone },
  { label: "Holiday List", href: "/holidays", Icon: CalendarDays },
  { label: "Labour welfare funds", href: "/welfare-fund", Icon: HandCoins },
  { label: "Minimum wages", href: "/minimum-wages", Icon: Banknote },
  { label: "Professional tax", href: "/professional-tax", Icon: Receipt },
  { label: "Calculators", href: "/calculators/bonus", Icon: Calculator },
  { label: "Leaves Working Hours", href: "/leaves-working-hours", Icon: CalendarClock },
  { label: "National Festival Holidays", href: "/national-festival-holidays", Icon: CalendarClock },
  { label: "Applicability S&E Act", href: "/applicability-se-act", Icon: CalendarClock },
] as const

export default function PopularSearch({
  title = "Quick Access",
  className = "",
}: { title?: string; className?: string }) {
  const pathname = usePathname()
  const router = useRouter()
  
  // Warm the cache once the component mounts
  useEffect(() => {
    POPULAR_SEARCHES.forEach(i => router.prefetch(i.href))
  }, [router])
  
  return (
    <div className={className}>
      <label className="text-sm font-medium mb-2 block border-b-2 border-orange-500 pb-1">
        {title}
      </label>
      <div className="space-y-1">
        {POPULAR_SEARCHES.map(({ label, href, Icon }) => {
          const isActive = pathname?.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              aria-label={label}
              prefetch
              onMouseEnter={() => router.prefetch(href)}
              aria-current={isActive ? "page" : undefined}
              className={[
                "inline-flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors group hover:shadow-md duration-300 border-l-2 border-l-orange-500",
                isActive ? "bg-orange-100 text-orange-600" : "hover:bg-orange-100 hover:text-orange-600",
              ].join(" ")}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="truncate leading-normal">{label}</span>
            </Link>
          )
        })}
      </div>
    </div>  
  )
}

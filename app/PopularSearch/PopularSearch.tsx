"use client"


import {
  Banknote,
  Calculator,
  CalendarClock,
  CalendarDays, HandCoins,
  Megaphone,
  Receipt,
  ScrollText
} from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"


const POPULAR_SEARCHES = [
  { label: "Act,Rules And Forms", href: "/acts-rule-form", Icon: ScrollText },
  { label: "Gazette Notifications", href: "/gazette", Icon: Megaphone },
  { label: "Holiday List", href: "/holidays", Icon: CalendarDays },
  { label: "Labour welfare funds", href: "/labour-welfare-fund", Icon: HandCoins },
  { label: "Minimum wages", href: "/minimum-wages", Icon: Banknote },
  { label: "Professional tax", href: "/professional-tax", Icon: Receipt },
  { label: "Calculators", href: "/calculators/bonus", Icon: Calculator },
  { label: "CLRA Applicability", href: "/leaves-working-hours", Icon: CalendarClock },
  { label: "National Festival Holidays", href: "/national-festival-holidays", Icon: CalendarClock },
  { label: "Applicability S&E Act", href: "/applicability-se-act/applicability", Icon: CalendarClock },
] as const


export default function PopularSearch({
  title = "Quick Access",
  className = "2xl:h-120  2xl:text-3xl font-semibold",
}: { title?: string; className?: string }) {
  const pathname = usePathname()
  const router = useRouter()
  
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
                " inline-flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors group hover:shadow-md duration-300 border-l-2 border-l-orange-500 ",
                isActive ? "bg-orange-100 text-orange-600" : "hover:bg-orange-100 hover:text-orange-600",
              ].join(" ")}
            >
              <Icon className="w-4 h-4 flex-shrink-0 " />
              <span className="truncate leading-normal">{label}</span>
            </Link>
          )
        })}
      </div>
    </div>  
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ScrollText, Gavel, FileText, Megaphone,
  CalendarDays, HandCoins, Banknote, Receipt, ChevronRight
} from "lucide-react"

// --- Single Source of Truth ---
const POPULAR_SEARCHES = [
  { label: "Act,Rules And Forms",                   href: "/acts",                  Icon: ScrollText },
  // { label: "Rules",                 href: "/rules",                 Icon: Gavel },
  // { label: "Forms",                 href: "/forms",                 Icon: FileText },
  { label: "Gazette Notifications", href: "/gazette",               Icon: Megaphone },
  { label: "Holiday List",          href: "/holidays",              Icon: CalendarDays },
  { label: "Labour welfare funds",  href: "/welfare-fund",          Icon: HandCoins },
  { label: "Minimum wages",         href: "/minimum-wages",         Icon: Banknote },
  { label: "Professional tax",      href: "/professional-tax",      Icon: Receipt },
] as const

type Props = {
  title?: string
  className?: string
  dense?: boolean            // chhote tiles
  variant?: "solid" | "outline"
  cols?: 2 | 3 | 4           // desktop columns
}

export default function PopularSearchBoxes({
  title = "Quick Access",
  className = "",
  dense = false,
  variant = "outline",
  cols = 3,
}: Props) {
  const pathname = usePathname()

  const baseTile =
    "group rounded-2xl border transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 ring-orange-300"
  const pad = dense ? "p-3" : "p-4"
  const gridCols =
    cols === 4
      ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
      : cols === 2
      ? "grid grid-cols-2 gap-3"
      : "grid grid-cols-2 sm:grid-cols-3 gap-3"

  return (
    <div className={className}>
      {title ? <label className="text-sm font-medium mb-3 block">{title}</label> : null}

      <div className={gridCols}>
        {POPULAR_SEARCHES.map(({ label, href, Icon }) => {
          const isActive = pathname?.startsWith(href)

          const style =
            variant === "solid"
              ? isActive
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white border-gray-200 hover:bg-orange-50"
              : // outline
                isActive
                ? "bg-orange-50 text-orange-700 border-orange-300"
                : "bg-white border-gray-200 hover:bg-orange-50"

          return (
            <Link key={href} href={href} aria-current={isActive ? "page" : undefined}>
              <div className={`${baseTile} ${pad} ${style}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl ${dense ? "p-1.5" : "p-2"} bg-gray-100 group-hover:bg-white`}>
                      <Icon className={`${dense ? "w-4 h-4" : "w-5 h-5"}`} />
                    </div>
                    <span className={`font-medium ${dense ? "text-sm" : "text-base"}`}>{label}</span>
                  </div>
                  <ChevronRight className={`${dense ? "w-4 h-4" : "w-5 h-5"} opacity-60 group-hover:translate-x-0.5 transition`} />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// (Optional) export config if needed elsewhere
export { POPULAR_SEARCHES }

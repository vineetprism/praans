"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  ScrollText, Gavel, FileText, Megaphone,
  CalendarDays, HandCoins, Banknote, Receipt
} from "lucide-react"

// --- Single Source of Truth (config yahin rakha hai) ---
const POPULAR_SEARCHES = [
  { label: "Act,Rules And Forms",                   href: "/acts",                  Icon: ScrollText },
  // { label: "Rules",                 href: "/rules",                 Icon: Gavel },
  // { label: "Forms",                 href: "/forms",                 Icon: FileText },
  { label: "Gazette Notifications", href: "/gazette",               Icon: Megaphone },
  { label: "Holiday List",          href: "/holidays",              Icon: CalendarDays },
  { label: "Labour welfare funds",  href: "/welfare-fund",         Icon: HandCoins },
  { label: "Minimum wages",         href: "/minimum-wages",         Icon: Banknote },
  { label: "Professional tax",      href: "/professional-tax",      Icon: Receipt },
] as const

type PopularSearchProps = {
  title?: string            // optional heading
  className?: string        // outer wrapper classes
}

// --- Reusable Component ---
export default function PopularSearch({ title = "Quick Access", className = "" }: PopularSearchProps) {
  const pathname = usePathname()

  return (
    <div className={className}>
      {title ? <label className="text-sm font-medium mb-3 block">{title}</label> : null}
      <div className="space-y-2">
        {POPULAR_SEARCHES.map(({ label, href, Icon }) => {
          const isActive = pathname?.startsWith(href)
          return (
            <Button
              key={href}
              variant="ghost"
              size="sm"
              asChild
              className={`w-full justify-start h-auto p-2 text-sm transition-colors
                ${isActive ? "bg-orange-50 text-orange-600" : "hover:bg-orange-50 hover:text-orange-600"}`}
            >
              <Link href={href} aria-current={isActive ? "page" : undefined}>
                <span className="inline-flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  {label}
                </span>
              </Link>
            </Button>
          )
        })}
      </div>
    </div>
  )
}

// (Optional) Config export agar kahin aur chaiye ho:
export { POPULAR_SEARCHES }

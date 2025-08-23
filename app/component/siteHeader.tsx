"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, ChevronDown, ArrowRight } from "lucide-react"

const NAV = [
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Company", href: "/about/our-company" },
      { label: "Our Clients", href: "/about/clients" },
      { label: "Our Founders", href: "/about/founders" },
      { label: "Our Locations", href: "/about/locations" },
    ],
  },
  { label: "Resources", href: "/acts" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Compliance Outsourcing", href: "/services/compliance-outsourcing" },
      { label: "Audit & Inspection", href: "/services/audit-and-inspection" },
      { label: "Legal Advisory & Hr Policies", href: "/services/legal-advisory-hr-policies" },
      { label: "Pan India Registration", href: "/services/pan-india-registrations" },
      { label: "Litigation Support", href: "/services/litigation-support" },
      { label: "Smart Compliance Software", href: "/services/smart-compliance-software" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Library", href: "/library" },
]

export default function SiteHeader() {
  const pathname = usePathname()

  // Desktop dropdown index (hover/click)
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const openMenu = (index: number) => {
    clearTimer()
    setDropdownOpen(index)
  }
  const scheduleClose = () => {
    clearTimer()
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 160)
  }
  const toggleMenu = (index: number) => {
    if (dropdownOpen === index) setDropdownOpen(null)
    else openMenu(index)
  }

  // Mobile accordion open index
  const [mobileOpen, setMobileOpen] = useState<number | null>(null)
  const toggleMobile = (index: number) => {
    setMobileOpen((prev) => (prev === index ? null : index))
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto h-20 px-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Praans Consultech"
            width={180}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="max-md:hidden flex items-center gap-8">
          {NAV.map((item, index) => {
            const active = pathname?.startsWith(item.href)
            const hasDropdown = !!item.dropdown?.length

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasDropdown && openMenu(index)}
                onMouseLeave={() => hasDropdown && scheduleClose()}
              >
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={hasDropdown ? "menu" : undefined}
                  aria-expanded={hasDropdown ? (dropdownOpen === index) : undefined}
                  className={`flex items-center gap-1 text-md font-semibold transition-colors ${active ? "text-[#eb8535]" : "text-gray-700 hover:text-[#eb8535]"
                    }`}
                  onClick={(e) => {
                    if (hasDropdown) {
                      e.preventDefault() // prevent nav; open dropdown instead
                      toggleMenu(index)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (hasDropdown && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault()
                      toggleMenu(index)
                    }
                  }}
                  onFocus={() => hasDropdown && openMenu(index)}
                  onBlur={() => hasDropdown && scheduleClose()}
                >
                  {item.label}
                  {hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === index ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </Link>

                {/* Desktop Dropdown */}
                {hasDropdown && dropdownOpen === index && (
                  <div
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => openMenu(index)}
                    onMouseLeave={scheduleClose}
                  >
                    {item.dropdown!.map((dropdownItem) => {
                      const dropdownActive = pathname === dropdownItem.href
                      return (
                        <Link
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 text-md transition-colors hover:bg-orange-50 ${dropdownActive
                            ? "text-[#eb8535] bg-orange-50"
                            : "text-gray-700 hover:text-[#eb8535]"
                            }`}
                          onClick={() => setDropdownOpen(null)}
                        >
                          {dropdownItem.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="max-md:hidden flex items-center gap-3">
          <Button
            variant="ghost"
            size="lg"
            className="hover:bg-orange-50 hover:text-[#eb8535] text-md font-semibold cursor-pointer"
          >
            Sign In
          </Button>
          <Button
            size="lg"
            className="bg-[#eb8535] hover:from-orange-600 hover:bg-orange-400 shadow-md transition-all text-md font-semibold cursor-pointer"
          >
            Get Started
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5 hover:text-[#eb8535]" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                {/* <SheetTitle>Menu</SheetTitle> */}
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/logo.png"
                    alt="Praans Consultech"
                    width={150}
                    height={40}
                    priority
                    className="h-10 w-auto"
                  />
                </Link>
              </SheetHeader>

              <div className="mt-6 space-y-1">
                {NAV.map((item, index) => {
                  const active = pathname?.startsWith(item.href)
                  const hasDropdown = !!item.dropdown?.length

                  // Non-dropdown items: simple link that closes sheet
                  if (!hasDropdown) {
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${active
                            ? "bg-orange-50 text-[#eb8535]"
                            : "text-slate-700 hover:bg-slate-50"
                            }`}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    )
                  }

                  // Dropdown item: accordion toggle
                  const isOpen = mobileOpen === index
                  return (
                    <div key={item.href} className="rounded-md">
                      <button
                        type="button"
                        onClick={() => toggleMobile(index)}
                        aria-expanded={isOpen}
                        aria-controls={`mobile-submenu-${index}`}
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${active
                          ? "bg-orange-50 text-[#eb8535]"
                          : "text-slate-700 hover:bg-slate-50"
                          }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`mobile-submenu-${index}`}
                          className="ml-4 mt-1 space-y-1"
                        >

                          {item.dropdown!.map((dropdownItem) => {
                            const dropdownActive = pathname === dropdownItem.href
                            return (
                              <SheetClose asChild key={dropdownItem.href}>
                                <Link
                                  href={dropdownItem.href}
                                  className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${dropdownActive
                                    ? "bg-orange-50 text-[#eb8535]"
                                    : "text-slate-600 hover:bg-slate-50"
                                    }`}
                                >
                                  {dropdownItem.label}
                                </Link>
                              </SheetClose>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 border-t pt-4 flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-orange-50 hover:text-[#eb8535] text-md font-semibold cursor-pointer"
                >
                  Sign In
                </Button>
                <Button className="flex-1 bg-[#eb8535] hover:text-[#eb8535] text-md font-semibold cursor-pointer">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

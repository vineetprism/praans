
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, LogIn, ArrowRight } from "lucide-react"

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/acts" }, 
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Library", href: "/library" },
]

export default function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="container mx-auto h-16 px-4 flex items-center justify-between">
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
          {NAV.map((item) => {
            const active = pathname?.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-orange-600"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="max-md:hidden flex items-center gap-3">
           <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-orange-50 hover:text-orange-600"
                  >
                    Sign In
                  </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </Button>
        </div>
        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>

              <div className="mt-6 space-y-1">
                {NAV.map((item) => {
                  const active = pathname?.startsWith(item.href)
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                          active
                            ? "bg-orange-50 text-orange-700"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </div>

              <div className="mt-6 border-t pt-4 flex gap-2">
                 <Button
                    variant="ghost"
                    size="sm"
                    className="hover:bg-orange-50 hover:text-orange-600"
                  >
                    Sign In
                  </Button>
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet"
// import { Menu, LogIn, ArrowRight } from "lucide-react"

// const NAV = [
//   { label: "Services", href: "/services" },
//   { label: "Resources", href: "/acts" }, 
//   { label: "About Us", href: "/about" },
//   { label: "Contact", href: "/contact" },
//   { label: "Library", href: "/library" },
// ]

// export default function SiteHeader() {
//   const pathname = usePathname()

//   return (
//     <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
//       <div className="container mx-auto h-16 px-4 flex items-center justify-between">
//         {/* Brand */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="Praans Consultech"
//             width={180}
//             height={40}
//             priority
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="max-md:hidden flex items-center gap-8">
//           {NAV.map((item) => {
//             const active = pathname?.startsWith(item.href)
//             return (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 aria-current={active ? "page" : undefined}
//                 className={`text-sm font-medium transition-colors ${
//                   active
//                     ? "text-orange-600"
//                     : "text-gray-600 hover:text-orange-600"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             )
//           })}
//         </nav>

//         {/* Desktop CTAs */}
//         <div className="max-md:hidden flex items-center gap-3">
//            <Button
//                     variant="ghost"
//                     size="sm"
//                     className="hover:bg-orange-50 hover:text-orange-600"
//                   >
//                     Sign In
//                   </Button>
//           <Button
//             size="sm"
//             className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all"
//           >
//             Get Started
//           </Button>
//         </div>
//         {/* Mobile actions */}
//         <div className="md:hidden flex items-center gap-2">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" aria-label="Open menu">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-80">
//               <SheetHeader>
//                 <SheetTitle>Menu</SheetTitle>
//               </SheetHeader>

//               <div className="mt-6 space-y-1">
//                 {NAV.map((item) => {
//                   const active = pathname?.startsWith(item.href)
//                   return (
//                     <SheetClose asChild key={item.href}>
//                       <Link
//                         href={item.href}
//                         className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
//                           active
//                             ? "bg-orange-50 text-orange-700"
//                             : "text-slate-700 hover:bg-slate-50"
//                         }`}
//                         aria-current={active ? "page" : undefined}
//                       >
//                         {item.label}
//                       </Link>
//                     </SheetClose>
//                   )
//                 })}
//               </div>

//               <div className="mt-6 border-t pt-4 flex gap-2">
//                  <Button
//                     variant="ghost"
//                     size="sm"
//                     className="hover:bg-orange-50 hover:text-orange-600"
//                   >
//                     Sign In
//                   </Button>
//                 <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
//                   Get Started
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }








// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet"
// import { Menu, LogIn, ArrowRight, ChevronDown } from "lucide-react"

// const NAV = [
//   { label: "Services", href: "/services" },
//   { label: "Resources", href: "/acts" }, 
//   { 
//     label: "About Us", 
//     href: "/about",
//     dropdown: [
//       { label: "Our Company", href: "/about" },
//       { label: "Our Clients", href: "/about/clients" },
//       { label: "Our Founders", href: "/about/founders" },
//       { label: "Our Locations", href: "/about/locations" },
//     ]
//   },
//   { label: "Contact", href: "/contact" },
//   { label: "Library", href: "/library" },
// ]

// export default function SiteHeader() {
//   const pathname = usePathname()
//   const [dropdownOpen, setDropdownOpen] = useState(null)

//   const handleMouseEnter = (index) => {
//     setDropdownOpen(index)
//   }

//   const handleMouseLeave = () => {
//     setDropdownOpen(null)
//   }

//   return (
//     <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
//       <div className="container mx-auto h-16 px-4 flex items-center justify-between">
//         {/* Brand */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="Praans Consultech"
//             width={180}
//             height={40}
//             priority
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="max-md:hidden flex items-center gap-8">
//           {NAV.map((item, index) => {
//             const active = pathname?.startsWith(item.href)
//             const hasDropdown = item.dropdown && item.dropdown.length > 0
            
//             return (
//               <div 
//                 key={item.href}
//                 className="relative"
//                 onMouseEnter={() => hasDropdown && handleMouseEnter(index)}
//                 onMouseLeave={() => hasDropdown && handleMouseLeave()}
//               >
//                 <Link
//                   href={item.href}
//                   aria-current={active ? "page" : undefined}
//                   className={`flex items-center gap-1 text-sm font-medium transition-colors ${
//                     active
//                       ? "text-orange-600"
//                       : "text-gray-600 hover:text-orange-600"
//                   }`}
//                 >
//                   {item.label}
//                   {hasDropdown && (
//                     <ChevronDown 
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         dropdownOpen === index ? "rotate-180" : ""
//                       }`} 
//                     />
//                   )}
//                 </Link>
                
//                 {/* Dropdown Menu */}
//                 {hasDropdown && dropdownOpen === index && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
//                     {item.dropdown.map((dropdownItem) => {
//                       const dropdownActive = pathname === dropdownItem.href
//                       return (
//                         <Link
//                           key={dropdownItem.href}
//                           href={dropdownItem.href}
//                           className={`block px-4 py-3 text-sm transition-colors hover:bg-orange-50 ${
//                             dropdownActive
//                               ? "text-orange-600 bg-orange-50"
//                               : "text-gray-700 hover:text-orange-600"
//                           }`}
//                         >
//                           {dropdownItem.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </nav>

//         {/* Desktop CTAs */}
//         <div className="max-md:hidden flex items-center gap-3">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="hover:bg-orange-50 hover:text-orange-600"
//           >
//             Sign In
//           </Button>
//           <Button
//             size="sm"
//             className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all"
//           >
//             Get Started
//           </Button>
//         </div>

//         {/* Mobile actions */}
//         <div className="md:hidden flex items-center gap-2">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" aria-label="Open menu">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-80">
//               <SheetHeader>
//                 <SheetTitle>Menu</SheetTitle>
//               </SheetHeader>

//               <div className="mt-6 space-y-1">
//                 {NAV.map((item, index) => {
//                   const active = pathname?.startsWith(item.href)
//                   const hasDropdown = item.dropdown && item.dropdown.length > 0
                  
//                   return (
//                     <div key={item.href}>
//                       <SheetClose asChild>
//                         <Link
//                           href={item.href}
//                           className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
//                             active
//                               ? "bg-orange-50 text-orange-700"
//                               : "text-slate-700 hover:bg-slate-50"
//                           }`}
//                           aria-current={active ? "page" : undefined}
//                         >
//                           {item.label}
//                         </Link>
//                       </SheetClose>
                      
//                       {/* Mobile Dropdown Items */}
//                       {hasDropdown && (
//                         <div className="ml-4 mt-1 space-y-1">
//                           {item.dropdown.map((dropdownItem) => {
//                             const dropdownActive = pathname === dropdownItem.href
//                             return (
//                               <SheetClose asChild key={dropdownItem.href}>
//                                 <Link
//                                   href={dropdownItem.href}
//                                   className={`block rounded-md px-3 py-2 text-sm transition-colors ${
//                                     dropdownActive
//                                       ? "bg-orange-50 text-orange-700"
//                                       : "text-slate-600 hover:bg-slate-50"
//                                   }`}
//                                 >
//                                   {dropdownItem.label}
//                                 </Link>
//                               </SheetClose>
//                             )
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   )
//                 })}
//               </div>

//               <div className="mt-6 border-t pt-4 flex gap-2">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="hover:bg-orange-50 hover:text-orange-600"
//                 >
//                   Sign In
//                 </Button>
//                 <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
//                   Get Started
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }






// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { usePathname } from "next/navigation"
// import { useRef, useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
//   SheetClose,
// } from "@/components/ui/sheet"
// import { Menu, ChevronDown } from "lucide-react"

// const NAV = [
//   { label: "Services", href: "/services" },
//   { label: "Resources", href: "/acts" },
//   {
//     label: "About Us",
//     href: "/about",
//     dropdown: [
//       { label: "Our Company", href: "/about" },
//       { label: "Our Clients", href: "/about/clients" },
//       { label: "Our Founders", href: "/about/founders" },
//       { label: "Our Locations", href: "/about/locations" },
//     ],
//   },
//   { label: "Contact", href: "/contact" },
//   { label: "Library", href: "/library" },
// ]

// export default function SiteHeader() {
//   const pathname = usePathname()
//   const [dropdownOpen, setDropdownOpen] = useState<number | null>(null)

//   // small debounce to prevent flicker while moving cursor from item → dropdown
//   const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

//   const clearTimer = () => {
//     if (closeTimer.current) {
//       clearTimeout(closeTimer.current)
//       closeTimer.current = null
//     }
//   }

//   const openMenu = (index: number) => {
//     clearTimer()
//     setDropdownOpen(index)
//   }

//   const scheduleClose = () => {
//     clearTimer()
//     closeTimer.current = setTimeout(() => setDropdownOpen(null), 160)
//   }

//   const toggleMenu = (index: number) => {
//     if (dropdownOpen === index) setDropdownOpen(null)
//     else openMenu(index)
//   }

//   return (
//     <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md">
//       <div className="container mx-auto h-16 px-4 flex items-center justify-between">
//         {/* Brand */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo.png"
//             alt="Praans Consultech"
//             width={180}
//             height={40}
//             priority
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="max-md:hidden flex items-center gap-8">
//           {NAV.map((item, index) => {
//             const active = pathname?.startsWith(item.href)
//             const hasDropdown = !!item.dropdown?.length

//             return (
//               <div
//                 key={item.href}
//                 className="relative"
//                 onMouseEnter={() => hasDropdown && openMenu(index)}
//                 onMouseLeave={() => hasDropdown && scheduleClose()}
//               >
//                 <Link
//                   href={item.href}
//                   aria-current={active ? "page" : undefined}
//                   aria-haspopup={hasDropdown ? "menu" : undefined}
//                   aria-expanded={hasDropdown ? (dropdownOpen === index) : undefined}
//                   className={`flex items-center gap-1 text-sm font-medium transition-colors ${
//                     active ? "text-orange-600" : "text-gray-600 hover:text-orange-600"
//                   }`}
//                   onClick={(e) => {
//                     if (hasDropdown) {
//                       e.preventDefault() // prevent nav; open dropdown instead
//                       toggleMenu(index)
//                     }
//                   }}
//                   onKeyDown={(e) => {
//                     if (hasDropdown && (e.key === "Enter" || e.key === " ")) {
//                       e.preventDefault()
//                       toggleMenu(index)
//                     }
//                   }}
//                   onFocus={() => hasDropdown && openMenu(index)}
//                   onBlur={() => hasDropdown && scheduleClose()}
//                 >
//                   {item.label}
//                   {hasDropdown && (
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform duration-200 ${
//                         dropdownOpen === index ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}
//                 </Link>

//                 {/* Dropdown */}
//                 {hasDropdown && dropdownOpen === index && (
//                   <div
//                     className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
//                     onMouseEnter={() => openMenu(index)}
//                     onMouseLeave={scheduleClose}
//                   >
//                     {item.dropdown!.map((dropdownItem) => {
//                       const dropdownActive = pathname === dropdownItem.href
//                       return (
//                         <Link
//                           key={dropdownItem.href}
//                           href={dropdownItem.href}
//                           className={`block px-4 py-3 text-sm transition-colors hover:bg-orange-50 ${
//                             dropdownActive
//                               ? "text-orange-600 bg-orange-50"
//                               : "text-gray-700 hover:text-orange-600"
//                           }`}
//                           onClick={() => setDropdownOpen(null)}
//                         >
//                           {dropdownItem.label}
//                         </Link>
//                       )
//                     })}
//                   </div>
//                 )}
//               </div>
//             )
//           })}
//         </nav>

//         {/* Desktop CTAs */}
//         <div className="max-md:hidden flex items-center gap-3">
//           <Button
//             variant="ghost"
//             size="sm"
//             className="hover:bg-orange-50 hover:text-orange-600"
//           >
//             Sign In
//           </Button>
//           <Button
//             size="sm"
//             className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg hover:shadow-xl transition-all"
//           >
//             Get Started
//           </Button>
//         </div>

//         {/* Mobile actions */}
//         <div className="md:hidden flex items-center gap-2">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" aria-label="Open menu">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-80">
//               <SheetHeader>
//                 <SheetTitle>Menu</SheetTitle>
//               </SheetHeader>

//               <div className="mt-6 space-y-1">
//                 {NAV.map((item) => {
//                   const active = pathname?.startsWith(item.href)
//                   const hasDropdown = !!item.dropdown?.length

//                   return (
//                     <div key={item.href}>
//                       <SheetClose asChild>
//                         <Link
//                           href={item.href}
//                           className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
//                             active
//                               ? "bg-orange-50 text-orange-700"
//                               : "text-slate-700 hover:bg-slate-50"
//                           }`}
//                           aria-current={active ? "page" : undefined}
//                         >
//                           {item.label}
//                         </Link>
//                       </SheetClose>

//                       {/* Mobile dropdown list */}
//                       {hasDropdown && (
//                         <div className="ml-4 mt-1 space-y-1">
//                           {item.dropdown!.map((dropdownItem) => {
//                             const dropdownActive = pathname === dropdownItem.href
//                             return (
//                               <SheetClose asChild key={dropdownItem.href}>
//                                 <Link
//                                   href={dropdownItem.href}
//                                   className={`block rounded-md px-3 py-2 text-sm transition-colors ${
//                                     dropdownActive
//                                       ? "bg-orange-50 text-orange-700"
//                                       : "text-slate-600 hover:bg-slate-50"
//                                   }`}
//                                 >
//                                   {dropdownItem.label}
//                                 </Link>
//                               </SheetClose>
//                             )
//                           })}
//                         </div>
//                       )}
//                     </div>
//                   )
//                 })}
//               </div>

//               <div className="mt-6 border-t pt-4 flex gap-2">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="hover:bg-orange-50 hover:text-orange-600"
//                 >
//                   Sign In
//                 </Button>
//                 <Button className="flex-1 bg-orange-500 hover:bg-orange-600">
//                   Get Started
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }










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
import { Menu, ChevronDown } from "lucide-react"

const NAV = [
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
  { label: "Resources", href: "/acts" },
  {
    label: "About Us",
    href: "/about",
    dropdown: [
      { label: "Our Company", href: "/about" },
      { label: "Our Clients", href: "/about/clients" },
      { label: "Our Founders", href: "/about/founders" },
      { label: "Our Locations", href: "/about/locations" },
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
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    active ? "text-orange-600" : "text-gray-600 hover:text-orange-600"
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
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen === index ? "rotate-180" : ""
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
                          className={`block px-4 py-3 text-sm transition-colors hover:bg-orange-50 ${
                            dropdownActive
                              ? "text-orange-600 bg-orange-50"
                              : "text-gray-700 hover:text-orange-600"
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
                {NAV.map((item, index) => {
                  const active = pathname?.startsWith(item.href)
                  const hasDropdown = !!item.dropdown?.length

                  // Non-dropdown items: simple link that closes sheet
                  if (!hasDropdown) {
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
                        className={`w-full flex items-center justify-between px-3 py-2 text-base font-medium rounded-md transition-colors ${
                          active
                            ? "bg-orange-50 text-orange-700"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={`mobile-submenu-${index}`}
                          className="ml-4 mt-1 space-y-1"
                        >
                          {/* Optional: link to About overview */}
                          {/* <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                pathname === item.href
                                  ? "bg-orange-50 text-orange-700"
                                  : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              Overview
                            </Link>
                          </SheetClose> */}

                          {item.dropdown!.map((dropdownItem) => {
                            const dropdownActive = pathname === dropdownItem.href
                            return (
                              <SheetClose asChild key={dropdownItem.href}>
                                <Link
                                  href={dropdownItem.href}
                                  className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                    dropdownActive
                                      ? "bg-orange-50 text-orange-700"
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

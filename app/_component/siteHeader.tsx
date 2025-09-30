"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, ArrowRight, User } from "lucide-react";

const NAV = [
  {
    label: "About Us",
    href: "",
    dropdown: [
      { label: "Our Company", href: "/our-company" },
      { label: "Our Clients", href: "/clients" },
      { label: "Our Founders", href: "/founders" },
      { label: "Our Locations", href: "/locations" },
    ],
  },
  {
    label: "Services",
    href: "",
    dropdown: [
      {
        label: "Smart Compliance Software",
        href: "/smart-compliance-software",
      },
      { label: "Compliance Outsourcing", href: "/compliance-outsourcing" },
      { label: "Pan India Registration", href: "/pan-india-registrations" },
      { label: "Audit & Inspection", href: "/audit-and-inspection" },
      {
        label: "Legal Advisory & HR Policies",
        href: "/legal-advisory-hr-policies",
      },
      { label: "Litigation Support", href: "/litigation-support" },
    ],
  },
  {
    label: "Registration",
    href: "",
    dropdown: [
      {
        label: "Shop & Establishment Registration",
        href: "/shop-establishment-registration",
      },
      { label: "Contract Labour License", href: "/contract-labour-licence" },
      {
        label: "Professional Tax Registration",
        href: "/professional-tax-registration",
      },
      { label: "Trade Licence Registration", href: "/trade-licence" },
      {
        label: "Labour Welfare Fund Registration",
        href: "/labour-welfare-fund-registration",
      },
      { label: "FSSAI Registration", href: "/fssai" },
      { label: "GST Registration", href: "/gst" },
      { label: "MSME Registration", href: "/msme" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Library", href: "/library" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);
  const lastScrollY = useRef(0);

  const router = useRouter();

  useEffect(() => {
    const threshold = 100;
    let ticking = false;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      if (Math.abs(scrollY - lastScrollY.current) < 5) {
        ticking = false;
        return;
      }

      if (scrollY > threshold) setHideTopBar(true);
      else setHideTopBar(false);

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = (index: number) => {
    clearTimer();
    setDropdownOpen(index);
  };

  const scheduleClose = () => {
    clearTimer();
    closeTimer.current = setTimeout(() => setDropdownOpen(null), 160);
  };

  const toggleMenu = (index: number) => {
    if (dropdownOpen === index) setDropdownOpen(null);
    else openMenu(index);
  };

  const [mobileOpen, setMobileOpen] = useState<number | null>(null);
  const toggleMobile = (index: number) => {
    setMobileOpen((prev) => (prev === index ? null : index));
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className=" mx-auto border-b lg:px-4 border-gray-200">
        <div className="h-12 lg:h-16 flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Go to homepage"
          >
            <div className="relative">
              <Image
                src="/logo.webp"
                alt="Praans Consultech"
                width={180}
                height={40}
                priority
                className="h-10 lg:h-12 w-auto"
              />
            </div>
          </Link>

          <div className="ml-auto flex items-center gap-4">
            <nav className="hidden lg:flex items-center">
              {NAV?.map((item, index) => {
                const active = item?.href
                  ? !!pathname && pathname.startsWith(item.href)
                  : !!item?.dropdown?.some(
                      (d) =>
                        pathname === d.href ||
                        (!!pathname && pathname.startsWith(d.href))
                    );
                const hasDropdown = !!item?.dropdown?.length;
                const navKey =
                  item?.href?.trim() || item?.label?.trim() || `nav-${index}`;

                return (
                  <div
                    key={navKey}
                    className="relative"
                    onMouseEnter={() => hasDropdown && openMenu(index)}
                    onMouseLeave={() => hasDropdown && scheduleClose()}
                  >
                    <Link
                      href={item?.href || "#"}
                      aria-current={active ? "page" : undefined}
                      aria-haspopup={hasDropdown ? "menu" : undefined}
                      aria-expanded={
                        hasDropdown ? dropdownOpen === index : undefined
                      }
                      className={`relative flex items-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 group ${
                        active
                          ? "text-orange-600"
                          : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/50"
                      }`}
                      onClick={(e) => {
                        if (hasDropdown) {
                          e.preventDefault();
                          toggleMenu(index);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (
                          hasDropdown &&
                          (e.key === "Enter" || e.key === " ")
                        ) {
                          e.preventDefault();
                          toggleMenu(index);
                        }
                      }}
                      onFocus={() => hasDropdown && openMenu(index)}
                      onBlur={() => hasDropdown && scheduleClose()}
                      aria-label={`Go to ${item?.label}`}
                    >
                      {item?.label}
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </Link>

                    {hasDropdown && dropdownOpen === index && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-88 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50"
                        onMouseEnter={() => openMenu(index)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                        {item?.dropdown?.map((dropdownItem) => {
                          const dropdownActive =
                            pathname === dropdownItem?.href;
                          return (
                            <Link
                              key={dropdownItem?.href}
                              href={dropdownItem?.href}
                              className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-150 group ${
                                dropdownActive
                                  ? "text-orange-600 bg-orange-50 shadow-sm"
                                  : "text-gray-700 hover:text-orange-600 hover:bg-orange-50/70"
                              }`}
                              onClick={() => setDropdownOpen(null)}
                              aria-label={`Go to ${dropdownItem?.label}`}
                            >
                              <div
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  dropdownActive
                                    ? "bg-orange-500"
                                    : "bg-gray-300 group-hover:bg-orange-400"
                                }`}
                              />
                              <span className="flex-1">
                                {dropdownItem?.label}
                              </span>
                              <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-2">
              <Button
                onClick={handleLogin}
                variant="ghost"
                className="rounded-xl hover:bg-orange-50 hover:text-orange-600 font-semibold px-6 transition-all cursor-pointer"
                aria-label="Sign in"
              >
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button
                className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold px-6 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 group cursor-pointer"
                aria-label="Get started"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-xl hover:bg-orange-50 hover:text-orange-600"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-gradient-to-b from-white to-orange-50/30"
                >
                  <SheetHeader className="border-b border-orange-100 pb-4">
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

                  <div className="mt-6 space-y-2">
                    {NAV?.map((item, index) => {
                      const active = item?.href
                        ? !!pathname && pathname.startsWith(item.href)
                        : !!item?.dropdown?.some(
                            (d) =>
                              pathname === d.href ||
                              (!!pathname && pathname.startsWith(d.href))
                          );
                      const hasDropdown = !!item?.dropdown?.length;
                      const navKey =
                        item?.href?.trim() ||
                        item?.label?.trim() ||
                        `mnav-${index}`;

                      if (!hasDropdown) {
                        return (
                          <SheetClose asChild key={navKey}>
                            <Link
                              href={item?.href}
                              className={`flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all ${
                                active
                                  ? "bg-orange-100 text-orange-700 shadow-sm"
                                  : "text-gray-700 hover:bg-orange-50"
                              }`}
                              aria-current={active ? "page" : undefined}
                            >
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  active ? "bg-orange-500" : "bg-gray-300"
                                }`}
                              />
                              {item?.label}
                            </Link>
                          </SheetClose>
                        );
                      }

                      const isOpen = mobileOpen === index;
                      return (
                        <div
                          key={navKey}
                          className="rounded-xl overflow-hidden"
                        >
                          <button
                            type="button"
                            onClick={() => toggleMobile(index)}
                            aria-expanded={isOpen}
                            aria-controls={`mobile-submenu-${index}`}
                            className={`w-full flex items-center justify-between px-4 py-3 font-medium rounded-xl transition-all ${
                              active
                                ? "bg-orange-100 text-orange-700"
                                : "text-gray-700 hover:bg-orange-50"
                            }`}
                            aria-label={`Toggle dropdown for ${item?.label}`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  active ? "bg-orange-500" : "bg-gray-300"
                                }`}
                              />
                              <span>{item?.label}</span>
                            </div>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {isOpen && (
                            <div
                              id={`mobile-submenu-${index}`}
                              className="ml-6 mt-2 space-y-1"
                            >
                              {item?.dropdown?.map((dropdownItem) => {
                                const dropdownActive =
                                  pathname === dropdownItem?.href;
                                return (
                                  <SheetClose asChild key={dropdownItem?.href}>
                                    <Link
                                      href={dropdownItem?.href}
                                      className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
                                        dropdownActive
                                          ? "bg-orange-100 text-orange-700"
                                          : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                                      }`}
                                      aria-label={`Go to ${dropdownItem?.label}`}
                                    >
                                      <div
                                        className={`w-1.5 h-1.5 rounded-full ${
                                          dropdownActive
                                            ? "bg-orange-500"
                                            : "bg-gray-300"
                                        }`}
                                      />
                                      {dropdownItem.label}
                                    </Link>
                                  </SheetClose>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 space-y-3 pt-6 border-t border-orange-100">
                    <Button
                      onClick={handleLogin}
                      variant="ghost"
                      size="lg"
                      className="w-full justify-center rounded-xl hover:bg-orange-50 hover:text-orange-600 font-semibold"
                      aria-label="Sign in"
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                    <Button
                      size="lg"
                      className="w-full justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-semibold shadow-lg"
                      aria-label="Get started"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

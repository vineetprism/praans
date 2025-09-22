"use client";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";
const SUBSCRIBE_ENDPOINT = new URL("/api/subscribe", API_BASE).toString();

export default function SiteFooter() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [banner, setBanner] = React.useState<{ type: "success" | "error"; msg: string } | null>(null);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubscribe = async () => {
    setBanner(null);
    if (!isValidEmail(email)) {
      setBanner({ type: "error", msg: "Enter a valid email address." });
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        cache: "no-store",
        body: JSON.stringify({ email }),
      });

      let data: any = null;
      try { data = await res.json(); } catch { }

      if (!res.ok) {
        const details = (data?.errors || data?.error || data?.message) ?? `Failed with ${res.status}`;
        const msg = typeof details === "object" ? Object.values(details).flat().join(" ") : String(details);
        throw new Error(msg);
      }

      setBanner({ type: "success", msg: data?.message ?? "Subscribed successfully. You’re on the list!" });
      setTimeout(() => setBanner(null), 2000);
      setEmail("");
    } catch (e: any) {
      setBanner({ type: "error", msg: e?.message || "Subscription failed. Try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5" />
      <div className="mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Link href="/" aria-label="Praans Consultech">
                <Image
                  src="/logo.webp"
                  alt="Praans Consultech"
                  width={160}
                  height={35}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg">
              Your trusted partner for compliance and labor law resources.
            </p>
            <Link
              href="mailto:info@praansconsultech.com"
              className="mt-6 inline-flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-lg"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
              info@praansconsultech.com
            </Link>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/about" aria-label="About Us" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/acts" aria-label="Resources" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blog" aria-label="Blog" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" aria-label="Contact Us" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/privacy-policy" aria-label="Privacy Policy" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" aria-label="Terms and Conditions" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" aria-label="Disclaimer" className="hover:text-orange-400 transition-colors duration-300 text-lg">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-3 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-lg">Subscribe Newsletter for latest update</p>

            {/* Feedback banner */}
            {banner && (
              <div
                role="alert"
                className={`mb-3 rounded-md border px-3 py-2 text-sm ${banner.type === "success"
                  ? "border-green-300 bg-green-50 text-green-800"
                  : "border-red-300 bg-red-50 text-red-800"
                  }`}
              >
                {banner.msg}
              </div>
            )}

            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 backdrop-blur-sm"
                aria-label="Email address"
                disabled={loading}
              />
              <Button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg cursor-pointer disabled:opacity-60"
                aria-label="Subscribe"
              >
                {loading ? "Subscribing…" : "Subscribe"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

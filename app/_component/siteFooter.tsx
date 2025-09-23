"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "https://prns.prisminfoways.com";
const SUBSCRIBE_ENDPOINT = new URL("/api/subscribe", API_BASE).toString();

export default function SiteFooter() {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handleSubscribe = async () => {
    setErrorMsg(null);

    if (!isValidEmail(email)) {
      setErrorMsg("Enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-store",
        body: JSON.stringify({ email }),
      });

      let data: any = null;
      try {
        data = await res.json();
      } catch {
        /* ignore */
      }

      if (!res.ok) {
        const details =
          data?.errors || data?.error || data?.message || `Failed with ${res.status}`;
        const msg =
          typeof details === "object"
            ? Object.values(details).flat().join(" ")
            : String(details);
        throw new Error(msg);
      }

      // Success → lock the UI and show the success line
      setSubscribed(true);
      setEmail("");
    } catch (e: any) {
      setErrorMsg(e?.message || "Subscription failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !loading && !subscribed) handleSubscribe();
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5" />
      <div className="relative z-10 mx-auto px-4">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-6 flex items-center space-x-2">
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
            <p className="text-lg leading-relaxed text-gray-400">
              Your trusted partner for compliance and labor law resources.
            </p>
            <Link
              href="mailto:info@praansconsultech.com"
              className="mt-6 inline-flex items-center gap-3 text-lg text-orange-400 transition-colors duration-300 hover:text-orange-300"
              aria-label="Email Us"
            >
              <Mail className="h-5 w-5" />
              info@praansconsultech.com
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/our-company"
                  aria-label="About Us"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/library"
                  aria-label="Resources"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  aria-label="Blog"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact Us"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/privacy-policy"
                  aria-label="Privacy Policy"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  aria-label="Terms and Conditions"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  aria-label="Disclaimer"
                  className="text-lg transition-colors duration-300 hover:text-orange-400"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Stay Updated</h3>
            <p className="mb-4 text-lg text-gray-400">
              Subscribe Newsletter for latest update
            </p>

            {/* Success state: show only the success line */}
            {subscribed ? (
              <p
                role="status"
                className="mb-3 flex items-center gap-2 text-sm text-orange-500"
              >
                <CheckCircle2 className="h-4 w-4" />
                Thanks for subscribing!
              </p>
            ) : (
              <>
                {/* Error (if any) */}
                {errorMsg && (
                  <p className="mb-3 text-sm text-red-400" role="alert">
                    {errorMsg}
                  </p>
                )}

                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={onKeyDown}
                    className="bg-gray-800/50 text-white placeholder:text-gray-400 backdrop-blur-sm focus-visible:ring-orange-500 disabled:opacity-60"
                    aria-label="Email address"
                    disabled={loading}
                  />
                  <Button
                    onClick={handleSubscribe}
                    disabled={loading}
                    className="cursor-pointer bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg transition-colors hover:from-orange-600 hover:to-orange-700 disabled:opacity-60"
                    aria-label="Subscribe"
                  >
                    {loading ? "Subscribing…" : "Subscribe"}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

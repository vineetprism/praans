import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



export default function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5" />
      <div className="container mx-auto px-4 relative z-10">
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
            <a
              href="mailto:info@praansconsultech.com"
              className="mt-6 inline-flex items-center gap-3 text-orange-400 hover:text-orange-300 transition-colors duration-300 text-lg"
            >
              <Mail className="w-5 h-5" />
              info@praansconsultech.com
            </a>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/services"
                  aria-label="Services"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/acts"
                  aria-label="Resources"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-label="About Us"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  aria-label="Contact Us"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-6 text-white">Legal</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link
                  href="/privacy-policy"
                  aria-label="Privacy Policy"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  aria-label="Terms and Conditions"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  aria-label="Disclaimer"
                  className="hover:text-orange-400 transition-colors duration-300 text-lg"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-6 text-white">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 text-lg">
              Get the latest compliance updates
            </p>
            <div className="flex gap-3">
              <Input
                placeholder="Your email"
                className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg" aria-label="Subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
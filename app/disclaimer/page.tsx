import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Praans Consultech"
                  width={180}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/acts" className="text-gray-600 hover:text-orange-500 transition-colors">
                Acts
              </Link>
              <Link href="/minimum-wages" className="text-gray-600 hover:text-orange-500 transition-colors">
                Wages
              </Link>
              <Link href="/forms" className="text-gray-600 hover:text-orange-500 transition-colors">
                Forms
              </Link>
              <Link href="/gazette" className="text-gray-600 hover:text-orange-500 transition-colors">
                Notifications
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-slate-800">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
              <p>
                The information provided on this website is published by Praans Consultech solely for general
                informational purposes related to labour law compliance, statutory registrations, advisory services,
                litigation support, and related offerings. While every effort is made to ensure that the content is
                accurate, complete, and current, Praans Consultech makes no representations or warranties of any kind,
                express or implied, about the reliability, accuracy, suitability, or availability of the website
                content.
              </p>
              <p>
                The information contained herein may include technical inaccuracies or typographical errors. Content may
                also change over time due to updates in laws, regulations, or internal policies, and we do not undertake
                any obligation to update such material on a regular basis.
              </p>
              <p>
                The use of any information or materials from this website is entirely at the discretion and risk of the
                user. Praans Consultech will not be responsible or liable for any direct, indirect, incidental, or
                consequential loss or damage arising from the use of this website or from any reliance placed on
                information contained within it.
              </p>
              <p>
                The website may include links to third-party sites or external resources for reference purposes. Praans
                Consultech does not endorse or assume responsibility for the content, accuracy, or availability of those
                sites.
              </p>
              <p>
                Use of this website implies your acceptance and understanding of the terms outlined in this disclaimer.
              </p>
              <p>
                For any inquiries, clarifications, or feedback, please contact us at{" "}
                <a href="mailto:info@praansconsultech.com" className="text-orange-600 hover:underline">
                  info@praansconsultech.com
                </a>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p className="font-semibold text-lg text-white mb-2">Single Platform for All Labour Law Compliances</p>
            <p>&copy; 2025 Praans Consultech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

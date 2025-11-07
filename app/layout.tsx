import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Header from "./_component/siteHeader"
import SiteFooter from "./_component/siteFooter"
import { GoogleAnalytics } from "@next/third-parties/google"

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VQQP9G251C'

export const metadata: Metadata = {
  title: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  description: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  generator: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  const isProd = process.env.NODE_ENV === 'production'

  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: 'Geist Sans', 'Arial', sans-serif;
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      {/* Global shell */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col`}>
        {isProd && <GoogleAnalytics gaId={GA_ID} />}
        <Header />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

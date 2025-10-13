import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import Header from "./_component/siteHeader"
import SiteFooter from "./_component/siteFooter"

export const metadata: Metadata = {
  title: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  description: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  generator: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
        <Header />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

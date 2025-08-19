// import type { Metadata } from 'next'
// import { GeistSans } from 'geist/font/sans'
// import { GeistMono } from 'geist/font/mono'
// import './globals.css'

// export const metadata: Metadata = {
//   title: 'v0 App',
//   description: 'Created with v0',
//   generator: 'v0.dev',
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <style>{`
// html {
//   font-family: ${GeistSans.style.fontFamily};
//   --font-sans: ${GeistSans.variable};
//   --font-mono: ${GeistMono.variable};
// }
//         `}</style>
//       </head>
//       <body>{children}</body>
//     </html>
//   )
// }








import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

// ⬇️ Shared chrome
import SiteHeader from "@/app/component/siteHeader"
import SiteFooter from "@/app/component/siteFooter"

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      {/* Global shell */}
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

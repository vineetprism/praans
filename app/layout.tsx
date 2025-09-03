// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import "./globals.css"
// import SiteHeader from "@/app/component/siteHeader"
// import SiteFooter from "@/app/component/siteFooter"

// export const metadata: Metadata = {
//   title: "Praans Consultech",
//   description: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
//   generator: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   return (
//     <html lang="en">
//       <head>
//         <style>{`
//           html {
//             font-family: ${GeistSans.style.fontFamily};
//             --font-sans: ${GeistSans.variable};
//             --font-mono: ${GeistMono.variable};
//           }
//         `}</style>
//       </head>
//       {/* Global shell */}
//       <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col`}>
//         <SiteHeader />
//         <main className="flex-1">{children}</main>
//         <SiteFooter />
//       </body>
//     </html>
//   )
// }


// app/layout.tsx
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/app/component/siteHeader"
import SiteFooter from "@/app/component/siteFooter"

export const metadata: Metadata = {
  title: "Praans Consultech",
  description:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  generator:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
}

// One global sans: Montserrat
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}


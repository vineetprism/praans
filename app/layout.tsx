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
import { Poppins } from "next/font/google"
import "./globals.css"
import SiteHeader from "@/app/_component/siteHeader"
import SiteFooter from "@/app/_component/siteFooter"

export const metadata: Metadata = {
  title: "Praans Consultech",
  description:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  generator:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
}

// Load Poppins as the global sans
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans", // Tailwind will read this
  display: "swap",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main className="">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

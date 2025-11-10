// import type { Metadata } from "next"
// import { GeistSans } from "geist/font/sans"
// import { GeistMono } from "geist/font/mono"
// import "./globals.css"
// import Header from "./_component/siteHeader"
// import SiteFooter from "./_component/siteFooter"
// import { GoogleAnalytics } from "@next/third-parties/google"

// const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-VQQP9G251C'

// export const metadata: Metadata = {
//   title: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
//   description: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
//   generator: "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {

//   const isProd = process.env.NODE_ENV === 'production'

//   return (
//     <html lang="en">
//       <head>
//         <style>{`
//           html {
//             font-family: 'Geist Sans', 'Arial', sans-serif;
//             --font-sans: ${GeistSans.variable};
//             --font-mono: ${GeistMono.variable};
//           }
//         `}</style>
//       </head>
//       {/* Global shell */}
//       <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col`}>
//         {isProd && <GoogleAnalytics gaId={GA_ID} />}
//         <Header />
//         <main className="flex-1">{children}</main>
//         <SiteFooter />
//       </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata: Metadata = {
  title:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  description:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
  generator:
    "Praans Consultech | AI-driven platform for labour law compliance and business registration in India",
};

const ClientAnalytics = dynamic(() => import("./_component/ClientAnalytics"), {
  ssr: true,
});

const Header = dynamic(() => import("./_component/siteHeader"), {
  ssr: true,
});

const SiteFooter = dynamic(() => import("./_component/siteFooter"), {
  ssr: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-gray-50 text-slate-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Suspense fallback={null}>
          <ClientAnalytics />
        </Suspense>
      </body>
    </html>
  );
}

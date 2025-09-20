import type React from "react"
import type { Metadata } from "next"
import { Zen_Old_Mincho } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Suspense } from "react"

const zenOldMincho = Zen_Old_Mincho({
  subsets: ["latin"],
  variable: "--font-zen-old-mincho",
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "page - Innovative Fusion Restaurant",
  description: "High-end minimalist fusion restaurant offering an exceptional dining experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${zenOldMincho.variable}`}>
      <body className="font-zen antialiased bg-white text-black">
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}

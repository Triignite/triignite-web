import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Triignite - Crafting Apps People Use, Love, and Remember",
  description:
    "We craft and build mobile applications that people use, love, and remember. Discover our innovative app solutions and portfolio.",
  keywords: "mobile apps, app development, iOS apps, app scaling, Triignite, paraphraser tool",
  authors: [{ name: "Triignite" }],
  creator: "Triignite",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://triignite.com",
    title: "Triignite - Crafting Apps People Use, Love, and Remember",
    description: "We craft and build mobile applications that people use, love, and remember.",
    siteName: "Triignite",
  },
  twitter: {
    card: "summary_large_image",
    title: "Triignite - Crafting Apps People Use, Love, and Remember",
    description: "We craft and build mobile applications that people use, love, and remember.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

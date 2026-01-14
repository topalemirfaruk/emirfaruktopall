import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

import type { Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  // Also supported but less common
  // interactiveWidget: 'resizes-visual',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://emirfaruktopal.com'), // Replace with actual domain
  title: {
    default: "Emir Faruk Topal - Linux System Administrator",
    template: "%s | Emir Faruk Topal"
  },
  description: "Junior Linux System Administrator. Portfolio, blog, and tutorials on Linux systems and open source technologies.",
  keywords: [
    "Linux", "Sistem Yönetimi", "System Administration", "DevOps", "Open Source",
    "Açık Kaynak", "Arch Linux", "Debian", "Ubuntu", "Server Management",
    "Web Development", "Next.js", "React", "Docker", "Kubernetes", "Bilişim", "Teknoloji Blogu"
  ],
  authors: [{ name: "Emir Faruk Topal" }],
  creator: "Emir Faruk Topal",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emirfaruktopal.com",
    title: "Emir Faruk Topal - Linux System Administrator",
    description: "Junior Linux System Administrator. Portfolio, blog, and tutorials on Linux systems and open source technologies.",
    siteName: "Emir Faruk Topal",
    images: [
      {
        url: "/og-image.jpg", // Needs to be created or mapped
        width: 1200,
        height: 630,
        alt: "Emir Faruk Topal - Linux System Administrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emir Faruk Topal - Linux System Administrator",
    description: "Junior Linux System Administrator. Portfolio, blog, and tutorials on Linux systems and open source technologies.",
    images: ["/og-image.jpg"],
    creator: "@emirfaruktopal", // Update if known or remove
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    yandex: "eee96c1a1eba2b1b",
    google: "google-site-verification-code", // Optional: if you have one
  },
}

import { ClerkProvider } from "@clerk/nextjs"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="tr">
        <body className={`font-sans antialiased`}>
          <div className="flex min-h-screen bg-[#0a0f0a]">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  )
}

import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CopilotWidget from "@/components/copilot/chat-widget"
import { getLocalBusinessSchema } from "@/lib/schema"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a472a",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://noblepropertycares.com"),
  title: {
    default: "Noble Property Care LLC - Property Maintenance & Management",
    template: "%s | Noble Property Care LLC",
  },
  description:
    "Your trusted partner in property maintenance and management services for residential homes, apartment complexes, and commercial properties in Royal Palm Beach, FL.",
  keywords: [
    "property maintenance",
    "property management",
    "rental property landscaping",
    "commercial property maintenance",
    "Royal Palm Beach",
    "Florida",
    "property care",
    "landscaping services",
  ],
  authors: [{ name: "Noble Property Care LLC" }],
  creator: "Noble Property Care LLC",
  publisher: "Noble Property Care LLC",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://noblepropertycares.com",
    siteName: "Noble Property Care LLC",
    title: "Noble Property Care LLC - Property Maintenance & Management",
    description:
      "Your trusted partner in property maintenance and management services for residential homes, apartment complexes, and commercial properties in Royal Palm Beach, FL.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png",
        width: 1200,
        height: 630,
        alt: "Noble Property Care LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noble Property Care LLC - Property Maintenance & Management",
    description:
      "Your trusted partner in property maintenance and management services for residential homes, apartment complexes, and commercial properties in Royal Palm Beach, FL.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png"],
    creator: "@noblepropertycare",
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
    // Add your verification codes here when you have them
    google: "google-site-verification-code",
    // bing: "bing-verification-code",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the structured data for the organization
  const structuredData = getLocalBusinessSchema()

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a472a" />
        <meta name="msapplication-TileColor" content="#1a472a" />
      </head>
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CopilotWidget />
      </body>
    </html>
  )
}

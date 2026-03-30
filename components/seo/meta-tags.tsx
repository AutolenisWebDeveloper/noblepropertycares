"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface MetaTagsProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterCard?: "summary" | "summary_large_image"
  noIndex?: boolean
  keywords?: string
  structuredData?: Record<string, any>
}

export default function MetaTags({
  title = "Noble Property Care LLC - Property Maintenance & Management",
  description = "Your trusted partner in property maintenance and management services for residential homes, apartment complexes, and commercial properties in Royal Palm Beach, FL.",
  canonicalUrl,
  ogImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  keywords = "property maintenance, property management, rental property landscaping, commercial property maintenance, Royal Palm Beach, Florida",
  structuredData,
}: MetaTagsProps) {
  const router = useRouter()
  const siteUrl = "https://noblepropertycares.com"
  const currentUrl = canonicalUrl || `${siteUrl}${router.asPath}`

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Noble Property Care LLC" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}
    </Head>
  )
}

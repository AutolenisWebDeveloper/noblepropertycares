import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { getBlogPost, getBlogPosts, getRelatedPosts } from "@/lib/blog"
import { CalendarIcon, Clock, Facebook, Linkedin, Mail, Tag, Twitter } from "lucide-react"
import JsonLd from "@/components/seo/json-ld"
import { getBreadcrumbSchema } from "@/lib/schema"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    }
  }

  return {
    title: `${post.title} | Noble Property Care Blog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category, "property maintenance", "property care blog"],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://noblepropertycares.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Noble Property Care"],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3)

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Organization",
      name: "Noble Property Care LLC",
      url: "https://noblepropertycares.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Noble Property Care LLC",
      logo: {
        "@type": "ImageObject",
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_NoblePropertyCare_Landscaping_Logo_BusineeCard_Back.jpg-rSvKsx1uPxb0gBYsbozpJiyYTILIWG.jpeg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://noblepropertycares.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  }

  // Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://noblepropertycares.com" },
    { name: "Blog", url: "https://noblepropertycares.com/blog" },
    { name: post.title, url: `https://noblepropertycares.com/blog/${post.slug}` },
  ])

  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />

      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-500 mb-6">
              <span className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                {post.readTime} min read
              </span>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none mb-12">{post.content}</div>

          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="border-t border-b py-6 mb-12">
            <h3 className="text-lg font-semibold mb-3">Share this article:</h3>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://noblepropertycares.com/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://noblepropertycares.com/blog/${post.slug}&text=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://noblepropertycares.com/blog/${post.slug}&title=${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href={`mailto:?subject=${post.title}&body=Check out this article: https://noblepropertycares.com/blog/${post.slug}`}
                  aria-label="Share via Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.slug} className="border rounded-lg overflow-hidden">
                    <div className="relative pt-[60%]">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Button asChild variant="outline" size="sm">
                        <Link href={`/blog/${relatedPost.slug}`}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-primary/10 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Need Professional Property Care Services?</h2>
            <p className="mb-6">
              Contact Noble Property Care today for expert property maintenance, landscaping, and management services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

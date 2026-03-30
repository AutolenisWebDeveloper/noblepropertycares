import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { getBlogPosts } from "@/lib/blog"
import { CalendarIcon, Clock, Tag, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Property Maintenance Blog | Tips & Insights | Noble Property Care",
  description:
    "Explore our blog for expert tips, insights, and advice on property maintenance, landscaping, cleaning, and management for residential and commercial properties.",
  keywords: [
    "property maintenance blog",
    "landscaping tips",
    "property management advice",
    "cleaning guides",
    "Royal Palm Beach property blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Property Maintenance Blog | Tips & Insights | Noble Property Care",
    description:
      "Explore our blog for expert tips, insights, and advice on property maintenance, landscaping, cleaning, and management for residential and commercial properties.",
    url: "https://noblepropertycares.com/blog",
  },
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const categories = [...new Set(posts.map((post) => post.category))]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Insights</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Property Care Knowledge</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Expert tips, insights, and advice on property maintenance and management.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

          {/* Categories */}
          <div className="mb-12 mt-6">
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90 rounded-lg text-xs">
                All Posts
              </Button>
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm" className="rounded-lg text-xs">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-2xl border border-slate-200/80 bg-white overflow-hidden premium-card">
                <div className="relative h-[280px] sm:h-[360px] overflow-hidden">
                  <Image
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-4">
                    <Tag className="h-3 w-3" />
                    {posts[0].category}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="flex items-center text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {posts[0].readTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{posts[0].title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{posts[0].excerpt}</p>
                  <Button asChild className="rounded-lg">
                    <Link href={`/blog/${posts[0].slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">Latest Articles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.slice(1).map((post) => (
                <div key={post.slug} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden premium-card flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-primary/5 text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.readTime} min</span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground line-clamp-2 mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 flex-grow">{post.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center transition-colors">
                        Read Article
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-xl font-bold text-foreground mb-2">Stay informed</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Get the latest property maintenance tips and industry insights delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-grow h-11 px-4 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  required
                />
                <Button type="submit" className="h-11 rounded-lg bg-primary hover:bg-primary/90 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

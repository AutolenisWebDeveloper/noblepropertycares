import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { getBlogPosts } from "@/lib/blog"
import { CalendarIcon, Clock, Tag } from "lucide-react"

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
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Blog</h1>
            <p className="mt-6 text-xl text-gray-200">
              Expert tips, insights, and advice on property maintenance and management
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Categories</h2>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" className="bg-primary text-white hover:bg-primary/90">
                All Posts
              </Button>
              {categories.map((category) => (
                <Button key={category} variant="outline">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {posts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Post</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {posts[0].date}
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {posts[0].readTime} min read
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{posts[0].title}</h3>
                  <p className="text-gray-600 mb-6">{posts[0].excerpt}</p>
                  <Button asChild>
                    <Link href={`/blog/${posts[0].slug}`}>Read More</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.slice(1).map((post) => (
                <Card key={post.slug} className="h-full flex flex-col">
                  <div className="relative pt-[60%] overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        <Tag className="h-3 w-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-xs">
                      <span className="flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime} min read
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest property maintenance tips, industry news, and exclusive offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

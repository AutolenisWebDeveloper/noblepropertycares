import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found | 404 Error",
  description: "The page you are looking for doesn't exist or has been moved.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 text-primary mb-6">
        <span className="text-2xl font-bold">404</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Page not found</h1>
      <p className="mt-3 text-base text-muted-foreground max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved to a new location.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Button asChild size="lg" className="rounded-lg">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="rounded-lg">
          <Link href="/contact">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}

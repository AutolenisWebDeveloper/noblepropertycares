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
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Page Not Found</h2>
      <p className="text-lg text-gray-600 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" aria-hidden="true" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">
            <ArrowLeft className="mr-2 h-5 w-5" aria-hidden="true" />
            Contact Support
          </Link>
        </Button>
      </div>
    </div>
  )
}

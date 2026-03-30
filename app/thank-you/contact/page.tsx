import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone } from "lucide-react"

export default function ContactThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Thank You!</h1>
            <p className="mt-6 text-xl text-gray-200">
              We've received your message and appreciate your interest in Noble Property Care.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8 flex items-start">
              <CheckCircle className="h-8 w-8 text-green-500 flex-shrink-0 mr-4 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-green-800">Message Received!</h2>
                <p className="mt-2 text-lg text-green-700">
                  Thank you for reaching out to Noble Property Care. We've received your message and will get back to
                  you within 24 hours.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>What happens next?</h3>
              <p>
                Our team is reviewing your message and will contact you shortly. We strive to respond to all inquiries
                within 24 hours during business days.
              </p>

              <h3>Need immediate assistance?</h3>
              <p>
                If you have an urgent matter that requires immediate attention, please don't hesitate to call us
                directly:
              </p>

              <div className="flex items-center my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium">Call us at:</p>
                  <a href="tel:+19548167872" className="text-xl font-bold text-primary hover:underline">
                    +1 954-816-7872
                  </a>
                </div>
              </div>

              <h3>Explore our services</h3>
              <p>While you wait for our response, feel free to explore our comprehensive property care services:</p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Rental Property Landscaping & Outdoor Care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Commercial Property Maintenance & Repairs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Janitorial & Deep Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Residential Property Maintenance</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex items-center">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <Button asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

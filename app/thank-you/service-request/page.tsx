import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Calendar, Mail } from "lucide-react"

export default function ServiceRequestThankYouPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Request Received!</h1>
            <p className="mt-6 text-xl text-gray-200">
              Thank you for requesting our professional property care services.
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
                <h2 className="text-2xl font-bold text-green-800">Service Request Confirmed!</h2>
                <p className="mt-2 text-lg text-green-700">
                  We've received your service request and will contact you within 24 hours to confirm your appointment
                  and provide you with a detailed quote.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3>What happens next?</h3>
              <p>Our team is reviewing your service request and will reach out to you shortly to:</p>

              <ul className="space-y-2 my-4">
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Confirm your preferred date and time</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Discuss any specific requirements</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-0.5" />
                  <span>Provide you with a detailed quote</span>
                </li>
              </ul>

              <p>We've also sent a confirmation email to the address you provided with a summary of your request.</p>

              <h3>Need immediate assistance?</h3>
              <p>If you have an emergency that requires immediate attention, please call us directly:</p>

              <div className="flex items-center my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <div>
                  <p className="font-medium">Call us at:</p>
                  <a href="tel:+19548167872" className="text-xl font-bold text-primary hover:underline">
                    +1 954-816-7872
                  </a>
                </div>
              </div>

              <h3>Have more questions?</h3>
              <p>
                If you have any questions about our services or would like to learn more about Noble Property Care,
                please visit our About Us page or contact us directly.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild variant="outline" className="flex items-center">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, ArrowRight } from "lucide-react"

export default function ContactThankYouPage() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Confirmation</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Thank you</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              We&apos;ve received your message and appreciate your interest in Noble Property Care.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 sm:p-8 mb-8">
              <div className="flex gap-4">
                <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-semibold text-emerald-900">Message received</h2>
                  <p className="mt-1 text-sm text-emerald-700 leading-relaxed">
                    Thank you for reaching out. Our team will review your message and respond within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">What happens next?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our team is reviewing your inquiry and will contact you shortly. We strive to respond to all messages within 24 hours during business days.
                </p>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Need immediate assistance?</p>
                  <a href="tel:+19548167872" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    +1 954-816-7872
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">Explore our services</h3>
                <ul className="space-y-2">
                  {[
                    "Rental Property Landscaping & Outdoor Care",
                    "Commercial Property Maintenance & Repairs",
                    "Janitorial & Deep Cleaning",
                    "Residential Property Maintenance",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="rounded-lg">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <Button asChild className="rounded-lg">
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

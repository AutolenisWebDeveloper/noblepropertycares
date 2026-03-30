import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowLeft, Phone, Calendar, Mail, ArrowRight } from "lucide-react"

export default function ServiceRequestThankYouPage() {
  return (
    <>
      <section className="bg-primary py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Confirmation</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Request received</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Thank you for requesting our professional property care services.
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
                  <h2 className="text-lg font-semibold text-emerald-900">Service request confirmed</h2>
                  <p className="mt-1 text-sm text-emerald-700 leading-relaxed">
                    We&apos;ve received your service request and will contact you within 24 hours to confirm your appointment and provide a detailed quote.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-3">What happens next?</h3>
                <p className="text-sm text-muted-foreground mb-4">Our team will reach out to you shortly to:</p>
                <div className="space-y-3">
                  {[
                    { icon: Calendar, text: "Confirm your preferred date and time" },
                    { icon: CheckCircle, text: "Discuss any specific requirements" },
                    { icon: Mail, text: "Provide you with a detailed quote" },
                  ].map((step) => (
                    <div key={step.text} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <step.icon className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{step.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Emergency or urgent matter?</p>
                  <a href="tel:+19548167872" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    +1 954-816-7872
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="rounded-lg">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                </Link>
              </Button>
              <Button asChild className="rounded-lg">
                <Link href="/about">
                  Learn More About Us
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

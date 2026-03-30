import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Leaf, Building2, Sparkles, Home } from "lucide-react"
import type { Metadata } from "next"
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Professional Property Care Services | Landscaping, Maintenance & Cleaning",
  description:
    "Explore our comprehensive property care services including rental property landscaping, commercial maintenance, janitorial cleaning, and residential property management in Royal Palm Beach, FL.",
  keywords: [
    "property maintenance services",
    "rental property landscaping",
    "commercial property maintenance",
    "janitorial services",
    "property cleaning",
    "Royal Palm Beach",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Professional Property Care Services | Landscaping, Maintenance & Cleaning",
    description:
      "Explore our comprehensive property care services including rental property landscaping, commercial maintenance, janitorial cleaning, and residential property management in Royal Palm Beach, FL.",
    url: "https://noblepropertycares.com/services",
  },
}

export default function ServicesPage() {
  const services = [
    getServiceSchema(
      "Rental Property Landscaping & Outdoor Care",
      "Professional landscaping services to enhance curb appeal and maintain beautiful outdoor spaces for rental properties, including lawn care, garden design, and hardscaping.",
      "https://noblepropertycares.com/services#landscaping",
    ),
    getServiceSchema(
      "Commercial Property Maintenance & Repairs",
      "Comprehensive maintenance services for commercial properties, including regular inspections, repairs, and upgrades to ensure your business premises are always in top condition.",
      "https://noblepropertycares.com/services#maintenance",
    ),
    getServiceSchema(
      "Janitorial & Deep Cleaning",
      "Professional cleaning services to maintain a healthy environment for residents, employees, and guests in both residential and commercial properties.",
      "https://noblepropertycares.com/services#cleaning",
    ),
    getServiceSchema(
      "Residential Property Maintenance",
      "Comprehensive maintenance services for residential properties to ensure they remain in excellent condition, including home repairs, seasonal maintenance, and energy efficiency upgrades.",
      "https://noblepropertycares.com/services#residential",
    ),
  ]

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "https://noblepropertycares.com" },
    { name: "Services", url: "https://noblepropertycares.com/services" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([...services, breadcrumb]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Our Services</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Comprehensive property care solutions
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Specialized in rental property landscaping and commercial property maintenance — tailored to protect and enhance your investments.
            </p>
          </div>
        </div>
      </section>

      {/* Rental Property Landscaping Section */}
      <section id="landscaping" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-4">
                <Leaf className="h-3 w-3" />
                Landscaping
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Rental Property Landscaping & Outdoor Care
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We provide professional landscaping services to enhance the curb appeal and value of your rental properties. Our expert team ensures your outdoor spaces are beautiful, functional, and well-maintained.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Lawn Care & Maintenance", desc: "Regular mowing, edging, and fertilization" },
                  { title: "Garden Design & Planting", desc: "Seasonal flowers, shrubs, and tree planting" },
                  { title: "Hardscaping & Outdoor Living", desc: "Patios, walkways, and outdoor amenity areas" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-lg">
                  <Link href="/request-service">
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landscaping%20%26%20Outdoor%20Care%20%282%29.png-4BPGl5UE4BKnRzjenPF1qSPMJmrqnr.webp"
                alt="Professional rental property landscaping with modern apartment buildings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Maintenance Section */}
      <section id="maintenance" className="bg-slate-50/50 py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="relative h-[350px] sm:h-[420px] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%20Maintenance%20%26%20Repairs-vXQVsZq8Newu7BtxaCg8MlNspCTd5f.png"
                alt="Commercial Property Maintenance & Repairs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-4">
                <Building2 className="h-3 w-3" />
                Maintenance
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Commercial Property Maintenance & Repairs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We offer comprehensive maintenance services to keep your commercial properties in top condition. Our team handles everything from routine inspections to complex repairs.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: "Preventative Maintenance", desc: "Regular inspections and proactive repairs" },
                  { title: "Building Systems Upkeep", desc: "HVAC, electrical, and plumbing maintenance" },
                  { title: "Emergency Repairs", desc: "24/7 response for urgent maintenance issues" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-200/80">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild className="rounded-lg">
                  <Link href="/request-service">
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">More Services</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Additional property care solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cleaning Section */}
            <div id="cleaning" className="scroll-mt-20 p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-4">
                <Sparkles className="h-3 w-3" />
                Cleaning
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Janitorial & Deep Cleaning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Professional cleaning services to maintain a healthy environment for residents, employees, and guests.
              </p>
              <ul className="space-y-3">
                {["Commercial Janitorial Services", "Residential Deep Cleaning", "Apartment Complex Cleaning"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Residential Maintenance Section */}
            <div id="residential" className="scroll-mt-20 p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-4">
                <Home className="h-3 w-3" />
                Residential
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Residential Property Maintenance</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Comprehensive maintenance services for residential properties to ensure they remain in excellent condition.
              </p>
              <ul className="space-y-3">
                {["Home Repairs and Improvements", "Seasonal Maintenance", "Energy Efficiency Upgrades"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50/50 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready for professional property care?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contact us today to discuss your property maintenance needs. We provide customized solutions that protect and enhance the value of your property.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="rounded-lg bg-primary hover:bg-primary/90 text-white">
                <Link href="/request-service">
                  Request Service
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

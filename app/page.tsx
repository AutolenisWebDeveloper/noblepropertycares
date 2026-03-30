import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Clock, Award, Leaf, Building2, Sparkles, Home } from "lucide-react"
import type { Metadata } from "next"
import { getServiceSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Expert Property Maintenance & Management Services in Royal Palm Beach, FL",
  description:
    "Noble Property Care provides professional property maintenance, landscaping, and management services for residential and commercial properties in Royal Palm Beach and surrounding areas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert Property Maintenance & Management Services in Royal Palm Beach, FL",
    description:
      "Noble Property Care provides professional property maintenance, landscaping, and management services for residential and commercial properties in Royal Palm Beach and surrounding areas.",
  },
}

export default function Home() {
  const maintenanceService = getServiceSchema(
    "Property Maintenance & Repairs",
    "Comprehensive maintenance services for commercial properties, including regular inspections, repairs, and upgrades to ensure your business premises are always in top condition.",
    "https://noblepropertycares.com/services#maintenance",
  )

  const landscapingService = getServiceSchema(
    "Rental Property Landscaping & Outdoor Care",
    "Professional landscaping services to enhance curb appeal and maintain beautiful outdoor spaces for rental properties, including lawn care, garden design, and hardscaping.",
    "https://noblepropertycares.com/services#landscaping",
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([maintenanceService, landscapingService]),
        }}
      />

      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apartment%20Complex%20Landscaping-CY1RBIxS2OXzUar2FPv6dvsDrKWuMR.png"
            alt="Beautiful apartment complex with professional landscaping in Royal Palm Beach, Florida"
            fill
            className="object-cover opacity-15"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/80 text-xs font-medium mb-6">
              <Shield className="h-3.5 w-3.5" />
              Licensed & Insured — Serving Royal Palm Beach, FL
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-display font-bold tracking-tight text-white leading-[1.1]">
              Professional Property Care You Can Trust
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl leading-relaxed">
              Expert rental property landscaping and commercial maintenance services. We protect and enhance the value of your most important investments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg font-medium h-12 px-6">
                <Link href="/request-service">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-lg font-medium h-12 px-6"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {[
              { value: "500+", label: "Properties Serviced" },
              { value: "24/7", label: "Emergency Support" },
              { value: "100%", label: "Licensed & Insured" },
              { value: "5★", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="py-6 md:py-8 text-center px-4">
                <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Trusted property care, built on excellence
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Noble Property Care LLC specializes in rental property landscaping and commercial property maintenance. We enhance the value and appeal of your properties with expert craftsmanship and a commitment to quality.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Leaf, title: "Landscaping", desc: "Curb appeal that increases property value" },
                  { icon: Building2, title: "Commercial Care", desc: "Comprehensive building maintenance" },
                  { icon: Sparkles, title: "Custom Plans", desc: "Tailored to your property needs" },
                  { icon: Shield, title: "Fully Insured", desc: "Peace of mind with every service" },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-lg">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png"
                alt="Property maintenance professionals"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Comprehensive property care solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Specialized services designed to protect and enhance the value of your residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden premium-card">
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rental%20Property%20Landscaping%20%26%20Outdoor%20Care%20-gkDJrt1061XEXGlFKDuIdVxsa3vCzx.png"
                  alt="Professional rental property landscaping featuring manicured lawns and diverse plant arrangements"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-3">
                  <Leaf className="h-3 w-3" />
                  Landscaping
                </div>
                <h3 className="text-xl font-semibold text-foreground">Rental Property Landscaping & Outdoor Care</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Professional landscaping services to enhance curb appeal and maintain beautiful outdoor spaces for rental properties, including lawn care, garden design, and hardscaping.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" className="rounded-lg w-full sm:w-auto">
                    <Link href="/services#landscaping">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden premium-card">
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%20Maintenance%20%26%20Repairs-vXQVsZq8Newu7BtxaCg8MlNspCTd5f.png"
                  alt="Commercial Property Maintenance & Repairs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/5 text-primary text-xs font-medium mb-3">
                  <Building2 className="h-3 w-3" />
                  Maintenance
                </div>
                <h3 className="text-xl font-semibold text-foreground">Commercial Property Maintenance & Repairs</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Comprehensive maintenance services for commercial properties, including regular inspections, repairs, and upgrades to ensure your business premises are always in top condition.
                </p>
                <div className="mt-6">
                  <Button asChild variant="outline" className="rounded-lg w-full sm:w-auto">
                    <Link href="/services#maintenance">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg" className="rounded-lg bg-primary hover:bg-primary/90 text-white">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              The Noble Property Care difference
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We combine industry expertise with a commitment to quality that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Specialized Expertise",
                description: "Focused exclusively on rental property landscaping and commercial maintenance.",
              },
              {
                icon: Home,
                title: "Tailored Service Plans",
                description: "Customized maintenance programs designed for your specific property needs.",
              },
              {
                icon: Clock,
                title: "24/7 Emergency Support",
                description: "Prompt, reliable assistance for urgent property issues around the clock.",
              },
              {
                icon: Shield,
                title: "Licensed & Insured",
                description: "Complete peace of mind with fully licensed and insured professionals.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card text-center"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

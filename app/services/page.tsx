import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
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
  // Structured data for services
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

  // Breadcrumb schema
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
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Property Care Services</h1>
            <p className="mt-6 text-xl text-gray-200">
              Specializing in Rental Property Landscaping and Commercial Property Maintenance
            </p>
          </div>
        </div>
      </section>

      {/* Rental Property Landscaping Section */}
      <section id="landscaping" className="py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Rental Property Landscaping & Outdoor Care
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We provide professional landscaping services to enhance the curb appeal and value of your rental
                properties. Our expert team ensures your outdoor spaces are beautiful, functional, and well-maintained.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Lawn Care & Maintenance</p>
                    <p className="text-gray-600">Regular mowing, edging, and fertilization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Garden Design & Planting</p>
                    <p className="text-gray-600">Seasonal flowers, shrubs, and tree planting</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Hardscaping & Outdoor Living</p>
                    <p className="text-gray-600">Patios, walkways, and outdoor amenity areas</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/request-service">
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landscaping%20%26%20Outdoor%20Care%20%282%29.png-4BPGl5UE4BKnRzjenPF1qSPMJmrqnr.webp"
                alt="Professional rental property landscaping with modern apartment buildings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Property Maintenance Section */}
      <section id="maintenance" className="bg-gray-50 py-16 md:py-24 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%20Maintenance%20%26%20Repairs-vXQVsZq8Newu7BtxaCg8MlNspCTd5f.png"
                alt="Commercial Property Maintenance & Repairs"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Commercial Property Maintenance & Repairs
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We offer comprehensive maintenance services to keep your commercial properties in top condition. Our
                team handles everything from routine inspections to complex repairs.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Preventative Maintenance</p>
                    <p className="text-gray-600">Regular inspections and proactive repairs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Building Systems Upkeep</p>
                    <p className="text-gray-600">HVAC, electrical, and plumbing maintenance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency Repairs</p>
                    <p className="text-gray-600">24/7 response for urgent maintenance issues</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/request-service">
                    Request Service <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cleaning Section */}
            <div id="cleaning" className="scroll-mt-20">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Janitorial & Deep Cleaning</h3>
              <p className="text-lg text-gray-600 mb-4">
                We provide professional cleaning services to maintain a healthy environment for residents, employees,
                and guests.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Commercial Janitorial Services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Residential Deep Cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Apartment Complex Cleaning</span>
                </li>
              </ul>
            </div>

            {/* Residential Maintenance Section */}
            <div id="residential" className="scroll-mt-20">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">Residential Property Maintenance</h3>
              <p className="text-lg text-gray-600 mb-4">
                We offer comprehensive maintenance services for residential properties to ensure they remain in
                excellent condition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Home Repairs and Improvements</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Seasonal Maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <span>Energy Efficiency Upgrades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Experience Professional Property Care?
          </h2>
          <p className="mt-4 text-xl text-gray-200 max-w-3xl mx-auto">
            Contact us today to discuss your property maintenance and management needs. We're here to help you protect
            and enhance the value of your property.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/request-service">Request Service Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

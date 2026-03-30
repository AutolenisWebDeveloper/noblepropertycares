import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import { getServiceSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Expert Property Maintenance & Management Services in Lake Worth, FL",
  description:
    "Noble Property Care provides professional property maintenance, landscaping, and management services for residential and commercial properties in Lake Worth and surrounding areas.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Expert Property Maintenance & Management Services in Lake Worth, FL",
    description:
      "Noble Property Care provides professional property maintenance, landscaping, and management services for residential and commercial properties in Lake Worth and surrounding areas.",
  },
}

export default function Home() {
  // Structured data for services
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
      <section className="relative bg-primary py-16 md:py-24 lg:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apartment%20Complex%20Landscaping-CY1RBIxS2OXzUar2FPv6dvsDrKWuMR.png"
            alt="Beautiful apartment complex with professional landscaping in Lake Worth, Florida"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Expert Rental Property Landscaping & Commercial Maintenance
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-gray-200">
              Serving Lake Worth, FL & Surrounding Areas
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link href="/services" className="text-white hover:text-white">
                  Our Services
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-primary bg-white hover:bg-white hover:text-primary"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                About Noble Property Care LLC
              </h2>
              <p className="mt-4 text-base sm:text-lg text-gray-600">
                At Noble Property Care LLC, we specialize in rental property landscaping and commercial property
                maintenance. Our mission is to enhance the value and appeal of your properties with exceptional service,
                expert craftsmanship, and a commitment to excellence.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <p className="text-gray-700">
                    Professional Rental Property Landscaping – Enhancing curb appeal and value
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <p className="text-gray-700">Commercial Property Maintenance – Comprehensive care for businesses</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <p className="text-gray-700">
                    Tailored Service Plans – Customized for rental properties and commercial buildings
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mr-2" />
                  <p className="text-gray-700">Licensed & Insured – Peace of mind with trusted professionals</p>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png"
                alt="Property maintenance professionals"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Our Primary Property Care Services
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Specializing in Rental Property Landscaping and Commercial Property Maintenance
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Rental Property Landscaping */}
            <Card className="service-card h-full">
              <CardHeader>
                <div className="relative w-full pt-[56.25%] rounded-t-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rental%20Property%20Landscaping%20%26%20Outdoor%20Care%20-gkDJrt1061XEXGlFKDuIdVxsa3vCzx.png"
                    alt="Professional rental property landscaping featuring manicured lawns and diverse plant arrangements"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardTitle className="mt-4">Rental Property Landscaping & Outdoor Care</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[100px]">
                  Professional landscaping services to enhance curb appeal and maintain beautiful outdoor spaces for
                  rental properties, including lawn care, garden design, and hardscaping.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#landscaping">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Commercial Property Maintenance */}
            <Card className="service-card h-full">
              <CardHeader>
                <div className="relative w-full pt-[56.25%] rounded-t-lg overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Property%20Maintenance%20%26%20Repairs-vXQVsZq8Newu7BtxaCg8MlNspCTd5f.png"
                    alt="Commercial Property Maintenance & Repairs"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardTitle className="mt-4">Commercial Property Maintenance & Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 min-h-[100px]">
                  Comprehensive maintenance services for commercial properties, including regular inspections, repairs,
                  and upgrades to ensure your business premises are always in top condition.
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services#maintenance">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Why Choose Noble Property Care LLC?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We stand out because we prioritize quality, efficiency, and customer satisfaction.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.275 6.275 0 0 1-3.594-5.256"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Specialized Expertise</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Focused on rental property landscaping and commercial maintenance
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Tailored Service Packages</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Customized plans for rental and commercial properties
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">24/7 Emergency Support</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Prompt assistance for urgent property issues</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Advanced Technology</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600">Using modern tools for efficient property care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to enhance your property's value and appeal?
          </h2>
          <p className="mt-4 text-lg text-gray-200">
            Contact us today for a free consultation and customized service plan.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

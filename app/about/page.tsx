import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "About Noble Property Care | Your Trusted Property Maintenance Partner",
  description:
    "Learn about Noble Property Care LLC, our story, core values, expert team, and commitment to excellence in property maintenance and management services in Lake Worth, FL.",
  keywords: [
    "about Noble Property Care",
    "property maintenance company",
    "property management team",
    "Lake Worth property services",
    "property care experts",
    "Florida property maintenance",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Noble Property Care | Your Trusted Property Maintenance Partner",
    description:
      "Learn about Noble Property Care LLC, our story, core values, expert team, and commitment to excellence in property maintenance and management services in Lake Worth, FL.",
    url: "https://noblepropertycares.com/about",
  },
}

export default function AboutPage() {
  // FAQ structured data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Lake Worth, FL and surrounding areas including West Palm Beach, Wellington, Palm Beach Gardens, Royal Palm Beach, Boynton Beach, and Delray Beach. For locations outside these areas, please contact us to discuss your specific needs.",
    },
    {
      question: "How do you price your services?",
      answer:
        "Our pricing is based on the specific needs of each property and the scope of services required. We provide detailed, transparent quotes after an initial consultation or property assessment. We offer competitive rates and flexible service packages to accommodate various budgets.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes, Noble Property Care LLC is fully licensed and insured. We carry comprehensive general liability insurance and workers' compensation coverage to protect both our clients and our team members. We're happy to provide proof of insurance upon request.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide 24/7 emergency services for urgent property issues such as plumbing leaks, electrical problems, HVAC failures, and other critical maintenance needs. Our emergency response team is available to address these issues promptly to minimize damage and disruption.",
    },
    {
      question: "Can you handle both residential and commercial properties?",
      answer:
        "We have extensive experience managing both residential and commercial properties. Our team is equipped to handle the unique requirements of various property types, including single-family homes, apartment complexes, office buildings, retail spaces, and more.",
    },
    {
      question: "Do you offer customized maintenance plans?",
      answer:
        "Yes, we specialize in creating customized maintenance plans tailored to the specific needs of your property. Whether you need weekly, monthly, quarterly, or annual maintenance services, we can develop a plan that ensures your property remains in optimal condition while fitting your budget.",
    },
    {
      question: "What types of payment do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, checks, bank transfers, and online payments. For ongoing service contracts, we can set up convenient automatic billing options. We provide detailed invoices for all services performed.",
    },
    {
      question: "How quickly can you respond to service requests?",
      answer:
        "Our standard response time for non-emergency service requests is within 24-48 hours. For emergency situations, we aim to respond immediately and dispatch a technician as quickly as possible. Our clients with maintenance contracts receive priority scheduling.",
    },
  ]

  const faqSchema = getFAQSchema(faqs)

  // Breadcrumb schema
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", url: "https://noblepropertycares.com" },
    { name: "About Us", url: "https://noblepropertycares.com/about" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([faqSchema, breadcrumb]),
        }}
      />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Noble Property Care LLC</h1>
            <p className="mt-6 text-xl text-gray-200">Your trusted partner in property maintenance and management</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
              <p className="mt-4 text-lg text-gray-600">
                At Noble Property Care LLC, we specialize in comprehensive property maintenance and management services
                for residential homes, apartment complexes, and commercial properties. Our mission is to protect and
                enhance the value of your property with exceptional service, expert craftsmanship, and a commitment to
                excellence.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Founded with a vision to provide reliable, high-quality property care services, we have grown to become
                a trusted partner for property owners, managers, and investors throughout Lake Worth and
                surrounding areas in Florida.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With a team of highly trained professionals, we provide customized property care solutions tailored to
                meet the unique needs of homeowners, landlords, property managers, and business owners.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About%20Us-Mvb5N3lo41ZffYu6RhA4Q6I8VQN6NG.png"
                alt="Noble Property Care team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">These principles guide everything we do at Noble Property Care</p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We strive for excellence in every service we provide, ensuring the highest quality workmanship and
                attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Reliability</h3>
              <p className="mt-2 text-gray-600">
                We are committed to being dependable and consistent, showing up when promised and delivering on our
                commitments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our
                clients.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Safety</h3>
              <p className="mt-2 text-gray-600">
                We prioritize the safety of our team, clients, and properties, following strict safety protocols in all
                our operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fairness</h3>
              <p className="mt-2 text-gray-600">
                We believe in fair pricing and treating all clients with respect and equality, regardless of project
                size.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We continuously seek better ways to serve our clients, embracing new technologies and methods in
                property care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Expert Team</h2>
            <p className="mt-4 text-lg text-gray-600">
              Meet the professionals dedicated to maintaining and enhancing your property
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Frantz Tonico</h3>
              <p className="text-primary">Founder & CEO</p>
              <p className="mt-2 text-gray-600">
                With over 15 years of experience in property management and maintenance, Frantz leads our team with
                expertise and vision.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
              <p className="text-primary">Operations Manager</p>
              <p className="mt-2 text-gray-600">
                Sarah ensures all our services run smoothly and efficiently, coordinating our team to deliver
                exceptional results.
              </p>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden mb-6">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Michael Rodriguez</h3>
              <p className="text-primary">Lead Technician</p>
              <p className="mt-2 text-gray-600">
                Michael brings technical expertise and problem-solving skills to every maintenance challenge, leading
                our technical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Find answers to common questions about our property care services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">What areas do you serve?</AccordionTrigger>
                <AccordionContent>
                  We primarily serve Lake Worth, FL and surrounding areas including West Palm Beach, Wellington,
                  Palm Beach Gardens, Royal Palm Beach, Boynton Beach, and Delray Beach. For locations outside these areas,
                  please contact us to discuss your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How do you price your services?</AccordionTrigger>
                <AccordionContent>
                  Our pricing is based on the specific needs of each property and the scope of services required. We
                  provide detailed, transparent quotes after an initial consultation or property assessment. We offer
                  competitive rates and flexible service packages to accommodate various budgets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Are you licensed and insured?</AccordionTrigger>
                <AccordionContent>
                  Yes, Noble Property Care LLC is fully licensed and insured. We carry comprehensive general liability
                  insurance and workers' compensation coverage to protect both our clients and our team members. We're
                  happy to provide proof of insurance upon request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Do you offer emergency services?</AccordionTrigger>
                <AccordionContent>
                  Yes, we provide 24/7 emergency services for urgent property issues such as plumbing leaks, electrical
                  problems, HVAC failures, and other critical maintenance needs. Our emergency response team is
                  available to address these issues promptly to minimize damage and disruption.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can you handle both residential and commercial properties?
                </AccordionTrigger>
                <AccordionContent>
                  We have extensive experience managing both residential and commercial properties. Our team is equipped
                  to handle the unique requirements of various property types, including single-family homes, apartment
                  complexes, office buildings, retail spaces, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">Do you offer customized maintenance plans?</AccordionTrigger>
                <AccordionContent>
                  Yes, we specialize in creating customized maintenance plans tailored to the specific needs of your
                  property. Whether you need weekly, monthly, quarterly, or annual maintenance services, we can develop
                  a plan that ensures your property remains in optimal condition while fitting your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">What types of payment do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept various payment methods including credit/debit cards, checks, bank transfers, and online
                  payments. For ongoing service contracts, we can set up convenient automatic billing options. We
                  provide detailed invoices for all services performed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  How quickly can you respond to service requests?
                </AccordionTrigger>
                <AccordionContent>
                  Our standard response time for non-emergency service requests is within 24-48 hours. For emergency
                  situations, we aim to respond immediately and dispatch a technician as quickly as possible. Our
                  clients with maintenance contracts receive priority scheduling.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/request-service">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

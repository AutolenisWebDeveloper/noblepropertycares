import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Metadata } from "next"
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema"
import { Award, Shield, Heart, Users, Target, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "About Noble Property Care | Your Trusted Property Maintenance Partner",
  description:
    "Learn about Noble Property Care LLC, our story, core values, expert team, and commitment to excellence in property maintenance and management services in Royal Palm Beach, FL.",
  keywords: [
    "about Noble Property Care",
    "property maintenance company",
    "property management team",
    "Royal Palm Beach property services",
    "property care experts",
    "Florida property maintenance",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Noble Property Care | Your Trusted Property Maintenance Partner",
    description:
      "Learn about Noble Property Care LLC, our story, core values, expert team, and commitment to excellence in property maintenance and management services in Royal Palm Beach, FL.",
    url: "https://noblepropertycares.com/about",
  },
}

export default function AboutPage() {
  // FAQ structured data
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We primarily serve Royal Palm Beach, FL and surrounding areas including West Palm Beach, Wellington, Palm Beach Gardens, Lake Worth, Boynton Beach, and Delray Beach. For locations outside these areas, please contact us to discuss your specific needs.",
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
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">About Us</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Noble Property Care LLC</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Your trusted partner in property maintenance and management
            </p>
          </div>
        </div>
      </section>

      {/* About / Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Who We Are</p>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                At Noble Property Care LLC, we specialize in comprehensive property maintenance and management services
                for residential homes, apartment complexes, and commercial properties. Our mission is to protect and
                enhance the value of your property with exceptional service, expert craftsmanship, and a commitment to
                excellence.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Founded with a vision to provide reliable, high-quality property care services, we have grown to become
                a trusted partner for property owners, managers, and investors throughout Royal Palm Beach and
                surrounding areas in Florida.
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                With a team of highly trained professionals, we provide customized property care solutions tailored to
                meet the unique needs of homeowners, landlords, property managers, and business owners.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden border border-slate-200/80">
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
      <section className="bg-slate-50/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">What We Stand For</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              These principles guide everything we do at Noble Property Care
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Award className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Excellence</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We strive for excellence in every service we provide, ensuring the highest quality workmanship and
                attention to detail.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Reliability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We are committed to being dependable and consistent, showing up when promised and delivering on our
                commitments.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Integrity</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We conduct our business with honesty, transparency, and ethical practices, building trust with our
                clients.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Safety</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We prioritize the safety of our team, clients, and properties, following strict safety protocols in all
                our operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Fairness</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                We believe in fair pricing and treating all clients with respect and equality, regardless of project
                size.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200/80 bg-white premium-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">Innovation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">Our People</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Expert Team</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Meet the professionals dedicated to maintaining and enhancing your property
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white premium-card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">Frantz Tonico</h3>
                <p className="text-xs font-medium uppercase tracking-widest text-accent mt-1">Founder & CEO</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  With over 15 years of experience in property management and maintenance, Frantz leads our team with
                  expertise and vision.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white premium-card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">Sarah Johnson</h3>
                <p className="text-xs font-medium uppercase tracking-widest text-accent mt-1">Operations Manager</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Sarah ensures all our services run smoothly and efficiently, coordinating our team to deliver
                  exceptional results.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white premium-card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg?height=256&width=256" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-base font-semibold text-foreground">Michael Rodriguez</h3>
                <p className="text-xs font-medium uppercase tracking-widest text-accent mt-1">Lead Technician</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Michael brings technical expertise and problem-solving skills to every maintenance challenge, leading
                  our technical team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50/50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Find answers to common questions about our property care services
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  What areas do you serve?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  We primarily serve Royal Palm Beach, FL and surrounding areas including West Palm Beach, Wellington,
                  Palm Beach Gardens, Lake Worth, Boynton Beach, and Delray Beach. For locations outside these areas,
                  please contact us to discuss your specific needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  How do you price your services?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  Our pricing is based on the specific needs of each property and the scope of services required. We
                  provide detailed, transparent quotes after an initial consultation or property assessment. We offer
                  competitive rates and flexible service packages to accommodate various budgets.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  Are you licensed and insured?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  Yes, Noble Property Care LLC is fully licensed and insured. We carry comprehensive general liability
                  insurance and workers&apos; compensation coverage to protect both our clients and our team members. We&apos;re
                  happy to provide proof of insurance upon request.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  Do you offer emergency services?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  Yes, we provide 24/7 emergency services for urgent property issues such as plumbing leaks, electrical
                  problems, HVAC failures, and other critical maintenance needs. Our emergency response team is
                  available to address these issues promptly to minimize damage and disruption.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  Can you handle both residential and commercial properties?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  We have extensive experience managing both residential and commercial properties. Our team is equipped
                  to handle the unique requirements of various property types, including single-family homes, apartment
                  complexes, office buildings, retail spaces, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  Do you offer customized maintenance plans?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  Yes, we specialize in creating customized maintenance plans tailored to the specific needs of your
                  property. Whether you need weekly, monthly, quarterly, or annual maintenance services, we can develop
                  a plan that ensures your property remains in optimal condition while fitting your budget.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-slate-200/80">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  What types of payment do you accept?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  We accept various payment methods including credit/debit cards, checks, bank transfers, and online
                  payments. For ongoing service contracts, we can set up convenient automatic billing options. We
                  provide detailed invoices for all services performed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-slate-200/80 border-b-0">
                <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:no-underline">
                  How quickly can you respond to service requests?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-4">Get Started</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Experience Professional Property Care?
          </h2>
          <p className="mt-4 text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
            Contact us today to discuss your property maintenance and management needs. We&apos;re here to help you protect
            and enhance the value of your property.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-lg">
              <Link href="/contact">Contact Us Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-lg">
              <Link href="/request-service">Request Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

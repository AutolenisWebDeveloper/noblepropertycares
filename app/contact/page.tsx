import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Noble Property Care | Request Property Maintenance Services",
  description:
    "Contact Noble Property Care for professional property maintenance and management services in Lake Worth, FL. Get in touch with our team for a consultation or service request.",
  keywords: [
    "contact Noble Property Care",
    "property maintenance contact",
    "Lake Worth property services",
    "request property maintenance",
    "property care consultation",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Noble Property Care | Request Property Maintenance Services",
    description:
      "Contact Noble Property Care for professional property maintenance and management services in Lake Worth, FL. Get in touch with our team for a consultation or service request.",
    url: "https://noblepropertycares.com/contact",
  },
  // schema: getBreadcrumbSchema([
  //   {
  //     name: 'Contact',
  //     href: '/contact',
  //   },
  // ]),
}

export default function ContactPage() {
  return <ContactPageClient />
}

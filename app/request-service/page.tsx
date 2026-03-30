import type { Metadata } from "next"
import RequestServiceClient from "./RequestServiceClient"

export const metadata: Metadata = {
  title: "Request Property Maintenance Services | Noble Property Care",
  description:
    "Request professional property maintenance, landscaping, cleaning, or management services from Noble Property Care. Fill out our service request form for a prompt response.",
  keywords: [
    "request property services",
    "property maintenance request",
    "landscaping services request",
    "cleaning services request",
    "Lake Worth property maintenance",
  ],
  alternates: {
    canonical: "/request-service",
  },
  openGraph: {
    title: "Request Property Maintenance Services | Noble Property Care",
    description:
      "Request professional property maintenance, landscaping, cleaning, or management services from Noble Property Care. Fill out our service request form for a prompt response.",
    url: "https://noblepropertycares.com/request-service",
  },
}

export default function RequestServicePage() {
  return <RequestServiceClient />
}

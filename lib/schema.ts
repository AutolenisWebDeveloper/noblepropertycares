export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Noble Property Care LLC",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/01_NoblePropertyCare_Landscaping_Logo_BusineeCard_Back.jpg-rSvKsx1uPxb0gBYsbozpJiyYTILIWG.jpeg",
    "@id": "https://noblepropertycares.com/#organization",
    url: "https://noblepropertycares.com",
    telephone: "+19548167872",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11987 Southern Blvd. #1064",
      addressLocality: "Royal Palm Beach",
      addressRegion: "FL",
      postalCode: "33411",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.6830717,
      longitude: -80.2240138,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/noblepropertycares",
      "https://www.instagram.com/noblepropertycares",
      "https://twitter.com/noblepropertycare",
      "https://www.linkedin.com/company/noble-property-care",
    ],
    priceRange: "$$",
    servesCuisine: "Property Maintenance",
  }
}

export const getServiceSchema = (name: string, description: string, url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: name,
    description: description,
    provider: {
      "@type": "LocalBusiness",
      name: "Noble Property Care LLC",
      url: "https://noblepropertycares.com",
    },
    serviceType: name,
    url: url,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.6830717,
        longitude: -80.2240138,
      },
      geoRadius: "30mi",
    },
  }
}

export const getFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

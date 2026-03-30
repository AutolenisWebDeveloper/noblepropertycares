// ---------------------------------------------------------------------------
// Noble Property Care — Copilot Knowledge Base
// All company knowledge in one place. Sourced from actual site content.
// ---------------------------------------------------------------------------

export const COMPANY = {
  name: "Noble Property Care LLC",
  shortName: "Noble Property Care",
  tagline: "Your trusted partner in property maintenance and management",
  description:
    "Noble Property Care LLC specializes in rental property landscaping and commercial property maintenance. Our mission is to enhance the value and appeal of your properties with exceptional service, expert craftsmanship, and a commitment to excellence.",
  phone: "(954) 816-7872",
  phoneRaw: "+19548167872",
  email: "frantz@noblepropertycares.com",
  address: "11987 Southern Blvd. #1064, Royal Palm Beach, FL 33411",
  website: "https://noblepropertycares.com",
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  serviceArea: [
    "Royal Palm Beach",
    "West Palm Beach",
    "Wellington",
    "Palm Beach Gardens",
    "Lake Worth",
    "Boynton Beach",
    "Delray Beach",
  ],
  serviceRadius: "30-mile radius of Royal Palm Beach, FL",
  highlights: [
    "Licensed & Insured",
    "24/7 Emergency Services",
    "Customized Maintenance Plans",
    "Free Consultations & Assessments",
  ],
}

export const SERVICES = [
  {
    id: "landscaping",
    name: "Rental Property Landscaping & Outdoor Care",
    shortName: "Landscaping",
    description:
      "Professional landscaping services to enhance curb appeal and maintain beautiful outdoor spaces for rental properties.",
    features: [
      "Professional lawn care & mowing",
      "Garden design & planting",
      "Hardscaping (walkways, patios, retaining walls)",
      "Irrigation system installation & maintenance",
      "Tree & shrub trimming",
      "Mulching & weed control",
      "Seasonal planting & flower beds",
      "Sod installation & lawn renovation",
    ],
    keywords: [
      "landscaping", "landscape", "lawn", "garden", "yard", "outdoor",
      "grass", "mow", "tree", "shrub", "plant", "irrigation", "mulch",
      "sod", "curb appeal", "flower", "hedge",
    ],
    url: "/services#landscaping",
  },
  {
    id: "maintenance",
    name: "Commercial Property Maintenance & Repairs",
    shortName: "Maintenance & Repairs",
    description:
      "Comprehensive maintenance services for commercial properties, including regular inspections, repairs, and upgrades.",
    features: [
      "Regular property inspections",
      "Plumbing & electrical repairs",
      "HVAC system maintenance",
      "Painting & touch-ups",
      "Roof & gutter maintenance",
      "Parking lot & exterior maintenance",
      "General handyman services",
      "Code compliance inspections",
    ],
    keywords: [
      "maintenance", "repair", "fix", "broken", "commercial", "plumbing",
      "electrical", "hvac", "roof", "gutter", "inspect", "handyman",
      "building",
    ],
    url: "/services#maintenance",
  },
  {
    id: "cleaning",
    name: "Janitorial & Deep Cleaning",
    shortName: "Cleaning",
    description:
      "Professional cleaning services to maintain a healthy environment for residents, employees, and guests.",
    features: [
      "Office & commercial cleaning",
      "Post-construction cleanup",
      "Deep cleaning services",
      "Floor stripping & waxing",
      "Window cleaning",
      "Carpet cleaning",
      "Pressure washing",
      "Sanitization services",
    ],
    keywords: [
      "cleaning", "clean", "janitorial", "sanitize", "pressure wash",
      "carpet", "window", "floor", "wax", "janitor", "disinfect",
    ],
    url: "/services#cleaning",
  },
  {
    id: "residential",
    name: "Residential Property Maintenance",
    shortName: "Residential Maintenance",
    description:
      "Comprehensive maintenance services for residential properties to ensure they remain in excellent condition.",
    features: [
      "Home repairs & maintenance",
      "Seasonal property preparation",
      "Energy efficiency upgrades",
      "Interior & exterior painting",
      "Appliance installation",
      "Fixture replacement",
      "Preventive maintenance programs",
      "Move-in / move-out preparation",
    ],
    keywords: [
      "residential", "home", "house", "apartment", "condo", "townhome",
      "tenant", "move-in", "move-out",
    ],
    url: "/services#residential",
  },
]

export const FAQS = [
  {
    question: "What areas do you serve?",
    answer: `We primarily serve Royal Palm Beach, FL and surrounding areas including West Palm Beach, Wellington, Palm Beach Gardens, Lake Worth, Boynton Beach, and Delray Beach — roughly a ${COMPANY.serviceRadius}. For locations outside these areas, contact us to discuss your needs.`,
    keywords: ["area", "serve", "location", "where", "city", "region", "zip", "near"],
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing is based on the specific needs of each property and scope of services. We provide detailed, transparent quotes after a free consultation or property assessment. We offer competitive rates and flexible packages for various budgets.",
    keywords: ["price", "cost", "much", "rate", "fee", "quote", "estimate", "expensive", "cheap", "affordable", "budget"],
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — Noble Property Care LLC is fully licensed and insured. We carry comprehensive general liability insurance and workers' compensation coverage to protect both clients and team members.",
    keywords: ["license", "insure", "insurance", "bonded", "certified", "credential"],
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "Yes — we provide 24/7 emergency services for urgent issues such as plumbing leaks, electrical problems, HVAC failures, and other critical maintenance needs. Our emergency team responds promptly to minimise damage.",
    keywords: ["emergency", "urgent", "immediate", "asap", "24/7", "after hours"],
  },
  {
    question: "Can you handle both residential and commercial properties?",
    answer:
      "Absolutely! We manage both residential and commercial properties — single-family homes, apartment complexes, office buildings, retail spaces, and more.",
    keywords: ["residential", "commercial", "both", "apartment", "office", "retail", "types"],
  },
  {
    question: "Do you offer customized maintenance plans?",
    answer:
      "Yes! We create customized maintenance plans tailored to each property — weekly, monthly, quarterly, or annual. We develop a plan that keeps your property in optimal condition while fitting your budget.",
    keywords: ["custom", "plan", "tailored", "personalize", "package", "monthly", "weekly", "annual"],
  },
  {
    question: "What types of payment do you accept?",
    answer:
      "We accept credit/debit cards, checks, bank transfers, and online payments. For ongoing contracts, we can set up automatic billing. Detailed invoices are provided for all services.",
    keywords: ["payment", "pay", "accept", "credit", "card", "check", "bank", "billing", "invoice"],
  },
  {
    question: "How quickly do you respond to service requests?",
    answer:
      "Standard response time is within 24–48 hours. For emergencies, we respond immediately. Clients with maintenance contracts receive priority scheduling.",
    keywords: ["response", "time", "long", "fast", "quickly", "wait", "turnaround", "when"],
  },
]

// ---------------------------------------------------------------------------
// Response templates — multiple variations per intent to feel natural
// ---------------------------------------------------------------------------

export const RESPONSES: Record<string, { messages: string[]; quickReplies?: string[] }> = {
  greeting: {
    messages: [
      "Hello! 👋 Welcome to Noble Property Care. I can help you learn about our services, request a quote, or answer your questions. What can I do for you?",
      "Hi there! 👋 Thanks for reaching out to Noble Property Care. I'm here to help — whether you need info on our services, want to schedule something, or just have a question.",
      "Hey! 👋 Welcome to Noble Property Care. How can I help you today?",
    ],
    quickReplies: ["Our Services", "Request a Service", "Get a Quote", "Contact Info"],
  },
  farewell: {
    messages: [
      "Thanks for chatting with us! If you need anything else, don't hesitate to reach out. Have a great day! 😊",
      "Happy to help! Feel free to come back anytime. Have a wonderful day! 👋",
      "You're welcome! Reach out anytime you need us. Take care! 😊",
    ],
  },
  services_overview: {
    messages: [
      "We offer four main property care services:\n\n🌿 **Landscaping & Outdoor Care** — Lawn care, garden design, irrigation\n🔧 **Commercial Maintenance & Repairs** — Inspections, repairs, upgrades\n🧹 **Janitorial & Deep Cleaning** — Professional cleaning for all property types\n🏠 **Residential Maintenance** — Home repairs, seasonal care, energy upgrades\n\nWould you like more details on any of these?",
    ],
    quickReplies: ["Landscaping", "Maintenance", "Cleaning", "Residential", "Request a Service"],
  },
  pricing: {
    messages: [
      "Our pricing is customized to each property's needs. We offer **free consultations** so we can provide a transparent, detailed quote. Would you like to request a free estimate?",
      "Every property is different, so we provide custom quotes after a **free assessment**. Our rates are competitive and we offer flexible packages. Want to request a quote?",
    ],
    quickReplies: ["Request a Quote", "Contact Us", "Our Services"],
  },
  hours: {
    messages: [
      `Here are our business hours:\n\n📅 ${COMPANY.hours.weekdays}\n📅 ${COMPANY.hours.saturday}\n📅 ${COMPANY.hours.sunday}\n\nFor emergencies, we're available 24/7! Is there anything else I can help with?`,
    ],
    quickReplies: ["Contact Us", "Request a Service", "Our Services"],
  },
  location: {
    messages: [
      `We're based in **Royal Palm Beach, FL** and serve a ${COMPANY.serviceRadius}:\n\n📍 ${COMPANY.serviceArea.join(", ")}\n\n🏢 Our office: ${COMPANY.address}\n\nDo you have a property in our service area?`,
    ],
    quickReplies: ["Request a Service", "Contact Us", "Our Services"],
  },
  contact: {
    messages: [
      `Here's how to reach us:\n\n📞 Phone: ${COMPANY.phone}\n📧 Email: ${COMPANY.email}\n📍 Address: ${COMPANY.address}\n\nYou can also send us a message right here, or visit our contact page!`,
    ],
    quickReplies: ["Send a Message", "Request a Service", "Our Services"],
  },
  about: {
    messages: [
      `**Noble Property Care LLC** is a professional property maintenance and management company based in Royal Palm Beach, FL.\n\nWe specialize in rental property landscaping and commercial property maintenance. Our mission is to enhance the value and appeal of your properties with exceptional service, expert craftsmanship, and a commitment to excellence.\n\n✅ Licensed & Insured\n✅ 24/7 Emergency Services\n✅ Free Consultations\n✅ Customized Plans`,
    ],
    quickReplies: ["Our Services", "Contact Us", "Request a Service"],
  },
  emergency: {
    messages: [
      `🚨 For emergencies, please call us immediately at **${COMPANY.phone}** — we have a 24/7 emergency response team.\n\nWe handle urgent plumbing leaks, electrical issues, HVAC failures, and other critical maintenance needs.`,
    ],
    quickReplies: ["Contact Us", "Our Services"],
  },
  service_request: {
    messages: [
      "I'd be happy to help you request a service! I'll walk you through a few quick questions to get your request to our team.",
    ],
  },
  quote: {
    messages: [
      "Great — let's get you a free quote! I'll ask a few questions so our team can prepare an accurate estimate for you.",
    ],
  },
  callback: {
    messages: [
      "Sure — I can arrange for someone to call you back! Let me get a few details.",
    ],
  },
  positive: {
    messages: [
      "Glad I could help! 😊 Is there anything else you'd like to know?",
      "Happy to help! Let me know if there's anything else I can do for you.",
      "Awesome! Feel free to ask if you have more questions. 😊",
    ],
    quickReplies: ["Our Services", "Request a Service", "That's all, thanks!"],
  },
  negative: {
    messages: [
      "I'm sorry I wasn't able to help with that. Would you like to speak with our team directly? You can reach us at **" + COMPANY.phone + "** or I can help you send a message.",
      "I apologize for the confusion. Let me try again — could you rephrase your question? Or I can connect you with our team directly.",
    ],
    quickReplies: ["Send a Message", "Contact Info", "Our Services"],
  },
  unknown: {
    messages: [
      "I'm not sure I understood that. I can help with information about our services, scheduling, pricing, or contact info. What would you like to know?",
      "Hmm, I didn't quite catch that. Could you try rephrasing? I'm best at answering questions about our property care services, pricing, scheduling, and contact info.",
      "I want to make sure I give you the right info! Could you tell me more about what you're looking for? Or try one of the options below:",
    ],
    quickReplies: ["Our Services", "Request a Service", "Contact Info", "Get a Quote"],
  },
}

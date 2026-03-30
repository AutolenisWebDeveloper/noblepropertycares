// ---------------------------------------------------------------------------
// Noble Property Care — Copilot Intent Engine
// Lightweight NLP-free intent classification using weighted pattern matching.
// ---------------------------------------------------------------------------

import type { DetectedIntent, ConversationState } from "./types"

interface IntentPattern {
  intent: string
  keywords: string[]
  phrases: string[]
  priority: number
}

const PATTERNS: IntentPattern[] = [
  {
    intent: "greeting",
    keywords: ["hello", "hi", "hey", "greetings", "howdy", "sup"],
    phrases: ["good morning", "good afternoon", "good evening", "how are you", "whats up"],
    priority: 0.3,
  },
  {
    intent: "farewell",
    keywords: ["bye", "goodbye", "later", "done"],
    phrases: ["thank you", "thanks a lot", "thats all", "have a good", "see you", "good night", "no thanks", "no thank", "im good", "all set", "thats it"],
    priority: 0.4,
  },
  {
    intent: "services_overview",
    keywords: ["services", "offer", "provide"],
    phrases: ["what do you do", "what services", "tell me about your services", "what do you offer", "what can you do", "what you offer", "list of services", "all services"],
    priority: 1.0,
  },
  {
    intent: "service_landscaping",
    keywords: ["landscaping", "landscape", "lawn", "garden", "yard", "outdoor", "grass", "mow", "tree", "shrub", "plant", "irrigation", "mulch", "sod", "hedge", "flower"],
    phrases: ["lawn care", "garden design", "tree trimming", "outdoor care", "curb appeal"],
    priority: 1.2,
  },
  {
    intent: "service_maintenance",
    keywords: ["maintenance", "repair", "fix", "broken", "plumbing", "electrical", "hvac", "roof", "gutter", "inspect", "handyman"],
    phrases: ["property maintenance", "commercial maintenance", "building repair", "fix something", "something broken", "need repair"],
    priority: 1.2,
  },
  {
    intent: "service_cleaning",
    keywords: ["cleaning", "clean", "janitorial", "sanitize", "carpet", "window", "floor", "wax", "janitor", "disinfect", "wash"],
    phrases: ["deep cleaning", "office cleaning", "post construction", "pressure washing", "pressure wash"],
    priority: 1.2,
  },
  {
    intent: "service_residential",
    keywords: ["residential", "home", "house"],
    phrases: ["home maintenance", "home repair", "residential property", "house maintenance"],
    priority: 1.0,
  },
  {
    intent: "pricing",
    keywords: ["price", "cost", "rate", "fee", "quote", "estimate", "afford", "budget", "expensive", "cheap"],
    phrases: ["how much", "whats the cost", "get a quote", "price range", "free estimate", "how much do you charge", "what do you charge"],
    priority: 1.5,
  },
  {
    intent: "hours",
    keywords: ["hours", "open", "close", "schedule", "available", "time"],
    phrases: ["business hours", "what time", "are you open", "opening hours", "when are you", "what are your hours"],
    priority: 1.0,
  },
  {
    intent: "location",
    keywords: ["location", "address", "where", "area", "serve", "near", "city", "zip", "region"],
    phrases: ["where are you", "service area", "what areas", "do you serve", "where are you located", "what cities"],
    priority: 1.0,
  },
  {
    intent: "contact",
    keywords: ["contact", "reach", "call", "email", "phone", "number", "talk"],
    phrases: ["contact info", "get in touch", "how to reach", "phone number", "email address", "talk to someone", "speak to someone", "speak with someone"],
    priority: 1.0,
  },
  {
    intent: "service_request",
    keywords: ["request", "book", "hire", "start", "begin", "need", "want", "interested"],
    phrases: ["request a service", "book a service", "schedule service", "hire you", "get started", "need help with my property", "request service", "need a service", "interested in service", "sign up"],
    priority: 1.5,
  },
  {
    intent: "quote",
    keywords: ["quote", "estimate", "assessment", "consultation"],
    phrases: ["get a quote", "free quote", "free estimate", "free consultation", "free assessment", "request a quote"],
    priority: 1.5,
  },
  {
    intent: "about",
    keywords: ["about", "who", "company", "history", "team", "mission", "story", "founded"],
    phrases: ["about you", "tell me about", "who are you", "your company", "your team", "about noble"],
    priority: 0.8,
  },
  {
    intent: "emergency",
    keywords: ["emergency", "urgent", "immediate", "asap"],
    phrases: ["emergency service", "need help now", "urgent repair", "emergency repair", "right now", "right away"],
    priority: 2.0,
  },
  {
    intent: "insurance",
    keywords: ["license", "licensed", "insure", "insured", "insurance", "bond", "bonded"],
    phrases: ["are you licensed", "are you insured", "do you have insurance", "licensed and insured"],
    priority: 1.0,
  },
  {
    intent: "payment",
    keywords: ["payment", "pay", "credit", "card", "check", "invoice", "billing"],
    phrases: ["payment method", "how do i pay", "do you accept", "credit card", "payment options"],
    priority: 1.0,
  },
  {
    intent: "positive",
    keywords: ["thanks", "thank", "great", "awesome", "perfect", "helpful", "good", "excellent", "wonderful", "appreciate", "cool", "nice", "amazing"],
    phrases: ["thank you", "thats helpful", "sounds good", "thats great", "i appreciate", "very helpful", "thats perfect"],
    priority: 0.5,
  },
  {
    intent: "negative",
    keywords: ["wrong", "bad", "unhelpful", "useless"],
    phrases: ["not helpful", "thats wrong", "not what i asked", "doesnt help", "thats not right", "i dont think so"],
    priority: 0.5,
  },
  {
    intent: "callback",
    keywords: ["callback"],
    phrases: ["call me", "call me back", "give me a call", "have someone call", "request a call", "call back"],
    priority: 1.5,
  },
]

/**
 * Classify user message into one or more intents with confidence scores.
 */
export function classifyIntent(
  message: string,
  _state: ConversationState,
): DetectedIntent[] {
  // Normalise: lowercase, strip punctuation, collapse whitespace
  const normalised = message
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
  const tokens = normalised.split(" ")

  const scores: DetectedIntent[] = []

  for (const pattern of PATTERNS) {
    let score = 0

    // Phrase matches are worth more (they capture intent more precisely)
    for (const phrase of pattern.phrases) {
      if (normalised.includes(phrase)) {
        score += 3 * pattern.priority
      }
    }

    // Keyword matches
    for (const keyword of pattern.keywords) {
      for (const token of tokens) {
        if (token === keyword) {
          score += 1.5 * pattern.priority
        } else if (token.length > 3 && token.includes(keyword)) {
          score += 0.5 * pattern.priority
        } else if (keyword.length > 3 && keyword.includes(token)) {
          score += 0.3 * pattern.priority
        }
      }
    }

    if (score > 0) {
      scores.push({ name: pattern.intent, confidence: score })
    }
  }

  // Sort descending by confidence
  scores.sort((a, b) => b.confidence - a.confidence)

  return scores.length > 0 ? scores : [{ name: "unknown", confidence: 0 }]
}

// ---------------------------------------------------------------------------
// Noble Property Care — Copilot Conversation Manager
// Orchestrates responses, task flows, and action dispatch.
// ---------------------------------------------------------------------------

import type {
  ChatMessage,
  ConversationState,
  ProcessResult,
  TaskFlowState,
  FormAction,
} from "./types"
import { classifyIntent } from "./intent-engine"
import { COMPANY, SERVICES, FAQS, RESPONSES } from "./knowledge-base"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let counter = 0
function id(): string {
  return `msg-${Date.now()}-${++counter}`
}

function reply(
  content: string,
  quickReplies?: string[],
): ChatMessage {
  return { id: id(), role: "assistant", content, timestamp: Date.now(), quickReplies }
}

function pick(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)]
}

// ---------------------------------------------------------------------------
// Initial greeting (time-aware)
// ---------------------------------------------------------------------------

export function getInitialMessage(): ChatMessage {
  const h = new Date().getHours()
  const tod = h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening"
  return reply(
    `${tod}! 👋 I'm Noble's virtual assistant. I can help you with:\n\n• Learning about our property care services\n• Requesting a service or free quote\n• Finding our hours, location & contact info\n• Answering common questions\n\nHow can I help you today?`,
    ["Our Services", "Request a Service", "Get a Quote", "Contact Info"],
  )
}

// ---------------------------------------------------------------------------
// Main entry — process a user message
// ---------------------------------------------------------------------------

export function processMessage(
  userMessage: string,
  state: ConversationState,
): ProcessResult {
  const trimmed = userMessage.trim()
  if (!trimmed) {
    return {
      replies: [reply("It looks like your message was empty. How can I help you?")],
      newState: state,
    }
  }

  // --- Task-flow mode ---
  if (state.taskFlow) {
    return handleTaskFlow(trimmed, state)
  }

  // --- Intent classification ---
  const intents = classifyIntent(trimmed, state)
  const top = intents[0]

  // If intent matches a FAQ better than a generic intent, prefer it
  const faqMatch = matchFAQ(trimmed)
  if (faqMatch && (top.name === "unknown" || top.confidence < 2)) {
    return {
      replies: [reply(faqMatch, ["Our Services", "Request a Service", "Contact Info"])],
      newState: { ...state, discussed: [...state.discussed, "faq"] },
    }
  }

  return routeIntent(top.name, trimmed, state)
}

// ---------------------------------------------------------------------------
// FAQ matcher — searches FAQS by keyword overlap
// ---------------------------------------------------------------------------

function matchFAQ(message: string): string | null {
  const tokens = message.toLowerCase().split(/\s+/)
  let bestScore = 0
  let bestAnswer: string | null = null
  for (const faq of FAQS) {
    let score = 0
    for (const kw of faq.keywords) {
      if (tokens.some((t) => t.includes(kw) || kw.includes(t))) score++
    }
    if (score > bestScore && score >= 2) {
      bestScore = score
      bestAnswer = faq.answer
    }
  }
  return bestAnswer
}

// ---------------------------------------------------------------------------
// Intent router
// ---------------------------------------------------------------------------

function routeIntent(
  intentName: string,
  _raw: string,
  state: ConversationState,
): ProcessResult {
  const discussed = [...state.discussed, intentName]

  // Intents that start task flows
  if (intentName === "service_request" || intentName === "quote") {
    return startFlow("service-request", state)
  }
  if (intentName === "callback") {
    return startFlow("callback", state)
  }

  // "Send a message" triggers contact flow
  if (intentName === "contact") {
    // Give info first; quick-reply offers message flow
    const r = responseFor("contact")
    return {
      replies: [reply(r.msg, ["Send a Message", "Request a Service", "Our Services"])],
      newState: { ...state, discussed },
    }
  }

  // Specific services
  if (intentName.startsWith("service_") && intentName !== "service_request") {
    return handleServiceDetail(intentName, state)
  }

  // Generic lookup
  const r = responseFor(intentName)
  return {
    replies: [reply(r.msg, r.qr)],
    newState: { ...state, discussed },
  }
}

// ---------------------------------------------------------------------------
// Service detail handler
// ---------------------------------------------------------------------------

function handleServiceDetail(
  intent: string,
  state: ConversationState,
): ProcessResult {
  const map: Record<string, string> = {
    service_landscaping: "landscaping",
    service_maintenance: "maintenance",
    service_cleaning: "cleaning",
    service_residential: "residential",
  }
  const svc = SERVICES.find((s) => s.id === map[intent])
  if (!svc) return routeIntent("services_overview", "", state)

  const features = svc.features.map((f) => `• ${f}`).join("\n")
  const content = `**${svc.name}**\n\n${svc.description}\n\nWhat's included:\n${features}\n\nWould you like to request this service or get a free quote?`
  return {
    replies: [reply(content, ["Request This Service", "Get a Quote", "Other Services"])],
    newState: { ...state, discussed: [...state.discussed, intent] },
  }
}

// ---------------------------------------------------------------------------
// Response lookup with random variation
// ---------------------------------------------------------------------------

function responseFor(intent: string): { msg: string; qr?: string[] } {
  const entry = RESPONSES[intent] ?? RESPONSES.unknown
  return { msg: pick(entry.messages), qr: entry.quickReplies }
}

// ---------------------------------------------------------------------------
// Task-flow management
// ---------------------------------------------------------------------------

interface FlowStepDef {
  prompt: (data: Record<string, string>) => string
  field: string
  validate?: (v: string) => string | null
  quickReplies?: string[]
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[\d\s()+-]{7,20}$/

const SERVICE_REQUEST_STEPS: FlowStepDef[] = [
  {
    field: "name",
    prompt: () => "Let's get your service request started! What's your **name**?",
    validate: (v) => (v.length < 2 ? "Please enter your full name." : null),
  },
  {
    field: "email",
    prompt: (d) => `Thanks, ${d.name}! What's your **email address**?`,
    validate: (v) => (EMAIL_RE.test(v) ? null : "Please enter a valid email address."),
  },
  {
    field: "phone",
    prompt: () => "And your **phone number**?",
    validate: (v) => (PHONE_RE.test(v) ? null : "Please enter a valid phone number."),
  },
  {
    field: "address",
    prompt: () => "What's the **property address**?",
    validate: (v) => (v.length < 5 ? "Please provide the full address." : null),
  },
  {
    field: "propertyType",
    prompt: () => "What **type of property** is this?",
    quickReplies: ["Residential Home", "Apartment Complex", "Commercial Building", "Other"],
  },
  {
    field: "serviceType",
    prompt: () => "Which **service** are you interested in?",
    quickReplies: ["Landscaping", "Maintenance & Repairs", "Cleaning", "Residential Maintenance"],
  },
  {
    field: "details",
    prompt: () => 'Any **additional details** you\'d like to share? (Type "skip" if none)',
  },
]

const CONTACT_STEPS: FlowStepDef[] = [
  {
    field: "name",
    prompt: () => "I'll help you send a message to our team! What's your **name**?",
    validate: (v) => (v.length < 2 ? "Please enter your name." : null),
  },
  {
    field: "email",
    prompt: (d) => `Thanks, ${d.name}! What's your **email**?`,
    validate: (v) => (EMAIL_RE.test(v) ? null : "Please enter a valid email."),
  },
  {
    field: "message",
    prompt: () => "What would you like to tell us?",
    validate: (v) => (v.length < 5 ? "Please provide a bit more detail." : null),
  },
]

const CALLBACK_STEPS: FlowStepDef[] = [
  {
    field: "name",
    prompt: () => "Sure — I'll arrange a callback! What's your **name**?",
    validate: (v) => (v.length < 2 ? "Please enter your name." : null),
  },
  {
    field: "phone",
    prompt: (d) => `Thanks, ${d.name}! What's the best **phone number** to reach you?`,
    validate: (v) => (PHONE_RE.test(v) ? null : "Please enter a valid phone number."),
  },
  {
    field: "preferredTime",
    prompt: () => "When's the **best time** to call?",
    quickReplies: ["Morning (8–12)", "Afternoon (12–4)", "Evening (4–6)"],
  },
]

function getFlowSteps(type: string): FlowStepDef[] {
  switch (type) {
    case "service-request": return SERVICE_REQUEST_STEPS
    case "contact": return CONTACT_STEPS
    case "callback": return CALLBACK_STEPS
    default: return []
  }
}

function startFlow(
  type: "service-request" | "contact" | "callback",
  state: ConversationState,
): ProcessResult {
  const steps = getFlowSteps(type)
  const firstStep = steps[0]
  const newFlow: TaskFlowState = { type, step: 0, data: {} }

  // If we already know the user's name from a previous flow, skip the name step
  if (state.userName && firstStep.field === "name") {
    newFlow.data.name = state.userName
    newFlow.step = 1
    const nextStep = steps[1]
    return {
      replies: [reply(nextStep.prompt({ name: state.userName }), nextStep.quickReplies)],
      newState: { ...state, taskFlow: newFlow },
    }
  }

  return {
    replies: [reply(firstStep.prompt({}), firstStep.quickReplies)],
    newState: { ...state, taskFlow: newFlow },
  }
}

function handleTaskFlow(
  userMessage: string,
  state: ConversationState,
): ProcessResult {
  const flow = state.taskFlow!
  const steps = getFlowSteps(flow.type)
  const lower = userMessage.toLowerCase()

  // --- Cancel ---
  if (["cancel", "stop", "quit", "exit", "nevermind", "never mind"].some((w) => lower.includes(w))) {
    return {
      replies: [reply("No problem — I've cancelled the request. Is there anything else I can help with?", ["Our Services", "Contact Info", "Request a Service"])],
      newState: { ...state, taskFlow: null },
    }
  }

  // --- Quick-reply routing within chat ---
  if (lower === "send a message" || lower === "send message") {
    return startFlow("contact", { ...state, taskFlow: null })
  }
  if (lower === "request this service" || lower === "request a service" || lower === "request service") {
    return startFlow("service-request", { ...state, taskFlow: null })
  }

  const currentStep = steps[flow.step]

  // --- Validate current step ---
  if (currentStep.validate) {
    const error = currentStep.validate(userMessage)
    if (error) {
      return {
        replies: [reply(`⚠️ ${error} Please try again.`, currentStep.quickReplies)],
        newState: state,
      }
    }
  }

  // Store answer
  const value = lower === "skip" ? "" : userMessage
  const newData = { ...flow.data, [currentStep.field]: value }

  // Remember name for future flows
  const userName = currentStep.field === "name" ? userMessage : state.userName

  const nextStepIdx = flow.step + 1

  // --- All steps done → confirmation ---
  if (nextStepIdx >= steps.length) {
    return buildConfirmation(flow.type, newData, { ...state, userName, taskFlow: { ...flow, data: newData, step: nextStepIdx } })
  }

  // --- Advance to next step ---
  const nextStep = steps[nextStepIdx]
  return {
    replies: [reply(nextStep.prompt(newData), nextStep.quickReplies)],
    newState: {
      ...state,
      userName,
      taskFlow: { ...flow, step: nextStepIdx, data: newData },
    },
  }
}

// ---------------------------------------------------------------------------
// Confirmation & submission
// ---------------------------------------------------------------------------

function buildConfirmation(
  type: string,
  data: Record<string, string>,
  state: ConversationState,
): ProcessResult {
  let summary = ""
  if (type === "service-request") {
    summary =
      `Here's a summary of your service request:\n\n` +
      `👤 **Name:** ${data.name}\n` +
      `📧 **Email:** ${data.email}\n` +
      `📞 **Phone:** ${data.phone}\n` +
      `📍 **Address:** ${data.address}\n` +
      `🏢 **Property:** ${data.propertyType}\n` +
      `🔧 **Service:** ${data.serviceType}\n` +
      (data.details ? `📝 **Details:** ${data.details}\n` : "") +
      `\nShall I submit this request?`
  } else if (type === "contact") {
    summary =
      `Here's your message to our team:\n\n` +
      `👤 **From:** ${data.name} (${data.email})\n` +
      `💬 **Message:** ${data.message}\n` +
      `\nReady to send?`
  } else if (type === "callback") {
    summary =
      `Here's your callback request:\n\n` +
      `👤 **Name:** ${data.name}\n` +
      `📞 **Phone:** ${data.phone}\n` +
      `🕐 **Best time:** ${data.preferredTime}\n` +
      `\nShall I submit this?`
  }

  return {
    replies: [reply(summary, ["Yes, submit!", "Make changes", "Cancel"])],
    newState: state,
  }
}

export function handleConfirmation(
  userMessage: string,
  state: ConversationState,
): ProcessResult {
  const lower = userMessage.toLowerCase()
  const flow = state.taskFlow

  if (!flow) {
    return processMessage(userMessage, state)
  }

  // --- Cancel ---
  if (lower.includes("cancel") || lower.includes("no")) {
    return {
      replies: [reply("No problem — request cancelled. Is there anything else I can help with?", ["Our Services", "Request a Service", "Contact Info"])],
      newState: { ...state, taskFlow: null },
    }
  }

  // --- Make changes → restart flow ---
  if (lower.includes("change") || lower.includes("edit") || lower.includes("redo")) {
    return startFlow(flow.type, { ...state, taskFlow: null })
  }

  // --- Submit ---
  if (lower.includes("yes") || lower.includes("submit") || lower.includes("send")) {
    const actionType: FormAction["type"] =
      flow.type === "service-request" ? "submit-service-request" : "submit-contact"

    // For callback, we route through the contact action with a note
    const data =
      flow.type === "callback"
        ? {
            name: flow.data.name,
            email: "",
            phone: flow.data.phone,
            message: `Callback request — preferred time: ${flow.data.preferredTime}`,
          }
        : flow.data

    return {
      replies: [reply("Submitting your request… ⏳")],
      newState: { ...state, taskFlow: null },
      action: { type: flow.type === "service-request" ? "submit-service-request" : "submit-contact", data },
    }
  }

  // Unrecognised confirmation response
  return {
    replies: [reply('Please reply with **"Yes, submit!"**, **"Make changes"**, or **"Cancel"**.', ["Yes, submit!", "Make changes", "Cancel"])],
    newState: state,
  }
}

// ---------------------------------------------------------------------------
// Post-submission messages
// ---------------------------------------------------------------------------

export function getSuccessMessage(): ChatMessage {
  return reply(
    "✅ **Request submitted successfully!** Our team will get back to you within 24 hours.\n\nIs there anything else I can help you with?",
    ["Our Services", "Contact Info", "That's all, thanks!"],
  )
}

export function getErrorMessage(): ChatMessage {
  return reply(
    `❌ Something went wrong submitting your request. Please try again, or contact us directly:\n\n📞 **${COMPANY.phone}**\n📧 **${COMPANY.email}**`,
    ["Try Again", "Contact Info"],
  )
}

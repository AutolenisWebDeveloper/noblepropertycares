"use client"

import { useState, useEffect, useRef, useCallback, Fragment } from "react"
import { MessageSquare, X, Send, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  getInitialMessage,
  processMessage,
  handleConfirmation,
  getSuccessMessage,
  getErrorMessage,
} from "@/lib/copilot/conversation-manager"
import { sendContactEmail, sendServiceRequestEmail } from "@/app/actions/email-actions"
import type { ChatMessage, ConversationState, FormAction } from "@/lib/copilot/types"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const STORAGE_KEY = "noble-copilot"
const MAX_STORED = 40

function initialState(): ConversationState {
  return { taskFlow: null, userName: null, discussed: [] }
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Render simple markdown: **bold** and \n → <br/> */
function MessageContent({ text }: { text: string }) {
  const lines = text.split("\n")
  return (
    <>
      {lines.map((line, li) => {
        const parts = line.split(/(\*\*[^*]+\*\*)/)
        return (
          <Fragment key={li}>
            {li > 0 && <br />}
            {parts.map((p, pi) =>
              p.startsWith("**") && p.endsWith("**") ? (
                <strong key={pi} className="font-semibold">
                  {p.slice(2, -2)}
                </strong>
              ) : (
                <span key={pi}>{p}</span>
              ),
            )}
          </Fragment>
        )
      })}
    </>
  )
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="sr-only">Assistant is typing</span>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block h-2 w-2 rounded-full bg-gray-400 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}

function QuickReplies({
  replies,
  onSelect,
}: {
  replies: string[]
  onSelect: (r: string) => void
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-1 ml-10">
      {replies.map((r) => (
        <button
          key={r}
          type="button"
          onClick={() => onSelect(r)}
          className="text-sm px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-white hover:bg-primary/5 transition-colors whitespace-nowrap"
        >
          {r}
        </button>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Widget
// ---------------------------------------------------------------------------

export default function CopilotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [state, setState] = useState<ConversationState>(initialState)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showProactive, setShowProactive] = useState(false)
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const proactiveTimer = useRef<ReturnType<typeof setTimeout>>(undefined)

  // --- Load persisted session ---
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.messages?.length) {
          setMessages(parsed.messages)
          setState(parsed.state ?? initialState())
          return
        }
      }
    } catch { /* ignore */ }
    // No saved session → greeting
    setMessages([getInitialMessage()])
  }, [])

  // --- Persist on change ---
  useEffect(() => {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ messages: messages.slice(-MAX_STORED), state }),
      )
    } catch { /* ignore */ }
  }, [messages, state])

  // --- Proactive popup after 15s ---
  useEffect(() => {
    proactiveTimer.current = setTimeout(() => {
      if (!isOpen) setShowProactive(true)
    }, 15_000)
    return () => clearTimeout(proactiveTimer.current)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // --- Auto-scroll ---
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping, scrollToBottom])

  // --- Focus input when opened ---
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200)
    }
  }, [isOpen])

  // --- Escape to close ---
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false)
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen])

  // --- Track scroll position for scroll-to-bottom button ---
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return
    const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
    setShowScrollBtn(distFromBottom > 100)
  }, [])

  // --- Execute server actions ---
  const executeAction = useCallback(async (action: FormAction) => {
    try {
      const fd = new FormData()
      Object.entries(action.data).forEach(([k, v]) => fd.append(k, v))

      let result: { success: boolean; error?: string }
      if (action.type === "submit-service-request") {
        result = await sendServiceRequestEmail(fd)
      } else {
        result = await sendContactEmail(fd)
      }

      if (result.success) {
        setMessages((prev) => [...prev, getSuccessMessage()])
      } else {
        setMessages((prev) => [...prev, getErrorMessage()])
      }
    } catch {
      setMessages((prev) => [...prev, getErrorMessage()])
    }
  }, [])

  // --- Send a message ---
  const handleSend = useCallback(
    async (text?: string) => {
      const msg = (text ?? input).trim()
      if (!msg || isTyping) return

      const userMsg: ChatMessage = {
        id: `usr-${Date.now()}`,
        role: "user",
        content: msg,
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, userMsg])
      setInput("")
      setIsTyping(true)

      // Determine if we're in confirmation step of a task flow
      const isConfirming =
        state.taskFlow &&
        (() => {
          const flowStepCounts: Record<string, number> = {
            "service-request": 7,
            contact: 3,
            callback: 3,
          }
          return state.taskFlow!.step >= (flowStepCounts[state.taskFlow!.type] ?? 99)
        })()

      // Process
      const result = isConfirming
        ? handleConfirmation(msg, state)
        : processMessage(msg, state)

      // Typing delay based on response length
      const totalLen = result.replies.reduce((a, r) => a + r.content.length, 0)
      const delay = Math.min(Math.max(totalLen * 12, 400), 1800)

      await new Promise((r) => setTimeout(r, delay))

      setIsTyping(false)
      setMessages((prev) => [...prev, ...result.replies])
      setState(result.newState)

      // Execute form action if present
      if (result.action) {
        setIsTyping(true)
        await new Promise((r) => setTimeout(r, 800))
        setIsTyping(false)
        await executeAction(result.action)
      }
    },
    [input, isTyping, state, executeAction],
  )

  // --- Quick reply handler ---
  const handleQuickReply = useCallback(
    (text: string) => {
      // "That's all, thanks!" is a farewell
      handleSend(text)
    },
    [handleSend],
  )

  // --- Open chat ---
  const openChat = useCallback(() => {
    setIsOpen(true)
    setShowProactive(false)
    clearTimeout(proactiveTimer.current)
  }, [])

  // --- Get last assistant message's quick replies ---
  const lastAssistantMsg = [...messages].reverse().find((m) => m.role === "assistant")
  const activeQuickReplies =
    !isTyping && lastAssistantMsg?.quickReplies?.length ? lastAssistantMsg.quickReplies : []

  // =========================================================================
  // Render
  // =========================================================================

  return (
    <>
      {/* ---- Proactive popup ---- */}
      {showProactive && !isOpen && (
        <div className="fixed bottom-24 right-6 z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 max-w-[260px] relative">
            <button
              onClick={() => setShowProactive(false)}
              className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-0.5 hover:bg-gray-200 transition-colors"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5 text-gray-500" />
            </button>
            <button onClick={openChat} className="text-left">
              <p className="text-sm font-medium text-gray-900">
                👋 Need help with property services?
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Chat with us — we respond instantly!
              </p>
            </button>
          </div>
          {/* Triangle */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-b border-r border-gray-200 transform rotate-45" />
        </div>
      )}

      {/* ---- Floating button ---- */}
      <button
        onClick={openChat}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200",
          isOpen && "pointer-events-none opacity-0 scale-90",
        )}
        aria-label="Open chat assistant"
      >
        <MessageSquare className="h-6 w-6" />
        {/* Notification dot */}
        {showProactive && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
          </span>
        )}
      </button>

      {/* ---- Chat window ---- */}
      <div
        className={cn(
          "fixed z-50 flex flex-col bg-white shadow-2xl transition-all duration-300 ease-out",
          // Mobile: full screen. Desktop: popup
          "inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[390px] sm:h-[540px] sm:rounded-2xl sm:border sm:border-gray-200",
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 scale-95 pointer-events-none",
        )}
        role="dialog"
        aria-label="Chat with Noble Property Care"
      >
        {/* --- Header --- */}
        <div className="flex items-center justify-between bg-primary text-white px-4 py-3 sm:rounded-t-2xl flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-sm font-semibold leading-tight">Noble Property Care</h2>
              <p className="text-[11px] text-white/70 leading-tight flex items-center gap-1">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
                Online — typically replies instantly
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Close chat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* --- Messages --- */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex",
                msg.role === "user" ? "justify-end" : "justify-start",
              )}
            >
              {msg.role === "assistant" && (
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-1">
                  <MessageSquare className="h-3.5 w-3.5 text-primary" />
                </div>
              )}
              <div
                className={cn(
                  "max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                  msg.role === "user"
                    ? "bg-primary text-white rounded-br-md"
                    : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-md",
                )}
              >
                <MessageContent text={msg.content} />
                <div
                  className={cn(
                    "text-[10px] mt-1.5",
                    msg.role === "user" ? "text-white/50 text-right" : "text-gray-400",
                  )}
                >
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-1">
                <MessageSquare className="h-3.5 w-3.5 text-primary" />
              </div>
              <div className="bg-white text-gray-800 border border-gray-100 shadow-sm rounded-2xl rounded-bl-md">
                <TypingDots />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick replies */}
        {activeQuickReplies.length > 0 && (
          <div className="px-4 py-2 border-t border-gray-100 bg-white flex-shrink-0">
            <div className="flex flex-wrap gap-1.5">
              {activeQuickReplies.map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleQuickReply(r)}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/25 text-primary bg-primary/5 hover:bg-primary/10 transition-colors whitespace-nowrap"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Scroll-to-bottom button */}
        {showScrollBtn && (
          <button
            onClick={scrollToBottom}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white shadow-md border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors z-10"
            aria-label="Scroll to bottom"
          >
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        )}

        {/* --- Input --- */}
        <div className="border-t border-gray-200 px-3 py-3 bg-white sm:rounded-b-2xl flex-shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            className="flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 transition-shadow placeholder:text-gray-400"
              disabled={isTyping}
              aria-label="Chat message"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={cn(
                "flex items-center justify-center w-9 h-9 rounded-full transition-all duration-150",
                input.trim() && !isTyping
                  ? "bg-primary text-white hover:bg-primary/90 shadow-sm"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed",
              )}
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="text-[10px] text-gray-400 text-center mt-1.5">
            Noble Property Care Virtual Assistant
          </p>
        </div>
      </div>
    </>
  )
}

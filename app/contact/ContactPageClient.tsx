"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, AlertCircle, Clock, ArrowRight } from "lucide-react"
import { sendContactEmail } from "@/app/actions/email-actions"

export default function ContactPageClient() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    const name = formData.get("name") as string
    if (!name || name.trim() === "") {
      newErrors.name = "Name is required"
    }

    const email = formData.get("email") as string
    if (!email || email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    const phone = formData.get("phone") as string
    if (phone && !/^[0-9\-+$$$$\s]{10,15}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    const message = formData.get("message") as string
    if (!message || message.trim() === "") {
      newErrors.message = "Message is required"
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(null)

    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendContactEmail(formData)

      if (result.success) {
        router.push("/thank-you/contact")
      } else {
        setFormError(result.error || "Failed to send message. Please try again.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      setFormError("An unexpected error occurred. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Contact</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Get in touch</h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Have questions about our property maintenance services? Our team is here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-5">
            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">Contact Information</h2>
              <p className="text-sm text-muted-foreground mb-8">
                Reach out via phone, email, or fill out the form and we&apos;ll respond within 24 hours.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    content: (
                      <a href="tel:+19548167872" className="text-sm text-foreground hover:text-primary transition-colors font-medium">
                        +1 954-816-7872
                      </a>
                    ),
                    sub: "Monday–Friday, 8am–6pm ET",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: (
                      <a href="mailto:frantz@noblepropertycares.com" className="text-sm text-foreground hover:text-primary transition-colors font-medium break-all">
                        frantz@noblepropertycares.com
                      </a>
                    ),
                    sub: "We'll respond within 24 hours",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    content: <p className="text-sm text-foreground font-medium">11987 Southern Blvd. #1064, Royal Palm Beach, FL 33411</p>,
                    sub: "Serving Royal Palm Beach and surrounding areas",
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    content: <p className="text-sm text-foreground font-medium">Mon–Fri: 8:00am – 6:00pm ET</p>,
                    sub: "Emergency support available 24/7",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">{item.title}</p>
                      {item.content}
                      <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-1">Send us a message</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {formError && (
                  <div className="mb-6 p-3 bg-red-50 border border-red-100 text-red-700 rounded-lg flex items-start text-sm">
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>{formError}</span>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-sm font-medium required-field">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`h-11 rounded-lg ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium required-field">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`h-11 rounded-lg ${errors.email ? "border-red-500" : ""}`}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium">Phone <span className="text-muted-foreground font-normal">(optional)</span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`h-11 rounded-lg ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="text-xs text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="service" className="text-sm font-medium">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Rental Property Landscaping">Rental Property Landscaping</option>
                      <option value="Commercial Property Maintenance">Commercial Property Maintenance</option>
                      <option value="Janitorial & Cleaning">Janitorial & Cleaning</option>
                      <option value="Residential Maintenance">Residential Maintenance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-medium required-field">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your property and what services you're interested in..."
                      rows={5}
                      required
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`rounded-lg resize-none ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

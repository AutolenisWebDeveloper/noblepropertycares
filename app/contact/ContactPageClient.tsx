"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, AlertCircle } from "lucide-react"
import { sendContactEmail } from "@/app/actions/email-actions"

export default function ContactPageClient() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, string> = {}

    // Name validation
    const name = formData.get("name") as string
    if (!name || name.trim() === "") {
      newErrors.name = "Name is required"
    }

    // Email validation
    const email = formData.get("email") as string
    if (!email || email.trim() === "") {
      newErrors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const phone = formData.get("phone") as string
    if (phone && !/^[0-9\-+$$$$\s]{10,15}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Message validation
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
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-xl text-gray-200">
              Get in touch with our team for property maintenance and management services
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our property maintenance services? Need a quote for your property? Contact us today
                and our team will be happy to assist you.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Phone className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">
                      <a href="tel:+19548167872" className="hover:text-primary transition-colors">
                        +1 954-816-7872
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Monday-Friday, 8am-6pm ET</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Mail className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">
                      <a
                        href="mailto:frantz@noblepropertycares.com"
                        className="hover:text-primary transition-colors break-all"
                      >
                        frantz@noblepropertycares.com
                      </a>
                    </p>
                    <p className="mt-1 text-sm text-gray-500">We'll respond as soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Office</h3>
                    <p className="mt-1 text-gray-600">11987 Southern Blvd. #1064</p>
                    <p className="text-gray-600">Royal Palm Beach, FL 33411</p>
                    <p className="mt-1 text-sm text-gray-500">Serving Royal Palm Beach and surrounding areas</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Contact%20Us-oQcwpst9XKNAoTWS1kcGTu2k5SSLBs.png"
                    alt="Noble Property Care customer service team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {formError && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-start">
                      <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="required-field">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-500 mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="required-field">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          aria-required="true"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="text-sm text-red-500 mt-1">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <select
                        id="service"
                        name="service"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Rental Property Landscaping">Rental Property Landscaping</option>
                        <option value="Commercial Property Maintenance">Commercial Property Maintenance</option>
                        <option value="Janitorial & Cleaning">Janitorial & Cleaning</option>
                        <option value="Residential Maintenance">Residential Maintenance</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="required-field">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, AlertCircle, CheckCircle, ArrowRight, Shield, Clock } from "lucide-react"
import { sendServiceRequestEmail } from "@/app/actions/email-actions"

export default function RequestServiceClient() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

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
    if (!phone || phone.trim() === "") {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9\-+$$$$\s]{10,15}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    const address = formData.get("address") as string
    if (!address || address.trim() === "") {
      newErrors.address = "Property address is required"
    }

    const propertyType = formData.get("propertyType") as string
    if (!propertyType || propertyType === "Select property type") {
      newErrors.propertyType = "Please select a property type"
    }

    const serviceType = formData.get("serviceType") as string
    if (!serviceType || serviceType === "Select service type") {
      newErrors.serviceType = "Please select a service type"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormError(null)

    const formData = new FormData(e.currentTarget)

    if (date) {
      formData.set("serviceDate", format(date, "yyyy-MM-dd"))
    }

    if (!validateForm(formData)) {
      return
    }

    setIsSubmitting(true)

    try {
      const result = await sendServiceRequestEmail(formData)

      if (result.success) {
        router.push("/thank-you/service-request")
      } else {
        setFormError(result.error || "Failed to send service request. Please try again.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Service request form submission error:", error)
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
            <p className="text-sm font-medium uppercase tracking-widest text-white/60 mb-4">Request Service</p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Schedule your service
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Tell us about your property and service needs. We&apos;ll respond with a customized plan within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-5">
            {/* Service Information */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground mb-2">What to expect</h2>
              <p className="text-sm text-muted-foreground mb-8">
                We provide tailored property maintenance services. Here&apos;s how we work:
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: CheckCircle,
                    title: "1. Submit your request",
                    desc: "Fill out the form with your property details and service needs.",
                  },
                  {
                    icon: Clock,
                    title: "2. Receive a response",
                    desc: "Our team reviews your request and contacts you within 24 hours.",
                  },
                  {
                    icon: Shield,
                    title: "3. Get a custom quote",
                    desc: "We provide a detailed, transparent quote tailored to your property.",
                  },
                ].map((step) => (
                  <div key={step.title} className="flex gap-4">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/5 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{step.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">Our Services Include</p>
                <ul className="space-y-2">
                  {[
                    "Rental Property Landscaping",
                    "Commercial Maintenance & Repairs",
                    "Janitorial & Cleaning Services",
                    "Residential Property Care",
                    "Emergency Support (24/7)",
                  ].map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Request Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-foreground mb-1">Service Request Form</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Provide your details below and we&apos;ll contact you promptly.
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
                      placeholder="Your full name"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`h-11 rounded-lg ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && <p id="name-error" className="text-xs text-red-500">{errors.name}</p>}
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
                      {errors.email && <p id="email-error" className="text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="phone" className="text-sm font-medium required-field">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 000-0000"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        className={`h-11 rounded-lg ${errors.phone ? "border-red-500" : ""}`}
                      />
                      {errors.phone && <p id="phone-error" className="text-xs text-red-500">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="address" className="text-sm font-medium required-field">Property Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Full property address"
                      required
                      aria-required="true"
                      aria-invalid={!!errors.address}
                      aria-describedby={errors.address ? "address-error" : undefined}
                      className={`h-11 rounded-lg ${errors.address ? "border-red-500" : ""}`}
                    />
                    {errors.address && <p id="address-error" className="text-xs text-red-500">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="propertyType" className="text-sm font-medium required-field">Property Type</Label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        className={`flex h-11 w-full rounded-lg border ${
                          errors.propertyType ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.propertyType}
                        aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
                      >
                        <option value="">Select property type</option>
                        <option value="Residential - Single Family">Residential — Single Family</option>
                        <option value="Residential - Multi-Family">Residential — Multi-Family</option>
                        <option value="Apartment Complex">Apartment Complex</option>
                        <option value="Commercial - Office">Commercial — Office</option>
                        <option value="Commercial - Retail">Commercial — Retail</option>
                        <option value="Commercial - Industrial">Commercial — Industrial</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.propertyType && <p id="propertyType-error" className="text-xs text-red-500">{errors.propertyType}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="serviceType" className="text-sm font-medium required-field">Service Type</Label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        className={`flex h-11 w-full rounded-lg border ${
                          errors.serviceType ? "border-red-500" : "border-input"
                        } bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                        required
                        aria-required="true"
                        aria-invalid={!!errors.serviceType}
                        aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
                      >
                        <option value="">Select service type</option>
                        <option value="Rental Property Landscaping">Rental Property Landscaping</option>
                        <option value="Commercial Property Maintenance">Commercial Property Maintenance</option>
                        <option value="Janitorial & Cleaning">Janitorial & Cleaning</option>
                        <option value="Residential Maintenance">Residential Maintenance</option>
                        <option value="One-time Service">One-time Service</option>
                        <option value="Regular Maintenance">Regular Maintenance</option>
                        <option value="Emergency Service">Emergency Service</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.serviceType && <p id="serviceType-error" className="text-xs text-red-500">{errors.serviceType}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="serviceDate" className="text-sm font-medium">Preferred Date <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full h-11 rounded-lg justify-start text-left font-normal ${
                            !date ? "text-muted-foreground" : ""
                          }`}
                          id="serviceDate"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 popover-content-calendar" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < today}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="details" className="text-sm font-medium">Additional Details <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <Textarea
                      id="details"
                      name="details"
                      placeholder="Any specific requirements or details about your property..."
                      rows={4}
                      className="rounded-lg resize-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="howHeard" className="text-sm font-medium">How did you hear about us? <span className="text-muted-foreground font-normal">(optional)</span></Label>
                    <select
                      id="howHeard"
                      name="howHeard"
                      className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select an option</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Referral">Referral from a Friend/Colleague</option>
                      <option value="Local Directory">Local Business Directory</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : (
                      <>
                        Submit Service Request
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

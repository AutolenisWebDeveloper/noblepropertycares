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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, AlertCircle, CheckCircle } from "lucide-react"
import { sendServiceRequestEmail } from "@/app/actions/email-actions"

export default function RequestServiceClient() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formError, setFormError] = useState<string | null>(null)
  const [date, setDate] = useState<Date | undefined>(undefined)

  // Set minimum date to today
  const today = new Date()
  today.setHours(0, 0, 0, 0)

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
    if (!phone || phone.trim() === "") {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9\-+$$$$\s]{10,15}$/.test(phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Address validation
    const address = formData.get("address") as string
    if (!address || address.trim() === "") {
      newErrors.address = "Property address is required"
    }

    // Property type validation
    const propertyType = formData.get("propertyType") as string
    if (!propertyType || propertyType === "Select property type") {
      newErrors.propertyType = "Please select a property type"
    }

    // Service type validation
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

    // Add the date to form data if selected
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
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Request Service</h1>
            <p className="mt-6 text-xl text-gray-200">
              Fill out the form below to request our property maintenance services
            </p>
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Service Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">Our Services</h2>
              <p className="text-lg text-gray-600 mb-8">
                We offer comprehensive property maintenance services tailored to your specific needs. Whether you need
                regular landscaping, one-time cleaning, or ongoing maintenance, we've got you covered.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Rental Property Landscaping</h3>
                    <p className="mt-1 text-gray-600">
                      Professional landscaping services for rental properties, including lawn care, garden maintenance,
                      and outdoor space enhancement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Commercial Property Maintenance</h3>
                    <p className="mt-1 text-gray-600">
                      Comprehensive maintenance services for commercial properties, including repairs, inspections, and
                      regular upkeep.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <CheckCircle className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Janitorial & Cleaning Services</h3>
                    <p className="mt-1 text-gray-600">
                      Professional cleaning services for residential and commercial properties, including deep cleaning,
                      regular maintenance, and specialized services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landscaping%20%26%20Outdoor%20Care%20%282%29.png-4BPGl5UE4BKnRzjenPF1qSPMJmrqnr.webp"
                    alt="Professional landscaping services by Noble Property Care"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Request Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Request a Service</CardTitle>
                  <CardDescription>
                    Fill out the form below to request a service. We'll get back to you as soon as possible.
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
                        placeholder="Your full name"
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
                          placeholder="Your email address"
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
                        <Label htmlFor="phone" className="required-field">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Your phone number"
                          required
                          aria-required="true"
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
                      <Label htmlFor="address" className="required-field">
                        Property Address
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        placeholder="Full property address"
                        required
                        aria-required="true"
                        aria-invalid={!!errors.address}
                        aria-describedby={errors.address ? "address-error" : undefined}
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && (
                        <p id="address-error" className="text-sm text-red-500 mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="propertyType" className="required-field">
                          Property Type
                        </Label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          className={`flex h-10 w-full rounded-md border ${
                            errors.propertyType ? "border-red-500" : "border-input"
                          } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
                          required
                          aria-required="true"
                          aria-invalid={!!errors.propertyType}
                          aria-describedby={errors.propertyType ? "propertyType-error" : undefined}
                        >
                          <option value="">Select property type</option>
                          <option value="Residential - Single Family">Residential - Single Family</option>
                          <option value="Residential - Multi-Family">Residential - Multi-Family</option>
                          <option value="Apartment Complex">Apartment Complex</option>
                          <option value="Commercial - Office">Commercial - Office</option>
                          <option value="Commercial - Retail">Commercial - Retail</option>
                          <option value="Commercial - Industrial">Commercial - Industrial</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.propertyType && (
                          <p id="propertyType-error" className="text-sm text-red-500 mt-1">
                            {errors.propertyType}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="serviceType" className="required-field">
                          Service Type
                        </Label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          className={`flex h-10 w-full rounded-md border ${
                            errors.serviceType ? "border-red-500" : "border-input"
                          } bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
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
                        {errors.serviceType && (
                          <p id="serviceType-error" className="text-sm text-red-500 mt-1">
                            {errors.serviceType}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceDate">Preferred Service Date (Optional)</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={`w-full justify-start text-left font-normal ${
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

                    <div className="space-y-2">
                      <Label htmlFor="details">Additional Details (Optional)</Label>
                      <Textarea
                        id="details"
                        name="details"
                        placeholder="Please provide any additional details about your service request"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="howHeard">How did you hear about us? (Optional)</Label>
                      <select
                        id="howHeard"
                        name="howHeard"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Service Request"}
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

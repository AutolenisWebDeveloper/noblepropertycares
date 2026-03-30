"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailResult {
  success: boolean
  error?: string
}

export async function sendContactEmail(formData: FormData): Promise<EmailResult> {
  try {
    // Validate required fields
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string
    const service = formData.get("service") as string
    const phone = (formData.get("phone") as string) || "Not provided"

    if (!name || !email || !message) {
      return {
        success: false,
        error: "Please fill out all required fields",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Please enter a valid email address",
      }
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "website@noblepropertycares.com",
      to: "frantz@noblepropertycares.com",
      subject: `New Contact Form Submission: ${service || "General Inquiry"}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service || "General Inquiry"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #1a472a; color: white; padding: 10px 20px;">
              <h2>New Contact Form Submission</h2>
            </div>
            <div style="padding: 20px; border: 1px solid #ddd;">
              <div style="margin-bottom: 10px;">
                <span style="font-weight: bold;">Name:</span> ${name}
              </div>
              <div style="margin-bottom: 10px;">
                <span style="font-weight: bold;">Email:</span> ${email}
              </div>
              <div style="margin-bottom: 10px;">
                <span style="font-weight: bold;">Phone:</span> ${phone}
              </div>
              <div style="margin-bottom: 10px;">
                <span style="font-weight: bold;">Service:</span> ${service || "General Inquiry"}
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1a472a;">
                <span style="font-weight: bold;">Message:</span>
                <p>${message.replace(/\n/g, "<br>")}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        error: "Failed to send your message. Please try again later.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

export async function sendServiceRequestEmail(formData: FormData): Promise<EmailResult> {
  try {
    // Extract and validate form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const propertyType = formData.get("propertyType") as string
    const serviceType = formData.get("serviceType") as string
    const serviceDate = formData.get("serviceDate") as string
    const details = formData.get("details") as string
    const howHeard = formData.get("howHeard") as string

    // Basic validation
    if (!name || !email || !phone || !address || !propertyType || !serviceType) {
      return {
        success: false,
        error: "Please fill out all required fields",
      }
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: "website@noblepropertycares.com",
      to: "frantz@noblepropertycares.com",
      subject: `New Service Request: ${serviceType}`,
      reply_to: email,
      text: `New Service Request\n\nClient Information:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nService Details:\nProperty Address: ${address}\nProperty Type: ${propertyType}\nService Type: ${serviceType}\nPreferred Date: ${serviceDate || "Not specified"}\n\nAdditional Details:\n${details || "None provided"}\n\nMarketing Information:\nHow they heard about us: ${howHeard || "Not specified"}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background-color: #1a472a; color: white; padding: 10px 20px;">
              <h2>New Service Request</h2>
            </div>
            <div style="padding: 20px; border: 1px solid #ddd;">
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px;">Client Information</div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Name:</span> ${name}
                </div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Email:</span> ${email}
                </div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Phone:</span> ${phone}
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px;">Service Details</div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Property Address:</span> ${address}
                </div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Property Type:</span> ${propertyType}
                </div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Service Type:</span> ${serviceType}
                </div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">Preferred Date:</span> ${serviceDate || "Not specified"}
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px;">Additional Information</div>
                <div style="margin-top: 15px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #1a472a;">
                  ${details ? details.replace(/\n/g, "<br>") : "None provided"}
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <div style="font-weight: bold; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-bottom: 10px;">Marketing Information</div>
                <div style="margin-bottom: 10px;">
                  <span style="font-weight: bold;">How they heard about us:</span> ${howHeard || "Not specified"}
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        error: "Failed to send your service request. Please try again later.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Service request form error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

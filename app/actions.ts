"use server"

import { Resend } from "resend"
import { ContactFormSchema, type ContactFormValues } from "@/lib/schema"

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY)
console.log('EMAIL_TO:', process.env.EMAIL_TO)

export async function sendEmail(data: ContactFormValues) {
  // Validate the data with Zod
  const result = ContactFormSchema.safeParse(data)

  // If validation fails, throw an error with the validation message
  if (!result.success) {
    const errorMessage = result.error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ")

    throw new Error(`Validation failed: ${errorMessage}`)
  }

  // Destructure the validated data
  const { firstname, lastname, email, message } = result.data

  try {
    // Send the email
    const { data: responseData, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: process.env.EMAIL_TO as string, // Your email address
      subject: `Contact Form: ${message}`,
      replyTo: 'info@berndullmann.de',
      text: `
        Name: ${firstname} ${lastname}
        Email: ${email}
        
        Message: ${message}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error(error.message)
    }

    return { success: true, data: responseData }
  } catch (error) {
    console.error("Failed to send email:", error)
    throw new Error((error as Error).message || "Failed to send email")
  }
}


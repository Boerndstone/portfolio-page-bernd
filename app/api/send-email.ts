import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { ContactFormSchema } from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const result = ContactFormSchema.safeParse(req.body);

    if (!result.success) {
      const errorMessage = result.error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ");
      return res.status(400).json({ error: `Validation failed: ${errorMessage}` });
    }

    const { firstname, lastname, email, message } = result.data;

    try {
      const response = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
        to: process.env.EMAIL_TO as string, // Your email address
        subject: `Contact Form: ${message}`,
        replyTo: 'info@berndullmann.de',
        text: `
          Name: ${firstname} ${lastname}
          Email: ${email}
          
          Nachricht: ${message}
        `,
      });

      if (response.error) {
        console.error("Error sending email:", response.error);
        return res.status(500).json({ error: response.error.message });
      }

      return res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error("Failed to send email:", error);
      return res.status(500).json({ error: (error as Error).message || "Failed to send email" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
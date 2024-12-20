import { z } from 'zod';
import { formSchema } from './schema';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: emailFormData.firstname }),
    });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to send email');
  }
};
import { z } from 'zod'
import { formSchema } from './schema';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/email-template';

console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY);
console.log('RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL);

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {

  const { data, error } = await resend.emails.send({
      from: `Acme <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: emailFormData.firstname }),
    });

    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
}
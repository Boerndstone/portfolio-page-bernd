import { z } from 'zod'
import { formSchema } from './schema';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/ui/email-template';

const resend = new Resend('re_Zpmrt87o_BLQB9FD8ca224x7nD1gUn1HV');

export const send = async (emailFormData: z.infer<typeof formSchema>) => {

  const { error } = await resend.emails.send({
      from: 'Acme <${process.env.RESEND_FROM_EMAIL}>',
      to: [emailFormData.email],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: emailFormData.firstname }),
    });

    if (error) {
      console.error(error);
      return;
    }
}
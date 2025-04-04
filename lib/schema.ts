import { z } from 'zod'

export const ContactFormSchema = z.object({
  firstname: z.string().nonempty({
    message: "Bitte geben Sie einen Vornamen ein.",
  }).min(2, {
    message: "Der Vorname muss mindestens 2 Zeichen lang sein.",
  }),
  lastname: z.string().nonempty({
    message: "Bitte geben Sie einen Nachnamen ein.",
  }).min(2, {
    message: "Der Nachname muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().nonempty({
    message: "Bitte geben Sie eine E-Mail-Adresse ein.",
  }).email(
    { message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }
  ),
  message: z.string().nonempty({
    message: "Bitte geben Sie eine Nachricht ein und beschreiben Ihr Anliegen.",
  }).min(2),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>
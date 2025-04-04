"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { sendEmail } from "@/app/actions";
import { ContactFormSchema, type ContactFormValues } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      // await sendEmail(data);

      // Live Environment

      const response = await fetch("https://berndullmann.de/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
        variant: "default",
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Something went wrong!",
        description:
          (error as Error).message ||
          "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-8 text-center">
          Kontakt aufnehmen
        </CardTitle>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CardContent className="flex flex-col gap-6">
            <div className="group/field grid gap-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Vorname"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="group/field grid gap-2">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Nachname"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="group/field grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="group/field grid gap-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachricht</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nachricht"
                        className="min-h-[120px]"
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Nachricht senden"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}

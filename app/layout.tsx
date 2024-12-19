import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import skills from "../store/skills";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const description = skills.join(", ");

export const metadata: Metadata = {
  title: "Bernd Ullmann | Full Stack Webentwickler",
  description:
    "Bernd Ullmann | Full Stack Webentwickler. Mein Teck-Stack ist:" +
    description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

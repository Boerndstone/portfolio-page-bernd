"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import skills from "../store/skills";
import { ContactForm } from "./features/contact-form";
import CookieDisclaimer from "./CookieDisclaimer";

const projects = [
  {
    title: "Munichclimbs",
    description:
      "Klettergebiete rund um München. Verwendete Technologien: <br />Symfony, MySQL, Stimulus, Bootstrap",
    link: "https://www.munichclimbs.de",
    image: "/images/munichclimbs.jpg",
  },
  {
    title: "Wingtzun München",
    description:
      "Wingtzun Kampfkunstschule in München. Verwendete Technologien: <br />HTML, SCSS, Bootstrap, Gulp",
    link: "https://wingtzun-muenchen.de/",
    image: "/images/wingtzun.jpg",
  },
];

export function PortfolioComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 backdrop-blur-sm bg-background/80 border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">BU</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Über mich
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-primary transition-colors"
                >
                  Tech-Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-primary transition-colors"
                >
                  Projekte
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Bernd Ullmann</h2>
            <p className="text-xl mb-6">Full Stack Webentwickler.</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <a
                href="https://www.linkedin.com/in/bernd-ullmann-458aab1aa/"
                target="_blank"
                rel="noopener noreferrer"
                role="button"
              >
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                <Button variant="outline" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tech-Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <Card key={skill}>
                <CardContent className="flex items-center justify-center p-6">
                  <Code className="mr-2 h-5 w-5" />
                  <span>{skill}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Projekte</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-2xl mb-5">
                    {project.title}
                  </CardTitle>
                  {project.image && (
                    <Image
                      src={project.image}
                      width={1000}
                      height={500}
                      alt="Picture of the author"
                      className="py-5"
                    />
                  )}
                  <CardDescription
                    className="text-base mb-5"
                    dangerouslySetInnerHTML={{ __html: project.description }}
                  />
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <a href={project.link} target="_blank">
                      zur Webseite
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <ContactForm />
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Bernd Ullmann. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </footer>
      <CookieDisclaimer />
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Github, Linkedin, Mail, Send } from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "Stimulus",
  "React",
  "Node.js",
  "TypeScript",
  "PHP",
  "MySQL",
  "Symfony",
];
const projects = [
  {
    title: "Munichclimbs",
    description:
      "Klettergebiete rund um München. Verwendete Technologien: <br />Symfony, MySQL, Stimulus, Bootstrap",
    link: "https://www.munichclimbs.de",
  },
  {
    title: "Wingtzun München",
    description:
      "Wingtzun Kampfkunstschule in München. Verwendete Technologien: <br />HTML, SCSS, Bootstrap, Gulp",
    link: "https://wingtzun-muenchen.de/",
  },
  {
    title: "Weather Dashboard",
    description: "A weather app using OpenWeatherMap API and React.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js and Tailwind CSS.",
    link: "#",
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
              <Button variant="outline" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
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
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription
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

        {/* <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Kontakt aufnehmen
          </h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" />
                </div>
                <div>
                  <Textarea placeholder="Your Message" />
                </div>
                <Button className="w-full">
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section> */}

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Kontakt aufnehmen
          </h2>
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6">
              <p className="text-center">info@berndullmann.de</p>
            </CardContent>
          </Card>
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
    </div>
  );
}

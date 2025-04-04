"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "Über mich" },
  { href: "#skills", label: "Tech-Stack" },
  { href: "#projects", label: "Projekte" },
  { href: "#contact", label: "Kontakt" },
];
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter((id) => id !== "");

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Adjust these values to control when a section is considered "active"
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set home as active when at the top of the page
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <h1 className="text-xl text-white bg-blue rounded-full p-2">
                BU
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => {
                const isActive =
                  (link.href === "#" && activeSection === "") ||
                  (link.href !== "#" &&
                    activeSection === link.href.substring(1));

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative py-2 transition-colors",
                        isActive
                          ? "text-blue font-medium"
                          : "text-foreground hover:text-blue"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Burger Menu Button */}
          <div className="md:hidden">
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className={cn(
          "absolute left-0 right-0 z-50 bg-background shadow-md transition-all duration-200 ease-in-out md:hidden",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <ul className="space-y-2">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "#" && activeSection === "") ||
                (link.href !== "#" && activeSection === link.href.substring(1));

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block py-2 transition-colors",
                      isActive
                        ? "text-primary font-medium"
                        : "text-foreground hover:text-primary"
                    )}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

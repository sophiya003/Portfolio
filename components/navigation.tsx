"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (id === "home") {
      // scroll to top if "home" section
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-transparent border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* --- LOGO ON LEFT --- */}
        <button
          className="flex items-center gap-2"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/sophiya.png"
            alt="Sophiya Logo"
            width={70}
            height={70}
            className="rounded-full cursor-pointer hover:opacity-80 transition-opacity"
          />
        </button>

        {/* --- CENTER NAV LINKS --- */}
        <div className="hidden md:flex gap-8">
          {["about", "projects", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize text-sm font-medium transition-colors ${
                activeSection === item
                  ? "text-portfolio-accent"
                  : "text-muted-foreground hover:text-portfolio-accent"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* --- CONTACT BUTTON ON RIGHT --- */}
        <Link
          href="#contact"
          className="px-6 py-2 portfolio-gradient-bg text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium shadow-md"
        >
          Get in Touch
        </Link>
      </div>

      {/* --- Decorative Bottom Line --- */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-purple-600" />
    </nav>
  )
}

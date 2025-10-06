"use client"

import { useState } from "react"
import { Instagram, Menu, X } from "lucide-react"

const navigation = [
  { name: "concept", href: "#concept" },
  { name: "chef", href: "#chef" },
  { name: "menu", href: "#menu" },
  { name: "reservation", href: "#reservation" },
  { name: "gallery", href: "#gallery" },
  { name: "access", href: "#access" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setIsMenuOpen(true)} className="text-white hover:text-gray-300 transition-colors">
              <Menu size={20} />
            </button>

            <div className="flex items-center">
              <a
                href="https://www.instagram.com/page_tokyo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute left-0 top-0 h-full w-4/5 md:w-80 bg-black/60 backdrop-blur-sm transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            {/* Close button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300"
            >
              <X size={20} />
            </button>

            <nav className="mt-16 space-y-5">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-white text-sm font-light tracking-wide hover:text-gray-300 transition-colors font-serif"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

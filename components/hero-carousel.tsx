"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const heroImages = [
  {
    src: "/2025.08.04.page0354.jpg",
    alt: "Restaurant interior with elegant ambiance",
  },
  {
    src: "/2025.08.04.page0047.jpg",
    alt: "Artfully plated fusion cuisine",
  },
  {
    src: "/2025.08.04.page0007.jpg",
    alt: "Chef at work in the kitchen",
  },
  {
    src: "/2025.08.04.page1099.jpg",
    alt: "Intimate dining space",
  },
  {
    src: "/2025.08.04.page0524.jpg",
    alt: "Culinary artistry in action",
  },
]
export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center" style={{ marginTop: "-10vh" }}>
          <h1 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wider">page</h1>
        </div>
      </div>

      {/* Optional: Add navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

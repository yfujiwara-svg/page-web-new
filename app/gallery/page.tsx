import Image from "next/image"

const galleryImages = [
  {
    src: "/gallery-dish-1.jpg",
    alt: "Artfully plated signature dish with seasonal ingredients",
  },
  {
    src: "/gallery-interior-1.jpg",
    alt: "Intimate dining space with warm lighting",
  },
  {
    src: "/gallery-dish-2.jpg",
    alt: "Delicate fusion creation showcasing technique",
  },
  {
    src: "/gallery-kitchen.jpg",
    alt: "Chef at work in the open kitchen",
  },
  {
    src: "/gallery-dish-3.jpg",
    alt: "Seasonal tasting menu highlight",
  },
  {
    src: "/gallery-interior-2.jpg",
    alt: "Restaurant ambiance during evening service",
  },
  {
    src: "/gallery-dish-4.jpg",
    alt: "Innovative presentation of traditional flavors",
  },
  {
    src: "/gallery-detail.jpg",
    alt: "Close-up of culinary artistry and plating",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-balance">Gallery</h1>
        </div>

        {/* Desktop: 4 columns, 2 rows */}
        {/* Mobile: 2 columns, 4 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg font-light text-gray-600 max-w-2xl mx-auto text-pretty">
            Each dish tells a story of seasonal ingredients, innovative techniques, and the artistry that defines the
            page experience.
          </p>
        </div>
      </section>
    </div>
  )
}

import Image from "next/image"

export default function ChefPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Chef Photo */}
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/chef-portrait-professional.jpg"
              alt="Chef portrait in professional attire"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Chef Bio */}
          <div className="space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl font-light text-balance">Chef</h1>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-light leading-relaxed text-pretty">
                With over fifteen years of culinary excellence spanning Tokyo's most prestigious kitchens and
                Michelin-starred establishments across Europe, our chef brings a unique perspective to modern fusion
                cuisine.
              </p>
              <p className="text-lg font-light leading-relaxed text-pretty">
                Trained in classical French techniques and deeply rooted in Japanese culinary traditions, each dish at
                page reflects a harmonious balance of innovation and respect for ingredients. The philosophy centers on
                simplicity elevated—allowing the natural essence of each component to shine while creating unexpected
                flavor harmonies.
              </p>
              <p className="text-lg font-light leading-relaxed text-pretty">
                This intimate approach to dining, limited to just six guests per evening, ensures that every plate
                receives the meticulous attention and personal touch that defines the page experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

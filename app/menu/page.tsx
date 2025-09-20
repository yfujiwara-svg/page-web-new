export default function MenuPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-balance">Menu</h1>

          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-gray-800">Dinner [start 18:00-]</h2>

            <div className="bg-stone-50 rounded-lg p-8 md:p-12 max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl font-light text-gray-900">¥22,000</p>
              <p className="text-sm text-gray-600 mt-2 font-light">(tax included, service charge separate)</p>
            </div>

            <div className="max-w-2xl mx-auto mt-12">
              <p className="text-lg font-light leading-relaxed text-gray-700 text-pretty">
                Our carefully crafted tasting menu changes seasonally to showcase the finest ingredients at their peak.
                Each evening presents a unique culinary journey through innovative fusion techniques, honoring both
                Japanese precision and international influences.
              </p>
              <p className="text-lg font-light leading-relaxed text-gray-700 mt-4 text-pretty">
                Please inform us of any dietary restrictions or allergies when making your reservation, and we will be
                happy to accommodate your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

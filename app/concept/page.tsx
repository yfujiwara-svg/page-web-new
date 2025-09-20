"use client"

import Image from "next/image"

export default function ConceptPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-screen w-full">
        <Image
          src="/restaurant-interior-atmosphere.jpg"
          alt="Restaurant interior with atmospheric lighting"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-6 text-center text-white">
            <h1 className="font-serif text-lg md:text-xl font-light mb-4 text-balance">コンセプト</h1>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6">
              <p className="text-xs md:text-sm font-light leading-relaxed text-pretty">
                「page」は、わずか6席のカウンターで展開される、革新的な融合料理の世界です。
                日本の繊細さとヨーロッパの技法が織りなす、唯一無二の美食体験をお届けします。
              </p>
              <p className="text-xs md:text-sm font-light leading-relaxed mt-3 text-pretty">
                季節の移ろいとともに変化するメニューは、厳選された食材と職人の技が生み出す、
                記憶に残る一皿一皿をお約束いたします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

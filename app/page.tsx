"use client"

import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      <section id="concept" className="relative h-screen w-full">
  {/* 背景画像 */}
  <Image
    src="/restaurant-interior-atmosphere.jpg" // 画像パスはプロジェクトに合わせてください
    alt="Restaurant interior with atmospheric lighting"
    fill
    className="object-cover"
    priority
  />
  {/* 画像を少し暗くするためのオーバーレイ */}
  <div className="absolute inset-0 bg-black/30" />

  {/* 中央に配置するコンテンツ */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-2xl mx-auto px-6 text-center text-white">
      <h2 className="font-serif text-lg md:text-xl font-light mb-4 text-balance">
        concept
      </h2>
      
      {/* 半透明のボックスを削除したテキスト部分 */}
      <p className="text-xs md:text-sm font-light leading-relaxed text-pretty">
        1日6席のプライベート空間
      </p>
      <p className="text-xs md:text-sm font-light leading-relaxed mt-3 text-pretty">
        季節の移ろい、訪れる人々、一皿毎の料理が「page」に刻まれ、累積する
      </p>

    </div>
  </div>
</section>

      <section id="chef" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/chef-portrait-professional.jpg"
              alt="Chef portrait in professional attire"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-lg md:text-xl font-light text-balance">シェフ</h2>
            <div className="space-y-3 text-gray-700">
              <p className="text-xs font-light leading-relaxed text-pretty">
                東京の名門レストランから欧州のミシュラン星付き店舗まで、15年以上にわたる料理の探求を重ねてきました。
                フランス料理の古典技法と日本料理の伝統に深く根ざした経験から、独自の融合料理を生み出しています。
              </p>
              <p className="text-xs font-light leading-relaxed text-pretty">
                一晩にわずか6名様のみをお迎えする親密な空間で、
                一皿一皿に込められた想いと技術をお客様に直接お伝えできることを何よりの喜びとしています。
              </p>
              <p className="text-xs font-light leading-relaxed text-pretty">
                食材への敬意と革新への情熱が織りなす「page」の体験を、ぜひお楽しみください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-lg md:text-xl font-light mb-6 text-balance">メニュー</h2>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">季節のテイスティングメニュー</h3>
                <p className="text-lg font-light text-gray-900">¥18,000</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-light leading-relaxed text-gray-700 text-pretty">
                  季節ごとに変化するメニューは、地元の生産者や専門業者から厳選した最高の食材を使用しています。
                  毎晩、日本の精密さと国際的な影響を祝う、慎重にキュレーションされた7コースの旅をお届けします。
                </p>
                <p className="text-xs font-light text-gray-600 mt-3">ワインペアリング追加 ¥8,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-lg md:text-xl font-light mb-6 text-balance">ご予約</h2>
          <div className="space-y-4">
            <p className="text-xs font-light leading-relaxed text-gray-700 max-w-2xl mx-auto text-pretty">
              毎晩わずか6席のみの特別な空間で、シェフとの直接的な交流と、
              お食事の細部にまで行き届いた心配りをお楽しみいただけます。
            </p>
            <Button size="sm" className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-xs font-light">
              TableCheckで予約
            </Button>
            <p className="text-xs font-light text-gray-600">ご予約は必須となっており、30日前からお受けしております</p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-lg md:text-xl font-light mb-8 text-center text-balance">ギャラリー</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/gallery-dish-1.jpg",
              "/gallery-interior-1.jpg",
              "/gallery-dish-2.jpg",
              "/gallery-kitchen.jpg",
              "/gallery-dish-3.jpg",
              "/gallery-interior-2.jpg",
              "/gallery-dish-4.jpg",
              "/gallery-detail.jpg",
            ].map((src, index) => (
              <div key={index} className="relative aspect-square overflow-hidden rounded-lg group">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="message" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/chef-couple-warm-photo.jpg"
                alt="Chef and his wife in warm, welcoming pose"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="font-serif text-lg md:text-xl font-light text-balance">メッセージ</h2>
              <div className="space-y-3 text-gray-700">
                <p className="text-xs font-light leading-relaxed text-pretty">
                  「page」へようこそ。妻と私は、この空間を私たちの家の延長として創り上げ、
                  親密な環境で卓越した料理への情熱を分かち合いたいと願っています。
                </p>
                <p className="text-xs font-light leading-relaxed text-pretty">
                  毎晩、わずか6名のお客様をお迎えし、世界最高峰のキッチンでの経験と、
                  料理の芸術性への深い感謝を反映したお食事をご体験いただいています。
                </p>
                <p className="text-xs font-light leading-relaxed text-pretty">
                  この特別な体験を皆様と分かち合えることを心より楽しみにしております。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-lg md:text-xl font-light mb-8 text-center text-balance">アクセス</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">所在地</h3>
                <p className="text-xs font-light text-gray-700">
                  〒150-0002
                  <br />
                  東京都渋谷区渋谷1-2-3
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">お問い合わせ</h3>
                <p className="text-xs font-light text-gray-700">
                  電話: 03-1234-5678
                  <br />
                  メール: info@page-restaurant.com
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">営業時間</h3>
                <p className="text-xs font-light text-gray-700">
                  火曜日 - 土曜日: 18:00 - 22:00
                  <br />
                  日曜日・月曜日: 定休日
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">席数</h3>
                <p className="text-xs font-light text-gray-700">カウンター6席</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747707654!2d139.70!3d35.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM5JzM2LjAiTiAxMznCsDQyJzAwLjAiRQ!5e0!3m2!1sen!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

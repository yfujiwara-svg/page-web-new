"use client"

import Image from "next/image"
import HeroCarousel from "@/components/hero-carousel"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroCarousel />

      <section id="concept" className="relative w-full aspect-[4/3] md:h-screen mt-16 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]">
  {/* 背景画像 */}
  <Image
    src="/2025.08.04.page0883.jpg" // 画像パスはプロジェクトに合わせてください
    alt="Restaurant interior with atmospheric lighting"
    fill
    className="object-cover"
    priority
  />
  {/* 画像を少し暗くするためのオーバーレイ */}
  <div className="absolute inset-0 bg-black/30" />

  {/* 中央に配置するコンテンツ */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="max-w-2xl mx-auto px-6 text-center text-white opacity-80">
      {/* 半透明のボックスを削除したテキスト部分 */}
      <p className="text-[13px] md:text-sm font-light leading-relaxed text-pretty">
      A new page of culinary imagination awaits you here.
      </p>


    </div>
  </div>
</section>

<div className="relative w-full aspect-[3/4] md:h-screen -mt-20 md:-mt-48 [mask-image:linear-gradient(to_bottom,transparent,black_20%)]">
        <Image
          src="/2025.08.04.page1127.jpg"
          alt="Elegant restaurant interior"
          fill
          className="object-cover"
        />
        {/* 画像を少し暗くするためのオーバーレイ */}
        <div className="absolute inset-0 bg-black/40" />
        {/* 中央に配置するコンテンツ */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-2xl mx-auto px-6 text-center text-white opacity-80">
              <p className="text-[10px] md:text-xs font-light leading-relaxed mt-16 text-pretty">
                'page'はキャンバスであり、本の中の１ページです。
                </p>
                <p className="text-[10px] md:text-xs font-light leading-relaxed mt-4 text-pretty">
                歴史ある街浅草で、料理の新しい可能性を追求します。
                </p>
                <p className="text-[10px] md:text-xs font-light leading-relaxed mt-1 text-pretty">
                色彩豊かな料理や、食材に現れる季節の移ろい
                </p>
                <p className="text-[10px] md:text-xs font-light leading-relaxed mt-1 text-pretty">
                1日に6席の出会い、店内に並ぶアートたち。
                </p>
                <p className="text-[10px] md:text-xs font-light leading-relaxed mt-7 text-pretty">
                その一つ一つを大切に編みながら。
                </p>
            </div>
        </div>
      </div>

      <section id="chef" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[3/4] w-full max-w-md mx-auto">
            <Image
              src="/2025.08.04.page0904.jpg"
              alt="Chef portrait in professional attire"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
          　<h2 className="font-serif text-lg md:text-xm font-light text-balance">chef</h2>
            <h2 className="font-serif text-lg md:text-xm font-light mt-1 text-balance">増永 琉聖  Ryusei Masunaga</h2>
            <div className="space-y-3 text-gray-700">
              <p className="text-[11px] md:text-xs font-light leading-relaxed mt-12 text-pretty">
              1998年　佐賀県生まれ。
              </p>
              <p className="text-[11px] md:text-xs font-light leading-relaxed mt-1 text-pretty">
              高校の調理科を卒業後、2016年「オーグードゥジュール メルヴェイユ博多」に勤務。その後、イタリアンやスペイン料理を学び、2018年に佐賀の「arita huis」へ。2020年、22歳で同店ヘッドシェフに就任。
              </p>
              <p className="text-[11px] md:text-xs font-light leading-relaxed mt-1 text-pretty">
              
              </p>
              <p className="text-[11px] md:text-xs font-light leading-relaxed text-pretty">
              その後、福岡県のイノベーティブレストラン「Nishimura Takahito La Cuisine Creativite」のヘッドシェフに抜擢。
              </p>
              <p className="text-[11px] md:text-xs font-light leading-relaxed text-pretty">
              2023年、料理人コンペティション「RED U-35」にてSILVER EGGを受賞。
             </p>
             <p className="text-[11px] md:text-xs font-light leading-relaxed text-pretty">
             2024年7月に一度レストランを離れ、パンや菓子などを学ぶ。2025年7月、東京にてレストラン「page」をオープン。
             </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-full aspect-[4/3] md:h-screen">
        <Image
          src="/2025.08.04.page0355.jpg"
          alt="Elegant restaurant interior"
          fill
          className="object-cover"
        />
      </div>

      <section id="menu" className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-lg md:text-xl font-light mb-6 text-balance">menu</h2>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-xs font-medium mb-1">ディナーコース(税込)</h3>
                <p className="text- font-light text-gray-900">¥22,000</p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-[11px] md:text-xs font-light leading-relaxed text-gray-700 text-pretty">
                ［start 18：00-］別途サービス料金を頂戴します。
                </p>
                <p className="text-xs font-light text-gray-600 mt-3">ペアリング ¥16,500（税込）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="reservation" className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-lg md:text-xl font-light mb-6 text-balance">reservation</h2>
          <div className="space-y-4">
            <p className="text-[11px] md:text-xs font-light leading-relaxed text-gray-700 max-w-2xl mx-auto text-pretty">
            ご予約はTableCheck,お電話より承っております。
            </p>
            <p className="text-[11px] md:text-xs font-light leading-relaxed text-gray-700 max-w-2xl mx-auto text-pretty">
            tel:03-6820-6541
            </p>
            <Button size="sx" className="bg-black text-white hover:bg-gray-800 px-6 py-2 text-xs font-light">
              TableCheck
            </Button>


          </div>
        </div>
      </section>

      <section id="gallery" className="bg-stone-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-lg md:text-xl font-light mb-8 text-center text-balance">gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/2025.08.04.page0058.jpg",
              "/2025.08.04.page0367.jpg",
              "/2025.08.04.page0558.jpg",
              "/2025.08.04.page0577 1.jpg",
              "/2025.08.04.page0607.jpg",
              "/2025.08.04.page0915.jpg",
              "/2025.08.04.page0313.jpg",
              "/2025.08.04.page0173.jpg",
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



      <section id="access" className="bg-stone-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-lg md:text-xl font-light mb-8 text-center text-balance">access</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">所在地</h3>
                <p className="text-xs font-light text-gray-700">
                  〒111-0032
                  <br />
                  東京都台東区浅草５丁目６７−２　1階
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">お問い合わせ</h3>
                <p className="text-xs font-light text-gray-700">
                  電話: 03-6820-6541
                  <br />
                  メール: info@pagetokyo.com
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">営業時間</h3>
                <p className="text-xs font-light text-gray-700">
                  18:00 - 22:00
                  <br />
                  不定休
                </p>
              </div>
              <div>
                <h3 className="font-serif text-sm font-medium mb-1">席数</h3>
                <p className="text-xs font-light text-gray-700">1日6席限定</p>
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

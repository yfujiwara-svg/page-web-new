import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReservationPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-balance">Reservation</h1>

          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg font-light leading-relaxed text-gray-700 text-pretty">
              Reservations can be made through TableCheck.
            </p>

            <div className="bg-stone-50 rounded-lg p-8 md:p-12">
              <p className="text-base font-light text-gray-600 mb-6 text-pretty">
                Experience our intimate 6-seat dining room where every evening becomes a personalized culinary journey.
                Due to our limited capacity, we recommend booking well in advance.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-light"
              >
                <Link href="https://tablecheck.com" target="_blank" rel="noopener noreferrer">
                  Reserve on TableCheck
                </Link>
              </Button>
            </div>

            <div className="text-sm text-gray-600 space-y-2 font-light">
              <p>Please note: Cancellations must be made at least 48 hours in advance.</p>
              <p>For special dietary requirements, please contact us directly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AccessPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-light text-balance">Access</h1>
        </div>

        <div className="space-y-12">
          {/* Google Maps Embed */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.0273!2d139.7671!3d35.6812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDQwJzUyLjMiTiAxMznCsDQ2JzAxLjYiRQ!5e0!3m2!1sen!2sjp!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            />
          </div>

          {/* Restaurant Information */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">Address</h3>
                <p className="text-gray-700 font-light">
                  [Address Placeholder]
                  <br />
                  Tokyo, Japan
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-700 font-light">[Phone Placeholder]</p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">E-mail</h3>
                <p className="text-gray-700 font-light">[Email Placeholder]</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">Hours</h3>
                <p className="text-gray-700 font-light">
                  Irregular holidays
                  <br />
                  (Please inquire for details)
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl font-light mb-2 text-gray-900">Seats</h3>
                <p className="text-gray-700 font-light">Limited to 6 seats per day</p>
              </div>

              <div className="bg-stone-50 rounded-lg p-6">
                <p className="text-sm text-gray-600 font-light text-pretty">
                  Due to our intimate setting and personalized service, we recommend making reservations well in
                  advance. Walk-ins cannot be accommodated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

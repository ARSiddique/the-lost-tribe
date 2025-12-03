import Link from "next/link";

export default function HoursLocation() {
  // Simple, reliable embed (no pb param needed)
  const embedSrc =
    "https://www.google.com/maps?q=The%20Lost%20Tribe%20United%20States&z=14&output=embed";

  return (
    <section className="bg-[#0b0908] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2">
        {/* Hours + Location */}
        <div>
          <h3 className="text-sm tracking-[0.35em] text-accent/70 mb-2">HOURS</h3>
          <ul className="space-y-2 text-white/80">
            <li>Mon–Thu: 5:00 PM – 10:00 PM</li>
            <li>Fri–Sat: 5:00 PM – 11:00 PM</li>
            <li>Sun: 5:00 PM – 9:00 PM</li>
          </ul>

          <div className="mt-8">
            <h4 className="text-sm tracking-[0.35em] text-accent/70 mb-2">LOCATION</h4>
            <p className="text-white/80">
              The Lost Tribe
              <br />
              United States
            </p>

            <Link
              href="https://maps.google.com/?q=The+Lost+Tribe+United+States"
              target="_blank"
              className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-black font-medium hover:brightness-110"
            >
              View on Google Maps
            </Link>
          </div>
        </div>

        {/* CTA card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Reserve Your Table</h3>
          <p className="text-white/70 mb-6">
            Limited seats nightly. Book now to experience the ritual.
          </p>
          <div className="flex gap-3">
            <Link
              href="/reservations"
              className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-black font-medium hover:brightness-110"
            >
              Book a Table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-white/90 hover:bg-white/10"
            >
              View Menu
            </Link>
          </div>

          {/* Embedded map – optional */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              src={embedSrc}
              width="100%"
              height="240"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

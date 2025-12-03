"use client";
import Link from "next/link";

export default function LocationSection() {
  // Correct Google Maps query for the US location
  const MAP_QUERY = "The Lost Tribe - Halal, 8925 West Chester Pike, Upper Darby Township, PA 19082";
  const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
  const MAP_LINK  = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

  return (
    <section className="bg-[#0b0908] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2">
        {/* Hours + Address */}
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
              <span className="font-semibold">The Lost Tribe — Halal</span><br/>
              8925 West Chester Pike,<br/>
              Upper Darby Township, PA 19082,<br/>
              United States
            </p>

            <p className="text-white/70 mt-3">
              Phone:{" "}
              <a href="tel:+16108626680" className="underline hover:no-underline">
                +1&nbsp;610-862-6680
              </a>
            </p>

            <Link
              href={MAP_LINK}
              target="_blank"
              className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-black font-medium hover:brightness-110"
            >
              View on Google Maps
            </Link>
          </div>
        </div>

        {/* CTA + Embedded Map */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">Reserve Your Table</h3>
          <p className="text-white/70 mb-6">
            Limited seats nightly. Book now to experience the ritual.
          </p>

          <div className="flex gap-3 mb-6">
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

          <div className="rounded-xl overflow-hidden border border-white/10">
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="250"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

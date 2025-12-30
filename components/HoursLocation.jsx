"use client";

import Link from "next/link";
import { site } from "@/lib/siteConfig";

export default function HoursLocation() {
  return (
    <section className="bg-[#0b0908] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-10 md:grid-cols-2">
        {/* Hours + Location */}
        <div>
          <h3 className="text-sm tracking-[0.35em] text-accent/70 mb-2">
            HOURS
          </h3>

          <ul className="space-y-2 text-white/80">
            {(site.hours || []).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>

          <div className="mt-8">
            <h4 className="text-sm tracking-[0.35em] text-accent/70 mb-2">
              LOCATION
            </h4>

            <p className="text-white/80">
              {site.name}
              <br />
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </p>

            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex rounded-full bg-accent px-5 py-2 text-black font-medium hover:brightness-110"
            >
              View on Google Maps ↗
            </a>
          </div>
        </div>

        {/* CTA card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Reserve Your Table
          </h3>
          <p className="text-white/70 mb-6">
            For reservations, call or WhatsApp. We’ll confirm as fast as possible.
          </p>

          <div className="relative z-10 flex flex-wrap gap-3">
            <a
              href={site.phoneTel}
              className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-black font-medium hover:brightness-110"
            >
              Call {site.phone}
            </a>

            <a
              href={`${site.whatsappLink}?text=${encodeURIComponent(
                "Hello! I'd like to book a table at The Lost Tribe."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-white/90 hover:bg-white/10"
            >
              WhatsApp
            </a>

            <Link
              href="/menu"
              className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-white/90 hover:bg-white/10"
            >
              View Menu
            </Link>
          </div>

          {/* Embedded map */}
          <div className="mt-6 overflow-hidden rounded-xl border border-white/10">
            <iframe
              src={site.mapsEmbed}
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

// app/contact/page.jsx
import Link from "next/link";
import { Phone, MessageSquareText, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: "Contact — The Lost Tribe",
  description:
    "Reservations and questions at The Lost Tribe. Call or WhatsApp, view hours, and get directions.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* global soft glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.14),transparent_55%)]" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-28 pb-10 md:pt-32 md:pb-12">
        <p className="text-xs tracking-[0.35em] text-amber-200/70">
          CONTACT &amp; RESERVATIONS
        </p>

        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl md:text-5xl">
          Call or WhatsApp to reserve.
        </h1>

        <p className="mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
          Reservations are handled by phone or WhatsApp. For quick questions,
          message us and we’ll confirm availability.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-xs font-medium text-black hover:brightness-110"
          >
            <MessageSquareText className="h-4 w-4" />
            WhatsApp
          </a>

          <a
            href={site.phoneTel}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Call {site.phone}
          </a>

          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-6 py-3 text-xs font-medium text-white/90 backdrop-blur hover:bg-white/10"
          >
            <MapPin className="h-4 w-4" />
            Directions
          </a>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Left: Hours + Address */}
          <div className="rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl shadow-[0_22px_65px_rgba(0,0,0,0.85)]">
            <div className="flex items-center gap-2 text-amber-200/85">
              <Clock className="h-5 w-5" />
              <p className="text-xs tracking-[0.32em]">HOURS</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-white/80">
              {(site.hours || []).map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-8">
              <div className="flex items-center gap-2 text-amber-200/85">
                <MapPin className="h-5 w-5" />
                <p className="text-xs tracking-[0.32em]">ADDRESS</p>
              </div>

              <p className="mt-4 text-sm text-white/80">
                <span className="font-semibold">{site.name} — Halal</span>
                <br />
                {site.addressLine1}
                <br />
                {site.addressLine2}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-xs font-medium text-black hover:brightness-110"
                >
                  View on Google Maps ↗
                </a>

                <Link
                  href="/location"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-xs font-medium text-white/90 hover:bg-white/10"
                >
                  Location page
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="rounded-3xl border border-white/10 bg-black/70 p-6 backdrop-blur-xl shadow-[0_22px_65px_rgba(0,0,0,0.85)]">
            <p className="text-xs tracking-[0.32em] text-amber-200/85">
              MAP
            </p>

            <h2 className="mt-3 text-xl font-semibold md:text-2xl">
              Find us easily.
            </h2>

            <p className="mt-2 text-sm text-white/70">
              Tap Directions for the quickest route.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/12">
              <iframe
                src={site.mapsEmbed}
                width="100%"
                height="320"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google map"
              />
            </div>

            <p className="mt-3 text-[11px] text-white/45">
              Parking available on-site and on nearby streets.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

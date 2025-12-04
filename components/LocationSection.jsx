// components/LocationSection.jsx
"use client";

import Link from "next/link";
import { FadeIn } from "@/components/anim";

export default function LocationSection() {
  // Correct Google Maps query for the US location
  const MAP_QUERY =
    "The Lost Tribe - Halal, 8925 West Chester Pike, Upper Darby Township, PA 19082";
  const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
    MAP_QUERY
  )}&output=embed`;
  const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    MAP_QUERY
  )}`;

  return (
    <section
      id="location"
      className="relative bg-bg text-fg border-t border-white/5"
    >
      {/* soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.09),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.09),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        {/* LEFT – hours + address */}
        <FadeIn>
          <p className="text-xs tracking-[0.35em] text-accent/70">
            FIND THE ROOM
          </p>

          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl md:text-[2.1rem]">
            In the middle of{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              Upper&nbsp;Darby.
            </span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base max-w-xl">
            Stepping inside The Lost Tribe should feel like you just slipped
            out of the city for a few hours. Here&apos;s when the room is lit
            and the grills are on.
          </p>

          <div className="mt-7">
            <h3 className="text-xs tracking-[0.32em] text-accent/70">
              HOURS
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-white/80 sm:text-base">
              <li>Mon–Thu: 5:00 PM – 10:00 PM</li>
              <li>Fri–Sat: 5:00 PM – 11:00 PM</li>
              <li>Sun: 5:00 PM – 9:00 PM</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xs tracking-[0.32em] text-accent/70">
              LOCATION
            </h3>
            <p className="mt-3 text-sm text-white/80 sm:text-base">
              <span className="font-semibold">The Lost Tribe — Halal</span>
              <br />
              8925 West Chester Pike,
              <br />
              Upper Darby Township, PA 19082,
              <br />
              United States
            </p>

            <p className="mt-3 text-sm text-white/70">
              Phone:&nbsp;
              <a
                href="tel:+16108626680"
                className="underline decoration-amber-300/70 underline-offset-2 hover:no-underline"
              >
                +1&nbsp;610-862-6680
              </a>
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href={MAP_LINK}
                target="_blank"
                className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-xs font-medium text-black hover:brightness-110"
              >
                View on Google Maps ↗
              </Link>
              <Link
                href="/reservations"
                className="inline-flex items-center rounded-full border border-white/25 bg-black/40 px-6 py-2.5 text-xs font-medium text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-100"
              >
                Book a table
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* RIGHT – CTA + embedded map card */}
        <FadeIn delay={0.12}>
          <div className="relative h-full">
            {/* glow behind card */}
            <div className="pointer-events-none absolute -bottom-10 left-6 h-40 w-40 rounded-full bg-amber-500/30 blur-3xl" />

            <div className="relative flex h-full flex-col rounded-3xl border border-white/12 bg-black/75 p-6 shadow-[0_22px_65px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <p className="text-xs tracking-[0.32em] text-amber-200/85">
                RESERVE YOUR TABLE
              </p>
              <h3 className="mt-3 text-xl font-semibold md:text-2xl">
                Limited seats every night.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                The room stays intentionally small so every table feels looked
                after. Reserve ahead to make sure the fire&apos;s waiting for
                you.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/reservations"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-black hover:brightness-110 md:flex-none md:px-6"
                >
                  Reserve for tonight
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex flex-1 items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-medium text-white/90 hover:bg-white/10 md:flex-none md:px-6"
                >
                  View the menu
                </Link>
              </div>

              {/* map */}
              <div className="mt-6 flex-1 rounded-2xl border border-white/12 overflow-hidden">
                <iframe
                  src={MAP_EMBED}
                  width="100%"
                  height="260"
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
        </FadeIn>
      </div>
    </section>
  );
}

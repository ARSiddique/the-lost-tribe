// app/location/page.jsx
import Link from "next/link";
import CopyButton from "@/components/CopyButton";
import { site } from "@/lib/siteConfig";

// ─────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────
export const metadata = {
  title: "Location — The Lost Tribe",
  description:
    "Address, hours, parking, and directions to The Lost Tribe — 8925 West Chester Pike, Upper Darby Township, PA 19082.",
};

// single-line address for directions + copy
const ADDRESS_ONE_LINE = `${site.name}, ${site.addressLine1}, ${site.addressLine2}`;

const ADDRESS_LINES = [
  site.name,
  site.addressLine1,
  site.addressLine2,
];

const GMAPS_PLACE = site.mapsLink;

const GMAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS_ONE_LINE);

const MAP_EMBED_SRC = site.mapsEmbed;

export default function LocationPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    telephone: site.phoneTel?.replace("tel:", "") || "+16108626680",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressLine1,
      addressLocality: "Upper Darby Township",
      addressRegion: "PA",
      postalCode: "19082",
      addressCountry: "US",
    },
    url: "https://the-lost-tribe.vercel.app",
    sameAs: [GMAPS_PLACE],
  };

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* hero + map */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#050309] to-black text-foreground">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-80 bg-[radial-gradient(70%_70%_at_10%_0%,rgba(209,178,96,0.25),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(0,255,163,0.18),transparent)] opacity-70" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-amber-300/80 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
              Location
            </p>

            <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Find us just{" "}
              <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-rose-300 bg-clip-text text-transparent">
                off West&nbsp;Chester&nbsp;Pike
              </span>
              .
            </h1>

            <p className="mt-3 text-sm md:text-base text-muted-foreground">
              {ADDRESS_ONE_LINE}
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-white/70">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                • Street parking available
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                • Easy access from West Chester Pike
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                • Family & group-friendly
              </span>
            </div>
          </div>

          {/* map card */}
          <div className="mt-10 lg:mt-12" style={{ perspective: "1800px" }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-black/60 to-black/95 shadow-[0_40px_120px_rgba(0,0,0,0.9)] transform-gpu transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.01]">
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,255,255,0.14),transparent)] opacity-70" />

              <div className="relative flex items-center justify-between px-5 pt-4 pb-3 text-xs text-white/70">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">
                    {site.name}
                  </span>
                  <span className="text-white/80">
                    {site.addressLine1} · Upper Darby Township
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  Open from 5 PM
                </span>
              </div>

              <div className="relative border-t border-white/10">
                <iframe
                  title="The Lost Tribe — Google Map"
                  src={MAP_EMBED_SRC}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-white/75">
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-white">Tonight at {site.name}</span>
                  <span>Slow-fire mains, warm room energy.</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1">Halal kitchen</span>
                  <span className="rounded-full bg-black/70 px-3 py-1">Evening dining</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons */}
         <div className="mt-6 flex flex-wrap gap-3">
  <a
    href={GMAPS_DIRECTIONS}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-black shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:brightness-110 active:scale-95 transition"
  >
    Get directions
  </a>

  <a
    href={GMAPS_PLACE}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 active:scale-95 transition"
  >
    View on Google Maps
  </a>

  <CopyButton
    text={ADDRESS_ONE_LINE}
    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 active:scale-95 transition"
  />
</div>

        </div>
      </section>

      {/* info grid */}
      <section className="bg-gradient-to-b from-black via-[#050309] to-black text-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Hours
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {(site.hours || []).map((h) => (
                  <li key={h} className="text-foreground/90">
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact (NO email) */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Reservations
              </h3>
              <div className="mt-3 space-y-3 text-sm">
                <p>
                  Call:{" "}
                  <a href={site.phoneTel} className="text-amber-300 hover:underline">
                    {site.phone}
                  </a>
                </p>
                <p>
                  WhatsApp:{" "}
                  <a
                    href={`${site.whatsappLink}?text=${encodeURIComponent(
                      "Hello! I'd like to book a table at The Lost Tribe."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-300 hover:underline"
                  >
                    Message us
                  </a>
                </p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                For reservations and quick questions, call or WhatsApp.
              </p>
            </div>

            {/* Parking + Address */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.03] to-emerald-500/[0.12] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Parking
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                Street parking available nearby. Arrive a few minutes early to find a comfortable spot.
              </p>

              <h3 className="mt-6 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Address
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// app/location/page.jsx
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

// ─────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────
export const metadata = {
  title: "Find Us | The Lost Tribe",
  description:
    "Address, hours, parking, and directions to The Lost Tribe — 8925 West Chester Pike, Upper Darby Township, PA 19082.",
};

// ─────────────────────────────────────────────
// Static details (single source of truth)
// ─────────────────────────────────────────────
const ADDRESS_ONE_LINE =
  "The Lost Tribe, 8925 West Chester Pike, Upper Darby Township, PA 19082, USA";

const ADDRESS_LINES = [
  "The Lost Tribe",
  "8925 West Chester Pike",
  "Upper Darby Township, PA 19082, USA",
];

const PHONE_DISPLAY = "(610) 555-0123";
const PHONE_TEL = "+16105550123";
const EMAIL = "hello@thelosttribe.com";

const HOURS = [
  { label: "Mon–Thu", time: "5:00 PM — 10:00 PM" },
  { label: "Fri–Sat", time: "5:00 PM — 11:00 PM" },
  { label: "Sun", time: "5:00 PM — 9:00 PM" },
];

// Footer ke Google Maps link se match rakha hai
const GMAPS_PLACE = "https://maps.app.goo.gl/eacnPCMDrHYH7USo9?g_st=aw";

const GMAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS_ONE_LINE);

// Embed map – name + full address se direct restaurant ke upar pin
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(ADDRESS_ONE_LINE) +
  "&hl=en&z=15&output=embed";

export default function LocationPage() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "The Lost Tribe",
    telephone: PHONE_TEL,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8925 West Chester Pike",
      addressLocality: "Upper Darby Township",
      addressRegion: "PA",
      postalCode: "19082",
      addressCountry: "US",
    },
    url: "https://thelosttribe.example", // live domain aane par update kar lena
    sameAs: [GMAPS_PLACE],
  };

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* 3D-ish hero + map */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#050309] to-black text-foreground">
        {/* soft radial glows */}
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-80 bg-[radial-gradient(70%_70%_at_10%_0%,rgba(209,178,96,0.25),transparent),radial-gradient(60%_60%_at_90%_10%,rgba(0,255,163,0.18),transparent)] opacity-70" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
          {/* top text + chips */}
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

          {/* map card – subtle “3D” glass panel */}
          <div
            className="mt-10 lg:mt-12"
            style={{ perspective: "1800px" }} // for transform-gpu
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] via-black/60 to-black/95 shadow-[0_40px_120px_rgba(0,0,0,0.9)] transform-gpu transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.01]">
              {/* light sheen on top */}
              <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(255,255,255,0.14),transparent)] opacity-70" />

              {/* label strip */}
              <div className="relative flex items-center justify-between px-5 pt-4 pb-3 text-xs text-white/70">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-200/80">
                    The Lost Tribe
                  </span>
                  <span className="text-white/80">
                    8925 West Chester Pike · Upper Darby Township
                  </span>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-medium text-emerald-300">
                  Open from 5 PM
                </span>
              </div>

              {/* map */}
              <div className="relative border-t border-white/10">
                <iframe
                  title="The Lost Tribe — Google Map"
                  src={MAP_EMBED_SRC}
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* gradient fade at bottom for text overlay readability */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
              </div>

              {/* bottom mini info row inside card */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-white/75">
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium text-white">
                    Tonight at The Lost Tribe
                  </span>
                  <span>Slow-fire mains, low-light seating, warm room energy.</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-black/70 px-3 py-1">
                    Halal kitchen
                  </span>
                  <span className="rounded-full bg-black/70 px-3 py-1">
                    Cozy evening vibe
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA buttons under the “3D” card */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={GMAPS_DIRECTIONS}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-black shadow-[0_18px_45px_rgba(0,0,0,0.7)] hover:brightness-110 active:scale-95 transition"
              aria-label="Get directions to The Lost Tribe"
            >
              Get directions
            </Link>

            <Link
              href={GMAPS_PLACE}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 active:scale-95 transition"
              aria-label="View The Lost Tribe on Google Maps"
            >
              View on Google Maps
            </Link>

            <CopyButton
              text={ADDRESS_ONE_LINE}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm text-white/80 hover:bg-white/10 active:scale-95 transition"
            />
          </div>
        </div>
      </section>

      {/* Glass info grid under hero */}
      <section className="bg-gradient-to-b from-black via-[#050309] to-black text-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Hours
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-center justify-between text-foreground/90"
                  >
                    <span>{h.label}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Contact
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  Phone:{" "}
                  <Link
                    href={`tel:${PHONE_TEL}`}
                    className="text-amber-300 hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </Link>
                </p>
                <p>
                  Email:{" "}
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="text-amber-300 hover:underline"
                  >
                    {EMAIL}
                  </Link>
                </p>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Prefer WhatsApp or a call? You can reach us using the floating
                buttons on the right.
              </p>
            </div>

            {/* Parking + Address */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.03] to-emerald-500/[0.12] px-5 py-5 backdrop-blur">
              <h3 className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                Parking
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                Street parking available nearby. Arrive a few minutes early to
                find a comfortable spot.
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

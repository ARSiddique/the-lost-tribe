// app/location/page.jsx
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

export const metadata = {
  title: "Find Us | The Lost Tribe",
  description:
    "Address, hours, parking, and directions to The Lost Tribe — 8925 West Chester Pike, Upper Darby Township, PA 19082.",
};

// ---- Static details (edit here if anything changes) ----
const ADDRESS_ONE_LINE =
  "8925 West Chester Pike, Upper Darby Township, PA 19082";

const ADDRESS_LINES = [
  "8925 West Chester Pike,",
  "Upper Darby Township, PA 19082",
];

const PHONE_DISPLAY = "(610) 555-0123";
const PHONE_TEL = "+16105550123";
const EMAIL = "hello@thelosttribe.com";

const HOURS = [
  { label: "Mon–Thu", time: "5:00 PM — 10:00 PM" },
  { label: "Fri–Sat", time: "5:00 PM — 11:00 PM" },
  { label: "Sun", time: "5:00 PM — 9:00 PM" },
];

const GMAPS_PLACE =
  "https://www.google.com/maps/place/8925+West+Chester+Pike,+Upper+Darby+Township,+PA+19082";

const GMAPS_DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(ADDRESS_ONE_LINE);

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=8925%20West%20Chester%20Pike%2C%20Upper%20Darby%20Township%2C%20PA%2019082&hl=en&z=15&output=embed";

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
    url: "https://thelosttribe.example", // TODO: replace with real domain
    sameAs: [GMAPS_PLACE],
  };

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* HERO + MAP */}
      <section className="relative bg-background text-foreground">
        {/* soft top gradient so map blend ho jaye header se */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(209,178,96,0.18),transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
          {/* chip */}
          <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[10px] tracking-[0.3em] text-amber-200/90 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            Location
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
            Find us on West Chester Pike.
          </h1>

          <p className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground">
            We&apos;re just off West Chester Pike in Upper Darby Township. Easy
            to reach from the city, with street parking nearby.
          </p>

          {/* badges */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              • Easy to find
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              • Street parking nearby
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              • Family-friendly
            </span>
          </div>

          {/* Map with glow */}
          <div className="relative mt-8">
            <div className="pointer-events-none absolute inset-x-8 -bottom-10 h-24 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-[0_22px_70px_rgba(0,0,0,0.85)]">
              <iframe
                title="The Lost Tribe — Google Map"
                src={MAP_EMBED_SRC}
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={GMAPS_DIRECTIONS}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-black shadow-[0_15px_35px_rgba(0,0,0,0.35)] hover:brightness-110 active:scale-95 transition"
              aria-label="Get directions"
            >
              Get directions
            </Link>

            <Link
              href={GMAPS_PLACE}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 transition"
              aria-label="View on Google Maps"
            >
              View on Google Maps
            </Link>

            <CopyButton
              text={ADDRESS_ONE_LINE}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm hover:bg-white/10 transition"
            />
          </div>
        </div>
      </section>

      {/* INFO GRID */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* Hours */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Contact
              </h3>
              <div className="mt-3 space-y-2 text-sm text-foreground/90">
                <p>
                  Phone:{" "}
                  <Link
                    href={`tel:${PHONE_TEL}`}
                    className="text-accent hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </Link>
                </p>
                <p>
                  Email:{" "}
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="text-accent hover:underline"
                  >
                    {EMAIL}
                  </Link>
                </p>
              </div>
            </div>

            {/* Parking + Address */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Parking
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                Street parking available nearby. Please arrive a few minutes
                early, especially on weekends.
              </p>

              <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
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

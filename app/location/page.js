// app/location/page.jsx
import Link from "next/link";
import CopyButton from "@/components/CopyButton"; // client-only button for clipboard

export const metadata = {
  title: "Find Us | The Lost Tribe",
  description:
    "Address, hours, parking, and directions to The Lost Tribe — 8925 West Chester Pike, Upper Darby Township, PA 19082.",
};

// ---- Static details (edit here if anything changes) ----
const ADDRESS_ONE_LINE =
  "8925 West Chester Pike, Upper Darby Township, PA 19082";
const ADDRESS_LINES = ["8925 West Chester Pike,", "Upper Darby Township, PA 19082"];
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

// Optional: tweak map zoom / coords if you want
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
    url: "https://thelosttribe.example", // replace with your live domain
    sameAs: [GMAPS_PLACE],
  };

  return (
    <>
      {/* SEO: JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <section className="relative bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Find Us
          </h1>
          <p className="mt-2 text-muted-foreground">
            {ADDRESS_ONE_LINE}
          </p>

          {/* Map */}
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 shadow-sm">
            <iframe
              title="The Lost Tribe — Google Map"
              src={MAP_EMBED_SRC}
              className="h-[440px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* CTA row */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={GMAPS_DIRECTIONS}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-black font-medium hover:brightness-110 active:scale-95 transition"
              aria-label="Get directions"
            >
              Get Directions
            </Link>

            <Link
              href={GMAPS_PLACE}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/15 px-5 py-3 hover:bg-white/15 transition"
              aria-label="View on Google Maps"
            >
              View on Google Maps
            </Link>

            {/* Client-only copy action (keeps page as Server Component) */}
            <CopyButton
              text={ADDRESS_ONE_LINE}
              className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/15 px-5 py-3 hover:bg-white/15 transition"
            />
          </div>
        </div>
      </section>

      {/* Info cards */}
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {/* Hours */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Hours
              </h3>
              <ul className="mt-3 space-y-2 text-sm">
                {HOURS.map((h) => (
                  <li key={h.label} className="flex items-center justify-between">
                    <span className="text-foreground/90">{h.label}</span>
                    <span className="text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Contact
              </h3>
              <div className="mt-3 space-y-2 text-sm">
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

            {/* Parking / Notes */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground">
                Parking
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                Street parking available nearby. Please arrive a few minutes
                early.
              </p>
              <h3 className="mt-6 text-sm uppercase tracking-wider text-muted-foreground">
                Address
              </h3>
              <p className="mt-3 text-sm text-foreground/90">
                {ADDRESS_LINES.map((l, i) => (
                  <span key={i} className="block">
                    {l}
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

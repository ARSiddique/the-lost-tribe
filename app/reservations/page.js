// app/reservations/page.jsx
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, Clock, Users, MapPin } from "lucide-react";
import { site } from "@/lib/siteConfig";

export const metadata = {
  title: "Reservations — The Lost Tribe",
  description:
    "Reserve your table at The Lost Tribe by WhatsApp or phone. Limited seating nightly.",
};

// Keep schema simple + accurate (no email/SMS)
const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Lost Tribe",
  acceptsReservations: true,
  telephone: site.phoneTel?.replace("tel:", "") || "+16108626680",
};

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export default function ReservationsPage() {
  const PHONE_TEL = site.phoneTel || "tel:+16108626680";
  const PHONE_DISPLAY = site.phone || "+1 610 862 6680";

  const WA_RAW = site.whatsapp || "+16108626680";
  const WA_DIGITS = String(WA_RAW).replace(/\D/g, "");
  const WA_MSG =
    "Hello! I'd like to reserve a table at The Lost Tribe. Please share availability for today.";

  // If you already set a maps link in siteConfig, it will use it; otherwise fallback:
  const MAP_LINK =
    site.gmapsLink ||
    "https://www.google.com/maps/place/The+Lost+Tribe+-+Halal/@39.9679457,-75.2897451,17z/data=!3m1!4b1!4m6!3m5!1s0x89c6c1f51a4d064b:0xc641bc517e167cd6!8m2!3d39.9679457!4d-75.2897451!16s%2Fg%2F11yh6xt70r?entry=ttu";

  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* global soft glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.14),transparent_55%)]" />

      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] md:items-center">
          {/* left */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/70 px-4 py-1 text-[10px] font-semibold tracking-[0.3em] text-amber-300/90 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Reservations
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
              Reserve your{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                table
              </span>
              .
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              Seating is limited each night. To reserve, message us on WhatsApp
              or call. For same-day reservations, calling is fastest.
            </p>

            {/* Key info chips */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
              {[
                { icon: <Users className="h-4 w-4" />, text: "Small groups welcome" },
                { icon: <Clock className="h-4 w-4" />, text: "Evening service" },
                { icon: <MapPin className="h-4 w-4" />, text: "Upper Darby, PA" },
              ].map((c) => (
                <span
                  key={c.text}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur"
                >
                  {c.icon}
                  {c.text}
                </span>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href={`https://wa.me/${WA_DIGITS}?text=${encodeURIComponent(
                  WA_MSG
                )}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_55px_rgba(0,0,0,0.65)] hover:brightness-110 active:scale-[0.99] transition"
                aria-label="Reserve on WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
                Reserve on WhatsApp
              </Link>

              <Link
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black shadow-[0_20px_55px_rgba(0,0,0,0.65)] hover:brightness-110 active:scale-[0.99] transition"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone className="h-5 w-5" />
                Call {PHONE_DISPLAY}
              </Link>
            </div>

            {/* What to include */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                When you message us, please share
              </p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Date (today / tomorrow / a specific date)</li>
                <li>• Preferred time (example: 7:30 PM)</li>
                <li>• Party size</li>
                <li>• Any special notes (optional)</li>
              </ul>
              <p className="mt-3 text-xs text-white/55">
                We’ll reply with availability and confirm your slot.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={MAP_LINK}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs text-white/90 hover:bg-white/10 active:scale-95 transition"
              >
                View location on Google Maps ↗
              </Link>

              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs text-white/90 hover:bg-white/10 active:scale-95 transition"
              >
                View the menu
              </Link>
            </div>
          </div>

          {/* right visual card */}
          <div className="relative flex justify-end">
            <div className="pointer-events-none absolute -bottom-10 right-6 h-40 w-40 rounded-full bg-amber-400/35 blur-3xl" />

            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-black/75 shadow-[0_26px_80px_rgba(0,0,0,0.95)] backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/ambience-1.jpeg"
                  alt="Seating at The Lost Tribe"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80">
                  Limited seating
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-4 text-xs text-white/80">
                <p className="font-semibold text-amber-200">
                  Quick reservation through WhatsApp or phone.
                </p>
                <p className="mt-1 text-[11px] text-white/55">
                  Fast confirmation • Same-day: call recommended
                </p>
              </div>

              <div className="pointer-events-none absolute -right-6 bottom-6 hidden max-w-[170px] rotate-6 overflow-hidden rounded-2xl border border-white/20 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,0.95)] sm:block">
                <div className="relative h-24 w-full">
                  <Image
                    src="/images/ambience-2.jpeg"
                    alt="Warm table lighting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="px-3 pb-3 pt-2 text-[10px] text-white/80">
                  <p className="font-semibold text-amber-200/90">
                    Quick details
                  </p>
                  <p className="mt-1 text-[10px] text-white/60">
                    Date • Time • Party size
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SMALL POLICY STRIP */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <p className="text-sm text-white/75">
              If you don’t get a reply right away, please try calling — we may be
              serving guests.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href={`https://wa.me/${WA_DIGITS}?text=${encodeURIComponent(
                  WA_MSG
                )}`}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-4 py-2 text-xs font-semibold text-white hover:brightness-110 transition"
              >
                WhatsApp
              </Link>
              <Link
                href={PHONE_TEL}
                className="inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-black hover:brightness-110 transition"
              >
                Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

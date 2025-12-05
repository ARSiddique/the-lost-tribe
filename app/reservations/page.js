// app/reservations/page.jsx
import Image from "next/image";
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "Reservations — The Lost Tribe",
  description:
    "Reserve your table at The Lost Tribe. Pick a date, time, and party size—we’ll confirm by email/SMS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Lost Tribe",
  acceptsReservations: "True",
};

export default function ReservationsPage() {
  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* global soft glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.14),transparent_55%)]" />

      {/* HERO: text + 3D-ish image card */}
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] md:items-center">
          {/* left copy */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/70 px-4 py-1 text-[10px] font-semibold tracking-[0.3em] text-amber-300/90 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Reservations
            </p>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.6rem]">
              Reserve your{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                table by the fire.
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
              Limited seats nightly. Pick a date and time—we’ll confirm by
              email / SMS. Same-day reservations are best by phone.
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/70">
              {[
                "Halal open kitchen",
                "Small groups & celebrations",
                "Birthday & anniversary friendly",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 backdrop-blur"
                >
                  • {chip}
                </span>
              ))}
            </div>
          </div>

          {/* right visual card */}
          <div className="relative flex justify-end">
            <div className="pointer-events-none absolute -bottom-10 right-6 h-40 w-40 rounded-full bg-amber-400/35 blur-3xl" />

            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-black/75 shadow-[0_26px_80px_rgba(0,0,0,0.95)] backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* main reservations ambience image */}
                <Image
                  src="/images/ambience-1.jpeg"
                  alt="Table set for the night at The Lost Tribe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80">
                  Night service
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-4 text-xs text-white/85">
                <p className="font-semibold text-amber-200">
                  “Feels like booking a secret living room, not a restaurant.”
                </p>
                <p className="mt-1 text-[11px] text-white/60">
                  — a guest, after their anniversary dinner
                </p>
              </div>

              {/* small overlay card for 3D depth */}
              <div className="pointer-events-none absolute -right-6 bottom-6 hidden max-w-[170px] rotate-6 overflow-hidden rounded-2xl border border-white/20 bg-black/85 shadow-[0_20px_60px_rgba(0,0,0,0.95)] sm:block">
                <div className="relative h-24 w-full">
                  <Image
                    src="/images/ambience-2.jpeg"
                    alt="Close-up of glasses and candle light"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="px-3 pb-3 pt-2 text-[10px] text-white/80">
                  <p className="font-semibold text-amber-200/90">
                    Limited seats
                  </p>
                  <p className="mt-1 text-[10px] text-white/60">
                    Most nights book out by 8PM. Early slots recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM + PREVIEW SECTION */}
      <section className="relative mx-auto max-w-6xl px-4 pb-24">
        <ReservationForm />
      </section>
    </main>
  );
}



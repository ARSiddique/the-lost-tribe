// components/ChefNoteSection.jsx
"use client";

import { FadeIn } from "@/components/anim";

export default function ChefNoteSection() {
  return (
    <section className="relative bg-bg text-fg border-t border-white/5">
      {/* soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        {/* LEFT – chef philosophy */}
        <FadeIn>
          <p className="text-xs tracking-[0.35em] text-accent/70">
            CHEF&apos;S NOTE
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Slow Fire.
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              Honest Flavors.
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            We lean on patient cooking, balanced spice and seasonal produce.
            Every pot sits on the fire longer than it needs to — so when it
            lands on the table, it tastes like it&apos;s always been meant to be
            shared.
          </p>

          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            Nothing here is rushed. Plates go out when they&apos;re ready, not
            when the ticket says so. That&apos;s why dinner at The Lost Tribe
            feels less like service and more like being cooked for at home.
          </p>

          {/* pillars */}
          <div className="mt-6 space-y-2 text-sm text-white/70">
            {[
              "Slow fire over high flames.",
              "Spice that warms, not overwhelms.",
              "Portions built for sharing, not posing.",
            ].map((line, i) => (
              <div
                key={line}
                className="flex items-start gap-2 text-[13px] sm:text-sm"
              >
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
                <span>{line}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* RIGHT – quote card */}
        <FadeIn delay={0.12}>
          <div className="relative h-full">
            {/* glow behind card */}
            <div className="pointer-events-none absolute -bottom-10 right-6 h-40 w-40 rounded-full bg-amber-500/30 blur-3xl" />

            <div className="relative rounded-3xl border border-white/12 bg-black/75 p-6 shadow-[0_22px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-amber-200/80">
                from the kitchen
              </p>

              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                “Our dining room is small by choice. We cook the way we grew up
                eating — one pot at a time, tasted a dozen times before it ever
                leaves the stove, and served only when it&apos;s truly ready.”
              </p>

              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/65">
                <p className="font-medium">— Chef, The Lost Tribe</p>
                <p className="mt-1 text-[11px] text-white/45">
                  Head of fire & flavor
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

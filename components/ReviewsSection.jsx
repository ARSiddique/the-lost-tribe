// components/ReviewsSection.jsx
"use client";

import { FadeIn } from "@/components/anim";

const REVIEWS = [
  {
    q: "A hidden gem.",
    a: "Every plate felt like a slow ritual — worth the wait.",
    name: "Sara A.",
    tag: "Date night",
  },
  {
    q: "Ambience on point.",
    a: "Dim, warm, and intimate. Perfect for small groups.",
    name: "Omar K.",
    tag: "Friends table",
  },
  {
    q: "Lamb shank = wow.",
    a: "Melts in the mouth. Fragrant rice seals it.",
    name: "Daniel R.",
    tag: "Signature mains",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative bg-bg text-fg border-t border-white/5">
      {/* soft glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* heading */}
        <div className="mb-8 text-center md:mb-10">
          <FadeIn
            as="p"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-amber-200/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            guest voices
          </FadeIn>

          <FadeIn
            as="h2"
            delay={0.06}
            className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl md:text-[2.1rem]"
          >
            What the room{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              feels like.
            </span>
          </FadeIn>

          <FadeIn
            delay={0.12}
            className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base max-w-2xl mx-auto"
          >
            A few words from people who&apos;ve already slipped into the ritual
            — and didn&apos;t really want to leave.
          </FadeIn>
        </div>

        {/* reviews grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <FadeIn key={i} delay={0.16 + i * 0.08}>
              <article className="flex h-full flex-col rounded-3xl border border-white/12 bg-black/70 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                {/* stars + short title */}
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs text-amber-200/90 tracking-[0.18em] uppercase">
                    ★★★★★
                  </p>
                  {r.tag && (
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] text-white/70">
                      {r.tag}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-base font-semibold text-white">
                  &ldquo;{r.q}&rdquo;
                </p>

                <p className="mt-2 text-sm leading-relaxed text-white/70 flex-1">
                  {r.a}
                </p>

                <div className="mt-4 flex items-center justify-between text-xs text-white/55">
                  <span>— {r.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                    verified guest
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

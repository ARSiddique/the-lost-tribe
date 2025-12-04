// components/StorySection.jsx
"use client";

import Image from "next/image";
import { FadeIn } from "./motion/Reveal";

export function StorySection() {
  return (
    <section className="relative bg-bg text-fg">
      {/* soft radial glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.09),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.09),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:items-start md:gap-16 md:py-24">
        {/* LEFT – copy */}
        <div className="max-w-xl text-center md:text-left">
          <FadeIn
            as="p"
            className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[10px] tracking-[0.35em] text-amber-300/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            OUR STORY
          </FadeIn>

          <FadeIn
            as="h2"
            delay={0.05}
            className="mt-4 text-3xl font-bold sm:text-4xl md:text-[2.4rem]"
          >
            A room that feels like a{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              secret.
            </span>
          </FadeIn>

          <FadeIn
            delay={0.1}
            className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base"
          >
            Tucked away from the noise outside, The Lost Tribe is a sanctuary of
            slow fire, shared plates and whispered stories. We celebrate the
            ritual of gathering – where flame softens the air and every dish
            carries a memory.
          </FadeIn>

          <FadeIn
            delay={0.15}
            className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base"
          >
            From the first spark on the grill to the last cup on your table,
            everything is paced for long dinners, late conversations and that
            feeling of
            <span className="text-amber-200"> disappearing from the city</span>{" "}
            for a few hours.
          </FadeIn>

          {/* small feature chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-white/70 md:justify-start">
            {[
              "Halal open kitchen",
              "Slow-fire mains",
              "Intimate, low-light seating",
            ].map((label, i) => (
              <FadeIn
                key={label}
                delay={0.22 + i * 0.06}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
              >
                • {label}
              </FadeIn>
            ))}
          </div>
        </div>

        {/* RIGHT – ambience card with depth */}
        <FadeIn
          delay={0.2}
          className="relative w-full max-w-sm"
        >
          {/* glow under card */}
          <div className="pointer-events-none absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-500/30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/70 shadow-[0_22px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl">
            <div className="relative h-64 w-full sm:h-72">
              {/* yahan apni ambience image ka path laga sakte ho */}
              <Image
                src="/images/story-table.jpg"
                alt="Candle-lit table inside The Lost Tribe"
                fill
                className="object-cover"
              />
            </div>

            <div className="border-t border-white/10 px-5 py-4 text-xs text-white/85">
              <p className="font-semibold text-amber-200">
                “It doesn&apos;t feel like a restaurant. It feels like a hidden
                living room.”
              </p>
              <p className="mt-1 text-[11px] text-white/60">
                — a regular, after their third visit
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

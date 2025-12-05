// components/StorySection.jsx
"use client";
import { FadeIn } from "./motion/Reveal";

export function StorySection() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <FadeIn as="p" className="text-center text-xs tracking-[0.35em] text-amber-300/80">
          OUR STORY
        </FadeIn>
        <FadeIn as="h2" delay={0.05} className="mt-3 text-center text-3xl sm:text-4xl font-bold">
          Discover the Legend
        </FadeIn>
        <FadeIn delay={0.1} className="mx-auto mt-4 max-w-3xl text-center text-white/70">
          Tucked away from the world outside, The Lost Tribe is a sanctuary of slow fire, shared plates, and whispered stories.
          We celebrate the ritual of gathering—where flame softens the air and every dish carries a memory.
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            ["Open Kitchen", "Hand-blended spices, slow fire cooking."],
            ["Seasonal Menu", "Local produce, rotating signatures."],
            ["Intimate Ambience", "Warm candlelight, soft bokeh & wood."],
          ].map(([t, d], i) => (
            <FadeIn key={i} delay={0.15 + i * 0.07} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="font-semibold">{t}</h4>
              <p className="mt-1 text-sm text-white/70">{d}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { FadeIn } from "@/components/anim";

export default function ChefNoteSection() {
  return (
    <section className="bg-[#0b0908] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-2">
        <FadeIn>
          <h3 className="text-sm tracking-[0.35em] text-accent/70 mb-2">CHEF’S NOTE</h3>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Slow Fire. Honest Flavors.</h2>
          <p className="text-white/70">
            We lean on patient cooking, balanced spice, and seasonal produce. Each plate is
            meant to be savored — unhurried, generous, and warm.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">
              “Our dining room is small by choice. We cook the way we grew up eating —
              one pot at a time, served when it’s truly ready.”
            </p>
            <p className="text-white/50 mt-4">— Chef, The Lost Tribe</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

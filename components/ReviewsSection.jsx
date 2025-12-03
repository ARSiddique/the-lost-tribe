"use client";
import { FadeIn } from "@/components/anim";

const REVIEWS = [
  { q: "A hidden gem.", a: "Every plate felt like a slow ritual — worth the wait." },
  { q: "Ambience on point.", a: "Dim, warm, and intimate. Perfect for small groups." },
  { q: "Lamb shank = wow.", a: "Melts in the mouth. Fragrant rice seals it." },
];

export default function ReviewsSection() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <FadeIn as="h2" className="text-3xl md:text-4xl font-semibold mb-8">
          Guest Reviews
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                <p className="text-lg mb-2">“{r.q}”</p>
                <p className="text-white/70">{r.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

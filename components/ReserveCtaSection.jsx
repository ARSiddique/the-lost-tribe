"use client";
import Link from "next/link";
import { FadeIn } from "@/components/anim";

export default function ReserveCtaSection() {
  return (
    <section className="bg-[#0b0908] text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 grid gap-8 md:grid-cols-[1.2fr_.8fr]">
        <FadeIn as="div">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Reserve Your Table</h2>
          <p className="text-white/70">
            Limited seats nightly. Book now to experience the ritual — intimate ambience,
            slow fire cooking, and memorable service.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} as="div">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/reservations"
                className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-black font-medium hover:brightness-110"
              >
                Book a Table
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center rounded-full border border-white/20 px-6 py-2.5 text-white/90 hover:bg-white/10"
              >
                View Menu
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

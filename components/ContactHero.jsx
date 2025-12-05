"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden">
      {/* subtle top gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(209,178,96,0.18),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-16 md:pt-24">
        <motion.p
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-black/60 px-4 py-1 text-[10px] tracking-[0.32em] text-amber-200/90 uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          Contact
        </motion.p>

        <motion.h1
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.04 }}
          className="mt-4 text-3xl font-semibold md:text-[2.5rem]"
        >
          Questions, bookings,{" "}
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
            or private dining?
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mt-3 max-w-2xl text-sm text-white/70 md:text-base"
        >
          Send us a note, call us, or plan something special. We&apos;ll get
          back to you as soon as we can.
        </motion.p>
      </div>
    </section>
  );
}

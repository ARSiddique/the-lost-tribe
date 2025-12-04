// components/SignatureDishes.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURED_DISHES } from "@/data/menu";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export function SignatureDishes() {
  return (
    <section className="relative bg-bg text-fg border-t border-white/5">
      {/* soft glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.09),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.09),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* heading */}
        <motion.div
          className="mb-8 text-center md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1 text-[10px] tracking-[0.35em] text-accent/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            SIGNATURE DISHES
          </p>
          <h3 className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl md:text-[2.1rem]">
            The plates people{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              come back for.
            </span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
            A handful of dishes that rarely leave the menu – the ones guests ask
            for by name, and the ones the kitchen obsesses over.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          className="grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {FEATURED_DISHES.map((d, idx) => (
            <motion.article
              key={d.title}
              className="group overflow-hidden rounded-3xl border border-white/12 bg-black/70 shadow-[0_18px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl"
              variants={cardVariants}
              custom={idx}
              whileHover={{ y: -6 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* gradient + badge */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/5" />
                <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">
                  house favorite
                </div>
              </div>

              <div className="p-4 pb-5">
                <h4 className="text-sm font-semibold text-white">{d.title}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-white/70">
                  {d.desc}
                </p>
                <p className="mt-3 text-[11px] text-amber-200/80">
                  • best enjoyed hot from the pass
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

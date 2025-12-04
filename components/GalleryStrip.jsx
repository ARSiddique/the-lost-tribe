// components/GalleryStrip.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMGS = [
  "/images/ambience-1.jpg",
  "/images/ambience-2.jpg",
  "/images/ambience-3.jpg",
  "/images/hero-table.jpg",
];

export default function GalleryStrip() {
  return (
    <section className="relative bg-bg text-fg border-t border-white/5">
      {/* soft backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.06),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-0 py-10">
        {/* small label */}
        <div className="flex items-center justify-between px-4 pb-4 text-xs text-white/55">
          <p className="uppercase tracking-[0.26em] text-white/50">
            night at the tribe
          </p>
          <p className="hidden text-[11px] text-white/40 sm:block">
            Drag or scroll sideways to explore.
          </p>
        </div>

        {/* edge fade + scroll strip */}
        <div className="relative">
          {/* edge gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bg via-bg/60 to-transparent" />

          <motion.div
            className="flex gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] 
                       [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {IMGS.map((src, i) => (
              <motion.div
                key={i}
                className="group relative h-40 w-72 shrink-0 snap-center overflow-hidden rounded-3xl border border-white/12 bg-black/60 shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image
                  src={src}
                  alt={`ambience ${i + 1}`}
                  fill
                  sizes="288px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />

                {/* gradient + tiny caption */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5" />
                <div className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-[10px] text-white/80 backdrop-blur-md">
                  Frame {i + 1}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// components/AmbienceGallery.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AMBIENCE_IMAGES } from "@/data/menu";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

function layoutForIndex(i) {
  // simple mosaic pattern for desktop
  switch (i) {
    case 0:
      return "md:col-span-2 md:row-span-2";
    case 3:
      return "md:col-span-2";
    default:
      return "";
  }
}

export default function AmbienceGallery() {
  return (
    <section id="ambience" className="relative bg-bg text-fg border-t border-white/5">
      {/* subtle gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.07),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.07),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* heading */}
        <motion.div
          className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-amber-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              inside the room
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl md:text-[2.1rem]">
              Light, smoke &{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                a little mystery.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Low light, soft bokeh, quiet corners and a view of the open
              kitchen. Scroll through a few frames from the room before you even
              walk in.
            </p>
          </div>

          <p className="text-xs text-white/60 md:text-right">
            All shots from inside The Lost Tribe.
            <br className="hidden md:block" />
            <span className="text-amber-200/90"> No stock photography.</span>
          </p>
        </motion.div>

        {/* gallery grid */}
        <motion.div
          className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[190px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {AMBIENCE_IMAGES.map((it, i) => (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-3xl border border-white/12 bg-black/40 shadow-[0_18px_45px_rgba(0,0,0,0.85)] backdrop-blur-xl ${layoutForIndex(
                i
              )}`}
              variants={itemVariants}
              custom={i}
              whileHover={{ y: -4 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={i === 0}
                />
                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
                {/* tiny label bottom-left */}
                <div className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-[10px] text-white/80 backdrop-blur-md">
                  {it.alt}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

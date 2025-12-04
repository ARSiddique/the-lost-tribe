// components/MenuPreviewSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MENU_PREVIEW } from "@/data/menu";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function MenuPreviewSection() {
  return (
    <section className="relative bg-bg text-fg">
      {/* soft gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.09),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.09),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
        {/* heading row */}
        <motion.div
          className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-[10px] uppercase tracking-[0.3em] text-amber-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              from the kitchen
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-wide sm:text-3xl md:text-[2.15rem]">
              Flames, smoke &{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                shared plates.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              A quick peek into some of the dishes that leave the pass every
              night – slow-fire mains, bright starters and plates meant to sit
              in the middle of the table.
            </p>
          </div>

          <div className="flex md:justify-end">
            <Link
              href="/menu"
              className="inline-flex items-center rounded-full border border-white/25 bg-black/40 px-5 py-2 text-xs font-medium text-white/90 backdrop-blur-md transition hover:border-amber-300/80 hover:text-amber-100"
            >
              View full menu
              <span className="ml-1 text-[10px]">↗</span>
            </Link>
          </div>
        </motion.div>

        {/* cards grid – 3D stacked tiles */}
        <motion.div
          className="relative grid gap-6 md:grid-cols-3"
          style={{ perspective: "1400px" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {MENU_PREVIEW.map((item, idx) => {
            const baseTilt = idx === 0 ? -3 : idx === 1 ? 0 : 3;

            return (
              <Link
                key={item.title}
                href="/menu"
                className="group block h-full"
              >
                <motion.article
                  className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/80 shadow-[0_22px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                  variants={cardVariants}
                  custom={idx}
                  style={{
                    transformStyle: "preserve-3d",
                    rotateZ: baseTilt,
                    zIndex: 10 + idx, // base stacking
                  }}
                  whileHover={{
                    y: -10,
                    rotateX: -6,
                    rotateY: 6,
                    zIndex: 50, // hovered card sab se upar
                    boxShadow:
                      "0 30px 90px rgba(0,0,0,0.95), 0 0 40px rgba(251,191,36,0.35)",
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* image darken + sheen */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.22),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* label */}
                    <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                      chef&apos;s pick
                    </div>
                  </div>

                  <div className="relative p-4 pb-5">
                    <h4 className="text-sm font-semibold text-white sm:text-[0.98rem]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">
                      {item.desc}
                    </p>
                    <p className="mt-3 text-[11px] text-amber-200/80">
                      • best shared with the table
                    </p>
                  </div>
                </motion.article>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

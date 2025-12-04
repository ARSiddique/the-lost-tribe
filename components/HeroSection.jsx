"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";

export function HeroSection() {
  // 3D tilt values for the right side cards
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-[86vh] md:min-h-[90vh] text-white overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-table.jpg"
          alt="Warm candle-lit dining table"
          fill
          sizes="100vw"
          className="object-cover object-[50%_62%] brightness-[.95] contrast-110 saturate-105"
          priority
        />

        {/* tinted overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* animated color wash for next-gen feel */}
        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-70"
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, rgba(251,191,36,0.4), transparent 55%), radial-gradient(circle at 100% 20%, rgba(248,250,252,0.18), transparent 55%), radial-gradient(circle at 50% 95%, rgba(74,222,128,0.28), transparent 60%)",
          }}
        />

        {/* subtle vignette */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 [mask-image:radial-gradient(80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

        {/* bottom gradient for contrast with next sections */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-black/80 to-black" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col gap-10 px-4 pb-16 pt-28 md:min-h-[90vh] md:flex-row md:items-center md:justify-between md:gap-14 md:pt-32 lg:pt-36"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* LEFT – main copy */}
        <motion.div
          className="max-w-xl text-center md:text-left"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.p
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-black/50 px-4 py-1 text-[10px] uppercase tracking-[0.28em] text-amber-100/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
            Escape into a hidden ritual
          </motion.p>

          <motion.h1
            className="text-[40px] md:text-5xl lg:text-6xl font-semibold tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,.55)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            DINING
            <span className="block bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
              RITUAL
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-slate-100/85 md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Candle-lit tables, slow-fire halal dishes, and a room that hums like
            a secret. The Lost Tribe turns every dinner into a story whispered
            in low light.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-7 flex flex-wrap items-center justify-center gap-4 md:justify-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Link
              href="/reservations"
              className="inline-flex items-center rounded-full border border-accent/80 bg-accent px-8 py-2.5 text-sm md:text-base font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,.4)] hover:brightness-110 active:scale-[.98] transition"
            >
              Book a Table
            </Link>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/40 px-6 py-2 text-xs md:text-sm text-slate-50/90 backdrop-blur-md hover:border-amber-200/80 hover:text-amber-50 transition"
            >
              Explore the Menu
              <span className="hidden text-[11px] text-slate-300/90 sm:inline">
                Lamb shank • Mandi • Desserts
              </span>
            </Link>
          </motion.div>

          {/* scroll hint */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-3 text-[11px] text-slate-200/80 md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex h-8 w-[1px] flex-col overflow-hidden rounded-full bg-slate-400/60">
              <motion.div
                className="h-3 w-full bg-amber-300"
                animate={{ y: ["-120%", "150%"] }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <span>Scroll to enter the ritual</span>
          </motion.div>
        </motion.div>

        {/* RIGHT – floating 3D cards */}
        <motion.div
          className="relative mx-auto mt-4 flex max-w-xs flex-1 items-center justify-center md:mt-0 md:max-w-sm"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 80, damping: 18 }}
        >
          {/* glow under cards */}
          <div className="pointer-events-none absolute -bottom-10 h-44 w-44 rounded-full bg-amber-500/30 blur-3xl" />

          <motion.div
            className="relative grid w-full grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {/* main signature dish card */}
            <motion.div
              whileHover={{ y: -6 }}
              className="col-span-2 rounded-3xl border border-amber-100/15 bg-gradient-to-br from-black/80 via-black/40 to-amber-900/40 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-300/90">
                signature dish
              </p>
              <p className="mt-1 text-lg font-semibold text-amber-100">
                Lamb Shank with Qabuli
              </p>
              <p className="mt-1 text-[11px] text-slate-100/85">
                Slow-cooked over charcoal, finished with fragrant qabuli rice &
                toasted nuts.
              </p>
              <p className="mt-3 text-[10px] text-emerald-300/85">
                • limited plates every night
              </p>
            </motion.div>

            {/* card 2 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/15 bg-black/70 p-3 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
                from the coals
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Chicken Mandi
              </p>
              <p className="mt-1 text-[11px] text-slate-200/85">
                Smoke, spice & mandi rice.
              </p>
            </motion.div>

            {/* card 3 */}
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-white/15 bg-black/70 p-3 backdrop-blur-xl"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
                vegetarian
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-50">
                Palak Paneer
              </p>
              <p className="mt-1 text-[11px] text-slate-200/85">
                Creamy spinach, charred naan, warm spice.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

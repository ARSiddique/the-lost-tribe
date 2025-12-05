// components/StoryPageClient.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- data helpers ---
const timeline = [
  {
    label: "01 – The spark",
    body: "Friends cooking late into the night, chasing the flavors they grew up with.",
  },
  {
    label: "02 – The room",
    body: "We imagined a space that felt like a hidden living room, not a bright dining hall.",
  },
  {
    label: "03 – The ritual",
    body: "Slow-fire halal dishes, low light, and a menu built for long stories at the table.",
  },
];

const features = [
  {
    tag: "Open Kitchen",
    title: "Flame you can see.",
    body: "Hand-blended spices, slow-fire cooking, visible coals & craft.",
  },
  {
    tag: "Seasonal Menu",
    title: "Always a little different.",
    body: "Local produce and rotating signatures inspired by the season.",
  },
  {
    tag: "Intimate Ambience",
    title: "Built for conversation.",
    body: "Candlelit warmth, soft bokeh & wood — not harsh ceiling lights.",
  },
];

const vibes = [
  {
    tag: "LIGHT",
    title: "Candle, ember & shadow.",
    body: "Just table lamps, candles and the glow from the open kitchen.",
  },
  {
    tag: "SOUND",
    title: "Low hum, not loud noise.",
    body: "Music that sits under the conversation, not over it.",
  },
  {
    tag: "SERVICE",
    title: "Like hosting in a home.",
    body: "Plates arrive when the table is ready, not the kitchen. Never a rush.",
  },
];

const ambienceStrip = [
  { src: "/images/ambience-1.jpeg", label: "The room" },
  { src: "/images/ambience-2.jpeg", label: "Table light" },
  { src: "/images/ambience-3.jpeg", label: "From the coals" },
  { src: "/images/ambience-4.jpeg", label: "Late night" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function StoryHero() {
  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* global soft glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.12),transparent_55%)]" />

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pb-20 pt-20 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)]">
          {/* Left copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/60 px-4 py-1 text-[10px] font-semibold tracking-[0.28em] text-amber-200/90 uppercase"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Our Story
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.8rem]"
            >
              Discover the{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                legend
              </span>{" "}
              behind the{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                fire.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm leading-relaxed text-white/75 md:text-base"
            >
              Tucked away from the world outside, The Lost Tribe is a sanctuary
              of slow fire and shared plates. We celebrate the ritual of
              gathering — where flame softens the air and every dish carries a
              memory.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap gap-3 text-[11px] text-white/70"
            >
              {[
                "Halal open kitchen",
                "Slow-fire mains",
                "Intimate, low-light seating",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
                >
                  • {chip}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right 3D cards */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="relative flex items-center justify-end"
          >
            {/* main card */}
            <motion.div
              whileHover={{ y: -6, rotate: -1.5 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-black/75 shadow-[0_22px_70px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/story-table.jpg"
                  alt="Candle-lit table inside The Lost Tribe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/80">
                  Late-night service
                </div>
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-xs text-white/85">
                <p className="font-semibold text-amber-200">
                  “It doesn&apos;t feel like a restaurant. It feels like a
                  hidden living room.”
                </p>
                <p className="mt-1 text-[11px] text-white/60">
                  — a regular, after their third visit
                </p>
              </div>
            </motion.div>

            {/* overlay mini card */}
            <motion.div
              whileHover={{ y: -4, rotate: 4 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="pointer-events-none absolute -right-6 bottom-10 hidden max-w-[190px] overflow-hidden rounded-2xl border border-white/18 bg-black/85 shadow-[0_18px_60px_rgba(0,0,0,0.95)] backdrop-blur-lg sm:block"
            >
              <div className="relative h-28 w-full">
                <Image
                  src="/images/story-detail.jpeg"
                  alt="Flames and skewers on the grill"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              </div>
              <div className="px-3 pb-3 pt-2 text-[11px] text-white/80">
                <p className="font-semibold text-amber-200/90">
                  From the coals
                </p>
                <p className="mt-1 text-[10px] text-white/60">
                  Shinwari-style karahis and grills that leave a soft smoke in
                  the air.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE + LONG COPY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/4 via-white/3 to-white/4 px-5 py-6 md:px-8 md:py-8 shadow-[0_22px_70px_rgba(0,0,0,0.9)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_0%_0%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(80%_80%_at_100%_100%,rgba(56,189,248,0.16),transparent_55%)]" />
          <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
            {/* left timeline */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
                How it came together
              </p>
              <div className="mt-4 space-y-4 border-l border-white/20 pl-4">
                {timeline.map((item) => (
                  <div key={item.label} className="relative">
                    <span className="absolute -left-[0.65rem] top-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                    <p className="text-xs font-semibold text-amber-200/90">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-white/70">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right copy */}
            <div className="space-y-3 text-sm leading-relaxed text-white/80">
              <p>
                The Lost Tribe began as a late-night idea after service, when we
                realised we kept cooking for friends long after the restaurant
                lights usually went dark. We wanted a room that felt like those
                nights — relaxed, a little hidden, built around the grill.
              </p>
              <p>
                Every choice in the space follows that thought: low light
                instead of spotlights, a halal open kitchen instead of a closed
                one, and a menu that encourages sharing rather than rushing to
                the bill.
              </p>
              <p>
                When you walk in, you&apos;re not just ticking another
                restaurant off a list. You&apos;re stepping into a ritual we
                repeat every evening: gather, slow down, and let the fire do its
                work.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURES + VIBES */}
      <section className="mx-auto max-w-6xl px-4 pb-16 space-y-10">
        {/* features */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
          >
            What we obsess over
          </motion.p>
          <motion.div
            variants={stagger}
            className="mt-4 grid gap-4 md:grid-cols-3"
          >
            {features.map((f) => (
              <motion.article
                key={f.tag}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl border border-white/12 bg-black/50 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.85)] backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="h-full w-full bg-[radial-gradient(80%_80%_at_0%_0%,rgba(251,191,36,0.18),transparent_55%),radial-gradient(80%_80%_at_100%_100%,rgba(56,189,248,0.18),transparent_55%)]" />
                </div>
                <div className="relative space-y-2">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-amber-200/90">
                    {f.tag}
                  </p>
                  <h3 className="text-sm font-semibold text-amber-50">
                    {f.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-white/75">
                    {f.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* vibes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.p
            variants={fadeUp}
            className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55"
          >
            What you feel when you walk in
          </motion.p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {vibes.map((v, idx) => (
              <motion.article
                key={v.tag}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={[
                  "relative overflow-hidden rounded-2xl border border-white/12 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.9)] backdrop-blur-md",
                  idx === 0
                    ? "bg-gradient-to-br from-amber-500/25 via-amber-500/10 to-transparent"
                    : idx === 1
                    ? "bg-gradient-to-br from-emerald-400/25 via-emerald-400/10 to-transparent"
                    : "bg-gradient-to-br from-cyan-400/25 via-cyan-400/10 to-transparent",
                ].join(" ")}
              >
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white/75">
                  {v.tag}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-amber-50">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  {v.body}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* AMBIENCE STRIP */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
            Inside the room
          </p>
          <div className="no-scrollbar mt-4 flex gap-4 overflow-x-auto pb-2">
            {ambienceStrip.map((frame) => (
              <div
                key={frame.label}
                className="relative h-44 min-w-[220px] overflow-hidden rounded-2xl border border-white/15 bg-black/60 shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
              >
                <Image
                  src={frame.src}
                  alt={frame.label}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <p className="absolute left-3 bottom-3 text-xs font-medium text-amber-100">
                  {frame.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA BAND */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex flex-col items-start gap-4 rounded-2xl border border-white/12 bg-black/75 px-5 py-6 text-sm shadow-[0_22px_70px_rgba(0,0,0,0.95)] md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-base font-semibold">
              Come disappear for a night.
            </p>
            <p className="text-white/65">
              Book a table and let the room, the fire and the food do the rest.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/reservations"
              className="rounded-full bg-amber-400 px-6 py-2.5 text-xs font-semibold text-black shadow-[0_18px_40px_rgba(251,191,36,0.7)] transition hover:translate-y-[1px] hover:bg-amber-300"
            >
              Book a table
            </Link>
            <Link
              href="/menu"
              className="rounded-full border border-white/25 bg-black/40 px-6 py-2.5 text-xs font-semibold text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-200"
            >
              Explore the menu
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

// components/StoryFeatureGrid.jsx
"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Sparkles } from "lucide-react";

const timeline = [
  {
    label: "The spark",
    body: "Friends cooking late into the night, chasing the flavors they grew up with.",
  },
  {
    label: "The room",
    body: "We imagined a space that felt like a hidden living room, not a bright dining hall.",
  },
  {
    label: "The ritual",
    body: "Slow-fire halal dishes, low light, and a menu built for long stories at the table.",
  },
];

const OBSESS = [
  {
    icon: Flame,
    title: "Open Kitchen",
    desc: "Hand-blended spices, slow-fire cooking, visible flame & craft.",
  },
  {
    icon: Leaf,
    title: "Seasonal Menu",
    desc: "Local produce and rotating signatures inspired by the season.",
  },
  {
    icon: Sparkles,
    title: "Intimate Ambience",
    desc: "Candlelit warmth, soft bokeh & wood—crafted for conversation.",
  },
];

const VIBES = [
  {
    tag: "LIGHT",
    title: "Candle, ember & shadow.",
    body: "No harsh ceiling lights. Just table lamps, candles and the soft glow from the open kitchen.",
  },
  {
    tag: "SOUND",
    title: "Low hum, not loud noise.",
    body: "Music that sits under the conversation, not over it. You hear the people you came with.",
  },
  {
    tag: "SERVICE",
    title: "Like hosting in a home.",
    body: "Plates arrive when the table is ready, not the kitchen. Refills, check-ins, never a rush.",
  },
];

export default function StoryFeatureGrid() {
  return (
    <section className="space-y-16 md:space-y-18">
      {/* BLOCK 1 — Timeline + long copy in a rounded section */}
      <motion.div
        className="relative overflow-hidden rounded-3xl border border-white/12 bg-black/60 px-5 py-6 md:px-8 md:py-8 shadow-[0_24px_70px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        {/* subtle inner glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_80%_at_0%_0%,rgba(251,191,36,0.08),transparent_60%),radial-gradient(80%_80%_at_100%_100%,rgba(56,189,248,0.08),transparent_60%)]"
        />

        <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          {/* LEFT – timeline */}
          <div className="space-y-5 border-l border-white/15 pl-4 md:pl-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              How it came together
            </p>
            <div className="space-y-4">
              {timeline.map((step, idx) => (
                <div key={step.label} className="relative pl-4">
                  <span className="absolute left-[-0.55rem] top-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(251,191,36,0.85)]" />
                  <p className="text-xs font-semibold text-amber-200/95">
                    {String(idx + 1).padStart(2, "0")} • {step.label}
                  </p>
                  <p className="mt-1 text-xs text-white/72">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – long-form story copy */}
          <div className="space-y-4 text-sm leading-relaxed text-white/78 md:text-[0.92rem]">
            <p>
              The Lost Tribe began as a late-night idea after service, when we
              realised we kept cooking for friends long after the restaurant
              lights usually went dark. We wanted a room that felt like those
              nights—relaxed, a little hidden, built around the grill.
            </p>
            <p>
              Every choice in the space follows that thought: low light instead
              of spotlights, a halal open kitchen instead of a closed one, and a
              menu that encourages sharing rather than rushing to the bill.
            </p>
            <p>
              When you walk in, you&apos;re not just ticking another restaurant
              off a list. You&apos;re stepping into a ritual we repeat every
              evening: gather, slow down, and let the fire do its work.
            </p>
          </div>
        </div>
      </motion.div>

      {/* BLOCK 2 — “What we obsess over” cards */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          What we obsess over
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {OBSESS.map(({ icon: Icon, title, desc }) => (
            <motion.article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/8 via-white/3 to-transparent p-5 backdrop-blur-md shadow-[0_18px_55px_rgba(0,0,0,0.85)]"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(70%_60%_at_0%_0%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(70%_60%_at_100%_100%,rgba(56,189,248,0.18),transparent_60%)]" />
              </div>

              <div className="relative flex items-start gap-3">
                <div className="rounded-xl bg-amber-400/15 p-2">
                  <Icon className="h-5 w-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-amber-100">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">
                    {desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      {/* BLOCK 3 — Vibe cards (LIGHT/SOUND/SERVICE) */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
          What you feel when you walk in
        </p>

        <div className="grid gap-4 md:grid-cols-3">
          {VIBES.map((v, idx) => (
            <motion.div
              key={v.tag}
              className={[
                "group relative overflow-hidden rounded-2xl border border-white/14 bg-gradient-to-br",
                idx === 0
                  ? "from-amber-500/22 via-amber-500/8 to-transparent"
                  : idx === 1
                  ? "from-emerald-400/22 via-emerald-400/8 to-transparent"
                  : "from-cyan-400/22 via-cyan-400/8 to-transparent",
                "p-4 shadow-[0_18px_55px_rgba(0,0,0,0.85)] backdrop-blur-md",
              ].join(" ")}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.28),transparent_55%)]" />
              </div>

              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white/75">
                  {v.tag}
                </p>
                <h3 className="mt-2 text-sm font-semibold text-amber-100">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-white/78">
                  {v.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* BLOCK 4 — CTA */}
      <motion.div
        className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-white/12 bg-black/70 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
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
          <a
            href="/reservations"
            className="rounded-full bg-amber-400 px-6 py-2.5 text-xs font-semibold text-black shadow-[0_18px_40px_rgba(251,191,36,0.55)] transition hover:translate-y-[1px] hover:bg-amber-300"
          >
            Book a table
          </a>
          <a
            href="/menu"
            className="rounded-full border border-white/25 bg-black/40 px-6 py-2.5 text-xs font-semibold text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-200"
          >
            Explore the menu
          </a>
        </div>
      </motion.div>
    </section>
  );
}

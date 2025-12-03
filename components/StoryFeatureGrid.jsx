"use client";

import { motion } from "framer-motion";
import { Flame, Leaf, Sparkles } from "lucide-react";

const FEATURES = [
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

export default function StoryFeatureGrid() {
  return (
    <motion.div
      className="grid gap-4 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
    >
      {FEATURES.map(({ icon: Icon, title, desc }, i) => (
        <motion.article
          key={title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
          variants={{
            hidden: { y: 18, opacity: 0 },
            show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
          }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {/* soft glow on hover */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition opacity duration-300 bg-[radial-gradient(70%_60%_at_50%_-10%,rgba(209,178,96,0.12),transparent_60%)]" />
          <div className="relative flex items-start gap-3">
            <div className="rounded-xl bg-accent/15 p-2">
              <Icon className="size-5 text-accent" />
            </div>
            <div>
              <h3 className="text-base font-medium">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}

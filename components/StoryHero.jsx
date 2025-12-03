"use client";

import { motion } from "framer-motion";

export default function StoryHero() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <motion.p
        className="text-xs tracking-[0.25em] text-accent/80 uppercase"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        Our Story
      </motion.p>

      <motion.h1
        className="mt-3 text-3xl md:text-5xl font-semibold leading-tight"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
      >
        Discover the Legend
      </motion.h1>

      <motion.p
        className="mt-4 text-base md:text-lg text-muted-foreground"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        Tucked away from the world outside, <span className="text-foreground">The Lost Tribe</span> is a
        sanctuary of slow fire and shared plates. We celebrate the ritual of gathering—where flame softens the air and every dish carries a memory.
      </motion.p>

      {/* Divider shimmer */}
      <motion.div
        className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-accent/60 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    </div>
  );
}

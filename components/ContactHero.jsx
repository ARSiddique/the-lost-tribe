"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-16 md:pt-24">
        <motion.h1
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Contact
        </motion.h1>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="mt-2 max-w-2xl text-white/70"
        >
          Questions, bookings, private dining — send us a note or call us.
        </motion.p>
      </div>
    </section>
  );
}

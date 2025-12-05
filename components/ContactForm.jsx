"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // TODO: hook up to API / email action
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setOk(true);
    setTimeout(() => setOk(false), 2600);
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-xl bg-black/40 border border-white/12 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400/70 focus:border-amber-300/60 transition";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent px-6 py-7 shadow-[0_24px_70px_rgba(0,0,0,0.9)] backdrop-blur"
    >
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold">Send us a message</h3>
          <p className="text-sm text-white/60">
            We usually reply within a few hours.
          </p>
        </div>
        <p className="text-xs text-white/45">
          Prefer WhatsApp or call? Use the floating buttons on the right.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Name */}
        <label className="group relative">
          <span className="absolute -top-2 left-3 bg-[#050608] px-2 text-xs text-white/60">
            Name *
          </span>
          <input required name="name" className={field} placeholder="Your name" />
        </label>

        {/* Phone */}
        <label className="group relative">
          <span className="absolute -top-2 left-3 bg-[#050608] px-2 text-xs text-white/60">
            Phone *
          </span>
          <input
            required
            name="phone"
            className={field}
            placeholder="+1 610 ..."
          />
        </label>

        {/* Email */}
        <label className="group relative md:col-span-2">
          <span className="absolute -top-2 left-3 bg-[#050608] px-2 text-xs text-white/60">
            Email
          </span>
          <input
            type="email"
            name="email"
            className={field}
            placeholder="you@example.com"
          />
        </label>

        {/* Message */}
        <label className="group relative md:col-span-2">
          <span className="absolute -top-2 left-3 bg-[#050608] px-2 text-xs text-white/60">
            Message *
          </span>
          <textarea
            required
            name="message"
            rows={5}
            className={field}
            placeholder="Tell us about your request…"
          />
        </label>
      </div>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        type="submit"
        className="mt-6 w-full rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_16px_40px_rgba(251,191,36,0.55)] disabled:opacity-70"
      >
        <div className="flex items-center justify-center gap-2">
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>Send Message</>
          )}
        </div>
      </motion.button>

      {/* Success toast */}
      <AnimatePresence>
        {ok && (
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            className="pointer-events-none mt-4 flex items-center justify-center gap-2 text-sm text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4" />
            Message sent. We’ll get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

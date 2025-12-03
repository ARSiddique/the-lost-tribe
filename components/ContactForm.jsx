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
    // TODO: wire to your API/email action here
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setOk(true);
    setTimeout(() => setOk(false), 2600);
    e.currentTarget.reset();
  }

  const field =
    "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/90 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/70 focus:border-accent/50 transition";

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 bg-white/5 px-6 py-6 backdrop-blur"
    >
      <div className="mb-5">
        <h3 className="text-xl font-semibold">Send us a message</h3>
        <p className="text-sm text-white/60">We usually reply within a few hours.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Name */}
        <label className="group relative">
          <span className="absolute -top-2 left-3 bg-bg px-2 text-xs text-white/60">
            Name *
          </span>
          <input required name="name" className={field} placeholder="Your name" />
        </label>

        {/* Phone */}
        <label className="group relative">
          <span className="absolute -top-2 left-3 bg-bg px-2 text-xs text-white/60">
            Phone *
          </span>
          <input required name="phone" className={field} placeholder="+1 610 ..." />
        </label>

        {/* Email */}
        <label className="group relative md:col-span-2">
          <span className="absolute -top-2 left-3 bg-bg px-2 text-xs text-white/60">
            Email
          </span>
          <input type="email" name="email" className={field} placeholder="you@example.com" />
        </label>

        {/* Message */}
        <label className="group relative md:col-span-2">
          <span className="absolute -top-2 left-3 bg-bg px-2 text-xs text-white/60">
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
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,.25)] disabled:opacity-70"
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
            className="pointer-events-none mt-3 flex items-center justify-center gap-2 text-sm text-emerald-300"
          >
            <CheckCircle2 className="h-4 w-4" />
            Message sent. We’ll get back to you shortly.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
}

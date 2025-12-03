"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const times = Array.from({ length: 7 * 2 }, (_, i) => {
  // 5:00 PM to 11:00 PM in 30-min slots
  const start = 17 * 60; // 17:00
  const t = start + i * 30;
  const h = Math.floor(t / 60);
  const m = t % 60;
  const ampm = h >= 12 ? "PM" : "AM";
  const hr12 = ((h + 11) % 12) + 1;
  return `${hr12}:${m.toString().padStart(2, "0")} ${ampm}`;
});

const guests = [1, 2, 3, 4, 5, 6, 7, 8];

export default function ReservationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: 2,
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  const [errors, setErrors] = useState({});

  function update(key, val) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.date) e.date = "Pick a date";
    if (!form.time) e.time = "Pick a time";
    if (!form.guests) e.guests = "Select guests";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    // Simulate API — replace with your route action or API call
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    setOk(true);
    e.currentTarget.reset();
    setForm({ name: "", email: "", date: "", time: "", guests: 2, notes: "" });
    setTimeout(() => setOk(false), 3500);
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6 shadow-sm"
      initial={{ y: 18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Row 1 */}
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="block text-sm mb-1">Full name *</label>
          <input
            type="text"
            className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
            placeholder="Your full name"
            onChange={(e) => update("name", e.target.value)}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Email *</label>
          <input
            type="email"
            className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
            placeholder="you@example.com"
            onChange={(e) => update("email", e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      {/* Row 2 */}
      <div className="mt-3 grid gap-3 md:grid-cols-3">
        <div>
          <label className="block text-sm mb-1">Date *</label>
          <input
            type="date"
            className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => update("date", e.target.value)}
          />
          {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Time *</label>
          <select
            className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
            defaultValue=""
            onChange={(e) => update("time", e.target.value)}
          >
            <option value="" disabled>
              Select time
            </option>
            {times.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.time && <p className="mt-1 text-xs text-red-400">{errors.time}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Guests *</label>
          <select
            className="w-full rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
            defaultValue={2}
            onChange={(e) => update("guests", Number(e.target.value))}
          >
            {guests.map((g) => (
              <option key={g} value={g}>
                {g} {g === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
          {errors.guests && <p className="mt-1 text-xs text-red-400">{errors.guests}</p>}
        </div>
      </div>

      {/* Notes */}
      <div className="mt-3">
        <label className="block text-sm mb-1">Occasion / notes (optional)</label>
        <textarea
          rows={5}
          className="w-full resize-y rounded-lg bg-black/30 border border-white/10 px-3 py-3 outline-none focus:ring-2 focus:ring-accent/60"
          placeholder="Birthday, anniversary, allergies, high chair, etc."
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      {/* Submit */}
      <div className="mt-5 flex items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-accent px-6 py-3 text-black font-medium hover:brightness-110 active:scale-95 transition disabled:opacity-60"
        >
          {submitting ? "Requesting..." : "Request Reservation"}
        </button>

        {ok && (
          <motion.span
            className="text-sm text-green-400"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Got it! We’ll confirm shortly.
          </motion.span>
        )}
      </div>

      {/* Micro copy */}
      <p className="mt-3 text-xs text-muted-foreground">
        You’ll receive a confirmation by email/SMS. For last-minute changes, please call us.
      </p>
    </motion.form>
  );
}

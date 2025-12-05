"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// 5:00 PM – 11:30 PM in 30-min slots
const times = Array.from({ length: 7 * 2 }, (_, i) => {
  const start = 17 * 60;
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
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.date) e.date = "Pick a date";
    if (!form.time) e.time = "Pick a time";
    if (!form.guests) e.guests = "Select guests";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900)); // TODO: API hook
    setSubmitting(false);
    setOk(true);
    ev.currentTarget.reset();
    setForm({ name: "", email: "", date: "", time: "", guests: 2, notes: "" });
    setTimeout(() => setOk(false), 3500);
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const previewDate = form.date
    ? new Date(form.date).toLocaleDateString()
    : "Select a date";
  const previewTime = form.time || "Select time";
  const previewGuests = form.guests
    ? `${form.guests} ${form.guests === 1 ? "guest" : "guests"}`
    : "Guests";

  return (
    <motion.div
      className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)] lg:items-start"
      initial="hidden"
      animate="show"
      variants={fadeUp}
    >
      {/* FORM CARD */}
      <motion.form
        onSubmit={onSubmit}
        className="relative overflow-hidden rounded-3xl border border-white/14 bg-black/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.95)] backdrop-blur-xl md:p-7"
      >
        {/* inner glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.18),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.16),transparent_55%)] opacity-70" />

        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold">Book a table</h2>
              <p className="text-xs text-white/65">
                We&apos;ll hold your table for 15 minutes from your selected
                time.
              </p>
            </div>
            <span className="hidden rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-200 sm:inline-flex">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Slots open
            </span>
          </div>

          {/* Row 1 */}
          <div className="grid gap-3 md:grid-cols-2">
            <Field label="Full name *">
              <input
                type="text"
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Your full name"
                onChange={(e) => update("name", e.target.value)}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </Field>

            <Field label="Email *">
              <input
                type="email"
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="you@example.com"
                onChange={(e) => update("email", e.target.value)}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </Field>
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <Field label="Date *">
              <input
                type="date"
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => update("date", e.target.value)}
              />
              {errors.date && <ErrorText>{errors.date}</ErrorText>}
            </Field>

            <Field label="Time *">
              <select
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
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
              {errors.time && <ErrorText>{errors.time}</ErrorText>}
            </Field>

            <Field label="Guests *">
              <select
                className="w-full rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                defaultValue={2}
                onChange={(e) => update("guests", Number(e.target.value))}
              >
                {guests.map((g) => (
                  <option key={g} value={g}>
                    {g} {g === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
              {errors.guests && <ErrorText>{errors.guests}</ErrorText>}
            </Field>
          </div>

          {/* Notes */}
          <div className="mt-4">
            <Field label="Occasion / notes (optional)">
              <textarea
                rows={4}
                className="w-full resize-y rounded-xl bg-black/60 border border-white/15 px-3 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-amber-300/70 focus:ring-1 focus:ring-amber-300/70"
                placeholder="Birthday, anniversary, allergies, high chair, etc."
                onChange={(e) => update("notes", e.target.value)}
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(251,191,36,0.6)] transition hover:translate-y-[1px] hover:bg-amber-300 disabled:opacity-60"
            >
              {submitting ? "Requesting..." : "Request reservation"}
            </button>

            {ok && (
              <motion.span
                className="text-sm text-emerald-400"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Got it! We’ll confirm shortly.
              </motion.span>
            )}
          </div>

          <p className="mt-3 text-[11px] text-white/60">
            You’ll receive a confirmation by email/SMS. For last-minute changes
            or large parties (8+), please call us directly.
          </p>
        </div>
      </motion.form>

      {/* PREVIEW + HOW IT WORKS COLUMN */}
      <div className="space-y-6">
        {/* preview card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/14 bg-black/85 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.25),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.2),transparent_55%)] opacity-70" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
              Live preview
            </p>
            <p className="mt-1 text-sm font-semibold text-amber-100">
              Your night at The Lost Tribe
            </p>

            <div className="mt-4 space-y-2 text-[11px] text-white/85">
              <PreviewRow label="Name" value={form.name || "Guest name"} />
              <PreviewRow label="Date" value={previewDate} />
              <PreviewRow label="Time" value={previewTime} />
              <PreviewRow label="Guests" value={previewGuests} />
              {form.notes.trim().length > 0 && (
                <PreviewRow
                  label="Notes"
                  value={
                    form.notes.length > 70
                      ? `${form.notes.slice(0, 67)}…`
                      : form.notes
                  }
                />
              )}
            </div>

            <p className="mt-4 text-[11px] text-white/60">
              This is just a preview. Final details and any special requests
              will be confirmed by our team.
            </p>
          </div>
        </motion.div>

        {/* how it works card */}
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-white/5 via-black/85 to-black/85 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/55">
            How it works
          </p>
          <div className="mt-3 space-y-3 text-[11px] text-white/75">
            <Step num="01" title="Send your request">
              Choose your date, time and party size. Add any notes or
              occasions.
            </Step>
            <Step num="02" title="We confirm">
              Our team checks availability and replies by email/SMS with your
              booking details.
            </Step>
            <Step num="03" title="Arrive & exhale">
              We hold your table and keep the room ready—slow fire, low light
              and long conversations.
            </Step>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* helpers */

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-xs mb-1 text-white/70">{label}</label>
      {children}
    </div>
  );
}

function ErrorText({ children }) {
  return <p className="mt-1 text-xs text-red-400">{children}</p>;
}

function PreviewRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </span>
      <span className="max-w-[60%] text-right text-[11px] text-white/90">
        {value}
      </span>
    </div>
  );
}

function Step({ num, title, children }) {
  return (
    <div className="relative pl-4">
      <span className="absolute left-0 top-1 h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
      <p className="text-[11px] font-semibold text-amber-100">
        {num} • {title}
      </p>
      <p className="mt-1 text-[11px] leading-relaxed text-white/70">
        {children}
      </p>
    </div>
  );
}

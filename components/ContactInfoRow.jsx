"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    icon: Phone,
    title: "PHONE",
    lines: ["(610) 555-0123"],
  },
  {
    icon: Mail,
    title: "EMAIL",
    lines: ["hello@thelosttribe.com"],
  },
  {
    icon: MapPin,
    title: "ADDRESS",
    lines: ["8925 West Chester Pike,", "Upper Darby Township, PA 19082"],
    link: "https://maps.app.goo.gl/8qT6y1jJc9T6d1mQ9",
    linkText: "View on Google Maps",
  },
  {
    icon: Clock,
    title: "HOURS",
    lines: ["Mon–Sun · 5:00 PM — 11:00 PM"],
  },
];

export default function ContactInfoRow() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08 } },
      }}
      className="grid gap-4 md:grid-cols-4"
    >
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <motion.div
            key={i}
            variants={{
              hidden: { y: 12, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
            }}
            whileHover={{ y: -2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-4 w-4 text-white/80" />
              </span>
              <p className="text-xs tracking-widest text-white/50">{c.title}</p>
            </div>

            <div className="space-y-0.5 text-sm text-white/80">
              {c.lines.map((l, k) => (
                <p key={k}>{l}</p>
              ))}
              {c.link && (
                <Link
                  href={c.link}
                  target="_blank"
                  className="mt-2 inline-block text-xs text-accent underline-offset-4 hover:underline"
                >
                  {c.linkText}
                </Link>
              )}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

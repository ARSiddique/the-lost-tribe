// components/menu/MenuCard.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MenuCard({ name, desc, price, featured, delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay }}
      className={[
        "group rounded-2xl border bg-neutral-950/50 px-4 py-4 md:px-5 md:py-5",
        "border-white/8 hover:border-white/15",
        featured ? "ring-1 ring-amber-400/25" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base md:text-[17px] font-medium tracking-tight">
            {name}
          </h3>
          {desc && (
            <p className="mt-1 text-sm text-neutral-400 leading-relaxed">
              {desc}
            </p>
          )}
        </div>
        {price != null && (
          <div className="shrink-0 rounded-full bg-black/40 px-3 py-1.5 text-sm border border-white/10">
            ${Number(price).toFixed(2)}
          </div>
        )}
      </div>
    </motion.div>
  );
}

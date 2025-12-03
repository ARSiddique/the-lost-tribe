// components/menu/CategoryPills.jsx
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function CategoryPills({ categories = [], activeId, onSelect }) {
  const rowRef = useRef(null);

  return (
    <div
      ref={rowRef}
      className="relative flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
    >
      {categories.map((c, i) => {
        const active = c.id === activeId;
        return (
          <motion.button
            key={c.id}
            onClick={() => onSelect?.(c.id)}
            whileTap={{ scale: 0.98 }}
            className={[
              "whitespace-nowrap rounded-full border px-3.5 py-2 text-sm",
              active
                ? "border-amber-400/40 bg-amber-400/15 text-amber-300"
                : "border-white/10 hover:border-white/20 text-neutral-300",
            ].join(" ")}
          >
            {c.label}
          </motion.button>
        );
      })}
    </div>
  );
}

// components/menu/MenuPageClient.jsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import CategoryPills from "./CategoryPills";
import MenuCard from "./MenuCard";
import { motion, useScroll, useSpring } from "framer-motion";

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function MenuPageClient({ sections = [] }) {
  const [active, setActive] = useState(sections?.[0]?.id || "");
  const [q, setQ] = useState("");
  const listRef = useRef(null);

  // Progress bar (top)
  const { scrollYProgress } = useScroll({ container: listRef });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  const indexed = useMemo(
    () =>
      (sections || []).map((s) => ({
        ...s,
        sid: s.id || slugify(s.title),
      })),
    [sections]
  );

  // Scroll-spy: observe headings
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("[data-section-id]")
    );
    if (!headings.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) {
          setActive(vis[0].target.getAttribute("data-section-id"));
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.8] }
    );

    headings.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [indexed]);

  const handleChipClick = (sid) => {
    const el = document.getElementById(`sec-${sid}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return indexed;
    return indexed
      .map((sec) => ({
        ...sec,
        items: (sec.items || []).filter(
          (it) =>
            it.name?.toLowerCase().includes(term) ||
            it.desc?.toLowerCase().includes(term)
        ),
      }))
      .filter((sec) => sec.items.length);
  }, [indexed, q]);

  return (
    <>
      {/* Sticky toolbar */}
      <div className="sticky top-16 z-30 border-b border-white/5 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes (e.g., tikka, fries, chai)…"
              className="w-full md:max-w-sm rounded-xl bg-neutral-900 border border-white/10 px-4 py-2.5 outline-none focus:border-white/30"
              aria-label="Search menu"
            />
          </div>

          <CategoryPills
            activeId={active}
            categories={indexed.map((s) => ({ id: s.sid, label: s.title }))}
            onSelect={handleChipClick}
          />
        </div>

        {/* top progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-[2px] origin-left bg-amber-400/90"
        />
      </div>

      {/* Content list with reveal animations */}
      <div ref={listRef} className="mx-auto max-w-6xl px-4">
        {filtered.map((sec, i) => (
          <section
            key={sec.sid}
            id={`sec-${sec.sid}`}
            data-section-id={sec.sid}
            className="scroll-mt-28"
          >
            <motion.h2
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.02 * i }}
              className="pt-12 md:pt-16 text-2xl md:text-3xl font-semibold tracking-tight"
            >
              {sec.title}
            </motion.h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {(sec.items || []).map((it, idx) => (
                <MenuCard
                  key={`${sec.sid}-${idx}-${it.name}`}
                  name={it.name}
                  desc={it.desc}
                  price={it.price}
                  featured={it.featured}
                  delay={0.04 * idx}
                />
              ))}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <div className="py-20 text-center text-neutral-400">
            No matches found. Try another search.
          </div>
        )}
      </div>
    </>
  );
}

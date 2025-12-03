// app/menu/page.jsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MENU_SECTIONS } from "@/data/menu";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function MenuPage() {
  const sections = useMemo(
    () => MENU_SECTIONS.map((s) => ({ ...s, domId: s.id || slug(s.title) })),
    []
  );

  const [active, setActive] = useState(sections[0]?.domId);
  const shouldReduce = useReducedMotion();

  // scroll-spy
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.domId)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
  };

  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // shared motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  };

  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-25 bg-[url('/images/hero-texture.jpg')] bg-cover bg-center"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Our Menu
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-white/70 max-w-2xl">
            Slow fire. Honest flavors. Explore every section below or jump with the chips.
          </motion.p>
        </div>
      </motion.section>

      {/* STICKY CATEGORY BAR */}
      <div className="sticky top-0 z-30 border-y border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="no-scrollbar flex gap-2 overflow-x-auto">
            {sections.map((s) => {
              const isActive = active === s.domId;
              return (
                <button
                  key={s.domId}
                  onClick={() => goTo(s.domId)}
                  className={[
                    "whitespace-nowrap rounded-full px-4 py-2 text-sm border transition",
                    isActive
                      ? "bg-amber-400/15 text-amber-200 border-amber-400/30"
                      : "bg-white/5 hover:bg-white/10 text-white/80 border-white/10",
                  ].join(" ")}
                  aria-current={isActive ? "true" : undefined}
                >
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTIONS */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        {sections.map((sec) => (
          <MotionSection
            key={sec.domId}
            id={sec.domId}
            title={sec.title}
            fadeUp={fadeUp}
            stagger={stagger}
          >
            <div className="grid gap-4 md:grid-cols-2">
              {sec.items.map((it) => (
                <MenuItemCard key={it.name} item={it} fadeUp={fadeUp} />
              ))}
            </div>
          </MotionSection>
        ))}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6"
        >
          <div>
            <p className="text-lg font-semibold">Ready to dine?</p>
            <p className="text-white/60">
              Book a table and we’ll keep the fire slow and the plates warm.
            </p>
          </div>
          <Link
            href="/reservations"
            className="rounded-full bg-amber-500/90 px-5 py-3 font-semibold text-black hover:bg-amber-400 transition"
          >
            Book a Table
          </Link>
        </motion.div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/15 bg-black/70 px-4 py-3 text-sm backdrop-blur hover:bg-black/60"
        >
          ↑ Top
        </button>
      )}
    </main>
  );
}

function MotionSection({ id, title, children, fadeUp, stagger }) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-28 mb-14"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold tracking-tight text-amber-100">
        {title}
      </motion.h2>
      <motion.div variants={stagger} className="mt-6">
        {children}
      </motion.div>
    </motion.section>
  );
}

function MenuItemCard({ item, fadeUp }) {
  const hasDesc = item.desc && item.desc.trim().length > 0;
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-amber-400/25 hover:bg-white/[0.06]"
    >
      <div className="pr-2">
        <p className="font-semibold leading-tight">{item.name}</p>
        {hasDesc && (
          <p className="mt-1 text-sm leading-relaxed text-white/65">{item.desc}</p>
        )}
      </div>
      <div className="shrink-0 pl-2 text-right">
        <div className="rounded-full border border-amber-500/20 bg-amber-400/10 px-3 py-1 font-semibold text-amber-200">
          {item.price}
        </div>
      </div>
    </motion.div>
  );
}

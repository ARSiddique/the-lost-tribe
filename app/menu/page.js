// app/menu/page.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MENU_SECTIONS } from "@/data/menu";

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Small highlight dishes for hero (just names from your real menu)
const heroHighlights = [
  "Lamb Shank with Qabuli Pulao",
  "Mutton Shinwari Karahi",
  "Mix Grill (4 people)",
];

export default function MenuPage() {
  const sections = useMemo(
    () => MENU_SECTIONS.map((s) => ({ ...s, domId: s.id || slug(s.title) })),
    []
  );

  const [active, setActive] = useState(sections[0]?.domId);
  const [showTop, setShowTop] = useState(false);
  const shouldReduce = useReducedMotion();

  // scroll-spy
  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.domId))
      .filter(Boolean);

    if (!els.length) return;

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

  // back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // shared motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  };

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 110, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* global soft background glows */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.12),transparent_55%)]" />

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden border-b border-white/10"
      >
        {/* textured / image backdrop */}
        <div className="pointer-events-none absolute inset-0">
          {/* menu hero photo – put /public/images/menu-hero.jpg */}
          <div className="h-full w-full bg-[url('/images/menu-hero.jpg')] bg-cover bg-center opacity-40" />
          {/* dark gradient to keep text readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
          {/* extra glow on right */}
          <div className="absolute -right-24 bottom-[-6rem] h-80 w-80 rounded-full bg-gradient-to-tr from-amber-400/35 via-amber-300/10 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-24 pb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
          {/* left copy */}
          <div className="max-w-xl space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-black/50 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-amber-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Tonight at The Lost Tribe
            </p>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-[3.1rem]">
                Slow fire.{" "}
                <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-rose-300 bg-clip-text text-transparent">
                  Honest flavors.
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                A menu built around smoke, spice and shared plates. Scroll
                through every section below or jump straight to your craving
                with the menu chips.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/reservations"
                className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(251,191,36,0.55)] transition hover:translate-y-[1px] hover:bg-amber-300"
              >
                Book a table
              </Link>
              <a
                href="#menu-start"
                className="rounded-full border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-200"
              >
                Browse the menu
              </a>
            </div>

            <p className="mt-2 text-xs text-white/65">
              Lamb shank • Karahi nights • Mandi • Desserts
            </p>
          </div>

          {/* right – visual hero card */}
          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-end"
          >
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-black/70 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/menu-hero.jpg"
                  alt="Shared plates at The Lost Tribe"
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/80">
                  Chef&apos;s table
                </div>
              </div>

              <div className="space-y-3 px-4 pb-4 pt-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-amber-200">
                  Highlights tonight
                </p>
                <ul className="space-y-1.5 text-sm text-white/85">
                  {heroHighlights.map((dish) => (
                    <li key={dish} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                      <span>{dish}</span>
                    </li>
                  ))}
                </ul>
                <p className="pt-1 text-[11px] text-white/55">
                  Ask the team for tonight&apos;s best from the grill & karahi
                  station.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STICKY CATEGORY BAR */}
      <div
        id="menu-start"
        className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/65"
      >
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
                      ? "bg-amber-400/15 text-amber-200 border-amber-400/40 shadow-[0_0_0_1px_rgba(251,191,36,0.3)]"
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
        {sections.map((sec, idx) => (
          <MotionSection
            key={sec.domId}
            id={sec.domId}
            title={sec.title}
            index={idx}
            fadeUp={fadeUp}
            stagger={stagger}
          >
            <div className="relative grid gap-4 md:grid-cols-2">
              {/* faint center divider on desktop */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block"
              />
              {sec.items.map((it) => (
                <MenuItemCard key={it.name} item={it} fadeUp={fadeUp} />
              ))}
            </div>
          </MotionSection>
        ))}

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-16 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/60 px-5 py-6 md:flex-row md:items-center"
        >
          <div>
            <p className="text-lg font-semibold">Ready to dine?</p>
            <p className="text-white/60">
              Book a table and we&apos;ll keep the fire slow and the plates
              warm.
            </p>
          </div>
          <Link
            href="/reservations"
            className="rounded-full bg-amber-500/90 px-5 py-3 font-semibold text-black transition hover:bg-amber-400"
          >
            Book a Table
          </Link>
        </motion.div>
      </div>

      {/* back to top button */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-black/80 px-4 py-3 text-sm text-white/90 backdrop-blur hover:bg-black/70"
        >
          ↑ Top
        </button>
      )}
    </main>
  );
}

function MotionSection({ id, title, index, children, fadeUp, stagger }) {
  // subtle alternating glow per section
  const glowClass =
    index % 2 === 0
      ? "from-amber-400/18 via-transparent to-transparent"
      : "from-cyan-400/18 via-transparent to-transparent";

  return (
    <motion.section
      id={id}
      className="relative scroll-mt-28 mb-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      {/* tiny background wash behind section */}
      <div
        aria-hidden
        className={`pointer-events-none absolute -inset-x-6 -top-6 bottom-[-1.5rem] rounded-[2.5rem] bg-gradient-to-b ${glowClass} opacity-70`}
      />

      <div className="relative">
        <motion.h2
          variants={fadeUp}
          className="inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-amber-100 md:text-3xl"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300/40 bg-black/60 text-xs text-amber-200">
            {String(index + 1).padStart(2, "0")}
          </span>
          {title}
        </motion.h2>
        <motion.div variants={stagger} className="mt-6">
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
}

function MenuItemCard({ item, fadeUp }) {
  const hasDesc = item.desc && item.desc.trim().length > 0;
  const isStar = item.name?.includes("★");

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex gap-4 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition hover:border-amber-400/35 hover:bg-black/80"
    >
      {/* thumbnail image */}
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="96px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

        {isStar && (
          <span className="absolute left-1.5 top-1.5 rounded-full bg-black/70 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">
            ★ Signature
          </span>
        )}
      </div>

      {/* text + price */}
      <div className="flex flex-1 items-start justify-between gap-3">
        <div className="pr-2">
          <p className="font-semibold leading-tight">
            {item.name.replace("★", "★")}
          </p>
          {hasDesc && (
            <p className="mt-1 text-sm leading-relaxed text-white/70">
              {item.desc}
            </p>
          )}
        </div>

        <div className="shrink-0 text-right">
          <div className="rounded-full border border-amber-500/30 bg-amber-400/15 px-3 py-1 text-sm font-semibold text-amber-100 shadow-[0_0_18px_rgba(251,191,36,0.35)]">
            {item.price}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

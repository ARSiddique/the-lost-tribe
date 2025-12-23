// app/menu/page.jsx
"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useDragControls } from "framer-motion";
import { MENU_SECTIONS } from "@/data/menu";

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const heroHighlights = [
  "Mutton Shinwari Karahi (Full)",
  "Mixed Grill (Full)",
  "Chicken Boneless Handi",
];

const clampIndex = (i, len) => {
  if (!len) return 0;
  return (i % len + len) % len;
};

export default function MenuPage() {
  const shouldReduce = useReducedMotion();
  const dragControls = useDragControls();

  const sections = useMemo(
    () => MENU_SECTIONS.map((s) => ({ ...s, domId: s.id || slug(s.title) })),
    []
  );

  const [[activeIndex, direction], setActive] = useState([0, 0]);
  const active = sections[activeIndex];

  const setToIndex = (next) => {
    const n = clampIndex(next, sections.length);
    const dir = n === activeIndex ? 0 : n > activeIndex ? 1 : -1;
    setActive([n, dir]);
  };

  const paginate = (dir) => {
    setActive(([i]) => {
      const next = clampIndex(i + dir, sections.length);
      return [next, dir];
    });
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") paginate(1);
      if (e.key === "ArrowUp") paginate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections.length]);

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
  };

  const slide = {
    enter: (dir) => ({
      y: shouldReduce ? 0 : dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir) => ({
      y: shouldReduce ? 0 : dir > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <main className="relative min-h-screen bg-[#050608] text-white flex flex-col">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.12),transparent_55%)]" />

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="h-full w-full bg-[url('/images/menu-hero.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50" />
          <div className="absolute -right-24 bottom-[-6rem] h-80 w-80 rounded-full bg-gradient-to-tr from-amber-400/35 via-amber-300/10 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-24 pb-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.9fr)]">
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
                Tap a menu section below or swipe <b>up/down</b> to browse—no long
                scrolling.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/reservations"
                className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(251,191,36,0.55)] transition hover:translate-y-[1px] hover:bg-amber-300"
              >
                Book a table
              </Link>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("menu-start");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-full border border-white/20 bg-black/40 px-6 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-200"
              >
                Browse the menu
              </button>
            </div>

            <p className="mt-2 text-xs text-white/65">
              Tip: swipe up/down (grab the header) • arrow up/down also works
            </p>
          </div>

          <motion.div variants={fadeUp} className="relative flex items-center justify-end">
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
                  Ask the team for tonight&apos;s best from the grill & karahi station.
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
            {sections.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.domId}
                  onClick={() => setToIndex(i)}
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

      {/* SWIPE SECTIONS VIEWPORT */}
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 overflow-hidden">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            Section{" "}
            <span className="text-white/85">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(sections.length).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => paginate(-1)}
              className="rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-white/85 hover:border-amber-300/50 hover:text-amber-200"
            >
              ↑ Prev
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              className="rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-white/85 hover:border-amber-300/50 hover:text-amber-200"
            >
              Next ↓
            </button>
          </div>
        </div>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={active?.domId || "empty"}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: shouldReduce ? 0 : 0.28, ease: "easeOut" }}
            className="h-full"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">
              <div
                aria-hidden
                className={[
                  "pointer-events-none absolute inset-0 opacity-80",
                  activeIndex % 2 === 0
                    ? "bg-[radial-gradient(circle_at_20%_0%,rgba(251,191,36,0.14),transparent_55%)]"
                    : "bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.14),transparent_55%)]",
                ].join(" ")}
              />

              {/* HEADER (drag handle area) */}
              <motion.div
                drag={shouldReduce ? false : "y"}
                dragListener={false}
                dragControls={dragControls}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.18}
                onDragEnd={(e, info) => {
                  if (shouldReduce) return;
                  const swipe = info.offset.y;
                  if (swipe < -80) paginate(1);
                  else if (swipe > 80) paginate(-1);
                }}
                className="relative border-b border-white/10 px-5 py-4 select-none"
              >
                <div
                  onPointerDown={(e) => dragControls.start(e)}
                  className="group mb-3 flex w-full cursor-grab active:cursor-grabbing items-center justify-center"
                  aria-label="Swipe up/down to change menu section"
                  role="button"
                  tabIndex={0}
                >
                  <div className="h-1.5 w-14 rounded-full bg-white/10 group-hover:bg-white/15 transition" />
                </div>

                <motion.div initial="hidden" animate="show" variants={fadeUp}>
                  <h2 className="inline-flex items-center gap-3 text-2xl font-semibold tracking-tight text-amber-100 md:text-3xl">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-amber-300/40 bg-black/60 text-xs text-amber-200">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    {active?.title || "Menu"}
                  </h2>
                  <p className="mt-2 text-sm text-white/60">
                    Grab the bar and swipe <b>up/down</b> to switch sections. Scroll below for items.
                  </p>
                </motion.div>
              </motion.div>

              <div className="relative max-h-[calc(100vh-280px)] overflow-y-auto px-5 py-5">
                <motion.div initial="hidden" animate="show" variants={stagger}>
                  <div className="relative grid gap-4 md:grid-cols-2">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-2 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/15 to-transparent md:block"
                    />
                    {active?.items?.map((it) => (
                      <MenuItemCard key={it.name} item={it} fadeUp={fadeUp} />
                    ))}
                  </div>

                  <motion.div
                    variants={fadeUp}
                    className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/10 bg-black/65 px-5 py-6 md:flex-row md:items-center"
                  >
                    <div>
                      <p className="text-lg font-semibold">Ready to dine?</p>
                      <p className="text-white/60">
                        Book a table and we&apos;ll keep the fire slow and the plates warm.
                      </p>
                    </div>
                    <Link
                      href="/reservations"
                      className="rounded-full bg-amber-500/90 px-5 py-3 font-semibold text-black transition hover:bg-amber-400"
                    >
                      Book a Table
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}

function MenuItemCard({ item, fadeUp }) {
  const hasDesc = item.desc && item.desc.trim().length > 0;

  // ✅ Safe image fallback (so Next/Image never crashes)
  const imgSrc = item.img || "/images/menu-hero.jpg";

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex gap-4 rounded-2xl border border-white/10 bg-black/70 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.55)] transition hover:border-amber-400/35 hover:bg-black/80"
    >
      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          sizes="96px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 items-start justify-between gap-3">
        <div className="pr-2">
          <p className="font-semibold leading-tight">{item.name}</p>
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

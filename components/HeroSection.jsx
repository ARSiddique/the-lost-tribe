// app/components/home/HeroSection.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const heroCards = [
  {
    tag: "SIGNATURE DISH",
    title: "Lamb Shank with Qabuli",
    desc: "Slow-cooked over charcoal, qabuli rice & toasted nuts.",
    accent: "limited plates every night",
  },
  {
    tag: "FROM THE COALS",
    title: "Lamb & Karahi Nights",
    desc: "Slow-cooked lamb, rich gravies and sharing karahis.",
    accent: "best shared with the table",
  },
  {
    tag: "VEGETARIAN",
    title: "Vegetarian Comforts",
    desc: "Palak, paneer and slow-cooked daals for comfort nights.",
    accent: "comfort food, tribe-style",
  },
];

export function HeroSection() {
  const router = useRouter();
  const sectionRef = useRef(null);

  // Parallax scroll for background
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);      // city image
  const glowY = useTransform(scrollYProgress, [0, 1], [-10, 40]);  // yellow glow

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Background image layer with parallax */}
      <motion.div
        className="pointer-events-none absolute inset-0 will-change-transform"
        style={{ y: bgY }}
      >
        <div className="h-full w-full scale-105 bg-[url('/images/hero-table.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </motion.div>

      {/* Soft radial glow behind cards (also parallax) */}
      <motion.div
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-gradient-to-br from-yellow-500/40 via-amber-400/20 to-transparent blur-3xl will-change-transform"
        style={{ y: glowY }}
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 md:flex-row md:items-center md:justify-between md:px-6 lg:py-24">
        {/* Left copy */}
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Escape into a hidden ritual
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
              <span className="block">DINING</span>
              <span className="block text-amber-300">RITUAL</span>
            </h1>
            <p className="max-w-lg text-sm leading-relaxed text-neutral-200/80 md:text-base">
              Candle-lit tables, slow-fire halal dishes, and a room that hums
              like a secret. The Lost Tribe turns every dinner into a story
              whispered in low light.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/reservations"
              className="rounded-full bg-amber-400 px-6 py-2.5 text-sm font-semibold text-black shadow-[0_18px_50px_rgba(251,191,36,0.45)] transition hover:translate-y-[1px] hover:bg-amber-300"
            >
              Book a table
            </a>
            <a
              href="/menu"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md hover:border-amber-300/70 hover:text-amber-200"
            >
              Explore the menu
            </a>
          </div>

          <p className="mt-2 text-xs text-neutral-300/70">
            Lamb shank • Karahi nights • Mandi • Desserts
          </p>
        </div>

        {/* Right stacked cards – 3D feel */}
        <div
          className="relative mt-6 flex w-full max-w-md justify-center md:mt-0"
          style={{ perspective: "1400px" }}
        >
          {heroCards.map((card, index) => {
            const baseTranslateY = index * 22; // stack offset
            const baseRotate = index === 0 ? -6 : index === 2 ? 5 : -1;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: baseTranslateY + 40,
                  rotateY: 12,
                }}
                animate={{
                  opacity: 1,
                  y: baseTranslateY,
                  rotateY: 0,
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: baseTranslateY - 8,
                  rotateX: -4,
                  rotateY: index === 1 ? 6 : 2,
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.85), 0 0 40px rgba(251,191,36,0.25)",
                  zIndex: 40,
                }}
                className={[
                  "group absolute w-full cursor-pointer rounded-3xl border border-white/6 bg-gradient-to-br",
                  "from-neutral-900/95 via-neutral-900/90 to-neutral-900/80",
                  "px-5 py-4 shadow-[0_18px_45px_rgba(0,0,0,0.75)]",
                  "backdrop-blur-xl transition-transform duration-300 ease-out",
                  "relative",
                ].join(" ")}
                style={{
                  transformStyle: "preserve-3d",
                  translateY: baseTranslateY,
                  rotateZ: baseRotate,
                  zIndex: 10 - index,
                }}
                onClick={() => router.push("/menu")}
                role="button"
              >
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-amber-300/80">
                  {card.tag}
                </p>
                <h3 className="text-sm font-semibold text-white md:text-base">
                  {card.title}
                </h3>
                <p className="mt-1 text-[11px] leading-relaxed text-neutral-300/80">
                  {card.desc}
                </p>
                <p className="mt-3 text-[10px] font-medium text-emerald-300/85">
                  • {card.accent}
                </p>

                {/* subtle gradient sheen */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/6 via-transparent to-amber-300/10 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

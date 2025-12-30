"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
  { href: "/location", label: "Location" },
];

// ✅ Put your logo here (place file in /public)
const LOGO_SRC = "/tlt-logo.jpeg";

export function MainHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-40 transition",
        scrolled
          ? "backdrop-blur bg-black/55 border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      {/* ✅ 3-part layout on desktop: left brand | center nav | right CTA */}
      <div className="mx-auto max-w-6xl px-4 h-16 md:h-18 flex items-center">
        <div className="w-full md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 flex items-center">
          {/* LEFT: Logo + Name */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 min-w-0"
            aria-label="The Lost Tribe"
          >
            <span className="relative size-9 md:size-10 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/15">
              <Image
                src={LOGO_SRC}
                alt="The Lost Tribe logo"
                fill
                className="object-contain p-1"
                priority
              />
            </span>

            <span className="font-semibold tracking-[0.3em] text-xs md:text-sm text-white whitespace-nowrap">
              THE LOST TRIBE
            </span>
          </Link>

          {/* CENTER: Desktop nav */}
          <nav className="hidden md:flex items-center justify-center gap-7 text-sm text-white/80">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="hover:text-white transition-colors"
              >
                {i.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT: Desktop CTA + Mobile burger */}
          <div className="ml-auto md:ml-0 flex items-center justify-end gap-3">
            <Link
              href="/reservations"
              className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-black shadow-lg hover:brightness-110 transition"
            >
              Book a Table
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-2 text-white/90">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-white/10 last:border-b-0"
              >
                {i.label}
              </Link>
            ))}

            <Link
              href="/reservations"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/story", label: "About" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
  { href: "/location", label: "Location" },
];

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
        scrolled ? "backdrop-blur bg-black/55 border-b border-white/10" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 h-16 md:h-18 flex items-center gap-6">
        <Link
          href="/"
          className="font-semibold tracking-[0.3em] text-xs md:text-sm text-white"
        >
          THE LOST TRIBE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {NAV.map((i) => (
            <Link key={i.href} href={i.href} className="hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>

        {/* CTA (desktop) */}
        <Link
          href="/reservations"
          className="ml-auto hidden md:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-black shadow-lg hover:brightness-110"
        >
          Book a Table
        </Link>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto md:hidden inline-flex size-9 items-center justify-center rounded-lg bg-white/10 text-white"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
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

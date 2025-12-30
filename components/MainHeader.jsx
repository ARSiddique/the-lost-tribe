"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

function cx(...a) {
  return a.filter(Boolean).join(" ");
}

export function MainHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const isActive = useMemo(() => {
    return (href) => {
      if (href === "/") return pathname === "/";
      return pathname?.startsWith(href);
    };
  }, [pathname]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 transition",
        scrolled
          ? "backdrop-blur bg-black/55 border-b border-white/10"
          : "bg-transparent"
      )}
    >
      {/* ✅ Desktop: left brand | center nav | right CTA */}
      <div className="mx-auto max-w-6xl px-4 h-16 md:h-18 flex items-center">
        <div className="w-full md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 flex items-center">
          {/* LEFT: Logo + Name */}
          <Link
            href="/"
            className="inline-flex items-center gap-3 min-w-0"
            aria-label="The Lost Tribe"
          >
            <span className="relative size-9 md:size-10 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
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

          {/* CENTER: Desktop nav (ALL links) */}
          <nav className="hidden md:flex items-center justify-center gap-2 text-sm">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={cx(
                  "relative px-3 py-2 rounded-full transition",
                  "text-white/75 hover:text-white",
                  "hover:bg-white/5 hover:ring-1 hover:ring-white/10",
                  isActive(i.href) && "text-white bg-white/6 ring-1 ring-white/12"
                )}
              >
                <span className="relative z-10">{i.label}</span>

                {/* active accent underline (lavish) */}
                <span
                  className={cx(
                    "pointer-events-none absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 rounded-full bg-accent transition-all duration-300",
                    isActive(i.href) && "w-7"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTA + Mobile burger */}
          <div className="ml-auto md:ml-0 flex items-center justify-end gap-3">
            <Link
              href="/reservations"
              className="hidden md:inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-black shadow-[0_16px_40px_rgba(0,0,0,0.55)] hover:brightness-110 active:scale-[0.99] transition"
            >
              Book a Table
            </Link>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex size-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition"
              aria-label="Toggle menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 grid gap-1 text-white/90">
            {NAV.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className={cx(
                  "py-2 px-2 rounded-lg transition",
                  "border-b border-white/10 last:border-b-0",
                  isActive(i.href) ? "text-white bg-white/5" : "text-white/90"
                )}
              >
                {i.label}
              </Link>
            ))}

            {/* CTA (single, premium) */}
            <Link
              href="/reservations"
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-black"
            >
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

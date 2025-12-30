"use client";

import { useEffect, useMemo, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#25D366"
        d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6A11.94 11.94 0 0 0 12.01 24c6.62 0 11.99-5.37 11.99-12 0-3.2-1.25-6.2-3.48-8.52Z"
      />
      <path
        fill="#fff"
        d="M17.28 14.15c-.1-.16-.36-.26-.75-.46s-2.33-1.15-2.69-1.28c-.36-.13-.62-.19-.88.19s-1.01 1.28-1.24 1.54-.46.29-.85.1c-.39-.19-1.65-.6-3.15-1.92-1.17-.98-1.96-2.19-2.19-2.57-.23-.39-.02-.6.17-.79.17-.16.39-.42.58-.63.2-.21.26-.36.39-.62.13-.26.06-.48-.03-.67-.1-.19-.88-2.11-1.21-2.9-.32-.77-.65-.67-.88-.68h-.75c-.26 0-.67.1-1.02.48-.36.39-1.37 1.34-1.37 3.27s1.41 3.8 1.61 4.06c.2.26 2.77 4.22 6.72 5.72.94.36 1.67.57 2.24.72.94.23 1.79.2 2.46.12.75-.09 2.33-.95 2.66-1.87.33-.92.33-1.71.23-1.87Z"
      />
    </svg>
  );
}

export default function FloatingActions() {
  const PHONE_TEL = "+16108626680";
  const PHONE_DISPLAY = "+1 610 862 6680";
  const WHATSAPP_NUMBER = "+16108626680";
  const WHATSAPP_MSG =
    "Hi! I’d like to make a reservation at The Lost Tribe. Please confirm availability.";

  const [showTop, setShowTop] = useState(false);
  const [nearFooter, setNearFooter] = useState(false);

  const waNumberDigits = useMemo(
    () => WHATSAPP_NUMBER.replace(/\D/g, ""),
    [WHATSAPP_NUMBER]
  );

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    let raf = 0;
    let obs = null;

    const updateNearBottom = () => {
      const doc = document.documentElement;
      const scrolledBottom = window.scrollY + window.innerHeight;
      const thresholdPx = 420;
      const isNearBottom = scrolledBottom >= doc.scrollHeight - thresholdPx;
      setNearFooter((prev) => (prev !== isNearBottom ? isNearBottom : prev));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setShowTop(window.scrollY > 240);
        updateNearBottom();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const tryAttachObserver = () => {
      const footerEl = document.querySelector("footer");
      if (!footerEl) return false;

      obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setNearFooter(true);
        },
        { threshold: 0.01 }
      );

      obs.observe(footerEl);
      return true;
    };

    let tries = 0;
    const t = setInterval(() => {
      tries += 1;
      if (tryAttachObserver() || tries >= 10) clearInterval(t);
    }, 250);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
      clearInterval(t);
      try {
        obs?.disconnect();
      } catch {}
    };
  }, []);

  const wrapperClass = [
    "fixed right-5 bottom-5 z-[60] flex flex-col gap-3",
    "pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)]",
    "transition-all duration-300",
    nearFooter
      ? "opacity-0 translate-y-3 pointer-events-none"
      : "opacity-100 translate-y-0",
  ].join(" ");

  // ✅ Perfect circle button base
  const circleBase =
    "inline-flex items-center justify-center rounded-full shadow-[0_10px_30px_rgba(0,0,0,.25)] active:scale-95 transition";
  const size = "h-12 w-12"; // change to h-11 w-11 if you want smaller

  return (
    <div className={wrapperClass}>
      {/* WhatsApp - circle */}
      <a
        href={`https://wa.me/${waNumberDigits}?text=${encodeURIComponent(
          WHATSAPP_MSG
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className={`${circleBase} ${size} bg-[#25D366] text-white hover:brightness-110`}
      >
        <WhatsAppIcon className="h-5 w-5" />
      </a>

      {/* Call - circle */}
      <a
        href={`tel:${PHONE_TEL}`}
        aria-label="Call"
        title={`Call ${PHONE_DISPLAY}`}
        className={`${circleBase} ${size} bg-accent text-black hover:brightness-110`}
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* Back to top - circle */}
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        title="Back to top"
        className={`${circleBase} ${size} bg-white/10 border border-white/20 backdrop-blur text-white hover:bg-white/20 ${
          showTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

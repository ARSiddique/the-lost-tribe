"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { Phone, ArrowUp } from "lucide-react";

// Tiny WhatsApp logo (uses currentColor)
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
  // --- EDIT THESE ONCE ---
  const PHONE_NUMBER = "+1-555-0123"; // tel number (displayed)
  const WHATSAPP_NUMBER = "+15550123"; // full intl format
  const WHATSAPP_MSG = "Hello! I'd like to book a table at The Lost Tribe.";

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const waNumberDigits = useMemo(
    () => WHATSAPP_NUMBER.replace(/\D/g, ""),
    [WHATSAPP_NUMBER]
  );

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3 pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)]">
      {/* WhatsApp */}
      <Link
        href={`https://wa.me/${waNumberDigits}?text=${encodeURIComponent(WHATSAPP_MSG)}`}
        target="_blank"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,.25)] hover:brightness-110 active:scale-95 transition"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </Link>

      {/* Call */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        aria-label="Call us"
        title={`Call ${PHONE_NUMBER}`}
        className="group inline-flex items-center gap-2 rounded-full bg-accent text-black px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,.25)] hover:brightness-110 active:scale-95 transition"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-medium">Call</span>
      </a>

      {/* Back to top */}
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        title="Back to top"
        className={`inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur px-3 py-3 text-white shadow-[0_10px_30px_rgba(0,0,0,.25)] hover:bg-white/20 active:scale-95 transition will-change-transform will-change-opacity
        ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}

// components/MainFooter.jsx
"use client";
import Link from "next/link";
import { FadeIn } from "@/components/anim"; // from the helper we added

export function MainFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 border-t border-white/10">
        <div className="grid gap-8 md:grid-cols-2">
          <FadeIn>
            <div>
              <p className="text-xl font-semibold text-white">The Lost Tribe</p>
              {/* Keep one location reference only (matches your map link) */}
              <p className="mt-1 text-white/60">United States</p>

              <a
                href="https://maps.app.goo.gl/eacnPCMDrHYH7USo9?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm text-accent hover:underline"
                aria-label="View The Lost Tribe on Google Maps"
              >
                View on Google Maps
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="flex flex-col md:items-end gap-3">
              <nav className="flex flex-wrap gap-4 text-white/80">
                <Link href="/menu" className="hover:text-white">Menu</Link>
                <Link href="/reservations" className="hover:text-white">Reservations</Link>
                <Link href="/about" className="hover:text-white">About</Link>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </nav>

              <div className="flex gap-4 text-white/60">
                {/* Replace with your real profiles when ready */}
                <a href="#" className="hover:text-white" aria-label="Instagram">Instagram</a>
                <a href="#" className="hover:text-white" aria-label="Facebook">Facebook</a>
                <a href="#" className="hover:text-white" aria-label="TikTok">TikTok</a>
              </div>

              <p className="text-xs text-white/50">
                © {new Date().getFullYear()} The Lost Tribe. All rights reserved.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}

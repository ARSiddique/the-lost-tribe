"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/anim";
import { site } from "@/lib/siteConfig";

const LOGO_SRC = "/tlt-logo.jpeg";

export function MainFooter() {
  const PHONE_DISPLAY = site.phone || "+1 610 862 6680";
  const PHONE_TEL = site.phoneTel || "tel:+16108626680";
  const WHATSAPP = site.whatsappLink || "https://wa.me/16108626680";
  const MAPS = site.mapsLink;

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-white/10 py-10">
          {/* TOP ROW */}
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            {/* Brand */}
            <FadeIn>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="relative size-10 rounded-full overflow-hidden bg-white/5 ring-1 ring-white/15">
                    <Image
                      src={LOGO_SRC}
                      alt="The Lost Tribe logo"
                      fill
                      className="object-contain p-1"
                    />
                  </span>
                  <p className="font-semibold tracking-[0.22em] text-sm">
                    THE LOST TRIBE
                  </p>
                </div>

                <p className="text-sm text-white/60 leading-relaxed">
                  {site.addressLine1}
                  <br />
                  {site.addressLine2}
                </p>

                {MAPS ? (
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-sm text-accent hover:underline"
                  >
                    View on Google Maps
                  </a>
                ) : null}
              </div>
            </FadeIn>

            {/* Links */}
            <FadeIn delay={0.06}>
              <div className="md:text-center">
                <p className="text-xs tracking-[0.25em] text-white/50">
                  QUICK LINKS
                </p>
                <nav className="mt-4 flex flex-col gap-3 text-sm text-white/80 md:items-center">
                  <Link href="/" className="hover:text-white">Home</Link>
                  <Link href="/menu" className="hover:text-white">Menu</Link>
                  <Link href="/reservations" className="hover:text-white">Reservations</Link>
                  <Link href="/story" className="hover:text-white">About</Link>
                  <Link href="/location" className="hover:text-white">Location</Link>
                  <Link href="/contact" className="hover:text-white">Contact</Link>
                </nav>
              </div>
            </FadeIn>

            {/* Reservations */}
            <FadeIn delay={0.1}>
              <div className="md:text-right">
                <p className="text-xs tracking-[0.25em] text-white/50">
                  RESERVATIONS
                </p>

                <div className="mt-4 space-y-2 text-sm">
                  <a
                    href={PHONE_TEL}
                    className="block text-white/80 hover:text-white"
                  >
                    Call: <span className="text-white">{PHONE_DISPLAY}</span>
                  </a>

                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white/80 hover:text-white"
                  >
                    WhatsApp: <span className="text-white">Message us</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* BOTTOM ROW */}
          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} {site.name || "The Lost Tribe"}. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/60 md:justify-end">
              <Link href="/contact" className="hover:text-white">Contact</Link>
              <Link href="/reservations" className="hover:text-white">Book a Table</Link>
              {MAPS ? (
                <a
                  href={MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Directions
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

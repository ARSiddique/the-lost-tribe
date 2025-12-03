"use client";

import Image from "next/image";
import { AMBIENCE_IMAGES } from "@/data/menu";

export default function AmbienceGallery() {
  return (
    <section id="ambience" className="bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Ambience</h2>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {AMBIENCE_IMAGES.map((it, i) => (
            <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={it.img}
                alt={it.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

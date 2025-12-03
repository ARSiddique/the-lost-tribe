"use client";
import Image from "next/image";
import { FEATURED_DISHES } from "@/data/menu";

export function SignatureDishes() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h3 className="text-sm tracking-[0.35em] text-accent/70 mb-2 text-center">
          SIGNATURE DISHES
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          {FEATURED_DISHES.map((d) => (
            <div
              key={d.title}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={d.img}
                  alt={d.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium">{d.title}</h4>
                <p className="text-white/70 text-sm">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

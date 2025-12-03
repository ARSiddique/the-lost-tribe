"use client";
import Image from "next/image";
import Link from "next/link";
import { MENU_PREVIEW } from "@/data/menu";

export default function MenuPreviewSection() {
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold">From the Kitchen</h2>
          <Link
            href="/menu"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2 hover:bg-white/10"
          >
            View Full Menu
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {MENU_PREVIEW.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-medium">{item.title}</h4>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

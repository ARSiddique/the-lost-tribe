// components/MenuItemCard.jsx
"use client";
import Image from "next/image";

export default function MenuItemCard({ item }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[4/3]">
        <Image
          src={item.img}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h4 className="text-white font-medium">{item.name}</h4>
          <span className="text-accent font-semibold">${item.price}</span>
        </div>
        <p className="mt-2 text-sm text-white/70">{item.desc}</p>
      </div>
    </div>
  );
}

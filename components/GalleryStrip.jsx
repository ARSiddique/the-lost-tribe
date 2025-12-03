// components/GalleryStrip.jsx
import Image from "next/image";

export default function GalleryStrip() {
  const imgs = [
    "/images/ambience-1.jpg",
    "/images/ambience-2.jpg",
    "/images/ambience-3.jpg",
    "/images/hero-table.jpg",
  ];
  return (
    <section className="bg-[#0b0908]">
      <div className="mx-auto max-w-6xl px-4 py-8 overflow-x-auto">
        <div className="flex gap-4 w-max">
          {imgs.map((src, i) => (
            <div key={i} className="relative h-40 w-72 shrink-0 rounded-xl overflow-hidden border border-white/10">
              <Image src={src} alt={`ambience ${i+1}`} fill className="object-cover" sizes="288px" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

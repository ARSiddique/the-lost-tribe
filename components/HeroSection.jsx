import Image from "next/image";
import Link from "next/link";

export function HeroSection(){
  return (
    <section className="relative h-[86vh] md:h-[90vh] text-white">
      {/* BG image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-table.jpg"
          alt="Warm candle-lit dining table"
          fill
          sizes="100vw"
          // Slightly higher table + balanced flame
          className="object-cover object-[50%_62%] brightness-[.95] contrast-110 saturate-105"
          priority
        />
        {/* lighter overlay so details pop */}
        <div className="absolute inset-0 bg-black/22" />
        {/* subtle vignette for focus */}
        <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10 [mask-image:radial-gradient(80%_60%_at_50%_40%,#000_60%,transparent_100%)]" />
        {/* soft bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-28 md:pt-36 lg:pt-40 pb-16 flex flex-col items-center text-center">
        <p className="uppercase tracking-[0.28em] text-[11px] text-white/80 mb-3">
          Escape into a hidden
        </p>
        <h1 className="text-[40px] md:text-6xl lg:text-7xl font-semibold tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,.35)]">
          DINING RITUAL
        </h1>
        <div className="mt-7">
          <Link
            href="/reservations"
            className="inline-flex items-center rounded-full border border-accent/80 bg-accent px-8 py-2.5 text-sm md:text-base font-medium text-black shadow-[0_10px_30px_rgba(0,0,0,.25)] hover:brightness-110 active:scale-[.98] transition"
          >
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}

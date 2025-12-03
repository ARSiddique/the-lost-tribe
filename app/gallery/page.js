// app/gallery/page.js
import GalleryStrip from "@/components/GalleryStrip";

export const metadata = { title: "Gallery — The Lost Tribe" };

export default function GalleryPage() {
  return (
    <main className="bg-bg text-fg">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Gallery</h1>
        <GalleryStrip />
      </section>
    </main>
  );
}

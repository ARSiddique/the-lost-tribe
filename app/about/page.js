// app/about/page.js
import { StorySection } from "@/components/StorySection";

export const metadata = { title: "About — The Lost Tribe" };

export default function AboutPage() {
  return (
    <main className="bg-bg text-fg">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-8">Our Story</h1>
        <StorySection />
      </section>
    </main>
  );
}

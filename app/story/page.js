// app/story/page.jsx
import StoryHero from "@/components/StoryHero";
import StoryFeatureGrid from "@/components/StoryFeatureGrid";

export const metadata = {
  title: "Our Story — The Lost Tribe",
  description:
    "The Lost Tribe is a sanctuary of slow fire, shared plates, and whispered stories. Discover our roots and ritual of gathering.",
};

export default function StoryPage() {
  return (
    <section className="relative bg-background text-foreground">
      {/* Subtle vignette background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(209,178,96,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-28">
        <StoryHero />
        <div className="mt-14">
          <StoryFeatureGrid />
        </div>
      </div>
    </section>
  );
}

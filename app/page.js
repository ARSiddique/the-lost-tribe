// app/page.js
import { HeroSection } from "@/components/HeroSection";
import { StorySection } from "@/components/StorySection";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import { SignatureDishes } from "@/components/SignatureDishes";
import AmbienceGallery from "@/components/AmbienceGallery";
import ReviewsSection from "@/components/ReviewsSection";
import ChefNoteSection from "@/components/ChefNoteSection";
import GalleryStrip from "@/components/GalleryStrip";
import LocationSection from "@/components/LocationSection";

export default function HomePage() {
  return (
    <main className="bg-bg text-fg">
      <HeroSection />
      <StorySection />
      <MenuPreviewSection />
      <SignatureDishes />
      <AmbienceGallery />
      <ReviewsSection />
      <ChefNoteSection />
      <GalleryStrip />
      <LocationSection />
    </main>
  );
}

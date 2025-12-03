import "./globals.css";
import { MainHeader } from "@/components/MainHeader";
import { MainFooter } from "@/components/MainFooter";
import FloatingActions from "@/components/FloatingActions";

export const metadata = {
  title: "The Lost Tribe | Dining Ritual",
  description: "A cinematic dining ritual blending tribal warmth and modern US dining.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-fg">
        <MainHeader />
        {/* offset for fixed header */}
        <div className="pt-16 md:pt-18">{children}</div>
        <MainFooter />
        <FloatingActions />
      </body>
    </html>
  );
}

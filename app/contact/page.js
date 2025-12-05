// app/contact/page.jsx
import ContactHero from "@/components/ContactHero";
import ContactInfoRow from "@/components/ContactInfoRow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — The Lost Tribe",
  description:
    "Questions, bookings or private dining at The Lost Tribe. Send us a message, call us, or find us on the map.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#050608] text-white">
      {/* global soft glow background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.16),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(56,189,248,0.14),transparent_55%)]" />

      <ContactHero />

      {/* info cards row */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4">
          <ContactInfoRow />
        </div>
      </section>

      {/* form */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-10">
          <ContactForm />
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-white/55">
            Prefer a call? Reach us at{" "}
            <span className="font-medium">(610) 555-0123</span>.
          </p>
        </div>
      </section>
    </main>
  );
}

// app/contact/page.jsx
import ContactHero from "@/components/ContactHero";
import ContactInfoRow from "@/components/ContactInfoRow";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | The Lost Tribe",
};

export default function ContactPage() {
  return (
    <main className="bg-bg text-fg">
      <ContactHero />

      <section>
        <div className="mx-auto max-w-6xl px-4">
          <ContactInfoRow />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-8">
          <ContactForm />
          <p className="mx-auto mt-4 max-w-4xl text-center text-xs text-white/50">
            Prefer a call? Reach us at <span className="font-medium">(610) 555-0123</span>.
          </p>
        </div>
      </section>
    </main>
  );
}

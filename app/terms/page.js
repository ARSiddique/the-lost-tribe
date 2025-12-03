// app/terms/page.js
export const metadata = { title: "Terms & Conditions — The Lost Tribe" };

export default function TermsPage() {
  return (
    <main className="bg-bg text-fg">
      <section className="mx-auto max-w-3xl px-4 py-16 prose prose-invert">
        <h1>Terms & Conditions</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Use of Site</h2>
        <p>By accessing our website, you agree to these terms and applicable laws.</p>

        <h2>Reservations</h2>
        <ul>
          <li>We may require a valid email/phone for confirmation.</li>
          <li>Late arrivals may forfeit their table after a grace period.</li>
          <li>Special events may have separate policies.</li>
        </ul>

        <h2>Allergies & Dietary Needs</h2>
        <p>Please inform us in advance; we’ll do our best to accommodate.</p>

        <h2>Liability</h2>
        <p>To the extent permitted by law, we disclaim liability for indirect or consequential damages.</p>

        <h2>Changes</h2>
        <p>We may update these terms. Continued use means acceptance of changes.</p>
      </section>
    </main>
  );
}

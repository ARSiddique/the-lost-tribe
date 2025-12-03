// app/privacy/page.js
export const metadata = { title: "Privacy Policy — The Lost Tribe" };

export default function PrivacyPage() {
  return (
    <main className="bg-bg text-fg">
      <section className="mx-auto max-w-3xl px-4 py-16 prose prose-invert">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>Information We Collect</h2>
        <p>We collect information you provide (e.g., reservation details) and basic analytics data to improve our service.</p>

        <h2>How We Use Information</h2>
        <ul>
          <li>To confirm reservations and respond to inquiries</li>
          <li>To improve website performance and customer experience</li>
        </ul>

        <h2>Sharing</h2>
        <p>We do not sell your data. Limited sharing may occur with providers strictly to deliver the service (e.g., email/SMS confirmations).</p>

        <h2>Your Choices</h2>
        <p>You can request access, correction, or deletion of your personal information by contacting us.</p>

        <h2>Contact</h2>
        <p>Email: hello@losttribe.example</p>
      </section>
    </main>
  );
}

// /components/MapStrip.jsx
export default function MapStrip() {
  const query = encodeURIComponent("The Lost Tribe, 123 Your Street, Your City");
  return (
    <section className="bg-bg text-fg">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="map"
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

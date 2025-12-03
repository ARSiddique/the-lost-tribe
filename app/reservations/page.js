// app/reservations/page.jsx
import ReservationForm from "@/components/ReservationForm";

export const metadata = {
  title: "Reservations — The Lost Tribe",
  description:
    "Reserve your table at The Lost Tribe. Pick a date, time, and party size—we’ll confirm by email/SMS.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "The Lost Tribe",
  acceptsReservations: "True",
};

export default function ReservationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-background text-foreground">
        <div className="mx-auto max-w-3xl px-4 pt-16 pb-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Reserve Your Table
          </h1>
          <p className="mt-2 text-muted-foreground">
            Limited seats nightly. Pick a date and time—we’ll confirm by email/SMS.
          </p>
        </div>

        <div className="mx-auto max-w-3xl px-4 pb-20">
          <ReservationForm />
        </div>
      </section>
    </>
  );
}

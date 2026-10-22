import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import { CalendarIcon, WhatsAppIcon, Check } from "@/components/icons";

export const metadata: Metadata = {
  title: "Book an Appointment at Bloom",
  description:
    "Book your Bloom appointment in under a minute: pick a service, date and time, then confirm on WhatsApp. No advance payment — pay at the salon in Bahria Town, Lahore.",
  alternates: { canonical: `${SITE.domain}/booking/` },
  openGraph: {
    title: "Book an Appointment — Bloom Salon & Spa",
    description:
      "Pick a service, date and time, then confirm on WhatsApp. Open Tue–Sun, 11am–8pm in Bahria Town, Lahore.",
    url: `${SITE.domain}/booking/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment — Bloom Salon & Spa",
    description: "Reserve your chair in under a minute and confirm on WhatsApp.",
    images: ["/images/salon-studio.jpg"],
  },
};

const STEPS = [
  {
    title: "1. Pick your ritual",
    text: "Choose a category and service from the menu — hair, skin, nails, spa, or add a full bridal package. Prices shown are exactly what you pay at the salon.",
  },
  {
    title: "2. Choose date & time",
    text: "We are open Tuesday to Sunday, 11:00 AM to 8:00 PM, and closed on Mondays. Weekend slots fill fastest, so booking a day ahead is always wise.",
  },
  {
    title: "3. Confirm on WhatsApp",
    text: "One tap opens WhatsApp with your booking ready to send. We confirm personally, usually within minutes, and hold your chair for fifteen minutes past your slot.",
  },
];

export default function BookingPage() {
  return (
    <>
      <section className="page-hero" aria-label="Booking introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            Reserve Your Chair
          </span>
          <h1>
            Book in <em>under a minute</em>
          </h1>
          <p className="lead">
            Fill this in, tap once, and your request opens in WhatsApp —
            ready to send. We confirm every booking personally.
          </p>
        </div>
      </section>

      <BookingForm />

      <section className="section-sm" style={{ paddingTop: 0 }} aria-label="How booking works">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Simple & Personal</span>
            <h2 className="h2">
              How booking <em>works</em>
            </h2>
          </div>
          <div className="grid-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="card">
                  <div className="icon-ring">
                    {i === 1 ? <CalendarIcon size={26} /> : i === 2 ? <WhatsAppIcon size={26} /> : <Check />}
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="info-card" style={{ marginTop: 28, padding: "30px 32px" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>Good to know before you visit</h3>
              <p style={{ color: "var(--muted)" }}>
                Please arrive five minutes before your appointment so your ritual can start on time.
                Running late? Message us on WhatsApp and we will do our best to hold your chair.
                Bridal bookings are confirmed with a trial appointment first, and group bookings for
                mehndi parties can be arranged through the contact page. There is no advance payment
                for regular services — you pay at the salon by cash, bank transfer or card after your visit.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms — Bookings, Prices & Policies",
  description:
    "Bloom Salon & Spa terms: how bookings and cancellations work, pricing, bridal package conditions, gift and service policies, and use of this website.",
  alternates: { canonical: `${SITE.domain}/terms/` },
  openGraph: {
    title: "Terms of Service — Bloom Salon & Spa",
    description: "Booking, cancellation, pricing and bridal package terms for Bloom Salon & Spa, Bahria Town, Lahore.",
    url: `${SITE.domain}/terms/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary",
    title: "Terms of Service — Bloom Salon & Spa",
    description: "Booking, cancellation, pricing and bridal package terms for Bloom Salon & Spa.",
  },
};

const SECTIONS = [
  {
    h: "About these terms",
    body: [
      `These terms apply when you book or receive services at Bloom Salon & Spa, ${SITE.address}, and when you use this website. By booking an appointment you agree to the booking, cancellation and payment terms below. Nothing in these terms removes any rights you have under Pakistani consumer law.`,
    ],
  },
  {
    h: "Bookings and confirmations",
    body: [
      "Appointments can be requested through the booking form on this website, on WhatsApp, by phone or in person. A booking is confirmed only when we reply confirming your service, date and time. The booking form prepares a WhatsApp message for you; until that message is sent and we confirm, no appointment is reserved.",
      "Please arrive five minutes before your appointment. If you arrive more than fifteen minutes late, we may need to shorten or reschedule your service so the next guest is not kept waiting.",
    ],
  },
  {
    h: "Cancellations and rescheduling",
    body: [
      "Life happens — regular appointments can be cancelled or moved free of charge if you tell us at least three hours ahead on WhatsApp or by phone. Repeated late cancellations or no-shows may lead us to ask for an advance payment before confirming future bookings.",
      "Bridal packages follow their own terms below because artists, trials and products are reserved specially for your date.",
    ],
  },
  {
    h: "Prices and payment",
    body: [
      "Prices published on this website and on our in-salon menu are in Pakistani Rupees and are the prices you will pay for the services listed, unless a consultation shows your hair, skin or nails need a different treatment — in which case we will always quote and get your agreement before starting. We accept cash, bank transfer and major debit and credit cards. No advance payment is required for regular services; bridal packages may require a booking advance as explained below.",
    ],
  },
  {
    h: "Bridal packages",
    body: [
      "Bridal bookings are reserved with an advance of 30% of the package price, which secures your date, your artist and your trial appointment. The balance is due on the event day. If you cancel more than fourteen days before the event, the advance is refunded in full or can be transferred to a new date once. Inside fourteen days, the advance covers the reserved artist time and trial already provided and is not refundable, though we will always try to move your date where the calendar allows.",
      "Package contents are exactly as listed on the bridal page and in the comparison table. Add-ons requested on the day are charged at the standard menu price.",
    ],
  },
  {
    h: "Health, allergies and your safety",
    body: [
      "Please tell us about allergies, skin conditions, medication or recent treatments before your service begins — especially before colour, keratin, facials and waxing — so we can patch-test or adapt the treatment. A patch test is required at least 24 hours before first-time colour and keratin services. If our artist judges that a service would be unsafe for you, we will explain why and suggest an alternative; your safety always comes before a booking.",
    ],
  },
  {
    h: "Service satisfaction",
    body: [
      "If something about your service is not right, tell us before you leave or within 48 hours and we will fix it free of charge wherever the result differs from what was agreed in your consultation. Because hair colour, skin and nail results also depend on aftercare and previous treatments, free corrections apply to the agreed service as performed by us.",
    ],
  },
  {
    h: "Website content and advertising",
    body: [
      "The text, prices and images on this website describe Bloom's services as accurately as we can keep them; if a website price and the in-salon menu ever differ, we will honour the lower price for that visit. This website may display third-party advertising, including through Google AdSense; advertisers are responsible for their own ad content, and displaying an ad is not an endorsement by Bloom.",
    ],
  },
  {
    h: "Changes and contact",
    body: [
      `We may update these terms from time to time; the version on this page is the current one and applies to bookings made after its publication. Questions about these terms are welcome on WhatsApp at ${SITE.phoneDisplay} or in person at the salon.`,
      "Last updated: 20 October 2026.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" aria-label="Terms of service introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            The Fine Print, Fairly
          </span>
          <h1>
            Terms of <em>Service</em>
          </h1>
          <p className="lead">
            How bookings, cancellations, prices and bridal packages work at
            Bloom — clear and fair, with no surprises on either side.
          </p>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Terms of service details">
        <div className="container" style={{ maxWidth: 820 }}>
          {SECTIONS.map((s) => (
            <Reveal key={s.h}>
              <div className="info-card" style={{ padding: "30px 32px", marginBottom: 18, height: "auto" }}>
                <h2 style={{ fontSize: "1.4rem", marginBottom: 10 }}>{s.h}</h2>
                {s.body.map((para, i) => (
                  <p key={i} style={{ color: "var(--muted)", marginBottom: i < s.body.length - 1 ? 12 : 0 }}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

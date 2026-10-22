import type { Metadata } from "next";
import { SITE, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading, CtaBand } from "@/components/ui";
import { PinIcon, PhoneIcon, CalendarIcon, WhatsAppIcon, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Visit Us",
  description:
    "Visit Bloom Salon & Spa: Main Boulevard, Sector C, Bahria Town, Lahore. Open Tue–Sun 11am–8pm, closed Mondays. Call or WhatsApp us to book.",
  alternates: { canonical: `${SITE.domain}/contact/` },
  openGraph: {
    title: "Contact & Visit Us",
    description:
      "Main Boulevard, Bahria Town, Lahore. Open Tue–Sun 11am–8pm, closed Mondays.",
    url: `${SITE.domain}/contact/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Visit Us",
    description: "Main Boulevard, Bahria Town, Lahore. Open Tue–Sun 11am–8pm.",
    images: ["/images/salon-studio.jpg"],
  },
};

const HOURS = [
  { day: "Tuesday – Friday", time: "11:00 AM – 8:00 PM" },
  { day: "Saturday – Sunday", time: "11:00 AM – 8:00 PM" },
  { day: "Monday", time: "Closed — our rest day" },
];

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-label="Contact introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            Say Hello
          </span>
          <h1>
            Come, sit, <em>glow</em>
          </h1>
          <p className="lead">
            We&rsquo;re easy to find and easier to talk to. Walk in, call, or
            tap below — the kettle (and the gossip) is always on.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Contact details">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Find Us"
            title={<>Visit the <em>salon</em></>}
          />
          <div className="contact-grid">
            <Reveal>
              <div className="info-card">
                <div className="info-row">
                  <span className="icon-ring">
                    <PinIcon />
                  </span>
                  <div>
                    <h4>Address</h4>
                    <p>{SITE.address}</p>
                  </div>
                </div>
                <div className="info-row">
                  <span className="icon-ring">
                    <PhoneIcon />
                  </span>
                  <div>
                    <h4>Phone & WhatsApp</h4>
                    <p>
                      <a href={SITE.whatsappUrl} target="_blank" rel="noopener">
                        {SITE.phoneDisplay}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="info-row">
                  <span className="icon-ring">
                    <CalendarIcon size={21} />
                  </span>
                  <div>
                    <h4>Hours</h4>
                    <p>{SITE.hoursDetail}</p>
                    <p>{SITE.closedDay}</p>
                  </div>
                </div>
                <div style={{ marginTop: 24 }}>
                  <a
                    className="btn btn-whatsapp"
                    style={{ width: "100%" }}
                    href={waLink(`Assalam-o-Alaikum ${SITE.name}! I have a question.`)}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon size={20} />
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="info-card">
                <h3 style={{ fontSize: "1.5rem", marginBottom: 18 }}>Opening hours</h3>
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "14px 0",
                      borderBottom: "1px dashed var(--line-soft)",
                      fontSize: "0.96rem",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>{h.day}</span>
                    <span style={{ color: "var(--muted)", textAlign: "right" }}>{h.time}</span>
                  </div>
                ))}
                <p style={{ color: "var(--muted)", fontSize: "0.92rem", marginTop: 20 }}>
                  Walk-ins are welcome when chairs are free — but weekends fill
                  fast, so booking ahead is always the safer glow.
                </p>
                <div style={{ marginTop: 20 }}>
                  <a className="btn btn-rose btn-sm" href="/booking/">
                    Book an appointment <ArrowRight />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }} aria-label="Getting here">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <div className="info-card" style={{ padding: "30px 32px" }}>
              <h2 style={{ fontSize: "1.4rem", marginBottom: 10 }}>Finding us &amp; parking</h2>
              <p style={{ color: "var(--muted)", marginBottom: 12 }}>
                You will find Bloom on Main Boulevard in Sector C, Bahria Town — look for the
                rose-gold Bloom sign between the Sector C commercial shops. Street parking is
                available right outside, and the salon entrance is step-free, so prams and
                wheelchairs are welcome. Most guests from inside Bahria Town reach us in under
                ten minutes; from DHA and Johar Town, allow around twenty-five minutes outside
                rush hour.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Coming for a bridal trial or a long spa ritual? Message us the day before and we
                will keep your artist, your room and a welcome cup of rose tea ready for the
                moment you walk in — no waiting at the desk, no rush at the chair.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Questions before you <em>book?</em></>}
        text="Ask us anything — services, prices, bridal dates, parking. We reply fast, usually within minutes."
        whatsappText={`Assalam-o-Alaikum ${SITE.name}! I have a question.`}
      />
    </>
  );
}

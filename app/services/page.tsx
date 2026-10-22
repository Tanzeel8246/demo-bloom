import type { Metadata } from "next";
import { SITE, FAQS, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { JsonLd } from "@/components/ui";
import { ServiceAccordion, FaqList } from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Services & Prices — The Full Menu",
  description:
    "Explore Bloom's full menu in Bahria Town, Lahore: haircuts, balayage, keratin, HydraFacials, gel nails and spa rituals with honest prices and senior artists.",
  alternates: { canonical: `${SITE.domain}/services/` },
  openGraph: {
    title: "Services & Prices — Bloom Salon & Spa",
    description:
      "Hair, skin, nails and spa rituals with honest prices — haircuts from Rs 2,500, HydraFacial Rs 12,000, aromatherapy Rs 9,000.",
    url: `${SITE.domain}/services/`,
    type: "website",
    images: [{ url: "/images/spa-relax.jpg", alt: "Rolled towel, candle, tulips and spa lotion at Bloom Salon and Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Prices — Bloom Salon & Spa",
    description: "Hair, skin, nails and spa rituals with honest prices in Bahria Town, Lahore.",
    images: ["/images/spa-relax.jpg"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <section className="page-hero" aria-label="Services introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            The Full Menu
          </span>
          <h1>
            Rituals for <em>every mood</em>
          </h1>
          <p className="lead">
            Honest prices, senior artists, original products — and all the time
            in the world for you. Tap a category to explore.
          </p>
        </div>
      </section>

      <div className="container" style={{ paddingBottom: 40 }}>
        <Reveal>
          <div className="about-photo" style={{ aspectRatio: "21 / 9" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/spa-relax.jpg" alt="Rolled spa towels, a lit candle and treatment oil ready for a ritual at Bloom" loading="lazy" width={1200} height={514} />
          </div>
        </Reveal>
      </div>

      <section className="section-sm" style={{ paddingTop: 0 }} aria-label="Service categories">
        <div className="container">
          <Reveal>
            <ServiceAccordion />
          </Reveal>
        </div>
      </section>

      <section className="section" aria-label="Frequently asked questions">
        <div className="container">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Good to Know</span>
              <h2 className="h2">
                Questions, <em>answered</em>
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <FaqList />
          </Reveal>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="cta-band">
              <h2>
                Found <em>your ritual?</em>
              </h2>
              <p>
                Reserve your chair in under a minute — confirm instantly on
                WhatsApp, no advance payment needed.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(`Assalam-o-Alaikum! I'd like to book a service at ${SITE.name}.`)}
                  target="_blank"
                  rel="noopener"
                >
                  Book on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

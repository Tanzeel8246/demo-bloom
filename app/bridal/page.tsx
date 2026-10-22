import type { Metadata } from "next";
import Link from "next/link";
import {
  SITE, BRIDAL_PACKAGES, BRIDAL_COMPARISON, waLink,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading, CtaBand, JsonLd } from "@/components/ui";
import { Check, RingIcon, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Bridal Packages in Lahore",
  description:
    "Couture bridal packages in Lahore: Silver Rs 45,000, Gold Rs 85,000, Platinum Rs 140,000 — HD makeup, trials and pre-bridal glow sessions. Reserve on WhatsApp.",
  alternates: { canonical: `${SITE.domain}/bridal/` },
  openGraph: {
    title: "Bridal Packages — Bloom Salon & Spa",
    description:
      "Silver Rs 45,000 · Gold Rs 85,000 · Platinum Rs 140,000. Couture bridal makeup, trials and pre-bridal rituals.",
    url: `${SITE.domain}/bridal/`,
    type: "website",
    images: [{ url: "/images/bridal-kit.jpg", alt: "Bridal makeup essentials with blush roses at Bloom Salon and Spa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridal Packages — Bloom Salon & Spa",
    description: "Silver Rs 45,000 · Gold Rs 85,000 · Platinum Rs 140,000.",
  },
};

const BRIDAL_FAQS = [
  {
    q: "How early should I book my bridal package?",
    a: "We recommend reserving 4–6 weeks before your event. That gives us time for your trial and pre-bridal glow sessions. Peak wedding season (November–February) books out fastest.",
  },
  {
    q: "Is a makeup trial included?",
    a: "Yes — a full trial is included in Gold and Platinum, and can be added to Silver. You'll meet your artist, test the complete look, and make tweaks until it's exactly you.",
  },
  {
    q: "Do you travel to venues for bridal makeup?",
    a: "Yes, our senior artists travel across Lahore for Gold and Platinum brides. Travel within Bahria Town is complimentary; a small travel fee applies elsewhere.",
  },
];

const bridalFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BRIDAL_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function BridalPage() {
  return (
    <>
      <JsonLd data={bridalFaqJsonLd} />

      <section className="page-hero" aria-label="Bridal introduction">
        <div className="hero-bg" aria-hidden="true">
          <div className="bloom-orb bloom-orb-1" />
          <div className="bloom-orb bloom-orb-2" />
        </div>
        <div className="container" style={{ position: "relative" }}>
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            The Bridal Atelier
          </span>
          <h1>
            The day all eyes are on you — <em>own it</em>
          </h1>
          <p className="lead">
            Couture bridal artistry by senior artists: flawless HD and airbrush
            makeup, dreamy hairstyling, pre-bridal glow rituals and touch-ups
            that last till the last dance.
          </p>
        </div>
      </section>

      {/* ------------------------- package cards ------------------------- */}
      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Bridal packages">
        <div className="container">
          <div className="package-grid">
            {BRIDAL_PACKAGES.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) as 0 | 1 | 2}>
                <div className={`package-card ${p.featured ? "featured" : ""}`}>
                  {p.featured && (
                    <span className="package-badge">Most Booked</span>
                  )}
                  <div className="pkg-name">{p.name}</div>
                  <div className="pkg-tagline">{p.tagline}</div>
                  <div className="pkg-price">
                    Rs {p.price.toLocaleString("en-PK")}{" "}
                    <small>/ package</small>
                  </div>
                  <ul>
                    {p.perks.map((perk) => (
                      <li key={perk}>
                        <Check />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <a
                    className={`btn ${p.featured ? "btn-rose" : "btn-outline"} btn-lg`}
                    style={{ width: "100%" }}
                    href={waLink(
                      `Assalam-o-Alaikum! I'd like to reserve the *${p.name}* bridal package (Rs ${p.price.toLocaleString("en-PK")}) at ${SITE.name}.`
                    )}
                    target="_blank"
                    rel="noopener"
                  >
                    <WhatsAppIcon size={20} />
                    Reserve {p.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- bridal showcase ------------------------ */}
      <section className="section-sm" aria-label="Bridal showcase">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Inside the Atelier"
            title={<>Prepared for <em>your day</em></>}
            lead="The kit, the gown and the table — every detail prepared before you arrive, so your morning stays calm and unhurried."
          />
          <div className="bridal-strip">
            <Reveal>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bridal-kit.jpg" alt="Bridal makeup essentials arranged with blush roses in the Bloom atelier" loading="lazy" width={800} height={1000} />
              </figure>
            </Reveal>
            <Reveal delay={1}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/bride-solo.jpg" alt="Couture bridal gown with lace veil prepared in the Bloom bridal suite" loading="lazy" width={800} height={1000} />
              </figure>
            </Reveal>
            <Reveal delay={2}>
              <figure>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/wedding-table.jpg" alt="Wedding celebration table with fresh roses prepared for a Bloom bride" loading="lazy" width={800} height={1000} />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------ comparison table ------------------------ */}
      <section className="section" aria-label="Package comparison">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Side by Side"
            title={<>Compare every <em>detail</em></>}
            lead="No fine print, no surprises — just exactly what each package includes."
          />
          <Reveal>
            <div className="compare-wrap">
              <table className="compare">
                <thead>
                  <tr>
                    <th scope="col">What&rsquo;s included</th>
                    <th scope="col">Silver</th>
                    <th scope="col" className="hl">
                      Gold · Most Booked
                    </th>
                    <th scope="col">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {BRIDAL_COMPARISON.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td>{row.silver === "—" ? <span aria-label="Not included">—</span> : row.silver}</td>
                      <td className="hl yes">{row.gold}</td>
                      <td>{row.platinum}</td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Price</th>
                    <td>Rs 45,000</td>
                    <td className="hl yes">Rs 85,000</td>
                    <td>Rs 140,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link className="btn btn-ghost" href="/booking/">
                <RingIcon size={20} />
                Book a bridal consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container">
        <div className="divider" aria-hidden="true">
          <i />
        </div>
      </div>

      {/* ----------------------------- bridal faq -------------------------- */}
      <section className="section" aria-label="Bridal questions">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeading
            center
            eyebrow="Before You Ask"
            title={<>Bridal <em>questions</em></>}
          />
          <div className="accordion">
            {BRIDAL_FAQS.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-card" style={{ padding: "30px 32px" }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{f.q}</h3>
                  <p style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Let&rsquo;s plan <em>your look</em></>}
        text="Tell us your date on WhatsApp — we'll hold it while you decide, and schedule your trial whenever you're ready."
        whatsappText={`Assalam-o-Alaikum! I'd like to discuss a bridal package at ${SITE.name}. My event date is: `}
        secondaryHref="/contact/"
        secondaryLabel="Visit the salon"
      />
    </>
  );
}

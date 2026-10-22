import type { Metadata } from "next";
import Link from "next/link";
import { SITE, GALLERY_TILES, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";
import { ArrowRight, WhatsAppIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Gallery — The Lookbook",
  description:
    "Peek inside Bloom's lookbook in Bahria Town, Lahore: the styling studio, bridal kit, lacquer shelf, serum rituals and the candle-lit spa room.",
  alternates: { canonical: `${SITE.domain}/gallery/` },
  openGraph: {
    title: "Gallery — Bloom Salon & Spa",
    description: "A lookbook of Bloom favourites: hair, bridal, nails, skin and spa.",
    url: `${SITE.domain}/gallery/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Bloom Salon & Spa",
    description: "A lookbook of Bloom favourites: hair, bridal, nails, skin and spa.",
    images: ["/images/salon-studio.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <>
      <section className="page-hero" aria-label="Gallery introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            The Lookbook
          </span>
          <h1>
            Proof, in <em>petals & gloss</em>
          </h1>
          <p className="lead">
            The rooms, rituals and details behind every appointment — a look
            inside the studio, the atelier and the spa room before you visit.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Gallery">
        <div className="container">
          <div className="gallery-grid">
            {GALLERY_TILES.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) as 0 | 1 | 2}>
                <figure className="g-tile" style={{ margin: 0 }}>
                  <img className="g-photo" src={t.image} alt={t.imageAlt} loading="lazy" width={800} height={1000} />
                  <figcaption className="g-cap">
                    <span className="g-tag">{t.tag}</span>
                    <h3>{t.title}</h3>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <p className="lead" style={{ margin: "0 auto 26px" }}>
                Love a look? Show us the tile when you book — we&rsquo;ll
                recreate it, tailored to you.
              </p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <a
                  className="btn btn-whatsapp btn-lg"
                  href={waLink(`Assalam-o-Alaikum! I saw a look in the ${SITE.name} gallery and I'd like to book it.`)}
                  target="_blank"
                  rel="noopener"
                >
                  <WhatsAppIcon size={22} />
                  Book this look
                </a>
                <Link className="btn btn-outline btn-lg" href="/booking/">
                  Booking form <ArrowRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }} aria-label="About the lookbook">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Before You Visit"
            title={<>What you see is <em>what awaits</em></>}
            lead="Every corner in this lookbook is a real part of a Bloom visit — here is how they fit together on the day."
          />
          <div className="grid-3">
            <Reveal>
              <div className="card">
                <h3>The studio floor</h3>
                <p>
                  Hair appointments happen in our light-filled studio: wide mirrors,
                  unhurried chairs and shelves of original colour and care products
                  your stylist will talk you through before anything begins.
                </p>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="card">
                <h3>The bridal atelier</h3>
                <p>
                  Brides prepare in a private suite where the kit is laid out in
                  advance — brushes, palettes and lashes matched to your trial look,
                  with your gown steamed and waiting nearby.
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="card">
                <h3>The spa room</h3>
                <p>
                  Behind a closed door, the spa room stays candle-lit and quiet:
                  fresh towels for every guest, a stone soaking bath and oils
                  blended for the ritual you have chosen.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="info-card" style={{ marginTop: 28, padding: "30px 32px" }}>
              <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>A note on our photos</h3>
              <p style={{ color: "var(--muted)" }}>
                We photograph our rooms, tools and products rather than our guests, because your
                visit to Bloom is private. When you book a look from this page, simply show us the
                tile — your artist will recreate the style for you and talk through how it will be
                adapted to your hair, skin or nails before the appointment begins.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

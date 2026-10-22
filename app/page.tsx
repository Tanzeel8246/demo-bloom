import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICE_CATEGORIES, MARQUEE_ITEMS, GALLERY_TILES, FAQS, waLink } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading, CtaBand } from "@/components/ui";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import {
  ScissorsIcon, FacialIcon, NailIcon, SpaIcon, RingIcon,
  ArrowRight, StarIcon, CalendarIcon, PinIcon, Sparkle, WhatsAppIcon, Check,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Lahore",
  description:
    "Bloom Salon & Spa in Bahria Town, Lahore: luxury hair styling, glow facials, gel nails, spa rituals and bridal packages. Book on WhatsApp today.",
  alternates: { canonical: `${SITE.domain}/` },
  openGraph: {
    title: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Bahria Town, Lahore",
    description:
      "Luxury hair, skin, nails and spa rituals — plus couture bridal packages. Book on WhatsApp.",
    url: `${SITE.domain}/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Lahore",
    description: "Luxury hair, skin, nails and spa rituals — plus couture bridal packages.",
    images: ["/images/salon-studio.jpg"],
  },
};

const CATEGORY_ICONS = [ScissorsIcon, FacialIcon, NailIcon, SpaIcon];

const TRUST_ITEMS = [
  { num: "2,000+", label: "Happy clients pampered in Bahria Town" },
  { num: "4.9 / 5", label: "Average rating across 480+ reviews" },
  { num: "12", label: "Senior artists, stylists & therapists" },
  { num: "100%", label: "Original MAC, Dior & L'Oréal products" },
];

const ABOUT_POINTS = [
  "Senior artists only — no trainees practising on your big day",
  "Private bridal suite and a separate candle-lit spa room",
  "Sterilised tools, fresh towels and single-use nail files, always",
  "Honest menu pricing — the price you see is the price you pay",
];

export default function Home() {
  return (
    <>
      {/* ------------------------------ hero ------------------------------ */}
      <section className="hero" aria-label="Introduction">
        <div className="hero-bg" aria-hidden="true">
          <div className="bloom-orb bloom-orb-1" />
          <div className="bloom-orb bloom-orb-2" />
        </div>
        <div className="container hero-inner">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            Bahria Town · Lahore
          </span>
          <h1 className="hero-title">
            Where every visit feels like <em>a little celebration</em> of you
          </h1>
          <p className="hero-sub">
            Hair, skin, nails and spa — crafted with love by senior artists,
            original products and an unhurried, candle-lit calm.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-rose btn-lg" href="/booking/">
              <CalendarIcon size={20} />
              Book an Appointment
            </Link>
            <a
              className="btn btn-whatsapp btn-lg"
              href={waLink(`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`)}
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon size={22} />
              WhatsApp Us
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta-item">
              <StarIcon />
              Loved by 2,000+ happy clients
            </span>
            <span className="hero-meta-item">
              <PinIcon size={18} />
              {SITE.addressShort}
            </span>
            <span className="hero-meta-item">
              <Sparkle size={16} />
              Original premium products
            </span>
          </div>
          <figure className="hero-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/salon-studio.jpg"
              alt="Inside Bloom Salon and Spa — styling chairs, round mirrors and shelves of original products"
              width={1200}
              height={675}
            />
          </figure>
        </div>
      </section>

      {/* ---------------------------- marquee ---------------------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      {/* --------------------------- trust strip -------------------------- */}
      <section className="section-sm" aria-label="Why clients trust Bloom">
        <div className="container">
          <div className="trust-grid">
            {TRUST_ITEMS.map((item, i) => (
              <Reveal key={item.num} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="trust-item">
                  <div className="trust-num">{item.num}</div>
                  <p>{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------- services preview ----------------------- */}
      <section className="section" aria-label="Our services">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Our Rituals"
            title={<>Care, crafted <em>around you</em></>}
            lead="Four little worlds under one roof — each with its own artists, its own calm, and its own way of making you glow."
          />
          <div className="grid-4">
            {SERVICE_CATEGORIES.map((c, i) => {
              const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
              return (
                <Reveal key={c.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="card photo-card">
                    <div className="photo-frame">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image} alt={c.imageAlt} loading="lazy" width={800} height={600} />
                    </div>
                    <div className="icon-ring">
                      <Icon />
                    </div>
                    <h3>{c.title}</h3>
                    <p>{c.blurb}</p>
                    <p style={{ marginTop: 12, fontSize: "0.86rem", color: "var(--muted)" }}>
                      {c.items.length} rituals · from Rs {Math.min(...c.items.map((x) => x.price)).toLocaleString("en-PK")}
                    </p>
                    <Link className="card-link" href="/services/">
                      View menu <ArrowRight />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* --------------------------- bridal banner ------------------------ */}
      <section className="section-sm" aria-label="Bridal packages">
        <div className="container">
          <Reveal>
            <div className="bridal-banner">
              <div className="ring-deco" aria-hidden="true" />
              <div className="bridal-split">
                <div>
                  <span className="eyebrow">The Bridal Atelier</span>
                  <h2>
                    Your big day deserves <em>its own kind of glow</em>
                  </h2>
                  <p>
                    Couture bridal packages from Rs 45,000 — HD and airbrush makeup,
                    hairstyling, draping, trials and photography-day touch-ups,
                    all by our senior bridal artists.
                  </p>
                  <div className="btn-row">
                    <Link className="btn btn-rose btn-lg" href="/bridal/">
                      <RingIcon size={20} />
                      Explore Bridal Packages
                    </Link>
                    <a
                      className="btn btn-outline btn-lg"
                      href={waLink(`Assalam-o-Alaikum! I'd like to reserve a bridal package at ${SITE.name}.`)}
                      target="_blank"
                      rel="noopener"
                    >
                      Reserve on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="bridal-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/bride-solo.jpg"
                    alt="A couture bridal gown with lace veil prepared in the Bloom bridal suite"
                    loading="lazy"
                    width={800}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ about ------------------------------ */}
      <section className="section" aria-label="About Bloom Salon and Spa">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div className="about-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/spa-bath.jpg"
                  alt="The Bloom spa room in Bahria Town — a stone soaking bath, fresh towels and soft natural light"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Inside Bloom"
                title={<>A calm little world on <em>Main Boulevard</em></>}
                lead="Since our first chair opened in Sector C, Bloom has been Bahria Town's quiet escape — soft music, rose tea on arrival, and artists who remember exactly how you like your balayage."
              />
              <ul className="about-points">
                {ABOUT_POINTS.map((point) => (
                  <li key={point}>
                    <Check />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn btn-rose" href="/contact/">
                  Visit the Salon <ArrowRight />
                </Link>
                <Link className="btn btn-ghost" href="/gallery/">
                  See the Lookbook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------- gallery strip ------------------------ */}
      <section className="section" aria-label="Gallery preview">
        <div className="container">
          <SectionHeading
            eyebrow="The Lookbook"
            title={<>A few <em>favourites</em> from our chairs</>}
            lead="The rooms, rituals and little details our guests love most — step into the full gallery for more."
          />
          <div className="grid-4">
            {GALLERY_TILES.slice(0, 4).map((t, i) => (
              <Reveal key={t.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="g-tile">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="g-photo" src={t.image} alt={t.imageAlt} loading="lazy" width={800} height={1000} />
                  <div className="g-cap">
                    <span className="g-tag">{t.tag}</span>
                    <h3>{t.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link className="btn btn-ghost" href="/gallery/">
                View the full gallery <ArrowRight />
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

      {/* --------------------------- testimonials ------------------------- */}
      <section className="section" aria-label="Client love">
        <div className="container">
          <SectionHeading
            center
            eyebrow="Client Love"
            title={<>Words that make <em>our day</em></>}
          />
          <Reveal>
            <TestimonialsCarousel />
          </Reveal>
        </div>
      </section>

      {/* -------------------------------- FAQ ------------------------------- */}
      <section className="section" aria-label="Frequently asked questions">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeading
            center
            eyebrow="Good to Know"
            title={<>Questions, <em>answered</em></>}
            lead="Everything brides and first-time guests usually ask us — the full list lives on our services page."
          />
          <div className="accordion">
            {FAQS.slice(0, 4).map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) as 0 | 1 | 2}>
                <div className="info-card" style={{ padding: "30px 32px", marginBottom: 18 }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{f.q}</h3>
                  <p style={{ color: "var(--muted)" }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link className="btn btn-ghost" href="/services/">
                See all questions <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------- CTA ------------------------------ */}
      <CtaBand
        title={<>Your chair is <em>waiting</em></>}
        text="Pick your ritual, choose a time, and confirm in one tap on WhatsApp. We can't wait to pamper you."
        whatsappText={`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`}
        secondaryHref="/booking/"
        secondaryLabel="Use the booking form"
      />
    </>
  );
}

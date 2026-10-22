import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { SectionHeading, CtaBand } from "@/components/ui";
import { Check, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Bloom — Our Story & Values",
  description:
    "Meet Bloom Salon & Spa in Bahria Town, Lahore: senior artists, original premium products, a private bridal suite and a candle-lit spa room. Our story and values.",
  alternates: { canonical: `${SITE.domain}/about/` },
  openGraph: {
    title: "About Bloom — Bloom Salon & Spa",
    description:
      "Senior artists, original products and unhurried calm in Bahria Town, Lahore — the story behind Bloom Salon & Spa.",
    url: `${SITE.domain}/about/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Bloom — Bloom Salon & Spa",
    description: "The story, team and values behind Bloom Salon & Spa, Bahria Town, Lahore.",
    images: ["/images/salon-studio.jpg"],
  },
};

const VALUES = [
  {
    title: "Senior hands only",
    text: "Every chair at Bloom is staffed by an experienced artist or therapist. Trainees never practise on paying guests — the hands that greet you are the hands that have done this a thousand times.",
  },
  {
    title: "Original products, always",
    text: "Our shelves carry sealed, original products from MAC, Huda Beauty, Dior, Charlotte Tilbury and L'Oréal Professionnel. If a product's seal is broken before it should be, it never touches a guest.",
  },
  {
    title: "Hygiene without compromise",
    text: "Tools are sterilised after every guest, towels are freshly laundered for each appointment, and nail files are single-use. Clean is not a feature at Bloom — it is the foundation.",
  },
  {
    title: "Honest, printed prices",
    text: "The menu price is the final price. Consultations are free, quotes are given before work begins, and nothing is ever added to your bill without your agreement first.",
  },
  {
    title: "Privacy & comfort",
    text: "A private bridal suite, a separate candle-lit spa room and appointment spacing that avoids crowding mean your visit stays calm, unhurried and entirely yours.",
  },
  {
    title: "Time respected",
    text: "Appointments start on time and are never rushed. If we are ever running behind, we tell you before you arrive — your hour with us is protected, not squeezed.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-label="About introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            Our Story
          </span>
          <h1>
            A calm little world, <em>built with care</em>
          </h1>
          <p className="lead">
            Bloom began with a single chair on Main Boulevard — and a simple
            promise: salon care the way it should feel. Unhurried, honest and
            genuinely kind.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Our story in detail">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <div className="about-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/salon-studio.jpg"
                  alt="Bloom Salon styling studio in Bahria Town — styling chairs, wide mirrors and product shelves"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
              </div>
            </Reveal>
            <div>
              <SectionHeading
                eyebrow="Since Our First Chair"
                title={<>How Bloom <em>grew</em></>}
              />
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                When Bloom Salon &amp; Spa opened in Sector C, Bahria Town, the idea was
                deliberately small: a handful of chairs, senior artists only, and enough
                time booked around every guest that nobody ever felt hurried out of the
                chair. Word travelled the way it always does in Bahria Town — one happy
                guest telling a sister, a friend, a colleague — and the little salon grew.
              </p>
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>
                Today Bloom is home to twelve senior artists, stylists and therapists
                across four dedicated spaces: a light-filled hair studio, a skin and
                facial room, a nail bar, and a candle-lit spa room kept deliberately
                quiet. Our bridal atelier prepares brides from across Lahore, with trials,
                pre-bridal glow programmes and photography-day touch-ups planned around
                each family&apos;s celebrations.
              </p>
              <p style={{ color: "var(--muted)" }}>
                What has not changed is the promise we started with. Original products,
                printed prices, sterilised tools and artists who remember exactly how you
                like things — that is Bloom, on our first day and on every day since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Our values">
        <div className="container">
          <SectionHeading
            center
            eyebrow="What We Stand By"
            title={<>The Bloom <em>standards</em></>}
            lead="Six standards every guest can hold us to — on every visit, with every artist."
          />
          <div className="grid-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) as 0 | 1 | 2}>
                <div className="card">
                  <div className="icon-ring">
                    <Check />
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ textAlign: "center", marginTop: 44 }}>
              <Link className="btn btn-rose" href="/services/">
                See what we do <ArrowRight />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={<>Come and <em>meet us</em></>}
        text="Drop by for a free consultation, or book your first ritual on WhatsApp — the rose tea is on us."
        whatsappText={`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`}
        secondaryHref="/contact/"
        secondaryLabel="Visit the salon"
      />
    </>
  );
}

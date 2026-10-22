import type { ReactNode } from "react";
import Link from "next/link";
import { SITE, waLink } from "@/lib/site";
import Reveal from "./Reveal";
import { WhatsAppIcon, ArrowRight } from "./icons";

/** Emit JSON-LD structured data. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <Reveal>
      <div className={`section-head ${center ? "center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="h2">{title}</h2>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </Reveal>
  );
}

/** Generic conversion CTA band used at page bottoms. */
export function CtaBand({
  title,
  text,
  whatsappText,
  secondaryHref,
  secondaryLabel,
}: {
  title: ReactNode;
  text: string;
  whatsappText: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-sm">
      <div className="container">
        <Reveal>
          <div className="cta-band">
            <h2>{title}</h2>
            <p>{text}</p>
            <div className="btn-row">
              <a
                className="btn btn-whatsapp btn-lg"
                href={waLink(whatsappText)}
                target="_blank"
                rel="noopener"
              >
                <WhatsAppIcon size={22} />
                Book on WhatsApp
              </a>
              {secondaryHref && (
                <Link className="btn btn-outline btn-lg" href={secondaryHref}>
                  {secondaryLabel}
                  <ArrowRight />
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export { SITE };

import Link from "next/link";
import { SITE, NAV_LINKS, waLink } from "@/lib/site";
import { Sparkle, WhatsAppIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="nav-logo" aria-label="Bloom Salon & Spa home">
            <span className="bloom-dot" aria-hidden="true">
              <Sparkle size={15} />
            </span>
            Bloom
          </Link>
          <p>
            {SITE.tagline}. Hair, skin, nails and spa rituals in the heart of
            Bahria Town, Lahore — walk in glowing, float out radiant.
          </p>
          <a
            className="btn btn-whatsapp btn-sm"
            href={waLink(`Assalam-o-Alaikum ${SITE.name}! I have a question.`)}
            target="_blank"
            rel="noopener"
          >
            <WhatsAppIcon size={18} />
            Chat on WhatsApp
          </a>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <ul>
            <li>
              <Link href="/booking/">Book Now</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
            <li>{SITE.addressShort}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={SITE.whatsappUrl} target="_blank" rel="noopener">
                WhatsApp: {SITE.phoneDisplay}
              </a>
            </li>
            <li>{SITE.hoursDetail}</li>
            <li>{SITE.closedDay}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{" "}
            <Link href="/privacy-policy/">Privacy Policy</Link> ·{" "}
            <Link href="/terms/">Terms of Service</Link>
          </span>
          <span>
            Website by{" "}
            <a href="https://codehubb.com" target="_blank" rel="noopener">
              CodeHubb
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

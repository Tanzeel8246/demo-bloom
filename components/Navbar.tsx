"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE, waLink } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";
import { MenuIcon, CloseIcon, Sparkle, WhatsAppIcon } from "@/components/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href.replace(/\/$/, ""));
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="nav-logo" aria-label="Bloom Salon & Spa home">
          <span className="bloom-dot" aria-hidden="true">
            <Sparkle size={15} />
          </span>
          Bloom
        </Link>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="nav-cta">
          <ThemeToggle />
          <a
            className="btn btn-rose btn-sm"
            href={waLink(`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`)}
            target="_blank"
            rel="noopener"
          >
            Book Now
          </a>
          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <nav className={`mobile-menu ${open ? "open" : ""}`} aria-label="Mobile">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={isActive(l.href) ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div style={{ alignSelf: "flex-start", padding: "8px 10px" }}>
          <ThemeToggle />
        </div>
        <a
          className="btn btn-whatsapp"
          href={waLink(`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`)}
          target="_blank"
          rel="noopener"
        >
          <WhatsAppIcon size={20} />
          Book on WhatsApp
        </a>
      </nav>
    </header>
  );
}

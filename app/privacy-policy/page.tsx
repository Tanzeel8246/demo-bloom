import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy — Your Data at Bloom",
  description:
    "Bloom Salon & Spa privacy policy: what details we collect for bookings, how we use them, WhatsApp communication, cookies, advertising and your rights over your data.",
  alternates: { canonical: `${SITE.domain}/privacy-policy/` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy — Bloom Salon & Spa",
    description: "What booking details Bloom collects, how they are used, and your rights over your personal information.",
    url: `${SITE.domain}/privacy-policy/`,
    type: "website",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy — Bloom Salon & Spa",
    description: "How Bloom Salon & Spa collects, uses and protects your personal information.",
  },
};

const SECTIONS = [
  {
    h: "Who we are",
    body: [
      `Bloom Salon & Spa ("Bloom", "we", "us") is a beauty salon and spa located at ${SITE.address}. This policy explains what personal information we collect when you use this website or book with us, why we collect it, and the choices you have. If anything here is unclear, message us on WhatsApp at ${SITE.phoneDisplay} and we will explain it in plain words.`,
    ],
  },
  {
    h: "Information we collect",
    body: [
      "When you make a booking, we collect only what we need to reserve and manage your appointment: your name, your phone or WhatsApp number, the service or bridal package you choose, and your preferred date and time. If you share allergy, skin-sensitivity or health notes with us so we can treat you safely, we record those notes alongside your booking.",
      "Our booking form does not store your details on this website. When you tap confirm, the details you entered open in WhatsApp as a message composed by you, on your own device, which you choose whether to send. This website itself keeps no booking database.",
    ],
  },
  {
    h: "How we use your information",
    body: [
      "We use your booking details to confirm, remind you about, reschedule or follow up on your appointment, and to keep a simple visit history so our artists remember your preferences — for example your usual shade, cut or facial. Visit-history notes are used only to serve you better on your next visit.",
      "We never sell your personal information. We do not share your phone number or booking details with advertisers or data brokers, and we never add you to marketing lists without your clear permission.",
    ],
  },
  {
    h: "WhatsApp communication",
    body: [
      "Most booking conversations happen on WhatsApp, which is operated by Meta. Messages you send us are handled under WhatsApp's own privacy terms as well as ours. We use the conversation only to manage your booking and answer your questions. If you would rather communicate by a plain phone call, just tell us and we will happily oblige.",
    ],
  },
  {
    h: "Cookies and advertising",
    body: [
      "This website is a static site and sets no tracking cookies of its own; it only remembers your light or dark theme preference in your browser's local storage, on your device. If we run advertising on this website in future — for example through Google AdSense — the advertising provider may use cookies to serve and measure ads, including personalised ads where you have consented through that provider's own controls. Google explains how it uses data from partner sites in its own policies, and you can manage or withdraw ad personalisation at any time through Google's Ad Settings. We will update this page before any advertising goes live.",
    ],
  },
  {
    h: "How long we keep your information",
    body: [
      "Booking conversations and visit notes are kept while you remain an active guest of the salon, so we can serve you consistently. If you have not visited for a long period, or you ask us at any time, we will delete your booking details and visit notes from our records, except anything we are required to keep for ordinary business accounting.",
    ],
  },
  {
    h: "Your rights",
    body: [
      "Your information belongs to you. At any time you may ask us what details we hold about you, ask us to correct anything that is wrong, or ask us to delete your details entirely. Send your request on WhatsApp or in person at the salon and we will complete it promptly, normally within a few working days, and confirm once it is done.",
    ],
  },
  {
    h: "Children's privacy",
    body: [
      "Our services are booked by adults. We do not knowingly collect personal information from children through this website. If you believe a child has shared details with us, contact us and we will remove them.",
    ],
  },
  {
    h: "Changes to this policy",
    body: [
      "If we change how we handle personal information, we will update this page and note the new date below. The version published here is always the current one.",
      "Last updated: 20 October 2026.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero" aria-label="Privacy policy introduction">
        <div className="container">
          <span className="hero-kicker">
            <span className="spark" aria-hidden="true" />
            Your Privacy
          </span>
          <h1>
            Privacy <em>Policy</em>
          </h1>
          <p className="lead">
            What we collect, why we collect it, and the control you keep over
            your own information — written plainly, because trust matters here.
          </p>
        </div>
      </section>
      <section className="section-sm" style={{ paddingTop: 8 }} aria-label="Privacy policy details">
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

import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Marcellus } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/ui";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

const inter = Inter({ variable: "--font-body", subsets: ["latin"] });
const marcellus = Marcellus({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Lahore",
    template: "%s | Bloom Salon & Spa",
  },
  description:
    "Bloom Salon & Spa in Bahria Town, Lahore: luxury hair styling, glow facials, gel nails, spa rituals and bridal packages. Book on WhatsApp today.",
  keywords: [
    "salon Lahore",
    "beauty salon Bahria Town",
    "bridal makeup Lahore",
    "hydrafacial Lahore",
    "keratin treatment",
    "spa Lahore",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.domain,
    siteName: SITE.name,
    title: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Lahore",
    description:
      "Luxury hair, skin, nails and spa rituals — plus couture bridal packages. Book on WhatsApp.",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloom Salon & Spa — Hair, Skin, Nails & Spa in Lahore",
    description:
      "Luxury hair, skin, nails and spa rituals — plus couture bridal packages. Book on WhatsApp.",
    images: [{ url: "/images/salon-studio.jpg", alt: "Bloom Salon and Spa styling studio in Bahria Town, Lahore" }],
  },
};

const beautySalonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: SITE.name,
  slogan: SITE.tagline,
  url: SITE.domain,
  telephone: `+${SITE.whatsappNumber}`,
  priceRange: "Rs 1,500 – Rs 140,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Main Boulevard, Sector C, Bahria Town",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:00",
      closes: "20:00",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${marcellus.variable}`}
    >
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem('bloom-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='light';}})();`,
        }}
      />
      <body>
        <JsonLd data={beautySalonJsonLd} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <a
          className="wa-float"
          href={waLink(`Assalam-o-Alaikum! I'd like to book an appointment at ${SITE.name}.`)}
          target="_blank"
          rel="noopener"
          aria-label="Chat with Bloom Salon & Spa on WhatsApp"
        >
          <WhatsAppIcon size={30} />
        </a>
      </body>
    </html>
  );
}

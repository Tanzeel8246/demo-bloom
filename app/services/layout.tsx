import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Prices — Hair, Facials, Nails, Spa",
  description:
    "Bloom Salon's full menu with honest PKR prices: haircuts, balayage, keratin, signature glow facials, HydraFacial, gel nails, aromatherapy massage and more in Bahria Town, Lahore.",
  alternates: { canonical: `${SITE.domain}/services/` },
  openGraph: {
    title: "Services & Prices — Bloom Salon & Spa",
    description:
      "The full Bloom menu: hair, skin, nails and spa rituals with honest PKR prices.",
    url: `${SITE.domain}/services/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Prices — Bloom Salon & Spa",
    description: "Hair, facials, nails and spa rituals with honest PKR prices.",
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

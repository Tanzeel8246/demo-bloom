import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book an Appointment — Bloom Salon & Spa",
  description:
    "Reserve your chair at Bloom Salon & Spa, Bahria Town, Lahore: pick a service or bridal package, choose your date and time, and confirm instantly on WhatsApp.",
  alternates: { canonical: `${SITE.domain}/booking/` },
  openGraph: {
    title: "Book an Appointment — Bloom Salon & Spa",
    description: "Pick your ritual, choose a time, confirm on WhatsApp in one tap.",
    url: `${SITE.domain}/booking/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book an Appointment — Bloom Salon & Spa",
    description: "Pick your ritual, choose a time, confirm on WhatsApp in one tap.",
  },
};

export default function BookingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

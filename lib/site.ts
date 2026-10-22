/* ==========================================================================
   Bloom Salon & Spa — central site data.
   All brand names, prices, hours and addresses are FICTIONAL sample content
   for this portfolio showcase. Replace with real salon details before any
   real-world use.
   ========================================================================== */

export const SITE = {
  name: "Bloom Salon & Spa",
  shortName: "Bloom",
  tagline: "Where beauty blooms",
  domain: "https://bloom.mindcraftsai.com",
  whatsappNumber: "923023448246",
  whatsappUrl: "https://wa.me/923023448246",
  phoneDisplay: "+92 302 3448246",
  address: "Main Boulevard, Sector C, Bahria Town, Lahore",
  addressShort: "Main Boulevard, Bahria Town, Lahore",
  hours: "Tue – Sun · 11am – 8pm",
  hoursDetail: "Tuesday to Sunday, 11:00 AM – 8:00 PM",
  closedDay: "Closed on Mondays",
};

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/bridal/", label: "Bridal" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/booking/", label: "Book Now" },
  { href: "/contact/", label: "Contact" },
];

/* ------------------------------ services ------------------------------ */

export type ServiceItem = { name: string; price: number; duration: string; note?: string };
export type ServiceCategory = { id: string; title: string; blurb: string; image: string; imageAlt: string; items: ServiceItem[] };

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "hair",
    title: "Hair",
    blurb: "Cuts, colour and rituals by senior stylists — from effortless trims to full transformations.",
    image: "/images/hair-mask.jpg",
    imageAlt: "Restorative hair mask and treatment tube from the Bloom hair ritual shelf",
    items: [
      { name: "Signature Haircut", price: 2500, duration: "45 min", note: "Consultation, wash & blow-dry included" },
      { name: "Blowout & Styling", price: 3000, duration: "40 min" },
      { name: "Hair Spa Ritual", price: 6500, duration: "60 min", note: "Deep-repair mask & head massage" },
      { name: "Global Colour", price: 14000, duration: "2.5 hrs" },
      { name: "Balayage / Highlights", price: 18000, duration: "3.5 hrs", note: "Toner & gloss finish included" },
      { name: "Keratin Treatment", price: 25000, duration: "3 hrs", note: "Formaldehyde-free, lasts 3–4 months" },
    ],
  },
  {
    id: "skin",
    title: "Skin & Facials",
    blurb: "Glowing skin, gently: dermat-approved products and facials tailored to your skin type.",
    image: "/images/skincare-serum.jpg",
    imageAlt: "Golden facial serum bottle with eucalyptus on a wooden tray at Bloom",
    items: [
      { name: "Signature Glow Facial", price: 8000, duration: "60 min", note: "Our most-loved facial" },
      { name: "HydraFacial", price: 12000, duration: "75 min" },
      { name: "24K Gold Facial", price: 15000, duration: "90 min", note: "Pre-event radiance ritual" },
      { name: "Clean-Up Express", price: 4000, duration: "30 min" },
      { name: "Dermaplaning", price: 7000, duration: "45 min" },
      { name: "Full Face Threading", price: 1500, duration: "20 min" },
    ],
  },
  {
    id: "nails",
    title: "Nails",
    blurb: "Meticulous manicures, dreamy pedicures and nail art that lasts.",
    image: "/images/nail-lacquer.jpg",
    imageAlt: "Rose-pink nail lacquer bottle beside a matching lipstick at Bloom",
    items: [
      { name: "Classic Manicure", price: 2500, duration: "45 min" },
      { name: "Classic Pedicure", price: 3000, duration: "60 min" },
      { name: "Gel Manicure", price: 3500, duration: "60 min", note: "Chip-free for up to 3 weeks" },
      { name: "Acrylic Extensions", price: 7000, duration: "90 min" },
      { name: "Nail Art (per set)", price: 2000, duration: "30 min" },
    ],
  },
  {
    id: "spa",
    title: "Spa & Massage",
    blurb: "Slow down in our candle-lit spa room — aromatherapy, hot stones and deep restoration.",
    image: "/images/spa-relax.jpg",
    imageAlt: "Rolled towel, lit candle, spa lotion and fresh tulips ready for a ritual at Bloom",
    items: [
      { name: "Aromatherapy Massage", price: 9000, duration: "60 min" },
      { name: "Deep Tissue Massage", price: 10000, duration: "60 min" },
      { name: "Hot Stone Ritual", price: 14000, duration: "90 min" },
      { name: "Back & Shoulder Relief", price: 5500, duration: "30 min" },
      { name: "Couples Retreat", price: 26000, duration: "90 min", note: "Private suite for two" },
    ],
  },
];

/** Flattened for the booking form's service picker. */
export const ALL_SERVICES: { label: string; price: number }[] = SERVICE_CATEGORIES.flatMap(
  (c) => c.items.map((i) => ({ label: `${i.name} — Rs ${i.price.toLocaleString("en-PK")}`, price: i.price }))
);

/* ------------------------------- bridal ------------------------------- */

export type BridalPackage = {
  name: string;
  price: number;
  tagline: string;
  featured?: boolean;
  perks: string[];
};

export const BRIDAL_PACKAGES: BridalPackage[] = [
  {
    name: "Silver",
    price: 45000,
    tagline: "Graceful essentials for the intimate celebration",
    perks: [
      "Signature bridal makeup",
      "Hairstyling & dupatta setting",
      "Premium lashes",
      "1 pre-bridal glow facial",
    ],
  },
  {
    name: "Gold",
    price: 85000,
    tagline: "Our most-booked complete bridal experience",
    featured: true,
    perks: [
      "HD bridal makeup with airbrush finish",
      "Hairstyling with extensions & draping",
      "Full makeup trial session",
      "3-session pre-bridal glow package",
      "Photography-day touch-ups",
      "Bridal nail set",
    ],
  },
  {
    name: "Platinum",
    price: 140000,
    tagline: "The full couture bridal atelier, all eyes on you",
    perks: [
      "Luxury airbrush bridal makeup",
      "Hairstyling, extensions & styling consultant",
      "Full makeup trial + wardrobe consultation",
      "5-session pre-bridal glow package",
      "On-call touch-ups through the event",
      "Makeovers for 2 family members",
      "Bridal nail set & hand care",
    ],
  },
];

export type CompareRow = { feature: string; silver: string; gold: string; platinum: string };

export const BRIDAL_COMPARISON: CompareRow[] = [
  { feature: "Bridal makeup", silver: "Signature", gold: "HD airbrush finish", platinum: "Luxury airbrush" },
  { feature: "Hairstyling", silver: "Classic style", gold: "Style + extensions", platinum: "Style + extensions + consultant" },
  { feature: "Dupatta draping", silver: "Included", gold: "Included", platinum: "Included" },
  { feature: "Makeup trial", silver: "—", gold: "Full trial", platinum: "Trial + wardrobe consult" },
  { feature: "Pre-bridal glow sessions", silver: "1 facial", gold: "3 sessions", platinum: "5 sessions" },
  { feature: "Photography-day touch-ups", silver: "—", gold: "Included", platinum: "On-call through event" },
  { feature: "Bridal nail set", silver: "—", gold: "Included", platinum: "Included + hand care" },
  { feature: "Family makeovers", silver: "—", gold: "—", platinum: "2 included" },
];

/* ----------------------------- testimonials ---------------------------- */

export const TESTIMONIALS = [
  {
    quote:
      "I walked in nervous about my balayage and walked out feeling like the best version of myself. The stylist actually listened — rare and wonderful.",
    name: "Areeba K.",
    role: "Balayage client",
  },
  {
    quote:
      "Gold bridal package for my December wedding. The trial alone sold me — on the day, my makeup survived tears, hugs and four hours of dancing.",
    name: "Mahnoor S.",
    role: "Bridal client",
  },
  {
    quote:
      "The spa room is pure calm — dim lights, warm towels, the scent of rose. An hour of aromatherapy here resets my entire week.",
    name: "Fatima R.",
    role: "Spa regular",
  },
  {
    quote:
      "Finally a salon where gel nails actually last three weeks. My manicure is two weeks old and still flawless — I'm converted.",
    name: "Hira M.",
    role: "Nail client",
  },
];

/* --------------------------------- FAQs --------------------------------- */

export const FAQS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Walk-ins are welcome when we have space, but appointments are strongly recommended — especially on weekends, when we often book out days ahead. Booking on WhatsApp takes a minute and guarantees your slot.",
  },
  {
    q: "How early should I book bridal makeup?",
    a: "For bridal packages, we recommend booking 4–6 weeks before your event so we can schedule your trial and pre-bridal sessions comfortably. Peak wedding season (November–February) fills fastest.",
  },
  {
    q: "Do you offer bridal trials?",
    a: "Yes — a full makeup trial is included in the Gold and Platinum packages, and can be added to Silver. Trials let you meet your artist, test the look, and walk in on your big day completely confident.",
  },
  {
    q: "Do you use original, high-end products?",
    a: "Always. Our kit includes original products from brands like MAC, Huda Beauty, Dior, Charlotte Tilbury and L'Oréal Professionnel — we never compromise on what touches your skin and hair.",
  },
  {
    q: "What are your hours?",
    a: "We're open Tuesday to Sunday, 11:00 AM to 8:00 PM. Mondays are our rest day — the salon is closed.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "We accept cash, bank transfer, and all major debit and credit cards.",
  },
];

/* ------------------------------- gallery -------------------------------- */

export type GalleryTile = {
  title: string;
  tag: string;
  art: string;
  image: string;
  imageAlt: string;
};

export const GALLERY_TILES: GalleryTile[] = [
  { title: "The Hair Ritual", tag: "Hair", art: "art-1", image: "/images/hair-mask.jpg", imageAlt: "Restorative hair mask treatment from the Bloom hair studio shelf" },
  { title: "The Bridal Kit", tag: "Bridal", art: "art-2", image: "/images/bridal-kit.jpg", imageAlt: "Bridal makeup essentials arranged with blush roses and greenery" },
  { title: "Rose Lacquer", tag: "Nails", art: "art-3", image: "/images/nail-lacquer.jpg", imageAlt: "Rose-pink nail lacquer bottle beside a matching lipstick" },
  { title: "Serum Ritual", tag: "Skin", art: "art-4", image: "/images/skincare-serum.jpg", imageAlt: "Golden facial serum dropper bottle with eucalyptus leaves" },
  { title: "The Rose-Gold Shelf", tag: "Products", art: "art-5", image: "/images/rose-gold-shelf.jpg", imageAlt: "Rose-gold and blush beauty bottles arranged on a pink shelf" },
  { title: "The Soaking Room", tag: "Spa", art: "art-6", image: "/images/spa-bath.jpg", imageAlt: "Stone soaking bath with towels and palm leaves in the Bloom spa room" },
  { title: "The Studio", tag: "Salon", art: "art-7", image: "/images/salon-studio.jpg", imageAlt: "Bloom styling studio with round mirrors, styling chairs and product shelves" },
  { title: "Rich Nourishment", tag: "Skin", art: "art-8", image: "/images/skincare-cream.jpg", imageAlt: "Jar of rich nourishing body cream on a reflective surface" },
  { title: "The Makeup Atelier", tag: "Makeup", art: "art-9", image: "/images/makeup-products.jpg", imageAlt: "Professional makeup brushes and premium cosmetics from the Bloom kit" },
];

/* --------------------------------- misc --------------------------------- */

export const MARQUEE_ITEMS = [
  "Bridal Couture",
  "Balayage",
  "HydraFacial",
  "Keratin Rituals",
  "Aromatherapy",
  "Gel Nails",
  "24K Gold Facial",
  "Signature Haircuts",
];

export const TIME_SLOTS = [
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

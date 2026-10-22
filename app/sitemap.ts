import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    { path: "/bridal/", priority: 0.9 },
    { path: "/gallery/", priority: 0.8 },
    { path: "/booking/", priority: 0.9 },
    { path: "/contact/", priority: 0.8 },
    { path: "/about/", priority: 0.8 },
    { path: "/privacy-policy/", priority: 0.4 },
    { path: "/terms/", priority: 0.4 },
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: r.path === "/" ? `${SITE.domain}/` : `${SITE.domain}${r.path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}

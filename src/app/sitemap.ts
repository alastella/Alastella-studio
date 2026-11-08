import type { MetadataRoute } from "next";

// lastModified is the date the page's content last changed: bump it when the page changes,
// so search engines can trust it (a date that moves on every request gets ignored).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.alastella.com/", lastModified: new Date("2026-11-08"), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.alastella.com/about", lastModified: new Date("2026-11-08"), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://www.alastella.com/careers", lastModified: new Date("2026-11-03"), changeFrequency: "monthly", priority: 0.5 },
    { url: "https://www.alastella.com/brand", lastModified: new Date("2026-11-04"), changeFrequency: "yearly", priority: 0.4 },
    { url: "https://www.alastella.com/company", lastModified: new Date("2026-11-02"), changeFrequency: "yearly", priority: 0.4 },
    { url: "https://www.alastella.com/support", lastModified: new Date("2026-11-02"), changeFrequency: "yearly", priority: 0.4 },
    { url: "https://www.alastella.com/privacy", lastModified: new Date("2026-11-02"), changeFrequency: "yearly", priority: 0.2 },
  ];
}

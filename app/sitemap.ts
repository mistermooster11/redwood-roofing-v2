import type { MetadataRoute } from "next";

const BASE = "https://redwoodroofingpro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`,                     lastModified: new Date(), changeFrequency: "monthly",  priority: 1.0 },
    { url: `${BASE}/about-us/`,            lastModified: new Date(), changeFrequency: "yearly",   priority: 0.7 },
    { url: `${BASE}/services-page/`,       lastModified: new Date(), changeFrequency: "monthly",  priority: 0.8 },
    { url: `${BASE}/residential-roofing/`, lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE}/commercial-roofing/`,  lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE}/roof-repair/`,         lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE}/roof-replacement/`,    lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE}/roof-inspection/`,     lastModified: new Date(), changeFrequency: "monthly",  priority: 0.9 },
    { url: `${BASE}/blog/`,                lastModified: new Date(), changeFrequency: "weekly",   priority: 0.6 },
    { url: `${BASE}/faq/`,                 lastModified: new Date(), changeFrequency: "yearly",   priority: 0.6 },
    { url: `${BASE}/contact-us/`,          lastModified: new Date(), changeFrequency: "yearly",   priority: 0.8 },
  ];
}

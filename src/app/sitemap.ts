import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now },
    ...PROJECTS.map((p) => ({ url: `${SITE.url}/projects/${p.slug}`, lastModified: now })),
  ];
}

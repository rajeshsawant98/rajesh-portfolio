import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { projectData } from "@/data/data";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectData.map((p) => ({
      url: new URL(`/projects/${p.slug}`, siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
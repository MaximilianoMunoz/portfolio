import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { localePath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteConfig.url}${localePath(l)}`]));

  return locales.map((locale) => ({
    url: `${siteConfig.url}${localePath(locale)}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: locale === "es" ? 1 : 0.9,
    alternates: { languages },
  }));
}

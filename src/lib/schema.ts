import { site } from "@/lib/site";
import { localizedHref } from "@/i18n/routing";
import type { Locale } from "@/i18n/messages";

/**
 * Structured-data (JSON-LD) builders shared across the site.
 *
 * Stable @id anchors let every page reference the same Organization and
 * WebSite entities, so search / answer / generative engines can merge the
 * graph into a single, well-understood entity instead of many loose nodes.
 */

export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

/** Absolute, locale-aware URL for an internal path. */
export function absoluteUrl(path: string, locale: Locale): string {
  return `${site.url}${localizedHref(path, locale)}`;
}

const homeLabel: Record<Locale, string> = { tr: "Ana Sayfa", en: "Home" };

/**
 * The primary entity for the whole site: a Tekirdağ/Çorlu based technology
 * studio. Typed as ProfessionalService (a LocalBusiness + Organization
 * subtype) so it carries both brand and local-business signals.
 */
export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.name,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.svg`,
      contentUrl: `${site.url}/logo.svg`,
    },
    image: `${site.url}/opengraph-image`,
    email: site.email,
    telephone: "+905366722853",
    description:
      locale === "en"
        ? "VertexStarter turns companies' data into growth systems with AI, automation and data systems. A technology studio based in Çorlu, Tekirdağ."
        : site.description,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ali Paşa Mah.",
      addressLocality: "Çorlu",
      addressRegion: "Tekirdağ",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.159,
      longitude: 27.803,
    },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "AdministrativeArea", name: "Tekirdağ" },
    ],
    knowsLanguage: ["tr", "en"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+905366722853",
      email: site.email,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    },
    knowsAbout: [
      "Yapay Zeka",
      "Artificial Intelligence",
      "Otomasyon",
      "Automation",
      "Veri Sistemleri",
      "Data Systems",
      "AI Agents",
      "CRM Automation",
      "Workflow Automation",
    ],
  };
}

/** The WebSite entity, published by the Organization above. */
export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: site.name,
    inLanguage: locale === "en" ? "en" : "tr",
    publisher: { "@id": ORG_ID },
  };
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList with Home prepended automatically. Positions are 1-indexed
 * and every item resolves to an absolute, locale-aware URL.
 */
export function breadcrumbSchema(trail: Crumb[], locale: Locale) {
  const items: Crumb[] = [{ name: homeLabel[locale], path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path, locale),
    })),
  };
}

/** FAQPage — powers AEO / "People also ask" style answers. */
export function faqSchema(items: { q: string; a: string }[], locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale === "en" ? "en" : "tr",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** A single service offered by the studio, linked back to the Organization. */
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  image?: string;
  locale: Locale;
}) {
  const { name, description, path, image, locale } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    url: absoluteUrl(path, locale),
    ...(image ? { image: `${site.url}${image}` } : {}),
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "AdministrativeArea", name: "Tekirdağ" },
    ],
    inLanguage: locale === "en" ? "en" : "tr",
  };
}

/** A blog article, enriched for rich results and AI citation. */
export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  author: string;
  section?: string;
  body?: string[];
  locale: Locale;
}) {
  const { title, description, path, image, datePublished, author, section, body, locale } = opts;
  const url = absoluteUrl(path, locale);
  const wordCount = body ? body.join(" ").split(/\s+/).filter(Boolean).length : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    ...(image ? { image: [`${site.url}${image}`] } : {}),
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Organization", "@id": ORG_ID, name: author },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    ...(section ? { articleSection: section } : {}),
    ...(wordCount ? { wordCount } : {}),
    inLanguage: locale === "en" ? "en" : "tr",
  };
}

/** CollectionPage + ItemList for index pages (services, blog). */
export function itemListSchema(opts: {
  name: string;
  path: string;
  items: { name: string; path: string }[];
  locale: Locale;
}) {
  const { name, path, items, locale } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path, locale),
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: locale === "en" ? "en" : "tr",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: absoluteUrl(it.path, locale),
      })),
    },
  };
}

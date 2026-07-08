import type { Locale } from "@/i18n/messages";

/**
 * Prefixes internal paths with the locale segment.
 * TR is the default (no prefix); EN lives under /en.
 * External links, hashes, mailto/tel are left untouched.
 */
export function localizedHref(href: string, locale: Locale): string {
  if (locale !== "en") return href;
  if (!href.startsWith("/")) return href;
  if (href === "/en" || href.startsWith("/en/")) return href;
  return "/en" + (href === "/" ? "" : href);
}

/** Removes a leading /en segment, returning the locale-neutral path. */
export function neutralPath(pathname: string): string {
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname;
}

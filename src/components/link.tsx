"use client";

import NextLink from "next/link";
import type { ComponentProps } from "react";
import { useLocale } from "@/components/locale-provider";
import { localizedHref } from "@/i18n/routing";

type Props = ComponentProps<typeof NextLink>;

/** Drop-in replacement for next/link that auto-prefixes internal paths with the active locale. */
export function Link({ href, ...rest }: Props) {
  const locale = useLocale();
  const resolved = typeof href === "string" ? localizedHref(href, locale) : href;
  return <NextLink href={resolved} {...rest} />;
}

import { headers } from "next/headers";
import {
  messages,
  defaultLocale,
  type Dict,
  type Locale,
} from "@/i18n/messages";

export async function getLocale(): Promise<Locale> {
  const store = await headers();
  const value = store.get("x-locale");
  return value === "en" ? "en" : "tr";
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: messages[locale] ?? messages[defaultLocale] };
}

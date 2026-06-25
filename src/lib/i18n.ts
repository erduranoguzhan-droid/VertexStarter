import { cookies } from "next/headers";
import {
  messages,
  defaultLocale,
  type Dict,
  type Locale,
} from "@/i18n/messages";

export const LOCALE_COOKIE = "locale";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return value === "en" ? "en" : "tr";
}

export async function getDict(): Promise<{ locale: Locale; t: Dict }> {
  const locale = await getLocale();
  return { locale, t: messages[locale] ?? messages[defaultLocale] };
}

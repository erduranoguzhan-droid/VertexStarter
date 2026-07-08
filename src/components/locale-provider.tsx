"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/messages";

const LocaleContext = createContext<Locale>("tr");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export const useLocale = () => useContext(LocaleContext);

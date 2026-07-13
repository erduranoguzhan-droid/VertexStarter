import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Roboto, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { localizedHref } from "@/i18n/routing";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { LocaleProvider } from "@/components/locale-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingCta } from "@/components/floating-cta";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
});

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getDict();
  const en = locale === "en";
  const h = await headers();
  const path = h.get("x-pathname") || "/";
  const trUrl = localizedHref(path, "tr");
  const enUrl = localizedHref(path, "en");
  const title = en
    ? `${site.name} - AI, Automation and Data Systems`
    : `${site.name} - Yapay Zeka, Otomasyon ve Veri Sistemleri`;
  const description = en
    ? "VertexStarter turns companies' data into growth systems with AI, automation and data systems. A technology studio based in Corlu, Tekirdag."
    : site.description;
  const keywords = en
    ? ["AI agents", "AI automation", "data systems", "workflow automation", "CRM automation", "AI customer support", "lead generation", "VertexStarter", "Turkey"]
    : ["yapay zeka", "AI ajanları", "otomasyon", "veri sistemleri", "iş akışı otomasyonu", "CRM otomasyonu", "yapay zeka müşteri desteği", "müşteri bulma", "VertexStarter", "Çorlu", "Tekirdağ"];
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    publisher: site.name,
    keywords,
    category: "technology",
    referrer: "origin-when-cross-origin",
    formatDetection: { email: false, address: false, telephone: false },
    alternates: {
      canonical: en ? enUrl : trUrl,
      languages: { tr: trUrl, en: enUrl, "x-default": trUrl },
      types: { "application/rss+xml": `${site.url}/feed.xml` },
    },
    openGraph: {
      title,
      description,
      url: en ? enUrl : trUrl,
      siteName: site.name,
      locale: en ? "en_US" : "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#f5f4f0",
  colorScheme: "light",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale, t } = await getDict();
  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${playfair.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-dvh overflow-x-hidden">
        <LocaleProvider locale={locale}>
          <div className="grain" aria-hidden="true" />
          <Navbar dict={t.nav} locale={locale} />
          {children}
          <FloatingCta
            cta={t.nav.cta}
            whatsapp={locale === "en" ? "Message us on WhatsApp" : "WhatsApp'tan yazın"}
          />
          <CookieConsent
            text={t.cookie.text}
            accept={t.cookie.accept}
            reject={t.cookie.reject}
            more={t.cookie.more}
          />
          <Footer />
        </LocaleProvider>
        <Analytics />
        <SpeedInsights />
        <JsonLd data={[organizationSchema(locale), websiteSchema(locale)]} />
      </body>
    </html>
  );
}

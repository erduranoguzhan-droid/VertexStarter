import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const { locale } = await getDict();
  const en = locale === "en";
  const title = en
    ? `${site.name} - AI, Automation and Data Systems`
    : `${site.name} - Yapay Zeka, Otomasyon ve Veri Sistemleri`;
  const description = en
    ? "VertexStarter turns companies' data into growth systems with AI, automation and data systems. A technology studio based in Corlu, Tekirdag."
    : site.description;
  return {
    metadataBase: new URL(site.url),
    title: { default: title, template: `%s | ${site.name}` },
    description,
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      url: site.url,
      siteName: site.name,
      locale: en ? "en_US" : "tr_TR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: "+905366722853",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ali Paşa Mah.",
    addressLocality: "Çorlu",
    addressRegion: "Tekirdağ",
    addressCountry: "TR",
  },
  description: site.description,
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { locale, t } = await getDict();
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <div className="grain" aria-hidden="true" />
        <Navbar dict={t.nav} locale={locale} />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </body>
    </html>
  );
}

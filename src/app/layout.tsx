import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - Yapay Zeka, Otomasyon ve Veri Sistemleri`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "yapay zeka",
    "otomasyon",
    "veri sistemleri",
    "CRM",
    "lead yönetimi",
    "WhatsApp otomasyonu",
    "Shopify",
    "Çorlu",
    "Tekirdağ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} - Yapay Zeka, Otomasyon ve Veri Sistemleri`,
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description: site.tagline },
  robots: { index: true, follow: true },
};

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh overflow-x-hidden">
        <div className="grain" aria-hidden="true" />
        <Navbar />
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

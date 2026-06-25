import Link from "next/link";
import { site } from "@/lib/site";
import { industries } from "@/lib/industries";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="text-xl font-semibold tracking-tight">
              Vertex<span className="text-accent">Starter</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline} Yapay zeka, otomasyon ve veri sistemleriyle
              şirketinizi büyütüyoruz.
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted">
              <a
                href={site.phoneHref}
                className="block transition-colors hover:text-accent"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block transition-colors hover:text-accent"
              >
                {site.email}
              </a>
              <p>{site.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-fg">Sektörler</h4>
            <ul className="mt-5 space-y-3">
              {industries.slice(0, 6).map((i) => (
                <li key={i.slug}>
                  <Link
                    href={`/sektorler/${i.slug}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {i.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium text-fg">Kurumsal</h4>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/#hizmetler", label: "Hizmetler" },
                { href: "/#surec", label: "Süreç" },
                { href: "/#vakalar", label: "Vakalar" },
                { href: "/blog", label: "Blog" },
                { href: "/#iletisim", label: "İletişim" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-6">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

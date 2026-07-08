import { Link } from "@/components/link";
import { site } from "@/lib/site";
import { getDict } from "@/lib/i18n";
import { getIndustries } from "@/lib/industries";

export async function Footer() {
  const { locale, t } = await getDict();
  const f = t.footer;
  const industries = getIndustries(locale);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <span className="text-xl font-semibold tracking-tight">
              Vertex<span className="text-accent">Starter</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {f.tagline}
            </p>
            <div className="mt-6 space-y-1 text-sm text-muted">
              <a href={site.phoneHref} className="block transition-colors hover:text-accent">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block transition-colors hover:text-accent">
                {site.email}
              </a>
              <p>{site.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-fg">{f.industries}</h4>
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
            <h4 className="text-sm font-medium text-fg">{f.company}</h4>
            <ul className="mt-5 space-y-3">
              {f.companyLinks.map((l) => (
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

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-faint">
            © {new Date().getFullYear()} {site.name}. {f.rights}
          </p>
          <div className="flex gap-5">
            <Link
              href="/gizlilik"
              className="text-xs text-faint transition-colors hover:text-accent"
            >
              {f.legal.privacy}
            </Link>
            <Link
              href="/kosullar"
              className="text-xs text-faint transition-colors hover:text-accent"
            >
              {f.legal.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

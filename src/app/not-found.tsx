import { Link } from "@/components/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { getDict } from "@/lib/i18n";

export default async function NotFound() {
  const { t } = await getDict();
  const n = t.notFound;
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -right-40 -top-40 size-[42rem] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="mx-auto flex min-h-[78vh] max-w-3xl flex-col items-center justify-center px-5 py-32 text-center sm:px-8">
        <span className="font-mono text-sm tracking-[0.25em] text-accent">404</span>
        <h1 className="mt-5 text-5xl tracking-tight sm:text-6xl">{n.title}</h1>
        <p className="mt-5 max-w-md leading-relaxed text-muted">{n.sub}</p>
        <Link
          href="/"
          className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
        >
          <ArrowLeft
            weight="bold"
            className="size-4 transition-transform group-hover:-translate-x-0.5"
          />
          {n.home}
        </Link>
      </div>
    </main>
  );
}

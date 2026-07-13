import type { Metadata } from "next";
import { Link } from "@/components/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { JsonLd } from "@/components/json-ld";
import { postSlugs, getPost, relatedPosts } from "@/lib/blog";
import { getDict, getLocale } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const post = getPost(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { locale, t } = await getDict();
  const post = getPost(slug, locale);
  if (!post) notFound();

  const related = relatedPosts(post.slug, post.category, locale);
  const fmt = new Date(post.date).toLocaleDateString(
    locale === "en" ? "en-US" : "tr-TR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  const schema = [
    articleSchema({
      title: post.title,
      description: post.excerpt,
      path: `/blog/${post.slug}`,
      image: `/generated/${post.seed}.jpg`,
      datePublished: post.date,
      author: post.author,
      section: post.category,
      body: post.body,
      locale,
    }),
    breadcrumbSchema(
      [
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` },
      ],
      locale
    ),
  ];

  return (
    <main className="pt-16">
      <JsonLd data={schema} />
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft weight="bold" className="size-4" />
            {t.blog.back}
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs text-faint">
            <span className="font-mono tracking-wide text-accent">{post.category}</span>
            <span>{fmt}</span>
            <span>
              {post.readingMinutes} {t.blog.reading}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{post.excerpt}</p>
          <p className="mt-4 text-sm text-faint">{post.author}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card">
            <Image
              src={`/generated/${post.seed}.jpg`}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-5 sm:px-8">
          <div className="grid gap-6 text-[1.05rem] leading-relaxed text-muted">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 rounded-card bg-surface p-8 ring-line">
            <h2 className="text-xl font-semibold tracking-tight text-fg">
              {t.blog.ctaHeading}
            </h2>
            <p className="mt-2 text-sm text-muted">{t.blog.ctaSub}</p>
            <Link
              href="/#iletisim"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
            >
              {t.nav.cta}
              <ArrowUpRight weight="bold" className="size-4" />
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">{t.blog.related}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card bg-surface ring-line transition-colors hover:bg-surface-2"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={`/generated/${p.seed}.jpg`}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-xs tracking-wide text-accent">
                      {p.category}
                    </span>
                    <h3 className="mt-2 font-semibold leading-snug tracking-tight">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

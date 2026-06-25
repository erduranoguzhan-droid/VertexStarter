import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { posts, getPost, relatedPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = relatedPosts(post.slug, post.category);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <main className="pt-16">
      <article className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft weight="bold" className="size-4" />
            Tüm yazılar
          </Link>

          <div className="mt-8 flex items-center gap-3 text-xs text-faint">
            <span className="font-mono tracking-wide text-accent">
              {post.category}
            </span>
            <span>{formatDate(post.date)}</span>
            <span>{post.readingMinutes} dk okuma</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {post.excerpt}
          </p>
          <p className="mt-4 text-sm text-faint">{post.author}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/generated/${post.seed}.jpg`}
            alt={post.title}
            className="aspect-[16/9] w-full rounded-card object-cover"
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-5 sm:px-8">
          <div className="grid gap-6 text-[1.05rem] leading-relaxed text-muted">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 rounded-card bg-surface p-8 ring-line">
            <h2 className="text-xl font-semibold tracking-tight text-fg">
              Verinizi büyümeye çevirelim.
            </h2>
            <p className="mt-2 text-sm text-muted">
              Şirketinize özel bir veri ve otomasyon yol haritası çıkaralım.
            </p>
            <Link
              href="/#iletisim"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-strong"
            >
              Görüşme planla
              <ArrowUpRight weight="bold" className="size-4" />
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-line py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Benzer yazılar
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-card bg-surface ring-line transition-colors hover:bg-surface-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/generated/${p.seed}.jpg`}
                    alt={p.title}
                    loading="lazy"
                    className="h-40 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </main>
  );
}

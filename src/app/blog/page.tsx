import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { getPosts } from "@/lib/blog";
import { getDict, getLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: locale === "en" ? "Blog - Data, AI and Automation" : "Blog - Veri, Yapay Zeka ve Otomasyon",
    description:
      locale === "en"
        ? "Practical writing on data systems, automation and AI. How to build the systems that grow your company."
        : "Veri sistemleri, otomasyon ve yapay zeka üzerine pratik yazılar. Şirketinizi büyüten sistemleri nasıl kurarsınız?",
    alternates: { canonical: "/blog" },
  };
}

export default async function BlogPage() {
  const { locale, t } = await getDict();
  const posts = getPosts(locale);
  return (
    <main className="pt-16">
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            {t.blog.eyebrow}
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {t.blog.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {t.blog.sub}
          </p>
        </div>
      </section>

      <BlogIndex posts={posts} dict={t.blog} locale={locale} />
    </main>
  );
}

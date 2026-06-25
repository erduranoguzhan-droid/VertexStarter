import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog-index";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog - Veri, Yapay Zeka ve Otomasyon",
  description:
    "Veri sistemleri, otomasyon ve yapay zeka üzerine pratik yazılar. Şirketinizi büyüten sistemleri nasıl kurarsınız?",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <main className="pt-16">
      <section className="border-b border-line py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="font-mono text-xs tracking-[0.18em] text-accent">
            BLOG
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            Veriyi büyümeye çeviren fikirler.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Yapay zeka, otomasyon ve veri sistemleri üzerine uygulanabilir
            içerikler.
          </p>
        </div>
      </section>

      <BlogIndex posts={posts} />
    </main>
  );
}

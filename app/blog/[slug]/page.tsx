import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "記事が見つかりません" };
  }
  return {
    title: `${article.title}`,
    description: article.excerpt,
    keywords: ["ホームページ制作", article.category, "CalmChronicle"],
    alternates: {
      canonical: `https://calm-chronicle.vercel.app/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url: `https://calm-chronicle.vercel.app/blog/${article.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  // Related articles (same category, excluding current)
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  // JSON-LD for Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "CalmChronicle株式会社",
    },
    publisher: {
      "@type": "Organization",
      name: "CalmChronicle株式会社",
      url: "https://calm-chronicle.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://calm-chronicle.vercel.app/blog/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ paddingTop: "80px" }}>
        {/* Breadcrumb */}
        <nav
          className="py-4 border-b"
          style={{ borderColor: "#E8E4DC" }}
          aria-label="パンくずリスト"
        >
          <div className="container max-w-3xl">
            <ol className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
              <li>
                <Link href="/" className="hover:text-gray-800 transition-colors">
                  トップ
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-gray-800 transition-colors">
                  ブログ
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-800 truncate max-w-xs">{article.title}</li>
            </ol>
          </div>
        </nav>

        {/* Article */}
        <article className="py-16 md:py-24">
          <div className="container max-w-3xl">
            {/* Header */}
            <header className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-sm font-semibold px-3 py-1 rounded"
                  style={{ backgroundColor: "#F5F1EA", color: "#C8A96A" }}
                >
                  {article.category}
                </span>
                <time className="text-sm text-gray-500" dateTime={article.date}>
                  {article.date}
                </time>
              </div>
              <h1
                className="text-3xl md:text-4xl font-bold leading-tight"
                style={{ color: "#1F1F1F" }}
              >
                {article.title}
              </h1>
            </header>

            {/* Content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* CTA in article */}
            <div
              className="mt-12 p-8 rounded-lg border text-center"
              style={{ borderColor: "#E8E4DC", backgroundColor: "#F5F1EA" }}
            >
              <p className="font-bold mb-2" style={{ color: "#1F1F1F" }}>
                ホームページ制作についてお気軽にご相談ください
              </p>
              <p className="text-sm text-gray-600 mb-4">
                LINEで無料相談を受け付けています。
              </p>
              <a
                href="https://lin.ee/K5FUv9n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#C8A96A" }}
              >
                LINEで無料相談を始める
              </a>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <section
            className="py-16 border-t"
            style={{ borderColor: "#E8E4DC" }}
          >
            <div className="container max-w-3xl">
              <h2 className="text-xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
                関連記事
              </h2>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="block p-4 rounded-lg border hover:shadow-md transition-shadow"
                    style={{ borderColor: "#E8E4DC" }}
                  >
                    <p className="font-medium" style={{ color: "#1F1F1F" }}>
                      {r.title}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{r.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="py-8 border-t" style={{ borderColor: "#E8E4DC" }}>
          <div className="container max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#C8A96A" }}
            >
              ← ブログ一覧に戻る
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

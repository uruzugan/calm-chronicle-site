import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "ブログ｜ホームページ制作・AI活用・Web集客の情報",
  description:
    "ホームページ制作の費用・方法・AI活用など、個人事業主・小規模企業向けのWeb制作情報を発信しています。",
  keywords: ["ブログ", "ホームページ制作", "AI活用", "Web集客"],
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#1F1F1F" }}
            >
              ブログ
            </h1>
            <p className="text-gray-600">
              ホームページ制作・AI活用・Web集客に関する情報を発信しています。
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="space-y-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="block p-6 bg-white rounded-lg border hover:shadow-lg transition-shadow"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded"
                      style={{ backgroundColor: "#F5F1EA", color: "#C8A96A" }}
                    >
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ color: "#1F1F1F" }}
                  >
                    {article.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed">{article.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

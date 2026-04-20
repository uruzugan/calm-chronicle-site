import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "CalmChronicle｜AIを活用した月額制ホームページ制作",
  description:
    "CalmChronicleは、AIを活用した月額制ホームページ制作サービスです。初期費用0円・月額19,800円〜。個人事業主・小規模企業向けに、やさしく・安心して任せられるWeb制作を提供します。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app",
  },
};

const reasons = [
  {
    icon: "🎯",
    title: "一人ひとりの想いを\n大切に",
    description:
      "クライアントのビジネスゴールと想いを丁寧にヒアリングし 最適なHP制作を実現します",
  },
  {
    icon: "🌱",
    title: "穏やかなパートナーシップ",
    description:
      "単なるベンダーではなく あなたのビジネスの成長を一緒に支えるパートナーとして 長期的な関係を築きます",
  },
  {
    icon: "🤖",
    title: "AIの力で効率的に",
    description:
      "AIを活用することで 制作効率を高め スピーディーで高品質なHP制作を実現します",
  },
];

const steps = [
  { number: "1", title: "ヒアリング", description: "ビジネス目標と課題を詳しくお伺いします" },
  { number: "2", title: "提案・設計", description: "最適なソリューションを提案します" },
  { number: "3", title: "実装", description: "高品質な実装を行います" },
  { number: "4", title: "運用サポート", description: "プランに応じたサポート" },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "カームクロニクル株式会社",
  description: "AIを活用した月額制ホームページ制作サービス",
  url: "https://calm-chronicle.vercel.app",
  address: {
    "@type": "PostalAddress",
    streetAddress: "西五反田一丁目26番2号 五反田サンハイツ911",
    addressLocality: "品川区",
    addressRegion: "東京都",
    postalCode: "141-0031",
    addressCountry: "JP",
  },
  priceRange: "¥19,800〜/月",
  serviceType: "ホームページ制作",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "CalmChronicle",
  url: "https://calm-chronicle.vercel.app",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://calm-chronicle.vercel.app/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-white relative overflow-hidden">
          <div className="container max-w-4xl">
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              AIのチカラで、
              <br />
              物語をかたちに。
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              一人ひとりのアイデアをAIで実現し、
              <br />
              未来へ繫がる発信を支えます。
            </p>
            <a
              href="https://lin.ee/K5FUv9n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
            >
              LINEで相談する
            </a>
          </div>
        </section>

        {/* Reasons */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-4xl">
            <h2
              className="text-4xl font-bold text-center mb-16"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              選ばれる理由
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reasons.map((r) => (
                <div
                  key={r.title}
                  className="bg-white text-center p-8 rounded-lg border h-full"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div className="text-5xl mb-4">{r.icon}</div>
                  <h3 className="text-lg font-bold mb-3 whitespace-pre-line" style={{ color: "#1F1F1F", wordBreak: "keep-all", overflowWrap: "break-word" }}>
                    {r.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ wordBreak: "keep-all", overflowWrap: "break-word" }}>{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-4xl">
            <h2
              className="text-4xl font-bold text-center mb-16"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              制作の流れ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white"
                    style={{ backgroundColor: "#C8A96A" }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-base font-bold mb-2" style={{ color: "#1F1F1F" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/process"
                className="inline-block px-8 py-3 font-medium rounded transition-all hover:opacity-70 border-2"
                style={{ borderColor: "#1F1F1F", color: "#1F1F1F" }}
              >
                詳しい流れを見る
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1F1F1F" }}
            >
              月額19,800円〜で始められます
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              初期費用0円。月単位で始め・止めることができます。
              <br />
              BASIC・STANDARD・PROの3プランをご用意しています。
            </p>
            <Link
              href="/lp"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
            >
              プランの詳細を見る
            </Link>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-4xl">
            <h2
              className="text-3xl font-bold text-center mb-12"
              style={{ color: "#1F1F1F" }}
            >
              ブログ
            </h2>
            <p className="text-center text-gray-600 mb-8">
              ホームページ制作・AI活用・Web集客に関する情報を発信しています。
            </p>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-block px-8 py-3 font-medium rounded transition-all hover:opacity-70 border-2"
                style={{ borderColor: "#1F1F1F", color: "#1F1F1F" }}
              >
                ブログ一覧を見る
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: "#1F1F1F" }}
            >
              まずは、無料相談から
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              あなたのビジネスに合ったプランを、ご提案します。
              <br />
              LINE で、気軽にお問い合わせください。
            </p>
            <a
              href="https://lin.ee/K5FUv9n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-bold rounded-lg text-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
            >
              LINEで無料相談を始める
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社について｜CalmChronicle株式会社",
  description:
    "CalmChronicle株式会社の会社概要。AIを活用した月額制ホームページ制作会社。個人事業主・小規模企業向けの月額制Web制作サービスを全国対応で提供しています。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              会社について
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Calm Chronicleは、一人ひとりの想いを大切にし、
              <br />
              AIの力で穏やかに支える会社です。
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              ミッション
            </h2>
            <h3 className="text-xl font-semibold mb-4" style={{ color: "#C8A96A" }}>私たちの理念</h3>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic border-l-4 pl-6" style={{ borderColor: "#C8A96A" }}>
              “AIのチカラで一人ひとりの物語をかたちにし、
              穏やかな未来を創造する。”
            </blockquote>
            <p className="text-gray-700 leading-relaxed">
              ホームページは企業の顔です。私たちはAIの力を活用し、一人ひとりのビジネスの想いをかたちにし、穏やかで信頼できるWebの世界を一緒に創造していきます。
            </p>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              会社概要
            </h2>
            <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
              {[
                { label: '会社名', value: 'カームクロニクル株式会社（Calm Chronicle）' },
                { label: '創業日', value: '2026年3月20日' },
                { label: '代表者', value: '代表取締役　福永穏紀' },
                { label: '所在地', value: '〒141-0031 東京都品川区西五反田一丁目26番2号 五反田サンハイツ911' },
                { label: '資本金', value: '100万円' },
                { label: 'メールアドレス', value: 'calmchronicle.inc@gmail.com' },
                { label: '公式LINE', value: 'https://lin.ee/K5FUv9n' },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row ${i !== 0 ? "border-t" : ""}`}
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div
                    className="sm:w-40 px-6 py-4 text-sm font-semibold flex-shrink-0"
                    style={{ backgroundColor: "#F5F1EA", color: "#1F1F1F" }}
                  >
                    {row.label}
                  </div>
                  <div className="px-6 py-4 text-sm text-gray-700 leading-relaxed">
                    {row.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              私たちの価値観
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🧠', title: '知的', desc: '戦略的思考に基づき、データと経験を活かした提案をします。' },
                { icon: '🤝', title: '信頼', desc: '透明性を大切にし、クライアントとの信頼関係を最優先にします。' },
                { icon: '⚡', title: '実行', desc: '理想を形にするため、常に改善していきます。' },
              ].map((v) => (
                <div key={v.title} className="p-6 rounded-lg border text-center" style={{ borderColor: '#E8E4DC' }}>
                  <div className="text-4xl mb-3">{v.icon}</div>
                  <h3 className="font-bold mb-2" style={{ color: '#1F1F1F' }}>{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              提供サービス
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "月額制ホームページ制作",
                  description: "初期費用0円・月額19,800円〜。制作から更新・サポートまで一括提供。",
                  href: "/lp",
                  status: "提供中",
                },
                {
                  title: "AIを活用したWeb制作",
                  description: "AIを活用することで、高品質なWebサイトを低コスト・スピーディに制作。",
                  href: "/ai",
                  status: "提供中",
                },
                {
                  title: "SNS運用支援",
                  description: "Instagram・X（Twitter）などのSNS運用をサポートします。",
                  href: null,
                  status: "準備中",
                },
                {
                  title: "AI導入支援",
                  description: "業務へのAI活用・導入をサポートします。",
                  href: null,
                  status: "準備中",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-lg border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold" style={{ color: "#1F1F1F" }}>
                      {service.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-1 rounded ml-2 flex-shrink-0"
                      style={{
                        backgroundColor: service.status === "提供中" ? "#C8A96A" : "#E8E4DC",
                        color: service.status === "提供中" ? "white" : "#666",
                      }}
                    >
                      {service.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  {service.href && (
                    <Link
                      href={service.href}
                      className="text-sm font-medium hover:opacity-70 transition-opacity"
                      style={{ color: "#C8A96A" }}
                    >
                      詳しく見る →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              まずは、無料相談から
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              ご質問・ご相談はLINEからお気軽にどうぞ。
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

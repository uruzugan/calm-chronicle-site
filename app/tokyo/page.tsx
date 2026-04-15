import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "東京のホームページ制作｜品川区・渋谷区・新宿区など対応",
  description:
    "東京都内の個人事業主・小規模企業向けホームページ制作。品川区・渋谷区・新宿区・港区など東京全域対応。AIを活用した月額制Web制作サービス。初期費用0円・月額19,800円〜。",
  keywords: ["東京 ホームページ制作", "品川区 Web制作", "東京 月額制", "東京 個人事業主"],
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/tokyo",
  },
};

const areas = [
  "品川区", "渋谷区", "新宿区", "港区", "中央区", "千代田区",
  "目黒区", "世田谷区", "大田区", "江東区", "墨田区", "台東区",
];

export default function TokyoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <p className="text-sm font-medium mb-3" style={{ color: "#C8A96A" }}>
              東京のホームページ制作
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#1F1F1F" }}
            >
              東京の個人事業主・<br />
              小規模企業向け<br />
              ホームページ制作
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              CalmChronicleは、東京都品川区を拠点とするホームページ制作サービスです。
              東京都内の個人事業主・小規模企業向けに、AIを活用した月額制Web制作を提供しています。
              初期費用0円・月額19,800円〜で、プロのホームページを持てます。
            </p>
            <a
              href="https://lin.ee/K5FUv9n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
            >
              LINEで無料相談を始める
            </a>
          </div>
        </section>

        {/* About Tokyo Service */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              東京でのホームページ制作について
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                東京は日本最大のビジネス拠点であり、個人事業主・フリーランス・小規模企業の数も非常に多い地域です。
                競合が多い東京だからこそ、ホームページでの差別化が重要になります。
              </p>
              <p>
                CalmChronicleは、東京都品川区に拠点を置くホームページ制作サービスです。
                東京都内のお客様はもちろん、全国どこからでもオンラインでご依頼いただけます。
                LINEでのやり取りが中心のため、対面での打ち合わせは不要です。
              </p>
              <p>
                東京の競合の多い市場でも、SEO対策・デザイン・コンテンツの充実により、
                検索からの集客を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#1F1F1F" }}>
              対応エリア
            </h2>
            <p className="text-center text-gray-600 mb-10">
              東京都内全域に対応しています。オンラインでのご依頼のため、
              東京以外の地域からもお気軽にご相談ください。
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {areas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "#E8E4DC", color: "#1F1F1F" }}
                >
                  {area}
                </span>
              ))}
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ backgroundColor: "#C8A96A", color: "white" }}
              >
                その他東京全域
              </span>
            </div>
          </div>
        </section>

        {/* Features for Tokyo */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              東京の事業者に選ばれる理由
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "東京の競合市場でも差別化できるSEO対策",
                  description:
                    "東京は競合が多い市場です。地域名＋業種のキーワードでの検索上位表示を目指し、地域からの集客を支援します。",
                },
                {
                  title: "オンライン完結でスムーズな制作",
                  description:
                    "LINEでのやり取りが中心のため、忙しい東京の事業者様でも、移動時間なくスムーズに制作を進められます。",
                },
                {
                  title: "東京の物価に見合わないコストパフォーマンス",
                  description:
                    "東京の制作会社に依頼すると、高額になりがちです。CalmChronicleは月額19,800円〜という価格で、プロのホームページを提供します。",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-lg border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <h3 className="font-bold mb-2" style={{ color: "#1F1F1F" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              東京でのホームページ制作、ご相談ください
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              東京都内の個人事業主・小規模企業の方、お気軽にLINEからご相談ください。
              <br />
              初期費用0円・月額19,800円〜で始められます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/K5FUv9n"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: "#C8A96A" }}
              >
                LINEで無料相談を始める
              </a>
              <Link
                href="/lp"
                className="inline-block px-8 py-4 font-semibold rounded-lg transition-all hover:opacity-70 border-2"
                style={{ borderColor: "#1F1F1F", color: "#1F1F1F" }}
              >
                プランを見る
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

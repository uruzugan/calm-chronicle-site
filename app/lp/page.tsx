import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ホームページ制作 月額プラン｜初期費用0円・月額19,800円〜",
  description:
    "CalmChronicleの月額制ホームページ制作プランをご紹介。初期費用0円・月額19,800円〜。BASIC・STANDARD・PROの3プランから選べます。個人事業主・小規模企業向け。",
  keywords: ["ホームページ制作", "月額制", "料金", "プラン", "初期費用0円"],
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/lp",
  },
};

const plans = [
  {
    name: "BASIC",
    price: "¥19,800",
    desc: "まずは試してみたい方向け",
    features: ["Webサイト：3ページまで", "月1回の修正", "チャットサポート"],
    highlight: false,
  },
  {
    name: "STANDARD",
    price: "¥39,800",
    desc: "少しずつサイトを育てていきたい方向け",
    features: ["Webサイト：7ページまで", "月4回の修正", "チャットサポート", "SEO対策"],
    highlight: true,
  },
  {
    name: "PRO",
    price: "¥69,800",
    desc: "事業として本格的に成長させたい方向け",
    features: ["Webサイト：15ページまで", "月8回の修正", "チャットサポート", "SEO対策"],
    highlight: false,
  },
];

const faqs = [
  {
    q: "初期費用はかかりますか？",
    a: "初期費用は0円です。月額料金のみでご利用いただけます。",
  },
  {
    q: "いつでも解約できますか？",
    a: "月単位でのご契約です。翌月以降の解約は、月末までにご連絡いただければ対応します。",
  },
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "BASICプランで最短3〜5営業日、STANDARDプランで1〜2週間が目安です。",
  },
  {
    q: "修正回数を超えた場合はどうなりますか？",
    a: "修正回数を超えた場合は、1回あたり5,500円（税込）の追加費用が発生します。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "月額制ホームページ制作",
  provider: {
    "@type": "Organization",
    name: "CalmChronicle株式会社",
    url: "https://calm-chronicle.vercel.app",
  },
  description: "初期費用0円・月額19,800円〜の月額制ホームページ制作サービス",
  offers: [
    {
      "@type": "Offer",
      name: "BASICプラン",
      price: "19800",
      priceCurrency: "JPY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "19800",
        priceCurrency: "JPY",
        unitCode: "MON",
      },
    },
    {
      "@type": "Offer",
      name: "STANDARDプラン",
      price: "39800",
      priceCurrency: "JPY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "39800",
        priceCurrency: "JPY",
        unitCode: "MON",
      },
    },
    {
      "@type": "Offer",
      name: "PROプラン",
      price: "69800",
      priceCurrency: "JPY",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "69800",
        priceCurrency: "JPY",
        unitCode: "MON",
      },
    },
  ],
};

export default function LPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <p className="text-sm font-medium mb-3" style={{ color: "#C8A96A" }}>
              月額制ホームページ制作
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#1F1F1F" }}
            >
              初期費用0円。月額19,800円〜で、
              <br />
              プロのホームページを持てます。
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              CalmChronicleの月額制プランは、初期費用なしで始められ、
              制作から更新・サポートまですべて込みです。
              まとまった費用をかけずに、プロのWebサイトを持ちたい方に最適です。
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

        {/* Why Monthly */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              なぜ月額制なのか
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                従来のホームページ制作は、初期費用として30〜100万円以上かかることが珍しくありませんでした。
                個人事業主や小規模企業にとって、この初期投資は大きなハードルです。
              </p>
              <p>
                CalmChronicleの月額制モデルは、この問題を解決するために生まれました。
                初期費用0円で始められ、月額料金の中に制作・更新・サポートがすべて含まれています。
                事業の成長に合わせてプランを変更することも可能です。
              </p>
              <p>
                また、ホームページは作って終わりではなく、継続的な更新・改善が集客効果を高めます。
                月額制なら、この継続的な改善コストも予算に組み込みやすくなります。
              </p>
            </div>
          </div>
        </section>

        {/* Plans */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#1F1F1F" }}>
              プラン・料金
            </h2>
            <p className="text-center text-gray-600 mb-12">
              すべてのプランで初期費用0円。月単位でのご契約です。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`p-8 rounded-lg bg-white ${plan.highlight ? "border-2" : "border"}`}
                  style={{ borderColor: plan.highlight ? "#C8A96A" : "#E8E4DC" }}
                >
                  {plan.highlight && (
                    <div
                      className="inline-block px-3 py-1 rounded text-sm font-bold mb-4"
                      style={{ backgroundColor: "#C8A96A", color: "white" }}
                    >
                      おすすめ
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2" style={{ color: "#1F1F1F" }}>
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                  <p className="text-4xl font-bold mb-1" style={{ color: "#C8A96A" }}>
                    {plan.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-8">/月（税抜）</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span style={{ color: "#C8A96A" }}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
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
          </div>
        </section>

        {/* Comparison */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              他の制作方法との比較
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#F5F1EA" }}>
                    <th className="text-left p-4 font-semibold" style={{ color: "#1F1F1F" }}>比較項目</th>
                    <th className="text-center p-4 font-semibold" style={{ color: "#C8A96A" }}>CalmChronicle</th>
                    <th className="text-center p-4 font-semibold text-gray-600">制作会社</th>
                    <th className="text-center p-4 font-semibold text-gray-600">自作ツール</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["初期費用", "0円", "30〜200万円", "0〜数万円"],
                    ["月額費用", "19,800円〜", "別途更新費用", "1,000〜5,000円"],
                    ["制作期間", "3〜10営業日", "1〜3ヶ月", "自分次第"],
                    ["SEO対策", "あり", "オプション", "限定的"],
                    ["更新サポート", "月額内に含む", "別途費用", "自分で対応"],
                  ].map(([item, calm, agency, diy]) => (
                    <tr key={item} className="border-t" style={{ borderColor: "#E8E4DC" }}>
                      <td className="p-4 font-medium" style={{ color: "#1F1F1F" }}>{item}</td>
                      <td className="p-4 text-center font-medium" style={{ color: "#C8A96A" }}>{calm}</td>
                      <td className="p-4 text-center text-gray-500">{agency}</td>
                      <td className="p-4 text-center text-gray-500">{diy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#1F1F1F" }}>
              よくある質問
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="p-6 rounded-lg bg-white border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <p className="font-bold mb-3" style={{ color: "#1F1F1F" }}>
                    Q. {faq.q}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">A. {faq.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/faq"
                className="text-sm font-medium hover:opacity-70 transition-opacity"
                style={{ color: "#C8A96A" }}
              >
                すべてのFAQを見る →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              まずは、無料相談から
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              どのプランが合っているか迷っている方も、お気軽にご相談ください。
              <br />
              ご要望をお聞きした上で、最適なプランをご提案します。
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

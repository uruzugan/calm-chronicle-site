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
    features: ["Webサイト：7ページまで", "月4回の修正", "チャットサポート"],
    highlight: true,
  },
  {
    name: "PRO",
    price: "¥69,800",
    desc: "事業として本格的に成長させたい方向け",
    features: ["Webサイト：15ページまで", "月8回の修正", "チャットサポート"],
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
            <p className="text-sm font-semibold mb-4" style={{ color: "#C8A96A" }}>
              Calm AI — 月額制 HP 制作サービス
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: "#1F1F1F" }}
            >
              初期費用0円。
              <br />
              月額<span style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "-0.02em" }}>￥19,800</span>〜で、
              <br />
              プロのHPを。
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              AIを活用した高品質なホームページ制作・更新サポート。
              <br />
              個人事業主・小規模企業向けの月額制サービスです。
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

        {/* Problems */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-12" style={{ color: "#1F1F1F" }}>
              こんなお悩みはありませんか？
            </h2>
            <div className="space-y-4">
              {[
                'HP制作会社に依頼したが、初期費用が高くて踏み出せない',
                'HP制作会社に依頼したが、更新のたびに費用がかかる',
                '自分でHP制作ツールを使ったが、クオリティが低い',
              ].map((problem, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border flex items-start gap-3" style={{ borderColor: '#E8E4DC' }}>
                  <span className="text-xl">😔</span>
                  <p className="text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#1F1F1F" }}>
              Calm AI が解決します
            </h2>
            <p className="text-gray-600 mb-12">AIを活用した高品質なHP制作・更新サポートで、あなたのビジネスを支えます。</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: '✓ 初期費用0円', desc: '月額制なので、初期費用は一切かかりません。1ヶ月単位で始められます。' },
                { title: '✓ 月額制で更新し放題', desc: 'プランに応じた回数の修正が込み。追加費用なしで更新できます。' },
                { title: '✓ AIを活用した高品質制作', desc: 'AIを内包した制作プロセスで、短期間・低コストでプロ品質のホームページを届けます。' },
                { title: '✓ LINEで、気軽に相談', desc: 'LINE公式アカウントで、気軽に相談できます。わからないことは、何でも聴いてください。' },
              ].map((s) => (
                <div key={s.title} className="bg-white p-6 rounded-lg border" style={{ borderColor: '#E8E4DC' }}>
                  <h3 className="font-bold mb-2" style={{ color: '#C8A96A' }}>{s.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
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

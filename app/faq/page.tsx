import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "よくある質問｜ホームページ制作・月額制・AI活用",
  description:
    "CalmChronicleのホームページ制作サービスに関するよくある質問をまとめました。費用・制作期間・解約方法・AI活用など、気になる疑問にお答えします。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/faq",
  },
};

const faqs = [
  {
    category: "費用・プランについて",
    items: [
      {
        q: "初期費用はかかりますか？",
        a: "初期費用は0円です。月額料金のみでご利用いただけます。",
      },
      {
        q: "月額料金には何が含まれますか？",
        a: "月額料金には、ホームページの制作・更新・修正・チャットサポートが含まれます。プランによって修正回数やページ数が異なります。",
      },
      {
        q: "途中でプランを変更できますか？",
        a: "はい、月単位でプランを変更できます。ご要望の際はLINEからご連絡ください。",
      },
      {
        q: "修正回数を超えた場合はどうなりますか？",
        a: "修正回数を超えた場合は、1回あたり5,500円（税込）の追加費用が発生します。",
      },
    ],
  },
  {
    category: "制作・納期について",
    items: [
      {
        q: "制作期間はどのくらいかかりますか？",
        a: "BASICプランで最短3〜5営業日、STANDARDプランで1〜2週間が目安です。ご要望の内容によって変動します。",
      },
      {
        q: "制作に必要なものを教えてください。",
        a: "ヒアリングシートへの記入と、ロゴ・写真などの素材をご提供いただければ、あとはすべてお任せいただけます。素材がない場合は、フリー素材を活用して制作します。",
      },
      {
        q: "スマートフォン対応（レスポンシブ）はしてもらえますか？",
        a: "はい、すべてのプランでスマートフォン対応（レスポンシブデザイン）を標準で実施しています。",
      },
      {
        q: "ドメインやサーバーの手配も必要ですか？",
        a: "ドメイン・サーバーの手配も承ります。別途費用が発生しますが、手間なく始められます。",
      },
    ],
  },
  {
    category: "AI活用について",
    items: [
      {
        q: "AIで作ったホームページの品質は大丈夫ですか？",
        a: "AIはあくまで制作効率を高めるための道具です。AIが生成したものをプロが必ずレビュー・調整するため、品質は担保されています。",
      },
      {
        q: "自分でAIを使う必要がありますか？",
        a: "いいえ、お客様がAIを操作する必要は一切ありません。AIを活用するのはCalmChronicle側であり、お客様はLINEでやり取りするだけです。",
      },
    ],
  },
  {
    category: "解約・その他",
    items: [
      {
        q: "いつでも解約できますか？",
        a: "月単位でのご契約です。翌月以降の解約は、月末までにLINEからご連絡いただければ対応します。",
      },
      {
        q: "解約後、ホームページはどうなりますか？",
        a: "解約後はホームページの更新・サポートが終了します。ドメイン・サーバーの継続については別途ご相談ください。",
      },
      {
        q: "対象年齢はありますか？",
        a: "18歳以上の方を対象としています。未成年の方は保護者の同意が必要です。",
      },
    ],
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((cat) =>
      cat.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#1F1F1F" }}
            >
              よくある質問
            </h1>
            <p className="text-gray-600">
              ホームページ制作・月額プラン・AI活用に関するよくある質問をまとめました。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="space-y-12">
              {faqs.map((cat) => (
                <div key={cat.category}>
                  <h2
                    className="text-xl font-bold mb-6 pb-3 border-b"
                    style={{ color: "#1F1F1F", borderColor: "#E8E4DC" }}
                  >
                    {cat.category}
                  </h2>
                  <div className="space-y-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.q}
                        className="p-6 rounded-lg border"
                        style={{ borderColor: "#E8E4DC" }}
                      >
                        <p className="font-bold mb-3" style={{ color: "#1F1F1F" }}>
                          Q. {item.q}
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          A. {item.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-16 p-8 rounded-lg border text-center"
              style={{ borderColor: "#E8E4DC", backgroundColor: "#F5F1EA" }}
            >
              <p className="font-bold mb-2" style={{ color: "#1F1F1F" }}>
                その他のご質問はLINEからどうぞ
              </p>
              <p className="text-sm text-gray-600 mb-4">
                掲載されていない質問も、お気軽にご相談ください。
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
        </section>
      </main>

      <Footer />
    </div>
  );
}

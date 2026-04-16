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
    question: 'どのプランを選べばいいですか？',
    answer: 'BASICプランは小規模サイト向け、STANDARDは中規模、PROは大規模サイト向けです。まずはLINEで無料相談してください。',
  },
  {
    question: '制作期間はどのくらいですか？',
    answer: '通常2、4週間で制作完了です。ただし、ヒアリング内容や修正回数により変わります。',
  },
  {
    question: '更新はどのくらいの頻度でできますか？',
    answer: 'BASICは月１回、STANDARDは月４回、PROは月８回の修正に対応しています。',
  },
  {
    question: '解約はいつでもできますか？',
    answer: 'はい、1ヶ月単位で契約できるため、いつでも解約可能です。',
  },
  {
    question: '対象となる業種はありますか？',
    answer: '業種は問いません。個人事業主・フリーランス・小規模企業など、幅広くご対応しています。',
  },
  {
    question: 'HP制作はどこで行いますか？',
    answer: 'すべてオンラインで完結します。全国どこからでもご利用いただけます。',
  },
  {
    question: '支払い方法は何ですか？',
    answer: 'クレジットカード決済（Stripe）に対応しています。',
  },
  {
    question: 'AIを使ったHP制作とはどういう意味ですか？',
    answer: '弊社スタッフがAIツールを活用してHP制作を行います。お客様がAIを直接操作する必要はありません。AIを活用することで、制作スピードと品質の向上を実現しています。',
  },
];

export default function FAQPage() {
  // JSON-LD for FAQ
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
            <div className="space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.question}
                  className="p-6 rounded-lg border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <p className="font-bold mb-3" style={{ color: "#1F1F1F" }}>
                    Q. {item.question}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    A. {item.answer}
                  </p>
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

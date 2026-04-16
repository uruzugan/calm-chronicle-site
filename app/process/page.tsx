import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "制作の流れ｜ホームページ制作の手順・スケジュール",
  description:
    "CalmChronicleのホームページ制作の流れをご説明します。LINEでの無料相談から公開・運用サポートまで、コンテンツの量によって制作期間は異なりますが、ヒアリング後に目安期間をお伝えします。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/process",
  },
};

const steps = [
  {
    number: '01',
    title: 'LINEで無料相談',
    description:
      'まずは公式LINEからお気軽にご相談ください。ビジネスの目標、現状の課題、ご希望のデザインなどをお聞かせいただきます。',
  },
  {
    number: '02',
    title: 'プランのご提案',
    description:
      'ヒアリング内容をもとに、最適なプランをご提案します。BASIC・STANDARD・PROの中からご予算とニーズに合ったプランをご選択いただきます。',
  },
  {
    number: '03',
    title: '契約・決済',
    description:
      'ご納得いただけましたら、Stripeを通じて安全にお支払いいただきます。1ヶ月単位の月額制なので、気軽に始められます。',
  },
  {
    number: '04',
    title: 'ヒアリング・設計',
    description:
      'サイトの構成、デザインの方向性、掃載コンテンツについて詳しくヒアリングします。お客様のビジネスの「物語」を丁寧に引き出します。',
  },
  {
    number: '05',
    title: 'HP制作',
    description:
      'AIの力を活用しながら、高品質なホームページを制作します。デザインから実装まで、一貫して対応します。',
  },
  {
    number: '06',
    title: '確認・修正',
    description:
      '完成したサイトをご確認いただき、ご要望に応じて修正を行います。プランの修正回数内で対応します。',
  },
  {
    number: '07',
    title: '公開・運用開始',
    description:
      'サイトを公開し、運用を開始します。公開後も月次の更新・改善サポートを継続して提供します。',
  },
];



export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "#1F1F1F" }}
            >
              制作の流れ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              LINEでの無料相談から公開・運用サポートまで、すべてオンラインで完結します。
              コンテンツの量によって制作期間は異なります。ヒアリング後に目安期間をお伝えします。
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <div className="space-y-8">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: "#C8A96A" }}
                    >
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className="w-0.5 flex-1 mt-2"
                        style={{ backgroundColor: "#E8E4DC" }}
                      />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h2 className="text-xl font-bold mb-2" style={{ color: "#1F1F1F" }}>
                      {step.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              まずは、LINEで無料相談を
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              「どんなホームページが必要か」「費用はどのくらいかかるか」など、
              <br />
              どんな些細な疑問でもお気軽にご相談ください。
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

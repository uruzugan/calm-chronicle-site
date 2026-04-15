import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "制作の流れ｜ホームページ制作の手順・スケジュール",
  description:
    "CalmChronicleのホームページ制作の流れをご説明します。LINEでの無料相談から公開・運用サポートまで、最短3〜5営業日で対応します。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/process",
  },
};

const steps = [
  {
    number: "01",
    title: "LINEで無料相談",
    duration: "当日〜翌営業日",
    description:
      "まずはLINEからお気軽にご相談ください。ビジネスの目的・ターゲット・ご要望をヒアリングします。専門用語を使わず、わかりやすくご説明します。",
    details: [
      "どんなホームページが必要か",
      "ターゲット・目的の確認",
      "予算・スケジュールの確認",
    ],
  },
  {
    number: "02",
    title: "プランのご提案・お見積もり",
    duration: "1〜2営業日",
    description:
      "ヒアリング内容をもとに、最適なプランをご提案します。費用・制作内容・スケジュールを明確にお伝えします。",
    details: [
      "最適なプランのご提案",
      "費用・スケジュールの確認",
      "ご契約・お支払い",
    ],
  },
  {
    number: "03",
    title: "ヒアリングシートの記入・素材のご提供",
    duration: "お客様のペースで",
    description:
      "ヒアリングシートにビジネス情報・掲載内容をご記入いただきます。ロゴ・写真などの素材があればご提供ください。素材がない場合はフリー素材を活用します。",
    details: [
      "ヒアリングシートへの記入",
      "ロゴ・写真などの素材提供（任意）",
      "掲載テキストの確認",
    ],
  },
  {
    number: "04",
    title: "制作・確認",
    duration: "3〜10営業日",
    description:
      "AIを活用して迅速に制作します。完成したデザインをご確認いただき、修正があればお知らせください。",
    details: [
      "デザイン・コーディング",
      "お客様による確認",
      "修正・調整",
    ],
  },
  {
    number: "05",
    title: "公開",
    duration: "確認後、即日〜翌営業日",
    description:
      "お客様の確認が取れたら、ホームページを公開します。ドメイン・サーバーの設定もサポートします。",
    details: [
      "ドメイン・サーバー設定",
      "公開作業",
      "動作確認",
    ],
  },
  {
    number: "06",
    title: "継続的な更新・運用サポート",
    duration: "月額プランに含む",
    description:
      "公開後も、プランに応じた更新・修正サポートを提供します。新しいページの追加・コンテンツの更新など、ビジネスの成長に合わせてホームページを育てていきます。",
    details: [
      "定期的なコンテンツ更新",
      "デザイン・機能の改善",
      "SEO対策の継続",
    ],
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
              最短3〜5営業日での公開も可能です。
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
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="text-xl font-bold" style={{ color: "#1F1F1F" }}>
                        {step.title}
                      </h2>
                      <span
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: "#F5F1EA", color: "#C8A96A" }}
                      >
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((d) => (
                        <li key={d} className="flex items-start gap-2 text-sm text-gray-500">
                          <span style={{ color: "#C8A96A" }}>✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
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

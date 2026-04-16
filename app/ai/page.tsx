import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AIホームページ制作とは｜品質・安全性・活用方法を解説",
  description:
    "CalmChronicleのAIを活用したホームページ制作について解説。AIで品質は大丈夫？という疑問にお答えします。プロが監修することで高品質なWebサイトを低コストで提供します。",
  keywords: ["AIホームページ制作", "AI Web制作", "AI 品質", "低コスト"],
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/ai",
  },
};

const merits = [
  {
    title: "コストを大幅に削減できる",
    description:
      "AIを活用することで、デザイン・コーディングにかかる時間を大幅に短縮。その分、費用を抑えてお客様に提供できます。",
  },
  {
    title: "制作スピードが速い",
    description:
      "従来の制作方法では数週間〜数ヶ月かかっていた作業が、AIの活用により大幅に短縮。最短翌営業日での公開も可能です。",
  },
  {
    title: "継続的な改善がしやすい",
    description:
      "デザインの変更・コンテンツの追加なども迅速に対応。月額制と組み合わせることで、ホームページを継続的に育てられます。",
  },
];

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <p className="text-sm font-medium mb-3" style={{ color: "#C8A96A" }}>
              AI活用ホームページ制作
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#1F1F1F" }}
            >
              AIで作ったホームページ、
              <br />
              品質は大丈夫？
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              「AIで作ったホームページって、品質が低いんじゃないの？」という疑問にお答えします。
              CalmChronicleでは、AIを「道具」として活用しながら、プロが監修・調整することで
              高品質なホームページを提供しています。
            </p>
          </div>
        </section>

        {/* What is AI HP */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              AIホームページ制作とは何か
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                AIホームページ制作とは、AIツールを活用してデザイン・コーディング・コンテンツ作成を
                効率化するWeb制作の方法です。「AIが全部自動で作る」というイメージを持つ方もいますが、
                実際には人間のディレクション・品質チェック・調整が不可欠です。
              </p>
              <p>
                CalmChronicleでは、AIを「制作効率を高めるための道具」として位置づけています。
                デザイン・コーディング・コンテンツ作成にAIを活用しながら、プロが監修・調整することで、
                高品質なホームページを適正価格で提供しています。
              </p>
              <p>
                「AIを使っているから品質が低い」ということは一切ありません。
                むしろ、AIを活用することで、従来の制作会社では難しかった
                「高品質・低コスト・スピード」の三つを同時に実現しています。
              </p>
            </div>
          </div>
        </section>

        {/* Merits */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#1F1F1F" }}>
              AIホームページ制作のメリット
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {merits.map((m, i) => (
                <div
                  key={m.title}
                  className="p-8 bg-white rounded-lg border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold"
                    style={{ backgroundColor: "#C8A96A" }}
                  >
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: "#1F1F1F" }}>
                    {m.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-8" style={{ color: "#1F1F1F" }}>
              品質管理プロセス
            </h2>
            <div className="space-y-4">
              {[
                "ヒアリングによる要件定義",
                "AIによるデザイン・コード生成",
                "プロによるレビューと調整",
                "クロスブラウザ・クロスデバイステスト",
                "お客様による確認・修正",
                "公開",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4 p-4 rounded-lg border"
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: "#C8A96A" }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-gray-700 font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              AIホームページ制作について、もっと詳しく知りたい方へ
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              具体的な制作事例や、AIを活用することで何ができるかについて、
              LINEでお気軽にご相談ください。
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

import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "実例紹介｜CalmChronicle（カームクロニクル）",
  description:
    "Calm Chronicleで制作したホームページの実例をご紹介します。士業・建築業・サロン・コーチングなど業種別の制作実例を掲載しています。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/cases",
  },
};

const examples = [
  {
    id: 1,
    title: "士業・法律事務所",
    description:
      "弁護士、司法書士、税理士などの士業向けHP。専門分野紹介、弁護士プロフィール、相談予約などを掲載。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663364928096/d8NHjLCWMPq7GwzCm5aDJH/law-firm-website-jp-KtwXLFfey7KByddNZZ8c5D.webp",
    features: ["専門分野紹介", "スタッフプロフィール", "相談予約", "ブログ"],
  },
  {
    id: 2,
    title: "建築業・工務店",
    description:
      "建築業、工務店、設計事務所向けHP。ポートフォリオ、サービス紹介、チーム紹介などを掲載。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663364928096/d8NHjLCWMPq7GwzCm5aDJH/construction-website-jp-bNxSQwzRXbavU8qwFGdzaM.webp",
    features: ["ポートフォリオギャラリー", "サービス紹介", "チーム紹介", "お問い合わせフォーム"],
  },
  {
    id: 3,
    title: "サロン・美容系",
    description:
      "エステ、ネイル、美容院などのサロン向けHP。予約機能、施術メニュー、スタッフ紹介などを含む。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663364928096/d8NHjLCWMPq7GwzCm5aDJH/salon-website-jp-FQrb66NugWJc8rzXpYNcFi.webp",
    features: ["予約機能", "施術メニュー表示", "スタッフ紹介", "ビフォーアフター"],
  },
  {
    id: 4,
    title: "コーチング・教室系",
    description:
      "ビジネスコーチング、オンライン教室、スキル講座などの教育系HP。講師プロフィール、コース紹介、生徒の声などを掲載。",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663364928096/TqpAhcHtCoWTxmae4iG3R3/coaching-website-jp-v2-awrgJ7jGGTmSv9W3s2icx5.webp",
    features: ["講師プロフィール", "コース紹介", "生徒の声", "よくある質問"],
  },
];

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              実例紹介
            </h1>
            <p className="text-gray-600">Calm AI で制作したホームページの実例をご紹介します。</p>
          </div>
        </section>

        {/* Cases */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="space-y-16">
              {examples.map((example, idx) => (
                <div
                  key={example.id}
                  className={`grid md:grid-cols-2 gap-8 items-center`}
                >
                  <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={example.image}
                      alt={example.title}
                      className="rounded-lg w-full h-auto border"
                      style={{ borderColor: "#E8E4DC" }}
                    />
                  </div>
                  <div className={idx % 2 === 1 ? "md:order-1" : ""}>
                    <h2 className="text-2xl font-bold mb-4" style={{ color: "#1F1F1F" }}>
                      {example.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">{example.description}</p>
                    <div>
                      <p className="font-semibold mb-3" style={{ color: "#1F1F1F" }}>
                        実装機能：
                      </p>
                      <ul className="space-y-2">
                        {example.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <span style={{ color: "#C8A96A" }}>✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-32" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#1F1F1F" }}>
              あなたのビジネスにも、同じクオリティを
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              業種・規模を問わず、最適なホームページをご提案します。
              <br />
              まずはお気軽にご相談ください。
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
      </main>
      <Footer />
    </div>
  );
}

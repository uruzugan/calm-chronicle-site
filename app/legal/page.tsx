import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記｜CalmChronicle株式会社",
  description: "CalmChronicle株式会社の特定商取引法に基づく表記です。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/legal",
  },
};

const items = [
  {
    label: '事業者名',
    value: 'カームクロニクル株式会社（Calm Chronicle）',
  },
  {
    label: '代表者名',
    value: '福永穏紀',
  },
  {
    label: '所在地',
    value: '〒141-0031 東京都品川区西五反田一丁目26番2号 五反田サンハイツ911',
  },
  {
    label: 'メールアドレス',
    value: 'calmchronicle.inc@gmail.com',
    note: '※お問い合わせは公式LINEよりお願いいたします。',
  },
  {
    label: 'お問い合わせ方法',
    value: '公式LINE（https://lin.ee/K5FUv9n）にてお問い合わせください。',
    note: '※電話番号はご請求いただければ、遅滞なく開示いたします。',
  },
  {
    label: '販売価格',
    value: 'BASICプラン：¥19,800/月（税抜）\nSTANDARDプラン：¥39,800/月（税抜）\nPROプラン：¥69,800/月（税抜）',
    note: '※別途消費税がかかります。',
  },
  {
    label: '支払方法',
    value: 'クレジットカード決済（Stripe）',
  },
  {
    label: '支払時期',
    value: '毎月の契約更新日に自動決済されます。',
  },
  {
    label: 'サービス提供時期',
    value: '初稿は受付当日〜翌営業日にご提出します。修正回数により、最短2営業日〜最長4週間程度で公開となります。',
  },
  {
    label: 'キャンセル・返品について',
    value: '月額制サービスのため、契約は1ヶ月単位で自動更新されます。\n解約は翌月以降に適用されます。\n当月分の返金は原則として承っておりません。\nただし、サービス提供前のキャンセルについては、状況に応じて個別に対応いたします。',
  },
  {
    label: '動作環境',
    value: '最新バージョンのChrome、Firefox、Safari、Edgeに対応しています。',
  },
];

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold" style={{ color: "#1F1F1F" }}>
              特定商取引法に基づく表記
            </h1>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: "#E8E4DC" }}>
              {items.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row ${i !== 0 ? "border-t" : ""}`}
                  style={{ borderColor: "#E8E4DC" }}
                >
                  <div
                    className="sm:w-48 px-6 py-4 text-sm font-semibold flex-shrink-0"
                    style={{ backgroundColor: "#F5F1EA", color: "#1F1F1F" }}
                  >
                    {row.label}
                  </div>
                  <div className="px-6 py-4 text-sm text-gray-700 leading-relaxed">
                    {row.value.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < row.value.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                    {row.note && (
                      <p className="text-xs text-gray-400 mt-2">{row.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

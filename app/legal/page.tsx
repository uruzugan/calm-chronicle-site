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
  { label: "販売業者", value: "CalmChronicle株式会社" },
  { label: "代表責任者", value: "代表取締役" },
  { label: "所在地", value: "〒141-0031 東京都品川区西五反田一丁目26番2号 五反田サンハイツ911" },
  { label: "お問い合わせ", value: "公式LINE（https://lin.ee/K5FUv9n）" },
  { label: "販売価格", value: "各プランページをご参照ください（税抜表示）" },
  { label: "支払方法", value: "クレジットカード決済" },
  { label: "支払時期", value: "毎月月初にご請求します" },
  { label: "サービス提供時期", value: "ご契約後、最短3〜5営業日で公開します" },
  { label: "返品・キャンセル", value: "月単位でのご契約です。月末までにご連絡いただければ翌月以降の解約が可能です。" },
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
                    {row.value}
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

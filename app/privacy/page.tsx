import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー｜CalmChronicle株式会社",
  description: "CalmChronicle株式会社のプライバシーポリシーです。",
  alternates: {
    canonical: "https://calm-chronicle.vercel.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main style={{ paddingTop: "80px" }}>
        <section className="py-16 md:py-24" style={{ backgroundColor: "#F5F1EA" }}>
          <div className="container max-w-3xl">
            <h1 className="text-4xl font-bold" style={{ color: "#1F1F1F" }}>
              プライバシーポリシー
            </h1>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl prose max-w-none text-gray-700">
            <p>
              CalmChronicle株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、
              以下のプライバシーポリシーを定めます。
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4" style={{ color: "#1F1F1F" }}>
              1. 個人情報の収集
            </h2>
            <p>
              当社は、サービスの提供にあたり、お名前・メールアドレス・LINEアカウント情報等の
              個人情報をお預かりする場合があります。
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4" style={{ color: "#1F1F1F" }}>
              2. 個人情報の利用目的
            </h2>
            <p>収集した個人情報は、以下の目的のために利用します。</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>サービスの提供・運営</li>
              <li>お問い合わせへの対応</li>
              <li>サービスに関するご案内・連絡</li>
            </ul>
            <h2 className="text-xl font-bold mt-8 mb-4" style={{ color: "#1F1F1F" }}>
              3. 個人情報の第三者提供
            </h2>
            <p>
              当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供しません。
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4" style={{ color: "#1F1F1F" }}>
              4. 個人情報の管理
            </h2>
            <p>
              当社は、個人情報の漏洩・滅失・毀損を防止するため、適切な安全管理措置を講じます。
            </p>
            <h2 className="text-xl font-bold mt-8 mb-4" style={{ color: "#1F1F1F" }}>
              5. お問い合わせ
            </h2>
            <p>
              個人情報に関するお問い合わせは、公式LINEよりご連絡ください。
            </p>
            <p className="mt-8 text-sm text-gray-500">制定日：2024年1月1日</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

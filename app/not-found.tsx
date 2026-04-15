import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main
        className="flex flex-col items-center justify-center text-center py-32"
        style={{ paddingTop: "160px" }}
      >
        <h1
          className="text-6xl font-bold mb-4"
          style={{ color: "#C8A96A" }}
        >
          404
        </h1>
        <p className="text-xl mb-2" style={{ color: "#1F1F1F" }}>
          ページが見つかりません
        </p>
        <p className="text-gray-500 mb-8">
          お探しのページは移動または削除された可能性があります。
        </p>
        <Link
          href="/"
          className="px-6 py-3 text-white font-semibold rounded-lg transition-all hover:opacity-90"
          style={{ backgroundColor: "#C8A96A" }}
        >
          トップページへ戻る
        </Link>
      </main>
      <Footer />
    </div>
  );
}

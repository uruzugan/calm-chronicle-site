import Link from "next/link";

const footerLinks = {
  会社: [
    { label: "会社について", href: "/about" },
    { label: "実例", href: "/cases" },
    { label: "制作の流れ", href: "/process" },
  ],
  サービス: [
    { label: "プランのご説明", href: "/lp" },
    { label: "AI制作について", href: "/ai" },
    { label: "東京のお客様へ", href: "/tokyo" },
    { label: "よくある質問", href: "/faq" },
    { label: "ブログ", href: "/blog" },
  ],
  その他: [
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "特定商取引法に基づく表記", href: "/legal" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "#E8E4DC" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold mb-3"
              style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
            >
              Calm Chronicle
              <br />
              <span className="text-sm font-normal">株式会社</span>
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              AIを活用した月額制<br />
              ホームページ制作サービス
            </p>
            <a
              href="https://lin.ee/K5FUv9n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-sm font-semibold text-white rounded transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
            >
              公式LINE
            </a>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-sm font-semibold mb-4" style={{ color: "#1F1F1F" }}>
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div
          className="mt-12 pt-8 border-t text-sm text-gray-500"
          style={{ borderColor: "#E8E4DC" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p>
                〒141-0031 東京都品川区西五反田一丁目26番2号 五反田サンハイツ911
              </p>
            </div>
            <div>
              <p>資本金：100万円</p>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} CalmChronicle株式会社. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

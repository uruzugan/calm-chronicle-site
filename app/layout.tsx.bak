import type { Metadata } from "next";
import { Noto_Sans_JP, Noto_Serif_JP, Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://calm-chronicle.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CalmChronicle｜AI活用のホームページ制作・月額制Web制作",
    template: "%s | CalmChronicle",
  },
  description:
    "CalmChronicleは、AIを活用した月額制ホームページ制作サービスです。初期費用0円・月額19,800円〜で、個人事業主・小規模企業向けに高品質なWebサイトを制作します。全国対応・オンライン完結。",
  keywords: ["ホームページ制作", "月額制", "AI", "Web制作", "個人事業主", "全国対応"],
  authors: [{ name: "CalmChronicle株式会社" }],
  creator: "CalmChronicle株式会社",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: "CalmChronicle",
    title: "CalmChronicle｜AI活用のホームページ制作・月額制Web制作",
    description:
      "AIを活用した月額制ホームページ制作。初期費用0円・月額19,800円〜。個人事業主・小規模企業向けに高品質なWebサイトを制作します。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CalmChronicle - AIを活用したホームページ制作",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CalmChronicle｜AI活用のホームページ制作・月額制Web制作",
    description:
      "AIを活用した月額制ホームページ制作。初期費用0円・月額19,800円〜。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${playfairDisplay.variable} ${dmSans.variable}`}
    >
      <body className="font-sans antialiased bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}

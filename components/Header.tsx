"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "会社について", href: "/about" },
  { label: "プランのご説明", href: "/lp" },
  { label: "実例", href: "/cases" },
  { label: "ブログ", href: "/blog" },
  { label: "よくある質問", href: "/faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white z-50 border-b"
      style={{ borderColor: "#E8E4DC", height: "80px" }}
    >
      <div className="container flex items-center justify-between h-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="CalmChronicle トップページへ"
        >
          <span
            className="text-lg font-bold leading-tight"
            style={{ color: "#1F1F1F", fontFamily: "var(--font-playfair), serif" }}
          >
            Calm Chronicle
            <br />
            <span className="text-sm font-normal">株式会社</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="グローバルナビゲーション">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: "#1F1F1F" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://lin.ee/K5FUv9n"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 text-sm font-semibold text-white rounded transition-all hover:opacity-90"
            style={{ backgroundColor: "#C8A96A" }}
          >
            ご相談
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          style={{ color: "#1F1F1F" }}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-t"
          style={{ borderColor: "#E8E4DC" }}
        >
          <nav className="container py-4 flex flex-col gap-4" aria-label="モバイルナビゲーション">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium py-1 hover:opacity-70 transition-opacity"
                style={{ color: "#1F1F1F" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://lin.ee/K5FUv9n"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 text-sm font-semibold text-white text-center rounded transition-all hover:opacity-90"
              style={{ backgroundColor: "#C8A96A" }}
              onClick={() => setMenuOpen(false)}
            >
              LINEで無料相談を始める
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

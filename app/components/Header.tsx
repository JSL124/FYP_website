"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/app/lib/constants";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0814]/80 border-b border-white/5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 text-foreground"
        >
          <Image
            src="/images/brand/runiac-logo.png"
            alt="Runiac logo"
            width={140}
            height={76}
            className="h-10 w-auto max-w-none object-contain drop-shadow-[0_0_18px_rgba(139,92,246,0.35)]"
            priority
            unoptimized
          />
          <span className="text-lg font-bold tracking-tight">Runiac</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/docs"
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.3)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_28px_rgba(139,92,246,0.55)]"
          >
            View Docs
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-white/5 bg-[#0a0814]/95 backdrop-blur-md px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm transition-colors ${
                pathname === link.href || pathname.startsWith(link.href + "/")
                  ? "text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/docs"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white"
          >
            View Docs
          </Link>
        </nav>
      )}
    </header>
  );
}

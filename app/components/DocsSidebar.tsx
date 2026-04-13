"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOC_LINKS } from "@/app/lib/constants";

export default function DocsSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Documentation", href: "/docs" },
    ...DOC_LINKS,
  ];

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed bottom-6 right-6 z-40 rounded-full bg-accent p-3 text-black shadow-lg hover:brightness-110 transition"
        aria-label="Toggle docs navigation"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 left-0 z-30 h-[calc(100vh-64px)] w-64 shrink-0 border-r border-white/5 bg-background/95 backdrop-blur-md p-6 transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
          Documentation
        </h3>
        <nav className="space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname === link.href
                  ? "bg-accent/10 text-accent"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

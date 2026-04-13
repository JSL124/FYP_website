import Link from "next/link";
import { FOOTER_COLUMNS, PROJECT } from "@/app/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-foreground font-bold text-lg"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-black font-black text-sm">
                W
              </span>
              {PROJECT.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {PROJECT.tagline}
            </p>
            <p className="mt-2 text-xs text-muted/60">
              Project ID: {PROJECT.id}
            </p>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href === "#" ? (
                      <span className="text-sm text-muted/50 cursor-default">
                        {link.label}
                      </span>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/5 pt-10 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {PROJECT.name}. {PROJECT.id}.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

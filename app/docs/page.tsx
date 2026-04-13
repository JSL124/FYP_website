import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import { DOC_LINKS, PROJECT } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Documentation — Wise Workout",
  description:
    "Explore the Wise Workout documentation: user manual, system architecture, and technical details.",
};

export default function DocsIndexPage() {
  return (
    <div className="px-6 py-20 lg:px-12">
      <div className="max-w-4xl">
        <ScrollReveal>
          <SectionLabel>[ Documentation ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {PROJECT.name} <span className="text-accent">Docs</span>
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            Welcome to the Wise Workout documentation. Here you will find
            everything you need to understand, use, and evaluate the
            application.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {DOC_LINKS.map((doc, i) => (
            <ScrollReveal key={doc.href} delay={i * 0.1}>
              <Link href={doc.href} className="block group">
                <GradientCard className="p-8 h-full transition-all duration-200 group-hover:ring-1 group-hover:ring-accent/30">
                  <h2 className="text-xl font-bold group-hover:text-accent transition-colors">
                    {doc.label}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {doc.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-accent">
                    Read more &rarr;
                  </p>
                </GradientCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

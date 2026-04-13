"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import PlaceholderImage from "@/app/components/PlaceholderImage";
import { FEATURES } from "@/app/lib/constants";

export default function FeaturesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ Features ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            What <span className="text-accent">Wise Workout</span> Can Do
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            Five core features designed to transform how you track, plan, and
            enjoy your fitness journey.
          </p>
        </ScrollReveal>

        {/* Tabbed Feature Detail */}
        <ScrollReveal delay={0.1}>
          <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2">
              {FEATURES.map((feature, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`whitespace-nowrap rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200 ${
                    activeIndex === i
                      ? "bg-accent/10 text-accent border border-accent/20"
                      : "text-muted hover:text-foreground hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </button>
              ))}
            </div>

            <div className="gradient-border p-8 sm:p-10">
              <div className="text-4xl mb-4">
                {FEATURES[activeIndex].icon}
              </div>
              <h2 className="mb-3 text-2xl font-bold">
                {FEATURES[activeIndex].title}
              </h2>
              <p className="text-base leading-relaxed text-muted">
                {FEATURES[activeIndex].details}
              </p>
              <div className="mt-8">
                <PlaceholderImage
                  label={FEATURES[activeIndex].placeholderLabel}
                  aspectRatio="16:9"
                />
              </div>
              <div className="mt-8">
                <Link
                  href="/docs/user-manual"
                  className="rounded-full bg-accent/10 border border-accent/20 px-5 py-2 text-sm font-medium text-accent transition hover:bg-accent/20"
                >
                  Read User Manual
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="mb-12 text-2xl font-bold tracking-tight sm:text-3xl">
              Feature Overview
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.08}>
                <div
                  className={`gradient-border p-6 h-full cursor-pointer transition-all duration-200 ${
                    activeIndex === i
                      ? "ring-1 ring-accent/30"
                      : "hover:ring-1 hover:ring-white/10"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import ScrollReveal from "./components/ScrollReveal";
import SectionLabel from "./components/SectionLabel";
import GradientCard from "./components/GradientCard";
import { PROJECT, FEATURES, STEPS, STATS } from "./lib/constants";

/* ─────────────────────── Hero ─────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[820px] w-[820px] rounded-full bg-accent/20 blur-[160px] animate-glow" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[380px] w-[380px] rounded-full bg-[#a78bfa]/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <ScrollReveal>
          <p className="section-label mb-4">[ {PROJECT.id} ]</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-5xl font-bold leading-[1.1] tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            {PROJECT.name}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-2 text-lg text-accent font-medium sm:text-xl">
            {PROJECT.tagline}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {PROJECT.description}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/features"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]"
            >
              Explore Features
            </Link>
            <Link
              href="/docs"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-white/10"
            >
              View Documentation
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-muted animate-fade-in">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-muted to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Problem ─────────────────────── */
function Problem() {
  const problems = [
    {
      label: "Generic tracking",
      text: "Most fitness apps offer one-size-fits-all tracking that ignores individual goals, sensor data, and real exercise effects.",
    },
    {
      label: "No smart planning",
      text: "Users are left to create their own workout schedules with no personalized guidance or adaptive reminders.",
    },
    {
      label: "Lack of motivation",
      text: "Without social interaction and friendly competition, users struggle to maintain consistent exercise habits.",
    },
  ];

  return (
    <section className="relative px-6 py-24">
      <div className="relative z-10 mx-auto max-w-5xl">
        <ScrollReveal>
          <SectionLabel>[ The Problem ]</SectionLabel>
          <h2 className="mt-4 mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Why existing fitness apps{" "}
            <span className="text-accent">fall short</span>
          </h2>
        </ScrollReveal>
        <div className="space-y-12">
          {problems.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="grid gap-6 md:grid-cols-[200px_1fr] items-start">
                <p className="text-sm font-semibold text-accent">
                  {item.label}
                </p>
                <p className="text-base leading-relaxed text-muted">
                  {item.text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Feature Highlights ─────────────────────── */
function FeatureHighlights() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel>[ Features ]</SectionLabel>
          <h2 className="mt-4 mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Everything you need for{" "}
            <span className="text-accent">smarter workouts</span>
          </h2>
          <p className="mb-16 max-w-2xl text-base text-muted">
            From sensor data collection to social competitions — Wise Workout
            covers every aspect of your fitness journey.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08}>
              <GradientCard className="p-6 h-full group">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold group-hover:text-accent transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="rounded-full bg-accent/10 border border-accent/20 px-6 py-3 text-sm font-medium text-accent transition hover:bg-accent/20"
            >
              View All Features
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────── How It Works Preview ─────────────────────── */
function HowItWorksPreview() {
  return (
    <section className="relative px-6 py-32">
      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionLabel>[ Process ]</SectionLabel>
          <h2 className="mt-4 mb-16 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple Steps,{" "}
            <span className="text-accent">Powerful Results</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.slice(0, 4).map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <GradientCard className="p-6 group h-full">
                <span className="font-mono text-xs text-accent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-xl font-bold group-hover:text-accent transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/how-it-works"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/10"
            >
              See Full Workflow
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Stats ─────────────────────── */
function StatsSection() {
  return (
    <section className="px-6 py-24">
      <ScrollReveal>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-accent sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

/* ─────────────────────── CTA ─────────────────────── */
function CTA() {
  return (
    <section className="relative px-6 py-32">
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/15 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <SectionLabel>[ Explore ]</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Ready to learn more?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted">
            Dive into our documentation for detailed feature explanations, usage
            guides, and system architecture.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]"
            >
              View Documentation
            </Link>
            <Link
              href="/demo"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/10"
            >
              See Demo
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────── Main Page ─────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <FeatureHighlights />
      <HowItWorksPreview />
      <StatsSection />
      <CTA />
    </>
  );
}

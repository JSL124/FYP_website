import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import PlaceholderImage from "@/app/components/PlaceholderImage";
import { STEPS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "How It Works — Wise Workout",
  description:
    "Learn how Wise Workout tracks your exercise, analyzes your data, and helps you achieve your fitness goals.",
};

const techStack = [
  {
    name: "React Native",
    description: "Cross-platform mobile development for Android and iOS.",
  },
  {
    name: "Sensor APIs",
    description:
      "Integration with accelerometer, gyroscope, and heart rate sensors.",
  },
  {
    name: "Bluetooth / Wi-Fi",
    description: "Seamless connectivity with wearable fitness devices.",
  },
  {
    name: "Data Analytics",
    description:
      "Real-time processing and estimation of exercise effects and trends.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ Process ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How It <span className="text-accent">Works</span>
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            From setup to social sharing — here is how Wise Workout transforms
            your fitness routine in five simple steps.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.08}>
              <GradientCard className="p-6 group h-full">
                <span className="font-mono text-xs text-accent">
                  {step.number}
                </span>
                <h2 className="mt-3 text-xl font-bold group-hover:text-accent transition-colors duration-200">
                  {step.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>

        {/* System Architecture */}
        <div className="mt-32">
          <ScrollReveal>
            <SectionLabel>[ Architecture ]</SectionLabel>
            <h2 className="mt-4 mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
              System <span className="text-accent">Overview</span>
            </h2>
            <p className="mb-8 max-w-2xl text-base text-muted">
              A simplified view of how data flows through the Wise Workout
              application — from sensor input to social output.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PlaceholderImage
              label="System Architecture Diagram: Phone Sensors / Wearable → Data Collection Layer → Analysis Engine → UI & Recommendations → Social Layer"
              aspectRatio="16:9"
            />
          </ScrollReveal>
        </div>

        {/* Tech Stack */}
        <div className="mt-32">
          <ScrollReveal>
            <SectionLabel>[ Technology ]</SectionLabel>
            <h2 className="mt-4 mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
              Technology <span className="text-accent">Stack</span>
            </h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 0.08}>
                <GradientCard className="p-6">
                  <h3 className="text-lg font-bold">{tech.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {tech.description}
                  </p>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-24 text-center">
            <p className="text-muted mb-6">
              Want to see it in detail?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs/system-overview"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-black transition-all duration-200 hover:brightness-110"
              >
                System Documentation
              </Link>
              <Link
                href="/docs/user-manual"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/10"
              >
                User Manual
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

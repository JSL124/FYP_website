import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import PlaceholderImage from "@/app/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "System Overview — Wise Workout",
  description:
    "Architecture, tech stack, and data flow of the Wise Workout mobile application.",
};

const architectureLayers = [
  {
    name: "Presentation Layer",
    description:
      "The mobile UI built with React Native, providing cross-platform screens for workout tracking, analytics, fitness plans, social features, and settings.",
  },
  {
    name: "Business Logic Layer",
    description:
      "Core application logic including exercise detection, calorie estimation algorithms, fitness plan generation, reminder scheduling, and competition management.",
  },
  {
    name: "Data Layer",
    description:
      "Local storage for offline workout data, user profiles, and cached plans. Syncs with cloud database for social features and cross-device continuity.",
  },
  {
    name: "External Services",
    description:
      "Integration with wearable device APIs (Bluetooth/Wi-Fi), social media platforms (Facebook, Instagram, Twitter), and push notification services.",
  },
];

const techStack = [
  { category: "Mobile Framework", items: "React Native (Android & iOS)" },
  { category: "Sensors", items: "Accelerometer, Gyroscope, Heart Rate Monitor" },
  { category: "Connectivity", items: "Bluetooth Low Energy, Wi-Fi Direct" },
  { category: "Data Processing", items: "Real-time exercise analysis engine" },
  { category: "Social Integration", items: "Facebook, Instagram, Twitter APIs" },
  { category: "Notifications", items: "Push notifications, local scheduling" },
];

const designDecisions = [
  {
    decision: "Cross-platform with React Native",
    reason:
      "Single codebase for both Android and iOS reduces development time while maintaining native-like performance for sensor data collection.",
  },
  {
    decision: "Offline-first architecture",
    reason:
      "Workout tracking must work without internet connectivity. Data syncs when connection is available for social features and backup.",
  },
  {
    decision: "Modular sensor abstraction",
    reason:
      "A unified sensor interface allows seamless switching between phone sensors and wearable devices without changing the analysis pipeline.",
  },
  {
    decision: "Personalization engine",
    reason:
      "Fitness plans and advice are generated based on individual user profiles rather than generic templates, improving engagement and effectiveness.",
  },
];

export default function SystemOverviewPage() {
  return (
    <div className="px-6 py-20 lg:px-12">
      <div className="max-w-4xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ System Overview ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            System <span className="text-accent">Architecture</span>
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            A technical overview of how Wise Workout is designed, built, and
            organized. This section covers the layered architecture, data flow,
            technology choices, and key design decisions.
          </p>
        </ScrollReveal>

        {/* Architecture Diagram */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Architecture <span className="text-accent">Diagram</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PlaceholderImage
              label="Architecture Diagram: Presentation Layer → Business Logic → Data Layer → External Services (Wearables, Social APIs, Push Notifications)"
              aspectRatio="16:9"
            />
          </ScrollReveal>
        </section>

        {/* Architecture Layers */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Layered <span className="text-accent">Architecture</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {architectureLayers.map((layer, i) => (
              <ScrollReveal key={layer.name} delay={i * 0.08}>
                <GradientCard className="p-6">
                  <h3 className="text-lg font-bold text-accent">
                    {layer.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {layer.description}
                  </p>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-4 sm:text-3xl">
              Data <span className="text-accent">Flow</span>
            </h2>
            <p className="mb-8 text-base text-muted">
              How sensor data moves from collection to user-facing insights.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PlaceholderImage
              label="Data Flow Diagram: Wearable/Phone Sensors → Raw Data Collection → Preprocessing & Validation → Analysis Engine (Calorie Estimation, HR Analysis) → Results Storage → UI Display & Notifications"
              aspectRatio="16:9"
            />
          </ScrollReveal>
        </section>

        {/* Tech Stack */}
        <section className="mb-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Technology <span className="text-accent">Stack</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto rounded-xl border border-white/5">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/5 bg-card">
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Category
                    </th>
                    <th className="px-6 py-4 font-semibold text-foreground">
                      Technology
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {techStack.map((row) => (
                    <tr
                      key={row.category}
                      className="border-b border-white/5 last:border-0"
                    >
                      <td className="px-6 py-4 text-accent font-medium">
                        {row.category}
                      </td>
                      <td className="px-6 py-4 text-muted">{row.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </section>

        {/* Design Decisions */}
        <section>
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Key Design <span className="text-accent">Decisions</span>
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {designDecisions.map((item, i) => (
              <ScrollReveal key={item.decision} delay={i * 0.08}>
                <div className="grid gap-4 md:grid-cols-[240px_1fr] items-start">
                  <p className="text-sm font-semibold text-accent">
                    {item.decision}
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    {item.reason}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

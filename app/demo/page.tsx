import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import PlaceholderImage from "@/app/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Demo — Wise Workout",
  description:
    "A visual walkthrough of the Wise Workout mobile application features and user experience.",
};

const walkthrough = [
  {
    step: "01",
    title: "Welcome & Onboarding",
    description:
      "Users are greeted with a clean welcome screen and guided through a quick onboarding process. They enter their health profile — age, weight, height, and fitness goals — to personalize their experience.",
    label: "App Screenshot: Welcome & Onboarding Screen",
  },
  {
    step: "02",
    title: "Device Connection",
    description:
      "The app detects nearby wearable devices via Bluetooth and Wi-Fi. Users can pair their fitness tracker or smart watch in just a few taps for enhanced data collection.",
    label: "App Screenshot: Bluetooth Device Pairing",
  },
  {
    step: "03",
    title: "Workout Dashboard",
    description:
      "The main dashboard provides a quick overview of today's progress, upcoming workouts, and recent activity. A prominent 'Start Workout' button is always accessible.",
    label: "App Screenshot: Main Dashboard",
  },
  {
    step: "04",
    title: "Live Workout Tracking",
    description:
      "During a workout, the screen displays real-time data including elapsed time, heart rate, calories burned, and exercise intensity. Data flows from connected sensors continuously.",
    label: "App Screenshot: Live Workout Tracking",
  },
  {
    step: "05",
    title: "Results & Analysis",
    description:
      "After completing a session, users see a detailed breakdown of their workout performance with charts showing heart rate zones, calorie burn rate, and comparison with previous sessions.",
    label: "App Screenshot: Workout Results & Charts",
  },
  {
    step: "06",
    title: "Personalized Fitness Plan",
    description:
      "The fitness plan screen shows a weekly schedule tailored to the user's goals. Each day lists recommended exercises, duration, and target metrics. Plans can be fully customized.",
    label: "App Screenshot: Weekly Fitness Plan",
  },
  {
    step: "07",
    title: "Smart Notifications",
    description:
      "The app sends context-aware notifications — reminding users to work out when behind schedule, and suggesting rest breaks when overtraining is detected.",
    label: "App Screenshot: Smart Notification Examples",
  },
  {
    step: "08",
    title: "Social & Competitions",
    description:
      "Users can view their friends' activity, join or create fitness competitions, and share achievements directly to social media platforms.",
    label: "App Screenshot: Social Feed & Leaderboard",
  },
];

export default function DemoPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ Demo ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            App <span className="text-accent">Walkthrough</span>
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            A visual tour of the Wise Workout experience — from first launch to
            social competitions. Scroll through to see each screen and feature
            in action.
          </p>
        </ScrollReveal>

        {/* Walkthrough */}
        <div className="space-y-32">
          {walkthrough.map((item, i) => (
            <ScrollReveal key={item.step} delay={0.05}>
              <section className="relative">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-mono text-lg text-accent font-bold">
                    {item.step}
                  </span>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {item.title}
                  </h2>
                </div>
                <p className="text-base leading-relaxed text-muted mb-8 max-w-2xl">
                  {item.description}
                </p>
                <PlaceholderImage
                  label={item.label}
                  aspectRatio="16:9"
                />
                {i < walkthrough.length - 1 && (
                  <div className="mt-16 flex justify-center">
                    <div className="h-16 w-[1px] bg-gradient-to-b from-accent/30 to-transparent" />
                  </div>
                )}
              </section>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <div className="mt-24 text-center">
            <p className="text-muted mb-6">
              Want to learn more about each feature?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/docs/user-manual"
                className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,0.3)] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]"
              >
                Read User Manual
              </Link>
              <Link
                href="/features"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/10"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import PlaceholderImage from "@/app/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "User Manual — Wise Workout",
  description:
    "Step-by-step guide on how to use every feature of the Wise Workout mobile application.",
};

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    description:
      "Download the Wise Workout app from the App Store or Google Play. Create an account by entering your basic health information including age, weight, height, and fitness goals. This information helps the app personalize your experience from the very first session.",
    screenshot: "Screenshot: Welcome Screen & Account Setup",
    points: [
      "Available on both Android and iOS",
      "Quick registration with basic health profile",
      "Personalized setup based on your fitness goals",
      "Guided onboarding walkthrough for new users",
    ],
  },
  {
    id: "connecting-devices",
    title: "Connecting Devices",
    description:
      "Wise Workout supports a wide range of wearable fitness devices. Navigate to Settings > Devices to pair your wearable via Bluetooth or Wi-Fi. The app will automatically detect compatible devices nearby and guide you through the pairing process.",
    screenshot: "Screenshot: Device Pairing & Bluetooth Settings",
    points: [
      "Supports Bluetooth and Wi-Fi wearable connections",
      "Auto-detection of compatible devices",
      "Works with phone's built-in sensors if no wearable is available",
      "Real-time connection status indicator",
    ],
  },
  {
    id: "tracking-workout",
    title: "Tracking a Workout",
    description:
      "Tap the 'Start Workout' button on the home screen to begin a session. Choose your exercise type or let the app auto-detect your activity. During the workout, the app displays real-time data including duration, heart rate, calories being burned, and exercise intensity.",
    screenshot: "Screenshot: Active Workout Tracking Screen",
    points: [
      "One-tap workout start",
      "Real-time heart rate and calorie display",
      "Auto-detect exercise type or manual selection",
      "Pause, resume, and stop controls",
    ],
  },
  {
    id: "viewing-results",
    title: "Viewing Results & Analysis",
    description:
      "After completing a workout, view your detailed session summary. The analysis screen shows calories burned, average and maximum heart rate, exercise duration, and intensity breakdown. Switch between daily, weekly, monthly, or custom time periods to track long-term trends.",
    screenshot: "Screenshot: Exercise Results & Analytics Dashboard",
    points: [
      "Detailed per-session metrics and summary",
      "Calories burned and heart rate trends",
      "Daily, weekly, and monthly analysis views",
      "Long-term progress tracking with charts",
    ],
  },
  {
    id: "fitness-plans",
    title: "Fitness Plans & Advice",
    description:
      "Navigate to the Plans tab to view personalized fitness recommendations. The app creates workout schedules based on your goals, fitness level, and available time. Customize any plan by adjusting exercise duration, daily calorie targets, rest days, and plan length.",
    screenshot: "Screenshot: Fitness Plan Schedule & Customization",
    points: [
      "Personalized plans based on goals and health data",
      "Customizable schedule, duration, and intensity",
      "Daily and weekly workout recommendations",
      "Progress tracking against plan targets",
    ],
  },
  {
    id: "reminders",
    title: "Reminders & Notifications",
    description:
      "Wise Workout sends smart notifications to keep you on track. If you fall behind your scheduled workout plan, the app sends a gentle reminder. If you have been exercising too intensely or too long, it recommends taking a break to prevent overtraining.",
    screenshot: "Screenshot: Notification Settings & Reminder Examples",
    points: [
      "Exercise reminders when falling behind schedule",
      "Rest break alerts to prevent overtraining",
      "Configurable notification times and frequency",
      "Smart detection based on activity patterns",
    ],
  },
  {
    id: "social",
    title: "Social Features & Competitions",
    description:
      "Connect your social media accounts from the Social tab. Share your workout completions directly to Facebook, Instagram, or Twitter. Create competitions by inviting other registered users, set challenge rules, and track real-time leaderboard rankings.",
    screenshot: "Screenshot: Social Feed, Competitions & Leaderboard",
    points: [
      "Share achievements on Facebook, Instagram, and Twitter",
      "Create or join fitness competitions",
      "Real-time leaderboard rankings",
      "Invite friends and track group progress",
    ],
  },
  {
    id: "settings",
    title: "Settings & Preferences",
    description:
      "Access Settings from the profile menu to manage your account, connected devices, notification preferences, and privacy controls. Update your health information as your fitness level changes to keep recommendations accurate.",
    screenshot: "Screenshot: Settings & Profile Management",
    points: [
      "Profile and health information management",
      "Device connection settings",
      "Notification and privacy preferences",
      "Data export and account options",
    ],
  },
];

export default function UserManualPage() {
  return (
    <div className="px-6 py-20 lg:px-12">
      <div className="max-w-4xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ User Manual ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            How to Use <span className="text-accent">Wise Workout</span>
          </h1>
          <p className="mb-8 max-w-2xl text-base text-muted sm:text-lg">
            A complete guide to every feature of the Wise Workout application.
            Follow along step by step to get the most out of your fitness
            tracking experience.
          </p>
        </ScrollReveal>

        {/* Table of Contents */}
        <ScrollReveal delay={0.1}>
          <nav className="mb-16 rounded-xl border border-white/5 bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted mb-4">
              Contents
            </h2>
            <ol className="space-y-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm text-muted hover:text-accent transition-colors"
                  >
                    <span className="text-accent/60 mr-2">{i + 1}.</span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </ScrollReveal>

        {/* Sections */}
        <div className="space-y-24">
          {sections.map((section, i) => (
            <ScrollReveal key={section.id} delay={0.05}>
              <section id={section.id}>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    {section.title}
                  </h2>
                </div>

                <p className="text-base leading-relaxed text-muted mb-8">
                  {section.description}
                </p>

                <PlaceholderImage
                  label={section.screenshot}
                  aspectRatio="16:9"
                  className="mb-8"
                />

                <ul className="space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

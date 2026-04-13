import type {
  NavLink,
  Feature,
  Step,
  Stat,
  TeamMember,
  FooterColumn,
  DocLink,
} from "./types";

export const PROJECT = {
  id: "CSIT-26-S2-05",
  name: "Wise Workout",
  title: "A Mobile Application for Wise Workout",
  tagline:
    "Smart fitness tracking powered by sensor data, personalized plans, and social motivation",
  description:
    "A mobile application that collects exercise data from sensors and wearable devices, provides training and fitness advice, and facilitates social interactions such as competitions between registered users.",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Docs", href: "/docs" },
  { label: "Team", href: "/team" },
];

export const FEATURES: Feature[] = [
  {
    title: "Sensor Data Collection",
    description:
      "Collect exercise data from your phone's sensors or smart wearable devices via Wi-Fi and Bluetooth.",
    details:
      "The application seamlessly integrates with your smartphone's built-in accelerometer, gyroscope, and heart rate sensors, as well as external wearable devices. Data is collected in real time during workouts, providing accurate tracking of your movements, steps, distance, and vital signs.",
    icon: "📡",
    placeholderLabel: "Screenshot: Device Pairing & Sensor Dashboard",
  },
  {
    title: "Exercise Effect Estimation",
    description:
      "Estimate calories burned, heart rate trends, and exercise effects over any time period.",
    details:
      "Our analysis engine processes raw sensor data to estimate the results of each activity — from a single session to weekly, monthly, or custom periods. Track metrics like calories burned, average and maximum heart rate, exercise intensity zones, and long-term fitness progress.",
    icon: "📊",
    placeholderLabel: "Screenshot: Exercise Analysis & Statistics",
  },
  {
    title: "Fitness Advice & Planning",
    description:
      "Receive personalized fitness advice and create customizable workout schedules.",
    details:
      "Based on your fitness goals and health information, the app provides tailored recommendations and creates structured workout plans. Customize plan duration, daily targets, exercise types, and rest days to match your preferences and lifestyle.",
    icon: "📋",
    placeholderLabel: "Screenshot: Fitness Plan & Schedule View",
  },
  {
    title: "Smart Reminders",
    description:
      "Get notified to exercise when falling behind, or to rest when overtraining.",
    details:
      "Intelligent notifications keep you on track with your fitness goals. The app monitors your activity against scheduled plans and sends timely reminders to work out if you're falling behind. It also detects overtraining patterns and reminds you to take necessary rest breaks.",
    icon: "🔔",
    placeholderLabel: "Screenshot: Notification & Reminder Settings",
  },
  {
    title: "Social & Competitions",
    description:
      "Share achievements on social media and compete with other users.",
    details:
      "Connect with friends and the broader fitness community. Share your workout completions on Facebook, Instagram, and Twitter. Create or join competitions with other registered users, track leaderboard rankings, and share competition results on social media to stay motivated.",
    icon: "🏆",
    placeholderLabel: "Screenshot: Leaderboard & Social Feed",
  },
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Set Up",
    description:
      "Download the app and connect your wearable device via Bluetooth or Wi-Fi.",
  },
  {
    number: "02",
    title: "Track",
    description:
      "Start a workout session and let sensors collect real-time exercise data.",
  },
  {
    number: "03",
    title: "Analyze",
    description:
      "View calories burned, heart rate trends, and exercise effect estimations.",
  },
  {
    number: "04",
    title: "Plan",
    description:
      "Receive personalized fitness plans and schedule your workouts.",
  },
  {
    number: "05",
    title: "Connect",
    description:
      "Share progress, compete with friends, and stay motivated together.",
  },
];

export const STATS: Stat[] = [
  { value: "5", label: "Core Features" },
  { value: "3+", label: "Data Sources" },
  { value: "Real-time", label: "Analysis" },
  { value: "Personalized", label: "Fitness Plans" },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Developer",
    bio: "Responsible for mobile application development and sensor integration.",
  },
  {
    name: "Team Member 2",
    role: "Developer",
    bio: "Focused on backend services, data analysis, and fitness algorithms.",
  },
  {
    name: "Team Member 3",
    role: "Developer",
    bio: "Handles social features, UI/UX design, and testing.",
  },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Demo", href: "/demo" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { label: "Overview", href: "/docs" },
      { label: "User Manual", href: "/docs/user-manual" },
      { label: "System Overview", href: "/docs/system-overview" },
    ],
  },
  {
    title: "Project",
    links: [
      { label: "Team", href: "/team" },
      { label: "GitHub", href: "#" },
    ],
  },
];

export const DOC_LINKS: DocLink[] = [
  {
    label: "User Manual",
    href: "/docs/user-manual",
    description: "Learn how to use every feature of the Wise Workout app.",
  },
  {
    label: "System Overview",
    href: "/docs/system-overview",
    description:
      "Architecture, tech stack, and data flow of the application.",
  },
];

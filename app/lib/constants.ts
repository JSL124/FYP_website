import type {
  NavLink,
  Feature,
  Step,
  Stat,
  TeamMember,
  MeetingMinute,
  FooterColumn,
  DocLink,
} from "./types";

export const PROJECT = {
  id: "FYP-26-S2-38",
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
    name: "Lee Jinseo",
    role: "Leader",
    bio: "Passionate about orchestrating multiple AI tools to accelerate engineering. Leads the team by weaving AI-driven workflows into product design, development, and day-to-day collaboration.",
    photo: "/images/team/lee-jinseo.jpg",
    github: "https://github.com/JSL124",
    linkedin:
      "https://www.linkedin.com/in/jinseo-lee-58b255341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "jason2188@naver.com",
  },
  {
    name: "Kenji Yeo",
    role: "Member",
    bio: "Supports the project with a practical engineering mindset, helping shape implementation details and keep the Wise Workout experience clear, reliable, and easy to present.",
    photo: "/images/team/kenji-yeo.png",
    github: "https://github.com/batokok",
    linkedin:
      "https://www.linkedin.com/in/kenji-y-808149118?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    email: "Kenjiyeo0@gmail.com",
  },
  {
    name: "Kaif Lim Er",
    role: "Member",
    bio: "Contributes to the project as a steady team member, supporting the development of a clear, approachable, and well-presented Wise Workout experience.",
    github: "https://github.com/cookiemonztar2-design",
    linkedin: "https://sg.linkedin.com/in/kaif-lim-82a012227",
    email: "Kaif.2001@yahoo.com",
  },
  {
    name: "LIUZHIHUI",
    role: "Member",
    bio: "Supports the team with focused implementation work, helping turn project ideas into a clearer and more dependable Wise Workout presentation.",
    photo: "/images/team/liuzhihui.png",
    github: "https://github.com/LZH051",
    email: "1789511934@qq.com",
  },
  {
    name: "KONADA OBADIAH NAHSHON",
    role: "Member",
    bio: "Brings a focused and dependable presence to the team, supporting the project with implementation effort that helps keep Wise Workout polished and presentation-ready.",
    photo: "/images/team/konada-obadiah-nahshon.png",
    github: "https://github.com/nahshonn",
    email: "obadiahnahshon@gmail.com",
  },
];

export const MEETING_MINUTES: MeetingMinute[] = [
  {
    slug: "2026-04-11-week-1-project-direction-review",
    date: "11 Apr 2026",
    title: "Week 1 Project Direction Review",
    summary:
      "The team reviewed competitor running apps, aligned on a beginner-friendly product direction, and refined the project's feature and monetization strategy.",
    preview: "Market research, feature direction, and business model alignment.",
    status: "Archived",
    totalDuration: "1 hour",
    location: "Online (Zoom)",
    meetingType: "Weekly Project Call - Week 1",
    calledBy: "Lee Jinseo",
    facilitator: "Lee Jinseo",
    noteTaker: "Lee Jinseo",
    timekeeper: "Lee Jinseo",
    attendees: [
      "Lee Jinseo",
      "Kenji Yeo",
      "Kaif Lim Er",
      "Liu Zhi Hui",
      "Konada Obadiah Nahshon",
    ],
    decisions: [
      "Position community and gamification as key differentiators from existing running apps.",
      "Keep core features accessible for free and reserve advanced personalization for premium users.",
      "Use the market research findings to sharpen feature selection and product scope.",
    ],
    actions: [
      "Compare competing app features in more detail by 16 Apr 2026.",
      "Identify missing features and finalize five additional features by 12 Apr 2026.",
      "Write short feature explanations for the selected additions by 16 Apr 2026.",
    ],
    agenda: [
      {
        duration: "15 mins",
        topic: "Market Research Review",
        presenter: "All members",
        discussion: [
          "Reviewed Strava, Nike Run Club, Runkeeper, Garmin Connect, and Whoop as benchmark products.",
          "Compared how each platform balances community features, training guidance, analytics depth, and hardware dependence.",
          "Identified common baseline features such as GPS tracking, watch integration, achievements, and route sharing.",
        ],
        conclusions: [
          "Existing apps split clearly between community-driven and individual-training experiences.",
          "Pricing and paywall pressure are major differentiators in the current market.",
          "The team should compete by balancing accessibility with meaningful analytics and motivation features.",
        ],
        actions: [
          "Compare features across apps in detail by 16 Apr 2026.",
          "Identify missing features worth adding by 12 Apr 2026.",
        ],
      },
      {
        duration: "20 mins",
        topic: "Proposed Feature Discussion",
        presenter: "All members",
        discussion: [
          "Reviewed required project features: exercise data collection, exercise effect estimation, and fitness pattern advice.",
          "Proposed additional ideas including a heatmap system, AI-driven training recommendations, popular route recommendation, zone capture, dynamic challenges, and mission-based experiences.",
          "Aligned on designing for beginners who need sustained motivation rather than a purely metrics-heavy app.",
        ],
        conclusions: [
          "Gamification should become the core product differentiator.",
          "The feature set should stay beginner-friendly and avoid copying standard badge systems too closely.",
          "Premium features can exist, but the main experience should remain broadly accessible.",
        ],
        actions: [
          "Finalize five additional features by 12 Apr 2026.",
          "Write one to two paragraphs explaining each selected feature by 16 Apr 2026.",
        ],
      },
      {
        duration: "10 mins",
        topic: "Business Model Discussion",
        presenter: "All members",
        discussion: [
          "Discussed the drawbacks of existing pricing models, especially the heavy paywalls in Strava and the hardware or subscription costs associated with Garmin and Whoop.",
          "Explored a hybrid business model that keeps core tracking and motivation tools free while reserving more advanced coaching and analytics for paying users.",
        ],
        conclusions: [
          "A hybrid free-plus-premium model is the most realistic direction.",
          "Advanced personalization and analytics are the strongest candidates for subscription features.",
        ],
        actions: [
          "Decide which features remain free and which become subscription-based by 12 Apr 2026.",
        ],
      },
    ],
  },
  {
    slug: "2026-04-04-ice-breaking-and-scope-alignment",
    date: "04 Apr 2026",
    title: "Ice-Breaking and Scope Alignment",
    summary:
      "The first team meeting focused on introductions, initial collaboration setup, and agreeing on the broad direction for the project research phase.",
    preview: "Introductions and initial project scope alignment.",
    status: "Archived",
    totalDuration: "50 mins",
    location: "SIM Block B",
    meetingType: "Ice Breaking",
    calledBy: "Jinseo Lee",
    facilitator: "Jinseo Lee",
    noteTaker: "Jinseo Lee",
    timekeeper: "Jinseo Lee",
    attendees: [
      "Lee Jinseo",
      "Kenji Yeo",
      "Kaif Lim Er",
      "Liu Zhi Hui",
    ],
    decisions: [
      "Confirmed the team structure and selected a team leader.",
      "Agreed to begin by researching existing running and health applications.",
      "Narrowed the initial project scope toward a running-focused application concept.",
    ],
    actions: [
      "Each member researches one competing app by 11 Apr 2026.",
      "Complete initial feature brainstorming by 11 Apr 2026.",
    ],
    agenda: [
      {
        duration: "15:30 - 15:40",
        topic: "Team Introduction",
        presenter: "Jinseo Lee",
        discussion: [
          "Each team member introduced themselves and shared their background and interests.",
          "The session established early familiarity to support smoother collaboration in later project stages.",
        ],
        conclusions: [
          "The team gained a basic understanding of one another's strengths and working style.",
        ],
        actions: [
          "Confirm the team leader on 04 Apr 2026.",
        ],
      },
      {
        duration: "15:40 - 16:20",
        topic: "Project Scope Selection",
        presenter: "Jinseo Lee",
        discussion: [
          "Discussed the need for market research before finalizing the product direction.",
          "Agreed that each member would study one existing running or health-related application.",
          "Planned to evaluate what current users like, what frustrates them, and which features are missing.",
        ],
        conclusions: [
          "The initial scope was aligned around a running-focused application concept.",
          "Competitor research would drive the next round of feature discussion.",
        ],
        actions: [
          "Each member researches one competing app by 11 Apr 2026.",
          "Complete initial feature brainstorming by 11 Apr 2026.",
        ],
      },
    ],
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
      { label: "GitHub", href: "https://github.com/JSL124/FYP_Runiac" },
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
    label: "Meeting Minutes",
    href: "/docs/meeting-minutes",
    description: "Browse project meeting records, decisions, and detailed notes.",
  },
  {
    label: "System Overview",
    href: "/docs/system-overview",
    description:
      "Architecture, tech stack, and data flow of the application.",
  },
];

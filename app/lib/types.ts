export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  details: string;
  icon: string;
  placeholderLabel: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

export interface MeetingAgendaItem {
  duration: string;
  topic: string;
  presenter: string;
  discussion: string[];
  conclusions: string[];
  actions: string[];
}

export interface MeetingMinute {
  slug: string;
  date: string;
  title: string;
  summary: string;
  preview: string;
  status: string;
  totalDuration: string;
  location: string;
  meetingType: string;
  calledBy: string;
  facilitator: string;
  noteTaker: string;
  timekeeper: string;
  decisions: string[];
  actions: string[];
  agenda: MeetingAgendaItem[];
  attendees?: string[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface DocLink {
  label: string;
  href: string;
  description: string;
}

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

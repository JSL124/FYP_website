import Link from "next/link";
import type { Metadata } from "next";
import MeetingMinutesRegistry from "@/app/components/MeetingMinutesRegistry";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import TeamMemberCard from "@/app/components/TeamMemberCard";
import { MEETING_MINUTES, PROJECT, TEAM_MEMBERS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Team — Wise Workout",
  description: "Meet the team behind the Wise Workout mobile application.",
};

const RECENT_MEETING_MINUTES = MEETING_MINUTES.slice(0, 2);

export default function TeamPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Page Header */}
        <ScrollReveal>
          <SectionLabel>[ Team ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Meet the <span className="text-accent">Team</span>
          </h1>
          <p className="mb-16 max-w-2xl text-base text-muted sm:text-lg">
            The people behind Wise Workout — building smarter fitness tracking
            for everyone.
          </p>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <TeamMemberCard member={member} />
            </ScrollReveal>
          ))}
        </div>

        {/* Supervisor */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Project <span className="text-accent">Supervisor</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <GradientCard className="p-8">
              <div className="flex items-center gap-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-white/10 bg-card">
                  <svg
                    className="h-6 w-6 text-muted/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Ee Kiam Keong</h3>
                  <p className="text-sm text-accent">Project Supervisor</p>
                  <a
                    href="mailto:kkeesg@yahoo.com.sg"
                    className="mt-2 inline-block text-sm text-muted transition hover:text-accent"
                  >
                    kkeesg@yahoo.com.sg
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    Providing guidance and oversight for the Wise Workout
                    project.
                  </p>
                </div>
              </div>
            </GradientCard>
          </ScrollReveal>
        </div>

        {/* Meeting Minutes */}
        <div className="mt-24">
          <ScrollReveal>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4 sm:text-3xl">
                  Meeting <span className="text-accent">Minutes</span>
                </h2>
                <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  Recent meeting records that document the team&apos;s planning,
                  decisions, and next steps throughout the project.
                </p>
              </div>
              <Link
                href="/docs/meeting-minutes"
                className="inline-flex items-center gap-2 self-start rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-accent transition hover:border-accent hover:bg-accent/10"
              >
                View all meeting records
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          <MeetingMinutesRegistry meetings={RECENT_MEETING_MINUTES} delayStep={0.1} />
        </div>

        {/* Project Info */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-2xl font-bold mb-8 sm:text-3xl">
              Project <span className="text-accent">Information</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { label: "Project ID", value: PROJECT.id },
                { label: "Project Title", value: PROJECT.title },
                { label: "Academic Year", value: "2025-2026 Semester 2" },
                { label: "Institution", value: "To be updated" },
              ].map((info) => (
                <div
                  key={info.label}
                  className="rounded-xl border border-white/5 bg-card p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {info.label}
                  </p>
                  <p className="mt-2 text-base font-bold">{info.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

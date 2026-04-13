import type { Metadata } from "next";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import { PROJECT, TEAM_MEMBERS } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Team — Wise Workout",
  description: "Meet the team behind the Wise Workout mobile application.",
};

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
              <GradientCard className="p-8 h-full text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-white/10 bg-card">
                  <svg
                    className="h-8 w-8 text-muted/40"
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
                <h2 className="text-lg font-bold">{member.name}</h2>
                <p className="mt-1 text-sm font-medium text-accent">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
              </GradientCard>
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
                  <h3 className="text-lg font-bold">Supervisor Name</h3>
                  <p className="text-sm text-accent">Project Supervisor</p>
                  <p className="mt-2 text-sm text-muted">
                    Providing guidance and oversight for the Wise Workout
                    project.
                  </p>
                </div>
              </div>
            </GradientCard>
          </ScrollReveal>
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

import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import GradientCard from "@/app/components/GradientCard";
import { MEETING_MINUTES } from "@/app/lib/constants";

type MeetingMinutePageProps = {
  params: Promise<{ slug: string }>;
};

function getMeetingMinute(slug: string) {
  return MEETING_MINUTES.find((meeting) => meeting.slug === slug);
}

export async function generateStaticParams() {
  return MEETING_MINUTES.map((meeting) => ({
    slug: meeting.slug,
  }));
}

export async function generateMetadata({
  params,
}: MeetingMinutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const meeting = getMeetingMinute(slug);

  if (!meeting) {
    return {
      title: "Meeting Notes — Wise Workout",
    };
  }

  return {
    title: `${meeting.title} — Meeting Minutes — Wise Workout`,
    description: meeting.summary,
  };
}

export default async function MeetingMinuteDetailPage({
  params,
}: MeetingMinutePageProps) {
  const { slug } = await params;
  const meeting = getMeetingMinute(slug);

  if (!meeting) {
    notFound();
  }

  return (
    <div className="px-6 py-20 lg:px-12">
      <div className="max-w-4xl">
        <ScrollReveal>
          <SectionLabel>[ Meeting Minutes ]</SectionLabel>
          <Link
            href="/docs/meeting-minutes"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <span aria-hidden="true">&larr;</span>
            Back to all meeting records
          </Link>
          <h1 className="mt-6 mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {meeting.title}
          </h1>
          <p className="max-w-3xl text-base text-muted sm:text-lg">
            {meeting.summary}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Date", value: meeting.date },
              { label: "Total Duration", value: meeting.totalDuration },
              { label: "Location", value: meeting.location },
              { label: "Meeting Type", value: meeting.meetingType },
              { label: "Called By", value: meeting.calledBy },
              { label: "Facilitator", value: meeting.facilitator },
              { label: "Note Taker", value: meeting.noteTaker },
              { label: "Timekeeper", value: meeting.timekeeper },
              {
                label: "Attendees",
                value: meeting.attendees?.join(", ") ?? "To be updated",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex min-h-[136px] flex-col rounded-xl border border-white/5 bg-card p-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-6">
          {meeting.agenda.map((item, index) => (
            <ScrollReveal key={`${item.topic}-${item.duration}`} delay={index * 0.06}>
              <GradientCard className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                  <div className="lg:w-52 lg:shrink-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      Agenda {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold">{item.topic}</h2>
                    <p className="mt-3 text-sm text-muted">Duration: {item.duration}</p>
                    <p className="mt-1 text-sm text-muted">
                      Presenter: {item.presenter}
                    </p>
                  </div>

                  <div className="flex-1 space-y-6">
                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                        Discussion
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                        {item.discussion.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                        Conclusions
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                        {item.conclusions.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                        Action Items
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/90 sm:text-base">
                        {item.actions.map((point) => (
                          <li key={point} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>
                </div>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}

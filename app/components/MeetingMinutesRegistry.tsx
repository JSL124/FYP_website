import Link from "next/link";
import ScrollReveal from "@/app/components/ScrollReveal";
import GradientCard from "@/app/components/GradientCard";
import type { MeetingMinute } from "@/app/lib/types";

type MeetingMinutesRegistryProps = {
  meetings: MeetingMinute[];
  delayStep?: number;
};

export default function MeetingMinutesRegistry({
  meetings,
  delayStep = 0.08,
}: MeetingMinutesRegistryProps) {
  return (
    <div className="space-y-6">
      {meetings.map((meeting, index) => (
        <ScrollReveal key={meeting.slug} delay={index * delayStep}>
          <GradientCard className="min-h-[206px] p-6 sm:p-8">
            <div className="relative z-10 grid min-h-[150px] grid-cols-1 gap-6 md:grid-cols-[1.15fr_2.4fr_0.9fr_0.9fr] md:grid-rows-[auto_1fr] md:items-center">
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:block">
                Date
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:block">
                Topic / Directive
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:block">
                Status
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:block">
                Registry
              </span>

              <div className="pt-1 md:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:hidden">
                  Date
                </p>
                <p className="mt-1 text-sm font-semibold text-accent">
                  {meeting.date}
                </p>
              </div>

              <div className="pt-1 md:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:hidden">
                  Topic / Directive
                </p>
                <h3 className="mt-1 text-lg font-bold">{meeting.title}</h3>
                <p className="mt-1 text-sm text-muted">{meeting.preview}</p>
              </div>

              <div className="pt-1 md:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:hidden">
                  Status
                </p>
                <span className="mt-1 inline-flex rounded-sm border border-accent/30 bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {meeting.status}
                </span>
              </div>

              <div className="pt-1 md:pt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:hidden">
                  Registry
                </p>
                <Link
                  href={`/docs/meeting-minutes/${meeting.slug}`}
                  className="relative z-20 mt-1 inline-flex cursor-pointer items-center justify-center rounded-sm border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition hover:border-accent/40 hover:bg-white/5 hover:text-accent"
                >
                  View
                </Link>
              </div>
            </div>
          </GradientCard>
        </ScrollReveal>
      ))}
    </div>
  );
}

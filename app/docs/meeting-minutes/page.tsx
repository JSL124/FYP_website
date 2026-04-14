import type { Metadata } from "next";
import MeetingMinutesRegistry from "@/app/components/MeetingMinutesRegistry";
import ScrollReveal from "@/app/components/ScrollReveal";
import SectionLabel from "@/app/components/SectionLabel";
import { MEETING_MINUTES } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Meeting Minutes — Wise Workout",
  description:
    "Review all Wise Workout project meeting records, decisions, and follow-up actions.",
};

export default function MeetingMinutesPage() {
  return (
    <div className="px-6 py-20 lg:px-12">
      <div className="max-w-4xl">
        <ScrollReveal>
          <SectionLabel>[ Meeting Minutes ]</SectionLabel>
          <h1 className="mt-4 mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Project <span className="text-accent">Meeting Records</span>
          </h1>
          <p className="mb-16 max-w-3xl text-base text-muted sm:text-lg">
            This section captures meeting discussions, decisions, and action
            items in a compact registry. Open any record to inspect the full
            documentation.
          </p>
        </ScrollReveal>

        <MeetingMinutesRegistry meetings={MEETING_MINUTES} />
      </div>
    </div>
  );
}

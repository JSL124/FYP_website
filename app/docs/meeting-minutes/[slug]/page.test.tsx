import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MeetingMinuteDetailPage from "./page";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Meeting minute detail page", () => {
  it("renders the full meeting documentation for a selected record", async () => {
    render(
      await MeetingMinuteDetailPage({
        params: Promise.resolve({
          slug: "2026-04-11-week-1-project-direction-review",
        }),
      })
    );

    expect(
      screen.getByRole("heading", { name: /week 1 project direction review/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/market research review/i)).toBeInTheDocument();
    expect(
      screen.getByText(/reviewed strava, nike run club, runkeeper, garmin connect, and whoop/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/total duration/i)).toBeInTheDocument();
    expect(screen.getByText(/^1 hour$/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /back to all meeting records/i })
    ).toHaveAttribute("href", "/docs/meeting-minutes");
  });
});

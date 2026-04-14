import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import MeetingMinutesPage from "./page";

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

describe("Meeting minutes index page", () => {
  it("renders the full list as a compact registry with detail links", () => {
    render(<MeetingMinutesPage />);

    expect(
      screen.getByRole("heading", { name: /project meeting records/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/topic \/ directive/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/archived/i)).toHaveLength(2);
    expect(
      screen.getByText(/introductions and initial project scope alignment/i)
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /^view$/i })[0]
    ).toHaveAttribute(
      "href",
      "/docs/meeting-minutes/2026-04-11-week-1-project-direction-review"
    );
    expect(
      screen.getAllByRole("link", { name: /^view$/i })[1]
    ).toHaveAttribute(
      "href",
      "/docs/meeting-minutes/2026-04-04-ice-breaking-and-scope-alignment"
    );
  });
});

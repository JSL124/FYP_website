import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import DocsIndexPage from "./page";

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

describe("Docs index page", () => {
  it("renders standardized documentation cards with equal-height layout classes", () => {
    const { container } = render(<DocsIndexPage />);

    expect(
      screen.getByRole("heading", { name: /wise workout docs/i })
    ).toBeInTheDocument();

    const grid = container.querySelector(".grid.auto-rows-fr");
    expect(grid).toBeTruthy();

    const meetingMinutesLink = screen.getByRole("link", {
      name: /meeting minutes/i,
    });
    expect(meetingMinutesLink).toHaveAttribute("href", "/docs/meeting-minutes");
    expect(meetingMinutesLink).toHaveClass("h-full");

    const card = meetingMinutesLink.querySelector(".gradient-border");
    expect(card).toHaveClass("h-full", "min-h-[220px]", "flex", "flex-col");
  });
});

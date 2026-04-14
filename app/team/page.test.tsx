/* eslint-disable @next/next/no-img-element */

import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import TeamPage from "./page";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    fill?: boolean;
    [key: string]: unknown;
  }) => {
    delete props.fill;

    return <img src={src} alt={alt} {...props} />;
  },
}));

describe("Team page", () => {
  it("shows Lee Jinseo's photo on the card front with name and role", () => {
    render(<TeamPage />);

    const leeCard = screen.getByRole("button", {
      name: /lee jinseo card\. click to show details\./i,
    });

    expect(screen.getByAltText(/lee jinseo/i)).toBeInTheDocument();
    expect(within(leeCard).getByRole("heading", { name: /lee jinseo/i })).toBeInTheDocument();
    expect(within(leeCard).getByText(/^leader$/i)).toBeInTheDocument();
  });

  it("shows description and social links after flipping Lee Jinseo's card", () => {
    render(<TeamPage />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /lee jinseo card\. click to show details\./i,
      })
    );

    expect(
      screen.getByText(/passionate about orchestrating multiple ai tools/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /lee jinseo on github/i })).toHaveAttribute(
      "href",
      "https://github.com/JSL124"
    );
    expect(
      screen.getByRole("link", { name: /lee jinseo on linkedin/i })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/jinseo-lee-58b255341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    );
    expect(screen.getByRole("link", { name: /lee jinseo email/i })).toHaveAttribute(
      "href",
      "mailto:jason2188@naver.com"
    );
  });

  it("renders a compact recent meeting minutes registry with detail links", () => {
    render(<TeamPage />);

    expect(
      screen.getByRole("heading", { name: /meeting minutes/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /week 1 project direction review/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/market research, feature direction, and business model alignment/i)
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/archived/i)
    ).toHaveLength(2);
    expect(screen.getAllByText(/topic \/ directive/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /view all meeting records/i })
    ).toHaveAttribute("href", "/docs/meeting-minutes");
    expect(
      screen.getAllByRole("link", { name: /^view$/i })[0]
    ).toHaveAttribute(
      "href",
      "/docs/meeting-minutes/2026-04-11-week-1-project-direction-review"
    );
  });

  it("shows meeting records in reverse chronological order", () => {
    render(<TeamPage />);

    const meetingHeadings = screen.getAllByRole("heading", { level: 3 });
    const weekOneIndex = meetingHeadings.findIndex((heading) =>
      /week 1 project direction review/i.test(heading.textContent ?? "")
    );
    const iceBreakingIndex = meetingHeadings.findIndex((heading) =>
      /ice-breaking and scope alignment/i.test(heading.textContent ?? "")
    );

    expect(weekOneIndex).toBeGreaterThanOrEqual(0);
    expect(iceBreakingIndex).toBeGreaterThanOrEqual(0);
    expect(weekOneIndex).toBeLessThan(iceBreakingIndex);
  });
});

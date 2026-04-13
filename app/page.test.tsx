import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Home from "./page";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Home page", () => {
  it("renders the project name in the hero", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /wise workout/i })
    ).toBeInTheDocument();
  });

  it("renders links to features and docs", () => {
    render(<Home />);
    const featureLinks = screen.getAllByRole("link", {
      name: /explore features/i,
    });
    expect(featureLinks.length).toBeGreaterThan(0);

    const docLinks = screen.getAllByRole("link", {
      name: /view documentation/i,
    });
    expect(docLinks.length).toBeGreaterThan(0);
  });
});

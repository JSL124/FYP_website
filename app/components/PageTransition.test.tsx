import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PageTransition from "./PageTransition";

vi.mock("next/navigation", () => ({
  usePathname: () => "/features",
}));

describe("PageTransition", () => {
  it("renders children inside a route-aware animated wrapper", () => {
    render(
      <PageTransition>
        <div>Animated page content</div>
      </PageTransition>
    );

    const wrapper = screen.getByTestId("page-transition");

    expect(wrapper).toHaveAttribute("data-route", "/features");
    expect(wrapper).toHaveClass("page-transition");
    expect(screen.getByText("Animated page content")).toBeInTheDocument();
  });
});

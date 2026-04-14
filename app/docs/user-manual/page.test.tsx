import { render, screen } from "@testing-library/react";
import UserManualPage from "./page";

describe("User manual page", () => {
  it("adds scroll offset classes to section anchors", () => {
    const { container } = render(<UserManualPage />);

    const gettingStarted = container.querySelector("#getting-started");
    expect(gettingStarted).toHaveClass("scroll-mt-24", "md:scroll-mt-28");
  });

  it("renders a table of contents entry for each section", () => {
    render(<UserManualPage />);

    expect(
      screen.getByRole("link", { name: /getting started/i })
    ).toHaveAttribute("href", "#getting-started");
    expect(
      screen.getByRole("link", { name: /social features & competitions/i })
    ).toHaveAttribute("href", "#social");
  });
});

/* eslint-disable @next/next/no-img-element */

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer";

import { vi } from "vitest";

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => <img src={src} alt={alt} {...props} />,
}));

describe("Footer", () => {
  it("renders the Runiac brand lockup", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /runiac home/i })).toBeInTheDocument();
    expect(screen.getByAltText(/runiac logo/i)).toBeInTheDocument();
    expect(screen.getByText("Runiac")).toBeInTheDocument();
    expect(screen.getByText(/project id: fyp-26-s2-38/i)).toBeInTheDocument();
  });
});

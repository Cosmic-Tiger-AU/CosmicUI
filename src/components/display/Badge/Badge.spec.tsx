import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders correctly", () => {
    render(<Badge>Test Badge</Badge>);
    const badgeElement = screen.getByText(/Test Badge/i);
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies className correctly", () => {
    render(<Badge className="test-class">Classy Badge</Badge>);
    const badgeElement = screen.getByText(/Classy Badge/i);
    expect(badgeElement).toHaveClass("test-class");
  });

  it("applies variant correctly", () => {
    render(<Badge variant="primary">Primary Badge</Badge>);
    const badgeElement = screen.getByText(/Primary Badge/i);
    expect(badgeElement).toHaveClass("bg-primary", "text-primary-foreground");
  });
});

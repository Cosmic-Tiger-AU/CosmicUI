import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from ".";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("applies className correctly", () => {
    render(<Button className="test-class">Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass("test-class");
  });
});

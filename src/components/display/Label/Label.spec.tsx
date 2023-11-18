import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Label } from "./Label";

describe("Label", () => {
  it("renders children correctly", () => {
    render(<Label>😺</Label>);
    const labelElement = screen.getByText(/😺/i);
    expect(labelElement).toBeInTheDocument();
  });

  it("applies className correctly", () => {
    render(<Label className="test-class">Classy 😺</Label>);
    const labelElement = screen.getByText(/Classy 😺/i);
    expect(labelElement).toHaveClass("test-class");
  });

  it("applies htmlFor correctly", () => {
    render(<Label htmlFor="test-id">Blind 😺</Label>);
    const labelElement = screen.getByText(/Blind 😺/i);
    expect(labelElement).toHaveAttribute("for", "test-id");
  });
});

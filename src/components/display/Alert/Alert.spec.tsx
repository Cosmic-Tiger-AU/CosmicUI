import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "./Alert";

describe("Alert", () => {
  it("renders correctly", () => {
    render(<Alert>Test Alert</Alert>);
    const alertElement = screen.getByText(/Test Alert/i);
    expect(alertElement).toBeInTheDocument();
  });

  it("applies className correctly", () => {
    render(<Alert className="test-class">Classy Alert</Alert>);
    const alertElement = screen.getByText(/Classy Alert/i);
    expect(alertElement).toHaveClass("test-class");
  });

  it("applies variant correctly", () => {
    render(<Alert variant="error">Error Alert</Alert>);
    const alertElement = screen.getByText(/Error Alert/i);
    expect(alertElement).toHaveClass(
      "border-danger/50",
      "text-danger-foreground",
    );
  });

  //   it("displays correct icon for variant", () => {
  //     render(<Alert variant="success">Success Alert</Alert>);
  //     const alertIcon = screen.getByRole("img");
  //     expect(alertIcon).toHaveClass("fa-circle-check");
  //   });
});

describe("AlertTitle", () => {
  it("renders correctly", () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("AlertDescription", () => {
  it("renders correctly", () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText(/Test Description/i);
    expect(descriptionElement).toBeInTheDocument();
  });
});

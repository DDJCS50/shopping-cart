import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Homepage from "../src/components/Homepage";

describe("App component", () => {
  it("renders correct heading", () => {
    render(<Homepage />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});

import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Homepage, NavBar } from "../src/components/Homepage";
import { MemoryRouter } from "react-router-dom";

describe("Homepage component", () => {
  it("renders correct heading in navbar", () => {
    render(
      <MemoryRouter>
        <NavBar></NavBar>
      </MemoryRouter>
    );
    const testing = screen.getByText(/odin's shop/i);
    expect(testing.textContent).toMatch(/odin's shop/i);
  });
});

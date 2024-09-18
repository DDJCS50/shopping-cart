import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Homepage } from "../src/components/Homepage";
import { MemoryRouter } from "react-router-dom";

describe("Homepage component", () => {
  it("renders correct heading in navbar", () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("heading")[0].textContent).toMatch("Odin's Shop");
  });
});

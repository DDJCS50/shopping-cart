import { CartCard, RemoveCartButton } from "../src/components/Cart";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { userEvent } from "@testing-library/user-event";

describe("Cart page", () => {
  const mockItem = { category: "men", description: "mock item", id: 1, image: "#", price: 100, rating: { rate: 5, count: 100 }, title: "Mock" };
  it("renders correct card", () => {
    render(
      <MemoryRouter>
        <CartCard item={mockItem} itemArray={[1]}></CartCard>
      </MemoryRouter>
    );
    expect(screen.getByText("Mock")).toBeInTheDocument();
    expect(screen.getByText("Rating: 5/5 Reviews: 100")).toBeInTheDocument();
  });
  it("renders correct button", () => {
    render(
      <MemoryRouter>
        <RemoveCartButton></RemoveCartButton>
      </MemoryRouter>
    );

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
  it("calls basic button function when clicked", async () => {
    const mockFn = vi.fn();
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <RemoveCartButton setItemArray={() => {}} setCartItems={mockFn} itemArray={[0]}></RemoveCartButton>
      </MemoryRouter>
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockFn).toHaveBeenCalledOnce();
  });
});

import { Header } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<Header />);
}

describe("<Header />", () => {
  it("should render the component", () => {
    renderTemplate();

    const icons = screen.getAllByTestId("icon");

    expect(icons.length).toBeGreaterThan(0);
  });
});

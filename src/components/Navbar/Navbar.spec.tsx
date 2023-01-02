import { Navbar } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<Navbar />);
}

describe("<Navbar />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /TechChat/i,
    });

    expect(component).toBeInTheDocument();
  });
});

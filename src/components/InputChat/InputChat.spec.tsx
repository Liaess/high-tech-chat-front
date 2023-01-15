import { InputChat } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<InputChat />);
}

describe("<InputChat />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /InputChat/i,
    });

    expect(component).toBeInTheDocument();
  });
});

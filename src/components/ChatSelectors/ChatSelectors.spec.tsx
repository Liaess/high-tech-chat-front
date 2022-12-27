import { ChatSelectors } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  render(<ChatSelectors />);
}

describe("<ChatSelectors />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /SELETORES DE CHAT/i,
    });

    expect(component).toBeInTheDocument();
  });
});

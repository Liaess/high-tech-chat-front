import { Chat } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<Chat />);
}

describe("<Chat />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /messages/i,
    });

    expect(component).toBeInTheDocument();
  });
});

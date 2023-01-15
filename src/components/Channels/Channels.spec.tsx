import { Channels } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<Channels />);
}

describe("<Channels />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /Channels/i,
    });

    expect(component).toBeInTheDocument();
  });
});

import { Users } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<Users />);
}

describe("<Users />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /USERS/i,
    });

    expect(component).toBeInTheDocument();
  });
});

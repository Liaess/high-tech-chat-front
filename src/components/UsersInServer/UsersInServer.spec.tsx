import { UsersInServer } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<UsersInServer />);
}

describe("<UsersInServer />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /UsersInServer/i,
    });

    expect(component).toBeInTheDocument();
  });
});

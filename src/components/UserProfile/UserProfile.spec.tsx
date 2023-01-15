import { UserProfile } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  return render(<UserProfile />);
}

describe("<UserProfile />", () => {
  it("should render the component", () => {
    renderTemplate();

    const component = screen.getByRole("heading", {
      name: /UserProfile/i,
    });

    expect(component).toBeInTheDocument();
  });
});

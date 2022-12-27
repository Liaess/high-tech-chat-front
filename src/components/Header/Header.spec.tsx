import { Header } from ".";
import { render, screen } from "@testing-library/react";

function renderTemplate() {
  render(<Header />);
}

describe("<Header />", () => {
  it.todo("should render the component", () => {
    renderTemplate();
  });
});

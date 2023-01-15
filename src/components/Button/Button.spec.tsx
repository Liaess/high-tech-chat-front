import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from ".";

function renderComponent(childen = "Children", props?: ButtonProps) {
  return {
    user: userEvent.setup(),
    ...render(<Button {...props}>{childen}</Button>),
  };
}

const clickEvent = jest.fn();

describe("<Button />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    renderComponent();

    const label = screen.getByText("Children");

    expect(label).toBeInTheDocument();
  });

  it("should perform action on click", async () => {
    const { user } = renderComponent("", { onClick: clickEvent });

    const button = screen.getByRole("button");
    await user.click(button);

    expect(clickEvent).toBeCalledTimes(1);
  });

  it("should be disabled", () => {
    renderComponent("", { isLoading: true });

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should not allow clickEvent on disabled button", async () => {
    const { user } = renderComponent("", {
      onClick: clickEvent,
      isLoading: true,
    });

    const button = screen.getByRole("button");

    await user.click(button);

    expect(clickEvent).toBeCalledTimes(0);
  });

  it("should render three dots when loading prop is true", () => {
    renderComponent("", {
      isLoading: true,
    });

    const dots = screen.getByTestId("three-dots-loading");

    expect(dots).toBeInTheDocument();
  });
});

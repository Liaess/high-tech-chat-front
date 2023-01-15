import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input, InputProps } from ".";

function renderComponent(props: InputProps) {
  return {
    user: userEvent.setup(),
    ...render(
      <form>
        <Input {...props} />
      </form>
    ),
  };
}

const mockOnChange = jest.fn();

describe("<Input />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component", () => {
    renderComponent({
      label: "Login",
      isDisabled: false,
      handleChange: mockOnChange,
    });
    const label = screen.getByText("Login");

    expect(label).toBeInTheDocument();
  });

  it("should perform action on change", async () => {
    const { user } = renderComponent({
      label: "Login",
      isDisabled: false,
      handleChange: mockOnChange,
    });

    const input = screen.getByRole("textbox");
    await user.type(input, "test");

    expect(mockOnChange).toBeCalledTimes(4);
  });

  it("should be disabled", () => {
    renderComponent({
      label: "Login",
      isDisabled: true,
      handleChange: mockOnChange,
    });

    const input = screen.getByRole("textbox");

    expect(input).toBeDisabled();
  });

  it("should not allow change on disabled input", async () => {
    const { user } = renderComponent({
      label: "Login",
      isDisabled: true,
      handleChange: mockOnChange,
    });

    const input = screen.getByRole("textbox");

    await user.type(input, "test");

    expect(mockOnChange).toBeCalledTimes(0);
  });

  it("should have additional class when passed as props", () => {
    renderComponent({
      label: "Login",
      isDisabled: false,
      handleChange: mockOnChange,
      className: "bg-red-500",
    });

    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("bg-red-500");
  });
});

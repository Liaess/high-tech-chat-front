import { useIcons, iconsList } from ".";
import { renderHook } from "@testing-library/react";
import { cloneElement, isValidElement } from "react";

describe("useIcons", () => {
  it("should return the chosen icon", () => {
    const firstIcon = iconsList[0];
    const { result } = renderHook(() => useIcons(firstIcon.name));

    const isValid = isValidElement(result.current);
    const iconWithClass = cloneElement(result.current, {
      className: "text-light-gray mx-1",
    });

    expect(isValid).toBeTruthy();
    expect(result.current).toEqual(iconWithClass);
  });

  it("should return the default icon", () => {
    const { result } = renderHook(() => useIcons(""));

    const iconWithClass = cloneElement(result.current, {
      className: "text-light-gray mx-1",
    });

    expect(result.current).toEqual(iconWithClass);
  });

  it("should return the chosen icon with chosen className", () => {
    const firstIcon = iconsList[0];
    const { result } = renderHook(() =>
      useIcons(firstIcon.name, "text-light-gray")
    );

    expect(result.current.props.className).toEqual("text-light-gray");
  });
});
